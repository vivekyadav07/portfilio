<template>
  <div class="ask-ai">
    <h1>Ask Vivek's AI 🤖</h1>

    <div class="chat-box">
      <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender]">
        <div class="message-bubble">
          <strong>{{ message.sender }}:</strong>
          <p>{{ message.text }}</p>
        </div>
      </div>
    </div>

    <div class="input-area">
      <input
        v-model="userInput"
        @keyup.enter="sendMessage"
        placeholder="Ask me anything..."
        class="chat-input"
      />
      <button @click="sendMessage" class="send-button">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AskAI',
  data() {
    return {
      userInput: '',
      messages: [
        { sender: 'AI', text: 'Hello! I am here to help. Ask me anything!' },
        { sender: 'AI', text: 'I can provide answers, fun facts, and more.' },
      ],
    }
  },
  methods: {
    async sendMessage() {
      if (!this.userInput.trim()) return

      // Add user message to messages
      this.messages.push({ sender: 'You', text: this.userInput })

      try {
        const response = await fetch(
          'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${import.meta.env.VITE_HUGGINGFACE_API_KEY}`,
            },
            body: JSON.stringify({
              inputs: this.userInput,
            }),
          },
        )

        const data = await response.json()
        const aiReply =
          data.generated_text || (data[0] && data[0].generated_text) || 'Sorry, no reply.'

        this.messages.push({ sender: 'AI', text: aiReply })
      } catch (error) {
        console.error('Error talking to AI:', error)
        this.messages.push({ sender: 'AI', text: 'Error communicating with AI.' })
      }

      this.userInput = ''
    },
  },
}
</script>

<style scoped>
.ask-ai {
  max-width: 700px;
  margin: 50px auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 12px;
  color: #333;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

.chat-box {
  background: #e9e9e9;
  padding: 20px;
  border-radius: 12px;
  height: 450px;
  overflow-y: auto;
  margin-bottom: 20px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
}

.message {
  display: flex;
  margin-bottom: 15px;
  justify-content: flex-start;
}

.message-bubble {
  max-width: 75%;
  padding: 12px;
  border-radius: 25px;
  background-color: #ff9900;
  color: white;
  font-size: 16px;
  line-height: 1.5;
}

.message.You .message-bubble {
  background-color: #1bd3b7;
  align-self: flex-end;
}

.message.AI .message-bubble {
  background-color: #ff9900;
}

.input-area {
  display: flex;
  gap: 10px;
}

.chat-input {
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
}

.send-button {
  background: #ffb84d;
  color: #222;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
}

.send-button:hover {
  background: #ff9900;
}

.chat-box::-webkit-scrollbar {
  width: 6px;
}

.chat-box::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
}
</style>

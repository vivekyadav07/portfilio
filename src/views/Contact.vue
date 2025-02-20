<template>
  <section class="contact">
    <div class="overlay"></div>

    <div class="container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out! I'll get back to you as soon as possible.</p>

      <form @submit.prevent="sendEmail">
        <input type="text" v-model="formData.name" placeholder="Your Name" required />
        <input type="email" v-model="formData.email" placeholder="Your Email" required />
        <textarea v-model="formData.message" placeholder="Your Message" required></textarea>

        <button type="submit" :disabled="loading">
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>
      </form>

      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'

// Form Data
const formData = ref({
  name: '',
  email: '',
  message: '',
})

// UI State
const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// EmailJS Config (Replace with your actual credentials)
const SERVICE_ID = 'your_service_id'
const TEMPLATE_ID = 'your_template_id'
const USER_ID = 'your_user_id'

// Send Email Function
const sendEmail = () => {
  loading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  const templateParams = {
    from_name: formData.value.name,
    from_email: formData.value.email,
    message: formData.value.message,
  }

  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
    .then(() => {
      successMessage.value = 'Your message has been sent successfully!'
      formData.value = { name: '', email: '', message: '' }
    })
    .catch(() => {
      errorMessage.value = 'Something went wrong. Please try again!'
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<style scoped>
/* Contact Page Styling */
.contact {
  position: relative;
  text-align: center;
  color: white;
  background: url('/assets/contact.webp') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h2 {
  color: #333;
  margin-bottom: 10px;
}

p {
  color: #666;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

textarea {
  height: 100px;
}

button {
  background: #28a745;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

button:disabled {
  background: gray;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background: #218838;
}

.success-message {
  color: green;
  margin-top: 10px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>

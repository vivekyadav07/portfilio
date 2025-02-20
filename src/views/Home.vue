<template>
  <section class="home">
    <div class="overlay"></div>
    <div class="intro">
      <h1 class="name">Hi, I'm Vivek Kumar Yadav</h1>
      <p class="profession">A Passionate Developer</p>
      <p class="tagline">I build interactive web experiences.</p>
      <button class="cta-button" @click="$router.push('/projects')">Explore My Work</button>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
/* Full-Screen Section with Background Image */
.home {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: white;
  background: url('public/assets/coding-bg.webp') no-repeat center center/cover;
  overflow: hidden;
}

/* Overlay for Better Text Visibility */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Dark overlay */
  z-index: 1;
}

/* Intro Text */
.intro {
  position: relative;
  z-index: 2;
  animation: slideIn 1s ease-out;
}
.name {
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0;
}
.profession {
  font-size: 1.8rem;
  margin: 10px 0;
}
.tagline {
  font-size: 1.2rem;
  color: #f1f1f1;
  margin-bottom: 20px;
}

/* Call-to-Action Button */
.cta-button {
  padding: 10px 30px;
  border: none;
  border-radius: 50px;
  background: #4caf50;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: transform 0.3s;
}
.cta-button:hover {
  transform: scale(1.1);
}

/* Slide In Animation */
@keyframes slideIn {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

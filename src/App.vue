<template>
  <div id="app">
    <nav class="navbar">
      <!-- Portfolio Title (Left Side) -->
      <div class="portfolio-title" @click="$router.push('/')">Portfolio</div>

      <!-- Hamburger Button (Mobile) -->
      <button class="hamburger" @click="toggleMenu">☰</button>

      <!-- Navigation Links (Right Side) -->
      <div :class="['nav-links', { open: isMenuOpen }]">
        <router-link to="/" class="nav-button" @click="closeMenu">Home</router-link>
        <router-link to="/about" class="nav-button" @click="closeMenu">About</router-link>
        <router-link to="/projects" class="nav-button" @click="closeMenu">Projects</router-link>
        <router-link to="/contact" class="nav-button" @click="closeMenu">Contact</router-link>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
/* General Styles */
#app {
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

/* Navigation Bar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #222;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1000;
}

/* Portfolio Title (Left Side) */
.portfolio-title {
  font-size: 24px;
  font-weight: bold;
  color: #ffb84d;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

/* Hover effect for Portfolio Title */
.portfolio-title:hover {
  transform: scale(1.1);
  color: #ff9900;
}

/* Navigation Links (Right Side) */
.nav-links {
  display: flex;
  gap: 15px;
}

/* Navigation Buttons */
.nav-button {
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 16px;
  color: white;
  background: #444;
  transition:
    background 0.3s ease-in-out,
    transform 0.2s;
}

/* Hover Effect */
.nav-button:hover {
  background: #ffb84d;
  color: #222;
  transform: translateY(-3px);
}

/* Active Link */
.router-link-active {
  background: #ff9900;
  color: #fff;
}

/* Hamburger Menu Button (Mobile Only) */
.hamburger {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

/* Mobile Styles */
@media (max-width: 768px) {
  /* Show Hamburger Button */
  .hamburger {
    display: block;
  }

  /* Hide Navigation Links by Default */
  .nav-links {
    display: none;
    flex-direction: column;
    background: #222;
    position: absolute;
    top: 60px;
    right: 0;
    left: 0;
    padding: 15px 28px;
    text-align: center;
    transition: max-height 0.3s ease-in-out;
  }

  /* Show Menu when Open */
  .nav-links.open {
    display: flex;
  }

  /* Style for Mobile Menu Items */
  .nav-button {
    padding: 12px;
    width: 100%;
    text-align: center;
  }
}
</style>

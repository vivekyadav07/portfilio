<template>
  <section class="projects">
    <div class="overlay"></div>

    <div class="container">
      <h2>My Projects</h2>
      <p>Here are some of my works showcasing my skills and creativity.</p>

      <div class="grid">
        <div
          v-for="project in projects"
          :key="project.id"
          class="card"
          @click="openProject(project.link)"
        >
          <div class="card-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Project Data
const projects = ref([
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio built with Vue.js and TypeScript.',
    link: 'https://your-portfolio-link.com',
  },
  {
    id: 2,
    title: 'E-Commerce Store',
    description: 'An online store with a fully functional shopping cart.',
    link: 'https://your-store-link.com',
  },
  {
    id: 3,
    title: 'Task Manager App',
    description: 'A simple task manager with drag-and-drop features.',
    link: 'https://your-task-manager-link.com',
  },
])

// Open Project Link
const openProject = (link: string) => {
  window.open(link, '_blank')
}
</script>

<style scoped>
/* Project Page Styling */
.projects {
  position: relative;
  text-align: center;
  color: white;
  background: url('/assets/project.webp') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  max-width: 800px;
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

/* Card Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

/* Card Styling */
.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  cursor: pointer;
}

.card-content h3 {
  color: #333;
  margin-bottom: 5px;
}

.card-content p {
  color: #666;
  font-size: 14px;
}

/* Hover Effects */
.card:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>

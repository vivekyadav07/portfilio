<template>
  <div class="about-container">
    <h1 class="title">About Me</h1>

    <!-- Description -->
    <p class="description">
      I'm a <span class="highlight">Passionate Developer</span>. I build interactive web
      experiences. Below are my skills and my resume.
    </p>

    <!-- Resume Button -->
    <a href="/assets/resume.pdf" target="_blank" class="resume-btn"> 📄 View My Resume </a>

    <!-- Skills Section -->
    <div class="skills-section">
      <h2 class="skills-title">My Skills</h2>

      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-card">
          <h3 class="skill-name">{{ skill.name }}</h3>
          <div class="skill-meter">
            <div class="skill-fill" :style="{ width: skill.percentage + '%' }">
              {{ skill.percentage }}%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'Vue.js', percentage: 95 },
  { name: 'Java', percentage: 90 },
  { name: 'C++', percentage: 90 },
  { name: 'DSA', percentage: 80 },
  { name: 'Spring', percentage: 50 },
  { name: 'HTML & CSS', percentage: 80 },
])
</script>

<style scoped>
/* Background */
.about-container {
  background: url('/assets/about.webp') no-repeat center center/cover;

  min-height: 100vh;
  padding: 40px;
  color: white;
  text-align: center;
}

/* Title */
.title {
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 30px;
}

/* Description */
.description {
  font-size: 1.2rem;
  max-width: 600px;
  background: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 10px;
  line-height: 1.6;
  margin: auto;
}

.highlight {
  color: #ff9800;
  font-weight: bold;
}

/* Resume Button */
.resume-btn {
  display: inline-block;
  margin: 20px 0;
  padding: 10px 20px;
  background: linear-gradient(45deg, #ff9800, #ff5722);
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
}

.resume-btn:hover {
  background: linear-gradient(45deg, #ff5722, #ff9800);
  transform: scale(1.05);
}

/* Skills Section */
.skills-section {
  max-width: 900px;
  margin: 30px auto;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
}

/* Skills Title */
.skills-title {
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: bold;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* Skill Card */
.skill-card {
  background: rgba(0, 0, 0, 0.7);
  padding: 15px;
  border-radius: 10px;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s;
}

.skill-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(255, 152, 0, 0.3);
}

/* Skill Name */
.skill-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Skill Meter */
.skill-meter {
  width: 100%;
  background: #444;
  height: 25px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

/* Skill Fill Animation */
.skill-fill {
  height: 100%;
  background: linear-gradient(45deg, #ff9800, #ff5722);
  color: white;
  text-align: right;
  padding-right: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 10px;
  transition: width 1.5s ease-in-out;
}
</style>

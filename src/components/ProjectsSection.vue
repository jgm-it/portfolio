<script setup>
import SectionHeading from './SectionHeading.vue'
import { projects } from '../data/portfolio.js'
</script>

<template>
  <section id="projects" class="content-section page-shell" aria-labelledby="projects-title">
    <SectionHeading
      id="projects-title"
      number="05"
      label="Hands-on practice"
      title="Technical lab experience"
    />
    <div class="projects-grid">
      <article v-for="(project, index) in projects" :key="project.title" class="project-item">
        <div class="project-topline">
          <span class="project-number">0{{ index + 1 }}</span>
          <span class="project-category">{{ project.category }}</span>
          <span class="project-mark" aria-hidden="true">↗</span>
        </div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <ul class="tag-list" aria-label="Technologies">
          <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>
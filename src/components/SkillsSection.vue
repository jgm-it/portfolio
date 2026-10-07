<script setup>
import SectionHeading from './SectionHeading.vue'
import { skillGroups } from '../data/portfolio.js'
</script>

<template>
  <section id="skills" class="content-section page-shell" aria-labelledby="skills-title">
    <SectionHeading
      id="skills-title"
      number="02"
      label="What I work with"
      title="Technical skills"
    />
    <div class="skills-grid">
      <article v-for="group in skillGroups" :key="group.title" class="skill-group">
        <h3>{{ group.title }}</h3>
        <ul>
          <li v-for="skill in group.skills" :key="skill">{{ skill }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>
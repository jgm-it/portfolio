<script setup>
import SectionHeading from './SectionHeading.vue'
import { experience } from '../data/portfolio.js'
</script>

<template>
  <section id="experience" class="content-section page-shell" aria-labelledby="experience-title">
    <SectionHeading
      id="experience-title"
      number="03"
      label="Where I’ve been"
      title="Work experience"
    />
    <ol class="experience-list">
      <li v-for="item in experience" :key="item.role" class="experience-item">
        <p class="experience-dates">{{ item.dates }}</p>
        <div class="experience-details">
          <h3>{{ item.role }}</h3>
          <p class="experience-organization">{{ item.organization }}</p>
          <p class="experience-description">{{ item.description }}</p>
          <ul class="experience-highlights">
            <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue'
import { education } from '../data/portfolio.js'
</script>

<template>
  <section id="education" class="content-section page-shell" aria-labelledby="education-title">
    <SectionHeading
      id="education-title"
      number="04"
      label="Education"
      title="Academic background"
    />
    <div class="education-list">
      <article v-for="item in education" :key="item.institution" class="education-item">
        <h3>{{ item.qualification }}</h3>
        <p>{{ item.institution }}</p>
        <p class="education-dates">{{ item.dates }}</p>
        <p class="education-distinction">{{ item.distinction }}</p>
      </article>
    </div>
  </section>
</template>

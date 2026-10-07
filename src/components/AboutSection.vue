<script setup>
import SectionHeading from './SectionHeading.vue'

defineProps({
  about: { type: String, required: true },
})
</script>

<template>
  <section id="about" class="content-section page-shell" aria-labelledby="about-title">
    <SectionHeading id="about-title" number="01" label="A little about me" title="About" />
    <div class="about-copy">
      <p>{{ about }}</p>
    </div>
  </section>
</template>
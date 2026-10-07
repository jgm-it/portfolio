<script setup>
import SectionHeading from './SectionHeading.vue'

defineProps({
  contact: { type: Array, required: true },
})
</script>

<template>
  <section id="contact" class="contact-section" aria-labelledby="contact-title">
    <div class="page-shell contact-inner">
      <SectionHeading
        id="contact-title"
        number="06"
        label="Start a conversation"
        title="Contact"
      />
      <p class="contact-intro">For professional inquiries, please use the contact information below. References are available upon request during the hiring process.</p>
      <address class="contact-list">
        <div v-for="item in contact" :key="item.label" class="contact-item">
          <span>{{ item.label }}</span>
          <p>{{ item.value }}</p>
        </div>
      </address>
    </div>
  </section>
</template>
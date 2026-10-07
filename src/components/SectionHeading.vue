<script setup>
defineProps({
  id: { type: String, required: true },
  number: { type: String, required: true },
  label: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <div class="section-heading">
    <p class="section-kicker"><span>{{ number }}</span> {{ label }}</p>
    <h2 :id="id">{{ title }}</h2>
  </div>
</template>
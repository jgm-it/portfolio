<script setup>
import { ref } from 'vue'

defineProps({
  name: { type: String, required: true },
  navigation: { type: Array, required: true },
})

const menuOpen = ref(false)
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <a class="wordmark" href="#home" @click="menuOpen = false">
        <span class="wordmark-mark" aria-hidden="true">/</span>{{ name }}
      </a>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="primary-navigation"
        :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
      </button>

      <nav
        id="primary-navigation"
        class="primary-navigation"
        :class="{ 'is-open': menuOpen }"
        aria-label="Main navigation"
      >
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
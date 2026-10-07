<script setup>
defineProps({
  profile: { type: Object, required: true },
})
</script>

<template>
  <section id="home" class="hero page-shell" aria-labelledby="hero-title">
    <div class="hero-copy">
      <p class="eyebrow"><span class="eyebrow-line"></span> CLOUD SUPPORT PORTFOLIO</p>
      <h1 id="hero-title">Hi, I’m <span>{{ profile.name }}.</span></h1>
      <p class="hero-role">{{ profile.title }}</p>
      <p class="hero-introduction">{{ profile.introduction }}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="#projects">Explore projects <span aria-hidden="true">↗</span></a>
        <a class="button button-quiet" href="#contact">Get in touch</a>
      </div>
    </div>

    <aside class="focus-panel" aria-label="Areas of interest">
      <div class="focus-panel-top">
        <span class="panel-label">CORE STRENGTHS</span>
        <span class="panel-index">01 / 03</span>
      </div>
      <div class="profile-photo">
        <img
          v-if="profile.photo"
          :src="profile.photo"
          :alt="`Portrait of ${profile.name}`"
        />
        <template v-else>
          <span class="photo-placeholder-label">YOUR PHOTO</span>
          <span class="photo-placeholder-hint">Place an image in public/ and set profile.photo in src/data/portfolio.js</span>
        </template>
      </div>
      <ul class="focus-list">
        <li v-for="(area, index) in profile.focusAreas" :key="area">
          <span class="focus-number">0{{ index + 1 }}</span>
          <span>{{ area }}</span>
          <span class="focus-arrow" aria-hidden="true">↗</span>
        </li>
      </ul>
      <p class="panel-footnote">1,000+ support tickets resolved</p>
    </aside>
  </section>
</template>
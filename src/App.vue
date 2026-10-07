<script setup>
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import EducationSection from './components/EducationSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SiteHeader from './components/SiteHeader.vue'
import SkillsSection from './components/SkillsSection.vue'
import { navigation, profile } from './data/portfolio.js'

const currentYear = new Date().getFullYear()
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <SiteHeader :name="profile.name" :navigation="navigation" />

  <main id="main-content">
    <HeroSection :profile="profile" />
    <AboutSection :about="profile.about" />
    <SkillsSection />
    <ExperienceSection />
    <EducationSection />
    <ProjectsSection />
    <ContactSection :contact="profile.contact" />
  </main>

  <footer class="site-footer">
    <a class="footer-name" href="#home">{{ profile.name }}</a>
    <p>Personal portfolio · {{ currentYear }}</p>
    <a class="back-to-top" href="#home">Back to top <span aria-hidden="true">↑</span></a>
  </footer>
</template>
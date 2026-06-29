<template>
  <NavBar />
  <HeroSection />
  <KontaktSection />
  <ProjektSection />
  <TeamSection />
  <CtaSection />
  <FooterSection />
  <ExitButton />
</template>

<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import KontaktSection from './components/KontaktSection.vue'
import ProjektSection from './components/ProjektSection.vue'
import TeamSection from './components/TeamSection.vue'
import CtaSection from './components/CtaSection.vue'
import FooterSection from './components/FooterSection.vue'
import ExitButton from './components/ExitButton.vue'

const { locale } = useI18n()

watch(locale, (lang) => {
  document.documentElement.setAttribute('lang', lang)
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl')
  } else {
    document.documentElement.removeAttribute('dir')
  }
  localStorage.setItem('ichau-lang', lang)
}, { immediate: true })
</script>

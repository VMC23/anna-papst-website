<template>
  <nav class="nav" id="nav">
    <div class="nav-inner">
      <a href="#start" class="nav-logo" @click.prevent="scrollTo('start')">Ich au</a>
      <button class="nav-toggle" :class="{ active: menuOpen }" aria-label="Menü öffnen" @click="menuOpen = !menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links" :class="{ open: menuOpen }">
        <li><a href="#start" @click.prevent="scrollTo('start')">{{ $t('nav.start') }}</a></li>
        <li><a href="#kontakt" @click.prevent="scrollTo('kontakt')">{{ $t('nav.kontakt') }}</a></li>
        <li><a href="#projekt" @click.prevent="scrollTo('projekt')">{{ $t('nav.hintergrund') }}</a></li>
        <li><a href="#team" @click.prevent="scrollTo('team')">{{ $t('nav.team') }}</a></li>
        <li class="nav-lang">
          <div class="lang-switcher">
            <button class="lang-btn" @click.stop="langOpen = !langOpen" aria-label="Sprache wählen">
              {{ currentLangLabel }} <span class="lang-arrow">&#9662;</span>
            </button>
            <ul class="lang-dropdown" :class="{ open: langOpen }">
              <li v-for="lang in languages" :key="lang.code">
                <a href="#" :class="{ 'lang-active': locale === lang.code }" @click.prevent="switchLang(lang.code)">{{ lang.name }}</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const menuOpen = ref(false)
const langOpen = ref(false)

const languages = [
  { code: 'de', name: 'Deutsch', label: 'DE' },
  { code: 'fr', name: 'Français', label: 'FR' },
  { code: 'en', name: 'English', label: 'EN' },
  { code: 'ar', name: 'العربية', label: 'AR' },
  { code: 'tr', name: 'Türkçe', label: 'TR' },
  { code: 'it', name: 'Italiano', label: 'IT' }
]

const currentLangLabel = computed(() => {
  const lang = languages.find(l => l.code === locale.value)
  return lang ? lang.label : 'DE'
})

function switchLang(code) {
  locale.value = code
  langOpen.value = false
  menuOpen.value = false
}

function scrollTo(id) {
  menuOpen.value = false
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 70
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function closeDropdown() {
  langOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<template>
  <section class="hero" id="start">
    <div class="hero-content">
      <div class="hero-top">
        <h1 class="hero-title" v-html="$t('hero.title', { br: '<br>' })"></h1>
        <p class="hero-intro">{{ $t('hero.intro') }}</p>
        <a href="#kontakt" class="btn" @click.prevent="scrollTo('kontakt')">{{ $t('hero.btn') }}</a>
        <div class="hero-notice">
          <p>{{ $t('hero.notice') }}<br>
            <a href="https://telefon-gegen-gewalt.ch/" target="_blank" rel="noopener">{{ $t('hero.noticeLink') }} &rarr;</a>
          </p>
        </div>
      </div>
      <div class="hero-below-text">
        <p>{{ $t('hero.text1') }}</p>
        <p>{{ $t('hero.text2') }}</p>
        <p class="hero-dialect"><em>{{ $t('hero.dialect') }}</em></p>
      </div>
      <div class="hero-illustration">
        <img src="/img/AP_illustration_oh1.webp" alt="Illustration: Diverse Gruppe von Menschen in einem Herz">
        <span class="illu-credit">Illustration: Pia Valär</span>
      </div>
      <p class="hero-anonym">{{ $t('hero.anonym') }}</p>
    </div>
  </section>
</template>

<script setup>
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 70
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

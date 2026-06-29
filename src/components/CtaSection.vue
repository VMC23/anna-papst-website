<template>
  <section class="section section-cta">
    <div class="container">
      <a href="#kontakt" class="btn" @click.prevent="scrollTo('kontakt')">{{ $t('cta.btn') }}</a>
      <p class="back-to-top"><a href="#start" @click.prevent="scrollTo('start')">&uarr; {{ $t('cta.backtotop') }}</a></p>
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

<template>
  <section class="section section-projekt" id="projekt">
    <div class="container">
      <button class="accordion-toggle" :class="{ active: open }" @click="open = !open">
        <span class="section-label">{{ $t('projekt.label') }}</span>
        <span class="accordion-title"><span>{{ $t('projekt.title') }}</span> <span class="accordion-icon">+</span></span>
      </button>
      <div class="accordion-content" :class="{ open }">
        <div class="projekt-content">
          <div class="projekt-text">
            <p>{{ $t('projekt.text1') }}</p>
            <p>{{ $t('projekt.text2') }}</p>
            <p>{{ $t('projekt.text3') }}</p>
            <img class="projekt-figur-img" src="/img/AP_figur3.webp" alt="" loading="lazy">
            <span class="projekt-figur-credit">Illustration: Pia Valär</span>
          </div>
          <div class="projekt-details">
            <div class="detail-card">
              <h3>{{ $t('projekt.card1.title') }}</h3>
              <p>{{ $t('projekt.card1.text1') }}</p>
              <p>{{ $t('projekt.card1.text2') }}</p>
            </div>
            <div class="detail-card">
              <h3>{{ $t('projekt.card2.title') }}</h3>
              <p>{{ $t('projekt.card2.text1') }}</p>
              <p>{{ $t('projekt.card2.text2') }}</p>
            </div>
            <div class="detail-card">
              <h3>{{ $t('projekt.card3.title') }}</h3>
              <p>{{ $t('projekt.card3.text1') }}</p>
              <p>{{ $t('projekt.card3.text2') }}</p>
            </div>
            <div class="detail-card">
              <h3>{{ $t('projekt.card4.title') }}</h3>
              <p>{{ $t('projekt.card4.text1') }}</p>
              <p v-html="$t('projekt.card4.text2').replace(/\|/g, '<br>')"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(true)
</script>

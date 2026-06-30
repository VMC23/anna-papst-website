<template>
  <section class="section section-kontakt" id="kontakt">
    <div class="container">
      <div class="kontakt-wrapper">
        <div class="kontakt-intro">
          <span class="section-label">{{ $t('kontakt.label') }}</span>
          <h2 class="section-title">{{ $t('kontakt.title') }}</h2>
          <p>{{ $t('kontakt.intro') }}</p>
          <div class="kontakt-channels">
            <p><strong>{{ $t('kontakt.telefon') }}</strong> <a href="tel:+41797572284">079 757 22 84</a></p>
            <p><strong>{{ $t('kontakt.email') }}</strong> <a href="mailto:kontakt@ichau.net">kontakt@ichau.net</a></p>
            <p><strong>{{ $t('kontakt.instagram') }}</strong> <a href="https://www.instagram.com/ichau.ichau" target="_blank" rel="noopener">@ichau.ichau</a></p>
          </div>
          <p>{{ $t('kontakt.form.intro') }}</p>
          <p class="signature"><em>Anna &amp; Natania</em></p>
        </div>
        <form class="kontakt-form" @submit.prevent="submitForm" action="https://formsubmit.co/kontakt@ichau.net" method="POST">
          <input type="hidden" name="_subject" value="Neue Kontaktanfrage über ichau.net">
          <input type="hidden" name="_captcha" value="false">
          <input type="hidden" name="_template" value="table">
          <input type="text" name="_honey" style="display:none">
          <div class="form-group">
            <label for="name">{{ $t('kontakt.form.name') }}</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">{{ $t('kontakt.form.email') }}</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="nachricht">{{ $t('kontakt.form.nachricht') }} <span class="label-hint">{{ $t('kontakt.form.nachrichtHint') }}</span></label>
            <textarea id="nachricht" name="nachricht" maxlength="750" rows="6" v-model="nachricht"></textarea>
            <div class="char-count">{{ nachricht.length }} / 750</div>
          </div>
          <div class="form-group form-checkbox">
            <input type="checkbox" id="datenschutz" name="datenschutz" required>
            <label for="datenschutz">
              {{ datenschutzBefore }}<a href="#datenschutz-page" @click.prevent="scrollTo('datenschutz-page')">{{ $t('kontakt.form.datenschutzLink') }}</a>{{ datenschutzAfter }}
            </label>
          </div>
          <div ref="turnstileEl" class="turnstile-wrapper"></div>
          <button type="submit" class="btn btn-submit" :disabled="!turnstileToken || submitting">{{ submitting ? '...' : $t('kontakt.form.submit') }}</button>
          <div class="form-success" :class="{ visible: submitted }">
            <p>{{ $t('kontakt.form.success') }}</p>
          </div>
          <div class="form-success" :class="{ visible: errorMsg }" style="background: #f8d7da; color: #721c24;">
            <p>{{ errorMsg }}</p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

const TURNSTILE_SITE_KEY = '0x4AAAAAADs6c9d8xzaceqD-'

const { t } = useI18n()
const nachricht = ref('')
const submitting = ref(false)
const submitted = ref(false)
const errorMsg = ref('')
const turnstileToken = ref('')
const turnstileEl = ref(null)
let turnstileWidgetId = null

onMounted(() => {
  function renderWidget() {
    if (window.turnstile && turnstileEl.value) {
      turnstileWidgetId = window.turnstile.render(turnstileEl.value, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => { turnstileToken.value = token },
        'expired-callback': () => { turnstileToken.value = '' },
        'error-callback': () => { turnstileToken.value = '' }
      })
    }
  }

  if (window.turnstile) {
    renderWidget()
  } else {
    const interval = setInterval(() => {
      if (window.turnstile) {
        clearInterval(interval)
        renderWidget()
      }
    }, 200)
    setTimeout(() => clearInterval(interval), 10000)
  }
})

onBeforeUnmount(() => {
  if (turnstileWidgetId != null && window.turnstile) {
    window.turnstile.remove(turnstileWidgetId)
  }
})

const datenschutzBefore = computed(() => {
  const full = t('kontakt.form.datenschutz')
  const idx = full.indexOf('[link]')
  return idx >= 0 ? full.substring(0, idx) : full
})

const datenschutzAfter = computed(() => {
  const full = t('kontakt.form.datenschutz')
  const idx = full.indexOf('[link]')
  return idx >= 0 ? full.substring(idx + 6) : ''
})

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 70
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

async function submitForm(e) {
  submitting.value = true
  errorMsg.value = ''
  const form = e.target
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
    if (res.ok) {
      submitted.value = true
      form.reset()
      nachricht.value = ''
      turnstileToken.value = ''
      if (turnstileWidgetId != null && window.turnstile) {
        window.turnstile.reset(turnstileWidgetId)
      }
    } else {
      errorMsg.value = `Fehler beim Senden (${res.status}). Bitte versuche es später erneut.`
    }
  } catch (err) {
    errorMsg.value = 'Verbindungsfehler. Auf localhost funktioniert FormSubmit.co nicht — erst nach dem Deployment.'
  }
  submitting.value = false
}
</script>

<template>
  <section class="section section-team" id="team">
    <div class="container">
      <button class="accordion-toggle" :class="{ active: open }" @click="open = !open">
        <span class="section-label">{{ $t('team.label') }}</span>
        <span class="accordion-title"><span>{{ $t('team.title') }}</span> <span class="accordion-icon">+</span></span>
      </button>
      <div class="accordion-content" :class="{ open }">
        <div class="team-grid">
          <div class="team-group">
            <h3>{{ $t('team.group.leitung') }}</h3>
            <div class="team-member">
              <p class="member-name">Anna Papst</p>
              <p class="member-role">{{ $t('team.role.regie') }}</p>
            </div>
          </div>
          <div class="team-group team-figur">
            <img src="/img/AP_figur2.png" alt="" loading="lazy">
            <span class="illu-credit">Illustration: Pia Valär</span>
          </div>
          <div class="team-group">
            <h3>{{ $t('team.group.dramaturgie') }}</h3>
            <div class="team-member">
              <p class="member-name">Natania Prezant</p>
              <p class="member-role">{{ $t('team.role.dramaturgie') }}</p>
            </div>
            <div class="team-member">
              <p class="member-name">Fadrina Arpagaus</p>
              <p class="member-role">{{ $t('team.role.textentwicklung') }}</p>
            </div>
          </div>
          <div class="team-group team-figur">
            <img src="/img/AP_figur4.webp" alt="" loading="lazy">
            <span class="illu-credit">Illustration: Pia Valär</span>
          </div>
          <div class="team-group">
            <h3>{{ $t('team.group.buehne') }}</h3>
            <div class="team-member">
              <p class="member-name">Julia Urech</p>
              <p class="member-role">{{ $t('team.role.buehne') }}</p>
            </div>
            <div class="team-member">
              <p class="member-name">Zoé Brandenberg</p>
              <p class="member-role">{{ $t('team.role.kostueme') }}</p>
            </div>
            <div class="team-member">
              <p class="member-name">Christine Hasler</p>
              <p class="member-role">{{ $t('team.role.musik') }}</p>
            </div>
          </div>
          <div class="team-group">
            <h3>{{ $t('team.group.ensemble') }}</h3>
            <div class="team-member"><p class="member-name">Vera Bommer</p></div>
            <div class="team-member"><p class="member-name">Luisa Wolf</p></div>
            <div class="team-member"><p class="member-name">Beren Tuna</p></div>
            <div class="team-member"><p class="member-name">Suly Röthlisberger</p></div>
          </div>
          <div class="team-group">
            <h3>{{ $t('team.group.produktion') }}</h3>
            <div class="team-member">
              <p class="member-name">Lara Anderegg &amp; Fiammina Catti</p>
              <p class="member-role">{{ $t('team.role.produktionsleitung') }}</p>
            </div>
            <div class="team-member">
              <p class="member-name">Jana Avanzini</p>
              <p class="member-role">{{ $t('team.role.media') }}</p>
            </div>
            <div class="team-member">
              <p class="member-name">sogar Theater</p>
              <p class="member-role">{{ $t('team.role.koproduktion') }}</p>
            </div>
            <div class="team-member">
              <p class="member-name">Pia Valär</p>
              <p class="member-role">{{ $t('team.role.illustrationen') }}</p>
            </div>
            <div class="team-member">
              <p class="member-name">Valentin:e Brasser</p>
              <p class="member-role">{{ $t('team.role.website') }}</p>
            </div>
          </div>
          <div class="team-group">
            <h3>{{ $t('team.group.sounding') }}</h3>
            <div class="team-member">
              <p class="member-name">Lucia Tozzi</p>
              <p class="member-role-org">medica mondiale</p>
            </div>
            <div class="team-member">
              <p class="member-name">Anja Derungs</p>
              <p class="member-role-org">Stiftung Frauenhaus Zürich</p>
            </div>
          </div>
          <div class="team-group team-figur">
            <img src="/img/AP_figur5.webp" alt="" loading="lazy">
            <span class="illu-credit">Illustration: Pia Valär</span>
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

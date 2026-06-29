<template>
  <footer class="footer" id="datenschutz-page">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>{{ $t('footer.impressum') }}</h4>
          <p>Ich au<br>c/o zeitgeschehen e.v.<br>Zürich, Schweiz</p>
          <p><a href="mailto:kontakt@ichau.net">kontakt@ichau.net</a></p>
        </div>
        <div class="footer-col">
          <h4>{{ $t('footer.datenschutz') }}</h4>
          <p>{{ $t('footer.datenschutzText1') }}</p>
          <p>{{ $t('footer.datenschutzText2') }}</p>
          <p>{{ $t('footer.datenschutzText3') }}</p>
        </div>
        <div class="footer-col">
          <h4>{{ $t('footer.hilfe') }}</h4>
          <p><a href="https://telefon-gegen-gewalt.ch/" target="_blank" rel="noopener">Telefon gegen Gewalt</a></p>
          <p><a href="https://www.143.ch/" target="_blank" rel="noopener">Die Dargebotene Hand: 143</a></p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Website: <a href="https://valentime.space" target="_blank" rel="noopener">Valentin:e Brasser</a></p>
        <p>{{ $t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

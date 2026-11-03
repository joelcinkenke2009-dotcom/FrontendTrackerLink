<template>
  <main class="content-page">
    <header class="page-hero">
      <span class="eyebrow">ADPULSE · VOTRE SUIVI DE LIENS</span>
      <h1>Les outils essentiels pour <span>comprendre votre trafic.</span></h1>
      <p>AdPulse vous aide à créer des liens de suivi, à piloter leurs destinations et à consulter les données de clics disponibles depuis un espace centralisé.</p>
      <RouterLink to="/inscription" class="primary-button">Découvrir mon tableau de bord →</RouterLink>
    </header>

    <section class="feature-grid">
      <article class="feature-card"><div class="feature-icon">🔗</div><span class="feature-tag">CRÉATION</span><h2>Liens de suivi dédiés</h2><p>Créez un lien AdPulse à partir de votre URL de destination. Utilisez des liens distincts pour identifier les sources de trafic que vous souhaitez comparer.</p></article>
      <article class="feature-card"><div class="feature-icon">↗</div><span class="feature-tag">REDIRECTION</span><h2>Destination modifiable</h2><p>Lorsque la fonctionnalité est disponible pour votre lien, ajustez sa destination depuis votre espace sans devoir remplacer le lien de suivi déjà partagé.</p></article>
      <article class="feature-card"><div class="feature-icon">📊</div><span class="feature-tag">STATISTIQUES</span><h2>Vue d'ensemble des clics</h2><p>Consultez les volumes de clics enregistrés et les répartitions proposées dans votre tableau de bord pour suivre l'activité de vos liens.</p></article>
      <article class="feature-card"><div class="feature-icon">📱</div><span class="feature-tag">APPAREILS</span><h2>Répartition par appareil</h2><p>Lorsque les données sont disponibles, distinguez les clics provenant des appareils mobiles et des ordinateurs afin de mieux comprendre les usages.</p></article>
      <article class="feature-card"><div class="feature-icon">🛡️</div><span class="feature-tag">QUALITÉ DES DONNÉES</span><h2>Signaux de trafic inhabituel</h2><p>Des règles d'analyse peuvent aider à repérer des comportements automatisés ou répétitifs. Ces signaux doivent être interprétés comme des indices, et non comme une identification certaine.</p></article>
      <article class="feature-card"><div class="feature-icon">🧭</div><span class="feature-tag">PILOTAGE</span><h2>Un espace centralisé</h2><p>Retrouvez vos liens et les informations associées dans une interface conçue pour faciliter le suivi quotidien de vos campagnes et publications.</p></article>
    </section>

    <section class="info-panel"><div><span class="eyebrow">UNE MESURE PLUS CLAIRE</span><h2>Les clics sont un point de départ, pas le résultat final.</h2><p>AdPulse mesure l'activité de vos liens. Pour évaluer les ventes, les inscriptions ou les demandes commerciales, associez ces données à vos outils de conversion et à vos résultats réels.</p></div><RouterLink to="/guideTraqueur" class="secondary-button">Consulter le guide d'utilisation →</RouterLink></section>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.content-page{max-width:1080px;margin:0 auto;padding:56px 22px 72px;color:#e8eefb;font-family:Inter,system-ui,sans-serif}.page-hero{text-align:center;max-width:780px;margin:0 auto 48px}.eyebrow,.feature-tag{font-size:10px;letter-spacing:.16em;font-weight:800;color:#78a9ff}.page-hero h1{font-size:clamp(34px,5vw,54px);line-height:1.08;letter-spacing:-.04em;margin:18px 0;color:#f8fafc}.page-hero h1 span{color:#75a7ff}.page-hero>p{max-width:680px;margin:0 auto 25px;color:#aab8cf;font-size:17px;line-height:1.75}.primary-button,.secondary-button{display:inline-flex;align-items:center;gap:10px;text-decoration:none;padding:13px 19px;border-radius:12px;font-weight:750}.primary-button{background:#2563eb;color:white}.feature-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.feature-card{padding:24px;border-radius:18px;border:1px solid #263650;background:linear-gradient(145deg,#111f34,#0d1728)}.feature-icon{font-size:27px;margin-bottom:18px}.feature-tag{display:block;font-size:9px}.feature-card h2{font-size:19px;color:#f8fafc;margin:9px 0}.feature-card p{font-size:14px;line-height:1.75;color:#b2bfd2;margin:0}.info-panel{display:flex;align-items:center;justify-content:space-between;gap:24px;margin-top:24px;padding:28px;border-radius:20px;background:#142844;border:1px solid #2b4568}.info-panel h2{font-size:22px;color:#f8fafc;margin:9px 0}.info-panel p{color:#b2bfd2;line-height:1.7;margin:0;max-width:680px}.secondary-button{white-space:nowrap;border:1px solid #5278ae;color:#dce9ff}@media(max-width:850px){.feature-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:600px){.content-page{padding:36px 15px 52px}.feature-grid{grid-template-columns:1fr}.info-panel{align-items:flex-start;flex-direction:column}.secondary-button{white-space:normal}}
</style>

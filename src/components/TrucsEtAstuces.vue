<template>
  <main class="content-page">
    <header class="page-hero">
      <span class="eyebrow">RESSOURCES · CONSEILS PRATIQUES</span>
      <h1>Transformez vos clics en <span>meilleures décisions.</span></h1>
      <p>Quelques méthodes simples pour organiser vos liens, comparer vos canaux et interpréter vos statistiques avec plus de recul.</p>
    </header>

    <section class="intro-panel">
      <div class="intro-icon">✦</div>
      <div><h2>La règle de base : comparez ce qui est comparable.</h2><p>Un bon suivi ne consiste pas seulement à accumuler des clics. Il faut nommer clairement les liens, garder une méthode cohérente et rapprocher les visites de vos objectifs réels.</p></div>
    </section>

    <section class="tips-grid">
      <article class="tip-card"><span class="tip-index">CONSEIL 01</span><div class="tip-icon">🌍</div><h2>Un lien par canal</h2><p>Créez un lien distinct pour Facebook, Instagram, TikTok, WhatsApp ou chaque source que vous souhaitez comparer. Gardez la même destination lorsque vous mesurez uniquement l'origine du trafic.</p><p class="example"><strong>Exemple :</strong> <code>promo-facebook</code>, <code>promo-instagram</code>, <code>promo-whatsapp</code>.</p></article>
      <article class="tip-card"><span class="tip-index">CONSEIL 02</span><div class="tip-icon">🏷️</div><h2>Adoptez des noms explicites</h2><p>Choisissez des noms courts qui indiquent la campagne, le canal et la période. Une convention stable vous aidera à retrouver vos liens plusieurs semaines plus tard.</p><p class="example"><strong>Format :</strong> campagne-canal-mois.</p></article>
      <article class="tip-card"><span class="tip-index">CONSEIL 03</span><div class="tip-icon">🧪</div><h2>Testez avant de diffuser</h2><p>Ouvrez chaque lien sur téléphone et ordinateur. Vérifiez la page finale, les paramètres de l'URL et le comportement de redirection avant d'investir dans la diffusion.</p><p class="example"><strong>Bon réflexe :</strong> faites un test après chaque changement de destination.</p></article>
      <article class="tip-card"><span class="tip-index">CONSEIL 04</span><div class="tip-icon">📈</div><h2>Analysez les tendances</h2><p>Comparez les liens sur une période similaire et avec des conditions de diffusion proches. Une hausse des clics peut signaler un intérêt, mais ne prouve pas à elle seule une hausse des ventes.</p><p class="example"><strong>À suivre :</strong> clics, commandes, demandes reçues et coût par résultat.</p></article>
      <article class="tip-card"><span class="tip-index">CONSEIL 05</span><div class="tip-icon">📱</div><h2>Pensez à l'expérience mobile</h2><p>Une grande partie de votre audience peut découvrir vos offres depuis un téléphone. Vérifiez la vitesse d'affichage, la lisibilité et la simplicité du parcours sur petit écran.</p><p class="example"><strong>Objectif :</strong> réduire les obstacles entre le clic et l'action attendue.</p></article>
      <article class="tip-card"><span class="tip-index">CONSEIL 06</span><div class="tip-icon">🛡️</div><h2>Interprétez les visites avec prudence</h2><p>Les robots, les prévisualisations automatiques et les clics répétés peuvent influencer les statistiques. Les mécanismes de détection donnent des indices, mais aucun signal technique ne permet toujours d'identifier parfaitement une personne ou un bot.</p><p class="example"><strong>Conseil :</strong> évitez de considérer chaque clic comme un visiteur unique.</p></article>
    </section>

    <section class="checklist">
      <span class="eyebrow">AVANT DE LANCER UNE CAMPAGNE</span>
      <h2>Votre mini-checklist</h2>
      <ul><li>La destination fonctionne sur mobile et ordinateur.</li><li>Le nom du lien identifie clairement le canal.</li><li>Le lien de suivi a été testé de bout en bout.</li><li>Les indicateurs de clics ne sont pas confondus avec les ventes.</li><li>La période de comparaison est définie.</li></ul>
    </section>

    <footer class="bottom-cta"><h2>Prêt à mettre ces conseils en pratique ?</h2><p>Créez votre premier lien et commencez à observer vos sources de trafic.</p><RouterLink to="/inscription" class="primary-button">Commencer avec AdPulse →</RouterLink></footer>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.content-page{max-width:1080px;margin:0 auto;padding:56px 22px 72px;color:#e8eefb;font-family:Inter,system-ui,sans-serif}.page-hero{text-align:center;max-width:760px;margin:0 auto 42px}.eyebrow,.tip-index{font-size:11px;letter-spacing:.16em;font-weight:800;color:#78a9ff}.page-hero h1{font-size:clamp(34px,5vw,54px);line-height:1.08;letter-spacing:-.04em;margin:18px 0;color:#f8fafc}.page-hero h1 span{color:#75a7ff}.page-hero>p{color:#aab8cf;font-size:17px;line-height:1.75}.intro-panel{display:flex;gap:18px;align-items:flex-start;padding:24px;border:1px solid #2b4568;background:#142844;border-radius:18px;margin-bottom:24px}.intro-icon{width:44px;height:44px;display:grid;place-items:center;border-radius:12px;background:#203e68;color:#9cc2ff;font-size:22px;flex-shrink:0}.intro-panel h2{margin:0 0 7px;color:#f8fafc;font-size:19px}.intro-panel p{margin:0;color:#b2bfd2;line-height:1.7}.tips-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.tip-card{padding:24px;border-radius:18px;border:1px solid #263650;background:linear-gradient(145deg,#111f34,#0d1728)}.tip-index{font-size:10px}.tip-icon{font-size:25px;margin:18px 0 10px}.tip-card h2{font-size:19px;color:#f8fafc;margin:0 0 10px}.tip-card p{font-size:14px;line-height:1.7;color:#b2bfd2;margin:0 0 12px}.tip-card .example{padding-top:12px;border-top:1px solid #293b57;color:#c7d7ef}.tip-card code{color:#9cc2ff}.checklist{margin-top:24px;padding:28px;border:1px solid #263650;border-radius:18px;background:#101d30}.checklist h2{color:#f8fafc;margin:10px 0}.checklist ul{padding-left:20px;color:#b9c7da;line-height:2}.bottom-cta{text-align:center;margin-top:24px;padding:32px 20px;border-radius:20px;background:#142844;border:1px solid #2b4568}.bottom-cta h2{margin:0 0 8px;color:#f8fafc}.bottom-cta p{color:#b2bfd2;margin:0 0 20px}.primary-button{display:inline-flex;text-decoration:none;padding:13px 19px;border-radius:12px;background:#2563eb;color:white;font-weight:750}@media(max-width:700px){.content-page{padding:36px 15px 52px}.tips-grid{grid-template-columns:1fr}.intro-panel{flex-direction:column}}
</style>

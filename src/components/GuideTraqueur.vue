<template>
  <main class="content-page">
    <header class="page-hero">
      <span class="eyebrow">CENTRE D'AIDE · BIEN DÉMARRER</span>
      <h1>Votre premier lien AdPulse, <span>pas à pas.</span></h1>
      <p>Créez un lien de suivi, partagez-le sur vos canaux et consultez les visites enregistrées dans votre tableau de bord.</p>
      <RouterLink class="primary-button" to="/inscription">Créer mon compte <span aria-hidden="true">→</span></RouterLink>
    </header>

    <section class="steps" aria-label="Étapes de configuration">
      <article class="step-card">
        <div class="step-number">01</div>
        <div class="step-copy">
          <span class="step-label">CONFIGURATION</span>
          <h2>Préparez votre URL de destination</h2>
          <p>Choisissez la page vers laquelle vous souhaitez envoyer les visiteurs : page produit, formulaire, article ou page de présentation. Vérifiez qu'elle s'ouvre correctement sur mobile et ordinateur.</p>
          <div class="tip"><strong>Conseil :</strong> utilisez une URL complète commençant par <code>https://</code> et vérifiez qu'elle ne contient pas de faute de frappe.</div>
        </div>
      </article>

      <article class="step-card">
        <div class="step-number">02</div>
        <div class="step-copy">
          <span class="step-label">CRÉATION</span>
          <h2>Générez votre lien de suivi</h2>
          <p>Depuis votre tableau de bord, collez l'URL de destination dans le champ prévu, puis lancez la création. AdPulse vous fournit un lien dédié que vous pourrez partager.</p>
          <figure><img src="/step1.jpg" alt="Exemple de création d'un lien dans AdPulse" loading="lazy" /></figure>
        </div>
      </article>

      <article class="step-card">
        <div class="step-number">03</div>
        <div class="step-copy">
          <span class="step-label">PARTAGE</span>
          <h2>Copiez et testez le lien</h2>
          <p>Retrouvez votre nouveau lien dans la liste de vos liens, copiez-le puis ouvrez-le dans un nouvel onglet. Vérifiez que la redirection mène bien à la page attendue avant de le publier.</p>
          <figure><img src="/step2.jpg" alt="Exemple de lien AdPulse dans la liste des liens" loading="lazy" /></figure>
          <figure><img src="/step3.jpg" alt="Test d'un lien de suivi dans un navigateur" loading="lazy" /></figure>
        </div>
      </article>

      <article class="step-card">
        <div class="step-number">04</div>
        <div class="step-copy">
          <span class="step-label">REDIRECTION</span>
          <h2>Partagez le lien sur vos canaux</h2>
          <p>Placez le lien AdPulse dans votre publicité, votre bio, un message WhatsApp ou une publication. Lorsqu'une personne clique, le lien sert de passage vers votre destination et l'événement peut être enregistré par le système.</p>
          <figure><img src="/step4.jpg" alt="Illustration de la redirection vers la page de destination" loading="lazy" /></figure>
        </div>
      </article>

      <article class="step-card">
        <div class="step-number">05</div>
        <div class="step-copy">
          <span class="step-label">ANALYSE</span>
          <h2>Consultez vos statistiques</h2>
          <p>Revenez sur le tableau de bord pour examiner les clics enregistrés et leur répartition par type d'appareil, lorsque ces informations sont disponibles. Comparez des périodes et des liens équivalents pour repérer les tendances.</p>
          <figure><img src="/step5.jpg" alt="Exemple de statistiques de clics dans AdPulse" loading="lazy" /></figure>
          <div class="tip"><strong>À retenir :</strong> un clic n'est pas nécessairement une vente ni une conversion. Pour mesurer les résultats commerciaux, rapprochez les statistiques AdPulse de vos données de commande ou de conversion.</div>
        </div>
      </article>
    </section>

    <section class="help-card">
      <div><span class="eyebrow">BESOIN D'UN CONSEIL ?</span><h2>Un bon suivi commence par un test.</h2><p>Avant une campagne importante, créez un lien de test et vérifiez sa destination ainsi que l'apparition des premières données.</p></div>
      <RouterLink to="/guideAstuces" class="secondary-button">Voir les conseils pratiques →</RouterLink>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.content-page{max-width:1080px;margin:0 auto;padding:56px 22px 72px;color:#e8eefb;font-family:Inter,system-ui,sans-serif}.page-hero{text-align:center;max-width:760px;margin:0 auto 52px}.eyebrow,.step-label{font-size:11px;letter-spacing:.16em;font-weight:800;color:#78a9ff}.page-hero h1{font-size:clamp(34px,5vw,54px);line-height:1.08;letter-spacing:-.04em;margin:18px 0;color:#f8fafc}.page-hero h1 span{color:#75a7ff}.page-hero>p{max-width:650px;margin:0 auto 26px;color:#aab8cf;font-size:17px;line-height:1.75}.primary-button,.secondary-button{display:inline-flex;align-items:center;gap:12px;text-decoration:none;border-radius:12px;padding:13px 19px;font-weight:750}.primary-button{background:#2563eb;color:white}.steps{display:grid;gap:18px}.step-card{display:grid;grid-template-columns:72px 1fr;gap:20px;padding:28px;border:1px solid #263650;border-radius:20px;background:linear-gradient(145deg,#111f34,#0d1728)}.step-number{font-size:24px;font-weight:850;color:#75a7ff}.step-copy h2{font-size:22px;margin:8px 0 10px;color:#f8fafc}.step-copy p{font-size:15px;line-height:1.75;color:#b2bfd2;margin:0 0 14px}.step-copy figure{margin:16px 0 0;padding:8px;border:1px solid #293b57;border-radius:13px;background:#0a1423}.step-copy img{display:block;width:100%;max-height:440px;object-fit:contain;border-radius:8px}.tip{padding:14px 16px;border-left:3px solid #4c8dff;background:#142844;color:#c7d7ef;border-radius:0 10px 10px 0;font-size:14px;line-height:1.65}.tip code{color:#9cc2ff}.help-card{display:flex;align-items:center;justify-content:space-between;gap:24px;margin-top:34px;padding:28px;border-radius:20px;background:#142844;border:1px solid #2b4568}.help-card h2{margin:8px 0;color:#f8fafc}.help-card p{margin:0;color:#b2bfd2;line-height:1.6}.secondary-button{white-space:nowrap;border:1px solid #5278ae;color:#dce9ff}@media(max-width:650px){.content-page{padding:36px 15px 52px}.step-card{grid-template-columns:1fr;gap:8px;padding:21px}.step-number{font-size:20px}.help-card{align-items:flex-start;flex-direction:column}.secondary-button{white-space:normal}}
</style>

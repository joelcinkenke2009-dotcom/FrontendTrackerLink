<script setup>
import { ref } from "vue";
import { apiUrl } from "@/config/env";

const connect = ref([])
fetch(apiUrl + "/ISCONNECTED", { credentials: 'include' })
  .then(req => req.json())
  .then(res => {
    connect.value = res
  })

const started = () => {
  window.location.href = "/inscription"
}
</script>

<template>
  <div class="guide-container">
    
    <!-- En-tête de la page -->
    <header class="guide-header">
      <div class="badge-tag">💡 Guide d'optimisation</div>
      <h1 class="guide-title">Comment utiliser <span class="highlight">100%</span> de ADPulse</h1>
      <p class="guide-subtitle">
        Découvrez les stratégies les plus efficaces pour maximiser la rentabilité de vos campagnes d'acquisition et rentabiliser chaque dollar dépensé.
      </p>
    </header>

    <!-- Section des cas d'utilisation -->
    <div class="use-cases-grid">
      
      <!-- Cas 1 : Identifier la meilleure plateforme -->
      <article class="use-case-card">
        <div class="card-header">
          <div class="card-icon blue">🌐</div>
          <span class="step-number">Cas N° 01</span>
        </div>
        <h2 class="card-title">Déterminer quelle plateforme vous rapporte le plus de clients</h2>
        <div class="card-content">
          <p class="problem-statement">
            <strong>Problème :</strong> Vous diffusez vos liens partout, mais vous ne savez pas exactement quel réseau social génère vos vrais acheteurs.
          </p>
          <div class="solution-box">
            <h4>💡 La solution ADPulse :</h4>
            <p>
              Générez <strong>2 ou 3 liens de tracking différents</strong> qui pointent tous vers la même destination finale. Partagez ensuite chaque lien sur un réseau social distinct (ex: un lien pour Facebook, un pour TikTok, un pour Instagram).
            </p>
            <p>
              Après quelques jours, analysez les rapports de clics dans votre tableau de bord :
            </p>
            <ul>
              <li><strong>Le lien le plus cliqué :</strong> Investissez-y plus de budget publicitaire.</li>
              <li><strong>Le lien le moins performant :</strong> Coupez la dépense ou réoptimisez votre contenu.</li>
            </ul>
          </div>
        </div>
      </article>

      <!-- Cas 2 : Modification sans recommencer -->
      <article class="use-case-card">
        <div class="card-header">
          <div class="card-icon orange">🔄</div>
          <span class="step-number">Cas N° 02</span>
        </div>
        <h2 class="card-title">Modifier votre destination sans repartir de zéro</h2>
        <div class="card-content">
          <p class="problem-statement">
            <strong>Problème :</strong> Votre publicité Meta Ads tourne bien, mais vous devez changer de page de vente. Modifier l'URL directement dans Meta réinitialise l'apprentissage de l'algorithme et efface votre preuve sociale (likes, commentaires, partages).
          </p>
          <div class="solution-box">
            <h4>💡 La solution ADPulse :</h4>
            <p>
              En insérant votre <strong>lien dynamique ADPulse</strong> dans votre publicité Meta au lancement, vous gardez la main totale.
            </p>
            <p>
              Si votre site change ou si vous modifiez l'URL finale, changez la destination directement depuis ADPulse. Votre publicité Meta continue de tourner <strong>sans interruption, sans perte de données et en conservant tous vos likes et commentaires !</strong>
            </p>
          </div>
        </div>
      </article>

      <!-- Cas 3 : Suivi des performances d'influenceurs -->
      <article class="use-case-card">
        <div class="card-header">
          <div class="card-icon purple">⭐</div>
          <span class="step-number">Cas N° 03</span>
        </div>
        <h2 class="card-title">Mesurer l'efficacité réelle de vos influenceurs</h2>
        <div class="card-content">
          <p class="problem-statement">
            <strong>Problème :</strong> Vous faites appel à plusieurs influenceurs en même temps et il est impossible de savoir qui apporte du vrai trafic.
          </p>
          <div class="solution-box">
            <h4>💡 La solution ADPulse :</h4>
            <p>
              Créez une URL finale unique pour votre offre, puis générez <strong>un lien dynamique ADPulse dédié à chaque influenceur</strong>.
            </p>
            <p>
              En suivant les statistiques de chaque lien en temps réel, vous saurez exactement quel créateur de contenu génère un vrai retour sur investissement (ROI) et lesquels ne sont pas rentables pour vos prochaines collaborations.
            </p>
          </div>
        </div>
      </article>

    </div>

    <!-- Note Importante (NB) -->
    <section class="nb-section">
      <div class="nb-icon">📌</div>
      <div class="nb-content">
        <h3>Note Importante</h3>
        <p>
          Les stratégies présentées ci-dessus représentent <strong>les méthodes d'utilisation les plus efficaces</strong> observées chez nos membres. Cependant, ce ne sont pas les seules !
        </p>
        <p>
          ADPulse est un outil totalement flexible : adaptez-le et utilisez-le comme bon vous semble, du moment que cela vous permet de **gagner du temps**, d'**économiser votre budget** et de **booster vos conversions**.
        </p>
      </div>
    </section>

    <!-- Appels à l'action bas de page -->
    <section class="guide-cta">
      <h2>Prêt à optimiser vos campagnes d'acquisition ?</h2>
      <button 
        @click="started" 
        class="cta-button" 
        :disabled="connect.connected"
      >
        {{ connect.connected ? 'Accéder à mon tableau de bord' : 'Tester gratuitement pendant 7 jours' }}
      </button>
    </section>

  </div>
</template>

<style scoped>
.guide-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #0f172a;
}

/* En-tête */
.guide-header {
  text-align: center;
  margin-bottom: 48px;
}

.badge-tag {
  display: inline-block;
  background-color: #eff6ff;
  color: #2563eb;
  font-weight: 600;
  font-size: 13px;
  padding: 6px 16px;
  border-radius: 9999px;
  margin-bottom: 16px;
}

.guide-title {
  font-size: 38px;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 16px 0;
}

.highlight {
  color: #2563eb;
  background: linear-gradient(120deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.2) 100%);
  padding: 2px 8px;
  border-radius: 6px;
}

.guide-subtitle {
  font-size: 17px;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Grille des Cas d'usage */
.use-cases-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 48px;
}

.use-case-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.use-case-card:hover {
  border-color: #cbd5e1;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

.card-icon.blue { background-color: #eff6ff; }
.card-icon.orange { background-color: #fff7ed; }
.card-icon.purple { background-color: #faf5ff; }

.step-number {
  font-size: 13px;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-title {
  font-size: 22px;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 16px 0;
}

.problem-statement {
  font-size: 15px;
  color: #475569;
  background-color: #f8fafc;
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 4px solid #94a3b8;
  margin-bottom: 20px;
}

.solution-box {
  font-size: 15px;
  color: #334155;
  line-height: 1.6;
}

.solution-box h4 {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px 0;
}

.solution-box ul {
  margin: 12px 0 0 0;
  padding-left: 20px;
}

.solution-box li {
  margin-bottom: 6px;
}

/* Section NB */
.nb-section {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 1px solid #bbf7d0;
  border-radius: 20px;
  padding: 28px 32px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 48px;
}

.nb-icon {
  font-size: 28px;
  background: #ffffff;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
}

.nb-content h3 {
  font-size: 18px;
  font-weight: 700;
  color: #166534;
  margin: 0 0 8px 0;
}

.nb-content p {
  font-size: 14px;
  color: #15803d;
  line-height: 1.6;
  margin: 0 0 8px 0;
}

.nb-content p:last-child {
  margin-bottom: 0;
}

/* Footer CTA */
.guide-cta {
  text-align: center;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 40px 24px;
}

.guide-cta h2 {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 20px 0;
}

.cta-button {
  background-color: #2563eb;
  color: #ffffff;
  padding: 14px 28px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
}

.cta-button:hover:not(:disabled) {
  background-color: #1d4ed8;
  transform: translateY(-1px);
}

.cta-button:disabled {
  background-color: #94a3b8;
  cursor: not-allowed;
  box-shadow: none;
}

/* Responsivité */
@media (max-width: 768px) {
  .guide-title {
    font-size: 28px;
  }

  .use-case-card {
    padding: 20px;
  }

  .nb-section {
    flex-direction: column;
    padding: 20px;
  }

  .cta-button {
    width: 100%;
  }
}
</style>

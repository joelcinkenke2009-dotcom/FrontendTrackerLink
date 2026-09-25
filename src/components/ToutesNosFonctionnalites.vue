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
  <div class="features-page-container">
    
    <!-- En-tête de la page -->
    <header class="page-header">
      <div class="badge-tag">⚙️ Infrasucture & Outils</div>
      <h1 class="page-title">Toutes nos fonctionnalités</h1>
      <p class="page-subtitle">
        Découvrez les outils intégrés à ADPulse conçus pour vous donner un contrôle total sur vos campagnes et protéger vos investissements publicitaires.
      </p>
    </header>

    <!-- Grille des fonctionnalités principales -->
    <div class="features-list">
      
      <!-- Fonctionnalité 1 : Traqueur de lien -->
      <article class="feature-detail-card">
        <div class="card-left">
          <div class="feature-icon blue">🔗</div>
        </div>
        <div class="card-right">
          <span class="feature-number">Fonctionnalité 01</span>
          <h2 class="feature-name">Traqueur de lien</h2>
          <p class="feature-description">
            C'est un lien généré qui est directement rattaché à votre lien de départ. Ce lien redirige en toute transparence chaque utilisateur qui clique dessus vers votre lien d'origine, tout en enregistrant et conservant avec précision le nombre total de clics et de visiteurs uniques.
          </p>
        </div>
      </article>

      <!-- Fonctionnalité 2 : Modification d'un lien déjà généré -->
      <article class="feature-detail-card">
        <div class="card-left">
          <div class="feature-icon orange">🔄</div>
        </div>
        <div class="card-right">
          <span class="feature-number">Fonctionnalité 02</span>
          <h2 class="feature-name">Modification d'un lien déjà généré</h2>
          <p class="feature-description">
            Cette option vous permet de modifier le lien d'origine rattaché à votre traqueur <strong>sans réinitialiser les statistiques de clics</strong> et <strong>sans toucher au lien généré au préalable</strong>.
          </p>
          <div class="use-case-highlight">
            💡 <strong>Cas concret :</strong> Cela vous permet de changer la page de destination d'une publicité Meta Ads, TikTok ou Google déjà en cours de diffusion, sans couper l'annonce et sans perdre votre preuve sociale.
          </div>
        </div>
      </article>

      <!-- Fonctionnalité 3 : Vérification de l'état du site -->
      <article class="feature-detail-card">
        <div class="card-left">
          <div class="feature-icon green">⚡</div>
        </div>
        <div class="card-right">
          <span class="feature-number">Fonctionnalité 03</span>
          <h2 class="feature-name">Vérification instantanée de l'état du site</h2>
          <p class="feature-description">
            En un seul clic sur le bouton de vérification dans votre tableau de bord, ADPulse effectue un contrôle d'accessibilité en quelques secondes pour vous confirmer si votre site de destination est en ligne et accessible aux visiteurs ou s'il rencontre un problème technique.
          </p>
        </div>
      </article>

    </div>

    <!-- Note d'évolution (NB) -->
    <section class="roadmap-card">
      <div class="roadmap-icon">🚀</div>
      <div class="roadmap-content">
        <h3>Et ce n'est que le début !</h3>
        <p>
          Ce sont nos fonctionnalités actuelles, mais cela ne signifie pas que ce sont les dernières. Nous travaillons en permanence sur de nouvelles évolutions qui permettront d'améliorer encore davantage votre expérience utilisateur, la sécurité de votre trafic et vos performances de vente.
        </p>
      </div>
    </section>

    <!-- Section CTA vers le Dashboard / Essai -->
    <section class="cta-banner">
      <h2>Prêt à prendre le contrôle de vos liens ?</h2>
      <p>Testez toutes nos fonctionnalités gratuitement pendant 7 jours.</p>
      <button 
        @click="started" 
        class="cta-button" 
        :disabled="connect.connected"
      >
        {{ connect.connected ? 'Accéder au tableau de bord' : 'Commencer mon essai gratuit' }}
      </button>
    </section>

  </div>
</template>

<style scoped>
.features-page-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #0f172a;
}

/* Header */
.page-header {
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

.page-title {
  font-size: 38px;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 16px 0;
  color: #0f172a;
}

.page-subtitle {
  font-size: 17px;
  color: #64748b;
  max-width: 680px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Liste des fonctionnalités */
.features-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 48px;
}

.feature-detail-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 32px;
  display: flex;
  gap: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-detail-card:hover {
  border-color: #cbd5e1;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.05);
}

.card-left {
  flex-shrink: 0;
}

.feature-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
}

.feature-icon.blue { background-color: #eff6ff; }
.feature-icon.orange { background-color: #fff7ed; }
.feature-icon.green { background-color: #f0fdf4; }

.card-right {
  flex-grow: 1;
}

.feature-number {
  font-size: 12px;
  font-weight: 700;
  color: #2563eb;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: block;
  margin-bottom: 4px;
}

.feature-name {
  font-size: 22px;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 12px 0;
}

.feature-description {
  font-size: 15px;
  color: #475569;
  line-height: 1.7;
  margin: 0;
}

.use-case-highlight {
  margin-top: 16px;
  background-color: #f8fafc;
  border-left: 4px solid #2563eb;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 14px;
  color: #334155;
  line-height: 1.5;
}

/* Carte Roadmap (NB) */
.roadmap-card {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: #ffffff;
  border-radius: 20px;
  padding: 32px;
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 48px;
  box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.2);
}

.roadmap-icon {
  font-size: 32px;
  background: rgba(255, 255, 255, 0.1);
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.roadmap-content h3 {
  font-size: 20px;
  font-weight: 700;
  color: #60a5fa;
  margin: 0 0 8px 0;
}

.roadmap-content p {
  font-size: 14px;
  color: #94a3b8;
  line-height: 1.6;
  margin: 0;
}

/* Banner CTA */
.cta-banner {
  text-align: center;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 40px 24px;
}

.cta-banner h2 {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.cta-banner p {
  font-size: 15px;
  color: #64748b;
  margin: 0 0 24px 0;
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

/* Responsivité Mobile */
@media (max-width: 768px) {
  .page-title {
    font-size: 28px;
  }

  .feature-detail-card {
    flex-direction: column;
    padding: 24px;
  }

  .roadmap-card {
    flex-direction: column;
    text-align: center;
    padding: 24px;
  }

  .cta-button {
    width: 100%;
  }
}
</style>

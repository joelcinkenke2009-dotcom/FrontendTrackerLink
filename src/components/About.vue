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
  <div class="about-container">
    
    <!-- Hero Section -->
    <section class="hero-card">
      <div class="hero-badge">
        <span class="pulse-dot"></span> Ne laissez plus Meta brûler votre budget
      </div>
      <h1 class="hero-title">📊 AD<span class="brand-blue">Pulse</span></h1>
      <p class="hero-subtitle">
        Identifiez les publicités qui vous font perdre de l'argent et multipliez votre ROAS Meta Ads.
      </p>
      <p class="hero-description">
        Un tableau de bord ultra-simple pour auditer vos campagnes en temps réel : coupez instantanément les annonces dans le <strong>rouge</strong>, réallouez votre budget sur ce qui fonctionne en <strong>vert</strong>, et suivez vos conversions réelles par appareil.
      </p>
      <div class="hero-action">
        <button 
          @click="started" 
          class="modern-button" 
          :disabled="connect.connected"
        >
          {{ connect.connected ? 'Accéder au tableau de bord' : 'Tester gratuitement pendant 14 jours' }}
        </button>
      </div>
    </section>

    <!-- Section Fonctionnalités -->
    <section class="features-section">
      <div class="section-header">
        <h2 class="section-title">Tout ce dont vous avez besoin pour maximiser votre rentabilité</h2>
        <p class="section-subtitle">Prenez des décisions éclairées sans perdre des heures dans l'Ads Manager.</p>
      </div>

      <div class="features-grid">
        <!-- Carte 1 -->
        <div class="feature-card">
          <div class="icon-wrapper red-bg">🚨</div>
          <h3 class="feature-title">Audit Visuel Rouge / Vert</h3>
          <p class="feature-text">
            Détection automatique des publicités non rentables. Les annonces qui performent apparaissent en <strong>vert</strong>, celles qui gaspillent votre budget passent au <strong>rouge</strong> pour une décision immédiate.
          </p>
        </div>

        <!-- Carte 2 -->
        <div class="feature-card">
          <div class="icon-wrapper blue-bg">🔗</div>
          <h3 class="feature-title">Tracking par Liens Dynamiques</h3>
          <p class="feature-text">
            Créez des liens d'acquisition courts et personnalisés pour chaque visuel. Ne dépendez plus de l'attribution incertaine de Meta et vérifiez la provenance exacte de vos clics.
          </p>
        </div>

        <!-- Carte 3 -->
        <div class="feature-card">
          <div class="icon-wrapper yellow-bg">✏️</div>
          <h3 class="feature-title">Redirection Instantanée</h3>
          <p class="feature-text">
            Changez l'URL de destination de vos annonces actives en un clic sans modifier vos campagnes publicitaires ni perdre votre historique de clics.
          </p>
        </div>

        <!-- Carte 4 -->
        <div class="feature-card">
          <div class="icon-wrapper purple-bg">📱</div>
          <h3 class="feature-title">Segmentation Mobile vs Desktop</h3>
          <p class="feature-text">
            Identifiez quel appareil convertit réellement. Évitez de payer pour du trafic Desktop coûteux si 90 % de vos ventes se font sur Mobile.
          </p>
        </div>

        <!-- Carte 5 : Offre Découverte -->
        <div class="feature-card highlight-card">
          <div class="icon-wrapper green-bg">🎁</div>
          <h3 class="feature-title">Testez Sans Risque</h3>
          <p class="feature-text">Démarrez dès aujourd'hui avec notre offre d'essai :</p>
          <ul class="feature-list">
            <li>✓ 7 jours d'essai gratuit complet</li>
            <li>✓ Aucune carte bancaire requise</li>
            <li>✓ Configuration rapide en moins de 3 minutes</li>
          </ul>
        </div>

        <!-- Carte 6 : Tarification -->
        <div class="feature-card highlight-card">
          <div class="icon-wrapper emerald-bg">💼</div>
          <h3 class="feature-title">Abonnement Flexible</h3>
          <p class="feature-text">
            Paiement sécurisé par <strong>Mobile Money</strong> ou <strong>Carte Bancaire</strong> à partir de <strong>15 $ / mois</strong>. Annulable en un clic à tout moment.
          </p>
        </div>
      </div>
    </section>

    <!-- Section Pourquoi Nous Choisir -->
    <section class="why-card">
      <div class="why-content">
        <div class="why-text">
          <h2>🚀 Reprenez le contrôle de vos dépenses publicitaires</h2>
          <p>
            Jusqu'à <strong>30 % du budget Meta Ads</strong> est souvent dépensé dans des publicités à faible rendement sans que vous ne m'en aperceviez à temps.
          </p>
          <p>
            <strong>ADPulse</strong> simplifie l'analyse de vos performances : un coup d'œil suffit pour repérer les fuites de budget et réaffecter vos capitaux vers vos meilleurs visuels.
          </p>
          <p>
            Alliez puissance d'audit et précision de tracking grâce à des <strong>liens dynamiques personnalisés</strong> qui protègent votre coût par acquisition (CPA).
          </p>

          <div class="why-cta-wrapper">
            <button @click="started" class="modern-button secondary" :disabled="connect.connected">
              Lancer mon essai gratuit de 14 jours →
            </button>
          </div>
        </div>

        <div class="why-image">
          <div class="stats-card">
            <div class="stats-icon">📉</div>
            <div class="stats-number">-30%</div>
            <div class="stats-label">de budget publicitaire gaspillé économisé</div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #0f172a;
}

/* Hero Section moderne */
.hero-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 60px 24px;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  margin-bottom: 48px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #eff6ff;
  color: #1d4ed8;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 9999px;
  margin-bottom: 20px;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: #2563eb;
  border-radius: 50%;
}

.hero-title {
  font-size: 42px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 16px 0;
  letter-spacing: -0.02em;
}

.brand-blue {
  color: #2563eb;
}

.hero-subtitle {
  font-size: 20px;
  font-weight: 600;
  color: #334155;
  margin-bottom: 16px;
}

.hero-description {
  max-width: 720px;
  margin: 0 auto 32px auto;
  font-size: 15px;
  line-height: 1.6;
  color: #64748b;
}

/* Grille des fonctionnalités */
.features-section {
  margin-bottom: 48px;
}

.section-header {
  text-align: center;
  margin-bottom: 36px;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px 0;
}

.section-subtitle {
  color: #64748b;
  font-size: 15px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}

.feature-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 16px;
}

.red-bg { background-color: #fef2f2; }
.blue-bg { background-color: #eff6ff; }
.yellow-bg { background-color: #fefce8; }
.purple-bg { background-color: #faf5ff; }
.green-bg { background-color: #f0fdf4; }
.emerald-bg { background-color: #ecfdf5; }

.feature-title {
  font-size: 17px;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 8px 0;
}

.feature-text {
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 12px 0 0 0;
}

.feature-list li {
  font-size: 13px;
  color: #334155;
  font-weight: 500;
  margin-bottom: 6px;
}

/* Section "Pourquoi nous choisir" */
.why-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 40px 32px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.why-content {
  display: flex;
  gap: 40px;
  align-items: center;
}

.why-text {
  flex: 3;
}

.why-text h2 {
  font-size: 26px;
  font-weight: 700;
  margin: 0 0 16px 0;
}

.why-text p {
  font-size: 14px;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 14px;
}

.why-cta-wrapper {
  margin-top: 24px;
}

.why-image {
  flex: 2;
  display: flex;
  justify-content: center;
}

.stats-card {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: #ffffff;
  padding: 32px 24px;
  border-radius: 20px;
  text-align: center;
  width: 100%;
  max-width: 280px;
  box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.2);
}

.stats-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.stats-number {
  font-size: 36px;
  font-weight: 800;
  color: #60a5fa;
  margin-bottom: 4px;
}

.stats-label {
  font-size: 13px;
  color: #94a3b8;
  line-height: 1.4;
}

/* Boutons */
.modern-button {
  background-color: #2563eb;
  color: white;
  padding: 14px 28px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);
}

.modern-button:hover:not(:disabled) {
  background-color: #1d4ed8;
  transform: translateY(-1px);
}

.modern-button.secondary {
  background-color: #eff6ff;
  color: #2563eb;
  box-shadow: none;
}

.modern-button.secondary:hover:not(:disabled) {
  background-color: #dbeafe;
}

.modern-button:disabled {
  background-color: #94a3b8;
  cursor: not-allowed;
  box-shadow: none;
}

/* Responsivité Mobile */
@media (max-width: 768px) {
  .hero-title {
    font-size: 32px;
  }
  
  .why-content {
    flex-direction: column;
  }

  .stats-card {
    max-width: 100%;
  }

  .modern-button {
    width: 100%;
  }
}
</style>

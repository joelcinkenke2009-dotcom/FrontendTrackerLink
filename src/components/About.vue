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
        <span class="pulse-dot"></span> Solution d'Audit & Tracking Meta Ads
      </div>
      <h1 class="hero-title">📊 AD<span class="brand-blue">Pulse</span></h1>
      <p class="hero-subtitle">
        La plateforme intelligente pour auditer vos publicités et suivre vos liens dynamiques.
      </p>
      <p class="hero-description">
        Analysez vos campagnes en un clin d'œil : identifiez les publicités rentables en <strong>vert</strong> et coupez le gaspillage en <strong>rouge</strong>. Créez, modifiez et suivez vos liens dynamiques avec des statistiques précises par appareil.
      </p>
      <div class="hero-action">
        <button 
          @click="started" 
          class="modern-button" 
          :disabled="connect.connected"
        >
          {{ connect.connected ? 'Déjà connecté' : 'Commencer gratuitement' }}
        </button>
      </div>
    </section>

    <!-- Section Fonctionnalités -->
    <section class="features-section">
      <div class="section-header">
        <h2 class="section-title">Des fonctionnalités conçues pour votre croissance</h2>
        <p class="section-subtitle">Tout ce dont vous avez besoin pour maximiser votre ROAS sans perte de temps.</p>
      </div>

      <div class="features-grid">
        <!-- Carte 1 -->
        <div class="feature-card">
          <div class="icon-wrapper red-bg">🚨</div>
          <h3 class="feature-title">Alerte anti-gaspillage</h3>
          <p class="feature-text">
            Un tableau de bord intelligent qui classe automatiquement vos annonces : les plus rentables apparaissent en <strong>vert</strong>, et celles à optimiser en <strong>rouge</strong>. Visualisez vos métriques clés sans effort.
          </p>
        </div>

        <!-- Carte 2 -->
        <div class="feature-card">
          <div class="icon-wrapper blue-bg">🔗</div>
          <h3 class="feature-title">Suivi de lien dynamique</h3>
          <p class="feature-text">
            Enregistrez et surveillez tous vos liens d'acquisition en un clin d'œil. Chaque URL est automatiquement pistée pour vous offrir une traçabilité complète de vos clics.
          </p>
        </div>

        <!-- Carte 3 -->
        <div class="feature-card">
          <div class="icon-wrapper yellow-bg">✏️</div>
          <h3 class="feature-title">Modification flexible</h3>
          <p class="feature-text">
            Changez de stratégie en cours de route ? Modifiez la destination de vos liens à tout moment sans perdre vos statistiques historiques. Idéal pour pivoter une offre rapidement.
          </p>
        </div>

        <!-- Carte 4 -->
        <div class="feature-card">
          <div class="icon-wrapper purple-bg">📱</div>
          <h3 class="feature-title">Statistiques par appareil</h3>
          <p class="feature-text">
            Identifiez précisément l'origine de votre trafic : nous segmentons automatiquement vos données entre Mobile et Desktop pour optimiser vos tunnels de vente.
          </p>
        </div>

        <!-- Carte 5 : Offre Découverte -->
        <div class="feature-card highlight-card">
          <div class="icon-wrapper green-bg">🎁</div>
          <h3 class="feature-title">Offre de bienvenue</h3>
          <p class="feature-text">Lors de votre <strong>première inscription</strong>, bénéficiez de :</p>
          <ul class="feature-list">
            <li>✓ 14 jours d'essai totalement gratuit</li>
            <li>✓ Accès complet à toutes les fonctionnalités</li>
            <li>✓ Configuration instantanée sans carte bancaire</li>
          </ul>
        </div>

        <!-- Carte 6 : Tarification -->
        <div class="feature-card highlight-card">
          <div class="icon-wrapper emerald-bg">💼</div>
          <h3 class="feature-title">Paiement flexible</h3>
          <p class="feature-text">
            Abonnez-vous facilement par <strong>Mobile Money</strong> ou <strong>Carte Bancaire</strong> à partir de <strong>30$ / mois</strong>. Annulable à tout moment.
          </p>
        </div>
      </div>
    </section>

    <!-- Section Pourquoi Nous Choisir -->
    <section class="why-card">
      <div class="why-content">
        <div class="why-text">
          <h2>🚀 Pourquoi AD<span class="brand-blue">Pulse</span> est fait pour vous</h2>
          <p>
            <strong>ADPulse</strong> est né d'un constat simple : la plupart des annonceurs et solopreneurs perdent une part importante de leur budget dans des publicités inefficaces et des liens mal attribués.
          </p>
          <p>
            Grâce à notre audit automatisé (Rouge / Vert), vous repérez immédiatement les campagnes à couper pour financer celles qui performent. Plus besoin d'être un expert en data analytics.
          </p>
          <p>
            Chaque lien généré bénéficie d'un <strong>slug propre et court</strong>. Vous conservez le contrôle total sur vos destinations tout en préservant l'historique de vos conversions.
          </p>

          <div class="why-cta-wrapper">
            <button @click="started" class="modern-button secondary" :disabled="connect.connected">
              Tester la plateforme maintenant →
            </button>
          </div>
        </div>

        <div class="why-image">
          <div class="stats-card">
            <div class="stats-icon">📈</div>
            <div class="stats-number">+150%</div>
            <div class="stats-label">de clics analysés et rentabilisés</div>
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


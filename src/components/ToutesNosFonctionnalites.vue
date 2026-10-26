<script setup>
import { ref } from "vue";
import { apiUrl } from "@/config/env";

const connect = ref([])
fetch(apiUrl + "/ISCONNECTED", { credentials: 'include' })
  .then(req => req.json())
  .then(res => {
    connect.value = res
  })

// Redirection directe vers WhatsApp pour la prise de contact stratégique
const whatsappNum = "243990937099";
const defaultMessage = encodeURIComponent("Bonjour Joel, je souhaite réserver mon diagnostic gratuit et en savoir plus sur l'accompagnement stratégique CRO.");

const openWhatsApp = () => {
  window.open(`https://wa.me/${whatsappNum}?text=${defaultMessage}`, '_blank');
}

const accessDashboard = () => {
  window.location.href = "/dashboard";
}
</script>

<template>
  <div class="about-container">
    
    <!-- Hero Section -->
    <section class="hero-card">
      <div class="hero-badge">
        <span class="pulse-dot"></span> Accompagnement Stratégique & Audit de Conversion
      </div>
      <h1 class="hero-title">Multipliez vos ventes Meta Ads avec <span class="brand-blue">TrackerLink</span></h1>
      <p class="hero-subtitle">
        Arrêtez de brûler votre budget pub : bénéficiez d'un suivi personnalisé pour optimiser votre tunnel de vente et doubler votre ROI.
      </p>
      <p class="hero-description">
        Je vous accompagne personnellement sur WhatsApp pour auditer vos campagnes publicitaires, éliminer le gaspillage de budget et configurer notre suite de tracking et de redirection dynamique exclusive.
      </p>
      
      <div class="hero-action">
        <!-- Bouton d'action selon la connexion -->
        <button 
          v-if="!connect.connected"
          @click="openWhatsApp" 
          class="modern-button whatsapp-cta" 
        >
          💬 Réserver mon diagnostic gratuit sur WhatsApp
        </button>

        <button 
          v-else
          @click="accessDashboard" 
          class="modern-button"
        >
          Accéder à mon tableau de bord TrackerLink
        </button>

        <!-- Formule & Garantie -->
        <div class="hero-guarantee">
          <span class="price-tag">⚡ Formule Complète : <strong>100 $ / mois</strong> (Conseil + Suivi + Outil inclus)</span>
          <span class="guarantee-badge">🔒 Satisfait ou remboursé</span>
        </div>
      </div>
    </section>

    <!-- Section Ce que comprend l'accompagnement -->
    <section class="features-section">
      <div class="section-header">
        <h2 class="section-title">Un accompagnement complet sur-mesure pour votre business</h2>
        <p class="section-subtitle">Combine la puissance du conseil stratégique et la précision d'un outil de tracking propriétaire.</p>
      </div>

      <div class="features-grid">
        <!-- Carte 1 -->
        <div class="feature-card">
          <div class="icon-wrapper blue-bg">🔍</div>
          <h3 class="feature-title">1. Audit de Conversion (CRO)</h3>
          <p class="feature-text">
            Analyse complète de votre tunnel de vente et de vos publicités. Nous identifions exactement où vos visiteurs abandonnent et comment transformer plus de clics en acheteurs.
          </p>
        </div>

        <!-- Carte 2 -->
        <div class="feature-card">
          <div class="icon-wrapper yellow-bg">📱</div>
          <h3 class="feature-title">2. Suivi WhatsApp Direct</h3>
          <p class="feature-text">
            Un accès direct à un consultant stratégique. Posez vos questions, validez vos visuels avant publication et ajustez vos campagnes en temps réel sans attendre.
          </p>
        </div>

        <!-- Carte 3 -->
        <div class="feature-card">
          <div class="icon-wrapper purple-bg">⚡</div>
          <h3 class="feature-title">3. Licences TrackerLink Incluses</h3>
          <p class="feature-text">
            Accès illimité à notre traqueur dynamique pour modifier l'URL de vos annonces actives sans détruire votre Social Proof (likes et commentaires) ni l'apprentissage Meta.
          </p>
        </div>

        <!-- Carte 4 : Offre détaillée -->
        <div class="feature-card highlight-card">
          <div class="icon-wrapper green-bg">🎯</div>
          <h3 class="feature-title">Ce qui est inclus dans l'offre :</h3>
          <ul class="feature-list">
            <li>✓ Audit initial complet de vos offres et publicités</li>
            <li>✓ Recommandations hebdomadaires pour réduire votre CPA</li>
            <li>✓ Installation & paramétrage complet de vos liens de tracking</li>
            <li>✓ Accès illimité à la plateforme TrackerLink</li>
          </ul>
        </div>

        <!-- Carte 5 : Paiement facile -->
        <div class="feature-card highlight-card">
          <div class="icon-wrapper emerald-bg">💼</div>
          <h3 class="feature-title">Paiement Flexible & Sans Friction</h3>
          <p class="feature-text">
            Abonnement à <strong>100 $ / mois</strong> résiliable à tout moment. Règlements acceptés via <strong>Mobile Money (M-Pesa, Orange Money, MTN, Wave)</strong> ou <strong>Carte Bancaire</strong>.
          </p>
        </div>
      </div>
    </section>

    <!-- Section Témoignages -->
    <section class="testimonials-section">
      <div class="section-header">
        <h2 class="section-title">Ce que disent les e-commerçants accompagnés</h2>
        <p class="section-subtitle">Des résultats concrets sur leurs dépenses publicitaires et leurs taux de conversion.</p>
      </div>

      <div class="testimonials-grid">
        <!-- Témoignage 1 -->
        <div class="testimonial-card">
          <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
          <p class="testimonial-quote">
            "L'audit du tunnel de vente a révélé qu'on perdait 40% de nos acheteurs à la livraison. En ajustant notre offre et en utilisant TrackerLink pour suivre nos influenceurs, on a doublé nos ventes le mois suivant."
          </p>
          <div class="testimonial-user">
            <div class="user-avatar">SK</div>
            <div class="user-info">
              <strong class="user-name">Serge K.</strong>
              <span class="user-role">E-commerçant, Abidjan</span>
            </div>
          </div>
        </div>

        <!-- Témoignage 2 -->
        <div class="testimonial-card">
          <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
          <p class="testimonial-quote">
            "Avoir un spécialiste à disposition sur WhatsApp pour valider nos angles marketing avant d'injecter du budget pub change tout. La combinaison conseil + outil de tracking vaut largement son prix."
          </p>
          <div class="testimonial-user">
            <div class="user-avatar">AM</div>
            <div class="user-info">
              <strong class="user-name">Aïcha M.</strong>
              <span class="user-role">Media Buyer Freelance</span>
            </div>
          </div>
        </div>

        <!-- Témoignage 3 -->
        <div class="testimonial-card">
          <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
          <p class="testimonial-quote">
            "Pouvoir payer directement par Mobile Money et avoir une assistance directe sans passer par des systèmes compliqués est un vrai soulagement pour nos activités locales."
          </p>
          <div class="testimonial-user">
            <div class="user-avatar">JN</div>
            <div class="user-info">
              <strong class="user-name">Jean-Noël T.</strong>
              <span class="user-role">Fondateur d'agence digitale</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Retours Utilisateurs / Feedback -->
    <section class="feedback-card">
      <div class="feedback-content">
        <div class="feedback-icon">💬</div>
        <div class="feedback-text">
          <h3>Besoin d'un avis rapide sur vos publicités actuelles ?</h3>
          <p>
            Envoyez-nous le lien de votre page ou de votre site et nous analyserons gratuitement vos 3 plus grands axes d'amélioration.
          </p>
        </div>
        <div class="feedback-action">
          <button @click="openWhatsApp" class="feedback-button">
            Demander mon avis gratuit 📲
          </button>
        </div>
      </div>
    </section>

    <!-- Section Pourquoi Nous Choisir -->
    <section class="why-card">
      <div class="why-content">
        <div class="why-text">
          <h2>🚀 Pourquoi associer Stratégie & Tracking ?</h2>
          <p>
            Avoir un traqueur comme TrackerLink est indispensable pour conserver vos likes et piloter vos données, mais **l'outil seul ne remplace pas une stratégie d'acquisition éprouvée**.
          </p>
          <p>
            Grâce à notre accompagnement mensuel, vous ne vous contentez plus de regarder des métriques : vous comprenez exactement quelle décision prendre pour baisser vos coûts publicitaires et faire grandir votre entreprise.
          </p>

          <div class="why-cta-wrapper">
            <button @click="openWhatsApp" class="modern-button whatsapp-cta">
              Démarrer mon accompagnement à 100 $ / mois →
            </button>
          </div>
        </div>

        <div class="why-image">
          <div class="stats-card">
            <div class="stats-icon">🎯</div>
            <div class="stats-number">+100%</div>
            <div class="stats-label">de clarté stratégique et de maîtrise sur le retour sur investissement (ROI) de vos publicités</div>
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

/* Hero Section */
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
  font-size: 40px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 16px 0;
  letter-spacing: -0.02em;
  line-height: 1.2;
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

.hero-guarantee {
  margin-top: 18px;
  font-size: 14px;
  color: #475569;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.price-tag {
  background-color: #f1f5f9;
  padding: 4px 12px;
  border-radius: 8px;
  color: #1e293b;
}

.guarantee-badge {
  background-color: #f0fdf4;
  color: #16a34a;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 9999px;
  border: 1px solid #bbf7d0;
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

/* Section Témoignages */
.testimonials-section {
  margin-bottom: 48px;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.testimonial-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.testimonial-stars {
  font-size: 14px;
  margin-bottom: 12px;
}

.testimonial-quote {
  font-size: 14px;
  color: #475569;
  line-height: 1.6;
  font-style: italic;
  margin: 0 0 20px 0;
}

.testimonial-user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #2563eb;
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 14px;
  color: #0f172a;
}

.user-role {
  font-size: 12px;
  color: #64748b;
}

/* Section Feedback / Contact */
.feedback-card {
  background: linear-gradient(135deg, #eff6ff 0%, #e0f2fe 100%);
  border: 1px solid #bfdbfe;
  border-radius: 20px;
  padding: 28px 32px;
  margin-bottom: 48px;
}

.feedback-content {
  display: flex;
  align-items: center;
  gap: 24px;
}

.feedback-icon {
  font-size: 36px;
  background-color: #ffffff;
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
}

.feedback-text {
  flex-grow: 1;
}

.feedback-text h3 {
  font-size: 20px;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0 0 6px 0;
}

.feedback-text p {
  font-size: 14px;
  color: #3b82f6;
  margin: 0;
  line-height: 1.5;
}

.feedback-button {
  background-color: #2563eb;
  color: #ffffff;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);
}

.feedback-button:hover {
  background-color: #1d4ed8;
  transform: translateY(-1px);
}

/* Section Pourquoi Nous Choisir */
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

.modern-button.whatsapp-cta {
  background-color: #16a34a;
  box-shadow: 0 2px 4px rgba(22, 163, 74, 0.2);
}

.modern-button.whatsapp-cta:hover {
  background-color: #15803d;
  transform: translateY(-1px);
}

.modern-button:hover {
  background-color: #1d4ed8;
  transform: translateY(-1px);
}

/* Responsivité Mobile */
@media (max-width: 768px) {
  .hero-title {
    font-size: 30px;
  }
  
  .feedback-content {
    flex-direction: column;
    text-align: center;
  }

  .feedback-button {
    width: 100%;
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

  .hero-guarantee {
    flex-direction: column;
    gap: 8px;
  }
}
</style>

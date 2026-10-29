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
    
    <!-- Bannière d'urgence défilante (Marquee) -->
    <div class="marquee-banner">
      <div class="marquee-content">
        🔥 OFFRE SPÉCIALE DE LANCEMENT : 50% de réduction pour votre premier abonnement ! Profitez de TrackerLink à seulement 2,5 $ (ou son équivalent en FCFA, CDF, EUR) pour une durée limitée ! 🚀
      </div>
    </div>

    <!-- Hero Section -->
    <section class="hero-card">
      <div class="hero-badge">
        <span class="pulse-dot"></span> Traqueur de liens minimaliste adapté pour l'Afrique
      </div>
      <h1 class="hero-title">📊 Ad<span class="brand-blue">Pulse</span></h1>
      <p class="hero-subtitle">
        L'outil de suivi de lien simple et minimaliste avec un tableau de bord clair.
      </p>
      <p class="hero-description">
        Suivez, analysez et pilotez vos liens d'acquisition en temps réel. Ne perdez plus vos likes Meta Ads lors des changements d'URL et identifiez précisément les canaux qui vous apportent des clients rentables.
      </p>
      
      <div class="hero-action">
        <div class="cta-wrapper">
          <button 
            @click="started" 
            class="modern-button pulse-effect" 
            :disabled="connect.connected"
          >
            {{ connect.connected ? 'Accéder au tableau de bord' : 'Démarrer maintenant (Promo -50%)' }}
          </button>
          <a href="https://adauditor.netlify.app/guideAstuces" target="_blank" class="sub-cta-link">
            ✨ Savoir ce que vous gagnez en nous choisissant →
          </a>
        </div>
        
        <a 
          href="https://wa.me/243990937099?text=Bonjour,%20je%20souhaite%20m'abonner%20à%20AdPulse%20à%202.5$%20(promo%2050%25)%20via%20Mobile%20Money" 
          target="_blank" 
          class="whatsapp-direct-button"
        >
          📲 Payer par Mobile Money via WhatsApp
        </a>
      </div>

      <!-- Badges de Paiement & Garantie -->
      <div class="hero-guarantee">
        <div class="payment-methods">
          💳 Carte Bancaire • 📱 Mobile Money (Wave, Orange, MTN, M-Pesa)
        </div>
        <span class="guarantee-badge">🔒 Satisfait ou remboursé</span>
      </div>

      <!-- APERÇU DU DASHBOARD EN HERO -->
      <div class="dashboard-preview-wrapper">
        <div class="preview-header">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
          <span class="preview-title">Aperçu du Tableau de Bord AdPulse</span>
        </div>
        <div class="preview-body">
          <div class="dashboard-mockup">
            <div class="mockup-bar">
              <span class="mockup-label">Entrez votre lien de destination :</span>
              <div class="mockup-input-group">
                <input type="text" readonly value="https://votre-site.com/page-de-vente" class="mockup-input" />
                <button class="mockup-btn">Créer un lien</button>
              </div>
            </div>
            <div class="mockup-table">
              <div class="table-row header">
                <span>Lien Traqué</span>
                <span>Clicks Total</span>
                <span>Mobile</span>
                <span>PC</span>
                <span>Actions</span>
              </div>
              <div class="table-row">
                <span class="link-text">adpulse.app/link/campaign-abidjan</span>
                <span class="badge-click">142 clics</span>
                <span>88%</span>
                <span>12%</span>
                <span class="action-btn">Rediriger ⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Fonctionnalités -->
    <section class="features-section">
      <div class="section-header">
        <h2 class="section-title">La puissance d'un traqueur publicitaire minimaliste</h2>
        <p class="section-subtitle">Gardez le contrôle total sur votre trafic grâce à un tableau de bord clair et intuitif.</p>
      </div>

      <div class="features-grid">
        <!-- Carte 1 -->
        <div class="feature-card">
          <div class="icon-wrapper blue-bg">📡</div>
          <h3 class="feature-title">Tracking Avancé & Attributs</h3>
          <p class="feature-text">
            Traquez l'origine précise de chaque clic. Identifiez en un clin d'œil les canaux, visuels et campagnes qui génèrent le plus de conversions réelles.
          </p>
        </div>

        <!-- Carte 2 -->
        <div class="feature-card">
          <div class="icon-wrapper yellow-bg">⚡</div>
          <h3 class="feature-title">Redirection Dynamique à la Volée</h3>
          <p class="feature-text">
            Modifiez la destination cible de vos liens de tracking à tout moment, sans retoucher vos publicités actives ni perdre votre "Social Proof" (likes et commentaires).
          </p>
        </div>

        <!-- Carte 3 -->
        <div class="feature-card">
          <div class="icon-wrapper purple-bg">📱</div>
          <h3 class="feature-title">Routage Intelligent (Smart Routing)</h3>
          <p class="feature-text">
            Le traqueur détecte l'appareil au moment du clic : redirigez automatiquement les utilisateurs Mobile vers une landing page dédiée et le Desktop vers votre site principal.
          </p>
        </div>

        <!-- Carte 4 : Simplicité -->
        <div class="feature-card highlight-card">
          <div class="icon-wrapper green-bg">✨</div>
          <h3 class="feature-title">Tableau de Bord Intuitif</h3>
          <p class="feature-text">Une interface minimaliste conçue pour aller à l'essentiel :</p>
          <ul class="feature-list">
            <li>✓ Configuration de vos premiers liens en 3 min</li>
            <li>✓ Visualisation instantanée de vos clics</li>
            <li>✓ Aucune compétence technique requise</li>
          </ul>
        </div>

        <!-- Carte 5 : Tarification & Promo -->
        <div class="feature-card highlight-card promo-card">
          <div class="icon-wrapper emerald-bg">💼</div>
          <h3 class="feature-title">Abonnement Transparent & Promo</h3>
          <p class="feature-text">
            Accès complet pour <span class="old-price">5 $</span> <strong class="highlight-price">2,5 $ / mois</strong> (ou son équivalent en FCFA, CDF, Euro, etc.) avec <span class="tag-promo">50% de réduction pour votre premier abonnement</span>. Paiement sécurisé par <strong>Carte Bancaire</strong> ou <strong>Mobile Money</strong>.
          </p>
        </div>
      </div>
    </section>

    <!-- Section Témoignages -->
    <section class="testimonials-section">
      <div class="section-header">
        <h2 class="section-title">Ce qu'en pensent nos utilisateurs</h2>
        <p class="section-subtitle">Des e-commerçants et marketeurs d'Afrique partagent their expérience avec AdPulse.</p>
      </div>

      <div class="testimonials-grid">
        <!-- Témoignage 1 -->
        <div class="testimonial-card">
          <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
          <p class="testimonial-quote">
            "Pouvoir modifier le lien de destination de mes publicités Facebook sans perdre mes likes ni relancer la phase d'apprentissage, c'est juste magique. Ça m'a sauvé deux campagnes d'acquisition !"
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
            "Le tableau de bord est ultra simple. Je vois directement en un coup d'œil si un lien d'influenceur sur TikTok m'apporte du vrai trafic rentable ou juste des clics inutiles. À ce prix-là, c'est rentable immédiatement."
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
            "Simple, rapide et sans fioritures. En 3 minutes chrono mes liens étaient configurés. Le paiement par Mobile Money est un vrai plus pour nos équipes ici."
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
          <h3>Votre avis compte pour nous !</h3>
          <p>
            Aidez-nous à faire de <strong>AdPulse</strong> l'outil de tracking ultime pour vos campagnes d'acquisition. Partagez-nous vos retours et suggestions.
          </p>
        </div>
        <div class="feedback-action">
          <a 
            href="https://forms.gle/FZh5ckiiUY5HJf9Q8" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="feedback-button"
          >
            Donner mon avis 📝
          </a>
        </div>
      </div>
    </section>

    <!-- Section Pourquoi Nous Choisir -->
    <section class="why-card">
      <div class="why-content">
        <div class="why-text">
          <h2>🚀 Pourquoi utiliser un traqueur dynamique ?</h2>
          <p>
            Changer l'URL d'une publicité active sur Facebook, TikTok ou Google Ads casse l'apprentissage des algorithmes, réinitialise la campagne et détruit les interactions accumulées.
          </p>
          <p>
            <strong>AdPulse</strong> agit comme une couche d'intelligence intermédiaire : votre traqueur reste fixe dans votre annonce, tandis que vous contrôlez et analysez tout ce qui se passe en arrière-plan depuis un tableau de bord clair.
          </p>

          <div class="why-cta-wrapper">
            <button @click="started" class="modern-button secondary" :disabled="connect.connected">
              Profiter des 50% de réduction maintenant →
            </button>
          </div>
        </div>

        <div class="why-image">
          <div class="stats-card">
            <div class="stats-icon">🎯</div>
            <div class="stats-number">100%</div>
            <div class="stats-label">du contrôle et de l'historique de vos données de tracking conservés</div>
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

/* Bannière d'urgence défilante */
.marquee-banner {
  background: linear-gradient(90deg, #1d4ed8, #2563eb, #3b82f6);
  color: #ffffff;
  padding: 10px 0;
  border-radius: 12px;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
  font-weight: 600;
  font-size: 14px;
}

.marquee-content {
  display: inline-block;
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

/* Hero Section */
.hero-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 60px 24px 40px 24px;
  text-align: center;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  margin-bottom: 48px;
  position: relative;
  overflow: hidden;
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
  border: 1px solid #dbeafe;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: #2563eb;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7);
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(37, 99, 235, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
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

.hero-action {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.cta-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.sub-cta-link {
  font-size: 13px;
  font-weight: 600;
  color: #2563eb;
  text-decoration: none;
  transition: opacity 0.2s;
}

.sub-cta-link:hover {
  text-decoration: underline;
  opacity: 0.8;
}

.whatsapp-direct-button {
  display: inline-flex;
  align-items: center;
  background-color: #f0fdf4;
  color: #166534;
  border: 1px solid #bbf7d0;
  padding: 14px 24px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(22, 101, 52, 0.05);
}

.whatsapp-direct-button:hover {
  background-color: #dcfce7;
  transform: translateY(-1px);
}

.hero-guarantee {
  margin-top: 16px;
  font-size: 13px;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.payment-methods {
  font-weight: 500;
}

.guarantee-badge {
  background-color: #f0fdf4;
  color: #16a34a;
  font-size: 12px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 9999px;
  border: 1px solid #bbf7d0;
}

/* APERÇU DU DASHBOARD */
.dashboard-preview-wrapper {
  margin-top: 40px;
  background: #0f172a;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
  text-align: left;
}

.preview-header {
  background: #1e293b;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot.red { background: #ef4444; }
.dot.yellow { background: #f59e0b; }
.dot.green { background: #10b981; }

.preview-title {
  color: #94a3b8;
  font-size: 12px;
  margin-left: 8px;
  font-weight: 500;
}

.preview-body {
  padding: 24px;
}

.dashboard-mockup {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
}

.mockup-label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #334155;
  margin-bottom: 6px;
}

.mockup-input-group {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.mockup-input {
  flex-grow: 1;
  padding: 10px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 13px;
  color: #64748b;
  background: #f8fafc;
}

.mockup-btn {
  background: #2563eb;
  color: #ffffff;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 13px;
}

.mockup-table {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  font-size: 12px;
}

.table-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding: 10px 14px;
  align-items: center;
  border-bottom: 1px solid #f1f5f9;
}

.table-row.header {
  background: #f8fafc;
  font-weight: 600;
  color: #475569;
}

.link-text {
  color: #2563eb;
  font-weight: 600;
}

.badge-click {
  background: #dbeafe;
  color: #1e40af;
  padding: 2px 8px;
  border-radius: 9999px;
  font-weight: 700;
  width: fit-content;
}

.action-btn {
  color: #16a34a;
  font-weight: 700;
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

.promo-card {
  border: 2px solid #2563eb;
  background: linear-gradient(to bottom, #ffffff, #f0f7ff);
}

.old-price {
  text-decoration: line-through;
  color: #94a3b8;
  font-size: 0.9em;
}

.highlight-price {
  color: #2563eb;
  font-size: 1.1em;
}

.tag-promo {
  display: inline-block;
  background: #fef3c7;
  color: #d97706;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  margin-top: 4px;
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

/* Section Feedback Google Form */
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
  display: inline-block;
  background-color: #2563eb;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
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
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.modern-button:hover:not(:disabled) {
  background-color: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);
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
  
  .hero-action {
    flex-direction: column;
  }

  .modern-button, .whatsapp-direct-button, .cta-wrapper {
    width: 100%;
    justify-content: center;
  }

  .table-row {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .table-row.header {
    display: none;
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

  .hero-guarantee {
    flex-direction: column;
    gap: 6px;
  }
}
</style>

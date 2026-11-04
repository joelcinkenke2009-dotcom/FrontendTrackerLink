<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { apiUrl } from "@/config/env";

const router = useRouter();
const connect = ref([])
fetch(apiUrl + "/ISCONNECTED", { credentials: 'include' })
  .then(req => { if (!req.ok) throw new Error(`HTTP ${req.status}`); return req.json(); })
  .then(res => { connect.value = res; })
  .catch(err => console.error("Impossible de vérifier la session :", err))

const started = () => {
  router.push(connect.value.connected ? "/dashboard" : "/inscription")
}
</script>

<template>
  <div class="about-container">
    
    <!-- Bannière d'urgence défilante (Démarrage immédiat) -->
    <div class="marquee-banner">
      <div class="marquee-content">
        🔥 OFFRE SPÉCIALE : profitez de 10 % de réduction sur chacune de nos trois formules AdPulse ! 🚀
      </div>
    </div>

    <!-- Hero Section -->
    <section class="hero-card">
      <div class="hero-badge">
        <span class="pulse-dot"></span> Le suivi de vos campagnes, sans complexité
      </div>
      <h1 class="hero-title">📊 Ad<span class="brand-blue">Pulse</span></h1>
      <p class="hero-subtitle">
        Comprenez vos clics. Améliorez vos campagnes. Développez vos ventes.
      </p>
      <p class="hero-description">
        AdPulse vous aide à savoir d'où viennent vos visiteurs, quels liens attirent l'attention et quelles campagnes génèrent des résultats. Gardez un lien stable dans vos publicités et changez sa destination quand vous en avez besoin, sans modifier l'annonce.
      </p>
      
      <div class="hero-action">
        <div class="cta-wrapper">
          <button 
            @click="started" 
            class="modern-button pulse-effect" 
            
          >
            {{ connect.connected ? 'Accéder au tableau de bord' : 'Découvrir les abonnements (-10 %)' }}
          </button>
          <a href="https://adauditor.netlify.app/guideAstuces" target="_blank" class="sub-cta-link">
            ✨ Voir les avantages concrets d'AdPulse →
          </a>
        </div>
        
        <a 
          href="https://wa.me/243990937099?text=Bonjour,%20je%20souhaite%20m'abonner%20à%20AdPulse%20et%20connaître%20les%20trois%20formules" 
          target="_blank" 
          class="whatsapp-direct-button"
        >
          📲 Une question ? Écrivez-nous sur WhatsApp
        </a>
      </div>

      <!-- Badges de Paiement & Garantie -->
      <div class="hero-guarantee">
        <div class="payment-methods">
          💳 Carte Bancaire • 📱 Mobile Money (Wave, Orange, MTN, M-Pesa)
        </div>
        <span class="guarantee-badge">🔒 Paiement via le checkout sécurisé</span>
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
              <span class="mockup-label">Collez l'adresse de votre page :</span>
              <div class="mockup-input-group">
                <input type="text" readonly value="https://votre-site.com/page-de-vente" class="mockup-input" />
                <button class="mockup-btn">Créer un lien</button>
              </div>
            </div>
            <div class="mockup-table">
              <div class="table-row header">
                <span>Lien suivi</span>
                <span>Clics au total</span>
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

    <!-- Qualité des données : détection des visites automatisées et répétitives -->
    <section class="data-quality-section" aria-labelledby="data-quality-title">
      <div class="data-quality-icon" aria-hidden="true">🛡️</div>
      <div class="data-quality-copy">
        <span class="data-quality-eyebrow">Fiabilité des statistiques</span>
        <h2 id="data-quality-title">Des données plus cohérentes grâce à la détection des comportements inhabituels</h2>
        <p>
          Pour mieux comprendre les performances réelles de vos campagnes, AdPulse peut
          distinguer les visites humaines des comportements qui ressemblent à du trafic automatisé.
          Les signaux techniques et les répétitions anormales aident à repérer les bots, les
          rafales de clics et les visites répétées provenant d'un même utilisateur ou appareil.
        </p>
        <p>
          Cette analyse permet d'identifier les événements potentiellement artificiels ou redondants
          afin de limiter leur impact sur la lecture des statistiques. Vous obtenez ainsi une vision
          plus claire de votre trafic et pouvez comparer vos campagnes sur des indicateurs plus
          représentatifs.
        </p>
        <div class="data-quality-note">
          <strong>À retenir :</strong> la détection repose sur des indices et des règles d'analyse.
          Elle améliore la qualité de l'interprétation, sans garantir l'identification parfaite de
          chaque bot ni l'unicité absolue de chaque visiteur.
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
          <h3 class="feature-title">Comprenez d'où viennent vos visiteurs</h3>
          <p class="feature-text">
            Traquez l'origine précise de chaque clic. Identifiez en un clin d'œil les canaux, visuels et campagnes qui génèrent le plus de conversions réelles.
          </p>
        </div>

        <!-- Carte 2 -->
        <div class="feature-card">
          <div class="icon-wrapper yellow-bg">⚡</div>
          <h3 class="feature-title">Changez de destination sans refaire vos publicités</h3>
          <p class="feature-text">
            Modifiez la destination cible de vos liens de tracking à tout moment, sans retoucher vos publicités actives ni perdre votre "Social Proof" (likes et commentaires).
          </p>
        </div>

        <!-- Carte 3 -->
        <div class="feature-card">
          <div class="icon-wrapper purple-bg">📱</div>
          <h3 class="feature-title">Une expérience adaptée à chaque appareil</h3>
          <p class="feature-text">
            Le traqueur détecte l'appareil au moment du clic : redirigez automatiquement les utilisateurs Mobile vers une landing page dédiée et le Desktop vers votre site principal.
          </p>
        </div>

        <!-- Carte 4 : Simplicité -->
        <div class="feature-card highlight-card">
          <div class="icon-wrapper green-bg">✨</div>
          <h3 class="feature-title">Toutes vos performances au même endroit</h3>
          <p class="feature-text">Retrouvez l'essentiel pour décider plus facilement :</p>
          <ul class="feature-list">
            <li>✓ Créez votre premier lien en quelques étapes</li>
            <li>✓ Consultez vos clics au même endroit</li>
            <li>✓ Utilisation simple, sans expertise technique</li>
          </ul>
        </div>

        <!-- Formule gratuite -->
        <div class="feature-card billing-card">
          <div class="icon-wrapper green-bg">🆓</div>
          <h3 class="feature-title">Gratuit · Pour découvrir AdPulse</h3>
          <p class="feature-text">Créez un lien et suivez jusqu'à 30 clics. Sans accès aux analyses avancées.</p>
          <span class="tag-promo">Pour commencer</span>
          <button class="billing-button" type="button" @click="started">Commencer gratuitement</button>
        </div>

        <!-- Tarification et accès direct au checkout -->
        <div class="feature-card highlight-card billing-card">
          <div class="icon-wrapper emerald-bg">💼</div>
          <h3 class="feature-title">Standard · Pour suivre vos campagnes</h3>
          <p class="feature-text">Jusqu’à 350 clics par période de 30 jours.</p>
          <p class="billing-price"><s>9 $</s> <strong>8,10 $</strong></p>
          <span class="tag-promo">10 % de réduction</span>
          <form :action="`${apiUrl}/paiement/initialisation`" method="post">
            <button class="billing-button" type="submit">Choisir la formule standard</button>
          </form>
        </div>

        <div class="feature-card highlight-card billing-card">
          <div class="icon-wrapper blue-bg">🚀</div>
          <h3 class="feature-title">Illimité · Pour aller plus loin</h3>
          <p class="feature-text">Liens et clics illimités avec accès complet aux analyses.</p>
          <p class="billing-price"><s>59 $</s> <strong>53,10 $</strong></p>
          <span class="tag-promo">10 % de réduction</span>
          <form :action="`${apiUrl}/paiement/initialisation2`" method="post">
            <button class="billing-button" type="submit">Choisir Illimité</button>
          </form>
        </div>

        <div class="feature-card highlight-card billing-card">
          <div class="icon-wrapper purple-bg">⚡</div>
          <h3 class="feature-title">Avancé · Pour mieux décider</h3>
          <p class="feature-text">20 liens, 1 250 clics par période de 30 jours et accès aux analyses.</p>
          <p class="billing-price"><s>19 $</s> <strong>17,10 $</strong></p>
          <span class="tag-promo">10 % de réduction</span>
          <form :action="`${apiUrl}/paiement/initialisation3`" method="post">
            <button class="billing-button" type="submit">Choisir Avancé</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Section Témoignages -->
    <section class="testimonials-section">
      <div class="section-header">
        <!-- Badge de réassurance -->
        <div class="social-proof-badge">
          ⚡ <strong>+1 000 marketeurs et e-commerçants</strong> ont déjà testé et approuvé AdPulse
        </div>
        <h2 class="section-title">Ce qu'en pensent nos utilisateurs</h2>
        <p class="section-subtitle">Des e-commerçants et marketeurs d'Afrique partagent leur expérience avec AdPulse.</p>
      </div>

      <div class="testimonials-grid">
        <!-- Témoignage 1 -->
        <div class="testimonial-card">
          <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
          <p class="testimonial-quote">
            "Pouvoir modifier le lien de destination de mes publicités sans perdre mes likes ni relancer la phase d'apprentissage, c'est juste magique. Ça m'a sauvé deux campagnes d'acquisition !"
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
          <h2>🚀 Gardez la maîtrise de vos liens publicitaires</h2>
          <p>
            Changer l'URL d'une publicité active (sur Meta, Google, TikTok, etc.) casse l'apprentissage des algorithmes, réinitialise la campagne et détruit les interactions accumulées.
          </p>
          <p>
            <strong>AdPulse</strong> agit comme une couche d'intelligence intermédiaire : votre traqueur reste fixe dans votre annonce, tandis que vous contrôlez et analysez tout ce qui se passe en arrière-plan depuis un tableau de bord clair.
          </p>

          <div class="why-cta-wrapper">
            <button @click="started" class="modern-button secondary">
              Commencer à mieux suivre mes campagnes →
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

/* Bannière d'urgence défilante (Démarrage immédiat depuis la droite) */
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
  animation: marquee 15s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(100vw); }
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

.social-proof-badge {
  display: inline-block;
  background-color: #eff6ff;
  color: #1e40af;
  font-size: 14px;
  padding: 6px 16px;
  border-radius: 9999px;
  margin-bottom: 16px;
  border: 1px solid #dbeafe;
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


/* Tarifs et facturation */
.billing-card { display: flex; flex-direction: column; align-items: flex-start; gap: 12px; }
.billing-price { margin: 0; color: #64748b; font-size: 17px; }
.billing-price strong { color: #0f172a; font-size: 28px; margin-left: 8px; }
.billing-card form { width: 100%; margin-top: auto; }
.billing-button { width: 100%; border: 0; border-radius: 10px; padding: 12px 16px; background: #2563eb; color: #fff; font-weight: 700; cursor: pointer; transition: background .2s ease, transform .2s ease; }
.billing-button:hover { background: #1d4ed8; transform: translateY(-1px); }

</style>

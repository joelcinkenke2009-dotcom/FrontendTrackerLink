<script setup>
import { ref } from "vue";
import { apiUrl } from "./config/env";

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
    <!-- Hero section -->
    <section class="hero">
      <h1 class="hero-title">📊 Tracker<span style="color: #3b82f6;">Link</span></h1>
      <p class="hero-subtitle">
        La plateforme intelligente pour raccourcir, suivre et analyser vos liens
      </p>
      <p class="hero-description">
        Créez des liens courts uniques, modifiez-les à volonté, et obtenez des statistiques détaillées
        sur les clics, par type d'appareil. Nous vous offrons un contrôle total et une transparence absolue.
      </p>
      <button @click="started" style="text-decoration: none; text-decoration: line-through;" class="modern-button"
        :disabled="connect.connected">Commencer maintenant</button>
    </section>

    <!-- Section fonctionnalités -->
    <section class="features">
      <h2 class="section-title">✨ Des fonctionnalités pensées pour vous</h2>
      <div class="features-grid">
        <!-- Carte 1 : Trackeur de lien -->
        <div class="feature-card">
          <div class="feature-icon">🔗</div>
          <h3 class="feature-title">suivi de lien</h3>
          <p class="feature-text">
            Enregistrez et surveillez tous vos liens en un clin d'œil. Chaque lien est automatiquement
            pisté pour vous offrir une visibilité complète sur son utilisation.
          </p>
        </div>

        <!-- Carte 2 : Slug unique -->
        <div class="feature-card">
          <div class="feature-icon">🔑</div>
          <h3 class="feature-title">Slug unique</h3>
          <p class="feature-text">
            À chaque lien correspond un identifiant court et unique (slug). Plus besoin de partager des
            URL interminables : un code de 6 caractères suffit.
          </p>
        </div>

        <!-- Carte 3 : Modification du lien généré -->
        <div class="feature-card">
          <div class="feature-icon">✏️</div>
          <h3 class="feature-title">Modification flexible</h3>
          <p class="feature-text">
            Vous avez changé d’avis ? Modifiez à tout moment le lien de destination sans perdre vos
            statistiques. Idéal pour mettre à jour une campagne ou corriger une erreur.
          </p>
        </div>

        <!-- Carte 4 : Suppression et remise à zéro -->
        <div class="feature-card">
          <div class="feature-icon">🗑️</div>
          <h3 class="feature-title">Suppression & réinitialisation</h3>
          <p class="feature-text">
            Supprimez un lien pour annuler définitivement son comptage. Recommencez une campagne
            sans que les anciens clics ne viennent fausser vos nouveaux résultats.
          </p>
        </div>

        <!-- Carte 5 : Vérification de validité -->
        <div class="feature-card">
          <div class="feature-icon">✅</div>
          <h3 class="feature-title">Validation automatique</h3>
          <p class="feature-text">
            Notre système vérifie en temps réel si le lien cible est accessible. Vous êtes ainsi certain
            que vos utilisateurs n'atterriront jamais sur une page morte.
          </p>
        </div>

        <!-- Carte 6 : Comptage mobile / PC séparé -->
        <div class="feature-card">
          <div class="feature-icon">📱💻</div>
          <h3 class="feature-title">Statistiques par appareil</h3>
          <p class="feature-text">
            Analysez précisément d'où viennent vos clics : nous distinguons automatiquement les visites
            sur mobile et sur PC. Un atout précieux pour optimiser vos campagnes.
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">✅</div>
          <p> Lors de votre <strong>première inscription</strong>, vous bénéficiez automatiquement de : </p>

          <ul>
            <li>✅ 3 jours d’abonnement gratuit</li>
            <li>✅ Accès aux fonctionnalités principales</li>
            <li>✅ Aucune configuration complexe</li>
          </ul>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💼</div>
          <p> Possibilité de <strong>s'abonner en mobile money ou carte bancaire</strong>, a partir de 5000FCFA et 10$</p>
        </div>
      </div>
    </section>

    <!-- Section détaillée : pourquoi nous choisir -->
    <section class="why-us">
      <h2 class="section-title">🚀 Pourquoi TrackerLink est fait pour vous</h2>
      <div class="why-content">
        <div class="why-text">
          <p>
            <strong>TrackerLink</strong> est né d’un constat simple : les outils de raccourcissement
            classiques ne vous donnent qu’une vision partielle de l’activité de vos liens. Nous avons
            donc construit une solution complète, à la fois simple à prendre en main et incroyablement
            puissante.
          </p>
          <p>
            Que vous soyez <strong>marketeur</strong>, <strong>développeur</strong> ou simplement
            <strong>curieux</strong>, vous avez besoin de savoir combien de clique et sur quel appareil.
            Grâce à notre comptage séparé mobile/PC, vous affinez vos stratégies et améliorez l’expérience
            utilisateur.
          </p>
          <p>
            Et parce que la flexibilité est essentielle, nous vous laissons <strong>modifier</strong> ou
            <strong>supprimer</strong> vos liens à tout moment. Vous gardez le contrôle, même après la
            création. De plus, notre algorithme de <strong>vérification</strong> s’assure que vos liens
            sont valides, évitant ainsi les mauvaises surprises.
          </p>
          <p>
            Enfin, chaque lien reçoit un <strong>slug unique</strong> – plus besoin de partager des URL
            à rallonge. C’est propre, c’est court, et c’est mémorable.
          </p>
          <p class="why-cta">
            Prêt à reprendre le contrôle de vos liens ? Rejoignez dès maintenant la version beta et
            découvrez une nouvelle façon de tracker.
          </p>
        </div>
        <div class="why-image">
          <!-- Vous pouvez insérer ici une illustration ou un graphique -->
          <div class="stats-placeholder">
            📈 <span>+150% de clics analysés</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Style général – reprend les codes de l'interface précédente */
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  font-family: 'Segoe UI', Roboto, system-ui, sans-serif;
  color: #1e293b;
  background: #f5f7fb;
}

/* Hero */
.hero {
  text-align: center;
  margin-bottom: 4rem;
  padding: 2rem 1rem;
  background: white;
  border-radius: 32px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #3b82f6;
  font-weight: 500;
  margin-bottom: 1rem;
}

.hero-description {
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 5px;
  color: #475569;
}

/* Sections */
.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 2.5rem;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: #3b82f6;
  border-radius: 2px;
  margin: 0.8rem auto 0;
}

/* Grille des fonctionnalités */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  background: white;
  border-radius: 24px;
  padding: 2rem 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid #e9eef2;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: #e6f0ff;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  color: #1e4bd2;
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #0f172a;
}

.feature-text {
  color: #475569;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Section "Pourquoi nous choisir" */
.why-us {
  background: white;
  border-radius: 32px;
  padding: 3rem 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
  margin-bottom: 3rem;
}

.why-content {
  display: flex;
  gap: 3rem;
  align-items: center;
  flex-wrap: wrap;
}

.why-text {
  flex: 2;
  min-width: 300px;
}

.why-text p {
  margin-bottom: 1.2rem;
  line-height: 1.7;
  color: #334155;
  font-size: 1.02rem;
}

.why-text strong {
  color: #1e4bd2;
  font-weight: 600;
}

.why-cta {
  font-size: 1.1rem;
  background: #e6f0ff;
  padding: 1rem 1.5rem;
  border-radius: 60px;
  color: #1e4bd2;
  font-weight: 500;
  display: inline-block;
  margin-top: 1rem;
}

.why-image {
  flex: 1;
  min-width: 250px;
  display: flex;
  justify-content: center;
}

.stats-placeholder {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  padding: 2rem;
  border-radius: 32px;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.3);
  width: 100%;
}

.stats-placeholder span {
  display: block;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0.5rem;
  opacity: 0.9;
}

/* Footer */
.about-footer {
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
  color: #94a3b8;
  font-size: 0.9rem;
}

.beta {
  background: #f1f5f9;
  padding: 0.2rem 0.8rem;
  border-radius: 50px;
  color: #475569;
  font-weight: 500;
  margin-left: 0.5rem;
}

.modern-button {
  background-color: #3b82f6;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.modern-button:disabled {
  text-decoration: line-through;
  background-color: #9ca3af;
  opacity: 9;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .why-content {
    flex-direction: column;
    gap: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
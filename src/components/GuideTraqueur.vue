      <template>
  <div class="guide-container">
    <h2 class="title">Comment utiliser le Traqueur de Liens ADPulse</h2>
    <p class="subtitle">Suivez ces étapes simples pour générer et suivre vos liens en temps réel.</p>

    <div class="steps-list">
      <!-- Étape 1 -->
      <div class="step-card">
        <div class="step-number">1</div>
        <div class="step-content">
          <h3>Générer votre lien traqué</h3>
          <p>
            Collez votre URL de destination dans le champ <strong>"Entrez votre lien"</strong> du tableau de bord ADPulse, puis cliquez sur le bouton bleu <strong>"Créer un lien"</strong>.
          </p>
          <div class="image-wrapper">
            <img src="/step1.jpg" alt="Étape 1 - Générer le lien" class="step-img" />
          </div>
        </div>
      </div>

      <!-- Étape 2 -->
      <div class="step-card">
        <div class="step-number">2</div>
        <div class="step-content">
          <h3>Copier le nouveau lien</h3>
          <p>
            Une fois le lien généré, repérez-le dans la section <strong>"Vos Liens Récents"</strong>. Cliquez sur l'icône dans la colonne <strong>"Copier"</strong> pour placer le lien traqué dans votre presse-papier.
          </p>
          <div class="image-wrapper">
            <img src="/step2.jpg" alt="Étape 2 - Copier le lien" class="step-img" />
          </div>
        </div>
      </div>

      <!-- Étape 3 -->
      <div class="step-card">
        <div class="step-number">3</div>
        <div class="step-content">
          <h3>Tester le lien dans un navigateur</h3>
          <p>
            Ouvrez un nouvel onglet dans votre navigateur Web, collez le lien généré (ex: <code>https://back-end-tracker-yhwf.onrender.com/link/...</code>) dans la barre d'adresse et validez.
          </p>
          <div class="image-wrapper">
            <img src="/step3.jpg" alt="Étape 3 - Rechercher le lien" class="step-img" />
          </div>
        </div>
      </div>

      <!-- Étape 4 -->
      <div class="step-card">
        <div class="step-number">4</div>
        <div class="step-content">
          <h3>Redirection automatique</h3>
          <p>
            Le traqueur enregistre discrètement le clic et redirige immédiatement l'utilisateur vers la page de destination.
          </p>
          <div class="image-wrapper">
            <img src="/step4.jpg" alt="Étape 4 - Redirection" class="step-img" />
          </div>
        </div>
      </div>

      <!-- Étape 5 -->
      <div class="step-card">
        <div class="step-number">5</div>
        <div class="step-content">
          <h3>Vérifier les statistiques</h3>
          <p>
            Retournez sur votre dashboard ADPulse et rafraîchissez la page. Les métriques <strong>Clicks Total</strong>, <strong>Clicks Mobile</strong> et <strong>Clicks PC</strong> sont automatiquement mises à jour.
          </p>
          <div class="image-wrapper">
            <img src="/step5.jpg" alt="Étape 5 - Statistiques" class="step-img" />
          </div>
          
          <!-- Note explicative après l'image 5 -->
          <div class="pro-tip">
            💡 <strong>Conseil Pro :</strong> Partagez ensuite ce lien traqué sur vos différents réseaux sociaux (Facebook, WhatsApp, bio Instagram) ou dans vos campagnes Meta Ads. Cela vous permettra d'analyser précisément quelle publication vous apporte le plus de visiteurs et quelle publicité rentabilise le mieux vos investissements.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuideTracker'
}
</script>

<style scoped>
.guide-container {
  max-width: 1000px; /* Élargi pour donner plus d'espace aux images */
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Inter', system-ui, sans-serif;
  color: #1e293b;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.subtitle {
  text-align: center;
  color: #64748b;
  margin-bottom: 2.5rem;
  font-size: 1.05rem;
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.step-card {
  display: flex;
  gap: 1.5rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.step-number {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  background-color: #2563eb;
  color: #ffffff;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.step-content {
  flex-grow: 1;
}

.step-content h3 {
  font-size: 1.35rem;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #1e293b;
}

.step-content p {
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  font-size: 1rem;
}

/* Modification du conteneur d'image pour agrandir et afficher en grand */
.image-wrapper {
  margin-top: 1.25rem;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #cbd5e1;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: #f8fafc;
}

.step-img {
  width: 100%;
  max-height: 600px; /* Augmentation de la hauteur maximale */
  object-fit: contain; /* Conserve le ratio de l'image sans la déformer */
  display: block;
  transition: transform 0.3s ease;
}

.step-img:hover {
  transform: scale(1.02); /* Légère animation de zoom au survol */
}

.pro-tip {
  margin-top: 1.5rem;
  padding: 1.25rem;
  background-color: #eff6ff;
  border-left: 4px solid #2563eb;
  border-radius: 8px;
  color: #1e3a8a;
  font-size: 1rem;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .step-card {
    flex-direction: column;
    padding: 1.25rem;
  }
}
</style>

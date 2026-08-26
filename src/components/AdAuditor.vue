<script setup>
import { ref } from "vue";
import { metaApp, config_id, apiUrl } from "../config/env";

const data = ref(null);
const date = ref({});
const appId = metaApp;
const config = config_id;
const redirectApp = encodeURIComponent(apiUrl+"/api/auth/facebook/callback");

const connectMeta = () => {
  const metaUrl = `https://www.facebook.com/v19.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectApp}&config_id=${config}&response_type=code`;
  window.location.href = metaUrl;
};

fetch(apiUrl + "/isActive", { credentials: "include" })
  .then((req) => req.json())
  .then((res) => {
    date.value = res;
  });

fetch(apiUrl + "/api/facebook/response", { credentials: "include" })
  .then((req) => req.json())
  .then((res) => {
    data.value = res;
  });
</script>

<template>
  <div class="dashboard-wrapper">
    <!-- Banner Abonnement -->
    <div v-if="date.date_limite" class="alert-banner success">
      <span class="dot"></span>
      <span>Votre abonnement est valide jusqu'au <strong>{{ date.date_limite }}</strong></span>
    </div>
    <div v-else-if="date.expire" class="alert-banner danger">
      <span class="dot"></span>
      <span>Votre abonnement a expiré depuis le <strong>{{ date.expire }}</strong></span>
    </div>

    <!-- Header Dashboard -->
    <div class="dashboard-header">
      <div>
        <h2>Statistiques publicitaires</h2>
        <p class="subtitle">Aperçu des performances sur les 30 derniers jours</p>
      </div>
    </div>

    <!-- Container Principal -->
    <div id="principal" class="main-card">
      
      <!-- État : Bouton Connexion Meta -->
      <div v-if="data && data.login" class="empty-state">
        <div class="icon-wrapper">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </div>
        <h3>Compte Meta non connecté</h3>
        <p>Liez votre compte publicitaire pour automatiser l'analyse de vos métriques.</p>
        <button class="modern-button" @click="connectMeta">
          Connecter votre compte Meta ADS
        </button>
      </div>

      <!-- État : Message d'information/Erreur renvoyé par le backend -->
      <div v-else-if="data && data.message" class="empty-state">
        <div class="icon-wrapper info-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </div>
        <h3>Information</h3>
        <p>{{ data.message }}</p>
      </div>

      <!-- État : Tableau vide (Aucune publicité trouvée) -->
      <div v-else-if="Array.isArray(data) && data.length === 0" class="empty-state">
        <div class="icon-wrapper neutral">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>
        <h3>Aucune publicité enregistrée</h3>
        <p>Aucune donnée publicitaire n'a été trouvée sur les 30 derniers jours pour ce compte Meta.</p>
      </div>

      <!-- État : Tableau de Données rempli -->
      <div v-else-if="Array.isArray(data) && data.length > 0" class="table-container">
        <table class="dashboard-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nom de la pub</th>
              <th>ID Publicité</th>
              <th>Impressions</th>
              <th>Clics</th>
              <th>CPC</th>
              <th>CTR</th>
              <th>Dépenses</th>
              <th style="text-align: center;">État</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(ad, index) in data" :key="ad.ad_id || index">
              <td>{{ index + 1 }}</td>
              <td class="ad-name-cell">
                <strong>{{ ad.ad_name || 'Sans titre' }}</strong>
              </td>
              <td class="ad-id-cell">{{ ad.ad_id }}</td>
              <td><strong>{{ ad.impressions }}</strong></td>
              <td><strong>{{ ad.clicks }}</strong></td>
              <td>{{ ad.cpc }} $</td>
              <td>{{ ad.ctr }} %</td>
              <td class="spend-cell">{{ ad.spend }} $</td>
              <td style="text-align: center;">
                <!-- Vert si CPC <= 1.5 et CTR >= 1.0 -->
                <span v-if="parseFloat(ad.cpc) <= 1.5 && parseFloat(ad.ctr) >= 1.0" class="badge green">
                  Performant
                </span>
                <span v-else class="badge red">
                  À optimiser
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Loading State -->
      <div v-else class="loading-state">
        <div class="spinner"></div>
        <p>Chargement des statistiques...</p>
      </div>

    </div>
  </div>
</template>

<style scoped>
.dashboard-wrapper {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  color: #0f172a;
}

/* Bannières d'alerte moderne */
.alert-banner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 14px;
  margin-bottom: 24px;
}

.alert-banner.success {
  background-color: #ecfdf5;
  color: #065f46;
  border: 1px solid #a7f3d0;
}

.alert-banner.danger {
  background-color: #fef2f2;
  color: #991b1b;
  border: 1px solid #fecaca;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: currentColor;
}

/* En-tête */
.dashboard-header {
  margin-bottom: 20px;
}

.dashboard-header h2 {
  font-size: 22px;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 4px 0;
}

.subtitle {
  color: #64748b;
  font-size: 14px;
  margin: 0;
}

/* Carte Blanche Principale */
.main-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  min-height: 400px;
}

/* Tableau */
.table-container {
  overflow-x: auto;
}

.dashboard-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.dashboard-table th {
  background-color: #f8fafc;
  color: #475569;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
}

.dashboard-table td {
  padding: 18px 20px;
  border-bottom: 1px solid #f1f5f9;
  color: #334155;
  font-size: 14px;
}

.ad-name-cell {
  max-width: 220px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ad-id-cell {
  font-family: monospace;
  font-size: 12px;
  color: #64748b;
}

.spend-cell {
  font-weight: 700;
  color: #0f172a;
}

/* Badges de Statut (Vert / Rouge) */
.badge {
  display: inline-block;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 9999px;
  text-align: center;
}

.badge.green {
  background-color: #dcfce7;
  color: #15803d;
}

.badge.red {
  background-color: #fee2e2;
  color: #b91c1c;
}

/* Boutons & Éléments Interactifs */
.modern-button {
  background-color: #2563eb;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);
}

.modern-button:hover {
  background-color: #1d4ed8;
  transform: translateY(-1px);
}

/* États Vides (Empty States) */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  background-color: #eff6ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.icon-wrapper.neutral {
  background-color: #f1f5f9;
}

.empty-state h3 {
  margin: 0 0 8px 0;
  color: #1e293b;
}

.empty-state p {
  color: #64748b;
  margin: 0 0 24px 0;
  max-width: 400px;
  font-size: 14px;
}

/* Spinner de chargement */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  color: #64748b;
}

.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #e2e8f0;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: 12px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Adaptabilité Mobile */
@media (max-width: 640px) {
  .dashboard-wrapper {
    padding: 16px;
  }
  .modern-button {
    width: 100%;
  }
}
</style>


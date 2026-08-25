<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { apiUrl } from '@/config/env';

const route = useRoute();

// États réactifs
const data = ref([]);
const url = ref('');
const modify = ref(false);
const date = ref({});
const verify = ref(false);
const message = ref('');
const copied = ref('');

// Récupération de l'état d'abonnement
const fetchDate = async () => {
  try {
    const res = await fetch(`${apiUrl}/isActive`, { credentials: 'include' });
    date.value = await res.json();
  } catch (err) {
    console.error('Erreur fetchDate:', err);
  }
};

// Récupération de la liste des liens
const fetchItems = async () => {
  try {
    const res = await fetch(`${apiUrl}/protected/data`, { credentials: 'include' });
    const value = await res.json();
    data.value = value || [];
  } catch (err) {
    console.error('Erreur fetchItems:', err);
    data.value = [];
  }
};

// Pressea-papier (Copier)
const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    copied.value = 'Copié !';
    setTimeout(() => {
      copied.value = '';
    }, 1000);
  } catch (err) {
    console.error('Erreur lors de la copie : ', err);
  }
};

// Basculer l'affichage du formulaire de modification
const activeModify = () => {
  modify.value = !modify.value;
};

// Vérification de lien via AJAX
const verifyLink = async (linkValue) => {
  verify.value = true;
  try {
    const response = await fetch(`${apiUrl}/protected/verifyLink`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ link: linkValue }),
      credentials: 'include'
    });

    if (!response.ok) {
      message.value = `Le lien ${linkValue} est invalide`;
    } else {
      message.value = `Le lien ${linkValue} est valide`;
    }
  } catch (err) {
    console.error('Erreur verifyLink:', err);
  } finally {
    setTimeout(() => {
      verify.value = false;
      message.value = '';
    }, 2500);
  }
};

// Exécution au montage
onMounted(async () => {
  await Promise.all([fetchItems(), fetchDate()]);

  // Traitement des notifications issues des query params (URL)
  const status = route.query.status;
  const statusMessages = {
    '405': 'Paiement échoué, veuillez réessayer plus tard',
    '500': 'Ce lien a déjà été enregistré',
    '200': 'Le lien est valide',
    '404': 'Le lien est invalide',
    '409': 'Timeout'
  };

  if (status && statusMessages[status]) {
    alert(statusMessages[status]);
  }
});
</script>

<template>
  <div id="principal" class="main-wrapper" style="min-height: 65vh;">
    <!-- Statut d'abonnement -->
    <h4 v-if="date.date_limite" class="alert-banner success">
      Votre abonnement est valide jusqu'au {{ date.date_limite }}
    </h4>
    <h4 v-else-if="date.expire" class="alert-banner danger">
      Votre abonnement a expiré depuis le {{ date.expire }}
    </h4>

    <!-- Formulaire principal de création -->
    <div class="card form-section">
      <form class="createdLink" method="post" :action="`${apiUrl}/protected/createLink`">
        <div class="input-group">
          <input
            v-model="url"
            type="text"
            required
            name="url"
            placeholder="Entrez votre lien (ex: google.com)"
            class="modern-input"
            autocomplete="off"
            :disabled="!!data.Paiement"
          >
          <button class="modern-button" :disabled="!!data.Paiement || !!data.login" type="submit">
            Créer un lien
          </button>
        </div>
      </form>
    </div>

    <!-- Vues conditionnelles selon l'état du serveur -->
    <div v-if="data.login" class="card">
      <h3>{{ data.login }}</h3>
      <br>
      <a href="/inscription" class="button" style="text-decoration: none;">Commencer maintenant</a>
    </div>

    <div v-else-if="data.Paiement" class="card">
      <h3>{{ data.Paiement }}</h3>
      <div style="display: flex; justify-content: flex-end;">
        <form :action="`${apiUrl}/paiement/initialisation`" method="post">
          <button class="button" type="submit">Souscrire maintenant</button>
        </form>
      </div>
    </div>

    <!-- Affichage principal des données -->
    <div v-else>
      <div>
        <button class="modern-button" style="margin-bottom: 25px;" @click="activeModify">
          Modifier
        </button>
        <form v-if="modify" :action="`${apiUrl}/protected/modify`" method="post" class="form">
          <select name="urlModify" class="select" required>
            <option v-for="(value, idx) in data" :key="idx" :value="value.Link" class="option">
              {{ value.Link }}
            </option>
          </select>
          <input
            type="text"
            name="valueModify"
            required
            autocomplete="off"
            class="input"
            placeholder="Entrez votre nouveau lien"
          >
          <button type="submit">Modifier</button>
        </form>
      </div>

      <!-- Messages de notification -->
      <div v-if="message" class="message-prin">
        <div class="message-case">
          <h4 class="message">{{ message }}</h4>
        </div>
      </div>

      <div v-if="copied" class="message-prin">
        <div class="message-case-copied">
          <h4 class="message">{{ copied }}</h4>
        </div>
      </div>
      
      <!-- Tableau des liens -->
      <div id="div-data" class="card table-section">
        <h2 class="table-title">Vos Liens Récents</h2>
        <div class="table-container">
          <table class="dashbord-table">
            <thead>
              <tr>
                <th>N°</th>
                <th>Lien Original</th>
                <th>Slug</th>
                <th>Lien généré</th>
                <th>Clicks</th>
                <th>Clicks mobile</th>
                <th>Clicks pc</th>
                <th>Copier</th>
                <th>Vérification</th>
                <th>Suppression</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in data" :key="index">
                <td class="col-id">{{ index + 1 }}</td>
                <td class="col-link">
                  <span class="truncate">{{ item.Link }}</span>
                </td>
                <td><span class="badge-slug">{{ item.Slug }}</span></td>
                <td class="col-generated">{{ item.UrlGenerate }}</td>
                <td class="col-click"><strong>{{ item.ClickTotal }}</strong></td>
                <td class="col-click"><strong>{{ item.ClickMobile }}</strong></td>
                <td class="col-click"><strong>{{ item.ClickPC }}</strong></td>
                <td style="text-align: center;">
                  <button class="modern-button-variante" style="font-size: 1.6rem;" @click="copyText(item.UrlGenerate)">
                    📑
                  </button>
                </td>
                <td style="text-align: center;">
                  <button class="modern-button-variante" :disabled="verify" style="font-size: 1.7rem;" @click="verifyLink(item.Link)">
                    🔍
                  </button>
                </td>
                <td style="text-align: center;">
                  <form :action="`${apiUrl}/protected/delete`" method="post">
                    <button class="modern-button-delete" :value="item.Slug" name="slug" style="font-size: 1.6rem;">
                      🗑️
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.message {
  color: #e0e7ff;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}

.message-case {
  background: linear-gradient(135deg, #1e1b4b 0%, #2d2a5e 100%);
  top: 50%;
  left: 50%;
  border: 2px solid;
  width: 70%;
  border-radius: 5px;
  position: absolute;
  transform: translate(-50%, 0);
  z-index: 2;
  box-shadow: 0 4px 15px #0f172a;
}

.message-case-copied {
  background: linear-gradient(135deg, #1e1b4b 0%, #2d2a5e 100%);
  top: 50%;
  left: 50%;
  border: 2px solid;
  width: 12%;
  border-radius: 5px;
  position: absolute;
  transform: translate(-50%, 0);
  z-index: 2;
  box-shadow: 0 4px 15px #0f172a;
}

.message-prin {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.button {
  background: #3b82f6;
  color: white;
  margin-bottom: 10px;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.5s, box-shadow 0.5s, transform 0.5s;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.button:hover {
  background: #2563eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.button:active {
  transform: scale(0.98);
}

.form {
  margin-top: 1.5rem;
  background: white;
  padding: 1.8rem;
  border-radius: 24px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 500px;
  border: 1px solid #e9eef2;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.form::before {
  content: "Modifier un lien existant";
  font-size: 1.1rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.25rem;
}

.select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d9e6;
  border-radius: 16px;
  font-size: 0.95rem;
  background-color: #fafcff;
  transition: border 0.2s, box-shadow 0.2s;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234b5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
}

.select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
}

.input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d9e6;
  border-radius: 16px;
  font-size: 0.95rem;
  background-color: #fafcff;
  transition: border 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
}

.input[type="text"]:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
}

.form button[type="submit"] {
  background: #10b981;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 40px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.3);
  align-self: flex-start;
  min-width: 140px;
}

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


.form button[type="submit"]:hover {
  background: #059669;
  box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.4);
}

.option {
  background: white;
  color: #1e293b;
  padding: 0.5rem;
}

.form > * {
  margin: 0;
}

.main-wrapper {
  font-family: 'Inter', -apple-system, sans-serif;
  padding: 20px;
  background-color: #f8fafc;
}

.card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
  padding: 24px;
}

#div-data {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
  padding: 10px;
  overflow-y: auto;
  height: 500px;
}

.input-group {
  display: flex;
  gap: 12px;
}

.modern-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.modern-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.modern-button-variante {
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  padding: 4px 8px;
}

.modern-button-variante:hover {
  background-color: #2563eb;
}

.modern-button {
  background-color: #3b82f6;
  color: white;
  padding: 12px 15px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.modern-button:hover {
  background-color: #2563eb;
}

.modern-button:disabled {
  text-decoration: line-through;
  background-color: #9ca3af;
  opacity: 0.9;
}

.modern-button-delete {
  background-color: #fa3e3e;
  color: white;
  margin-left: 2px;
  border: none;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
  padding: 4px 8px;
}

.modern-button-delete:hover {
  background-color: #dc2626;
}

.table-title {
  font-size: 18px;
  color: #2a6df4;
  margin-bottom: 20px;
}

.table-container {
  overflow-x: auto;
}

.dashbord-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.dashbord-table th {
  background-color: #f1f5f9;
  color: #1e293b;
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  padding: 12px 17px;
  border-bottom: 2px solid #e2e8f0;
}

.dashbord-table td {
  padding: 16px;
  border-bottom: 1px solid #f1f5f9;
  color: #334155;
  font-size: 14px;
}

.badge-slug {
  background: #eff6ff;
  color: #3b82f6;
  padding: 4px 8px;
  border-radius: 6px;
  font-family: monospace;
  font-weight: bold;
}

@media (max-width: 640px) {
  .form {
    padding: 1.2rem;
    max-width: 100%;
  }

  .form button[type="submit"] {
    align-self: stretch;
  }

  .input-group {
    flex-direction: column;
  }

  .modern-button {
    width: 100%;
  }

  .message-case-copied {
    width: 20%;
  }

  .dashbord-table th,
  .dashbord-table td {
    padding: 12px;
    font-size: 15px;
  }
}
</style>

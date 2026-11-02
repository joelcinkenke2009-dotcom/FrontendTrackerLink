<script setup>
import { apiUrl } from '@/config/env';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const dataAdmins = ref([]);
const loading = ref(true);
const loadError = ref('');
const search = ref('');
const errorMessage = route.query.status === '401' ? 'Accès non autorisé.' : '';
const filteredAdmins = computed(() => dataAdmins.value.filter((user) =>
  [user.FullName, user.Email].some((value) =>
    String(value || '').toLowerCase().includes(search.value.toLowerCase())
  )
));

onMounted(async () => {
  try {
    const response = await fetch(apiUrl + '/admins', { credentials: 'include' });
    if (!response.ok) {
      throw new Error(response.status === 401 || response.status === 403
        ? 'Accès non autorisé.'
        : 'Impossible de charger les utilisateurs.');
    }
    const result = await response.json();
    dataAdmins.value = Array.isArray(result) ? result : [];
  } catch (error) {
    loadError.value = error.message || 'Une erreur est survenue.';
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <main class="admin-dashboard">
    <h1>Administration des abonnements</h1>
    <p v-if="errorMessage" class="error-message" role="alert">{{ errorMessage }}</p>
    <template v-else>
      <form :action="apiUrl + '/abonnement'" method="post" class="subscription-form">
        <label for="admin-user">Renouveler l'abonnement de</label>
        <select name="addDate" id="admin-user" required>
          <option value="">Sélectionnez un utilisateur</option>
          <option v-for="user in dataAdmins" :key="user.Id || user.Email" :value="user.Email">{{ user.Email }}</option>
        </select>
        <button type="submit">Confirmer</button>
      </form>

      <label for="admin-search" class="search-label">Rechercher un utilisateur</label>
      <input id="admin-search" v-model="search" type="search" class="search-input" placeholder="Nom ou adresse e-mail">

      <p v-if="loading" role="status">Chargement des utilisateurs…</p>
      <p v-else-if="loadError" class="error-message" role="alert">{{ loadError }}</p>
      <div v-else class="table-container">
        <table class="dashboard-table">
          <thead><tr><th>ID</th><th>Nom complet</th><th>E-mail</th><th>Date d'expiration</th></tr></thead>
          <tbody>
            <tr v-for="user in filteredAdmins" :key="user.Id || user.Email">
              <td>{{ user.Id }}</td>
              <td>{{ user.FullName }}</td>
              <td>{{ user.Email }}</td>
              <td>{{ user.ExpiredDate || user.expiredDate || '—' }}</td>
            </tr>
            <tr v-if="filteredAdmins.length === 0"><td colspan="4">Aucun utilisateur trouvé.</td></tr>
          </tbody>
        </table>
      </div>
    </template>
  </main>
</template>

<style scoped>
.admin-dashboard { max-width: 1100px; min-height: 65vh; margin: 0 auto; padding: 24px; color: #0f172a; }
h1 { margin: 0 0 24px; font-size: 1.6rem; }
.subscription-form { display: flex; align-items: end; flex-wrap: wrap; gap: 12px; margin-bottom: 24px; }
.subscription-form label, .search-label { display: block; font-weight: 600; color: #334155; }
select, .search-input { min-height: 42px; padding: 9px 12px; border: 1px solid #cbd5e1; border-radius: 8px; background: #fff; }
.subscription-form select { min-width: min(100%, 320px); }
button { min-height: 42px; padding: 9px 18px; border: 0; border-radius: 8px; background: #2563eb; color: white; font-weight: 600; cursor: pointer; }
.search-input { display: block; width: min(100%, 420px); margin: 8px 0 16px; }
.table-container { overflow-x: auto; border: 1px solid #e2e8f0; border-radius: 10px; }
.dashboard-table { width: 100%; border-collapse: collapse; text-align: left; }
.dashboard-table th { background: #f1f5f9; color: #1e293b; font-size: 12px; text-transform: uppercase; padding: 13px 16px; }
.dashboard-table td { padding: 14px 16px; border-top: 1px solid #e2e8f0; color: #334155; font-size: 14px; }
.error-message { color: #b91c1c; }
@media (max-width: 640px) { .admin-dashboard { padding: 16px; } .subscription-form { align-items: stretch; flex-direction: column; } .subscription-form select, .subscription-form button { width: 100%; } }
</style>

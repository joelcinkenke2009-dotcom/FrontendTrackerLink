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
const filteredAdmins = computed(() => dataAdmins.value.filter(user => [user.FullName, user.Email].some(value => String(value || '').toLowerCase().includes(search.value.toLowerCase()))));
onMounted(async () => {
  try {
    const response = await fetch(apiUrl + '/admins', { credentials: 'include' });
    if (!response.ok) throw new Error(response.status === 401 || response.status === 403 ? 'Accès non autorisé.' : 'Impossible de charger les administrateurs.');
    const result = await response.json();
    dataAdmins.value = Array.isArray(result) ? result : [];
  } catch (error) { loadError.value = error.message || 'Une erreur est survenue.'; }
  finally { loading.value = false; }
});
</script>

<template>
  <h2></h2>
  <h3 style="color: red;" v-if="errorMessage">{{ errorMessage }}</h3>
  <div v-else>
    <form :action="apiUrl + '/abonnement'" method="post">
      <select name="addDate" id="admin-user" required>
        <option value="">Selectionnez un utilisateur</option>
        <option v-for="value in dataAdmins" :key="value.Id || value.Email" :value="value.Email">{{ value.Email }}</option>
      </select>
      <button type="submit">Confirmer</button>
    </form>
    <div class="table-conteiner">
      <table class="dashboard-table">
        <thead>
          <tr>
            <th>id</th>
            <th>FullName</th>
            <th>Email</th>
            <th>ExpiredDate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="value in filteredAdmins" :key="value.Id || value.Email">
            <td>{{ value.Id }}</td>
            <td>{{ value.FullName }}</td>
            <td>{{ value.Email }}</td>
            <td>{{ value.ExpiredDate || value.expiredDate || "—" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
.table-conteiner {
  overflow-y: auto;
  overflow-x: auto;
  width: 100%;

}

.dashboard-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;

}

#user {
  width: 35%;
  height: 35px;
  border-radius: 6px;
  margin: 5px;
}

button{
  width: 15%;
  height: 35px;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  background-color: rgb(22, 22, 214);
}

.dashboard-table th {
  background-color: #f1f5f9;
  color: #1e293b;
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  letter-spacing: -0.5px;
  padding: 12px 17px;
  border-bottom: 2px solid #e2e8f0;
}

.dashboard-table td {
  padding: 16px;
  border-bottom: 1px solid #f1f5f9;
  color: #334155;
  font-size: 14px;
}

 .search-input { max-width: 420px; width: 100%; padding: 10px 12px; margin: 10px 0; border: 1px solid #cbd5e1; border-radius: 8px; }\n.error-message { color: #b91c1c; }\n@media (max-width: 640px) {

  .dashboard-table th,
  .dashboard-table td {
    padding: 12px;
    font-size: 15px;
  }
}
</style>
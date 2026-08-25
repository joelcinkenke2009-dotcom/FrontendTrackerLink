<script setup>
import { apiUrl } from '@/config/env';
import { ref } from 'vue';

const dataAdmins = ref([])

fetch(apiUrl + "/admins", { credentials: 'include' })
  .then(req => req.json())
  .then((res) => {
    dataAdmins.value = res
  })
</script>
<script>
export default {
  data() {
    return {
      errorMessage: ''
    }
  }, mounted() {
    const error = this.$route.query.status;
    if (error === "401") {
      this.errorMessage = "Accés non autorisé"
    }
  }
}
</script>
<template>
  <h2></h2>
  <h3 style="color: red;" v-if="errorMessage">{{ errorMessage }}</h3>
  <div v-else>
    <form :action="apiUrl + '/abonnement'" method="post">
      <select name="addDate" id="user">
        <option value="">Selectionnez un utilisateur</option>
        <option v-for="value in dataAdmins" :value="value.Email">{{ value.Email }}</option>
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
          <tr v-for="value in dataAdmins">
            <td>{{ value.Id }}</td>
            <td>{{ value.FullName }}</td>
            <td>{{ value.Email }}</td>
            <td>{{ value.IsActive }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
.table-conteiner {
  overflow-y: scroll;
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

@media (max-width: 640px) {

  .dashboard-table th,
  .dashboard-table td {
    padding: 12px;
    font-size: 15px;
  }
}
</style>
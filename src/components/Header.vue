<script setup>
import { ref } from 'vue';
import { apiUrl } from './config/env';

const nav = ref(false)
const connect = ref([])

const toggleNav = () => {
  nav.value = !nav.value
}

fetch(apiUrl + "/ISCONNECTED",{credentials: 'include'})
.then(req => req.json())
.then(res => {
  connect.value = res
  console.log(connect.value.connected);
  
})

</script>
<template>
  <header style="margin: 0;">
    <div class="logo navbar">
      <h2 style="font-size: 1.5rem;">Tracker<span style="font-size: 1.5rem;">Link</span></h2>
      <img src="../../Hamburger.png" alt="" width="54px" height="54px" srcset="" style="cursor: pointer;" @click="toggleNav">
    </div>
    <nav class="nav-menu" :class="{'active' : nav}">
      <a style="font-size: 17px;" href="/" class="nav-link">Accueil</a>
      <a style="font-size: 17px;" href="/dashboard" class="nav-link">Dashboard</a>
      <p style="font-size: 17px;" class="nav-co" v-if="connect.connected">Connected</p>
      <a style="font-size: 17px;" href="/inscription" class="nav-link btn-connexion" v-else>Connexion</a>
    </nav>
  </header>
</template>

<style scoped>
*{
  font-family: poppins,sans-serif;
}


.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: #0f172a;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Style du Logo */
.logo h2 {
  color:  #f8fafc;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -1px;
}

.logo span {
  color:  #3b82f6;
  margin-left: 2px;
}

/* Menu de navigation */
.nav-menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  background-color: #0f172a;
  padding: 20px;
  border-radius: 5px;
  margin-top: -100px;
  transition: 200ms;
  
}

.active{
  margin-top: 0px;
  transition: 250ms;
}

.nav-link {
  color: #dddee0; /* Gris doux */
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.nav-co{
  color: rgb(6, 241, 6); /* Gris doux */
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.nav-link:hover {
  color:  #f8fafc;
}

/* Bouton Connexion spécifique */
.btn-connexion {
  background-color: #3b82f6; ;
  color: white !important;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-connexion:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

/* --- RESPONSIVE --- */
@media (max-width: 768px) {
  *{
    font-size: 18px;
  }
  .navbar {
    padding: 1rem 1.5rem;
  }
  
  .nav-menu {
    gap: 1rem;
  }
  
  .logo h2 {
    font-size: 1.2rem;
  }
}
</style>

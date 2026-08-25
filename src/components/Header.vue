<script setup>
import { ref, onMounted } from 'vue';
import { apiUrl } from '@/config/env';

const isNavOpen = ref(false);
const connect = ref({ connected: false });

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

const checkAuthStatus = async () => {
  try {
    const res = await fetch(`${apiUrl}/ISCONNECTED`, { credentials: 'include' });
    connect.value = await res.json();
  } catch (err) {
    console.error('Erreur lors de la vérification de connexion:', err);
  }
};

onMounted(() => {
  checkAuthStatus();
});
</script>

<template>
  <header class="header-container">
    <div class="logo-navbar">
      <h2 class="brand-title">AD<span>Pulse</span></h2>
      <button 
        class="hamburger-btn" 
        :aria-expanded="isNavOpen"
        aria-label="Menu de navigation"
        @click="toggleNav"
      >
        <img src="../../Hamburger.png" alt="" width="42" height="42" />
      </button>
    </div>

    <nav class="nav-menu" :class="{ 'active': isNavOpen }">
      <RouterLink to="/" class="nav-link" @click="isNavOpen = false">Accueil</RouterLink>
      <RouterLink to="/dashboard" class="nav-link" @click="isNavOpen = false">Link Track</RouterLink>
      <RouterLink to="/dashboardADS" class="nav-link" @click="isNavOpen = false">AD Auditor</RouterLink>
      
      <span v-if="connect.connected" class="nav-co">Connecté</span>
      <RouterLink v-else to="/inscription" class="nav-link btn-connexion" @click="isNavOpen = false">
        Connexion
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header-container {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  position: relative;
}

.logo-navbar {
  display: flex;
  border-radius:  20px 20px 0 0;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: linear-gradient(to right, #11097a, #0f172a);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.brand-title {
  color: #f8fafc;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0;
}

.brand-title span {
  color: #3b82f6;
  margin-left: 2px;
}

.hamburger-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
}

/* Menu de navigation */
.nav-menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  border-radius: 0 0 20px 20px;
  background-color: #0f172a;
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: max-height 0.3s ease-out, opacity 0.2s ease-out, padding 0.3s ease, visibility 0.3s;
}

.nav-menu.active {
  max-height: 300px;
  padding: 20px;
  opacity: 1;
  visibility: visible;
}

.nav-link {
  color: #dddee0;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-link:hover {
  color: #f8fafc;
}

.nav-co {
  color: #22c55e;
  font-weight: 600;
  font-size: 0.95rem;
}

/* Bouton Connexion */
.btn-connexion {
  background-color: #3b82f6;
  color: #ffffff !important;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
}

.btn-connexion:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

/* Responsive Mobile */
@media (max-width: 768px) {
  .logo-navbar {
    padding: 1rem 1.5rem;
  }
  
  .brand-title {
    font-size: 1.2rem;
  }

  .nav-menu {
    flex-direction: column;
    gap: 1.2rem;
  }
}
</style>

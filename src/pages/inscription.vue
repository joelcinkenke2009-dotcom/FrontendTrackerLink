<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { apiUrl } from '@/config/env';

const route = useRoute();
const view = ref(false);
const password = ref('');
const passwordConfirm = ref('');
const errorMessages = {
  '401': 'Cette adresse e-mail est déjà utilisée. Veuillez vous connecter.',
  '402': 'Vous êtes déjà connecté actuellement.',
  '403': 'Les mots de passe ne correspondent pas.'
};
const errorMessage = errorMessages[String(route.query.error || '')] || '';
const validatePasswords = (event) => {
  if (password.value !== passwordConfirm.value) {
    event.preventDefault();
    passwordConfirm.value = passwordConfirm.value;
    window.alert('Les mots de passe ne correspondent pas.');
  }
};
</script>



<template>
  <div class="auth-container">
    <form :action="apiUrl + '/users/inscription'" method="post" class="auth-form" @submit="validatePasswords">
      <h4 class="subtitle" style="color: red;">{{ errorMessage }}</h4>
      <h2>Créer un compte</h2>
      <p class="subtitle">Entrez vos informations pour configurer votre base de données</p>
      <div class="form-row">
        <div class="form-group">
          <label for="signup-name">Nom</label>
          <input type="text" id="signup-name" name="name" placeholder="Ex: Jean" autocomplete="given-name" required minlength="3">
        </div>
        <div class="form-group">
          <label for="signup-firstname">Prénom</label>
          <input type="text" id="signup-firstname" name="firstName" placeholder="Ex: Dupont" autocomplete="family-name" required minlength="3">
        </div>
      </div>
      <div class="form-group">
        <label for="signup-email">Email</label>
        <input type="email" id="signup-email" name="email" placeholder="nom@exemple.com" autocomplete="email" required>
      </div>
      <div class="form-row2">
        <div class="form-group">
          <label for="signup-password">Mot de passe</label>
          <input :type="view ? 'text': 'password'" id="signup-password" name="password" placeholder="********" autocomplete="new-password" required :minlength="8" v-model=password>
        </div>
        <div class="form-group">
          <label for="signup-confirm">Confirmation</label>
          <input id="signup-confirm" name="passwordConfirm" :type="view ? 'text': 'password'" placeholder="********" required :minlength="8" autocomplete="new-password" v-model="passwordConfirm">
        </div>
      </div>
      <input type="checkbox" name="checs" id="show-password" v-model="view">
      <label for="show-password">Afficher le mot de passe</label>
      <hr class="divider">
      <button type="submit" class="btn-submit">S'inscrire</button>
      <p class="footer-text"> Déjà un compte ? <RouterLink to="/connexion">Se connecter</RouterLink> </p>
    </form>
  </div>
</template>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #020617;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
}

.auth-form {
  background-color: #0f172a;
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid #1e293b;
  width: 100%;
  max-width: 550px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
}

h2 {
  color: #f8fafc;
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
  text-align: center;
}

.subtitle {
  color: #94a3b8;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

.form-row {
  gap: 1rem;
  margin-bottom: 1.2rem;
}

.form-row2 {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  margin-bottom: 0.75rem;
}

label {
  color: #38bdf8;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

input {
  background-color: #1e293b;
  border: 1px solid #334155;
  border-radius: 6px;
  padding: 0.75rem;
  color: #f8fafc;
  transition: all 0.2s;
}

input:focus {
  outline: none;
  border-color: #38bdf8;
  box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
}

.divider {
  border: 0;
  border-top: 1px solid #334155;
  margin: 1.5rem 0;
}

.btn-submit {
  width: 100%;
  background-color: #38bdf8;
  color: #0f172a;
  padding: 0.8rem;
  border-radius: 6px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  transition: transform 0.2s, background-color 0.2s;
}

.btn-submit:hover {
  background-color: #7dd3fc;
  transform: translateY(-2px);
}

.footer-text {
  color: #94a3b8;
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
}

.footer-text a {
  color: #38bdf8;
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 768px) {
  .auth-form {
    padding: 1.5rem;
  }
  .form-row {
    flex-direction: column;
  }
  .form-row2 {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .auth-form {
    padding: 1rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  .subtitle {
    font-size: 0.8rem;
  }
  .btn-submit {
    padding: 0.6rem;
  }
}
</style>

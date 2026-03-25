<script setup>
import { apiUrl } from '@/components/config/env';
import { ref } from 'vue';
const view = ref(false)
const password = ref("")

</script>

<script>
export default{
  data(){
    return{
      errorMessage:''
    }
  },
  mounted(){
    const error = this.$route.query.error;
    if(error === "403"){
      this.errorMessage = "Trop de tentatives. Réessayez dans 24h."
    }
    if (error === "401") {
      this.errorMessage = "Cette email n'existe pas"
    }
    if (error === "401Unautorized") {
      this.errorMessage = "Mot de passe incorrecte"
    }
    if (error === "402") {
      this.errorMessage = "Vous étés déjà connecté"
    }
  }
}

</script>

<template>
  <div class="auth-container">
    <form :action="apiUrl + '/users/connexion'" method="post" class="auth-form">
      <h4 class="subtitle" style="color: red;">{{ errorMessage }}</h4>
      <h2>Se connecter</h2>
      <p class="subtitle">Entrez votre identifiant et mot de passe</p>
      <br>
      <div class="form-row">
        <div class="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="nom@exemple.com" required autocomplete="off">
        </div>
        <div class="form-group">
          <label>Mot de passe</label>
          <input :type="view ? 'text': 'password'" name="password" placeholder="********" required :minlength="8" autocomplete="off" v-model="password">
        </div>
      </div>
      <input type="checkbox" name="checs" id="" v-model="view">
      <label>Afficher le mot de passe</label>
      <button type="submit" class="btn-submit">Se connecter</button>
      <p class="footer-text"> Pas de compte ? <RouterLink to="/inscription">S'inscrire</RouterLink> </p>
    </form>
  </div>
</template>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;      
  background-color:#020617;
  font-family: 'Inter', sans-serif;
  padding: 2rem;
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
  display: flex;
  gap: 1rem;
  margin-bottom: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  flex: 1;
  margin-bottom: 1rem;
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

.btn-submit {
  width: 100%;
  background-color: #38bdf8;
  color: #0f172a;
  padding: 00.8rem;
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
  font-size: 00.9rem;
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

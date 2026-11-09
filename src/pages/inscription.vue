<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { apiUrl } from '@/config/env';
import GoogleSignIn from '@/components/GoogleSignIn.vue';

const route = useRoute();
const view = ref(false);
const password = ref('');
const passwordConfirm = ref('');
const formError = ref('');

const errorMessages = {
  '401': 'Cette adresse e-mail est déjà utilisée. Connectez-vous ou utilisez une autre adresse.',
  '402': 'Vous êtes déjà connecté actuellement.',
  '403': 'Les mots de passe ne correspondent pas.'
};
const errorMessage = errorMessages[String(route.query.error || '')] || '';

const validatePasswords = (event) => {
  formError.value = '';
  const form = event.currentTarget;

  // Normalize user-entered identity fields before submitting the existing API contract.
  for (const fieldName of ['name', 'firstName', 'email']) {
    const field = form.elements.namedItem(fieldName);
    if (field) {
      field.value = field.value.trim();
      field.setCustomValidity(field.value ? '' : 'Ce champ est obligatoire.');
      if (!field.value) {
        event.preventDefault();
        field.reportValidity();
        return;
      }
    }
  }

  if (password.value !== passwordConfirm.value) {
    event.preventDefault();
    formError.value = 'Les deux mots de passe ne correspondent pas.';
  }
};
</script>

<template>
  <main class="auth-container">
    <section class="auth-card" aria-labelledby="signup-title">
      <header class="auth-heading">
        <a class="brand" href="/" aria-label="AdPulse, accueil"><span class="brand-mark">▥</span> Ad<span>Pulse</span></a>
        <p class="eyebrow">VOTRE SUIVI PUBLICITAIRE, PLUS SIMPLE</p>
        <h1 id="signup-title">Commencez gratuitement avec AdPulse</h1>
        <p class="subtitle">Créez votre compte et commencez à suivre vos liens gratuitement.</p>
        <div class="free-benefits" aria-label="Avantages de l'offre gratuite">
          <span>✓ 1 lien offert</span>
          <span>✓ 30 clics inclus</span>
          <span>✓ Sans carte bancaire</span>
        </div>
      </header>

      <p v-if="errorMessage" class="form-alert" role="alert">{{ errorMessage }}</p>
      <GoogleSignIn mode="signup" />

      <form :action="apiUrl + '/users/inscription'" method="post" class="auth-form" @submit="validatePasswords">
        <div v-if="formError" class="form-alert" role="alert">{{ formError }}</div>

        <div class="form-row">
          <div class="form-group">
            <label for="signup-name">Nom</label>
            <input
              type="text" id="signup-name" name="name" placeholder="Ex. : Dupont"
              autocomplete="family-name" required minlength="1" maxlength="250"
              autocapitalize="words"
            >
          </div>
          <div class="form-group">
            <label for="signup-firstname">Prénom</label>
            <input
              type="text" id="signup-firstname" name="firstName" placeholder="Ex. : Jean"
              autocomplete="given-name" required minlength="1" maxlength="250"
              autocapitalize="words"
            >
          </div>
        </div>

        <div class="form-group">
          <label for="signup-email">Adresse e-mail</label>
          <input
            type="email" id="signup-email" name="email" placeholder="nom@exemple.com"
            autocomplete="email" inputmode="email" autocapitalize="none"
            spellcheck="false" required maxlength="250"
          >
        </div>

        <div class="form-row password-row">
          <div class="form-group">
            <label for="signup-password">Mot de passe</label>
            <input
              :type="view ? 'text' : 'password'" id="signup-password" name="password"
              placeholder="8 caractères minimum" autocomplete="new-password"
              required minlength="8" v-model="password"
            >
          </div>
          <div class="form-group">
            <label for="signup-confirm">Confirmer le mot de passe</label>
            <input
              :type="view ? 'text' : 'password'" id="signup-confirm" name="passwordConfirm"
              placeholder="Répétez le mot de passe" autocomplete="new-password"
              required minlength="8" v-model="passwordConfirm"
            >
          </div>
        </div>

        <label class="show-password" for="show-password">
          <input type="checkbox" id="show-password" v-model="view">
          <span>Afficher le mot de passe</span>
        </label>

        <button type="submit" class="btn-submit">Créer mon compte gratuit <span aria-hidden="true">→</span></button>
        <p class="footer-text">Déjà un compte ? <RouterLink to="/connexion">Se connecter</RouterLink></p>
      </form>
    </section>
  </main>
</template>

<style scoped>
.auth-container {
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: clamp(1rem, 4vw, 2.5rem);
  box-sizing: border-box;
  background:
    radial-gradient(circle at 8% 4%, rgba(59, 130, 246, .12), transparent 28rem),
    linear-gradient(145deg, #f8fbff 0%, #eef4ff 100%);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #172554;
}
.auth-card {
  width: min(100%, 620px);
  margin: auto;
  padding: clamp(1.25rem, 4vw, 2.7rem);
  box-sizing: border-box;
  border: 1px solid #dbe7fb;
  border-radius: 24px;
  background: rgba(255, 255, 255, .97);
  box-shadow: 0 24px 70px rgba(30, 64, 175, .10);
}
.auth-heading { text-align: center; }
.brand {
  display: inline-flex;
  align-items: center;
  gap: .2rem;
  margin-bottom: 1.25rem;
  color: #111827;
  text-decoration: none;
  font-size: 1.65rem;
  font-weight: 850;
  letter-spacing: -.06em;
}
.brand span:last-child { color: #2563eb; }
.brand-mark { color: #2563eb; font-size: 1.5rem; }
.eyebrow {
  margin: 0 0 .6rem;
  color: #2563eb;
  font-size: .7rem;
  font-weight: 800;
  letter-spacing: .12em;
}
h1 {
  margin: 0 auto .75rem;
  max-width: 18ch;
  color: #111827;
  font-size: clamp(1.65rem, 4.5vw, 2.15rem);
  line-height: 1.15;
  letter-spacing: -.045em;
}
.subtitle {
  margin: 0 auto 1.2rem;
  max-width: 42ch;
  color: #64748b;
  font-size: .98rem;
  line-height: 1.55;
}
.free-benefits {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: .45rem;
  margin: 1rem 0 1.25rem;
}
.free-benefits span {
  padding: .38rem .65rem;
  border: 1px solid #bfdbfe;
  border-radius: 999px;
  background: #eff6ff;
  color: #1d4ed8;
  font-size: .76rem;
  font-weight: 700;
}
.auth-form { display: flex; flex-direction: column; gap: .95rem; }
.form-row { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .85rem; }
.form-group { display: flex; flex-direction: column; gap: .42rem; min-width: 0; }
.form-group label {
  color: #334155;
  font-size: .86rem;
  font-weight: 700;
}
.form-group input {
  width: 100%;
  min-height: 48px;
  box-sizing: border-box;
  padding: .78rem .9rem;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  outline: none;
  background: #fff;
  color: #0f172a;
  font: inherit;
  font-size: .95rem;
  transition: border-color .18s ease, box-shadow .18s ease;
}
.form-group input::placeholder { color: #94a3b8; }
.form-group input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, .14);
}
.show-password {
  display: inline-flex;
  align-items: center;
  gap: .55rem;
  width: fit-content;
  color: #475569;
  font-size: .88rem;
  font-weight: 600;
  cursor: pointer;
}
.show-password input { width: 18px; height: 18px; accent-color: #2563eb; }
.btn-submit {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .65rem;
  width: 100%;
  min-height: 52px;
  margin-top: .25rem;
  padding: .85rem 1rem;
  border: 0;
  border-radius: 13px;
  background: linear-gradient(105deg, #2563eb, #4f6df5);
  color: #fff;
  font: inherit;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(37, 99, 235, .20);
  transition: transform .18s ease, box-shadow .18s ease;
}
.btn-submit:hover { transform: translateY(-1px); box-shadow: 0 14px 28px rgba(37, 99, 235, .25); }
.btn-submit:focus-visible { outline: 3px solid #93c5fd; outline-offset: 3px; }
.form-alert {
  margin: .8rem 0;
  padding: .8rem .9rem;
  border: 1px solid #fecaca;
  border-radius: 12px;
  background: #fef2f2;
  color: #b91c1c;
  font-size: .86rem;
  line-height: 1.45;
}
.footer-text {
  margin: .15rem 0 0;
  color: #64748b;
  text-align: center;
  font-size: .88rem;
}
.footer-text a { color: #2563eb; font-weight: 800; text-decoration: none; }
.footer-text a:hover { text-decoration: underline; }
@media (max-width: 560px) {
  .auth-container { padding: .75rem; }
  .auth-card { padding: 1.2rem 1rem; border-radius: 18px; }
  .form-row { grid-template-columns: 1fr; gap: .85rem; }
  .password-row { grid-template-columns: 1fr; }
  .free-benefits { gap: .35rem; }
  .free-benefits span { font-size: .7rem; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; }
}
</style>

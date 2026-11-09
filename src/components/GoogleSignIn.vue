<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { apiUrl } from '@/config/env'

const props = defineProps({
  mode: { type: String, default: 'signin' }
})

const router = useRouter()
const container = ref(null)
const message = ref('')
const loading = ref(false)
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

let active = true
let scriptPromise

function loadGoogleIdentity() {
  if (window.google?.accounts?.id) return Promise.resolve()
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-google-identity]')
    if (existing) {
      existing.addEventListener('load', resolve, { once: true })
      existing.addEventListener('error', reject, { once: true })
      if (window.google?.accounts?.id) resolve()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    script.dataset.googleIdentity = 'true'
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
  return scriptPromise
}

async function handleGoogleCredential(response) {
  if (!active || loading.value) return
  loading.value = true
  message.value = ''

  try {
    const result = await fetch(`${apiUrl}/users/google`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ credential: response.credential })
    })

    if (!result.ok) {
      const data = await result.json().catch(() => ({}))
      const errors = {
        google_not_configured: 'La connexion Google n’est pas encore configurée.',
        google_verification_failed: 'Google n’a pas pu vérifier cette connexion. Réessayez.',
        origin_not_allowed: 'Cette origine n’est pas autorisée à se connecter.',
        subscription_initialization_failed: 'Votre compte a été créé, mais sa préparation a échoué. Contactez le support.'
      }
      throw new Error(errors[data.error] || 'Connexion impossible. Réessayez ou utilisez votre adresse e-mail.')
    }

    await router.replace('/dashboard')
  } catch (error) {
    message.value = error.message || 'Connexion Google indisponible. Utilisez votre adresse e-mail.'
  } finally {
    loading.value = false
  }
}

async function renderGoogleButton() {
  if (!clientId) {
    message.value = 'La connexion Google sera activée dès que VITE_GOOGLE_CLIENT_ID sera configuré.'
    return
  }

  try {
    await loadGoogleIdentity()
    if (!active || !container.value) return

    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: handleGoogleCredential,
      auto_select: false,
      cancel_on_tap_outside: true
    })

    const width = Math.max(200, Math.min(400, Math.floor(container.value.getBoundingClientRect().width)))
    window.google.accounts.id.renderButton(container.value, {
      type: 'standard',
      theme: 'outline',
      size: 'large',
      text: props.mode === 'signup' ? 'signup_with' : 'signin_with',
      shape: 'rectangular',
      logo_alignment: 'left',
      width,
      locale: 'fr'
    })
  } catch {
    message.value = 'Le service Google ne répond pas. Vous pouvez continuer avec votre adresse e-mail.'
  }
}

onMounted(async () => {
  await nextTick()
  await renderGoogleButton()
})

onBeforeUnmount(() => {
  active = false
})
</script>

<template>
  <section v-if="clientId" class="google-auth" aria-label="Authentification Google">
    <div class="google-divider"><span>ou</span></div>
    <div ref="container" class="google-button"></div>
    <p v-if="loading" class="google-status" role="status">Connexion en cours…</p>
    <p v-else-if="message" class="google-status" role="status">{{ message }}</p>
  </section>
  <p v-else class="google-unavailable" role="status">
    L’inscription avec Google n’est pas encore activée. Vous pouvez créer votre compte avec votre adresse e-mail ci-dessous.
  </p>
</template>

<style scoped>
.google-auth {
  width: 100%;
  margin: 1.15rem 0 1.4rem;
}
.google-divider {
  display: flex;
  align-items: center;
  gap: .8rem;
  margin-bottom: 1.1rem;
  color: #94a3b8;
  font-size: .82rem;
}
.google-divider::before,
.google-divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #334155;
}
.google-button {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 42px;
}
.google-button :deep(iframe) {
  max-width: 100%;
}
.google-status {
  margin: .65rem 0 0;
  color: #b45309;
  text-align: center;
  font-size: .82rem;
  line-height: 1.45;
}
.google-unavailable {
  margin: .7rem 0 1.2rem;
  padding: .75rem .9rem;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  background: #eff6ff;
  color: #1d4ed8;
  text-align: center;
  font-size: .82rem;
  line-height: 1.45;
}
@media (max-width: 380px) {
  .google-auth { margin: .9rem 0 1.1rem; }
}
</style>

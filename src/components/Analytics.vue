<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { apiUrl } from '@/config/env'

const summary = ref({ clicks: 0, mobile: 0, desktop: 0, conversions: 0, suspicious: 0, daily: [] })
const live = ref([])
const fraud = ref([])
const conversions = ref([])
const links = ref([])
const loading = ref(true)
const premiumRequired = ref(false)
const error = ref('')
const lastUpdated = ref('')
const form = ref({ slug: '', event_name: 'purchase', value: 0, currency: 'USD' })
const saving = ref(false)
const notice = ref('')
let refreshTimer

const conversionRate = computed(() => summary.value.clicks ? (summary.value.conversions / summary.value.clicks * 100).toFixed(1) : '0.0')
const chartMax = computed(() => Math.max(1, ...summary.value.daily.map(item => Number(item.clicks || 0))))
const chartBars = computed(() => summary.value.daily.map(item => ({
  ...item,
  height: Math.max(4, Number(item.clicks || 0) / chartMax.value * 100),
  label: new Date(item.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })
})))

async function api(path, options = {}) {
  const response = await fetch(`${apiUrl}${path}`, { credentials: 'include', ...options })
  if (!response.ok) {
    if (response.status === 401) throw new Error('Votre session a expiré. Reconnectez-vous pour consulter vos statistiques.')
    throw new Error(`Erreur serveur (${response.status})`)
  }
  return response
}

async function refreshAll() {
  try {
    const planResponse = await api('/isActive')
    const plan = await planResponse.json()
    if (!plan.analytics_enabled) {
      premiumRequired.value = true
      error.value = ''
      loading.value = false
      return
    }
    premiumRequired.value = false
    const [stats, activity, quality, conv, linksResponse] = await Promise.all([
      api('/protected/analytics/summary').then(r => r.json()),
      api('/protected/analytics/live').then(r => r.json()),
      api('/protected/analytics/fraud').then(r => r.json()),
      api('/protected/analytics/conversions').then(r => r.json()),
      api('/protected/data').then(r => r.json())
    ])
    summary.value = stats
    live.value = activity.events || []
    fraud.value = quality.alerts || []
    conversions.value = conv.conversions || []
    links.value = Array.isArray(linksResponse) ? linksResponse : []
    lastUpdated.value = new Date().toLocaleTimeString('fr-FR')
    error.value = ''
  } catch (err) {
    error.value = err.message || 'Impossible de charger les analyses.'
  } finally {
    loading.value = false
  }
}

async function recordConversion() {
  if (!form.value.slug) {
    notice.value = 'Sélectionnez un lien avant d’enregistrer une conversion.'
    return
  }
  saving.value = true
  notice.value = ''
  try {
    await api('/protected/analytics/conversions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })
    notice.value = 'Conversion enregistrée.'
    form.value.value = 0
    await refreshAll()
  } catch (err) {
    notice.value = err.message
  } finally {
    saving.value = false
  }
}

async function downloadReport() {
  try {
    const response = await api('/protected/analytics/report')
    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'adpulse-rapport-30-jours.csv'
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
    URL.revokeObjectURL(url)
    notice.value = 'Votre rapport des 30 derniers jours est prêt.'
  } catch (err) {
    notice.value = err.message
  }
}

function formatDate(value) {
  return new Date(value).toLocaleString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
}

onMounted(() => {
  refreshAll()
  refreshTimer = window.setInterval(refreshAll, 15000)
})
onUnmounted(() => window.clearInterval(refreshTimer))
</script>

<template>
  <main class="analytics-page">
    <section class="analytics-heading">
      <div>
        <p class="eyebrow">ADPULSE · INTELLIGENCE</p>
        <h1>Analytics <span>Dashboard</span></h1>
        <p class="subtitle">Comprenez vos performances, suivez vos conversions et surveillez la qualité du trafic.</p>
      </div>
      <div v-if="!premiumRequired" class="heading-actions">
        <span class="live-indicator"><i></i> Actualisation automatique · 15 s</span>
        <button class="report-button" @click="downloadReport">↓ Exporter le rapport</button>
      </div>
    </section>

    <p v-if="error" class="notice error" role="alert">{{ error }}</p>
    <p v-if="notice" class="notice" role="status">{{ notice }}</p>

    <section v-if="premiumRequired" class="panel premium-wall">
      <p class="eyebrow">ADPULSE · ANALYTICS PREMIUM</p>
      <h2>L'analyse est incluse dans les formules Avancé et Illimité.</h2>
      <p>Choisissez l'offre à 19 $ pour 20 liens et 1 250 clics, ou l'offre à 59 $ pour des liens et clics illimités.</p>
      <div class="payment-grid">
        <form :action="apiUrl + '/paiement/initialisation3'" method="post" class="payment-plan">
          <h3>Avancé · 19 $</h3><p>20 liens · 1 250 clics · Analytics</p>
          <button class="report-button" type="submit">S'abonner à 17,10 $</button>
        </form>
        <form :action="apiUrl + '/paiement/initialisation2'" method="post" class="payment-plan">
          <h3>Illimité · 59 $</h3><p>Liens et clics illimités · Analytics</p>
          <button class="report-button" type="submit">S'abonner à 53,10 $</button>
        </form>
      </div>
    </section>

    <section v-if="!premiumRequired" class="metric-grid" aria-label="Indicateurs clés">
      <article class="metric-card primary">
        <span class="metric-icon">↗</span><p>Clics suivis</p>
        <strong>{{ Number(summary.clicks || 0).toLocaleString('fr-FR') }}</strong>
        <small>Depuis la création de vos liens</small>
      </article>
      <article class="metric-card">
        <span class="metric-icon">◎</span><p>Conversions · 30 jours</p>
        <strong>{{ Number(summary.conversions || 0).toLocaleString('fr-FR') }}</strong>
        <small>Taux de conversion : {{ conversionRate }} %</small>
      </article>
      <article class="metric-card">
        <span class="metric-icon">▣</span><p>Trafic mobile</p>
        <strong>{{ Number(summary.mobile || 0).toLocaleString('fr-FR') }}</strong>
        <small>{{ summary.clicks ? (summary.mobile / summary.clicks * 100).toFixed(1) : 0 }} % des clics suivis</small>
      </article>
      <article class="metric-card warning">
        <span class="metric-icon">⛨</span><p>Signaux suspects · 30 jours</p>
        <strong>{{ Number(summary.suspicious || 0).toLocaleString('fr-FR') }}</strong>
        <small>Bots et clics répétés détectés</small>
      </article>
    </section>

    <section v-if="!premiumRequired" class="analytics-columns">
      <article class="panel chart-panel">
        <div class="panel-heading">
          <div><p class="eyebrow">TENDANCE</p><h2>Activité sur 14 jours</h2></div>
          <span class="panel-tag">Clics valides</span>
        </div>
        <div v-if="chartBars.length" class="bar-chart">
          <div v-for="bar in chartBars" :key="bar.date" class="bar-column">
            <strong>{{ bar.clicks }}</strong>
            <div class="bar-track"><i :style="{ height: bar.height + '%' }"></i></div>
            <small>{{ bar.label }}</small>
          </div>
        </div>
        <div v-else class="empty-state">Les données de tendance apparaîtront à mesure que vos nouveaux clics seront enregistrés.</div>
        <p class="chart-footnote">Les données historiques antérieures à l'activation du suivi détaillé restent disponibles dans le total des clics, mais pas dans cette courbe.</p>
      </article>

      <article class="panel live-panel">
        <div class="panel-heading">
          <div><p class="eyebrow">EN DIRECT</p><h2>Activité récente</h2></div>
          <span class="live-pill"><i></i> LIVE</span>
        </div>
        <div v-if="live.length" class="activity-list">
          <div v-for="(event, index) in live.slice(0, 9)" :key="index" class="activity-row">
            <span class="activity-dot" :class="{ suspicious: event.bot || event.duplicate, conversion: event.type === 'conversion' }"></span>
            <div class="activity-copy">
              <strong>{{ event.type === 'conversion' ? (event.name || 'Conversion') : 'Visite du lien' }}</strong>
              <small>{{ event.slug }} <template v-if="event.utm_source">· {{ event.utm_source }}</template></small>
            </div>
            <time>{{ formatDate(event.at) }}</time>
          </div>
        </div>
        <div v-else class="empty-state">Aucun événement récent. Les prochaines visites apparaîtront ici.</div>
        <p class="updated-at">Dernière actualisation : {{ lastUpdated || '—' }}</p>
      </article>
    </section>

    <section v-if="!premiumRequired" class="analytics-columns lower-columns">
      <article class="panel fraud-panel">
        <div class="panel-heading">
          <div><p class="eyebrow">PROTECTION</p><h2>Détection intelligente</h2></div>
          <span class="panel-tag">{{ fraud.length }} lien(s) signalé(s)</span>
        </div>
        <p class="panel-description">Les robots, préchargements et répétitions rapides sont isolés des clics valides. Les signaux restent indicatifs et ne constituent pas une preuve de fraude.</p>
        <div v-if="fraud.length" class="fraud-list">
          <div v-for="item in fraud" :key="item.slug" class="fraud-row">
            <div><strong>{{ item.slug }}</strong><small>{{ item.bots }} bot(s) · {{ item.repeated }} répétition(s)</small></div>
            <span>{{ item.total }} signal(aux)</span>
          </div>
        </div>
        <div v-else class="clean-state">✓ Aucun signal suspect enregistré sur les 30 derniers jours.</div>
      </article>

      <article class="panel conversion-panel">
        <div class="panel-heading">
          <div><p class="eyebrow">OBJECTIFS</p><h2>Conversion tracking</h2></div>
          <span class="panel-tag">Événements</span>
        </div>
        <form class="conversion-form" @submit.prevent="recordConversion">
          <label>Lien associé
            <select v-model="form.slug" required>
              <option value="" disabled>Choisir un lien</option>
              <option v-for="link in links" :key="link.Slug" :value="link.Slug">{{ link.Slug }}</option>
            </select>
          </label>
          <div class="form-row">
            <label>Événement
              <select v-model="form.event_name">
                <option value="purchase">Achat</option><option value="lead">Prospect</option>
                <option value="signup">Inscription</option><option value="add_to_cart">Ajout au panier</option>
              </select>
            </label>
            <label>Valeur
              <input v-model.number="form.value" type="number" min="0" step="0.01">
            </label>
          </div>
          <label>Devise
            <select v-model="form.currency"><option>USD</option><option>EUR</option><option>CDF</option><option>XAF</option><option>XOF</option></select>
          </label>
          <button class="submit-button" type="submit" :disabled="saving || !links.length">{{ saving ? 'Enregistrement…' : 'Enregistrer une conversion' }}</button>
        </form>
      </article>
    </section>

    <section v-if="!premiumRequired" class="panel report-panel">
      <div><p class="eyebrow">RAPPORTS</p><h2>Vos performances, prêtes à partager</h2><p class="panel-description">Export CSV des événements des 30 derniers jours : clics, conversions, paramètres UTM et signaux de trafic suspect.</p></div>
      <button class="report-button" @click="downloadReport">Générer le rapport CSV ↓</button>
    </section>

    <section v-if="!premiumRequired" class="panel conversion-history">
      <div class="panel-heading"><div><p class="eyebrow">RÉSULTATS</p><h2>Dernières conversions</h2></div><span class="panel-tag">{{ conversions.length }} événement(s)</span></div>
      <div v-if="conversions.length" class="history-table">
        <div class="history-head"><span>Lien</span><span>Événement</span><span>Valeur</span><span>Date</span></div>
        <div v-for="(item, index) in conversions.slice(0, 8)" :key="index" class="history-row">
          <span>{{ item.slug }}</span><span>{{ item.name }}</span><strong>{{ Number(item.value).toFixed(2) }} {{ item.currency }}</strong><time>{{ formatDate(item.at) }}</time>
        </div>
      </div>
      <div v-else class="empty-state">Aucune conversion enregistrée pour le moment.</div>
    </section>
    <footer class="analytics-footer">AdPulse Analytics · <span>Des décisions basées sur vos données.</span></footer>
  </main>
</template>

<style scoped>
.analytics-page{--ink:#17233b;--muted:#75819a;--line:#e7ebf3;--blue:#4268f5;max-width:1440px;margin:0 auto;padding:38px clamp(16px,4vw,54px) 54px;color:var(--ink);font-family:Inter,system-ui,sans-serif}
.analytics-heading{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;margin-bottom:28px}.eyebrow{font-size:10px;font-weight:800;letter-spacing:1.8px;color:#7b8aa7;margin:0 0 9px}.analytics-heading h1{font-size:clamp(30px,4vw,42px);letter-spacing:-1.8px;margin:0;font-weight:800}.analytics-heading h1 span{color:var(--blue)}.subtitle,.panel-description{color:var(--muted);line-height:1.65;margin:9px 0 0;font-size:14px}.heading-actions{display:flex;align-items:center;gap:14px;flex-wrap:wrap}.live-indicator{font-size:11px;color:#687792}.live-indicator i,.live-pill i{display:inline-block;width:7px;height:7px;background:#20c58b;border-radius:50%;margin-right:6px;box-shadow:0 0 0 4px #20c58b20}.report-button,.submit-button{border:0;border-radius:11px;background:#263d75;color:white;padding:12px 17px;font-weight:700;font-size:12px;cursor:pointer;transition:.2s}.report-button:hover,.submit-button:hover{background:#4268f5;transform:translateY(-1px)}.notice{background:#edf4ff;color:#2451ad;padding:12px 15px;border-radius:10px;font-size:13px;margin:0 0 18px}.notice.error{background:#fff0f0;color:#b42318}
.metric-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:15px;margin-bottom:18px}.metric-card,.panel{background:#fff;border:1px solid var(--line);border-radius:17px;box-shadow:0 8px 26px #1e31500a}.metric-card{padding:20px;position:relative;overflow:hidden}.metric-card p{font-size:12px;color:#7a869d;margin:10px 0 7px;font-weight:600}.metric-card strong{display:block;font-size:30px;letter-spacing:-1px}.metric-card small{display:block;color:#929db0;font-size:10px;margin-top:6px}.metric-icon{width:31px;height:31px;display:grid;place-items:center;border-radius:10px;background:#eef2ff;color:#4268f5;font-weight:900}.metric-card.primary{background:linear-gradient(140deg,#182c58,#294b9c);color:white;border:0}.metric-card.primary p,.metric-card.primary small{color:#c1cdeb}.metric-card.primary .metric-icon{background:#ffffff20;color:white}.metric-card.warning .metric-icon{background:#fff5e9;color:#dc8a2c}
.analytics-columns{display:grid;grid-template-columns:1.12fr .88fr;gap:16px;margin-bottom:16px}.panel{padding:22px;min-width:0}.panel-heading{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:19px}.panel-heading h2,.report-panel h2{font-size:17px;margin:0;letter-spacing:-.4px}.panel-tag{background:#f2f5fb;color:#71809b;padding:7px 10px;border-radius:8px;font-size:10px;font-weight:700;white-space:nowrap}.bar-chart{height:205px;display:flex;align-items:stretch;gap:9px;padding:14px 2px 0;border-bottom:1px solid var(--line)}.bar-column{flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;gap:6px}.bar-column strong{font-size:9px;color:#8190a9}.bar-track{height:145px;width:min(100%,24px);display:flex;align-items:flex-end;background:#f4f6fb;border-radius:7px 7px 3px 3px;overflow:hidden}.bar-track i{display:block;width:100%;background:linear-gradient(180deg,#7291ff,#4268f5);border-radius:7px 7px 2px 2px}.bar-column small{font-size:9px;color:#8c98ac;white-space:nowrap}.chart-footnote,.updated-at{font-size:10px;color:#9aa4b5;line-height:1.5;margin:13px 0 0}.live-pill{font-size:9px;font-weight:900;color:#14966b;background:#e9fbf4;padding:6px 9px;border-radius:7px;letter-spacing:1px}.activity-list{display:flex;flex-direction:column}.activity-row{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid #f0f2f7}.activity-dot{width:8px;height:8px;flex:none;border-radius:50%;background:#4b7af5}.activity-dot.suspicious{background:#e89a35}.activity-dot.conversion{background:#17b987}.activity-copy{display:flex;flex-direction:column;gap:3px;min-width:0;flex:1}.activity-copy strong{font-size:11px}.activity-copy small{font-size:10px;color:#8b97aa;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.activity-row time{font-size:9px;color:#98a2b2;white-space:nowrap}
.lower-columns{grid-template-columns:1fr 1fr}.fraud-list{margin-top:16px}.fraud-row{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px 0;border-top:1px solid #f0f2f7}.fraud-row div{display:flex;flex-direction:column;gap:4px}.fraud-row strong{font-size:12px}.fraud-row small,.fraud-row>span{font-size:10px;color:#8995aa}.fraud-row>span{font-weight:700}.clean-state{padding:15px;background:#effaf5;color:#16835f;border-radius:10px;font-size:12px;margin-top:14px}.conversion-form{display:flex;flex-direction:column;gap:12px}.conversion-form label{display:flex;flex-direction:column;gap:6px;font-size:10px;color:#77849a;font-weight:700}.conversion-form input,.conversion-form select{width:100%;box-sizing:border-box;border:1px solid #e2e7f0;border-radius:9px;background:#fbfcff;padding:10px 11px;color:#263650;font:inherit;font-size:12px;outline:none}.conversion-form input:focus,.conversion-form select:focus{border-color:#6c89f8}.form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}.submit-button{margin-top:2px}.submit-button:disabled{opacity:.5;cursor:not-allowed}
.report-panel{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:16px;background:linear-gradient(110deg,#f8faff,#fff)}.report-panel .panel-description{max-width:680px}.history-table{width:100%;overflow-x:auto}.history-head,.history-row{min-width:580px;display:grid;grid-template-columns:1.2fr 1fr .8fr 1fr;gap:12px;padding:12px 8px;border-bottom:1px solid #f0f2f7;font-size:11px}.history-head{font-size:9px;color:#8c98ac;text-transform:uppercase;font-weight:800;letter-spacing:.8px}.history-row span,.history-row time{color:#66748d}.history-row strong{color:#20345e}.empty-state{padding:28px 12px;text-align:center;color:#9aa4b5;font-size:12px;line-height:1.6}.analytics-footer{text-align:center;color:#9aa4b5;font-size:10px;margin-top:28px}.analytics-footer span{color:#66748d}
@media(max-width:900px){.metric-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.analytics-columns{grid-template-columns:1fr}.analytics-heading{align-items:flex-start;flex-direction:column}.heading-actions{width:100%;justify-content:space-between}}
@media(max-width:560px){.analytics-page{padding:25px 13px 38px}.metric-card{padding:15px}.metric-card strong{font-size:25px}.panel{padding:17px}.report-panel{align-items:flex-start;flex-direction:column}.report-panel .report-button{width:100%}.heading-actions{align-items:flex-start;flex-direction:column}.bar-chart{gap:5px}.bar-column small{font-size:8px}}
</style>

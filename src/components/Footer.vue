<template>
  <footer class="footer-container">
    <div class="footer-content">
      <!-- Section Liens Utiles -->
      <div class="footer-links">
        <RouterLink to="/guideTraqueur" class="footer-link">Comment ça marche</RouterLink>
      </div>

      <div class="footer-divider"></div>

      <!-- Section Brand / Logo & Réseaux Sociaux -->
      <div class="footer-brand">
        <img src="/1787669531705.jpg" alt="Logo" class="footer-logo" />
        
        <div class="social-links">
          <a 
            href="https://www.facebook.com/profile.php?id=61591612216646" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="facebook-link"
            title="Page Facebook"
          >
            <!-- Icône Facebook SVG -->
            <svg class="facebook-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-bottom">
        <h4>
          <a href="/connexion/admins" class="admin-link" title="Administration">©</a> 
          2026 JoelTech. Tous droits réservés.
        </h4>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer-container {
  margin-top: 2rem;
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;
  background: linear-gradient(to bottom, #0d1322, #070b14);
  border-top: 1px solid #172f68;
  color: #f8fafc;
  font-family: system-ui, -apple-system, sans-serif;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  color: #e2e8f0;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #38bdf8;
}

.footer-divider {
  width: 100%;
  height: 1px;
  background-color: #1e293b;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
}

.footer-logo {
  max-height: 45px;
  width: auto;
  object-fit: contain;
}

.social-links {
  display: flex;
  align-items: center;
}

.facebook-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.facebook-link:hover {
  color: #38bdf8;
}

.facebook-icon {
  width: 22px;
  height: 22px;
}

.footer-bottom {
  margin-top: 0.5rem;
  text-align: left;
}

h4 {
  background: linear-gradient(to right, #38bdf8, #818cf8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 0.85rem;
  margin: 0;
  font-weight: 500;
}

.admin-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

@media (max-width: 480px) {
  .footer-container {
    padding: 2rem 1rem 1.25rem 1rem;
  }
}
</style>

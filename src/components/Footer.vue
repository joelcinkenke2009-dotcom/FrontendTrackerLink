<template>
  <footer>
    <h4>
      <a href="/connexion/admins" class="admin-link" title="Administration">©</a> 
      2026 JoelTech. Tous droits réservés.
    </h4>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 10px;
  border-radius: 30px 0 30px 0;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #172f68;
  background: linear-gradient(to right, #11097a, #0f172a);
}

h4 {
  background: linear-gradient(to right, #38bdf8, #2433bb);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-family: system-ui, -apple-system, sans-serif;
  text-align: center;
  font-size: 0.9rem;
  margin: 0;
}

.admin-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

@media (max-width: 480px) {
  footer {
    padding: 0.2rem;
  }
}
</style>

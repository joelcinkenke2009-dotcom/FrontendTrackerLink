<template>
  <footer>
    <h4>© 2026 Joel Tech. Tous droits réservé. <br> Plateforme en version bêta</h4>
  </footer>
</template>

<style scoped>
footer {
  background-color: #0f172a;
  margin-top: 10px;
  padding: 00.5rem;
  align-items: center;
  border-bottom: 1px solid #1e293b;
}

h4 {
  background: linear-gradient(to right, #38bdf8, #2433bb);
  background-clip: initial;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: sans-serif;
  text-align: center;
  font-size: 0.9rem;
}

a {
  text-decoration: none;
  cursor: initial;
}

@media (max-width: 768px) {
  h4 {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  h4 {
    font-size: 0.9rem;
  }
  footer {
    padding: 0.2rem;
  }
}
</style>

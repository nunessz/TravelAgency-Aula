<template>
  <header class="header">
    <h1 class="titulo-header">Agência de Viagem</h1>
    <p>Hoje é {{ store.dataAtual }}</p>
    <nav class="nav-links">
      <a href="/">Início</a>
      <a href="/about">Sobre</a>
      <a href="/services">Serviços</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header', // O nome do componente
  props: {        // As propriedades esperadas pelo componente
    store: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #eee;
  padding: 1.2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.titulo-header {
  color: #0077b6;
  font-size: 2.3rem;
  font-weight: 700;
  margin: 0;
  text-align: left;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: #0077b6;
  font-size: 1.15rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #023e8a;
  text-decoration: underline;
}
</style>

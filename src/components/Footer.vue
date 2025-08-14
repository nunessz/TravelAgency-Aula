<template>
  <footer>
    <p class="footer-text">© 2025 Agência de Viagem. Todos os direitos reservados.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer', // O nome do componente
  props: {        // As propriedades esperadas pelo componente
    store: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
footer {
  background-color: #eee;
  padding: 1rem;
  text-align: center;
  width: 100vw;
  position: fixed;
  left: 0;
  bottom: 0;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.08);
  z-index: 100;
}

.footer-text {
  font-size: 1.25rem;
  color: #0077b6;
  font-weight: 600;
  margin: 0;
}
</style>

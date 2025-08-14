<template>
  <Header :store="store" />
  <section>
    <h2 class="titulo">Bem-vindo à nossa agência!</h2>
    <div class="destinos">
      <div class="destino-container">
        <img class="imagem" src="../../img/angra.jpg" alt="Angra" />
        <h3>Destino 1</h3>
        <p class="legenda">Angra dos Reis: Paraíso entre ilhas e mar cristalino.</p>
      </div>
      <div class="destino-container">
        <img class="imagem" src="../../img/fernandodenoronha.jpg" alt="Fernando de Noronha" />
        <h3>Destino 2</h3>
        <p class="legenda">Fernando de Noronha: Natureza exuberante e praias incríveis.</p>
      </div>
      <div class="destino-container">
        <img class="imagem" src="../../img/ilhabela.jpg" alt="Ilhabela" />
        <h3>Destino 3</h3>
        <p class="legenda">Ilhabela: Aventura, trilhas e águas transparentes.</p>
            </div>
          </div>
        </section>
        <Footer :store="store" />
      </template>

  <script>
// Importa os componentes que a página About usa
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

// Importa a função do Pinia para usar o store
import { useMainStore } from '../store/mainStore.js'

export default {
  // Define o nome do componente
  name: 'Home',
  // Declara os componentes que serão usados no template
  components: { Header, Footer },
  // A função setup é onde você cria o store
  setup() {
    // Cria uma instância do store
    const store = useMainStore()
    // Retorna o store para que ele possa ser usado na template
    return { store }
  }
}
</script>
      


      <style scoped>
      .titulo {
        text-align: center;
        font-size: 2.2rem;
        margin-bottom: 2.5rem;
        color: #0077b6;
        font-weight: 700;
      }

      .destinos {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 3.5rem; 
        margin: 3rem 0;
      }

      .destino-container {
        background-color: #f9f9f9;
        border: 3px solid #0077b6;
        border-radius: 22px;
        padding: 2.5rem 3.5rem; 
        width: 470px;            
        min-height: 480px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 4px 16px rgba(0,0,0,0.10);
        box-sizing: border-box;
      }

      .imagem {
        width: 400px;
        height: 270px;
        object-fit: cover;
        border-radius: 14px;
        margin-bottom: 1.5rem;
      }

      .legenda {
        margin-top: 1.2rem;
        font-size: 1.35rem;
        color: #333;
        text-align: center;
        font-weight: 500;
      }

      h3 {
        margin: 1.2rem 0 0 0;
        color: #0077b6;
        font-weight: 700;
        font-size: 1.7rem;
}
</style>
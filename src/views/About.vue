<template>
  <Header :store="store" />
  <section class="sobre">
    <h2 class="titulo">Sobre Nós</h2>
    <div class="sobre-container">
      <img class="imagem-sobre" src="../../img/equipe.jpeg" alt="Equipe da Agência" />
      <div class="info">
        <p class="descricao">
          Somos apaixonados por viagens e por criar experiências inesquecíveis para nossos clientes.<br />
          Nossa equipe é formada por especialistas que conhecem os melhores destinos do Brasil e do mundo.<br />
          <span class="emoji">🌴✈️🏖️</span>
        </p>
        <ul class="diferenciais">
          <li>Atendimento personalizado e consultoria completa</li>
          <li>Pacotes exclusivos para todos os perfis de viajantes</li>
          <li>Parcerias com hotéis, pousadas e guias locais</li>
          <li>Suporte 24h durante sua viagem</li>
        </ul>
        <p class="frase-final">
          Venha viver momentos únicos com a gente! <span class="emoji">😊</span>
        </p>
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
  name: 'About',
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

.sobre {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  background: linear-gradient(90deg, #e0f7fa 0%, #f9f9f9 100%);
}

.sobre-container {
  display: flex;
  align-items: center;
  gap: 3rem;
  background: #fff;
  border: 3px solid #0077b6;
  border-radius: 22px;
  padding: 2.5rem 3.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  max-width: 950px;
  width: 100%;
}

.imagem-sobre {
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

.descricao {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 1.2rem;
  line-height: 1.6;
  text-align: left;
}

.emoji {
  font-size: 1.5rem;
  vertical-align: middle;
}

.diferenciais {
  margin: 0 0 1.2rem 0;
  padding-left: 1.2rem;
  font-size: 1.15rem;
  color: #0077b6;
  list-style: disc;
}

.frase-final {
  font-size: 1.25rem;
  color: #023e8a;
  font-weight: 600;
  margin-top: 1rem;
  text-align: left;
}
</style>


<template>
  <Header :store="store" />
  <section class="servicos">
    <h2 class="titulo">Nossos Serviços</h2>
    <div class="servicos-container">
      <img class="imagem-servicos" src="../../img/servicos.jpg" alt="Serviços da Agência" />
      <div class="info-servicos">
        <p class="descricao-servicos">
          Oferecemos tudo para sua viagem ser perfeita!<br />
          Da escolha do destino ao seu retorno, cuidamos de cada detalhe com carinho e profissionalismo. <span class="emoji">🌎✨</span>
        </p>
        <ul class="lista-servicos">
          <li>Pacotes de viagens personalizados</li>
          <li>Reservas de hotéis, pousadas e passeios exclusivos</li>
          <li>Suporte 24h durante toda a viagem</li>
          <li>Consultoria especializada para roteiros e experiências únicas</li>
          <li>Parcerias com guias locais e transporte seguro</li>
          <li>Seguro viagem e assistência completa</li>
        </ul>
        <p class="frase-final-servicos">
          Viaje com tranquilidade e segurança. Deixe tudo por nossa conta! <span class="emoji">🧳😊</span>
        </p>
      </div>
    </div>
  </section>
  <Footer :store="store" />
</template>

<script>
// Importa os componentes que a página Services usa
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

// Importa a função do Pinia para usar o store
import { useMainStore } from '../store/mainStore.js'

export default {
  // O nome do componente é opcional, mas boa prática
  name: 'Services',
  // Declara os componentes que serão usados no template
  components: { Header, Footer },
  // A função setup é onde você cria o store e o torna acessível
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

.servicos {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  background: linear-gradient(90deg, #e0f7fa 0%, #f9f9f9 100%);
}

.servicos-container {
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

.imagem-servicos {
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.info-servicos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

.descricao-servicos {
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

.lista-servicos {
  margin: 0 0 1.2rem 0;
  padding-left: 1.2rem;
  font-size: 1.15rem;
  color: #0077b6;
  list-style: disc;
}

.frase-final-servicos {
  font-size: 1.25rem;
  color: #023e8a;
  font-weight: 600;
  margin-top: 1rem;
  text-align: left;
}
</style>


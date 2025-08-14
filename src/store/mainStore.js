// Guarda variáveis globais gerais

// Importa a função defineStore do Pinia
import { defineStore } from 'pinia'

// Cria o store principal chamado 'main'
export const useMainStore = defineStore('main', {

// Aqui ficam as variáveis globais (state)
state: () => ({
    dataAtual: new Date().toLocaleDateString() // Data atual formatada, variável global
    })
})
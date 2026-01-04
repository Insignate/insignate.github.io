const { createApp, ref } = Vue

var app = createApp({

  setup(){
    const numJogadores = ref(null)
    const gameScores = ref([])
    const numRodada = ref(1)
    
    const createGame = () => {
      gameScores.value = []
      for(let i = 0; i < numJogadores.value; i++){
        gameScores.value.push({id: i, changeScore: null, score: 0})
      }
    }

    const changeScore = (j) => {
      const changeTo = parseInt(j.changeScore)
      if (!isNaN(changeTo))
        j.score += parseInt(j.changeScore)
      j.changeScore = null
    }

    const calcAll = () => {
      gameScores.value.forEach(score => {
        score.score += score.changeScore
        score.changeScore = null
      });
    }

    const addRound = () => {
      numRodada.value ++;
    }

    return {
      numJogadores,
      gameScores,
      numRodada,

      addRound,
      calcAll,
      changeScore,
      createGame,
    }
  },

}).mount('#root')
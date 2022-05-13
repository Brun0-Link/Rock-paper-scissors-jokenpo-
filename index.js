const result = document.querySelector('#result')
const scores = document.querySelector('.scores')
const cards = document.querySelectorAll('.card')

const arrayCards = [...cards]
const jokenpo = ["pedra", "papel", "tesoura"]
const playerResult = ["O jogador venceu!", "Foi um empate! Tente de novo!", "O jogador perdeu!"]

// Event listeners
for (const card of cards) {
  card.addEventListener('click', playJokenPo)
}

// obtém a jogada do jogador
function setPlayerHand(){
  const divSelected = event.target.closest('.card')
  const indexOfPlayerHand = arrayCards.indexOf(divSelected)
  console.log(`
  
  Index da mão do jogador no array jokenpo: ${indexOfPlayerHand}

  `)

  return jokenpo[indexOfPlayerHand]
}

// obtém a jogada do computador
function setAiPlayHand() {
  let indexOfAiHand = Math.floor(Math.random() * jokenpo.length)
  console.log(`
  
  Index da mão do AI no array jokenpo: ${indexOfAiHand}

  `)

  return jokenpo[indexOfAiHand]
}

// Comparação das jogadas
function comparison(result_player, result_Ai){
    // Comparar as jogadas através dos itens por índice do array jokenpo
    // Índice igual: empate; índice do primeiro maior que o segundo: vitória, outro caso: derrota

    result_player = setPlayerHand()
    result_Ai = setAiPlayHand()

    console.log(`O jogador jogou ${result_player}`)
    console.log(`A IA jogou ${result_Ai}`)

    if(jokenpo.indexOf(result_player) === jokenpo.indexOf(result_Ai) + 1 || 
    result_player == "pedra" && result_Ai == "tesoura"){
      console.log(playerResult[0]);
      return playerResult[0]
    } else
    if(jokenpo.indexOf(result_player) === jokenpo.indexOf(result_Ai)){
      console.log(playerResult[1]);
      return playerResult[1]
    } else {
      console.log(playerResult[2]);
      return playerResult[2]
    }
}

// Trata o formato da div para vitória, empate ou derrota
function adjustDivScores(resultado_final){
  switch(resultado_final){
    case playerResult[0]:
      scores.classList.remove("draw", "lose")
      scores.classList.add("winner")
      break
    
    case playerResult[1]:
      scores.classList.remove("winner", "lose")
      scores.classList.add("draw")
      break

    case playerResult[2]:
      scores.classList.remove("winner", "draw")
      scores.classList.add("lose")
  }
}

// Insere o resultado na section playScore
function insertResult(final){
  result.textContent = final
}

// evento de jogada
function playJokenPo() {
  let resultado_final = comparison()
  adjustDivScores(resultado_final)
  insertResult(resultado_final)
}
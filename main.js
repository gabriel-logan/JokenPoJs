const pedra1 = document.querySelector('.pedra1')
const papel1 = document.querySelector('.papel1')
const tesoura1 = document.querySelector('.tesoura1')

const pedra2 = document.querySelector('.pedra2')
const papel2 = document.querySelector('.papel2')
const tesoura2 = document.querySelector('.tesoura2')

const resposta = document.querySelector('span')

const classificação = document.querySelector('.classificação')

let jogadorVitorias = localStorage.getItem('jogadorVitorias') || 0;
let computadorVitorias = localStorage.getItem('computadorVitorias') || 0;
let empateGame = localStorage.getItem('empateGame') || 0;

function reset() {
  pedra1.style.background = '#9c9c9c';
  papel1.style.background = '#fff';
  tesoura1.style.background = '#f00';
  pedra2.style.background = '#9c9c9c';
  papel2.style.background = '#fff';
  tesoura2.style.background = '#f00';
}

classificação.innerHTML = `
    <p>Vitórias do jogador: ${jogadorVitorias}</p>
    <p>Empates: ${empateGame}</p>
    <p>Vitórias do computador: ${computadorVitorias}</p>
`;

window.addEventListener('click', e => {
  const who = e.target

  if (who === papel1 || who === pedra1 || who === tesoura1) {

    who.style.background = 'black'

    const computador = Math.floor(Math.random() * 3) + 1;

    if (computador === 1) {
      pedra2.style.background = 'black'
        // Avaliar quem ganhou
      if (who === papel1) {
        resposta.innerText = 'Você ganhou';
        jogadorVitorias++;
      } else if (who === tesoura1) {
        resposta.innerText = 'Computador ganhou';
        computadorVitorias++;
      } else {
        resposta.innerText = 'Empate';
        empateGame++
      }
      setTimeout(() => {
        reset();
      }, 1000)
    }
    if (computador === 2) {
      papel2.style.background = 'black'
        // Avaliar quem ganhou
      if (who === tesoura1) {
        resposta.innerText = 'Você ganhou';
        jogadorVitorias++;
      } else if (who === pedra1) {
        resposta.innerText = 'Computador ganhou';
        computadorVitorias++;
      } else {
        resposta.innerText = 'Empate';
        empateGame++
      }
      setTimeout(() => {
        reset();
      }, 1000)
    }
    if (computador === 3) {
      tesoura2.style.background = 'black'
        // Avaliar quem ganhou
      if (who === pedra1) {
        resposta.innerText = 'Você ganhou';
        jogadorVitorias++;
      } else if (who === papel1) {
        resposta.innerText = 'Computador ganhou';
        computadorVitorias++;
      } else {
        resposta.innerText = 'Empate';
        empateGame++
      }
      setTimeout(() => {
        reset();
      }, 1000)
    }

    localStorage.setItem('jogadorVitorias', jogadorVitorias);
    localStorage.setItem('computadorVitorias', computadorVitorias);
    localStorage.setItem('empateGame', empateGame);

    classificação.innerHTML = `
        <p>Vitórias do jogador: ${jogadorVitorias}</p>
        <p>Empates: ${empateGame}</p>
        <p>Vitórias do computador: ${computadorVitorias}</p>
    `;
  }
})
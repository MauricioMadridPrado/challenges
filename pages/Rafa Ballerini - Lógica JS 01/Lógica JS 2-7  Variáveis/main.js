const container = document.getElementById('container');
const $ = document.getElementById.bind(document)
const botao = document.getElementById('botao');
const lista = document.querySelector('.container')
const localDaResposta = document.getElementById('resposta')

const respostasCapturadas = [];
function capturaResposta() {
  botao.addEventListener('click', () => {
    const nome = $('nome').value
    const idade = $('idade').value
    const linguagem = $('linguagem').value
    const resposta = {
        nome,
        idade,
        linguagem
    }

    insereResposta(resposta);
  });
}

function insereResposta(resposta){
    lista.classList.add('esconde')
    localDaResposta.innerHTML = 
    `
        <div clas="resposta1"> 
            <p>'Olá ${resposta.nome}, você tem ${resposta.idade} anos e já está aprendendo ${resposta.linguagem}!</p>
            <label for="questao">- Você gosta de estudar?</label>
            <div class="simNao">
              <button id="sim" class="botao">
                  Sim!
              </button>
              
              <button id="nao" class="botao">
                  Não!
              </button>
            <div>
        </div>
    `
    const botaoSim = document.getElementById('sim')
    const botaoNao = document.getElementById('nao')
    botaoSim.addEventListener('click',()=>{
      localDaResposta.innerHTML = 
      `
      <div>
        <p>Muito bom! Continue estudando e você terá muito sucesso.</p>
      </div>
      `

    })
    botaoNao.addEventListener('click',()=>{
      localDaResposta.innerHTML = 
      `
      <p> Ahh que pena... Já tentou aprender outras linguagens?</p>
      `
    })
}
capturaResposta();

        



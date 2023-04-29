const respostasValidas = [
  {
    escolha: "Front ou Back?",

    oQueFazer: `
    <label for="questao">Você é mais time FrontEnd ou BackEnd?</label>
    <div id="escolhas" class="escolha">
      <button class="botao__questao" id="botao__questao1">Front-end</button>
      <button class="botao__questao" id="botao__questao2">Back-end</button>
    </div>
            `,
  },
  {
    escolha: "Front-end",

    oQueFazer: `
        <div class="escolha"> 
            <button class="botao__questao" id="botao__questao1">Front ou Back?</button>
        </div>
        <label for="questao">Você prefere seguir com React ou vue?</label>
        <div class="escolha">
          <button class="botao__questao" id="botao__questao1">React</button>
          <button class="botao__questao" id="botao__questao2">Vue</button>
        </div>
        `,
  },
  {
    escolha: "Back-end",
    oQueFazer: `
        <div class="escolha"> 
            <button class="botao__questao" id="botao__questao1">Front ou Back?</button>
        </div>
            
        <label for="questao">Você prefere seguir com C# ou Java?</label>
        <div class="escolha">
          <button class="botao__questao" id="botao__questao1">C#</button>
          <button class="botao__questao" id="botao__questao2">Java</button>
        </div>
        `,
  },
  {
    escolha: "React",
    oQueFazer: `
        <div class="escolha"> 
            <button class="botao__questao" id="botao__questao1">Front-end</button>
        </div>
        <label for="questao">React? Boa! React é um framework JavaScript criado pelo Facebook (atual Meta) que é usado para criar interfaces de usuário (UI) em aplicativos web. Ele é popular por ser fácil de usar, altamente flexível e escalável, e é usado por muitas empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb. <br> Você quer se aperfeiçoar em React ou pretende ir para Fullstack?</label>
        <div class="escolha">
          <button class="botao__questao" id="botao__questao1">React!</button>
          <button class="botao__questao" id="botao__questao2">Fullstack!</button>
        </div>
        `,
  },
  {
    escolha: "Vue",
    oQueFazer: `
        <div class="escolha"> 
            <button class="botao__questao" id="botao__questao1">Front-end</button>
        </div>
        <label for="questao">Vue? Boa! É um framework JavaScript open source para a criação de aplicações web, criado por Evan You em 2014. O Vue.js possibilita criar aplicações de forma reativa. O Vue.js faz a utilização de um DOM virtual, o que faz com que seja extremamente performático na maioria das situações. Além disso, conta com uma arquitetura muito bem estruturada por meio da criação de componentes reusáveis.<br> Você quer se aperfeiçoar em Vue ou pretende ir para Fullstack?</label>
        <div class="escolha">
        <button class="botao__questao" id="botao__questao1">Vue!</button>
        <button class="botao__questao" id="botao__questao2">Fullstack!</button>
        </div>
        `,
  },
  {
    escolha: "C#",
    oQueFazer: `
        <div class="escolha"> 
            <button class="botao__questao" id="botao__questao2">Back-end</button>   
        </div>
        <label for="questao">C#? Boa! C# é uma linguagem de programação orientada a objetos e orientada a componentes. C# fornece construções de linguagem para dar suporte diretamente a esses conceitos, tornando C# uma linguagem natural para criação e uso de componentes de software.<br> Você quer se aperfeiçoar em C# ou pretende ir para Fullstack?</label>
        <div class="escolha">
        <button class="botao__questao" id="botao__questao1">C#!</button>
        <button class="botao__questao" id="botao__questao2">Fullstack!</button>
        </div>
        `,
  },
  {
    escolha: "Java",
    oQueFazer: `
        <div class="escolha"> 
            <button class="botao__questao" id="botao__questao2">Back-end</button>
        </div>
        <label for="questao">Java? Boa! Java é uma linguagem multiplataforma, orientada a objetos e centrada em rede que pode ser usada como uma plataforma em si. É uma linguagem de programação rápida, segura e confiável para codificar tudo, desde aplicações móveis e software empresarial até aplicações de big data e tecnologias do servidor.<br> Você quer se aperfeiçoar em Java ou pretende ir para Fullstack?</label>
        <div class="escolha">
        <button class="botao__questao" id="botao__questao1">Java!</button>
        <button class="botao__questao" id="botao__questao2">Fullstack!</button>
        </div>
        `,
  },
  {
    escolha: "C#!",
    oQueFazer: `
        <div class="escolha"> 
            <button class="botao__questao" id="botao__questao2">Back-end</button>   
        </div>
        <label for="questao">O desenvolvedor C# é responsável por desenvolver códigos e soluções .NET para aplicações modernas. Profissionais da área podem até mesmo ser capazes de trabalhar em processos de back-end sofisticados que alimentam aplicações web.

        Estes profissionais são extremamente bem informados sobre as práticas modernas de programação e seus vários benefícios em nível empresarial. Esses desenvolvedores também possuem uma forte compreensão da linguagem de programação C#.</label>
        <div class="escolha">
        
        <button class="botao__questao" id="botao__questao1">Show!!</button>

        </div>
        `,
  },
  {
    escolha: "Java!",
    oQueFazer: `
        <div class="escolha"> 
            <button class="botao__questao" id="botao__questao2">Back-end</button>   
        </div>
        <label for="questao">O profissional fará parte de uma talentosa equipe de softwares que trabalha em aplicações de missão crítica. A função e as responsabilidades do desenvolvedor de Java incluem gerenciar o desenvolvimento de aplicativos Java/Java EE e fornecer expertise em todo o ciclo de vida de desenvolvimento de softwares, desde o conceito e projeto até a fase de testes.

        Também incluem projetar, desenvolver e entregar aplicativos de alto volume e baixa latência para sistemas de missão crítica.</label>
        <div class="escolha">
        
        <button class="botao__questao" id="botao__questao1">Show!!</button>

        </div>
        `,
  },
  {
    escolha: "Vue!",
    oQueFazer: `
        <div class="escolha"> 
            <button class="botao__questao" id="botao__questao1">Front-end</button>
        </div>
        <label for="questao">Os desenvolvedores Vue JS são responsáveis ​​pelo desenvolvimento de aplicações front-end com o Vue.js. Eles colaboram com outros desenvolvedores de software e gerentes de projeto para criar bibliotecas e componentes modulares e reutilizáveis ​​e garantem que testes automatizados sejam integrados perfeitamente aos fluxos de trabalho de desenvolvimento e manutenção.

        Estes profissionais também são responsáveis ​​por monitorar o Vue.js e lidar com quaisquer dependências do projeto para atualizações e problemas relacionados à segurança. Eles também são encarregados de testar e solucionar problemas regularmente para garantir o desempenho máximo das aplicações.</label>
        <div class="escolha">
        
        <button class="botao__questao" id="botao__questao1">Show!!</button>

        </div>
        `,
  },
  {
    escolha: "React!",
    oQueFazer: `
        <div class="escolha"> 
            <button class="botao__questao" id="botao__questao1">Front-end</button>
        </div>
        <label for="questao">O profissional de front-end precisa ter conhecimento avançado de algumas linguagens de programação, como por exemplo JavaScript, CSS e HTML, além de SEO. No caso do JavaScript, por exemplo, o developer deve entender as principais bibliotecas e frameworks.
        E, tratando especificamente do Desenvolvedor Front-end React, o conhecimento aprofundado da biblioteca React precisa fazer parte do know-how do profissional.</label>
        <div class="escolha">
        
        <button class="botao__questao" id="botao__questao1">Show!!</button>

        </div>
        `,
  },
  {
    escolha: "Fullstack!",
    oQueFazer: `
        <div class="escolha"> 
            <button class="botao__questao" id="botao__questao1">Front ou Back?</button>
        </div>
        <label for="questao">A pessoa que se encaixa na definição de full stack é a que tem habilidades nos dois lados da moeda e consegue, portanto, desenvolver uma aplicação web completa por si só. Assim, ela gerencia também outras questões que são fundamentais e vão além do que falamos no primeiro parágrafo.</label>
        <div class="escolha">

        <button class="botao__questao" id="botao__questao1">Show!!</button>

        </div>
        `,
  },
  {

  },
];
let localDaQuestao = document.getElementById("escolhas");
localDaQuestao.innerHTML += `
<label for="questao">Vamos começar um pequeno chat sobre programação?</label>
<div id="escolhas" class="escolha">

  <button class="botao__questao" id="botao__questao1">Front ou Back?</button>
</div>
`;
function jogoDeEscolhas() {
  function capturaAResposta() {
    const respostas = document.querySelectorAll(".botao__questao");

    respostas.forEach((resposta) => {
      resposta.addEventListener("click", (escolha) => {
        escolha.preventDefault();
        console.log(escolha.target.innerText);
        escolhaClicada = escolha.target.innerText;

        respostasValidas.find((resposta) => {
          if (escolhaClicada === resposta.escolha) {
            localDaQuestao.innerHTML = resposta.oQueFazer;
            jogoDeEscolhas();
          } else if (escolhaClicada === "Show!!") {
            localDaQuestao.innerHTML = `
                        
            <label for="questao">Legal! Parabéns por ter feito o questionário! Agora, diga para nós, qual linguagem você gostaria de saber mais?</label>
            <div class="escolha"> 
            
            <form class="formulario__final">


              <input class="escolha__linguagem" type="text" id="escolha">

              <button class="botao__questao__final" id="botao__questao__final">
                  Pesquisar
              </button>
              </div>
              </form>
          `;

            const botaoFinal = document.getElementById("botao__questao__final");
            const escolha = document.getElementById('escolha')
            botaoFinal.addEventListener("click", (escola) => {
              escola.preventDefault();
              const escolha = document.getElementById('escolha')
              const qualEscolaEscolhida = escolha.value;
              pesquisaNoGoogle(qualEscolaEscolhida);
            });
          }
        });
      });
    });
  }

  capturaAResposta();
}
function pesquisaNoGoogle(escolha) {

  window.open(
    `
    https://www.alura.com.br/busca?query=${escolha}
    `
  );
}
jogoDeEscolhas();

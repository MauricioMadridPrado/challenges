import { escolas } from "./escolas.js";
import { professores } from "./professores.js";
import { desafios } from "./desafios.js";

export function criaEscolas() {
  escolas.forEach((escola) => {
    adicionaEscolas(escola.nome);
  });

  function adicionaEscolas(nome) {
    const containerGeral = document.querySelector(
      '[data-container="conteudo"]'
    );
    containerGeral.innerHTML += `
    <li>
        <h2 data-escola class="curso__titulo">
          ${nome}
        </h2>
      <ul data-professores=${nome}  class="escola">
      
      </ul>
    </li>
    `;
    const localProfessores = document.querySelector(
      `[data-professores=${nome}]`
    );
    adicionaProfessores(localProfessores, nome)
  }
    function adicionaProfessores(localProfessores , nome){
    professores.forEach((professor) => {
      if (professor.escola == nome) {
        localProfessores.innerHTML += `
            <h3  
              data-professor="${professor.nome}" 
              class="curso__professor">${professor.nome}</h3>

              <ul data-desafios="${professor.nome}" class="curso__professor__desafios">

              </ul>
        `;
        const localDesafios = document.querySelector(`[data-desafios="${professor.nome}"]`);
        adicionaDesafios(localDesafios, professor)
      }
  
    })
  } 
  function adicionaDesafios(localDesafios, professor){
        desafios.forEach((desafio) => {
          if (desafio.professor == professor.nome) {
            localDesafios.innerHTML += 
            `
              <li class="desafios">
                <a href="${desafio.link}">
                    ${desafio.nome}
                </a>
                  
              </li>
          `;
          }
        });
      }
    }

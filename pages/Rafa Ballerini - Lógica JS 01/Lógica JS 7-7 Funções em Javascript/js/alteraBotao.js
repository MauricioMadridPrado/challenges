export function alteraBotao (selectOperacao,botaoSelecionaOperacao){
    selectOperacao.addEventListener("change",(event)=>{
      if(event.target.value == 'sair'){
        botaoSelecionaOperacao.innerHTML = 'Sair'
      } else {
        botaoSelecionaOperacao.innerHTML = 'Definir valores'
      }
      })
  }
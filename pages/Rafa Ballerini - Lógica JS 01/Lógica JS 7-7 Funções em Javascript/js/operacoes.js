import { soma } from "./soma.js";
import { subtrai } from "./subtrai.js";
import { divide } from "./divide.js";
import { multiplica } from "./multiplica.js";
export function operacoes(valor1, valor2,simboloOperacao ){
    let total = 0;
  
    if (simboloOperacao == "+") {
      total = soma(valor1.value, valor2.value);
    } else if (simboloOperacao == "-") {
        total = subtrai(valor1.value, valor2.value);
    } else if (simboloOperacao == "/") {
        total = divide(valor1.value, valor2.value);
    } else if (simboloOperacao == "*") {
        total = multiplica(valor1.value, valor2.value);
    }

    return total;
}

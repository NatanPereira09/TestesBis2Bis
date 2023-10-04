//ESTRUTURAS DE CONTROLE

//A) 
for(let i = 1; i <= 10; i++) {
    console.log(i)
}

console.log("-----------------")//Apenas para dividir as questões no console

//B)
let soma = 0 
for(let i = 1; i <= 100; i++) {
    soma += i;
}
console.log("A soma dos números de 1 a 100 é: " + soma)

//======================================================
console.log("-----------------")//Apenas para dividir as questões no console

//ESTRUTURAS DE REPETIÇÃO


//A)
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

  console.log("-----------------")//Apenas para dividir as questões no console

//B)
function calcularFatorial(numero) {
    if (numero < 0) {
      return "Número negativo, fatorial não definido";
    } else if (numero === 0 || numero === 1) {
      return 1;
    } else {
      let fatorial = 1;
      for (let i = 2; i <= numero; i++) {
        fatorial *= i;
      }
      return fatorial;
    }
  }
  
  // Exemplo de uso:
  const numero = 5;
  const resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);

  //======================================================
  console.log("-----------------")//Apenas para dividir as questões no console
  
  //ESTRUTURAS CONDICIONAIS

  //A)
  function verificarNumero(numeroVerificado) {
    if (numeroVerificado > 0) {
      return "O número é positivo.";
    } else if (numeroVerificado < 0) {
      return "O número é negativo.";
    } else {
      return "O número é zero.";
    }
  }
  
  // Exemplo de uso:
  const numeroVerificado = -5;
  const verificandoResultados = verificarNumero(numeroVerificado);
  console.log(verificandoResultados);

  console.log("-----------------")//Apenas para dividir as questões no console

 //B)
 function eAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      return `${ano} é um ano bissexto.`;
    } else {
      return `${ano} não é um ano bissexto.`;
    }
  }
  
  // Exemplo de uso:
  const ano = 2024;
  const resultadoAnos = eAnoBissexto(ano);
  console.log(resultadoAnos);

  //======================================================
  console.log("-----------------")//Apenas para dividir as questões no console


//MANIPULAÇÃO DE LISTA E ARRAYS

//A)
function encontrarMaximo(lista) {
    if (lista.length === 0) {
      return "A lista está vazia.";
    }
    return Math.max(...lista);
  }
  
  // Exemplo de uso:
  const numeros = [10, 5, 8, 22, 14];
  const maximo = encontrarMaximo(numeros);
  console.log(`O valor máximo na lista é: ${maximo}`);

console.log("-----------------")//Apenas para dividir as questões no console

//B)
function removerDuplicados(lista) {
    return [...new Set(lista)];
  }
  
  // Exemplo de uso:
  const listaOriginal = [1, 2, 2, 2, 3, 3, 4, 4, 5];
  const listaSemDuplicados = removerDuplicados(listaOriginal);
  console.log(listaSemDuplicados);

//======================================================
console.log("-----------------")//Apenas para dividir as questões no console

//RESOLUÇÃO DE PROBLEMAS

//A)
function encontrarSegundoMaior(lista) {
    if (lista.length < 2) {
      return "Não há segundo maior elemento na lista.";
    }
  
    let maior = lista[0];
    let segundoMaior = -Infinity;
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > maior) {
        segundoMaior = maior;
        maior = lista[i];
      } else if (lista[i] < maior && lista[i] > segundoMaior) {
        segundoMaior = lista[i];
      }
    }
  
    if (segundoMaior === -Infinity) {
      return "Não há segundo maior elemento na lista.";
    } else {
      return segundoMaior;
    }
  }
  
  // Exemplo de uso:
  const listaDeNumeros = [10, 5, 8, 22, 14];
  const segundoMaior = encontrarSegundoMaior(listaDeNumeros);
  console.log(`O segundo maior elemento na lista é: ${segundoMaior}`);
  
console.log("-----------------")//Apenas para dividir as questões no console

//B)
function calcularSomaParesProdutoImpares(array) {
  let somaPares = 0;
  let produtoImpares = 1;

  for (let i = 0; i < array.length; i++) {
    const elemento = array[i];

    if (elemento % 2 === 0) {
      // Elemento par: adiciona à soma dos pares
      somaPares += elemento;
    } else {
      // Elemento ímpar: multiplica ao produto dos ímpares
      produtoImpares *= elemento;
    }
  }

  return { somaPares, produtoImpares };
}

// Exemplo de uso:
const produtos = [1, 2, 3, 4, 5];
const resultadoProdutos = calcularSomaParesProdutoImpares(produtos);
console.log(`Soma dos pares: ${resultadoProdutos.somaPares}`);
console.log(`Produto dos ímpares: ${resultadoProdutos.produtoImpares}`);

console.log("-----------------")//Apenas para dividir as questões no console

//======================================================

 

  

  

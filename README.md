# Entrega: SnapCrackle #

## Sobre o Projeto

Este projeto consiste na implementação da função snapCracklePrime em JavaScript, como parte de uma série de katas desenvolvidos durante o módulo 1 na Kenzie Academy Brasil.

A função snapCracklePrime recebe um valor máximo como parâmetro e retorna uma sequência de números e palavras conforme as seguintes regras:

Se um número for ímpar e divisível por 5, ele é substituído por "SnapCrackle".
Se um número for ímpar, ele é substituído por "Snap".
Se um número for divisível por 5, ele é substituído por "Crackle".
Os demais números são mantidos.

## Recursos Utilizados

- HTML: Linguagem de marcação utilizada para estruturar o conteúdo do projeto.
- JavaScript: Linguagem de programação utilizada para a implementação da lógica do projeto.
- console.log: Ferramenta para o desenvolvedor debugar o código.


## Como utilizar o projeto

1. Faça o download ou clone o repositório do projeto.
2. Abra o arquivo `index.html` em um navegador web.
3. As funções ja estão sendo chamadas, e para visualizar o resultado devera abrir o inspecionar do navegador e ir para a aba console.

## Considerações Finais

Este projeto foi desenvolvido como parte do aprendizado na Kenzie Academy Brasil; Caso tenha alguma dúvida ou sugestão, não hesite em entrar em contato.

Agradeço por utilizar o meu projeto "Katas de JavaScript 1" em JavaScript. Espero que seja útil e contribua para o seu aprendizado!

## Contato

Você pode me encontrar no [LinkedIn](https://www.linkedin.com/in/lucasbatista-dev/).


---



# Tarefa - Sobre o que é cada Kata!

1.  oneThroughTwenty - Retornar os números de 1 a 20. (1, 2, 3,...,
    19, 20)
2.  evensToTwenty - Retornar os números pares de 1 a 20. (2, 4, 6,...,
    18, 20)
3.  oddsToTwenty - Retornar os números ímpares de 1 a 20. (1, 3, 5,...,
    17, 19)
4.  multiplesOfFive - Retornar os múltiplos de 5 até 100. (5, 10,
    15,..., 95, 100)
5.  squareNumbers - Retornar todos os números até 100 que forem
    quadrados perfeitos. (1, 4, 9, ..., 81, 100)
6.  countingBackwards - Retornar os números contando de trás para frente
    de 20 até 1. (20, 19, 18, ..., 2, 1)
7.  evenNumbersBackwards - Retornar os números pares de 20 até 1. (20,
    18, 16, ..., 4, 2)
8.  oddNumbersBackwards - Retornar os números ímpares de 20 até 1. (19,
    17, 15, ..., 3, 1)
9.  multiplesOfFiveBackwards - Retornar os múltiplos de 5 contando de
    trás para frente a partir de 100. (100, 95, 90, ..., 10, 5)
10. squareNumbersBackwards - Retornar os quadrados perfeitos contando de
    trás para frente a partir de 100. (100, 81, 64, ..., 4, 1)

::: {.section .hilightedContet .hilightedContet--tip}
**Dica!**

Para relembrar:

- O que é um número primo? [Acesse este
  link](https://pt.wikipedia.org/wiki/N%C3%BAmero_primo)
- Quando é um quadrado Perfeito? [Acesse este
  link](https://pt.wikipedia.org/wiki/N%C3%BAmero_quadrado)
  :::



string__ obtida.

## Exemplo

__snapCrackle(12)__ deve __retornar__ a string: 

__Snap, 2, Snap, 4, SnapCrackle, 6, Snap, 8, Snap, Crackle, Snap, 12__

<img src="https://files-kenzie-academy-brasil.s3.amazonaws.com/q1/spritn1/snapCrackle.gif" width="100%">

## Bônus
### Avançando...

Escreva uma segunda função chamada __snapCracklePrime__ que também recebe um parâmetro __maxValue__ com 1 regra adicional: 

Se o número for primo, no lugar dele, concatenar __"Prime"__ no final da string

__snapCracklePrime(15)__ deve __retornar__ a string:

__Snap, Prime, SnapPrime, 4, SnapCracklePrime, 6, SnapPrime, 8, Snap, Crackle, SnapPrime, 12, SnapPrime, 14, SnapCrackle__

<img src="https://files-kenzie-academy-brasil.s3.amazonaws.com/q1/spritn1/snapCracklePrime.gif" width="100%">

## Envio

Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex: https://nomerandomico.github.io/snapcrackle) e envie o link do seu repositório nos comentários. Seu projeto deverá ficar como internal.

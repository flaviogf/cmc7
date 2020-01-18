<h1 align="center">
  CMC7
</h1>

<p align="center">
  <a href="#rocket-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-utilizar">Como utilizar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Projeto

:dollar: CMC7 é uma biblioteca desenvolvida para [Node.js](https://nodejs.org/en/), com o intuito de extrair informações a respeito de um cheque através de seu código de barra.

## :computer: Tecnologias

- [Node.js](https://nodejs.org/en/)

## :thinking: Como utilizar

````js
const Cmc7 = require('cmc7')

const cmc7 = Cmc7.instance('237049480180017935377506100112')

console.log(cmc7.banco)
// 237
console.log(cmc7.agencia)
// 0494
console.log(cmc7.digitoAgencia)
// 80
console.log(cmc7.numeroCheque)
// 001793
console.log(cmc7.digitoConta)
// 12
````

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

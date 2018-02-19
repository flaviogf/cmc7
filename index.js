const bancos = require('./fator')

class Cmc7 {

  static instance(cheque, fatores = bancos) {
    return new Cmc7(cheque)
  }

  constructor(cmc7 = '') {
    if (cmc7.length < 30) throw 'CMC7 INVÁLIDO'
    this.cmc7 = cmc7.replace(/\s/g, '')
  }

  get banco() {
    const inicioNumeroBanco = 0, fimNumeroBanco = 3
    return this.cmc7.substring(inicioNumeroBanco, fimNumeroBanco)
  }

  get agencia() {
    const inicioNumeroAgencia = 3, fimNumeroAgencia = 7
    return this.cmc7.substring(inicioNumeroAgencia, fimNumeroAgencia)
  }

  get digitoAgencia() {
    const inicioDigitoAgencia = 7, fimDigitoAgencia = 8
    return this.cmc7.substring(7, 8)
  }

  get numeroCheque() {
    const inicioNumeroCheque = 11, fimNumeroCheque = 17
    return this.cmc7.substring(11, 17)
  }

  get conta() {
    const inicioNumeroConta = bancos[this.banco] + 19, fimNumeroConta = 28
    return this.cmc7.substring(inicioNumeroConta, fimNumeroConta)
  }

  get digitoConta() {
    const inicioDigitoConta = 28, fimDigitoConta = 29
    return this.cmc7.substring(inicioDigitoConta, fimDigitoConta)
  }
}

module.exports = Cmc7

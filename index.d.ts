declare module 'cmc7' {
  export default class Cmc7 {

    static instance(cmc7: String, fatores: { [x: string]: number }): Cmc7

    get banco(): String

    get agencia(): String

    get digitoAgencia(): String

    get numeroCheque(): String

    get conta(): String

    get digitoConta(): String
  }
}

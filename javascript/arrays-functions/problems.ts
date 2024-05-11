import type { LandColorDescriber, InputLand, InputLandWithTypes, InputLandWithColors } from "./types";
import { EnumLandTypeOrder } from "./types";

/**
 * Input de exemplo para o parâmetro Input das funções
 */
const _inputLandExample = [
  {
    type: 'Plain',
    amount: 5
  },
  {
    type: 'Mountain',
    amount: 5
  },
  {
    type: 'Swamp',
    amount: 10
  },
  {
    type: 'Forest',
    amount: 0
  },
  {
    type: 'Island',
    amount: 0
  }
];

/**
 * Input de exemplo para o parâmetro colors das funções
 */
const _inputColorsExample =  {
  Plain: 'white',
  Island: 'blue',
  Swamp: 'black',
  Mountain: 'red',
  Forest: 'green'
}

/**
 * ---------------------------------
 * Problema 1 - Tipos de terrenos
 * ---------------------------------
 *
 * A entrada é uma lista que informa o tipo e a quantidade de cada terreno
 * Sua missão é retornar um array contenha apenas o nome dos tipos de terrenos
 * 
 * ---------------------------------
 * @expectedOutput
 * `['Plain', 'Mountain', 'Swamp', 'Forest', 'Island']`
 *
 * ---------------------------------
 * @param input - Array de terrenos com os campos `type` e `amount`
 * ```
 * // Exemplo
 * [{ type: 'Swamp', amount: 35 }]
 * ```
 */
const problem1 = (input: InputLand[]) => {
}

/**
 * ---------------------------------
 * Problema 2 - Quais terrenos o deck usa?
 * ---------------------------------
 * 
 * Na lista informado, não é utilizado todos os tipos de terreno
 * Sua missão é retornar uma lista com apenas os elementos terrenos que estão sendo utilizados (amount > 0)
 * 
 * ---------------------------------
 * @expectedOutput
 * ```
 * [
 *   { type: 'Plain', amount: 5 },
 *   { type: 'Mountain', amount: 5 },
 *   { type: 'Swamp', amount: 10 }
 * ]
 * ```
 *
 * ---------------------------------
 * @param input - Array de terrenos com os campos `type` e `amount`
 * ```
 * // Exemplo
 * [{ type: 'Swamp', amount: 35 }]
 * ```
 */
const problem2 = (input: InputLand[]) => {
}

/**
 * ---------------------------------
 * Problema 3 - Qual o total de terrenos no deck?
 * ---------------------------------
 * 
 * Conte o total de terrenos que e retorne esse valor
 * 
 * ---------------------------------
 * @expectedOutput
 * `20`
 *
 * ---------------------------------
 * @param input - Array de terrenos com os campos `type` e `amount`
 * ```
 * // Exemplo
 * [{ type: 'Swamp', amount: 35 }]
 * ```
 */
const problem3 = (input: InputLand[]) => {
}

/**
 * ---------------------------------
 * Problema 4 - Qual a maior quantidade dos terrenos?
 * ---------------------------------
 * 
 * Informe qual é a maior quantidade de um único terreno
 *
 * ---------------------------------
 * @expectedOutput
 * `10`
 *
 * ---------------------------------
 * @param input - Array de terrenos com os campos `type` e `amount`
 * ```
 * // Exemplo
 * [{ type: 'Swamp', amount: 35 }]
 * ```
 */
const problem4 = (input: InputLand[]) => {
}

/**
 * ---------------------------------
 * Problema 5 - Quais são as cores geradas por cada terreno?
 * ---------------------------------
 *
 * Cada terreno produz mana de uma determinada cor, porém a lista não possui essa informação
 * Adicione um novo campo "color" em cada objeto, que contém a cor da mana produzida
 * 
 * | Terreno          | Cor de mana gerada  |
 * | :--------------- | :----------         |
 * | Plain            | white               |
 * | Island           | blue                |
 * | Swamp            | black               |
 * | Mountain         | red                 |
 * | Forest           | green               |
 *
 * ---------------------------------
 *
 * @expectedOutput
 * `10`
 *
 * ---------------------------------
 *
 * @param input - Array de terrenos com os campos `type` e `amount`
 * ```
 * // Exemplo
 * [{ type: 'Swamp', amount: 35 }]
 * ```
 * 
 * @param colors - Um objeto que mapeia o Tipo do terreno com a cor de mana gerada por ele
 * ```
 * // Exemplo
 * {
 *   Plain: 'white',
 *   Island: 'blue',
 *   Swamp: 'black',
 *   Mountain: 'red',
 *   Forest: 'green'
 * }
 * ```
 */
const problem5 = (input: InputLandWithTypes[], colors: LandColorDescriber) => {

}

/**
 * ---------------------------------
 * Problema 5 - Quais são as cores geradas por cada terreno?
 * ---------------------------------
 *
 * É comum se referir as 5 cores do magic como _WUBRG_
 *
 * Esse nome vem da abreviação de cada cor e segue a ordem da roda de cores que
 * está impressa na parte de trás de cada card.
 * 
 * **W**hite, bl**U**e, **B**lack, **R**ed, **G**reen
 * 
 * Sua tarefa é ordenar o array de terrenos para que fique nessa ordem
 * de acordo com a cor de mana que eles produzem
 *
 * **Dica:** Utilize o enum `EnumLandTypeOrder` para te ajudar com a ordenação
 *
 * ---------------------------------
 *
 * @expectedOutput
 * `10`
 *
 * ---------------------------------
 *
 * @param input - Array de terrenos com os campos `type` e `amount`
 * ```
 * // Exemplo
 * [{ type: 'Swamp', amount: 35 }]
 * ```
 * 
 * @param colors - Um objeto que mapeia o Tipo do terreno com a cor de mana gerada por ele
 * ```
 * // Exemplo
 * {
 *   Plain: 'white',
 *   Island: 'blue',
 *   Swamp: 'black',
 *   Mountain: 'red',
 *   Forest: 'green'
 * }
 * ```
 */
const problem6 = (input: InputLandWithTypes[], colors: LandColorDescriber) => {

}

export default {
  problem1,
  problem2,
  problem4,
  problem3,
  problem5,
  problem6
}

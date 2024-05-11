import type { LandColorDescriber, InputLandWithTypes } from "@/arrays-functions/types";
import answers from '@/arrays-functions/solutions';

describe('Tema: Magic', () => {
  const inputBasicLandList = [
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

  test('Problema 1 - Tipos de terrenos', () => {
    /**
     * Você tem uma lista que informa o tipo e a quantidade de cada terreno
     * Sua missão é retornar apenas um array contento o nome dos tipos de terrenos
     */
    const expectedOutput = ['Plain', 'Mountain', 'Swamp', 'Forest', 'Island'];
  
    expect(answers.problem1(inputBasicLandList)).toEqual(expectedOutput);
  });

  test('Problema 2 - Quais terrenos o deck usa?', () => {
    /**
     * Dado que nem todos os terrenos são utilizados
     * O array de input deve manter apenas os objetos com os tipos de terrenos utilizados (amount > 0)
     */
    const expectedOutput = [
      { type: 'Plain', amount: 5 },
      { type: 'Mountain', amount: 5 },
      { type: 'Swamp', amount: 10 }
    ];

    expect(answers.problem2(inputBasicLandList)).toEqual(expectedOutput);
  });

  test('Problema 3 - Qual o total de terrenos no deck?', () => {
    /**
     * Conte o total de terrenos que o deck contém e retorne esse valor
     */
    const expectedOutput = 20;

    expect(answers.problem3(inputBasicLandList)).toEqual(expectedOutput);
  });

  test('Problema 4 - Qual a maior quantidade dos terrenos?', () => {
    /**
     * Informe qual é a maior quantidade de um único terreno
     */
    const expectedOutput = 10;

    expect(answers.problem4(inputBasicLandList)).toEqual(expectedOutput);
  });

  test('Problema 5 - Quais são as cores geradas por cada terreno?', () => {
    /**
     * Cada terreno gera mana de uma cor, porém a lista não possui essa informação
     * Adicione um novo campo "color" em cada objeto, que contém a cor de mana gerada
     * ---------------------------------
     * Terreno    | Cor de mana gerada:
     * ---------------------------------
     * Plain     -> white
     * Island    -> blue
     * Swamp     -> black
     * Mountain  -> red
     * Forest    -> green
     * ---------------------------------
     */
  
    const expectedOutput = [
      {
        type: 'Plain',
        amount: 5,
        color: 'white'
      },
      {
        type: 'Mountain',
        amount: 5,
        color: 'red'
      },
      {
        type: 'Swamp',
        amount: 10,
        color: 'black'
      },
      {
        type: 'Forest',
        amount: 0,
        color: 'green'
      },
      {
        type: 'Island',
        amount: 0,
        color: 'blue'
      }
    ];

    const colors: LandColorDescriber = {
      Plain: 'white',
      Island: 'blue',
      Swamp: 'black',
      Mountain: 'red',
      Forest: 'green'
    }

    expect(answers.problem5(inputBasicLandList as InputLandWithTypes[], colors)).toEqual(expectedOutput);
  });

  test('Problema 6 - Ordem WUBRG', () => {
    /**
     * É comum se referir as 5 cores do magic como WUBRG
     * Esse nome vem da abreviação de cada cor e segue a ordem da roda de cores que
     * está impressa na parte de trás de cada card.
     * 
     *   White.
     * blUe
     *   Black
     *   Red
     *   Green
     * 
     * Sua tarefa é ordenar o array de terrenos para que fique nessa ordem
     * de acordo com a cor de mana que eles produzem
     */
    const expectedOutput = [
      {
        type: 'Plain',
        amount: 5
      },
      {
        type: 'Island',
        amount: 0
      },
      {
        type: 'Swamp',
        amount: 10
      },
      {
        type: 'Mountain',
        amount: 5
      },
      {
        type: 'Forest',
        amount: 0
      }
    ];

    const colors: LandColorDescriber = {
      Plain: 'white',
      Island: 'blue',
      Swamp: 'black',
      Mountain: 'red',
      Forest: 'green'
    }

    expect(answers.problem6(inputBasicLandList as InputLandWithTypes[], colors)).toEqual(expectedOutput);
  });
});


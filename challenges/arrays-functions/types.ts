export type LandType = 'Plain' | 'Island' | 'Swamp' | 'Mountain' | 'Forest';
export type Color = 'white' | 'blue' | 'black' | 'red' | 'green';

export enum EnumLandTypeOrder  {
  white,
  blue,
  black,
  red,
  green
};

export type InputLand = { type: string, amount: number };
export type InputLandWithTypes = { type: LandType, amount: number };
export type InputLandWithColors = { color: Color } & InputLandWithTypes

export type LandColorDescriber = {
  Plain: Color,
  Island: Color,
  Swamp: Color,
  Mountain: Color,
  Forest: Color
}
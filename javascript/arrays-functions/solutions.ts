import type { LandColorDescriber, InputLand, InputLandWithTypes, InputLandWithColors } from "./types";
import { EnumLandTypeOrder } from "./types";

const problem1 = (input: InputLand[]) => {
  return input.map(land => land.type);
}

const problem2 = (input: InputLand[]) => {
  return input.filter(land => land.amount > 0);
}

const problem3 = (input: InputLand[]) => {
  return input.reduce((count, land) => count + land.amount, 0);
}

const problem4 = (input: InputLand[]) => {
  return input.reduce((max, land) => Math.max(max, land.amount), 0);
}

const problem5 = (input: InputLandWithTypes[], colors: LandColorDescriber) => {
  return input.map<InputLandWithColors>((land) => {
    return { ...land, color: colors[land.type] };
  });
}

const problem6 = (input: InputLandWithTypes[], colors: LandColorDescriber) => {
  return input.sort(
    (landA, landB) => EnumLandTypeOrder[colors[landA.type]] - EnumLandTypeOrder[colors[landB.type]]
  );
}

export default {
  problem1,
  problem2,
  problem4,
  problem3,
  problem5,
  problem6
}

import Race from './Race';

export default class Elf extends Race {
  private static elfInstances: Elf[] = [];
  private readonly _maxLifePoints: number = 99;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Elf.elfInstances.push(this);
  }

  static createdRacesInstances(): number {
    return Elf.elfInstances.length;
  }
}
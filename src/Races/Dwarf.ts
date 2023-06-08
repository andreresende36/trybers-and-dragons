import Race from './Race';

export default class Dwarf extends Race {
  private static dwarfInstances: Dwarf[] = [];
  private readonly _maxLifePoints: number = 80;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Dwarf.dwarfInstances.push(this);
  }

  static createdRacesInstances(): number {
    return Dwarf.dwarfInstances.length;
  }
}

import Race from './Race';

export default class Orc extends Race {
  private static orcInstances: Orc[] = [];
  private readonly _maxLifePoints: number = 74;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Orc.orcInstances.push(this);
  }

  static createdRacesInstances(): number {
    return Orc.orcInstances.length;
  }
}
import Race from './Race';

export default class Halfling extends Race {
  private static halflingInstances: Halfling[] = [];
  private readonly _maxLifePoints: number = 60;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Halfling.halflingInstances.push(this);
  }

  static createdRacesInstances(): number {
    return Halfling.halflingInstances.length;
  }
}
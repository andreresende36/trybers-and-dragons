export default abstract class Race {
  private static instances: Race[] = [];
  
  constructor(
    private readonly _name: string,
    private readonly _dexterity: number,
  ) {
    Race.instances.push(this);
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    // return Race.instances.length;
    throw new Error('Not implemented');
  }
}

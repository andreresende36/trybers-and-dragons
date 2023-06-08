import { EnergyType } from '../Energy';

export default abstract class Archetype {
  constructor(
    private readonly _name: string,
    private readonly _special: number = 0,
    private readonly _cost: number = 0,
  ) {}

  get name() { return this._name; }
  get special() { return this._special; }
  get cost() { return this._cost; }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}
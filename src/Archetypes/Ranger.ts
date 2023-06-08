import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static rangerInstances: Ranger[] = [];

  constructor(
    _name: string,
    _special = 0,
    _cost = 0,
  ) {
    super(_name, _special, _cost);
    Ranger.rangerInstances.push(this);
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.rangerInstances.length;
  }
}
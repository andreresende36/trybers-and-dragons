import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static mageInstances: Mage[] = [];

  constructor(
    _name: string,
    _special = 0,
    _cost = 0,
  ) {
    super(_name, _special, _cost);
    Mage.mageInstances.push(this);
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.mageInstances.length;
  }
}
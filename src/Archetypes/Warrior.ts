import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static warriorInstances: Warrior[] = [];

  constructor(
    _name: string,
    _special = 0,
    _cost = 0,
  ) {
    super(_name, _special, _cost);
    Warrior.warriorInstances.push(this);
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.warriorInstances.length;
  }
}
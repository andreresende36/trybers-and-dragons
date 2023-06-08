import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static necromancerInstances: Necromancer[] = [];

  constructor(
    _name: string,
    _special = 0,
    _cost = 0,
  ) {
    super(_name, _special, _cost);
    Necromancer.necromancerInstances.push(this);
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.necromancerInstances.length;
  }
}
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _dexterity: number = getRandomInt(1, 10);

  private _race: Race = new Elf(this.name, this.dexterity);
  
  private _archetype: Archetype = new Mage(this.name);
  
  private _maxLifePoints: number = this.race.maxLifePoints / 2;
  
  private _lifePoints: number = this.maxLifePoints;
  
  private _strength = getRandomInt(1, 10);
  
  private _defense = getRandomInt(1, 10);
  
  private _energy: Energy = {
    type_: this.archetype.energyType,
    amount: getRandomInt(1, 10) };
  
  constructor(private name: string) {
    this.name = name;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    const lifePointsAfterAttack = this.lifePoints - damage;
    // console.log('Dano desse ataque', damage);

    if (damage > 0 && lifePointsAfterAttack > 0) {
      this._lifePoints = lifePointsAfterAttack;
      // console.log('Primeira opção', lifePointsAfterAttack);      
      return lifePointsAfterAttack;
    } 
    if (damage <= 0 && lifePointsAfterAttack > 0) {
      this._lifePoints = this.lifePoints - 1;
      // console.log('Segunda opção', this.lifePoints - 1);
      return this.lifePoints - 1;
    }
    this._lifePoints = -1;
    // console.log('Terceira opção', -1);
    return -1;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
    
    const lifePointsIncremented = this.maxLifePoints + getRandomInt(1, 10);
    if (lifePointsIncremented >= this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    } else {
      this._maxLifePoints = lifePointsIncremented;
    }

    this._lifePoints = this.maxLifePoints;
  }

  special() {
    console.log(
      `${this.name} começa a cantar: Caneta azuuuuul, azul caneeeeeta!`,
    );
  }

  get dexterity() { return this._dexterity; }
  get race() { return this._race; }
  get archetype() { return this._archetype; }
  get maxLifePoints() { return this._maxLifePoints; }
  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }
  get defense() { return this._defense; }
  get energy() { return { ...this._energy }; }
}
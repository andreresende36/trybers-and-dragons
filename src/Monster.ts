import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  constructor(private _lifePoints = 85, private _strength = 63) {
    this._lifePoints = _lifePoints;
    this._strength = _strength;
  }

  receiveDamage(attackPoints: number): number {
    const lifePointsAfterAttack = this.lifePoints - attackPoints;
    if (lifePointsAfterAttack <= 0) {
      this._lifePoints = -1;
      return -1;
    }
    this._lifePoints = lifePointsAfterAttack;
    return lifePointsAfterAttack;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
}
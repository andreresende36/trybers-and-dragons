import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints = 85;
  private _strength = 63;

  receiveDamage(attackPoints: number): number {
    const lifePointsAfterAttack = this.lifePoints - attackPoints;
    if (lifePointsAfterAttack <= 0) return -1;
    return lifePointsAfterAttack;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
}
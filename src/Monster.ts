import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints = 85;
  private _strength = 63;

  receiveDamage(attackPoints: number): number {
    const lifePointsAfterAttack = this.lifePoints - attackPoints;
    console.log('this.lifePoints', this.lifePoints);
    console.log('attackPoints', attackPoints);
    console.log('lifePointsAfterAttack', lifePointsAfterAttack);
    
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
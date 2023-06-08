import Energy from '../Energy';

export interface Fighter {
  lifePoints: number;
  strength: number,
  defense: number,
  energy?: Energy,
  attack(enemy: Fighter): void,
  special?(enemy: Fighter): void,
  levelUp(): void,
  receiveDamage(attackPoints: number): number,
}
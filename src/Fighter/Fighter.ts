import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export interface Fighter {
  lifePoints: number;
  strength: number,
  defense: number,
  readonly energy?: Energy,
  attack(enemy: Fighter | SimpleFighter): void,
  special?(enemy: Fighter): void,
  levelUp(): void,
  receiveDamage(attackPoints: number): number,
}
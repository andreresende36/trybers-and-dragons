import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter, 
    private _enviroment: (SimpleFighter | Fighter) [],
  ) {
    super(_player);
  }

  private static multipleAttack(
    player: Fighter,
    player2: SimpleFighter | Fighter,
    numberAttacks: number,
  ) {
    for (let i = 1; i <= numberAttacks; i += 1) {
      console.log(`${i}º ataque. ${player2.lifePoints}`);
      player.attack(player2);
    }
  }

  private static individualfight(
    player: Fighter,
    player2: SimpleFighter | Fighter,
  ): number {
    let result = 0;
    while (result === 0) {      
      PVE.multipleAttack(player, player2, 1);
      
      if (player2.lifePoints === -1) { 
        result = 1;
        break;
      }

      player2.attack(player);
      
      if (player.lifePoints === -1) { 
        result = -1;
        break;
      }
    }
    return result;
  }

  fight(): number {
    let result = 0;
    for (let i = 0; i < this.enviroment.length; i += 1) {
      console.log(`${i + 1}º Monstro/Fighter`);
      result = PVE.individualfight(this.player, this.enviroment[i]);
      if (result === -1) break;
    }
    return result;
  }

  get enviroment() { return this._enviroment; }
}

// const player1 = new Character('Aragorn');
// const monster1 = new Monster();
// const monster2 = new Monster();
// const array = [monster1, monster2];
// const pve = new PVE(player1, array);

// for (let i = 1; i <= 10; i += 1) {
//   player1.levelUp();
//   console.log(`${i}º level up:
//   Strength: ${player1.strength}`);
// }
// console.log(pve.fight());

import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    player1: Fighter,
    private player2: Fighter,
  ) {
    super(player1);
  }

  fight(): number {
    let result = 0;
    while (result === 0) {      
      this.player.attack(this.player2);
      
      if (this.player2.lifePoints === -1) { 
        result = 1;
        break;
      }

      this.player2.attack(this.player);
      
      if (this.player.lifePoints === -1) { 
        result = -1;
        break;
      }
    }
    return result;
  }
}

const player1 = new Character('Tunico');
const player2 = new Character('Tinoco');

console.log(player1);
console.log(player2);

const pvp = new PVP(player1, player2);
console.log(pvp.fight());

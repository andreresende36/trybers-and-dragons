import Character from './Character';

function levelUpAutomation(player: Character, levels: number): void {
  for (let i = 1; i <= levels; i += 1) {
    player.levelUp();    
  }
}

export default levelUpAutomation;
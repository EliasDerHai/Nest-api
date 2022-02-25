import { Player } from './player/player';
import { Card, CardColor } from './cards';

export class ScharfkopfTable {
  searchedAceColor: CardColor;
  private currentPlayerIndex = 0;
  private currentRoundIndex = 0;

  constructor(
    public readonly tableId,
    public players: [Player, Player, Player, Player],
  ) {
  }

  /**
   * returns the Player & Color of a Sauspiel or undefined if no-one wants to play
   */
  startGameFindingPhase(): [Player, CardColor] | undefined {
    const callingPlayer = this.players.find(player => player.decideToPlaySauspiel());

    if (!callingPlayer) {
      return undefined;
    }

    this.searchedAceColor = callingPlayer.callSauspiel();
  }

  askNextPlayerForACard(): Card {
    const nextCard = this.players[this.currentPlayerIndex].playCard();
    this.currentPlayerIndex++;
    this.checkRoundEnd();
    return nextCard;
  }

  private checkRoundEnd(): boolean {
    if (this.currentPlayerIndex >= 3) {
      this.currentPlayerIndex = 0;
      this.currentRoundIndex++;
      this.checkGameEnd();
      return true;
    }
    return false;
  }

  private checkGameEnd(): boolean {
    if (this.currentRoundIndex >= 8) {
      this.currentRoundIndex = 0;
      this.currentPlayerIndex = 0;
      return true;
    }
    return false;
  }
}

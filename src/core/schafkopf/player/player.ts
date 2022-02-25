import { Card, CardColor, Highness } from '../cards';
import { ArrayUtil } from '../../util/array.util';

function getRandomName() {
  const namePool = [
    'Herbert',
    'Hans',
    'Sepp',
    'Olaf',
    'Alfred',
    'Hias',
    'Thorsten',
    'Annegret',
    'Maria',
    'Luise',
    'Hildegard',
    'Irmtraut',
    'Kerstin',
    'Erwin',
    'Torben',
    'Lisl',
    'Magdalena',
    'Anne',
    'Bine',
  ];
  return ArrayUtil.getRandom(namePool);
}

export abstract class Player {
  handCards: Card[] = [];
  isCaller = false;
  isActivePlayer = false;

  constructor(public playerName?: string) {
    if (!playerName) {
      this.playerName = getRandomName();
    }
  }

  drawCards(cards: Card[]) {
    if (cards.length !== 8) {
      throw Error('Dealer-mistake');
    }
    this.handCards = cards;
  }

  receiveSauspielCall(calledColor: CardColor) {
    this.isActivePlayer = this.handCards.some(card => card.highness === Highness.ace && card.color === calledColor);
  }

  abstract decideToPlaySauspiel(): boolean;

  abstract callSauspiel(): CardColor;

  abstract playCard(roundColor?: CardColor): Card;

}

export class NpcPlayer extends Player {
  decideToPlaySauspiel(): boolean {
    return this.handCards.filter(card => card.trump).length >= 5 && this.getPotentialColorForSauspiel() !== undefined;
  }

  callSauspiel(): CardColor {
    this.isActivePlayer = true;
    this.isCaller = true;
    return this.getPotentialColorForSauspiel();
  }

  getPotentialColorForSauspiel() {
    const gras = this.handCards.filter(card => card.color === CardColor.gras && !card.trump);
    const eichel = this.handCards.filter(card => card.color === CardColor.eichel && !card.trump);
    const schelln = this.handCards.filter(card => card.color === CardColor.schelln && !card.trump);

    const groupedByColors = [gras, eichel, schelln]
      .filter(groupedBy => groupedBy.length > 0) // min 1 card of the color
      .filter(groupedBy => !groupedBy.some(card => card.highness === Highness.ace)); // discard all colors where you have the ace
    groupedByColors.sort((a, b) => a.length < b.length ? -1 : 1); // sort them by amount

    return groupedByColors?.[0]?.[0]?.color;
  }

  playCard(roundColor?: CardColor): Card {
    const available = this.getPlayableCards(roundColor);
    return ArrayUtil.getRandom(available);
  }

  private getPlayableCards(roundColor?: CardColor): Card[] {
    if (roundColor) {
      return this.handCards.filter(card => card.color === roundColor);
    } else {
      return []; // TODO
    }
  }
}

export class HumanPlayer extends Player {
  wantsToPlay: boolean;
  callingColor: CardColor;
  nextCard: Card;

  setPreferenceForGame(color?: CardColor) {
    this.callingColor = color;
    if (!!color) {
      this.wantsToPlay = true;
    }
  }

  setPreferenceNextCard(card: Card) {
    this.nextCard = card;
  }

  decideToPlaySauspiel(): boolean {
    return this.wantsToPlay;
  }

  callSauspiel(): CardColor {
    return this.callingColor;
  }

  playCard(roundColor?: CardColor): Card {
    return undefined;
  }

}

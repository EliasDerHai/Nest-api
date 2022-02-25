export enum CardColor {
  eichel = 'Eichel',
  schelln = 'Schelln',
  gras = 'Gras',
  herz = 'Herz'
}

export enum Highness {
  seven = 'Sieben',
  eight = 'Acht',
  nine = 'Neun',
  ten = 'Zehn',
  unter = 'Unter',
  ober = 'Ober',
  koenig = 'König',
  ace = 'Ass'
}

export abstract class CardFactory {
  static readonly colors: CardColor[] = [CardColor.eichel, CardColor.gras, CardColor.herz, CardColor.schelln];
  static readonly highness = [Highness.seven, Highness.eight, Highness.nine, Highness.ten, Highness.unter, Highness.ober, Highness.koenig, Highness.ace];

  static getDeck(): Card[] {
    const deck: Card[] = [];

    CardFactory.colors.forEach(color => {
      CardFactory.highness.forEach(highness => {
        deck.push(this.getCard(color, highness));
      });
    });

    return deck;
  }

  static getColorByLetter(letter: String){
    switch (letter) {
      case 'e':
        return CardColor.eichel;
      case 'h':
        return CardColor.herz;
      case 's':
        return CardColor.schelln;
      case 'g':
        return CardColor.gras;
      default:
        throw Error(`Invalid input for color [${letter}]`)
    }
  }

  static getHighnessByLetter(letter: String){
    switch (letter) {
      case '7':
        return Highness.seven;
      case '8':
        return Highness.eight;
      case '9':
        return Highness.nine;
      case '10':
        return Highness.ten;
      case 'u':
        return Highness.unter;
      case 'o':
        return Highness.ober;
      case 'k':
        return Highness.koenig;
      case 'a':
        return Highness.ace;
      default:
        throw Error(`Invalid input for highness [${letter}]`)
    }
  }

  static getCardsByAnnotation(annotations: string[]): Card[] {
    const deck: Card[] = []
    annotations.forEach(annotation => {
      const annotatedColor = annotation.slice(0, 1).toLowerCase();
      const annotatedHighness = annotation.slice(1).toLowerCase();
      const color: CardColor = this.getColorByLetter(annotatedColor);
      const highness: Highness = this.getHighnessByLetter(annotatedHighness);
      deck.push(this.getCard(color, highness));
    });
    return deck;
  }

  static shuffle(deck: Card[]) {
    let currentIndex = deck.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [deck[currentIndex], deck[randomIndex]] = [
        deck[randomIndex], deck[currentIndex]];
    }
    return deck;
  }

  static getCard(color: CardColor, highness: Highness) {
    return {
      color: color,
      iconPath: this.getIconPathByColor(color),
      trump: color === CardColor.herz || [Highness.unter, Highness.ober].includes(highness),
      highness: highness,
      weight: this.getWeightByHighness(highness),
    }
  }

  private static getIconPathByColor(color: CardColor): string {
    return `/assets/Bay_${color.toLocaleLowerCase()}`;
  }

  private static getWeightByHighness(highness: Highness): number {
    switch (highness) {
      case Highness.seven:
      case Highness.eight:
      case Highness.nine:
        return 0;
      case Highness.ten:
        return 10;
      case Highness.unter:
        return 2;
      case Highness.ober:
        return 3;
      case Highness.koenig:
        return 4;
      case Highness.ace:
        return 11;
    }
  }
}

export interface Card {
  color: CardColor;
  iconPath: string;
  highness: Highness;
  trump: boolean;
  weight: number;
}

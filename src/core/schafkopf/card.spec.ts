import { Card, CardColor, CardFactory, Highness } from "./cards";

describe('CardFactory', () => {
  let deck: Card[];

  beforeEach(() => {
    deck = CardFactory.getDeck();
  });

  it('should create the deck', () => {
    expect(deck.length).toBe(32);
  });

  it('should create 8 of each color', () => {
    CardFactory.colors.forEach(color =>
      expect(deck.filter(card => card.color === color).length).toBe(8));
  });

  it('should know all colors', () => {
    expect(CardFactory.colors.length).toBe(4);
  });

  it('should create 4 of each highness', () => {
    CardFactory.highness.forEach(highness =>
      expect(deck.filter(card => card.highness === highness).length).toBe(4));
  });

  it('should know all highness', () => {
    expect(CardFactory.highness.length).toBe(8);
  });

  it('should have 14 trumps', () => {
    expect(deck.filter(card => card.trump).length).toBe(14);
  });

  xit('should shuffle the deck', () => {
    CardFactory.shuffle(deck); // to be tested
    const reference = CardFactory.getDeck();

    reference.forEach((orderedCard, i) => {
      const shuffledCard = deck[i];
      console.log(shuffledCard.color, shuffledCard.highness);
    });
  });

  it('should return h8', () => {
    const cards = CardFactory.getCardsByAnnotation(['h8']);
    expect(cards[0].color).toEqual(CardColor.herz);
    expect(cards[0].highness).toEqual(Highness.eight);
  });

  it('should return ga, ek', () => {
    const cards = CardFactory.getCardsByAnnotation(['ga', 'ek'])
    expect(cards[0].color).toEqual(CardColor.gras);
    expect(cards[0].highness).toEqual(Highness.ace);
    expect(cards[1].color).toEqual(CardColor.eichel);
    expect(cards[1].highness).toEqual(Highness.koenig);
  });

});

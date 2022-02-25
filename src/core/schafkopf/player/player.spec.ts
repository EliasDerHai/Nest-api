import { CardColor, CardFactory } from '../cards';
import { NpcPlayer } from './player';

describe('NpcPlayer', () => {
  let player: NpcPlayer;
  let deck = CardFactory.getDeck();

  beforeEach(() => {
    player = new NpcPlayer();
  });

  it('should not call a game with only eichel', () => {
    const handCards = deck.filter(card => card.color === CardColor.eichel);
    player.drawCards(handCards);
    expect(player.getPotentialColorForSauspiel()).toBeUndefined();
  });

  it('should not call a game with only trump', () => {
    const handCards = CardFactory.getCardsByAnnotation(['H8', 'H10', 'GO', 'GU', 'HK', 'HA', 'EO', 'SU']);
    player.drawCards(handCards);
    expect(player.getPotentialColorForSauspiel()).toBeUndefined();
  });

  it('should call a E game with 2 E, 3 G, and 3 H', () => {
    const handCards = CardFactory.getCardsByAnnotation(['E10', 'E8', 'G7', 'G9', 'G10', 'H10', 'HA', 'HK']);
    player.drawCards(handCards);
    const searchColor = player.getPotentialColorForSauspiel();
    expect(searchColor).toEqual(CardColor.eichel);
  });

  it('should decide to play a Sauspiel with 5 trump', () => {
    const handCards = CardFactory.getCardsByAnnotation(['H8', 'H10', 'GO', 'GU', 'HK', 'E10', 'SA', 'GK']);
    player.drawCards(handCards);
    expect(player.decideToPlaySauspiel()).toBe(true);
  });

  it('should decide to not play a Sauspiel with 4 trump', () => {
    const handCards = CardFactory.getCardsByAnnotation(['H8', 'GO', 'GU', 'HK', 'E10', 'SA', 'S10', 'GK']);
    player.drawCards(handCards);
    expect(player.decideToPlaySauspiel()).toBe(false);
  });

  it('should not decide to play a Sauspiel with 5 trump but no playable color', () => {
    const handCards = CardFactory.getCardsByAnnotation(['H8', 'H10', 'GO', 'GU', 'HK', 'S10', 'SA', 'SK']);
    player.drawCards(handCards);
    expect(player.decideToPlaySauspiel()).toBe(false);
  });

  it('should call a sauspiel', () => {
    const handCards = CardFactory.getCardsByAnnotation(['H8', 'H10', 'GO', 'GU', 'HK', 'S10', 'S7', 'SK']);
    player.drawCards(handCards);
    const spy =  jest.spyOn(player, 'getPotentialColorForSauspiel');
    const calledColor = player.callSauspiel();
    expect(calledColor).toBe(CardColor.schelln);
    expect(player.isCaller).toBe(true);
    expect(player.isActivePlayer).toBe(true);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should should know to be activePlayer when having the searched ace', () => {
    const handCards = CardFactory.getCardsByAnnotation(['H8', 'H10', 'GO', 'GU', 'HK', 'S10', 'SA', 'SK']);
    player.drawCards(handCards);
    player.receiveSauspielCall(CardColor.schelln);
    expect(player.isActivePlayer).toBe(true);
  });

  it('should should know to not be activePlayer when not having the searched ace', () => {
    const handCards = CardFactory.getCardsByAnnotation(['H8', 'H10', 'GO', 'GU', 'HK', 'S10', 'EA', 'GA']);
    player.drawCards(handCards);
    player.receiveSauspielCall(CardColor.schelln);
    expect(player.isActivePlayer).toBe(false);
  });
});

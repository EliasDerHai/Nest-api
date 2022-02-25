import { NpcPlayer, Player } from './player/player';
import { ScharfkopfTable } from './scharfkopf-table';

describe('Player', () => {

  let table: ScharfkopfTable;
  let players: [Player, Player, Player, Player] = [
    new NpcPlayer(),
    new NpcPlayer(),
    new NpcPlayer(),
    new NpcPlayer(),
  ];

  beforeEach(() => {
    table = new ScharfkopfTable(123, players);
  });

  it('should create a table', () => {
    expect(table).toBeDefined();
    expect(table.tableId).toBe(123);
    expect(table.players.length).toBe(4);
  });
});

import { GameId } from "@/kernel/ids";
import { GameLayout } from "../ui/layout";
import { GameDomain } from "@/entities/game";
import { GamePlayers } from "../ui/players";
import { GameStatus } from "../ui/status";
import { GameField } from "../ui/field";

export function Game({ gameId }: { gameId: GameId }) {
  const game: GameDomain.GameEntity = {
    id: "1",
    players: [
      {
        id: "1",
        login: "Test",
        rating: 1000,
      },
      {
        id: "1",
        login: "Test",
        rating: 1000,
      },
    ],
    status: "gameOverDraw",
    field: [null, null, null, "X", "O", null, null, null, null],
  };
  return (
    <GameLayout
      players={<GamePlayers game={game} />}
      status={<GameStatus game={game} />}
      field={<GameField game={game} />}
    />
  );
}

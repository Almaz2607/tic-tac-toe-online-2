import { GameDomain } from "@/entities/game";

export function GamePlayers({ game }: { game: GameDomain.GameEntity }) {
  const firstPlayer = game.status === "idle" ? game.creator : game.players[0];
  const secondPlayer = game.status === "idle" ? undefined : game.players[1];

  return (
    <div className="flex flex-row justify-between text-lg">
      <div>
        X - {firstPlayer.login}:{firstPlayer.rating}
      </div>
      <div>
        O - {secondPlayer?.login ?? "..."}:{secondPlayer?.rating ?? "..."}
      </div>
    </div>
  );
}

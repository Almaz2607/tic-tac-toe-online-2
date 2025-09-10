import { GameDomain } from "@/entities/game";

export function GameStatus({ game }: { game: GameDomain.GameEntity }) {
  switch (game.status) {
    case "idle": {
      return <div>Ожидание игрока</div>;
    }
    case "inProgress": {
      const currentSymbol = GameDomain.getGameCurrentStep(game);
      return <div>Ход: {currentSymbol}</div>;
    }
    case "gameOver": {
      const currentSymbol = GameDomain.getGameCurrentStep(game);
      return <div>Победитель: {currentSymbol}</div>;
    }
    case "gameOverDraw": {
      return <div>Ничья</div>;
    }
  }
}

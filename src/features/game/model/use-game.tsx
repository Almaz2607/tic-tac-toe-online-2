import { useTransition } from "react";
import { GameDomain } from "@/entities/game";
import { GameId } from "@/kernel/ids";
import { routes } from "@/kernel/routes";
import { useEventSource } from "@/shared/lib/sse/client";
import { gameStepAction } from "../actions/game-step";

export function useGame(gameId: GameId) {
  const { dataStream, isPending } = useEventSource<GameDomain.GameEntity>(
    routes.gameStream(gameId),
  );

  const [isPendingTransition, startTransition] = useTransition();

  const step = (index: number) => {
    startTransition(async () => {
      await gameStepAction({ gameId, index });
    });
  };

  return {
    game: dataStream,
    step,
    isPending,
    isStepPending: isPendingTransition,
  };
}

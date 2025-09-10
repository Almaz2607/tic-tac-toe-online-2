import { userRepositoty } from "../repositories/user";
import { sessionService } from "./session";

export async function getCurrentUser() {
  const { session } = await sessionService.verifySession();
  return userRepositoty.getUser({ id: session.id });
}

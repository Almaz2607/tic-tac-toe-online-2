import { right } from "./../../../shared/lib/either";
import { DEFAULT_RATING } from "../domain";
import { left } from "@/shared/lib/either";
import { userRepositoty } from "../repositories/user";
import cuid from "cuid";
import { passwordService } from "./password";

export const createUser = async ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => {
  const userWithLogin = await userRepositoty.getUser({ login });

  if (userWithLogin) {
    return left("user-login-exists" as const);
  }

  const { hash, salt } = await passwordService.hashPassword(password);

  const user = await userRepositoty.saveUser({
    id: cuid(),
    login,
    rating: DEFAULT_RATING,
    passwordHash: hash,
    salt,
  });

  return right(user);
};

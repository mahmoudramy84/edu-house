import { AuthOptions } from "next-auth";
import { loginOptions } from "./loginOptions";

export const authOptions: AuthOptions = {
  providers: loginOptions.provider,
};

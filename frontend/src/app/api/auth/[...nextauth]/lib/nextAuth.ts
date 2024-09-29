import { AuthOptions } from "next-auth";
import { loginOptions } from "./loginOptions";
import { signupOptions } from "./signupOptions";

export const authOptions: AuthOptions = {
  providers: [loginOptions.provider, signupOptions.provider],
};

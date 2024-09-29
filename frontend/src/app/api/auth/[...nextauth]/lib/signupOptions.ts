import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";

export const signupOptions = {
  provider: CredentialsProvider({
    name: "Credentials",
    credentials: {
      first_name: {},
      last_name: {},
      email: {},
      password: {},
    },
    async authorize(credentials) {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,
          {
            first_name: credentials?.first_name,
            last_name: credentials?.last_name,
            email: credentials?.email,
            password: credentials?.password,
          }
        );

        if (res.status === 200) {
          console.log("create account successfully ");
          return res.data;
        }
      } catch (error) {
        console.log("Signing credentials failed", error);
      }
      return null;
    },
  }),
};

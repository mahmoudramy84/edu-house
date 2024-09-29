import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const loginOptions = {
  provider: CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: {},
      password: {},
    },
    async authorize(credentials) {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
          {
            email: credentials?.email,
            password: credentials?.password,
          }
        );

        if (res.status === 200) {
          console.log("Successfully logged in ");
          return res.data;
        }
      } catch (error) {
        console.error("Login failed", error);
      }
      return null;
    },
  }),
};

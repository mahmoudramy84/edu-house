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
      console.log("authorize function called with credentials:", credentials);
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
          {
            email: credentials?.email,
            password: credentials?.password,
          }
        );

        console.log("login response", res);

        if (res.status === 200) {
          console.log("Successfully logged in ");
          const user = res.data.user;
          console.log("User data from API:", user);
          return res.data;

          // return user;
        }
      } catch (error) {
        console.error("Login failed", error);
      }
      return null;
    },
  }),
};

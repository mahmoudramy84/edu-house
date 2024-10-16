import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { signIn } from "next-auth/react";

export const loginOptions = {
  provider: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/users/login`,
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
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

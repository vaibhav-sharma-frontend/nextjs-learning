import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23liToxxLbJSx1yIGD",
      clientSecret: "cc47d24f5185f75bcd6b9b9d48fcec1e61a76886",
    }),
  ],
};

export default NextAuth(authOptions);
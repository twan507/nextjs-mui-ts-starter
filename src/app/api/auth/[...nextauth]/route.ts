import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
    secret: process.env.NO_SECRET,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
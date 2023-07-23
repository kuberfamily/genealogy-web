import { getServerSession } from "next-auth";
import { NextAuthOptions, User } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import jsonwebtoken from 'jsonwebtoken';
import { JWT } from "next-auth/jwt";
import { SessionInterface } from "../common.types";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    // jwt: {
    //     encode: ({ secret, token }) => {

    //     },
    //     decode: async ({ secret, token }) => {

    //     },
    // },
    theme: {
        colorScheme: 'light',
        logo: '/download.jpeg',
    },
    callbacks: {
        async session({ session }) {
            return session;
        },
        async signIn({ user }: { user: User }) {
            try {
                return true;
            } catch (err) {
                console.log(err);
                return false;
            }
        }
    }
}

export async function getCurrentUser() {
    const session = await getServerSession(authOptions) as SessionInterface;

    return session;
}
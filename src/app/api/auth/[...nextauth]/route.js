import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          required: true,
          placeholder: "You email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!credentials) {
          return null;
        }
        if (email) {
          const currentUser = users.find((user) => user.email === email);

          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser;
            }
          }
        }
        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

const users = [
  {
    id: 1,
    name: "Nur",
    email: "nur@gmail.com",
    password: "password",
  },
];

export { handler as GET, handler as POST };

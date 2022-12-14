import {ConnectToDb} from "../../../lib/db";
import {verif} from "../../../lib/auth";
import Providers from "next-auth/providers";
import NextAuth from "next-auth";
import {signIn} from "next-auth/client";
export default NextAuth({
  session: {
    jwt: true,
    maxAge:  60*60,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await ConnectToDb();

        const usersCollection = client.db().collection('users');
        const user = await usersCollection.findOne({
          username: credentials.username,
        });

        if (!user) {
          client.close();
          throw new Error('Check Your username.');
        }

        const isValid = await verif(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Check your password .');
        }

        client.close();

        return {email: user.username,name:user.fullname};

      },
    }),
  ],
  jwt:{
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    secret: process.env.JWT_SECRET,
    encryption: true,
    decryptionOptions: {
      algorithms: ['A256GCM']

    },
    verificationOptions : {
      maxTokenAge: `${60*60}s`, // e.g. `${30 * 24 * 60 * 60}s` = 30 days
      algorithms: ['HS512']
    },

  },
   callbacks: {

  },
});
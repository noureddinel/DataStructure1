import { SvelteKitAuth } from "@auth/sveltekit"
import Google from '@auth/core/providers/google';
import { GOOGLE_ID, GOOGLE_SECRET } from "$env/static/private";
import { authorizedEmail } from "./db";

export const handle = SvelteKitAuth({
  providers: [
    Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET, }),
  ],
  callbacks: {
    async signIn({ profile }) {
       // Checking the signed in profile against whitelisted emails 
       const isAuthorized = authorizedEmail.filter(email => email == profile?.email)[0];
       //  if available loggin else reject loggin
    if (isAuthorized) {
        return true
      } else {
        return false
      }
    }
  }
});
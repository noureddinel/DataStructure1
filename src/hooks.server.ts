import { SvelteKitAuth } from "@auth/sveltekit"
import Google from '@auth/core/providers/google';
import { GOOGLE_ID, GOOGLE_SECRET, AUTORIZED_EMAILS } from "$env/static/private";
import { authorizedEmailFilter } from "$lib";


export const handle = SvelteKitAuth({
  providers: [
    Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET, }),
  ],
  callbacks: {
    async signIn({ profile }) {
       // authorized email parsing
       const emailsList = JSON.parse(AUTORIZED_EMAILS); 
       // Checking the signed in profile against whitelisted emails 
       const isAuthorized = authorizedEmailFilter(profile?.email as string, emailsList);
       //  if available loggin else reject loggin
    if (isAuthorized) {
        return true
      } else {
        return false
      }
    }
  }
});
import { authorizedEmail } from "../db"


const authorizedEmailFilter = (userEmail: string): string => {
    const email = authorizedEmail.filter(email => email == userEmail)[0];
    return email;
}

export { authorizedEmailFilter }  
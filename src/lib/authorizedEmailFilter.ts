

const authorizedEmailFilter = (userEmail: string, emailsList: string[]): string => {
    const email = emailsList.filter(email => email == userEmail)[0];
    return email;
}

export { authorizedEmailFilter }  
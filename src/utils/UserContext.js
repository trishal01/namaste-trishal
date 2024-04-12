import { createContext } from "react";

// if there is some piece of data need at multiple components in app, then we create context 
const UserContext = createContext({
    loggedInUser: 'Trishal'
})

export default UserContext;
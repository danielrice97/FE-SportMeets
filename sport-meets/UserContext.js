import { createContext } from "react";
import { useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({ "username": "",
                                       "name": "",
                                       "password": "",
                                       "avatar_url": ""})
    const [somethingChanged, setSomethingChanged] = useState(false)

    return  <UserContext.Provider value={{user: user, setUser: setUser, somethingChanged: somethingChanged, setSomethingChanged: setSomethingChanged}}>
      {children}
    </UserContext.Provider>
}
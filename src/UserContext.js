import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [name, setName] = useState("JohnnyW8");
    const [location, setLocation] = useState("Poland");

    return (
    <UserContext.Provider 
        value={{
            name,
            location,
            setName,
            setLocation
        }}
    >
        {children}
    </UserContext.Provider>
    )
}
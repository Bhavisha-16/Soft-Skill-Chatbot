import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [persona, setPersona] = useState("");

  return (
    <UserContext.Provider value={{ persona, setPersona }}>
      {children}
    </UserContext.Provider>
  );
}
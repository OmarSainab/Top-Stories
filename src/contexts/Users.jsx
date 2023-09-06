// 1 import createContext

import { createContext, useState } from "react";

// 2 create a context to be used by our components

export const UserContext = createContext();

// 3 create a component that will provide a value to our context
//hardcode user state variable

export const UserProvider = (props) => {
  const [user, setUser] = useState("jessjelly");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

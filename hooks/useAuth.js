import {createContext, useContext} from "react";

const AuthContext = createContext({});
export const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value={{user: 'Brtk'}}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext);
}
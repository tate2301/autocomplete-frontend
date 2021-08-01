import { useContext } from "react";
import { createContext } from "react";
import { AuthContext, AuthProvider } from "./auth";

export const ApplicationContext = createContext<{
    user: any
}>({
    user: null,
})

function Consumers({children}) {
    const { user } = useContext(AuthContext)

    return(
        <ApplicationContext.Provider value={{ user }}>
            {children}
        </ApplicationContext.Provider>
    )
}


export default function ContextProvider({children}) {
    return(
        <>
            <AuthProvider>
                <Consumers>
                    {children}
                </Consumers>
            </AuthProvider>
        </>
    )
}
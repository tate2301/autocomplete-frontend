import { useContext } from "react";
import { createContext } from "react";
import { AuthContext, AuthProvider } from "./auth";
import { SubscriptionContext, SubscriptionProvider } from "./subscriptions";

export const ApplicationContext = createContext<{
    user: any
    subscription: any
}>({
    user: null,
    subscription: null
})

function Consumers({children}) {
    const { user } = useContext(AuthContext)
    const { subscription: { data: subscriptionMeta, error, status } } = useContext(SubscriptionContext)

    return(
        <ApplicationContext.Provider value={{ user, subscription: subscriptionMeta }}>
            {children}
        </ApplicationContext.Provider>
    )
}


export default function ContextProvider({children}) {
    return(
        <>
            <AuthProvider>
                <SubscriptionProvider>
                    <Consumers>
                        {children}
                    </Consumers>
                </SubscriptionProvider>
            </AuthProvider>
        </>
    )
}
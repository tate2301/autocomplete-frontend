import { useContext } from "react";
import { createContext } from "react";
import { AuthContext } from "./auth";
import { useMySubscription } from "./database";

export const SubscriptionContext = createContext({subscription: {
    data: null,
    status: null,
    error: null
}})

export function SubscriptionProvider({children}) {
    const { user } = useContext(AuthContext)
    const { data, status, error } = useMySubscription(user?.uid)

    return (
        <SubscriptionContext.Provider value={{ subscription: { data, status, error } }}>{children}</SubscriptionContext.Provider>
      );
}
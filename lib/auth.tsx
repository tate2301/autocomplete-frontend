import { createContext, useEffect } from "react"
import { useState } from "react"
import { auth, authBase } from "./__firebase__"
import nookies from 'nookies';

export const useAuth = () => {
    const [authSuccess, setAuthSuccess] = useState(false)
    const [authError, setAuthError] = useState<{
        a?: any,
        code: string
        message: string 
    }>(null)
    const [authLoading, setAuthLoading] = useState(null)

    const sendEmailVerification = () => {
        auth.currentUser.sendEmailVerification()
    }

    const signInWithEmail = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        setAuthLoading(true)
        setAuthSuccess(false)
        setAuthError(null)

        auth.signInWithEmailAndPassword(email, password)
            .then(value => {
                setAuthSuccess(true)
                window.location.href = "/"
                setAuthLoading(null)
            })
            .catch(err => {
                setAuthSuccess(false)
                setAuthError(err)
                setAuthLoading(false)
            })
    }

    const logout = () => {
        auth.signOut()
            .then(() => {
                window.location.href = "/"
            })
    }

    return { signInWithEmail, logout, sendEmailVerification, authSuccess, authLoading, authError }
}

export const AuthContext = createContext({user: null})

export function AuthProvider({children}) {
    const [user, setUser] = useState()

    useEffect(() => {
        
        return auth.onIdTokenChanged(async (user) => {
          if (!user) {
            setUser(null);
            nookies.set(undefined, 'token', '', { path: '/' });
          } else {
            const token = await user.getIdToken();
            // @ts-ignore
            setUser(user);
            nookies.set(undefined, 'token', token, { path: '/' });
          }
        });
      }, []);

    // force refresh the token every 10 minutes
    useEffect(() => {
        const handle = setInterval(async () => {
        const user = auth.currentUser;
        if (user) await user.getIdToken(true);
        }, 10 * 60 * 1000);

        // clean up setInterval
        return () => clearInterval(handle);
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
      );
}
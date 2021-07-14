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

    useEffect(() => {
        console.log({authSuccess, authError})
    }, [authError, authSuccess])

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
                window.location.href = "/app"
                setAuthLoading(null)
            })
            .catch(err => {
                setAuthSuccess(false)
                setAuthError(err)
                setAuthLoading(false)
            })
    }

    const signInWithGoogle = () => {
        let provider = new authBase.GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
        setAuthError(null)
        setAuthLoading(true)
        setAuthSuccess(false)

        auth.signInWithPopup(provider)
            .then((result) => {
                setAuthError(null)
                window.location.href = "/app"
                setAuthSuccess(true)
            }).catch((error) => {
                setAuthError(error)
                setAuthLoading(false)
                setAuthSuccess(false)
            })
    }

    const resetPassword = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        auth.sendPasswordResetEmail(email)
        .then((result) => {
            setAuthError(null)
            setAuthLoading(false)
            setAuthSuccess(true)
        }).catch((error) => {
            setAuthError(error)
            setAuthLoading(false)
            setAuthSuccess(false)
        })
    }

    const logout = () => {
        auth.signOut()
            .then(() => {
                window.location.reload()
            })
    }

    return { signInWithEmail, signInWithGoogle, resetPassword, logout, authSuccess, authLoading, authError }
}

export const AuthContext = createContext(null)

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
import { useEffect } from "react"
import { useState } from "react"
import { auth, authBase } from "./__firebase__"

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
                setAuthLoading(false)
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
                setAuthLoading(false)
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

    return { signInWithEmail, signInWithGoogle, resetPassword, authSuccess, authLoading, authError }
}
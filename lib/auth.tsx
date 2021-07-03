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
                console.log({value})
            })
            .catch(err => {
                setAuthSuccess(false)
                setAuthError(err)
                setAuthLoading(false)
                console.log({err})
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

    return { signInWithEmail, signInWithGoogle, authSuccess, authLoading, authError }
}
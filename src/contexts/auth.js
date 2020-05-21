import React, { createContext, useState, useEffect, useCallback } from 'react'
import { auth } from '../utils/firebase'


const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged(user => setCurrentUser(user))
    }, [])

    const signup = useCallback(async (email, password) => {
        await auth.createUserWithEmailAndPassword(email, password)
        // auth.onAuthStateChanged(user => setCurrentUser(user))
    }, [])

    const signin = useCallback(async (email, password) => {
        await auth.signInWithEmailAndPassword(email, password)
        // auth.onAuthStateChanged(user => setCurrentUser(user))
    }, [])    

    const signout = useCallback(async () => {
        await auth.signOut()
        // auth.onAuthStateChanged(user => setCurrentUser(user))
    }, [])

    return (
        <AuthContext.Provider value={{ currentUser, signup, signin, signout }}>
          {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
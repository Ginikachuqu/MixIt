// Essentials
import { useState, useContext, useEffect, createContext } from 'react'
import { auth } from '../../../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';


const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                signup
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext
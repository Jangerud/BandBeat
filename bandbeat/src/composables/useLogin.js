// This composable will handle the login section of the website, and check credentials in the firebase database users collection.
import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)

// login is declared using an async funtion to await a response from the firebase database. 
const login = async (email, password) => {
    error.value = null

    // If the error variable still has a null value then the response will be returned.
    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        error.value = null
        return res
    } catch(err) {
        console.log(err.value)
        error.value = 'Incorrect credentials!'
    }
}

const useLogin = () => {
    return { error, login}
}

export default useLogin
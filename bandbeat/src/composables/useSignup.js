import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref(null)

const signup = async (firstname, lastname, email, password) => {
    error.value = null


    try{
     const response = await projectAuth.createUserWithEmailAndPassword(email, password)
     if(!response){
         throw new Error('Could not complete sign up!')
     }
     console.log(response.user)
    }catch(err) {
        console.log(err.message)
        error.value = err.message
    }

}

const useSignup = () => {
    return { error, signup}
}

export default useSignup
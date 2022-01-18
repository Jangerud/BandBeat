import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref(null)

const signup = async (displayName, firstname, lastname, email, password) => {
    error.value = null


    try{
     const response = await projectAuth.createUserWithEmailAndPassword(email, password)
     if(!response){
         throw new Error('Could not complete sign up!')
     }
     await response.user.updateProfile({ firstname, lastname, displayName})
     error.value = null

     return response

    }catch(err) {
        console.log(err.message)
        error.value = err.message
    }

}

const useSignup = () => {
    return { error, signup}
}

export default useSignup
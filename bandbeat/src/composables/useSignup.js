import { ref } from "vue"
import { projectAuth, projectFirestore } from "../firebase/config"

const error = ref(null)

const signup = async (displayName, firstname, lastname, email, password) => {
    error.value = null

    const userEmail = email
    const userFirstname = firstname
    const userLastname = lastname
    const userPassword = password

    try{
     const response = await projectAuth.createUserWithEmailAndPassword(email, password)
     if(!response){
         throw new Error('Could not complete sign up!')
     }
     await response.user.updateProfile({ firstname, lastname, displayName})
     const database = projectFirestore.collection("users").doc(response.user.uid)
        await database.set({
            age: "",
            city: "",
            email: userEmail,
            firstname: userFirstname,
            lastname: userLastname,
            password: userPassword
         })
     error.value = null
     
     return response;

    }catch(err) {
        console.log(err.message)
        error.value = err.message
    }

}

const useSignup = () => {
    return { error, signup}
}

export default useSignup
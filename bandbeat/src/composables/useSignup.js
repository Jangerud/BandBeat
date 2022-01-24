// This composable handles the registration of a new user.
import { ref } from "vue"
import { projectAuth, projectFirestore } from "../firebase/config"

const error = ref(null)

// The signup constant uses async in order to await response from the firebase.
const signup = async (displayName, firstname, lastname, email, password) => {
    error.value = null

    const userEmail = email
    const userFirstname = firstname
    const userLastname = lastname
    const userPassword = password

    // First the response waits for the response from the createUserWithEmailAndPassword function that comes with firebase. This function creates the user.
    // After it will then update that users profile with the updateProfile. Database is set to the user that the response handles and then proceeds to set the values of the user.
    try{
     const response = await projectAuth.createUserWithEmailAndPassword(email, password)
     if(!response){
         throw new Error('Could not complete sign up!')
     }
     await response.user.updateProfile({ firstname, lastname, displayName})
     const database = projectFirestore.collection("users").doc(response.user.uid)
        await database.set({
            drumset: false,
            flute: false,
            guitar: false,
            piano: false,
            saxophone: false,
            sing: false,
            trumpet: false,
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

// this is the constant that other views/components can call on in order to use the signup function.
const useSignup = () => {
    return { error, signup}
}

export default useSignup
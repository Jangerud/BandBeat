// This composable handles the logout function of the website.
import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref(null)

// logout variable that awaits the signout response from the website as long as the error.value is still null and nothing has gone wrong.
const logout = async () => {
    error.value = null
    try {
      await projectAuth.signOut()
    }catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}

// This is the constant variable that we export and that other components can use in order to logout the user.
const useLogout = () => {
    return { logout, error }
}

export default useLogout
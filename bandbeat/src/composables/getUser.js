// This composable is used to get the current user aswell as that users information.
import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

// user is declared using the projectAuth from config.js file. In order to get the current user.
const user = ref(projectAuth.currentUser)

// We use onAuthStateChanged in order to get the specific users information when the a state on the authentication changes.
projectAuth.onAuthStateChanged(userInfo => {
    console.log('User state changed. Current user is:', userInfo)
    user.value = userInfo
})

// this const variable holds the current user that we can export and use in other views/components.
const getUser = () => {
    return { user }
}

export default getUser
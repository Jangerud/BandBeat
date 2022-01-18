import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(userInfo => {
    console.log('User state changed. Current user is:', userInfo)
    user.value = userInfo
})

const getUser = () => {
    return { user }
}

export default getUser
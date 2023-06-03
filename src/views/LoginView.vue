<template>
  <div
    class="container flex flex-1 flex-col items-center justify-center text-center text-white"
  >
    <h1 class="mb-4 text-3xl">FLIXIO</h1>
    <form class="flex w-1/3 flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        class="input"
        v-model="email"
        required="true"
      />
      <input
        type="password"
        placeholder="Password"
        class="input"
        v-model="password"
        required="true"
      />
      <p class="text-red-500" v-if="errMsg">
        {{ errMsg }}
      </p>
      <button @click="login" class="btn btn-primary">Login</button>
      <button @click="signInWithGoogle" class="btn btn-google flex gap-2">
        <i class="fab fa-google"></i>
        <span>Sign in with Google</span>
      </button>
    </form>
    <p class="my-4">
      No account?
      <RouterLink class="text-secondary" to="/register">Create one!</RouterLink>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errMsg = ref('')
const router = useRouter()

const login = (e) => {
  e.preventDefault()
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      console.log('Successfully signed!')
      // sessionStorage.setItem('user', JSON.stringify(userCredential.user))
      router.push({ name: 'home' })
    })
    .catch((error) => {
      console.log('Error registering!', error.code)
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid email.'
          break
        case 'auth/user-not-found':
          errMsg.value = 'User not found. Please register first.'
          break
        case 'auth/wrong-password':
          errMsg.value = 'Wrong password.'
          break
        default:
          errMsg.value = 'Email or password was incorrect'
          break
      }
    })
}

const signInWithGoogle = (e) => {
  e.preventDefault()
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      // sessionStorage.setItem('user', JSON.stringify(result.user))
      router.push({ name: 'home' })
    })
    .catch((error) => {
      console.log(error.code)
      console.log(error.message)
    })
}
</script>

<style lang="scss" scoped></style>

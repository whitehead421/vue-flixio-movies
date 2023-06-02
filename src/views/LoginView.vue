<template>
  <div
    class="container flex flex-col items-center justify-center text-center text-white"
  >
    <h1 class="mb-4 text-3xl">LOGIN</h1>
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
      <button @click="signInWithGoogle" class="btn btn-google flex gap-2">
        <i class="fab fa-google"></i>
        <span>Login with Google</span>
      </button>
      <button @click="login" class="btn btn-primary">Login</button>
    </form>
    <p class="my-4">
      Don't you have an account yet?
      <RouterLink class="text-secondary" to="/register">Join us!</RouterLink>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
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
      console.log(userCredential)
      // go home with name
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

const signInWithGoogle = (e) => {}
</script>

<style lang="scss" scoped></style>

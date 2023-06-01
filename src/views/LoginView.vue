<template>
  <div class="container text-center text-white">
    <h1 class="mb-4 text-3xl">LOGIN</h1>
    <form class="flex flex-col gap-4">
      <input type="email" placeholder="Email" class="input" v-model="email" />
      <input
        type="password"
        placeholder="Password"
        class="input"
        v-model="password"
      />
      <p class="text-red-500" v-if="errMsg">
        {{ errMsg }}
      </p>
      <button @click="login" class="btn btn-primary">Login</button>
      <button @click="signInWithGoogle" class="btn btn-google flex gap-2">
        <i class="fab fa-google"></i>
        <span>Login with Google</span>
      </button>
    </form>
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
          errMsg.value = 'Invalid email'
          break
        case 'auth/user-not-found':
          errMsg.value = 'User not found'
          break
        case 'auth/wrong-password':
          errMsg.value = 'Wrong password'
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

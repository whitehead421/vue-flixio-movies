<template>
  <div
    class="container flex flex-1 flex-col items-center justify-center text-center text-white"
  >
    <h1 class="mb-4 text-3xl">FLIXIO</h1>
    <form class="flex w-1/3 flex-col gap-4">
      <input type="email" placeholder="Email" class="input" v-model="email" />
      <input
        type="password"
        placeholder="Password"
        class="input"
        v-model="password"
      />
      <!-- <input type="password" placeholder="Confirm Password" class="input" /> -->
      <button @click="register" class="btn btn-primary">Register</button>
      <button @click="signInWithGoogle" class="btn btn-google flex gap-2">
        <i class="fab fa-google"></i>
        <span>Sign in with Google</span>
      </button>
    </form>
    <p class="my-4">
      Already have an account?
      <RouterLink class="text-secondary" to="/login"> Sign in. </RouterLink>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const register = (e) => {
  e.preventDefault()
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(async (result) => {
      router.push({ name: 'home' })
      await updateProfile(result.user, {
        photoURL: 'https://i.hizliresim.com/pkdv54p.png',
      })
    })
    .catch((error) => {
      console.log('Error registering!', error.code)
      alert(error.message)
    })
}

const signInWithGoogle = (e) => {
  e.preventDefault()
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      // make user logined in
      console.log('Successfully signed!')

      router.push({ name: 'home' })
    })
    .catch((error) => {
      console.log(error.code)
      console.log(error.message)
    })
}
</script>

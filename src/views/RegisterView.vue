<template>
  <div class="container text-center text-white">
    <h1 class="mb-4 text-3xl">REGISTER</h1>
    <form class="flex flex-col gap-4">
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
        <span>Register with Google</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const register = (e) => {
  e.preventDefault()
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((userCredential) => {
      console.log('Successfully registered!')
      // go home with name
      router.push({ name: 'home' })
    })
    .catch((error) => {
      console.log('Error registering!', error.code)
      alert(error.message)
    })
}

const signInWithGoogle = (e) => {}
</script>

<style lang="scss" scoped></style>

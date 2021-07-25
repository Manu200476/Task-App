<template>
  <form @submit.prevent="userSignUp" class="text-center">
      <div class="mt-4">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" class="form-control" v-model.trim="email"/>
      </div>
      <div class="mt-4">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" class="form-control" v-model.trim="password"/>
      </div>
      <button class="btn btn-primary mt-4" type="submit" :disabled="validation">Sing Up</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    validation() {
      if (this.email.includes('@') & this.password.length > 6) {
        return false
      }
      return true
    },
  },
  methods: {
    ...mapActions(['signUp']),
    userSignUp() {
      this.signUp({ email: this.email, password: this.password })
      this.email = ''
      this.password = ''
    },
  },
}
</script>

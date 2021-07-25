<template>
  <div class="navbar navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div class="d-flex">
          <router-link v-if="checkUser" to="/" class="btn btn-dark">Tareas</router-link>
          <button v-if="checkUser" @click="closeSesion" class="btn btn-danger">Cerrar Sesion</button>
          <router-link v-if="!checkUser" to="/login" class="btn btn-dark">Login</router-link>
          <router-link v-if="!checkUser" to="/singup" class="btn btn-dark">Sing Up</router-link>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['checkUser']),
  },
  methods: {
    ...mapActions(['closeSesion']),
  },
}
</script>

<style scoped>
  .navbar{
    padding: 1rem;
  }
</style>

<template>
  <NavBar />
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import NavBar from './components/NavBar'
export default {
  methods: {
    ...mapActions(['loadDatainDB'])
  },
  created(){
    this.loadDatainDB()
  },
  components: {
    NavBar
  }
}
</script>
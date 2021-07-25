<template>
    <h1 class="text-center mt-3">Edita el formulario {{ $route.params.id }}</h1>
    <form @submit.prevent="updateTask(this.task)" class="mt-4">
        <Input :tarea="task"/>
    </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Input from '../components/Input'
import TaskTable from '../components/TaskTable'

export default {
  name: 'Task',
  computed: {
    ...mapState(['task']),
  },
  methods: {
    ...mapActions(['setTarea', 'updateTask']),
  },
  created() {
    this.setTarea(this.$route.params.id)
  },
  components: {
    Input,
    TaskTable,
  },
}
</script>

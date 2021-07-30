<template>
  <h1 class="mt-4">Formularios + Crud con Vue JS</h1>
  <form @submit.prevent="procesarFormulario()" class="mt-4">
    <Input :tarea="object" />
  </form>
  <TaskTable />
</template>

<script>
import { mapActions } from 'vuex'
import Input from '../components/Input'
import TaskTable from '../components/TaskTable'

const shortid = require('shortid')

export default {
  name: 'Home',
  data() {
    return {
      object: {
        id: '',
        name: '',
        categoria: [],
        estado: '',
        numero: 0,
      },
    }
  },
  methods: {
    ...mapActions({
      setTask: 'tasks/setTask',
    }),
    procesarFormulario() {
      /* Generar IDs */
      this.object.id = shortid.generate()

      this.setTask(this.object)

      this.object = {
        id: '',
        name: '',
        categoria: [],
        estado: '',
        numero: 0,
      }
    },
  },
  components: {
    Input,
    TaskTable,
  },
}
</script>

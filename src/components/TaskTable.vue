<template>
  <table class="table mt-4">
      <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">State</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
            </tr>
       </thead>
       <tbody>
            <tr v-for="task in tasks" :key="task.id">
                <th scope="row">{{ task.id }}</th>
                <td>{{ task.name }}</td>
                <td>
                    {{task.categoria.join(', ')}}
                </td>
                <td>{{ task.estado }}</td>
                <td>{{ task.numero }}</td>
                <td>
                    <button class="btn btn-danger btn-sm" @click="deleteTask(task.id)">Delete</button>
                    <router-link
                        class="btn btn-primary btn-sm ml-2"
                        :to="{
                            name: 'Task',
                            params:{
                                id: task.id
                            }
                        }"
                    >
                        Editar
                    </router-link>
                </td>
            </tr>
       </tbody>
  </table>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    name: 'TaskTable',
    computed: {
        ...mapState(['tasks'])
    },
    methods: {
        ...mapActions(['deleteTask', 'editTask']),
    }
}
</script>

<style>

</style>
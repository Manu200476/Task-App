<template>
    <div class="mt-4">
      <label for="name" class="form-label">Nombre</label>
      <input id="name" type="text" placeholder="Nombre..." class="form-control" v-model="tarea.name"/>
    </div>
    <div class="mt-4">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" value="javascript" id="javascript" v-model="tarea.categoria">
        <label class="form-check-label" for="javascript">
          JavaScript
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" value="python" id="python" v-model="tarea.categoria">
        <label class="form-check-label" for="python">
          Python
        </label>
      </div>
    </div>
    <div class="mt-4">
     <div class="form-check">
        <input class="form-check-input" type="radio" value="urgente" name="estado" id="urgente" v-model="tarea.estado">
        <label class="form-check-label" for="urgente">
          Urgente
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" value="chill" type="radio" name="estado" id="chill" v-model="tarea.estado">
        <label class="form-check-label" for="chill">
          Chill
        </label>
      </div>
    </div>
    <div class="mt-4">
      <input id="number" type="number" min="0" class="form-control" v-model.number="tarea.numero"/>
    </div>
    <button class="btn btn-dark btn-block mt-3" type="submit">Enviar</button>
</template>

<script>
export default {
  name: 'Input',
  props: {
    tarea: Object,
  },
}
</script>

import { createStore } from 'vuex'
import taskModule from './tasks'
import userModule from './users'

export default createStore({
  modules: {
    taskModule,
    userModule,
  },
})

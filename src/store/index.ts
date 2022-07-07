import { createStore, Store, useStore as vuexUseStore } from 'vuex'
import IModelsheet from '@/interfaces/IModelsheet'
import { InjectionKey } from 'vue'

interface State {
  modelsheets: IModelsheet[]
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    modelsheets: [
      {
        id:'1',
        model:'Orçamento e Balanço'
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

export function useStore(): Store<State> {
  return vuexUseStore(key)
}
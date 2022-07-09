import { createStore, Store, useStore as vuexUseStore } from 'vuex'
import IModelsheet from '@/interfaces/IModelsheet'
import { InjectionKey } from 'vue'
import ITabwork from '@/interfaces/ITabwork';

interface State {
  modelsheets: IModelsheet[],
  tabworks: ITabwork[]
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    modelsheets: [
      {
        id:"1",
        model:'Orçamento e Balanço'
      }
    ],
    tabworks:[]
  },
  getters: {
  },
  mutations: {
    'ADD_TABWORK'(state, tabwork: ITabwork ){
      state.tabworks.push(tabwork)
    }
  },
  actions: {
  },
  modules: {
  }
})

export function useStore(): Store<State> {
  return vuexUseStore(key)
}
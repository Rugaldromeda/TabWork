<template>
    <form>
        <label for="nameSheet">Nome Tabela</label>
        <input type="text" id="nameSheet">

        <select id="modelSheet" >
            <option value="">Selecione o modelo</option>
            <option :value="modelsheet.id" v-for="modelsheet in modelsheets" :key="modelsheet.id"> {{modelsheet.model}}</option>
        </select>
    </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { key } from "@/store";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default defineComponent({
    name: 'CreateSheet',
    data() {
        return{
            idModelsheet: ''
        }
    },
    setup(){
        const store = useStore(key)
        return{
            modelsheets: computed(()=> store.state.modelsheets)
        }
    }
})
</script>
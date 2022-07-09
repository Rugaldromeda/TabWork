<template>
    <form ref="form" @submit.prevent="addTabWork">
        <label for="nameSheet">Nome Tabela</label>
        <input type="text" id="nameSheet" v-model="nameWorksheet">

        <select id="modelSheet" v-model="idModelsheet" >
            <option value="">Selecione o modelo</option>
            <option :value="modelsheet.id" v-for="modelsheet in modelsheets" :key="modelsheet.id"> {{modelsheet.model}}</option>
        </select>
        <input type="submit">
    </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { key } from "@/store";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default defineComponent({
    name: 'CreateTabWork',
    emits: ['toSaveTabwork'],
    methods:{
        addTabWork(){
            this.createTabWork();
            this.reset();
              
        },
        reset(){
            const form:HTMLFormElement |any = this.$refs.form;
            form.reset();
        }
    },
    setup(props, {emit}){
        const store = useStore(key)
        
        const idModelsheet = ref("");
        const nameWorksheet = ref("");
        const modelsheets = computed(()=> store.state.modelsheets)

        const createTabWork =() =>{
            emit('toSaveTabwork', {
                name:nameWorksheet.value,
                model: modelsheets.value.find(mod => mod.id == idModelsheet.value)
            })
        }

        return{
            modelsheets,
            createTabWork,
            idModelsheet,
            nameWorksheet
        }
    }
})
</script>
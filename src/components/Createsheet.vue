<template>
    <form ref="form" @submit.prevent="addTabWork">
        <label for="nameSheet">Nome Tabela</label>
        <input type="text" id="nameSheet" v-model="nameWorksheet">

        <select id="modelSheet" v-model="modelWorksheet" >
            <option value="">Selecione o modelo</option>
            <option :value="modelsheet.model" v-for="modelsheet in modelsheets" :key="modelsheet.id"> {{modelsheet.model}}</option>
        </select>
        <input type="submit">
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
            idModelsheet: '',
            modelWorksheet:'',
            nameWorksheet:''
        }
    },
    methods:{
        addTabWork(){
            console.log(this.modelWorksheet)
            console.log(this.nameWorksheet)
            this.reset()
              
        },
        reset(){
            const form:HTMLFormElement |any = this.$refs.form;
            form.reset();
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
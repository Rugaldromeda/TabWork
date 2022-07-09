<template>
    <Createtabwork @toSaveTabwork="showTabworks"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Createtabwork from "@/components/Createtabwork.vue";
import ITabwork from "@/interfaces/ITabwork";

export default defineComponent({
    name: "TabworkView",
    components:{
        Createtabwork
    },
    methods:{
        showTabworks(tabwork:ITabwork){
            console.log(tabwork)
        }
    }
})
</script>
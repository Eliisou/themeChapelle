<script>
export default {

    data(){
        return{
            isOpen: false,
        }
    },

    methods:{
        handleClick(){
            this.isOpen = !this.isOpen;
        }
    },
    props: {
        title: String,
        paragraph: String
    },
}
</script>
<template>
<div @click="handleClick" class="text-area-drop cursor-pointer my-1">
    <p>+ {{ this.title }}</p>
</div>
<div v-if="isOpen" v-html="this.paragraph"></div>
</template>

<style scoped>
.text-area-drop {
    background-color:#E6EBE0;
    padding: 10px;
    color: orange;
    font: bold;
    font-size: 20px;
}
</style>
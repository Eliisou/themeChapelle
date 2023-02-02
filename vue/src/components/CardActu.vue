<script>
export default{
    props: {
        image:{
            type:String,
        },
        paragraph:{
            type:String,
        },
        title:{
            type:String,
        },
    },

    computed: {
        cssVars() {
            return {
                '--background-image': `url(${this.image})`
            };
        },
    },
};

</script>
<template>

    <div :style="cssVars" class="flex flex-col w-350 h-500 bg-card ">
        <div class="h-2/5 w-full bg-image">
        </div>
        <div class="pl-6 pr-6 h-96">
            <h2 class="text-2xl font-semibold mb-5 mt-5 h-24">{{ title }}</h2>
            <div v-html="this.paragraph" class=""></div>
        </div>
        
        <div class="flex justify-center pt-6 pb-6">
            <button class="w-1/2">Lire plus</button>
        </div>
        
    </div>
</template>
<style>
.bg-card{
    background-color:#E6EBE0;
}
.bg-image {
    background-image: var(--background-image);
    background-size: cover;
}
.h-500 {
    height: 680px;
}

.w-350{
    width: 350px;
}

</style>
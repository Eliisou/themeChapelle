<script>
import axios from 'axios';
export default{
    computed: {
        cssVars() {
            return {
                '--background-image': `url(${this.acf.imgbandeau})`
            };
        },
    },

    data() {
        return {
            data:{},
            acf:{},
            info:{},
            isLoading:true,
            
        }
    },

    created() {
        this.getPageData();

    },

    methods: {
        getPageData() {
            this.isLoading = true;

            axios.get(this.$wpData.rest_url + '/wp/v2/pages/32')
            .then((res) => {
                this.data = res.data;
                this.acf = res.data.acf;
            })
            axios.get(this.$wpData.rest_url + '/acf/v3/flashinfo')
            .then((res2) => {
                this.info = res2.data;
            })
            .finally(() => setTimeout(() => (this.isLoading = false), 1000));
        },
    },
}
</script>
<template>
<div v-if="this.isLoading" class="w-full h-screen flex justify-center items-center">
    <div class="custom-loader"></div>
</div>
<div v-else>
    <section :style="cssVars" class="w-full z-10 container-bandeau mt-10">
      <div class="h-full w-full flex justify-center items-center">
        <div class="text-bandeau text-center text-white m-0 p-5 flex items-center justify-center mt-16 text-4xl">{{ this.data.title.rendered }}</div>
      </div>
    </section>
    <section class="mx-60 mt-10">
        <h2 class="text-center mb-10">{{ this.acf.description }}</h2>
        <div v-for="item in this.info" class="flex flex-col items-center">
                <h3 class="my-5">{{ item.acf.titre }}</h3>
                <object :data="item.acf.pdf" type="application/pdf" class="pdf-size mb-10"></object>
        </div>
            

    </section>
    </div>

</template>
<style scoped>
.container-bandeau {
    height: 300px;
    background-image: var(--background-image);
    background-size: cover;

}

.text-bandeau {
    background-color: rgba(37, 37, 37, 0.65);
    width: 40%;
}

.pdf-size{
    width:50%;
    height:825px;
}
</style>
<script>
import Card from "../components/CardActu.vue";
import axios from 'axios';

export default{
    components:{
        Card,
    },
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
            data2:{},
            acf:{},
            isLoading:true,
            
        }
    },

    created() {
        this.getPageData();

    },

    methods: {
        getPageData() {
            this.isLoading = true;

            axios.get(this.$wpData.rest_url + '/acf/v3/actu/')
            .then((res) => {
                this.data = res.data;
            })
            axios.get(this.$wpData.rest_url + '/wp/v2/pages/26')
            .then((res2) => {
                this.data2 = res2.data;
                this.acf = res2.data.acf;
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
        <div class="text-bandeau text-center text-white m-0 p-5 flex items-center justify-center mt-16 text-4xl">{{this.data2.title.rendered}}</div>
      </div>
    </section>
    <section class="mx-60 mt-10">
        <p class="text-center">{{ this.acf.description }}</p>
        <div class="flex flex-row flex-wrap justify-center gap-10 my-20">
            <div v-for="item in this.data">
                <Card 
                :image="item.acf.image"
                :paragraph="item.acf.resume"
                :title="item.acf.titre"></Card>

        </div>
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

.img-bandeau {
    width: 400px;
    height:400px;
}
</style>
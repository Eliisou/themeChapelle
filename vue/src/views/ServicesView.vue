<script>
import axios from 'axios';
export default{
    data() {
        return {
            data:{},
            data2:{},
            acf:{},
            isLoading:true,
            
        }
    },
    computed: {
            cssVars() {
                return {
                    '--background-image': `url(${this.acf.imgbandeau})`
                };
            },
    },

    created() {
        this.getPageData();

    },

    methods: {
        getPageData() {
            this.isLoading = true;

            axios.get(this.$wpData.rest_url + '/acf/v3/service/')
            .then((res) => {
                this.data = res.data;
            })
            axios.get(this.$wpData.rest_url + '/wp/v2/pages/30')
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
        <div class="text-bandeau text-center text-white m-0 p-5 flex items-center justify-center mt-16 text-4xl">{{ this.data2.title.rendered }}</div>
      </div>
    </section>

    <section class="mx-60 mt-10">
        <div class="flex flex-col w-full mb-5">
            <h2 class="title mb-2">{{ this.acf.titre }}</h2>
            <div class="underline-service mb-10"></div>
            <p class="leading-10 mb-10 w-1/2">{{ this.acf.description }}</p>
        </div>

        <div class="flex flex-col">
            <div class="flex flex-row justify-between flex-wrap my-5">
                <div v-for="item in this.data" class="flex flex-col bg-card-service justify-between my-5">
                    <div class="bg-darkGreen">
                        <h3 class="text-center py-4">{{item.acf.titre}}</h3>
                    </div>
                    <div v-html="item.acf.paragraphe" class="mx-10 leading-10"></div>
                    <button class="mb-10 salmon">{{item.acf.textbouton}}</button>
                </div>
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

.bg-card-service{
    background-color:#E6EBE0;
    height:400px;
    width:580px;
}

.bg-darkGreen{
    background-color:#9BC1BC;
}

.salmon{
    color:#ed6a5a;
}

</style>
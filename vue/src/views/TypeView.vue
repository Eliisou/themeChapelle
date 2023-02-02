<script>
import axios from 'axios';
export default {
    data() {
        return {
            data:{},
            acf: {},
            isLoading:true,
            
        }
    },
    computed: {
            cssVars() {
                return {
                    '--background-image': `url(${this.acf.bandeau})`
                };
            },
    },

    created() {
        this.getPageData();

    },

    methods: {
        getPageData() {
            this.isLoading = true;

            axios.get(this.$wpData.rest_url + '/wp/v2/pages/20')
            .then((res) => {
                this.data = res.data;
                this.acf = res.data.acf;
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

    <section class="mx-60 my-20 w-1/2 leading-10">
        <p>{{ this.acf.descriptiongenerale }}</p>

    <div class="flex flex-col w-full mb-5 mt-20">
        <h2 class="title mb-2">{{ this.acf.section1.titre }}</h2>
        <div class="underline-service"></div>
    </div>

    <div v-html="this.acf.section1.paragraphe" class="w-full leading-10"></div>

    <div class="flex flex-col w-full mb-5 mt-20">
        <h2 class="title mb-2">{{ this.acf.section2.titre }}</h2>
        <div class="underline-service"></div>
    </div>

    <div v-html="this.acf.section2.paragraphe" class="w-full leading-10"></div>
        

    <div class="flex flex-col w-full mb-5 mt-20">
        <h2 class="title mb-2">{{ this.acf.section3.titre }}</h2>
        <div class="underline-service"></div>
    </div>

    <div v-html="this.acf.section3.paragraphe" class="w-full leading-10"></div>

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
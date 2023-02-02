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

            axios.get(this.$wpData.rest_url + '/wp/v2/pages/22')
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

  <section class="mx-60 mt-10">
    <div class="flex flex-col w-1/3 mb-5">
                <h2 class="title mb-2">{{ this.acf.section1.titre }}</h2>
                <div class="underline-service"></div>
            </div>

            <div v-html="this.acf.section1.paragraphe" class="w-full leading-10"></div>

            <div class="flex justify-center items-center my-10">
                <img :src="this.acf.section1.image" class="img-bandeau "/>
            </div>

            <div v-html="this.acf.section2.paragraphe" class="w-full text-center leading-10"></div>
            <div v-html="this.acf.section3.paragraphe" class="w-full leading-10 mb-20"></div>
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
    width: 600px;
    height:400px;
}
</style>
<script>
import dropText from '../components/dropText.vue';
import axios from 'axios';

export default {
    components: {
      dropText,
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

            axios.get(this.$wpData.rest_url + '/acf/v3/demarche')
            .then((res) => {
                this.data = res.data;
                this.data = this.data.reverse()
            })
            axios.get(this.$wpData.rest_url + '/wp/v2/pages/24')
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
   
        <div class="flex flex-col w-1/2 mb-5">
            <h2 class="title mb-2">{{ this.acf.titre }}</h2>
        <div class="underline-service"></div>
     </div>

     <p>{{ this.acf.description }}</p>
     <div class="flex flex-col my-10">
        <div v-for="item in this.data">
            <dropText :title="item.acf.titre" :paragraph="item.acf.paragraph"></dropText>
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

</style>
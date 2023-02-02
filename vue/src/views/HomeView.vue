<script>
import CardActu from "../components/CardActu.vue";
import axios from 'axios';

export default{
    components:{
        CardActu,
    },

    data() {
        return {
            acf:{},
            actu:{},
            actu2:{},
            actu3:{},
            event:{},
            event2:{},
            isLoading:true,
            
        }
    },

    created() {
        this.getPageData();

    },

    methods: {
        getPageData() {
            this.isLoading = true;

            axios.get(this.$wpData.rest_url + '/wp/v2/pages/8')
            .then((res) => {
                this.acf = res.data.acf;
            })
            axios.get(this.$wpData.rest_url + '/acf/v3/actu')
            .then((res2) => {
                this.actu = res2.data[0];
                this.actu2 = res2.data[1];
                this.actu3 = res2.data[2];
            })
            axios.get(this.$wpData.rest_url + '/acf/v3/event')
            .then((res3) => {
                this.event = res3.data[0];
                this.event2 = res3.data[1];
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
    <section class="w-full h-full z-10">
    <div class="relative">
      <img :src="this.acf.header.img" class="object-cover w-full h-full" alt="Image alt text" />
      <div class="dimension absolute top-0 w-full inset-x-0">
        <h1 class="h1 text-white inset-x-0 text-center w-1/2 mx-auto flex justify-center mb-20">{{this.acf.header.titre}}</h1>
        <h2 class="h2 text-white inset-x-0 text-center">{{this.acf.header.soustitre}}</h2>
      </div>
    </div>
  </section>

  <section class="w-full flex flex-col">
    <div class="mx-10 justify-center flex items-center flex-col ">
        <h1 class="title my-20">{{this.acf.sections.section1.titre}}</h1>
        <div class="flex flex-row justify-center space-x-10">
            
            <CardActu 
            :image="this.actu.acf.image"
            :paragraph="this.actu.acf.resume"
            :title="this.actu.acf.titre"></CardActu>

            <CardActu 
            :image="this.actu2.acf.image"
            :paragraph="this.actu2.acf.resume"
            :title="this.actu2.acf.titre"></CardActu>

            <CardActu 
            :image="this.actu3.acf.image"
            :paragraph="this.actu3.acf.resume"
            :title="this.actu3.acf.titre"></CardActu>
        </div>
    </div>
  </section>
  <section class="w-full flex flex-row mt-20 justify-center text-center">
    <div class="w-1/3 flex flex-col">
        <h1 class="title mb-10">{{this.acf.sections.section2.titre}}</h1>
        <p class="mb-10">{{this.acf.sections.section2.extrait}}</p>
        <div class="mb-5">
            <h2 class="font-semibold">{{ this.event.acf.date }}</h2>
            <p>{{ this.event.acf.description }}</p>
        </div>
        <div>
            <h2 class="font-semibold">{{ this.event2.acf.date }}</h2>
            <p>{{ this.event2.acf.description }}</p>
        </div>
    </div>
  </section>


    <section class="w-full h-auto section-card flex flex-row mt-20 ">
        <div class="mx-60 mt-20 w-full">
            <div class="flex flex-col w-1/3">
                <h2 class="title  mb-2">{{this.acf.sections.section3.titre}}</h2>
                <div class="underline-service"></div>
            </div>
            <div class="px-20 py-10">
                <div class="flex justify-center gap-10 my-5">                
                    <div class="card-elem flex items-center justify-center gap-5">
                        <div class="flex flex-col items-center justify-center">
                            <img :src="this.acf.sections.section3.service1.img" class="img-card mb-5"/>
                            <p>{{this.acf.sections.section3.service1.titre}}</p>
                        </div>
                    </div>
                    <div class="card-elem flex items-center justify-center gap-5">
                        <div class="flex flex-col items-center justify-center">
                            <img :src="this.acf.sections.section3.service2.img" class="img-card mb-5"/>
                            <p>{{this.acf.sections.section3.service2.titre}}</p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center gap-10 my-5">                
                    <div class="card-elem flex items-center justify-center gap-5">
                        <div class="flex flex-col items-center justify-center">
                            <img :src="this.acf.sections.section3.service3.img" class="img-card mb-5"/>
                            <p>{{this.acf.sections.section3.service3.titre}}</p>
                        </div>
                    </div>
                    <div class="card-elem flex items-center justify-center gap-5">
                        <div class="flex flex-col items-center justify-center">
                            <img :src="this.acf.sections.section3.service4.img" class="img-card mb-5"/>
                            <p>{{this.acf.sections.section3.service4.titre}}</p>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
    </section>

    <section class="w-full h-auto flex flex-row mt-5 mb-20">
        <div class="mx-60 mt-20 w-full">
            <div class="flex flex-col w-1/3">
                <h2 class="title mb-2">{{this.acf.sections.section4.titre}}</h2>
                <div class="underline-service"></div>
            </div>
            <p class="text-xl text-gray-500 text-center">{{this.acf.sections.section4.description}}</p>

            <div class="flex items-center flex-col">

                <div class="w-1/2 mx-auto flex flex-col justify-center">
                    <div class="champs flex flex-col my-5">
                        <div class="label">{{this.acf.sections.section4.input.name1}}</div>
                        <input class="input-text" type="text" value=""/>
                    </div>
                    <div class="champs flex flex-col my-5">
                        <div class="label">{{this.acf.sections.section4.input.name2}}</div>
                        <input class="input-text" type="text" value=""/>
                    </div>
                    <div class="champs flex flex-col my-5">
                        <div class="label">{{this.acf.sections.section4.input.name3}}</div>
                        <input class="input-text" type="text" value=""/>
                    </div>
                    <div class="champs flex flex-col my-5">
                        <div class="label">{{this.acf.sections.section4.input.name4}}</div>
                        <input class="input-text" type="text" value=""/>
                    </div>
                    <div class="w-1/4 mx-auto my-5">
                        <button type="button" class="btn btn-send w-full text-center " value="Envoyer">Envoyer</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>
<style>
.h1{
    color: #FFFFFF;
    font-family: "Alata", Sans-serif;
    font-size: 100px;
    font-weight: 600;
    line-height: 1.4em;
}

.h2{
    color: #FFFFFF;
    font-family: "Alata", Sans-serif;
    font-size: 45px;
    font-weight: 600;
}

.dimension{
    top: 25%;
    bottom: 25%;
}

.section-card {
    background-color:#E6EBE0;
}

.underline-service {
    background-color: #f51e46;
    height: 5px;
    width: 50px;
}

.card-elem {
    height: 170px;
    width: 280px;
    background-color: #fff;
}

.img-card {
    width: 50%;
    height: 50%;
}

.input-text {
    height: 30px;
    width: 100%;
    background-color: #EDEDED;
    border-radius: 5px;
}

.input-text-area {
    width: 100%;
    background-color: #EDEDED;
    border-radius: 5px;
}

.btn-send {
    background-color:#E6EBE0;
    padding: 10px;
    border-radius: 10px;
}


</style>
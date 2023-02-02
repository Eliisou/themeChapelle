<script>
import axios from 'axios';
export default{

    data() {
        return {
            isLoading:true,
            elem0:[],
            elem1:[],
            elem2:[],
            elem3:[],
            elem4:[],
            
        }
    },

    created() {
        this.getPageData();

    },

    methods: {
        getPageData() {
            this.isLoading = true;

            axios.get(this.$wpData.rest_url + '/menus/v1/menus/2')
            .then((res) => {
                const menu = res.data.items;
                menu.forEach(item => {
                    switch (item.attr_title) {
                        case "0":
                            this.elem0.push(item);
                            break;

                        case "1":
                            this.elem1.push(item);
                            break;

                        case "2":
                            this.elem2.push(item);
                            break;

                        case "3":
                            this.elem3.push(item);
                            break;

                        case "4":
                            this.elem4.push(item);
                            break;
                            
                        default:
                            break;
                    }
                });
            })

            .finally(() => setTimeout(() => {
                (this.isLoading = false)
                console.log(this.elem4)
            } , 1000));
        },
    },

};
</script>
<template>
    <div v-if="isLoading"></div>

    <div v-else class="w-full flex flex-col">
        <div class="bg-green pl-64">
            <p>Tel : 03 84 27 53 78 - mairie.lsc@wanadoo.fr</p>
        </div>
        <div class="flex flex-row justify-between items-center w-full pl-64 pr-64 pt-6 pb-6">
            <router-link to="/">
               <img class="w-44" :src="this.$wpData.template_directory_uri + '/assets/img/logo.png'"/> 
            </router-link>
            
            <div class="menu_font w-9/12 flex justify-between">

                <div class="dropdown">
                    <div class="flex gap-1 items-center">
                        <span>Vie administrative</span>
                    <img class="w-3 h-3 ml-3" :src="this.$wpData.template_directory_uri + '/assets/icon/chevron-arrow-down.png'"/>
                    </div>
                    <div class="dropdown-contenu z-index">
                        <div v-for="item in this.elem0" class="mb-4">
                            <router-link :to="`/${item.slug}`">
                                <p>{{ item.title }}</p>  
                            </router-link>

                        </div>
                    </div>
                </div>
                <div class="dropdown">
                    <div class="flex gap-1 items-center">
                        <span>Vie municipale</span>
                    <img class="w-3 h-3 ml-3" :src="this.$wpData.template_directory_uri + '/assets/icon/chevron-arrow-down.png'"/>
                    </div>
                    <div class="dropdown-contenu z-index">
                        <div v-for="item in this.elem1" class="mb-4">
                            <router-link :to="`/${item.slug}`">
                                <p>{{ item.title }}</p>  
                            </router-link>

                        </div>
                    </div>
                </div>
                <div class="dropdown">
                    <div class="flex gap-1 items-center">
                        <span>Vie scolaire</span>
                    <img class="w-3 h-3 ml-3" :src="this.$wpData.template_directory_uri + '/assets/icon/chevron-arrow-down.png'"/>
                    </div>
                    <div class="dropdown-contenu z-index">
                        <div v-for="item in this.elem2" class="mb-4">
                            <router-link :to="`/${item.slug}`">
                                <p>{{ item.title }}</p>  
                            </router-link>

                        </div>
                    </div>
                </div>
                <div class="dropdown">
                    <div class="flex gap-1 items-center">
                        <span>Vie pratique</span>
                    <img class="w-3 h-3 ml-3" :src="this.$wpData.template_directory_uri + '/assets/icon/chevron-arrow-down.png'"/>
                    </div>
                    <div class="dropdown-contenu z-index">
                        <div v-for="item in this.elem3" class="mb-4">
                            <router-link :to="`/${item.slug}`">
                                <p>{{ item.title }}</p>  
                            </router-link>

                        </div>
                    </div>
                </div>
                <div class="dropdown">
                    <div class="flex gap-1 items-center">
                        <span>Découvrir</span>
                    <img class="w-3 h-3 ml-3" :src="this.$wpData.template_directory_uri + '/assets/icon/chevron-arrow-down.png'"/>
                    </div>
                    
                    <div class="dropdown-contenu z-index">
                        <div v-for="item in this.elem4" class="mb-4">
                            <router-link :to="`/${item.slug}`">
                                <p>{{ item.title }}</p>  
                            </router-link>

                        </div>
                    </div>
                </div>
                

                <img class="w-4 h-4" :src="this.$wpData.template_directory_uri + '/assets/icon/search.png'"/>

            </div>

        </div>
    </div>
	
</template>
<style>
.menu_font a{
    color:#555555;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
    cursor:pointer;
}

.bg-green{
    background-color:#9bc1bc;
    clear: inherit;
    float: left;
    font-size: 14px;
    line-height: .8;
    list-style: outside none none;
    text-align: left;
    font-weight: 400;
    padding-top: 12px;
    padding-bottom: 12px;
}


.color-hover:hover{
    color:#9bc1bc;
}

.active{
    color:#f51e46;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-contenu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
}

.dropdown:hover .dropdown-contenu {
  display: block;
}

.z-index{
    z-index: 20;
}

</style>
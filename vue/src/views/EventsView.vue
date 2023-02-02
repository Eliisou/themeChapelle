<script>
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
import "../../node_modules/vue-simple-calendar/dist/style.css";
import "../../node_modules/vue-simple-calendar/dist/css/gcal.css";
import axios from 'axios';
export default{
    components: {
			CalendarView,
			CalendarViewHeader,
	},

    data() {
		return { 
            showDate: new Date() ,
            data:{},
            acf:{},
            event:{},
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

            axios.get(this.$wpData.rest_url + '/wp/v2/pages/28')
            .then((res) => {
                this.data = res.data;
                this.acf = res.data.acf;
            })
            axios.get(this.$wpData.rest_url + '/acf/v3/event/')
            .then((res2) => {
                this.event = res2.data;
            })
            .finally(() => setTimeout(() => (this.isLoading = false), 1000));
        },
        
        setShowDate(d) {
				this.showDate = d;
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
        <div class="text-bandeau text-center text-white m-0 p-5 flex items-center justify-center mt-16 text-4xl">{{this.data.title.rendered}}</div>
      </div>
    </section>

    <section class="mx-60 mt-10">
        <div class="flex flex-col w-1/3 mb-5">
            <h2 class="title mb-2">{{ this.acf.titre }}</h2>
            <div class="underline-service"></div>
        </div>

        <div class="flex flex-col">
            <div v-for="item in this.event" class="flex flex-row my-5">
                <img :src="item.acf.image" class="img-event"/>
                <div class="flex flex-col w-1/3">
                    <h3 class="font-semibold mb-3">{{item.acf.date}}</h3>
                    <p>{{ item.acf.description }}</p>
                </div>
            </div>
        </div>

        <calendar-view
			:show-date="showDate"
			class="theme-default holiday-us-traditional holiday-us-official my-20">
			<template #header="{ headerProps }">
				<calendar-view-header
					:header-props="headerProps"
					@input="setShowDate" />
			</template>
		</calendar-view>
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

.img-event {
    width: 300px;
    height:225px;
    margin-right:5vh;
}
</style>
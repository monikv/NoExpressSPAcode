<script >
import axios from "axios";
import HouseCard from './HouseCard.vue';

export default {
  name: 'App',
  components: {
    HouseCard
},

  data(){
    return {
      properties: []
    }
  },
   created() {
            let apiURL = 'https://noexpressjs.herokuapp.com/api';
            axios.get(apiURL).then(res => {
                this.properties = res.data.House;
            }).catch(error => {
                console.log(error)
            });
        }
}
</script>

<template>
    <!-- Nav bar -->
    <div style="padding-top:50px">
      <div class="rows">
       
          <div v-for="properti in properties" :key="properti.id" class="cols" >
               <HouseCard  :properti = properti />
        
        </div>
        </div>
   </div>
</template>

<style scoped>
.rows{
      display: flex;
    flex-wrap: wrap;
}
.cols{
  width: 33.33%;
}
 @media screen and (max-width: 700px) {
      .cols {
         width: 100% !important;
      }
   }

</style>

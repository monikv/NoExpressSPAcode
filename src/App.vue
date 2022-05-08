<script >
import Header from './components/Header.vue'
import ListComponent from './components/ListComponent.vue';

export default {
  name: 'App',
  components: {
    // 2 register the component 
    Header,
    ListComponent,
},

  data(){
 
  },
  
}
</script>

<template>
    <!-- Nav bar -->
    <Header />
   <router-view></router-view>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 2px !important;;
}
</style>

<template>
<div id="template">
    <navbar />

    <div id="app">
     <Slider/> 
     </div>



   <vue-slider v-model="value" />
    </div>
</template>

<script>



import navbar from './nav.vue'
import Slider from './Slider.vue'


    export default {
        name : 'home',
        components : {
            navbar ,
            Slider
        },
         data () {
           return {
      value: 0
    }
  }
        
    }
</script>

<style scoped>

 #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0px;
}
</style>
<template>
<div>

    <navbar />
<!-- 
    <h2> Contact page </h2> -->
        <br/><br/> <br/><br/><br/> <br/><br/><br/>
    <div class="container"  >
        <div class="row">
            <div class="col-8">
  
    <div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 100% ; padding-right : 10px" >
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12954.441512979849!2d-5.8948178!3d35.7357996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc35a87c33b565280!2sFacult%C3%A9%20des%20sciences%20et%20techniques%20de%20Tanger!5e0!3m2!1sfr!2sma!4v1624291126922!5m2!1sfr!2sma" frameborder="0" width="910px" height="460px" display="flex" left="30px" align="left">
    style="border:0" allowfullscreen></iframe>
   </div>
   </div>
      <div class="col-4">

   
       <div class="contacte">
        <img src="../assets/contact.jpeg" alt=""  align="right" >
       </div>
     </div></div> </div> 
     </div>

</template>


<script>

import navbar from './nav.vue'

export default {
    name : 'Contact',

    components : {
        navbar,
    }

}
</script>


<style scoped>
  .contacte{
     
     height: 60%;
    
     
  }


  
</style>
<template>
  <div id="app">
    

 
  
   

    <div class="auth-wrapper">
      <div class="auth-inner">

          <router-view />
      
      </div>
    </div>

  </div>

</template>

<script>

//import axios from 'axios'

//import navbar from './components/nav.vue';
//import home from './components/home.vue';
//import login from './components/login.vue'    We don't need these components cuz we're using routers  ! ! 

export default {
  name: 'App',
  components: {
    //navbar,
    //home,
    //login,
  }, 
  /*data(){
        return {
            user :null,
        }
    },
    created() {
        axios.get('http://127.0.0.1:8000/api/user', {
            headers : {
                Authorization : 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => {console.log(res.data.name) ; this.user = res.data })

    },*/
}
</script>

<style >

</style>

<template>

    <nav class="navMenu">  

        <a v-if="!user">
            <router-link to="/" >Home</router-link>
        </a>

        <a v-if="!user">
            <router-link to="/login" >LOGIN</router-link>
         </a>

        <a v-if="!user"> 
            <router-link to="/contact" > Contact</router-link>
        </a>
        <div class="dot"></div>
    </nav>
        <!--<a v-if="user" @click="handleLogout"> Logout</a>
        
        
    </nav>
    
   <nav class="navbar navbar-expand navbar-light fixed-top">
        <div class="container">
            <router-link to="/" > Home </router-link>

            <div class="collapse navbar-collapse">

                <ul class="navbar-nav ml-auto"  v-if="!user">
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link"> Login </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link"> Sign Up </router-link>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto"  v-if="user">
                    <li class="nav-item">
                        <router-link @click="handleLogout" class="nav-link"> Logout </router-link>
                    </li>
                </ul>

            </div>

        </div>
    </nav>
        -->
</template>

<script>



export default {



    name : 'navbar',
    props : [
        'user',
    ],

}
</script>






<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  background: #272727;
  font-family: "Montserrat", sans-serif;
}

.navMenu {
  margin: auto;
  position: absolute;
  top:10%;
  left: 80%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.navMenu a {
  color: #f6f4e6;
  text-decoration: none;
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: 500;
  display: inline-block;
  width: 80px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.navMenu a:hover {
  color: #fddb3a;
}

.navMenu .dot {
  width: 6px;
  height: 6px;
  background: #fddb3a;
  border-radius: 50%;
  opacity: 0;
  -webkit-transform: translateX(30px);
  transform: translateX(30px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.navMenu a:nth-child(1):hover ~ .dot {
  -webkit-transform: translateX(30px);
  transform: translateX(30px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

.navMenu a:nth-child(2):hover ~ .dot {
  -webkit-transform: translateX(110px);
  transform: translateX(110px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

.navMenu a:nth-child(3):hover ~ .dot {
  -webkit-transform: translateX(200px);
  transform: translateX(200px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

.navMenu a:nth-child(4):hover ~ .dot {
  -webkit-transform: translateX(300px);
  transform: translateX(300px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

.navMenu a:nth-child(5):hover ~ .dot {
  -webkit-transform: translateX(285px);
  transform: translateX(285px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

</style>
<template>


  

  <div>

          <div class="sidebar">

            <head>
              <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
            </head>
                  <div class="logo-details">
                      <i class='bx bxl-c-plus-plus'></i>
                        <span class="logo_name">Espace professeur</span>
                  </div>
                      
                    <ul class="nav-links">

                          <li>
                              <router-link tag="a" to="/Prof_DashBoard">
                              <i class='bx bx-grid-alt ' ></i>
                              <span class="link_name">Home</span>
                              </router-link>
                          </li>

                          <li>
                              <router-link tag="a" to="/prof">
                              <i class='bx bx-grid-alt ' ></i>
                              <span class="link_name">Liste des etudiants</span>
                              </router-link>
                          </li>
                          

                          
                          <li>
                              <router-link tag="a" to="/prof_pfe">
                              <i class='bx bx-pie-chart-alt-2' ></i>
                              <span class="link_name">Consulter PFE</span>
                              </router-link>
                              
                          </li>
                          
                          <li>
                              <router-link tag="a" to="/emploi">
                              <i class='bx bx-pie-chart-alt-2' ></i>
                              <span class="link_name">Calendrier</span>
                              </router-link>
                              
                          </li>

                          
                          <li>
                            <div class="fixed-bottom">
                              <div class="profile-content">
                                  <!--<img src="image/profile.jpg" alt="profile">-->
                              </div>
                            
                            <div>
                            
                              <div> <a @click="handleLogout"><i class=uil-signout> Logout</i></a></div>
                              
                            </div>

                            <i class='bx bx-log-out' ></i>
                          </div>
                          </li>
                    </ul>
            </div>




            <div class="content">

                  

                <div id="services" class="shadow-lg">
                  <!-- #1 -->
                  <div class="features row">
                    <p></p>
                    <div class="medium-4 columns">
                      <i class="fa fa-graduation-cap fa-3x"></i>
                      <h3>Consulter les p.f.e</h3>
                      <p>vous pouvez consulter les sujets des projets de fin d'études de vos etudiants. </p>
                    </div>
                    <!-- #2 -->
                      <div class="medium-4 columns">
                        <i class="fa fa-pencil-square-o fa-3x"></i>
                        <h3>Administration</h3>
                        <p>
                        gérer et consulter les notes de vos étudiants.
                        </p>
                    </div>
                    <!-- #3 -->
                    <div class="medium-4 columns">
                        <i class="fa fa-calendar fa-3x"></i>
                        <h3>Calendrier</h3>
                        <p>Voir votre votre emploi du temp et reserver une seance si vous voulez.</p>
                    </div>
                    
                  
                  </div>
                </div>
  


            </div>

    </div>
    


</template>



<script>

import axios from 'axios'

export default {
    name : 'Prof_DashBoard',


    data(){
        return {
            user :null,
            prof :null,
            notes :[]
        }
    },
    created() {

        axios.all([
          axios.get('http://127.0.0.1:8000/api/module/prof',{
            headers : {
                    Authorization : 'Bearer ' + localStorage.getItem('token')
                }
          }).then(res => {console.log(res.data.name) ; this.prof = res.data })
          ,
          axios.get('http://127.0.0.1:8000/api/user', {
              headers : {
                    Authorization : 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(res => {console.log(res.data.name) ; this.user = res.data })
          ,
          axios.get('http://127.0.0.1:8000/api/note/module', {
              headers : {
                    Authorization : 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(res => { this.notes = res.data})
           
            ])
    },

    methods : {
         handleLogout(){
      axios.post('http://127.0.0.1:8000/api/logout',{body:'logoutbody'},{headers: {
               'Authorization' : ('Bearer  '+ localStorage.getItem('token'))
           }})
            localStorage.removeItem('token');
            
            
            this.$router.push('/');
            
        },

        onEdit(id){
          confirm('u want to edit  ? ')
          window.console.log('id to edit : '+id)
        }
    },
}

</script>




<style scoped>


.content{
  padding-top: 8%;
  padding-left: 15%;
}


#services{background:#efefef;
  padding:50px;
max-width:75vw;
margin:0 auto;}
body{font-family:sans-serif;color: #444;}
div {display: block;}

*, :after, :before {
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
}
.row:after {clear: both;}
.row:after, .row:before {
content: " ";
display: table;
}

.row {
width: 100%;
margin: 0 auto;
max-width: 62.5rem;
}
.medium-4 {width: 33.33333%;}

.column, .columns {
position: relative;
padding-left: .9375rem;
padding-right: .9375rem;
float: left;
}

.medium-4 h3{
  padding:10px 0px 10px 0px;
}





#services .fa {font-size: 3.4em;}
  #services .features {
text-align: center;
}
#services i {padding: 1em;}
.fa {
display: inline-block;
font: normal normal normal 14px/1 FontAwesome;
font-size: inherit;
text-rendering: auto;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

#services .fa {
text-align: center;
background: #6ae1ff;

display: block;
margin: auto;
font-size: 4em;
}
#services p {
padding: 0;
float:left;
}
p {
line-height:160%;
display: block;
-webkit-margin-before: 1em;
-webkit-margin-after: 1em;
-webkit-margin-start: 0px;
-webkit-margin-end: 0px;
}




@media only screen and
  (max-width:749px){
    
    .medium-4 {width: 100%;}

.column, .columns {
position: relative;
padding-left: 0rem;
padding-right: 0rem;
margin-bottom:2em;
}
    
    
}
  
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.sidebar{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 260px;
  background: #11101d;
  z-index: 100;
  transition: all 0.5s ease;
}
.sidebar.close{
  width: 78px;
}
.sidebar .logo-details{
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}
.sidebar .logo-details i{
  font-size: 30px;
  color: #fff;
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
}
.sidebar .logo-details .logo_name{
  font-size: 22px;
  color: #fff;
  font-weight: 600;
  transition: 0.3s ease;
  transition-delay: 0.1s;
}
.sidebar.close .logo-details .logo_name{
  transition-delay: 0s;
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links{
  height: 100%;
  padding: 30px 0 150px 0;
  overflow: auto;
}
.sidebar.close .nav-links{
  overflow: visible;
}
.sidebar .nav-links::-webkit-scrollbar{
  display: none;
}
.sidebar .nav-links li{
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
}
.sidebar .nav-links li:hover{
  background: #7973b9;
}
.sidebar .nav-links li .iocn-link{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar.close .nav-links li .iocn-link{
  display: block
}
.sidebar .nav-links li i{
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.sidebar .nav-links li.showMenu i.arrow{
  transform: rotate(-180deg);
}
.sidebar.close .nav-links i.arrow{
  display: none;
}
.sidebar .nav-links li a{
  display: flex;
  align-items: center;
  text-decoration: none;
}
.sidebar .nav-links li a .link_name{
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  transition: all 0.4s ease;
}
.sidebar.close .nav-links li a .link_name{
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links li .sub-menu{
  padding: 6px 6px 14px 80px;
  margin-top: -10px;
  background: #1d1b31;
  display: none;
}
.sidebar .nav-links li.showMenu .sub-menu{
  display: block;
}
.sidebar .nav-links li .sub-menu a{
  color: #fff;
  font-size: 15px;
  padding: 5px 0;
  white-space: nowrap;
  opacity: 0.6;
  transition: all 0.3s ease;
}
.sidebar .nav-links li .sub-menu a:hover{
  opacity: 1;
}
.sidebar.close .nav-links li .sub-menu{
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  opacity: 0;
  display: block;
  pointer-events: none;
  transition: 0s;
}
.sidebar.close .nav-links li:hover .sub-menu{
  top: 0;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
}
.sidebar .nav-links li .sub-menu .link_name{
  display: none;
}
.sidebar.close .nav-links li .sub-menu .link_name{
  font-size: 18px;
  opacity: 1;
  display: block;
}
.sidebar .nav-links li .sub-menu.blank{
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links li:hover .sub-menu.blank{
  top: 50%;
  transform: translateY(-50%);
}
.sidebar .profile-details{
  position: fixed;
  bottom: 0;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1d1b31;
  padding: 6px 0;
  transition: all 0.5s ease;
}
.sidebar.close .profile-details{
  background: none;
}
.sidebar.close .profile-details{
  width: 78px;
}

.sidebar .profile-details img{
  height: 52px;
  width: 52px;
  object-fit: cover;
  border-radius: 16px;
  margin: 0 14px 0 12px;
  background: #1d1b31;
  transition: all 0.5s ease;
}
.sidebar.close .profile-details img{
  padding: 10px;
}
.sidebar .profile-details .profile_name,
.sidebar .profile-details .job{
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
}
.sidebar.close .profile-details i,
.sidebar.close .profile-details .profile_name,
.sidebar.close .profile-details .job{
  display: none;
}
.sidebar .profile-details .job{
  font-size: 12px;
}
.home-section{
  position: relative;
  background: #E4E9F7;
  height: 100vh;
  left: 260px;
  width: calc(100% - 260px);
  transition: all 0.5s ease;
}
.sidebar.close ~ .home-section{
  left: 78px;
  width: calc(100% - 78px);
}
.home-section .home-content{
  height: 60px;
  display: flex;
  align-items: center;
}
.home-section .home-content .bx-menu,
.home-section .home-content .text{
  color: #11101d;
  font-size: 35px;
}
.home-section .home-content .bx-menu{
  margin: 0 15px;
  cursor: pointer;
}
.home-section .home-content .text{
  font-size: 26px;
  font-weight: 600;
}


</style>
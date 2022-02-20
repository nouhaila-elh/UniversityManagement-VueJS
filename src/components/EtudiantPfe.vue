<template>
    <div>
            <div class="sidebar">

            <head>
                <link  rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css">
            </head>
                    
                    <div class="logo-details">
                            <i class='bx bxl-c-plus-plus'></i>
                                <span class="logo_name">Espace etudiant</span>
                                </div>
                            <ul class="nav-links">

                                    <li>
                                        <router-link @click="reload" tag="a" to="/EtudiantDashboard">
                                        <i class='bx bx-grid-alt ' ></i>
                                        <span class="link_name">Home</span>
                                        </router-link>
                                    </li>

                                    <li>
                                        <router-link @click="reload" tag="a" to="/Etudiant">
                                        <i class='bx bx-grid-alt ' ></i>
                                        <span class="link_name">Mes notes</span>
                                        </router-link>
                                    </li>
                                    
                                    <li>
                                        <router-link @click="reload" tag="a" to="/EtudiantPfe">
                                        <i class='bx bx-pie-chart-alt-2' ></i>
                                        <span class="link_name">Consulter PFE</span>
                                        </router-link>
                                        
                                    </li>

                                    <li>
                                        <router-link tag="a" to="/EtudiantEmploi">
                                        <i class='bx bx-pie-chart-alt-2' ></i>
                                        <span class="link_name">Calendrier</span>
                                        </router-link>
                                        
                                    </li>

                                    
                                    <li>
                                    <div class="profile-details">
                                    <div class="profile-content">
                                        <!--<img src="image/profile.jpg" alt="profile">-->
                                    </div>
                                    <div class="name-job">
                                    
                                    <div class="profile_name"> <a @click="handleLogout"><i class=uil-signout> Logout</i></a></div>
                                    
                                    </div>
                                    <i class='bx bx-log-out' ></i>
                                    </div>
                                </li>
                          </ul>
                  </div>


                <div class="content">
                        <div id="headerH1" class="m-auto">
                          <h1 class="border-start border-5 ">Informations sur votre PFE</h1>
                        </div>
                
                    <div class="card pt-5">
                        <div class="card-body w-75 m-auto">
                            <table class="table table-primary table-hover text-center">

                                <thead>
                                    <tr>
                                        <th>Sujet de Pfe</th>
                                        <th>Votre Encadrant</th>
                                        <th>Email de votre encadrant</th>
                                    </tr>
                                </thead>

                                <tbody>
                                  
                                      <tr :etudiants="etudiants">
                                        
                                            <td>{{etudiants[0].sujet}}</td>
                                            <td>{{etudiants[1].nom}}</td>
                                            <td>{{etudiants[1].email}}</td>
                                      
                                      </tr>  
                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                   
                </div>
    </div>
</template>


<script>

import axios from 'axios'

export default {
    name : 'EtudiantPfe',

    data(){
        return {
            user :null,
            etudiants :[],
        }
    },
    created() {
        
        axios.all([

        
            axios.get('http://127.0.0.1:8000/api/user', {
                headers : {
                    Authorization : 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(res => {console.log(res.data.name) ; this.user = res.data }),

            axios.get('http://127.0.0.1:8000/api/pfe/etudiant',{
                headers : {
                    Authorization : 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(res => {console.log(res.data.name) ;this.etudiants = res.data ; console.log(this.etudiants)}),
        ])
        
        },

        methods: {
             handleLogout(){
              axios.post('http://127.0.0.1:8000/api/logout',{body:'logoutbody'},{headers: {
                      'Authorization' : ('Bearer  '+ localStorage.getItem('token'))
                  }})
                    localStorage.removeItem('token');
                    
                    this.$router.push('/')
        }
        },  

    }
</script>




<style scoped>

 
.content{
  padding-top: 5%;
  padding-left: 20%;
}

#headerH1{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: #5d9eff27;
  width: 40% ;
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
.sidebar .profile-details .profile-content{
  display: flex;
  align-items: center;
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

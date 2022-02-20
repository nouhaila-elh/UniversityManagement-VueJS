<template>


  

  <div>

            <div class="sidebar">

            <head>
              <link  rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css">
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
                              <router-link tag="a" to="/ProfEmploi">
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
        <div id="HeaderDiv" class="border-start  shadow-lg border-5 border-info">
            <h3 class="p-3">  Dans cette page ,vous pouvez consulter les notes de vos etudiants </h3>
        </div>
        
      </div>

    <div class="pt-5">
      <div class="card w-50 m-auto">

          <div class="card-header">
            <h3>Nom de Module : {{prof.nom}} </h3>
              
            <form @submit.prevent="handleSubmit" class="mt-3">

                <input type="text" value="Etudiant" class="form-control" disabled>

                <label for="nom" class="m-2">Nom : </label>
                   <input type="text" class="form-control" v-model="dataForm.nom" id="nom" disabled>

                <label for="prenom" class="m-2">Prenom :</label>
                   <input type="text" class=" form-control" v-model="dataForm.prenom" id="prenom" disabled>

                <label for="email" class="m-2"> Email :</label>
                   <input type="text" class=" form-control" v-model="dataForm.email" id="email" disabled>

                <label for="note" class="m-2"> Note :</label>
                   <input type="number" min="0" max="20" class=" form-control" v-model="dataForm.note" id="note">

                  <button style="diplay:flex" type="submit" class="btn btn-info mt-2" >Enregistrer</button>
                    <div  v-if="seen" class="pt-2">
                                <button class="btn btn-warning" @click="cancelEdit">Annuler</button>
                    </div>  
              
            </form>

          </div>

        <div class="card-body shadow-lg">

          <table class="table caption-top table-sm table-primary table-hover text-center">
          <caption> liste des etudiants :  </caption>
                <thead class="table-info">
                  <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Email</th>
                    <th>note</th>
                    <th>Modifier la note</th>
                  </tr>
                </thead>
                
                <tbody>
                  <tr v-for="note in notes" :key="note.id" >
                    <td> {{note.id}}</td>
                    <td> {{note.etudiant.nom}}</td>
                    <td> {{note.etudiant.prenom}}</td>
                    <td> {{note.etudiant.email}}</td>
                    <td> {{note.note}}</td>
                    <td><button @click="onEdit(note)" class="btn btn-warning"><i class="uil-edit"></i></button></td>
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
    name : 'Prof',

    
   data(){
        return {
            user :null,
            prof :null,
            notes :{},
            dataForm : {
                nom : '',
                prenom : '',
                email : '',
                note : ''
            },
            seen :false,
            idToUpdate :null ,
            moduleUpd :null,
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

            ])

          this.getEtudiantsNotes();
    },

    methods : {

      
        getEtudiantsNotes(){
          axios.get('http://127.0.0.1:8000/api/note/module', {
              headers : {
                    Authorization : 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(res => { this.notes = res.data })
            
        }
      ,


       handleSubmit(){
          //console.log(this.idToUpdate);

          //console.log(this.dataForm.note)
          console.log(this.moduleUpd)
          axios.put('http://127.0.0.1:8000/api/prof/etudNote/'+this.idToUpdate+'/'+this.moduleUpd,{note : this.dataForm.note})
          .then( () => {
            this.seen = false ; 
            this.getEtudiantsNotes();
            this.dataForm.nom=null;
            this.dataForm.prenom=null;
            this.dataForm.email=null;
            this.dataForm.note=null;
          } )
          
        },

        onEdit(note){
          //console.log(note.etudiant)
          //console.log(note.etudiant.nom)
          //console.log(note.etudiant.id)
         
          this.dataForm.nom =note.etudiant.nom ; 
          this.dataForm.prenom =note.etudiant.prenom ; 
          this.dataForm.email =note.etudiant.email ; 
          this.dataForm.note =note.note ; 
          this.moduleUpd = note.module;
          this.idToUpdate = note.etudiant.id;
          console.log(this.idToUpdate);
          this.seen = true;
        },


         handleLogout(){
          axios.post('http://127.0.0.1:8000/api/logout',{body:'logoutbody'},{headers: {
                  'Authorization' : ('Bearer  '+ localStorage.getItem('token'))
              }})
                localStorage.removeItem('token');
                
                
                this.$router.push('/');
            
        },
       
    },
}

</script>




<style scoped>

.content{
  padding-top: 5%;
  padding-left: 20%;
}

#HeaderDiv{
  background-color: #a8deeeb2;
  width: 75%;
}
  #HeaderDiv :hover{
    background-color: #6ee9ff4b;
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
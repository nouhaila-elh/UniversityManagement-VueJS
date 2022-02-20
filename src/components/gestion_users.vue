<template>
    <div>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css">
            <link  rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css">
        </head>
        
        <aside class="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1">
            <i class="uil-bars close-aside d-md-none d-lg-none" data-close="show-side-navigation1"></i>
            
            <div class="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
 <img class="rounded-pill img-fluid" width="65" src="data:image/jpeg;base64,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" style="width: 100px;hight:100px" alt="">                
                <div class="ms-2">
                    <h5 class="fs-6 mb-0">
                        <a class="text-decoration-none" href="#">Admin</a>
                    </h5>
                    <p class="mt-1 mb-0">Bonjour Monsieur l'admin ! </p>
                </div>
            </div>


            <ul class="categories list-unstyled">
                <li>
                    <i class="uil-estate fa-fw"></i><router-link tag="a" to="/admin"> Dashboard</router-link>
                </li>

                <li>
                    <i class=" uil-folder-download"></i><router-link tag="a" to="/gestion_users"> Gestionnaire d'utilisateurs</router-link>
                </li>

                <li>
                    <i class="uil-calendar-alt"></i><router-link tag="a" to="/Calendrier"> Calendrier</router-link>

                </li>

                <li class="fixed-bottom ">
                    <i class=uil-signout></i><a @click="handleLogout" href="#"> Logout</a>
                </li>
            </ul>
        </aside>

        <div id="wrapper">
           
           <div class="row">
                <div class="col-6 card">
                    <h2 class="card-header shadow">Modifier des prof : </h2>

                     <form @submit.prevent="handleRegisterProf" class="card-body">

                        <label class="form-label" for="utilisateur">utilisateur :</label>
                            <select v-model="dataFormProf.utilisateur" name="utilisateur" class="form-control" id="utilisateur" disabled="disabled">
                                <option>Professeur</option>
                            </select>

                        <label class="form-label" for="prof_nom">Nom :</label>
                            <input v-model="dataFormProf.nom" type="text" class="form-control" id="prof_nom">
                        <label class="form-label" for="prof_prenom">Prenom :</label>
                            <input v-model="dataFormProf.prenom" type="text" class="form-control" id="prof_prenom">
                        <label class="form-label" for="prof_email">Email :</label>
                            <input v-model="dataFormProf.email" type="email" class="form-control" id="prof_email">
                        <label class="form-label" for="prof_password">password :</label>
                            <input v-model="dataFormProf.password" type="password" class="form-control" id="prof_password">
                        <button type="submit"  style="float:left" class="btn btn-info mt-2 shadow"> Enregistrer</button>
                        <div v-if="seen" class="pt-2">
                            <button class="btn btn-warning" @click="cancelEdit">Annuler</button>
                        </div>

                    </form>


                    <div class="card-footer">  
                        <h3> Liste des Prof : </h3>
                        
                    </div>
                    <div style="height:100%">
                        <table class="table table-hover shadow-lg">
                            <thead class="table-info">
                                <tr>
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr v-for="prof in profs" :key="prof.id">
                                    
                                        <td>{{ prof.nom }}</td>
                                        <td>{{ prof.prenom }}</td>
                                        <td>{{ prof.email }}</td>
                                        <td>
                                            <button class="btn btn-warning m-1" @click="onEditProf(prof.id)"> <i class="uil-edit"></i> </button>
                                            <button class="btn btn-danger" @click="onDeleteProf(prof.id)"> <i class="uil-trash"></i> </button>
                                        </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
                
               

                
                    <div class="col-6 card">
                        <h2 class="card-header shadow">Gestion des Etudiants : </h2>

                        <form @submit.prevent="handleRegisterEtudiant" class="card-body">

                            <label class="form-label" for="etudiant">utilisateur :</label>
                                <select class="form-control" id="etudiant" disabled="disabled">
                                    <option>Etudiant</option>
                                </select>

                            <label class="form-label" for="etd_nom">Nom :</label>
                                <input v-model="dataFormEtudiant.nom" type="text" class="form-control" id="etd_nom">
                            <label class="form-label" for="etd_prenom">Prenom :</label>
                                <input v-model="dataFormEtudiant.prenom" type="text" class="form-control" id="etd_prenom">
                            <label class="form-label" for="etd_email">Email :</label>
                                <input v-model="dataFormEtudiant.email" type="email" class="form-control" id="etd_email">
                            <label class="form-label" for="etd_password">password :</label>
                                <input v-model="dataFormEtudiant.password" type="password" class="form-control" id="etd_password">
                            <div>
                                <button type="submit" style="float:left"  class="btn btn-info mt-2 shadow"> Enregistrer </button>
                                    <div v-if="seen_etd" class="pt-2">
                                        <button  class="btn btn-warning" @click="cancelEdit">Annuler</button>
                                    </div>  
                            </div>
                            
                        </form>


                        
                        <div class="card-footer">  
                            <h3> Liste des etudiants : </h3>
                            
                        </div>
                        
                        <div  style="height:100%">
                            <table class="table table-hover shadow-lg">
                                <thead class="table-info">
                                    <tr>
                                        <th>Nom</th>
                                        <th>Prenom</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr v-for="etudiant in etudiants" :key="etudiant.id">
                                        
                                            <td>{{ etudiant.nom }}</td>
                                            <td>{{ etudiant.prenom }}</td>
                                            <td>{{ etudiant.email }}</td>
                                            <td>
                                                <button class="btn btn-warning m-1" @click="onEditEtd(etudiant.id)"><i class="uil-edit"></i> </button>
                                                <button class="btn btn-danger" @click="onDeleteEtd(etudiant.id)"><i class="uil-trash"></i></button>
                                            </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    

                    </div>

                
               
           </div>

        </div>

    </div>
</template>

<script>

import axios from 'axios'

export default {
    name : 'gestion_users',
    
    data() {
        return {
            dataFormProf : {
                utilisateur : 'Professeur',
                nom : '',
                prenom : '',
                email : '',
                password : ''
            },
            dataFormEtudiant : {
                utilisateur : 'Etudiant',
                nom : '',
                prenom : '',
                email : '',
                password : ''
            },
            profs : [],
            etudiants : [],
            idToUpdateEtd : null,
            idToUpdateProf : null,
            seen : false,
            seen_etd : false,
        }
    },

    methods: {
        handleRegisterProf(){
            if(this.idToUpdateProf == null){
                axios.post('http://127.0.0.1:8000/api/register_prof',this.dataFormProf)
                .then( (res) => {console.log(res) ; this.getProf()})
               
            }
            else{
                axios.put('http://127.0.0.1:8000/api/admin/prof/'+this.idToUpdateProf,this.dataFormProf)
                .then( res => {
                    console.log(res)
                    this.getProf()
                    this.idToUpdateProf = null ;
                })
            }
                this.dataFormProf.nom = null ;
                this.dataFormProf.prenom = null ;
                this.dataFormProf.email = null ;
                this.dataFormProf.password = null ;
                this.seen=false;
                
        },

        handleRegisterEtudiant(){
            
            if(this.idToUpdateEtd==null){
                axios.post('http://127.0.0.1:8000/api/register_etudiant',this.dataFormEtudiant)
                .then(res => {console.log(res) ; this.getEtudiants()})
            }

            else{
                axios.put('http://127.0.0.1:8000/api/admin/etudiant/'+this.idToUpdateEtd,this.dataFormEtudiant)
                .then( res => { 
                    console.log(res);
                    this.getEtudiants();
                    this.idToUpdateEtd = null;
                })
            }
                
                this.dataFormEtudiant.nom = null ;
                this.dataFormEtudiant.prenom = null ;
                this.dataFormEtudiant.email = null ;
                this.dataFormEtudiant.password = null ;
                this.seen_etd=false;
                
            },

        
        
        getProf(){
            axios.get('http://127.0.0.1:8000/api/admin/prof')
            .then( (res) => {
              console.log(res.data);
              this.profs = res.data
              
            } )
        },

        getEtudiants(){
            axios.get('http://127.0.0.1:8000/api/admin/etudiant')
            .then( (res) => {
              console.log(res.data);
              this.etudiants = res.data
            } )
        },

        onDeleteProf(id){
            axios.delete('http://127.0.0.1:8000/api/admin/prof/'+id)
            .then(() => {this.getProf()} )
            //console.log(id)
        },

        onDeleteEtd(id){
            axios.delete('http://127.0.0.1:8000/api/admin/etudiant/'+id)
            .then(() => {this.getEtudiants()} )
            //console.log(id)
        },


        onEditEtd(id){
            axios.get('http://127.0.0.1:8000/api/admin/etudiant/'+id)
            .then( 
                res => {
                this.dataFormEtudiant.nom=res.data.nom,
                this.dataFormEtudiant.prenom=res.data.prenom,
                this.dataFormEtudiant.email=res.data.email,
                this.dataFormEtudiant.password=res.data.password,

                this.idToUpdateEtd =id;
                this.seen_etd=true;
                })
            //console.log(id);
        },

        onEditProf(id){
            axios.get('http://127.0.0.1:8000/api/admin/prof/'+id)
            .then( 
                res => {
                this.dataFormProf.nom=res.data.nom,
                this.dataFormProf.prenom=res.data.prenom,
                this.dataFormProf.email=res.data.email,
                this.dataFormProf.password=res.data.password

                this.idToUpdateProf=id;
                this.seen=true;
                })
            //console.log(id);
        },

         handleLogout(){
            axios.post('http://127.0.0.1:8000/api/logout',{body:'logoutbody'},{headers: {
                    'Authorization' : ('Bearer  '+ localStorage.getItem('token'))
                }})
            localStorage.removeItem('token');
            
            this.$router.push('/')
        },

    },

    created() {
        this.getProf();
        this.getEtudiants();
    },

}
</script>

<style >
#wrapper {
    margin-left:  var(--sidebar-width);
    padding: 1%;
    transition: all .3s ease-in-out;
}



</style>
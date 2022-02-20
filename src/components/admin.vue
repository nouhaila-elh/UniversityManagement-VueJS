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

    <section id="wrapper">
        
        <div class="p-4">
        <div class="welcome">
            <div class="content shadow-lg p-0 mb-5 rounded-3 p-3">
            <h1 class="fs-3">Bienvenue sur le tableau de bord</h1>
            <p class="mb-0">Bonjour MrAdmin,bienvenue sur votre superbe tableau de bord !</p>
            </div>
        </div>

        <section class="statistics mt-4">
            <div class="row">

            <div class="col-lg-6">
                <div class="box shadow-lg p-0 mb-5 rounded d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                <i class="uil-file fs-2 text-center bg-danger rounded-circle"></i>
                <div class="ms-3">
                    <div class="d-flex align-items-center">
                    <h3 class="mb-0">30</h3> <span class="d-block ms-2">Projets</span>
                    </div>
                    <p class="fs-normal mb-0"></p>
                </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="box-hover box shadow-lg p-0 mb-5 rounded d-flex rounded-2 align-items-center p-3">
                    <i class="uil-users-alt fs-2 text-center bg-success rounded-circle"></i>
                    <div class="ms-3">
                        <div class="d-flex align-items-center">
                        <h3 class="mb-0">36</h3> <span class="d-block ms-2">Utilisateurs</span>
                        </div>
                        <p class="fs-normal mb-0">Nombre des utilisateurs enregistrés</p>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section class="statis mt-4 text-center">
            <div class="row">
                <div class="col-md-4 col-lg-4 mb-4 mb-lg-0">
                    <div class="box shadow-lg p-0 mb-5 rounded bg-success p-3">
                    <i class="uil-eye"></i>
                    <h3>25</h3>
                    <p class="lead">utilisateurs actifs</p>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 mb-4 mb-lg-0">
                    <div class="box shadow-lg p-0 mb-5 rounded bg-danger p-3">
                    <i class="uil-user"></i>
                    <h3>6</h3>
                    <p class="lead">Professeur</p>
                    </div>
                </div>
                
                <div class="col-md-4 col-lg-4">
                    <div class="box shadow-lg p-0 mb-5 rounded bg-primary p-3">
                    <i class="uil-user-square"></i>
                    <h3>30</h3>
                    <p class="lead">Etudiants</p>
                    </div>
                </div>
            </div>
        </section>
    
            <section class="charts mt-4">
                <div class="chart-container p-3  shadow-lg">
                <h3 class="fs-6 mb-3">L'emploi du temps </h3>
                <div style="height: 550px" class="bg-light  shadow-lgs">
                    <EmploiEtudiant />
                    <canvas id="chart3" width="100%"></canvas>
                </div>
                </div>
            </section>
                </div>
    </section>
</div>

    
    

    
</template>



<script>

import axios from 'axios'
import EmploiEtudiant from './EmploiEtudiant.vue'

export default {
    name : 'admin',
    components : {
        EmploiEtudiant,
    },
     methods: {
        handleLogout(){
            axios.post('http://127.0.0.1:8000/api/logout',{body:'logoutbody'},{headers: {
                    'Authorization' : ('Bearer  '+ localStorage.getItem('token'))
                }})
            localStorage.removeItem('token');
            
            this.$router.push('/')
        },
            
    }
}

</script>


<style>
     @import 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet';

    
   ul > li > a::before {  
  transform: scaleX(0);
  transform-origin: bottom right;
}

 ul > li > a:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

 ul > li > a::before {
  content: " ";
  display: block;
  position: absolute;
  
  inset: 0 0 0 0;
  background: hsl(0, 1%, 23%);
  z-index: -1;
  transition: transform .3s ease;
}



:root {
    --dk-gray-100: #F3F4F6;
    --dk-gray-200: #E5E7EB;
    --dk-gray-300: #D1D5DB;
    --dk-gray-400: #9CA3AF;
    --dk-gray-500: #6B7280;
    --dk-gray-600: #4B5563;
    --dk-gray-700: #374151;
    --dk-gray-800: #1F2937;
    --dk-gray-900: #111827;
    --dk-dark-bg: #36475f;
    --dk-darker-bg: #2a2b3d;
    --navbar-bg-color: #6f6486;
    --sidebar-bg-color: #23344ee6;
    --sidebar-width: 250px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--dk-darker-bg);
    font-size: .925rem;
}

#wrapper {
    margin-left:  var(--sidebar-width);
    transition: all .3s ease-in-out;
}

#wrapper.fullwidth {
    margin-left: 0;
}



/** --------------------------------
 -- Sidebar
-------------------------------- */
.sidebar {
    background-color: var(--sidebar-bg-color);
    width: var(--sidebar-width);
    transition: all .3s ease-in-out;
    transform: translateX(0);
    z-index: 9999999
}

.sidebar .close-aside {
    position: absolute;
    top: 7px;
    right: 7px;
    cursor: pointer;
    color: #EEE;
}

.sidebar .sidebar-header {
    border-bottom: 1px solid #0c6d499a
}

.sidebar .sidebar-header h5 a {
    color: var(--dk-gray-300)
}

.sidebar .sidebar-header p {
    color: var(--dk-gray-400);
    font-size: .825rem;
}


.sidebar > ul > li {
    padding: .7rem
}

.sidebar ul > li > a {
    color: var(--dk-gray-400);
    text-decoration: none;
}

/* Start numbers */
.sidebar ul > li > a > .num {
    line-height: 0;
    border-radius: 3px;
    font-size: 14px;
    padding: 0px 5px
}

.sidebar ul > li > i {
    font-size: 18px;
    margin-right: .7rem;
    color: var(--dk-gray-500);
}

.sidebar ul > li.has-dropdown > a:after {
    content: '\eb3a';
    font-family: unicons-line;
    font-size: 1rem;
    line-height: 1.8;
    float: right;
    color: var(--dk-gray-500);
    transition: all .3s ease-in-out;
}

.sidebar ul .opened > a:after {
    transform: rotate(-90deg);
}

/* Start dropdown menu */
.sidebar ul .sidebar-dropdown {
    padding-top: 10px;
    padding-left: 30px;
    display: none;
}
.sidebar ul .sidebar-dropdown.active {
    display: block;
}

.sidebar ul .sidebar-dropdown > li > a {
  font-size: .85rem;
    padding: .5rem 0;
    display: block;
}
/* End dropdown menu */

.show-sidebar {
    transform: translateX(-270px);
}

@media (max-width: 767px) {
    .sidebar ul > li {
        padding-top: 12px;
        padding-bottom: 12px;
    }

    .sidebar .search {
        padding: 10px 0 10px 30px
    }
}




/** --------------------------------
 -- welcome
-------------------------------- */
.welcome {
    color: var(--dk-gray-300);
}

.welcome .content {
    background-color: var(--dk-dark-bg);
}

.welcome p {
    color: var(--dk-gray-400);
}




/** --------------------------------
 -- Statistics
-------------------------------- */
.statistics {
    color: var(--dk-gray-200);
}

.statistics .box {
    background-color: var(--dk-dark-bg);
}

.statistics .box i {
    width: 60px;
    height: 60px;
    line-height: 60px;
}

.statistics .box p {
    color: var(--dk-gray-400);
}




/** --------------------------------
 -- Charts
-------------------------------- */
.charts .chart-container {
    background-color: var(--dk-dark-bg);
}

.charts .chart-container h3 {
    color: var(--dk-gray-400)
}




/** --------------------------------
 -- users
-------------------------------- */
.admins .box .admin {
    background-color: var(--dk-dark-bg);
}

.admins .box h3 {
    color: var(--dk-gray-300);
}

.admins .box p {
    color: var(--dk-gray-400)
}




/** --------------------------------
 -- statis
-------------------------------- */
.statis {
    color: var(--dk-gray-100);
}

.statis .box {
    position: relative;
    overflow: hidden;
    border-radius: 3px;
}

.statis .box h3:after {
    content: "";
    height: 2px;
    width: 70%;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.12);
    display: block;
    margin-top: 10px;
}

.statis .box i {
    position: absolute;
    height: 70px;
    width: 70px;
    font-size: 22px;
    padding: 15px;
    top: -25px;
    left: -25px;
    background-color: rgba(255, 255, 255, 0.15);
    line-height: 60px;
    text-align: right;
    border-radius: 50%;
}





.main-color {
    color: #ffc107
}

/** --------------------------------
 -- Please don't do that in real-world projects!
 -- use Bootstrap variables instead.
-------------------------------- */

.navbar {
    background-color: var(--navbar-bg-color) !important;
    border: none !important;
}
.navbar .dropdown-menu {
    right: auto !important;
    left: 0 !important;
}
.navbar .navbar-nav>li>a {
    color: #EEE !important;
    line-height: 55px !important;
    padding: 0 10px !important;
}
.navbar .navbar-brand {color:#FFF !important}
.navbar .navbar-nav>li>a:focus,
.navbar .navbar-nav>li>a:hover {color: #EEE !important}

.navbar .navbar-nav>.open>a,
.navbar .navbar-nav>.open>a:focus,
.navbar .navbar-nav>.open>a:hover {background-color: transparent !important; color: #FFF !important}

.navbar .navbar-brand {line-height: 55px !important; padding: 0 !important}
.navbar .navbar-brand:focus,
.navbar .navbar-brand:hover {color: #FFF !important}
.navbar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {margin: 0 !important}
@media (max-width: 767px) {
    .navbar>.container-fluid .navbar-brand {
        margin-left: 15px !important;
    }
    .navbar .navbar-nav>li>a {
        padding-left: 0 !important;
    }
    .navbar-nav {
        margin: 0 !important;
    }
    .navbar .navbar-collapse,
    .navbar .navbar-form {
        border: none !important;
    }
}

.navbar .navbar-nav>li>a {
    float: left !important;
}
.navbar .navbar-nav>li>a>span:not(.caret) {
    background-color: #e74c3c !important;
    border-radius: 50% !important;
    height: 25px !important;
    width: 25px !important;
    padding: 2px !important;
    font-size: 11px !important;
    position: relative !important;
    top: -10px !important;
    right: 5px !important
}
.dropdown-menu>li>a {
    padding-top: 5px !important;
    padding-right: 5px !important;
}
.navbar .navbar-nav>li>a>i {
    font-size: 18px !important;
}




/* Start media query */

@media (max-width: 767px) {
    #wrapper {
        margin: 0 !important
    }
    .statistics .box {
        margin-bottom: 25px !important;
    }
    .navbar .navbar-nav .open .dropdown-menu>li>a {
        color: #CCC !important
    }
    .navbar .navbar-nav .open .dropdown-menu>li>a:hover {
        color: #FFF !important
    }
    .navbar .navbar-toggle{
        border:none !important;
        color: #EEE !important;
        font-size: 18px !important;
    }
    .navbar .navbar-toggle:focus, .navbar .navbar-toggle:hover {background-color: transparent !important}
}


::-webkit-scrollbar {
    background: transparent;
    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-thumb {
    background-color: #4e4e50;
}

::-webkit-scrollbar-thumb:hover {
    background-color: rgb(92, 142, 207);
}

</style>


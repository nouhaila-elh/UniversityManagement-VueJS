<template>

<div id="login">


    <navbar />

        <div class="row">
            <div class=" m-auto p-0">
                <div class="card">
                    <div class="login-box">
                        <div class="login-snip"> <input id="tab-1" name="tab" class="sign-in" checked><label for="tab-1" class="tab text-light">Login</label>
                            <form @submit.prevent="handleSubmit" class="login-space">
                                <div class="login">
                                    <div class="group"> <label for="email" class="label">Email</label> <input v-model="email" id="email" type="email" class="input" placeholder="Entrer votre email"> </div>
                                    <div class="group"> <label for="password" class="label">Password</label> <input v-model="password" id="password" type="password" class="input" data-type="password" placeholder="Entrer votre mot de passe"> </div>
                                    <div class="group"> <input id="check" type="checkbox" class="check" checked> <label for="check"><span class="icon"></span> Keep me Signed in</label> </div>
                                    <div class="group"> <input type="submit" class="button" value="Sign In"> </div>
                                    <div class="hr"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>  

</div>
</template>


<script>

import axios from 'axios'

import navbar from './nav.vue'

export default {



    name : 'login',
    components : {
            navbar ,
        },
    data(){
        return {
            email : '',
            password : ''
        }
    },
    methods: {
        handleSubmit(){

            const data = {
                email : this.email,
                password : this.password
            }

            axios.post('http://127.0.0.1:8000/api/login',data)
            .then( res => { console.log(res) ;
                 localStorage.setItem('token', res.data.access_token);   // // using the token to get our current login user  !  We have to store it to our route ! And use our user endPoint in the other pages 
                    if(res.data.users.utilisateur == 'Professeur') {
                        this.$router.push('/Prof_DashBoard')
                    }   
                    if(res.data.users.utilisateur == 'Etudiant') {
                        this.$router.push('/EtudiantDashboard')
                    }   
                     if(res.data.users.utilisateur == 'ADMIN') {
                        this.$router.push('/admin')
                    }   
                })

          
            
              
        }
    },

    
    }

</script>


<style scoped>

    
     #login{
         
         padding-top: 8%;
         margin: auto;
     }
    
    body {
    margin: 0;
    color: #6a6f8c;
    background: #757474;
    font: 600 16px/18px 'Open Sans', sans-serif
}

.login-box {
    width: 100%;
    margin: auto;
    max-width: 525px;
    min-height: 650px;
    position: relative;
    background: url(https://images.unsplash.com/photo-1507208773393-40d9fc670acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80) no-repeat center;
    box-shadow: 30px 30px 30px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19)
}

.login-snip {
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 90px 70px 50px 70px;
    background: rgba(0, 77, 77, .9)
}



.login-snip .sign-in,
.login-space .group .check {
    display: none
}
.login-space .group .check:checked+label .icon:before {
    transform: scale(1) rotate(45deg)
}
.login-snip .sign-in:checked+.tab+.sign-up+.tab+.login-space .login {
    transform: rotate(0)
}

.login-snip .sign-up:checked+.tab+.login-space .sign-up-form {
    transform: rotate(0)
}


.login-snip .tab,
.login-space .group .label,
.login-space .group .button {
    text-transform: uppercase
}

.login-snip .tab {
    font-size: 22px;
    margin-right: 15px;
    padding-bottom: 5px;
    margin: 0 15px 10px 0;
    display: inline-block;
    
}



.login-space {
    min-height: 345px;
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d
}

.login-space .group {
    margin-bottom: 15px
}

.login-space .group .label,
.login-space .group .input,
.login-space .group .button {
    width: 100%;
    color: #fff;
}

.login-space .group .input,
.login-space .group .button {
    border: none;
    padding: 15px 20px;
    border-radius: 25px;
    background: rgba(255, 255, 255, .1)
}

.login-space .group input[data-type="password"] {
    -webkit-text-security: circle
}

.login-space .group .label {
    color: #aaa;
    font-size: 12px
}

.login-space .group .button {
    background: #1161ee
}

.login-space .group label .icon {
    width: 15px;
    height: 15px;
    border-radius: 2px;
    position: relative;
    display: inline-block;
    background: rgba(255, 255, 255, .1)
}

.login-space .group label .icon:before,
.login-space .group label .icon:after {
    content: '';
    width: 10px;
    height: 2px;
    background: #fff;
    position: absolute;
    transition: all .2s ease-in-out 0s
}

.login-space .group label .icon:before {
    left: 3px;
    width: 5px;
    bottom: 6px;
    transform: scale(0) rotate(0)
}

.login-space .group label .icon:after {
    top: 6px;
    right: 0;
    transform: scale(0) rotate(0)
}

.login-space .group .check:checked+label {
    color: #fff
}

.login-space .group .check:checked+label .icon {
    background: #1161ee
}



*,
:after,
:before {
    box-sizing: border-box
}

.clearfix:after,
.clearfix:before {
    content: '';
    display: table
}

.clearfix:after {
    clear: both;
    display: block
}

a {
    color: inherit;
    text-decoration: none
}

.hr {
    height: 2px;
    margin: 60px 0 50px 0;
    background: rgba(255, 255, 255, .2)
}

.foot {
    text-align: center
}

.card {
    position : absolute;
    border: none;
    width: 500px;
    left: 36%;
}

::placeholder {
    color: #b3b3b3
}
</style>
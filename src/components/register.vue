<template>
    <h3> Sign up</h3>

    <form  @submit.prevent="handleSubmit">
        

        <div class="from-group">
            <label for="name"> Name : </label>
            <input type="name" id="name" class="form-control" v-model="name" placeholder="Your name">
        </div>
    
        
        <div class="from-group">
            <label for="email"> Email : </label>
            <input type="email" id="email" class="form-control" v-model="email" placeholder="YourEmail">
        </div>

        <div class="from-group">
            <label for="password"> Password :</label>
            <input type="password" id="password" v-model="password" class="form-control">
        </div>

        <button class="btn btn-info btn-block"> Login </button>

    </form>

</template>

<script>

import axios from 'axios'

export default {
    name : 'register',

    data(){
        return {
            name :'',
            email:'',
            password : '',
        }
    },

    methods: {
        handleSubmit(){

            const data = {
                name : this.name,
                email : this.email,
                password : this.password
            };
            //console.log(data);

            //console.log("Submitted ! ")

            axios.post('http://127.0.0.1:8000/api/register',data)
            .then( res => { console.log(res) } )
        
        this.$router.push('/login') // Redirect to the login page ;
        
        },
    },
}
</script>

<style scoped>

</style>
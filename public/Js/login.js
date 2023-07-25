const app= Vue.createApp({
    data(){
        return{
            signupin:false,
            variable:"hello"
        }
    },
    methods:{
        signUpInClicked(){
            this.signupin=!this.signupin
        }
    }
})
app.mount('#form')
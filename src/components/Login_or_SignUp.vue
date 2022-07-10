    <template>
        <div>
            <button @click="logIn" class="bg-green-600 w-full text-white rounded-full font-semibold p-4">Log In</button>
            <button @click="signUp" class="bg-green-50 w-full text-green-900 rounded-full font-semibold p-4">New to Grab? Sign up!</button>
        </div>
</template>

<script>

    export default{
        name: "Login_or_SignUp",
        methods: {
            signUp (){
                this.$emit('signUp');
            },
            logIn(){
                this.$emit('logIn');
            }
        },
        emits:[
            'signUp',
            'logIn'
        ]
    };

</script>

<style scoped>
</style>
<template>
    <div v-show="currentStep == 2">
        <chevronLeftIcon class="w-5 h-5 absolute z-50 ml-3 mt-3" :stroke="'white'" @click="goBack"/>
    </div>
    <div  class="flex flex-col justify-between h-screen bg-green-600">
        <div class="flex flex-col items-center mt-16 gap-1 p-4">
            <div>
                <img class="h-16" src="../assets/grab_logo.png" />
            </div>
            <p class="text-white">Your everyday everything app</p>
        </div>
        <Login_or_SignUp
            class=" bg-white flex flex-col gap-4 mt p-4"
            @signUp="signUp"
            @logIn="logIn"
            v-show="currentStep == 1"
        />
        <Login_Options
            class="flex flex-col gap-4 mt p-4"
            v-show="currentStep == 2"
        />
    </div>
</template>

<script>

    import Login_or_SignUp from '@/components/Login_or_SignUp.vue';
    import Login_Options from '../components/Login_Options.vue';
    import chevronLeftIcon from '@/components/SVG/chevron-left-icon.vue';

    export default{
        name: "Welcome_Page",
        components:{
            Login_or_SignUp,
            Login_Options,
            chevronLeftIcon
        },
        data(){
            return{
                currentStep: 1
            }
        },
        methods: {
            signUp (){
                this.$router.push('registration');
            },
            logIn(){
                this.currentStep++;
            },
            goBack(){
                this.currentStep--;
            }
        },
    };

</script>

<style scoped>
</style>
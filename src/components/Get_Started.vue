<template>
    <div class="flex flex-col h-screen bg-white p-4 gap-6">
        <div class="text-center px-2">
            <chevronLeftIcon class="w-5 h-5 float-left" @click="goBack"/>
            <h3 class="font-semibold">Get Started</h3>
        </div>
        <div class="flex flex-col text-sm">
            <h4 class="font-semibold self-start pb-6">Mobile</h4>
            <div class="flex items-center gap-4">
                <div class="flex items-center border-b gap-1 p-1">
                    <flagIcon />
                    <p class="self-start">{{country}}</p>
                </div>
                <input v-model="accountDetails.mobile" class="form-input border-b p-1 w-full" placeholder="910 123 4567" />
            </div>
        </div>
        <div class="flex flex-col text-sm gap-3">
            <h4 class="font-semibold self-start">Email</h4>
            <div class="flex items-center">
                <input v-model="accountDetails.email" class="form-input border-b p-1 w-full" placeholder="No spam, we promise" />
            </div>
        </div>
        <div class="flex flex-col text-sm gap-3">
            <h4 class="font-semibold self-start">Name</h4>
            <div class="flex items-center">
                <input v-model="accountDetails.name" class="form-input border-b p-1 w-full" placeholder="What should people call you?" />
            </div>
        </div>
        <div>
            <p class="text-left text-xs">
                By continuing, you confirm you've read and agree to our
                <a class="text-blue-700">Terms of Service</a> and <a class="text-blue-700">Privacy Policy</a> on how we collect, use, 
                disclose, and process your personal data.
            </p>
        </div>
        <div class="mt-10">
            <button @click="nextStep" class="bg-green-600 w-full text-white rounded-full font-semibold p-2">Next</button>
        </div>
    </div>
</template>

<script>

    import chevronLeftIcon from './SVG/chevron-left-icon.vue';
    import flagIcon from './SVG/flag-icon.vue';

    export default{
        name: "Get_Started",
        components:{
            chevronLeftIcon,
            flagIcon
        },
        emits:[
            'nextStep'
        ],
        data(){
            return{
                accountDetails: {
                    mobile: '',
                    email: '',
                    name: ''
                },
                country: '+63'
            }
        },
        methods:{
            nextStep(){
                this.accountDetails.mobile = this.country + this.accountDetails.mobile
                localStorage.setItem('accountDetails', JSON.stringify(this.accountDetails))
                this.$emit('nextStep')
            },
            goBack() {
                this.$router.push('/')
            }
        }
    };

</script>

<style scoped>
</style>
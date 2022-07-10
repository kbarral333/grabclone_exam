<template>
    <div class="flex flex-col items-start justify-between w-full h-screen bg-white overflow-hidden p-4">
        <div class="flex flex-col gap-4">
            <div class="px-2">
                <chevronLeftIcon @click="previousStep" />
            </div>
            <div class="flex flex-col items-start mt-6">
                <p>
                    Enter the 6-digit code sent to
                </p>
                <p>{{mobileNum}}</p>
            </div>
            <div class="w-full">
                <input v-model="inputtedVerificationCode" class="form-input text-3xl" type="number" placeholder="000000"/>
            </div>
        </div>
        <div class="flex flex-col items-start">
            <p>Didn't recieve it?</p>
            <p v-if="time > 0" class="text-gray-300">Request a new code in {{time}}</p>
            <u @click="resetTimer" v-else class="text-green-600">Request new code</u>
        </div>
    </div>
</template>

<script>

    import chevronLeftIcon from './SVG/chevron-left-icon.vue';

    export default{
        name: "Verify_comp",
        data(){
            return{
                mobileNum: '',
                time: 30,
                verificationCode: Number,
                inputtedVerificationCode: '',
                chevronLeftIcon
            }
        },
        emits:[
            'previousStep'
            ],
        mounted() {
            this.mobileNum = localStorage.getItem('accountDetails');
            this.mobileNum = JSON.parse(this.mobileNum).mobile;
            setInterval( () => this.time--, 1000);
            this.verificationCode = Math.floor((Math.random() * 100000) + 100000);
            console.log(this.verificationCode)
        },
        methods:{
            resetTimer() {
                this.time = 30;
            },
            previousStep(){
                this.$emit('previousStep')
            }
        },
        watch: {
            inputtedVerificationCode() {
                if(this.inputtedVerificationCode == this.verificationCode){
                    this.$router.push('/')
                }
            }
        }

    }

</script>

<style scoped>
</style>
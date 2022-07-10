<template>
    <Get_Started 
        v-if="currentStep == 1"
        @nextStep="nextStep"
    />
    <Verify_Component
        v-if="currentStep == 2"
        @previousStep="previousStep"
    />
</template>

<script>

    import Get_Started from '../components/Get_Started.vue'
    import Verify_Component from '../components/Verify_comp.vue'

    export default{
        name: "Registration_Page",
        components:{
            Get_Started,
            Verify_Component
        },
        data(){
            return{
                currentStep: 1
            }
        },
        methods:{
            nextStep() {
                this.currentStep++;
            },
            previousStep() {
                this.currentStep--;
            }
        }
    };

</script>

<style scoped>
</style>
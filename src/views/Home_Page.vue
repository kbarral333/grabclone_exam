<template>
    <Account_Details class="p-4" v-if="activeTab == 'Account'"/>
    <Payment_Details v-if="activeTab == 'Payment'"/>
    <Nav_Bar class="fixed bg-white w-full border-t bottom-0 px-3" v-show="isVisible"/>
</template>

<script>
    import Nav_Bar from '../components/Nav_Bar.vue'
    import Account_Details from '@/components/Account_Details.vue'
    import Payment_Details from '@/components/Payment_Details.vue'
    import { mapState } from 'vuex'

    export default{
        name: 'Home_Page',
        components:{
            Nav_Bar,
            Account_Details,
            Payment_Details
        },
        data() {
            return{
                isVisible: true,
                windowTop: 0
            }
        },
        methods:{
            onScroll() {
                this.windowTop = window.top.scrollY 
            }
        },
        watch:{
            windowTop(newWindowTop,oldWindowTop){
                if(newWindowTop < oldWindowTop){
                    this.isVisible = true
                }else if((window.innerHeight + newWindowTop) >= document.body.offsetHeight){
                    this.isVisible = true
                }else if(newWindowTop > oldWindowTop){
                    this.isVisible = false
                }
            }
        },
        mounted() {
             window.addEventListener("scroll", this.onScroll)
        },
        computed: {
           ...mapState(['activeTab'])
        },
        beforeUnmount() {
            window.removeEventListener("scroll", this.onScroll)
        }
    }
</script>

<style scoped>
</style>
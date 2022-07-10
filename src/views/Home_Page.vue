<template>
    <Account_Details class="p-4" v-if="activeTab == 'Account'"/>
    <Nav_Bar class="fixed bg-white w-full border-t bottom-0 px-3"/>
</template>

<script>
    import Nav_Bar from '../components/Nav_Bar.vue'
    import Account_Details from '@/components/Account_Details.vue'
    import { mapState } from 'vuex'

    export default{
        name: 'Home_Page',
        components:{
            Nav_Bar,
            Account_Details
        },
        computed: {
           ...mapState(['activeTab'])
        },
    }
</script>

<style scoped>
</style>
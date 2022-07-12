<template>
    <Account_Details class="p-4" v-if="activeTab == 'Account'"/>
    <Payment_Details v-if="activeTab == 'Payment'"/>
    <Selection_Area v-if="activeTab == 'Home'" />
    <Nav_Bar class="fixed bg-white w-full border-t bottom-0 px-3"/>
</template>

<script>
    import Nav_Bar from '../components/Nav_Bar.vue';
    import Account_Details from '@/components/Account_Details.vue';
    import Payment_Details from '@/components/Payment_Details.vue';
    import Selection_Area from '@/components/Selection_Area.vue';
    import { mapState } from 'vuex';

    export default{
        name: 'Home_Page',
        components:{
            Nav_Bar,
            Account_Details,
            Payment_Details,
            Selection_Area

        },
        computed: {
           ...mapState(['activeTab'])
        },
    }
</script>

<style scoped>
</style>
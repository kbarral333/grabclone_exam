<template>
    <div class="bg-gray-50">
        <div class="flex flex-col gap-2 border-b bg-white p-2">
            <div>
                <crossIcon @click="goBack" class="h-5 w-5" />
            </div>
            <div class="flex items-center justify-between mb-5">
                <div class="flex flex-col gap-1">
                    <p class="text-green-600 text-lg font-bold">GrabPay Wallet</p>
                    <div class="flex gap-1">
                        <small class="text-xs">p</small>
                        <p class="text-lg font-bold">{{accountDetails.balance}}</p>
                    </div>
                </div>
                <div>
                    <div class="flex justify-center items-center h-10 w-10 bg-green-600 text-xl font-bold rounded-full text-white">G</div>
                </div>
            </div>
        </div>
        <div class="pt-4 px-2 pb-3 divide-y gap-2 bg-white">
            <div class="grid grid-cols-3 gap-2 py-3">
                <div @click="cashIn" class="flex items-center justify-center rounded-lg gap-1 p-2 shadow-md">
                    <walletIcon :fill="'#16A34A'" :stroke="'white'" class="h-5 w-5"/>
                    <p>Cash In</p>
                </div>
                <div class="flex items-center justify-center rounded-lg gap-1 p-2 shadow-md">
                    <switchIcon :fill="'white'" :stroke="'#16A34A'" class="h-5 w-5"/>
                    <p>Transfer</p>
                </div>
            </div>
            <div class="flex justify-between p-2">
                <p>Auto Cash-in</p>
                <div class="flex items-center gap-1">
                    <p>Set up now</p>
                    <chevronLeftIcon class="h-4 w-4 rotate-180" />
                </div>
            </div>
        </div>
        <div class="flex flex-col bg-white mt-4 ">
            <Clean_History_Transaction :transactionType="'Wallet'"/>
        </div>
    </div>
</template>

<script>

    import crossIcon from '@/components/SVG/cross-icon.vue';
    import switchIcon from '@/components/SVG/switch-icon.vue';
    import walletIcon from '@/components/SVG/wallet-icon.vue';
    import chevronLeftIcon from '@/components/SVG/chevron-left-icon.vue';
    import Clean_History_Transaction from '@/components/Clean_History_Transaction.vue';
    import { mapState } from 'vuex';

    export default {
        name: 'Wallet_Page',
        components: {
            crossIcon,
            switchIcon,
            walletIcon,
            chevronLeftIcon,
            Clean_History_Transaction
        },
        data() {
            return{
                balance: 0.00
            }
        },
        methods: {
            goBack() {
                this.$store.dispatch('switchTab', 'Payment');
                this.$router.push('home');
            },
            cashIn() {
                this.$router.push('cash_in')
            }
        },
        computed: {
           ...mapState(['accountDetails'])
        },
    }
</script>

<style>

</style>
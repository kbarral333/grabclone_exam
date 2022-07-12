<template>
    <div class="p-4 bg-gray-50 space-y-4">
        <div>
            <div class="text-center">
                <crossIcon @click="goBack" class="h-5 w-5 float-left"/>
                <p class="font-semibold">Cash In</p>
            </div>
        </div>
        <div>
            <div class="grid grid-cols-2 gap-2 py-4">
                <div class="flex flex-col bg-white rounded-lg gap-4 shadow-md p-2">
                    <div class="flex items-center justify-center self-end rounded-full bg-green-400 text-green-800 gap-1 px-3 py-1">
                        <crossIcon class="rotate-45 h-3 w-3" />
                        <p class="">P 1000.00</p>
                    </div>
                    <div class="self-start">
                        <p class="text-gray-400 text-xs">Card A</p>
                        <p class="font-semibold">1234</p>
                    </div>
                </div>
                <div class="flex flex-col bg-white rounded-lg shadow-md gap-4 p-2">
                    <div class="flex items-center justify-center self-end rounded-full bg-green-400 text-green-800 gap-1 px-3 py-1">
                        <crossIcon class="rotate-45 h-3 w-3" />
                        <p class="">P 500.00</p>
                    </div>
                    <div class="self-start">
                        <p class="text-gray-400 text-xs">Card B</p>
                        <p class="font-semibold">5678</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="relative p-4 rounded-lg shadow-md">
                <crossIcon class="absolute right-2 top-2 h-5 w-5" />
                <div class="flex items-center gap-2">
                    <div class="bg-blue-100 p-4 rounded-full">
                        <bankIcon class="w-8 h-8"/>
                    </div>
                    <div class="flex flex-col gap-1 text-left">
                        <p>Link your bank account here!</p>
                        <p>Enjoy seamless cash-ins when you link your bank account.</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="flex flex-col items-center gap-4">
                <div class="self-start">
                    <p class="text-lg font-bold">All cash-in methods</p>
                </div>
                <div class="flex flex-col items-center justify-center divide-y w-full gap-2 p-2">
                    <div class="flex justify-between items-center w-full p-2">
                        <div class="bg-blue-100 p-4 rounded-full self-start">
                            <walletIcon class="w-5 h-5"/>
                        </div>
                        <div class="text-left">
                            <p class="font-semibold">E-wallets with Instapay</p>
                            <p class="text-xs">Go to your bank's app or website to cash in</p>
                        </div>
                        <chevronLeftIcon class="rotate-180 w5 h-5" />
                    </div>
                    <div class="flex justify-between items-center w-full p-2">
                        <div class="bg-blue-100 p-4 rounded-full self-start">
                            <phoneSolidIcon class="w-5 h-5"/>
                        </div>
                        <div class="text-left">
                            <p class="font-semibold">Linked Bank Account</p>
                            <p class="text-xs">Link your account once for seamless cash-ins</p>
                        </div>
                        <chevronLeftIcon class="rotate-180 w5 h-5" />
                    </div>
                    <div class="flex justify-between items-center w-full p-2">
                        <div class="bg-blue-100 p-4 rounded-full self-start">
                            <bankIcon class="w-5 h-5"/>
                        </div>
                        <div class="text-left">
                            <div class="flex text-sm items-center gap-2">
                                <p class="font-semibold">Linked Bank Account</p>
                                <p class="text-xs text-green-600 rounded-full bg-gray-200 px-2 font-semibold">Fastest</p>
                            </div>
                            <p class="text-xs">Link your account once for seamless cash-ins</p>
                        </div>
                        <chevronLeftIcon class="rotate-180 w5 h-5" />
                    </div>
                    <div class="flex justify-between items-center w-full p-2">
                        <div class="bg-blue-100 p-4 rounded-full self-start">
                            <walletIcon :fill="'currentColor'" :stroke="'white'" class="w-5 h-5"/>
                        </div>
                        <div class="text-left">
                            <p class="font-semibold">Cards</p>
                            <p class="text-xs">Use Visa, MasterCard and more</p>
                        </div>
                        <chevronLeftIcon class="rotate-180 w5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import crossIcon from '@/components/SVG/cross-icon.vue';
    import bankIcon from '@/components/SVG/bank-icon.vue';
    import chevronLeftIcon from '@/components/SVG/chevron-left-icon.vue';
    import walletIcon from '@/components/SVG/wallet-icon.vue';
    import phoneSolidIcon from '@/components/SVG/phone-solid-icon.vue'

    export default {
        name: 'Cash_In_Options_Page',
        components: {
            crossIcon,
            bankIcon,
            chevronLeftIcon,
            walletIcon,
            phoneSolidIcon
        },
        methods: {
            goBack() {
                this.$store.dispatch('switchTab', 'Payment');
                this.$router.push('home')
            }
        }
    }
</script>

<style>

</style>
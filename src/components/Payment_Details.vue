<template>
    <div class="flex flex-col min-h-screen gap-4">
        <div class="flex flex-col gap-4 p-4 bg-gray-50">
            <div class="flex justify-between w-full">
                <h3 class="text-lg font-semibold">Payment</h3>
                <cogIcon class="h-5 w-5"/>
            </div>
            <div class="flex gap-1">
                <shieldCheckIcon class="h-4 w-4"/>
                <small class="text-xs">Your wallet is <a class="text-blue-700">encrypted and secure</a></small>
            </div>
            <div class="flex flex-col shadow-md w-full z-50 bg-white rounded-lg p-2">
                <div class="flex pb-6">
                    <div class="flex flex-col w-full">
                        <p class="font-semibold self-start text-green-600">GrabPay Wallet</p>
                        <div class="flex gap-1 items-start justify-start">
                            <small class="text-xs">P</small>
                            <p class="font-semibold text-2xl">{{balance}}</p>
                        </div>
                    </div>
                    <dotsIcon class="w-5 h-5"/>
                </div>
                <div class="flex items-center justify-between w-full border-t px-3 py-2">
                    <p class="text-sm font-semibold text-blue-400">Get your GrabPay Card now</p>
                    <chevronLeftIcon class="h-4 w-4 rotate-180" />
                </div>
            </div>
        </div>
        <div class="flex flex-nowrap overflow-x-scroll gap-2 px-2 mt-2">
            <div class="bg-blue-800 rounded-xl text-white flex flex-shrink-0 items-start gap-2 p-3">
                <shieldCheckIcon :stroke="'white'" :fill="'none'" class="w-8 h-8" />
                <div class="flex flex-col items-start">
                    <h6 class="font-semibold text-sm">Verify your profile</h6>
                    <p class="text-xs">Unlock all GrabPay features now</p>
                </div>
            </div>
            <div class="bg-blue-800 rounded-xl text-white flex flex-shrink-0 items-start gap-2 p-3">
                <walletIcon :stroke="'white'" :fill="'none'" class="w-8 h-8" />
                <div class="flex flex-col items-start">
                    <h6 class="font-semibold text-sm">Increase cash-in limit to P250K ...</h6>
                    <p class="text-xs">Verify your identity now</p>
                </div>
            </div>
            <div class="bg-green-600 rounded-xl text-white flex flex-shrink-0 items-start gap-2 p-3">
                <walletIcon :stroke="'white'" :fill="'none'" class="w-8 h-8" />
                <div class="flex flex-col items-start">
                    <h6 class="font-semibold text-sm">Cash in you GrabPay Wallet</h6>
                    <p class="text-xs">Use your balance online and in-store</p>
                </div>
            </div>
        </div>
        <div class="flex flex-nowrap overflow-x-scroll border-b px-2 pt-2 pb-5 gap-2">
            <div class="bg-white shadow-md rounded-lg flex flex-shrink-0 items-center gap-2 p-3">
                <shieldCheckIcon :stroke="'#16A34A'" :fill="'none'" class="w-5 h-5" />
                <div class="flex flex-col items-start">
                    <p class="font-semibold text-sm">Cash In</p>
                </div>
            </div>
            <div class="bg-white shadow-md rounded-lg flex flex-shrink-0 items-center gap-2 p-3">
                <qrIcon :stroke="'#16A34A'" :fill="'none'" class="w-5 h-5" />
                <div class="flex flex-col items-start">
                    <p class="font-semibold text-sm">Scan to Pay</p>
                </div>
            </div>
            <div class="bg-white shadow-md rounded-lg flex flex-shrink-0 items-center gap-2 p-3">
                <bankIcon :stroke="'#16A34A'" :fill="'none'" class="w-5 h-5" />
                <div class="flex flex-col items-start">
                    <p class="font-semibold text-sm">Transfer</p>
                </div>
            </div>
            <div class="bg-white shadow-md rounded-lg flex flex-shrink-0 items-center gap-2 p-3">
                <span class="rotate-180"><arrowLeftIcon :stroke="'#16A34A'" :fill="'none'" class="w-5 h-5 -rotate-45" /></span>
                <div class="flex flex-col items-start">
                    <p class="font-semibold text-sm">Send</p>
                </div>
            </div>
            <div class="bg-white shadow-md rounded-lg flex flex-shrink-0 items-center gap-2 p-3">
                <arrowLeftIcon :stroke="'#16A34A'" :fill="'none'" class="w-5 h-5 -rotate-45" />
                <div class="flex flex-col items-start">
                    <p class="font-semibold text-sm">Recieve</p>
                </div>
            </div> 
        </div>
        <div class="flex flex-col px-2 gap-1 pb-3 border-b">
            <h3 class="font-semibold self-start">Do more with your money</h3>
            <div class="flex flex-nowrap">
                <div class="flex flex-nowrap overflow-x-scroll gap-2 mt-2">
                    <div class="bg-blue-600 w-36 h-36 rounded-xl text-white flex flex-shrink-0 items-start gap-2 px-2 py-3 ">
                        <h6 class="font-semibold text-left text-sm whitespace-pre-line">
                            Stay connected with prepaid load
                        </h6>
                    </div>
                    <div class="bg-blue-400 w-36 h-36 rounded-xl text-white flex flex-shrink-0 items-start gap-2 px-2 py-3 ">
                        <h6 class="font-semibold text-left text-sm whitespace-pre-line">
                            Pay your bills anywhere
                        </h6>
                    </div>
                    <div class="bg-green-600 w-36 h-36 rounded-xl text-white flex flex-shrink-0 items-start gap-2 px-2 py-3 ">
                        <h6 class="font-semibold text-left text-sm whitespace-pre-line">
                            Get your
                            GrabPay Card
                        </h6>
                    </div>
                    <div class="bg-cyan-700 w-36 h-36 rounded-xl text-white flex flex-shrink-0 items-start gap-2 px-2 py-3 ">
                        <h6 class="font-semibold text-left text-sm whitespace-pre-line">
                            How we keep your wallet secure
                        </h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center p-4 gap-1 pb-16">
            <h3 class="self-start font-semibold">Recent transactions</h3>
            <div class="flex flex-col items-center">
                <historyIcon :fill="'white'" :stroke="'gray'" class="h-20 w-20"  />
                <p class="text-sm font-semibold">Nothing here yet!</p>
                <p class="text-xs">your recent transactions will appear here.</p>
            </div>
        </div>
    </div>
</template>

<script>

    import cogIcon from './SVG/cog-icon.vue';
    import shieldCheckIcon from './SVG/shield-check-icon.vue';
    import dotsIcon from './SVG/dots-icon.vue';
    import chevronLeftIcon from './SVG/chevron-left-icon.vue';
    import walletIcon from './SVG/wallet-icon.vue';
    import qrIcon from './SVG/qr-icon.vue';
    import bankIcon from './SVG/bank-icon.vue';
    import arrowLeftIcon from './SVG/arrow-left-icon.vue';
    import historyIcon from './SVG/history-icon.vue';

    export default{
        name: "Payment_Details",
        components: {
            cogIcon,
            shieldCheckIcon,
            dotsIcon,
            chevronLeftIcon,
            walletIcon,
            qrIcon,
            bankIcon,
            arrowLeftIcon,
            historyIcon
        },
        props: {
            isTop: Number
        },
        data() {
            return {
                balance: '0.00'
            }
        },
    }
</script>

<style scoped>
</style>
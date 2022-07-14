<template>
        <div class="bg-gray-50">
            <div class="flex items-center justify-center w-full bg-white px-4 gap-1 my-1">
                <div @click="goBack" class="justify-self-start">
                    <chevron-left-icon class="h-4 w-4" />
                </div>
                <div class="flex flex-col items-center">
                    <p class="font-bold text-lg">{{shop}}</p>
                    <p class="text-xs">Distance from you: {{distance}}</p>
                </div>
            </div>
            <div class="flex flex-col bg-white px-4 border-b pb-4 gap-4">
                <div class="grid grid-cols-3 gap-2 font-semibold text-sm w-full my-4">
                    <button class="text-gray-600 bg-gray-300 rounded-full py-1 px-1">Delivery</button>
                    <button class="text-gray-600 bg-gray-300 rounded-full py-1 px-1">Self Pick-Up</button>
                </div>
                <div class=" flex items-center justify-between gap-2">
                    <location-marker-icon class="w-6 h-6 fill-red-600" />
                    <div class="flex flex-col items-start w-full">
                        <p class="font-semibold">Piggy Papa - The Symphony Towers</p>
                        <p class="line-clamp-1 text-xs text-overflow-ellipsis">First Floor, Tower 1, The Symphony Towers, Sgt. Esguerra...</p>
                    </div>
                    <div>
                        <chevron-left-icon class="w-4 h-4 rotate-180" />    
                    </div>
                </div>
                <div class="flex items-center w-full justify-between bg-gray-200 p-2 rounded-md">
                    <div class="flex flex-col text-sm">
                        <p>No address details added</p>
                        <div>No notes to driver added</div>
                    </div>
                    <p class="text-xs text-blue-500 font-semibold">Edit</p>
                </div>
            </div>
            <div class="flex flex-col w-full bg-white px-4 py-4 my-4">
                <div class="flex w-full justify-between">
                    <p class="font-bold">Order summary</p>
                    <p class="text-blue-500 font-semibold text-xs">Add items</p>
                </div>
                <div class="flex w-full justify-between items-center p-2">
                    <div class="p-2 flex items-start gap-2">   
                        <p class="text-green-800 text-xs">{{total/100}}x</p>
                        <div class="flex flex-col items-start">
                            <p class="font-semibold">Food Item</p>
                            <p class="text-sm">Food item description</p>
                            <p class="text-xs text-blue-500 font-semibold">Edit</p>
                        </div>
                    </div>
                    <p class="text-sm">{{decimalTotal}}</p>
                </div>
                <div class="border-t text-sm">
                    <div class="flex flex-col w-full p-2">
                        <div class="flex justify-between">
                            <p>Subtotal</p>
                            <p>P    {{decimalTotal}}</p>
                        </div>
                      <div class="flex justify-between">
                            <p>Delivery Fee</p>
                            <p>{{decimalDeliveryFee}}</p>
                        </div>
                    </div>
                </div>
            </div>
                <div class="flex flex-col items-start bg-white p-4 gap-4 my-4">
                    <p class="font-bold">Order Options</p>
                    <div class="flex justify-between w-full items-center">
                        <div class="flex flex-col items-start">
                            <div class="flex items-center text-sm gap-2">
                                <p class="font-semibold">Priority Delivery</p>
                                <div class="rounded-full bg-black w-1 h-1"></div>
                                <p>P 40.00</p>
                            </div>
                            <p class="text-xs text-gray-600">You'll get a voucher if it's late.</p>
                            <a class="text-xs font-semibold text-blue-500">More information</a>
                        </div>
                        <input class="form-input h-4 w-4 rounded-lg accent-green-600" type="checkbox" />
                    </div>
                </div>
                <div class="flex flex-col items-start gap-4 my-4">
                    <p class="font-bold">Payment Details</p>
                    <div class="w-full divide-y bg-white gap-2 p-4">
                        <div class="flex items-center w-full py-2 justify-between">
                            <div class="flex gap-2 text-sm items-center">
                                <moneyIcon class="h-5 w-5" />
                                <p>Cash</p>
                            </div>
                            <ChevronLeftIcon class="rotate-180 h-4 w-4"/>
                        </div>
                        <div class="flex items-center text-sm w-full py-2 justify-between">
                            <div class="flex gap-2 items-center">
                                <tagIcon class="h-5 w-5 rotate-90 fill-orange-500" />
                                <p>Use offers to get discounts</p>
                            </div>
                            <ChevronLeftIcon class="rotate-180 h-4 w-4"/>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-2 shadow-md border-1 bg-white z-50 p-4">
                    <div class="flex items-center justify-between w-full">
                        <p class="font-semibold">Total</p>
                        <p class="font-bold">P{{grandTotal}}</p>
                    </div>
                    <button class="bg-green-600 text-white rounded-md py-2 font-bold w-full">Place Order</button>
                </div>
        </div>
</template>

<script>

    import moneyIcon from '../components/SVG/money-icon.vue'
    import ChevronLeftIcon from '../components/SVG/chevron-left-icon.vue'
    import tagIcon from '../components/SVG/tag-icon.vue'
import LocationMarkerIcon from '@/components/SVG/location-marker-icon.vue'

    export default {
        name: 'Checkout_Page',
        components: {
            moneyIcon,
            ChevronLeftIcon,
            tagIcon,
            LocationMarkerIcon
        },
        data() {
            return{
                shop: '',
                distance: '',
                total: 0,
                deliveryFee: 52
            }
        },
        methods: {
            goBack() {
                this.$router.push('shop')
            }
        },
        mounted(){
            this.shop = this.$route.params.shop
            this.distance = this.$route.params.distance
            this.total = this.$route.params.total
        },
        computed:{
            grandTotal() {
                return (parseInt(this.total) + parseInt(this.deliveryFee)).toFixed(2)
            },
            decimalDeliveryFee() {
                return this.deliveryFee.toFixed(2)
            },
            decimalTotal() {
                return parseInt(this.total).toFixed(2)
            }
        }
    }
</script>

<style>

</style>
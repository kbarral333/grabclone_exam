<template>
    <div class="flex flex-col p-4 gap-4">
        <div class="p-4 mt-10 shadow-md rounded-lg">
            <div class="flex flex-col justify-center items-start gap-4 p-4">
                <h2 class="text-3xl font-bold">{{shopDisplayName}}</h2>
                <div class="flex items-center gap-1">
                    <div class="flex items-center">
                        <starSolidIcon class="fill-yellow-400 w-4 h-4" />
                        <p class="text-xs">{{rating}}</p>
                    </div>
                    <u class="text-xs text-gray-600">See details</u>
                </div>
                <div class="flex w-full justify-between border-t border-b py-4">
                    <div class="flex gap-1">
                        <ExpressIcon class="h-4 w-4" />
                        <p class="text-xs"><span class="font-semibold">{{distance}}</span>({{time}})</p>
                    </div>
                    <ChevronLeftIcon class="h-4 w-4 rotate-180" />
                </div>
                <div class="flex w-full justify-between border-t border-b gap-1 py-4">
                    <div class="flex gap-1">
                        <TagIcon     class="h-4 w-4" />
                        <p class="text-sm">Enjoy discounts on items</p>
                    </div>
                    <ChevronLeftIcon class="h-4 w-4 rotate-180" />
                </div>
                <div class="flex w-full justify-between border-t border-b gap- py-4">
                    <div class="flex gap-1">
                        <TicketIcon class="h-4 w-4" />
                        <p class="text-xs">Check for available offers</p>
                    </div>
                    <ChevronLeftIcon class="h-4 w-4 rotate-180" />
                </div>
                <div class="bg-gray-200 p-2 rounded-lg">
                    <p class="text-sm">Please be advised that the menu orices may vary or be subject to change by the merchant</p>
                </div>
            </div>
        </div>
        <div>
            <div class="flex w-full flex-nowrap overflow-x-scroll border-b px-2 pt-2 pb-5 gap-3">
                <div @click="addToCart" class="bg-white shadow-md rounded-lg flex flex-shrink-0 items-center gap-2 p-3">
                    <div class="flex flex-col items-start">
                        <p class="font-semibold">Tasty food</p>
                        <p class="text-sm">Made with the best ingredients <br>and cooked by the best cooks</p>
                        <p class="font-semibold">100.00</p>
                    </div>
                    <bacon-icon class="w-10 h-10" />
                </div> 
                <div @click="addToCart" class="bg-white shadow-md rounded-lg flex flex-shrink-0 items-center gap-2 p-3">
                    <div class="flex flex-col items-start">
                        <p class="font-semibold">Tasty food</p>
                        <p class="text-sm">Made with the best ingredients <br>and cooked by the best cooks</p>
                        <p class="font-semibold">100.00</p>
                    </div>
                    <burger-icon class="w-10 h-10" />
                </div> 
                <div @click="addToCart" class="bg-white shadow-md rounded-lg flex flex-shrink-0 items-center gap-2 p-3">
                    <div class="flex flex-col items-start">
                        <p class="font-semibold">Tasty food</p>
                        <p class="text-sm">Made with the best ingredients <br>and cooked by the best cooks</p>
                        <p class="font-semibold">100.00</p>
                    </div>
                    <champagneIcon class="w-10 h-10" />
                </div> 
                <div @click="addToCart" class="bg-white shadow-md rounded-lg flex flex-shrink-0 items-center gap-2 p-3">
                    <div class="flex flex-col items-start">
                        <p class="font-semibold">Tasty food</p>
                        <p class="text-sm">Made with the best ingredients <br>and cooked by the best cooks</p>
                        <p class="font-semibold">100.00</p>
                    </div>
                    <icecreamIcon class="w-10 h-10" />
                </div> 
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <div @click="addToCart" class="bg-white shadow-md rounded-lg flex flex-shrink-0 items-center gap-2 p-3">
                    <div class="flex flex-col items-start">
                        <p class="font-semibold">Tasty food</p>
                        <p class="text-sm">Made with the best ingredients <br>and cooked by the best cooks</p>
                        <p class="font-semibold">100.00</p>
                    </div>
                    <bacon-icon class="w-10 h-10" />
                </div> 
                <div @click="addToCart" class="bg-white shadow-md rounded-lg flex flex-shrink-0 items-center gap-2 p-3">
                    <div class="flex flex-col items-start">
                        <p class="font-semibold">Tasty food</p>
                        <p class="text-sm">Made with the best ingredients <br>and cooked by the best cooks</p>
                        <p class="font-semibold">100.00</p>
                    </div>
                    <burger-icon class="w-10 h-10" />
                </div> 
                <div @click="addToCart" class="bg-white shadow-md rounded-lg flex flex-shrink-0 items-center gap-2 p-3">
                    <div class="flex flex-col items-start">
                        <p class="font-semibold">Tasty food</p>
                        <p class="text-sm">Made with the best ingredients <br>and cooked by the best cooks</p>
                        <p class="font-semibold">100.00</p>
                    </div>
                    <champagneIcon class="w-10 h-10" />
                </div> 
                <div @click="addToCart" class="bg-white shadow-md rounded-lg flex flex-shrink-0 items-center gap-2 p-3">
                    <div class="flex flex-col items-start">
                        <p class="font-semibold">Tasty food</p>
                        <p class="text-sm">Made with the best ingredients <br>and cooked by the best cooks</p>
                        <p class="font-semibold">100.00</p>
                    </div>
                    <icecreamIcon class="w-10 h-10" />
                </div> 
        </div>
        <div @click="checkout(shopDisplayName, distance, total)" v-show="cart > 0" class="bg-green-600 text-white flex w-full rounded-lg justify-between items-center p-2">
        <div class="flex items-center justify-between gap-1">
            <p class="font-semibold">Basket</p>
            <div class="h-1 w-1 bg-white rounded-full"></div>
            <p>{{cart}} Item</p>
        </div>
            <p>P {{total}}</p>

        </div>
    </div>
</template>

<script>

    import starSolidIcon from '@/components/SVG/star-solid-icon.vue'
    import ExpressIcon from '@/components/SVG/express-icon.vue'
    import ChevronLeftIcon from '@/components/SVG/chevron-left-icon.vue'
    import TagIcon from '@/components/SVG/tag-icon.vue'
    import TicketIcon from '../components/SVG/ticket-icon.vue'
    import baconIcon from '../components/SVG/bacon-icon.vue'
    import burgerIcon from '@/components/SVG/burger-icon.vue'
    import champagneIcon from '@/components/SVG/champagne-icon.vue'
    import icecreamIcon from '@/components/SVG/icecream-icon.vue'
    // import ShoppingIcon from '@/components/SVG/shopping-icon.vue'

    export default {
        name: 'Shop_Page',
        components: {
    starSolidIcon,
    ExpressIcon,
    ChevronLeftIcon,
    TagIcon,
    TicketIcon,
    baconIcon,
    burgerIcon,
    champagneIcon,
    icecreamIcon,
    // ShoppingIcon
},
        data() {
            return{
                shopDisplayName: '',
                rating: '',
                time: '',
                distance: '',
                cart: 0,
                total: 0
            }
        },
        methods: {
            addToCart(){
                this.cart++;
                this.total = this.total + 100
            },
            checkout(shop,distance, total) {
                this.$router.push({
                    name: 'checkout',
                    params: {
                        shop,
                        distance,
                        total
                    }
                })
            }
        },  
        mounted(){
            this.shopDisplayName = this.$route.params.name
            this.rating = this.$route.params.rating
            this.time = this.$route.params.time
            this.distance = this.$route.params.distance
        }
    }
</script>

<style>

</style>
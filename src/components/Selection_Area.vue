<template>
    <div class="pb-10">
        <div class="flex flex-col items-center justify-center p-2 pt-5 gap-5"> 
            <div class="flex w-full items-center justify-between rounded-lg divide-x shadow-md p-2">
                <div class="flex items-center justify-start p-2 gap-2">
                    <searchIcon class="w-5 h-5" />
                    <input class="form-input w-full" type="text" :placeholder="placeholderDisplay" />
                </div>
                <div class="p-2">
                    <qrIcon class="w-5 h-5" />
                </div>
            </div>
            <div class="w-full flex flex-nowrap overflow-x-scroll px-2 mt-2">
                    <div class="flex flex-shrink-0 items-start gap-2 p-3">
                        <div class="flex flex-col items-center">
                            <div class="bg-green-200 p-4 rounded-full">
                                <burgerIcon class="w-8 h-8" />
                            </div>
                            <p>Food</p>
                        </div>
                    </div>
                    <div class="flex flex-shrink-0 items-start gap-2 p-3">
                        <div class="flex flex-col items-center">
                            <div class="bg-green-200 p-4 rounded-full">
                                <GroceryIcon class="w-8 h-8" />
                            </div>
                            <p>Mart</p>
                        </div>
                    </div>
                    <div class="flex flex-shrink-0 items-start gap-2 p-3">
                        <div class="flex flex-col items-center">
                            <div class="bg-green-200 p-4 rounded-full">
                                <carIcon class="w-8 h-8" />
                            </div>
                            <p>Car</p>
                        </div>
                    </div>
                    <div class="flex flex-shrink-0 items-start gap-2 p-3">
                        <div class="flex flex-col items-center">
                            <div class="bg-green-200 p-4 rounded-full">
                                <ExpressIcon class="w-8 h-8" />
                            </div>
                            <p>Express</p>
                        </div>
                    </div>
                    <div class="flex flex-shrink-0 items-start gap-2 p-3">
                        <div class="flex flex-col items-center">
                            <div class="bg-green-200 p-4 rounded-full">
                                <shoppingIcon class="w-8 h-8" />
                            </div>
                            <p>Shopping</p>
                        </div>
                    </div>
                    <div class="flex flex-shrink-0 items-start gap-2 p-3">
                        <div class="flex flex-col items-center">
                            <div class="bg-green-200 p-4 rounded-full">
                                <phoneSolidIcon class="w-8 h-8" />
                            </div>
                            <p>Load</p>
                        </div>
                    </div>
            </div>
            <div class="grid grid-cols-2 w-full gap-4 p-4">
                <div class="flex items-end justify-between bg-gray-100 p-2 rounded-lg w-full">
                    <div class="flex flex-col items-start gap-1">
                        <p>Payment</p>
                        <p class="font-semibold">Add a card</p>
                    </div>
                    <walletIcon :fill="'#16A34A'" :stroke="'white'" class="w-5 h-5" />
                </div>
                <div class="flex items-end justify-between bg-gray-100 p-2 rounded-lg w-full">
                    <div class="flex flex-col items-start gap-1">
                        <p>Offers</p>
                        <p class="font-semibold">100+</p>
                    </div>
                    <tagIcon :fill="'orange'" :stroke="'white'" class="w-5 h-5" />
                </div>
            </div>
            <div class="flex flex-col gap-2 w-full">
                <div class="flex items-center justify-start w-full gap-2">
                    <p class="font-semibold">Get deals now</p>
                    <div class="bg-gray-200 p-1 rounded-full">
                        <ArrowLeftIcon class="rotate-180 h-3 w-3" :stroke="'black'" />
                    </div>
                </div>
                <div class="flex w-full h-48">
                    <div class="w-full bg-green-600 rounded-l-lg p-8">
                        <h1 class="text-white text-4xl">Promo</h1>
                        <h2 class="text-white">Anniversary</h2>
                        <h3 class="text-green-900 text-sm">Save up to 50%</h3>
                    </div>
                    <div class="w-full bg-blue-200 rounded-r-lg"></div>
                </div>
                <p class="font-semibold">Unlock exclusive offers, discounts & more!</p>
            </div>
            <div class="flex flex-col gap-2 w-full">
                <div class="flex items-center justify-start w-full gap-2">
                    <p class="font-semibold">Restaurants you may like</p>
                    <div class="bg-gray-200 p-1 rounded-full">
                        <ArrowLeftIcon class="rotate-180 h-3 w-3" :stroke="'black'" />
                    </div> 
                </div>
                <div class="w-full flex flex-nowrap overflow-x-scroll px-2 mt-2">
                    <div @click="shop( 'Burger place-This street', '4.5', '0.9 km', '10 mins' )" class="flex flex-shrink-0 items-start gap-2 p-3">
                        <div class="flex flex-col items-start gap-1">
                            <div class="bg-green-200 p-6 rounded-md">
                                <burgerIcon class="w-20 h-20" />
                            </div>
                            <p>
                                Burger place-<br>
                                This street
                            </p>
                            <div class="flex items-center justify-between text-xs gap-1">
                                <p>10 mins</p>
                                <div class="h-1 w-1 bg-gray-400 rounded-full"></div>
                                <p>0.9 km</p>
                                <div class="h-1 w-1 bg-gray-400 rounded-full"></div>
                                <div class="flex items-center">
                                    <StarSolidIcon class="h-2 w-2 fill-yellow-400"/>
                                    <p>4.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-shrink-0 items-start gap-2 p-3">
                        <div class="flex flex-col items-start gap-1">
                            <div class="bg-green-200 p-6 rounded-md">
                                <BaconIcon class="w-20 h-20" />
                            </div>
                            <p>
                                Bacon place-<br>
                                That street
                            </p>
                            <div class="flex items-center justify-between text-xs gap-1">
                                <p>20 mins</p>
                                <div class="h-1 w-1 bg-gray-400 rounded-full"></div>
                                <p>1.9 km</p>
                                <div class="h-1 w-1 bg-gray-400 rounded-full"></div>
                                <div class="flex items-center">
                                    <StarSolidIcon class="h-2 w-2 fill-yellow-400"/>
                                    <p>4.9</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-shrink-0 items-start gap-2 p-3">
                        <div class="flex flex-col items-start gap-1">
                            <div class="bg-green-200 p-6 rounded-md">
                                <ChampagneIcon class="w-20 h-20" />
                            </div>
                            <p>
                                Wine place-<br>
                                The Other street
                            </p>
                            <div class="flex items-center justify-between text-xs gap-1">
                                <p>1 hr</p>
                                <div class="h-1 w-1 bg-gray-400 rounded-full"></div>
                                <p>2.2 km</p>
                                <div class="h-1 w-1 bg-gray-400 rounded-full"></div>
                                <div class="flex items-center">
                                    <StarSolidIcon class="h-2 w-2 fill-yellow-400"/>
                                    <p>4.3</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col items-start gap-1">
                            <div class="bg-green-200 p-6 rounded-md">
                                <IcecreamIcon class="w-20 h-20" />
                            </div>
                            <p>
                                Ice Cream place-<br>
                                The Next street
                            </p>
                            <div class="flex items-center justify-between text-xs gap-1">
                                <p>5 mins</p>
                                <div class="h-1 w-1 bg-gray-400 rounded-full"></div>
                                <p>0.3 km</p>
                                <div class="h-1 w-1 bg-gray-400 rounded-full"></div>
                                <div class="flex items-center">
                                    <StarSolidIcon class="h-2 w-2 fill-yellow-400"/>
                                    <p>5.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>

    import searchIcon from './SVG/search-icon.vue'
    import qrIcon from './SVG/qr-icon.vue'
    import tagIcon from './SVG/tag-icon.vue'
    import walletIcon from './SVG/wallet-icon.vue'
    import carIcon from './SVG/car-icon.vue'
    import shoppingIcon from './SVG/shopping-icon.vue'
    import phoneSolidIcon from './SVG/phone-solid-icon.vue'
    import GroceryIcon from './SVG/grocery-icon.vue'
    import ExpressIcon from './SVG/express-icon.vue'
    import ArrowLeftIcon from './SVG/arrow-left-icon.vue'
    import StarSolidIcon from './SVG/star-solid-icon.vue'
    import burgerIcon from './SVG/burger-icon.vue'
    import BaconIcon from './SVG/bacon-icon.vue'
    import ChampagneIcon from './SVG/champagne-icon.vue'
    import IcecreamIcon from './SVG/icecream-icon.vue'

    export default {
        name: 'Selection_Area',
        components: {
    searchIcon,
    qrIcon,
    tagIcon,
    walletIcon,
    carIcon,
    shoppingIcon,
    phoneSolidIcon,
    GroceryIcon,
    ExpressIcon,
    burgerIcon,
    ArrowLeftIcon,
    StarSolidIcon,
    BaconIcon,
    ChampagneIcon,
    IcecreamIcon
},
        data() {
            return {
                palceholders: [
                    'red ribbon',
                    'jolibee',
                    'mcdonalds',
                    'kfc',
                    'starbucks',
                    'tim hortons',
                    'Search the Grab app'
                ],
                placeholderDisplay: 'Search the Grab app'
            }
        },
        mounted() {
            setInterval(() => {
                this.placeholderDisplay = this.palceholders[Math.floor(Math.random() * 6)]
            }, 2000)
        },
        methods: {
            shop(name, rating, distance, time) {
                this.$router.push({
                    name: 'shop',
                    params: {
                        name,
                        rating,
                        distance,
                        time
                    }
                })
            }
        }
    }
</script>

<style>

</style>
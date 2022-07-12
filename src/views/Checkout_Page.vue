<template>
    <div class="flex items-center justify-center gap-2 p-4">
        <div class="flex flex-col items-center justify-center">
            <div>
                <p class="font-bold text-lg">{{shop}}</p>
                <p class="text-xs">Distance from you: {{distance}}</p>
            </div>
            <div class="grid grid-cols-3 gap-2">
                <button class="text-gray-600 bg-gray-300 rounded-full py-1 px-2">Delivery</button>
                <button class="text-gray-600 bg-gray-300 rounded-full py-1 px-2">Self Pick-Up</button>
            </div>
            <div class="flex flex-col w-full">
                <div class="flex w-full justify-between">
                    <p>Order summary</p>
                    <p>Add items</p>
                </div>
                <div class="flex w-full justify-between items-center p-2">
                    <div class="p-2 flex items-center gap-2">   
                        <p>{{total/100}}x</p>
                        <div class="flex flex-col items-start">
                            <p>Food Item</p>
                            <p>Edit</p>
                        </div>
                    </div>
                    <p>{{total}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Checkout_Page',
    data() {
        return{
            shop: '',
            distance: '',
            total: 0
        }
    },
    mounted(){
        this.shop = this.$route.params.shop
        this.distance = this.$route.params.distance
        this.total = this.$route.params.total
    }
}
</script>

<style>

</style>
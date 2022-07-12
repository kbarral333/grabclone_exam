<template>
  <div class="flex flex-col items-center p-4 gap-1 pb-16">
            <h3 class="self-start font-semibold">{{transactionType}} transactions</h3>
            <div class="flex flex-col items-center">
                <historyIcon :fill="'white'" :stroke="'gray'" class="h-20 w-20"  />
                <p class="text-sm font-semibold">Nothing here yet!</p>
                <p class="text-xs">your recent transactions will appear here.</p>
            </div>
        </div>
</template>

<script>

    import historyIcon from './SVG/history-icon.vue'
    export default {
        name: 'Clean_History_Transaction',
        components: {
            historyIcon
        },
        props: {
            transactionType: String
        },
    }   
</script>

<style>

</style>
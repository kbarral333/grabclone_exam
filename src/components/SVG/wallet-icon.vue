<template>
    <svg xmlns="http://www.w3.org/2000/svg" :fill="newFill" :stroke="newStroke" viewBox="0 0 24 24" stroke-width="1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
</svg>
</template>

<script>
    export default{
        name: 'wallet-icon',
        props:{
            newFill: String,
            newStroke: String
        }
    }
</script>

<style scoped>
</style>
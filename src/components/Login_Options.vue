<template>
    <div>
        <div class="flex flex-col gap-2">
            <button
                @click="goToHomePage"
                class="
                    bg-gray-50 
                    w-full 
                    rounded-full 
                    font-semibold
                    flex
                    items-center
                    justify-center
                    text-sm
                    gap-6
                    p-4"
            >
                <facebookIcon />
                 Continue with Facebook
            </button>
            <button
                @click="goToHomePage"
                class="
                    bg-gray-50 
                    w-full 
                    rounded-full 
                    font-semibold
                    flex
                    items-center
                    justify-center
                    text-sm
                    gap-6
                    p-4"
            >
                <googleIcon />
                 Continue with Google
            </button>
            <div class="flex pt-4 items-center pb-2">
                <span class="bg-white w-full h-1"></span>
                <p class="text-white px-2">or</p>
                <span class="bg-white w-full h-1"></span>
            </div>
            <button
                class="
                    bg-gray-50 
                    w-full 
                    rounded-full 
                    font-semibold
                    flex
                    items-center
                    justify-center
                    text-sm
                    gap-6
                    p-4"
            >
                <telephoneIcon />
                 Continue with Mobile Number
            </button>
        </div>
    </div>
</template>

<script>

    import facebookIcon from './SVG/facebook-icon.vue';
    import googleIcon from './SVG/google-icon.vue';
    import telephoneIcon from './SVG/telephone-icon.vue';

    export default {
        name: "Login_Options",
        components: {
            facebookIcon,
            googleIcon,
            telephoneIcon
        },
        methods: {
            goToHomePage(){
                let user;

                user = localStorage.getItem('accountDetails');
                user = JSON.parse(user);
                this.$store.dispatch('logIn', user);
                this.$router.push('home');
            }
        },
    };

</script>

<style scoped>
</style>
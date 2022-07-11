<template>
    <div class="flex flex-col bg-gray-50">
        <div class="w-full flex flex-col">
            <div class="bg-green-400 p-4 mb-10 pb-20">
                <div class="flex justify-between items-center">
                    <ArrowLeftIcon class="w-5 h-5" @click="goBack" />
                    <p @click="edit" class="text-white">{{ isEditing ? 'Save' : 'Edit' }}</p>
                </div>
            </div>
            <div class="self-center absolute top-20 p-0 m-0">
                <avatarIcon :fill="'white'" :stroke="'#16A34A'" class="w-20 h-20"/>
                <crownIcon class="absolute bottom-2 right-2 bg-green-600 rounded-full h-5 w-5 p-1"/>
            </div>
            <div class="flex items-center justify-center">
                <p> {{points}} Points | Rewards Member</p>
                <chevronLeftIcon class="w-4 h-4 rotate-180"/>
            </div>
            <div class="flex items-center justify-center gap-1 mt-4">
                <shieldCheckIcon class="w-6 h-6" :fill="'blue'" :strokeWidth="'1'" :stroke="'white'" />
                <p class="text-gray-400 text-sm">GrabPIN Enabled</p>
            </div>
        </div>
        <div class="flex flex-col gap-3">
            <div class="flex flex-col px-10 py-2  gap-3">
                <div>
                    <div class="flex flex-col items-start justify-center gap-1">
                        <h5 class="text-sm">Name</h5>
                        <input
                            v-model="accountDetails.name" 
                            :disabled="isEditing ? false : true " 
                            class="
                                form-input outline-0 border-b bg-gray-50 w-full font-semibold 
                                focus:border-green-600 border-b-2
                            "
                        />
                    </div>
                </div>
                <div>
                    <div class="flex flex-col items-start justify-center gap-1">
                        <h5 class="text-sm">Mobile Number</h5>
                        <input
                            v-model="accountDetails.mobile"
                            :disabled="isEditing ? false : true " 
                            class="
                                form-input outline-0 border-b bg-gray-50 w-full font-semibold 
                                focus:border-green-600 border-b-2
                            "
                        />
                    </div>
                </div>
                <div>
                    <div class="flex flex-col items-start justify-center gap-1">
                        <h5 class="text-sm">Email Address</h5>
                        <div class="flex justify-between w-full items-center">
                            <input
                                v-model="accountDetails.email" 
                                :disabled="isEditing ? false : true " 
                                class="
                                    form-input outline-0 bg-gray-50 w-full font-semibold 
                                    focus:border-green-600 border-b-2
                                "
                            />
                            <circleCheckIcon v-show="isEditing ? false : true "  class="w-5 h-5 mr-3 self-end border-b-2" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-start justify-center gap-2">
                <h4 class="font-semibold px-6">Profiles</h4>
                <div class="flex flex-col items-start justify-center bg-white w-full px-6 py-2">
                    <p class="text-blue-500 text-semibold">Add a business profile</p>
                    <p class="text-gray-400 text-xs">Better manage your ride expenses</p>
                </div>
            </div>
            <div class="flex flex-col items-start justify-center">
                <h4 class="font-semibold px-6 mb-3 mt-2">Linked Accounts</h4>
                <div class="w-full divide-y">
                    <div class="flex items-start justify-between bg-white w-full px-6 py-2">
                        <div class="flex gap-3">
                            <facebookIcon class="w-5 h-5" />
                            <p class="text-sm">Facebook</p>
                        </div>
                        <Switch
                            v-model="isFacebookEnabled"
                            :class="isFacebookEnabled ? 'bg-green-200' : 'bg-gray-400'"
                            class="relative inline-flex h-4 w-8 items-center rounded-full"
                        >
                            <span class="sr-only">Enable notifications</span>
                            <span
                            :class="isFacebookEnabled ? 'translate-x-4 bg-green-600' : 'translate-x-0 bg-gray-100'"
                            class="inline-block h-5 w-5 transform rounded-full transform transition duration-200 ease-in-out"
                            />
                        </Switch>
                    </div>
                    <div class="flex items-start justify-between bg-white w-full px-6 py-2">
                        <div class="flex gap-3">
                            <googleIcon class="w-5 h-5" />
                            <p class="text-sm">Google</p>
                        </div>
                        <Switch
                            v-model="isGoogleEnabled"
                            :class="isGoogleEnabled ? 'bg-green-200' : 'bg-gray-400'"
                            class="relative inline-flex h-4 w-8 items-center rounded-full"
                        >
                            <span class="sr-only">Enable notifications</span>
                            <span
                            :class="isGoogleEnabled ? 'translate-x-4 bg-green-600' : 'translate-x-0 bg-gray-100'"
                            class="inline-block h-5 w-5 transform rounded-full transform transition duration-200 ease-in-out"
                            />
                        </Switch>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center gap-1">
                <h4 class="font-semibold"><b>Log out</b></h4>
                <p class="text-xs text-gray-400">V1.000.0(0000000000) Build ; Build 100000</p>
            </div>
        </div>
    </div>
</template>

<script>

    import avatarIcon from '@/components/SVG/avatar-icon.vue'
    import ArrowLeftIcon from '@/components/SVG/arrow-left-icon.vue'
    import crownIcon from '@/components/SVG/crown-icon.vue'
    import chevronLeftIcon from '@/components/SVG/chevron-left-icon.vue'
    import shieldCheckIcon from '@/components/SVG/shield-check-icon.vue'
    import circleCheckIcon from '@/components/SVG/circle-check-icon.vue'
    import facebookIcon from '@/components/SVG/facebook-icon.vue'
    import googleIcon from '@/components/SVG/google-icon.vue'
    import {Switch} from '@headlessui/vue'
    import { mapState } from 'vuex'


    export default{
        name: 'User_Details_Page',
        components: {
            avatarIcon,
            ArrowLeftIcon,
            crownIcon,
            chevronLeftIcon,
            shieldCheckIcon,
            circleCheckIcon,
            facebookIcon,
            googleIcon,
            Switch
        },
        data() {
            return{
                points: 0,
                user: {
                    email: '',
                    mobile: '',
                    name: ''
                },
                isFacebookEnabled: false,
                isGoogleEnabled: false,
                isEditing: false,
                action: ''
            }
        },
        methods: {
            edit() {
                this.isEditing = !this.isEditing;

                if(this.isEditing == false){
                    this.user.email = this.accountDetails.email;
                    this.user.name = this.accountDetails.name;
                    this.user.mobile = this.accountDetails.mobile;
                    this.$store.dispatch('switchTab', 'Account');
                    this.$store.dispatch('logIn', this.user);
                }
            },
            goBack() {
                this.$router.push('home')
            }
        },
        computed: {
           ...mapState(['accountDetails'])
        }
    }
</script>

<style scoped>
</style>
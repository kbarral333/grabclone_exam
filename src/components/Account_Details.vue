<template>
    <div class="flex flex-col items-start gap-3">
        <div class="flex items-center gap-1">
            <avatarIcon 
                class="w-24 h-24"
                :stroke="'white'"
                :fill="'#16A34A'"
            />
            <div class="flex flex-col items-start gap-1">
                <p class="text-lg font-semibold">{{fullName}}</p>
                <div @click="editProfile" class="flex items-center text-gray-500">
                    <p class="text-sm">Edit Profile</p>
                    <chevronLeftIcon class="w-4 h-4 rotate-180" />
                </div>
            </div>
        </div>
        <div class="flex flex-col w-full gap-10 items-start">
            <div class="flex flex-col w-full items-start">
                <h5 class="font-semibold">For more value</h5>
                <div class="flex flex-col w-full text-sm">
                    <div class="flex items-center justify-between border-b py-3">
                        <p>Rewards</p>
                        <chevronLeftIcon class="w-3 h-3 text-gray-800 rotate-180" />
                    </div>
                    <div class="flex items-center justify-between border-b py-3">
                        <p>Challenges</p>
                        <div class="flex items-center gap-3">
                            <button class="bg-red-500 text-white text-xs py-1 px-2 rounded-full">New</button>
                            <chevronLeftIcon class="w-3 h-3 text-gray-800 rotate-180" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between border-b py-3">
                        <p>Referral</p>
                        <div class="flex items-center gap-3">
                            <button class="bg-red-500 text-white text-xs py-1 px-2 rounded-full">New</button>
                            <chevronLeftIcon class="w-3 h-3 text-gray-800 rotate-180" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-full items-start">
                <h5 class="font-semibold">My Account</h5>
                <div class="flex flex-col w-full text-sm">
                    <div class="flex items-center justify-between border-b py-3">
                        <p>Rewards Member</p>
                        <div class="flex items-center gap-2">
                            <crownIcon class="bg-green-600 rounded-full h-5 w-5 p-1"/>
                            <p>0 Points</p>
                            <chevronLeftIcon class="w-3 h-3 text-gray-800 rotate-180" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between border-b py-3">
                        <p>Scheduled</p>
                        <chevronLeftIcon class="w-3 h-3 text-gray-800 rotate-180" />
                    </div>
                    <div class="flex items-center justify-between border-b py-3">
                        <p>Saved Places</p>
                        <chevronLeftIcon class="w-3 h-3 text-gray-800 rotate-180" />
                    </div>
                    <div class="flex items-center justify-between border-b py-3">
                        <p>Emergency Contacts</p>
                        <chevronLeftIcon class="w-3 h-3 text-gray-800 rotate-180" />
                    </div>
                    <div class="flex items-center justify-between border-b py-3">
                        <p>Business Account</p>
                        <chevronLeftIcon class="w-3 h-3 text-gray-800 rotate-180" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-full items-start">
                <h5 class="font-semibold">General</h5>
                <div class="flex flex-col w-full text-sm">
                    <div class="flex items-center justify-between border-b py-3">
                        <p>Help Centre</p>
                        <chevronLeftIcon class="w-3 h-3 text-gray-800 rotate-180" />
                    </div>
                    <div class="flex items-center justify-between border-b py-3">
                        <p>Settings</p>
                        <chevronLeftIcon class="w-3 h-3 text-gray-800 rotate-180" />
                    </div>
                    <div class="flex items-center justify-between border-b py-3">
                        <p>Share Feedback</p>
                        <chevronLeftIcon class="w-3 h-3 text-gray-800 rotate-180" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-full items-start mb-8">
                <h5 class="font-semibold">Opportunities</h5>
                <div class="flex flex-col w-full text-sm">
                    <div class="flex items-center justify-between border-b py-3">
                        <p>Drive with Grab</p>
                        <chevronLeftIcon class="w-3 h-3 text-gray-800 rotate-180" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import avatarIcon from './SVG/avatar-icon.vue'
    import chevronLeftIcon from './SVG/chevron-left-icon.vue'
    import crownIcon from './SVG/crown-icon.vue'

    export default {
        name: 'Account_Details',
        components:{
            avatarIcon,
            chevronLeftIcon,
            crownIcon
        },
        data() {
            return{
                fullName: ''
            }
        },
        mounted() {
            this.fullName = localStorage.getItem('accountDetails')
            this.fullName = JSON.parse(this.fullName).name
        },
        methods:{
            editProfile() {
                this.$router.push('user_details');
            }
        }
    }
</script>

<style scoped>
</style>
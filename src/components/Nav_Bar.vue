<template>
    <div class="fixed w-full border-t bottom-0 px-3">
        <div class=" flex justify-between p-2">
            <div @click="changeTab('Home')" class="flex flex-col items-center">
                <house-icon
                    class="w-5 h-5"
                    :stroke="tabs.Home == true ? '#16A34A' :  'currentColor' "
                    :fill="tabs.Home == true ? 'white' : 'none' "
                />
                <p class="text-xs" :class="tabs.Home == true ? 'text-green-600' : ''">Home</p>
            </div>
            <div @click="changeTab('Activity')" class="flex flex-col items-center">
                <history-icon
                    class="w-5 h-5"
                    :stroke="tabs.Activity == true ? '#16A34A' :  'currentColor' "
                    :fill="tabs.Activity == true ? 'white' : 'none' "
                />
                <p class="text-xs" :class="tabs.Activity == true ? 'text-green-600' : ''">Activity</p>
            </div>
            <div @click="changeTab('Payment')" class="flex flex-col items-center">
                <wallet-icon
                    class="w-5 h-5"
                    :stroke="tabs.Payment == true ? '#16A34A' :  'currentColor' "
                    :fill="tabs.Payment == true ? 'white' : 'none' "
                />
                <p class="text-xs" :class="tabs.Payment == true ? 'text-green-600' : ''">Payment</p>
            </div>
            <div @click="changeTab('Messages')" class="flex flex-col items-center">
                <chatIcon 
                    class="w-5 h-5"
                    :stroke="tabs.Messages == true ? '#16A34A' :  'currentColor' "
                    :fill="tabs.Messages == true ? 'white' : 'none' "
                />
                <p class="text-xs" :class="tabs.Messages == true ? 'text-green-600' : ''">Messages</p>
            </div>
            <div @click="changeTab('Account')" class="flex flex-col items-center">
                <avatarIcon
                    class="w-5 h-5"
                    :stroke="tabs.Account == true ? '#16A34A' :  'currentColor' "
                    :fill="tabs.Account == true ? 'white' : 'none' "
                />
                <p class="text-xs" :class="tabs.Account == true ? 'text-green-600' : ''">Account</p>
            </div>
        </div>
    </div>
</template>
<script>

    import walletIcon from '@/components/SVG/wallet-icon.vue'
    import historyIcon from '@/components/SVG/history-icon.vue'
    import HouseIcon from '@/components/SVG/house-icon.vue'
    import chatIcon from '@/components/SVG/chat-icon.vue'
    import avatarIcon from '@/components/SVG/avatar-icon.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'Nav_Bar',
        components: {
            walletIcon,
            historyIcon,
            HouseIcon,
            chatIcon,
            avatarIcon
        },
        data() {
            return {
                tabs: {
                    Home: false,
                    Activity: false,
                    Payment: false,
                    Messages: false,
                    Account: false
                },
            }
        },
        methods: {
            changeTab(currentTab){
                Object.keys(this.tabs).forEach((key) => {
                    this.tabs[key] = false
                });
                this.$store.dispatch('switchTab', currentTab);
            }
        },
        computed: {
           ...mapState(['activeTab'])
        },
        mounted(){
            this.tabs[this.activeTab] = true;
        },
        watch: {
            activeTab(newTab){
                this.tabs[newTab] = true;
            }
        }

    }
</script>

<style scoped>
</style>
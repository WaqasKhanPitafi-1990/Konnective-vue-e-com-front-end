<template>
    <div>
        <pageHeader />
        <navbar />
        <router-view>
            </router-view>
        <pageFooter/>
            

    </div>
</template>
<script>
import pageFooter from '@/components/pageFooter.vue';
import pageHeader from '../components/pageHeader.vue';
import navbar from '../components/navBar.vue';

export default {
    name: 'App',
    components: {
        pageHeader,
        navbar,
        pageFooter

    }
}
</script>
    
<style></style>
    
<template>
    <div>
        <div class="h-bottomInfo bg-gradient-to-t" :class="`from-${gradientColor}`"></div>
        <div class="w-full py-4 pl-7" :class="bgColor">
          <img class="" src="../assets/images/logo.png" alt="logo" width="52" height="40"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props:{
        bgColor:{
            type: String,
            required: true,
        },
        gradientColor:{
            type: String,
            required: true,
        },
    },
    data(){
        return{

        }
    }
}
</script>

<style>

</style>
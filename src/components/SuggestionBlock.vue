<template>
  <div class="h-suggestionBlock">
    <div class="w-full text-5xl text-white font-bold py-3 pl-14 pr-12 flex justify-between items-center" :class="bgColor">
      <div><slot></slot></div> 
      <div v-if="$route.name === 'Home' || $route.name === 'Spot'"><router-link class="block text-lg font-normal border-2 px-6 py-2.5 rounded-lg leading-4" :to="assignedForward? assignedForward:forward">查看更多</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SuggestionBlock',
    props:{
        bgColor:{
            type: String,
            required: true,
        },
        assignedForward:{
            type: String,
            required: false,
        }
    },
    data(){
        return{

        }
    },
    computed:{
        forward(){
            return `/${this.bgColor.split('-')[1]}`
        }
    }
}
</script>

<style>

</style>
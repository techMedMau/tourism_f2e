<template>
  <div class="suggestion">
      <div class="suggestion_title" :style="{'background-color': titleBg}">
          <div class="suggestion_title_word"><slot></slot></div>
          <div v-if="$route.name === 'Home' || $route.name === 'Spot'" class="suggestion_title_more">
            <router-link :to="assignedForward">
                查看更多
            </router-link>
          </div>
      </div>
    <!-- <div class="w-full text-5xl text-white font-bold py-3 pl-14 pr-12 flex justify-between items-center" :class="bgColor">
      <div><slot></slot></div> 
      <div v-if="$route.name === 'Home' || $route.name === 'Spot'"><router-link class="block text-lg font-normal border-2 px-6 py-2.5 rounded-lg leading-4" :to="assignedForward? assignedForward:forward">查看更多</router-link></div>
    </div> -->
  </div>
</template>

<script>
export default {
    name: 'SuggestionBlock',
    props:{
        titleBg:{
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
}
</script>

<style lang="scss">
.suggestion{
    height: 660px;
    &_title{
        height: 71px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &_word{
            font-size: 3rem;
            font-weight: bold;
            margin-left: 58px;
        }
        &_more{
            font-size: 18px;
            border: 3px solid white;
            border-radius: 10px;
            padding: 10px 25px;
            margin-right: 54px;
        }
    }
}
</style>
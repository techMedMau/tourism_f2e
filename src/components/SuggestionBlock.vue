<template>
  <div class="suggestion">
    <div class="suggestion_title" :style="{ 'background-color': titleBg }">
      <div class="suggestion_title_word"><slot></slot></div>
      <div
        v-if="$route.name === 'Home' || $route.name === 'Spot'"
        class="suggestion_title_more"
      >
        <router-link :to="assignedForward"> 查看更多 </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuggestionBlock-component',
  props: {
    titleBg: {
      type: String,
      required: true,
    },
    assignedForward: {
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.suggestion {
  height: 660px;
  &_title {
    height: 71px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &_word {
      font-size: 3rem;
      font-weight: bold;
      margin-left: 58px;
    }
    &_more {
      font-size: 18px;
      border: 3px solid white;
      border-radius: 10px;
      padding: 10px 25px;
      margin-right: 54px;
    }
  }
}
</style>

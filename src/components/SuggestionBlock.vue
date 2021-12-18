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
     <Pagination
       v-if="showPagination"
       :totalItems="11"
       :buttonPerPage="3"
       @paginationEvent="paginationEvent"/>
  </div>
</template>

<script>
import Pagination from './Pagination.vue';

export default {
  name: 'SuggestionBlock-component',
  components: { Pagination },
  props: {
    showPagination: {
      type: Boolean,
      required: false,
      default: false,
    },
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
  methods: {
    paginationEvent(page) {
      console.log(page);
    },
  },
};
</script>

<style lang="scss">
.suggestion {
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

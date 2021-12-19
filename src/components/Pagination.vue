<template>
  <div class="pagination">
    <ul class="pagination_items">
        <!-- <li class="pagination_item">
            <button type="button" @click="clickFirstPage" :disabled="isInFirstPage">第一頁</button>
        </li> -->
        <li class="pagination_item arrow" v-if="!isInFirstPage"  @click="clickPreviousPage">
           <img :src="require('@/assets/images/icons/arrow-left.svg')" alt="icon_arrow-right"
          width="24" height="24"/>
        </li>
        <li class="pagination_item" v-for="item in pageDisplay"
          :key="item.name"
          :class="{ active: item.name === currentPage}"
          @click="pageChange(item.name)">
            {{item.name}}
        </li>
        <li class="pagination_item arrow" v-if="!isInLastPage" @click="clickNextPage">
          <img :src="require('@/assets/images/icons/arrow-right.svg')" alt="icon_arrow-right"
          width="24" height="24"/>
        </li>
        <!-- <li>
            <button type="button" @click="clickLastPage" :disabled="isInLastPage">最後一頁</button>
        </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination-component',
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    buttonPerPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.totalItems / this.buttonPerPage);
    },
    pageDisplay() {
      const tmpArr = [];
      for (let i = this.currentPage - 1; i <= this.currentPage + 1; i += 1) {
        if (i === 0) {
          i += 1;
        }
        if (i > this.totalItems) {
          break;
        }
        tmpArr.push({ name: i, isActive: i === this.currentPage });
      }
      return tmpArr;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalItems;
    },
  },
  methods: {
    clickFirstPage() {
      this.currentPage = 1;
      this.emitCurrentPage();
    },
    clickLastPage() {
      this.currentPage = this.totalPages;
      this.emitCurrentPage();
    },
    clickPreviousPage() {
      this.currentPage -= 1;
      this.emitCurrentPage();
    },
    clickNextPage() {
      this.currentPage += 1;
      this.emitCurrentPage();
    },
    pageChange(index) {
      this.currentPage = index;
      this.emitCurrentPage();
    },
    emitCurrentPage() {
      this.$emit('paginationEvent', this.currentPage);
    },
  },
};
</script>

<style lang="scss">
.pagination{
    width: max-content;
    margin-left: auto;
    margin-right: auto;
    // justify-content: center;
    &_items{
        display: flex;
    }
    &_item{
        background-color: #F8F8F8;
        border-radius: 50%;
        width: 44px;
        height: 44px;
        font-size: 24px;
        text-align: center;
        line-height: 45px;
        &:hover{
          cursor: pointer;
        }
        & + &{
          margin-left: 8px;
        }
    }
}

.arrow{
  display: flex;
  justify-content: center;
}

.active{
  background-color: rgba(0, 0, 0, 0.3);;
  color: #F8F8F8;
}

</style>

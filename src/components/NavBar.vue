<template>
    <div class="navBar">
        <nav class="nav">
            <ul class="nav_items">
              <router-link to="/" class="nav_item"><li>活動新訊</li></router-link>
              <router-link to="/spot" class="nav_item"><li>景點</li></router-link>
              <router-link to="/food" class="nav_item"><li>美食</li></router-link>
              <router-link to="/hotel" class="nav_item"><li>住宿</li></router-link>
              <router-link to="/transport" class="nav_item"><li>交通</li></router-link>
            </ul>
        </nav>
        <img class="nav_avatar" :src="`${require('@/assets/images/avator.png')}`" alt="avator" width="30" height="30">
    </div>
</template>

<script>
export default {
    name:'NavBar-component',

}
</script>

<style lang="scss">
.navBar{
    display: flex;
    align-items: center;
}

.nav{
  &_items{
    display: flex;
  }

  &_item{
    padding-left: 6px;
    padding-right: 6px;
    & + & {
      border-left: 2px solid rgba(0, 0, 0, .3);
    }
  }

  &_avatar{
    margin-left: 11px;
  }
  
}
</style>
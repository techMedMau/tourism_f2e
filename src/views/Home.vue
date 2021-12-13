<template>
  <div class="container">
    <div class="banner" :style="`background-image: url(${require('@/assets/images/banners/banner_homepage.png')})`">
      <Nav-bar class="navComponent"/>
      <img class="logo_home" :src="`${require('@/assets/images/logo.png')}`" alt="logo" width="284" height="218">
    </div>
    <div class="weather">
      <p class="weather_word">台灣許多美景媲美國外，值此五倍券、國旅券及觀光業者加碼優惠盡出之際，旅行台灣就是現在！</p>
      <p class="weather_word">到哪裡旅遊還沒有想法的民眾，歡迎到台灣觀光，體驗「台灣之美」!</p>
    </div>
    <div class="links">
      <router-link class="links_card" to="/spot">
        <img :src="`${require('@/assets/images/homepageCards/view.png')}`" alt="linkToSpot" />
        <div class="links_tag">景&ensp;點</div>
      </router-link>
      <router-link class="links_card" to="/food">
        <img :src="`${require('@/assets/images/homepageCards/food.png')}`" alt="linkToFood" />
        <div class="links_tag">美&ensp;食</div>
      </router-link>
      <router-link class="links_card" to="/hotel">
        <img :src="`${require('@/assets/images/homepageCards/home.png')}`" alt="linkToHotel" />
        <div class="links_tag">住&ensp;宿</div>
      </router-link>
      <router-link class="links_card" to="/transport">
        <img :src="`${require('@/assets/images/homepageCards/bus.png')}`" alt="linkToTransport" />
        <div class="links_tag">交&ensp;通</div>
      </router-link>
    </div>
    <SuggestionBlock :titleBg="'#6E9292'" :assignedForward="'/spot'">熱門景點</SuggestionBlock>
    <SuggestionBlock :titleBg="'#738677'" :assignedForward="'/food'">熱門美食</SuggestionBlock>
    <SuggestionBlock :titleBg="'#C2BB96'" :assignedForward="'/hotel'">住宿推薦</SuggestionBlock>
    <Footer :bgColor="'#6E9292'" :gradientColor="'#A7D4DA'"/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import SuggestionBlock from '../components/SuggestionBlock'

export default {
  name: 'Home-view',
  components: { Footer, SuggestionBlock },
  data(){
    return{
      choice:['景點','美食','住宿','交通']
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$api.scenicSpot.getAll()
        .then((res) => {
          console.log(res);
        })
    },
  },
}
</script>

<style lang="scss">

.navComponent{
  justify-content: flex-end;
  margin-right: 30px;
  padding-top: 24px;
}

.logo_home{
  margin: 0 auto;
}

.weather{
  height: 366px;
  background-image: linear-gradient($primary-green, white);
  &_word{
    width: max-content;
    margin: 0 auto;
  }
}

.links{
  height: max-content;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  &_card{
    position: relative;
  }
  &_tag{
    position: absolute;
    background-color: white;
    box-shadow: -4px 4px 4px 4px rgba(0, 0, 0, 0.25);
    top: -5px;
    right: 3px;
    -webkit-writing-mode: vertical-lr;
    writing-mode: vertical-lr;
    padding: 20px .5rem;
    font-weight: bold;
  }
}

.logo{
  &_home{
    display: flexbox;
  }
}

</style>
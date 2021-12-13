<template>
    <div class="footer">
        <div class="footer_info" :style="{ backgroundImage: gradient }">
            <div class="footer_info_word">
                <div v-for="(item, index) in info" :key="index">
                    <p class="footer_info_title">{{item.title}}</p>
                    <a class="footer_info_link" href="#" v-for="(link, index) in item.details" :key="index">{{link}}</a>
                </div>
            </div>
        </div>
        <div class="footer_bottom" :style="{'background-color': bgColor}">
          <img class="footer_bottom_img" src="../assets/images/logo.png" alt="logo" width="52" height="40"/>
          <div class="footer_bottom_word">
            <p>24小時免付費旅遊諮詢熱線：0800-011765</p>
            <p>免付費國旅券專線：0800-211734（服務時間：週一至週日8:30~18:30）</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer-component',
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
            info: [
                { 
                    title: '活動新訊',
                    details: ['最新消息', '活動異動', '熱門活動']
                },
                {
                    title: '景點',
                    details: ['熱門景點', '網紅攻略', '主題景點']
                },
                {
                    title: '美食',
                    details: ['臺灣文化', '臺灣小吃', '臺灣在地特色', '熱門美食', '網紅必推美食']
                },
                {
                    title: '住宿',
                    details: ['觀光旅館', '旅館', '民宿', '住宿推薦']
                },
                {
                    title: '交通',
                    details: ['陸運資訊', '高速公路', '交通租賃']
                }
            ]
        }
    },
    computed:{
        gradient(){
            return `linear-gradient(white, ${this.gradientColor})`;
        }
    }
}
</script>

<style lang="scss">
.footer{
    height: 452px;
    &_info{
        height: 376px;
        &_word{
            display: flex;
            justify-content: space-between;
            width: 940px;
            margin: 72px 170px 59px 170px;
        }
        &_title{
            font-weight: bold;
            font-size: 28px;
        } 
        &_link{
            display: block;
            font-size: 24px;
            color: rgba(0, 0, 0, .5);
            & + &{
                margin-top: 18px;
            }
        }
        &_title + &_link{
            margin-top: 18px;
        }
    }
    &_bottom{
        height: 76px;
        display: flex;
        align-items: center;
        &_img{
          margin: 0 28px;
        }
        &_word{
            color: white;
        }
    }
}

</style>
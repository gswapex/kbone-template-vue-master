<template>
    <div class="cnt">
        <Header></Header>
        <button @click="onClickBack">回到上一页</button>
        <p>epic</p>
        <p>{{ username }}</p>
        <div class="goodsContiner">
            <template v-for="i in book">
                <div class="goodsItem" :key="i">
                    <img class="left" mode="aspectFill" src="/images/banner17.jpg">
                    <div class="right">
                        <div class="name">{{ i.name }}</div>
                        <div class="category">{{ i.category }}</div>
                        <div class="price">{{ i.price }}</div>
                        <div class="goshop">详情></div>
                        <div class="btn">
                            <button class="button" size="mini">加入购物车</button>
                            <button class="button" size="mini">立即购买</button>
                        </div>

                    </div>
                </div>
            </template>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Vue from 'vue'
import Header from '../common/Header.vue'
import Footer from '../common/Footer.vue'

export default Vue.extend({
  name: 'Epic',
  components: {
    Header,
    Footer,
  },
  created() {
    window.addEventListener('wxload', query => console.log('page3 wxload', query))
    window.addEventListener('wxshow', () => console.log('page3 wxshow'))
    window.addEventListener('wxready', () => console.log('page3 wxready'))
    window.addEventListener('wxhide', () => console.log('page3 wxhide'))
    window.addEventListener('wxunload', () => console.log('page3 wxunload'))
  },
  methods: {
    onClickBack() {
      if (process.env.isMiniprogram) {
        wx.navigateBack()
      }
    },
  },
  data() {
    return {
      username: ' 荔枝',
      book: [
        {
          name: '防冻液的自传',
          category: '防冻液',
          price: '777',
        },
        {
          name: '教你如何种荔枝树',
          category: '防冻液',
          price: '999',
        },
      ],
    }
  },
})
</script>

<style lang="less">
.cnt {
  margin-top: 20px;
}

a, button {
  display: block;
  width: auto;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ddd;
}

.goodsContiner {
  margin-top: 20px;
  width: auto;
  height: auto;
  background-color: rgb(227, 240, 155);

}

.goodsItem {
  display: flex;
  flex-direction: row;
  width: auto;
  height: 200px;
  padding-bottom: 10px;
  border-bottom: 2px silver solid
}

.left {
  display: flex;
  flex-direction: row;
  margin: 16px;
  width: 80px;
  height: 80px;
  background: white;
  align-content: center;
  align-self: center;
}

.right {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 24px;
  align-content: center;
  align-self: center;
}

.name {
  font-size: 16px
}

.category {
  font-size: 16px;
  color: rgba(179, 171, 171, 0.929);
}

.price {
  font-size: 16px;
  color: red;
}

.goshop {
  font-size: 16px;
  color: rgb(105, 102, 102, 0.925);
}

.btn {
  display: flex;
  flex-direction: row;
  height: 45px;
  width: 220px;
  align-content: center;
  align-self: center;
    margin:20px
}

.button {
  line-height: 25px;
  font-size: 10px;
    margin: 3px ;
  background-color: #dddddd;
}

//.btn button{
//    margin:20px 60px;
//}

</style>

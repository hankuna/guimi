<template>
    <cube-scroll
    ref="scroll"
    :data="productData"
    :options="options"
    @pulling-down="onPullingDown"
    @pulling-up="onPullingUp">
   <div class="home">
        <section class="main-wrap">
            <div class="swiper">
                <cube-slide :data="items"/>
            </div>
            <div class="icon-list">
                <ul class="icon">
                <router-link :tag="'li'" :to="{name:'introduce'}">
                    <span class="iconfont icon-jieshao"></span>
                    <span>商城介绍</span>
                </router-link>
                <router-link :tag="'li'" :to="{name:'Shopkeeper'}">
                <span class="iconfont icon-wode"></span> 
                <span>成为店主</span>
                </router-link>
                <router-link :tag="'li'" :to="{name:'welfare'}">
                    <span class="iconfont iconfont icon-liwu"></span>
                    <span>店主福利</span>
                </router-link>
                <router-link :tag="'li'" :to="{name:'service'}">
                    <span class="iconfont icon-love-b"></span>
                    <span>店主服务</span>
                </router-link>
            </ul>
            </div>
            <div class="img-list">
                <div class="left">
                    <img src="../../../assets/images/img5.jpg" alt="">
                </div>
                <div class="right">
                    <img src="../../../assets/images/img6.jpg" alt="">
                </div>
            </div>
            <div v-for="(item, index) in productData" :key="index">
                <div class="text">
                    <span>{{item.name}}</span>
                </div>
                <div class="list" v-for="(innerItem, idx) in item.prodlist" :key="idx">
                    <div class="img">
                        <a :href="innerItem.url"><img :src="innerItem.image" alt=""></a> 
                    </div>
                    <h4>{{innerItem.productname}}<span>￥{{innerItem.vipprice}}</span></h4>  
                    <p>{{innerItem.secondname}}<button>立即剁手</button></p >
                </div>
            </div>
        </section>
   </div>
   </cube-scroll>
</template>


<script>
import axios from 'axios'
export default {
    name: 'home',
    data () {
        return {
            productData : [],
            allData: [],
            dataLen:1,
             items: [
                        {
                        url: 'http://www.didichuxing.com/',
                        image: '../../../../static/swiper/img1.jpg'
                        },
                        {
                        url: 'http://www.didichuxing.com/',
                        image: '../../../../static/swiper/img2.jpg'
                        },
                        {
                        url: 'http://www.didichuxing.com/',
                        image: '../../../../static/swiper/img3.jpg'
                        },
                        {
                        url: 'http://www.didichuxing.com/',
                        image: '../../../../static/swiper/img4.jpg'
                        }
                    ],
                     itemIndex: 5,
                        options: {
                             pullDownRefresh: {
                                threshold: 90,
                                stop: 40,
                                txt: '刷新成功'
                                },
                            pullUpLoad: {
                            threshold: 0,
                            txt: {
                                more: 'Load more',
                                noMore: 'No more data'
                            }
                            }
                        }
        }
    },
     methods: {
         onPullingDown() {
            // 模拟更新数据
            setTimeout(() => {
               this.$refs.scroll.forceUpdate()
            }, 1000)
            },
        onPullingUp() {
        // 更新数据
        setTimeout(() => {
            if (this.allData.length > this.productData.length) {
            // 如果有新数据
            let newData = this.allData.splice(this.dataLen, this.dataLen + 1)
            this.dataLen += 1

            this.productData = this.productData.concat(newData)
            
            } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
            }
        }, 1000)
        }
    },
    mounted () {
        axios.get('/api/data').then((res) => {
            this.allData = [...res.data.Data];
            this.productData = res.data.Data.splice(0, 1)
            //console.log(this.productData)
            console.log(this.allData)
        })
    }
};
</script>
<style>
body{
	font-size: .32rem;
}
.home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.main-wrap {
    flex: 1;
    overflow-y: scroll;
}

.swiper {
  width: 100%;
  height: 3.75rem;
  overflow: hidden;
}
.swiper img {
  width: 100%;
  height: 100%;
}
.wrapper {
  flex: 1;
}
.icon {
  height: 1.76rem;
  width: 100%;
  display: flex;
  align-items: center;
}
.icon li {
  width: 25%;
  height: 1.76rem;
  flex: 1;
  text-align: center;
  font-size: 0.28rem;
  color: #000;
  font-weight: bold;
}
li {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.icon .iconfont {
  width: 0.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  background: #bd1d21;
  margin: 0.2rem 0.68rem;
  padding: 0.2rem 0.2rem;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  font-size: 0.4rem;
}
.icon li span {
  display: block;
  padding: 0.02rem 0;
}
.router-link-exact-active {
  color: red;
}
.img-list {
  width: 100%;
  height: 1.7rem;
  display: flex;
}
.img-list .left {
  width: 49%;
  height: 100%;
}
.left img,
.right img {
  width: 100%;
  height: 100%;
}
.img-list .right {
  width: 49%;
  height: 100%;
  margin-left: 2%;
}
.text {
  width: 100%;
  height: 0.9rem;
  background-color: #f8f8f8;
  margin-top: 0.2rem;
  color: #9f9f9f;
  text-align: center;
  line-height: 0.9rem;
  font-weight: bold;
}
.list{
    height: 6rem;
    width: 100%;
    background-color: #f8f8f8;
}
.list .img{
    height: 4.47rem;
}
img{
    height: 100%;
    width: 100%;
}
.list h4{
    line-height: .8rem;
    font-weight: bold;
}
.list h4 span{
    float: right;
    margin-right: 2%;
    color: #ae2f2a;
}
.list span,button{
    float: right;
    margin-right: 2%;
}
.list p{
    font-size: 0.26rem;
    color: #787878;
    font-weight: bold;
    line-height: .4rem;
}
.list button{
    background-color: #ae2f2a;
    color: #fff;
    padding: 0.1rem 0.2rem;
    border: none;
}
</style>

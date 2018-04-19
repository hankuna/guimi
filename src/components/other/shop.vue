<template>
  <div class="shop" >
      <p v-for="(item, idx) in listData" :key="idx">
          <a>{{item.title}}</a>
      </p>
  </div>
</template>
<script>
import listData from '@/mock/data/shop.js'
import axios from 'axios'
import mock from 'mockjs'
export default {
  data () {
      return {
          listData:listData.listData
      }
  },
  mounted() {
      
          axios.post('/listArr')
          .then((res) => {
              this.listData = res.data
          })
     
  }
}
</script>
<style>
body{
	font-size: .32rem;
}
</style>



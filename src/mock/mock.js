require.config({
    paths: {
        mock: 'http://mockjs.com/dist/mock'
    }
})
//引入mockjs
const Mock = require('mockjs')
// 加载 Mock
require(['mockjs'], function(Mock){
    // 使用 Mock
    let data = {
        "success": true,
        "Data": [{
          "classid": "180126161545485810",
          "code": "002",
          "name": "颜值Queen",
          "parentid": "0",
          "imagepath": "http://images.guimimall.com/_M/201802/115534735097.jpg",
          "prodlist": [{
            "pid": "180201154331235145",
            "image": "http://images.guimimall.com/_P/201803/094242328923.jpg",
            "productname": "Q+时焕青春抚痕精华液",
            "secondname": "【预售】皱纹的小熨斗 青春的防腐剂",
            "productid": "180201154331235145",
            "stocks": 9988,
            "lockstock": 8,
            "vipprice": 268.0000,
            "pricemarket": 0.0000,
            "url": "http://m.guimimall.com/170718164338876176/product.html?id=180201154331235145"
          }, {
            "pid": "180201154132924979",
            "image": "http://images.guimimall.com/_P/201803/094350196230.jpg",
            "productname": "Q+明净玉脂臻美精华液",
            "secondname": "【预售】治愈岁月 1瓶还你10年嫩白青春",
            "productid": "180201154132924979",
            "stocks": 9991,
            "lockstock": 0,
            "vipprice": 238.0000,
            "pricemarket": 0.0000,
            "url": "http://m.guimimall.com/170718164338876176/product.html?id=180201154132924979"
          }, {
            "pid": "180201153949759041",
            "image": "http://images.guimimall.com/_P/201803/094433070899.jpg",
            "productname": "Q+自然赋能美颜水&nbsp; &nbsp;",
            "secondname": "【预售】肌肤24小时自带加湿器",
            "productid": "180201153949759041",
            "stocks": 9997,
            "lockstock": 2,
            "vipprice": 198.0000,
            "pricemarket": 0.0000,
            "url": "http://m.guimimall.com/170718164338876176/product.html?id=180201153949759041"
          }, {
            "pid": "180126164947360494",
            "image": "http://images.guimimall.com/_P/201803/100017910911.jpg",
            "productname": "Q+爆水能量沁润面膜",
            "secondname": "【预售】3分钟 瞬息水润焕活新肌",
            "productid": "180126164947360494",
            "stocks": 9989,
            "lockstock": 7,
            "vipprice": 99.0000,
            "pricemarket": 0.0000,
            "url": "http://m.guimimall.com/170718164338876176/product.html?id=180126164947360494"
          }, {
            "pid": "180206142949147350",
            "image": "http://images.guimimall.com/_P/201803/095941468381.jpg",
            "productname": "Q+滋盈能量气泡洁面刷&nbsp;",
            "secondname": "【预售】三合一洁面泡沫 1分钟刷出素颜美 ",
            "productid": "180206142949147350",
            "stocks": 46,
            "lockstock": 0,
            "vipprice": 138.0000,
            "pricemarket": 0.0000,
            "url": "http://m.guimimall.com/170718164338876176/product.html?id=180206142949147350"
          }]
        }, {
          "classid": "180207115743697578",
          "code": "004",
          "name": "BODYの私物",
          "parentid": "0",
          "imagepath": "",
          "prodlist": [{
            "pid": "180206140225810725",
            "image": "http://images.guimimall.com/_P/201803/094226871909.jpg",
            "productname": "闺秘蚕丝卫生巾（夜用型）",
            "secondname": "蚕丝新时代  好像大姨妈没来过",
            "productid": "180206140225810725",
            "stocks": 1892,
            "lockstock": 1,
            "vipprice": 28.0000,
            "pricemarket": 0.0000,
            "url": "http://m.guimimall.com/170718164338876176/product.html?id=180206140225810725"
          }, {
            "pid": "180201142404737486",
            "image": "http://images.guimimall.com/_P/201803/095310611705.jpg",
            "productname": "闺秘蚕丝卫生巾（日用型）",
            "secondname": "一片有营养的卫生巾",
            "productid": "180201142404737486",
            "stocks": 2896,
            "lockstock": 0,
            "vipprice": 39.0000,
            "pricemarket": 0.0000,
            "url": "http://m.guimimall.com/170718164338876176/product.html?id=180201142404737486"
          }, {
            "pid": "180126171427839552",
            "image": "http://images.guimimall.com/_P/201803/095845739382.jpg",
            "productname": "温变石墨烯内裤",
            "secondname": "智能小红点 温变黑科技",
            "productid": "180126171427839552",
            "stocks": 28792,
            "lockstock": 0,
            "vipprice": 59.0000,
            "pricemarket": 0.0000,
            "url": "http://m.guimimall.com/170718164338876176/product.html?id=180126171427839552"
          }]
        }, {
          "classid": "180126155255454937",
          "code": "001",
          "name": "Ladies\\' 私护医生",
          "parentid": "0",
          "imagepath": "",
          "prodlist": [{
            "pid": "180201153135263406",
            "image": "http://images.guimimall.com/_P/201803/094542618934.jpg",
            "productname": "韩室紫草抑菌皂",
            "secondname": "草本纯天然  私处新洗护",
            "productid": "180201153135263406",
            "stocks": 28699,
            "lockstock": 1,
            "vipprice": 69.0000,
            "pricemarket": 0.0000,
            "url": "http://m.guimimall.com/170718164338876176/product.html?id=180201153135263406"
          }, {
            "pid": "180201152604485108",
            "image": "http://images.guimimall.com/_P/201803/095054354646.jpg",
            "productname": "闺秘草本卫生湿巾（5盒装）",
            "secondname": "每一个私密细胞都会感谢你",
            "productid": "180201152604485108",
            "stocks": 649,
            "lockstock": 0,
            "vipprice": 79.0000,
            "pricemarket": 0.0000,
            "url": "http://m.guimimall.com/170718164338876176/product.html?id=180201152604485108"
          }, {
            "pid": "180201151946992029",
            "image": "http://images.guimimall.com/_P/201803/095159837161.jpg",
            "productname": "闺秘紧紧抑菌液（胶囊型）",
            "secondname": "一粒 握紧他用力爱",
            "productid": "180201151946992029",
            "stocks": 9957,
            "lockstock": 0,
            "vipprice": 399.0000,
            "pricemarket": 0.0000,
            "url": "http://m.guimimall.com/170718164338876176/product.html?id=180201151946992029"
          }, {
            "pid": "180201150253090161",
            "image": "http://images.guimimall.com/_P/201803/095248573171.jpg",
            "productname": "韩室粉嫩滋润啫喱",
            "secondname": "真高潮！不用装的初恋体验",
            "productid": "180201150253090161",
            "stocks": 10000,
            "lockstock": 5,
            "vipprice": 98.0000,
            "pricemarket": 0.0000,
            "url": "http://m.guimimall.com/170718164338876176/product.html?id=180201150253090161"
          }, {
            "pid": "180201141945818775",
            "image": "http://images.guimimall.com/_P/201803/095739071102.jpg",
            "productname": "闺秘粉嫩慕斯抑菌液",
            "secondname": "私处做SPA洗出桃花肌",
            "productid": "180201141945818775",
            "stocks": 10759,
            "lockstock": 2,
            "vipprice": 78.0000,
            "pricemarket": 0.0000,
            "url": "http://m.guimimall.com/170718164338876176/product.html?id=180201141945818775"
          }, {
            "pid": "180201135209630112",
            "image": "http://images.guimimall.com/_P/201803/095801606901.jpg",
            "productname": "闺秘重组人源胶原蛋白抑菌凝胶",
            "secondname": "从老干妈到小湿妹",
            "productid": "180201135209630112",
            "stocks": 31700,
            "lockstock": 0,
            "vipprice": 258.0000,
            "pricemarket": 0.0000,
            "url": "http://m.guimimall.com/170718164338876176/product.html?id=180201135209630112"
          }, {
            "pid": "180126171851579203",
            "image": "http://images.guimimall.com/_P/201803/095818541896.jpg",
            "productname": "闺秘生态抑菌凝胶",
            "secondname": "让女人的私处永远18岁",
            "productid": "180126171851579203",
            "stocks": 11840,
            "lockstock": 0,
            "vipprice": 168.0000,
            "pricemarket": 0.0000,
            "url": "http://m.guimimall.com/170718164338876176/product.html?id=180126171851579203"
          }, {
            "pid": "180126170658975978",
            "image": "http://images.guimimall.com/_P/201803/100034472804.jpg",
            "productname": "闺秘雪莲生态护垫",
            "secondname": "天天排毒 妇科病不再来",
            "productid": "180126170658975978",
            "stocks": 10697,
            "lockstock": 0,
            "vipprice": 298.0000,
            "pricemarket": 0.0000,
            "url": "http://m.guimimall.com/170718164338876176/product.html?id=180126170658975978"
          }]
        }],
        "status": 1
      }
      
    data.success = true
    data.status = 1
    //使用mockjs模拟数据
    Mock.mock('/api/data', (req, res) => {
        return data
    })
})
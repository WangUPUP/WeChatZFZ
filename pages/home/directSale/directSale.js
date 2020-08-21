// pages/home/directSale/directSale.js
import * as echarts from '../../../ec-canvas/echarts'

let chart = null;

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
    series: [{
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['40%', '60%'],
      data: [{
        value: 55,
        name: '北京'
      }, {
        value: 20,
        name: '武汉'
      }, {
        value: 10,
        name: '杭州'
      }, {
        value: 20,
        name: '广州'
      }, {
        value: 38,
        name: '上海'
      }]
    }]
  };

  chart.setOption(option);
  return chart;
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    },

    // 按钮组合
    btns : [
      {
        id : 1,
        title : '区域一'
      },{
        id : 2,
        title : '区域二'
      }
    ],
    // 被选中按钮索引
    currentIndex : 0,
    // 展示某个搜索栏
    showArray : [1,0,0,0],
    mengban:0,
    // 选项索引
    selectIndex : 0,
    // 筛选选项
    selectList : [
      {
        id : 1,
        img : '/assets/svg/Bottom.svg',
        title : '地区'
      },
      {
        id : 2,
        img : '/assets/svg/Bottom.svg',
        title : '场所'
      },
      {
        id : 3,
        img : '/assets/svg/Bottom.svg',
        title : '能源'
      },
      {
        id : 4,
        img : '/assets/svg/Bottom.svg',
        title : '更多'
      },
      

      
    ],
    // 地区选项
    regionList :[
      '广东','浙江','江西','湖南','福建','陕西'
    ],
    // 场所选项
    placeList : [
      '商场','广场','集团','能源中心'
    ],
    // 能源选项
    energyList : [
      '水','电','气'
    ],
    // 更多选项
    moreList : [
      '季度节能量','年节能量'
    ]
  
  
  },

  // 顶部按钮选择
  onSelected(e){
    let num = e.currentTarget.dataset.index
    // 更新数据源
    this.setData({
      currentIndex : num
    })
  },
// 筛选区域选中效果
  selectToggle(e){
    let num = e.currentTarget.dataset.index
    this.setData({
      showArray:[0,0,0,0]
    })
    if(num === 0) {
      this.setData({
        showArray:[1,0,0,0]
      })
    } else if (num == 1) {
      this.setData({
        showArray:[0,1,0,0]
      })
    }else if (num == 2) {
      this.setData({
        showArray:[0,0,1,0]
      })
    }else if (num == 3) {
      this.setData({
        showArray:[0,0,0,1]
      })
    };
    this.setData({
      selectIndex : num
    })
} , 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options);
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {   
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
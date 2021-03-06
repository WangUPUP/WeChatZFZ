// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数据
    swiperImg: [{
        img: '../../assets/swiper/swiper1.jpg'
      },
      {
        img: '../../assets/swiper/swiper1.jpg'
      }
    ],
    // 菜单栏数据
    mainMenuList: [{
        img: '../../assets/home/homeIcon/04.png',
        title: '选项一'
      },
      {
        img: '../../assets/home/homeIcon/03.png',
        title: '选项一'
      },
      {
        img: '../../assets/home/homeIcon/02.png',
        title: '选项一'
      },
      {
        img: '../../assets/home/homeIcon/01.png',
        title: '选项一'
      },
      {
        img: '../../assets/home/homeIcon/05.png',
        title: '选项一'
      },
      {
        img: '../../assets/home/homeIcon/03.png',
        title: '选项二'
      },
      {
        img: '../../assets/home/homeIcon/02.png',
        title: '选项三'
      },
      {
        img: '../../assets/home/homeIcon/01.png',
        title: '选项四'
      }
    ]
  },
  gotoPath(e) {
    let num = e.currentTarget.dataset.index
    if (num == 0) {
      wx.navigateTo({
        url: '/pages/home/directSale/directSale.wxml',
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

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
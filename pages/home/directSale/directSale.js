// pages/home/directSale/directSale.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    // 删选选项
    selectList : [
      {
        id : 1,
        img : '/assets/svg/Bottom.svg',
        title : '全部'
      },
      {
        id : 2,
        img : '/assets/svg/Bottom.svg',
        title : '能源'
      },
      {
        id : 3,
        img : '/assets/svg/Bottom.svg',
        title : '场所'
      },
      {
        id : 4,
        img : '/assets/svg/Bottom.svg',
        title : '更多'
      },
      

      
    ],
    // 地区选项
    regionList :[]
  },
  onSelected(e){
    let num = e.currentTarget.dataset.index
    // 更新数据源
    this.setData({
      currentIndex : num
    })
  },

    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
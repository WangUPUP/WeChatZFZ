// pages/demo/demo.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		msg : '',
		id : 11,
		arr : ['1','2','3','4','5']
	},
	handle(e) {
		console.log('按钮绑定的事件');
		console.log(e);		
	},
	handleInput(e){
		console.log(e);
		console.log(e.detail.value);
		
	},
	inputValue(e){
		console.log(e.detail.value);
		this.setData({
			msg : e.detail.value
		})
	},
	btnHandle(e){
		console.log(e);
		console.log(e.target.dataset.info);
		console.log(e.currentTarget.dataset.info);
		
	}
	,
		event(e){
			console.log('eventCilck...');
			console.log('e.target.id是' + e.target.id);
			console.log('e.currentTarget.id是' + e.currentTarget.id);
			
		}
	,
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		wx.startPullDownRefresh({
			success: (res) => {			
			},
		  })
	},
	// 跳转到非 tabbar 页面
	tpNoTabbar(){
		wx.navigateTo({
		  url: '/pages/home/directSale/directSale',
		  success (){
			console.log('跳转非 tabbar 页面成功');
		  }
		})
	  }
	  ,
	  // 跳转到 tabbar 页面
	 toTabbar(){
		 wx.switchTab({
		   url: '/pages/home/home',
		   success(){
			   console.log('跳转 tabar 页面成功');
		   }
		 })
	 },
	//  返回上一级
	 goBack(){
		wx.navigateBack({
		  delta: 1,
		})
	 },
	 // 带参跳转
	 takeParaTo(){
		wx.switchTab({
		  url: '/pages/home/home?username=zhangsan&paw=456',
		  success(){
			console.log('带参跳转');
		  }
		})
	 },
	 // 发起请求
	 sendRequire(){
		wx.request({
		  url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories',
		  method : 	'GET',
		  success(data){
			  console.log('请求发起成功');
			  console.log(data);
			  
		  }
		})
	 }
	 ,

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
		console.log('下拉刷新了');
		
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
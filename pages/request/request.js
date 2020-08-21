// pages/request/request.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},
	// 获取轮播图
	getSwiper(){
		wx.request({
		  url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
		  method : 'GET',
		  success(res) {
			  console.log(res.data);
		  }
		})
	},
	// 获取导航菜单
	getCatitems(){
		wx.request({
		  url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
		  method:'GET',
		  success(res){
			  console.log(res);
		  },
		  fail(req){
			console.log(req);
		  }
		})
	},
	// 获取楼层数据
	getFloor(){
		wx.request({
		  url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',
		  method:'GET',
		  success(res){
			  console.log(res);
		  },
		  fail(req){
			console.log(req);
		  }
		})
	},
	// 获取分类
	getOrders(){
		wx.request({
		  url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories',
		  method : 'GET',
		  success(res){
			console.log(res);
		  },
		  fail(req){
			console.log(req);
		  }
		})
	},
	// 获取列表
	getGoods(){
		wx.request({
		  url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/search',
		  method : 'GET',
		  success(res){
			console.log(res);
		  },
		  fail(req){
			console.log(req);
		  }
		})
	},
	// 获取详情 
		getGoodsDetail(){
			wx.request({
			  url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id=8888',
			  method:'GET',
			  success(res) {
				  console.log(res);
			  },
			  fail(req){
				  console.log(req);
			  }
			})
		},
		// 搜索
		query(){
			wx.request({
			  url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/qsearch?query=创维',
			  method :'GET',
			  success(res){
				  console.log(res);
			  },
			  fail(req){
				  console.log(req);
			  }
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
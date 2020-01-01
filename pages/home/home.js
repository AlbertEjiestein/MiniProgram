// pages/home/home.js
Page({

  /**
   * 2.页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 1.生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;    wx.request({
      url:"http://123.207.32.32:8000/api/w1/recommend",
      success:function(res){
        // console.log(res.data.data.list)
        const data = res.data.data.list;
        _this.setData({
          list:data
        })
      }
    })
  },

  // 3.监听wxml中的事件
  handleGetUserInfo(event){
    console.log(event)
  },
  handleViewClick(){
    console.log('handleViewClick')
  },

  // 4.其它事件
  // 监听页面滚动
  onPageScroll(obj){
    // console.log(obj)
  },
  // 监听到页面滚动到顶部
  onReachBottom(){
    console.log('页面滚动到顶部')
  },
  onPullDownRefresh(){
    console.log('下拉刷新事件')
  }
})
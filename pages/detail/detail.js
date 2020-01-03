// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },

  // 在页面离开时向首页传递参数 
  onUnload: function(){
    // 1.获取home页面对象
    const pages = getCurrentPages();
    const home = pages[pages.length - 2];

    // 2.调用页面对象的setData
    home.setData({
      title: '呵呵呵'
    })
  },

  handleBackHome(){
    wx.navigateBack({
      delta: 1
    })
  }
})
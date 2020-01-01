// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'小程序',
    movies:["大话西游","盗梦空间","星际穿越","少年派"],
    counter:0
  },
  increment(){
    this.setData({
      counter:++this.data.counter
    })
  }
})
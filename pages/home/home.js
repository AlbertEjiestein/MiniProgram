// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nums:[1,2,3,4],
    score:50
  },

  onIncrement(){
    this.setData({
      score: this.data.score += 10
    })
  }
})
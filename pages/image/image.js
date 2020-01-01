// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''
  },

  onChooseImage(){
    wx.chooseImage({
      success:(res) => {
        // 取出路径
        const path = res.tempFilePaths[0];
        // 保存路径
        this.setData({
          imagePath:path
        })
      }
    })
  }
})
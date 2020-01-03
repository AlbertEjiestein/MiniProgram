// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '大个',
      icon: 'success',
      image: '/assets/image/3.PNG',
      duration: 3000,
      mask: true,
      success(){
        console.log('success')
      },
      complete(){
        console.log('complete')
      }
    })
  },

  handleShowModal(){
    wx.showModal({
      title: '提示',
      content: '这是一个模拟弹窗',
      // showCancel: false,
      cancelText: '退出',
      cancelColor: '#f80',
      success(res){
        if(res.confirm){
          console.log('用户点击确定')
        }else if(res.cancel){
          console.log('用户点击取消')
        }
      }
    })
  },

  handleShowLoading(){
    wx.showLoading({
      title: '加载ing',
      mask: true
    })

    setTimeout(() => {
      wx.hideLoading()
    },3000)
  },

  handleShowActionClick(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: '#f00'
    })
  },

  onShareAppMessage(){
    return {
      title: '第一个小程序',
      imageUrl: '/assets/image/3.PNG'
    }
  }
})

// size = "mini"
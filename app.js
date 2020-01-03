//app.js
App({
  globalData: {
    token: null
  },
  onLaunch: function () {
    // 1.先从缓存取出token
    const token = wx.getStorageSync('token');
    // 2.判断token是否有值
    if(token && token.length !== 0){  // 有token,验证是否过期
      this.check_token(token)
    }else{  // 无token，进行登陆操作
      this.login()
    }
  },
  check_token(token){
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        if(!res.data.errCode){
          console.log('token有效')
          this.globalData.token = token;
        }else{
          this.login()
        }
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  login(){
    wx.login({
      success: (res) => {
        const code = res.code;
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            // 1.取出token
            const token = res.data.token;
            // 2.保存token到globalData中
            this.globalData.token = token;
            // 3.本地缓存
            wx.setStorageSync('token', token)
          }
        })
      }
    })
  }
})
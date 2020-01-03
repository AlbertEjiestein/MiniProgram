// pages/home/home.js
import request from '../../service/network.js'

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
    // 1.原生方式发送网络请求
    this.get_data_origin()

    // 2.使用封装的promise
    request({
      url: 'http://123.207.32.32:8000/api/w1/home/data',
      data: {
        type: 'sell',
        page: 1
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  get_data_origin(){
    // 1.带参数请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/api/w1/home/data',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: function(res){
    //     console.log(res)
    //   }
    // })

    // 2.POST请求
    // wx.request({
    //   url: 'https://httpbin.org/post',
    //   data: {
    //     name: 'yaj',
    //     age: '24',
    //     height: 1.86
    //   },
    //   method: 'post',
    //   success: function(res){
    //     console.log(res)
    //   }
    // })
  } 
})
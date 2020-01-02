// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onTouchStart(event){
    console.log(event)
  },

  onTouchMove(){
    console.log('onTouchMove')
  },

  onTouchEnd() {
    console.log('onTouchEnd')
  },

  onTap() {
    console.log('onTap')
  },

  onLongTap() {
    console.log('onLongTap')
  },
})
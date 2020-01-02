// pages/target/target.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onTap(event){
    const data = event.currentTarget.dataset;
    console.log(data)
  },

  onOuterCapture(){
    console.log('onOuterCapture')
  },

  onMiddleCapture() {
    console.log('onMiddleCapture')
  },

  onInnerCapture() {
    console.log('onInnerCapture')
  },

  onOuterBind(){
    console.log('onOuterBind')
  },

  onMiddleBind() {
    console.log('onMiddleBind')
  },

  onInnerBind() {
    console.log('onInnerBind')
  },
})
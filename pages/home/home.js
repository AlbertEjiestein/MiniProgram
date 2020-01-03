// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    counter:0,
    name:'大个',
    age:20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  titleclick(event){
    this.setData({
      currentIndex: event.detail.index
    })
  },

  handleIncrementCpn(event){
    this.setData({
      counter: ++this.data.counter,

      name: event.detail.name,
      age: event.detail.age
    })
  },

  handleIncrement(){
    const my_sel = this.selectComponent('#my-sel');
    counter: my_sel.increment(5)
  }
})
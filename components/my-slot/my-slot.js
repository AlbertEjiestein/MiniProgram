// components/my-slot/my-slot.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    counter: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleIncrement(){
      this.setData({
        counter: ++this.data.counter
      })
    }
  },

  externalClasses: [],

  observers: {
    counter: function(newVal){
      console.log(newVal)
    }
  },

  lifetimes:{
    created(){
      console.log('组件被创建')
    },
    attached(){
      console.log('组件添加到页面')
    },
    ready(){
      console.log('组件被渲染出来')
    },
    detached(){
      console.log('组件被移除')
    }
  },

  pageLifetimes: {
    show(){
      console.log('页面显示出来')
    },
    hide(){
      console.log('页面隐藏起来')
    }
  }
})

// components/my-event/my-event.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type: Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    titleClick(event){
      const index = event.currentTarget.dataset.index;
      this.setData({
        currentIndex: index
      }),
      this.triggerEvent('titleclick',{index},{})
    },

    handleIncrement(){
      this.triggerEvent('increment', { name:'豆腐',age:24},{})
    }
  }
})

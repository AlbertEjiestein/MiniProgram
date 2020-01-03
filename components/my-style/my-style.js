// components/my-style/my-style.js
Component({
  options: {
    styleIsolation: "shared"
  },
  properties: {
    title: {
      type: String,
      value: 'hello',
      observer: function (newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }
  },
  externalClasses: ['title', 'content']
})

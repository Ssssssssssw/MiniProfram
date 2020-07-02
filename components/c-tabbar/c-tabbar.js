// components/c-tabbar/c-tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      list:{
        type: Array,
        value: []
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      count: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
      click(e){
        console.log(e);
        const index = e.currentTarget.dataset.index;
        this.setData({
          count : index
        })
        console.log(index)
        this.triggerEvent("ice",{index,title:this.properties.list[index]},{})
      }
  }
})

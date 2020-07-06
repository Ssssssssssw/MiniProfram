// components/c-slot/c-slot.js
Component({
  options:{
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

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  //  组件中监听生命周期函数
  // 1、监听所在页面中的生命周期
  pageLifetimes:{
      show(){
          console.log( "监听组件所在页面显示出来时" )
      },
      hide(){
          console.log("监听组件所在页面隐藏起来时");
      },
      resize(){console.log("监听页面尺寸的变化")} // 这个一般不会用到
  },
  // 2、监听组件生命周期
  lifetimes:{
    created(){console.log("组件被创建")},
    attached(){console.log("组件被添加到页面中")},
    ready(){console.log("组件被渲染出来")},
    moved(){console.log("组件被移动到节点树另外一个位置")},
    detached(){console.log("组件被移除")}
  }
})

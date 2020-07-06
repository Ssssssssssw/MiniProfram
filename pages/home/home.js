Page({
  data:{
    name:"",
    count: 2,
    array:[
      {
        name: "sun",
        age: 18,
        address: "北京市"
      },
      {
        name: "li",
        age: 28,
        address: "上海市"
      },
      {
        name: "zhao",
        age: 38,
        address: "深圳市"
      }
    ]
  },
  jumpToast(){
      wx.navigateTo({
        url: `/pages/toast/toast?count=${this.data.count}`,
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function(data) {
            console.log(data)
          }
        }
      })
  },
  add(){
    this.setData({
        count: this.data.count+1
    })
  },
  userinfo(event){
      console.log(event);
  }
})
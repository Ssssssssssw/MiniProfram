Page({
  data:{
    name:"sun",
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
  add(){
    this.setData({
        count: this.data.count+1
    })
  }
})
import request from "../../service/network"
Page({
  data:{
      name:"sunshibo",
      age: 18
  },
  onLoad(options){
      console.log(options);
      
  },
  onUnload(){
      console.log(getCurrentPages());
      const pages = getCurrentPages();
      const  home = pages[pages.length-2]
      console.log(home);
      home.setData({
          name:"sunshibo"
      })
      
  },
  // 操作菜单
  showActionSheet(){
    var _this = this
    wx.showActionSheet({
      itemList:["姓名","年龄"],
      itemColor:"	#FF69B4",
      success(res){
          switch(res.tapIndex){
              case 0:
                _this.data.name = "姓名"
              console.log(_this.data.name);
              break;
              case 1:
                _this.data.age = 28;
                console.log(_this.data.age);
              default:
                console.log();
          }
        }
      })
  },
  //  loading提示框
  showLoading(){
    wx.showLoading({
        title:"加载中",
        mask: true,
        success(){
          request({
            url: 'http://httpbin.org/post',
            method: 'post',
            data: {
              name: "孙世博",
              age: 23
            }
          }).then(res => {
            wx.hideLoading()
            setTimeout(()=>{
              console.log(res)
            },1000)
          })
        }
    })
  },
  // 模态框
  showModal() {
    wx.showModal({
      title: "提示",
      content: "确定进入？？？",
      showCancel: true,
      cancelText: "确定取消",
      cancelColor: '#DC143C',
      success(res) {
        if (res.confirm) {
          request({
            url: 'http://httpbin.org/post',
            method: 'post',
            data: {
              name: "孙世博",
              age: 23
            }
          }).then(res => console.log(res))
        }
         if(res.cancel){
          request({
            url: 'http://httpbin.org/post',
            method: 'post',
            data: {
              name: "孙世博",
              age: 23
            }
          }).then(res => console.log(res))
        }
      }
    })
  },
  //  弹窗
  showToast() {
    wx.showToast({
      title: "请求成功",
      duration: 1000,
      mask: true,
      icon: "loading",
      success(res) {
        request({
          url: 'http://httpbin.org/post',
          method: 'post',
          data: {
            name: "孙世博",
            age: 23
          }
        }).then(res => console.log(res))
      },
      fail(err) {
        console.log(err);
      }
    })
  }
})
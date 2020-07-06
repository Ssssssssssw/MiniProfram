// pages/tabbar/tabbar.js
import request from "../../service/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
      index:'',
      title:'流行',
      name:""
  },
  click(e){
      console.log(e)
      this.setData({
          index: e.detail.index,
          title: e.detail.title
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      // this.getData();
      request({
          url: 'http://httpbin.org/post',
          method: 'post',
          data:{
              name:"孙世博",
              age: 23
          }
      }).then(res=>console.log(res))
  },
  getData(){
    var _this = this;
    wx.request({
      url: 'http://httpbin.org/post',
      method:'post',
      data:{
          name:"sun",
          age: 18
      },
      success(res){
          console.log(res)
            var name = JSON.parse(res.data.data).name;
            console.log(name);
            _this.setData({
                name: name
            })
      },
      fail:(err)=>{
            console.log(err)
      }
    })
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
  onShareAppMessage: function (options) {
            console.log(options);
            
  }
})
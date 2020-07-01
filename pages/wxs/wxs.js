// pages/wxs/wxs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      price: 68.65649,
      age: 18,
      time: new Date(),
      list:["kobe","jams","curry"],
      ranking: ""
  },
  clickText(e){
      console.log(e);
      this.setData({
          ranking: e.target.dataset.index
      })
  },
  handlerTouchStart(){
    console.log("开始触摸");
  },
  handlerMove(e){
      console.log("移动",e);
  },
      handlerChilk(e){
          console.log("点击",e);
          
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

      this.setData({
        time: new Date().getTime()
      })
      
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

  }
})
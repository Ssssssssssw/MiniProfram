Page({
  data:{
      imgPath:null
  },
  handlerscroll(e){
      console.log("距离100px",e)
  },
  input(e){
      console.log("输入时",e);
  },
  focus(e){
    console.log("聚焦",e);
  },
  blur(e){
    console.log("失焦",e);
    
  },
  perform(){
    console.log("123");
  },
  pitchPhoto(){
    const _this = this;
    wx.chooseImage({
        success(res){
             console.log(res);
             const path = res.tempFilePaths[0]
             _this.setData({
                imgPath: path
             })
        }
    })
  }
})
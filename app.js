 
 // 注册小程序示例
 App({
   // 生命周期函数
   // 小程序初始化完成时，会执行的生命周期函数
      onLaunch(){
        console.log("小程序初始化完成")
        //异步调用
        wx.getUserInfo({
          success(res){
             console.log(res)
          }
        })
      },
      //小程序界面显示出来执行的生命周期
      onShow( options ){
          console.log("显示出来")
          console.log(options)
          switch(options.scene){
              case 1001:
                break;
          }
      },
      // 小程序界面关闭执行的生命周期
      onHide(){
         console.log("小程序关闭：onhide");
      },
      onErroy(){
        console.log("erroy")
      }
 })
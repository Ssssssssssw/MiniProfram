import request from "./service/network" 
 // 注册小程序示例
const TOKEN = 'token'
 App({
   globalData:{
     token: ''
   },
   // 生命周期函数
   // 小程序初始化完成时，会执行的生命周期函数
      onLaunch(){
          // 1 先token并取出
          const token = wx.getStorageSync(TOKEN);
          console.log(token);
          
          // 2  判断token是否有值
          if( token && token.length !== 0 ){
              console.log('存在token');
              this.check_token(token);
          }else{
              this.login()            
          }        
        
        // console.log("小程序初始化完成")
        // //异步调用
        // wx.getUserInfo({
        //   success(res){
        //      console.log(res)
        //   }
        // })
      },
      check_token(token){
        wx.request({
          url: "http://123.207.32.32:3000/auth",
          method: 'post',
          header:{
              token
          },
          success:(res)=>{
            console.log(res);
            if( !res.data.errorCode ){
                  this.globalData.token = token
            }else{
                this.login();
            }
          }
        })
      },
                  login(){
                    console.log('登录');
                    var _this = this
                    wx.login({
                      // code只有五分钟有效期
                      success(res){
                          console.log(res);
                          //  1 获取code
                          const code = res.code;
                          // 向服务器发送请求
                          request({
                            url:"http://123.207.32.32:3000/login",
                            method:"post",
                            data:{
                              code
                            },
                          }).then(res=>{
                                    const token = res.data.token;
                                    _this.globalData.token = token;
                                    //  token 存入本地
                                    wx.setStorageSync(TOKEN , token)
                                  })
                      }
                    })
                  },
      // check_token(token){
      //   console.log('验证token');
      //       request({
      //         url: "http://123.207.32.32:3000/auth",
      //         method: 'post',
      //         header:{
      //             token: token
      //         }
      //       }).then((res)=>{
      //           console.log(res);
      //           if( !res.data.errorCode ){
      //                 this.globalData.token = token
      //           }else{
      //               this.login();
      //           }
      //       })
      // },
      //小程序界面显示出来执行的生命周期
      onShow( options ){
          console.log("显示出来")
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
// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.push(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    allLogin(this);
    async function allLogin(app) {
      var wxCode = await wxLogin()
      var userID = await codeLogin(wxCode)
      app.globalData.userID = userID
      console.log("allLogin.userID", userID)
      var wxSetting = await wxGetSetting()
      if (wxSetting.authSetting['scope.userInfo']) {
        var wxUserInfoRes = await wxGetUserInfoRes()
        console.log("allLogin.userInfo", wxUserInfoRes.userInfo)
        app.globalData.userInfo = wxUserInfoRes.userInfo;
        if (app.userInfoReadyCallback) {
          app.userInfoReadyCallback(wxUserInfoRes)
        }
        await uploadUserInfo(userID, wxUserInfoRes.userInfo);
      }
    }
    function wxLogin() {
      // 执行微信登录，返回一个微信code
      return new Promise((resolve, reject) => {
        wx.login({
          success: res => resolve(res.code),
          fail: res => reject(res)
        })
      });
    };
    function wxGetSetting() {
      return new Promise((resolve) => {
        wx.getSetting({
          success: res => resolve(res)
        });
      });
    }
    function wxGetUserInfoRes() {
      return new Promise((resolve) => {
        wx.getUserInfo({
          success: res => resolve(res)
        });
      });
    }
    // codeLogin 将微信code上传到后台服务器，从而获得后台userID。
    function codeLogin(code) {
      return new Promise((resolve, reject) => {
        wx.request({
          url: "https://api.seedjyh.com/friday2000/login",
          method: "POST",
          dataType: "json",
          data: {
            "code": code
          },
          success: res => resolve(res.data.userID),
          fail: res => reject(res)
        })
      });
    }
    // uploadUserInfo 将微信用户信息上传到后台服务器
    function uploadUserInfo(userID, userInfo) {
      return new Promise((resolve, reject) => {
        wx.request({
          url: "https://api.seedjyh.com/friday2000/users/" + userID.toString() + "/userinfo",
          method: "PUT",
          dataType: "json",
          data: {
            "userInfo": userInfo
          },
          success: res => resolve(res),
          fail: res => reject(res)
        })
      })
    };
  },
  globalData: {
    userInfo: null,
    userID: -1
  }
})
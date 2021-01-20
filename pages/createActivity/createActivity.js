// pages/activity/createActivity.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        startTime: "", // YYYY-MM-DD
        comment: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var now = new Date()
        this.setData({
            startTime: now.getFullYear() + "-" + (now.getMonth() + 1).toString().padStart(2, '0') + "-" + now.getDate().toString().padStart(2, '0')
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
    onShareAppMessage: function () {

    },
    bindDateChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        startTime: e.detail.value
      })
    },
    bindCommentInput: function(e) {
        this.setData({
            comment: e.detail.value
        });
    },
    clickCreateActivity: function() {
        console.log("click create activity:", this.data.startTime, this.data.comment);
        var that = this
        wx.request({
            url: "https://api.seedjyh.com/friday2000/activities/add",
            method: "POST",
            dataType: "json",
            data: {
              "userID": getApp().globalData.userID,
              "startTime": that.data.startTime,
              "comment": that.data.comment
            },
            success: res => {
                var activityID = res.data.activityID
                wx.showToast({
                    title: '创建成功',
                    success: res => {
                        setTimeout(res => {
                            wx.redirectTo({
                                url: '../activity/activity?id=' + activityID.toString(),
                            })
                        }, 1000)
                    }
                });
                
            },
            fail: res => {wx.showToast({
              title: '创建失败',
            })}
        })
    },
})
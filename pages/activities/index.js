// pages/activities/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        activityList: [{
            leagueName: "周五晚八点",
            startTime: "2020-1-21 17:35:57",
            enrollState: 1
        }, {
            leagueName: "校队合练",
            startTime: "2020-1-21 17:40:11",
            enrollState: 0
        }, {
            leagueName: "红衣军练习赛",
            startTime: "2020-1-21 17:40:17",
            enrollState: -1
        }, {
            leagueName: "周五晚八点2",
            startTime: "2020-1-21 17:35:57",
            enrollState: 1
        }, {
            leagueName: "校队合练2",
            startTime: "2020-1-21 17:40:11",
            enrollState: 1
        }, {
            leagueName: "红衣军练习赛2",
            startTime: "2020-1-21 17:40:17",
            enrollState: -1
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var query = {
            state: options.state,
            leagueId: options.league_id
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})
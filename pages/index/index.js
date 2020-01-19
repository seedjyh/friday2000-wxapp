Component({
    pageLifetimes: {
        show() {
            console.log("SHOW index/index");
            this.getTabBar().setData({nowIndex:0});
        }
    },
    methods: {
        goToRecentEvents() {
            wx.navigateTo({
                url: '/pages/events/index',
            })
        },
        goToMyLeagues() {
            wx.navigateTo({
                url: '/pages/leagues/index',
            })
        }
    }
})
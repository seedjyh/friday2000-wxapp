Component({
    pageLifetimes: {
        show() {
            console.log("SHOW index/index");
            this.getTabBar().setData({nowIndex:0});
        }
    }
})
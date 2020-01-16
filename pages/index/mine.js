Component({
    pageLifetimes: {
        show() {
            console.log("SHOW index/mine");
            this.getTabBar().setData({ nowIndex: 1 });
        }
    }
})
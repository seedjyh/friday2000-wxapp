// custom-tab-bar/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        nowIndex: 0, /* 用于控制当前页面的当前tab在list里的下标 */
        baseColor: "grey",
        selectedColor: "red",
        tabList: [
            /* 这里的数据是为了在wxml里用wx:for */
            {
                clickPagePath: "/pages/index/index",
                tabText: "首页",
            },
            {
                clickPagePath: "/pages/index/mine",
                tabText: "我的",
            }
        ],
    },
    attached() {

    },
    /**
     * 组件的方法列表
     */
    methods: {
        clickTab(e) {
            const data = e.currentTarget.dataset
            console.log("data:", data);
            wx.switchTab({ url: data.nowPath })
        }
    }
})

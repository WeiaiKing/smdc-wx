// components/service-item/service-item.js
Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        serviceItem: Object
    },
    data: {
        showTip: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onShowTip() {
            this.setData({
                showTip: true
            })
        },
        onCloseTip() {
            this.setData({
                showTip: false
            })
        }
    }
})
Page({
    data: {
        cancel: false,
        searchContain: '',
        items: [{
                id: 1,
                text: '热销精选',
            },
            {
                id: 2,
                text: '热卖主食',
            },
            {
                id: 3,
                text: '倾心饮品',
            },
            {
                id: 4,
                text: '小时精选',
            },
            {
                id: 5,
                text: '加调味料',
            },
            {
                id: 6,
                text: '套餐组合',
            },
        ],
        menu: [
            [{
                    name: '热销精选1',
                    id: 1,
                    img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575456169746&di=82f9871aadeaccea68815add1746095f&imgtype=0&src=http%3A%2F%2Fpic120.huitu.com%2Fres%2F20190513%2F1926724_20190513144925126060_1.jpg',
                    price: 200,
                    desc: '北海道银丝鲜虾；约100g',
                    ifSpecs: true,
                    specs: [{
                            name: '规格A',
                            type: [
                                '不辣', '微辣', '中辣', '重辣', '特辣', '变态辣',
                            ]
                        },
                        {
                            name: '规格B',
                            type: [
                                '不辣', '微辣', '中辣', '重辣', '特辣', '变态辣',
                            ]
                        },
                    ]
                },
                {
                    name: '热销精选2',
                    id: 2,
                    img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575456169746&di=82f9871aadeaccea68815add1746095f&imgtype=0&src=http%3A%2F%2Fpic120.huitu.com%2Fres%2F20190513%2F1926724_20190513144925126060_1.jpg',
                    price: 150,
                    desc: '北海道银丝鲜虾；约100g',
                    ifSpecs: false,
                },
                {
                    name: '热销精选3',
                    id: 11,
                    img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575456169746&di=82f9871aadeaccea68815add1746095f&imgtype=0&src=http%3A%2F%2Fpic120.huitu.com%2Fres%2F20190513%2F1926724_20190513144925126060_1.jpg',
                    price: 150,
                    desc: '北海道银丝鲜虾；约100g',
                    ifSpecs: false,
                },
                {
                    name: '热销精选4',
                    id: 12,
                    img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575456169746&di=82f9871aadeaccea68815add1746095f&imgtype=0&src=http%3A%2F%2Fpic120.huitu.com%2Fres%2F20190513%2F1926724_20190513144925126060_1.jpg',
                    price: 150,
                    desc: '北海道银丝鲜虾；约100g',
                    ifSpecs: false,
                },
            ],
            [{
                    name: '热卖主食1',
                    id: 3,
                    img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575456169746&di=82f9871aadeaccea68815add1746095f&imgtype=0&src=http%3A%2F%2Fpic120.huitu.com%2Fres%2F20190513%2F1926724_20190513144925126060_1.jpg',
                    price: 200,
                    desc: '北海道银丝鲜虾；约100g',
                    ifSpecs: false,
                },

            ],
            [{
                    name: '倾心饮品1',
                    id: 5,
                    img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575456169746&di=82f9871aadeaccea68815add1746095f&imgtype=0&src=http%3A%2F%2Fpic120.huitu.com%2Fres%2F20190513%2F1926724_20190513144925126060_1.jpg',
                    price: 150,
                    desc: '北海道银丝鲜虾；约100g',
                    ifSpecs: false,
                },
                {
                    name: '倾心饮品2',
                    id: 6,
                    img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575456169746&di=82f9871aadeaccea68815add1746095f&imgtype=0&src=http%3A%2F%2Fpic120.huitu.com%2Fres%2F20190513%2F1926724_20190513144925126060_1.jpg',
                    price: 150,
                    desc: '北海道银丝鲜虾；约100g',
                    ifSpecs: false,
                },

            ],
            [{
                    name: '小时精选1',
                    id: 7,
                    img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575456169746&di=82f9871aadeaccea68815add1746095f&imgtype=0&src=http%3A%2F%2Fpic120.huitu.com%2Fres%2F20190513%2F1926724_20190513144925126060_1.jpg',
                    price: 200,
                    desc: '北海道银丝鲜虾；约100g',
                    ifSpecs: true,
                    specs: [{
                            name: '规格A',
                            type: [
                                '不辣', '微辣', '中辣', '重辣', '特辣', '变态辣',
                            ]
                        },
                        {
                            name: '规格B',
                            type: [
                                '不辣', '微辣', '中辣', '重辣', '特辣', '变态辣',
                            ]
                        },
                    ]
                },
                {
                    name: '小时精选2',
                    id: 8,
                    img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575456169746&di=82f9871aadeaccea68815add1746095f&imgtype=0&src=http%3A%2F%2Fpic120.huitu.com%2Fres%2F20190513%2F1926724_20190513144925126060_1.jpg',
                    price: 150,
                    desc: '北海道银丝鲜虾；约100g',
                    ifSpecs: false,
                },
            ],
            [],
            [

                {
                    name: '套餐组合1',
                    id: 9,
                    img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575456169746&di=82f9871aadeaccea68815add1746095f&imgtype=0&src=http%3A%2F%2Fpic120.huitu.com%2Fres%2F20190513%2F1926724_20190513144925126060_1.jpg',
                    price: 200,
                    desc: '北海道银丝鲜虾；约100g',
                    ifSpecs: true,
                    specs: [{
                        name: '规格A',
                        type: [
                            '不辣', '微辣', '中辣', '重辣', '特辣', '变态辣',
                        ]
                    }, ]
                },
                {
                    name: '套餐组合2',
                    id: 10,
                    img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575456169746&di=82f9871aadeaccea68815add1746095f&imgtype=0&src=http%3A%2F%2Fpic120.huitu.com%2Fres%2F20190513%2F1926724_20190513144925126060_1.jpg',
                    price: 150,
                    desc: '北海道银丝鲜虾；约100g',
                    ifSpecs: false,
                },
            ],
        ],

    },
    // 呼叫服务
    service() {
        wx.navigateTo({
            url: '/pages/service/service',
        })
    },
    lookBill() {
        wx.navigateTo({
            url: '/pages/bill/bill',
        })
    },
    // 搜索框点击
    bindInput(e) {
        this.setData({
            searchContain: e.detail.value
        })
    },
    // 获取焦点
    bindfocus() {
        this.setData({
            cancel: true
        })
    },
    // 搜索
    search() {
        console.log('todo:搜索')
    },
    // 搜索 取消
    closeSearch() {
        this.setData({
            cancel: !this.data.cancel
        })
    },
    onLoad: function (options) {

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

    }
})
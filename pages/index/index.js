Page({
  data: {
    active: 0
  },
  // 选择数字
  selectNumber(e) {
    this.setData({
      active: e.currentTarget.dataset.idx
    })
  },
  onLoad() {

  },

})
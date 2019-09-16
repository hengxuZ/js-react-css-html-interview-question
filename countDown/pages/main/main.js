//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    num: 100,
    step: null,
    time: null,
    stepTimer: null,
  },
  stepInterval: function () {
    // 设置倒计时 定时器
    var n = this.data.num / 2
    this.stepTimer = setInterval(() => {
      if (this.data.num >= 0) {
        this.data.step = this.data.num / n;
        // 绘制彩色圆环进度条
        this.circle.drawCircle('circle_draw', 40, 4, this.data.step)
        if ((/(^[1-9]\d*$)/.test(this.data.num / 10))) {
          // 当时间为整数秒的时候 改变时间
          this.setData({
            time: this.data.num / 10
          });
        }
        this.data.num--;
      } else {
        this.setData({
          time: 0
        });
        clearInterval(this.stepTimer);
      }
    }, 100)
  },
  changeTime: function () {
    // 先清除定时器
    clearInterval(this.stepTimer);
    // 计数器 还原到100
    this.setData({
      num: 100
    });
    // 重新开启倒计时
    this.stepInterval()
    // 触发自定义组件事件
    this._runEvent()
  },
  onLoad: function () {
  },
  onReady: function () {
    /*倒计时*/
    // 获得circle组件
    this.circle = this.selectComponent("#circle");
    // 绘制背景圆环
    this.circle.drawCircleBg('circle_bg', 40, 4)
    // 绘制彩色圆环
    this.stepInterval()
  },

  _runEvent() {
    console.log(1111)
  },
})

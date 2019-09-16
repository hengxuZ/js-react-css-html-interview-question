//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    txt: "正在匹配中...",
    count: 0,//计数器，初始值为0
    maxCount: 100, // 绘制一个圆环所需的步骤 
    countTimer: null,//定时器，初始值为null
  },
  countInterval: function () {
    // 设置倒计时 定时器 假设每隔100毫秒 count递增+1，当 count递增到两倍maxCount的时候刚好是一个圆环（ step 从0到2为一周），然后改变txt值并且清除定时器
    this.countTimer = setInterval(() => {
      if (this.data.count <= 2 * this.data.maxCount) {
        // 绘制彩色圆环进度条
        this.circle1.drawCircle('circle_draw1', 100, 8, this.data.count / this.data.maxCount)
        this.data.count++;
      } else {
        this.setData({
          txt: "匹配成功"
        });
        clearInterval(this.countTimer);
      }
    }, 100)
  },
  onReady: function () {
    // 获得circle组件
    this.circle1 = this.selectComponent("#circle1");
    // 绘制背景圆环
    this.circle1.drawCircleBg('circle_bg1', 100, 8)
    // 绘制彩色圆环 
    // this.circle.drawCircle('circle_draw1', 100, 8, 2);  
    this.countInterval()
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

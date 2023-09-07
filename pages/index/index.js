const app = getApp();

Page({
  data: {
    systemInfo: wx.getSystemInfoSync()
  },
  onLoad() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ["shareAppMessage", "shareTimeline"]
    });
  },
  onShareAppMessage() {
    return {
      title: 'WELCOME TO OUR WEDDING',
      path: '/pages/index/index',
      imageUrl: '../../images/share-message.png'
    };
  },
  onShareTimeline() {
    return {
      title: 'WELCOME TO OUR WEDDING',
      imageUrl: '../../images/share-timeline.png'
    };
  }
});
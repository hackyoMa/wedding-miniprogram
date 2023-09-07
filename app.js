App({
  onLaunch() {
    wx.setInnerAudioOption({
      obeyMuteSwitch: false
    });
    const innerAudioContext = wx.createInnerAudioContext({
      useWebAudioImplement: false
    });
    innerAudioContext.src = "https://static.hackyo.cn/gm-wedding-bg-music.mp3";
    innerAudioContext.loop = true;
    innerAudioContext.autoplay = true;
  },
  globalData: {}
});
Component({
  properties: {},
  data: {},
  methods: {
    openLocation() {
      wx.openLocation({
        latitude: 34.65515,
        longitude: 119.23791,
        scale: 14,
        name: "花果山酒店",
        address: "连云港市海州区花果山大道98号"
      });
    }
  }
});
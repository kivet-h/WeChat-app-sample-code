export default {
  pages: [
    // tabbar - 首页
    'pages/Home/index',
    // tabbar - 问题列表
    'pages/List/index',

    // 页面返回向前一页面传值，前一页面
    'pages/PageBackWithParams/index',
    // 页面返回向前一页面传值，后一页面
    'pages/PageBackWithParams/PageBackWithParamsB/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#16b351',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  permission: {
    'scope.userLocation': {
      desc: '需要授权小程序获取位置信息权限',
    },
  },
  tabBar: {
    color: '#666666',
    selectedColor: '#16B351',
    list: [
      {
        text: '首页',
        pagePath: 'pages/Home/index',
        iconPath: './assets/tabbar/icon_home_nor.png',
        selectedIconPath: './assets/tabbar/icon_home_sel.png',
      },
      {
        text: '问题列表',
        pagePath: 'pages/List/index',
        iconPath: './assets/tabbar/icon_mine_nor.png',
        selectedIconPath: './assets/tabbar/icon_mine_sel.png',
      },
    ],
  },
};

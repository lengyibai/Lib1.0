module.exports = {
  title: "冷弋白", //显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: "Vue2轻量级组件库", //meta 中的描述文字，用于SEO
  base: "/lib-components/",
  dest: "./dist",
  markdown: {},
  serviceWorker: true,
  //注入到当前页面的 HTML <head> 中的标签
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/lyb.png",
      },
    ],
  ],
  configureWebpack: {
    node: {
      global: true,
    },
  },
  plugins: [
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["wanko"],
        clean: true,
        messages: {
          welcome: "我是lookroot欢迎你的关注 ",
          home: "心里的花，我想要带你回家。",
          theme: "好吧，希望你能喜欢我的其他小伙伴。",
          close: "再见哦",
        },
        width: 240,
        height: 352,
        modelStyle: {
          right: "-45px",
          bottom: "-95px",
          opacity: "0.9",
        },
      },
    ],
    ["copy-code1", { hint: "复制成功！" }],
  ],
  themeConfig: {
    smoothScroll: true,
    logo: "/lyb.png",
    lastUpdated: "最后修改时间",
    nav: [
      /* {
        text: "分类",
        items: [
          {
            text: "其他功能",
            ariaLabel: "功能菜单",
            items: [
              {
                text: "自用组件库",
                link: "/Components/base/introduce",
              },
              {
                text: "自定义指令",
                link: "/Directives/base/start",
              },
              {
                text: "JS函数库",
                link: "/Functions/ordinary/type.html",
              },
            ],
          },
        ],
      }, */

      {
        text: "自用组件库",
        link: "/Components/base/introduce",
      },
      {
        text: "自定义指令库",
        link: "/Directives/base/start",
      },
      {
        text: "JS函数库",
        link: "/Functions/ordinary/type",
      },
      {
        text: "Css样式库",
        link: "/Styles/cursor",
      },
      {
        text: "Github",
        link: "https://github.com/lengyibai/Lib-components",
      },
    ],
    sidebar: {
      "/Components/": [
        {
          title: "开发指南",
          collapsable: false,
          children: [
            ["base/introduce", "介绍"],
            ["base/start", "快速开始"],
          ],
        },
        {
          title: "静态组件",
          collapsable: false,
          children: [
            ["static/Icon", "图标"],
            ["static/Svg", "SVG变色图标"],
            ["static/CommitBtn", "提交按钮"],
            ["static/UpdateBtn", "更新按钮"],
            ["static/DeleteBtn", "删除按钮"],
            ["static/GridLayout", "Grid特色布局"],
            ["static/GridNumber", "Grid数字模板布局"],
            ["static/GridLetter", "Grid字母模板布局"],
            ["static/FullScroll", "全屏滚动"],
            ["static/Range", "滑动选择器"],
            ["static/CircularProgress", "环形进度条"],
            ["static/Video", "视频播放器"],
            ["static/MaskClose", "顶部关闭蒙版"],
            ["static/FlipBox", "卡片翻转"],
            ["static/Mask", "蒙版"],
            ["static/Loading", "loading"],
            ["static/Iframe", "iframe"],
            ["static/QrCode", "生成二维码"],
            ["static/Scroll", "移动端滚动插件"],
            ["static/Swiper", "Swiper轮播图"],
            ["static/Echarts", "Echarts图表"],
          ],
        },
        {
          title: "动态组件",
          collapsable: false,
          children: [
            ["dynamic/DragSort", "拖拽排序"],
            ["dynamic/ScrollInto", "滚动入场动画"],
            ["dynamic/ScrollFollow", "滚动跟随动画"],
            ["dynamic/PdrPul", "上拉加载下拉刷新"],
            ["dynamic/UploadFile", "文件上传"],
            ["dynamic/UploadImg", "图片上传"],
            ["dynamic/Table", "表格"],
            ["dynamic/RichText", "富文本编辑器"],
            ["dynamic/ValidationCountdown", "获取验证码按钮"],
            ["dynamic/SelectAddress", "省市区"],
          ],
        },
      ],
    },
  },
};

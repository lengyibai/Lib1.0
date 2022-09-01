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
                link: "/Function/ordinary/type.html",
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
        text: "自定义指令",
        link: "/Directives/base/start",
      },
      {
        text: "JS函数库",
        link: "/Function/ordinary/type.html",
      },
      {
        text: "Github",
        link: "https://github.com/lengyibai/Lib-components",
      },
    ],
    sidebar: {
      "/Function/": [
        {
          title: "基础",
          collapsable: false,
          children: [
            ["ordinary/type", "返回数据类型"],
            ["ordinary/isType", "判断数据类型"],
            ["ordinary/Full", "控制全屏显示"],
            ["ordinary/random", "随机数"],
            ["ordinary/strDelRep", "字符串去重"],
            ["ordinary/arrDelRep", "数组深度去重"],
            ["ordinary/objDelRep", "对象深度去重"],
            ["ordinary/chromeV", "获取浏览器谷歌内核版本"],
          ],
        },
        {
          title: "丰富",
          collapsable: false,
          children: [
            ["custom/debounce", "防抖"],
            ["custom/throttle", "节流"],
            ["custom/fmtNum", "数字每三位加逗号"],
            ["custom/copy", "复制到剪切板"],
            ["custom/fmtTime", "日期格式化"],
            ["custom/timeGreet", "根据时间段问候"],
            ["custom/getCountTime", "记录已过去时间或倒计时"],
            ["custom/pinyin", "中文转拼音"],
            ["custom/search", "正则搜索"],
            ["custom/urlFileType", "判断是否为指定类型的文件链接"],
            ["custom/repStr", "全局替换指定字符串"],
            ["custom/getFileName", "获取文件名"],
            ["custom/getFileSuf", "获取文件后缀名"],
            ["custom/typeSort", "排序"],
            ["custom/fmtByte", "字节格式化"],
            ["custom/fmtSec", "秒数格式化"],
            ["custom/potEoPct", "小数、百分比互转"],
            ["custom/imageOptimizer", "图片压缩"],
            ["custom/frameInterval", "requestAnimationFrame计时器"],
            ["custom/objToExc", "对象转Excel"],
            ["custom/excToObj", "Excel转对象"],
            ["custom/getPathParams", "获取地址栏参数"],
            ["custom/deepMearge", "对象深度合并"],
          ],
        },
      ],
    },
  },
};

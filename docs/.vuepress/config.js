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
        width: 240,
        height: 352,
        modelStyle: {
          right: "-45px",
          bottom: "-95px",
          opacity: "0.9",
        },
      },
    ],
    ["copy-code1", {
      hint: "复制成功！"
    }],
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
        text: "自定义指令库",
        link: "/Directives/base/start",
      },
      {
        text: "JS函数库",
        link: "/Functions/ordinary/type",
      },
      {
        text: "CSS样式库",
        link: "/Styles/textGradient",
      },
      {
        text: "Vue动画库",
        link: "/Animates/TV",
      },
      {
        text: "Github",
        link: "https://github.com/lengyibai/Lib-components",
      },
    ],
    sidebar: {
      "/Components/": [{
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
            ["statics/Icon", "图标"],
            ["statics/Svg", "SVG变色图标"],
            ["statics/CommitBtn", "提交按钮"],
            ["statics/UpdateBtn", "更新按钮"],
            ["statics/DeleteBtn", "删除按钮"],
            ["statics/GridLayout", "Grid特色布局"],
            ["statics/GridNumber", "Grid数字模板布局"],
            ["statics/GridLetter", "Grid字母模板布局"],
            ["statics/FullScroll", "全屏滚动"],
            ["statics/Range", "滑动选择器"],
            ["statics/CircularProgress", "环形进度条"],
            ["statics/Video", "视频播放器"],
            ["statics/MaskClose", "顶部关闭蒙版"],
            ["statics/FlipBox", "卡片翻转"],
            ["statics/Mask", "蒙版"],
            ["statics/Loading", "loading"],
            ["statics/Iframe", "iframe"],
            ["statics/QrCode", "生成二维码"],
            ["statics/Scroll", "移动端滚动插件"],
            ["statics/Swiper", "Swiper轮播图"],
            ["statics/Echarts", "Echarts图表"],
          ],
        },
        {
          title: "动态组件",
          collapsable: false,
          children: [
            ["dynamics/DragSort", "拖拽排序"],
            ["dynamics/ScrollInto", "滚动入场动画"],
            ["dynamics/ScrollFollow", "滚动跟随动画"],
            ["dynamics/PdrPul", "上拉加载下拉刷新"],
            ["dynamics/UploadFile", "文件上传"],
            ["dynamics/UploadImg", "图片上传"],
            ["dynamics/Table", "表格"],
            ["dynamics/RichText", "富文本编辑器"],
            ["dynamics/ValidationCountdown", "获取验证码按钮"],
            ["dynamics/SelectAddress", "省市区"],
          ],
        },
      ],
      "/Functions/": [{
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
      "/Directives/": [{
          title: "开发指南",
          collapsable: false,
          children: [
            ["base/start", "快速开始"]
          ],
        },
        {
          title: "自定义指令",
          collapsable: false,
          children: [
            ["WaveDiffuse", "水波扩散"],
            ["TextHoverColor", "文字悬浮变色"],
            ["TypewriterSingle", "打字机(单行)"],
            ["TypewriterMultiple", "打字机(多行)"],
            ["Particle", "粒子效果"],
            ["SnowFalling", "雪花飘落"],
            ["ParallaxVideo", "视频视差背景"],
            ["ParallaxImg", "图片视差背景"],
            ["SweepLight", "卡片扫光"],
            ["DownDrag", "按下拖动"],
            ["MaskGradient", "渐变蒙版"],
            ["TableLayout", "表格经典布局"],
            ["DragFile", "文件拖拽解析"],
            ["ViewImg", "查看图片"],
          ],
        },
      ],
      "/Styles/": [{
        title: "基础",
        collapsable: false,
        children: [
          ["textGradient", "文字渐变"],
          ["cursor", "鼠标样式"],
          ["ellipsis", "文字溢出省略号"],
        ],
      }, ],
      "/Animates/": [{
        title: "基础",
        collapsable: false,
        children: [
          ["TV", "电视"],
          ["Round", "圆"],
          ["Burqas", "掀"],
          ["Fold", "折"],
          ["Deploy", "展"],
          ["Spin", "旋"],
        ],
      }],
    },
  },
};
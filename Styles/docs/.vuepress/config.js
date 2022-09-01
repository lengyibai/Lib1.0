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
      "/Styles/": [
        {
          title: "基础",
          collapsable: false,
          children: [
            ["cursor", "鼠标样式"],
            ["ellipsis", "文字溢出省略号"],
          ],
        },
      ],
    },
  },
};

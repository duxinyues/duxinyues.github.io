// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '读心悦',
  tagline: '记录学习，让每天过的慢一点。',
  url: 'https://duxinyues.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.jpg',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'duxinyues', // Usually your GitHub org/user name.
  projectName: 'duxinyues', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'second-blog',
        blogSidebarTitle: '近期随笔',
        blogTitle: '记录生活',
        routeBasePath: 'reading',
        path: './reading',
      },
    ]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/duxinyues/docusaurus/blob/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,

        },
        blog: {
          blogTitle: '博客',
          blogSidebarTitle: '全部博文',
          editUrl:
            'https://github.com/duxinyues/docusaurus/blob/main',
          postsPerPage: 5,
          showReadingTime: true,
          readingTime: ({ content, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 100 } }),
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  scripts: [
    {
      src:
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3022505615683714',
      defer: true,
      crossorigin: "anonymous"
    },
    {
      src:
        'https://hm.baidu.com/hm.js?50b9e8e9a502f012d28415b01c086e3d',
      defer: true,
      crossorigin: "anonymous"
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content: '⭐️ 如果这个网站能帮助到你，欢迎给一个star支持作者  <a target="_blank" rel="noopener noreferrer" href="https://github.com/duxinyues/docusaurus">GitHub</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      metadata: [{ name: "baidu-site-verification", content: "codeva-72M8DxG1za" }, {
        name: "keywords",
        content:
          "前端, react, javascript, css, react, vue, typescript, 博客，阅读，悦读,读心悦",
      },],
      algolia: {
        // Algolia 提供的应用 ID
        appId: 'OR7KJFEBVO',
        //  公开 API 密钥：提交它没有危险
        apiKey: '777c8a624308b01b28c2167c8fc40bd9',
        indexName: 'dx',
        contextualSearch: true,
      },
      navbar: {
        title: '读心悦',
        logo: {
          alt: '读心悦',
          src: 'img/logo.jpg',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            type: "dropdown",
            position: 'left',
            label: '文档',
            items: [
              {
                type: "doc",
                label: "React源码",
                docId: 'react/react',
              },
            ],
          },
          {
            to: '/blog',
            label: '博客',
            position: 'left'
          },
          {
            to: '/reading',
            label: '记录生活',
            position: 'left',
          },
          {
            href: 'https://github.com/duxinyues/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     // {
      //     //   title: 'Docs',
      //     //   items: [
      //     //     {
      //     //       label: 'Tutorial',
      //     //       to: '/docs/intro',
      //     //     },
      //     //   ],
      //     // },
      //     // {
      //     //   title: 'Community',
      //     //   items: [
      //     //     {
      //     //       label: 'Stack Overflow',
      //     //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //     //     },
      //     //     {
      //     //       label: 'Discord',
      //     //       href: 'https://discordapp.com/invite/docusaurus',
      //     //     },
      //     //     {
      //     //       label: 'Twitter',
      //     //       href: 'https://twitter.com/docusaurus',
      //     //     },
      //     //   ],
      //     // },
      //     // {
      //     //   title: 'More',
      //     //   items: [
      //     //     {
      //     //       label: 'Blog',
      //     //       to: '/blog',
      //     //     },
      //     //     {
      //     //       label: 'GitHub',
      //     //       href: 'https://github.com/duxinyues/docusaurus',
      //     //     },
      //     //   ],
      //     // },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} 读心悦, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

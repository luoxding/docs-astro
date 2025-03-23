// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import expressiveCode from "astro-expressive-code";
import remarkMermaid from 'remark-mermaidjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://luoxingding.com/docs',
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkMermaid],
  },
  integrations: [
    expressiveCode(),
    mdx(),
    starlight({
      title: '个人知识库',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: '笔记指南',
          collapsed: false,
          items: [
            { label: '笔记索引', slug: 'guide' },
            { label: '自托管站点', link: '/site/' },
          ],
        },
        {
          label: '系统配置',
          collapsed: true,
          autogenerate: { directory: 'system' },
        },
        {
          label: '桌面环境',
          collapsed: true,
          autogenerate: { directory: 'desktop' },
        },
        {
          label: '工具应用',
          collapsed: true,
          autogenerate: { directory: 'tools' },
        },
        {
          label: '网站和前端框架',
          collapsed: true,
          autogenerate: { directory: 'web' },
        },
        {
          label: '服务管理',
          collapsed: true,
          autogenerate: { directory: 'services' },
        },
        {
          label: '个人项目和配置',
          collapsed: true,
          autogenerate: { directory: 'personal' },
        },
        {
          label: '其它资料',
          collapsed: true,
          autogenerate: { directory: 'other' },
        },
      ],
      favicon: 'src/assets/bird.png',
      expressiveCode: {
        themes: ['dracula', 'solarized-light'],
        shiki: {
          langs: [],
        },
      },
    }),
  ],
});
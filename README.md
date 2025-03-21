---
title: "README"
date: "2025-02-13 22:08:51"
slug: "readme"
---

# README

README /slug: index

统一规范的头文件信息

根目录创建一个脚本，包含但不限于以下内容：有选项总比写makefile好些
	- 同步数据，即将obsidian目录与本项目docs目录同步，以后改obsidian即可
	- 启动
	- 构建
	- 同步内容到服务器
	- 同步到github
	- 清理
	- etc...
	- 备份 [ding@ArchLinux astro]$ tar -zcvf wiki_$(date +%F).tar.gz wiki


# 部署到服务器

## 歌华链路由器

- sshfs admin@192.168.123.1:/media/onmp /home/ding/mnt/usb
- rsync -avz --delete /home/ding/www/astro/wiki/dist/ /home/ding/mnt/usb/www/astro/

## 华为云

- rsync -avz --delete /home/ding/www/astro/wiki/dist/ hw:/var/www/wiki/

---


# Starlight Starter Kit: Basics

```
sudo rsync -avz --delete $(BUILD_DIR)/ $(NGINX_DIR)
sudo rsync -avz --delete dist/ /var/www/docs
```

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
npm create astro@latest -- --template starlight
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/starlight/tree/main/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/starlight/tree/main/examples/basics)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/withastro/starlight&create_from_path=examples/basics)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwithastro%2Fstarlight%2Ftree%2Fmain%2Fexamples%2Fbasics&project-name=my-starlight-docs&repository-name=my-starlight-docs)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

mount -t cifs //192.168.123.1/onmp/www/web /home/ding/mnt/usb/ -o username=admin,password=admin

sudo rsync -avz --delete /home/ding/www/astro/wiki/dist/ /home/ding/mnt/usb/www/astro/




Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).



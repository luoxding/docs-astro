---
title: Astro 配置
date: 2025-03-19 04:23:58
category: web
tags: [docs]
slug: "astro"
---

## nginx

`/etc/nginx/conf.d/docs.conf`

```nginx
server {
    listen 80 default_server; 
    listen [::]:80 default_server;
    server_name _;
   # server_name 127.0.0.1 localhost docs.local;
    #server_name 0.0.0.0 localhost docs.local;

    root /home/ding/Documents/www/astro/wiki/dist;  # 这里放静态文件
    index index.html index.htm;

    location /docs {
        alias /home/ding/Documents/www/astro/wiki/dist;
        index index.html;
    }

    error_page 404 /404.html;
    location = /404.html {
        root /home/ding/Documents/www/astro/wiki/dist;
    }
}

```

## 图表

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## 其它样式参考
https://github.com/shorebirdtech/handbook/blob/4f7c27d8b1531dff48605b39d3f4ad9b3ee83421/astro.config.mjs#L4
https://handbook.shorebird.dev/  进入即首页，没有欢迎页，符合我的需求。
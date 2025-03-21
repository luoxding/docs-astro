---
title: 代码高亮测试
description: A reference page in my new Starlight docs site.
---

```
{% code
   code="console.log('这可能来自文件或 CMS！');"
   lang="js"
   title="example.js"
   meta="'文件' 'CMS'" /%}
```

```js
// 带有语法高亮的 JavaScript 代码。
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l);
  return true;
};
```

```ansi
ANSI colors:
- Regular: [31mRed[0m [32mGreen[0m [33mYellow[0m [34mBlue[0m [35mMagenta[0m [36mCyan[0m
- Bold:    [1;31mRed[0m [1;32mGreen[0m [1;33mYellow[0m [1;34mBlue[0m [1;35mMagenta[0m [1;36mCyan[0m
- Dimmed:  [2;31mRed[0m [2;32mGreen[0m [2;33mYellow[0m [2;34mBlue[0m [2;35mMagenta[0m [2;36mCyan[0m

256 colors (showing colors 160-177):
[38;5;160m160 [38;5;161m161 [38;5;162m162 [38;5;163m163 [38;5;164m164 [38;5;165m165[0m
[38;5;166m166 [38;5;167m167 [38;5;168m168 [38;5;169m169 [38;5;170m170 [38;5;171m171[0m
[38;5;172m172 [38;5;173m173 [38;5;174m174 [38;5;175m175 [38;5;176m176 [38;5;177m177[0m

Full RGB colors:
[38;2;34;139;34mForestGreen - RGB(34, 139, 34)[0m

Text formatting: [1mBold[0m [2mDimmed[0m [3mItalic[0m [4mUnderline[0m
```

## makefile

```makefile
# 项目名称
PROJECT_NAME := notes

# 路径配置
BUILD_DIR    := ./build
NGINX_DIR    := /var/www/docs

# NAS 局域网路径（可选）
NAS_USER     := root
NAS_IP       := 192.168.10.3
NAS_PATH     := /volume1/ding_share/docusaurus/$(PROJECT_NAME)

# 远程服务器路径
SERVER_USER  := root
SERVER_HOST  := 1.94.254.213
SERVER_PATH  := /var/www/$(PROJECT_NAME)

# GitHub 配置
GITHUB_REPO  := git@github.com:luoxding/luoxding.github.io.git
GITHUB_BRANCH := main

# 颜色输出（可选）
SUCCESS_COLOR := \033[0;32m
NO_COLOR := \033[0m

# 构建并发布到 GitHub Pages
.PHONY: publish_to_pages
publish_to_pages:
	npm run deploy
	@echo -e "$(SUCCESS_COLOR)已发布到 GitHub Pages$(NO_COLOR)"

# 发布到本地 Nginx
.PHONY: publish_to_local
publish_to_local:
	sudo rsync -avz --delete $(BUILD_DIR)/ $(NGINX_DIR)
	@echo -e "$(SUCCESS_COLOR)已发布到本机 Nginx$(NO_COLOR)"

# 发布到局域网 NAS（如果需要启用，取消注释）
#.PHONY: publish_to_nas
#publish_to_nas:
#	rsync -avz --delete $(BUILD_DIR)/ $(NAS_USER)@$(NAS_IP):$(NAS_PATH)
#	@echo -e "$(SUCCESS_COLOR)已发布到局域网 NAS$(NO_COLOR)"

# 发布到远程服务器
.PHONY: publish_to_server
publish_to_server:
	rsync -avz --delete $(BUILD_DIR)/ $(SERVER_USER)@$(SERVER_HOST):$(SERVER_PATH)
	@echo -e "$(SUCCESS_COLOR)已发布到远程服务器$(NO_COLOR)"

# 发布到 GitHub
.PHONY: publish_to_github
publish_to_github:
	git add .
	git commit -m "Deploy updated docs"
	git push $(GITHUB_REPO) $(GITHUB_BRANCH)
	@echo -e "$(SUCCESS_COLOR)已发布到 GitHub$(NO_COLOR)"

# 一键发布到所有目标
.PHONY: publish_all
publish_all: publish_to_pages publish_to_local publish_to_server publish_to_github

# 清理构建文件
.PHONY: clean
clean:
	rm -rf $(BUILD_DIR)
	@echo -e "$(SUCCESS_COLOR)已清理构建文件$(NO_COLOR)"

# 默认执行 `publish_all`
.PHONY: deploy
deploy: publish_all
```
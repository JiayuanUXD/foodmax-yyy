# KeenMart 页面生成模板

供 Figma Code Layer / Make / Claude 生成产品页面。默认打开白色空页面，没有组件管理系统。

## 本地运行

```sh
npm ci
npm run dev
```

## Figma Code Layer

选择 keenmart-ui 仓库的 **page-starter 分支**作为 code source；main 分支保留组件管理系统。Figma 的 Clone repository 窗口支持选择分支，请务必切换后再 Clone。安装命令 npm ci，开发命令 npm run dev，构建 npm run build。打开后是空白页面，直接向 Figma agent 发送：

> 先阅读 AGENTS.md 和 guidelines 四份规范，使用 keenmart-ui-kit 的真实组件生成【页面需求】。先列出模块与组件映射，再修改 src/App.tsx，中文页面设置 zh-CN。生成后运行 npm run check 并在预览中检查间距、字体、价格和交互。不要生成组件管理界面。

AI 不会因克隆仓库而必然阅读所有文档；第一次提示词请明确要求阅读。已有组件从 npm 依赖引用，新组合放 src/components。

## 语言

src/page-config.ts 设置 zh-CN 或 en。Page 和弹层沿用 LocaleProvider 语言；中文正文优先 PingFang SC，英文 Poppins。PingFang 文件不分发，Windows等没有该字体的设备使用中文系统备用字体。价格 --ds-price-font 不随语言改变。组件字典只处理内置提示；业务数据、标题和文案需由页面提供中/英文版本。

## 当前组件包来源

公开 npm 包：keenmart-ui-kit@0.1.0。模板通过固定版本和锁文件安装真实组件包，不包含组件工作台。

```sh
npm ci
npm run check
```

更新组件时安装新版本并提交 package.json/package-lock.json。已有 Figma 克隆需要拉取这些改动、重新安装和回归；不会自动更新。供应方组件包与模板的版本关系记录在 COMPONENT-VERSION.json。

## 检查边界

npm run check:design 检查导入、字体覆盖和新增的裸色值/间距；npm run build 检查类型和构建。它们不能自动判断全部视觉规则，需结合 guidelines/ReviewChecklist.md 人工预览。

## Git 同步

维护系统使用 main 分支，产品页面模板使用 page-starter 分支，两者入口独立。page-starter 是独立目录结构，不要把它合并到 main。每个产品页面建议在 Figma 再建立自己的工作分支。

## 可复制的提示词与字体验收

第一次生成时复制 FIRST-PROMPT.md，替换页面需求。开发服务下打开 /examples/locale.html，可验证中文/英文、输入、数量 1→0、规格弹层以及不变的价格字体。默认首页仍为空白。

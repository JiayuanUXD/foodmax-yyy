# KeenMart 页面生成规则

这是产品页面模板，不是组件管理系统。默认空白页是正常状态。

1. 先阅读 guidelines/Guidelines.md、Foundations.md，再检索 Components.md 和 PagePatterns.md。
2. 先列出页面模块 → 真实组件 / 变体 / props，再实现 src/App.tsx。不要把这些说明写在页面上。
3. 从 keenmart-ui-kit 导入已有组件；不要重画现成 Button、ProductCard、TabBar、输入框、弹层。
4. src/main.tsx 已加载字体、样式和 LocaleProvider。中文页面在 src/page-config.ts 设置 zh-CN，英文为 en。中文正文为本机 PingFang SC；价格独立字体不变。没有 PingFang 时使用系统备用字体。
5. 使用 --ds-* tokens；页面左右通常12px，避免 Page/Section/业务组件重复添加留白。灰底白卡，白底输入区用灰底或描边。图片缺少用色块。
6. 页面滚动、固定底栏和安全区由 Page 管理一次。受控选择、弹层开关、数量变更需要可操作。
7. 新业务组件放 src/components，用基础组件组合；补充 props、空/禁用/错误状态和复用原因。不要修改 node_modules。
8. 运行 npm run check，再在浏览器检查语言、价格字体、间距、长文案、加购1→0、弹层以及页面底栏。静态检查不代表视觉验收。
9. 不导入工作台、验收界面、DesignSystemLab、ComponentWorkbench 或旧 Screen。
10. 组件升级必须显式更新依赖、阅读迁移说明并回归页面；不要声称已有克隆会自动收到更新。

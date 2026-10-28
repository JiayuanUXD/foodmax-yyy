请先阅读 AGENTS.md 和 guidelines 中的 Guidelines.md、Foundations.md、Components.md、PagePatterns.md。

我要生成的页面是：【填写页面目标、用户要完成的任务、需要展示的数据】。
页面语言：【中文 / English】。

请按以下顺序执行：
1. 划分页面模块，列出每个模块对应的已有组件、变体和数据；查阅已安装 keenmart-ui-kit 的真实类型。
2. 优先从 keenmart-ui-kit 引入现有组件。确实缺少时，用基础组件组合到 src/components，不另造配色、字体或间距系统。
3. 在 src/App.tsx 拼装页面；语言在 src/page-config.ts 配置，中文为 zh-CN，英文为 en。不要把模块分析放到页面上。
4. 运行 npm run check，预览检查左右留白、灰底白卡、中文字体、价格字体、长文案、弹层和底部遮挡，并修正问题。
5. 交付页面、组件映射、验证结果和未验证项。不要导入组件管理系统，不要声称未做的视觉检查已通过。

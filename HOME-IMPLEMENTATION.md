# 中文首页

页面是组件的使用方，从 keenmart-ui-kit 导入真实组件，不复制组件源码。

| 模块 | 复用与组合 |
|---|---|
| 风格切换 | Tabs：鲜选/轻享 |
| 门店与搜索 | SearchBar、Icon、BottomSheet、ListRow |
| 横滑 Banner | Carousel + 指针滑动；点击和圆点可切换 |
| 金刚区 | HomeCategoryEntries：两行横滑，每行最多10项；缺失图片用色块占位 |
| 新人专区 | NewCustomerZone + ProductCard、Tag |
| 猜你喜欢 | 首行常购/活动入口，随后 ProductFeed 双列瀑布流 |
| 底栏 | TabBar：五项，购物车 badge 跟随数量 |
| 页面容器 | Page：独立正文滚动、固定底栏、安全区各一次 |

新增组合模块保留在 src/components/HomeModules.tsx；它们不建立另一套基础元素。全部左右留白由页面12px负责，商卡间距9px。中文使用 LocaleProvider 的 PingFang SC，价格仍由组件包管理。

当前商品、门店、消息为演示数据。底栏可切换对应视图，分类/活动可浏览，搜索可筛选，数量可加减，未连接下单后端。

# 如何同步组件更新

1. 在组件源仓库修改组件，检查后发布新的 npm 版本，例如0.1.1。
2. 在本页面仓库执行 `npm run components:update -- 0.1.1`，更新 package.json 和 package-lock.json 并自动检查。
3. 回归页面并提交更新。Figma 里的既有 Code Layer 也需要同步该依赖版本并重新构建。

这能让所有真实组件调用获得同一版修复；已经克隆的 Figma 页面不会自动订阅 GitHub 或 npm 的变化。页面的组合模块变更需要单独同步页面源码。升级脚本不自动提交或发布，失败时通过 git diff 检查并恢复两个依赖文件。

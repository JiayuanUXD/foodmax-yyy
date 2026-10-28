# 组件选择与接口

组件中文名用于沟通，英文名用于代码与检索。本文由当前 catalog、api、usage 生成。先找职责匹配的组件，再看 props；状态表属于演示，不是 variant 类型。代码从 keenmart-ui-kit 导入；完整类型以 node_modules/keenmart-ui-kit/dist/types 为准，详见同目录 COMPONENT-API.md。

## 按钮 · Button

基础组件 / 操作 / 页面提取。

有填充或描边的明确操作按钮；执行当前区域的主要或次要任务。

使用场景：用户能明确知道点击后会执行什么动作时。

演示状态：default、outline、compact、small、medium、disabled、loading。

相关规则：button、result-details。

来源：[1:743](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-743)、[34:29988](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988)。

实现：src/design-system/components.tsx

```ts
React.ButtonHTMLAttributes<HTMLButtonElement>&{variant?:'primary'|'outline'|'text'|'promotion';size?:'regular'|'medium'|'small'|'compact';loading?:boolean}
```

## 加购按钮 · AddButton

业务组件 / 商品与购物车 / 页面提取。

商品图片角落的圆形加购入口；只表达加入购物车这一操作。

使用场景：商品被浏览、选择规格、加入购物车或结算前检查时。

演示状态：default、disabled。

相关规则：遵循通用规则。

来源：[136:39483](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-39483)、[136:40098](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-40098)、[28:19480](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=28-19480)、[52:46299](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-46299)。

实现：src/design-system/components.tsx

```ts
{onClick?:()=>void;disabled?:boolean}
```

## 数量步进器 · QuantityStepper

基础组件 / 操作 / 页面提取。

一个商品的数量编辑控件；处理增加、减少、上限和数量为一时禁用减号。

使用场景：购物车数量默认下限为 1；商卡加购通过 min={0} 允许减到零，随后恢复加购按钮。

演示状态：default、minimum、max、disabled、overlay、overlay-minimum、field。

相关规则：quantity。

来源：[1:743](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-743)、[34:29988](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988)。

实现：src/design-system/components.tsx

```ts
{value:number;onChange:(v:number)=>void;max?:number;min?:number;disabled?:boolean;variant?:'default'|'overlay'|'field'}
```

## 标签 · Tag

基础组件 / 展示 / 页面提取。

不可点击的短状态标签；标记促销、门槛或商品状态。

使用场景：绿色说明权益或门槛，灰色说明中性状态；红色 marketing 表示 Save 32% 等促销，红色 warning 表示即将过期等警告。

演示状态：default、neutral、marketing、marketing-outline、warning。

相关规则：tag。

来源：[10:3660](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3660)、[34:24225](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225)。

实现：src/design-system/components.tsx

```ts
{children:React.ReactNode;tone?:'success'|'neutral'|'danger'|'marketing'|'warning';variant?:'outline'}
```

## 选择标签 · ChoiceChip

基础组件 / 输入与筛选 / 页面提取。

可点击的单项选择标签；选中状态由页面传入，适合短选项。

使用场景：短选项选择。background="white" 适合灰色页面；background="gray" 适合白色卡片；选中都使用浅绿底与绿色边框。

演示状态：default、selected、white、white-selected、disabled。

相关规则：surface、tag、choice、category-framework、form-surface。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:34820](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34820)、[10:3007](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3007)。

实现：src/design-system/components.tsx

```ts
{children:React.ReactNode;selected:boolean;onClick:()=>void;disabled?:boolean;background?:'white'|'gray'}
```

## 单行输入框 · TextField

基础组件 / 输入与筛选 / 页面提取。

有名称、占位提示、输入值和校验反馈的单行输入项。

使用场景：单行字段必须有真实标签与能说明格式的 placeholder，例如卡号 0000 0000 0000 0000。

演示状态：default、filled、disabled、error。

相关规则：surface、placeholder、form-surface。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:34820](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34820)、[10:3007](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3007)。

实现：src/design-system/components.tsx

```ts
React.InputHTMLAttributes<HTMLInputElement>&{label:string;error?:string;hint?:string;labelPlacement?:'outside'|'inside'}
```

## 单选行 · RadioRow

基础组件 / 输入与筛选 / 页面提取。

整行可点击的单选项；同组只能选择一个值。

使用场景：用户需要填写、选择、筛选或提交一个值时。

演示状态：default、selected、disabled。

相关规则：compose-before-create。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:34820](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34820)、[10:3007](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3007)。

实现：src/design-system/components.tsx

```ts
{label:string;description?:string;checked:boolean;onChange:()=>void;name:string;value:string;disabled?:boolean}
```

## 评分 · Rating

基础组件 / 输入与筛选 / 页面提取。

五级评分控件；商品用圆角星形 stars，配送服务用表情 sentiment，可编辑也可只读。

使用场景：1～5 级的商品或配送总评分；传 onChange 可编辑，不传则只读。

演示状态：default、rated、readonly、sentiment、sentiment-selected。

相关规则：遵循通用规则。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:34820](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34820)、[10:3007](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3007)。

实现：src/design-system/components.tsx

```ts
{value:number;onChange?:(value:number)=>void;size?:16|20|24|28;variant?:'stars'|'sentiment'}
```

## 优惠券卡片 · CouponCard

业务组件 / 优惠与账户 / 页面提取。

一张优惠券的权益、使用条件、有效期和可用状态。

使用场景：展示权益、优惠券、账户身份或账户设置时。

演示状态：default、expired、used。

相关规则：surface、voucher-success。

来源：[10:11809](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11809)、[10:11980](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11980)。

实现：src/design-system/components.tsx

```ts
{coupon:CouponData;onUse?:()=>void;onDetails:()=>void}
```

## 列表行 · ListRow

基础组件 / 展示 / 页面提取。

单条设置或信息入口；由标题、说明、前置图标和尾部动作组成。

使用场景：设置项、配送时间等单条信息入口；左右各 15px 内距，说明在标题下方，值和箭头在右侧。

演示状态：default、description。

相关规则：spacing、insets。

来源：[10:3660](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3660)、[34:24225](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225)。

实现：src/design-system/components.tsx

```ts
{title:string;description?:string;trailing?:React.ReactNode;leading?:React.ReactNode;onClick?:()=>void;disabled?:boolean;danger?:boolean}
```

## 提示条 · Notice

基础组件 / 反馈 / 页面提取。

留在内容中的提示文字；解释规则、校验失败或注意事项。

使用场景：当前操作正在进行、已完成、失败或需要确认时。

演示状态：default、long。

相关规则：遵循通用规则。

来源：[34:35150](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-35150)、[10:5811](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-5811)、[34:32377](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-32377)。

实现：src/design-system/components.tsx

```ts
{children:React.ReactNode}
```

## 底部抽屉 · BottomSheet

基础组件 / 反馈 / 页面提取。

从页面底部出现的任务面板；背景保留上下文，内容过长时内部滚动。

使用场景：从当前页面选择支付方式、地址、配送时段、商品规格，或确认提交评价。

演示状态：default、long、selection。

相关规则：insets、type、address、compose-before-create。

来源：[34:35150](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-35150)、[10:5811](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-5811)、[34:32377](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-32377)。

实现：src/design-system/components.tsx

```ts
{open:boolean;title:string;children:React.ReactNode;onClose:()=>void;footer?:React.ReactNode;showClose?:boolean;variant?:'default'|'selection'|'consent'|'country'|'product'|'review-confirm'|'payment'|'address-conflict'|'support-orders'|'cancel-reason';maxHeight?:number;titleScrollable?:boolean}
```

## 状态文字 · StatusLabel

基础组件 / 展示 / 页面提取。

常规字重的纯文字状态，支持绿色和灰色。

使用场景：常规字重的短文本状态，用 green / gray 两种颜色表达。

演示状态：gray、green。

相关规则：type、status。

来源：[10:3660](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3660)、[34:24225](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225)。

实现：src/design-system/components.tsx

```ts
{children:React.ReactNode;tone?:'green'|'gray'}
```

## 文本 · Text

基础组件 / 展示 / 页面提取。

按字阶和强调程度显示文本；不承载点击操作。

使用场景：已有内容需要统一格式、层级或媒介呈现时。

演示状态：default、secondary、danger。

相关规则：type。

来源：[10:3660](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3660)、[34:24225](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225)。

实现：src/design-system/foundations.tsx

```ts
{as?:'span'|'p'|'h1'|'h2'|'h3';tone?:'primary'|'secondary'|'danger'|'success';size?:'caption'|'body'|'control'|'title'|'heading';children:React.ReactNode}
```

## 文字按钮 · TextButton

基础组件 / 操作 / 页面提取。

无色块的文字操作；用于取消、完成、更多、重发、查看详情或新增入口。

使用场景：取消、完成、Send again、More options、View details、Pay with a new card 等局部文字动作。

演示状态：default、brand、disabled。

相关规则：遵循通用规则。

来源：[1:743](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-743)、[34:29988](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988)。

实现：src/design-system/foundations.tsx

```ts
{children:React.ReactNode;onClick?:()=>void;disabled?:boolean;tone?:'primary'|'brand'|'danger';icon?:React.ReactNode}
```

## 操作栏 · ActionBar

基础组件 / 页面与布局 / 页面提取。

底部操作按钮组；自带上下 12px 间距，支持等宽或按内容宽度，不包含 HomeIndicator。

使用场景：底部的一项主操作或两个并列操作。默认等宽；layout="content" 按按钮内容宽度，水平 12px、上下 12px 内距。

演示状态：default、single、content-width。

相关规则：bottom、page-submit。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:29988](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988)。

实现：src/design-system/foundations.tsx

```ts
{children:React.ReactNode;safeArea?:boolean;layout?:'equal'|'content'}
```

## 验证码输入框 · OTPInput

基础组件 / 输入与筛选 / 页面提取。

四位或六位验证码的分格输入；只接收数字并限制长度。

使用场景：用户需要填写、选择、筛选或提交一个值时。

演示状态：default、filled、six-digits、error、disabled。

相关规则：遵循通用规则。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:34820](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34820)、[10:3007](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3007)。

实现：src/design-system/foundations.tsx

```ts
{value:string;onChange:(v:string)=>void;length?:4|6;error?:string;disabled?:boolean;focused?:boolean;onFocus?:()=>void}
```

## 网格布局 · Grid

基础组件 / 页面与布局 / 规范补充。

把同层内容排成固定列数；不负责数据、选择或业务标题。

使用场景：开始搭建页面，或需要将同一组内容按层级排版时。

演示状态：default、three-columns。

相关规则：classification。

来源：规范补充，无独立原稿。

实现：src/design-system/foundations.tsx

```ts
{children:React.ReactNode;columns?:1|2|3|4}
```

## 分割线 · Divider

基础组件 / 页面与布局 / 页面提取。

分隔相邻内容，或在分隔线上显示短分组文字。

使用场景：开始搭建页面，或需要将同一组内容按层级排版时。

演示状态：default、label。

相关规则：遵循通用规则。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:29988](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988)。

实现：src/design-system/foundations.tsx

```ts
{label?:string}
```

## 卡片 · Card

基础组件 / 页面与布局 / 页面提取。

白色内容容器；把同一小任务的信息组合起来，放在灰色页面上形成分区。

使用场景：浅灰页面上的相关内容分组。例如 Summary 下有商品金额、优惠与配送费用。header 放分组标题，children 放主体，footer 放该卡自己的操作。

演示状态：default、header-footer。

相关规则：surface、spacing、list-title、result-details。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:29988](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988)。

实现：src/design-system/foundations.tsx

```ts
{children:React.ReactNode;header?:React.ReactNode;footer?:React.ReactNode;className?:string}
```

## 内容分区 · Section

基础组件 / 页面与布局 / 页面提取。

统一“标题＋右侧可选入口＋内容”关系的布局工具；不绘制白卡、商品或背景，可由普通布局替代，不是独立业务控件。

使用场景：需要重复使用“分区标题＋内容”关系时使用，如猜你喜欢标题与 ProductList；只管理层级和间距。

演示状态：default、action。

相关规则：spacing、list-title、classification、component-purpose。

来源：[1:1965](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-1965)、[28:19480](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=28-19480)。

实现：src/design-system/foundations.tsx

```ts
{title:string;action?:React.ReactNode;children:React.ReactNode}
```

## 图片 · Image

基础组件 / 展示 / 规范补充。

单张有明确含义的图片；负责填充方式、比例和加载失败状态。

使用场景：已有内容需要统一格式、层级或媒介呈现时。

演示状态：default、cover、error。

相关规则：遵循通用规则。

来源：规范补充，无独立原稿。

实现：src/design-system/foundations.tsx

```ts
{src:string;alt:string;fit?:'contain'|'cover';ratio?:string;onClick?:()=>void}
```

## 头像 · Avatar

基础组件 / 展示 / 规范补充。

人的头像；缺图时显示姓名首字母，不能用商品图代替。

使用场景：已有内容需要统一格式、层级或媒介呈现时。

演示状态：default、large。

相关规则：遵循通用规则。

来源：规范补充，无独立原稿。

实现：src/design-system/foundations.tsx

```ts
{src?:string;name:string;size?:24|40|64|72}
```

## 角标 · Badge

基础组件 / 展示 / 页面提取。

附着在图标或入口上的数量或红点；不能当成独立任务按钮。

使用场景：贴在图标右上角显示未读数或购物车数量。1 位数是 16×16 圆形，2 位数和 99+ 横向扩展为胶囊；红点为 7×7。

演示状态：default、two-digits、dot、overflow。

相关规则：badge、bottom-navigation。

来源：[10:3660](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3660)、[34:24225](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225)。

实现：src/design-system/foundations.tsx

```ts
{count?:number;dot?:boolean;children?:React.ReactNode}
```

## 状态栏 · StatusBar

基础组件 / 页面与布局 / 页面提取。

系统状态栏外观；由 Page 默认提供，不在每张业务卡里重复放置。

使用场景：开始搭建页面，或需要将同一组内容按层级排版时。

演示状态：default、inverse。

相关规则：chrome。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:29988](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988)。

实现：src/design-system/foundations.tsx

```ts
{time?:string;inverse?:boolean}
```

## 底部手势条 · HomeIndicator

基础组件 / 页面与布局 / 页面提取。

底部系统手势指示条；由 Page 或键盘持有且同屏只出现一次。

使用场景：页面或底部面板的最下方手势安全区。组件背景透明，承接外层背景；有固定操作时 Page 的 footer 与其使用同一背景。

演示状态：default、on-action-background。

相关规则：bottom、bottom-navigation。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:29988](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988)。

实现：src/design-system/foundations.tsx

```ts
No props
```

## 页面容器 · Page

基础组件 / 页面与布局 / 页面提取。

页面底层容器；统一白／浅灰背景、状态栏、内容区和底部手势安全区。

使用场景：先选内容背景，再通过 chromeBackground 设置状态栏与导航统一的背景；渐变页使用透明头部承接页面背景。

演示状态：default、white、gray。

相关规则：source、chrome、surface、empty、bottom、category-framework、compose-before-create、form-surface、page-submit、bottom-navigation。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:29988](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988)。

实现：src/design-system/foundations.tsx

```ts
{children:React.ReactNode;header?:React.ReactNode;footer?:React.ReactNode;chromeBackground?:string;background?:'white'|'gray';height?:number;showStatusBar?:boolean;showHomeIndicator?:boolean;inverse?:boolean;className?:string}
```

## 应用外壳 · AppShell

基础组件 / 页面与布局 / 页面提取。

旧外壳兼容层；内部调用 Page，新组合页面直接使用 Page。

使用场景：仅为旧代码保留兼容；新组合使用 Page。

演示状态：default、long、footer、plain、account。

相关规则：遵循通用规则。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:29988](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988)。

实现：src/design-system/foundations.tsx

```ts
{children:React.ReactNode;header?:React.ReactNode;footer?:React.ReactNode;inverse?:boolean;surface?:'default'|'plain'|'account'|'home';height?:number;showStatusBar?:boolean;showHomeIndicator?:boolean}
```

## 图标按钮 · IconButton

基础组件 / 操作 / 页面提取。

只有图标的操作入口；必须提供可理解的无障碍名称和点击事件。

使用场景：用户能明确知道点击后会执行什么动作时。

演示状态：default、disabled。

相关规则：遵循通用规则。

来源：[1:743](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-743)、[34:29988](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988)。

实现：src/design-system/foundations.tsx

```ts
{name:IconName;label:string;onClick?:()=>void;disabled?:boolean}
```

## 顶部导航栏 · NavBar

基础组件 / 导航 / 页面提取。

页面标题栏；返回触点固定 44px，标题支持居中或左对齐，右侧可放文字操作。

使用场景：每个页面顶部的标题和返回；普通标题居中，订单列表标题用 left。

演示状态：default、long、no-back、no-actions。

相关规则：chrome、type、nav。

来源：[34:22799](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-22799)、[10:10108](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-10108)。

实现：src/design-system/foundations.tsx

```ts
{title:string;onBack?:()=>void;right?:React.ReactNode;left?:React.ReactNode;align?:'center'|'left'}
```

## 标签页 · Tabs

基础组件 / 导航 / 页面提取。

同一页面内的并列内容切换；等分或横向滚动，标题栏下直接放置。

使用场景：同一列表下切换内容。equal 表示少量栏目等分；scroll 表示栏目较多，可左右滑动，标签按实际文字宽度排列。示例“横向滚动”展示真实分类名称。

演示状态：default、scroll、disabled。

相关规则：nav。

来源：[34:22799](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-22799)、[10:10108](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-10108)。

实现：src/design-system/foundations.tsx

```ts
{options:Option[];value:string;onChange:(v:string)=>void;variant?:'line'|'pill';layout?:'equal'|'scroll'}
```

## 分段选择器 · SegmentedControl

基础组件 / 导航 / 页面提取。

少量互斥视图的胶囊切换；用于同层模式，不用于底部主导航。

使用场景：少量互斥的同层模式切换；选中状态为浅绿胶囊，胶囊必须包住文字，两侧保留 15px。

演示状态：default、disabled。

相关规则：button、choice、nav。

来源：[34:22799](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-22799)、[10:10108](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-10108)。

实现：src/design-system/foundations.tsx

```ts
Omit<React.ComponentProps<typeof Tabs>,'variant'>
```

## 底部导航栏 · TabBar

基础组件 / 导航 / 页面提取。

应用主栏目导航；支持四项与五项等分布局，五项增加订单入口；图标使用原稿选中与未选中素材，角标沿用 Badge 规则，安全区由 Page 提供。

使用场景：需要在同一层级切换内容或在应用主栏目之间跳转时。

演示状态：default、badge、five、five-badge。

相关规则：bottom-navigation。

来源：[140:53219](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=140-53219)、[140:53865](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=140-53865)。

实现：src/design-system/foundations.tsx

```ts
{options:Option[];value:string;onChange:(v:string)=>void}
```

## 侧边分类栏 · Sidebar

基础组件 / 导航 / 页面提取。

纯文字的纵向分类选择；有图片的商品分类应使用 CategoryLayout。

使用场景：需要在同一层级切换内容或在应用主栏目之间跳转时。

演示状态：default、long。

相关规则：遵循通用规则。

来源：[34:22799](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-22799)、[10:10108](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-10108)。

实现：src/design-system/foundations.tsx

```ts
{options:Option[];value:string;onChange:(v:string)=>void}
```

## 搜索框 · SearchBar

基础组件 / 输入与筛选 / 页面提取。

搜索输入原子项；包含搜索图标、placeholder、输入值和清除操作。

使用场景：用户需要填写、选择、筛选或提交一个值时。

演示状态：default、outline、white、filled、disabled。

相关规则：surface、category-framework。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:34820](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34820)、[10:3007](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3007)。

实现：src/design-system/foundations.tsx

```ts
{surface?:'gray'|'outline'|'white';onFocus?:()=>void;value:string;onChange:(v:string)=>void;onSubmit?:(v:string)=>void;placeholder?:string;disabled?:boolean;showSubmit?:boolean;submitIcon?:boolean}
```

## 表单字段 · FormField

基础组件 / 输入与筛选 / 规范补充。

给自定义控件增加标签、必填标记和错误；不再嵌套另一个有标签输入项。

使用场景：给自定义输入控件加标签、必填标记与错误信息。占位文字写在 children 内的 input 或 textarea，描述要输入什么。

演示状态：default、error。

相关规则：placeholder。

来源：规范补充，无独立原稿。

实现：src/design-system/foundations.tsx

```ts
{label:string;required?:boolean;error?:string;children:React.ReactNode}
```

## 多行输入框 · TextArea

基础组件 / 输入与筛选 / 页面提取。

多行输入；提供 placeholder、最大字数和实时计数。

使用场景：用户需要填写、选择、筛选或提交一个值时。

演示状态：default、filled、disabled、error。

相关规则：placeholder。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:34820](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34820)、[10:3007](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3007)。

实现：src/design-system/foundations.tsx

```ts
{label:string;value:string;onChange:(v:string)=>void;maxLength?:number;disabled?:boolean;error?:string;placeholder?:string;hideLabel?:boolean}
```

## 复选框 · Checkbox

基础组件 / 输入与筛选 / 页面提取。

独立的勾选项；适用于多选和全选，不用于同组唯一选项。

使用场景：用户需要填写、选择、筛选或提交一个值时。

演示状态：default、selected、disabled。

相关规则：action-hierarchy。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:34820](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34820)、[10:3007](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3007)。

实现：src/design-system/foundations.tsx

```ts
{label:string;checked:boolean;onChange:(v:boolean)=>void;disabled?:boolean}
```

## 开关 · Switch

基础组件 / 输入与筛选 / 规范补充。

立即切换生效的二元设置；不用于提交前的条款同意。

使用场景：用户需要填写、选择、筛选或提交一个值时。

演示状态：default、selected、disabled。

相关规则：compose-before-create。

来源：规范补充，无独立原稿。

实现：src/design-system/foundations.tsx

```ts
{label:string;checked:boolean;onChange:(v:boolean)=>void;disabled?:boolean}
```

## 下拉选择框 · SelectField

基础组件 / 输入与筛选 / 页面提取。

从有限文字选项中选一个值；不承担国家旗帜或商品分类结构。

使用场景：有限文本选项的单选下拉；触发框、右侧图标、圆角面板采用基础尺寸，支持键盘上下键、Enter 和 Escape。

演示状态：default、disabled。

相关规则：component-purpose。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:34820](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34820)、[10:3007](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3007)。

实现：src/design-system/foundations.tsx

```ts
{label:string;options:Option[];value:string;onChange:(v:string)=>void;disabled?:boolean}
```

## 选择器 · Picker

基础组件 / 输入与筛选 / 页面提取。

打开底部选择面板的触发器；适合较长选项列表。

使用场景：用户需要填写、选择、筛选或提交一个值时。

演示状态：default、disabled。

相关规则：遵循通用规则。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:34820](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34820)、[10:3007](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3007)。

实现：src/design-system/foundations.tsx

```ts
React.ComponentProps<typeof SelectField>
```

## 日期选择器 · DatePicker

基础组件 / 输入与筛选 / 规范补充。

选择一个日期；配送时间段使用 DeliverySlotPicker。

使用场景：用户需要填写、选择、筛选或提交一个值时。

演示状态：default、disabled。

相关规则：遵循通用规则。

来源：规范补充，无独立原稿。

实现：src/design-system/foundations.tsx

```ts
{label:string;value:string;onChange:(v:string)=>void;min?:string;disabled?:boolean}
```

## 滑块 · Slider

基础组件 / 输入与筛选 / 规范补充。

在连续范围中选择数值；精确购买件数应使用 QuantityStepper。

使用场景：用户需要填写、选择、筛选或提交一个值时。

演示状态：default、disabled。

相关规则：遵循通用规则。

来源：规范补充，无独立原稿。

实现：src/design-system/foundations.tsx

```ts
{label:string;value:number;onChange:(v:number)=>void;min?:number;max?:number;disabled?:boolean}
```

## 上传控件 · Uploader

基础组件 / 输入与筛选 / 页面提取。

有限数量的图片／视频选择和移除；文件发送由业务层接入。

使用场景：用户需要填写、选择、筛选或提交一个值时。

演示状态：default、disabled。

相关规则：遵循通用规则。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:34820](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34820)、[10:3007](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3007)。

实现：src/design-system/foundations.tsx

```ts
{files:File[];onChange:(f:File[])=>void;max?:number;disabled?:boolean}
```

## 筛选栏 · FilterBar

基础组件 / 输入与筛选 / 页面提取。

对结果集施加多个筛选条件；可重置，不取代主分类导航。

使用场景：用户需要填写、选择、筛选或提交一个值时。

演示状态：default、selected。

相关规则：遵循通用规则。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:34820](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34820)、[10:3007](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3007)。

实现：src/design-system/foundations.tsx

```ts
{options:Option[];value:string[];onChange:(v:string[])=>void;onReset?:()=>void}
```

## 轮播图 · Carousel

基础组件 / 展示 / 页面提取。

在同一图片区切换图片或活动内容；带分页指示和当前页状态。

使用场景：已有内容需要统一格式、层级或媒介呈现时。

演示状态：default、empty。

相关规则：遵循通用规则。

来源：[10:3660](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3660)、[34:24225](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225)。

实现：src/design-system/foundations.tsx

```ts
{images?:{src:string;alt:string}[];slides?:React.ReactNode[];initialIndex?:number;label?:string}
```

## 折叠面板 · Collapse

基础组件 / 展示 / 页面提取。

折叠展开一段补充信息；主流程必读内容不默认藏起。

使用场景：已有内容需要统一格式、层级或媒介呈现时。

演示状态：default、long。

相关规则：遵循通用规则。

来源：[10:3660](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3660)、[34:24225](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225)。

实现：src/design-system/foundations.tsx

```ts
{items:{id:string;title:string;content:React.ReactNode}[]}
```

## 进度条 · Progress

基础组件 / 展示 / 页面提取。

一个已知比例的进度；不能用它冒充订单的离散状态。

使用场景：已有内容需要统一格式、层级或媒介呈现时。

演示状态：default、complete。

相关规则：遵循通用规则。

来源：[10:3660](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3660)、[34:24225](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225)。

实现：src/design-system/foundations.tsx

```ts
{value:number;label?:string}
```

## 步骤条 · Steps

基础组件 / 展示 / 页面提取。

一个流程的步骤关系；物流状态外观使用 OrderStageProgress。

使用场景：已有内容需要统一格式、层级或媒介呈现时。

演示状态：default、complete。

相关规则：遵循通用规则。

来源：[10:3660](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3660)、[34:24225](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225)。

实现：src/design-system/foundations.tsx

```ts
{items:{title:string;description?:string}[];current?:number}
```

## 空状态 · EmptyState

基础组件 / 反馈 / 页面提取。

列表为空或搜索无结果时的说明与下一步；插画必须对应当前场景。

使用场景：根据业务缺省原因选择 kind：orders、cart、search、network、network-alt、favorites、points、goods、content、waiting、load-error、server-error、closed、location、messages、vouchers、address、nothing。插画 130×130，标题与说明保持 12px 间隔，按钮距说明 24px。

演示状态：default、action、orders、search、network、network-alt、cart、favorites、points、goods、content、waiting、load-error、server-error、closed、location、messages、vouchers、address、nothing。

相关规则：empty。

来源：[34:35150](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-35150)、[10:5811](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-5811)、[34:32377](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-32377)。

实现：src/design-system/foundations.tsx

```ts
{title?:string;description?:string;action?:React.ReactNode;illustration?:React.ReactNode;kind?:EmptyIllustrationKind;layout?:'inline'|'page'}
```

## 结果展示 · Result

基础组件 / 反馈 / 页面提取。

简单任务完成后的通用反馈；订单状态页应组合订单领域组件。

使用场景：结果页用状态图标和标题说明任务结果；多条原因通过 details 传入白卡，单一操作使用 fullWidthAction。

演示状态：default、error、warning、reasons。

相关规则：result-details。

来源：[34:35150](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-35150)、[10:5811](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-5811)、[34:32377](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-32377)。

实现：src/design-system/foundations.tsx

```ts
{status?:'success'|'error'|'warning';title:string;description?:string;details?:string[];action?:React.ReactNode;fullWidthAction?:boolean}
```

## 加载指示器 · Loading

基础组件 / 反馈 / 规范补充。

短时间等待的加载提示；需要保留布局时使用 Skeleton。

使用场景：当前操作正在进行、已完成、失败或需要确认时。

演示状态：default。

相关规则：遵循通用规则。

来源：规范补充，无独立原稿。

实现：src/design-system/foundations.tsx

```ts
{label?:string}
```

## 骨架屏 · Skeleton

基础组件 / 反馈 / 规范补充。

加载前的结构占位；不显示虚构业务内容。

使用场景：当前操作正在进行、已完成、失败或需要确认时。

演示状态：default、long。

相关规则：遵循通用规则。

来源：规范补充，无独立原稿。

实现：src/design-system/foundations.tsx

```ts
{rows?:number}
```

## 轻提示 · Toast

基础组件 / 反馈 / 页面提取。

短暂、非阻塞的操作反馈；不承载必须点击确认的信息。

使用场景：深色半透明底、白色文字的短暂反馈，默认 3 秒自动关闭。

演示状态：default、long。

相关规则：toast。

来源：[34:35150](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-35150)。

实现：src/design-system/foundations.tsx

```ts
{open:boolean;message:string;onClose:()=>void;duration?:number}
```

## 对话框 · Dialog

基础组件 / 反馈 / 页面提取。

页面中央的短确认框；只用于独立、简短、阻断式确认。

使用场景：独立、简短、阻断式确认，例如清空购物车。

演示状态：default、long。

相关规则：voucher-success。

来源：[34:35150](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-35150)、[10:5811](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-5811)、[34:32377](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-32377)。

实现：src/design-system/foundations.tsx

```ts
{open:boolean;title:string;children:React.ReactNode;onClose:()=>void;actions?:React.ReactNode;variant?:'default'|'poster'|'voucher-success';showClose?:boolean}
```

## 操作面板 · ActionSheet

基础组件 / 反馈 / 页面提取。

底部的若干动作选择；适合拍照、选相册等命令，不承载长表单。

使用场景：当前操作正在进行、已完成、失败或需要确认时。

演示状态：default、disabled。

相关规则：action-hierarchy。

来源：[34:35150](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-35150)、[10:5811](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-5811)、[34:32377](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-32377)。

实现：src/design-system/foundations.tsx

```ts
{open:boolean;options:Option[];onSelect:(v:string)=>void;onClose:()=>void}
```

## 气泡浮层 · Popover

基础组件 / 反馈 / 规范补充。

紧贴触发入口的少量解释或操作；不适合手机长列表。

使用场景：当前操作正在进行、已完成、失败或需要确认时。

演示状态：default。

相关规则：遵循通用规则。

来源：规范补充，无独立原稿。

实现：src/design-system/foundations.tsx

```ts
{label:string;children:React.ReactNode}
```

## 图片查看器 · ImageViewer

基础组件 / 反馈 / 页面提取。

查看一张图片的大图覆盖层；不是普通商品卡图片。

使用场景：当前操作正在进行、已完成、失败或需要确认时。

演示状态：default。

相关规则：media。

来源：[34:35150](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-35150)、[10:5811](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-5811)、[34:32377](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-32377)。

实现：src/design-system/foundations.tsx

```ts
{open:boolean;src:string;alt:string;onClose:()=>void}
```

## 左滑操作 · SwipeAction

基础组件 / 反馈 / 页面提取。

列表行侧滑后出现的操作区；删除行为由页面决定。

使用场景：默认隐藏侧滑操作，左滑或键盘 ← 展示；actions 可以提供一、二、三个操作，执行后收起。

演示状态：default、two-actions、three-actions、disabled。

相关规则：insets、quantity、swipe、action-hierarchy。

来源：[34:35150](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-35150)、[10:5811](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-5811)、[34:32377](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-32377)。

实现：src/design-system/foundations.tsx

```ts
{children:React.ReactNode;onDelete?:()=>void;actions?:{label:string;onAction:()=>void;tone?:'neutral'|'destructive'}[];disabled?:boolean}
```

## 下拉刷新 · PullRefresh

基础组件 / 反馈 / 规范补充。

规范补充的下拉手势容器，不来自某张原稿的独立控件；达到阈值松手后触发 onRefresh，并展示刷新中或失败反馈。

使用场景：滚动列表位于顶部时向下拖动，达到阈值后松手调用 onRefresh；键盘聚焦后 Enter 提供等价操作。

演示状态：default、error。

相关规则：component-purpose。

来源：规范补充，无独立原稿。

实现：src/design-system/foundations.tsx

```ts
{children:React.ReactNode;onRefresh:()=>Promise<void>}
```

## 加载更多 · LoadMore

基础组件 / 反馈 / 规范补充。

列表底部的加载、失败重试或到底提示。

使用场景：当前操作正在进行、已完成、失败或需要确认时。

演示状态：default、loading、error、end。

相关规则：遵循通用规则。

来源：规范补充，无独立原稿。

实现：src/design-system/foundations.tsx

```ts
{loading?:boolean;hasMore?:boolean;onLoad:()=>void;error?:boolean}
```

## 吸底操作栏 · StickyBar

基础组件 / 页面与布局 / 规范补充。

滚动容器底部的操作栏；支持单按钮、双按钮和内容＋按钮，页面级固定位置由 Page.footer 管理。

使用场景：layout=single 放一个通栏按钮；equal 放两个等宽按钮；content 放金额等信息＋按钮。放入 Page.footer 时由页面固定，容器内可使用 sticky。

演示状态：default、two-buttons、content。

相关规则：bottom、page-submit。

来源：规范补充，无独立原稿。

实现：src/design-system/foundations.tsx

```ts
{children:React.ReactNode;layout?:'single'|'equal'|'content'}
```

## 模拟键盘 · Keyboard

基础组件 / 输入与筛选 / 页面提取。

本地演示的系统键盘外观；保留原稿结构，不能替代真实系统键盘。

使用场景：用户需要填写、选择、筛选或提交一个值时。

演示状态：default、alphabetic、disabled。

相关规则：遵循通用规则。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:34820](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34820)、[10:3007](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3007)。

实现：src/design-system/foundations.tsx

```ts
{allowDecimal?:boolean;type?:'numeric'|'alphabetic';value:string;onChange:(v:string)=>void;onDone:()=>void;maxLength?:number;disabled?:boolean}
```

## 倒计时 · Countdown

基础组件 / 展示 / 页面提取。

按秒变化的剩余时间显示；重发校验和业务计时由调用方决定。

使用场景：已有内容需要统一格式、层级或媒介呈现时。

演示状态：default、complete。

相关规则：遵循通用规则。

来源：[10:3660](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3660)、[34:24225](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225)。

实现：src/design-system/foundations.tsx

```ts
{seconds:number;onComplete?:()=>void}
```

## 业务插画 · Artwork

基础组件 / 展示 / 页面提取。

有限插画区域的素材图层；只用于已有营销插画、状态插画和图标组合。

使用场景：已有内容需要统一格式、层级或媒介呈现时。

演示状态：default。

相关规则：遵循通用规则。

来源：[10:3660](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3660)、[34:24225](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225)。

实现：src/design-system/foundations.tsx

```ts
{layers:ArtworkLayer[];label:string;ratio?:string}
```

## 列表分组 · ListGroup

基础组件 / 页面与布局 / 页面提取。

一组有标题的信息入口；标题可放在卡片内部或外部。

使用场景：同一主题下有标题的一组列表入口；titlePlacement 支持 inside / outside。

演示状态：inside、outside。

相关规则：spacing、insets、list-title。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[34:29988](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988)。

实现：src/design-system/foundations.tsx

```ts
{title:string;titlePlacement?:'inside'|'outside';items:{id:string;title:string;description?:string;leading?:React.ReactNode;trailing?:React.ReactNode;onClick?:()=>void;disabled?:boolean}[]}
```

## 商品卡片 · ProductCard

业务组件 / 商品与购物车 / 页面提取。

Figma 定制商卡；grid 双列、full-width 通栏、category 分类单列三种布局，共用价格、供应商、促销和购买状态。

使用场景：商品摘要只使用 grid、full-width、category 三类。传入 product 数据与购买回调；多规格由 skus 驱动：双列通过底部抽屉选择，通栏与分类单列支持卡内展开。

演示状态：grid、full-width、category、full-width-expanded、category-expanded、multi-spec、quantity、minimum、maximum、count、sold-out、unavailable、not-for-sale、similar、order-by、long-title。

相关规则：quantity、commerce-anatomy、category-framework。

来源：[136:39483](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-39483)、[136:40098](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-40098)、[136:40212](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-40212)。

实现：src/design-system/business.tsx

```ts
type ProductCardVariant = 'grid'|'full-width'|'category';
type ProductAvailability = 'available'|'sold-out'|'unavailable'|'not-for-sale';
type ProductSKU = {id:string;label:string;amount:string;unitPrice?:string;promotion?:string;max?:number};
type CommerceProduct = Product&{currency?:string;unit?:string;unitPrice?:string;promotion?:string;supplier?:string;supplierVariant?:'supplier'|'comparison';orderBy?:string;availability?:ProductAvailability;purchase?:'add'|'quantity'|'count'|'notify'|'similar'|'none';max?:number;skus?:ProductSKU[]};

{product:CommerceProduct;variant?:ProductCardVariant;quantity?:number;onAdd:()=>void;onQuantity?:(value:number)=>void;onSKUQuantity?:(id:string,value:number)=>void;skuQuantities?:Record<string,number>;initialExpanded?:boolean;onNotify?:()=>void;onSimilar?:()=>void;onSupplier?:()=>void;locale?:'en'|'zh'}
```

## 商品价格组合 · ProductPriceGroup

业务组件 / 商品与购物车 / 页面提取。

价格业务组合；当前售价、币种、单位、单位价与划线原价的四种组合。

使用场景：商品被浏览、选择规格、加入购物车或结算前检查时。

演示状态：default、with-unit-price、price-only、unit-price。

相关规则：commerce-anatomy。

来源：[136:39643](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-39643)。

实现：src/design-system/business.tsx

```ts
{amount:string;original?:string;currency?:string;unit?:string;unitPrice?:string;promotion?:boolean;originalPlacement?:'inline'|'below'}
```

## 商品购买控件 · ProductPurchaseControl

业务组件 / 商品与购物车 / 页面提取。

商卡购买状态；加购、数量、到达上限、多规格、到货提醒和找相似。

使用场景：商品被浏览、选择规格、加入购物车或结算前检查时。

演示状态：default、count、quantity、minimum、maximum、notify、similar、specs。

相关规则：commerce-anatomy。

来源：[136:39590](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-39590)。

实现：src/design-system/business.tsx

```ts
{mode?:'add'|'quantity'|'count'|'notify'|'similar'|'specs'|'none';value?:number;max?:number;expanded?:boolean;onAdd:()=>void;onQuantity?:(v:number)=>void;onToggle?:()=>void;onNotify?:()=>void;onSimilar?:()=>void}
```

## 商品状态蒙层 · ProductStatusOverlay

业务组件 / 商品与购物车 / 页面提取。

商品图上的售罄、下架、非卖品蒙层；支持中英文。

使用场景：两套商卡图片蒙层：regular=165、compact=72；各支持售罄、已下架、非卖品以及中英文，共 12 种组合。

演示状态：sold-out-en、sold-out-zh、unavailable-en、unavailable-zh、not-for-sale-en、not-for-sale-zh、sold-out-en-compact、sold-out-zh-compact、unavailable-en-compact、unavailable-zh-compact、not-for-sale-en-compact、not-for-sale-zh-compact。

相关规则：commerce-anatomy。

来源：[136:39533](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-39533)、[136:40281](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-40281)。

实现：src/design-system/business.tsx

```ts
{status:ProductAvailability;locale?:'en'|'zh';size?:'regular'|'compact'}
```

## 供应商标签 · ProductSupplierTag

业务组件 / 商品与购物车 / 页面提取。

商卡供应商入口；灰色底承载供应商图标、名称和箭头。

使用场景：同一标签支持 supplier 供应商名称、comparison 更多供应商比价两种变体。

演示状态：default、comparison。

相关规则：commerce-anatomy。

来源：[136:39576](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-39576)、[136:39583](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-39583)。

实现：src/design-system/business.tsx

```ts
{name:string;variant?:'supplier'|'comparison';onClick?:()=>void}
```

## feeds · ProductList

业务组件 / 商品与购物车 / 页面提取。

同一批商品卡的数据列表；统一网格／横向布局并回传商品操作。

使用场景：feeds 商品流；layout=grid 双列瀑布流，layout=row 单列通栏，density=compact 分类单列。

演示状态：default、compact、row、empty。

相关规则：commerce-anatomy。

来源：[136:39483](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-39483)、[136:40098](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-40098)、[136:40212](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-40212)。

实现：src/design-system/business.tsx

```ts
{products:CommerceProduct[];onAdd:(id:string)=>void;onQuantity?:(id:string,value:number)=>void;onRemove?:(id:string)=>void;layout?:'grid'|'row';density?:'regular'|'compact'}
```

## 猜你喜欢 · ProductCollection

业务组件 / 商品与购物车 / 页面提取。

带标题和商品列表的推荐区；底层复用 ProductList。

使用场景：猜你喜欢：灰色承载层、标题和白色商品卡；layout=grid 双列、layout=row 单列。

演示状态：default、row、empty。

相关规则：surface、commerce-anatomy。

来源：[136:39483](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-39483)、[28:19480](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=28-19480)。

实现：src/design-system/business.tsx

```ts
{products:CommerceProduct[];onAdd:(id:string)=>void;onQuantity?:(id:string,value:number)=>void;onRemove?:(id:string)=>void;layout?:'grid'|'row';title?:string;density?:'regular'|'compact'}
```

## 商品规格选择器 · ProductSpecPicker

业务组件 / 商品与购物车 / 页面提取。

商品规格任务；包含商品摘要、必选项、加工方式、数量和确认动作。

使用场景：完整白色商品规格抽屉：商品图与摘要、处理方式、口味、数量、加购及安全区；传 open/onClose 控制抽屉，省略 open 可内嵌预览面板。

演示状态：default、selected。

相关规则：spacing、quantity、commerce-anatomy。

来源：[52:46299](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-46299)、[52:46431](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-46431)。

实现：src/design-system/business.tsx

```ts
{groups:{id:string;title:string;description?:string;required?:boolean;options:Option[]}[];values:Record<string,string>;onChange:(v:Record<string,string>)=>void;onConfirm:()=>void;product?:Product;quantity?:number;onQuantity?:(n:number)=>void;onClose?:()=>void;open?:boolean}
```

## 购物车商品行 · CartItem

业务组件 / 商品与购物车 / 页面提取。

购物车或订单中的单个商品行；有数量、价格、赠品或失效状态。

使用场景：商品被浏览、选择规格、加入购物车或结算前检查时。

演示状态：default、selected、unavailable、readonly。

相关规则：quantity、swipe、activity、commerce-anatomy。

来源：[136:39483](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-39483)、[136:40098](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-40098)、[28:19480](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=28-19480)、[52:46299](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-46299)。

实现：src/design-system/business.tsx

```ts
{product:Product;quantity:number;selected:boolean;onSelect:(v:boolean)=>void;onQuantity:(v:number)=>void;onRemove:()=>void;readOnly?:boolean;selectable?:boolean}
```

## 购物车商品组 · CartGroup

业务组件 / 商品与购物车 / 页面提取。

同一购买分组的商品容器与全选；不把所有优惠活动硬塞成一个组。

使用场景：商品被浏览、选择规格、加入购物车或结算前检查时。

演示状态：default、selected。

相关规则：遵循通用规则。

来源：[136:39483](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-39483)、[136:40098](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-40098)、[28:19480](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=28-19480)、[52:46299](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-46299)。

实现：src/design-system/business.tsx

```ts
{title:string;children:React.ReactNode;selected:boolean;onSelect:(v:boolean)=>void}
```

## 购物车结算栏 · CartSummaryBar

业务组件 / 商品与购物车 / 页面提取。

购物车底部总额和结算入口；汇总值从购物车状态传入。

使用场景：商品被浏览、选择规格、加入购物车或结算前检查时。

演示状态：default、empty。

相关规则：遵循通用规则。

来源：[136:39483](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-39483)、[136:40098](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-40098)、[28:19480](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=28-19480)、[52:46299](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-46299)。

实现：src/design-system/business.tsx

```ts
{total:string;selectedCount:number;onCheckout:()=>void;disabled?:boolean}
```

## 失效商品抽屉 · InvalidProductsSheet

业务组件 / 商品与购物车 / 页面提取。

结算前的失效商品拦截面板；保留返回与继续两条路径。

使用场景：商品被浏览、选择规格、加入购物车或结算前检查时。

演示状态：default、long。

相关规则：遵循通用规则。

来源：[10:5811](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-5811)。

实现：src/design-system/business.tsx

```ts
{open:boolean;products:Product[];onClose:()=>void;onContinue:()=>void}
```

## 地址卡片 · AddressCard

业务组件 / 地址与配送 / 页面提取。

一个收货地址的摘要；结算 delivery 变体带地址标题和轻地图背景。

使用场景：设置收货地点、选择时段或展示配送信息时。

演示状态：default、selected、long、delivery。

相关规则：遵循通用规则。

来源：[34:38968](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-38968)、[34:39101](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-39101)、[10:9507](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-9507)、[34:29988](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988)。

实现：src/design-system/business.tsx

```ts
{address:Address;selected?:boolean;onSelect?:()=>void;onEdit?:()=>void;variant?:'default'|'delivery'}
```

## 地址选择器 · AddressPicker

业务组件 / 地址与配送 / 页面提取。

从地址簿选择一个收货地址；提供空态和新增地址入口。

使用场景：设置收货地点、选择时段或展示配送信息时。

演示状态：default、empty。

相关规则：address。

来源：[34:38968](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-38968)、[34:39101](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-39101)、[10:9507](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-9507)、[34:29988](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988)。

实现：src/design-system/business.tsx

```ts
{addresses:Address[];value:string;onChange:(v:string)=>void;onAdd:()=>void}
```

## 地址表单 · AddressForm

业务组件 / 地址与配送 / 页面提取。

编辑地址、联系人、手机号和标签的完整地址任务。

使用场景：地图摘要＋地址与联系人表单；字段标签放在框内，不再单独展示一行。surface=white 适合灰色页面、输入为灰色；surface=gray 适合白色页面、输入为白色。

演示状态：default、on-white、error、disabled、custom-label、label-conflict。

相关规则：address、form-surface。

来源：[34:38968](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-38968)、[34:39101](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-39101)、[10:9507](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-9507)、[34:29988](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988)。

实现：src/design-system/business.tsx

```ts
{surface?:'white'|'gray';value:Address;onChange:(v:Address)=>void;onSubmit:()=>void;error?:string;disabled?:boolean;onRemove?:()=>void;labelConflict?:boolean;onResolveLabel?:(use:boolean)=>void}
```

## 地图选址 · MapAddressPicker

业务组件 / 地址与配送 / 页面提取。

地图选点任务；地图服务放入受限插槽，地点值由页面回传。

使用场景：设置收货地点、选择时段或展示配送信息时。

演示状态：default、empty。

相关规则：source、surface。

来源：[21:12840](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=21-12840)、[21:12886](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=21-12886)。

实现：src/design-system/business.tsx

```ts
{onSearchFocus?:()=>void;map:React.ReactNode;query:string;onQuery:(v:string)=>void;address?:Address;onConfirm:()=>void;results?:{id:string;title:string}[];onSelect?:(id:string)=>void}
```

## 配送时段选择器 · DeliverySlotPicker

业务组件 / 地址与配送 / 页面提取。

选择配送日期和时间段；展示已满或不可选的时段。

使用场景：设置收货地点、选择时段或展示配送信息时。

演示状态：default、selected、empty。

相关规则：遵循通用规则。

来源：[34:38968](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-38968)、[34:39101](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-39101)、[10:9507](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-9507)、[34:29988](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988)。

实现：src/design-system/business.tsx

```ts
{days:Option[];day:string;onDay:(v:string)=>void;slots:Option[];value:string;onChange:(v:string)=>void}
```

## 配送进度 · DeliveryProgress

业务组件 / 地址与配送 / 页面提取。

配送时间入口与小车进度条；不能替代订单物流状态条。

使用场景：设置收货地点、选择时段或展示配送信息时。

演示状态：default、complete。

相关规则：遵循通用规则。

来源：[34:38968](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-38968)、[34:39101](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-39101)、[10:9507](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-9507)、[34:29988](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988)。

实现：src/design-system/business.tsx

```ts
{time:string;progress:number;description?:string;onSelect?:()=>void}
```

## 支付方式行 · PaymentMethodRow

业务组件 / 支付与订单 / 页面提取。

一种支付方式的单选行；统一标识尺寸、名称和选择状态。

使用场景：选择付款方式、填写卡信息、查看金额或订单状态时。

演示状态：default、selected、disabled。

相关规则：遵循通用规则。

来源：[34:30234](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-30234)、[34:31555](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-31555)、[34:33605](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-33605)。

实现：src/design-system/business.tsx

```ts
{method:Payment;selected:boolean;onSelect:()=>void;groupName?:string}
```

## 银行卡片 · BankCard

业务组件 / 支付与订单 / 页面提取。

已绑定银行卡的摘要与管理操作；不是支付方式列表的大广告卡。

使用场景：选择付款方式、填写卡信息、查看金额或订单状态时。

演示状态：mastercard、amex、mada、visa、default、selected。

相关规则：swipe。

来源：[34:30234](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-30234)、[34:31555](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-31555)、[34:33605](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-33605)。

实现：src/design-system/business.tsx

```ts
{brand:string;last4:string;expiry:string;holder?:string;selected?:boolean;onSelect?:()=>void;onDelete?:()=>void;unavailable?:boolean}
```

## 银行卡表单 · BankCardForm

业务组件 / 支付与订单 / 页面提取。

新增银行卡输入任务；姓名、卡号、到期日、安全码及逐项校验。

使用场景：选择付款方式、填写卡信息、查看金额或订单状态时。

演示状态：default、error。

相关规则：遵循通用规则。

来源：[34:30234](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-30234)、[34:31555](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-31555)、[34:33605](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-33605)。

实现：src/design-system/business.tsx

```ts
{value:CardData;onFieldFocus?:(field:keyof CardData)=>void;onChange:(v:CardData)=>void;onSubmit:()=>void;error?:string;errors?:Partial<Record<keyof CardData,string>>;total?:string}
```

## 支付方式选择器 · PaymentMethodPicker

业务组件 / 支付与订单 / 页面提取。

支付方式选择任务；在线支付与已绑定卡分组，底部提供新增卡文字入口。

使用场景：结算页的 Payment Methods 底部面板；传在线方式、已绑卡和当前选择。

演示状态：default、empty。

相关规则：遵循通用规则。

来源：[34:30234](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-30234)、[34:31555](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-31555)、[34:33605](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-33605)。

实现：src/design-system/business.tsx

```ts
{value:string;onChange:(v:string)=>void;cards?:{id:string;brand:string;last4:string;logo:string}[];onNewCard:()=>void}
```

## 结算明细 · CheckoutSummary

业务组件 / 支付与订单 / 页面提取。

结算金额明细；展示商品、优惠、运费及总额，所有金额由页面传入。

使用场景：选择付款方式、填写卡信息、查看金额或订单状态时。

演示状态：default、discount。

相关规则：遵循通用规则。

来源：[34:30234](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-30234)、[34:31555](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-31555)、[34:33605](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-33605)。

实现：src/design-system/business.tsx

```ts
{rows:{label:string;value:string;original?:string;discount?:boolean}[];total:string}
```

## 订单卡片 · OrderCard

业务组件 / 支付与订单 / 页面提取。

订单摘要；列表变体用于订单列表，overview 变体用于状态页的订单号与商品缩略图。

使用场景：选择付款方式、填写卡信息、查看金额或订单状态时。

演示状态：default、unpaid、cancelled。

相关规则：遵循通用规则。

来源：[34:30234](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-30234)、[34:31555](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-31555)、[34:33605](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-33605)。

实现：src/design-system/business.tsx

```ts
{order:Order;onAction:(action:string)=>void;actions?:string[];variant?:'list'|'overview';itemCount?:number}
```

## 订单状态头部 · OrderStatusHeader

业务组件 / 支付与订单 / 页面提取。

订单当前状态的标题、说明与插画；待支付、失败、成功等保持独立数据。

使用场景：状态页显示 Payment waiting／failed／successful／Delivering，并配来源插画。

演示状态：default、unpaid、failed、paid、preparing、delivering、completed、cancelled。

相关规则：遵循通用规则。

来源：[34:30234](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-30234)、[34:31555](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-31555)、[34:33605](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-33605)。

实现：src/design-system/business.tsx

```ts
{state:OrderState;description?:string;countdown?:string;title?:string;artwork?:ArtworkLayer[]}
```

## 订单时间线 · OrderTimeline

业务组件 / 支付与订单 / 页面提取。

订单事件的时间记录；仅在有时间节点的详情中使用。

使用场景：选择付款方式、填写卡信息、查看金额或订单状态时。

演示状态：default、complete。

相关规则：遵循通用规则。

来源：[34:30234](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-30234)、[34:31555](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-31555)、[34:33605](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-33605)。

实现：src/design-system/business.tsx

```ts
{events:{title:string;description?:string}[];current:number}
```

## 订单信息 · OrderInfo

业务组件 / 支付与订单 / 页面提取。

订单号、下单时间等标签值信息；可提供复制操作。

使用场景：选择付款方式、填写卡信息、查看金额或订单状态时。

演示状态：default、long。

相关规则：遵循通用规则。

来源：[34:30234](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-30234)、[34:31555](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-31555)、[34:33605](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-33605)。

实现：src/design-system/business.tsx

```ts
{rows:{label:string;value:string;copyable?:boolean}[];onCopy?:(v:string)=>void}
```

## 取消原因选择器 · CancelReasonPicker

业务组件 / 支付与订单 / 页面提取。

取消订单原因任务；包含单选原因、其他说明及确认。

使用场景：订单取消使用原稿底部抽屉，内含七项原因单选、带 Switch 的放回购物车提示、吸底 Confirm 与安全区。

演示状态：default、selected。

相关规则：compose-before-create。

来源：[34:35122](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-35122)。

实现：src/design-system/business.tsx

```ts
{options:Option[];value:string;onChange:(v:string)=>void;onConfirm:()=>void;open:boolean;onClose:()=>void;putBack?:boolean;onPutBack?:(v:boolean)=>void;error?:string}
```

## 评价卡片 · ReviewCard

业务组件 / 评价与媒体 / 页面提取。

已经提交的商品评价；只读展示评分、细分结果、文字和照片。

使用场景：对商品或配送评分、填写评价或选择评价媒体时。

演示状态：default、long。

相关规则：遵循通用规则。

来源：[34:24225](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225)、[34:24372](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24372)。

实现：src/design-system/business.tsx

```ts
{product:Product;rating:number;comment:string;images:string[];onView?:(src:string)=>void}
```

## 商品评分面板 · ProductRatingPanel

业务组件 / 评价与媒体 / 页面提取。

一个商品的评价任务；商品摘要、星级、口味／新鲜度、文字和媒体属于同一领域结构。

使用场景：评价一个商品；商品、总评分、Taste／Fresh 标签、评价文字与媒体属于同一模块。

演示状态：default、rated。

相关规则：遵循通用规则。

来源：[34:24225](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225)、[34:24372](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24372)。

实现：src/design-system/business.tsx

```ts
{product:Product;rating:number;onRating:(v:number)=>void;dimensions:Record<string,number>;onDimension:(name:string,value:number)=>void;expanded?:boolean;onToggle?:()=>void;comment?:string;onComment?:(v:string)=>void;files?:File[];onFiles?:(v:File[])=>void;maxLength?:number}
```

## 配送评分面板 · RiderRatingPanel

业务组件 / 评价与媒体 / 页面提取。

配送服务评价；骑手、送达时间、五档表情评分、等级文字和补充意见。

使用场景：对商品或配送评分、填写评价或选择评价媒体时。

演示状态：default、rated。

相关规则：遵循通用规则。

来源：[34:24225](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225)、[34:24372](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24372)。

实现：src/design-system/business.tsx

```ts
{name:string;rating:number;onChange:(v:number)=>void;comment?:string;onComment?:(v:string)=>void}
```

## 评价编辑器 · ReviewEditor

业务组件 / 评价与媒体 / 页面提取。

只编辑商品评分、细分选项、文字和媒体；复用 ProductRatingPanel，提交按钮由页面操作栏提供。

使用场景：编辑一个商品的评分、细分项、评论和照片；所有编辑数据通过 onChange 回传。

演示状态：default、rated、error。

相关规则：page-submit。

来源：[34:24225](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225)、[34:24372](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24372)。

实现：src/design-system/business.tsx

```ts
{value:ReviewData;onChange:(v:ReviewData)=>void;error?:string;tagOptions?:string[]}
```

## 媒体选择器 · MediaPicker

业务组件 / 评价与媒体 / 页面提取。

本地演示的媒体网格选择；相机、相册权限与真实媒体由服务接入。

使用场景：对商品或配送评分、填写评价或选择评价媒体时。

演示状态：default、selected。

相关规则：media。

来源：[34:24225](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225)、[34:24372](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24372)。

实现：src/design-system/business.tsx

```ts
{items:{id:string;src:string}[];selected:string[];onChange:(v:string[])=>void;max?:number;onDone:()=>void;onCamera:()=>void}
```

## 优惠码表单 · PromoCodeForm

业务组件 / 优惠与账户 / 页面提取。

优惠码输入与兑换任务；包含清除、可提交状态、加载和错误反馈。

使用场景：白色承载区域内展示灰色胶囊输入框、清除和 Add；有输入才能兑换，loading 禁止重复提交。

演示状态：default、filled、error、loading。

相关规则：form-surface。

来源：[10:11809](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11809)、[10:11980](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11980)、[23:15718](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=23-15718)、[34:36706](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-36706)。

实现：src/design-system/business.tsx

```ts
{value:string;onChange:(v:string)=>void;onSubmit:()=>void;onFocus?:()=>void;error?:string;loading?:boolean}
```

## 活动横幅 · CampaignBanner

业务组件 / 优惠与账户 / 页面提取。

一个活动的图文入口；活动素材和文案由配置提供，不代替商品分类。

使用场景：展示权益、优惠券、账户身份或账户设置时。

演示状态：default、image。

相关规则：遵循通用规则。

来源：[10:11809](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11809)、[10:11980](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11980)、[23:15718](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=23-15718)、[34:36706](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-36706)。

实现：src/design-system/business.tsx

```ts
{variant?:'default'|'source';src?:string;alt:string;onClick:()=>void;ratio?:string;title?:string;subtitle?:string;actionLabel?:string;artwork?:React.ReactNode;background?:string}
```

## 新客优惠 · NewUserOffer

业务组件 / 优惠与账户 / 页面提取。

新人券包活动；展示总权益、券列表和查看详情入口。

使用场景：展示权益、优惠券、账户身份或账户设置时。

演示状态：default、long。

相关规则：遵循通用规则。

来源：[10:11809](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11809)、[10:11980](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11980)、[23:15718](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=23-15718)、[34:36706](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-36706)。

实现：src/design-system/business.tsx

```ts
{amount:string;coupons:CouponData[];onUse:()=>void;onDetails:()=>void;header?:React.ReactNode}
```

## 账户头部 · AccountHeader

业务组件 / 优惠与账户 / 页面提取。

账户身份摘要；区分游客登录入口与已登录头像姓名。

使用场景：展示权益、优惠券、账户身份或账户设置时。

演示状态：default、guest、profile。

相关规则：chrome。

来源：[10:11809](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11809)、[10:11980](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11980)、[23:15718](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=23-15718)、[34:36706](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-36706)。

实现：src/design-system/business.tsx

```ts
{name?:string;phone?:string;avatarSrc?:string;variant?:'card'|'profile';onLogin:()=>void}
```

## 设置分组 · SettingGroup

业务组件 / 优惠与账户 / 页面提取。

同组设置入口；管理标题、辅助值和图标，不执行真实设置请求。

使用场景：展示权益、优惠券、账户身份或账户设置时。

演示状态：default、long。

相关规则：遵循通用规则。

来源：[10:11809](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11809)、[10:11980](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11980)、[23:15718](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=23-15718)、[34:36706](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-36706)。

实现：src/design-system/business.tsx

```ts
{items:{id:string;title:string;description?:string;value?:React.ReactNode;icon?:IconName;leading?:React.ReactNode}[];onAction:(v:string)=>void}
```

## 聊天消息 · ChatMessage

业务组件 / 客服与帮助 / 页面提取。

客服聊天中的单条用户、客服或系统消息。

使用场景：客服、欢迎语和排队提示使用白色气泡；用户消息使用绿色气泡白字，图片消息使用 media，接入提示使用 notice。

演示状态：default、user、system、media、long。

相关规则：source、chat、queue、chat-actions。

来源：[34:42209](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42209)、[34:42398](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42398)。

实现：src/design-system/business.tsx

```ts
{side?:'agent'|'user'|'system';text?:string;time?:string;children?:React.ReactNode;variant?:'bubble'|'notice'|'media'}
```

## 聊天输入栏 · ChatComposer

业务组件 / 客服与帮助 / 页面提取。

客服聊天的输入与发送区；消息内容和发送状态由页面管理。

使用场景：查问题、等待客服、发送消息或查看工单时。

演示状态：default、filled、disabled。

相关规则：chat-actions。

来源：[34:41773](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-41773)、[34:42209](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42209)、[34:42611](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42611)。

实现：src/design-system/business.tsx

```ts
{value:string;onChange:(v:string)=>void;onSend:()=>void;onAttach:()=>void;disabled?:boolean;expanded?:boolean}
```

## 客服排队提示 · ServiceQueue

业务组件 / 客服与帮助 / 页面提取。

等待人工客服的排队状态；展示排位与取消等待。

使用场景：把队列位置和取消操作放在同一个客服气泡内，位置绿色强调，取消居中。

演示状态：default。

相关规则：queue。

来源：[34:42083](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42083)。

实现：src/design-system/business.tsx

```ts
{position:number;onCancel:()=>void}
```

## 售后工单卡片 · ServiceTicketCard

业务组件 / 客服与帮助 / 页面提取。

一次客服工单摘要；展示状态、时间及继续或查看历史操作。

使用场景：查问题、等待客服、发送消息或查看工单时。

演示状态：default、ended。

相关规则：status。

来源：[34:41773](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-41773)、[34:42209](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42209)、[34:42611](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42611)。

实现：src/design-system/business.tsx

```ts
{id:string;time:string;status:'ongoing'|'ended';onContinue:()=>void;onHistory:()=>void}
```

## 售后工单详情 · ServiceTicketDetail

业务组件 / 客服与帮助 / 页面提取。

一个客服问题的详情和联系入口；不混入购物订单的状态。

使用场景：查问题、等待客服、发送消息或查看工单时。

演示状态：default、long。

相关规则：遵循通用规则。

来源：[34:41773](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-41773)、[34:42209](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42209)、[34:42611](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42611)。

实现：src/design-system/business.tsx

```ts
{question:string;answer:string;onContact:()=>void;onLink?:()=>void}
```

## 常见问题列表 · FAQList

业务组件 / 客服与帮助 / 页面提取。

常见问题的折叠问答列表；仅供查询，不收集表单。

使用场景：查问题、等待客服、发送消息或查看工单时。

演示状态：default、long。

相关规则：遵循通用规则。

来源：[34:41773](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-41773)、[34:42209](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42209)、[34:42611](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42611)。

实现：src/design-system/business.tsx

```ts
{items:{id:string;title:string;content:React.ReactNode}[]}
```

## 品牌标志 · BrandLogo

业务组件 / 登录与授权 / 页面提取。

已有品牌标识；只在登录或首页品牌区域使用，不作为普通标题字体。

使用场景：输入手机号、验证身份或确认授权告知时。

演示状态：default、short。

相关规则：遵循通用规则。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[1:569](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-569)、[1:743](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-743)。

实现：src/design-system/business.tsx

```ts
{variant?:'full'|'short'}
```

## 法律条款文本 · LegalText

业务组件 / 登录与授权 / 页面提取。

带服务条款／隐私链接的合规文字；主文和链接共用同一字阶。

使用场景：输入手机号、验证身份或确认授权告知时。

演示状态：default、long。

相关规则：遵循通用规则。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[1:569](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-569)、[1:743](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-743)。

实现：src/design-system/business.tsx

```ts
{text:string;onLink?:(label:string)=>void}
```

## 国家或地区选择器 · CountryPicker

业务组件 / 登录与授权 / 页面提取。

手机号区号选择任务；国家、旗帜、区号保持一行的业务关系。

使用场景：输入手机号、验证身份或确认授权告知时。

演示状态：default。

相关规则：遵循通用规则。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[1:569](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-569)、[1:743](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-743)。

实现：src/design-system/business.tsx

```ts
{open:boolean;onClose:()=>void;value:string;onChange:(value:string)=>void}
```

## 手机号登录表单 · PhoneLoginForm

业务组件 / 登录与授权 / 页面提取。

登录手机号任务；标题、区号、手机号、继续、协议和邮箱替代入口整体复用。

使用场景：输入手机号、验证身份或确认授权告知时。

演示状态：default、filled、without-country、error、loading、country-open。

相关规则：遵循通用规则。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[1:569](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-569)、[1:743](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-743)。

实现：src/design-system/business.tsx

```ts
{country:string;phone:string;onCountry:(v:string)=>void;onPhone:(v:string)=>void;onSubmit:()=>void;error?:string;loading?:boolean;showCountry?:boolean;initialCountryOpen?:boolean;onEmail?:()=>void;onPolicy?:(title:string)=>void;onInputFocus?:()=>void;onCountryOpen?:()=>void;focused?:boolean}
```

## 验证码字段 · VerificationCodeField

业务组件 / 登录与授权 / 页面提取。

验证码验证任务；包含接收号码、OTPInput、重发和更多方式。

使用场景：输入手机号、验证身份或确认授权告知时。

演示状态：default、filled、six-digits、error、countdown。

相关规则：遵循通用规则。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[1:569](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-569)、[1:743](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-743)。

实现：src/design-system/business.tsx

```ts
{value:string;onChange:(v:string)=>void;length?:4|6;error?:string;onResend:()=>void;remaining?:number;phone?:string;onMore?:()=>void;onFocus?:()=>void}
```

## 授权确认抽屉 · ConsentSheet

业务组件 / 登录与授权 / 页面提取。

授权告知任务；正文可滚动，接受与拒绝等宽，是否可关闭遵循授权流程。

使用场景：输入手机号、验证身份或确认授权告知时。

演示状态：default、long。

相关规则：遵循通用规则。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[1:569](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-569)、[1:743](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-743)。

实现：src/design-system/business.tsx

```ts
{open:boolean;children?:React.ReactNode;onAccept:()=>void;onDecline:()=>void;onClose:()=>void;longForm?:boolean}
```

## 订单备注 · OrderRemarks

业务组件 / 支付与订单 / 页面提取。

配送备注任务；快捷标签、历史备注、多行补充和确认。

使用场景：选择付款方式、填写卡信息、查看金额或订单状态时。

演示状态：default、selected、long。

相关规则：form-surface。

来源：[34:34746](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34746)、[34:34820](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34820)。

实现：src/design-system/business.tsx

```ts
{options:string[];selected:string[];onSelect:(v:string[])=>void;history:string[];note:string;onNote:(v:string)=>void;onConfirm:()=>void}
```

## 订单提交栏 · OrderSubmitBar

业务组件 / 支付与订单 / 页面提取。

结算底部的金额与下单操作；可展示当前支付方式标识。

使用场景：选择付款方式、填写卡信息、查看金额或订单状态时。

演示状态：default、disabled、loading、integrated。

相关规则：遵循通用规则。

来源：[34:30234](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-30234)、[34:31555](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-31555)、[34:33605](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-33605)。

实现：src/design-system/business.tsx

```ts
{total:string;label?:string;onSubmit:()=>void;disabled?:boolean;loading?:boolean;variant?:'default'|'integrated';paymentLogo?:string}
```

## 账户注销说明 · AccountDeletionNotice

业务组件 / 优惠与账户 / 页面提取。

注销前提及权益说明；使用正常文档流，避免文字重叠。

使用场景：展示权益、优惠券、账户身份或账户设置时。

演示状态：default、long。

相关规则：遵循通用规则。

来源：[21:13706](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=21-13706)。

实现：src/design-system/business.tsx

```ts
{conditions:string[];consequences:string[];onApply:()=>void}
```

## 促销商品组 · PromotionGroup

业务组件 / 商品与购物车 / 页面提取。

原稿购物车活动条与参与商品的分组；复用 CartPromotionBar 和商品行，不加虚构全选框、绿色提示卡或额外白卡。

使用场景：按原稿组合 CartPromotionBar 与参与活动的 CartItem；赠品券、促销门槛与买赠保持各自结构。

演示状态：default、eligible、gift、buy-get。

相关规则：activity。

来源：[52:44486](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-44486)、[52:44962](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-44962)、[52:45491](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-45491)、[52:45707](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-45707)。

实现：src/design-system/business.tsx

```ts
{kind?:'sale'|'gift'|'buy-get';title:string;eligible:boolean;remainingCount?:number;discount?:string;selected?:boolean;onSelect?:(v:boolean)=>void;onAction:()=>void;children:React.ReactNode}
```

## 不可用商品组 · UnavailableProductsGroup

业务组件 / 商品与购物车 / 页面提取。

购物车失效商品分组；展示失效原因、数量、展开和移除。

使用场景：商品被浏览、选择规格、加入购物车或结算前检查时。

演示状态：default、expanded、empty。

相关规则：spacing。

来源：[28:19661](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=28-19661)、[52:45491](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-45491)。

实现：src/design-system/business.tsx

```ts
{products:Product[];expanded:boolean;onExpand:()=>void;onRemoveAll:()=>void;onRemove:(id:string)=>void;totalCount?:number}
```

## 购物车头部 · CartHeader

业务组件 / 导航 / 页面提取。

购物车标题、商品总数、收货地址入口和清空操作。

使用场景：需要在同一层级切换内容或在应用主栏目之间跳转时。

演示状态：default、empty、address-missing。

相关规则：chrome、toast、address。

来源：[28:19480](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=28-19480)、[28:19661](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=28-19661)。

实现：src/design-system/business.tsx

```ts
{count:number;address?:string;onAddress?:()=>void;onClear:()=>void}
```

## 搜索页头部 · SearchHeader

业务组件 / 导航 / 页面提取。

独立搜索页面头部；返回、搜索输入、购物车入口共同组成。

使用场景：需要在同一层级切换内容或在应用主栏目之间跳转时。

演示状态：default、filled。

相关规则：遵循通用规则。

来源：[10:2960](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-2960)、[10:3045](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3045)。

实现：src/design-system/business.tsx

```ts
{value:string;onChange:(v:string)=>void;onSearch:(v:string)=>void;onBack:()=>void;onCart:()=>void;cartCount?:number}
```

## 搜索建议 · SearchSuggestions

业务组件 / 输入与筛选 / 页面提取。

搜索历史或热门词区域；支持词条点击、历史清除和展开。

使用场景：用户需要填写、选择、筛选或提交一个值时。

演示状态：default、empty。

相关规则：遵循通用规则。

来源：[10:2960](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-2960)、[10:3007](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3007)。

实现：src/design-system/business.tsx

```ts
{title:string;items:string[];onSelect:(v:string)=>void;onClear?:()=>void;expandable?:boolean}
```

## 分类入口卡片 · CategoryTile

业务组件 / 导航 / 页面提取。

首页一个商品分类入口；可用普通图文或营销首项变体。

使用场景：需要在同一层级切换内容或在应用主栏目之间跳转时。

演示状态：default、promotion。

相关规则：遵循通用规则。

来源：[1:1965](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-1965)。

实现：src/design-system/business.tsx

```ts
{item:CategoryItem;onSelect:()=>void}
```

## 金刚区入口 · CategoryGrid

业务组件 / 导航 / 页面提取。

首页金刚区入口；按网格组织真实业务分类入口。

使用场景：需要在同一层级切换内容或在应用主栏目之间跳转时。

演示状态：default。

相关规则：遵循通用规则。

来源：[1:1965](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-1965)。

实现：src/design-system/business.tsx

```ts
{items:CategoryItem[];onSelect:(id:string)=>void}
```

## 首页头部 · HomeHeader

业务组件 / 导航 / 页面提取。

商城首页头部；品牌、地址、配送承诺、辅助信息和搜索组成。

使用场景：需要在同一层级切换内容或在应用主栏目之间跳转时。

演示状态：default、filled。

相关规则：遵循通用规则。

来源：[1:1965](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-1965)。

实现：src/design-system/business.tsx

```ts
{address:string;delivery:string;information:string;query:string;onQuery:(v:string)=>void;onAddress:()=>void;onSearch?:()=>void}
```

## 分类页框架 · CategoryLayout

业务组件 / 导航 / 页面提取。

商品分类浏览任务；主分类、带图次分类和商品列表一起协同。

使用场景：image-primary 为一级图文与二级文字；text-primary 为一级文字与二级图文。导航和结果区分别滚动，分类、筛选和排序均受控。

演示状态：text-primary、image-primary、empty。

相关规则：category-framework。

来源：[136:39852](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-39852)、[136:40313](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-40313)。

实现：src/design-system/business.tsx

```ts
type ProductAvailability = 'available'|'sold-out'|'unavailable'|'not-for-sale';
type ProductSKU = {id:string;label:string;amount:string;unitPrice?:string;promotion?:string;max?:number};
type CommerceProduct = Product&{currency?:string;unit?:string;unitPrice?:string;promotion?:string;supplier?:string;supplierVariant?:'supplier'|'comparison';orderBy?:string;availability?:ProductAvailability;purchase?:'add'|'quantity'|'count'|'notify'|'similar'|'none';max?:number;skus?:ProductSKU[]};
type CommerceCategory = {id:string;label:string;image?:string;selectedImage?:string;layers?:ArtworkLayer[]};

{variant?:'image-primary'|'text-primary';title:string;categories:CommerceCategory[];selected:string;onSelect:(id:string)=>void;products:CommerceProduct[];onAdd:(id:string)=>void;onQuantity?:(id:string,value:number)=>void;primaryCategories?:CommerceCategory[];primaryOptions:string[];primaryValue?:string;onPrimaryChange:(value:string)=>void;expanded?:boolean;onExpand:()=>void;query?:string;onQuery?:(v:string)=>void;onSearch?:()=>void;tertiaryOptions?:string[];tertiaryValue?:string;onTertiaryChange?:(v:string)=>void;sort?:'default'|'sales'|'price';onSort?:(sort:'default'|'sales'|'price')=>void}
```

## 订单阶段进度 · OrderStageProgress

业务组件 / 支付与订单 / 页面提取。

订单四阶段进度；对应下单、备货、配送、签收，当前阶段后的连接线填充约一半，已完成连接线全填充，待达阶段灰色。

使用场景：选择付款方式、填写卡信息、查看金额或订单状态时。

演示状态：default、preparing、delivering、complete。

相关规则：order-stage-progress。

来源：[152:57104](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=152-57104)、[152:57164](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=152-57164)、[152:57211](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=152-57211)、[152:57267](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=152-57267)。

实现：src/design-system/business.tsx

```ts
{current?:number}
```

## 订单送达信息 · OrderArrival

业务组件 / 支付与订单 / 页面提取。

订单到达时间和当前允许的动作；待支付用 Repay，配送中可联系配送员。

使用场景：选择付款方式、填写卡信息、查看金额或订单状态时。

演示状态：default、unpaid。

相关规则：button。

来源：[34:30234](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-30234)、[34:31555](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-31555)、[34:33605](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-33605)。

实现：src/design-system/business.tsx

```ts
{time:string;actions?:string[];onAction:(action:string)=>void}
```

## 订单配送详情 · OrderDeliveryDetails

业务组件 / 支付与订单 / 页面提取。

订单配送信息分区；统一时间、收货地址和联系人标签值布局。

使用场景：选择付款方式、填写卡信息、查看金额或订单状态时。

演示状态：default。

相关规则：遵循通用规则。

来源：[34:30234](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-30234)、[34:31555](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-31555)、[34:33605](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-33605)。

实现：src/design-system/business.tsx

```ts
{time:string;address:Address}
```

## 手机号输入框 · PhoneField

业务组件 / 登录与授权 / 页面提取。

手机号单行输入；可带区号入口，也可仅输入手机号。

使用场景：手机号登录或编辑电话；showCountry 控制是否带区号，onCountry 打开国家选择，value 只保存号码部分。

演示状态：default、filled、without-country、error、disabled。

相关规则：classification。

来源：[1:470](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470)、[1:569](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-569)、[1:743](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-743)。

实现：src/design-system/business.tsx

```ts
{value:string;onChange:(v:string)=>void;country?:string;showCountry?:boolean;onCountry?:()=>void;placeholder?:string;disabled?:boolean;error?:string;focused?:boolean;onFocus?:()=>void}
```

## 客服订单卡片 · SupportOrderCard

业务组件 / 客服与帮助 / 页面提取。

客服选择订单及聊天引用的紧凑订单卡；展示原稿订单编号、四张商品图、数量、状态和时间。

使用场景：查问题、等待客服、发送消息或查看工单时。

演示状态：default。

相关规则：status。

来源：[34:41773](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-41773)、[34:42209](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42209)、[34:42611](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42611)。

实现：src/design-system/business.tsx

```ts
{status?:string;count?:number;time?:string;onSelect?:()=>void}
```

## 配送评价卡片 · RiderReviewCard

业务组件 / 评价与媒体 / 页面提取。

已提交配送评价的只读摘要；展示骑手、已选表情和评价正文。

使用场景：对商品或配送评分、填写评价或选择评价媒体时。

演示状态：default。

相关规则：遵循通用规则。

来源：[34:24225](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225)、[34:24372](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24372)。

实现：src/design-system/business.tsx

```ts
{comment:string;rating?:number;name?:string}
```

## 购物车活动条 · CartPromotionBar

业务组件 / 商品与购物车 / 页面提取。

购物车 GIFT/SALE 活动条；标签、活动标题、操作和辅助说明按原稿分层。

使用场景：购物车活动标签、标题、说明和查看入口的独立模块。

演示状态：gift、sale、threshold。

相关规则：activity。

来源：[136:39483](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-39483)、[136:40098](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=136-40098)、[28:19480](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=28-19480)、[52:46299](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-46299)。

实现：src/design-system/business.tsx

```ts
{kind?:'sale'|'gift';title:string;description?:string;actionLabel?:string;onAction?:()=>void;celebrate?:boolean}
```

## 优惠券列表 · VoucherList

业务组件 / 优惠与账户 / 页面提取。

优惠券列表承载层；统一灰色背景、白色券卡，以及无券和历史券状态。

使用场景：展示当前券、历史券或无券状态；组件自己绘制灰色承载层，券卡保持白色。

演示状态：default、empty、expired。

相关规则：surface。

来源：[10:11809](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11809)、[10:11887](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11887)、[10:11980](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11980)。

实现：src/design-system/business.tsx

```ts
{coupons:CouponData[];onUse:()=>void;onDetails:(index:number)=>void;empty?:boolean}
```

## 兑券成功弹窗 · VoucherSuccessDialog

业务组件 / 优惠与账户 / 页面提取。

兑换券成功弹窗；固定浅绿渐变背景、白色券卡和 Got it，关闭按钮可选。

使用场景：兑换成功时使用固定浅绿渐变弹窗；showClose 默认 false，需要时显式打开。

演示状态：default、closable。

相关规则：voucher-success。

来源：[21:12509](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=21-12509)。

实现：src/design-system/business.tsx

```ts
{open:boolean;coupon:CouponData;onClose:()=>void;onUse:()=>void;onDetails:()=>void;showClose?:boolean}
```

## 首页新客券横幅 · HomeVoucherBanner

业务组件 / 优惠与账户 / 页面提取。

首页新客券营销头图；使用原稿手部素材、SAR100 权益和入口。

使用场景：商城首页展示新客券营销入口，使用原稿 SAR100 和手部素材。

演示状态：default。

相关规则：遵循通用规则。

来源：[23:15280](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=23-15280)。

实现：src/design-system/business.tsx

```ts
{onClick:()=>void}
```

## 图标 · Icon

基础组件 / 展示 / 页面提取。

本地 SVG 图标库入口；必须选择与含义相符的名称和状态。

使用场景：已有内容需要统一格式、层级或媒介呈现时。

演示状态：default。

相关规则：遵循通用规则。

来源：规范补充，无独立原稿。

实现：src/design-system/Icon.tsx

```ts
{name:IconName;label?:string;className?:string}
```

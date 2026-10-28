# 页面结构与参考索引

使用方法：按业务找模板，在 data/page-recipes.json 选对应状态，参考 PageAssembly.tsx 的具体分支和 data 中的真实内容；不能从组件列表推断布局顺序。page-recipes 的 components 是依赖清单，不是排版顺序。

## 所有页面的共同结构

Page 统一背景、状态栏、顶部导航、滚动 main、固定 footer、安全区。正文分区只负责自身内容。弹层、键盘、规格选择面板按对应组件接口控制；ProductSpecPicker 已是完整抽屉，不再重复包 BottomSheet。业务表单字段留在框内；表单状态由页面传入。

## 常见页面选择

| 页面任务 | 推荐组合 | 易错点 |
|---|---|---|
| 首页/活动入口 | HomeHeader、Carousel、CampaignBanner、CategoryGrid、ProductCollection、TabBar | CategoryGrid 展示名为金刚区入口；feeds 灰底白卡 |
| 分类浏览 | CategoryLayout + Page/TabBar | image-primary、text-primary 两个框架；不用首页金刚区网格代替分类结构 |
| 商品浏览 | ProductCard / ProductList / ProductCollection | grid、full-width、category 三种卡；feeds layout=grid/row；单位、币种从数据来 |
| 购物车 | CartHeader、CartGroup、CartItem、CartPromotionBar、CartSummaryBar | 购物车数量下限1，商卡可1→0；图片1:1；活动条按原稿 |
| 订单详情 | OrderStageProgress、OrderArrival、OrderDeliveryDetails 等 | 不用普通 Steps 代替原稿阶段图标；四阶段连接线随 current 变化 |
| 优惠券 | PromoCodeForm、VoucherList、CouponCard | 灰色承载底、白券卡；空状态插画与业务相符 |
| 地址编辑 | MapAddressPicker/AddressForm | 框内字段名、表单与页面底色区分；保留选址/选择交互 |
| 账户资料/关于 | Page、Card、ListRow 等 | 灰底白卡，不改成无来源的保存表单 |
| 客服与聊天 | Card/ListRow/ListGroup、ChatMessage、ChatComposer、ServiceQueue | 不恢复客服入口网格；排队和欢迎信息用气泡承接 |

## 47 类组合与 109 个页面/状态

### login

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| Log in Page | 1:470 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-470) |
| 输入号码状态 | 1:519 | filled | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-519) |

### verify

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| Verify number Page | 1:569 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-569) |

### country-picker

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| Log in Page | 1:590 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-590) |

### consent

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 隐私弹窗 | 1:743 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-743) |
| 隐私弹窗 | 1:765 | long | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-765) |

### home

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 首页_BlackBlue | 1:1965 | default | 375×1981 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=1-1965) |

### category

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 分类页 | 34:22799 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-22799) |
| 分类页-上滑后 | 10:2048 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-2048) |
| 分类页_一级分类展开 | 10:2123 | expanded | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-2123) |

### search

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 搜索浮层页 | 10:2960 | suggestions | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-2960) |
| 搜索结果 | 10:3007 | empty | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3007) |
| 搜索结果 | 10:3045 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3045) |

### product-detail

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 商详-英文版_redesign | 10:3556 | long | 375×2372 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3556) |
| 商详-英文版 | 10:3660 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3660) |
| 商详-英文版 | 10:3738 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3738) |
| 商详-英文版 | 10:3815 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3815) |
| 商详-英文版 | 10:3900 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-3900) |

### cart

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 左滑删除 | 10:5197 | swipe | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-5197) |
| 没选地址 | 10:5383 | address-missing | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-5383) |
| 全部删除 | 10:6051 | clear-confirm | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-6051) |
| 有商品 | 28:19480 | default | 375×1851 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=28-19480) |
| 空购物车（带失效） | 28:19661 | empty | 375×1787 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=28-19661) |
| 加购 | 28:19777 | recommendations | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=28-19777) |
| 没满足门槛 | 52:44486 | threshold | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-44486) |
| 没选 | 52:44962 | threshold | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-44962) |
| 没满足 | 52:45491 | threshold | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-45491) |
| 满足 | 52:45707 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-45707) |

### cart-address

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 切换地址 | 10:5565 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-5565) |

### invalid-cart

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 去结算时有失效品 | 10:5811 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-5811) |

### address-sheet

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 地址弹窗 | 10:9300 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-9300) |
| 首页-地址弹窗-地址簿无地址 | 21:13037 | empty | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=21-13037) |
| 首页-地址弹窗 | 34:38863 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-38863) |

### delivery-slots

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 时间弹窗 | 10:9507 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-9507) |

### order-list

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| all | 10:10108 | default | 375×1999 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-10108) |
| Unpayment  | 10:10304 | unpaid | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-10304) |
| 已完成订单 | 34:21920 | completed | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-21920) |
| 空 | 34:32377 | empty | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-32377) |

### account

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 1 | 34:36924 | guest | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-36924) |
| 4 | 34:36706 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-36706) |
| 未登录 | 34:41971 | guest | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-41971) |

### language

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 已登录 | 10:10765 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-10765) |

### vouchers

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 英文 | 10:11809 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11809) |
| 英文 | 10:11841 | terms | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11841) |
| 英文 | 10:11887 | empty | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11887) |
| 英文 | 10:11980 | expired | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=10-11980) |
| 英文 | 21:12475 | filled | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=21-12475) |
| 英文 | 21:12509 | success | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=21-12509) |

### map-address

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 搜索地址页 - 地图选点 | 21:12840 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=21-12840) |
| 搜索地址页 - 地图选点 | 21:12886 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=21-12886) |
| 搜索地址页 - 搜索输入中 | 34:39364 | filled | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-39364) |

### delete-account

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| Delete Account | 21:13706 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=21-13706) |

### profile

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| Profile | 21:13732 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=21-13732) |

### about

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| About | 21:13777 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=21-13777) |

### delete-failed

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| delete account failed | 21:13817 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=21-13817) |

### new-user

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 未登录-长图 | 23:15280 | guest | 375×1337 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=23-15280) |
| 登录-无即将过期 | 23:16641 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=23-16641) |

### new-user-popup

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 登陆弹窗 | 23:15718 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=23-15718) |

### order-detail

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 写评价 | 34:22043 | completed | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-22043) |
| 展开更多按钮 | 34:22337 | completed | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-22337) |
| 待支付 | 34:32519 | unpaid | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-32519) |
| 准备中 | 34:33303 | preparing | 375×923 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-33303) |
| 配送中 | 34:33605 | delivering | 375×1004 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-33605) |
| 取消 | 34:34156 | cancelled | 375×923 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34156) |

### review-editor

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 配送评价输入中 | 34:24211 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24211) |
| 商品评价输入中 | 34:24295 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24295) |

### review-list

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 继续评价 | 34:24225 | default | 375×1076 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24225) |
| 商品未打分 | 34:24264 | unrated | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24264) |
| 商品已打分，展开细分维度 | 34:24279 | rated | 375×1267 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24279) |
| 商品已评价 | 34:24304 | rated | 375×1597 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24304) |

### review-result

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 评价成功（部分提交） | 34:24246 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24246) |

### image-viewer

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 查看大图（图片默认为fit） | 34:24321 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24321) |

### review-submit

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 提交评价弹窗 | 34:24326 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24326) |

### media-picker

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 选照片或视频 | 34:24372 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-24372) |

### checkout

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 初次使用-未绑卡 | 34:29988 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-29988) |
| 默认选中银行卡 | 34:30234 | card | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-30234) |
| 默认选中其他在线支付方式 | 34:30436 | online | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-30436) |

### payment-methods

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 没卡 | 34:30629 | empty | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-30629) |
| 有卡 | 34:30886 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-30886) |

### card-form

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 默认 | 34:31170 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-31170) |
| 卡信息有误 | 34:31555 | error | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-31555) |

### bank-cards

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 我的银行卡-有卡 | 34:31276 | default | 375×936 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-31276) |
| 我的银行卡-没卡 | 34:31419 | empty | 375×811 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-31419) |

### order-result

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 支付失败 | 34:32718 | failed | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-32718) |
| 支付成功 | 34:32912 | paid | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-32912) |
| 支付成功 | 34:33091 | paid | 375×923 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-33091) |

### remarks

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 备注 | 34:34746 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34746) |
| 选择 | 34:34820 | selected | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-34820) |

### cancel-reason

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 选择取消原因 | 34:35122 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-35122) |
| 选择取消原因 | 34:35150 | error | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-35150) |

### address-book

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 地址簿 | 34:38968 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-38968) |

### address-form

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 地址编辑页 | 34:39101 | label-conflict | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-39101) |
| 地址编辑页 | 34:39182 | filled | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-39182) |
| 地址编辑页 | 34:39241 | custom-label | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-39241) |
| 地址编辑页 | 34:39300 | error | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-39300) |

### support-orders

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 客服与帮助 | 34:41773 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-41773) |

### chat

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| mvp | 34:42033 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42033) |
| mvp | 34:42083 | queue | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42083) |
| mvp | 34:42140 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42140) |
| mvp | 34:42209 | long | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42209) |
| mvp | 34:42300 | confirm | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42300) |
| mvp | 34:42398 | attachments | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42398) |

### support-home

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 客服与帮助 | 34:42505 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42505) |

### faq-list

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| account | 34:42580 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42580) |

### service-tickets

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| service progress | 34:42611 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42611) |
| service progress | 34:42652 | empty | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42652) |

### faq-detail

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| detail | 34:42672 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=34-42672) |

### product-spec

| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |
|---|---|---|---|---|
| 默认 | 52:46299 | default | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-46299) |
| 选择成功 | 52:46431 | selected | 375×812 | [原稿](https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits?node-id=52-46431) |

所有入口的 visualReview 原值保留；不是已验收页面清单。运行 source 后可用 ?view=system&panel=composition&recipe=节点ID 查看组合对照；?assembly=节点ID 查看组合，?view=system&component=组件标识&variant=演示状态 查看组件。

# 组件接口参考

接口从实际 TypeScript 源码提取。具体状态和来源见组件目录；每个组件均在 `.km-system` 下使用。

## 按钮（Button）

基础组件 · 操作

```ts
React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'outline' | 'text' | 'promotion';
    size?: 'regular' | 'medium' | 'small' | 'compact';
    loading?: boolean;
}
```

## 加购按钮（AddButton）

业务组件 · 商品与购物车

```ts
{
    onClick?: () => void;
    disabled?: boolean;
}
```

## 数量步进器（QuantityStepper）

基础组件 · 操作

```ts
{
    value: number;
    onChange: (v: number) => void;
    max?: number;
    min?: number;
    disabled?: boolean;
    variant?: 'default' | 'overlay' | 'field';
}
```

## 标签（Tag）

基础组件 · 展示

```ts
{
    children: React.ReactNode;
    tone?: 'success' | 'neutral' | 'danger' | 'marketing' | 'warning';
    variant?: 'outline';
}
```

## 选择标签（ChoiceChip）

基础组件 · 输入与筛选

```ts
{
    children: React.ReactNode;
    selected: boolean;
    onClick: () => void;
    disabled?: boolean;
    background?: 'white' | 'gray';
}
```

## 单行输入框（TextField）

基础组件 · 输入与筛选

```ts
React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
    hint?: string;
    labelPlacement?: 'outside' | 'inside';
}
```

## 单选行（RadioRow）

基础组件 · 输入与筛选

```ts
{
    label: string;
    description?: string;
    checked: boolean;
    onChange: () => void;
    name: string;
    value: string;
    disabled?: boolean;
}
```

## 评分（Rating）

基础组件 · 输入与筛选

```ts
{
    value: number;
    onChange?: (value: number) => void;
    size?: 16 | 20 | 24 | 28;
    variant?: 'stars' | 'sentiment';
}
```

## 优惠券卡片（CouponCard）

业务组件 · 优惠与账户

```ts
{
    coupon: CouponData;
    onUse?: () => void;
    onDetails: () => void;
}
```

## 列表行（ListRow）

基础组件 · 展示

```ts
{
    title: string;
    description?: string;
    trailing?: React.ReactNode;
    leading?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    danger?: boolean;
}
```

## 提示条（Notice）

基础组件 · 反馈

```ts
{
    children: React.ReactNode;
}
```

## 底部抽屉（BottomSheet）

基础组件 · 反馈

```ts
{
    open: boolean;
    title: string;
    children: React.ReactNode;
    onClose: () => void;
    footer?: React.ReactNode;
    showClose?: boolean;
    variant?: 'default' | 'selection' | 'consent' | 'country' | 'product' | 'review-confirm' | 'payment' | 'address-conflict' | 'support-orders' | 'cancel-reason';
    maxHeight?: number;
    titleScrollable?: boolean;
}
```

## 状态文字（StatusLabel）

基础组件 · 展示

```ts
{
    children: React.ReactNode;
    tone?: 'green' | 'gray';
}
```

## 文本（Text）

基础组件 · 展示

```ts
{
    as?: 'span' | 'p' | 'h1' | 'h2' | 'h3';
    tone?: 'primary' | 'secondary' | 'danger' | 'success';
    size?: 'caption' | 'body' | 'control' | 'title' | 'heading';
    children: React.ReactNode;
}
```

## 文字按钮（TextButton）

基础组件 · 操作

```ts
{
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    tone?: 'primary' | 'brand' | 'danger';
    icon?: React.ReactNode;
}
```

## 操作栏（ActionBar）

基础组件 · 页面与布局

```ts
{
    children: React.ReactNode;
    safeArea?: boolean;
    layout?: 'equal' | 'content';
}
```

## 验证码输入框（OTPInput）

基础组件 · 输入与筛选

```ts
{
    value: string;
    onChange: (v: string) => void;
    length?: 4 | 6;
    error?: string;
    disabled?: boolean;
    focused?: boolean;
    onFocus?: () => void;
}
```

## 网格布局（Grid）

基础组件 · 页面与布局

```ts
{
    children: React.ReactNode;
    columns?: 1 | 2 | 3 | 4;
}
```

## 分割线（Divider）

基础组件 · 页面与布局

```ts
{
    label?: string;
}
```

## 卡片（Card）

基础组件 · 页面与布局

```ts
{
    children: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}
```

## 内容分区（Section）

基础组件 · 页面与布局

```ts
{
    title: string;
    action?: React.ReactNode;
    children: React.ReactNode;
}
```

## 图片（Image）

基础组件 · 展示

```ts
{
    src: string;
    alt: string;
    fit?: 'contain' | 'cover';
    ratio?: string;
    onClick?: () => void;
}
```

## 头像（Avatar）

基础组件 · 展示

```ts
{
    src?: string;
    name: string;
    size?: 24 | 40 | 64 | 72;
}
```

## 角标（Badge）

基础组件 · 展示

```ts
{
    count?: number;
    dot?: boolean;
    children?: React.ReactNode;
}
```

## 状态栏（StatusBar）

基础组件 · 页面与布局

```ts
{
    time?: string;
    inverse?: boolean;
}
```

## 底部手势条（HomeIndicator）

基础组件 · 页面与布局

```ts
No props
```

## 页面容器（Page）

基础组件 · 页面与布局

```ts
{
    children: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    chromeBackground?: string;
    background?: 'white' | 'gray';
    height?: number;
    showStatusBar?: boolean;
    showHomeIndicator?: boolean;
    inverse?: boolean;
    className?: string;
}
```

## 应用外壳（AppShell）

基础组件 · 页面与布局

```ts
{
    children: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    inverse?: boolean;
    surface?: 'default' | 'plain' | 'account' | 'home';
    height?: number;
    showStatusBar?: boolean;
    showHomeIndicator?: boolean;
}
```

## 图标按钮（IconButton）

基础组件 · 操作

```ts
{
    name: IconName;
    label: string;
    onClick?: () => void;
    disabled?: boolean;
}
```

## 顶部导航栏（NavBar）

基础组件 · 导航

```ts
{
    title: string;
    onBack?: () => void;
    right?: React.ReactNode;
    left?: React.ReactNode;
    align?: 'center' | 'left';
}
```

## 标签页（Tabs）

基础组件 · 导航

```ts
{
    options: Option[];
    value: string;
    onChange: (v: string) => void;
    variant?: 'line' | 'pill';
    layout?: 'equal' | 'scroll';
}
```

## 分段选择器（SegmentedControl）

基础组件 · 导航

```ts
Omit<React.ComponentProps<typeof Tabs>, 'variant'>
```

## 底部导航栏（TabBar）

基础组件 · 导航

```ts
{
    options: Option[];
    value: string;
    onChange: (v: string) => void;
}
```

## 侧边分类栏（Sidebar）

基础组件 · 导航

```ts
{
    options: Option[];
    value: string;
    onChange: (v: string) => void;
}
```

## 搜索框（SearchBar）

基础组件 · 输入与筛选

```ts
{
    surface?: 'gray' | 'outline' | 'white';
    onFocus?: () => void;
    value: string;
    onChange: (v: string) => void;
    onSubmit?: (v: string) => void;
    placeholder?: string;
    disabled?: boolean;
    showSubmit?: boolean;
    submitIcon?: boolean;
}
```

## 表单字段（FormField）

基础组件 · 输入与筛选

```ts
{
    label: string;
    required?: boolean;
    error?: string;
    children: React.ReactNode;
}
```

## 多行输入框（TextArea）

基础组件 · 输入与筛选

```ts
{
    label: string;
    value: string;
    onChange: (v: string) => void;
    maxLength?: number;
    disabled?: boolean;
    error?: string;
    placeholder?: string;
    hideLabel?: boolean;
}
```

## 复选框（Checkbox）

基础组件 · 输入与筛选

```ts
{
    label: string;
    checked: boolean;
    onChange: (v: boolean) => void;
    disabled?: boolean;
}
```

## 开关（Switch）

基础组件 · 输入与筛选

```ts
{
    label: string;
    checked: boolean;
    onChange: (v: boolean) => void;
    disabled?: boolean;
}
```

## 下拉选择框（SelectField）

基础组件 · 输入与筛选

```ts
{
    label: string;
    options: Option[];
    value: string;
    onChange: (v: string) => void;
    disabled?: boolean;
}
```

## 选择器（Picker）

基础组件 · 输入与筛选

```ts
React.ComponentProps<typeof SelectField>
```

## 日期选择器（DatePicker）

基础组件 · 输入与筛选

```ts
{
    label: string;
    value: string;
    onChange: (v: string) => void;
    min?: string;
    disabled?: boolean;
}
```

## 滑块（Slider）

基础组件 · 输入与筛选

```ts
{
    label: string;
    value: number;
    onChange: (v: number) => void;
    min?: number;
    max?: number;
    disabled?: boolean;
}
```

## 上传控件（Uploader）

基础组件 · 输入与筛选

```ts
{
    files: File[];
    onChange: (f: File[]) => void;
    max?: number;
    disabled?: boolean;
}
```

## 筛选栏（FilterBar）

基础组件 · 输入与筛选

```ts
{
    options: Option[];
    value: string[];
    onChange: (v: string[]) => void;
    onReset?: () => void;
}
```

## 轮播图（Carousel）

基础组件 · 展示

```ts
{
    images?: {
        src: string;
        alt: string;
    }[];
    slides?: React.ReactNode[];
    initialIndex?: number;
    label?: string;
}
```

## 折叠面板（Collapse）

基础组件 · 展示

```ts
{
    items: {
        id: string;
        title: string;
        content: React.ReactNode;
    }[];
}
```

## 进度条（Progress）

基础组件 · 展示

```ts
{
    value: number;
    label?: string;
}
```

## 步骤条（Steps）

基础组件 · 展示

```ts
{
    items: {
        title: string;
        description?: string;
    }[];
    current?: number;
}
```

## 空状态（EmptyState）

基础组件 · 反馈

```ts
{
    title?: string;
    description?: string;
    action?: React.ReactNode;
    illustration?: React.ReactNode;
    kind?: EmptyIllustrationKind;
    layout?: 'inline' | 'page';
}
```

## 结果展示（Result）

基础组件 · 反馈

```ts
{
    status?: 'success' | 'error' | 'warning';
    title: string;
    description?: string;
    details?: string[];
    action?: React.ReactNode;
    fullWidthAction?: boolean;
}
```

## 加载指示器（Loading）

基础组件 · 反馈

```ts
{
    label?: string;
}
```

## 骨架屏（Skeleton）

基础组件 · 反馈

```ts
{
    rows?: number;
}
```

## 轻提示（Toast）

基础组件 · 反馈

```ts
{
    open: boolean;
    message: string;
    onClose: () => void;
    duration?: number;
}
```

## 对话框（Dialog）

基础组件 · 反馈

```ts
{
    open: boolean;
    title: string;
    children: React.ReactNode;
    onClose: () => void;
    actions?: React.ReactNode;
    variant?: 'default' | 'poster' | 'voucher-success';
    showClose?: boolean;
}
```

## 操作面板（ActionSheet）

基础组件 · 反馈

```ts
{
    open: boolean;
    options: Option[];
    onSelect: (v: string) => void;
    onClose: () => void;
}
```

## 气泡浮层（Popover）

基础组件 · 反馈

```ts
{
    label: string;
    children: React.ReactNode;
}
```

## 图片查看器（ImageViewer）

基础组件 · 反馈

```ts
{
    open: boolean;
    src: string;
    alt: string;
    onClose: () => void;
    counter?: string;
}
```

## 左滑操作（SwipeAction）

基础组件 · 反馈

```ts
{
    children: React.ReactNode;
    onDelete?: () => void;
    actions?: {
        label: string;
        onAction: () => void;
        tone?: 'neutral' | 'destructive';
    }[];
    disabled?: boolean;
}
```

## 下拉刷新（PullRefresh）

基础组件 · 反馈

```ts
{
    children: React.ReactNode;
    onRefresh: () => Promise<void>;
}
```

## 加载更多（LoadMore）

基础组件 · 反馈

```ts
{
    loading?: boolean;
    hasMore?: boolean;
    onLoad: () => void;
    error?: boolean;
}
```

## 吸底操作栏（StickyBar）

基础组件 · 页面与布局

```ts
{
    children: React.ReactNode;
    layout?: 'single' | 'equal' | 'content';
}
```

## 模拟键盘（Keyboard）

基础组件 · 输入与筛选

```ts
{
    allowDecimal?: boolean;
    type?: 'numeric' | 'alphabetic';
    value: string;
    onChange: (v: string) => void;
    onDone: () => void;
    maxLength?: number;
    disabled?: boolean;
}
```

## 倒计时（Countdown）

基础组件 · 展示

```ts
{
    seconds: number;
    onComplete?: () => void;
}
```

## 业务插画（Artwork）

基础组件 · 展示

```ts
{
    layers: ArtworkLayer[];
    label: string;
    ratio?: string;
}
```

## 列表分组（ListGroup）

基础组件 · 页面与布局

```ts
{
    title: string;
    titlePlacement?: 'inside' | 'outside';
    items: {
        id: string;
        title: string;
        description?: string;
        leading?: React.ReactNode;
        trailing?: React.ReactNode;
        onClick?: () => void;
        disabled?: boolean;
    }[];
}
```

## 商品卡片（ProductCard）

业务组件 · 商品与购物车

```ts
type ProductCardVariant = 'grid' | 'full-width' | 'category';
type ProductAvailability = 'available' | 'sold-out' | 'unavailable' | 'not-for-sale';
type ProductSKU = {
    id: string;
    label: string;
    amount: string;
    unitPrice?: string;
    promotion?: string;
    max?: number;
};
type CommerceProduct = Product & {
    currency?: string;
    unit?: string;
    unitPrice?: string;
    promotion?: string;
    supplier?: string;
    supplierVariant?: 'supplier' | 'comparison';
    orderBy?: string;
    availability?: ProductAvailability;
    purchase?: 'add' | 'quantity' | 'count' | 'notify' | 'similar' | 'none';
    max?: number;
    skus?: ProductSKU[];
};

{
    product: CommerceProduct;
    variant?: ProductCardVariant;
    quantity?: number;
    onAdd: () => void;
    onQuantity?: (value: number) => void;
    onSKUQuantity?: (id: string, value: number) => void;
    skuQuantities?: Record<string, number>;
    initialExpanded?: boolean;
    onNotify?: () => void;
    onSimilar?: () => void;
    onSupplier?: () => void;
    locale?: 'en' | 'zh';
}
```

## 商品价格组合（ProductPriceGroup）

业务组件 · 商品与购物车

```ts
{
    amount: string;
    original?: string;
    currency?: string;
    unit?: string;
    unitPrice?: string;
    promotion?: boolean;
    originalPlacement?: 'inline' | 'below';
}
```

## 商品购买控件（ProductPurchaseControl）

业务组件 · 商品与购物车

```ts
{
    mode?: 'add' | 'quantity' | 'count' | 'notify' | 'similar' | 'specs' | 'none';
    value?: number;
    max?: number;
    expanded?: boolean;
    onAdd: () => void;
    onQuantity?: (v: number) => void;
    onToggle?: () => void;
    onNotify?: () => void;
    onSimilar?: () => void;
}
```

## 商品状态蒙层（ProductStatusOverlay）

业务组件 · 商品与购物车

```ts
{
    status: ProductAvailability;
    locale?: 'en' | 'zh';
    size?: 'regular' | 'compact';
}
```

## 供应商标签（ProductSupplierTag）

业务组件 · 商品与购物车

```ts
{
    name: string;
    variant?: 'supplier' | 'comparison';
    onClick?: () => void;
}
```

## feeds（ProductList）

业务组件 · 商品与购物车

```ts
{
    products: CommerceProduct[];
    onAdd: (id: string) => void;
    onQuantity?: (id: string, value: number) => void;
    onRemove?: (id: string) => void;
    layout?: 'grid' | 'row';
    density?: 'regular' | 'compact';
}
```

## 猜你喜欢（ProductCollection）

业务组件 · 商品与购物车

```ts
{
    products: CommerceProduct[];
    onAdd: (id: string) => void;
    onQuantity?: (id: string, value: number) => void;
    onRemove?: (id: string) => void;
    layout?: 'grid' | 'row';
    title?: string;
    density?: 'regular' | 'compact';
}
```

## 商品规格选择器（ProductSpecPicker）

业务组件 · 商品与购物车

```ts
{
    groups: {
        id: string;
        title: string;
        description?: string;
        required?: boolean;
        options: Option[];
    }[];
    values: Record<string, string>;
    onChange: (v: Record<string, string>) => void;
    onConfirm: () => void;
    product?: Product;
    quantity?: number;
    onQuantity?: (n: number) => void;
    onClose?: () => void;
    open?: boolean;
}
```

## 购物车商品行（CartItem）

业务组件 · 商品与购物车

```ts
{
    product: Product;
    quantity: number;
    selected: boolean;
    onSelect: (v: boolean) => void;
    onQuantity: (v: number) => void;
    onRemove: () => void;
    readOnly?: boolean;
    selectable?: boolean;
}
```

## 购物车商品组（CartGroup）

业务组件 · 商品与购物车

```ts
{
    title: string;
    children: React.ReactNode;
    selected: boolean;
    onSelect: (v: boolean) => void;
}
```

## 购物车结算栏（CartSummaryBar）

业务组件 · 商品与购物车

```ts
{
    total: string;
    selectedCount: number;
    onCheckout: () => void;
    disabled?: boolean;
}
```

## 失效商品抽屉（InvalidProductsSheet）

业务组件 · 商品与购物车

```ts
{
    open: boolean;
    products: Product[];
    onClose: () => void;
    onContinue: () => void;
}
```

## 地址卡片（AddressCard）

业务组件 · 地址与配送

```ts
{
    address: Address;
    selected?: boolean;
    onSelect?: () => void;
    onEdit?: () => void;
    variant?: 'default' | 'delivery';
}
```

## 地址选择器（AddressPicker）

业务组件 · 地址与配送

```ts
{
    addresses: Address[];
    value: string;
    onChange: (v: string) => void;
    onAdd: () => void;
}
```

## 地址表单（AddressForm）

业务组件 · 地址与配送

```ts
{
    surface?: 'white' | 'gray';
    value: Address;
    onChange: (v: Address) => void;
    onSubmit: () => void;
    error?: string;
    disabled?: boolean;
    onRemove?: () => void;
    labelConflict?: boolean;
    onResolveLabel?: (use: boolean) => void;
}
```

## 地图选址（MapAddressPicker）

业务组件 · 地址与配送

```ts
{
    onSearchFocus?: () => void;
    map: React.ReactNode;
    query: string;
    onQuery: (v: string) => void;
    address?: Address;
    onConfirm: () => void;
    results?: {
        id: string;
        title: string;
    }[];
    onSelect?: (id: string) => void;
}
```

## 配送时段选择器（DeliverySlotPicker）

业务组件 · 地址与配送

```ts
{
    days: Option[];
    day: string;
    onDay: (v: string) => void;
    slots: Option[];
    value: string;
    onChange: (v: string) => void;
}
```

## 配送进度（DeliveryProgress）

业务组件 · 地址与配送

```ts
{
    time: string;
    progress: number;
    description?: string;
    onSelect?: () => void;
}
```

## 支付方式行（PaymentMethodRow）

业务组件 · 支付与订单

```ts
{
    method: Payment;
    selected: boolean;
    onSelect: () => void;
    groupName?: string;
}
```

## 银行卡片（BankCard）

业务组件 · 支付与订单

```ts
{
    brand: string;
    last4: string;
    expiry: string;
    holder?: string;
    selected?: boolean;
    onSelect?: () => void;
    onDelete?: () => void;
    unavailable?: boolean;
}
```

## 银行卡表单（BankCardForm）

业务组件 · 支付与订单

```ts
{
    value: CardData;
    onFieldFocus?: (field: keyof CardData) => void;
    onChange: (v: CardData) => void;
    onSubmit: () => void;
    error?: string;
    errors?: Partial<Record<keyof CardData, string>>;
    total?: string;
}
```

## 支付方式选择器（PaymentMethodPicker）

业务组件 · 支付与订单

```ts
{
    value: string;
    onChange: (v: string) => void;
    cards?: {
        id: string;
        brand: string;
        last4: string;
        logo: string;
    }[];
    onNewCard: () => void;
}
```

## 结算明细（CheckoutSummary）

业务组件 · 支付与订单

```ts
{
    rows: {
        label: string;
        value: string;
        original?: string;
        discount?: boolean;
    }[];
    total: string;
}
```

## 订单卡片（OrderCard）

业务组件 · 支付与订单

```ts
{
    order: Order;
    onAction: (action: string) => void;
    actions?: string[];
    variant?: 'list' | 'overview';
    itemCount?: number;
}
```

## 订单状态头部（OrderStatusHeader）

业务组件 · 支付与订单

```ts
{
    state: OrderState;
    description?: string;
    countdown?: string;
    title?: string;
    artwork?: ArtworkLayer[];
}
```

## 订单时间线（OrderTimeline）

业务组件 · 支付与订单

```ts
{
    events: {
        title: string;
        description?: string;
    }[];
    current: number;
}
```

## 订单信息（OrderInfo）

业务组件 · 支付与订单

```ts
{
    rows: {
        label: string;
        value: string;
        copyable?: boolean;
    }[];
    onCopy?: (v: string) => void;
}
```

## 取消原因选择器（CancelReasonPicker）

业务组件 · 支付与订单

```ts
{
    options: Option[];
    value: string;
    onChange: (v: string) => void;
    onConfirm: () => void;
    open: boolean;
    onClose: () => void;
    putBack?: boolean;
    onPutBack?: (v: boolean) => void;
    error?: string;
}
```

## 评价卡片（ReviewCard）

业务组件 · 评价与媒体

```ts
{
    product: Product;
    rating: number;
    comment: string;
    images: string[];
    onView?: (src: string) => void;
}
```

## 商品评分面板（ProductRatingPanel）

业务组件 · 评价与媒体

```ts
{
    product: Product;
    rating: number;
    onRating: (v: number) => void;
    dimensions: Record<string, number>;
    onDimension: (name: string, value: number) => void;
    expanded?: boolean;
    onToggle?: () => void;
    comment?: string;
    onComment?: (v: string) => void;
    files?: File[];
    onFiles?: (v: File[]) => void;
    maxLength?: number;
}
```

## 配送评分面板（RiderRatingPanel）

业务组件 · 评价与媒体

```ts
{
    name: string;
    rating: number;
    onChange: (v: number) => void;
    comment?: string;
    onComment?: (v: string) => void;
}
```

## 评价编辑器（ReviewEditor）

业务组件 · 评价与媒体

```ts
{
    value: ReviewData;
    onChange: (v: ReviewData) => void;
    error?: string;
    tagOptions?: string[];
}
```

## 媒体选择器（MediaPicker）

业务组件 · 评价与媒体

```ts
{
    items: {
        id: string;
        src: string;
    }[];
    selected: string[];
    onChange: (v: string[]) => void;
    max?: number;
    onDone: () => void;
    onCamera: () => void;
}
```

## 优惠码表单（PromoCodeForm）

业务组件 · 优惠与账户

```ts
{
    value: string;
    onChange: (v: string) => void;
    onSubmit: () => void;
    onFocus?: () => void;
    error?: string;
    loading?: boolean;
}
```

## 活动横幅（CampaignBanner）

业务组件 · 优惠与账户

```ts
{
    variant?: 'default' | 'source';
    src?: string;
    alt: string;
    onClick: () => void;
    ratio?: string;
    title?: string;
    subtitle?: string;
    actionLabel?: string;
    artwork?: React.ReactNode;
    background?: string;
}
```

## 新客优惠（NewUserOffer）

业务组件 · 优惠与账户

```ts
{
    amount: string;
    coupons: CouponData[];
    onUse: () => void;
    onDetails: () => void;
    header?: React.ReactNode;
}
```

## 账户头部（AccountHeader）

业务组件 · 优惠与账户

```ts
{
    name?: string;
    phone?: string;
    avatarSrc?: string;
    variant?: 'card' | 'profile';
    onLogin: () => void;
}
```

## 设置分组（SettingGroup）

业务组件 · 优惠与账户

```ts
{
    items: {
        id: string;
        title: string;
        description?: string;
        value?: React.ReactNode;
        icon?: IconName;
        leading?: React.ReactNode;
    }[];
    onAction: (v: string) => void;
}
```

## 聊天消息（ChatMessage）

业务组件 · 客服与帮助

```ts
{
    side?: 'agent' | 'user' | 'system';
    text?: string;
    time?: string;
    children?: React.ReactNode;
    variant?: 'bubble' | 'notice' | 'media';
}
```

## 聊天输入栏（ChatComposer）

业务组件 · 客服与帮助

```ts
{
    value: string;
    onChange: (v: string) => void;
    onSend: () => void;
    onAttach: () => void;
    disabled?: boolean;
    expanded?: boolean;
}
```

## 客服排队提示（ServiceQueue）

业务组件 · 客服与帮助

```ts
{
    position: number;
    onCancel: () => void;
}
```

## 售后工单卡片（ServiceTicketCard）

业务组件 · 客服与帮助

```ts
{
    id: string;
    time: string;
    status: 'ongoing' | 'ended';
    onContinue: () => void;
    onHistory: () => void;
}
```

## 售后工单详情（ServiceTicketDetail）

业务组件 · 客服与帮助

```ts
{
    question: string;
    answer: string;
    onContact: () => void;
    onLink?: () => void;
}
```

## 常见问题列表（FAQList）

业务组件 · 客服与帮助

```ts
{
    items: {
        id: string;
        title: string;
        content: React.ReactNode;
    }[];
}
```

## 品牌标志（BrandLogo）

业务组件 · 登录与授权

```ts
{
    variant?: 'full' | 'short';
}
```

## 法律条款文本（LegalText）

业务组件 · 登录与授权

```ts
{
    text: string;
    onLink?: (label: string) => void;
}
```

## 国家或地区选择器（CountryPicker）

业务组件 · 登录与授权

```ts
{
    open: boolean;
    onClose: () => void;
    value: string;
    onChange: (value: string) => void;
}
```

## 手机号登录表单（PhoneLoginForm）

业务组件 · 登录与授权

```ts
{
    country: string;
    phone: string;
    onCountry: (v: string) => void;
    onPhone: (v: string) => void;
    onSubmit: () => void;
    error?: string;
    loading?: boolean;
    showCountry?: boolean;
    initialCountryOpen?: boolean;
    onEmail?: () => void;
    onPolicy?: (title: string) => void;
    onInputFocus?: () => void;
    onCountryOpen?: () => void;
    focused?: boolean;
}
```

## 验证码字段（VerificationCodeField）

业务组件 · 登录与授权

```ts
{
    value: string;
    onChange: (v: string) => void;
    length?: 4 | 6;
    error?: string;
    onResend: () => void;
    remaining?: number;
    phone?: string;
    onMore?: () => void;
    onFocus?: () => void;
}
```

## 授权确认抽屉（ConsentSheet）

业务组件 · 登录与授权

```ts
{
    open: boolean;
    children?: React.ReactNode;
    onAccept: () => void;
    onDecline: () => void;
    onClose: () => void;
    longForm?: boolean;
}
```

## 订单备注（OrderRemarks）

业务组件 · 支付与订单

```ts
{
    options: string[];
    selected: string[];
    onSelect: (v: string[]) => void;
    history: string[];
    note: string;
    onNote: (v: string) => void;
    onConfirm: () => void;
}
```

## 订单提交栏（OrderSubmitBar）

业务组件 · 支付与订单

```ts
{
    total: string;
    label?: string;
    onSubmit: () => void;
    disabled?: boolean;
    loading?: boolean;
    variant?: 'default' | 'integrated';
    paymentLogo?: string;
}
```

## 账户注销说明（AccountDeletionNotice）

业务组件 · 优惠与账户

```ts
{
    conditions: string[];
    consequences: string[];
    onApply: () => void;
}
```

## 促销商品组（PromotionGroup）

业务组件 · 商品与购物车

```ts
{
    kind?: 'sale' | 'gift' | 'buy-get';
    title: string;
    eligible: boolean;
    remainingCount?: number;
    discount?: string;
    selected?: boolean;
    onSelect?: (v: boolean) => void;
    onAction: () => void;
    children: React.ReactNode;
}
```

## 不可用商品组（UnavailableProductsGroup）

业务组件 · 商品与购物车

```ts
{
    products: Product[];
    expanded: boolean;
    onExpand: () => void;
    onRemoveAll: () => void;
    onRemove: (id: string) => void;
    totalCount?: number;
}
```

## 购物车头部（CartHeader）

业务组件 · 导航

```ts
{
    count: number;
    address?: string;
    onAddress?: () => void;
    onClear: () => void;
}
```

## 搜索页头部（SearchHeader）

业务组件 · 导航

```ts
{
    value: string;
    onChange: (v: string) => void;
    onSearch: (v: string) => void;
    onBack: () => void;
    onCart: () => void;
    cartCount?: number;
}
```

## 搜索建议（SearchSuggestions）

业务组件 · 输入与筛选

```ts
{
    title: string;
    items: string[];
    onSelect: (v: string) => void;
    onClear?: () => void;
    expandable?: boolean;
}
```

## 分类入口卡片（CategoryTile）

业务组件 · 导航

```ts
{
    item: CategoryItem;
    onSelect: () => void;
}
```

## 金刚区入口（CategoryGrid）

业务组件 · 导航

```ts
{
    items: CategoryItem[];
    onSelect: (id: string) => void;
}
```

## 首页头部（HomeHeader）

业务组件 · 导航

```ts
{
    address: string;
    delivery: string;
    information: string;
    query: string;
    onQuery: (v: string) => void;
    onAddress: () => void;
    onSearch?: () => void;
}
```

## 分类页框架（CategoryLayout）

业务组件 · 导航

```ts
type ProductAvailability = 'available' | 'sold-out' | 'unavailable' | 'not-for-sale';
type ProductSKU = {
    id: string;
    label: string;
    amount: string;
    unitPrice?: string;
    promotion?: string;
    max?: number;
};
type CommerceProduct = Product & {
    currency?: string;
    unit?: string;
    unitPrice?: string;
    promotion?: string;
    supplier?: string;
    supplierVariant?: 'supplier' | 'comparison';
    orderBy?: string;
    availability?: ProductAvailability;
    purchase?: 'add' | 'quantity' | 'count' | 'notify' | 'similar' | 'none';
    max?: number;
    skus?: ProductSKU[];
};
type CommerceCategory = {
    id: string;
    label: string;
    image?: string;
    selectedImage?: string;
    layers?: ArtworkLayer[];
};

{
    variant?: 'image-primary' | 'text-primary';
    title: string;
    categories: CommerceCategory[];
    selected: string;
    onSelect: (id: string) => void;
    products: CommerceProduct[];
    onAdd: (id: string) => void;
    onQuantity?: (id: string, value: number) => void;
    primaryCategories?: CommerceCategory[];
    primaryOptions: string[];
    primaryValue?: string;
    onPrimaryChange: (value: string) => void;
    expanded?: boolean;
    onExpand: () => void;
    query?: string;
    onQuery?: (v: string) => void;
    onSearch?: () => void;
    tertiaryOptions?: string[];
    tertiaryValue?: string;
    onTertiaryChange?: (v: string) => void;
    sort?: 'default' | 'sales' | 'price';
    onSort?: (sort: 'default' | 'sales' | 'price') => void;
}
```

## 订单阶段进度（OrderStageProgress）

业务组件 · 支付与订单

```ts
{
    current?: number;
}
```

## 订单送达信息（OrderArrival）

业务组件 · 支付与订单

```ts
{
    time: string;
    actions?: string[];
    onAction: (action: string) => void;
}
```

## 订单配送详情（OrderDeliveryDetails）

业务组件 · 支付与订单

```ts
{
    time: string;
    address: Address;
}
```

## 手机号输入框（PhoneField）

业务组件 · 登录与授权

```ts
{
    value: string;
    onChange: (v: string) => void;
    country?: string;
    showCountry?: boolean;
    onCountry?: () => void;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    focused?: boolean;
    onFocus?: () => void;
}
```

## 客服订单卡片（SupportOrderCard）

业务组件 · 客服与帮助

```ts
{
    status?: string;
    count?: number;
    time?: string;
    onSelect?: () => void;
}
```

## 配送评价卡片（RiderReviewCard）

业务组件 · 评价与媒体

```ts
{
    comment: string;
    rating?: number;
    name?: string;
}
```

## 购物车活动条（CartPromotionBar）

业务组件 · 商品与购物车

```ts
{
    kind?: 'sale' | 'gift';
    title: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
    celebrate?: boolean;
}
```

## 优惠券列表（VoucherList）

业务组件 · 优惠与账户

```ts
{
    coupons: CouponData[];
    onUse: () => void;
    onDetails: (index: number) => void;
    empty?: boolean;
}
```

## 兑券成功弹窗（VoucherSuccessDialog）

业务组件 · 优惠与账户

```ts
{
    open: boolean;
    coupon: CouponData;
    onClose: () => void;
    onUse: () => void;
    onDetails: () => void;
    showClose?: boolean;
}
```

## 首页新客券横幅（HomeVoucherBanner）

业务组件 · 优惠与账户

```ts
{
    onClick: () => void;
}
```

## 商品详情图集（ProductMediaGallery）

业务组件 · 商品与购物车

```ts
{
    images: {
        src: string;
        alt: string;
    }[];
    onPreview?: (index: number) => void;
}
```

## 商品规格价格（ProductVariantPricing）

业务组件 · 商品与购物车

```ts
{
    variants: DetailVariant[];
    value: string;
    onChange: (id: string) => void;
    currency?: string;
    unit?: string;
    sales?: string;
}
```

## 商品详情摘要（ProductSummary）

业务组件 · 商品与购物车

```ts
{
    name: string;
    ranking?: string;
    attributes: DetailAttribute[];
    description: string;
    onDetails: () => void;
}
```

## 商品配送与售后（ProductFulfillment）

业务组件 · 商品与购物车

```ts
{
    delivery: string;
    deliveryDetail: string;
    afterSales: string;
    onAfterSales: () => void;
}
```

## 供应商信息卡（ProductSupplierPanel）

业务组件 · 商品与购物车

```ts
{
    name: string;
    metrics: DetailAttribute[];
    onClick: () => void;
}
```

## 商品参数表（ProductAttributes）

业务组件 · 商品与购物车

```ts
{
    title?: string;
    items: DetailAttribute[];
}
```

## 商品服务保障（ProductServiceBenefits）

业务组件 · 商品与购物车

```ts
{
    title?: string;
    items: {
        id: string;
        label: string;
        icon: IconName;
        description: string;
    }[];
    onSelect: (id: string) => void;
}
```

## 商品详情购买栏（ProductPurchaseBar）

业务组件 · 商品与购物车

```ts
{
    quantity: number;
    onQuantity: (v: number) => void;
    favorite: boolean;
    onFavorite: () => void;
    cartCount: number;
    onCart: () => void;
    onAdd: () => void;
    max?: number;
}
```

## 图标（Icon）

基础组件 · 展示

```ts
{name:IconName;label?:string;className?:string}
```


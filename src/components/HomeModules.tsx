import React, {useState} from 'react';
import {Carousel, ProductCard, Tag, TextButton} from 'keenmart-ui-kit';
import type {CommerceProduct} from 'keenmart-ui-kit';
export const products: CommerceProduct[] = [
 {id:'broccoli',name:'新鲜西兰花 · 田间直采',image:'/products/broccoli.png',amount:'8.90',original:'12.90',currency:'¥',weight:'500g / 份',promotion:'新人专享价',supplier:'鲜选直供'},
 {id:'pumpkin',name:'香甜南瓜',image:'/products/pumpkin.png',amount:'6.80',currency:'¥',weight:'约700g / 个',supplier:'鲜选直供'},
 {id:'broccoli-family',name:'家庭装西兰花 · 清甜脆嫩 每日新鲜到店',image:'/products/broccoli.png',amount:'15.80',currency:'¥',weight:'1kg / 份'},
 {id:'pumpkin-small',name:'小份南瓜',image:'/products/pumpkin.png',amount:'4.90',original:'7.90',currency:'¥',weight:'400g / 份',promotion:'限时优惠'},
 {id:'broccoli-organic',name:'精选西兰花',image:'/products/broccoli.png',amount:'9.90',currency:'¥',weight:'500g / 份',supplier:'产地直供'},
 {id:'pumpkin-family',name:'粉糯南瓜 · 家庭分享装',image:'/products/pumpkin.png',amount:'12.80',currency:'¥',weight:'约1.5kg / 个'}
];
export const categories=['新鲜蔬菜','时令水果','肉禽蛋品','海鲜水产','乳品烘焙','休闲零食','粮油调味','酒水饮料','冷冻速食','日用百货','有机鲜选','早餐食光','火锅食材','轻食沙拉','地方风味','咖啡茶饮','母婴用品','宠物生活','鲜花绿植','全部分类'];
export function HomeBanners({simple,onOpen}:{simple:boolean;onOpen:()=>void}){
 const [index,setIndex]=useState(0); const start=React.useRef<number|null>(null);
 const titles=simple?['好食材，让生活简单一点','一周鲜选，轻松备齐','当季好味，每天新鲜']:['新鲜好物，即刻到家','新人见面礼，好价尝鲜','一周常购，一站买齐'];
 return <div className="home-banners" onPointerDown={e=>{start.current=e.clientX;}} onPointerUp={e=>{if(start.current!==null&&Math.abs(e.clientX-start.current)>35)setIndex((index+(e.clientX<start.current?1:2))%3);start.current=null;}} onClickCapture={e=>{const b=(e.target as HTMLElement).closest('button'); const n=b?.getAttribute('aria-label')?.match(/^Image (\d+)$/);if(n)setIndex(Number(n[1])-1);}}><Carousel initialIndex={index} label="首页活动轮播，左右滑动切换" slides={titles.map((title,i)=><button className={'hero-slide hero-'+i} key={title} onClick={onOpen}><Tag tone="success">{i===1?'新人专属':'KeenMart 鲜选'}</Tag><strong>{title}</strong><span>好品质 · 好价格 · 好生活</span><b>立即选购 →</b><span className="hero-art" aria-hidden="true"><img src={i===1?'/products/pumpkin.png':'/products/broccoli.png'} alt=""/></span></button>)}/></div>;
}
export function HomeCategoryEntries({onSelect}:{onSelect:(category:string)=>void}){
 return <nav className="home-categories" aria-label="金刚区入口"><div>{categories.map((label,i)=><button key={label} onClick={()=>onSelect(label)}><span className={'category-art category-art-'+i%3}>{i<2?<img src={i===0?'/products/broccoli.png':'/products/pumpkin.png'} alt=""/>:<span aria-hidden="true">{label.slice(0,1)}</span>}</span><span>{label}</span></button>)}</div></nav>;
}
export function ProductFeed({items=products,quantities,onQuantity}:{items?:CommerceProduct[];quantities:Record<string,number>;onQuantity:(id:string,n:number)=>void}){
 return items.length?<div className="home-masonry">{items.map(p=><ProductCard key={p.id} product={p} locale="zh" quantity={quantities[p.id]||0} onAdd={()=>onQuantity(p.id,(quantities[p.id]||0)+1)} onQuantity={n=>onQuantity(p.id,n)}/>)}</div>:<p className="home-empty">没有找到商品，换个关键词试试</p>;
}
export function NewCustomerZone({onOpen,onQuantity,quantities}:{onOpen:()=>void;quantities:Record<string,number>;onQuantity:(id:string,n:number)=>void}){
 return <section className="new-customer"><div className="section-heading"><h2>新人专享价 <Tag tone="marketing">首单福利</Tag></h2><TextButton onClick={onOpen}>更多好价 ›</TextButton></div><p>新鲜好物，第一单更划算</p><div className="new-customer-products">{products.slice(0,3).map(p=><ProductCard key={p.id} product={{...p,supplier:undefined,promotion:undefined}} locale="zh" quantity={quantities[p.id]||0} onAdd={()=>onQuantity(p.id,(quantities[p.id]||0)+1)} onQuantity={n=>onQuantity(p.id,n)}/>)}</div></section>;
}
export function RecommendationEntries({onFrequent,onCampaign}:{onFrequent:()=>void;onCampaign:()=>void}){
 return <div className="recommendation-entries"><button onClick={onFrequent}><span>为你备好</span><strong>常购清单</strong><small>熟悉的好物，轻松再买</small><div className="mini-products"><img src="/products/broccoli.png" alt="西兰花"/><img src="/products/pumpkin.png" alt="南瓜"/></div><b>去看看 →</b></button><button onClick={onCampaign}><span>当季鲜选</span><strong>今日好价</strong><small>把新鲜装进每一天</small><div className="campaign-art"><img src="/products/pumpkin.png" alt=""/></div><b>进入活动 →</b></button></div>;
}

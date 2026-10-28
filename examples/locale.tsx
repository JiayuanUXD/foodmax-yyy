import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {LocaleProvider,Page,NavBar,Button,TextField,ProductPriceGroup,ProductPurchaseControl,BottomSheet,QuantityStepper} from 'keenmart-ui-kit';
import type {KeenLocale} from 'keenmart-ui-kit';
import 'keenmart-ui-kit/fonts.css';
import 'keenmart-ui-kit/styles.css';
import '../src/page.css';
function LocaleExample(){
 const [locale,setLocale]=useState<KeenLocale>('zh-CN');
 const [quantity,setQuantity]=useState(1),[open,setOpen]=useState(false),[name,setName]=useState('');
 const zh=locale==='zh-CN';
 return <LocaleProvider locale={locale}><Page background="white" header={<NavBar title={zh?'中英文组件验收':'Component language review'}/>}>
  <Button onClick={()=>setLocale(zh?'en':'zh-CN')}>切换语言 / Switch language</Button>
  <TextField label={zh?'联系人':'Contact'} placeholder={zh?'请输入姓名':'Enter name'} value={name} onChange={e=>setName(e.target.value)}/>
  <ProductPriceGroup amount="38.76" currency="SAR"/>
  <QuantityStepper min={0} value={quantity} onChange={setQuantity}/>
  <ProductPurchaseControl mode="specs" onAdd={()=>{}} onToggle={()=>setOpen(true)}/>
  <BottomSheet open={open} title={zh?'选择规格':'Choose specifications'} onClose={()=>setOpen(false)} footer={<Button onClick={()=>setOpen(false)}>{zh?'完成':'Done'}</Button>}>
   {zh?'弹层正文使用苹方，价格保持原字体。':'Sheet copy uses Poppins; price typography is unchanged.'}
   <ProductPriceGroup amount="38.76" currency="SAR"/>
  </BottomSheet>
 </Page></LocaleProvider>;
}
createRoot(document.getElementById('root')!).render(<LocaleExample/>);

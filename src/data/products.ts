export type ProductType = 'wallet' | 'card' | 'pen' | 'keychain' | 'pendant' | 'bracelet' | 'ring' | 'bottle' | 'diary' | 'frame';

export interface Product {
  id: number;
  cat: string;
  name: string;
  meta: string;
  price: number;
  emoji: string;
  type: ProductType;
  badge?: string;
}

export const PRODUCTS: Product[] = [
  { id:1,  cat:'Wallets',   name:'Name Wallet (PU)',         meta:'Black·Brown·Tan·Blue',         price:210,  emoji:'👛', type:'wallet',   badge:'BESTSELLER' },
  { id:2,  cat:'Wallets',   name:'Nexon Wallet',             meta:'Black·Red·Grey·Green·Blue',    price:300,  emoji:'💼', type:'wallet' },
  { id:3,  cat:'Wallets',   name:'Card Holder',              meta:'Black·Brown·Tan·Blue',         price:160,  emoji:'🪪', type:'card' },
  { id:4,  cat:'Wallets',   name:'Wallet + Keychain Combo',  meta:'Black·Brown·Tan·Blue',         price:360,  emoji:'🔑', type:'wallet',   badge:'COMBO' },
  { id:5,  cat:'Wallets',   name:'Wallet + Belt Combo',      meta:'Black·Brown·Tan·Blue',         price:500,  emoji:'👔', type:'wallet' },
  { id:6,  cat:'Wallets',   name:"Women's Wallet",           meta:'Black·Brown·Tan·Blue',         price:360,  emoji:'👜', type:'wallet' },
  { id:7,  cat:'Wallets',   name:'Sling Bag',                meta:'Black·Brown·Tan·Pink·Red',     price:600,  emoji:'👝', type:'wallet',   badge:'NEW' },
  { id:8,  cat:'Wallets',   name:'4PC Men Combo',            meta:'Black·Brown·Tan·Blue',         price:700,  emoji:'🎁', type:'wallet',   badge:'BESTSELLER' },
  { id:9,  cat:'Wallets',   name:'4PC Women Combo',          meta:'Black·Brown·Tan·Blue',         price:760,  emoji:'🎀', type:'wallet' },
  { id:10, cat:'Pens',      name:'P82 Gold / Silver',        meta:'Premium roller pen',           price:200,  emoji:'🖊', type:'pen' },
  { id:11, cat:'Pens',      name:'P83 Series',               meta:'Red·Blue·Black',               price:160,  emoji:'✒', type:'pen' },
  { id:12, cat:'Pens',      name:'P88 Roller Pen',           meta:'Premium roller',               price:240,  emoji:'🖋', type:'pen',      badge:'PREMIUM' },
  { id:13, cat:'Pens',      name:'P110 Collection',          meta:'Blue·Red·Black',               price:130,  emoji:'📝', type:'pen',      badge:'NEW' },
  { id:14, cat:'Pens',      name:'P104 Slim Pen',            meta:'Matte black',                  price:280,  emoji:'🖊', type:'pen' },
  { id:15, cat:'Keychains', name:'Leather Keychain NX',      meta:'Black·Brown·Blue',             price:160,  emoji:'🔑', type:'keychain' },
  { id:16, cat:'Keychains', name:'Metal Car Keychain',       meta:'Mahindra·Honda·Hyundai·Tata',  price:360,  emoji:'🚗', type:'keychain', badge:'NEW' },
  { id:17, cat:'Keychains', name:'Pen + Keychain Combo',     meta:'Various styles',               price:300,  emoji:'🎀', type:'keychain', badge:'COMBO' },
  { id:18, cat:'Jewellery', name:'Bar Pendant',              meta:'Gold·Silver·Rose Gold',        price:360,  emoji:'📿', type:'pendant',  badge:'BESTSELLER' },
  { id:19, cat:'Jewellery', name:'Heart Pendant',            meta:'Gold·Silver',                  price:400,  emoji:'💛', type:'pendant' },
  { id:20, cat:'Jewellery', name:'Love Box Pendant',         meta:'Gold·Silver·Rose Gold',        price:360,  emoji:'💌', type:'pendant' },
  { id:21, cat:'Jewellery', name:'Name Kada Bracelet',       meta:'Gold·Black·Silver·Rose Gold',  price:360,  emoji:'📿', type:'bracelet' },
  { id:22, cat:'Jewellery', name:'Silicone Bracelet',        meta:'Black with metal plate',       price:140,  emoji:'⌚', type:'bracelet' },
  { id:23, cat:'Jewellery', name:'SS Chain Bracelet',        meta:'Gold·Silver·Black',            price:360,  emoji:'🔗', type:'bracelet' },
  { id:24, cat:'Jewellery', name:'Name Rings',               meta:'Gold·Silver·Rose Gold',        price:200,  emoji:'💍', type:'ring' },
  { id:25, cat:'Jewellery', name:'Couple Rings',             meta:'Rose Gold·Silver',             price:260,  emoji:'💑', type:'ring' },
  { id:26, cat:'Diaries',   name:'Professional Diary + Pen', meta:'Doctor·CA·Lawyer design',     price:700,  emoji:'📔', type:'diary',    badge:'BESTSELLER' },
  { id:27, cat:'Diaries',   name:'Mini Diary + Pen B6',      meta:'Navy·Brown·Black',             price:500,  emoji:'📖', type:'diary' },
  { id:28, cat:'Diaries',   name:'Strap Diary',              meta:'Black·Dark Blue',              price:400,  emoji:'📓', type:'diary' },
  { id:29, cat:'Diaries',   name:'Wooden Diary Combo',       meta:'Natural wood + Pen',           price:600,  emoji:'🪵', type:'diary',    badge:'PREMIUM' },
  { id:30, cat:'Diaries',   name:'Pen & Diary Set',          meta:'White·Black',                  price:400,  emoji:'🗒', type:'diary' },
  { id:31, cat:'Bottles',   name:'BT01 Smart Bottle',        meta:'Temperature display, Black',   price:400,  emoji:'🍶', type:'bottle',   badge:'BESTSELLER' },
  { id:32, cat:'Bottles',   name:'Fashion Sport Bottle',     meta:'Vacuum insulated SS',          price:400,  emoji:'🧴', type:'bottle' },
  { id:33, cat:'Bottles',   name:'BT04 Cup Bottle',          meta:'With detachable cup',          price:600,  emoji:'☕', type:'bottle' },
  { id:34, cat:'Bottles',   name:'Stanley 1200ml Sipper',    meta:'White·Black',                  price:800,  emoji:'🥤', type:'bottle',   badge:'NEW' },
  { id:35, cat:'Frames',    name:'Wooden Frame',             meta:'5×7·6×8·8×10·12×8 inch',      price:600,  emoji:'🖼', type:'frame',    badge:'CUSTOM' },
  { id:36, cat:'Frames',    name:'Round Wooden Frame',       meta:'6×6·8×8 inch',                price:700,  emoji:'🪞', type:'frame' },
  { id:37, cat:'Frames',    name:'Caricature Standee',       meta:'Custom cartoon, 6/8 inch',     price:800,  emoji:'🎨', type:'frame',    badge:'NEW' },
  { id:38, cat:'Combos',    name:'Wallet + Pen + Keychain',  meta:'Black·Brown·Tan·Blue',         price:400,  emoji:'🎁', type:'wallet',   badge:'BESTSELLER' },
  { id:39, cat:'Combos',    name:'3PC Bottle+Pen+Keychain',  meta:'Black premium set',            price:700,  emoji:'📦', type:'bottle',   badge:'CORPORATE' },
  { id:40, cat:'Combos',    name:'Diary + Bottle + Pen 3PC', meta:'Black·Red·Blue',               price:1000, emoji:'🗂', type:'diary',    badge:'CORPORATE' },
  { id:41, cat:'Combos',    name:'Bottle + Umbrella Set',    meta:'Black·White·Blue',             price:1100, emoji:'☂', type:'bottle' },
  { id:42, cat:'Combos',    name:'Vacuum Cup+Pen+Diary',     meta:'Black·White·Red',              price:1100, emoji:'🎯', type:'diary',    badge:'CORPORATE' },
  { id:43, cat:'Combos',    name:'Dr Pen Stand',             meta:'Personalized name',            price:300,  emoji:'👨‍⚕️', type:'diary', badge:'GIFTING' },
  { id:44, cat:'Combos',    name:'ADV Pen Stand',            meta:'Advocate personalized',        price:300,  emoji:'⚖', type:'diary',    badge:'GIFTING' },
];

export const CATEGORIES = ['All', 'Wallets', 'Pens', 'Keychains', 'Jewellery', 'Diaries', 'Bottles', 'Frames', 'Combos'];
export const WA_NUMBER = '918482970210';

'use client'
import { useState, useCallback } from 'react'
import { PRODUCTS, CATEGORIES, WA_NUMBER, Product } from '@/data/products'
import { generateSVG } from '@/components/svgPreview'

const COLORS = [
  { hex: '#1A1A1A', name: 'Black',  border: '#555' },
  { hex: '#5C2E0E', name: 'Brown',  border: '' },
  { hex: '#B5651D', name: 'Tan',    border: '' },
  { hex: '#1A2E5A', name: 'Blue',   border: '' },
  { hex: '#4A4040', name: 'Grey',   border: '' },
  { hex: '#5C1A1A', name: 'Red',    border: '' },
]

const SYMBOLS = [
  { val: '',   label: '—' },
  { val: '👑', label: '👑' },
  { val: '♾',  label: '♾' },
  { val: '🩺', label: '🩺' },
  { val: '⚖',  label: '⚖' },
  { val: '✈',  label: '✈' },
  { val: '❤',  label: '❤' },
  { val: '⭐', label: '⭐' },
]

export default function Home() {
  const [page, setPage] = useState<'catalog' | 'customize' | 'corporate'>('catalog')
  const [activeCat, setActiveCat] = useState('All')
  const [selProd, setSelProd] = useState<Product>(PRODUCTS[0])
  const [custName, setCustName] = useState('')
  const [sym, setSym] = useState('')
  const [col, setCol] = useState(COLORS[0])
  const [pickerCat, setPickerCat] = useState(PRODUCTS[0].cat)
  const [toast, setToast] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  // Corp form
  const [cn, setCn] = useState(''); const [cc, setCc] = useState('')
  const [cp, setCp] = useState(''); const [cq, setCq] = useState('')
  const [cpr, setCpr] = useState(''); const [cb, setCb] = useState('')
  const [cm, setCm] = useState('')

  const showToast = useCallback((msg: string) => {
    setToast(msg); setToastVisible(true)
    setTimeout(() => setToastVisible(false), 3000)
  }, [])

  const filteredProds = activeCat === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCat)
  const pickerProds = PRODUCTS.filter(p => p.cat === pickerCat).slice(0, 9)

  const selectProduct = (p: Product) => {
    setSelProd(p)
    setPickerCat(p.cat)
  }

  const openCustomize = (p: Product) => {
    selectProduct(p)
    setPage('customize')
  }

  const orderWA = () => {
    const nm = custName || '(not entered)'
    const msg =
      `🎁 *NEW ORDER — GIVITAS*\n\n` +
      `Product: ${selProd.name}\n` +
      `Category: ${selProd.cat}\n` +
      `Name to engrave: ${nm.toUpperCase()}\n` +
      `Symbol: ${sym || 'None'}\n` +
      `Color: ${col.name}\n` +
      `Price: ₹${selProd.price}\n\n` +
      `📍 Please confirm & share payment details.\n` +
      `_Sent from givitas.in_`
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const corpEnquiry = () => {
    const msg =
      `🏢 *CORPORATE ENQUIRY — GIVITAS*\n\n` +
      `Name: ${cn}\nCompany: ${cc}\nPhone: ${cp}\n` +
      `Product: ${cpr}\nQuantity: ${cq}\nBudget: ₹${cb}/pc\n\n` +
      `Notes: ${cm}\n\n_Sent from givitas.in_`
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
    showToast('Enquiry sent via WhatsApp ✓')
  }

  const svgContent = generateSVG(selProd.type, custName, sym, col.hex)

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="logo">GIVI<span>TAS</span></div>
        <div className="nav-links">
          {(['catalog','customize','corporate'] as const).map(p => (
            <button key={p} className={`nav-link${page === p ? ' active' : ''}`} onClick={() => setPage(p)}>
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* ── CATALOG ── */}
      {page === 'catalog' && (
        <>
          {/* Hero */}
          <div style={{ padding:'48px 24px 40px', textAlign:'center', borderBottom:'0.5px solid #1E1E1E', background:'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'rgba(201,168,76,0.08)', border:'0.5px solid rgba(201,168,76,0.25)', color:'var(--gold)', fontSize:10, letterSpacing:2, padding:'6px 16px', borderRadius:100, marginBottom:24 }}>
              ✦ SURAT&apos;S PREMIUM GIFT STUDIO
            </div>
            <h1 style={{ fontSize:38, fontWeight:300, lineHeight:1.2, marginBottom:14 }}>
              Personalized Gifts<br />
              <em style={{ fontStyle:'normal', color:'var(--gold)', fontWeight:500 }}>Made Just For You</em>
            </h1>
            <p style={{ color:'var(--text-muted)', fontSize:15, maxWidth:480, margin:'0 auto 32px', lineHeight:1.6 }}>
              Customize. Preview. Order. Dispatched same day when ordered before 3 PM.
            </p>
            <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
              <button className="btn-primary" onClick={() => setPage('customize')}>✦ Customize Now</button>
              <button className="btn-outline" onClick={() => document.getElementById('cat-section')?.scrollIntoView({ behavior:'smooth' })}>Browse Collection</button>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:1, background:'#1A1A1A' }}>
            {[['55+','PRODUCTS'],['1-Day','DISPATCH'],['Live','PREVIEW'],['100%','PERSONALIZED']].map(([n,l]) => (
              <div key={l} style={{ background:'var(--dark-2)', padding:16, textAlign:'center' }}>
                <div style={{ fontSize:20, fontWeight:600, color:'var(--gold)' }}>{n}</div>
                <div style={{ fontSize:11, color:'var(--text-muted)', marginTop:2, letterSpacing:0.5 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Catalog */}
          <div className="section" id="cat-section">
            <div className="section-hdr">
              <span className="section-title">Our Collection</span>
              <span className="section-sub">Tap product to customize</span>
            </div>
            <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:20 }}>
              {CATEGORIES.map(c => (
                <button key={c} className={`cat-btn${activeCat === c ? ' active' : ''}`} onClick={() => setActiveCat(c)}>{c}</button>
              ))}
            </div>
            <div className="prod-grid">
              {filteredProds.map(p => (
                <div key={p.id} className={`card${selProd.id === p.id ? ' selected' : ''}`} onClick={() => selectProduct(p)}>
                  <div style={{ height:130, display:'flex', alignItems:'center', justifyContent:'center', background:'var(--dark-3)', fontSize:40, position:'relative', flexDirection:'column' }}>
                    {p.emoji}
                    {p.badge && <span className="badge" style={{ position:'absolute', top:8, right:8 }}>{p.badge}</span>}
                  </div>
                  <div style={{ padding:12 }}>
                    <div style={{ fontSize:13, fontWeight:500, marginBottom:3 }}>{p.name}</div>
                    <div style={{ fontSize:11, color:'var(--text-muted)', marginBottom:8 }}>{p.meta}</div>
                    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                      <span style={{ fontSize:15, fontWeight:600, color:'var(--gold)' }}>₹{p.price}<small style={{ fontSize:10, fontWeight:400, color:'var(--text-muted)' }}> onwards</small></span>
                      <button style={{ background:'transparent', border:'0.5px solid #333', color:'var(--text-muted)', padding:'5px 10px', borderRadius:6, fontSize:11, transition:'all 0.2s' }}
                        onClick={e => { e.stopPropagation(); openCustomize(p) }}>
                        Customize ✦
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div style={{ height:'0.5px', background:'#1A1A1A' }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:14, padding:'28px 24px' }}>
            {[['⚡','Same-Day Dispatch','Order before 3 PM, ships today'],['✦','Live Name Preview','See your product before ordering'],['🔒','Secure Checkout','UPI · Card · Net Banking'],['🎁','Premium Packaging','Gift-ready on every order']].map(([ico,t,d]) => (
              <div key={t} style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                <div style={{ width:34, height:34, background:'rgba(201,168,76,0.08)', border:'0.5px solid rgba(201,168,76,0.18)', borderRadius:'var(--radius-sm)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:15, flexShrink:0 }}>{ico}</div>
                <div>
                  <div style={{ fontSize:12, fontWeight:500, marginBottom:2 }}>{t}</div>
                  <div style={{ fontSize:11, color:'var(--text-muted)', lineHeight:1.5 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── CUSTOMIZE ── */}
      {page === 'customize' && (
        <div className="section">
          <div className="section-hdr">
            <span className="section-title">Live Personalization</span>
            <span className="section-sub">Type your name, see it appear instantly</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:18 }}>
            {/* Preview panel */}
            <div className="panel">
              <div style={{ background:'rgba(201,168,76,0.08)', border:'0.5px solid rgba(201,168,76,0.25)', color:'var(--gold)', fontSize:9, letterSpacing:1.5, padding:'4px 10px', borderRadius:100, display:'inline-block', marginBottom:12 }}>LIVE PREVIEW</div>
              <div style={{ fontSize:14, fontWeight:500, marginBottom:14 }}>{selProd.name}</div>
              <div className="preview-canvas">
                <svg viewBox="0 0 240 180" style={{ maxWidth:240, width:'100%' }}
                  dangerouslySetInnerHTML={{ __html: svgContent }} />
              </div>
              {/* Product picker */}
              <div style={{ fontSize:11, color:'var(--text-muted)', marginBottom:8, letterSpacing:0.5 }}>SWITCH PRODUCT</div>
              <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:10 }}>
                {CATEGORIES.filter(c => c !== 'All').map(c => (
                  <button key={c} className={`cat-btn${pickerCat === c ? ' active' : ''}`} style={{ fontSize:11 }} onClick={() => setPickerCat(c)}>{c}</button>
                ))}
              </div>
              <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                {pickerProds.map(p => (
                  <button key={p.id} className={`cat-btn${selProd.id === p.id ? ' active' : ''}`} style={{ fontSize:11 }} onClick={() => selectProduct(p)}>
                    {p.emoji} {p.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Options panel */}
            <div className="panel">
              <div style={{ fontSize:10, color:'var(--text-muted)', letterSpacing:1, marginBottom:5 }}>YOUR NAME</div>
              <input className="inp" placeholder="e.g. RAKESH" maxLength={13} value={custName}
                onChange={e => setCustName(e.target.value)} style={{ marginBottom:14 }} />

              <div style={{ fontSize:10, color:'var(--text-muted)', letterSpacing:1, marginBottom:8 }}>SYMBOL / CHARM</div>
              <div style={{ display:'flex', gap:5, flexWrap:'wrap', marginBottom:14 }}>
                {SYMBOLS.map(s => (
                  <button key={s.val} onClick={() => setSym(s.val)}
                    style={{ background: sym === s.val ? 'rgba(201,168,76,0.1)' : 'var(--dark-3)', border: sym === s.val ? '0.5px solid rgba(201,168,76,0.4)' : '0.5px solid #333', padding:'7px 9px', borderRadius:'var(--radius-sm)', fontSize:14, minWidth:38, textAlign:'center', transition:'all 0.2s' }}>
                    {s.label}
                  </button>
                ))}
              </div>

              <div style={{ fontSize:10, color:'var(--text-muted)', letterSpacing:1, marginBottom:8 }}>COLOR</div>
              <div style={{ display:'flex', gap:8, marginBottom:16 }}>
                {COLORS.map(c => (
                  <button key={c.name} title={c.name} onClick={() => setCol(c)}
                    className={`color-dot${col.name === c.name ? ' active' : ''}`}
                    style={{ background: c.hex, borderColor: col.name === c.name ? 'var(--gold)' : 'transparent' }} />
                ))}
              </div>

              <div style={{ background:'var(--dark-3)', borderRadius:'var(--radius-sm)', padding:'12px 14px', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14 }}>
                <span style={{ fontSize:13, color:'var(--text-muted)' }}>Price</span>
                <span style={{ fontSize:20, fontWeight:600, color:'var(--gold)' }}>₹{selProd.price}</span>
              </div>

              <button className="wa-btn" onClick={orderWA}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M5.027 2A12 12 0 000 12c0 2.128.562 4.122 1.535 5.846L0 22l4.293-1.498A11.95 11.95 0 0012 22a12 12 0 0012-12A12 12 0 0012 0 12 12 0 005.027 2zm6.973 18a9.958 9.958 0 01-5.083-1.394l-.365-.217-3.772 1.315 1.155-3.663-.238-.375A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Order on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── CORPORATE ── */}
      {page === 'corporate' && (
        <div className="section">
          <div className="section-hdr">
            <span className="section-title">Corporate Gifting</span>
            <span className="section-sub">Bulk orders · Brand logo · Custom packaging</span>
          </div>
          <div className="panel">
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:20 }}>
              {[['📦','Bulk Orders','Min 50 pcs, exclusive pricing'],['🏷','Logo Branding','Company logo on every product'],['🎁','Custom Packaging','Premium branded gift boxes'],['⚡','Fast Turnaround','Bulk delivery in 5–7 days']].map(([ico,t,d]) => (
                <div key={t} style={{ background:'var(--dark-3)', borderRadius:'var(--radius-sm)', padding:14 }}>
                  <div style={{ fontSize:22, marginBottom:6 }}>{ico}</div>
                  <div style={{ fontSize:13, fontWeight:500, marginBottom:3 }}>{t}</div>
                  <div style={{ fontSize:11, color:'var(--text-muted)' }}>{d}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize:11, color:'var(--text-muted)', letterSpacing:1, marginBottom:12 }}>REQUEST A QUOTE</div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
              {[['Your Name', cn, setCn],['Company Name', cc, setCc],['Phone / WhatsApp', cp, setCp],['Approx. Quantity', cq, setCq]].map(([ph, v, fn]) => (
                <input key={ph as string} className="inp" placeholder={ph as string} value={v as string} onChange={e => (fn as (v:string)=>void)(e.target.value)} />
              ))}
              <select className="inp" value={cpr} onChange={e => setCpr(e.target.value)} style={{ background:'var(--dark-3)', color: cpr ? 'var(--text)' : 'var(--text-muted)' }}>
                <option value="">Select Product Category</option>
                {['Wallets & Combos','Pens','Keychains','Diaries','Bottles & Sippers','Jewellery','Gift Sets','Other'].map(o => <option key={o}>{o}</option>)}
              </select>
              <input className="inp" placeholder="Budget per piece (₹)" value={cb} onChange={e => setCb(e.target.value)} />
              <textarea className="inp" placeholder="Any special requirements, logo details, occasion..." value={cm} onChange={e => setCm(e.target.value)}
                style={{ gridColumn:'1/-1', resize:'vertical', minHeight:72 }} />
              <button className="wa-btn" style={{ gridColumn:'1/-1' }} onClick={corpEnquiry}>
                Send Enquiry via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      <div className={`toast${toastVisible ? ' show' : ''}`}>{toast}</div>
    </>
  )
}

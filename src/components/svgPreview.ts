import { ProductType } from '@/data/products';

export function generateSVG(type: ProductType, name: string, sym: string, col: string): string {
  const nm = name.toUpperCase().substring(0, 12) || 'YOUR NAME';
  const fs = nm.length > 8 ? 10 : nm.length > 6 ? 12 : 14;

  const draws: Record<ProductType, string> = {
    wallet: `
      <rect x="18" y="28" width="204" height="130" rx="14" fill="${col}"/>
      <rect x="18" y="28" width="204" height="130" rx="14" fill="none" stroke="#C9A84C" stroke-width="0.8"/>
      <text x="120" y="80" text-anchor="middle" fill="#C9A84C" font-size="28" opacity="0.65">${sym}</text>
      <rect x="52" y="110" width="136" height="28" rx="4" fill="#C9A84C"/>
      <text x="120" y="129" text-anchor="middle" fill="#0A0800" font-size="${fs}" font-weight="700" font-family="Georgia,serif" letter-spacing="2">${nm}</text>`,

    card: `
      <rect x="28" y="36" width="184" height="112" rx="10" fill="${col}"/>
      <rect x="28" y="36" width="184" height="112" rx="10" fill="none" stroke="#C9A84C" stroke-width="0.8"/>
      <text x="120" y="94" text-anchor="middle" fill="#C9A84C" font-size="24" opacity="0.6">${sym}</text>
      <rect x="44" y="112" width="152" height="26" rx="4" fill="#C9A84C"/>
      <text x="120" y="129" text-anchor="middle" fill="#0A0800" font-size="${fs}" font-weight="700" font-family="Georgia,serif" letter-spacing="2">${nm}</text>`,

    pen: `
      <rect x="14" y="76" width="212" height="28" rx="14" fill="${col}"/>
      <rect x="14" y="76" width="212" height="28" rx="14" fill="none" stroke="#C9A84C" stroke-width="0.8"/>
      <circle cx="218" cy="90" r="9" fill="#888" stroke="#C9A84C" stroke-width="0.5"/>
      <circle cx="19" cy="90" r="5" fill="#C9A84C"/>
      <text x="110" y="95" text-anchor="middle" fill="#C9A84C" font-size="${fs}" font-family="Georgia,serif" letter-spacing="1.5">${nm} ${sym}</text>`,

    keychain: `
      <circle cx="120" cy="46" r="20" fill="none" stroke="#C9A84C" stroke-width="2"/>
      <line x1="120" y1="66" x2="120" y2="80" stroke="#C9A84C" stroke-width="2"/>
      <rect x="68" y="80" width="104" height="68" rx="8" fill="${col}"/>
      <rect x="68" y="80" width="104" height="68" rx="8" fill="none" stroke="#C9A84C" stroke-width="0.8"/>
      <text x="120" y="104" text-anchor="middle" fill="#C9A84C" font-size="22" opacity="0.7">${sym}</text>
      <rect x="76" y="118" width="88" height="22" rx="3" fill="#C9A84C"/>
      <text x="120" y="133" text-anchor="middle" fill="#0A0800" font-size="${nm.length > 8 ? 9 : 11}" font-weight="700" font-family="Georgia,serif" letter-spacing="1.5">${nm}</text>`,

    pendant: `
      <line x1="120" y1="8" x2="120" y2="55" stroke="#C9A84C" stroke-width="1" opacity="0.6"/>
      <line x1="40" y1="8" x2="200" y2="8" stroke="#C9A84C" stroke-width="0.8" opacity="0.4"/>
      <rect x="106" y="54" width="28" height="95" rx="6" fill="${col}" stroke="#C9A84C" stroke-width="0.8"/>
      <text x="120" y="110" text-anchor="middle" fill="#C9A84C" font-size="9" font-family="Georgia,serif" letter-spacing="1" writing-mode="vertical-rl">${nm.substring(0, 7)}</text>`,

    bracelet: `
      <path d="M28,90 Q50,38 120,33 Q190,38 212,90 Q190,142 120,147 Q50,142 28,90Z" fill="none" stroke="${col}" stroke-width="14"/>
      <path d="M28,90 Q50,38 120,33 Q190,38 212,90 Q190,142 120,147 Q50,142 28,90Z" fill="none" stroke="#C9A84C" stroke-width="0.7" opacity="0.5"/>
      <rect x="76" y="74" width="88" height="32" rx="5" fill="#C9A84C"/>
      <text x="120" y="94" text-anchor="middle" fill="#0A0800" font-size="${fs}" font-weight="700" font-family="Georgia,serif" letter-spacing="1.5">${nm}</text>`,

    ring: `
      <ellipse cx="120" cy="98" rx="72" ry="42" fill="none" stroke="${col}" stroke-width="20"/>
      <ellipse cx="120" cy="98" rx="72" ry="42" fill="none" stroke="#C9A84C" stroke-width="0.6" opacity="0.6"/>
      <rect x="70" y="82" width="100" height="28" rx="6" fill="#C9A84C"/>
      <text x="120" y="100" text-anchor="middle" fill="#0A0800" font-size="${nm.length > 8 ? 8 : 10}" font-weight="700" font-family="Georgia,serif" letter-spacing="1">${nm} ${sym}</text>`,

    bottle: `
      <rect x="84" y="8" width="72" height="18" rx="9" fill="${col}" stroke="#C9A84C" stroke-width="0.8"/>
      <rect x="68" y="24" width="104" height="142" rx="12" fill="${col}"/>
      <rect x="68" y="24" width="104" height="142" rx="12" fill="none" stroke="#C9A84C" stroke-width="0.8"/>
      <rect x="76" y="82" width="88" height="26" rx="4" fill="rgba(201,168,76,0.12)" stroke="#C9A84C" stroke-width="0.5"/>
      <text x="120" y="99" text-anchor="middle" fill="#C9A84C" font-size="${fs}" font-family="Georgia,serif" letter-spacing="1.5">${nm}</text>
      <text x="120" y="142" text-anchor="middle" fill="#C9A84C" font-size="22" opacity="0.4">${sym}</text>`,

    diary: `
      <rect x="38" y="12" width="164" height="158" rx="8" fill="${col}"/>
      <rect x="38" y="12" width="164" height="158" rx="8" fill="none" stroke="#C9A84C" stroke-width="0.8"/>
      <rect x="38" y="12" width="14" height="158" rx="4" fill="rgba(0,0,0,0.25)"/>
      <text x="128" y="68" text-anchor="middle" fill="#C9A84C" font-size="30" opacity="0.55">${sym || '📖'}</text>
      <rect x="68" y="108" width="114" height="24" rx="4" fill="rgba(201,168,76,0.14)" stroke="#C9A84C" stroke-width="0.5"/>
      <text x="125" y="125" text-anchor="middle" fill="#C9A84C" font-size="${fs}" font-family="Georgia,serif" letter-spacing="1.5">${nm}</text>`,

    frame: `
      <rect x="18" y="12" width="204" height="158" rx="6" fill="#7B5A14" stroke="#C9A84C" stroke-width="1.2"/>
      <rect x="30" y="24" width="180" height="134" rx="4" fill="#F2E4C0" opacity="0.92"/>
      <text x="120" y="82" text-anchor="middle" fill="#3A2A0A" font-size="44" opacity="0.35">🖼</text>
      <text x="120" y="140" text-anchor="middle" fill="#5A3A0A" font-size="${fs}" font-family="Georgia,serif" letter-spacing="1.5">${nm} ${sym}</text>`,
  };

  return draws[type] || draws.wallet;
}

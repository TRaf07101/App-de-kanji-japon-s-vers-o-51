
'use strict';

/* ────────── ícones ────────── */
const IC={
 learn:'<path d="M12 6.6C10 5.1 7 4.6 4 5.1v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-13c-3-.5-6 0-8 1.5Zm0 0v13"/>',
 review:'<path d="M2.5 12a9.5 9.5 0 1 0 2.9-6.8"/><path d="M2.5 4.5V10H8"/>',
 brush:'<path d="m14.6 3.6 5.8 5.8"/><path d="M17.5 2.7a2.6 2.6 0 0 1 3.8 3.8L9 18.8l-5.2 1.4 1.4-5.2Z"/>',
 lib:'<rect x="3" y="3" width="7.4" height="7.4" rx="1.8"/><rect x="13.6" y="3" width="7.4" height="7.4" rx="1.8"/><rect x="13.6" y="13.6" width="7.4" height="7.4" rx="1.8"/><rect x="3" y="13.6" width="7.4" height="7.4" rx="1.8"/>',
 set:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1.5 14h5M9.5 8h5M17.5 16h5"/>',
 sun:'<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7"/>',
 moon:'<path d="M20.5 14.4A8.6 8.6 0 1 1 9.6 3.5a6.9 6.9 0 0 0 10.9 10.9Z"/>',
 check:'<path d="m4.5 12.5 5 5 10-11"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',
 chev:'<path d="m6 9 6 6 6-6"/>',bulb:'<path d="M9 18h6M10 22h4"/><path d="M12 2a6.5 6.5 0 0 0-4 11.6c.7.6 1 1.4 1 2.2v.2h6v-.2c0-.8.3-1.6 1-2.2A6.5 6.5 0 0 0 12 2Z"/>',
 vol:'<path d="M11 5 6.5 8.8H3v6.4h3.5L11 19V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
 undo:'<path d="M3 7v6h6"/><path d="M3.5 13a9 9 0 1 0 2.1-5.6L3 10"/>',
 trash:'<path d="M3 6h18M8 6V4.5A1.5 1.5 0 0 1 9.5 3h5A1.5 1.5 0 0 1 16 4.5V6M19 6l-.8 13.1a2 2 0 0 1-2 1.9H7.8a2 2 0 0 1-2-1.9L5 6"/>',
 eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
 play:'<path d="M6 3.5v18l14-8.5Z"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
 book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
 mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8"/>',
 lock:'<rect x="4.5" y="10.5" width="15" height="11" rx="2.5"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>'
};
const svg=(p,w)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w||2}" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;

/* ══════════════════════════════════════════════════════════════
   ILUSTRAÇÕES VETORIAIS (nenhum emoji no app)
   ══════════════════════════════════════════════════════════════ */
let _u=0;const uid=()=>'i'+(++_u);
const G={
book:()=>{const a=uid();return `<svg viewBox="0 0 64 64" class="gi">
<defs><linearGradient id="${a}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".99"/><stop offset="1" stop-color="#fff" stop-opacity=".72"/></linearGradient></defs>
<path d="M32 19.5C26.4 15.6 19 14.1 11.6 15a2.9 2.9 0 0 0-2.6 2.9v27.4a2.6 2.6 0 0 0 2.9 2.6c6.6-.8 13 .6 17.8 4l2.3 1.6 2.3-1.6c4.8-3.4 11.2-4.8 17.8-4a2.6 2.6 0 0 0 2.9-2.6V17.9a2.9 2.9 0 0 0-2.6-2.9C45 14.1 37.6 15.6 32 19.5Z" fill="url(#${a})"/>
<path d="M32 19.5v34.9" stroke="#101827" stroke-opacity=".3" stroke-width="2.6" stroke-linecap="round"/>
<g stroke="#101827" stroke-opacity=".2" stroke-width="2.2" stroke-linecap="round">
<path d="M16 25c3.8-.5 7.6 0 10.5 1.3M16 32c3.8-.5 7.6 0 10.5 1.3M16 39c3.8-.5 7.6 0 10.5 1.3M48 25c-3.8-.5-7.6 0-10.5 1.3M48 32c-3.8-.5-7.6 0-10.5 1.3M48 39c-3.8-.5-7.6 0-10.5 1.3"/></g>
<path d="M40.5 9h5.5v15l-2.7-2.7L40.5 24z" fill="#FF6B57"/></svg>`},
target:()=>`<svg viewBox="0 0 64 64" class="gi">
<circle cx="29" cy="35" r="21" fill="#fff" fill-opacity=".2"/>
<circle cx="29" cy="35" r="21" fill="none" stroke="#fff" stroke-width="3.6"/>
<circle cx="29" cy="35" r="13" fill="none" stroke="#fff" stroke-width="3.2" stroke-opacity=".8"/>
<circle cx="29" cy="35" r="5.2" fill="#FF6B57"/>
<path d="M29 35 51 13" stroke="#fff" stroke-width="4.4" stroke-linecap="round"/>
<path d="M44 11h9v9" stroke="#FFD874" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
chars:()=>`<svg viewBox="0 0 64 64" class="gi">
<rect x="4" y="10" width="35" height="29" rx="8" fill="#fff" fill-opacity=".96"/>
<path d="M13 39h9l-3.5 8z" fill="#fff" fill-opacity=".96"/>
<text x="21.5" y="31" text-anchor="middle" font-family="'Noto Serif JP',serif" font-size="20" font-weight="700" fill="#1B2438">あ</text>
<rect x="27" y="27" width="33" height="26" rx="8" fill="#FFD874"/>
<path d="M51 53h-9l3.5 7z" fill="#FFD874"/>
<text x="43.5" y="46" text-anchor="middle" font-family="Inter,sans-serif" font-size="17" font-weight="900" fill="#63430A">A</text></svg>`,
brush:()=>{const a=uid();return `<svg viewBox="0 0 64 64" class="gi">
<defs><linearGradient id="${a}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F7E6C6"/><stop offset="1" stop-color="#B98A4E"/></linearGradient></defs>
<path d="M10 55c7-1 12-5 16-11" stroke="#fff" stroke-opacity=".45" stroke-width="4.2" stroke-linecap="round" fill="none"/>
<rect x="38" y="3" width="10" height="26" rx="5" transform="rotate(37 43 16)" fill="url(#${a})"/>
<rect x="35" y="24" width="13" height="8" rx="2.4" transform="rotate(37 41.5 28)" fill="#EFCE86"/>
<path d="M36 32c-3 5-7.5 10.5-12.6 15.8-1.9 2-4 3.9-6.4 5.2 1.3-2.5 2.8-4.8 4.2-7.1C25.4 39.6 29.6 33.6 33 27.4Z" fill="#141A26"/>
<path d="M28 42c2.2-3 4.4-6.2 6.4-9.4" stroke="#fff" stroke-opacity=".22" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>`},
mic:()=>`<svg viewBox="0 0 64 64" class="gi">
<rect x="23" y="6" width="17" height="29" rx="8.5" fill="#fff"/>
<g stroke="#1B2438" stroke-opacity=".2" stroke-width="1.9" stroke-linecap="round"><path d="M26 13.5h11M26 19h11M26 24.5h11"/></g>
<path d="M15 30a16.5 16.5 0 0 0 33 0" fill="none" stroke="#fff" stroke-width="4.4" stroke-linecap="round"/>
<path d="M31.5 46v9M23 55h17" stroke="#fff" stroke-width="4.4" stroke-linecap="round"/>
<path d="M52 20a13 13 0 0 1 0 17M58 14.5a20.5 20.5 0 0 1 0 28" stroke="#FFD874" stroke-width="3.4" stroke-linecap="round" fill="none"/></svg>`,
trophy:()=>{const a=uid();return `<svg viewBox="0 0 64 64" class="gi">
<defs><linearGradient id="${a}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF3C8"/><stop offset=".5" stop-color="#FFD46B"/><stop offset="1" stop-color="#CE8C1E"/></linearGradient></defs>
<path d="M17 8h30v15c0 8.3-6.7 15-15 15s-15-6.7-15-15z" fill="url(#${a})"/>
<path d="M17 13h-6.5a9 9 0 0 0 9 9M47 13h6.5a9 9 0 0 1-9 9" fill="none" stroke="url(#${a})" stroke-width="4.2" stroke-linecap="round"/>
<path d="M27.5 38h9v8h-9z" fill="#CE8C1E"/>
<path d="M19 46h26a3.5 3.5 0 0 1 3.5 3.5V56h-33v-6.5A3.5 3.5 0 0 1 19 46Z" fill="url(#${a})"/>
<path d="m32 13.5 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2-4.5-4.4 6.2-.9z" fill="#fff" fill-opacity=".92"/></svg>`},
lock:()=>`<svg viewBox="0 0 64 64" class="gi">
<path d="M21 29v-7a11 11 0 0 1 22 0v7" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="6.4" stroke-linecap="round"/>
<rect x="12" y="27" width="40" height="30" rx="8" fill="#fff" fill-opacity=".88"/>
<circle cx="32" cy="39" r="4.8" fill="#1B2438" fill-opacity=".55"/>
<path d="M32 42.5v6.5" stroke="#1B2438" stroke-opacity=".55" stroke-width="4.2" stroke-linecap="round"/>
<circle cx="18.5" cy="33" r="1.7" fill="#1B2438" fill-opacity=".18"/><circle cx="45.5" cy="33" r="1.7" fill="#1B2438" fill-opacity=".18"/></svg>`,
crown:()=>{const a=uid();return `<svg viewBox="0 0 64 64" class="gi">
<defs><linearGradient id="${a}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF6D2"/><stop offset="1" stop-color="#DE9E13"/></linearGradient></defs>
<path d="M6 23 17.5 33 32 11l14.5 22L58 23l-4 26H10z" fill="url(#${a})"/>
<rect x="9" y="48" width="46" height="9.5" rx="4" fill="#C08512"/>
<circle cx="6" cy="22" r="4.2" fill="#FFF6D2"/><circle cx="58" cy="22" r="4.2" fill="#FFF6D2"/><circle cx="32" cy="10" r="4.6" fill="#FF6B57"/>
<circle cx="21" cy="41" r="3.1" fill="#D14A38"/><circle cx="32" cy="41" r="3.1" fill="#3B6FE0"/><circle cx="43" cy="41" r="3.1" fill="#18A96C"/></svg>`},
check:c=>{const k=c||'#fff';return `<svg viewBox="0 0 64 64" class="gi">
<circle cx="32" cy="32" r="25" fill="${k}" fill-opacity=".2"/>
<path d="m18.5 33.5 9.5 9.5L45.5 21" fill="none" stroke="${k}" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`},
users:()=>`<svg viewBox="0 0 64 64" class="gi">
<circle cx="24" cy="22" r="11" fill="#fff" fill-opacity=".95"/>
<path d="M4 55a20 20 0 0 1 40 0z" fill="#fff" fill-opacity=".95"/>
<circle cx="45" cy="25" r="9" fill="#FFD874"/>
<path d="M31 55a15 15 0 0 1 29 0z" fill="#FFD874"/></svg>`,
medal:()=>{const a=uid();return `<svg viewBox="0 0 64 64" class="gi">
<defs><linearGradient id="${a}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF3C8"/><stop offset="1" stop-color="#D9962A"/></linearGradient></defs>
<path d="M18 4h9l9 20h-9z" fill="#5B8DEF"/><path d="M46 4h-9l-9 20h9z" fill="#E8503A"/>
<circle cx="32" cy="42" r="18" fill="url(#${a})"/><circle cx="32" cy="42" r="13" fill="none" stroke="#B5810E" stroke-width="1.8" opacity=".5"/>
<path d="m32 32 2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.1-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z" fill="#fff" fill-opacity=".9"/></svg>`},
link:()=>`<svg viewBox="0 0 64 64" class="gi">
<path d="M26 38 38 26" stroke="#fff" stroke-width="5.5" stroke-linecap="round"/>
<path d="M23 30 15 38a10 10 0 0 0 14 14l8-8" fill="none" stroke="#fff" stroke-width="5.5" stroke-linecap="round"/>
<path d="M41 34l8-8a10 10 0 0 0-14-14l-8 8" fill="none" stroke="#FFD874" stroke-width="5.5" stroke-linecap="round"/></svg>`,
plus:()=>`<svg viewBox="0 0 64 64" class="gi"><circle cx="32" cy="32" r="25" fill="currentColor" fill-opacity=".16"/>
<path d="M32 19v26M19 32h26" stroke="currentColor" stroke-width="6.5" stroke-linecap="round"/></svg>`,
x:()=>`<svg viewBox="0 0 64 64" class="gi">
<circle cx="32" cy="32" r="25" fill="currentColor" fill-opacity=".16"/>
<path d="M21 21 43 43M43 21 21 43" stroke="currentColor" stroke-width="7" stroke-linecap="round"/></svg>`,
star:f=>`<svg viewBox="0 0 64 64" class="gi"><path d="m32 5 8.2 16.6 18.3 2.7-13.2 12.9 3.1 18.2L32 46.8 15.6 55.4l3.1-18.2L5.5 24.3l18.3-2.7z" fill="${f?'#FFD46B':'none'}" stroke="${f?'#D9962A':'currentColor'}" stroke-width="3.2" stroke-linejoin="round"${f?'':' opacity=".38"'}/></svg>`,
starW:()=>{const a=uid();return `<svg viewBox="0 0 64 64" class="gi">
<defs><linearGradient id="${a}" x1=".3" y1="0" x2=".7" y2="1">
<stop offset="0" stop-color="#FFFFFF"/><stop offset=".55" stop-color="#FFFBF0"/><stop offset="1" stop-color="#F0E4C8"/></linearGradient></defs>
<path d="m32 6 8 16.2 17.9 2.6-12.9 12.6 3 17.8L32 46.8 16 55.2l3-17.8L6.1 24.8 24 22.2z"
 fill="url(#${a})" stroke="#C99418" stroke-width="2.4" stroke-linejoin="round"/>
<path d="m32 13.5 5.2 10.6 11.7 1.7-8.5 8.2 2 11.6L32 40.1z" fill="#fff" opacity=".55"/></svg>`},
fire:()=>{const a=uid(),b=uid();return `<svg viewBox="0 0 64 64" class="gi">
<defs><linearGradient id="${a}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#FF3D22"/><stop offset=".55" stop-color="#FF8A1F"/><stop offset="1" stop-color="#FFCE45"/></linearGradient>
<linearGradient id="${b}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#FFC53C"/><stop offset="1" stop-color="#FFF7D6"/></linearGradient></defs>
<path d="M34.6 2.5c1.6 8.8-2.5 13.2-7 17.7C22.6 25.2 17 30.4 17 40c0 12.9 7.9 21.5 16.6 21.5S50.2 52.9 50.2 40c0-7.1-3.2-12.2-6.6-16.7-.7 3.9-2.6 6.4-5.2 7.7 1.5-9.8-1.4-20.7-3.8-28.5Z" fill="url(#${a})"/>
<path d="M34.2 30.5c1.1 4.7-1.5 7.3-3.9 9.6-2.3 2.4-4.6 4.9-4.6 9 0 5.8 4 9.6 8.5 9.6s8.5-3.6 8.5-9.8c0-4.9-3.2-8.6-5.4-11.4-.8 2-1.9 3-3.2 3.6.7-4-.2-8.1-1-10.6Z" fill="url(#${b})"/></svg>`},
gem:()=>{const a=uid();return `<svg viewBox="0 0 64 64" class="gi">
<defs><linearGradient id="${a}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#A8D6FF"/><stop offset="1" stop-color="#3260D8"/></linearGradient></defs>
<path d="M16 9h32l10 15-26 31L6 24z" fill="url(#${a})"/>
<path d="M16 9 6 24h52L48 9M16 9l6.5 15L32 9l9.5 15L48 9M22.5 24 32 55l9.5-31" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2.4" stroke-linejoin="round"/></svg>`},
heart:()=>`<svg viewBox="0 0 64 64" class="gi">
<path d="M32 56S7 41.6 7 24.6A13.8 13.8 0 0 1 32 16a13.8 13.8 0 0 1 25 8.6C57 41.6 32 56 32 56Z" fill="#FF5F5F"/>
<path d="M17.5 22.5a8.5 8.5 0 0 1 7.5-5.5" stroke="#fff" stroke-opacity=".55" stroke-width="3.6" stroke-linecap="round" fill="none"/></svg>`,
bolt:()=>{const a=uid();return `<svg viewBox="0 0 64 64" class="gi">
<defs><linearGradient id="${a}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFEBA6"/><stop offset="1" stop-color="#ED9F0D"/></linearGradient></defs>
<path d="M37 3 11 36h15l-4 25 26-33H32z" fill="url(#${a})"/>
<path d="M34.5 12 19.5 32H30" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="2.8" stroke-linejoin="round"/></svg>`},
torii:()=>`<svg viewBox="0 0 64 64" class="gi">
<path d="M4 13h56l-4.5 8H8.5z" fill="#D94A33"/><path d="M4 13h56l-2.5 4.5H6.5z" fill="#F2705A"/>
<rect x="11" y="24" width="42" height="6.5" rx="2.4" fill="#D94A33"/>
<path d="M15 21h8l3 38h-14z" fill="#E2543C"/><path d="M49 21h-8l-3 38h14z" fill="#E2543C"/>
<rect x="28.5" y="24" width="7" height="10" rx="2" fill="#B8351F"/></svg>`,
sakura:()=>{const a=uid();return `<svg viewBox="0 0 64 64" class="gi">
<defs><radialGradient id="${a}" cx=".5" cy=".8"><stop offset="0" stop-color="#FFF0F5"/><stop offset="1" stop-color="#FF8FB8"/></radialGradient></defs>
<g fill="url(#${a})" stroke="#F06699" stroke-width="1.4">
${[0,72,144,216,288].map(r=>`<path d="M32 34c-5.4-2.4-8.6-7-8.6-12.6 0-5.4 3.4-10.6 8.6-15.4 5.2 4.8 8.6 10 8.6 15.4 0 5.6-3.2 10.2-8.6 12.6Z" transform="rotate(${r} 32 34)"/>`).join('')}</g>
<circle cx="32" cy="34" r="4.6" fill="#FFD874"/>
<g stroke="#F2A93B" stroke-width="1.6" stroke-linecap="round">${[0,60,120,180,240,300].map(r=>`<path d="M32 34 32 27" transform="rotate(${r} 32 34)"/>`).join('')}</g></svg>`},
wave:()=>`<svg viewBox="0 0 64 64" class="gi">
<g fill="none" stroke="#4FA8E0" stroke-width="4.4" stroke-linecap="round">
<path d="M4 26c6-8.5 12.5-8.5 18.5 0S35 34.5 41 26s12.5-8.5 18.5 0" opacity=".35"/>
<path d="M4 39c6-8.5 12.5-8.5 18.5 0S35 47.5 41 39s12.5-8.5 18.5 0" opacity=".7"/>
<path d="M4 52c6-8.5 12.5-8.5 18.5 0S35 60.5 41 52s12.5-8.5 18.5 0"/></g></svg>`,
scroll:()=>`<svg viewBox="0 0 64 64" class="gi">
<rect x="13" y="7" width="38" height="50" rx="4" fill="#F7EDD9"/>
<g stroke="#BC9B68" stroke-width="2.8" stroke-linecap="round"><path d="M21 21h22M21 30h22M21 39h15"/></g>
<rect x="7" y="3" width="50" height="10" rx="5" fill="#8A5A34"/><rect x="7" y="51" width="50" height="10" rx="5" fill="#8A5A34"/>
<rect x="7" y="3" width="50" height="4" rx="2" fill="#A87246"/></svg>`,
calendar:()=>`<svg viewBox="0 0 64 64" class="gi">
<rect x="7" y="12" width="50" height="46" rx="8" fill="#fff" fill-opacity=".95"/>
<rect x="7" y="12" width="50" height="13" rx="8" fill="#E8503A"/>
<rect x="16" y="5" width="6" height="14" rx="3" fill="#B8351F"/><rect x="42" y="5" width="6" height="14" rx="3" fill="#B8351F"/>
<g fill="#1B2438" fill-opacity=".28"><rect x="15" y="32" width="8" height="7" rx="2"/><rect x="28" y="32" width="8" height="7" rx="2"/><rect x="41" y="32" width="8" height="7" rx="2"/><rect x="15" y="44" width="8" height="7" rx="2"/></g>
<rect x="28" y="44" width="8" height="7" rx="2" fill="#FF8A1F"/></svg>`
};

/* ── 5 avatares ilustrados ── */
const AV=[
{id:'kitsune',n:'Kitsune',d:'Máscara de raposa',svg:()=>{const a=uid(),b=uid(),c=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1=".2" y1="0" x2=".8" y2="1"><stop offset="0" stop-color="#43305C"/><stop offset="1" stop-color="#171225"/></linearGradient>
<linearGradient id="${b}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#FFFEFA"/><stop offset=".6" stop-color="#F4EBDB"/><stop offset="1" stop-color="#D9CAB2"/></linearGradient>
<linearGradient id="${c}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F4553E"/><stop offset="1" stop-color="#B32718"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<g fill="#fff" opacity=".22"><circle cx="22" cy="28" r="1.7"/><circle cx="98" cy="34" r="1.3"/><circle cx="28" cy="96" r="1.4"/><circle cx="94" cy="86" r="1.6"/><circle cx="16" cy="62" r="1"/></g>
<path d="M31 47 21 11l32 21z" fill="url(#${b})"/><path d="M89 47 99 11 67 32z" fill="url(#${b})"/>
<path d="M33.5 43 27 20l17.5 12.5z" fill="url(#${c})"/><path d="M86.5 43 93 20 75.5 32.5z" fill="url(#${c})"/>
<path d="M60 25c-17.5 0-30 7.2-32.5 21C25 60 29.5 78.5 39 89.5 45.8 97.4 53 102.5 60 102.5s14.2-5.1 21-13C90.5 78.5 95 60 92.5 46 90 32.2 77.5 25 60 25Z" fill="url(#${b})"/>
<path d="M60 31c-2.8 4.4-3.7 8.8-2.8 13.2 1 5 3.9 7.6 2.8 12-1.1-4.4 1.8-7 2.8-12C63.7 39.8 62.8 35.4 60 31Z" fill="url(#${c})"/>
<path d="M32 53c6.5-6.5 16-8.6 23.5-5.2" stroke="url(#${c})" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M88 53c-6.5-6.5-16-8.6-23.5-5.2" stroke="url(#${c})" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M35 63.5c4.4-5.4 12-6.5 17.5-2.2-3.3 5.4-12 7.6-17.5 2.2Z" fill="#1A1424"/>
<path d="M85 63.5c-4.4-5.4-12-6.5-17.5-2.2 3.3 5.4 12 7.6 17.5 2.2Z" fill="#1A1424"/>
<circle cx="44.5" cy="62" r="2.2" fill="#FFD874"/><circle cx="75.5" cy="62" r="2.2" fill="#FFD874"/>
<path d="M60 75.5c-4.3 0-7.5 2.2-7.5 4.5 0 3.3 3.3 6.5 7.5 6.5s7.5-3.2 7.5-6.5c0-2.3-3.2-4.5-7.5-4.5Z" fill="#1A1424"/>
<g stroke="#C3AF92" stroke-width="1.7" stroke-linecap="round" opacity=".85"><path d="M40 77h-9.5M41 82.5l-8.5 3.2M80 77h9.5M79 82.5l8.5 3.2"/></g>
<path d="M33 75.5c3.2 5.5 5.2 9.8 5.2 14" stroke="url(#${c})" stroke-width="3.6" fill="none" stroke-linecap="round"/>
<path d="M87 75.5c-3.2 5.5-5.2 9.8-5.2 14" stroke="url(#${c})" stroke-width="3.6" fill="none" stroke-linecap="round"/></svg>`}},

{id:'daruma',n:'Daruma',d:'Boneco da persistência',svg:()=>{const a=uid(),b=uid(),c=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#2A2036"/><stop offset="1" stop-color="#14101C"/></linearGradient>
<radialGradient id="${b}" cx=".38" cy=".3"><stop offset="0" stop-color="#F4614A"/><stop offset=".6" stop-color="#D8351F"/><stop offset="1" stop-color="#9C1D0C"/></radialGradient>
<linearGradient id="${c}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF6E4"/><stop offset="1" stop-color="#EEDFC4"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<ellipse cx="60" cy="104" rx="34" ry="7" fill="#000" opacity=".28"/>
<path d="M60 14c-21 0-34.5 17-34.5 40.5S39 102 60 102s34.5-24 34.5-47.5S81 14 60 14Z" fill="url(#${b})"/>
<path d="M60 14c-8 0-15 2.5-20.5 7 4.5 42 .5 60-6 76 7 3.4 15.5 5 26.5 5 21 0 34.5-24 34.5-47.5S81 14 60 14Z" fill="#000" opacity=".07"/>
<ellipse cx="60" cy="50" rx="23" ry="21" fill="url(#${c})"/>
<path d="M37.5 44c5-8 13-9 19-5.5-6.5.5-12.5 3-19 5.5Z" fill="#1A1424"/>
<path d="M82.5 44c-5-8-13-9-19-5.5 6.5.5 12.5 3 19 5.5Z" fill="#1A1424"/>
<circle cx="49" cy="52" r="7.5" fill="#1A1424"/>
<circle cx="71" cy="52" r="7.5" fill="none" stroke="#1A1424" stroke-width="2.4"/>
<circle cx="51" cy="49.5" r="2.4" fill="#fff" opacity=".8"/>
<path d="M60 60.5c-6 0-10 1.5-13 3.5 3.5 4 8 6 13 6s9.5-2 13-6c-3-2-7-3.5-13-3.5Z" fill="#1A1424"/>
<g stroke="#1A1424" stroke-width="2.6" stroke-linecap="round"><path d="M45 66c-3.5 1-6 2.5-8 4.5M75 66c3.5 1 6 2.5 8 4.5"/></g>
<path d="M34 78h52" stroke="#FFD874" stroke-width="2.6" opacity=".55"/>
<text x="60" y="94" text-anchor="middle" font-family="'Noto Serif JP',serif" font-size="19" font-weight="700" fill="#FFD874">福</text>
<path d="M28 56c-2-6-2-13 0-19M92 56c2-6 2-13 0-19" stroke="#FFD874" stroke-width="2.2" fill="none" opacity=".5" stroke-linecap="round"/></svg>`}},

{id:'neko',n:'Maneki-neko',d:'Gato da sorte',svg:()=>{const a=uid(),b=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#1F3A52"/><stop offset="1" stop-color="#0F1E2E"/></linearGradient>
<linearGradient id="${b}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#E2DED4"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<ellipse cx="60" cy="106" rx="30" ry="6" fill="#000" opacity=".25"/>
<path d="M60 56c-16 0-25.5 11-25.5 27 0 12 6 20.5 25.5 20.5S85.5 95 85.5 83c0-16-9.5-27-25.5-27Z" fill="url(#${b})"/>
<path d="M35 66c-6-2-11 2-11 8s5 10 10 8" fill="url(#${b})"/>
<path d="M88 52c5-6 13-5 15 2 2 6-3 11-9 10-4-.5-6-4-6-8z" fill="url(#${b})"/>
<path d="M91 55c3-3.5 8-3 9 1.2 1.2 3.6-1.8 6.6-5.4 6-2.4-.4-3.6-2.4-3.6-4.8z" fill="#FFD5DC"/>
<path d="M31 24 27 46l19-8z" fill="url(#${b})"/><path d="M89 24 93 46 74 38z" fill="url(#${b})"/>
<path d="M33 29 31 42l11-4.6z" fill="#FFB7C5"/><path d="M87 29 89 42 78 37.4z" fill="#FFB7C5"/>
<ellipse cx="60" cy="45" rx="27" ry="24" fill="url(#${b})"/>
<path d="M44 42c2.6-3.4 7.4-3.4 10 0" stroke="#1A1424" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<path d="M66 42c2.6-3.4 7.4-3.4 10 0" stroke="#1A1424" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<path d="M60 50.5c-2 0-3.4 1.2-3.4 2.6 0 1.6 1.6 2.8 3.4 2.8s3.4-1.2 3.4-2.8c0-1.4-1.4-2.6-3.4-2.6Z" fill="#F2748C"/>
<path d="M60 56c0 3-2.6 4.4-5 3.4M60 56c0 3 2.6 4.4 5 3.4" stroke="#1A1424" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<g stroke="#B9B3A6" stroke-width="1.6" stroke-linecap="round"><path d="M40 49H27M41 54l-12 3.5M80 49h13M79 54l12 3.5"/></g>
<path d="M40 68c5.5 4.5 14.5 4.5 20 0" stroke="#D9342A" stroke-width="7" fill="none" stroke-linecap="round"/>
<path d="M40 68c5.5 4.5 14.5 4.5 20 0" stroke="#F2503C" stroke-width="4" fill="none" stroke-linecap="round"/>
<circle cx="51" cy="73" r="5.5" fill="#FFD046"/><circle cx="51" cy="73" r="5.5" fill="none" stroke="#D9A017" stroke-width="1.4"/>
<path d="M51 69.5v7M48 73h6" stroke="#B0800F" stroke-width="1.4" stroke-linecap="round"/>
<ellipse cx="62" cy="90" rx="16" ry="10.5" fill="#FFD046"/>
<ellipse cx="62" cy="90" rx="16" ry="10.5" fill="none" stroke="#D9A017" stroke-width="1.6"/>
<ellipse cx="62" cy="90" rx="11" ry="6.5" fill="none" stroke="#C08512" stroke-width="1.2"/>
<text x="62" y="93.5" text-anchor="middle" font-family="'Noto Serif JP',serif" font-size="8" font-weight="700" fill="#8A5A0A">千万</text></svg>`}},

{id:'kabuto',n:'Kabuto',d:'Elmo de samurai',svg:()=>{const a=uid(),b=uid(),c=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#43261F"/><stop offset="1" stop-color="#1C1113"/></linearGradient>
<linearGradient id="${b}" x1=".2" y1="0" x2=".8" y2="1"><stop offset="0" stop-color="#4C5A72"/><stop offset=".5" stop-color="#26303F"/><stop offset="1" stop-color="#141A24"/></linearGradient>
<linearGradient id="${c}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF0B8"/><stop offset=".5" stop-color="#F0C04A"/><stop offset="1" stop-color="#B5810E"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<path d="M22 62c-4 8-5 16-4 24 8-3 15-3 22-1l3-20zM98 62c4 8 5 16 4 24-8-3-15-3-22-1l-3-20z" fill="#2A3342"/>
<g fill="#1B2230"><path d="M20 70c8-2.5 16-2.5 23 0l-.6 5c-7.5-2.4-15-2.4-23 0zM100 70c-8-2.5-16-2.5-23 0l.6 5c7.5-2.4 15-2.4 23 0z"/>
<path d="M19 80c8.5-2.5 17-2.5 24.5 0l-.6 5.5c-8-2.6-16-2.6-24.5 0zM101 80c-8.5-2.5-17-2.5-24.5 0l.6 5.5c8-2.6 16-2.6 24.5 0z"/></g>
<g stroke="#D9A017" stroke-width="1.3" opacity=".7"><path d="M25 72v14M32 71.5v14.5M39 72v14M95 72v14M88 71.5v14.5M81 72v14"/></g>
<path d="M60 18c-22 0-38 15-38 34 0 4 .6 7.4 1.6 10.4 9-4.4 22.4-6.8 36.4-6.8s27.4 2.4 36.4 6.8c1-3 1.6-6.4 1.6-10.4 0-19-16-34-38-34Z" fill="url(#${b})"/>
<g stroke="#5E6B80" stroke-width="1.6" opacity=".55" fill="none"><path d="M60 19v39M44 22c-3 12-4 24-3 35M76 22c3 12 4 24 3 35M31 30c-4 9-5.5 18-5 26M89 30c4 9 5.5 18 5 26"/></g>
<g fill="#8C99AC" opacity=".8"><circle cx="38" cy="34" r="1.8"/><circle cx="60" cy="28" r="1.8"/><circle cx="82" cy="34" r="1.8"/><circle cx="30" cy="48" r="1.8"/><circle cx="90" cy="48" r="1.8"/></g>
<path d="M23 60c-4 0-7 2.5-7 6s3 6 7 6c6 0 10-4 11-9zM97 60c4 0 7 2.5 7 6s-3 6-7 6c-6 0-10-4-11-9z" fill="url(#${c})"/>
<path d="M60 8c-13 4-21 14-24 24 6.5-6 15-9.5 24-9.5S77.5 26 84 32C81 22 73 12 60 8Z" fill="url(#${c})"/>
<path d="M43 24c5-3.5 11-5.2 17-5.2s12 1.7 17 5.2" stroke="#8A5A0A" stroke-width="1.4" fill="none" opacity=".5"/>
<ellipse cx="60" cy="24" rx="6" ry="6.5" fill="#D9342A"/><ellipse cx="60" cy="24" rx="2.8" ry="3.2" fill="#FFE7A0"/>
<path d="M38 66c6-3 14-4.5 22-4.5s16 1.5 22 4.5c-2 16-11 27-22 27s-20-11-22-27Z" fill="#221A20"/>
<path d="M46 72c3.5-2.5 8-2.5 11.5 0M62.5 72c3.5-2.5 8-2.5 11.5 0" stroke="#F0C04A" stroke-width="3" fill="none" stroke-linecap="round"/>
<circle cx="51" cy="72" r="2.6" fill="#FF8A3D"/><circle cx="69" cy="72" r="2.6" fill="#FF8A3D"/>
<path d="M50 84c3 2.5 7 3.8 10 3.8s7-1.3 10-3.8" stroke="#F0C04A" stroke-width="2.4" fill="none" stroke-linecap="round"/>
<g stroke="#F0C04A" stroke-width="1.6" opacity=".65"><path d="M54 88.5c2 1 4 1.5 6 1.5s4-.5 6-1.5"/></g></svg>`}},

{id:'oni',n:'Oni',d:'Máscara de ogro',svg:()=>{const a=uid(),b=uid(),c=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#2E1A2E"/><stop offset="1" stop-color="#120A16"/></linearGradient>
<radialGradient id="${b}" cx=".4" cy=".3"><stop offset="0" stop-color="#FF7A5C"/><stop offset=".55" stop-color="#D8331F"/><stop offset="1" stop-color="#8A1A0C"/></radialGradient>
<linearGradient id="${c}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF4D6"/><stop offset="1" stop-color="#D6BE8C"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<g fill="#FF8A5C" opacity=".13"><circle cx="20" cy="30" r="9"/><circle cx="100" cy="40" r="7"/><circle cx="26" cy="92" r="6"/></g>
<path d="M28 34c-3-9-2-17 2-23 5 5 9 12 10 20z" fill="url(#${c})"/>
<path d="M92 34c3-9 2-17-2-23-5 5-9 12-10 20z" fill="url(#${c})"/>
<path d="M31 25c-1-4-1-8 0-11 2 3 4 7 4 11z" fill="#C9A870"/>
<path d="M89 25c1-4 1-8 0-11-2 3-4 7-4 11z" fill="#C9A870"/>
<path d="M60 22c-19 0-32 11-32 30 0 14 5 28 14 37 6 6 12 10 18 10s12-4 18-10c9-9 14-23 14-37 0-19-13-30-32-30Z" fill="url(#${b})"/>
<path d="M60 22c-19 0-32 11-32 30 0 6 1 12 3 18 8-5 18-8 29-8s21 3 29 8c2-6 3-12 3-18 0-19-13-30-32-30Z" fill="#fff" opacity=".07"/>
<path d="M33 44c8-6 17-6 23 1-7 3-16 3-23-1Z" fill="#2A0E0C"/>
<path d="M87 44c-8-6-17-6-23 1 7 3 16 3 23-1Z" fill="#2A0E0C"/>
<path d="M32 40c7-7 17-8 25-2" stroke="#3A1210" stroke-width="4.4" fill="none" stroke-linecap="round"/>
<path d="M88 40c-7-7-17-8-25-2" stroke="#3A1210" stroke-width="4.4" fill="none" stroke-linecap="round"/>
<ellipse cx="45" cy="52" rx="7" ry="6" fill="#FFE9A8"/><ellipse cx="75" cy="52" rx="7" ry="6" fill="#FFE9A8"/>
<circle cx="45.5" cy="52.5" r="3.2" fill="#1A0A08"/><circle cx="74.5" cy="52.5" r="3.2" fill="#1A0A08"/>
<circle cx="46.8" cy="51" r="1.2" fill="#fff"/><circle cx="75.8" cy="51" r="1.2" fill="#fff"/>
<path d="M60 56c-2.5 4-1 7 0 9 1-2 2.5-5 0-9Z" fill="#8A1A0C"/>
<path d="M38 72c7 12 37 12 44 0-4 9-13 15-22 15s-18-6-22-15Z" fill="#2A0E0C"/>
<path d="M42 74h36c-4 8-11 12-18 12s-14-4-18-12Z" fill="#5A1410"/>
<path d="M46 74l3.5 7 3.5-7zM67 74l3.5 7 3.5-7z" fill="url(#${c})"/>
<path d="M52 84c2.5 2 5 3 8 3s5.5-1 8-3" stroke="#FFF4D6" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".6"/>
<g stroke="#8A1A0C" stroke-width="2.2" opacity=".5" fill="none" stroke-linecap="round"><path d="M36 62c-2 3-3 6-3 9M84 62c2 3 3 6 3 9"/></g></svg>`}},

{id:'koi',n:'Koi',d:'Carpa da perseverança',svg:()=>{const a=uid(),b=uid(),c=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#0F3A4C"/><stop offset="1" stop-color="#06202C"/></linearGradient>
<linearGradient id="${b}" x1=".2" y1="0" x2=".8" y2="1"><stop offset="0" stop-color="#FFFEFA"/><stop offset="1" stop-color="#DCD5C6"/></linearGradient>
<linearGradient id="${c}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF7A3D"/><stop offset="1" stop-color="#D6301A"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<g fill="none" stroke="#7FD4E8" opacity=".14" stroke-width="2"><path d="M6 24c12-7 24-7 36 0s24 7 36 0 24-7 36 0"/><path d="M6 100c12-7 24-7 36 0s24 7 36 0"/></g>
<g fill="#9FE4F5" opacity=".3"><circle cx="26" cy="34" r="2.6"/><circle cx="34" cy="24" r="1.8"/><circle cx="92" cy="72" r="2.2"/><circle cx="100" cy="60" r="1.5"/></g>
<path d="M78 92c8 6 16 8 24 6-6-6-10-13-11-21z" fill="url(#${b})" opacity=".92"/>
<path d="M86 88c5 4 10 5 15 5-4-4-7-8-8-13z" fill="url(#${c})" opacity=".55"/>
<path d="M60 14c-13 0-24 9-29 22-4 11-4 24 2 35 6 12 17 20 28 20 8 0 15-5 19-13 6-11 7-27 3-40C79 24 71 14 60 14Z" fill="url(#${b})"/>
<path d="M60 14c-13 0-24 9-29 22 6-4 14-6 22-5 10 1 18 6 23 14 2 6 2 13 1 20 3-9 3-20 0-29C73 24 68 14 60 14Z" fill="url(#${c})" opacity=".85"/>
<path d="M40 62c8-5 18-6 28-2 8 3 13 8 15 15-6-4-14-6-22-6-8 0-15 2-21 6z" fill="url(#${c})" opacity=".8"/>
<path d="M52 82c7-3 15-3 22 1-3 5-8 8-13 8-4 0-7-3-9-9Z" fill="url(#${c})" opacity=".7"/>
<g stroke="#B9B2A2" stroke-width="1.3" fill="none" opacity=".55">
<path d="M38 34c7 3 14 3 21 0M36 44c9 4 19 4 28 0M35 54c10 4 22 4 32 0M38 66c10 4 21 4 30 0M44 76c8 3 17 3 24 0"/></g>
<path d="M26 44c-8-4-15-3-20 3 7 4 14 5 20 3z" fill="url(#${b})" opacity=".85"/>
<path d="M28 66c-9 2-15 7-17 14 8-2 15-7 19-13z" fill="url(#${b})" opacity=".85"/>
<circle cx="48" cy="30" r="5.5" fill="#FFF8E8"/><circle cx="48" cy="30" r="3.2" fill="#141A22"/>
<circle cx="49.4" cy="28.8" r="1.3" fill="#fff"/>
<path d="M42 40c4-2 9-2 13 0" stroke="#141A22" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".55"/>
<path d="M40 36c-4 2-7 5-8 9M56 36c4 2 6 5 7 9" stroke="#B9B2A2" stroke-width="1.5" fill="none" stroke-linecap="round" opacity=".6"/></svg>`}},

{id:'fuji',n:'Fuji',d:'Monte Fuji ao amanhecer',svg:()=>{const a=uid(),b=uid(),c=uid(),d=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#20365E"/><stop offset=".45" stop-color="#6B4A7A"/><stop offset=".75" stop-color="#E88A5A"/><stop offset="1" stop-color="#FFC97A"/></linearGradient>
<linearGradient id="${b}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#4A6FA8"/><stop offset=".55" stop-color="#2E4A78"/><stop offset="1" stop-color="#1B2F52"/></linearGradient>
<linearGradient id="${c}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#D6E4F5"/></linearGradient>
<radialGradient id="${d}" cx=".5" cy=".5"><stop offset="0" stop-color="#FFF3C0"/><stop offset=".6" stop-color="#FFB84D"/><stop offset="1" stop-color="#FF8A2E" stop-opacity="0"/></radialGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<circle cx="82" cy="40" r="22" fill="url(#${d})" opacity=".75"/>
<circle cx="82" cy="40" r="11" fill="#FFF0B8"/>
<g fill="#fff" opacity=".22"><ellipse cx="26" cy="30" rx="14" ry="4"/><ellipse cx="36" cy="26" rx="9" ry="3"/><ellipse cx="94" cy="62" rx="12" ry="3.5"/></g>
<path d="M60 34 108 104H12z" fill="url(#${b})"/>
<path d="M60 34 88 74c-8-3-17-4-28-4s-20 1-28 4z" fill="url(#${c})"/>
<path d="M60 34 51 47l4 5-5 6 6 5-4 7 8-6 6 8 3-9 7 4-4-8 8 1-8-8 6-3-9-3z" fill="#fff" opacity=".55"/>
<path d="M60 34 108 104H60z" fill="#000" opacity=".12"/>
<g stroke="#1B2F52" stroke-width="1.4" opacity=".35" fill="none">
<path d="M40 88c6 4 14 6 20 6s14-2 20-6M32 98c9 5 19 7 28 7s19-2 28-7"/></g>
<g fill="#E8503A"><path d="M16 84h18l-1.5 3H17.5z"/><rect x="19" y="87" width="2.6" height="9" rx="1"/><rect x="28.5" y="87" width="2.6" height="9" rx="1"/><rect x="18" y="89" width="14" height="2" rx="1"/></g>
<g fill="#FFB7C5" opacity=".9"><circle cx="96" cy="88" r="3"/><circle cx="102" cy="94" r="2.4"/><circle cx="92" cy="97" r="2"/><circle cx="104" cy="83" r="2.2"/></g></svg>`}},

{id:'tanuki',n:'Tanuki',d:'Cão-guaxinim travesso',svg:()=>{const a=uid(),b=uid(),c=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#2C3A24"/><stop offset="1" stop-color="#141C12"/></linearGradient>
<linearGradient id="${b}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#C99A5E"/><stop offset=".6" stop-color="#9A6E3C"/><stop offset="1" stop-color="#6E4A26"/></linearGradient>
<linearGradient id="${c}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F7E8D0"/><stop offset="1" stop-color="#DCC49E"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<g fill="#A8C87A" opacity=".16"><circle cx="22" cy="88" r="7"/><circle cx="98" cy="94" r="5"/><circle cx="16" cy="46" r="4"/></g>
<path d="M92 82c10 2 17 10 16 20-8 2-16-1-20-8-3-5-2-10 4-12Z" fill="url(#${b})"/>
<path d="M94 88c6 1 10 5 10 11-5 1-9-1-11-5-2-3-1-6 1-6Z" fill="url(#${c})" opacity=".6"/>
<ellipse cx="60" cy="82" rx="26" ry="24" fill="url(#${b})"/>
<ellipse cx="60" cy="88" rx="17" ry="16" fill="url(#${c})"/>
<path d="M24 30c-2-10 1-17 7-20 5 6 8 14 8 22z" fill="url(#${b})"/>
<path d="M96 30c2-10-1-17-7-20-5 6-8 14-8 22z" fill="url(#${b})"/>
<path d="M28 27c-1-6 0-10 3-12 3 4 4 9 4 14z" fill="#4A3018"/>
<path d="M92 27c1-6 0-10-3-12-3 4-4 9-4 14z" fill="#4A3018"/>
<ellipse cx="60" cy="46" rx="32" ry="28" fill="url(#${b})"/>
<path d="M32 40c6-8 15-11 24-8-3 9-14 13-24 8Z" fill="#3A2614"/>
<path d="M88 40c-6-8-15-11-24-8 3 9 14 13 24 8Z" fill="#3A2614"/>
<ellipse cx="46" cy="44" rx="6.5" ry="7" fill="#FFF6E4"/><ellipse cx="74" cy="44" rx="6.5" ry="7" fill="#FFF6E4"/>
<circle cx="46.5" cy="45" r="3.6" fill="#1A1208"/><circle cx="73.5" cy="45" r="3.6" fill="#1A1208"/>
<circle cx="47.8" cy="43.6" r="1.3" fill="#fff"/><circle cx="74.8" cy="43.6" r="1.3" fill="#fff"/>
<ellipse cx="60" cy="56" rx="16" ry="12" fill="url(#${c})"/>
<path d="M60 52c-2.8 0-4.8 1.6-4.8 3.4 0 2.2 2.2 3.8 4.8 3.8s4.8-1.6 4.8-3.8c0-1.8-2-3.4-4.8-3.4Z" fill="#2A1C0E"/>
<path d="M60 59.5c0 3.5-3 5-5.6 3.8M60 59.5c0 3.5 3 5 5.6 3.8" stroke="#2A1C0E" stroke-width="2" fill="none" stroke-linecap="round"/>
<g stroke="#C9B08A" stroke-width="1.4" stroke-linecap="round" opacity=".7"><path d="M44 58H32M45 63l-11 4M76 58h12M75 63l11 4"/></g>
<path d="M46 24c4-9 12-13 20-11-2 7-8 12-16 13z" fill="#5C8A2E"/>
<path d="M52 22c4-5 9-7 13-6" stroke="#3E6A1C" stroke-width="1.6" fill="none" stroke-linecap="round"/>
<ellipse cx="60" cy="94" rx="10" ry="8" fill="#E8C86A" opacity=".55"/></svg>`}},

{id:'tengu',n:'Tengu',d:'Máscara do espírito',svg:()=>{const a=uid(),b=uid(),c=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#1E2A3E"/><stop offset="1" stop-color="#0C1220"/></linearGradient>
<radialGradient id="${b}" cx=".4" cy=".28"><stop offset="0" stop-color="#F26A4A"/><stop offset=".55" stop-color="#C42E1C"/><stop offset="1" stop-color="#7A1508"/></radialGradient>
<linearGradient id="${c}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A4152"/><stop offset="1" stop-color="#181E2A"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<g fill="#7FA8D6" opacity=".13"><path d="M8 26c10-4 20-4 30 0M84 20c10-3 20-3 28 1M6 96c12-5 24-5 34 0"/></g>
<path d="M18 42c-6-10-6-20 0-28 8 6 14 15 16 26z" fill="url(#${c})"/>
<path d="M102 42c6-10 6-20 0-28-8 6-14 15-16 26z" fill="url(#${c})"/>
<g fill="#4A5468" opacity=".8"><path d="M22 22c-2 5-2 10 0 15M28 20c-1 6-1 12 1 18M96 22c2 5 2 10 0 15M92 20c1 6 1 12-1 18"/></g>
<path d="M60 20c-18 0-30 11-30 28 0 16 6 32 16 42 5 5 10 8 14 8s9-3 14-8c10-10 16-26 16-42 0-17-12-28-30-28Z" fill="url(#${b})"/>
<path d="M60 20c-18 0-30 11-30 28 0 5 .6 10 1.7 15 8-4 17-6 28-6s20 2 28 6c1.1-5 1.7-10 1.7-15 0-17-12-28-29.4-28Z" fill="#fff" opacity=".06"/>
<path d="M30 36c9-8 20-9 28-2-8 4-19 5-28 2Z" fill="#F0E6D2"/>
<path d="M90 36c-9-8-20-9-28-2 8 4 19 5 28 2Z" fill="#F0E6D2"/>
<path d="M29 32c8-9 20-10 29-3" stroke="#2A0E08" stroke-width="4.6" fill="none" stroke-linecap="round"/>
<path d="M91 32c-8-9-20-10-29-3" stroke="#2A0E08" stroke-width="4.6" fill="none" stroke-linecap="round"/>
<ellipse cx="44" cy="46" rx="7.5" ry="6" fill="#FFF0C8"/><ellipse cx="76" cy="46" rx="7.5" ry="6" fill="#FFF0C8"/>
<circle cx="44.5" cy="46.5" r="3.4" fill="#160806"/><circle cx="75.5" cy="46.5" r="3.4" fill="#160806"/>
<circle cx="45.8" cy="45.2" r="1.2" fill="#fff"/><circle cx="76.8" cy="45.2" r="1.2" fill="#fff"/>
<path d="M60 44c-5 0-8 4-8 9 0 12 2 24 8 33 6-9 8-21 8-33 0-5-3-9-8-9Z" fill="#E8543A"/>
<path d="M60 44c-3 0-5 2-6.5 5 2-1 4-1.5 6.5-1.5s4.5.5 6.5 1.5C65 46 63 44 60 44Z" fill="#FF9070" opacity=".8"/>
<path d="M56 78c1.4 1 2.7 1.5 4 1.5s2.6-.5 4-1.5" stroke="#7A1508" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M44 86c5 4 11 6 16 6s11-2 16-6c-4 7-10 11-16 11s-12-4-16-11Z" fill="#2A0E08"/>
<path d="M47 87h26c-3 5-8 8-13 8s-10-3-13-8Z" fill="#5A1610"/>
<g stroke="#F0E6D2" stroke-width="2" opacity=".55" fill="none" stroke-linecap="round"><path d="M34 58c-2 4-3 8-3 12M86 58c2 4 3 8 3 12"/></g>
<path d="M52 62c-4 1-7 3-9 6M68 62c4 1 7 3 9 6" stroke="#7A1508" stroke-width="2" fill="none" stroke-linecap="round" opacity=".6"/></svg>`}},

{id:'ryu',n:'Ryū',d:'Dragão das nuvens',svg:()=>{const a=uid(),b=uid(),c=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#12293E"/><stop offset="1" stop-color="#060F19"/></linearGradient>
<linearGradient id="${b}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6FE3C4"/><stop offset=".5" stop-color="#22A88A"/><stop offset="1" stop-color="#0E5F52"/></linearGradient>
<linearGradient id="${c}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF0B8"/><stop offset="1" stop-color="#E0A020"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<g fill="#8FE6FF" opacity=".12"><ellipse cx="26" cy="26" rx="17" ry="6"/><ellipse cx="94" cy="40" rx="13" ry="5"/><ellipse cx="30" cy="98" rx="15" ry="5"/></g>
<circle cx="86" cy="30" r="13" fill="url(#${c})" opacity=".9"/>
<circle cx="86" cy="30" r="19" fill="#FFD874" opacity=".16"/>
<path d="M14 86c10 6 20 4 26-3s4-16 12-20 18 2 24-4 5-15-1-20" fill="none" stroke="url(#${b})" stroke-width="13" stroke-linecap="round"/>
<path d="M14 86c10 6 20 4 26-3s4-16 12-20 18 2 24-4 5-15-1-20" fill="none" stroke="#9FF0DC" stroke-width="4" stroke-linecap="round" opacity=".45"/>
<g fill="#0E5F52" opacity=".5"><circle cx="27" cy="84" r="2.4"/><circle cx="41" cy="76" r="2.4"/><circle cx="50" cy="63" r="2.4"/><circle cx="64" cy="58" r="2.4"/><circle cx="75" cy="50" r="2.4"/></g>
<path d="M46 60c-6-4-13-4-18 1 6 3 13 3 18-1zM64 44c-5-6-12-8-18-5 5 5 12 7 18 5z" fill="url(#${b})" opacity=".85"/>
<path d="M72 22c8-4 17-2 22 5-4 10-13 15-23 13-7-1-11-7-9-13 1-3 5-4 10-5Z" fill="url(#${b})"/>
<path d="M74 26c6-3 12-2 15 3-3 6-9 9-15 8-4-1-6-4-5-7 1-2 3-3 5-4Z" fill="#9FF0DC" opacity=".35"/>
<path d="M70 16c-2-6 0-11 4-13 2 5 2 11 0 15zM84 13c1-6 5-9 10-9-1 5-4 10-8 12z" fill="url(#${c})"/>
<circle cx="80" cy="30" r="4.4" fill="#FFF3D0"/><circle cx="80.5" cy="30.5" r="2.4" fill="#101820"/>
<circle cx="81.4" cy="29.4" r="1" fill="#fff"/>
<path d="M92 36c4 1 7 3 9 6-4 1-8 0-11-2z" fill="url(#${c})"/>
<path d="M68 34c-5 1-9 4-11 8 5 0 10-2 13-5z" fill="#9FF0DC" opacity=".5"/>
<g stroke="url(#${c})" stroke-width="2" stroke-linecap="round" fill="none" opacity=".85">
<path d="M66 30c-5-1-9 1-12 4M67 39c-4 2-7 5-8 9"/></g></svg>`}},

{id:'usagi',n:'Tsuki Usagi',d:'Coelho da lua',svg:()=>{const a=uid(),b=uid(),c=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#232A52"/><stop offset="1" stop-color="#0D1128"/></linearGradient>
<radialGradient id="${b}" cx=".38" cy=".32"><stop offset="0" stop-color="#FFFDF4"/><stop offset=".65" stop-color="#F2ECDC"/><stop offset="1" stop-color="#D2C9B4"/></radialGradient>
<radialGradient id="${c}" cx=".4" cy=".35"><stop offset="0" stop-color="#FFF8DC"/><stop offset="1" stop-color="#F0DFA8"/></radialGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<circle cx="60" cy="52" r="40" fill="url(#${c})" opacity=".22"/>
<circle cx="60" cy="52" r="30" fill="url(#${c})" opacity=".14"/>
<g fill="#FFF6D0" opacity=".55"><circle cx="20" cy="24" r="1.7"/><circle cx="100" cy="30" r="1.4"/><circle cx="28" cy="88" r="1.5"/><circle cx="96" cy="82" r="1.2"/><circle cx="14" cy="56" r="1"/><circle cx="106" cy="60" r="1.3"/></g>
<ellipse cx="60" cy="104" rx="30" ry="6" fill="#000" opacity=".22"/>
<path d="M42 60c-4-14-5-27-2-34 5 2 10 14 12 27z" fill="url(#${b})"/>
<path d="M74 60c4-14 5-27 2-34-5 2-10 14-12 27z" fill="url(#${b})"/>
<path d="M43 54c-3-10-3-19-1-24 3 3 6 12 7 21z" fill="#FFC7D8" opacity=".8"/>
<path d="M73 54c3-10 3-19 1-24-3 3-6 12-7 21z" fill="#FFC7D8" opacity=".8"/>
<ellipse cx="58" cy="82" rx="24" ry="21" fill="url(#${b})"/>
<ellipse cx="58" cy="86" rx="16" ry="14" fill="#FFFDF6" opacity=".7"/>
<ellipse cx="58" cy="62" rx="22" ry="19" fill="url(#${b})"/>
<path d="M46 58c2.4-3 6.6-3 9 0" stroke="#2A2438" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M62 58c2.4-3 6.6-3 9 0" stroke="#2A2438" stroke-width="3" fill="none" stroke-linecap="round"/>
<ellipse cx="58" cy="67" rx="3" ry="2.4" fill="#F2748C"/>
<path d="M58 69.5c0 2.6-2.2 3.8-4.2 3M58 69.5c0 2.6 2.2 3.8 4.2 3" stroke="#2A2438" stroke-width="2" fill="none" stroke-linecap="round"/>
<ellipse cx="44" cy="65" rx="4" ry="2.6" fill="#FFB7C5" opacity=".65"/>
<ellipse cx="72" cy="65" rx="4" ry="2.6" fill="#FFB7C5" opacity=".65"/>
<g stroke="#C9C0AC" stroke-width="1.4" stroke-linecap="round" opacity=".7"><path d="M40 64H27M41 69l-12 3M76 64h13M75 69l12 3"/></g>
<rect x="80" y="42" width="7" height="34" rx="3.5" transform="rotate(24 83 59)" fill="#A87246"/>
<ellipse cx="90" cy="40" rx="9" ry="7" transform="rotate(24 90 40)" fill="#8A5A34"/>
<path d="M32 92c0-7 7-12 17-12h20c10 0 17 5 17 12z" fill="#C9A76E"/>
<ellipse cx="59" cy="90" rx="15" ry="7" fill="#FFFDF6"/>
<ellipse cx="59" cy="88" rx="10" ry="4" fill="#F0E8D4"/></svg>`}},

{id:'hannya',n:'Hannya',d:'Máscara de nō',svg:()=>{const a=uid(),b=uid(),c=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#2B1430"/><stop offset="1" stop-color="#100818"/></linearGradient>
<radialGradient id="${b}" cx=".42" cy=".28"><stop offset="0" stop-color="#F7E6C8"/><stop offset=".6" stop-color="#DFC095"/><stop offset="1" stop-color="#A87C4E"/></radialGradient>
<linearGradient id="${c}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF4DC"/><stop offset="1" stop-color="#C9A870"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<g fill="#C77AE0" opacity=".13"><circle cx="22" cy="34" r="10"/><circle cx="98" cy="48" r="8"/><circle cx="30" cy="94" r="7"/></g>
<path d="M30 30c-4-10-3-19 2-24 5 6 8 15 8 24z" fill="url(#${c})"/>
<path d="M90 30c4-10 3-19-2-24-5 6-8 15-8 24z" fill="url(#${c})"/>
<path d="M33 26c-2-6-2-11 0-14 2 4 4 9 4 14z" fill="#9C7440"/>
<path d="M87 26c2-6 2-11 0-14-2 4-4 9-4 14z" fill="#9C7440"/>
<path d="M60 20c-19 0-31 12-31 30 0 15 5 30 14 40 6 6 12 10 17 10s11-4 17-10c9-10 14-25 14-40 0-18-12-30-31-30Z" fill="url(#${b})"/>
<path d="M60 20c-19 0-31 12-31 30 0 4 .4 8 1.1 12 8-4 18-6 29.9-6s21.9 2 29.9 6c.7-4 1.1-8 1.1-12 0-18-12-30-31-30Z" fill="#fff" opacity=".14"/>
<path d="M30 40c9-9 21-10 30-3-9 5-21 6-30 3Z" fill="#3A1A28"/>
<path d="M90 40c-9-9-21-10-30-3 9 5 21 6 30 3Z" fill="#3A1A28"/>
<path d="M29 35c9-10 22-11 31-4" stroke="#3A1A28" stroke-width="4.8" fill="none" stroke-linecap="round"/>
<path d="M91 35c-9-10-22-11-31-4" stroke="#3A1A28" stroke-width="4.8" fill="none" stroke-linecap="round"/>
<path d="M38 50c5-4 12-4 16 1-5 4-13 4-16-1Z" fill="#FFE9A8"/>
<path d="M82 50c-5-4-12-4-16 1 5 4 13 4 16-1Z" fill="#FFE9A8"/>
<circle cx="45" cy="50.5" r="4" fill="#C4181E"/><circle cx="75" cy="50.5" r="4" fill="#C4181E"/>
<circle cx="45.5" cy="50" r="2" fill="#1A0810"/><circle cx="74.5" cy="50" r="2" fill="#1A0810"/>
<path d="M60 52c-2.5 4-2 8 0 11 2-3 2.5-7 0-11Z" fill="#A87C4E"/>
<path d="M38 72c7 9 37 9 44 0-2 12-11 21-22 21s-20-9-22-21Z" fill="#3A1018"/>
<path d="M42 74h36c-2 5-5 9-9 11H51c-4-2-7-6-9-11Z" fill="#78141C"/>
<path d="M45 74l4 8 4-8zM67 74l4 8 4-8z" fill="url(#${c})"/>
<path d="M50 86c3 2 6 3 10 3s7-1 10-3" stroke="#FFF4DC" stroke-width="2" fill="none" stroke-linecap="round" opacity=".65"/>
<g stroke="#A8482E" stroke-width="1.8" opacity=".5" fill="none" stroke-linecap="round">
<path d="M35 58c-2 4-3 8-3 12M85 58c2 4 3 8 3 12M60 66v6"/></g></svg>`}},

{id:'shishi',n:'Shishi',d:'Leão-guardião',svg:()=>{const a=uid(),b=uid(),c=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#33251A"/><stop offset="1" stop-color="#150F0A"/></linearGradient>
<linearGradient id="${b}" x1=".25" y1="0" x2=".75" y2="1"><stop offset="0" stop-color="#7E8A96"/><stop offset=".5" stop-color="#4E5A66"/><stop offset="1" stop-color="#2A343E"/></linearGradient>
<linearGradient id="${c}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A8B4C0"/><stop offset="1" stop-color="#5E6A76"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<g fill="#E8A860" opacity=".1"><circle cx="24" cy="30" r="12"/><circle cx="96" cy="86" r="10"/></g>
<g fill="url(#${c})">
${[0,36,72,108,144,180,216,252,288,324].map(r=>`<ellipse cx="60" cy="18" rx="9" ry="13" transform="rotate(${r} 60 58)"/>`).join('')}</g>
<g fill="none" stroke="#2A343E" stroke-width="1.4" opacity=".6">
${[0,36,72,108,144,180,216,252,288,324].map(r=>`<path d="M60 12v10" transform="rotate(${r} 60 58)"/>`).join('')}</g>
<circle cx="60" cy="58" r="30" fill="url(#${b})"/>
<circle cx="60" cy="58" r="30" fill="none" stroke="#8E9AA6" stroke-width="1.6" opacity=".5"/>
<path d="M38 46c7-6 15-6 21 0-7 4-16 4-21 0Z" fill="#141A22"/>
<path d="M82 46c-7-6-15-6-21 0 7 4 16 4 21 0Z" fill="#141A22"/>
<path d="M37 41c7-8 17-9 24-3" stroke="#1C242E" stroke-width="4.4" fill="none" stroke-linecap="round"/>
<path d="M83 41c-7-8-17-9-24-3" stroke="#1C242E" stroke-width="4.4" fill="none" stroke-linecap="round"/>
<circle cx="48" cy="52" r="5.4" fill="#FFD46B"/><circle cx="72" cy="52" r="5.4" fill="#FFD46B"/>
<circle cx="48.5" cy="52.5" r="2.8" fill="#12181E"/><circle cx="71.5" cy="52.5" r="2.8" fill="#12181E"/>
<circle cx="49.6" cy="51.2" r="1.1" fill="#fff"/><circle cx="72.6" cy="51.2" r="1.1" fill="#fff"/>
<path d="M60 60c-4 0-7 2-7 4s3 3.5 7 3.5 7-1.5 7-3.5-3-4-7-4Z" fill="#12181E"/>
<path d="M42 74c7 8 29 8 36 0-3 10-11 16-18 16s-15-6-18-16Z" fill="#141A22"/>
<path d="M46 76h28c-2 4-5 7-8 8H54c-3-1-6-4-8-8Z" fill="#5E2A24"/>
<path d="M49 76l3.5 6 3.5-6zM64 76l3.5 6 3.5-6z" fill="#F0F4F8"/>
<g stroke="#8E9AA6" stroke-width="1.6" stroke-linecap="round" opacity=".7">
<path d="M42 66H30M43 71l-11 4M78 66h12M77 71l11 4"/></g>
<circle cx="88" cy="92" r="13" fill="url(#${c})" opacity=".9"/>
<circle cx="88" cy="92" r="13" fill="none" stroke="#2A343E" stroke-width="1.6" opacity=".6"/>
<path d="M88 79v26M75 92h26" stroke="#2A343E" stroke-width="1.4" opacity=".45"/></svg>`}},

{id:'chochin',n:'Chōchin',d:'Lanterna de papel',svg:()=>{const a=uid(),b=uid(),c=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#1B1220"/><stop offset="1" stop-color="#0A0710"/></linearGradient>
<radialGradient id="${b}" cx=".4" cy=".35"><stop offset="0" stop-color="#FFF6D8"/><stop offset=".45" stop-color="#FF8A4A"/><stop offset="1" stop-color="#C42E1C"/></radialGradient>
<radialGradient id="${c}" cx=".5" cy=".5"><stop offset="0" stop-color="#FFB84D" stop-opacity=".55"/><stop offset="1" stop-color="#FF8A2E" stop-opacity="0"/></radialGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<circle cx="60" cy="58" r="52" fill="url(#${c})"/>
<g fill="#FFC86B" opacity=".25"><circle cx="22" cy="26" r="1.8"/><circle cx="98" cy="34" r="1.4"/><circle cx="26" cy="92" r="1.5"/><circle cx="96" cy="88" r="1.2"/></g>
<path d="M60 2v10" stroke="#4A3A28" stroke-width="3" stroke-linecap="round"/>
<rect x="42" y="11" width="36" height="8" rx="2.5" fill="#2E2419"/>
<rect x="42" y="11" width="36" height="3" rx="1.5" fill="#4A3A28"/>
<ellipse cx="60" cy="58" rx="34" ry="41" fill="url(#${b})"/>
<g fill="none" stroke="#8E1A0C" stroke-width="1.5" opacity=".55">
${[-34,-26,-16,-5,6,17,27,36].map(y=>{const w=Math.sqrt(Math.max(0,1-(y/41)**2))*34;
  return `<path d="M${60-w} ${58+y}h${w*2}"/>`;}).join('')}</g>
<g fill="none" stroke="#8E1A0C" stroke-width="1.8" opacity=".4">
<path d="M40 26c-6 18-6 46 0 64M80 26c6 18 6 46 0 64M60 17v82"/></g>
<ellipse cx="48" cy="42" rx="9" ry="14" fill="#FFF0C0" opacity=".2"/>
<rect x="46" y="14" width="28" height="7" rx="2" fill="#2E2419"/>
<rect x="46" y="96" width="28" height="8" rx="2.5" fill="#2E2419"/>
<rect x="46" y="96" width="28" height="3" rx="1.5" fill="#4A3A28"/>
<text x="60" y="52" text-anchor="middle" font-family="'Noto Serif JP',serif" font-size="24" font-weight="700" fill="#2A0A06">祭</text>
<text x="60" y="76" text-anchor="middle" font-family="'Noto Serif JP',serif" font-size="17" font-weight="700" fill="#2A0A06" opacity=".85">道</text>
<g stroke="#C4341C" stroke-width="2.6" stroke-linecap="round">
<path d="M56 104v10M60 104v13M64 104v10"/></g>
<circle cx="60" cy="118" r="2.4" fill="#E8503A"/></svg>`}},

{id:'tsuru',n:'Tsuru',d:'Tsuru de origami',svg:()=>{const a=uid(),b=uid(),c=uid(),d=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#123A4C"/><stop offset="1" stop-color="#08202C"/></linearGradient>
<linearGradient id="${b}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFDF7"/><stop offset="1" stop-color="#E4DACA"/></linearGradient>
<linearGradient id="${c}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5B8DEF"/><stop offset="1" stop-color="#2A4FA8"/></linearGradient>
<linearGradient id="${d}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#D9342A"/><stop offset="1" stop-color="#9C1D0C"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<g stroke="#7FD4E8" opacity=".16" stroke-width="1.4" fill="none"><path d="M8 90c10-6 20-6 30 0s20 6 30 0 20-6 30 0"/><path d="M8 100c10-6 20-6 30 0s20 6 30 0 20-6 30 0"/></g>
<path d="M60 62 18 46l30-6z" fill="url(#${c})"/>
<path d="M60 62 18 46l30-6z" fill="#000" opacity=".18"/>
<path d="M60 62 102 46 72 40z" fill="url(#${c})"/>
<path d="M60 62 20 88l14-34z" fill="url(#${b})"/>
<path d="M60 62 100 88 86 54z" fill="url(#${b})"/>
<path d="M60 62 100 88 86 54z" fill="#000" opacity=".1"/>
<path d="M60 62 34 54l26-32z" fill="url(#${b})"/>
<path d="M60 62 86 54 60 22z" fill="url(#${c})"/>
<path d="M60 22 46 18 20 8l14 46z" fill="url(#${b})"/>
<path d="M60 22 20 8l14 46z" fill="#000" opacity=".07"/>
<path d="M60 22 100 8 86 54z" fill="url(#${c})"/>
<path d="M60 22v40" stroke="#0B2438" stroke-opacity=".3" stroke-width="1.6"/>
<path d="M34 54 60 62l26-8" stroke="#0B2438" stroke-opacity=".22" stroke-width="1.6" fill="none"/>
<path d="M60 62c-2 8-1 16 2 22" stroke="#0B2438" stroke-opacity=".2" stroke-width="1.4" fill="none"/>
<path d="M86 54 96 40l6 6-10 12z" fill="url(#${b})"/>
<path d="M96 40c4-5 9-7 13-5-2 4-5 7-9 9z" fill="url(#${b})"/>
<path d="M109 35c3-.5 6 .5 8 2.5-3 1.5-6 2-9 1.5z" fill="url(#${d})"/>
<circle cx="105" cy="38.5" r="1.8" fill="#0B1A24"/>
<path d="M100 44c1-1.5 2.5-2.5 4-3" stroke="#D9342A" stroke-width="2" stroke-linecap="round" fill="none"/>
<path d="M20 8 8 18l12 8z" fill="url(#${d})" opacity=".9"/></svg>`}},

{id:'penguin',n:'Pinguim',d:'Amigo do gelo',svg:()=>{const a=uid(),b=uid(),c=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7EA6FF"/><stop offset="1" stop-color="#2D54C2"/></linearGradient>
<linearGradient id="${b}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2B2D42"/><stop offset="1" stop-color="#141522"/></linearGradient>
<linearGradient id="${c}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD166"/><stop offset="1" stop-color="#F7A01B"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<ellipse cx="60" cy="106" rx="26" ry="6" fill="#000" opacity=".2"/>
<path d="M60 22c-19 0-31 14-31 34 0 20 12 47 31 47s31-27 31-47c0-20-12-34-31-34Z" fill="url(#${b})"/>
<path d="M60 41c-12.5 0-20.5 9-20.5 22 0 13 8 36 20.5 36S80.5 76 80.5 63c0-13-8-22-20.5-22Z" fill="#FFFDF5"/>
<circle cx="48" cy="46" r="3.4" fill="#141522"/><circle cx="72" cy="46" r="3.4" fill="#141522"/>
<circle cx="49" cy="44.5" r="1.1" fill="#fff"/>
<circle cx="39" cy="53" r="4.2" fill="#FFA5A5" opacity=".7"/><circle cx="81" cy="53" r="4.2" fill="#FFA5A5" opacity=".7"/>
<path d="M54 50h12l-6 7.5z" fill="url(#${c})"/>
<path d="M33 93c-3 4-8 5-11 3a9 9 0 0 1-2-12l13 9z" fill="url(#${c})"/>
<path d="M87 93c3 4 8 5 11 3 4-2 5-8 2-12l-13 9z" fill="url(#${c})"/>
<path d="M32 63c-3 10-6 19-3 23 2-2 5-11 3-23z" fill="url(#${b})"/>
<path d="M88 63c3 10 6 19 3 23-2-2-5-11-3-23z" fill="url(#${b})"/>
<path d="M42 80c9 3 13-3 18-3s9 6 18 3c-5 6-13 8-18 8s-13-2-18-8Z" fill="#EF476F"/></svg>`}},

{id:'panda',n:'Panda',d:'Bebê urso',svg:()=>{const a=uid(),b=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#A8E6CF"/><stop offset="1" stop-color="#3D8B7A"/></linearGradient>
<linearGradient id="${b}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2F3E46"/><stop offset="1" stop-color="#141F24"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<ellipse cx="60" cy="106" rx="28" ry="6" fill="#000" opacity=".18"/>
<circle cx="34" cy="36" r="13" fill="url(#${b})"/><circle cx="86" cy="36" r="13" fill="url(#${b})"/>
<circle cx="34" cy="36" r="8" fill="#141F24" opacity=".5"/>
<ellipse cx="60" cy="74" rx="29" ry="25" fill="#FFFDF7"/>
<ellipse cx="60" cy="74" rx="29" ry="25" fill="none" stroke="url(#${b})" stroke-width="1.8" opacity=".2"/>
<ellipse cx="60" cy="48" rx="26" ry="22" fill="#FFFDF7"/>
<path d="M38 46c1 5 5 10 11 9 5-1 7-7 6-12s-5-10-11-9c-5 1-7 7-6 12Z" fill="url(#${b})"/>
<path d="M82 46c-1 5-5 10-11 9-5-1-7-7-6-12s5-10 11-9c5 1 7 7 6 12Z" fill="url(#${b})"/>
<circle cx="46.5" cy="43.5" r="2.8" fill="#FFFDF7"/><circle cx="73.5" cy="43.5" r="2.8" fill="#FFFDF7"/>
<circle cx="45.5" cy="44.2" r="1.1" fill="#fff"/>
<circle cx="60" cy="51.5" r="3.2" fill="url(#${b})"/>
<path d="M60 53c0 1.6-1.5 2.5-3 2M60 53c0 1.6 1.5 2.5 3 2" stroke="url(#${b})" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<path d="M38 82h44c-2 11-12 18-22 18s-20-7-22-18Z" fill="url(#${b})"/>
<g stroke="#3FB55F" stroke-width="2.6" stroke-linecap="round" fill="none">
<path d="M48 94c3-6 8-8 12-4M60 90c1-3 4-5 7-3"/></g></svg>`}},

{id:'shiba',n:'Shiba',d:'Cãozinho feliz',svg:()=>{const a=uid(),b=uid(),c=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFD166"/><stop offset="1" stop-color="#F28B2B"/></linearGradient>
<linearGradient id="${b}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFDF7"/><stop offset="1" stop-color="#F5EFE0"/></linearGradient>
<linearGradient id="${c}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E88C30"/><stop offset="1" stop-color="#C25A0E"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<ellipse cx="60" cy="105" rx="30" ry="6" fill="#000" opacity=".22"/>
<path d="M28 32c-3-9 1-17 6-21 4 6 7 13 6 21z" fill="url(#${c})"/><path d="M92 32c3-9-1-17-6-21-4 6-7 13-6 21z" fill="url(#${c})"/>
<path d="M31 29c-1-6 1-11 4-13 2 4 4 9 3 13z" fill="#FFFDF7"/>
<path d="M89 29c1-6-1-11-4-13-2 4-4 9-3 13z" fill="#FFFDF7"/>
<ellipse cx="60" cy="80" rx="27" ry="24" fill="url(#${c})"/>
<ellipse cx="60" cy="84" rx="19" ry="17" fill="url(#${b})"/>
<ellipse cx="60" cy="51" rx="26" ry="23" fill="url(#${c})"/>
<ellipse cx="44" cy="46" rx="9" ry="7" fill="url(#${b})"/><ellipse cx="76" cy="46" rx="9" ry="7" fill="url(#${b})"/>
<circle cx="45" cy="45" r="3.2" fill="#2E1C0A"/><circle cx="75" cy="45" r="3.2" fill="#2E1C0A"/>
<ellipse cx="60" cy="54" rx="12" ry="10" fill="url(#${b})"/>
<ellipse cx="60" cy="51.5" r="2.8" fill="#2E1C0A"/>
<path d="M60 54.5c0 2-2 3-3.8 2.2M60 54.5c0 2 2 3 3.8 2.2" stroke="#2E1C0A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<ellipse cx="38" cy="54" rx="4.4" ry="2.8" fill="#FFA5A5" opacity=".7"/><ellipse cx="82" cy="54" rx="4.4" ry="2.8" fill="#FFA5A5" opacity=".7"/>
<path d="M42 80c6 5 14 5 20 0" stroke="#E26A2D" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`}},

{id:'axolotl',n:'Axolote',d:'Sorriso rosa',svg:()=>{const a=uid(),b=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4FA8E0"/><stop offset="1" stop-color="#1B6FA8"/></linearGradient>
<linearGradient id="${b}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFCCD5"/><stop offset="1" stop-color="#FFA6C9"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<g fill="#FFF" opacity=".16"><circle cx="20" cy="30" r="2.4"/><circle cx="94" cy="24" r="1.8"/><circle cx="106" cy="80" r="2"/><circle cx="16" cy="94" r="1.5"/></g>
<path d="M28 50c-6-10-8-20-4-26 5 4 8 11 8 18z" fill="#FF5C8A"/><path d="M24 62c-8-7-11-16-7-23 6 4 9 10 9 16z" fill="#FF5C8A"/>
<path d="M92 50c6-10 8-20 4-26-5 4-8 11-8 18z" fill="#FF5C8A"/><path d="M96 62c8-7 11-16 7-23-6 4-9 10-9 16z" fill="#FF5C8A"/>
<ellipse cx="60" cy="82" rx="26" ry="23" fill="url(#${b})"/>
<ellipse cx="60" cy="52" rx="29" ry="25" fill="url(#${b})"/>
<circle cx="44.5" cy="48" r="3.2" fill="#1B1220"/><circle cx="75.5" cy="48" r="3.2" fill="#1B1220"/>
<circle cx="45.6" cy="46.8" r="1" fill="#fff"/>
<path d="M52 56c2.5 2.5 5.5 3.5 8 3s5.5-.5 8-3" stroke="#FF5C8A" stroke-width="2.6" fill="none" stroke-linecap="round"/>
<ellipse cx="37" cy="53" rx="4" ry="2.4" fill="#FF7FA0" opacity=".65"/><ellipse cx="83" cy="53" rx="4" ry="2.4" fill="#FF7FA0" opacity=".65"/></svg>`}},

{id:'coruja',n:'Corujinha',d:'Sábio da noite',svg:()=>{const a=uid(),b=uid(),c=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1B1B3A"/><stop offset="1" stop-color="#08081A"/></linearGradient>
<linearGradient id="${b}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6F5843"/><stop offset="1" stop-color="#3A2C1D"/></linearGradient>
<linearGradient id="${c}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF3C0"/><stop offset="1" stop-color="#F2B84B"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<g fill="#FFF" opacity=".22"><circle cx="20" cy="30" r="1.3"/><circle cx="100" cy="24" r="1.1"/><circle cx="28" cy="88" r="1.4"/><circle cx="94" cy="80" r="1.2"/></g>
<ellipse cx="60" cy="104" rx="26" ry="6" fill="#000" opacity=".25"/>
<ellipse cx="60" cy="82" rx="25" ry="23" fill="url(#${b})"/>
<ellipse cx="60" cy="84" rx="17" ry="16" fill="#FFFDF6" opacity=".22"/>
<ellipse cx="60" cy="50" rx="23" ry="21" fill="url(#${b})"/>
<ellipse cx="46" cy="46" rx="9" ry="9" fill="#FFFDF6"/><ellipse cx="74" cy="46" rx="9" ry="9" fill="#FFFDF6"/>
<circle cx="46" cy="46" r="6.2" fill="url(#${c})"/><circle cx="74" cy="46" r="6.2" fill="url(#${c})"/>
<circle cx="46" cy="46" r="3.2" fill="#141A22"/><circle cx="74" cy="46" r="3.2" fill="#141A22"/>
<path d="M56 42c0-3-5-6-9-4M64 42c0-3 5-6 9-4" stroke="#FFFDF6" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<path d="M57 52.5h6l-3 5.5z" fill="#E88C30"/>
<path d="M36 68c-2 8-3 15-1 20 2-2 4-10 3-20z" fill="url(#${b})"/>
<path d="M84 68c2 8 3 15 1 20-2-2-4-10-3-20z" fill="url(#${b})"/>
<g stroke="#E88C30" stroke-width="2.4" stroke-linecap="round" fill="none">
<path d="M47 101c-1 3-3 4-5 3M73 101c1 3 3 4 5 3"/></g></svg>`}},

{id:'secretcat',n:'Gato Secreto',d:'Desbloqueado — código 1357',svg:()=>{const a=uid(),b=uid(),c=uid(),d=uid(),e=uid(),f=uid(),g=uid();return `<svg viewBox="0 0 120 120">
<defs>
<radialGradient id="${a}" cx=".35" cy=".3" r="1"><stop offset="0" stop-color="#E8EDDF"/><stop offset=".55" stop-color="#B8C7B5"/><stop offset="1" stop-color="#7A8E80"/></radialGradient>
<radialGradient id="${b}" cx=".4" cy=".35" r=".9"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".55" stop-color="#F7F3ED"/><stop offset=".9" stop-color="#D8CFBE"/><stop offset="1" stop-color="#B8AE9C"/></radialGradient>
<radialGradient id="${c}" cx=".35" cy=".35" r=".85"><stop offset="0" stop-color="#C8D2A8"/><stop offset=".35" stop-color="#98AA82"/><stop offset=".8" stop-color="#5E7058"/><stop offset="1" stop-color="#3A4A38"/></radialGradient>
<radialGradient id="${d}" cx=".3" cy=".25" r=".85"><stop offset="0" stop-color="#3E353C"/><stop offset=".5" stop-color="#1E181F"/><stop offset="1" stop-color="#050308"/></radialGradient>
<radialGradient id="${e}" cx=".4" cy=".4" r=".7"><stop offset="0" stop-color="#FFE2E7"/><stop offset="1" stop-color="#F0A5B3"/></radialGradient>
<radialGradient id="${f}" cx=".5" cy=".5" r=".55"><stop offset="0" stop-color="#000" stop-opacity=".22"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#D8CFBE"/></linearGradient>
</defs>
<!-- ═══════════ FUNDO circular verde-cinza ═══════════ -->
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<circle cx="60" cy="60" r="60" fill="url(#${f})"/>
<!-- brilho de luz do lado superior esquerdo -->
<ellipse cx="35" cy="30" rx="22" ry="16" fill="#FFFFFF" opacity=".14"/>
<!-- ═══════════ ORELHAS (desenhadas ANTES da cabeça pra ficarem atrás) ═══════════ -->
<!-- Formato triangular arredondado nas pontas, base ampla, ligeiramente inclinadas -->
<!-- orelha ESQUERDA -->
<path d="M 26 42 Q 22 22, 30 12 Q 42 20, 48 40 Z" fill="url(#${b})"/>
<!-- orelha DIREITA (espelhada) -->
<path d="M 94 42 Q 98 22, 90 12 Q 78 20, 72 40 Z" fill="url(#${b})"/>
<!-- Interior rosado da orelha ESQUERDA -->
<path d="M 30 40 Q 27 24, 32 17 Q 40 22, 44 38 Z" fill="url(#${e})"/>
<!-- Interior rosado da orelha DIREITA -->
<path d="M 90 40 Q 93 24, 88 17 Q 80 22, 76 38 Z" fill="url(#${e})"/>
<!-- Brilho interno das orelhas -->
<path d="M 32 32 Q 30 22, 34 18 Q 38 22, 40 32 Z" fill="#FFFAFA" opacity=".55"/>
<path d="M 88 32 Q 90 22, 86 18 Q 82 22, 80 32 Z" fill="#FFFAFA" opacity=".55"/>
<!-- Tufos de pelo branco saindo da base da orelha -->
<g stroke="#FFFFFF" stroke-width=".8" opacity=".9" stroke-linecap="round" fill="none">
<path d="M28 35 Q 26 33, 25 30"/><path d="M31 38 Q 29 37, 27 36"/>
<path d="M92 35 Q 94 33, 95 30"/><path d="M89 38 Q 91 37, 93 36"/></g>

<!-- ═══════════ CABEÇA — formato clássico redondo/oval ═══════════ -->
<!-- Cabeça mais redonda no topo, afinando levemente pro queixo -->
<path d="M 60 26
  C 42 26, 28 40, 28 58
  C 28 72, 32 82, 40 90
  C 46 96, 52 100, 60 100
  C 68 100, 74 96, 80 90
  C 88 82, 92 72, 92 58
  C 92 40, 78 26, 60 26 Z" fill="url(#${b})"/>

<!-- ═══════════ MANCHA PRETA — capuz no topo, EXATAMENTE entre as orelhas ═══════════ -->
<!-- Formato orgânico: cobre da base de uma orelha à outra, cobrindo o topo do crânio,
     descendo até um pouco acima dos olhos, com bordas suaves e ligeiramente irregulares -->
<path d="M 35 40
  C 32 32, 33 24, 38 20
  Q 44 26, 48 30
  Q 54 26, 60 26
  Q 66 26, 72 30
  Q 76 26, 82 20
  C 87 24, 88 32, 85 40
  C 82 46, 75 49, 68 50
  C 64 50, 62 49, 60 49
  C 58 49, 56 50, 52 50
  C 45 49, 38 46, 35 40 Z" fill="url(#${d})"/>

<!-- Brilho suave no topo da mancha (dá volume ao capuz) -->
<path d="M 42 26 Q 50 20, 60 20 Q 70 20, 78 26" stroke="#5F5560" stroke-width="1.1" fill="none" opacity=".55" stroke-linecap="round"/>
<path d="M 46 30 Q 52 26, 60 26 Q 68 26, 74 30" stroke="#7A6E7A" stroke-width=".5" fill="none" opacity=".4" stroke-linecap="round"/>

<!-- Alguns pelinhos irregulares na borda inferior da mancha, dando naturalidade -->
<g stroke="#141018" stroke-width=".7" stroke-linecap="round" opacity=".7" fill="none">
<path d="M38 45l-1 3"/><path d="M43 48l0 3"/><path d="M48 49l0 3"/><path d="M55 50l0 3"/>
<path d="M60 50l0 3"/><path d="M65 50l0 3"/><path d="M72 49l0 3"/><path d="M77 48l0 3"/><path d="M82 45l1 3"/></g>

<!-- Textura sutil de pelo curto dentro da mancha -->
<g stroke="#4A424E" stroke-width=".4" opacity=".55" fill="none" stroke-linecap="round">
<path d="M45 30 Q 45 34, 44 38"/><path d="M52 27 Q 52 33, 51 40"/><path d="M60 26 Q 60 34, 60 42"/>
<path d="M68 27 Q 68 33, 69 40"/><path d="M75 30 Q 75 34, 76 38"/></g>

<!-- ═══════════ OLHOS AMENDOADOS ═══════════ -->
<!-- Formato de amêndoa: base fina, meio alto, cantos externos ligeiramente elevados -->
<!-- Branco do olho ESQUERDO (formato amendoado) -->
<path d="M 38 60
  Q 40 54, 46 53
  Q 52 54, 54 58
  Q 53 63, 47 64
  Q 40 63, 38 60 Z" fill="#FFFDF7"/>
<!-- Branco do olho DIREITO (espelhado) -->
<path d="M 82 60
  Q 80 54, 74 53
  Q 68 54, 66 58
  Q 67 63, 73 64
  Q 80 63, 82 60 Z" fill="#FFFDF7"/>

<!-- ÍRIS verde-cinza / avelã suave -->
<ellipse cx="46" cy="59" rx="5.5" ry="6" fill="url(#${c})"/>
<ellipse cx="74" cy="59" rx="5.5" ry="6" fill="url(#${c})"/>

<!-- Textura radial da íris -->
<g stroke="#3E5040" stroke-width=".35" opacity=".65" fill="none">
<path d="M46 53v12M40.5 59h11M41 55l10 8M41 63l10-8M74 53v12M68.5 59h11M69 55l10 8M69 63l10-8"/></g>

<!-- Borda escura ao redor da íris -->
<ellipse cx="46" cy="59" rx="5.5" ry="6" fill="none" stroke="#2A3A2E" stroke-width=".5" opacity=".5"/>
<ellipse cx="74" cy="59" rx="5.5" ry="6" fill="none" stroke="#2A3A2E" stroke-width=".5" opacity=".5"/>

<!-- PUPILA vertical calma (não muito fechada — expressão relaxada) -->
<ellipse cx="46" cy="59" rx="1.5" ry="5" fill="url(#${d})"/>
<ellipse cx="74" cy="59" rx="1.5" ry="5" fill="url(#${d})"/>

<!-- Brilho principal do olho (canto superior-esquerdo) -->
<ellipse cx="44" cy="56" rx="1.8" ry="1.3" fill="#FFFFFF" opacity=".95"/>
<ellipse cx="72" cy="56" rx="1.8" ry="1.3" fill="#FFFFFF" opacity=".95"/>
<!-- Reflexo secundário no canto inferior -->
<circle cx="48" cy="62" r=".8" fill="#FFFFFF" opacity=".65"/>
<circle cx="76" cy="62" r=".8" fill="#FFFFFF" opacity=".65"/>

<!-- Contorno amendoado superior (delineador) -->
<path d="M 38 60 Q 40 54, 46 53 Q 52 54, 54 58" stroke="#241812" stroke-width="1.1" fill="none" stroke-linecap="round" opacity=".8"/>
<path d="M 82 60 Q 80 54, 74 53 Q 68 54, 66 58" stroke="#241812" stroke-width="1.1" fill="none" stroke-linecap="round" opacity=".8"/>
<!-- Cílios sutis nos cantos externos -->
<g stroke="#241812" stroke-width=".7" stroke-linecap="round" opacity=".7" fill="none">
<path d="M39 57l-2 -1"/><path d="M40 60l-2 0"/>
<path d="M81 57l2 -1"/><path d="M80 60l2 0"/></g>

<!-- ═══════════ FOCINHO ═══════════ -->
<!-- Área do focinho (levemente mais clara pra dar profundidade) -->
<ellipse cx="60" cy="76" rx="14" ry="10" fill="url(#${g})" opacity=".55"/>

<!-- NARIZ rosa em formato triangular arredondado -->
<path d="M 56.5 71
  Q 60 69, 63.5 71
  Q 64 74, 60 76.5
  Q 56 74, 56.5 71 Z" fill="url(#${e})"/>
<!-- Sombra do nariz -->
<path d="M 57 73 Q 60 74.5, 63 73" stroke="#B8657A" stroke-width=".4" fill="none" opacity=".6" stroke-linecap="round"/>
<!-- Brilho no nariz -->
<circle cx="58.5" cy="71.5" r=".7" fill="#FFF" opacity=".85"/>

<!-- BOCA em Y invertido -->
<path d="M 60 77 L 60 79.5" stroke="#2A1E1A" stroke-width="1.1" stroke-linecap="round" opacity=".85"/>
<path d="M 60 79.5 Q 56 82, 53 81.5" stroke="#2A1E1A" stroke-width="1.1" fill="none" stroke-linecap="round" opacity=".85"/>
<path d="M 60 79.5 Q 64 82, 67 81.5" stroke="#2A1E1A" stroke-width="1.1" fill="none" stroke-linecap="round" opacity=".85"/>

<!-- Queixo sutil (linha muito clara pra dar volume) -->
<path d="M 54 84 Q 60 86, 66 84" stroke="#D8CFBE" stroke-width=".5" fill="none" opacity=".6" stroke-linecap="round"/>

<!-- ═══════════ BOCHECHAS ═══════════ -->
<ellipse cx="38" cy="72" rx="5.5" ry="3" fill="url(#${e})" opacity=".35"/>
<ellipse cx="82" cy="72" rx="5.5" ry="3" fill="url(#${e})" opacity=".35"/>

<!-- ═══════════ WHISKER PADS (pontinhos dos bigodes) ═══════════ -->
<g fill="#3A2E28" opacity=".6">
<circle cx="49" cy="74.5" r=".55"/><circle cx="51.5" cy="77" r=".55"/><circle cx="53.5" cy="75" r=".55"/>
<circle cx="71" cy="74.5" r=".55"/><circle cx="68.5" cy="77" r=".55"/><circle cx="66.5" cy="75" r=".55"/></g>

<!-- ═══════════ BIGODES longos ═══════════ -->
<g stroke="#B8B0A2" stroke-width=".9" stroke-linecap="round" opacity=".85" fill="none">
<path d="M 50 75 Q 40 74, 26 70"/>
<path d="M 51 78 Q 40 78, 26 78"/>
<path d="M 52 81 Q 40 82, 27 86"/>
<path d="M 70 75 Q 80 74, 94 70"/>
<path d="M 69 78 Q 80 78, 94 78"/>
<path d="M 68 81 Q 80 82, 93 86"/></g>

<!-- Sombra debaixo da cabeça pra dar peso -->
<ellipse cx="60" cy="104" rx="30" ry="4" fill="#000" opacity=".18"/>
<g fill="url(#${b})">
<path d="M45 100c-3 3-3 8 1 9s6-3 5-7z"/>
<path d="M75 100c3 3 3 8-1 9s-6-3-5-7z"/></g>
<g stroke="#D8CFBB" stroke-width=".5" opacity=".6" fill="none">
<path d="M46 103c-1 1-1 3 0 4M74 103c1 1 1 3 0 4"/></g>
<circle cx="47" cy="107" r="1.2" fill="#F2C8D2"/>
<circle cx="73" cy="107" r="1.2" fill="#F2C8D2"/></svg>`}},

{id:'tsuru',n:'Tsuru',d:'Tsuru de origami',svg:()=>{const a=uid(),b=uid(),c=uid(),d=uid();return `<svg viewBox="0 0 120 120">
<defs><linearGradient id="${a}" x1=".3" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#123A4C"/><stop offset="1" stop-color="#08202C"/></linearGradient>
<linearGradient id="${b}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFDF7"/><stop offset="1" stop-color="#E4DACA"/></linearGradient>
<linearGradient id="${c}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5B8DEF"/><stop offset="1" stop-color="#2A4FA8"/></linearGradient>
<linearGradient id="${d}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#D9342A"/><stop offset="1" stop-color="#9C1D0C"/></linearGradient></defs>
<circle cx="60" cy="60" r="60" fill="url(#${a})"/>
<g stroke="#7FD4E8" opacity=".16" stroke-width="1.4" fill="none"><path d="M8 90c10-6 20-6 30 0s20 6 30 0 20-6 30 0"/><path d="M8 100c10-6 20-6 30 0s20 6 30 0 20-6 30 0"/></g>
<path d="M60 62 18 46l30-6z" fill="url(#${c})"/>
<path d="M60 62 102 46 72 40z" fill="url(#${c})"/>
<path d="M60 62 20 88l14-34z" fill="url(#${b})"/>
<path d="M60 62 100 88 86 54z" fill="url(#${b})"/>
<path d="M60 62 34 54l26-32z" fill="url(#${b})"/>
<path d="M60 62 86 54 60 22z" fill="url(#${c})"/>
<path d="M60 22 46 18 20 8l14 46z" fill="url(#${b})"/>
<path d="M60 22 100 8 86 54z" fill="url(#${c})"/>
<path d="M60 22v40" stroke="#0B2438" stroke-opacity=".3" stroke-width="1.6"/>
<path d="M86 54 96 40l6 6-10 12z" fill="url(#${b})"/>
<path d="M109 35c3-.5 6 .5 8 2.5-3 1.5-6 2-9 1.5z" fill="url(#${d})"/>
<circle cx="105" cy="38.5" r="1.8" fill="#0B1A24"/>
<path d="M20 8 8 18l12 8z" fill="url(#${d})" opacity=".9"/></svg>`}}
];

const avOf=()=>{
  if(S.avatar==='custom'&&S.avImg)
    return {id:'custom',n:'Meu desenho',d:'feito por você',
      svg:()=>`<img src="${S.avImg}" style="width:100%;height:100%;display:block;object-fit:cover">`};
  return AV.find(a=>a.id===S.avatar)||AV[0];
};

/* ══════════════════════════════════════════════════════════════
   48 KANJI N5 — fora dos 80 do 1º ano (小2 a 小6)
   ══════════════════════════════════════════════════════════════ */
const CORE=[
{c:'父',m:['pai'],m2:'pai',qr:'chichi',s:4,g:2,on:[{k:'フ',r:'fu'}],kun:[{k:'ちち',r:'chichi'}],rad:{c:'父',m:'pai'},
 sty:'Dois traços cruzados como os <b>braços abertos do pai</b> te dando um abraço. O X no topo é o bigodão dele.',
 p:[{c:'丷',m:'braços'},{c:'乂',m:'cruz'}],w:[{w:'お父さん',r:'otōsan',m:'pai (de outra pessoa)'},{w:'父母',r:'fubo',m:'os pais'}],sim:['母','友']},
{c:'母',m:['mãe'],m2:'mãe',qr:'haha',s:5,g:2,on:[{k:'ボ',r:'bo'}],kun:[{k:'はは',r:'haha'}],rad:{c:'毋',m:'mãe'},
 sty:'Os <b>dois pontinhos no meio</b> são os seios que amamentam. É quase igual a 毎 (cada), mas ali os pontos viram um traço.',
 p:[{c:'𠃋',m:'corpo'},{c:'丶丶',m:'os dois seios'}],w:[{w:'お母さん',r:'okāsan',m:'mãe (de outra pessoa)'},{w:'母国',r:'bokoku',m:'pátria'}],sim:['毎','父']},
{c:'兄',m:['irmão mais velho'],m2:'irmão mais velho',qr:'ani',s:5,g:2,on:[{k:'キョウ',r:'kyō'},{k:'ケイ',r:'kei'}],kun:[{k:'あに',r:'ani'}],rad:{c:'儿',m:'pernas'},
 sty:'Uma <b>boca 口 em cima de duas pernas 儿</b>. É o irmão mais velho andando por aí dando ordem com a boca grande.',
 p:[{c:'口',m:'boca'},{c:'儿',m:'pernas'}],w:[{w:'お兄さん',r:'onīsan',m:'irmão mais velho'},{w:'兄弟',r:'kyōdai',m:'irmãos'}],sim:['弟','父']},
{c:'姉',m:['irmã mais velha'],m2:'irmã mais velha',qr:'ane',s:8,g:2,on:[{k:'シ',r:'shi'}],kun:[{k:'あね',r:'ane'}],rad:{c:'女',m:'mulher'},
 sty:'A <b>mulher 女 que já vai sozinha ao mercado 市</b>. Só a irmã mais velha tem essa liberdade.',
 p:[{c:'女',m:'mulher'},{c:'市',m:'mercado'}],w:[{w:'お姉さん',r:'onēsan',m:'irmã mais velha'},{w:'姉妹',r:'shimai',m:'irmãs'}],sim:['妹','母']},
{c:'弟',m:['irmão mais novo'],m2:'irmão mais novo',qr:'otōto',s:7,g:2,on:[{k:'ダイ',r:'dai'},{k:'テイ',r:'tei'}],kun:[{k:'おとうと',r:'otōto'}],rad:{c:'弓',m:'arco'},
 sty:'Uma <b>fita enrolada num poste</b>, de cima a baixo. O caçula fica "amarrado", ainda não sai sozinho.',
 p:[{c:'丷',m:'chifrinhos'},{c:'弓',m:'arco'}],w:[{w:'兄弟',r:'kyōdai',m:'irmãos'},{w:'弟子',r:'deshi',m:'discípulo'}],sim:['兄','妹']},
{c:'妹',m:['irmã mais nova'],m2:'irmã mais nova',qr:'imōto',s:8,g:2,on:[{k:'マイ',r:'mai'}],kun:[{k:'いもうと',r:'imōto'}],rad:{c:'女',m:'mulher'},
 sty:'<b>Mulher 女 + 未 (ainda não)</b>. A menina que <b>ainda não</b> cresceu. A irmã mais velha 姉 tem 市 no lugar do 未.',
 p:[{c:'女',m:'mulher'},{c:'未',m:'ainda não'}],w:[{w:'姉妹',r:'shimai',m:'irmãs'},{w:'妹さん',r:'imōtosan',m:'irmã mais nova'}],sim:['姉','弟']},
{c:'友',m:['amigo','amizade'],m2:'amigo',qr:'tomo',s:4,g:2,on:[{k:'ユウ',r:'yū'}],kun:[{k:'とも',r:'tomo'}],rad:{c:'又',m:'mão'},
 sty:'<b>Duas mãos se cruzando</b> num aperto firme. O 又 é literalmente uma mão direita.',
 p:[{c:'ナ',m:'mão'},{c:'又',m:'outra mão'}],w:[{w:'友だち',r:'tomodachi',m:'amigo(a)'},{w:'友人',r:'yūjin',m:'amigo (formal)'}],sim:['父','来']},
{c:'私',m:['eu','privado'],m2:'eu',qr:'watashi',s:7,g:6,on:[{k:'シ',r:'shi'}],kun:[{k:'わたし',r:'watashi'}],rad:{c:'禾',m:'arroz'},
 sty:'<b>Espiga de arroz 禾 + braço curvado 厶</b> puxando para si. "Esse arroz é meu." Daí veio "eu" e "privado".',
 p:[{c:'禾',m:'arroz'},{c:'厶',m:'braço que recolhe'}],w:[{w:'私',r:'watashi',m:'eu'},{w:'私立',r:'shiritsu',m:'privado'}],sim:['何','食']},
{c:'何',m:['o quê','quanto'],m2:'o quê',qr:'nani',s:7,g:2,on:[{k:'カ',r:'ka'}],kun:[{k:'なに',r:'nani'},{k:'なん',r:'nan'}],rad:{c:'亻',m:'pessoa'},
 sty:'Uma <b>pessoa 亻 com um gancho 可 entalado na garganta</b>. Engasgada de dúvida, só sai "o quê?!".',
 p:[{c:'亻',m:'pessoa'},{c:'可',m:'possível'}],w:[{w:'何',r:'nani',m:'o quê'},{w:'何人',r:'nannin',m:'quantas pessoas'},{w:'何時',r:'nanji',m:'que horas'}],sim:['私','行']},
{c:'会',m:['encontrar','reunião'],m2:'encontrar',qr:'au',s:6,g:2,on:[{k:'カイ',r:'kai'},{k:'エ',r:'e'}],kun:[{k:'あ(う)',r:'a(u)'}],rad:{c:'人',m:'pessoa'},
 sty:'Um <b>telhado 𠆢 cobrindo gente 云</b> reunida. Quase igual a 今 (agora): a diferença é o que fica sob o telhado.',
 p:[{c:'𠆢',m:'telhado'},{c:'云',m:'gente'}],w:[{w:'会う',r:'au',m:'encontrar'},{w:'会社',r:'kaisha',m:'empresa'},{w:'社会',r:'shakai',m:'sociedade'}],sim:['今','社']},
{c:'社',m:['empresa','santuário'],m2:'empresa',qr:'sha',s:7,g:2,on:[{k:'シャ',r:'sha'}],kun:[{k:'やしろ',r:'yashiro'}],rad:{c:'礻',m:'altar'},
 sty:'<b>Altar 礻 + terra 土</b>, o santuário no chão sagrado. Hoje também é "empresa", onde muita gente passa o dia rezando por folga.',
 p:[{c:'礻',m:'altar'},{c:'土',m:'terra'}],w:[{w:'会社',r:'kaisha',m:'empresa'},{w:'神社',r:'jinja',m:'santuário'}],sim:['会','国']},
{c:'国',m:['país','nação'],m2:'país',qr:'kuni',s:8,g:2,on:[{k:'コク',r:'koku'}],kun:[{k:'くに',r:'kuni'}],rad:{c:'囗',m:'cerca'},
 sty:'Uma <b>muralha 囗 protegendo o jade 玉</b>, o tesouro do rei. Fronteira mais tesouro dá país.',
 p:[{c:'囗',m:'muralha'},{c:'玉',m:'jade'}],w:[{w:'国',r:'kuni',m:'país'},{w:'中国',r:'chūgoku',m:'China'},{w:'外国',r:'gaikoku',m:'exterior'}],sim:['会','社']},
{c:'今',m:['agora'],m2:'agora',qr:'ima',s:4,g:2,on:[{k:'コン',r:'kon'},{k:'キン',r:'kin'}],kun:[{k:'いま',r:'ima'}],rad:{c:'人',m:'pessoa'},
 sty:'<b>Telhado 𠆢 cobrindo o instante</b>. Comparado com 会, o 今 é magrinho embaixo: o agora é curto e passa voando.',
 p:[{c:'𠆢',m:'telhado'},{c:'㇑',m:'instante'}],w:[{w:'今',r:'ima',m:'agora'},{w:'今日',r:'kyō',m:'hoje'},{w:'今週',r:'konshū',m:'esta semana'}],sim:['会','分']},
{c:'時',m:['hora','tempo'],m2:'hora',qr:'ji',s:10,g:2,on:[{k:'ジ',r:'ji'}],kun:[{k:'とき',r:'toki'}],rad:{c:'日',m:'sol'},
 sty:'<b>Sol 日 + templo 寺</b>. Era o sino do templo que dizia a hora, conforme o sol andava no céu.',
 p:[{c:'日',m:'sol'},{c:'寺',m:'templo'}],w:[{w:'時間',r:'jikan',m:'tempo'},{w:'一時',r:'ichiji',m:'uma hora'},{w:'時々',r:'tokidoki',m:'às vezes'}],sim:['間','曜']},
{c:'分',m:['minuto','dividir','entender'],m2:'minuto / dividir',qr:'fun',s:4,g:2,on:[{k:'ブン',r:'bun'},{k:'フン',r:'fun'}],kun:[{k:'わ(ける)',r:'wa(keru)'},{k:'わ(かる)',r:'wa(karu)'}],rad:{c:'刀',m:'faca'},
 sty:'<b>八 (separar) + 刀 (faca)</b>: cortar em pedaços. Dividir a hora dá <b>minuto</b>. Dividir uma ideia até clarear dá <b>entender</b>.',
 p:[{c:'八',m:'separar'},{c:'刀',m:'faca'}],w:[{w:'五分',r:'gofun',m:'cinco minutos'},{w:'分かる',r:'wakaru',m:'entender'},{w:'半分',r:'hanbun',m:'metade'}],sim:['半','今']},
{c:'半',m:['metade'],m2:'metade',qr:'han',s:5,g:2,on:[{k:'ハン',r:'han'}],kun:[{k:'なか(ば)',r:'naka(ba)'}],rad:{c:'十',m:'dez'},
 sty:'Uma <b>vaca partida ao meio</b> pela linha vertical, com os dois pontinhos separando os lados. Metade pra cada um.',
 p:[{c:'丷',m:'os dois lados'},{c:'十',m:'corte'}],w:[{w:'半分',r:'hanbun',m:'metade'},{w:'一時半',r:'ichijihan',m:'1h30'}],sim:['分','午']},
{c:'間',m:['intervalo','entre'],m2:'intervalo / entre',qr:'kan',s:12,g:2,on:[{k:'カン',r:'kan'},{k:'ケン',r:'ken'}],kun:[{k:'あいだ',r:'aida'},{k:'ま',r:'ma'}],rad:{c:'門',m:'portão'},
 sty:'O <b>sol 日 espiando pela fresta do portão 門</b>. Aquele espacinho entre as duas folhas da porta.',
 p:[{c:'門',m:'portão'},{c:'日',m:'sol'}],w:[{w:'時間',r:'jikan',m:'tempo'},{w:'人間',r:'ningen',m:'ser humano'}],sim:['聞','時']},
{c:'毎',m:['cada','todo'],m2:'cada / todo',qr:'mai',s:6,g:2,on:[{k:'マイ',r:'mai'}],kun:[],rad:{c:'毋',m:'mãe'},
 sty:'Igualzinho a <b>母 (mãe)</b>, só que com um chapéu em cima e os pontos virando traço. Lembra: a mãe faz tudo <b>todo</b> dia.',
 p:[{c:'𠂉',m:'chapéu'},{c:'母',m:'mãe'}],w:[{w:'毎日',r:'mainichi',m:'todo dia'},{w:'毎週',r:'maishū',m:'toda semana'}],sim:['母','半']},
{c:'週',m:['semana'],m2:'semana',qr:'shū',s:11,g:2,on:[{k:'シュウ',r:'shū'}],kun:[],rad:{c:'辶',m:'caminhar'},
 sty:'<b>Caminhar 辶 + volta completa 周</b>. A semana é o ciclo que dá a volta e começa de novo.',
 p:[{c:'辶',m:'estrada'},{c:'周',m:'circuito'}],w:[{w:'今週',r:'konshū',m:'esta semana'},{w:'来週',r:'raishū',m:'semana que vem'}],sim:['曜','間']},
{c:'曜',m:['dia da semana'],m2:'dia da semana',qr:'yō',s:18,g:2,on:[{k:'ヨウ',r:'yō'}],kun:[],rad:{c:'日',m:'sol'},
 sty:'<b>Sol 日 + asas 羽 + pássaro 隹</b>. Os dias voam. É o kanji mais comprido do N5, 18 traços, vale ir devagar.',
 p:[{c:'日',m:'sol'},{c:'羽',m:'asas'},{c:'隹',m:'pássaro'}],w:[{w:'日曜日',r:'nichiyōbi',m:'domingo'},{w:'何曜日',r:'nanyōbi',m:'que dia da semana'}],sim:['週','時']},
{c:'午',m:['meio-dia'],m2:'meio-dia',qr:'go',s:4,g:2,on:[{k:'ゴ',r:'go'}],kun:[{k:'うま',r:'uma'}],rad:{c:'十',m:'dez'},
 sty:'É o <b>牛 (vaca) sem o chifrinho esquerdo</b>. Ao meio-dia a vaca está tão parada no sol que nem chifre parece ter.',
 p:[{c:'𠂉',m:'traço'},{c:'十',m:'cruz'}],w:[{w:'午前',r:'gozen',m:'manhã'},{w:'午後',r:'gogo',m:'tarde'}],sim:['半','年']},
{c:'前',m:['frente','antes'],m2:'frente / antes',qr:'mae',s:9,g:2,on:[{k:'ゼン',r:'zen'}],kun:[{k:'まえ',r:'mae'}],rad:{c:'刂',m:'faca'},
 sty:'<b>Chifrinhos 丷 + carne 月 + faca 刂</b>. Cortar o que está na frente pra abrir caminho.',
 p:[{c:'丷',m:'traços'},{c:'月',m:'carne'},{c:'刂',m:'faca'}],w:[{w:'前',r:'mae',m:'frente'},{w:'名前',r:'namae',m:'nome'},{w:'午前',r:'gozen',m:'manhã'}],sim:['後','南']},
{c:'後',m:['depois','atrás'],m2:'depois / atrás',qr:'ato',s:9,g:2,on:[{k:'ゴ',r:'go'},{k:'コウ',r:'kō'}],kun:[{k:'あと',r:'ato'},{k:'うし(ろ)',r:'ushi(ro)'}],rad:{c:'彳',m:'passo'},
 sty:'<b>Passos 彳 + fio 幺 + pé arrastando 夂</b>. Quem anda arrastando o pé fica pra trás.',
 p:[{c:'彳',m:'andar'},{c:'幺',m:'fio'},{c:'夂',m:'pé'}],w:[{w:'午後',r:'gogo',m:'tarde'},{w:'後ろ',r:'ushiro',m:'atrás'}],sim:['前','行']},
{c:'外',m:['fora','estrangeiro'],m2:'fora',qr:'soto',s:5,g:2,on:[{k:'ガイ',r:'gai'},{k:'ゲ',r:'ge'}],kun:[{k:'そと',r:'soto'},{k:'ほか',r:'hoka'}],rad:{c:'夕',m:'entardecer'},
 sty:'<b>Entardecer 夕 + adivinhação 卜</b>. Ler a sorte tinha que ser do lado de fora, à noite, longe de casa.',
 p:[{c:'夕',m:'entardecer'},{c:'卜',m:'adivinhação'}],w:[{w:'外',r:'soto',m:'lado de fora'},{w:'外国人',r:'gaikokujin',m:'estrangeiro'}],sim:['多','名']},
{c:'東',m:['leste'],m2:'leste',qr:'higashi',s:8,g:2,on:[{k:'トウ',r:'tō'}],kun:[{k:'ひがし',r:'higashi'}],rad:{c:'木',m:'árvore'},
 sty:'O <b>sol 日 nascendo atrás de uma árvore 木</b>. A imagem é literal: o sol nasce no leste.',
 p:[{c:'木',m:'árvore'},{c:'日',m:'sol'}],w:[{w:'東',r:'higashi',m:'leste'},{w:'東京',r:'tōkyō',m:'Tóquio'}],sim:['西','南']},
{c:'西',m:['oeste'],m2:'oeste',qr:'nishi',s:6,g:2,on:[{k:'セイ',r:'sei'},{k:'サイ',r:'sai'}],kun:[{k:'にし',r:'nishi'}],rad:{c:'西',m:'oeste'},
 sty:'Um <b>ninho onde o pássaro volta</b> quando o sol se põe. E o sol se põe no oeste. Cuidado pra não confundir com 四.',
 p:[{c:'覀',m:'ninho'}],w:[{w:'西',r:'nishi',m:'oeste'},{w:'関西',r:'kansai',m:'Kansai'}],sim:['東','北']},
{c:'南',m:['sul'],m2:'sul',qr:'minami',s:9,g:2,on:[{k:'ナン',r:'nan'}],kun:[{k:'みなみ',r:'minami'}],rad:{c:'十',m:'dez'},
 sty:'Uma <b>tenda com uma planta crescendo dentro</b>, virada pro sul. No Japão é o lado quente, que pega sol o dia todo.',
 p:[{c:'十',m:'topo'},{c:'冂',m:'tenda'},{c:'丷',m:'planta'}],w:[{w:'南',r:'minami',m:'sul'},{w:'東南',r:'tōnan',m:'sudeste'}],sim:['北','前']},
{c:'北',m:['norte'],m2:'norte',qr:'kita',s:5,g:2,on:[{k:'ホク',r:'hoku'}],kun:[{k:'きた',r:'kita'}],rad:{c:'匕',m:'colher'},
 sty:'<b>Duas pessoas de costas uma pra outra</b>, encolhidas de frio. No norte ninguém se olha, todo mundo tremendo.',
 p:[{c:'丬',m:'de costas'},{c:'匕',m:'de costas'}],w:[{w:'北',r:'kita',m:'norte'},{w:'北海道',r:'hokkaidō',m:'Hokkaido'}],sim:['南','西']},
{c:'長',m:['longo','chefe'],m2:'longo / chefe',qr:'nagai',s:8,g:2,on:[{k:'チョウ',r:'chō'}],kun:[{k:'なが(い)',r:'naga(i)'}],rad:{c:'長',m:'longo'},
 sty:'Um <b>ancião de cabelo comprido</b> apoiado na bengala. Cabelo longo é muito tempo vivido, e por isso ele virou o chefe.',
 p:[{c:'長',m:'cabelo + bengala'}],w:[{w:'長い',r:'nagai',m:'comprido'},{w:'社長',r:'shachō',m:'presidente'}],sim:['高','多']},
{c:'多',m:['muito'],m2:'muito',qr:'ōi',s:6,g:2,on:[{k:'タ',r:'ta'}],kun:[{k:'おお(い)',r:'ō(i)'}],rad:{c:'夕',m:'entardecer'},
 sty:'<b>夕 (noite) duas vezes</b>. Noite após noite após noite: são muitas. O contrário de 少 (pouco).',
 p:[{c:'夕',m:'noite'},{c:'夕',m:'outra noite'}],w:[{w:'多い',r:'ōi',m:'muito'},{w:'多分',r:'tabun',m:'talvez'}],sim:['少','外']},
{c:'行',m:['ir','linha'],m2:'ir',qr:'iku',s:6,g:2,on:[{k:'コウ',r:'kō'},{k:'ギョウ',r:'gyō'}],kun:[{k:'い(く)',r:'i(ku)'},{k:'おこな(う)',r:'okona(u)'}],rad:{c:'彳',m:'passo'},
 sty:'Um <b>cruzamento de duas ruas</b> visto de cima. Você escolhe um caminho e vai.',
 p:[{c:'彳',m:'rua'},{c:'亍',m:'rua'}],w:[{w:'行く',r:'iku',m:'ir'},{w:'銀行',r:'ginkō',m:'banco'},{w:'旅行',r:'ryokō',m:'viagem'}],sim:['来','後']},
{c:'来',m:['vir'],m2:'vir',qr:'kuru',s:7,g:2,on:[{k:'ライ',r:'rai'}],kun:[{k:'く(る)',r:'ku(ru)'}],rad:{c:'木',m:'árvore'},
 sty:'Um <b>pé de trigo com duas pessoinhas 人 nos galhos</b>. Na colheita, todo mundo vem pro campo.',
 p:[{c:'一',m:'horizonte'},{c:'米',m:'grãos'}],w:[{w:'来る',r:'kuru',m:'vir'},{w:'来週',r:'raishū',m:'semana que vem'}],sim:['行','友']},
{c:'話',m:['falar','conversa'],m2:'falar',qr:'hanasu',s:13,g:2,on:[{k:'ワ',r:'wa'}],kun:[{k:'はな(す)',r:'hana(su)'},{k:'はなし',r:'hanashi'}],rad:{c:'言',m:'palavra'},
 sty:'<b>Palavra 言 + língua 舌</b>. Usar a língua pra soltar palavras é falar. O 言 aparece em quase tudo que envolve fala.',
 p:[{c:'言',m:'palavra'},{c:'舌',m:'língua'}],w:[{w:'話す',r:'hanasu',m:'falar'},{w:'電話',r:'denwa',m:'telefone'}],sim:['語','読']},
{c:'聞',m:['ouvir','perguntar'],m2:'ouvir',qr:'kiku',s:14,g:2,on:[{k:'ブン',r:'bun'},{k:'モン',r:'mon'}],kun:[{k:'き(く)',r:'ki(ku)'}],rad:{c:'耳',m:'orelha'},
 sty:'Uma <b>orelha 耳 colada no portão 門</b>. Escutando atrás da porta. O 間 tem 日 no lugar da orelha.',
 p:[{c:'門',m:'portão'},{c:'耳',m:'orelha'}],w:[{w:'聞く',r:'kiku',m:'ouvir'},{w:'新聞',r:'shinbun',m:'jornal'}],sim:['間','門']},
{c:'読',m:['ler'],m2:'ler',qr:'yomu',s:14,g:2,on:[{k:'ドク',r:'doku'}],kun:[{k:'よ(む)',r:'yo(mu)'}],rad:{c:'言',m:'palavra'},
 sty:'<b>Palavra 言 + vender 売</b>. Você lê o anúncio pra saber o que está à venda.',
 p:[{c:'言',m:'palavra'},{c:'売',m:'vender'}],w:[{w:'読む',r:'yomu',m:'ler'},{w:'読書',r:'dokusho',m:'leitura'}],sim:['語','話']},
{c:'書',m:['escrever'],m2:'escrever',qr:'kaku',s:10,g:2,on:[{k:'ショ',r:'sho'}],kun:[{k:'か(く)',r:'ka(ku)'}],rad:{c:'曰',m:'dizer'},
 sty:'Um <b>pincel 聿 descendo sobre o papel 曰</b>. É a mão segurando o pincel de caligrafia.',
 p:[{c:'聿',m:'pincel'},{c:'曰',m:'papel'}],w:[{w:'書く',r:'kaku',m:'escrever'},{w:'辞書',r:'jisho',m:'dicionário'},{w:'図書館',r:'toshokan',m:'biblioteca'}],sim:['読','語']},
{c:'食',m:['comer','comida'],m2:'comer',qr:'taberu',s:9,g:2,on:[{k:'ショク',r:'shoku'}],kun:[{k:'た(べる)',r:'ta(beru)'}],rad:{c:'食',m:'comida'},
 sty:'Um <b>telhado 𠆢 sobre uma tigela cheia</b> de arroz fumegante. É a refeição na mesa.',
 p:[{c:'𠆢',m:'tampa'},{c:'良',m:'tigela'}],w:[{w:'食べる',r:'taberu',m:'comer'},{w:'食べ物',r:'tabemono',m:'comida'}],sim:['飲','会']},
{c:'飲',m:['beber'],m2:'beber',qr:'nomu',s:12,g:3,on:[{k:'イン',r:'in'}],kun:[{k:'の(む)',r:'no(mu)'}],rad:{c:'飠',m:'comida'},
 sty:'<b>Comida 飠 + boca escancarada 欠</b>. A pessoa abrindo bem a boca pra engolir o líquido de uma vez.',
 p:[{c:'飠',m:'comida'},{c:'欠',m:'boca aberta'}],w:[{w:'飲む',r:'nomu',m:'beber'},{w:'飲み物',r:'nomimono',m:'bebida'}],sim:['食','買']},
{c:'買',m:['comprar'],m2:'comprar',qr:'kau',s:12,g:2,on:[{k:'バイ',r:'bai'}],kun:[{k:'か(う)',r:'ka(u)'}],rad:{c:'貝',m:'concha'},
 sty:'Uma <b>rede 罒 pescando conchas 貝</b>. Concha era o dinheiro antigo, então pegar concha com rede é comprar.',
 p:[{c:'罒',m:'rede'},{c:'貝',m:'dinheiro'}],w:[{w:'買う',r:'kau',m:'comprar'},{w:'買い物',r:'kaimono',m:'compras'}],sim:['飲','店']},
{c:'電',m:['eletricidade'],m2:'eletricidade',qr:'den',s:13,g:2,on:[{k:'デン',r:'den'}],kun:[],rad:{c:'雨',m:'chuva'},
 sty:'<b>Chuva 雨 + raio 电</b> serpenteando embaixo. O relâmpago foi a primeira eletricidade que a gente viu.',
 p:[{c:'雨',m:'chuva'},{c:'电',m:'relâmpago'}],w:[{w:'電気',r:'denki',m:'eletricidade'},{w:'電車',r:'densha',m:'trem'},{w:'電話',r:'denwa',m:'telefone'}],sim:['駅','店']},
{c:'語',m:['língua','idioma'],m2:'idioma',qr:'go',s:14,g:2,on:[{k:'ゴ',r:'go'}],kun:[{k:'かた(る)',r:'kata(ru)'}],rad:{c:'言',m:'palavra'},
 sty:'<b>Palavra 言 + cinco 五 + boca 口</b>. Cinco bocas soltando palavras já formam um idioma inteiro.',
 p:[{c:'言',m:'palavra'},{c:'五',m:'cinco'},{c:'口',m:'boca'}],w:[{w:'日本語',r:'nihongo',m:'japonês'},{w:'英語',r:'eigo',m:'inglês'}],sim:['話','読']},
{c:'駅',m:['estação'],m2:'estação',qr:'eki',s:14,g:3,on:[{k:'エキ',r:'eki'}],kun:[],rad:{c:'馬',m:'cavalo'},
 sty:'<b>Cavalo 馬 + medida 尺</b>. Os postos antigos onde se trocava de cavalo a cada tantos quilômetros.',
 p:[{c:'馬',m:'cavalo'},{c:'尺',m:'medida'}],w:[{w:'駅',r:'eki',m:'estação'},{w:'駅前',r:'ekimae',m:'em frente à estação'}],sim:['電','店']},
{c:'高',m:['alto','caro'],m2:'alto / caro',qr:'takai',s:10,g:2,on:[{k:'コウ',r:'kō'}],kun:[{k:'たか(い)',r:'taka(i)'}],rad:{c:'高',m:'alto'},
 sty:'Uma <b>torre com telhado, janela e portas</b> empilhadas. Quanto mais andar, mais alto, e mais caro o aluguel.',
 p:[{c:'亠',m:'telhado'},{c:'口',m:'janela'},{c:'冋',m:'andar'}],w:[{w:'高い',r:'takai',m:'alto, caro'},{w:'高校',r:'kōkō',m:'ensino médio'}],sim:['安','長']},
{c:'安',m:['barato','tranquilo'],m2:'barato',qr:'yasui',s:6,g:3,on:[{k:'アン',r:'an'}],kun:[{k:'やす(い)',r:'yasu(i)'}],rad:{c:'宀',m:'telhado'},
 sty:'Uma <b>mulher 女 debaixo do telhado 宀</b>. Casa com a família dentro é paz. E o que é tranquilo pro bolso é barato.',
 p:[{c:'宀',m:'telhado'},{c:'女',m:'mulher'}],w:[{w:'安い',r:'yasui',m:'barato'},{w:'安全',r:'anzen',m:'segurança'}],sim:['高','古']},
{c:'新',m:['novo'],m2:'novo',qr:'atarashii',s:13,g:2,on:[{k:'シン',r:'shin'}],kun:[{k:'あたら(しい)',r:'atara(shii)'}],rad:{c:'斤',m:'machado'},
 sty:'<b>立 (de pé) + 木 (árvore) + 斤 (machado)</b>. A árvore recém-cortada. Madeira nova, ainda cheirosa.',
 p:[{c:'立',m:'de pé'},{c:'木',m:'árvore'},{c:'斤',m:'machado'}],w:[{w:'新しい',r:'atarashii',m:'novo'},{w:'新聞',r:'shinbun',m:'jornal'}],sim:['古','親']},
{c:'古',m:['velho','antigo'],m2:'velho',qr:'furui',s:5,g:2,on:[{k:'コ',r:'ko'}],kun:[{k:'ふる(い)',r:'furu(i)'}],rad:{c:'口',m:'boca'},
 sty:'<b>Dez 十 + boca 口</b>. Uma história que passou por dez gerações de bocas já é bem antiga.',
 p:[{c:'十',m:'dez'},{c:'口',m:'boca'}],w:[{w:'古い',r:'furui',m:'velho'},{w:'中古',r:'chūko',m:'usado'}],sim:['新','店']},
{c:'少',m:['pouco'],m2:'pouco',qr:'sukoshi',s:4,g:2,on:[{k:'ショウ',r:'shō'}],kun:[{k:'すく(ない)',r:'suku(nai)'},{k:'すこ(し)',r:'suko(shi)'}],rad:{c:'小',m:'pequeno'},
 sty:'É o <b>小 (pequeno) com um risquinho a mais</b> cortando por cima, como se tirasse ainda mais. Menos que pequeno é pouco.',
 p:[{c:'小',m:'pequeno'},{c:'丿',m:'tirar'}],w:[{w:'少し',r:'sukoshi',m:'um pouco'},{w:'少ない',r:'sukunai',m:'escasso'}],sim:['多','小']},
{c:'店',m:['loja'],m2:'loja',qr:'mise',s:8,g:2,on:[{k:'テン',r:'ten'}],kun:[{k:'みせ',r:'mise'}],rad:{c:'广',m:'telheiro'},
 sty:'<b>Telheiro 广 + ocupar 占</b>. Você ocupa um ponto na rua, põe um toldo em cima, e nasce a loja.',
 p:[{c:'广',m:'telheiro'},{c:'占',m:'ocupar'}],w:[{w:'店',r:'mise',m:'loja'},{w:'喫茶店',r:'kissaten',m:'cafeteria'}],sim:['古','駅']}
];
/* ── 65 kanji do 1º ano (小1), formato compacto ── */
function xk(a){
  const rd=s=>s?s.split(';').map(x=>{const[k,r]=x.split('|');return{k,r};}):[];
  const[c,m,qr,st,on,kun,rad,sty,p,w,sim]=a;
  const mm=m.split('/'),[rc,rm]=rad.split('|');
  return{c,m:mm,m2:mm.slice(0,2).join(' / '),qr,s:st,g:1,on:rd(on),kun:rd(kun),
    rad:{c:rc,m:rm},sty,
    p:p?p.split(';').map(x=>{const[q,z]=x.split('|');return{c:q,m:z};}):[],
    w:w.split(';').map(x=>{const[q,z,y]=x.split('|');return{w:q,r:z,m:y};}),
    sim:sim?sim.split(','):[]};
}
const EXTRA=[
['一','um','ichi',1,'イチ|ichi;イツ|itsu','ひと(つ)|hito(tsu)','一|um','Um traço deitado, só isso. É de onde tudo começa.','','一つ|hitotsu|um;一人|hitori|sozinho;一月|ichigatsu|janeiro','二,三'],
['二','dois','ni',2,'ニ|ni','ふた(つ)|futa(tsu)','二|dois','Dois traços. O de baixo é sempre o mais comprido.','','二つ|futatsu|dois;二人|futari|duas pessoas;二月|nigatsu|fevereiro','一,三'],
['三','três','san',3,'サン|san','みっ(つ)|mit(tsu)','一|um','Três traços empilhados. O do meio é o menorzinho.','','三つ|mittsu|três;三人|sannin|três pessoas;三日|mikka|dia 3','二,一'],
['四','quatro','shi/yon',5,'シ|shi','よん|yon;よっ(つ)|yot(tsu)','囗|cerca','Uma caixinha com duas perninhas dentro, como quatro paredes. Cuidado pra não trocar com 西 (oeste).','囗|cerca;儿|pernas','四つ|yottsu|quatro;四月|shigatsu|abril;四人|yonin|quatro pessoas','西,回'],
['五','cinco','go',4,'ゴ|go','いつ(つ)|itsu(tsu)','二|dois','Um Z espremido entre duas linhas, tipo um carretel de linha.','','五つ|itsutsu|cinco;五月|gogatsu|maio;五分|gofun|cinco minutos','四,六'],
['六','seis','roku',4,'ロク|roku','むっ(つ)|mut(tsu)','八|oito','Um chapeuzinho com duas perninhas embaixo. Parece uma casinha de brinquedo.','','六つ|muttsu|seis;六月|rokugatsu|junho;六日|muika|dia 6','八,七'],
['七','sete','shichi/nana',2,'シチ|shichi','なな(つ)|nana(tsu)','一|um','Um sete de cabeça pra baixo, com o rabinho virando pra direita.','','七つ|nanatsu|sete;七月|shichigatsu|julho;七日|nanoka|dia 7','九,十'],
['八','oito','hachi',2,'ハチ|hachi','やっ(つ)|yat(tsu)','八|separar','Duas pernas abrindo. No Japão é número de sorte, porque abre pra cima como um leque.','','八つ|yattsu|oito;八月|hachigatsu|agosto;八日|yōka|dia 8','六,人'],
['九','nove','kyū/ku',2,'キュウ|kyū;ク|ku','ここの(つ)|kokono(tsu)','乙|gancho','Um gancho com uma perna esticada. Quase chegando no dez, mas ainda torto.','','九つ|kokonotsu|nove;九月|kugatsu|setembro;九日|kokonoka|dia 9','七,力'],
['十','dez','jū',2,'ジュウ|jū','とお|tō','十|dez','Uma cruz perfeita. Dois traços que fecham a primeira dezena.','','十日|tōka|dia 10;十月|jūgatsu|outubro;十分|juppun|dez minutos','千,土'],
['百','cem','hyaku',6,'ヒャク|hyaku','','白|branco','Um traço em cima do 白 (branco). Um risquinho e o branco vira cem.','一|um;白|branco','百|hyaku|cem;三百|sanbyaku|trezentos;百円|hyakuen|cem ienes','白,千'],
['千','mil','sen',3,'セン|sen','ち|chi','十|dez','É o 十 (dez) com um chapéu inclinado. Dez com chapéu vira mil.','丿|chapéu;十|dez','千|sen|mil;三千|sanzen|três mil;千円|sen-en|mil ienes','十,午'],
['万','dez mil','man',3,'マン|man;バン|ban','','一|um','Poucos traços pra um número tão grande. No Japão se conta de dez mil em dez mil.','','一万|ichiman|dez mil;万円|man-en|dez mil ienes;百万|hyakuman|um milhão','方,力'],
['円','iene/redondo','en',4,'エン|en','まる(い)|maru(i)','冂|moldura','Uma moeda vista de frente, dentro da moldura. Além da moeda, quer dizer redondo.','冂|moldura;丿|dentro','円|en|iene;千円|sen-en|mil ienes;円い|marui|redondo','内,同'],
['日','sol/dia',"nichi/hi",4,'ニチ|nichi;ジツ|jitsu','ひ|hi;か|ka','日|sol','Era um círculo com um ponto no meio, o sol. Com o tempo virou esse retângulo.','','日本|nihon|Japão;毎日|mainichi|todo dia;日曜日|nichiyōbi|domingo','目,白'],
['月','lua/mês','getsu/tsuki',4,'ゲツ|getsu;ガツ|gatsu','つき|tsuki','月|lua','A lua crescente, com duas nuvens atravessando. Como o mês segue a lua, também quer dizer mês.','','月|tsuki|lua;一月|ichigatsu|janeiro;月曜日|getsuyōbi|segunda','日,肉'],
['火','fogo','ka/hi',4,'カ|ka','ひ|hi','火|fogo','Uma fogueira: a chama grande no meio e duas faíscas pulando pros lados.','','火|hi|fogo;火曜日|kayōbi|terça;花火|hanabi|fogos de artifício','水,人'],
['水','água','sui/mizu',4,'スイ|sui','みず|mizu','水|água','Um riacho correndo, com os respingos saindo dos dois lados.','','水|mizu|água;水曜日|suiyōbi|quarta;水色|mizuiro|azul-claro','火,木'],
['木','árvore','moku/ki',4,'モク|moku;ボク|boku','き|ki','木|árvore','Um tronco com dois galhos abertos e as raízes descendo. Dá pra ver a árvore inteira.','','木|ki|árvore;木曜日|mokuyōbi|quinta;木村|kimura|Kimura','本,林'],
['金','ouro/dinheiro','kin/kane',8,'キン|kin','かね|kane','金|metal','Um telhado cobrindo pepitas escondidas na terra. Ouro, metal e dinheiro.','人|telhado;王|rei;丷|pepitas','お金|okane|dinheiro;金曜日|kinyōbi|sexta;金魚|kingyo|peixinho dourado','全,土'],
['土','terra/solo','do/tsuchi',3,'ド|do;ト|to','つち|tsuchi','土|terra','Um broto saindo do chão. A linha de baixo é o solo firme.','','土|tsuchi|terra;土曜日|doyōbi|sábado;土地|tochi|terreno','士,十'],
['年','ano','nen/toshi',6,'ネン|nen','とし|toshi','干|escudo','O arroz sendo colhido. Como a colheita é uma por ano, virou o próprio ano.','𠂉|chapéu;十|corte;干|haste','今年|kotoshi|este ano;来年|rainen|ano que vem;一年|ichinen|um ano','午,牛'],
['先','antes/ponta','saki',6,'セン|sen','さき|saki','儿|pernas','Um pé dando o passo à frente do corpo. Quem vai na ponta chega antes.','丿|pé;土|corpo;儿|pernas','先生|sensei|professor;先週|senshū|semana passada;お先に|osakini|com licença','生,牛'],
['人','pessoa','hito',2,'ジン|jin;ニン|nin','ひと|hito','人|pessoa','Duas pernas de perfil, alguém caminhando. Dois traços e pronto.','','人|hito|pessoa;三人|sannin|três pessoas;日本人|nihonjin|japonês','入,八'],
['男','homem','otoko',7,'ダン|dan;ナン|nan','おとこ|otoko','田|campo','Força 力 no campo 田. O homem que trabalha puxando o arado.','田|campo;力|força','男|otoko|homem;男の子|otokonoko|menino;長男|chōnan|filho mais velho','女,田'],
['女','mulher','onna',3,'ジョ|jo','おんな|onna','女|mulher','Uma pessoa sentada de joelhos, com os braços cruzados no colo. Postura tradicional.','','女|onna|mulher;女の子|onnanoko|menina;彼女|kanojo|ela','安,子'],
['子','criança/filho','ko',3,'シ|shi;ス|su','こ|ko','子|criança','Um bebê enrolado no cobertor, só a cabeça e os bracinhos de fora.','','子ども|kodomo|criança;男の子|otokonoko|menino;お菓子|okashi|doce','字,学'],
['体','corpo','karada',7,'タイ|tai','からだ|karada','亻|pessoa','Pessoa 亻 + raiz 本. O corpo é a base de tudo que a gente é.','亻|pessoa;本|base','体|karada|corpo;体育|taiiku|educação física;大体|daitai|mais ou menos','休,本'],
['手','mão','te',4,'シュ|shu','て|te','手|mão','Uma mão aberta com os dedos separados e o pulso descendo.','','手|te|mão;上手|jōzu|habilidoso;手紙|tegami|carta','毛,足'],
['足','pé/bastar','ashi',7,'ソク|soku','あし|ashi','足|pé','Um joelho 口 com o pé embaixo. Também quer dizer "bastar", porque o pé te leva até onde precisa.','口|joelho;龰|pé','足|ashi|pé, perna;足りる|tariru|ser suficiente;一足|issoku|um par (sapatos)','手,走'],
['耳','orelha','mimi',6,'ジ|ji','みみ|mimi','耳|orelha','Uma orelha vista de lado, com as dobrinhas de dentro bem desenhadas.','','耳|mimi|orelha;耳鼻科|jibika|otorrino;早耳|hayamimi|bom ouvido','目,聞'],
['目','olho','me',5,'モク|moku','め|me','目|olho','Um olho em pé, com a pupila e a pálpebra. Era deitado, ficou vertical.','','目|me|olho;目次|mokuji|índice;真面目|majime|sério','日,自'],
['口','boca','kuchi',3,'コウ|kō','くち|kuchi','口|boca','Uma boca bem aberta, num quadradinho. Aparece dentro de dezenas de outros kanji.','','口|kuchi|boca;入口|iriguchi|entrada;出口|deguchi|saída','日,古'],
['名','nome','na',6,'メイ|mei','な|na','口|boca','Anoitecer 夕 + boca 口. No escuro você não vê ninguém, tem que gritar o nome.','夕|entardecer;口|boca','名前|namae|nome;有名|yūmei|famoso;名人|meijin|mestre','外,多'],
['天','céu','ten',4,'テン|ten','あま|ama','大|grande','Uma pessoa grande 大 com uma linha por cima da cabeça. Aquilo lá em cima é o céu.','一|acima;大|pessoa grande','天気|tenki|tempo, clima;天ぷら|tenpura|tempurá;天国|tengoku|paraíso','大,夫'],
['気','energia/ar','ki',6,'キ|ki;ケ|ke','','气|vapor','O vapor subindo da panela de arroz. Virou "ar", "energia" e até humor.','气|vapor;メ|arroz','元気|genki|disposto;天気|tenki|clima;気持ち|kimochi|sensação','天,気'],
['空','céu/vazio','sora',8,'クウ|kū','そら|sora;から|kara','穴|buraco','Buraco 穴 + trabalho 工. Cavaram tanto que ficou vazio, como o céu aberto.','穴|buraco;工|trabalho','空|sora|céu;空港|kūkō|aeroporto;空手|karate|caratê','穴,天'],
['山','montanha','yama',3,'サン|san','やま|yama','山|montanha','Três picos: um alto no meio e dois menores dos lados. É um desenho literal.','','山|yama|montanha;富士山|fujisan|Monte Fuji;火山|kazan|vulcão','出,川'],
['川','rio','kawa',3,'セン|sen','かわ|kawa','川|rio','Três linhas de água descendo entre as margens. Também é desenho puro.','','川|kawa|rio;小川|ogawa|riacho;川口|kawaguchi|foz','山,州'],
['田','campo de arroz','ta',5,'デン|den','た|ta','田|campo','Um terreno visto de cima, dividido em quatro canteiros pelos caminhos.','','田んぼ|tanbo|arrozal;山田|yamada|Yamada;田中|tanaka|Tanaka','由,回'],
['雨','chuva','ame',8,'ウ|u','あめ|ame','雨|chuva','Uma janela com quatro pingos caindo lá fora. Aparece em tudo que é tempo.','冂|nuvem;丶|pingos','雨|ame|chuva;大雨|ōame|chuvarada;梅雨|tsuyu|estação chuvosa','電,雪'],
['花','flor','hana',7,'カ|ka','はな|hana','艹|planta','Planta 艹 + mudar 化. A planta que se transforma e vira flor.','艹|planta;化|mudar','花|hana|flor;花見|hanami|ver as cerejeiras;花火|hanabi|fogos','草,化'],
['魚','peixe','sakana',11,'ギョ|gyo','さかな|sakana;うお|uo','魚|peixe','Um peixe em pé: cabeça em cima, escamas no meio e as quatro marcas da cauda embaixo.','⺈|cabeça;田|corpo;灬|cauda','魚|sakana|peixe;金魚|kingyo|peixinho;人魚|ningyo|sereia','鳥,馬'],
['肉','carne','niku',6,'ニク|niku','','肉|carne','Um pedaço de carne com as fibras riscadas dentro. Dá pra ver o corte.','冂|corte;人人|fibras','肉|niku|carne;牛肉|gyūniku|carne bovina;肉屋|nikuya|açougue','内,月'],
['物','coisa','mono',8,'ブツ|butsu;モツ|motsu','もの|mono','牛|vaca','Vaca 牛 + bandeira 勿. O gado era o bem mais valioso, a "coisa" por excelência.','牛|vaca;勿|bandeira','物|mono|coisa;食べ物|tabemono|comida;荷物|nimotsu|bagagem','牛,特'],
['右','direita','migi',5,'ウ|u;ユウ|yū','みぎ|migi','口|boca','Uma mão levando comida à boca 口. A maioria come com a direita.','ナ|mão;口|boca','右|migi|direita;右手|migite|mão direita;左右|sayū|ambos os lados','左,石'],
['左','esquerda','hidari',5,'サ|sa','ひだり|hidari','工|trabalho','Uma mão segurando a régua 工. A esquerda segura enquanto a direita trabalha.','ナ|mão;工|ferramenta','左|hidari|esquerda;左手|hidarite|mão esquerda;左折|sasetsu|virar à esquerda','右,在'],
['上','em cima/subir','ue',3,'ジョウ|jō','うえ|ue;あ(がる)|a(garu)','一|linha','Um traço apontando pra cima a partir do chão. Não tem como errar.','','上|ue|em cima;上手|jōzu|habilidoso;上着|uwagi|casaco','下,止'],
['下','embaixo/descer','shita',3,'カ|ka;ゲ|ge','した|shita;さ(がる)|sa(garu)','一|linha','O mesmo traço, agora apontando pra baixo. É o espelho do 上.','','下|shita|embaixo;地下|chika|subsolo;下手|heta|desajeitado','上,不'],
['内','dentro','uchi',4,'ナイ|nai','うち|uchi','冂|moldura','Uma pessoa 人 abrigada dentro da moldura 冂. Está do lado de dentro.','冂|moldura;人|pessoa','内|uchi|dentro;案内|annai|orientação;国内|kokunai|nacional','肉,円'],
['大','grande','ō/dai',3,'ダイ|dai;タイ|tai','おお(きい)|ō(kii)','大|grande','Uma pessoa de braços e pernas bem abertos, mostrando o tamanho.','','大きい|ōkii|grande;大学|daigaku|universidade;大人|otona|adulto','小,天'],
['小','pequeno','chiisai/shō',3,'ショウ|shō','ちい(さい)|chī(sai);こ|ko','小|pequeno','Um traço no meio com duas lasquinhas dos lados, como algo se partindo em migalhas.','','小さい|chiisai|pequeno;小学校|shōgakkō|escola primária;小川|ogawa|riacho','少,大'],
['白','branco','shiro',5,'ハク|haku;ビャク|byaku','しろ|shiro','白|branco','Um raio de sol 日 com um pingo em cima. Aquele brilho que estoura de branco.','丿|raio;日|sol','白い|shiroi|branco;面白い|omoshiroi|interessante;白紙|hakushi|papel em branco','百,日'],
['出','sair','deru',5,'シュツ|shutsu','で(る)|de(ru);だ(す)|da(su)','凵|abertura','Duas montanhas empilhadas: você sobe uma e sai do outro lado.','山|montanha;山|montanha','出る|deru|sair;出口|deguchi|saída;出す|dasu|tirar, enviar','山,入'],
['入','entrar','hairu',2,'ニュウ|nyū','はい(る)|hai(ru);い(れる)|i(reru)','入|entrar','Parece o 人, mas o traço de cima cai pra esquerda, como quem se curva pra passar na porta.','','入る|hairu|entrar;入口|iriguchi|entrada;入れる|ireru|colocar dentro','人,八'],
['立','ficar de pé','tatsu',5,'リツ|ritsu','た(つ)|ta(tsu)','立|de pé','Uma pessoa em pé sobre o chão, braços abertos e os dois pés firmes na linha.','亠|cabeça;丷|braços;一|chão','立つ|tatsu|ficar de pé;立派|rippa|esplêndido;国立|kokuritsu|nacional','音,並'],
['見','ver','miru',7,'ケン|ken','み(る)|mi(ru)','見|ver','Um olho 目 gigante em cima de duas perninhas 儿. É o olho andando por aí.','目|olho;儿|pernas','見る|miru|ver;見せる|miseru|mostrar;花見|hanami|ver as cerejeiras','貝,目'],
['言','dizer/palavra','iu',7,'ゲン|gen;ゴン|gon','い(う)|i(u);こと|koto','言|palavra','Uma boca 口 com o som saindo em ondas por cima. Vira radical de tudo que se fala.','亠|som;二|ondas;口|boca','言う|iu|dizer;言葉|kotoba|palavra;方言|hōgen|dialeto','話,語'],
['校','escola','kō',10,'コウ|kō','','木|árvore','Árvore 木 + cruzar 交. O prédio de madeira onde os caminhos das crianças se cruzam.','木|madeira;交|cruzar','学校|gakkō|escola;高校|kōkō|ensino médio;校長|kōchō|diretor','木,交'],
['道','caminho','michi',12,'ドウ|dō','みち|michi','辶|caminhar','Andar 辶 + cabeça 首. Seguir com a cabeça erguida pelo caminho. Também é o "dō" de karate-dō.','辶|estrada;首|cabeça','道|michi|caminho;柔道|jūdō|judô;北海道|hokkaidō|Hokkaido','週,近'],
['車','carro','kuruma',7,'シャ|sha','くるま|kuruma','車','Uma carroça vista de cima: o eixo atravessando e as duas rodas nas pontas.','','車|kuruma|carro;電車|densha|trem;自転車|jitensha|bicicleta','東,軍'],
['自','próprio/si mesmo','ji',6,'ジ|ji;シ|shi','みずか(ら)|mizuka(ra)','自|nariz','Era o desenho de um nariz. No Japão a pessoa aponta pro nariz pra dizer "eu".','丿|ponta;目|olho','自分|jibun|si mesmo;自転車|jitensha|bicicleta;自由|jiyū|liberdade','目,白'],
['休','descansar','yasumu',6,'キュウ|kyū','やす(む)|yasu(mu)','亻|pessoa','Uma pessoa 亻 encostada na árvore 木, tirando uma soneca na sombra.','亻|pessoa;木|árvore','休む|yasumu|descansar;休み|yasumi|folga;昼休み|hiruyasumi|hora do almoço','体,木'],
['家','casa/família','ie',10,'カ|ka;ケ|ke','いえ|ie;や|ya','宀|telhado','Telhado 宀 com um porco 豕 embaixo. Antigamente o animal morava junto, era sinal de casa cheia.','宀|telhado;豕|porco','家|ie|casa;家族|kazoku|família;作家|sakka|escritor','安,室'],
['赤','vermelho','aka',7,'セキ|seki','あか|aka','赤|vermelho','Terra 土 em cima do fogo 火. O barro em brasa fica daquele vermelho vivo.','土|terra;灬|fogo','赤い|akai|vermelho;赤ちゃん|akachan|bebê;赤字|akaji|no vermelho','走,土']
].map(xk);

/* ── JLPT N4 · 168 kanji ── */
const xn=a=>{const o=xk(a);o.g=0;o.jl='N4';return o;};
const N4=[
['悪','mau/ruim','warui',11,'アク|aku','わる(い)|waru(i)','心|coração','Um coração 心 embaixo de algo torto. Coração torcido é coração ruim.','亜|torto;心|coração','悪い|warui|ruim;最悪|saiaku|péssimo;悪口|waruguchi|maledicência','要,亜'],
['暗','escuro','kurai',13,'アン|an','くら(い)|kura(i)','日|sol','Sol 日 + som 音. Tão escuro que você só se guia pelo barulho.','日|sol;音|som','暗い|kurai|escuro;暗記|anki|decorar;真っ暗|makkura|breu','音,明'],
['医','médico/medicina','i',7,'イ|i','','匚|caixa','Uma flecha 矢 guardada na caixa 匚. O médico tira a flecha e trata a ferida.','匚|caixa;矢|flecha','医者|isha|médico;医院|iin|clínica;歯医者|haisha|dentista','匹,区'],
['意','vontade/sentido','i',13,'イ|i','','心|coração','Som 音 em cima do coração 心. O que o coração quer dizer é a intenção.','音|som;心|coração','意味|imi|significado;注意|chūi|atenção;意見|iken|opinião','音,思'],
['以','a partir de','i',5,'イ|i','','人|pessoa','Uma pessoa 人 ao lado de uma marca. Serve para dizer a partir de onde algo conta.','丨|marca;人|pessoa','以上|ijō|acima de;以下|ika|abaixo de;以外|igai|exceto','人,似'],
['引','puxar','hiku',4,'イン|in','ひ(く)|hi(ku)','弓|arco','Um arco 弓 com a corda 丨 sendo puxada. Puxar é literalmente isso.','弓|arco;丨|corda','引く|hiku|puxar;引っ越し|hikkoshi|mudança;割引|waribiki|desconto','弘,強'],
['院','instituição','in',10,'イン|in','','阝|colina','Muro 阝 cercando um pátio completo 完. Prédio grande e fechado: hospital ou templo.','阝|muro;完|completo','病院|byōin|hospital;大学院|daigakuin|pós-graduação;入院|nyūin|internação','完,員'],
['員','membro','in',10,'イン|in','','口|boca','Uma boca 口 sobre uma concha 貝. Cada boca a pagar é um membro do grupo.','口|boca;貝|concha','店員|ten-in|atendente;会社員|kaishain|funcionário;駅員|ekiin|ferroviário','買,貝'],
['運','transportar/sorte','hakobu',12,'ウン|un','はこ(ぶ)|hako(bu)','辶|caminhar','Andar 辶 levando um exército 軍. Carregar tudo de um lugar a outro, e o destino decide.','辶|estrada;軍|exército','運ぶ|hakobu|transportar;運転|unten|dirigir;運動|undō|exercício','軍,連'],
['英','Inglaterra/brilhante','ei',8,'エイ|ei','','艹|planta','Uma planta 艹 no centro 央. A flor que se destaca no meio do canteiro.','艹|planta;央|centro','英語|eigo|inglês;英国|eikoku|Inglaterra;英雄|eiyū|herói','央,映'],
['映','projetar/refletir','utsuru',9,'エイ|ei','うつ(る)|utsu(ru)','日|sol','Sol 日 batendo no centro 央. A luz reflete e projeta a imagem.','日|sol;央|centro','映画|eiga|filme;映る|utsuru|refletir-se;上映|jōei|exibição','英,央'],
['遠','longe','tooi',13,'エン|en','とお(い)|tō(i)','辶|caminhar','Andar 辶 com roupa 袁 de viagem. Roupa de viagem é sinal de destino distante.','辶|estrada;袁|roupa longa','遠い|tōi|longe;永遠|eien|eternidade;遠足|ensoku|excursão','園,還'],
['屋','loja/telhado','ya',9,'オク|oku','や|ya','尸|abrigo','Um teto 尸 que chega 至 até o chão. A casinha da lojinha de esquina.','尸|teto;至|chegar','部屋|heya|quarto;本屋|honya|livraria;八百屋|yaoya|quitanda','居,室'],
['音','som','oto',9,'オン|on','おと|oto','音|som','O 言 (falar) com um traço a mais na boca. A voz que sai já virou som puro.','立|de pé;日|boca','音|oto|som;音楽|ongaku|música;発音|hatsuon|pronúncia','立,暗'],
['歌','canção','uta',14,'カ|ka','うた|uta','欠|boca aberta','Duas bocas 可可 e mais uma escancarada 欠. Muita boca aberta é gente cantando.','哥|dois cantos;欠|boca aberta','歌|uta|canção;歌う|utau|cantar;歌手|kashu|cantor','可,次'],
['夏','verão','natsu',10,'カ|ka','なつ|natsu','夂|pé','Uma pessoa de cabeça 百 grande arrastando os pés 夂. É o calor do verão pesando.','一|topo;自|cabeça;夂|pés','夏|natsu|verão;夏休み|natsuyasumi|férias de verão;真夏|manatsu|auge do verão','冬,春'],
['画','desenho/traço','ga',8,'ガ|ga;カク|kaku','','田|campo','Um campo 田 delimitado por uma moldura. Cada linha desenhada é um traço.','一|topo;田|campo;凵|moldura','映画|eiga|filme;画家|gaka|pintor;計画|keikaku|plano','田,由'],
['海','mar','umi',9,'カイ|kai','うみ|umi','氵|água','Água 氵 + cada 毎. Toda gota de todo rio acaba no mar.','氵|água;毎|cada','海|umi|mar;海外|kaigai|exterior;日本海|nihonkai|Mar do Japão','毎,毒'],
['回','girar/vez','mawaru',6,'カイ|kai','まわ(る)|mawa(ru)','囗|cerca','Um quadrado dentro do outro, como um redemoinho. Girar e contar as vezes.','囗|fora;口|dentro','回る|mawaru|girar;一回|ikkai|uma vez;今回|konkai|desta vez','田,四'],
['開','abrir','hiraku',12,'カイ|kai','ひら(く)|hira(ku);あ(ける)|a(keru)','門|portão','Duas mãos 开 levantando a tranca do portão 門. Está aberto.','門|portão;开|tranca','開ける|akeru|abrir;開く|hiraku|abrir-se;開店|kaiten|abertura da loja','間,閉'],
['界','mundo/limite','kai',9,'カイ|kai','','田|campo','Campo 田 com divisas 介. Onde a divisa termina começa outro mundo.','田|campo;介|dividir','世界|sekai|mundo;業界|gyōkai|setor;限界|genkai|limite','田,介'],
['楽','divertido/música','tanoshii',13,'ガク|gaku;ラク|raku','たの(しい)|tano(shii)','木|árvore','Um instrumento de madeira 木 com sinos e cordas. Música é o que traz alegria.','白|tambor;幺|cordas;木|madeira','楽しい|tanoshii|divertido;音楽|ongaku|música;楽|raku|fácil','薬,栄'],
['館','salão/prédio','kan',16,'カン|kan','','飠|comida','Comida 飠 dentro de um prédio oficial 官. O grande salão onde se recebe visita.','飠|comida;官|oficial','図書館|toshokan|biblioteca;映画館|eigakan|cinema;大使館|taishikan|embaixada','官,飲'],
['漢','China/Han','kan',13,'カン|kan','','氵|água','Água 氵 do grande rio da China. Daí veio kanji, o caractere chinês.','','漢字|kanji|kanji;漢方|kanpō|medicina chinesa;漢語|kango|palavra sino-japonesa','難,難'],
['寒','frio','samui',12,'カン|kan','さむ(い)|samu(i)','宀|telhado','Debaixo do telhado 宀 com palha e gelo 冫 nos pés. Está congelando.','宀|telhado;冫|gelo','寒い|samui|frio;寒気|samuke|calafrio;悪寒|okan|arrepio','塞,実'],
['顔','rosto','kao',18,'ガン|gan','かお|kao','頁|cabeça','Cabeça 頁 com sobrancelhas bonitas 彦. É o rosto inteiro.','彦|belo;頁|cabeça','顔|kao|rosto;笑顔|egao|sorriso;顔色|kaoiro|aparência','願,頭'],
['帰','voltar para casa','kaeru',10,'キ|ki','かえ(る)|kae(ru)','巾|pano','Uma vassoura 帚 pela metade. Terminou de arrumar, hora de voltar pra casa.','刂|caminho;帚|vassoura','帰る|kaeru|voltar;帰国|kikoku|voltar ao país;お帰り|okaeri|bem-vindo de volta','掃,婦'],
['起','levantar-se','okiru',10,'キ|ki','お(きる)|o(kiru)','走|correr','Correr 走 com o próprio corpo 己. Pra correr, primeiro tem que levantar.','走|correr;己|si mesmo','起きる|okiru|acordar;起こす|okosu|acordar alguém;早起き|hayaoki|acordar cedo','走,超'],
['究','pesquisar','kyū',7,'キュウ|kyū','きわ(める)|kiwa(meru)','穴|buraco','Cavar o buraco 穴 até os nove 九 metros. Pesquisar é ir até o fundo.','穴|buraco;九|nove','研究|kenkyū|pesquisa;究める|kiwameru|dominar;追究|tsuikyū|investigação','空,穴'],
['急','pressa/urgente','isogu',9,'キュウ|kyū','いそ(ぐ)|iso(gu)','心|coração','Uma mão agarrando alguém pelas costas, com o coração 心 disparado. Pura pressa.','刍|mão;心|coração','急ぐ|isogu|apressar-se;急に|kyūni|de repente;特急|tokkyū|expresso','息,忙'],
['牛','vaca','ushi',4,'ギュウ|gyū','うし|ushi','牛|vaca','Uma cabeça de boi vista de frente, com os dois chifres. O 午 é ele sem um chifre.','','牛|ushi|vaca;牛肉|gyūniku|carne bovina;牛乳|gyūnyū|leite','午,生'],
['去','ir embora/passado','saru',5,'キョ|kyo;コ|ko','さ(る)|sa(ru)','厶|braço','A terra 土 ficando pra trás 厶. Quem parte deixa o chão para trás.','土|terra;厶|partir','去年|kyonen|ano passado;去る|saru|partir;過去|kako|passado','法,土'],
['強','forte','tsuyoi',11,'キョウ|kyō','つよ(い)|tsuyo(i)','弓|arco','Um arco 弓 tão duro que precisa de um besouro 虫 pra vergar. É forte mesmo.','弓|arco;厶|braço;虫|inseto','強い|tsuyoi|forte;勉強|benkyō|estudo;強力|kyōryoku|potente','弱,引'],
['教','ensinar','oshieru',11,'キョウ|kyō','おし(える)|oshi(eru)','攵|bater','Uma vara 攵 corrigindo a criança 子 que aprende. Ensinar à moda antiga.','孝|filial;攵|vara','教える|oshieru|ensinar;教室|kyōshitsu|sala de aula;教科書|kyōkasho|livro didático','孝,救'],
['京','capital','kyō',8,'キョウ|kyō;ケイ|kei','','亠|telhado','Uma torre alta sobre um morro. A grande cidade se via de longe.','亠|telhado;口|prédio;小|base','東京|tōkyō|Tóquio;京都|kyōto|Quioto;上京|jōkyō|ir à capital','高,景'],
['業','trabalho/ramo','gyō',13,'ギョウ|gyō','','木|árvore','Um cavalete de madeira cheio de ferramentas penduradas. Oficina em plena função.','丵|ferramentas;木|madeira','授業|jugyō|aula;工業|kōgyō|indústria;卒業|sotsugyō|formatura','木,並'],
['近','perto','chikai',7,'キン|kin','ちか(い)|chika(i)','辶|caminhar','Andar 辶 só o que cabe num machado 斤. Distância curta, dá pra ir a pé.','辶|estrada;斤|machado','近い|chikai|perto;最近|saikin|recentemente;近所|kinjo|vizinhança','遠,新'],
['銀','prata','gin',14,'ギン|gin','','金|metal','Metal 金 que fica parado 艮 brilhando. Prata é o metal que não corre.','金|metal;艮|parar','銀行|ginkō|banco;銀色|giniro|prateado;銀座|ginza|Ginza','金,根'],
['区','distrito','ku',4,'ク|ku','','匚|caixa','Uma caixa 匚 com um X dentro, marcando a área no mapa. É o bairro administrativo.','匚|caixa;乂|marca','区|ku|distrito;地区|chiku|zona;区別|kubetsu|distinção','医,匹'],
['計','medir/plano','hakaru',9,'ケイ|kei','はか(る)|haka(ru)','言|palavra','Palavra 言 com dez 十. Contar em voz alta até dez é medir e planejar.','言|palavra;十|dez','時計|tokei|relógio;計画|keikaku|plano;合計|gōkei|total','針,話'],
['軽','leve','karui',12,'ケイ|kei','かる(い)|karu(i)','車|carro','Um carro 車 com fios 圣 finos. Carrinho leve, dá pra empurrar sozinho.','車|carro;圣|fino','軽い|karui|leve;軽食|keishoku|lanche;気軽|kigaru|descontraído','経,車'],
['犬','cachorro','inu',4,'ケン|ken','いぬ|inu','犬|cachorro','É o 大 (grande) com um pingo, que é a orelhinha em pé do cachorro.','大|grande;丶|orelha','犬|inu|cachorro;子犬|koinu|filhote;番犬|banken|cão de guarda','大,太'],
['研','pesquisar/polir','ken',9,'ケン|ken','と(ぐ)|to(gu)','石|pedra','Pedra 石 sendo lixada até ficar plana 开. Estudar é polir a mente.','石|pedra;开|plano','研究|kenkyū|pesquisa;研修|kenshū|treinamento;研ぐ|togu|afiar','石,開'],
['県','província','ken',9,'ケン|ken','','目|olho','Um olho 目 de cabeça pra baixo sobre uma linha. É a divisão que o governo vigia.','目|olho;小|base','県|ken|província;県庁|kenchō|governo provincial;愛知県|aichiken|Aichi','具,直'],
['建','construir','tateru',9,'ケン|ken','た(てる)|ta(teru)','廴|estender','Um pincel 聿 traçando a planta que se estende 廴. Do projeto nasce o prédio.','廴|estender;聿|pincel','建てる|tateru|construir;建物|tatemono|edifício;建築|kenchiku|arquitetura','書,健'],
['験','prova/testar','ken',18,'ケン|ken','','馬|cavalo','Testar o cavalo 馬 antes de comprar. Daí virou exame.','馬|cavalo;僉|reunir','試験|shiken|prova;経験|keiken|experiência;実験|jikken|experimento','馬,険'],
['元','origem','moto',4,'ゲン|gen;ガン|gan','もと|moto','儿|pernas','Duas linhas em cima das pernas 儿. A cabeça, a origem do corpo.','二|topo;儿|pernas','元気|genki|disposto;元|moto|origem;地元|jimoto|local','兄,先'],
['工','indústria/obra','kō',3,'コウ|kō;ク|ku','','工|obra','Uma ferramenta antiga, o esquadro do carpinteiro. Símbolo de todo trabalho manual.','','工場|kōjō|fábrica;工事|kōji|obra;大工|daiku|carpinteiro','左,土'],
['広','largo/amplo','hiroi',5,'コウ|kō','ひろ(い)|hiro(i)','广|telheiro','Debaixo do telheiro 广 tem um espaço 厶 sem parede nenhuma. Bem amplo.','广|telheiro;厶|espaço','広い|hiroi|amplo;広場|hiroba|praça;広告|kōkoku|anúncio','店,床'],
['考','pensar/refletir','kangaeru',6,'コウ|kō','かんが(える)|kanga(eru)','耂|velho','Um velho 耂 curvado sobre a bengala. Quem viveu muito pensa antes de agir.','耂|ancião;丂|curva','考える|kangaeru|pensar;参考|sankō|referência;考え|kangae|ideia','老,教'],
['光','luz','hikari',6,'コウ|kō','ひかり|hikari','儿|pernas','Uma tocha em chamas carregada por alguém 儿. A luz andando na escuridão.','⺌|chama;儿|pessoa','光|hikari|luz;観光|kankō|turismo;日光|nikkō|luz do sol','先,当'],
['好','gostar','suki',6,'コウ|kō','す(き)|su(ki);この(む)|kono(mu)','女|mulher','Uma mulher 女 com o filho 子 no colo. Não existe afeto mais direto que esse.','女|mulher;子|criança','好き|suki|gostar;好む|konomu|preferir;友好|yūkō|amizade','妹,姉'],
['合','juntar/combinar','au',6,'ゴウ|gō','あ(う)|a(u)','口|boca','Uma tampa que encaixa perfeitamente na boca 口 do pote. Combinou.','𠆢|tampa;一|borda;口|pote','合う|au|combinar;合計|gōkei|total;試合|shiai|partida','会,今'],
['黒','preto','kuroi',11,'コク|koku','くろ|kuro','黒|preto','Uma chaminé 里 com fogo 灬 embaixo. A fuligem deixa tudo preto.','里|chaminé;灬|fogo','黒い|kuroi|preto;黒板|kokuban|quadro-negro;真っ黒|makkuro|todo preto','里,点'],
['菜','verdura','na',11,'サイ|sai','な|na','艹|planta','Planta 艹 sendo colhida com a mão 采. Verdura fresca da horta.','艹|planta;采|colher','野菜|yasai|verdura;白菜|hakusai|acelga;前菜|zensai|entrada','採,葉'],
['作','fazer','tsukuru',7,'サク|saku;サ|sa','つく(る)|tsuku(ru)','亻|pessoa','Uma pessoa 亻 cortando a madeira 乍 em etapas. Fazer alguma coisa com as mãos.','亻|pessoa;乍|cortar','作る|tsukuru|fazer;作品|sakuhin|obra;作文|sakubun|redação','昨,住'],
['産','produzir/parto','san',11,'サン|san','う(む)|u(mu)','生|vida','Vida 生 nascendo debaixo do telhado. Produzir e dar à luz.','立|de pé;厂|abrigo;生|vida','産む|umu|dar à luz;お土産|omiyage|lembrança;生産|seisan|produção','生,彦'],
['紙','papel','kami',10,'シ|shi','かみ|kami','糸|fio','Fio 糸 batido até virar folha 氏. Papel é fibra prensada.','糸|fio;氏|clã','紙|kami|papel;手紙|tegami|carta;新聞紙|shinbunshi|jornal velho','糸,線'],
['思','pensar','omou',9,'シ|shi','おも(う)|omo(u)','心|coração','Cabeça 田 em cima do coração 心. Pensar com a razão e o sentimento juntos.','田|cabeça;心|coração','思う|omou|achar;思い出|omoide|lembrança;不思議|fushigi|estranho','田,意'],
['止','parar','tomaru',4,'シ|shi','と(まる)|to(maru)','止|parar','Uma pegada parada no chão. O pé que não avança mais.','','止まる|tomaru|parar;中止|chūshi|cancelamento;禁止|kinshi|proibido','正,歩'],
['市','cidade/feira','ichi',5,'シ|shi','いち|ichi','巾|pano','Um toldo de pano 巾 com a placa em cima. A feira que virou cidade.','亠|placa;巾|toldo','市|shi|cidade;市場|ichiba|mercado;都市|toshi|metrópole','姉,布'],
['仕','servir/trabalho','shi',5,'シ|shi','つか(える)|tsuka(eru)','亻|pessoa','Uma pessoa 亻 a serviço do samurai 士. Daí veio a palavra trabalho.','亻|pessoa;士|samurai','仕事|shigoto|trabalho;仕方|shikata|jeito;給仕|kyūji|garçom','住,任'],
['死','morrer','shinu',6,'シ|shi','し(ぬ)|shi(nu)','歹|osso','Ossos 歹 e uma pessoa curvada ao lado. O fim da vida.','歹|osso;匕|pessoa','死ぬ|shinu|morrer;必死|hisshi|desesperado;死亡|shibō|óbito','列,残'],
['使','usar','tsukau',8,'シ|shi','つか(う)|tsuka(u)','亻|pessoa','Uma pessoa 亻 mandada como oficial 吏. Usar alguém para uma tarefa.','亻|pessoa;吏|oficial','使う|tsukau|usar;大使館|taishikan|embaixada;使い方|tsukaikata|modo de usar','便,更'],
['始','começar','hajimeru',8,'シ|shi','はじ(める)|haji(meru)','女|mulher','Mulher 女 e o começo 台 de tudo. Toda vida começa nela.','女|mulher;台|base','始める|hajimeru|começar;開始|kaishi|início;始発|shihatsu|primeiro trem','台,姉'],
['試','tentar/testar','tamesu',13,'シ|shi','ため(す)|tame(su);こころ(みる)|kokoro(miru)','言|palavra','Palavra 言 seguindo um modelo 式. Testar se o que se diz confere.','言|palavra;式|estilo','試験|shiken|prova;試合|shiai|partida;試す|tamesu|testar','式,話'],
['字','letra/caractere','ji',6,'ジ|ji','','宀|telhado','Uma criança 子 abrigada 宀 aprendendo a escrever. Nasceu a letra.','宀|telhado;子|criança','漢字|kanji|kanji;字|ji|caractere;文字|moji|letra','学,子'],
['事','coisa/assunto','koto',8,'ジ|ji','こと|koto','亅|gancho','Uma mão segurando o pincel do escriba, registrando o que aconteceu.','一|topo;口|boca;亅|gancho','仕事|shigoto|trabalho;事故|jiko|acidente;大事|daiji|importante','書,車'],
['持','segurar/ter','motsu',9,'ジ|ji','も(つ)|mo(tsu)','扌|mão','Mão 扌 cuidando do templo 寺. Segurar e manter algo consigo.','扌|mão;寺|templo','持つ|motsu|ter;気持ち|kimochi|sensação;金持ち|kanemochi|rico','時,特'],
['室','sala/quarto','shitsu',9,'シツ|shitsu','むろ|muro','宀|telhado','Debaixo do telhado 宀, o cômodo aonde se chega 至. O quarto lá no fundo.','宀|telhado;至|chegar','教室|kyōshitsu|sala de aula;寝室|shinshitsu|dormitório;和室|washitsu|quarto japonês','屋,家'],
['質','qualidade','shitsu',15,'シツ|shitsu;シチ|shichi','','貝|concha','Dois machados 斤 avaliando a concha 貝. Pesar o valor é medir a qualidade.','斦|machados;貝|dinheiro','質問|shitsumon|pergunta;品質|hinshitsu|qualidade;性質|seishitsu|natureza','貝,買'],
['写','copiar/fotografar','utsusu',5,'シャ|sha','うつ(す)|utsu(su)','冖|cobertura','Uma tampa 冖 sobre a marca 与. Prensar para transferir a imagem.','冖|tampa;与|dar','写真|shashin|foto;写す|utsusu|copiar;複写|fukusha|cópia','与,号'],
['者','pessoa (que faz)','mono',8,'シャ|sha','もの|mono','Um velho 耂 contando histórias 日. Sufixo para quem exerce um papel.','耂|velho;日|dizer','医者|isha|médico;若者|wakamono|jovem;学者|gakusha|acadêmico','都,暑'],
['借','pegar emprestado','kariru',10,'シャク|shaku','か(りる)|ka(riru)','亻|pessoa','Uma pessoa 亻 pedindo pelo passado 昔. Emprestado é o que se devolve depois.','亻|pessoa;昔|antigamente','借りる|kariru|pegar emprestado;借金|shakkin|dívida;間借り|magari|sublocação','昔,貸'],
['弱','fraco','yowai',10,'ジャク|jaku','よわ(い)|yowa(i)','弓|arco','Dois arcos 弓 já frouxos, com as penas caídas. Perdeu a força.','弓|arco;冫|penas','弱い|yowai|fraco;弱点|jakuten|ponto fraco;体弱|taijaku|fragilidade','強,引'],
['首','pescoço/chefe','kubi',9,'シュ|shu','くび|kubi','首|pescoço','Cabelo em cima e o rosto 自 embaixo. O pescoço que sustenta a cabeça.','丷|cabelo;自|rosto','首|kubi|pescoço;首相|shushō|primeiro-ministro;手首|tekubi|pulso','道,自'],
['主','dono/principal','nushi',5,'シュ|shu','ぬし|nushi;おも|omo','丶|ponto','Uma lamparina acesa com a chama 丶 no topo. Quem segura a luz manda.','丶|chama;王|rei','主人|shujin|dono, marido;主|nushi|dono;主義|shugi|doutrina','王,住'],
['秋','outono','aki',9,'シュウ|shū','あき|aki','禾|arroz','Arroz 禾 e fogo 火. Depois da colheita, queima-se a palha. É o outono.','禾|arroz;火|fogo','秋|aki|outono;秋分|shūbun|equinócio;晩秋|banshū|fim do outono','春,夏'],
['集','juntar','atsumeru',12,'シュウ|shū','あつ(める)|atsu(meru)','隹|pássaro','Um bando de pássaros 隹 pousado na árvore 木. Todo mundo reunido.','隹|pássaro;木|árvore','集める|atsumeru|colecionar;集合|shūgō|reunião;募集|boshū|recrutamento','進,雑'],
['習','aprender/praticar','narau',11,'シュウ|shū','なら(う)|nara(u)','羽|asas','O filhote batendo as asas 羽 sozinho 白 até aprender a voar. Repetir é aprender.','羽|asas;白|si mesmo','習う|narau|aprender;練習|renshū|treino;学習|gakushū|estudo','羽,曜'],
['終','terminar','owaru',11,'シュウ|shū','お(わる)|o(waru)','糸|fio','O fio 糸 chegando no inverno 冬, a última estação. Fim da linha.','糸|fio;冬|inverno','終わる|owaru|acabar;終電|shūden|último trem;最終|saishū|final','冬,始'],
['住','morar','sumu',7,'ジュウ|jū','す(む)|su(mu)','亻|pessoa','Uma pessoa 亻 que é dona 主 do lugar. Ali é a casa dela.','亻|pessoa;主|dono','住む|sumu|morar;住所|jūsho|endereço;住宅|jūtaku|residência','主,注'],
['重','pesado/repetir','omoi',9,'ジュウ|jū;チョウ|chō','おも(い)|omo(i);かさ(ねる)|kasa(neru)','里|vila','Uma pessoa carregando fardo em cima de fardo. Empilhou tanto que ficou pesado.','千|carga;里|vila','重い|omoi|pesado;体重|taijū|peso corporal;重要|jūyō|importante','里,動'],
['春','primavera','haru',9,'シュン|shun','はる|haru','日|sol','O sol 日 esquentando os brotos que rompem a terra. Chegou a primavera.','三|brotos;人|planta;日|sol','春|haru|primavera;春休み|haruyasumi|férias de primavera;青春|seishun|juventude','夏,秋'],
['所','lugar','tokoro',8,'ショ|sho','ところ|tokoro','戸|porta','Uma porta 戸 e um machado 斤. O ponto exato onde se corta a lenha.','戸|porta;斤|machado','所|tokoro|lugar;住所|jūsho|endereço;台所|daidokoro|cozinha','近,新'],
['暑','quente (clima)','atsui',12,'ショ|sho','あつ(い)|atsu(i)','日|sol','O sol 日 castigando a pessoa 者 embaixo. Calor de rachar.','日|sol;者|pessoa','暑い|atsui|quente;暑さ|atsusa|o calor;残暑|zansho|calor tardio','者,寒'],
['場','lugar/campo','ba',12,'ジョウ|jō','ば|ba','Terra 土 iluminada pelo sol 昜. O terreno aberto onde as coisas acontecem.','土|terra;昜|sol nascente','場所|basho|lugar;工場|kōjō|fábrica;会場|kaijō|local do evento','湯,陽'],
['乗','montar/subir em','noru',9,'ジョウ|jō','の(る)|no(ru)','丿|traço','Uma pessoa em cima da árvore, montada firme. Embarcar é subir em algo.','禾|planta;北|pernas','乗る|noru|embarcar;乗客|jōkyaku|passageiro;乗り換え|norikae|baldeação','垂,来'],
['色','cor','iro',6,'ショク|shoku;シキ|shiki','いろ|iro','色|cor','Uma pessoa curvada sobre outra, ilustrando o rubor do rosto. Daí veio cor.','⺈|pessoa;巴|corpo','色|iro|cor;顔色|kaoiro|aparência;景色|keshiki|paisagem','絶,危'],
['森','floresta','mori',12,'シン|shin','もり|mori','木|árvore','Três árvores 木 juntas. Uma é árvore, duas é bosque, três já é floresta.','木|árvore;木|árvore;木|árvore','森|mori|floresta;森林|shinrin|mata;青森|aomori|Aomori','林,木'],
['心','coração','kokoro',4,'シン|shin','こころ|kokoro','心|coração','O desenho do órgão com as três válvulas. Vira 忄 quando fica do lado.','','心|kokoro|coração;安心|anshin|alívio;中心|chūshin|centro','必,思'],
['親','pai e mãe/íntimo','oya',16,'シン|shin','おや|oya;した(しい)|shita(shii)','見|ver','Quem fica em pé 立 na árvore 木 olhando 見 você chegar. Isso é ser pai.','立|de pé;木|árvore;見|ver','親|oya|pai ou mãe;両親|ryōshin|os pais;親切|shinsetsu|gentil','新,見'],
['真','verdadeiro','shin',10,'シン|shin','ま|ma','目|olho','Um olho 目 firme sobre a base, olhando direto. Nada escondido.','十|reto;目|olho;八|base','真ん中|mannaka|bem no meio;写真|shashin|foto;真面目|majime|sério','直,県'],
['進','avançar','susumu',11,'シン|shin','すす(む)|susu(mu)','辶|caminhar','Um pássaro 隹 andando 辶. Pássaro não anda pra trás, só avança.','辶|estrada;隹|pássaro','進む|susumu|avançar;進学|shingaku|ingressar;前進|zenshin|avanço','集,近'],
['図','diagrama/mapa','zu',7,'ズ|zu;ト|to','はか(る)|haka(ru)','囗|cerca','Um terreno cercado 囗 com o traçado dentro. É a planta desenhada.','囗|moldura;冬|traçado','図書館|toshokan|biblioteca;地図|chizu|mapa;図|zu|figura','囲,国'],
['声','voz','koe',7,'セイ|sei','こえ|koe','士|samurai','Um instrumento de pedra pendurado, soando. O som que sai de dentro.','士|topo;尸|corpo','声|koe|voz;大声|ōgoe|voz alta;歌声|utagoe|canto','士,壳'],
['青','azul/verde','aoi',8,'セイ|sei','あお|ao','青|azul','Um broto 生 crescendo sobre a lua. O azul-esverdeado da natureza jovem.','生|broto;月|lua','青い|aoi|azul;青年|seinen|jovem;真っ青|massao|azul intenso','清,晴'],
['石','pedra','ishi',5,'セキ|seki','いし|ishi','石|pedra','Um pedregulho 口 caído ao pé do penhasco 厂.','厂|penhasco;口|pedra','石|ishi|pedra;宝石|hōseki|joia;石油|sekiyu|petróleo','右,岩'],
['切','cortar/importante','kiru',4,'セツ|setsu;サイ|sai','き(る)|ki(ru)','刀|faca','Uma faca 刀 ao lado da marca sete 七. Corte rápido e certeiro.','七|marca;刀|faca','切る|kiru|cortar;大切|taisetsu|importante;親切|shinsetsu|gentil','分,初'],
['説','explicar/teoria','setsu',14,'セツ|setsu','と(く)|to(ku)','言|palavra','Palavra 言 que alegra 兌 quem escuta. Uma boa explicação faz sorrir.','言|palavra;兌|alegrar','説明|setsumei|explicação;小説|shōsetsu|romance;伝説|densetsu|lenda','話,読'],
['雪','neve','yuki',11,'セツ|setsu','ゆき|yuki','雨|chuva','Chuva 雨 que dá pra varrer com a mão 彐. Isso só pode ser neve.','雨|chuva;彐|mão','雪|yuki|neve;大雪|ōyuki|nevasca;雪国|yukiguni|terra da neve','雨,電'],
['洗','lavar','arau',9,'セン|sen','あら(う)|ara(u)','氵|água','Água 氵 vindo antes 先 de tudo. Antes de usar, lava.','氵|água;先|antes','洗う|arau|lavar;洗濯|sentaku|lavar roupa;お手洗い|otearai|banheiro','先,流'],
['線','linha','sen',15,'セン|sen','','糸|fio','Fio 糸 correndo como nascente 泉. Uma linha contínua sem quebra.','糸|fio;泉|nascente','線|sen|linha;新幹線|shinkansen|trem-bala;電線|densen|fio elétrico','紙,細'],
['選','escolher','erabu',15,'セン|sen','えら(ぶ)|era(bu)','辶|caminhar','Andar 辶 comparando duas coisas 巽 antes de decidir. Escolher com calma.','辶|estrada;巽|comparar','選ぶ|erabu|escolher;選手|senshu|atleta;選挙|senkyo|eleição','進,遠'],
['走','correr','hashiru',7,'ソウ|sō','はし(る)|hashi(ru)','走|correr','Uma pessoa inclinada pra frente com o pé 足 no chão. Está disparando.','土|corpo;龰|pé','走る|hashiru|correr;競走|kyōsō|corrida;脱走|dassō|fuga','起,赤'],
['送','enviar','okuru',9,'ソウ|sō','おく(る)|oku(ru)','辶|caminhar','Andar 辶 levando o presente nas duas mãos 关. Entregar em mãos.','辶|estrada;关|presente','送る|okuru|enviar;放送|hōsō|transmissão;見送り|miokuri|despedida','進,運'],
['族','família/tribo','zoku',11,'ゾク|zoku','','方|bandeira','Uma bandeira 方 tremulando sobre a flecha 矢. O clã inteiro sob o mesmo estandarte.','方|bandeira;矢|flecha','家族|kazoku|família;民族|minzoku|etnia;水族館|suizokukan|aquário','旅,施'],
['太','grosso/gordo','futoi',4,'タイ|tai;タ|ta','ふと(い)|futo(i)','大|grande','O 大 (grande) com um pingo embaixo. Grande e ainda com barriga.','大|grande;丶|barriga','太い|futoi|grosso;太陽|taiyō|sol;丸太|maruta|tora de madeira','大,犬'],
['対','contra/par','tai',7,'タイ|tai;ツイ|tsui','','寸|medida','Duas coisas medidas 寸 uma contra a outra. Confronto ou par.','文|forma;寸|medida','反対|hantai|oposto;対する|taisuru|em relação a;一対|ittsui|um par','村,寺'],
['待','esperar','matsu',9,'タイ|tai','ま(つ)|ma(tsu)','彳|passo','Andar 彳 até o templo 寺 e sentar. No templo se espera com paciência.','彳|andar;寺|templo','待つ|matsu|esperar;期待|kitai|expectativa;待合室|machiaishitsu|sala de espera','持,時'],
['代','substituir/era','kawaru',5,'ダイ|dai;タイ|tai','か(わる)|ka(waru);よ|yo','亻|pessoa','Uma pessoa 亻 ocupando o posto de outra. Trocar de turno, trocar de era.','亻|pessoa;弋|estaca','時代|jidai|época;代わり|kawari|substituto;現代|gendai|atualidade','伐,他'],
['台','plataforma/base','dai',5,'ダイ|dai;タイ|tai','','口|boca','Uma boca 口 sobre um suporte. A base onde se apoia alguma coisa.','厶|suporte;口|base','台所|daidokoro|cozinha;台風|taifū|tufão;一台|ichidai|um veículo','始,治'],
['題','tema/título','dai',18,'ダイ|dai','','頁|cabeça','O que está certo 是 na cabeça 頁 do texto. O título vem no alto.','是|correto;頁|cabeça','問題|mondai|problema;題名|daimei|título;話題|wadai|assunto','顔,頭'],
['炭','carvão','sumi',9,'タン|tan','すみ|sumi','火|fogo','Debaixo do penhasco 厂 tem montanha 山 e fogo 火. Assim se faz o carvão.','厂|penhasco;山|montanha;火|fogo','炭|sumi|carvão;石炭|sekitan|carvão mineral;炭火|sumibi|brasa','岸,灰'],
['地','terra/lugar','chi',6,'チ|chi;ジ|ji','','土|terra','Terra 土 que se estende 也 até onde a vista alcança. O chão do mundo.','土|terra;也|estender','地図|chizu|mapa;地下|chika|subsolo;地震|jishin|terremoto','池,他'],
['知','saber','shiru',8,'チ|chi','し(る)|shi(ru)','矢|flecha','Uma flecha 矢 saindo da boca 口. Quem sabe responde direto e certeiro.','矢|flecha;口|boca','知る|shiru|saber;知識|chishiki|conhecimento;お知らせ|oshirase|aviso','和,短'],
['池','lagoa','ike',6,'チ|chi','いけ|ike','氵|água','Água 氵 que fica parada e se espalha 也. Uma lagoa no meio do jardim.','氵|água;也|espalhar','池|ike|lagoa;電池|denchi|pilha;古池|furuike|lago velho','地,他'],
['茶','chá','cha',9,'チャ|cha;サ|sa','','艹|planta','Uma planta 艹 abrigada 余 na encosta. Folha colhida para o chá.','艹|planta;余|abrigo','お茶|ocha|chá;喫茶店|kissaten|cafeteria;紅茶|kōcha|chá preto','菜,余'],
['着','vestir/chegar','kiru',12,'チャク|chaku','き(る)|ki(ru);つ(く)|tsu(ku)','目|olho','Ovelha 羊 e olho 目: vestir a lã e chegar bem agasalhado.','⺸|lã;目|olho','着る|kiru|vestir;到着|tōchaku|chegada;上着|uwagi|casaco','差,美'],
['注','despejar/nota','sosogu',8,'チュウ|chū','そそ(ぐ)|soso(gu)','氵|água','Água 氵 caindo direto no ponto principal 主. Despejar com atenção.','氵|água;主|principal','注意|chūi|atenção;注文|chūmon|pedido;注ぐ|sosogu|despejar','住,主'],
['調','investigar/ajustar','shiraberu',15,'チョウ|chō','しら(べる)|shira(beru)','言|palavra','Palavra 言 dando a volta 周 no assunto. Investigar por todos os lados.','言|palavra;周|volta','調べる|shiraberu|pesquisar;調子|chōshi|condição;体調|taichō|estado de saúde','週,語'],
['通','passar por','tooru',10,'ツウ|tsū','とお(る)|tō(ru);かよ(う)|kayo(u)','辶|caminhar','Andar 辶 pelo caminho que usa 用. A rua por onde se passa todo dia.','辶|estrada;甬|passagem','通る|tōru|passar;交通|kōtsū|trânsito;通学|tsūgaku|ir à escola','痛,道'],
['痛','doer','itai',12,'ツウ|tsū','いた(い)|ita(i)','疒|doença','Doença 疒 que atravessa 甬 o corpo todo. Isso dói.','疒|doença;甬|atravessar','痛い|itai|dolorido;頭痛|zutsū|dor de cabeça;腹痛|fukutsū|dor de barriga','通,病'],
['度','grau/vez','do',9,'ド|do','たび|tabi','广|telheiro','Debaixo do telheiro 广, a mão medindo palmo a palmo. Cada medida é um grau.','广|telheiro;廿|medida;又|mão','一度|ichido|uma vez;温度|ondo|temperatura;今度|kondo|da próxima','席,広'],
['答','responder','kotaeru',12,'トウ|tō','こた(える)|kota(eru)','竹|bambu','Uma tira de bambu 竹 que encaixa 合 na pergunta. A resposta certa.','竹|bambu;合|encaixar','答える|kotaeru|responder;答え|kotae|resposta;返答|hentō|réplica','合,等'],
['冬','inverno','fuyu',5,'トウ|tō','ふゆ|fuyu','冫|gelo','Um pé arrastando 夂 com dois pingos de gelo 冫 embaixo. Chegou o inverno.','夂|pé;冫|gelo','冬|fuyu|inverno;冬休み|fuyuyasumi|férias de inverno;真冬|mafuyu|auge do inverno','夏,終'],
['登','subir/escalar','noboru',12,'トウ|tō;ト|to','のぼ(る)|nobo(ru)','癶|pés','Dois pés 癶 subindo até a mesa alta 豆. Escalar degrau por degrau.','癶|pés;豆|suporte','登る|noboru|escalar;登山|tozan|montanhismo;登校|tōkō|ir à escola','発,豆'],
['等','igual/etc','tō',12,'トウ|tō','ひと(しい)|hito(shii)','竹|bambu','Tiras de bambu 竹 cortadas no mesmo tamanho no templo 寺. Todas iguais.','竹|bambu;寺|templo','等しい|hitoshii|igual;一等|ittō|primeiro lugar;平等|byōdō|igualdade','答,待'],
['動','mover','ugoku',11,'ドウ|dō','うご(く)|ugo(ku)','力|força','Força 力 aplicada em algo pesado 重. Assim a coisa se move.','重|pesado;力|força','動く|ugoku|mover-se;運動|undō|exercício;自動|jidō|automático','重,働'],
['同','igual/mesmo','onaji',6,'ドウ|dō','おな(じ)|ona(ji)','口|boca','Todas as bocas 口 debaixo da mesma tampa, dizendo a mesma coisa.','冂|tampa;一|linha;口|boca','同じ|onaji|igual;同時|dōji|ao mesmo tempo;合同|gōdō|conjunto','司,円'],
['堂','salão','dō',11,'ドウ|dō','','土|terra','Um prédio nobre 尚 erguido no terreno 土. O grande salão.','尚|nobre;土|terra','食堂|shokudō|refeitório;講堂|kōdō|auditório;本堂|hondō|salão principal','党,常'],
['特','especial','toku',10,'トク|toku','','牛|vaca','O boi 牛 reservado ao templo 寺. Aquele é o especial do rebanho.','牛|boi;寺|templo','特別|tokubetsu|especial;特急|tokkyū|expresso;特に|tokuni|especialmente','待,持'],
['独','sozinho','doku',9,'ドク|doku','ひと(り)|hito(ri)','犭|animal','Um bicho 犭 que anda separado do bando. Vive por conta própria.','犭|animal;虫|inseto','独り|hitori|sozinho;独立|dokuritsu|independência;独学|dokugaku|autodidata','狭,虫'],
['届','entregar/chegar','todoku',8,'','とど(く)|todo(ku);とど(ける)|todo(keru)','尸|abrigo','Uma folha 由 saindo pela porta 尸. O aviso chegou ao destino.','尸|porta;由|motivo','届く|todoku|chegar;届ける|todokeru|entregar;届け出|todokede|notificação','居,由'],
['働','trabalhar','hataraku',13,'ドウ|dō','はたら(く)|hatara(ku)','亻|pessoa','Uma pessoa 亻 em movimento 動. Kanji criado no Japão para o trabalho.','亻|pessoa;動|mover','働く|hataraku|trabalhar;労働|rōdō|trabalho;共働き|tomobataraki|casal que trabalha','動,重'],
['飯','comida/arroz','meshi',12,'ハン|han','めし|meshi','飠|comida','Comida 飠 servida de volta 反 no prato. A refeição pronta.','飠|comida;反|voltar','ご飯|gohan|arroz, refeição;朝ご飯|asagohan|café da manhã;夕飯|yūhan|jantar','飲,館'],
['野','campo aberto','no',11,'ヤ|ya','の|no','里|vila','A vila 里 e tudo que se estende 予 além dela. O campo sem cerca.','里|vila;予|estender','野菜|yasai|verdura;野球|yakyū|beisebol;分野|bunya|área','里,予'],
['発','partir/emitir','hatsu',9,'ハツ|hatsu','','癶|pés','Dois pés 癶 se soltando do chão. É a hora da partida.','癶|pés;弓|arco','発音|hatsuon|pronúncia;出発|shuppatsu|partida;発見|hakken|descoberta','登,廃'],
['反','contra/inverter','han',4,'ハン|han','そ(る)|so(ru)','又|mão','Uma mão 又 virando o penhasco 厂 do avesso. Fazer o contrário.','厂|penhasco;又|mão','反対|hantai|oposição;反応|hannō|reação;違反|ihan|infração','友,飯'],
['飛','voar','tobu',9,'ヒ|hi','と(ぶ)|to(bu)','飛|voar','Um pássaro com as duas asas abertas subindo. Puro movimento no ar.','','飛ぶ|tobu|voar;飛行機|hikōki|avião;飛び出す|tobidasu|sair correndo','非,升'],
['病','doença','byō',10,'ビョウ|byō','やまい|yamai','疒|doença','Alguém deitado na cama 疒 encostado na parede 丙. Está doente.','疒|cama;丙|terceiro','病気|byōki|doença;病院|byōin|hospital;急病|kyūbyō|mal súbito','痛,疲'],
['品','mercadoria','shina',9,'ヒン|hin','しな|shina','口|boca','Três caixas 口 empilhadas no balcão. Os produtos à venda.','口|caixa;口|caixa;口|caixa','品物|shinamono|mercadoria;作品|sakuhin|obra;食品|shokuhin|alimento','器,晶'],
['風','vento','kaze',9,'フウ|fū','かぜ|kaze','風|vento','Uma vela inflada com um inseto 虫 sendo levado dentro. O vento carrega tudo.','几|vela;虫|inseto','風|kaze|vento;台風|taifū|tufão;風呂|furo|banho','凡,鳳'],
['服','roupa','fuku',8,'フク|fuku','','月|corpo','O corpo 月 e uma mão vestindo. A roupa que se põe.','月|corpo;卩|ajoelhar;又|mão','服|fuku|roupa;洋服|yōfuku|roupa ocidental;制服|seifuku|uniforme','報,朋'],
['仏','Buda/França','hotoke',4,'ブツ|butsu','ほとけ|hotoke','亻|pessoa','Uma pessoa 亻 que se recolhe 厶. O Buda em meditação.','亻|pessoa;厶|recolher','仏|hotoke|Buda;仏教|bukkyō|budismo;大仏|daibutsu|grande Buda','私,払'],
['文','texto/escrita','bun',4,'ブン|bun;モン|mon','ふみ|fumi','文|escrita','Um padrão desenhado no peito, os primeiros sinais escritos.','','文|bun|frase;文化|bunka|cultura;作文|sakubun|redação','父,交'],
['別','separar/outro','betsu',7,'ベツ|betsu','わか(れる)|waka(reru)','刂|faca','Uma faca 刂 separando os ossos 另. Dividir em partes distintas.','另|separar;刂|faca','別|betsu|separado;特別|tokubetsu|especial;別れる|wakareru|separar-se','列,例'],
['勉','esforço/estudo','ben',10,'ベン|ben','','力|força','Escapar 免 usando força 力. Estudar é se esforçar para sair da ignorância.','免|escapar;力|força','勉強|benkyō|estudo;勤勉|kinben|diligente;勉学|bengaku|estudos','免,動'],
['方','direção/modo','hō',4,'ホウ|hō','かた|kata','方|direção','Um arado apontando para um lado. Indica direção, jeito e também pessoa com respeito.','','方|kata|pessoa, modo;夕方|yūgata|entardecer;方法|hōhō|método','万,族'],
['味','sabor','aji',8,'ミ|mi','あじ|aji','口|boca','Boca 口 experimentando o que ainda não 未 conhece. Descobrir o sabor.','口|boca;未|ainda não','味|aji|sabor;意味|imi|significado;趣味|shumi|hobby','妹,未'],
['民','povo','min',5,'ミン|min','たみ|tami','氏|clã','O povo comum, gente de todos os clãs 氏 reunida.','','国民|kokumin|cidadãos;民族|minzoku|etnia;住民|jūmin|moradores','氏,眠'],
['妙','curioso/primoroso','myō',7,'ミョウ|myō','','女|mulher','Mulher 女 e pouco 少. Aquele detalhe pequeno que fica encantador.','女|mulher;少|pouco','妙|myō|curioso;微妙|bimyō|sutil;絶妙|zetsumyō|primoroso','少,砂'],
['門','portão','mon',8,'モン|mon','かど|kado','門|portão','Duas folhas de porta lado a lado. O portão grande da entrada.','','門|mon|portão;専門|senmon|especialidade;入門|nyūmon|iniciação','間,聞'],
['問','perguntar','tou',11,'モン|mon','と(う)|to(u)','口|boca','Uma boca 口 na porta 門 chamando. Bater e perguntar quem está.','門|portão;口|boca','問題|mondai|problema;質問|shitsumon|pergunta;訪問|hōmon|visita','聞,間'],
['役','função/papel','yaku',7,'ヤク|yaku;エキ|eki','','彳|passo','Andar 彳 empunhando a lança 殳. Cada soldado com sua função.','彳|andar;殳|lança','役|yaku|papel;役所|yakusho|repartição;役に立つ|yakunitatsu|ser útil','投,設'],
['薬','remédio','kusuri',16,'ヤク|yaku','くすり|kusuri','艹|planta','Planta 艹 que traz alegria 楽. O que cura deixa a gente bem.','艹|planta;楽|alegria','薬|kusuri|remédio;薬局|yakkyoku|farmácia;目薬|megusuri|colírio','楽,菜'],
['容','conter/aparência','yō',10,'ヨウ|yō','','宀|telhado','Debaixo do telhado 宀 cabe um vale 谷 inteiro. O que comporta tudo.','宀|telhado;谷|vale','容器|yōki|recipiente;内容|naiyō|conteúdo;美容|biyō|estética','谷,客'],
['様','maneira/senhor','sama',14,'ヨウ|yō','さま|sama','木|árvore','Árvore 木 com a ovelha 羊 e a água. Indica o jeito das coisas, e vira tratamento formal.','木|árvore;羊|ovelha;水|água','～様|sama|Sr., Sra.;様子|yōsu|situação;同様|dōyō|do mesmo modo','業,義'],
['理','razão/lógica','ri',11,'リ|ri','','王|jade','As veias do jade 王 na vila 里. Seguir a linha natural é a lógica.','王|jade;里|vila','料理|ryōri|culinária;無理|muri|impossível;理由|riyū|motivo','里,埋'],
['留','permanecer','ryū',10,'リュウ|ryū;ル|ru','と(める)|to(meru)','田|campo','Ficar preso no campo 田. Quem permanece não sai do lugar.','卯|prender;田|campo','留学|ryūgaku|intercâmbio;留守|rusu|ausência;書留|kakitome|carta registrada','田,略'],
['旅','viagem','tabi',10,'リョ|ryo','たび|tabi','方|bandeira','Um grupo marchando sob a bandeira 方. Viajar em comitiva.','方|bandeira;氏|gente','旅|tabi|viagem;旅行|ryokō|viagem;旅館|ryokan|pousada','族,施'],
['両','ambos','ryō',6,'リョウ|ryō','','一|linha','Uma carroça vista de frente com as duas rodas iguais. Os dois lados.','一|eixo;冂|carroça','両方|ryōhō|ambos;両親|ryōshin|os pais;両手|ryōte|as duas mãos','雨,満'],
['料','taxa/ingrediente','ryō',10,'リョウ|ryō','','斗|medida','Arroz 米 sendo medido na concha 斗. Pesar o ingrediente e cobrar por ele.','米|arroz;斗|medida','料理|ryōri|culinária;料金|ryōkin|tarifa;無料|muryō|grátis','科,斜'],
['緑','verde','midori',14,'リョク|ryoku','みどり|midori','糸|fio','O fio 糸 tingido com o suco da planta. Aquele verde vivo do tecido novo.','糸|fio;彔|extrair','緑|midori|verde;緑色|midoriiro|cor verde;新緑|shinryoku|verde novo','録,線'],
['糸','fio','ito',6,'シ|shi','いと|ito','糸|fio','Um novelo de linha torcido, com as pontas soltas embaixo.','','糸|ito|fio;毛糸|keito|lã;糸口|itoguchi|pista','系,紙'],
['約','promessa/cerca de','yaku',9,'ヤク|yaku','','糸|fio','Um fio 糸 amarrado com a concha 勺 como selo. O nó do acordo.','糸|fio;勺|concha','約束|yakusoku|promessa;予約|yoyaku|reserva;約|yaku|aproximadamente','紙,的'],
['束','maço/amarrar','taba',7,'ソク|soku','たば|taba','木|árvore','Uma árvore 木 com a corda 口 apertando o meio. Um feixe amarrado.','木|madeira;口|corda','約束|yakusoku|promessa;花束|hanataba|buquê;束|taba|maço','東,速'],
['細','fino/detalhado','hosoi',11,'サイ|sai','ほそ(い)|hoso(i);こま(かい)|koma(kai)','糸|fio','O fio 糸 tão fino quanto a trama do campo 田. Detalhe minúsculo.','糸|fio;田|trama','細い|hosoi|fino;詳細|shōsai|detalhes;細かい|komakai|miúdo','紙,線']
].map(xn);

/* ── JLPT N3 ── */
const x3=a=>{const[c,m,qr,st,on,kun,rad,sty,w]=a;
 const mm=m.split('/'),i=rad.indexOf('|');
 const rd=s=>s?s.split(';').map(x=>{const[k,r]=x.split('|');return{k,r};}):[];
 return{c,m:mm,m2:mm.slice(0,2).join(' / '),qr,s:st,g:0,jl:'N3',on:rd(on),kun:rd(kun),
  rad:{c:rad.slice(0,i),m:rad.slice(i+1)},sty,p:[],
  w:w.split(';').map(x=>{const[q,z,y]=x.split('|');return{w:q,r:z,m:y};}),sim:[]};};
const N3X=[
['政','política/governo','sei',9,'セイ|sei','','攵|bater','Correto 正 + vara 攵. Governar é corrigir na base da insistência.','政治|seiji|política;政府|seifu|governo'],
['議','debate/assembleia','gi',20,'ギ|gi','','言|palavra','Palavra 言 + justo 義. Discutir até chegar no que é justo.','会議|kaigi|reunião;議論|giron|debate'],
['連','ligar/levar junto','ren',10,'レン|ren','つら(なる)|tsura(naru)','辶|caminhar','Um carro 車 andando 辶 atrás do outro. Comboio, fila, conexão.','連絡|renraku|contato;連休|renkyū|feriadão'],
['部','parte/setor','bu',11,'ブ|bu','','阝|vila','Uma vila 阝 dividida em pedaços. Cada pedaço é um departamento.','部屋|heya|quarto;全部|zenbu|tudo'],
['相','mútuo/aparência','sō',9,'ソウ|sō;ショウ|shō','あい|ai','目|olho','Um olho 目 espiando por trás da árvore 木. Dois se olhando.','相手|aite|parceiro;相談|sōdan|consulta'],
['定','definir/fixo','tei',8,'テイ|tei','さだ(める)|sada(meru)','宀|telhado','Debaixo do telhado 宀, o que está correto 正 fica decidido.','予定|yotei|programação;決定|kettei|decisão'],
['米','arroz/EUA','kome',6,'ベイ|bei;マイ|mai','こめ|kome','米|arroz','Grãos espalhados nos quatro cantos da espiga. Também virou sigla de América.','米|kome|arroz cru;南米|nanbei|América do Sul'],
['実','fruto/real','jitsu',8,'ジツ|jitsu','み|mi','宀|telhado','Debaixo do telhado 宀 a colheita chegou. O que é concreto, real.','実は|jitsuwa|na verdade;実際|jissai|na prática'],
['関','relação/barreira','kan',14,'カン|kan','せき|seki','門|portão','Um portão 門 com a tranca. Quem passa se relaciona com quem controla.','関係|kankei|relação;玄関|genkan|entrada'],
['決','decidir','kimeru',7,'ケツ|ketsu','き(める)|ki(meru)','氵|água','Água 氵 rompendo o dique. Decidido: não tem mais volta.','決める|kimeru|decidir;解決|kaiketsu|solução'],
['全','tudo/inteiro','zen',6,'ゼン|zen','まった(く)|matta(ku)','入|entrar','Um telhado cobrindo o rei 王. Tudo debaixo do mesmo teto.','全部|zenbu|tudo;安全|anzen|segurança'],
['表','superfície/expressar','omote',8,'ヒョウ|hyō','おもて|omote;あらわ(す)|arawa(su)','衣|roupa','A roupa 衣 é o lado de fora que todos veem. O que se mostra.','表|omote|frente;発表|happyō|apresentação'],
['戦','guerra/lutar','ikusa',13,'セン|sen','たたか(う)|tataka(u)','戈|lança','Uma lança 戈 e um escudo 単. Isso é guerra.','戦争|sensō|guerra;試合|sen|batalha'],
['経','passar por/gerir','kei',11,'ケイ|kei','へ(る)|he(ru)','糸|fio','O fio 糸 da urdidura atravessando o tear. O tempo que passa.','経験|keiken|experiência;経済|keizai|economia'],
['最','o mais','mottomo',12,'サイ|sai','もっと(も)|motto(mo)','曰|dizer','Pegar 取 o que está no topo 曰. O melhor de todos.','最近|saikin|recentemente;最高|saikō|o máximo'],
['現','atual/aparecer','gen',11,'ゲン|gen','あらわ(れる)|arawa(reru)','王|jade','O jade 王 sendo visto 見 agora. Aparecer no presente.','現在|genzai|atualmente;表現|hyōgen|expressão'],
['化','mudar/transformar','ka',4,'カ|ka','ば(ける)|ba(keru)','匕|colher','Uma pessoa 亻 de pé e outra de cabeça pra baixo 匕. Virou outra coisa.','文化|bunka|cultura;変化|henka|mudança'],
['当','acertar/este','ataru',6,'トウ|tō','あ(たる)|a(taru)','小|pequeno','A flecha bateu bem no ponto. Acertar em cheio.','本当|hontō|verdade;当時|tōji|naquela época'],
['法','lei/método','hō',8,'ホウ|hō','','氵|água','Água 氵 que corre e vai embora 去. A lei flui igual para todos.','方法|hōhō|método;法律|hōritsu|lei'],
['性','natureza/gênero','sei',8,'セイ|sei;ショウ|shō','','忄|coração','Coração 忄 com que se nasce 生. O jeito que a pessoa é.','性格|seikaku|personalidade;女性|josei|mulher'],
['的','alvo/-al','teki',8,'テキ|teki','まと|mato','白|branco','Um alvo branco 白 com a concha 勺 mirando. Vira sufixo de adjetivo.','目的|mokuteki|objetivo;一般的|ippanteki|geral'],
['要','necessário/resumo','yō',9,'ヨウ|yō','い(る)|i(ru)','襾|cobrir','Uma mulher 女 com as mãos na cintura 襾. A parte essencial.','必要|hitsuyō|necessário;重要|jūyō|importante'],
['制','sistema/controlar','sei',8,'セイ|sei','','刂|faca','Cortar 刂 os galhos até dar forma. Impor uma regra.','制度|seido|sistema;強制|kyōsei|imposição'],
['治','governar/curar','osameru',8,'ジ|ji;チ|chi','なお(る)|nao(ru)','氵|água','Controlar a água 氵 da enchente. Governar e também curar.','政治|seiji|política;治る|naoru|sarar'],
['務','dever/tarefa','mu',11,'ム|mu','つと(める)|tsuto(meru)','力|força','Força 力 empregada na obrigação. O trabalho que cabe a você.','事務所|jimusho|escritório;義務|gimu|dever'],
['成','tornar-se/formar','naru',6,'セイ|sei','な(る)|na(ru)','戈|lança','A lança 戈 terminada de forjar. Ficou pronto, virou algo.','成功|seikō|sucesso;成長|seichō|crescimento'],
['期','período/prazo','ki',12,'キ|ki','','月|lua','A lua 月 completando o ciclo. O prazo de sempre.','期間|kikan|período;学期|gakki|semestre'],
['取','pegar/tomar','toru',8,'シュ|shu','と(る)|to(ru)','又|mão','Uma mão 又 agarrando a orelha 耳. Antigamente se contava inimigo assim.','取る|toru|pegar;取材|shuzai|apuração'],
['都','capital/metrópole','miyako',11,'ト|to;ツ|tsu','みやこ|miyako','阝|vila','A vila 阝 onde tudo se reúne 者. A capital.','東京都|tōkyōto|Tóquio;都合|tsugō|conveniência'],
['和','harmonia/japonês','wa',8,'ワ|wa','やわ(らぐ)|yawa(ragu)','口|boca','Arroz 禾 na boca 口 de todo mundo. Barriga cheia, paz na casa.','平和|heiwa|paz;和食|washoku|comida japonesa'],
['機','máquina/oportunidade','ki',16,'キ|ki','はた|hata','木|árvore','Um tear de madeira 木 cheio de fios. A primeira máquina.','機会|kikai|oportunidade;飛行機|hikōki|avião'],
['平','plano/paz','taira',5,'ヘイ|hei','たい(ら)|tai(ra)','干|escudo','Uma balança equilibrada, nivelada. Nada mais alto que o outro.','平和|heiwa|paz;平日|heijitsu|dia útil'],
['加','somar/adicionar','kuwaeru',5,'カ|ka','くわ(える)|kuwa(eru)','力|força','Força 力 mais boca 口. Somar esforço e palavra.','参加|sanka|participação;増加|zōka|aumento'],
['受','receber','ukeru',8,'ジュ|ju','う(ける)|u(keru)','又|mão','Uma mão entregando de cima e outra 又 recebendo embaixo.','受ける|ukeru|receber;受付|uketsuke|recepção'],
['続','continuar','tsuzuku',13,'ゾク|zoku','つづ(く)|tsuzu(ku)','糸|fio','O fio 糸 sendo vendido 売 em rolo sem fim. Não acaba.','続く|tsuzuku|continuar;連続|renzoku|sequência'],
['数','número/contar','kazu',13,'スウ|sū','かず|kazu;かぞ(える)|kazo(eru)','攵|bater','Bater 攵 no ábaco até fechar a conta.','数|kazu|número;数学|sūgaku|matemática'],
['記','anotar/registro','ki',10,'キ|ki','しる(す)|shiru(su)','言|palavra','Palavra 言 amarrada em si mesma 己. O que fica registrado.','日記|nikki|diário;記事|kiji|matéria'],
['初','primeiro/começo','hajime',7,'ショ|sho','はじ(め)|haji(me);はつ|hatsu','刀|faca','Roupa 衤 e faca 刀. O primeiro corte do tecido.','最初|saisho|o começo;初めて|hajimete|pela primeira vez'],
['指','dedo/apontar','yubi',9,'シ|shi','ゆび|yubi;さ(す)|sa(su)','扌|mão','A mão 扌 com sabor 旨 de apontar. O dedo indicador.','指|yubi|dedo;指導|shidō|orientação'],
['権','direito/poder','ken',15,'ケン|ken','','木|árvore','Uma árvore 木 com um pássaro nobre. Quem está no alto tem poder.','権利|kenri|direito;人権|jinken|direitos humanos'],
['支','apoiar/ramo','sasaeru',4,'シ|shi','ささ(える)|sasa(eru)','支|ramo','Uma mão 又 segurando o galho 十. Apoiar de baixo.','支払い|shiharai|pagamento;支店|shiten|filial'],
['点','ponto/nota','ten',9,'テン|ten','','灬|fogo','Uma fagulha de fogo 灬 na adivinhação 占. Um pontinho.','点|ten|ponto;地点|chiten|local'],
['報','informar/retribuir','hō',12,'ホウ|hō','','土|terra','A mão que devolve o que recebeu. Dar notícia de volta.','情報|jōhō|informação;報告|hōkoku|relatório'],
['済','terminar/pagar','sumu',11,'サイ|sai','す(む)|su(mu)','氵|água','Atravessar a água 氵 e chegar do outro lado. Está resolvido.','経済|keizai|economia;済む|sumu|terminar'],
['活','vida/ativo','katsu',9,'カツ|katsu','','氵|água','Água 氵 na língua 舌. Com água a gente vive.','生活|seikatsu|vida cotidiana;活動|katsudō|atividade'],
['原','origem/campo','hara',10,'ゲン|gen','はら|hara','厂|penhasco','Uma nascente brotando no pé do penhasco 厂. A origem da água.','原因|gen-in|causa;高原|kōgen|planalto'],
['共','junto/comum','tomo',6,'キョウ|kyō','とも|tomo','八|separar','Duas mãos erguendo a mesma coisa. Fazer junto.','共通|kyōtsū|em comum;公共|kōkyō|público'],
['得','ganhar/obter','eru',11,'トク|toku','え(る)|e(ru)','彳|passo','Andar 彳 e achar uma concha 貝 no caminho. Lucro.','得る|eru|obter;お得|otoku|vantajoso'],
['解','resolver/soltar','tokeru',13,'カイ|kai','と(く)|to(ku)','角|chifre','Uma faca 刀 separando o chifre 角 do boi 牛. Desmontar o problema.','解決|kaiketsu|solução;理解|rikai|compreensão'],
['交','cruzar/trocar','majiru',6,'コウ|kō','ま(じる)|ma(jiru)','亠|topo','Uma pessoa com as pernas cruzadas. Onde as coisas se encontram.','交通|kōtsū|trânsito;交換|kōkan|troca'],
['資','recurso/capital','shi',13,'シ|shi','','貝|concha','Dinheiro 貝 guardado por sua vez 次. O capital.','資料|shiryō|material;投資|tōshi|investimento'],
['予','antecipar/prever','yo',4,'ヨ|yo','','亅|gancho','Um gancho estendido pra frente. Adiantar-se ao que vem.','予定|yotei|plano;予約|yoyaku|reserva'],
['向','virar-se para','muku',6,'コウ|kō','む(く)|mu(ku)','口|boca','Uma janela 口 na parede. A casa está virada pra esse lado.','向こう|mukō|lá adiante;方向|hōkō|direção'],
['際','ocasião/beira','sai',14,'サイ|sai','きわ|kiwa','阝|colina','O limite 阝 onde dois territórios se tocam. O momento exato.','国際|kokusai|internacional;実際|jissai|na prática'],
['勝','vencer','katsu',12,'ショウ|shō','か(つ)|ka(tsu)','力|força','Força 力 aplicada até a vitória.','勝つ|katsu|vencer;優勝|yūshō|campeonato'],
['面','rosto/superfície','men',9,'メン|men','おも|omo','面|rosto','Uma máscara com o olho 目 no meio. A face das coisas.','面白い|omoshiroi|interessante;場面|bamen|cena'],
['告','avisar','tsugeru',7,'コク|koku','つ(げる)|tsu(geru)','口|boca','Boi 牛 e boca 口. Anunciar em voz alta o que vai acontecer.','広告|kōkoku|anúncio;報告|hōkoku|relatório'],
['判','julgar/carimbo','han',7,'ハン|han','','刂|faca','Cortar 刂 a metade 半. Separar o certo do errado.','判断|handan|julgamento;裁判|saiban|processo'],
['認','reconhecer','mitomeru',14,'ニン|nin','みと(める)|mito(meru)','言|palavra','Palavra 言 que suporta 忍. Admitir que é verdade.','認める|mitomeru|reconhecer;確認|kakunin|confirmação'],
['参','participar/ir','san',8,'サン|san','まい(る)|mai(ru)','厶|braço','Três brilhos sobre a pessoa. Comparecer e se juntar.','参加|sanka|participação;参考|sankō|referência'],
['利','vantagem/lucro','ri',7,'リ|ri','き(く)|ki(ku)','刂|faca','Cortar 刂 o arroz 禾 na hora certa. Aí vem o lucro.','便利|benri|prático;利用|riyō|uso'],
['組','montar/grupo','kumi',11,'ソ|so','く(む)|ku(mu);くみ|kumi','糸|fio','Fios 糸 trançados juntos. Formar um conjunto.','組む|kumu|montar;番組|bangumi|programa'],
['信','confiar/sinal','shin',9,'シン|shin','','亻|pessoa','Uma pessoa 亻 e sua palavra 言. Quem cumpre o que fala.','信じる|shinjiru|acreditar;自信|jishin|autoconfiança'],
['在','existir/estar','aru',6,'ザイ|zai','あ(る)|a(ru)','土|terra','Um broto firmado na terra 土. Está ali.','現在|genzai|agora;存在|sonzai|existência'],
['件','caso/assunto','ken',6,'ケン|ken','','亻|pessoa','Pessoa 亻 e boi 牛. Cada bicho contado é um caso.','事件|jiken|incidente;条件|jōken|condição'],
['側','lado','gawa',11,'ソク|soku','がわ|gawa','亻|pessoa','A pessoa 亻 que fica ao lado da regra 則.','右側|migigawa|lado direito;側|gawa|lado'],
['任','encarregar','makaseru',6,'ニン|nin','まか(せる)|maka(seru)','亻|pessoa','Uma pessoa 亻 carregando o fardo. Deixar nas mãos dela.','責任|sekinin|responsabilidade;任せる|makaseru|delegar'],
['求','buscar/pedir','motomeru',7,'キュウ|kyū','もと(める)|moto(meru)','水|água','Um casaco de pele estendido. Todo mundo quer um.','求める|motomeru|buscar;要求|yōkyū|exigência'],
['次','próximo/seguinte','tsugi',6,'ジ|ji;シ|shi','つぎ|tsugi','欠|falta','Alguém bocejando 欠 na fila. O próximo, por favor.','次|tsugi|próximo;目次|mokuji|índice'],
['昨','ontem/passado','saku',9,'サク|saku','','日|sol','O dia 日 que já foi cortado fora. Ontem.','昨日|kinō|ontem;昨年|sakunen|ano passado'],
['論','teoria/debate','ron',15,'ロン|ron','','言|palavra','Palavras 言 organizadas em ordem. Um argumento.','議論|giron|debate;理論|riron|teoria'],
['官','funcionário/órgão','kan',8,'カン|kan','','宀|telhado','Debaixo do telhado 宀 do governo. Quem trabalha ali.','警官|keikan|policial;器官|kikan|órgão'],
['増','aumentar','fueru',14,'ゾウ|zō','ふ(える)|fu(eru)','土|terra','Empilhar terra 土 em camadas. Vai crescendo.','増える|fueru|aumentar;増加|zōka|aumento'],
['係','relação/encarregado','kakari',9,'ケイ|kei','かかり|kakari','亻|pessoa','Uma pessoa 亻 amarrada por um fio 系 à tarefa.','関係|kankei|relação;係|kakari|responsável'],
['感','sentir','kanjiru',13,'カン|kan','','心|coração','Tudo 咸 batendo no coração 心. Sentir de verdade.','感じる|kanjiru|sentir;感謝|kansha|gratidão'],
['情','emoção/situação','jō',11,'ジョウ|jō','なさ(け)|nasa(ke)','忄|coração','Coração 忄 no azul 青 da juventude. Sentimento puro.','情報|jōhō|informação;愛情|aijō|afeto'],
['投','arremessar','nageru',7,'トウ|tō','な(げる)|na(geru)','扌|mão','Mão 扌 empunhando a lança 殳 e jogando longe.','投げる|nageru|arremessar;投票|tōhyō|votação'],
['示','mostrar/indicar','shimesu',5,'ジ|ji;シ|shi','しめ(す)|shime(su)','示|altar','Um altar com a oferenda à vista de todos.','示す|shimesu|mostrar;表示|hyōji|exibição'],
['変','mudar/estranho','kawaru',9,'ヘン|hen','か(わる)|ka(waru)','夂|pé','Algo que já não é o que era. Mudou, ficou esquisito.','変わる|kawaru|mudar;大変|taihen|difícil'],
['打','bater/acertar','utsu',5,'ダ|da','う(つ)|u(tsu)','扌|mão','Mão 扌 martelando o prego 丁.','打つ|utsu|bater;打ち合わせ|uchiawase|reunião'],
['直','direto/consertar','naosu',8,'チョク|choku;ジキ|jiki','なお(す)|nao(su)','目|olho','Dez 十 olhos 目 conferindo se está reto.','直す|naosu|consertar;正直|shōjiki|honesto'],
['式','estilo/cerimônia','shiki',6,'シキ|shiki','','弋|estaca','Um modelo fixado na estaca 弋. O jeito certo de fazer.','形式|keishiki|formato;結婚式|kekkonshiki|casamento'],
['確','certo/confirmar','tashika',15,'カク|kaku','たし(か)|tashi(ka)','石|pedra','Firme como pedra 石. Não tem dúvida.','確認|kakunin|confirmação;正確|seikaku|preciso'],
['果','fruto/resultado','hatasu',8,'カ|ka','は(たす)|ha(tasu)','木|árvore','Uma árvore 木 carregada de frutos 田. O resultado.','結果|kekka|resultado;果物|kudamono|fruta'],
['必','sem falta','kanarazu',5,'ヒツ|hitsu','かなら(ず)|kanara(zu)','心|coração','O coração 心 atravessado pela decisão. É obrigatório.','必要|hitsuyō|necessário;必ず|kanarazu|com certeza'],
['演','atuar/apresentar','en',14,'エン|en','','氵|água','A água 氵 correndo longa. O espetáculo que se estende.','演奏|ensō|execução;講演|kōen|palestra'],
['歳','ano de idade','sai',13,'サイ|sai','','止|parar','Cada ano que o pé 止 completa. Conta a idade.','～歳|sai|anos de idade;お歳暮|oseibo|presente de fim de ano'],
['争','disputar','arasou',6,'ソウ|sō','あらそ(う)|araso(u)','亅|gancho','Duas mãos puxando a mesma coisa. Briga.','戦争|sensō|guerra;競争|kyōsō|competição'],
['談','conversa','dan',15,'ダン|dan','','言|palavra','Palavra 言 com fogo 炎. Conversa em volta da fogueira.','相談|sōdan|consulta;冗談|jōdan|piada'],
['能','capacidade/poder','nō',10,'ノウ|nō','','月|carne','O urso, bicho forte e habilidoso. Ter capacidade.','可能|kanō|possível;才能|sainō|talento'],
['位','posição/lugar','kurai',7,'イ|i','くらい|kurai','亻|pessoa','A pessoa 亻 no lugar onde deve ficar 立.','一位|ichii|primeiro lugar;地位|chii|posição'],
['置','colocar/deixar','oku',13,'チ|chi','お(く)|o(ku)','罒|rede','Pôr a rede 罒 direto 直 no lugar.','置く|oku|colocar;位置|ichi|posição'],
['流','fluir','nagareru',10,'リュウ|ryū','なが(れる)|naga(reru)','氵|água','Água 氵 descendo com a criança boiando. Correnteza.','流れる|nagareru|fluir;交流|kōryū|intercâmbio'],
['格','padrão/status','kaku',10,'カク|kaku','','木|árvore','A madeira 木 cortada na medida certa. O padrão.','価格|kakaku|preço;合格|gōkaku|aprovação'],
['疑','duvidar','utagau',14,'ギ|gi','うたが(う)|utaga(u)','疋|pé','Alguém parado na encruzilhada sem saber ir. Dúvida.','疑う|utagau|duvidar;質疑|shitsugi|questionamento'],
['過','passar/exceder','sugiru',12,'カ|ka','す(ぎる)|su(giru)','辶|caminhar','Andar 辶 além do ponto. Passou demais.','過ぎる|sugiru|exceder;過去|kako|passado'],
['局','repartição/situação','kyoku',7,'キョク|kyoku','','尸|abrigo','Uma sala 尸 pequena com a boca 口. O guichê.','郵便局|yūbinkyoku|correio;結局|kekkyoku|no fim'],
['放','soltar/liberar','hanasu',8,'ホウ|hō','はな(す)|hana(su)','攵|bater','Bater 攵 na bandeira 方 e deixar o vento levar.','放送|hōsō|transmissão;放す|hanasu|soltar'],
['常','sempre/normal','tsune',11,'ジョウ|jō','つね|tsune','巾|pano','A bandeira 巾 que fica hasteada o tempo todo.','非常|hijō|emergência;日常|nichijō|cotidiano'],
['状','condição/carta','jō',7,'ジョウ|jō','','犬|cão','Como o cachorro 犬 está hoje. O estado das coisas.','状況|jōkyō|situação;年賀状|nengajō|cartão de ano-novo'],
['球','bola/esfera','tama',11,'キュウ|kyū','たま|tama','王|jade','Uma pedra de jade 王 lapidada bem redonda.','野球|yakyū|beisebol;地球|chikyū|Terra'],
['職','profissão','shoku',18,'ショク|shoku','','耳|orelha','Ouvido 耳 treinado no ofício. Quem sabe o que faz.','職業|shokugyō|profissão;就職|shūshoku|emprego'],
['与','dar/conceder','ataeru',3,'ヨ|yo','あた(える)|ata(eru)','一|linha','Duas mãos passando algo de uma pra outra.','与える|ataeru|conceder;給与|kyūyo|salário'],
['供','oferecer/acompanhar','tomo',8,'キョウ|kyō','とも|tomo','亻|pessoa','A pessoa 亻 que oferece junto 共. Servir.','子供|kodomo|criança;提供|teikyō|fornecimento'],
['構','estrutura/montar','kamau',14,'コウ|kō','かま(う)|kama(u)','木|árvore','Vigas de madeira 木 encaixadas. A armação.','構造|kōzō|estrutura;結構|kekkō|bastante'],
['割','dividir/porcentagem','waru',12,'カツ|katsu','わ(る)|wa(ru)','刂|faca','A faca 刂 partindo em pedaços iguais.','割る|waru|dividir;割引|waribiki|desconto'],
['身','corpo/pessoa','mi',7,'シン|shin','み|mi','身|corpo','Uma pessoa de perfil, com a barriga saliente.','自身|jishin|si mesmo;身分|mibun|status'],
['費','despesa','hi',12,'ヒ|hi','つい(やす)|tsui(yasu)','貝|concha','O dinheiro 貝 se desmanchando. Gasto.','費用|hiyō|custo;学費|gakuhi|mensalidade'],
['付','anexar/entregar','tsuku',5,'フ|fu','つ(く)|tsu(ku)','亻|pessoa','Uma pessoa 亻 passando algo com a mão 寸. Colar junto.','付ける|tsukeru|prender;受付|uketsuke|recepção'],
['由','motivo/origem','yoshi',5,'ユ|yu;ユウ|yū','よし|yoshi','田|campo','Um campo 田 com o broto saindo por cima. De onde vem.','理由|riyū|motivo;自由|jiyū|liberdade'],
['難','difícil','muzukashii',18,'ナン|nan','むずか(しい)|muzuka(shii)','隹|pássaro','Pegar aquele pássaro 隹 é bem complicado.','難しい|muzukashii|difícil;困難|konnan|dificuldade'],
['優','gentil/superior','yasashii',17,'ユウ|yū','やさ(しい)|yasa(shii)','亻|pessoa','A pessoa 亻 que se preocupa 憂 com os outros. Gentil e excelente.','優しい|yasashii|gentil;優勝|yūshō|vitória'],
['夫','marido','otto',4,'フ|fu','おっと|otto','大|grande','Uma pessoa grande 大 com o grampo no cabelo. Homem adulto.','夫|otto|marido;夫婦|fūfu|casal'],
['収','recolher/receita','osameru',4,'シュウ|shū','おさ(める)|osa(meru)','又|mão','Uma mão 又 juntando tudo pra dentro.','収入|shūnyū|renda;回収|kaishū|recolhimento'],
['断','cortar/recusar','kotowaru',11,'ダン|dan','ことわ(る)|kotowa(ru)','斤|machado','O machado 斤 cortando os fios de uma vez. Interromper.','断る|kotowaru|recusar;判断|handan|julgamento'],
['違','diferente/errado','chigau',13,'イ|i','ちが(う)|chiga(u)','辶|caminhar','Andar 辶 por outro caminho. Está diferente.','違う|chigau|diferir;間違い|machigai|erro'],
['消','apagar/sumir','kesu',10,'ショウ|shō','け(す)|ke(su)','氵|água','Água 氵 sobre o fogo. Apagou.','消す|kesu|apagar;消防|shōbō|bombeiros'],
['神','deus/divino','kami',9,'シン|shin;ジン|jin','かみ|kami','礻|altar','No altar 礻 o raio desce. É a divindade.','神様|kamisama|deus;神社|jinja|santuário'],
['番','número/vez','ban',12,'バン|ban','','田|campo','Pegadas marcadas no campo 田, uma após a outra.','一番|ichiban|o primeiro;交番|kōban|posto policial'],
['規','regra/padrão','ki',11,'キ|ki','','見|ver','O marido 夫 olhando 見 se está tudo conforme.','規則|kisoku|regra;規模|kibo|escala'],
['術','técnica/arte','jutsu',11,'ジュツ|jutsu','','行|ir','A técnica que se pratica no meio da rua 行.','技術|gijutsu|tecnologia;美術|bijutsu|belas-artes'],
['備','preparar','sonaeru',12,'ビ|bi','そな(える)|sona(eru)','亻|pessoa','Uma pessoa 亻 estocando flechas na aljava. Prevenido.','準備|junbi|preparação;設備|setsubi|instalação'],
['宅','residência','taku',6,'タク|taku','','宀|telhado','Debaixo do telhado 宀, o lugar onde se firma raiz.','お宅|otaku|sua casa;住宅|jūtaku|residência'],
['害','dano/prejuízo','gai',10,'ガイ|gai','','宀|telhado','Debaixo do telhado 宀 a boca 口 fala mal. Faz mal.','被害|higai|prejuízo;公害|kōgai|poluição'],
['配','distribuir/entregar','kubaru',10,'ハイ|hai','くば(る)|kuba(ru)','酉|jarro','Servir o saquê 酉 de jarro em jarro. Repartir.','心配|shinpai|preocupação;配達|haitatsu|entrega'],
['警','alertar/polícia','kei',19,'ケイ|kei','','言|palavra','Palavra 言 de respeito 敬. O aviso sério.','警察|keisatsu|polícia;警告|keikoku|advertência'],
['育','criar/educar','sodateru',8,'イク|iku','そだ(てる)|soda(teru)','月|carne','Uma criança de cabeça pra baixo nascendo e ganhando carne 月.','教育|kyōiku|educação;育てる|sodateru|criar'],
['席','assento/lugar','seki',10,'セキ|seki','','巾|pano','Debaixo do telheiro 广, o pano 巾 estendido pra sentar.','出席|shusseki|presença;座席|zaseki|assento'],
['訪','visitar','otozureru',11,'ホウ|hō','たず(ねる)|tazu(neru)','言|palavra','Levar a palavra 言 até a direção 方 de alguém.','訪ねる|tazuneru|visitar;訪問|hōmon|visita'],
['残','restar/sobrar','nokoru',10,'ザン|zan','のこ(る)|noko(ru)','歹|osso','Depois da batalha sobram só os ossos 歹.','残る|nokoru|sobrar;残念|zannen|que pena'],
['想','pensar/imaginar','sō',13,'ソウ|sō','','心|coração','Olhar 相 com o coração 心. Imaginar.','感想|kansō|impressão;理想|risō|ideal'],
['助','ajudar','tasukeru',7,'ジョ|jo','たす(ける)|tasu(keru)','力|força','Emprestar sua força 力 a quem precisa.','助ける|tasukeru|ajudar;助手|joshu|assistente'],
['労','trabalho/esforço','rō',7,'ロウ|rō','','力|força','Força 力 debaixo do fogo. Trabalho pesado.','労働|rōdō|trabalho;苦労|kurō|dificuldade'],
['例','exemplo','tatoeba',8,'レイ|rei','たと(えば)|tato(eba)','亻|pessoa','Uma pessoa 亻 posta na fila 列 pra ilustrar.','例えば|tatoeba|por exemplo;例|rei|exemplo'],
['然','assim/natural','zen',12,'ゼン|zen;ネン|nen','','灬|fogo','Carne de cachorro no fogo 灬. Era o jeito natural das coisas.','自然|shizen|natureza;全然|zenzen|de jeito nenhum'],
['限','limite','kagiru',9,'ゲン|gen','かぎ(る)|kagi(ru)','阝|colina','A colina 阝 até onde se pode ir. Não passa daí.','限る|kagiru|limitar;制限|seigen|restrição'],
['追','perseguir','ou',9,'ツイ|tsui','お(う)|o(u)','辶|caminhar','Andar 辶 atrás de alguém sem parar.','追う|ou|perseguir;追加|tsuika|acréscimo'],
['商','comércio','shō',11,'ショウ|shō','あきな(う)|akina(u)','口|boca','A boca 口 pregoando debaixo da tenda. Vender.','商品|shōhin|mercadoria;商店|shōten|loja'],
['葉','folha','ha',12,'ヨウ|yō','は|ha','艹|planta','Planta 艹 com folhas espalhadas pelo galho 世木.','葉|ha|folha;言葉|kotoba|palavra'],
['伝','transmitir/contar','tsutaeru',6,'デン|den','つた(える)|tsuta(eru)','亻|pessoa','Uma pessoa 亻 passando o recado adiante.','伝える|tsutaeru|transmitir;手伝う|tetsudau|ajudar'],
['形','forma','katachi',7,'ケイ|kei;ギョウ|gyō','かたち|katachi','彡|traços','Um molde com os riscos 彡 do contorno.','形|katachi|forma;人形|ningyō|boneca'],
['景','paisagem','kei',12,'ケイ|kei','','日|sol','O sol 日 iluminando a capital 京. Que vista.','景色|keshiki|paisagem;風景|fūkei|panorama'],
['落','cair','ochiru',12,'ラク|raku','お(ちる)|o(chiru)','艹|planta','A folha 艹 se soltando com a água. Cai no chão.','落ちる|ochiru|cair;落とす|otosu|derrubar'],
['退','recuar/sair','shirizoku',9,'タイ|tai','しりぞ(く)|shirizo(ku)','辶|caminhar','Andar 辶 para trás 艮. Bater em retirada.','退院|taiin|alta hospitalar;引退|intai|aposentadoria'],
['頭','cabeça','atama',16,'トウ|tō;ズ|zu','あたま|atama','頁|cabeça','A vasilha 豆 em cima do pescoço 頁. A cabeça.','頭|atama|cabeça;先頭|sentō|dianteira'],
['負','perder/carregar','makeru',9,'フ|fu','ま(ける)|ma(keru)','貝|concha','Alguém curvado carregando a concha 貝. Perdeu o peso da aposta.','負ける|makeru|perder;負担|futan|encargo'],
['渡','atravessar','wataru',12,'ト|to','わた(る)|wata(ru)','氵|água','Cruzar a água 氵 medindo 度 cada passo.','渡る|wataru|atravessar;手渡す|tewatasu|entregar em mãos'],
['失','perder/falhar','ushinau',5,'シツ|shitsu','うしな(う)|ushina(u)','大|grande','Algo escapando da mão. Perdeu.','失礼|shitsurei|licença;失敗|shippai|fracasso'],
['差','diferença','sa',10,'サ|sa','さ(す)|sa(su)','工|obra','Duas espigas de tamanhos diferentes lado a lado.','差|sa|diferença;差別|sabetsu|discriminação'],
['末','fim/ponta','sue',5,'マツ|matsu','すえ|sue','木|árvore','A árvore 木 com o traço no topo. A ponta do galho.','週末|shūmatsu|fim de semana;末|sue|final'],
['守','proteger','mamoru',6,'シュ|shu','まも(る)|mamo(ru)','宀|telhado','A mão 寸 debaixo do telhado 宀 guardando a casa.','守る|mamoru|proteger;留守|rusu|ausente'],
['若','jovem','wakai',8,'ジャク|jaku','わか(い)|waka(i)','艹|planta','O broto 艹 ainda novo. Verde.','若い|wakai|jovem;若者|wakamono|a juventude'],
['種','semente/tipo','tane',14,'シュ|shu','たね|tane','禾|arroz','O grão 禾 pesado 重 que se guarda pra plantar.','種類|shurui|tipo;種|tane|semente'],
['美','bonito','utsukushii',9,'ビ|bi','うつく(しい)|utsuku(shii)','羊|ovelha','Ovelha 羊 grande 大. Pro pastor, nada mais belo.','美しい|utsukushii|belo;美術館|bijutsukan|museu'],
['命','vida/ordem','inochi',8,'メイ|mei','いのち|inochi','口|boca','A boca 口 debaixo do telhado dando a ordem. Também é a vida.','命|inochi|vida;運命|unmei|destino'],
['福','sorte/fortuna','fuku',13,'フク|fuku','','礻|altar','No altar 礻, o barril cheio. Bênção e fartura.','幸福|kōfuku|felicidade;福袋|fukubukuro|saco da sorte'],
['望','desejar/esperança','nozomu',11,'ボウ|bō','のぞ(む)|nozo(mu)','月|lua','Olhar a lua 月 lá longe esperando algo.','希望|kibō|esperança;望む|nozomu|desejar'],
['非','não/erro','hi',8,'ヒ|hi','','非|não','Duas asas apontando pra lados opostos. Nada bate.','非常|hijō|emergência;非|hi|erro'],
['観','observar','kan',18,'カン|kan','','見|ver','Ver 見 com toda a atenção do pássaro.','観光|kankō|turismo;観客|kankyaku|plateia'],
['察','examinar/perceber','satsu',14,'サツ|satsu','','宀|telhado','Debaixo do telhado 宀 do templo, examinar o sinal.','警察|keisatsu|polícia;観察|kansatsu|observação'],
['段','degrau/etapa','dan',9,'ダン|dan','','殳|arma','Uma escada de pedra sendo talhada 殳.','階段|kaidan|escada;段々|dandan|aos poucos'],
['横','horizontal/lado','yoko',15,'オウ|ō','よこ|yoko','木|árvore','A tábua 木 atravessada de lado.','横|yoko|lado;横断|ōdan|travessia'],
['深','profundo','fukai',11,'シン|shin','ふか(い)|fuka(i)','氵|água','A água 氵 lá no fundo da caverna.','深い|fukai|profundo;深夜|shinya|madrugada'],
['申','dizer (humilde)','mōsu',5,'シン|shin','もう(す)|mō(su)','田|campo','Um relâmpago descendo. A mensagem que vem de cima.','申す|mōsu|dizer;申し込む|mōshikomu|inscrever-se'],
['財','bens/riqueza','zai',10,'ザイ|zai','','貝|concha','A concha 貝 cortada na medida certa. Patrimônio.','財布|saifu|carteira;財産|zaisan|bens'],
['港','porto','minato',12,'コウ|kō','みなと|minato','氵|água','Onde a água 氵 encontra a vila. Ancoradouro.','空港|kūkō|aeroporto;港|minato|porto'],
['識','conhecimento','shiki',19,'シキ|shiki','','言|palavra','Palavra 言 registrada com a lança. O que se sabe.','知識|chishiki|conhecimento;意識|ishiki|consciência'],
['呼','chamar','yobu',8,'コ|ko','よ(ぶ)|yo(bu)','口|boca','A boca 口 soltando o ar pra chamar alguém.','呼ぶ|yobu|chamar;呼吸|kokyū|respiração'],
['達','alcançar/plural','tatsu',12,'タツ|tatsu','','辶|caminhar','Andar 辶 até chegar. Vira também sufixo de plural.','友達|tomodachi|amigos;配達|haitatsu|entrega'],
['良','bom','yoi',7,'リョウ|ryō','よ(い)|yo(i)','艮|parar','O grão selecionado no funil. Só o melhor passa.','良い|yoi|bom;良品|ryōhin|produto de qualidade'],
['阪','encosta (Osaka)','han',7,'ハン|han','さか|saka','阝|colina','A colina 阝 inclinada. Aparece no nome de Osaka.','大阪|ōsaka|Osaka;阪神|hanshin|Hanshin'],
['候','clima/estação','kō',10,'コウ|kō','そうろう|sōrō','亻|pessoa','A pessoa 亻 espiando como está o tempo.','天候|tenkō|clima;候補|kōho|candidato'],
['程','grau/cerca de','hodo',12,'テイ|tei','ほど|hodo','禾|arroz','Medir 呈 o arroz 禾. O tanto que é.','程度|teido|grau;日程|nittei|cronograma'],
['満','cheio/satisfeito','michiru',12,'マン|man','み(ちる)|mi(chiru)','氵|água','A água 氵 subindo até a borda.','満足|manzoku|satisfação;満員|man-in|lotado'],
['敗','derrota','yabureru',11,'ハイ|hai','やぶ(れる)|yabu(reru)','攵|bater','A concha 貝 quebrada 攵. Perdeu tudo.','失敗|shippai|fracasso;敗北|haiboku|derrota'],
['値','valor/preço','ne',10,'チ|chi','ね|ne;あたい|atai','亻|pessoa','O quanto a pessoa 亻 avalia direto 直. O preço.','値段|nedan|preço;価値|kachi|valor'],
['突','furar/de repente','tsuku',8,'トツ|totsu','つ(く)|tsu(ku)','穴|buraco','O cachorro 犬 disparando pelo buraco 穴. De repente.','突然|totsuzen|de repente;衝突|shōtotsu|colisão'],
['路','estrada','michi',13,'ロ|ro','じ|ji','足|pé','O pé 足 seguindo cada 各 trecho. O caminho.','道路|dōro|rodovia;線路|senro|trilhos'],
['科','disciplina/seção','ka',9,'カ|ka','','禾|arroz','Medir 斗 o arroz 禾 por categoria. Classificar.','科学|kagaku|ciência;教科書|kyōkasho|livro didático'],
['積','empilhar/acumular','tsumu',16,'セキ|seki','つ(む)|tsu(mu)','禾|arroz','Empilhar o arroz 禾 colhido. Vai somando.','面積|menseki|área;積む|tsumu|empilhar'],
['他','outro','hoka',5,'タ|ta','ほか|hoka','亻|pessoa','Aquela outra pessoa 亻 ali.','他|hoka|outro;その他|sonota|etc'],
['処','lidar/lugar','sho',5,'ショ|sho','','夂|pé','O pé 夂 chegando na mesa. Tomar providência.','処理|shori|processamento;対処|taisho|lidar'],
['客','visita/cliente','kyaku',9,'キャク|kyaku','','宀|telhado','Quem chega 各 debaixo do telhado 宀. A visita.','お客さん|okyakusan|cliente;観客|kankyaku|plateia'],
['否','negar/não','hi',7,'ヒ|hi','いな|ina','口|boca','A boca 口 dizendo que não 不.','否定|hitei|negação;安否|anpi|paradeiro'],
['師','mestre/professor','shi',10,'シ|shi','','巾|pano','Quem lidera o grupo com a bandeira 巾. O mestre.','医師|ishi|médico;教師|kyōshi|professor'],
['易','fácil/mudar','yasashii',8,'エキ|eki;イ|i','やさ(しい)|yasa(shii)','日|sol','O sol 日 e os raios. Trocar de forma sem esforço.','貿易|bōeki|comércio;容易|yōi|fácil'],
['速','rápido','hayai',10,'ソク|soku','はや(い)|haya(i)','辶|caminhar','Andar 辶 com o feixe 束 nas costas, sem parar.','速い|hayai|rápido;高速|kōsoku|alta velocidade'],
['存','existir/manter','son',6,'ソン|son;ゾン|zon','','子|criança','A criança 子 abrigada. Continua existindo.','存在|sonzai|existência;保存|hozon|conservação'],
['殺','matar','korosu',10,'サツ|satsu','ころ(す)|koro(su)','殳|arma','A arma 殳 usada até o fim.','殺す|korosu|matar;自殺|jisatsu|suicídio'],
['号','número/título','gō',5,'ゴウ|gō','','口|boca','A boca 口 gritando o número da chamada.','番号|bangō|número;信号|shingō|semáforo'],
['単','simples/único','tan',9,'タン|tan','','十|dez','Um garfo de caça com dois dentes. Uma coisa só.','簡単|kantan|simples;単語|tango|vocábulo'],
['座','sentar/assento','suwaru',10,'ザ|za','すわ(る)|suwa(ru)','广|telheiro','Duas pessoas 人 sentadas no chão 土 sob o telheiro 广.','座る|suwaru|sentar;銀座|ginza|Ginza'],
['破','quebrar','yaburu',10,'ハ|ha','やぶ(る)|yabu(ru)','石|pedra','A pedra 石 rachando a pele. Partiu.','破る|yaburu|romper;破壊|hakai|destruição'],
['除','remover/exceto','nozoku',10,'ジョ|jo','のぞ(く)|nozo(ku)','阝|colina','Tirar da colina 阝 o que sobra 余.','掃除|sōji|limpeza;除く|nozoku|excluir'],
['完','completo','kan',7,'カン|kan','','宀|telhado','A casa 宀 com o último elemento 元 no lugar. Pronta.','完成|kansei|conclusão;完全|kanzen|perfeito'],
['降','descer/cair (chuva)','oriru',10,'コウ|kō','お(りる)|o(riru);ふ(る)|fu(ru)','阝|colina','Dois pés descendo a colina 阝.','降りる|oriru|descer;降る|furu|chover'],
['責','responsabilidade','semeru',11,'セキ|seki','せ(める)|se(meru)','貝|concha','Cobrar a dívida 貝 com espinho. A responsabilidade pesa.','責任|sekinin|responsabilidade;責める|semeru|culpar'],
['捕','capturar','tsukamaeru',10,'ホ|ho','つか(まえる)|tsuka(maeru)','扌|mão','A mão 扌 fechando em cima da presa.','捕まえる|tsukamaeru|capturar;逮捕|taiho|prisão'],
['危','perigo','abunai',6,'キ|ki','あぶ(ない)|abu(nai)','卩|ajoelhar','Alguém no alto do penhasco e outro agachado embaixo. Perigo.','危ない|abunai|perigoso;危険|kiken|perigo'],
['給','fornecer/salário','kyū',12,'キュウ|kyū','','糸|fio','Distribuir o fio 糸 que encaixa 合 em cada um.','給料|kyūryō|salário;供給|kyōkyū|fornecimento'],
['苦','amargo/sofrer','kurushii',8,'ク|ku','くる(しい)|kuru(shii);にが(い)|niga(i)','艹|planta','Uma erva 艹 velha 古. Amarga de doer.','苦しい|kurushii|penoso;苦手|nigate|ponto fraco'],
['迎','receber/dar as boas-vindas','mukaeru',7,'ゲイ|gei','むか(える)|muka(eru)','辶|caminhar','Andar 辶 até a porta pra receber quem chega.','迎える|mukaeru|receber;歓迎|kangei|boas-vindas'],
['園','jardim/parque','sono',13,'エン|en','その|sono','囗|cerca','Um terreno cercado 囗 com plantas dentro.','公園|kōen|parque;動物園|dōbutsuen|zoológico'],
['具','ferramenta/ingrediente','gu',8,'グ|gu','','八|separar','Duas mãos segurando a concha. O instrumento.','道具|dōgu|ferramenta;具体的|gutaiteki|concreto'],
['辞','palavra/demitir-se','ji',13,'ジ|ji','や(める)|ya(meru)','辛|amargo','A palavra amarga 辛 do adeus.','辞書|jisho|dicionário;辞める|yameru|pedir demissão'],
['因','causa/motivo','in',6,'イン|in','よ(る)|yo(ru)','囗|cerca','Uma pessoa 大 presa dentro 囗. O que deu origem.','原因|gen-in|causa;要因|yōin|fator'],
['馬','cavalo','uma',10,'バ|ba','うま|uma','馬|cavalo','A crina em cima, o corpo, e as quatro patas 灬 embaixo.','馬|uma|cavalo;競馬|keiba|corrida de cavalos'],
['愛','amor','ai',13,'アイ|ai','','心|coração','Uma mão que cobre o coração 心 e não quer soltar.','愛|ai|amor;愛情|aijō|afeto'],
['富','rico/abundância','tomi',12,'フ|fu','とみ|tomi','宀|telhado','A casa 宀 com o barril cheio. Riqueza.','富士山|fujisan|Monte Fuji;豊富|hōfu|abundante'],
['彼','ele/aquele','kare',8,'ヒ|hi','かれ|kare','彳|passo','Aquele que anda 彳 do outro lado.','彼|kare|ele;彼女|kanojo|ela'],
['未','ainda não','mi',5,'ミ|mi','','木|árvore','A árvore 木 com o galho de cima curto. Ainda vai crescer.','未来|mirai|futuro;未定|mitei|indefinido'],
['舞','dançar','mau',15,'ブ|bu','ま(う)|ma(u)','舛|pés','Alguém rodando com as mangas compridas voando.','舞台|butai|palco;見舞い|mimai|visita a doente'],
['亡','morrer/perder','bō',3,'ボウ|bō','な(い)|na(i)','亠|topo','Alguém escondido atrás do muro. Sumiu.','亡くなる|nakunaru|falecer;死亡|shibō|óbito'],
['冷','frio/esfriar','tsumetai',7,'レイ|rei','つめ(たい)|tsume(tai);ひ(える)|hi(eru)','冫|gelo','Duas gotas de gelo 冫 sobre a ordem. Gelou.','冷たい|tsumetai|gelado;冷蔵庫|reizōko|geladeira'],
['適','adequado','teki',14,'テキ|teki','','辶|caminhar','Andar 辶 até o ponto certo. Serve direitinho.','適当|tekitō|adequado;適切|tekisetsu|apropriado'],
['婦','mulher casada','fu',11,'フ|fu','','女|mulher','A mulher 女 com a vassoura 帚. A dona da casa.','主婦|shufu|dona de casa;夫婦|fūfu|casal'],
['寄','aproximar/doar','yoru',11,'キ|ki','よ(る)|yo(ru)','宀|telhado','Passar na casa 宀 esquisita 奇 no caminho.','寄る|yoru|dar uma passada;寄付|kifu|doação'],
['込','incluir/entrar','komu',5,'','こ(む)|ko(mu)','辶|caminhar','Entrar 入 andando 辶 pra dentro. Kanji criado no Japão.','申し込む|mōshikomu|inscrever-se;込む|komu|lotar'],
['類','tipo/categoria','rui',18,'ルイ|rui','','頁|cabeça','Cabeças 頁 parecidas agrupadas. Mesma espécie.','種類|shurui|tipo;人類|jinrui|humanidade'],
['余','sobra/resto','amaru',7,'ヨ|yo','あま(る)|ama(ru)','人|pessoa','O telhado com espaço sobrando embaixo.','余る|amaru|sobrar;余裕|yoyū|folga'],
['王','rei','ō',4,'オウ|ō','','王|rei','Três linhas — céu, homem e terra — unidas por uma. O rei liga tudo.','王様|ōsama|rei;女王|joō|rainha'],
['返','devolver','kaesu',7,'ヘン|hen','かえ(す)|kae(su)','辶|caminhar','Andar 辶 de volta 反 pelo mesmo caminho.','返す|kaesu|devolver;返事|henji|resposta'],
['妻','esposa','tsuma',8,'サイ|sai','つま|tsuma','女|mulher','A mulher 女 com a mão erguendo o pente. A esposa.','妻|tsuma|esposa;夫妻|fusai|casal'],
['背','costas/altura','se',9,'ハイ|hai','せ|se;せい|sei','月|corpo','Duas pessoas 北 de costas sobre o corpo 月.','背中|senaka|costas;背が高い|segatakai|ser alto'],
['熱','quente/febre','atsui',15,'ネツ|netsu','あつ(い)|atsu(i)','灬|fogo','O fogo 灬 embaixo com força. Fervendo.','熱い|atsui|quente;熱|netsu|febre'],
['宿','pousada/hospedar','yado',11,'シュク|shuku','やど|yado','宀|telhado','Cem 百 pessoas 亻 dormindo debaixo do mesmo teto 宀.','宿題|shukudai|dever de casa;新宿|shinjuku|Shinjuku'],
['険','perigoso/íngreme','ken',11,'ケン|ken','けわ(しい)|kewa(shii)','阝|colina','A colina 阝 muito inclinada. Cuidado.','危険|kiken|perigo;保険|hoken|seguro'],
['頼','confiar/pedir','tanomu',16,'ライ|rai','たの(む)|tano(mu)','頁|cabeça','Botar a cabeça 頁 na mão de alguém. Contar com ela.','頼む|tanomu|pedir;信頼|shinrai|confiança'],
['覚','lembrar/acordar','oboeru',12,'カク|kaku','おぼ(える)|obo(eru);さ(める)|sa(meru)','見|ver','Ver 見 com clareza. Perceber e memorizar.','覚える|oboeru|memorizar;目覚まし|mezamashi|despertador'],
['船','barco','fune',11,'セン|sen','ふね|fune','舟|barco','O casco 舟 com o compartimento 㕣 dentro.','船|fune|navio;船便|funabin|via marítima'],
['途','caminho/meio','to',10,'ト|to','','辶|caminhar','Andar 辶 pela estrada que sobra 余. No meio do caminho.','途中|tochū|no meio do caminho;用途|yōto|finalidade'],
['許','permitir/perdoar','yurusu',11,'キョ|kyo','ゆる(す)|yuru(su)','言|palavra','Dar a palavra 言 de meio-dia 午. Autorizar.','許す|yurusu|perdoar;免許|menkyo|licença'],
['抜','arrancar/extrair','nuku',7,'バツ|batsu','ぬ(く)|nu(ku)','扌|mão','A mão 扌 puxando com amizade 友 até sair.','抜く|nuku|arrancar;選抜|senbatsu|seleção'],
['便','conveniência/correio','ben',9,'ベン|ben;ビン|bin','たよ(り)|tayo(ri)','亻|pessoa','A pessoa 亻 que atualiza 更 quem espera notícia.','便利|benri|prático;郵便|yūbin|correio'],
['罪','crime','tsumi',13,'ザイ|zai','つみ|tsumi','罒|rede','A rede 罒 caindo sobre quem errou 非.','犯罪|hanzai|crime;罪|tsumi|culpa'],
['努','esforçar-se','tsutomeru',7,'ド|do','つと(める)|tsuto(meru)','力|força','Botar força 力 na tarefa até conseguir.','努力|doryoku|esforço;努める|tsutomeru|empenhar-se'],
['精','espírito/refinado','sei',14,'セイ|sei','','米|arroz','O arroz 米 polido até ficar azul 青 de limpo.','精神|seishin|espírito;精一杯|seiippai|com todo o esforço'],
['散','espalhar','chiru',12,'サン|san','ち(る)|chi(ru)','攵|bater','Bater 攵 e tudo voa pra todo lado.','散歩|sanpo|caminhada;散る|chiru|espalhar-se'],
['静','quieto/silencioso','shizuka',14,'セイ|sei','しず(か)|shizu(ka)','青|azul','O azul 青 da calmaria disputando 争 com o barulho e vencendo.','静か|shizuka|silencioso;静止|seishi|imobilidade'],
['婚','casamento','kon',11,'コン|kon','','女|mulher','A mulher 女 no entardecer 昏 da cerimônia.','結婚|kekkon|casamento;婚約|kon-yaku|noivado'],
['喜','alegrar-se','yorokobu',12,'キ|ki','よろこ(ぶ)|yoroko(bu)','口|boca','O tambor tocando e a boca 口 rindo. Festa.','喜ぶ|yorokobu|alegrar-se;喜び|yorokobi|alegria'],
['浮','flutuar','uku',10,'フ|fu','う(く)|u(ku)','氵|água','A criança boiando na água 氵 com a mão por cima.','浮かぶ|ukabu|boiar;浮気|uwaki|traição'],
['絶','cortar/absoluto','taeru',12,'ゼツ|zetsu','た(える)|ta(eru)','糸|fio','O fio 糸 rompido de vez. Acabou.','絶対|zettai|absolutamente;絶える|taeru|cessar'],
['幸','felicidade/sorte','shiawase',8,'コウ|kō','しあわ(せ)|shiawa(se)','干|escudo','Escapou da algema. Que sorte a sua.','幸せ|shiawase|feliz;不幸|fukō|infelicidade'],
['押','empurrar','osu',8,'オウ|ō','お(す)|o(su)','扌|mão','A mão 扌 apertando 甲 pra baixo.','押す|osu|empurrar;押し入れ|oshiire|armário embutido'],
['倒','cair/derrubar','taoreru',10,'トウ|tō','たお(れる)|tao(reru)','亻|pessoa','A pessoa 亻 virando de cabeça pra baixo 到.','倒れる|taoreru|desabar;面倒|mendō|trabalhoso'],
['老','velho/idoso','oiru',6,'ロウ|rō','お(いる)|o(iru)','耂|velho','Um ancião curvado com a bengala.','老人|rōjin|idoso;老ける|fukeru|envelhecer'],
['曲','curva/música','magaru',6,'キョク|kyoku','ま(がる)|ma(garu)','曰|dizer','Uma cesta de bambu entortada.','曲がる|magaru|virar;曲|kyoku|melodia'],
['払','pagar/espanar','harau',5,'フツ|futsu','はら(う)|hara(u)','扌|mão','A mão 扌 varrendo o que precisa sair. Quitar.','払う|harau|pagar;支払い|shiharai|pagamento'],
['庭','quintal/jardim','niwa',10,'テイ|tei','にわ|niwa','广|telheiro','O pátio 廷 debaixo do telheiro 广. O quintal.','庭|niwa|quintal;家庭|katei|lar'],
['徒','a pé/aluno','to',10,'ト|to','','彳|passo','Andar 彳 com os próprios pés 走. Sem montaria.','生徒|seito|aluno;徒歩|toho|a pé'],
['勤','trabalhar/servir','tsutomeru',12,'キン|kin','つと(める)|tsuto(meru)','力|força','Força 力 aplicada todo dia no mesmo lugar.','勤める|tsutomeru|trabalhar em;通勤|tsūkin|deslocamento'],
['遅','atrasar/lento','osoi',12,'チ|chi','おそ(い)|oso(i);おく(れる)|oku(reru)','辶|caminhar','Andar 辶 como a ovelha manca. Chega tarde.','遅い|osoi|lento;遅刻|chikoku|atraso'],
['居','morar/estar','iru',8,'キョ|kyo','い(る)|i(ru)','尸|abrigo','Ficar sentado 尸 no lugar antigo 古. Estar em casa.','居る|iru|estar;芝居|shibai|peça teatral'],
['雑','misturado/variado','zatsu',14,'ザツ|zatsu','','隹|pássaro','Nove 九 árvores 木 e um pássaro 隹. Bagunça.','雑誌|zasshi|revista;複雑|fukuzatsu|complicado'],
['招','convidar','maneku',8,'ショウ|shō','まね(く)|mane(ku)','扌|mão','A mão 扌 chamando 召 com o gesto. Venha.','招待|shōtai|convite;招く|maneku|convidar'],
['困','ficar em apuros','komaru',7,'コン|kon','こま(る)|koma(ru)','囗|cerca','A árvore 木 presa dentro do muro 囗. Sem saída.','困る|komaru|ter problemas;困難|konnan|dificuldade'],
['欠','faltar/bocejar','kakeru',4,'ケツ|ketsu','か(ける)|ka(keru)','欠|falta','Alguém de boca escancarada. Falta alguma coisa.','欠席|kesseki|falta;欠点|ketten|defeito'],
['更','ainda mais/renovar','sara',7,'コウ|kō','さら|sara;ふ(ける)|fu(keru)','曰|dizer','Trocar o que estava posto por outro. De novo.','変更|henkō|alteração;更に|sarani|além disso'],
['刻','esculpir/momento','kizamu',8,'コク|koku','きざ(む)|kiza(mu)','刂|faca','A faca 刂 entalhando marca por marca. Cada instante.','時刻|jikoku|horário;深刻|shinkoku|grave'],
['賛','aprovar/elogiar','san',15,'サン|san','','貝|concha','Dois nobres oferecendo a concha 貝. Estão de acordo.','賛成|sansei|aprovação;称賛|shōsan|elogio'],
['抱','abraçar/segurar','daku',8,'ホウ|hō','だ(く)|da(ku);かか(える)|kaka(eru)','扌|mão','A mão 扌 envolvendo 包 alguém.','抱く|daku|abraçar;辛抱|shinbō|paciência'],
['犯','crime/violar','okasu',5,'ハン|han','おか(す)|oka(su)','犭|animal','O bicho 犭 solto fazendo o que não deve.','犯人|hannin|criminoso;犯罪|hanzai|crime'],
['恐','medo/temer','kowai',10,'キョウ|kyō','おそ(れる)|oso(reru);こわ(い)|kowa(i)','心|coração','O coração 心 travado de pavor.','恐い|kowai|assustador;恐縮|kyōshuku|constrangimento'],
['息','respiração/filho','iki',10,'ソク|soku','いき|iki','心|coração','O ar passando do nariz 自 ao coração 心.','息|iki|respiração;息子|musuko|filho'],
['戻','voltar/devolver','modoru',7,'レイ|rei','もど(る)|modo(ru)','戸|porta','O cachorro 大 voltando pela porta 戸.','戻る|modoru|voltar;戻す|modosu|devolver'],
['願','desejar/pedir','negau',19,'ガン|gan','ねが(う)|nega(u)','頁|cabeça','Baixar a cabeça 頁 na fonte 原 e fazer o pedido.','お願い|onegai|por favor;願う|negau|desejar'],
['絵','desenho/pintura','e',12,'カイ|kai;エ|e','','糸|fio','Fios 糸 que se juntam 会 formando a figura. Bordado.','絵|e|desenho;絵本|ehon|livro ilustrado'],
['越','atravessar/superar','koeru',12,'エツ|etsu','こ(える)|ko(eru)','走|correr','Correr 走 e pular por cima. Passou do outro lado.','引っ越し|hikkoshi|mudança;越える|koeru|ultrapassar'],
['欲','querer/desejo','hoshii',11,'ヨク|yoku','ほ(しい)|ho(shii)','欠|falta','O vale 谷 vazio e a boca 欠 aberta. Falta e se quer.','欲しい|hoshii|querer;欲張り|yokubari|guloso'],
['笑','rir/sorriso','warau',10,'ショウ|shō','わら(う)|wara(u)','竹|bambu','O bambu 竹 balançando como ombros que tremem de rir.','笑う|warau|rir;笑顔|egao|sorriso'],
['互','mútuo','tagai',4,'ゴ|go','たが(い)|taga(i)','二|dois','Duas peças que se encaixam uma na outra.','お互い|otagai|um ao outro;交互|kōgo|alternado'],
['似','parecido','niru',7,'ジ|ji','に(る)|ni(ru)','亻|pessoa','Uma pessoa 亻 igual 以 à outra.','似る|niru|parecer-se;似合う|niau|cair bem'],
['列','fila/coluna','retsu',6,'レツ|retsu','','刂|faca','Ossos 歹 alinhados pela faca 刂. Em ordem.','列|retsu|fila;行列|gyōretsu|fila de espera'],
['探','procurar','sagasu',11,'タン|tan','さが(す)|saga(su)','扌|mão','A mão 扌 tateando dentro do buraco fundo.','探す|sagasu|procurar;探検|tanken|exploração'],
['逃','fugir','nigeru',9,'トウ|tō','に(げる)|ni(geru)','辶|caminhar','Andar 辶 depressa pro outro lado 兆. Escapar.','逃げる|nigeru|fugir;逃走|tōsō|fuga'],
['遊','brincar/passear','asobu',12,'ユウ|yū','あそ(ぶ)|aso(bu)','辶|caminhar','Andar 辶 à toa com a bandeira ao vento. Diversão.','遊ぶ|asobu|brincar;遊園地|yūenchi|parque de diversões'],
['迷','perder-se/hesitar','mayou',9,'メイ|mei','まよ(う)|mayo(u)','辶|caminhar','Andar 辶 no meio do arrozal 米 e não achar a saída.','迷う|mayou|hesitar;迷惑|meiwaku|incômodo'],
['夢','sonho','yume',13,'ム|mu','ゆめ|yume','夕|entardecer','O que se vê à noite 夕 com os olhos fechados.','夢|yume|sonho;夢中|muchū|absorto'],
['君','você/senhor','kimi',7,'クン|kun','きみ|kimi','口|boca','A mão que governa e a boca 口 que ordena. Tratamento entre próximos.','君|kimi|você;～君|kun|sufixo masculino'],
['閉','fechar','shimeru',11,'ヘイ|hei','し(める)|shi(meru);と(じる)|to(jiru)','門|portão','O portão 門 com a tranca 才 atravessada.','閉める|shimeru|fechar;閉店|heiten|fechamento'],
['緒','junto/cordão','sho',14,'ショ|sho','お|o','糸|fio','O fio 糸 que amarra todo mundo 者 junto.','一緒|issho|juntos;内緒|naisho|segredo'],
['折','dobrar/quebrar','oru',7,'セツ|setsu','お(る)|o(ru)','扌|mão','A mão 扌 com o machado 斤 partindo o galho.','折る|oru|dobrar;骨折|kossetsu|fratura'],
['草','grama/erva','kusa',9,'ソウ|sō','くさ|kusa','艹|planta','A planta 艹 rasteira que nasce cedo 早.','草|kusa|grama;草原|sōgen|campina'],
['暮','anoitecer/viver','kurasu',14,'ボ|bo','く(らす)|ku(rasu)','日|sol','O sol 日 sumindo atrás do mato. Fim do dia, e a vida que segue.','暮らす|kurasu|viver;夕暮れ|yūgure|crepúsculo'],
['酒','saquê/bebida','sake',10,'シュ|shu','さけ|sake','酉|jarro','Água 氵 dentro do jarro de fermentar 酉.','お酒|osake|bebida;日本酒|nihonshu|saquê'],
['悲','triste','kanashii',12,'ヒ|hi','かな(しい)|kana(shii)','心|coração','O coração 心 partido em dois 非.','悲しい|kanashii|triste;悲劇|higeki|tragédia'],
['晴','tempo bom','hareru',12,'セイ|sei','は(れる)|ha(reru)','日|sol','O sol 日 no céu azul 青. Nem uma nuvem.','晴れ|hare|tempo bom;晴天|seiten|céu limpo'],
['掛','pendurar','kakeru',11,'','か(ける)|ka(keru)','扌|mão','A mão 扌 dependurando alguma coisa no gancho.','掛ける|kakeru|pendurar;腰掛け|koshikake|banco'],
['到','chegar','tō',8,'トウ|tō','いた(る)|ita(ru)','刂|faca','A flecha 至 fincada no destino. Chegou.','到着|tōchaku|chegada;到底|tōtei|de jeito nenhum'],
['寝','dormir/deitar','neru',13,'シン|shin','ね(る)|ne(ru)','宀|telhado','Debaixo do telhado 宀, na cama. Hora de dormir.','寝る|neru|dormir;寝坊|nebō|dormir demais'],
['盗','roubar','nusumu',11,'トウ|tō','ぬす(む)|nusu(mu)','皿|prato','Alguém babando 次 em cima do prato 皿 alheio.','盗む|nusumu|roubar;強盗|gōtō|assalto'],
['吸','sugar/inspirar','suu',6,'キュウ|kyū','す(う)|su(u)','口|boca','A boca 口 puxando 及 o ar pra dentro.','吸う|suu|inspirar;呼吸|kokyū|respiração'],
['陽','sol/positivo','yō',12,'ヨウ|yō','','阝|colina','O lado da colina 阝 que pega sol.','太陽|taiyō|sol;陽気|yōki|animado'],
['御','honorífico','go',12,'ゴ|go;ギョ|gyo','お|o','彳|passo','O prefixo de respeito. Aparece em 御飯 e 御茶.','御飯|gohan|arroz;御中|onchū|a/c'],
['歯','dente','ha',12,'シ|shi','は|ha','歯|dente','A boca 凵 aberta mostrando a fileira de dentes.','歯|ha|dente;歯医者|haisha|dentista'],
['忘','esquecer','wasureru',7,'ボウ|bō','わす(れる)|wasu(reru)','心|coração','O que sumiu 亡 do coração 心.','忘れる|wasureru|esquecer;忘年会|bōnenkai|festa de fim de ano'],
['吹','soprar','fuku',7,'スイ|sui','ふ(く)|fu(ku)','口|boca','A boca 口 aberta 欠 soltando o ar.','吹く|fuku|soprar;吹雪|fubuki|nevasca'],
['娘','filha/moça','musume',10,'','むすめ|musume','女|mulher','A mulher 女 boa 良 da casa. A filha.','娘|musume|filha;小娘|komusume|garotinha'],
['誤','errar/engano','ayamaru',14,'ゴ|go','あやま(る)|ayama(ru)','言|palavra','A palavra 言 que saiu errada 呉.','誤る|ayamaru|errar;誤解|gokai|mal-entendido'],
['慣','acostumar-se','nareru',14,'カン|kan','な(れる)|na(reru)','忄|coração','O coração 忄 que já atravessou 貫 aquilo antes.','慣れる|nareru|acostumar-se;習慣|shūkan|hábito'],
['礼','cortesia/agradecimento','rei',5,'レイ|rei','','礻|altar','A reverência feita diante do altar 礻.','お礼|orei|agradecimento;失礼|shitsurei|licença'],
['窓','janela','mado',11,'ソウ|sō','まど|mado','穴|buraco','O buraco 穴 na parede por onde o coração 心 espia.','窓|mado|janela;窓口|madoguchi|guichê'],
['昔','antigamente','mukashi',8,'セキ|seki','むかし|mukashi','日|sol','Muitos sóis 日 empilhados. Faz tempo.','昔|mukashi|antigamente;大昔|ōmukashi|há muito tempo'],
['貧','pobre','mazushii',11,'ヒン|hin','まず(しい)|mazu(shii)','貝|concha','A concha 貝 dividida 分 até não sobrar nada.','貧しい|mazushii|pobre;貧乏|binbō|pobreza'],
['怒','raiva','okoru',9,'ド|do','おこ(る)|oko(ru);いか(る)|ika(ru)','心|coração','O coração 心 sob o jugo. Ferveu.','怒る|okoru|ficar bravo;怒り|ikari|ira'],
['泳','nadar','oyogu',8,'エイ|ei','およ(ぐ)|oyo(gu)','氵|água','Ficar muito tempo 永 dentro da água 氵.','泳ぐ|oyogu|nadar;水泳|suiei|natação'],
['祖','antepassado','so',9,'ソ|so','','礻|altar','No altar 礻 se reverencia quem veio antes.','祖父|sofu|avô;祖母|sobo|avó'],
['杯','copo/taça','hai',8,'ハイ|hai','さかずき|sakazuki','木|árvore','Uma taça de madeira 木. Contador de copos.','一杯|ippai|um copo, cheio;乾杯|kanpai|brinde'],
['疲','cansar','tsukareru',10,'ヒ|hi','つか(れる)|tsuka(reru)','疒|doença','A doença 疒 que vem da pele 皮 esgotada.','疲れる|tsukareru|cansar;疲労|hirō|fadiga'],
['皆','todos','mina',9,'カイ|kai','みな|mina','白|branco','Duas pessoas 比 e a boca 白. Todo mundo junto.','皆|mina|todos;皆さん|minasan|pessoal'],
['鳴','soar/cantar (bicho)','naku',14,'メイ|mei','な(く)|na(ku)','鳥|pássaro','A boca 口 do pássaro 鳥 soltando o canto.','鳴く|naku|piar;悲鳴|himei|grito'],
['腹','barriga','hara',13,'フク|fuku','はら|hara','月|corpo','A parte do corpo 月 que volta 复 a encher.','お腹|onaka|barriga;腹痛|fukutsū|dor de barriga'],
['煙','fumaça','kemuri',13,'エン|en','けむり|kemuri','火|fogo','O fogo 火 e a coluna subindo pela chaminé.','煙|kemuri|fumaça;煙草|tabako|cigarro'],
['眠','dormir/sono','nemuru',10,'ミン|min','ねむ(る)|nemu(ru)','目|olho','O olho 目 do povo 民 fechando.','眠い|nemui|com sono;睡眠|suimin|sono'],
['怖','medo','kowai',8,'フ|fu','こわ(い)|kowa(i)','忄|coração','O coração 忄 que se encolhe no pano 布.','怖い|kowai|assustador;恐怖|kyōfu|terror'],
['頂','topo/receber','itadaku',11,'チョウ|chō','いただ(く)|itada(ku)','頁|cabeça','O ponto mais alto da cabeça 頁. Receber com respeito.','頂く|itadaku|receber;山頂|sanchō|cume'],
['箱','caixa','hako',15,'','はこ|hako','竹|bambu','Uma caixa de bambu 竹 com o que se guarda 相.','箱|hako|caixa;ゴミ箱|gomibako|lixeira'],
['晩','noite','ban',12,'バン|ban','','日|sol','O sol 日 que escapou 免. Anoiteceu.','晩ご飯|bangohan|jantar;今晩|konban|esta noite'],
['髪','cabelo','kami',14,'ハツ|hatsu','かみ|kami','髟|cabelo','Os fios longos caindo. O cabelo.','髪|kami|cabelo;髪型|kamigata|penteado'],
['忙','ocupado','isogashii',6,'ボウ|bō','いそが(しい)|isoga(shii)','忄|coração','O coração 忄 sumindo 亡 de tanta coisa pra fazer.','忙しい|isogashii|ocupado;多忙|tabō|atarefado'],
['才','talento/anos','sai',3,'サイ|sai','','手|mão','Um broto rompendo. O dom que já nasce com a pessoa.','天才|tensai|gênio;～才|sai|anos de idade'],
['靴','sapato','kutsu',13,'カ|ka','くつ|kutsu','革|couro','O couro 革 transformado 化 em calçado.','靴|kutsu|sapato;靴下|kutsushita|meia'],
['恥','vergonha','hazukashii',10,'チ|chi','は(ずかしい)|ha(zukashii)','心|coração','A orelha 耳 esquentando e o coração 心 apertando.','恥ずかしい|hazukashii|envergonhado;恥|haji|vergonha'],
['偶','por acaso/par','gū',11,'グウ|gū','','亻|pessoa','Duas pessoas 亻 que se cruzam sem combinar.','偶然|gūzen|por acaso;偶数|gūsū|número par'],
['偉','grandioso/notável','erai',12,'イ|i','えら(い)|era(i)','亻|pessoa','A pessoa 亻 que se destaca das demais.','偉い|erai|admirável;偉大|idai|grandioso'],
['猫','gato','neko',11,'ビョウ|byō','ねこ|neko','犭|animal','O bicho 犭 que vive na horta 苗 caçando rato.','猫|neko|gato;子猫|koneko|gatinho'],
['幾','quanto/vários','iku',12,'キ|ki','いく|iku','幺|fio','Fios contados um a um. Quantos são?','幾つ|ikutsu|quantos;幾ら|ikura|quanto custa'],
['誰','quem','dare',15,'','だれ|dare','言|palavra','A palavra 言 perguntando qual pássaro 隹 é. Quem?','誰|dare|quem;誰か|dareka|alguém']
].map(x3);
/* ordem oficial do N3 (inclui os que já existem no N4/N5) */
const N3ORD='政議民連対部合市内相定回選米実関決全表戦経最現調化当約首法性的要制治務成期取都和機平加受続進数記初指権支産点報済活原共得解交資予向際勝面告反判認参利組信在件側任引求所次昨論官増係感情投示変打直両式確果容必演歳争談能位置流格疑過局放常状球職与供役構割身費付由説難優夫収断石違消神番規術備宅害配警育席訪乗残想声助労例然限追商葉伝働形景落好退頭負渡失差末守若種美命福望非観察段横深申様財港識呼達良阪候程満敗値突光路科積他処太客否師登易速存飛殺号単座破除完降責捕危給苦迎園具辞因馬愛富彼未舞亡冷適婦寄込顔類余王返妻背熱宿薬険頼覚船途許抜便留罪努精散静婚喜浮絶幸押倒等老曲払庭徒勤遅居雑招困欠更刻賛抱犯恐息遠戻願絵越欲痛笑互束似列探逃遊迷夢君閉緒折草暮酒悲晴掛到寝暗盗吸陽御歯忘雪吹娘誤洗慣礼窓昔貧怒泳祖杯疲皆鳴腹煙眠怖耳頂箱晩寒髪忙才靴恥偶偉猫幾誰';

/* ── N4 estendido · kanji da 3ª série que aparecem em provas e material N4 ── */
const N4X=[
['級','nível/classe','kyū',9,'キュウ|kyū','','糸|fio','O fio 糸 que chega 及 até certo ponto. Cada faixa é um nível.','上級|jōkyū|nível avançado;学級|gakkyū|turma'],
['皿','prato','sara',5,'','さら|sara','皿|prato','A vasilha rasa vista de frente, com o pé embaixo.','皿|sara|prato;灰皿|haizara|cinzeiro'],
['拾','pegar do chão','hirou',9,'シュウ|shū','ひろ(う)|hiro(u)','扌|mão','A mão 扌 juntando 合 o que caiu.','拾う|hirou|catar;拾得|shūtoku|achado'],
['昭','brilhante (era Showa)','shō',9,'ショウ|shō','','日|sol','O sol 日 que chama 召 a luz. Nome da era Showa.','昭和|shōwa|era Showa'],
['世','mundo/geração','yo',5,'セイ|sei;セ|se','よ|yo','一|linha','Três marcas de dez: as trinta gerações de um século.','世界|sekai|mundo;世話|sewa|cuidado'],
['整','organizar','totonoeru',16,'セイ|sei','ととの(える)|totono(eru)','攵|bater','Bater 攵 até tudo ficar certo 正 e alinhado.','整理|seiri|organização;調整|chōsei|ajuste'],
['第','ordinal (nº)','dai',11,'ダイ|dai','','竹|bambu','As tiras de bambu 竹 numeradas em ordem 弟.','第一|daiichi|primeiro;次第|shidai|conforme'],
['短','curto','mijikai',12,'タン|tan','みじか(い)|mijika(i)','矢|flecha','A flecha 矢 comparada ao feijão 豆. Bem curtinha.','短い|mijikai|curto;短期|tanki|curto prazo'],
['丁','bloco/exato','chō',2,'チョウ|chō;テイ|tei','','一|linha','Um prego visto de lado. Vira contador de quarteirões.','丁度|chōdo|exatamente;包丁|hōchō|faca de cozinha'],
['帳','caderno/cortina','chō',11,'チョウ|chō','','巾|pano','O pano 巾 comprido 長 usado como registro.','手帳|techō|agenda;通帳|tsūchō|caderneta'],
['追','—','',1,'','','一|linha','',''],
['笛','flauta/apito','fue',11,'テキ|teki','ふえ|fue','竹|bambu','O bambu 竹 furado por onde 由 o ar passa.','笛|fue|flauta;口笛|kuchibue|assobio'],
['転','girar/rolar','korobu',11,'テン|ten','ころ(ぶ)|koro(bu)','車|carro','A roda do carro 車 dando voltas.','自転車|jitensha|bicicleta;運転|unten|dirigir'],
['湯','água quente','yu',12,'トウ|tō','ゆ|yu','氵|água','A água 氵 aquecida pelo sol 昜.','お湯|oyu|água quente;湯気|yuge|vapor'],
['童','criança','warabe',12,'ドウ|dō','わらべ|warabe','立|de pé','A criança que fica de pé 立 na vila 里.','童話|dōwa|conto infantil;児童|jidō|criança'],
['倍','o dobro','bai',10,'バイ|bai','','亻|pessoa','A pessoa 亻 que se divide 咅 em duas partes iguais.','倍|bai|o dobro;二倍|nibai|duas vezes'],
['鼻','nariz','hana',14,'ビ|bi','はな|hana','鼻|nariz','O nariz 自 com as narinas e a base embaixo.','鼻|hana|nariz;鼻水|hanamizu|coriza'],
['筆','pincel','fude',12,'ヒツ|hitsu','ふで|fude','竹|bambu','O bambu 竹 com a mão 聿 segurando. O pincel.','筆|fude|pincel;鉛筆|enpitsu|lápis'],
['秒','segundo (tempo)','byō',9,'ビョウ|byō','','禾|arroz','A ponta 少 do grão 禾. A menor fração.','秒|byō|segundo;一秒|ichibyō|um segundo'],
['油','óleo','abura',8,'ユ|yu','あぶら|abura','氵|água','O líquido 氵 que vem 由 da semente.','油|abura|óleo;醤油|shōyu|shoyu'],
['有','ter/existir','aru',6,'ユウ|yū','あ(る)|a(ru)','月|carne','A mão segurando a carne 月. Possuir.','有名|yūmei|famoso;有る|aru|existir'],
['洋','oceano/ocidental','yō',9,'ヨウ|yō','','氵|água','A água 氵 vasta como um rebanho 羊. O mar aberto.','洋服|yōfuku|roupa ocidental;東洋|tōyō|Oriente'],
['練','treinar/refinar','neru',14,'レン|ren','ね(る)|ne(ru)','糸|fio','O fio 糸 trabalhado 東 até ficar macio.','練習|renshū|treino;訓練|kunren|treinamento'],
['荷','carga/bagagem','ni',10,'カ|ka','に|ni','艹|planta','A planta 艹 que a pessoa 何 carrega nas costas.','荷物|nimotsu|bagagem;出荷|shukka|expedição'],
['皮','—','',1,'','','一|linha','',''],
['歯','—','',1,'','','一|linha','',''],
['坂','—','',1,'','','一|linha','',''],
['板','—','',1,'','','一|linha','',''],
['詩','—','',1,'','','一|linha','',''],
['宮','—','',1,'','','一|linha','',''],
['庫','—','',1,'','','一|linha','',''],
['皿','—','',1,'','','一|linha','','']
].filter(a=>a[1]!=='—').map(x3);
/* extensão do N4: reaproveita tudo que já existe no registro global */
const N4EXT='期客級宮球橋曲局具君係血決庫湖幸港号根祭皿指歯詩次式実守取酒受州拾宿助昭消商章勝植申身神深世整昔相想息速他打第短談柱丁帳追定庭笛鉄転都投豆島湯童農波配倍箱畑坂板皮悲美鼻筆氷表秒負部福物平返放命面由油有遊予羊洋葉陽落流礼列練路和泳岸央化荷階感';

/* unidades do N4 · 28 blocos de 6 */
const N4U=[
 ['Sombras','ruim, escuro, remédio','悪','#8E4AD6'],['Longe Daqui','hospital, sorte, distância','遠','#7A55E0'],
 ['Som e Mar','loja, canção, verão','歌','#5B6FE8'],['Abrir o Mundo','girar, música, salão','開','#3B79E0'],
 ['Frio e Pressa','rosto, voltar, urgente','急','#2E8ED6'],['Força e Aula','vaca, forte, ensinar','教','#1F9BC4'],
 ['Perto de Casa','prata, distrito, cão','近','#17A3A8'],['Construir','pesquisa, prova, origem','建','#12A78A'],
 ['Luz e Cor','amplo, pensar, preto','光','#22A86A'],['Fazer e Parar','verdura, papel, pensar','作','#3FA84A'],
 ['A Cidade','mercado, morrer, tentar','市','#5FA630'],['Letras e Coisas','sala, qualidade, foto','字','#7FA324'],
 ['Quem Faz','fraco, pescoço, outono','者','#9C9E20'],['Reunir','praticar, morar, primavera','集','#B39420'],
 ['Lugares','calor, campo, cor','場','#C48420'],['Coração','pais, verdade, voz','心','#D07020'],
 ['Azul e Corte','pedra, neve, lavar','青','#D65A28'],['Correr','linha, escolher, enviar','走','#D64840'],
 ['Frente a Frente','esperar, época, tema','対','#D63F5E'],['Terra e Água','saber, chá, vestir','地','#CE3C7C'],
 ['Passagem','doer, grau, inverno','通','#BE3C96'],['Movimento','igual, salão, especial','動','#A840AC'],
 ['Trabalho','entregar, comida, campo','働','#8E48BE'],['Contra o Vento','voar, doença, roupa','風','#7350C4'],
 ['Palavras','texto, separar, sabor','文','#5A5CC4'],['Portão','povo, perguntar, remédio','門','#4468C4'],
 ['Formalidade','razão, viagem, ambos','様','#3078BE'],['Fios','verde, promessa, fino','糸','#2088B0']
].map(([t,s,g,col],i)=>({t,s,g,col,i0:i*6}));

/* ── unidades ── */
const U8=[
 {t:'A Família',s:'pai, mãe e irmãos',g:'家',col:'#E8574A',k:[0,1,2,3,4,5]},
 {t:'Gente e Mundo',s:'eu, amigos e o país',g:'人',col:'#5B8DEF',k:[6,7,8,9,10,11]},
 {t:'Que Horas São',s:'agora, hora e minuto',g:'時',col:'#9B6BEF',k:[12,13,14,15,16,17]},
 {t:'Antes e Depois',s:'semana, manhã e tarde',g:'週',col:'#22A8A0',k:[18,19,20,21,22,23]},
 {t:'Pra Onde',s:'os pontos cardeais',g:'方',col:'#E08A20',k:[24,25,26,27,28,29]},
 {t:'Verbos do Dia',s:'ir, vir, falar, ler',g:'動',col:'#3FB55F',k:[30,31,32,33,34,35]},
 {t:'Na Rua',s:'comer, comprar, estação',g:'街',col:'#D6476F',k:[36,37,38,39,40,41]},
 {t:'Como É',s:'alto, barato, novo, velho',g:'形',col:'#6E8AA8',k:[42,43,44,45,46,47]}
];
const U19=[
 ['Números I','de um a seis','数','#E8574A','一二三四五六'],
 ['Números II','sete até mil','算','#EF6A3C','七八九十百千'],
 ['Dinheiro e Sol','dez mil, iene e os astros','円','#E08A20','万円日月火水'],
 ['A Semana','madeira, ouro, terra','週','#C9A227','木金土曜年週'],
 ['O Relógio','hora, minuto, meio-dia','時','#9B6BEF','時間分半午今'],
 ['Idas e Vindas','antes, depois, sempre','行','#7B5BEF','前後先来毎行'],
 ['As Pessoas','homem, mulher, criança','人','#5B8DEF','人男女子友私'],
 ['A Família','pai, mãe e irmãos','家','#3B79E0','父母兄姉弟妹'],
 ['O Corpo','mão, pé, olho, boca','体','#2E9BD6','体手足耳目口'],
 ['Céu e Terra','montanha, rio, campo','天','#22A8A0','天気空山川田'],
 ['Chuva e Cor','raio, flor, branco','雨','#1FA37C','雨電花白赤名'],
 ['Na Mesa','peixe, carne, comer','食','#3FB55F','魚肉物食飲買'],
 ['Os Rumos','leste, oeste, direita','方','#6FA82E','東西南北右左'],
 ['Em Cima e Dentro','posição e tamanho','位','#93A122','上下内外大小'],
 ['Como É','longo, alto, novo','形','#B99020','長高安新古多'],
 ['Do Dia a Dia','pouco, si mesmo, casa','日','#C97A2B','少何自休家立'],
 ['Sair e Olhar','entrar, ver, ler','見','#D6476F','出入見聞書読'],
 ['A Fala','idioma, país, empresa','語','#C13F8C','言話語国会社'],
 ['A Cidade','escola, loja, estação','街','#8E5BD6','校店駅道車赤']
];
/* ── JLPT N2 ── */
const N2X=[
['党','partido','tō',10,'トウ|tō','','儿|pernas','Gente reunida debaixo do mesmo teto nobre. A facção política.','政党|seitō|partido;与党|yotō|situação'],
['協','cooperar','kyō',8,'キョウ|kyō','','十|dez','Dez 十 forças 力 puxando juntas.','協力|kyōryoku|cooperação;協会|kyōkai|associação'],
['総','total/geral','sō',14,'ソウ|sō','','糸|fio','Todos os fios 糸 amarrados num nó só.','総理|sōri|primeiro-ministro;総合|sōgō|conjunto'],
['領','território/domínio','ryō',14,'リョウ|ryō','','頁|cabeça','A cabeça 頁 que comanda a ordem. O que está sob domínio.','大統領|daitōryō|presidente;領土|ryōdo|território'],
['設','instalar/fundar','setsu',11,'セツ|setsu','もう(ける)|mō(keru)','言|palavra','A palavra 言 e a ferramenta 殳. Montar do zero.','建設|kensetsu|construção;設備|setsubi|instalação'],
['改','reformar/corrigir','kai',7,'カイ|kai','あらた(める)|arata(meru)','攵|bater','Bater 攵 em si mesmo 己 até melhorar.','改札|kaisatsu|catraca;改善|kaizen|melhoria'],
['府','governo/prefeitura','fu',8,'フ|fu','','广|telheiro','O arquivo público debaixo do telheiro 广.','政府|seifu|governo;大阪府|ōsakafu|Osaka'],
['査','investigar','sa',9,'サ|sa','','木|árvore','Examinar a madeira 木 peça por peça.','調査|chōsa|pesquisa;検査|kensa|exame'],
['委','confiar/comitê','i',8,'イ|i','','女|mulher','A mulher 女 e o arroz 禾. Entregar o encargo a alguém.','委員|iin|membro do comitê;委託|itaku|delegação'],
['軍','exército','gun',9,'グン|gun','','車|carro','Carros de guerra 車 cobertos, em formação.','軍隊|guntai|exército;海軍|kaigun|marinha'],
['団','grupo/time','dan',6,'ダン|dan','','囗|cerca','Gente cercada 囗 pelo mesmo objetivo 寸.','団体|dantai|organização;布団|futon|futon'],
['各','cada','kaku',6,'カク|kaku','おのおの|onoono','口|boca','Cada pé chegando à sua porta 口.','各自|kakuji|cada um;各国|kakkoku|cada país'],
['島','ilha','shima',10,'トウ|tō','しま|shima','山|montanha','Um pássaro pousado na montanha 山 no meio do mar.','島|shima|ilha;半島|hantō|península'],
['革','couro/reforma','kaku',9,'カク|kaku','かわ|kawa','革|couro','A pele esticada pra curtir. Também é transformar.','革命|kakumei|revolução;皮革|hikaku|couro'],
['勢','força/ímpeto','sei',13,'セイ|sei','いきお(い)|ikio(i)','力|força','A força 力 acumulada que arrasta tudo.','勢い|ikioi|ímpeto;情勢|jōsei|conjuntura'],
['減','diminuir','heru',12,'ゲン|gen','へ(る)|he(ru)','氵|água','A água 氵 baixando. Vai reduzindo.','減る|heru|diminuir;減少|genshō|redução'],
['再','de novo','futatabi',6,'サイ|sai','ふたた(び)|futata(bi)','冂|moldura','Repetir a mesma estrutura mais uma vez.','再会|saikai|reencontro;再び|futatabi|novamente'],
['税','imposto','zei',12,'ゼイ|zei','','禾|arroz','Parte do arroz 禾 que o governo tira.','税金|zeikin|imposto;消費税|shōhizei|imposto sobre consumo'],
['営','operar/administrar','itonamu',12,'エイ|ei','いとな(む)|itona(mu)','口|boca','Duas bocas 口 sob o teto do acampamento. Tocar o negócio.','経営|keiei|gestão;営業|eigyō|atendimento'],
['比','comparar','kuraberu',4,'ヒ|hi','くら(べる)|kura(beru)','比|comparar','Duas pessoas lado a lado, uma medindo a outra.','比べる|kuraberu|comparar;比較|hikaku|comparação'],
['防','prevenir/defender','fusegu',7,'ボウ|bō','ふせ(ぐ)|fuse(gu)','阝|colina','A colina 阝 servindo de barreira.','予防|yobō|prevenção;消防|shōbō|bombeiros'],
['境','fronteira','sakai',14,'キョウ|kyō','さかい|sakai','土|terra','A terra 土 onde termina um lado e começa outro.','環境|kankyō|meio ambiente;国境|kokkyō|fronteira'],
['導','guiar','michibiku',15,'ドウ|dō','みちび(く)|michibi(ku)','寸|medida','Pegar pela mão 寸 e mostrar o caminho 道.','指導|shidō|orientação;導入|dōnyū|introdução'],
['副','secundário/vice','fuku',11,'フク|fuku','','刂|faca','Cortar 刂 uma segunda porção. O suplente.','副社長|fukushachō|vice-presidente;副作用|fukusayō|efeito colateral'],
['算','calcular','san',14,'サン|san','','竹|bambu','Contar com as varetas de bambu 竹 do ábaco.','計算|keisan|cálculo;予算|yosan|orçamento'],
['輸','transportar','yu',16,'ユ|yu','','車|carro','O carro 車 levando a carga pra longe.','輸出|yushutsu|exportação;輸入|yunyū|importação'],
['述','declarar/relatar','noberu',8,'ジュツ|jutsu','の(べる)|no(beru)','辶|caminhar','Andar 辶 expondo o pensamento pelo caminho.','記述|kijutsu|descrição;述べる|noberu|declarar'],
['農','agricultura','nō',13,'ノウ|nō','','辰|concha','Trabalhar o campo desde a madrugada.','農業|nōgyō|agricultura;農家|nōka|fazendeiro'],
['武','marcial/guerra','bu',8,'ブ|bu;ム|mu','','止|parar','Parar 止 o inimigo com a lança 戈.','武士|bushi|samurai;武器|buki|arma'],
['象','elefante/símbolo','shō',12,'ショウ|shō;ゾウ|zō','','豕|porco','O desenho do elefante com a tromba. Virou símbolo.','対象|taishō|alvo;象|zō|elefante'],
['域','área/zona','iki',11,'イキ|iki','','土|terra','A terra 土 delimitada pela lança. O território.','地域|chiiki|região;区域|kuiki|zona'],
['額','valor/testa','gaku',18,'ガク|gaku','ひたい|hitai','頁|cabeça','A testa 頁 debaixo do telhado. Também o montante escrito.','金額|kingaku|quantia;額|hitai|testa'],
['担','carregar/assumir','ninau',8,'タン|tan','にな(う)|nina(u);かつ(ぐ)|katsu(gu)','扌|mão','A mão 扌 pegando a carga do amanhecer.','担当|tantō|encarregado;負担|futan|encargo'],
['準','padrão/preparo','jun',13,'ジュン|jun','','氵|água','O nível da água 氵 como referência.','準備|junbi|preparação;基準|kijun|critério'],
['賞','prêmio','shō',15,'ショウ|shō','','貝|concha','Dinheiro 貝 dado de presente pelo mérito.','賞金|shōkin|prêmio em dinheiro;受賞|jushō|premiação'],
['造','fabricar','tsukuru',10,'ゾウ|zō','つく(る)|tsuku(ru)','辶|caminhar','Andar 辶 anunciando 告 o que se produziu.','製造|seizō|fabricação;構造|kōzō|estrutura'],
['被','sofrer/vestir','kaburu',10,'ヒ|hi','こうむ(る)|kōmu(ru)','衤|roupa','A roupa 衤 que cobre. Levar o impacto.','被害|higai|prejuízo;被る|kaburu|usar na cabeça'],
['技','técnica/habilidade','waza',7,'ギ|gi','わざ|waza','扌|mão','O que a mão 扌 aprendeu a fazer.','技術|gijutsu|tecnologia;技|waza|golpe'],
['低','baixo','hikui',7,'テイ|tei','ひく(い)|hiku(i)','亻|pessoa','A pessoa 亻 abaixada no fundo 氐.','低い|hikui|baixo;最低|saitei|o mínimo'],
['復','restaurar/repetir','fuku',12,'フク|fuku','','彳|passo','Andar 彳 de volta pelo mesmo caminho.','復習|fukushū|revisão;往復|ōfuku|ida e volta'],
['移','mover/transferir','utsuru',11,'イ|i','うつ(る)|utsu(ru)','禾|arroz','Levar o arroz 禾 de um campo pra outro.','移る|utsuru|mudar-se;移動|idō|deslocamento'],
['個','unidade/individual','ko',10,'コ|ko','','亻|pessoa','Cada pessoa 亻 contada separadamente.','一個|ikko|uma unidade;個人|kojin|indivíduo'],
['課','lição/seção','ka',15,'カ|ka','','言|palavra','A palavra 言 dividida em porções de estudo.','課題|kadai|tarefa;課長|kachō|chefe de seção'],
['極','extremo/polo','kyoku',12,'キョク|kyoku','きわ(める)|kiwa(meru)','木|árvore','A viga 木 no ponto mais alto do telhado.','積極的|sekkyokuteki|proativo;北極|hokkyoku|polo norte'],
['含','conter/incluir','fukumu',7,'ガン|gan','ふく(む)|fuku(mu)','口|boca','Guardar 今 na boca 口. Está dentro.','含む|fukumu|incluir;含有|gan-yū|teor'],
['蔵','armazém/guardar','kura',15,'ゾウ|zō','くら|kura','艹|planta','Esconder 臧 debaixo da vegetação 艹. O depósito.','冷蔵庫|reizōko|geladeira;蔵|kura|armazém'],
['量','quantidade','ryō',12,'リョウ|ryō','はか(る)|haka(ru)','里|vila','A balança pesando a carga.','量|ryō|quantidade;大量|tairyō|grande volume'],
['型','molde/tipo','kata',9,'ケイ|kei','かた|kata','土|terra','O molde de barro 土 que dá forma.','型|kata|modelo;血液型|ketsuekigata|tipo sanguíneo'],
['況','situação','kyō',8,'キョウ|kyō','','氵|água','Como está o nível da água 氵 agora.','状況|jōkyō|situação;不況|fukyō|recessão'],
['針','agulha','hari',10,'シン|shin','はり|hari','金|metal','O metal 金 afinado até virar ponta.','針|hari|agulha;方針|hōshin|diretriz'],
['専','exclusivo/especialidade','sen',9,'セン|sen','もっぱ(ら)|moppa(ra)','寸|medida','Concentrar tudo numa coisa só.','専門|senmon|especialidade;専用|sen-yō|uso exclusivo'],
['谷','vale','tani',7,'コク|koku','たに|tani','谷|vale','A abertura entre duas montanhas com a boca 口 embaixo.','谷|tani|vale;渋谷|shibuya|Shibuya'],
['史','história','shi',5,'シ|shi','','口|boca','A mão registrando 口 o que aconteceu.','歴史|rekishi|história;史料|shiryō|fonte histórica'],
['階','andar/degrau','kai',12,'カイ|kai','','阝|colina','Degraus na colina 阝, todos 皆 iguais.','階段|kaidan|escada;二階|nikai|segundo andar'],
['管','tubo/administrar','kuda',14,'カン|kan','くだ|kuda','竹|bambu','O bambu 竹 oco do oficial 官. Tubo e gestão.','管理|kanri|gestão;水道管|suidōkan|encanamento'],
['兵','soldado','hei',7,'ヘイ|hei','','八|separar','Duas mãos erguendo o machado. O soldado.','兵士|heishi|soldado;兵器|heiki|armamento'],
['接','conectar/atender','setsu',11,'セツ|setsu','','扌|mão','A mão 扌 tocando na outra. Fazer contato.','面接|mensetsu|entrevista;直接|chokusetsu|direto'],
['効','efeito','kō',8,'コウ|kō','き(く)|ki(ku)','力|força','A força 力 que cruza 交 e produz resultado.','効果|kōka|efeito;有効|yūkō|válido'],
['丸','redondo/círculo','maru',3,'ガン|gan','まる|maru','丶|ponto','Alguém encolhido em bola.','丸い|marui|redondo;丸|maru|círculo'],
['録','registrar','roku',16,'ロク|roku','','金|metal','Gravar no metal 金 pra não apagar.','記録|kiroku|registro;録音|rokuon|gravação'],
['省','ministério/omitir','shō',9,'ショウ|shō;セイ|sei','はぶ(く)|habu(ku)','目|olho','Olhar 目 com poucos 少 detalhes. Resumir.','文部省|monbushō|ministério;省く|habuku|omitir'],
['旧','antigo/anterior','kyū',5,'キュウ|kyū','','日|sol','O dia 日 que já passou faz tempo.','旧|kyū|antigo;復旧|fukkyū|restauração'],
['橋','ponte','hashi',16,'キョウ|kyō','はし|hashi','木|árvore','A viga de madeira 木 erguida sobre o rio.','橋|hashi|ponte;歩道橋|hodōkyō|passarela'],
['岸','margem/costa','kishi',8,'ガン|gan','きし|kishi','山|montanha','O penhasco onde a montanha 山 encontra a água.','海岸|kaigan|litoral;岸|kishi|margem'],
['周','volta/em torno','shū',8,'シュウ|shū','まわ(り)|mawa(ri)','口|boca','O contorno completo de um terreno.','周り|mawari|arredores;一周|isshū|uma volta'],
['材','material/madeira','zai',7,'ザイ|zai','','木|árvore','A madeira 木 cortada na medida 才 pra obra.','材料|zairyō|material;教材|kyōzai|material didático'],
['央','centro','ō',5,'オウ|ō','','大|grande','Uma pessoa 大 bem no meio da moldura.','中央|chūō|centro;中央線|chūōsen|linha Chuo'],
['券','bilhete/cupom','ken',8,'ケン|ken','','刀|faca','O papel cortado 刀 em duas metades. O canhoto.','切符|ken|bilhete;定期券|teikiken|passe'],
['編','editar/tricotar','amu',15,'ヘン|hen','あ(む)|a(mu)','糸|fio','Trançar os fios 糸 numa ordem. Editar é isso.','編集|henshū|edição;編む|amu|tricotar'],
['竹','bambu','take',6,'チク|chiku','たけ|take','竹|bambu','Duas folhas de bambu penduradas.','竹|take|bambu;竹林|chikurin|bambuzal'],
['超','ultrapassar/super','koeru',12,'チョウ|chō','こ(える)|ko(eru)','走|correr','Correr 走 e passar por cima de todos.','超える|koeru|exceder;超過|chōka|excesso'],
['並','alinhar/comum','narabu',8,'ヘイ|hei','なら(ぶ)|nara(bu)','一|linha','Duas pessoas de pé lado a lado.','並ぶ|narabu|enfileirar-se;並木|namiki|arborizado'],
['療','tratamento','ryō',17,'リョウ|ryō','','疒|doença','Cuidar da doença 疒 até melhorar.','治療|chiryō|tratamento;医療|iryō|assistência médica'],
['採','coletar/adotar','toru',11,'サイ|sai','と(る)|to(ru)','扌|mão','A mão 扌 colhendo o que escolheu.','採用|saiyō|contratação;採る|toru|colher'],
['授','conferir/ensinar','sazukeru',11,'ジュ|ju','さず(ける)|sazu(keru)','扌|mão','A mão 扌 entregando 受 o conhecimento.','授業|jugyō|aula;教授|kyōju|professor'],
['及','alcançar/e','oyobu',3,'キュウ|kyū','およ(ぶ)|oyo(bu)','又|mão','A mão 又 esticada pegando quem vai à frente.','及び|oyobi|e;普及|fukyū|difusão'],
['板','tábua/placa','ita',8,'バン|ban;ハン|han','いた|ita','木|árvore','A madeira 木 serrada bem fina.','黒板|kokuban|quadro-negro;板|ita|tábua'],
['弁','discurso/válvula','ben',5,'ベン|ben','','廾|mãos','Duas mãos erguendo o chapéu do orador.','弁当|bentō|marmita;弁護士|bengoshi|advogado'],
['幹','tronco/principal','miki',13,'カン|kan','みき|miki','干|escudo','O tronco central que sustenta a árvore.','新幹線|shinkansen|trem-bala;幹部|kanbu|diretoria'],
['姿','figura/aparência','sugata',9,'シ|shi','すがた|sugata','女|mulher','A mulher 女 na pose do próximo 次 passo.','姿|sugata|silhueta;姿勢|shisei|postura'],
['均','equilíbrio/médio','kin',7,'キン|kin','','土|terra','Nivelar a terra 土 por igual.','平均|heikin|média;均等|kintō|igualdade'],
['純','puro','jun',10,'ジュン|jun','','糸|fio','O fio 糸 sem nenhuma mistura.','単純|tanjun|simples;純粋|junsui|puro'],
['損','perda/prejuízo','son',13,'ソン|son','そこ(なう)|soko(nau)','扌|mão','A mão 扌 deixando cair o dinheiro 員.','損|son|prejuízo;損害|songai|dano'],
['裏','verso/avesso','ura',13,'リ|ri','うら|ura','衣|roupa','O forro da roupa 衣. O lado de dentro.','裏|ura|verso;裏切る|uragiru|trair'],
['郵','correio','yū',11,'ユウ|yū','','阝|vila','A vila 阝 que recebia o mensageiro.','郵便|yūbin|correio;郵送|yūsō|envio postal'],
['縮','encolher','chijimu',17,'シュク|shuku','ちぢ(む)|chiji(mu)','糸|fio','O fio 糸 recolhido pra dentro da casa.','縮む|chijimu|encolher;短縮|tanshuku|redução'],
['拡','expandir','kaku',8,'カク|kaku','ひろ(げる)|hiro(geru)','扌|mão','A mão 扌 abrindo o espaço amplo 広.','拡大|kakudai|ampliação;拡張|kakuchō|expansão'],
['秘','secreto','hi',10,'ヒ|hi','ひ(める)|hi(meru)','禾|arroz','O que se guarda escondido, sem falar.','秘密|himitsu|segredo;秘書|hisho|secretário'],
['密','denso/íntimo','mitsu',11,'ミツ|mitsu','','宀|telhado','Debaixo do telhado 宀, tudo bem apertado.','秘密|himitsu|segredo;密度|mitsudo|densidade'],
['派','facção/enviar','ha',9,'ハ|ha','','氵|água','O rio 氵 que se ramifica em braços.','派手|hade|chamativo;立派|rippa|esplêndido'],
['展','expor/desdobrar','ten',10,'テン|ten','','尸|abrigo','Estender o pano pra mostrar.','展示|tenji|exposição;発展|hatten|desenvolvimento'],
['層','camada/estrato','sō',14,'ソウ|sō','','尸|abrigo','Andares 曽 empilhados sob o teto 尸.','階層|kaisō|camada;年齢層|nenreisō|faixa etária'],
['帯','faixa/portar','obi',10,'タイ|tai','おび|obi','巾|pano','A faixa de pano 巾 amarrada na cintura.','携帯|keitai|celular;帯|obi|faixa do quimono'],
['訓','instrução/leitura kun','kun',10,'クン|kun','','言|palavra','A palavra 言 que corre como rio, ensinando.','訓練|kunren|treinamento;訓読み|kunyomi|leitura japonesa'],
['群','grupo/bando','mure',13,'グン|gun','む(れ)|mu(re)','羊|ovelha','Ovelhas 羊 juntas sob o mesmo pastor 君.','群れ|mure|bando;群馬|gunma|Gunma'],
['徴','sinal/cobrar','chō',14,'チョウ|chō','','彳|passo','Andar 彳 procurando o indício.','特徴|tokuchō|característica;徴収|chōshū|arrecadação'],
['賃','aluguel/salário','chin',13,'チン|chin','','貝|concha','O dinheiro 貝 confiado 任 pelo serviço.','家賃|yachin|aluguel;賃金|chingin|salário'],
['迫','pressionar/aproximar','semaru',8,'ハク|haku','せま(る)|sema(ru)','辶|caminhar','Andar 辶 chegando cada vez mais perto.','迫る|semaru|aproximar-se;圧迫|appaku|pressão'],
['貨','mercadoria/moeda','ka',11,'カ|ka','','貝|concha','O dinheiro 貝 que muda 化 de mão.','貨物|kamotsu|carga;通貨|tsūka|moeda'],
['硬','duro/rígido','katai',12,'コウ|kō','かた(い)|kata(i)','石|pedra','Duro que nem pedra 石.','硬い|katai|duro;硬貨|kōka|moeda metálica'],
['齢','idade','rei',17,'レイ|rei','','歯|dente','Contava-se a idade pelos dentes 歯.','年齢|nenrei|idade;高齢|kōrei|idade avançada'],
['鮮','fresco/vívido','sen',17,'セン|sen','あざ(やか)|aza(yaka)','魚|peixe','Peixe 魚 e ovelha 羊 recém-chegados.','新鮮|shinsen|fresco;鮮やか|azayaka|vívido'],
['幅','largura','haba',12,'フク|fuku','はば|haba','巾|pano','A largura do pano 巾 esticado.','幅|haba|largura;大幅|ōhaba|grande margem'],
['沿','ao longo de','sou',8,'エン|en','そ(う)|so(u)','氵|água','Seguir a margem do rio 氵.','沿線|ensen|ao longo da linha;沿う|sou|acompanhar'],
['詰','encher/entupir','tsumeru',13,'キツ|kitsu','つ(める)|tsu(meru)','言|palavra','Empurrar tudo pra dentro até não caber mais.','詰める|tsumeru|encher;缶詰|kanzume|enlatado'],
['泊','pernoitar','tomaru',8,'ハク|haku','と(まる)|to(maru)','氵|água','O barco parado na água 氵 passando a noite.','泊まる|tomaru|hospedar-se;宿泊|shukuhaku|hospedagem'],
['訳','traduzir/motivo','wake',11,'ヤク|yaku','わけ|wake','言|palavra','Escolher 尺 as palavras 言 certas na outra língua.','翻訳|honyaku|tradução;訳|wake|razão'],
['燃','queimar','moeru',16,'ネン|nen','も(える)|mo(eru)','火|fogo','O fogo 火 pegando de verdade.','燃える|moeru|queimar;燃料|nenryō|combustível'],
['汚','sujo','kitanai',6,'オ|o','きたな(い)|kitana(i);よご(れる)|yogo(reru)','氵|água','A água 氵 parada que apodreceu.','汚い|kitanai|sujo;汚染|osen|poluição'],
['肩','ombro','kata',8,'ケン|ken','かた|kata','月|corpo','A porta 戸 do corpo 月. Onde o braço encaixa.','肩|kata|ombro;肩書き|katagaki|cargo'],
['腕','braço/habilidade','ude',12,'ワン|wan','うで|ude','月|corpo','A parte do corpo 月 que se dobra.','腕|ude|braço;腕前|udemae|perícia'],
['綿','algodão','men',14,'メン|men','わた|wata','糸|fio','O fio 糸 branco e macio que vem da planta.','綿|wata|algodão;木綿|momen|tecido de algodão'],
['弾','tocar/bala','hiku',12,'ダン|dan','ひ(く)|hi(ku);たま|tama','弓|arco','O arco 弓 esticado e solto. Também dedilhar cordas.','弾く|hiku|tocar (piano);爆弾|bakudan|bomba'],
['捜','procurar/vasculhar','sagasu',10,'ソウ|sō','さが(す)|saga(su)','扌|mão','A mão 扌 remexendo tudo com a tocha.','捜す|sagasu|procurar;捜査|sōsa|investigação'],
['憲','constituição','ken',16,'ケン|ken','','心|coração','A lei suprema guardada no coração 心 da nação.','憲法|kenpō|constituição;立憲|rikken|constitucional'],
['兆','trilhão/presságio','chō',6,'チョウ|chō','きざ(し)|kiza(shi)','儿|pernas','As rachaduras do casco de tartaruga que anunciavam o futuro.','兆候|chōkō|sinal;一兆|itchō|um trilhão'],
['融','fundir/finanças','yū',16,'ユウ|yū','','虫|inseto','O vapor subindo do caldeirão. Derreter e circular dinheiro.','金融|kinyū|finanças;融合|yūgō|fusão'],
['湾','baía','wan',12,'ワン|wan','','氵|água','A água 氵 que faz a curva na costa.','湾|wan|baía;台湾|taiwan|Taiwan'],
['脳','cérebro','nō',11,'ノウ|nō','','月|corpo','A parte do corpo 月 guardada no crânio.','頭脳|zunō|intelecto;脳|nō|cérebro'],
['欧','Europa','ō',8,'オウ|ō','','欠|falta','Abreviação fonética usada para a Europa.','欧州|ōshū|Europa;欧米|ōbei|Ocidente'],
['舎','alojamento','sha',8,'シャ|sha','','人|pessoa','Um abrigo simples de telhado baixo.','宿舎|shukusha|alojamento;田舎|inaka|interior'],
['補','complementar','oginau',12,'ホ|ho','おぎな(う)|ogina(u)','衤|roupa','Remendar 衤 o que está faltando.','補助|hojo|auxílio;候補|kōho|candidato'],
['州','província/estado','shū',6,'シュウ|shū','す|su','川|rio','As ilhotas 川 no meio do rio. Divisões de terra.','九州|kyūshū|Kyushu;州|shū|estado'],
['辺','arredores/lado','hen',5,'ヘン|hen','あた(り)|ata(ri)','辶|caminhar','Andar 辶 pelas redondezas.','辺り|atari|arredores;周辺|shūhen|proximidades'],
['庁','repartição pública','chō',5,'チョウ|chō','','广|telheiro','O prédio 广 onde o funcionário 丁 atende.','県庁|kenchō|governo provincial;官庁|kanchō|órgão público'],
['担','—','',1,'','','一|linha','',''],
['講','palestra/curso','kō',17,'コウ|kō','','言|palavra','A palavra 言 estruturada como uma construção 冓.','講義|kōgi|aula magna;講座|kōza|curso'],
['演','—','',1,'','','一|linha','',''],
['権','—','',1,'','','一|linha','',''],
['庫','depósito/garagem','ko',10,'コ|ko;ク|ku','','广|telheiro','O carro 車 guardado sob o telheiro 广.','金庫|kinko|cofre;車庫|shako|garagem'],
['師','—','',1,'','','一|linha','',''],
['勧','recomendar','susumeru',13,'カン|kan','すす(める)|susu(meru)','力|força','Usar força 力 pra convencer alguém a fazer.','勧める|susumeru|recomendar;勧誘|kan-yū|convite'],
['券','—','',1,'','','一|linha','',''],
['盛','próspero/servir','sakan',11,'セイ|sei','も(る)|mo(ru);さか(ん)|saka(n)','皿|prato','O prato 皿 transbordando. Fartura.','盛る|moru|servir;盛大|seidai|grandioso'],
['腐','apodrecer/tofu','kusaru',14,'フ|fu','くさ(る)|kusa(ru)','肉|carne','A carne 肉 esquecida no depósito 府.','豆腐|tōfu|tofu;腐る|kusaru|estragar'],
['扱','manusear/tratar','atsukau',6,'','あつか(う)|atsuka(u)','扌|mão','A mão 扌 alcançando 及 e lidando com a coisa.','扱う|atsukau|manusear;取扱|toriatsukai|manuseio'],
['押','—','',1,'','','一|linha','',''],
['占','ocupar/adivinhar','shimeru',5,'セン|sen','し(める)|shi(meru);うらな(う)|urana(u)','卜|adivinhar','A rachadura 卜 e a boca 口 lendo o presságio.','占める|shimeru|ocupar;占い|uranai|adivinhação'],
['催','realizar/promover','moyoosu',13,'サイ|sai','もよお(す)|moyoo(su)','亻|pessoa','A pessoa 亻 que organiza o evento na montanha.','開催|kaisai|realização;催す|moyoosu|promover'],
['歓','alegria/boas-vindas','kan',15,'カン|kan','','欠|boca aberta','A boca 欠 escancarada de contentamento.','歓迎|kangei|boas-vindas;歓声|kansei|aclamação'],
['触','tocar/sentir','sawaru',13,'ショク|shoku','さわ(る)|sawa(ru);ふ(れる)|fu(reru)','角|chifre','O chifre 角 encostando no inseto. Contato leve.','触る|sawaru|tocar;接触|sesshoku|contato'],
['絡','emaranhar/contatar','karamu',12,'ラク|raku','から(む)|kara(mu)','糸|fio','Fios 糸 se enroscando um no outro.','連絡|renraku|contato;絡む|karamu|enroscar'],
['距','distância','kyo',12,'キョ|kyo','','足|pé','Quantos pés 足 grandes separam os dois pontos.','距離|kyori|distância'],
['離','separar/distância','hanareru',18,'リ|ri','はな(れる)|hana(reru)','隹|pássaro','O pássaro 隹 alçando voo pra longe.','離れる|hanareru|afastar-se;距離|kyori|distância'],
['貸','emprestar','kasu',12,'タイ|tai','か(す)|ka(su)','貝|concha','Passar o dinheiro 貝 no lugar 代 de outro.','貸す|kasu|emprestar;貸家|kashiya|casa de aluguel'],
['富','—','',1,'','','一|linha','',''],
['豊','abundante','yutaka',13,'ホウ|hō','ゆた(か)|yuta(ka)','豆|vasilha','A vasilha 豆 empilhada de grãos.','豊か|yutaka|abundante;豊富|hōfu|fartura'],
['贈','presentear','okuru',18,'ゾウ|zō','おく(る)|oku(ru)','貝|concha','O dinheiro 貝 que aumenta 曽 na mão do outro.','贈る|okuru|presentear;贈答|zōtō|troca de presentes'],
['彫','esculpir','horu',11,'チョウ|chō','ほ(る)|ho(ru)','彡|traços','Riscar 彡 em volta 周 até formar a figura.','彫刻|chōkoku|escultura;彫る|horu|entalhar'],
['販','vender','han',11,'ハン|han','','貝|concha','Devolver 反 dinheiro 貝. A troca comercial.','販売|hanbai|venda;自販機|jihanki|máquina de vendas'],
['需','demanda/necessidade','ju',14,'ジュ|ju','','雨|chuva','A chuva 雨 que todo mundo espera.','需要|juyō|demanda;必需品|hitsujuhin|item essencial'],
['績','resultado/mérito','seki',17,'セキ|seki','','糸|fio','Fiar 糸 e acumular 責 o trabalho feito.','成績|seiseki|nota;業績|gyōseki|desempenho'],
['略','abreviar/estratégia','ryaku',11,'リャク|ryaku','','田|campo','Dividir o campo 田 em partes. Simplificar.','省略|shōryaku|abreviação;戦略|senryaku|estratégia'],
['封','selar/lacrar','fū',9,'フウ|fū;ホウ|hō','','寸|medida','Empilhar terra 土 e marcar com a mão 寸. Selado.','封筒|fūtō|envelope;封鎖|fūsa|bloqueio'],
['額','—','',1,'','','一|linha','',''],
['印','selo/marca','shirushi',6,'イン|in','しるし|shirushi','卩|ajoelhar','A mão pressionando o carimbo no papel.','印|shirushi|marca;印刷|insatsu|impressão'],
['刷','imprimir','suru',8,'サツ|satsu','す(る)|su(ru)','刂|faca','A prancha 尸 entintada e a faca 刂 aparando.','印刷|insatsu|impressão;刷る|suru|imprimir'],
['純','—','',1,'','','一|linha','',''],
['薄','fino/ralo','usui',16,'ハク|haku','うす(い)|usu(i)','艹|planta','A grama 艹 rala perto da água.','薄い|usui|fino;薄暗い|usugurai|penumbra'],
['厚','grosso/generoso','atsui',9,'コウ|kō','あつ(い)|atsu(i)','厂|penhasco','A camada espessa do penhasco 厂.','厚い|atsui|grosso;厚着|atsugi|roupa pesada'],
['浅','raso','asai',9,'セン|sen','あさ(い)|asa(i)','氵|água','Pouca água 氵. Dá pé.','浅い|asai|raso;浅草|asakusa|Asakusa'],
['濃','concentrado/escuro','koi',16,'ノウ|nō','こ(い)|ko(i)','氵|água','A água 氵 do campo 農 carregada de nutriente.','濃い|koi|forte;濃度|nōdo|concentração'],
['鋭','afiado/agudo','surudoi',15,'エイ|ei','するど(い)|surudo(i)','金|metal','O metal 金 que corta 兌 fino.','鋭い|surudoi|afiado;鋭角|eikaku|ângulo agudo'],
['鈍','rombudo/lento','nibui',12,'ドン|don','にぶ(い)|nibu(i)','金|metal','O metal 金 pesado que não corta mais.','鈍い|nibui|lento;鈍感|donkan|insensível'],
['乾','secar','kawaku',11,'カン|kan','かわ(く)|kawa(ku)','乙|gancho','O sol nascendo e secando tudo.','乾く|kawaku|secar;乾杯|kanpai|brinde'],
['湿','úmido','shimeru',12,'シツ|shitsu','しめ(る)|shime(ru)','氵|água','A água 氵 impregnada no tecido.','湿気|shikke|umidade;湿る|shimeru|umedecer'],
['凍','congelar','kooru',10,'トウ|tō','こお(る)|kō(ru)','冫|gelo','O gelo 冫 no leste 東, onde faz frio.','凍る|kōru|congelar;冷凍|reitō|congelamento'],
['溶','dissolver','tokeru',13,'ヨウ|yō','と(ける)|to(keru)','氵|água','A água 氵 que aceita 容 tudo dentro.','溶ける|tokeru|derreter;溶解|yōkai|dissolução'],
['吐','vomitar/cuspir','haku',6,'ト|to','は(く)|ha(ku)','口|boca','A boca 口 devolvendo pra terra 土.','吐く|haku|vomitar;吐息|toiki|suspiro'],
['震','tremer','furueru',15,'シン|shin','ふる(える)|furu(eru)','雨|chuva','A chuva 雨 e o trovão sacudindo tudo.','地震|jishin|terremoto;震える|furueru|tremer'],
['災','desastre','wazawai',7,'サイ|sai','わざわ(い)|wazawa(i)','火|fogo','O rio transbordando 巛 e o fogo 火. Catástrofe.','災害|saigai|desastre;火災|kasai|incêndio'],
['避','evitar/escapar','sakeru',16,'ヒ|hi','さ(ける)|sa(keru)','辶|caminhar','Andar 辶 por outro lado pra fugir do problema.','避ける|sakeru|evitar;避難|hinan|evacuação'],
['救','salvar/socorrer','sukuu',11,'キュウ|kyū','すく(う)|suku(u)','攵|bater','Estender 求 a mão 攵 pra quem está afundando.','救急車|kyūkyūsha|ambulância;救う|sukuu|salvar'],
['傷','ferida/machucar','kizu',13,'ショウ|shō','きず|kizu','亻|pessoa','A pessoa 亻 marcada pelo golpe.','傷|kizu|ferida;負傷|fushō|lesão'],
['痛','—','',1,'','','一|linha','',''],
['殿','senhor/palácio','dono',13,'デン|den','との|tono','殳|arma','O grande salão com a guarda 殳 na porta.','殿|tono|senhor feudal;御殿|goten|palácio'],
['皇','imperador','kō',9,'コウ|kō;オウ|ō','','白|branco','O rei 王 branco 白, acima de todos.','天皇|tennō|imperador;皇室|kōshitsu|família imperial'],
['臣','vassalo/ministro','shin',7,'シン|shin','','臣|vassalo','O olho baixado diante do soberano.','大臣|daijin|ministro;家臣|kashin|vassalo'],
['庶','povo comum','sho',11,'ショ|sho','','广|telheiro','A multidão sob o telheiro 广.','庶民|shomin|povo;庶務|shomu|serviços gerais'],
['敬','respeitar','uyamau',12,'ケイ|kei','うやま(う)|uyama(u)','攵|bater','Curvar-se com toda a atenção.','敬語|keigo|linguagem honorífica;尊敬|sonkei|respeito'],
['尊','respeitável/nobre','tōtoi',12,'ソン|son','とうと(い)|tōto(i)','寸|medida','O jarro de saquê erguido com as duas mãos 寸.','尊敬|sonkei|respeito;尊重|sonchō|consideração'],
['厳','severo/solene','kibishii',17,'ゲン|gen','きび(しい)|kibi(shii)','⺍|topo','A ordem gritada do alto do penhasco.','厳しい|kibishii|rigoroso;厳格|genkaku|severo'],
['censo','—','',1,'','','一|linha','',''],
['寛','tolerante','kan',13,'カン|kan','','宀|telhado','A casa 宀 larga, que acolhe todo mundo.','寛大|kandai|tolerante;寛容|kan-yō|indulgência'],
['優','—','',1,'','','一|linha','',''],
['貴','precioso/nobre','tōtoi',12,'キ|ki','とうと(い)|tōto(i)','貝|concha','A concha 貝 guardada com as duas mãos.','貴重|kichō|valioso;貴族|kizoku|nobreza'],
['宝','tesouro','takara',8,'ホウ|hō','たから|takara','宀|telhado','O jade 玉 guardado debaixo do telhado 宀.','宝|takara|tesouro;宝石|hōseki|joia'],
['珍','raro/curioso','mezurashii',9,'チン|chin','めずら(しい)|mezura(shii)','王|jade','O jade 王 com os riscos raros.','珍しい|mezurashii|raro;珍味|chinmi|iguaria'],
['奇','estranho/ímpar','ki',8,'キ|ki','','大|grande','Uma pessoa grande 大 numa pose esquisita.','奇妙|kimyō|bizarro;好奇心|kōkishin|curiosidade'],
['巨','gigante','kyo',5,'キョ|kyo','','工|obra','A régua grande do carpinteiro.','巨大|kyodai|gigantesco;巨人|kyojin|gigante'],
['微','minúsculo/sutil','bi',13,'ビ|bi','','彳|passo','Andar 彳 tão de leve que ninguém nota.','微妙|bimyō|sutil;顕微鏡|kenbikyō|microscópio'],
['傾','inclinar','katamuku',13,'ケイ|kei','かたむ(く)|katamu(ku)','亻|pessoa','A pessoa 亻 com a cabeça 頁 pendendo pro lado.','傾く|katamuku|inclinar;傾向|keikō|tendência'],
['績','—','',1,'','','一|linha','',''],
['込','—','',1,'','','一|linha','',''],
['伸','esticar/crescer','nobiru',7,'シン|shin','の(びる)|no(biru)','亻|pessoa','A pessoa 亻 se espreguiçando 申.','伸びる|nobiru|esticar;伸長|shinchō|crescimento'],
['延','adiar/prolongar','nobasu',8,'エン|en','の(びる)|no(biru)','廴|estender','Arrastar 廴 o prazo pra frente.','延期|enki|adiamento;延長|enchō|prorrogação'],
['premi','—','',1,'','','一|linha','',''],
['묘','—','',1,'','','一|linha','',''],
['祝','celebrar','iwau',9,'シュク|shuku','いわ(う)|iwa(u)','礻|altar','No altar 礻, a boca 兄 dando a bênção.','祝う|iwau|celebrar;祝日|shukujitsu|feriado'],
['祭','festival','matsuri',11,'サイ|sai','まつ(り)|matsu(ri)','示|altar','A mão oferecendo carne no altar 示. A festa.','祭り|matsuri|festival;文化祭|bunkasai|festa cultural'],
['仰','olhar pra cima/reverenciar','aogu',6,'ギョウ|gyō','あお(ぐ)|ao(gu)','亻|pessoa','A pessoa 亻 com a cabeça erguida.','信仰|shinkō|fé;仰ぐ|aogu|admirar'],
['拝','reverenciar','ogamu',8,'ハイ|hai','おが(む)|oga(mu)','扌|mão','As mãos 扌 juntas na oração.','拝む|ogamu|rezar;参拝|sanpai|visita a templo'],
['僧','monge','sō',13,'ソウ|sō','','亻|pessoa','A pessoa 亻 que subiu 曽 no caminho espiritual.','僧|sō|monge;高僧|kōsō|monge veterano'],
['塔','torre/pagode','tō',12,'トウ|tō','','土|terra','A construção de terra 土 que sobe alto.','塔|tō|torre;五重塔|gojūnotō|pagode de 5 andares'],
['墓','túmulo','haka',13,'ボ|bo','はか|haka','土|terra','A terra 土 que cobre 莫 o corpo.','墓|haka|túmulo;墓地|bochi|cemitério'],
['骨','osso','hone',10,'コツ|kotsu','ほね|hone','骨|osso','A articulação com a carne 月 embaixo.','骨|hone|osso;骨折|kossetsu|fratura'],
['筋','músculo/enredo','suji',12,'キン|kin','すじ|suji','竹|bambu','As fibras 竹 da carne 月 com força 力.','筋肉|kinniku|músculo;筋|suji|enredo'],
['胸','peito','mune',10,'キョウ|kyō','むね|mune','月|corpo','A parte do corpo 月 que envolve o coração.','胸|mune|peito;胸中|kyōchū|íntimo'],
['腰','cintura/lombar','koshi',13,'ヨウ|yō','こし|koshi','月|corpo','A parte essencial 要 do corpo 月.','腰|koshi|cintura;腰掛け|koshikake|banco'],
['皮','pele/couro','kawa',5,'ヒ|hi','かわ|kawa','皮|pele','A mão puxando o couro do animal.','皮|kawa|casca;皮肉|hiniku|ironia'],
['血','sangue','chi',6,'ケツ|ketsu','ち|chi','血|sangue','A gota caindo dentro do prato 皿 do ritual.','血|chi|sangue;血液|ketsueki|sangue'],
['涙','lágrima','namida',10,'ルイ|rui','なみだ|namida','氵|água','A água 氵 que escapa pela porta 戻 dos olhos.','涙|namida|lágrima;涙声|namidagoe|voz chorosa'],
['汗','suor','ase',6,'カン|kan','あせ|ase','氵|água','A água 氵 que escorre do escudo 干 do corpo.','汗|ase|suor;汗をかく|asewokaku|suar'],
['袋','saco/bolsa','fukuro',11,'タイ|tai','ふくろ|fukuro','衣|roupa','O pano 衣 costurado no lugar 代 de guardar.','袋|fukuro|sacola;手袋|tebukuro|luva'],
['筒','tubo/cilindro','tsutsu',12,'トウ|tō','つつ|tsutsu','竹|bambu','O bambu 竹 igual 同 dos dois lados, oco.','封筒|fūtō|envelope;筒|tsutsu|tubo'],
['缶','lata','kan',6,'カン|kan','','缶|lata','O pote de barro com tampa. Hoje é a lata.','缶|kan|lata;缶詰|kanzume|enlatado'],
['瓶','garrafa','bin',11,'ビン|bin','','瓦|telha','O vaso de cerâmica 瓦 de boca estreita.','瓶|bin|garrafa;花瓶|kabin|vaso'],
['棒','bastão','bō',12,'ボウ|bō','','木|árvore','A madeira 木 que se segura com as duas mãos 奉.','棒|bō|bastão;鉄棒|tetsubō|barra fixa'],
['網','rede','ami',14,'モウ|mō','あみ|ami','糸|fio','Os fios 糸 cruzados em malha.','網|ami|rede;金網|kanaami|tela de arame'],
['綱','corda grossa','tsuna',14,'コウ|kō','つな|tsuna','糸|fio','O fio 糸 trançado até virar cabo.','綱|tsuna|corda;横綱|yokozuna|grão-campeão'],
['粉','pó/farinha','kona',10,'フン|fun','こな|kona','米|arroz','O arroz 米 dividido 分 até virar farinha.','粉|kona|pó;小麦粉|komugiko|farinha de trigo'],
['粒','grão','tsubu',11,'リュウ|ryū','つぶ|tsubu','米|arroz','Cada grãozinho 米 de pé 立 sozinho.','粒|tsubu|grão;米粒|kometsubu|grão de arroz'],
['塩','sal','shio',13,'エン|en','しお|shio','土|terra','A terra 土 salgada colhida do prato 皿.','塩|shio|sal;食塩|shokuen|sal de cozinha'],
['砂','areia','suna',9,'サ|sa','すな|suna','石|pedra','A pedra 石 quebrada em pedacinhos 少.','砂|suna|areia;砂糖|satō|açúcar'],
['泥','lama','doro',8,'デイ|dei','どろ|doro','氵|água','A água 氵 misturada com terra.','泥|doro|lama;泥棒|dorobō|ladrão'],
['灰','cinza','hai',6,'カイ|kai','はい|hai','火|fogo','O que o fogo 火 deixa embaixo do penhasco 厂.','灰|hai|cinza;灰色|haiiro|cinzento'],
['煮','cozinhar/ferver','niru',12,'シャ|sha','に(る)|ni(ru)','灬|fogo','A pessoa 者 sobre o fogo 灬 preparando a panela.','煮る|niru|cozinhar;煮物|nimono|cozido'],
['焼','assar/queimar','yaku',12,'ショウ|shō','や(く)|ya(ku)','火|fogo','O fogo 火 alto queimando.','焼く|yaku|assar;焼肉|yakiniku|churrasco'],
['蒸','vapor/cozinhar no vapor','musu',13,'ジョウ|jō','む(す)|mu(su)','艹|planta','A planta 艹 sobre o fogo soltando vapor.','蒸す|musu|cozinhar no vapor;蒸気|jōki|vapor'],
['冊','volume/exemplar','satsu',5,'サツ|satsu','','冂|moldura','As tiras de bambu amarradas. O primeiro livro.','一冊|issatsu|um volume;別冊|bessatsu|edição especial'],
['巻','rolo/enrolar','maku',9,'カン|kan','ま(く)|ma(ku)','己|si mesmo','O pergaminho enrolado com as duas mãos.','巻く|maku|enrolar;上巻|jōkan|primeiro volume'],
['章','capítulo/insígnia','shō',11,'ショウ|shō','','立|de pé','O som 音 dividido em partes de dez 十.','文章|bunshō|texto;記章|kishō|distintivo'],
['詞','palavra/parte do discurso','shi',12,'シ|shi','','言|palavra','A palavra 言 sob comando 司 da gramática.','歌詞|kashi|letra de música;動詞|dōshi|verbo'],
['句','frase/verso','ku',5,'ク|ku','','口|boca','A boca 口 envolvida pelo gancho. Um trecho fechado.','俳句|haiku|haicai;文句|monku|reclamação'],
['詩','poesia','shi',13,'シ|shi','うた|uta','言|palavra','A palavra 言 do templo 寺. Verso solene.','詩|shi|poema;詩人|shijin|poeta'],
['劇','drama/teatro','geki',15,'ゲキ|geki','','刂|faca','O tigre e o porco lutando 刂. A cena intensa.','劇場|gekijō|teatro;悲劇|higeki|tragédia'],
['舞','—','',1,'','','一|linha','',''],
['踊','dançar','odoru',14,'ヨウ|yō','おど(る)|odo(ru)','足|pé','O pé 足 passando 甬 no ritmo.','踊る|odoru|dançar;踊り|odori|dança'],
['奏','tocar (instrumento)','sō',9,'ソウ|sō','かな(でる)|kana(deru)','大|grande','As duas mãos erguendo o instrumento.','演奏|ensō|execução;伴奏|bansō|acompanhamento'],
['響','ressoar','hibiku',20,'キョウ|kyō','ひび(く)|hibi(ku)','音|som','O som 音 batendo na vila e voltando.','影響|eikyō|influência;響く|hibiku|ecoar'],
['鏡','espelho','kagami',19,'キョウ|kyō','かがみ|kagami','金|metal','O metal 金 polido até refletir.','鏡|kagami|espelho;眼鏡|megane|óculos'],
['照','iluminar/comparar','terasu',13,'ショウ|shō','て(らす)|te(rasu)','灬|fogo','A luz 昭 e o fogo 灬 clareando tudo.','照らす|terasu|iluminar;照明|shōmei|iluminação'],
['輝','brilhar','kagayaku',15,'キ|ki','かがや(く)|kagaya(ku)','車|carro','A luz 光 do exército 軍 em marcha, reluzindo.','輝く|kagayaku|brilhar;輝き|kagayaki|brilho'],
['影','sombra','kage',15,'エイ|ei','かげ|kage','彡|traços','O contorno 彡 projetado pela luz 景.','影|kage|sombra;影響|eikyō|influência'],
['泉','fonte/nascente','izumi',9,'セン|sen','いずみ|izumi','水|água','A água 水 branca 白 brotando da pedra.','温泉|onsen|fonte termal;泉|izumi|nascente'],
['滝','cachoeira','taki',13,'','たき|taki','氵|água','A água 氵 despencando como um dragão 竜.','滝|taki|cachoeira'],
['湖','lago','mizuumi',12,'コ|ko','みずうみ|mizuumi','氵|água','A água 氵 parada e antiga 胡 no vale.','湖|mizuumi|lago;湖畔|kohan|margem do lago'],
['沼','pântano','numa',8,'ショウ|shō','ぬま|numa','氵|água','A água 氵 chamada 召 que não corre.','沼|numa|pântano;沼地|numachi|brejo'],
['浜','praia/costa','hama',10,'ヒン|hin','はま|hama','氵|água','Onde a água 氵 encontra a areia.','浜|hama|praia;横浜|yokohama|Yokohama'],
['波','onda','nami',8,'ハ|ha','なみ|nami','氵|água','A pele 皮 da água 氵 se dobrando.','波|nami|onda;電波|denpa|onda de rádio'],
['潮','maré','shio',15,'チョウ|chō','しお|shio','氵|água','A água 氵 que sobe toda manhã 朝.','潮|shio|maré;風潮|fūchō|tendência'],
['砂','—','',1,'','','一|linha','',''],
['岩','rocha','iwa',8,'ガン|gan','いわ|iwa','山|montanha','A pedra 石 grande da montanha 山.','岩|iwa|rocha;溶岩|yōgan|lava'],
['峰','pico','mine',10,'ホウ|hō','みね|mine','山|montanha','O ponto mais alto da montanha 山.','峰|mine|cume;連峰|renpō|cordilheira'],
['嶺','—','',1,'','','一|linha','',''],
['森','—','',1,'','','一|linha','',''],
['芝','grama/relva','shiba',6,'シ|shi','しば|shiba','艹|planta','A grama 艹 baixinha do gramado.','芝生|shibafu|gramado;芝居|shibai|peça teatral'],
['枝','galho','eda',8,'シ|shi','えだ|eda','木|árvore','O braço 支 da árvore 木.','枝|eda|galho;枝分かれ|edawakare|ramificação'],
['幹','—','',1,'','','一|linha','',''],
['根','raiz','ne',10,'コン|kon','ね|ne','木|árvore','A parte da árvore 木 que fica parada 艮 no chão.','根|ne|raiz;根本|konpon|fundamento'],
['葉','—','',1,'','','一|linha','',''],
['実','—','',1,'','','一|linha','',''],
['麦','trigo/cevada','mugi',7,'バク|baku','むぎ|mugi','麦|trigo','A espiga com as raízes marcadas embaixo.','麦|mugi|trigo;麦茶|mugicha|chá de cevada'],
['豆','feijão/vasilha','mame',7,'トウ|tō','まめ|mame','豆|vasilha','A vasilha alta onde se guardavam os grãos.','豆|mame|feijão;大豆|daizu|soja'],
['稲','arroz (planta)','ine',14,'トウ|tō','いね|ine','禾|arroz','O pé de arroz 禾 carregado.','稲|ine|pé de arroz;稲作|inasaku|cultivo de arroz'],
['収','—','',1,'','','一|linha','',''],
['耕','arar/cultivar','tagayasu',10,'コウ|kō','たがや(す)|tagaya(su)','耒|arado','O arado 耒 abrindo os sulcos do campo 井.','耕す|tagayasu|arar;農耕|nōkō|agricultura'],
['植','plantar','ueru',12,'ショク|shoku','う(える)|u(eru)','木|árvore','Fincar a árvore 木 bem reta 直 no chão.','植える|ueru|plantar;植物|shokubutsu|planta'],
['牧','pastoreio','maki',8,'ボク|boku','まき|maki','牛|vaca','Tocar o gado 牛 com a vara 攵.','牧場|bokujō|fazenda;牧師|bokushi|pastor'],
['羊','ovelha','hitsuji',6,'ヨウ|yō','ひつじ|hitsuji','羊|ovelha','A cabeça da ovelha vista de frente, com os chifres.','羊|hitsuji|ovelha;羊毛|yōmō|lã'],
['豚','porco','buta',11,'トン|ton','ぶた|buta','豕|porco','A carne 月 do porco 豕.','豚|buta|porco;豚肉|butaniku|carne suína'],
['鶏','galinha','niwatori',19,'ケイ|kei','にわとり|niwatori','鳥|pássaro','O pássaro 鳥 que vive no quintal.','鶏|niwatori|galinha;鶏肉|toriniku|frango'],
['卵','ovo','tamago',7,'ラン|ran','たまご|tamago','卩|selo','Os dois ovos com os pontinhos dentro.','卵|tamago|ovo;卵焼き|tamagoyaki|omelete'],
['乳','leite/mama','chichi',8,'ニュウ|nyū','ちち|chichi','乙|gancho','A mão da mãe amamentando a criança 子.','牛乳|gyūnyū|leite;乳製品|nyūseihin|laticínio'],
['虫','inseto','mushi',6,'チュウ|chū','むし|mushi','虫|inseto','A cobra enrolada. Virou nome de todo bicho pequeno.','虫|mushi|inseto;昆虫|konchū|inseto'],
['蚊','mosquito','ka',10,'','か|ka','虫|inseto','O inseto 虫 que faz "bun" 文 no ouvido.','蚊|ka|mosquito;蚊帳|kaya|mosquiteiro'],
['蜂','abelha','hachi',13,'ホウ|hō','はち|hachi','虫|inseto','O inseto 虫 que ataca em pico 峰.','蜂|hachi|abelha;蜂蜜|hachimitsu|mel'],
['蝶','borboleta','chō',15,'チョウ|chō','','虫|inseto','O inseto 虫 de asas finas como folha.','蝶|chō|borboleta'],
['鳥','pássaro','tori',11,'チョウ|chō','とり|tori','鳥|pássaro','O bico, o olho, as penas e as patas 灬.','鳥|tori|pássaro;白鳥|hakuchō|cisne'],
['翼','asa','tsubasa',17,'ヨク|yoku','つばさ|tsubasa','羽|asas','As penas 羽 diferentes 異 abertas dos dois lados.','翼|tsubasa|asa;主翼|shuyoku|asa principal'],
['羽','pena/asa','hane',6,'ウ|u','はね|hane','羽|asas','Duas penas lado a lado.','羽|hane|pena;羽根|hane|palheta'],
['尾','cauda','o',7,'ビ|bi','お|o','尸|corpo','O pelo 毛 na ponta do corpo 尸.','尻尾|shippo|rabo;末尾|matsubi|final'],
['角','chifre/ângulo','kado',7,'カク|kaku','かど|kado;つの|tsuno','角|chifre','O chifre riscado do animal. Também o canto.','角|kado|esquina;三角|sankaku|triângulo'],
['甲','carapaça/primeiro','kō',5,'コウ|kō','','田|campo','O casco da tartaruga com a rachadura.','甲板|kanpan|convés;甲高い|kandakai|agudo'],
['牙','presa','kiba',4,'ガ|ga','きば|kiba','牙|presa','Os dentes cruzados do animal.','牙|kiba|presa'],
['爪','unha/garra','tsume',4,'ソウ|sō','つめ|tsume','爪|garra','A mão descendo com as unhas pra fora.','爪|tsume|unha;爪切り|tsumekiri|cortador de unha'],
['毛','pelo/cabelo','ke',4,'モウ|mō','け|ke','毛|pelo','Três fios curvados na mesma direção.','毛|ke|pelo;毛布|mōfu|cobertor'],
['髭','—','',1,'','','一|linha','',''],
['額','—','',1,'','','一|linha','',''],
['額','—','',1,'','','一|linha','',''],
['舌','língua','shita',6,'ゼツ|zetsu','した|shita','舌|língua','A língua saindo da boca 口.','舌|shita|língua;舌打ち|shitauchi|estalo de língua'],
['喉','garganta','nodo',12,'コウ|kō','のど|nodo','口|boca','A boca 口 e o caminho por onde o ar desce.','喉|nodo|garganta'],
['肌','pele','hada',6,'キ|ki','はだ|hada','月|corpo','A superfície do corpo 月.','肌|hada|pele;肌着|hadagi|roupa de baixo'],
['額','—','',1,'','','一|linha','',''],
['臓','víscera/órgão','zō',19,'ゾウ|zō','','月|corpo','O órgão 月 guardado 蔵 dentro do corpo.','心臓|shinzō|coração;内臓|naizō|vísceras'],
['胃','estômago','i',9,'イ|i','','月|corpo','O saco cheio 田 sobre a carne 月.','胃|i|estômago;胃痛|itsū|dor de estômago'],
['肝','fígado/crucial','kimo',7,'カン|kan','きも|kimo','月|corpo','O órgão 月 que é o escudo 干 do corpo.','肝心|kanjin|essencial;肝|kimo|coragem'],
['腸','intestino','chō',13,'チョウ|chō','','月|corpo','O tubo longo do corpo 月.','大腸|daichō|intestino grosso;胃腸|ichō|estômago e intestino'],
['肺','pulmão','hai',9,'ハイ|hai','','月|corpo','O órgão 月 que trabalha como um mercado 市 de ar.','肺|hai|pulmão;肺炎|haien|pneumonia'],
['脈','pulso/veia','myaku',10,'ミャク|myaku','','月|corpo','Os ramos 派 correndo no corpo 月.','脈|myaku|pulso;山脈|sanmyaku|cordilheira'],
['背','—','',1,'','','一|linha','',''],
['腹','—','',1,'','','一|linha','',''],
['床','chão/cama','yuka',7,'ショウ|shō','ゆか|yuka;とこ|toko','广|telheiro','A madeira 木 assentada sob o telheiro 广.','床|yuka|chão;寝床|nedoko|leito'],
['壁','parede','kabe',16,'ヘキ|heki','かべ|kabe','土|terra','A terra 土 erguida para separar.','壁|kabe|parede;壁紙|kabegami|papel de parede'],
['柱','pilar','hashira',9,'チュウ|chū','はしら|hashira','木|árvore','A madeira 木 principal 主 que segura tudo.','柱|hashira|pilar;電柱|denchū|poste'],
['屋','—','',1,'','','一|linha','',''],
['棚','prateleira','tana',12,'ホウ|hō','たな|tana','木|árvore','Tábuas 木 apoiadas lado a lado 朋.','棚|tana|prateleira;本棚|hondana|estante'],
['扉','porta/batente','tobira',12,'ヒ|hi','とびら|tobira','戸|porta','A porta 戸 que não 非 fica parada.','扉|tobira|porta'],
['錠','tranca/cápsula','jō',16,'ジョウ|jō','','金|metal','O metal 金 que fixa 定 a porta.','錠|jō|fechadura;錠剤|jōzai|comprimido'],
['鍵','chave','kagi',17,'ケン|ken','かぎ|kagi','金|metal','O metal 金 que constrói 建 a abertura.','鍵|kagi|chave;鍵盤|kenban|teclado'],
['庭','—','',1,'','','一|linha','',''],
['塀','muro','hei',12,'ヘイ|hei','','土|terra','A terra 土 que afasta 屏 os de fora.','塀|hei|muro'],
['井','poço','i',4,'セイ|sei','い|i','二|dois','A boca quadrada do poço vista de cima.','井戸|ido|poço;天井|tenjō|teto'],
['泉','—','',1,'','','一|linha','',''],
['溝','vala/fosso','mizo',13,'コウ|kō','みぞ|mizo','氵|água','O canal 冓 cavado pra água 氵 correr.','溝|mizo|valeta;下水溝|gesuikō|esgoto'],
['堤','dique','tsutsumi',12,'テイ|tei','つつみ|tsutsumi','土|terra','A terra 土 empilhada certo 是 pra segurar a água.','堤防|teibō|dique;堤|tsutsumi|barragem'],
['塔','—','',1,'','','一|linha','',''],
['途','—','',1,'','','一|linha','',''],
['坂','ladeira','saka',7,'ハン|han','さか|saka','土|terra','A terra 土 que se inverte 反 pra cima.','坂|saka|ladeira;上り坂|noborizaka|subida'],
['峠','passagem de montanha','tōge',9,'','とうげ|tōge','山|montanha','O ponto da montanha 山 onde se sobe 上 e desce 下.','峠|tōge|desfiladeiro'],
['崖','penhasco','gake',11,'ガイ|gai','がけ|gake','山|montanha','A montanha 山 cortada a pique.','崖|gake|penhasco'],
['穴','buraco','ana',5,'ケツ|ketsu','あな|ana','穴|buraco','A abertura no teto da caverna.','穴|ana|buraco;穴場|anaba|lugar escondido'],
['洞','caverna','hora',9,'ドウ|dō','ほら|hora','氵|água','A água 氵 que cavou o mesmo 同 lugar por séculos.','洞窟|dōkutsu|caverna;空洞|kūdō|oco'],
['峡','desfiladeiro','kyō',9,'キョウ|kyō','','山|montanha','O aperto 夹 entre montanhas 山.','海峡|kaikyō|estreito;峡谷|kyōkoku|desfiladeiro'],
['丘','colina','oka',5,'キュウ|kyū','おか|oka','一|linha','A elevação suave do terreno.','丘|oka|colina;砂丘|sakyū|duna'],
['野','—','',1,'','','一|linha','',''],
['畑','campo cultivado','hatake',9,'','はたけ|hatake','田|campo','O campo 田 queimado 火 antes do plantio.','畑|hatake|horta;田畑|tahata|lavouras'],
['苗','muda/broto','nae',8,'ビョウ|byō','なえ|nae','艹|planta','A planta 艹 pequena no campo 田.','苗|nae|muda;苗字|myōji|sobrenome'],
['芽','broto','me',8,'ガ|ga','め|me','艹|planta','A planta 艹 rompendo como uma presa 牙.','芽|me|broto;新芽|shinme|broto novo'],
['茎','caule','kuki',8,'ケイ|kei','くき|kuki','艹|planta','A haste da planta 艹 que sobe reta.','茎|kuki|caule'],
['幹','—','',1,'','','一|linha','',''],
['桜','cerejeira','sakura',10,'オウ|ō','さくら|sakura','木|árvore','A árvore 木 que floresce como uma coroa.','桜|sakura|cerejeira;夜桜|yozakura|sakura à noite'],
['梅','ameixeira','ume',10,'バイ|bai','うめ|ume','木|árvore','A árvore 木 que floresce todo 毎 inverno.','梅|ume|ameixa;梅雨|tsuyu|estação chuvosa'],
['松','pinheiro','matsu',8,'ショウ|shō','まつ|matsu','木|árvore','A árvore 木 pública 公 dos jardins.','松|matsu|pinheiro;門松|kadomatsu|enfeite de ano-novo'],
['杉','cedro','sugi',7,'','すぎ|sugi','木|árvore','A árvore 木 com os galhos 彡 em camadas.','杉|sugi|cedro japonês'],
['柳','salgueiro','yanagi',9,'リュウ|ryū','やなぎ|yanagi','木|árvore','A árvore 木 de galhos caídos.','柳|yanagi|salgueiro'],
['菊','crisântemo','kiku',11,'キク|kiku','','艹|planta','A planta 艹 com as pétalas em punhado 匊.','菊|kiku|crisântemo'],
['蘭','orquídea','ran',19,'ラン|ran','','艹|planta','A planta 艹 refinada guardada no portão 闌.','蘭|ran|orquídea'],
['竹','—','',1,'','','一|linha','',''],
['森','—','',1,'','','一|linha','',''],
['林','bosque','hayashi',8,'リン|rin','はやし|hayashi','木|árvore','Duas árvores 木 juntas. Menos que floresta.','林|hayashi|bosque;森林|shinrin|mata'],
['庭','—','',1,'','','一|linha','',''],
['刈','ceifar','karu',4,'','か(る)|ka(ru)','刂|faca','A faca 刂 cortando o mato rente.','刈る|karu|aparar;稲刈り|inekari|colheita'],
['掘','cavar','horu',11,'クツ|kutsu','ほ(る)|ho(ru)','扌|mão','A mão 扌 abrindo o buraco 屈.','掘る|horu|cavar;発掘|hakkutsu|escavação'],
['埋','enterrar','umeru',10,'マイ|mai','う(める)|u(meru)','土|terra','Guardar na terra 土 da vila 里.','埋める|umeru|enterrar;埋葬|maisō|sepultamento'],
['積','—','',1,'','','一|linha','',''],
['築','construir','kizuku',16,'チク|chiku','きず(く)|kizu(ku)','竹|bambu','Erguer com bambu 竹 e madeira 木.','建築|kenchiku|arquitetura;築く|kizuku|edificar'],
['壊','destruir','kowasu',16,'カイ|kai','こわ(す)|kowa(su)','土|terra','A terra 土 desmoronando.','壊す|kowasu|quebrar;破壊|hakai|destruição'],
['修','consertar/estudar','shū',10,'シュウ|shū','おさ(める)|osa(meru)','亻|pessoa','A pessoa 亻 polindo 彡 o que aprendeu.','修理|shūri|conserto;研修|kenshū|treinamento'],
['績','—','',1,'','','一|linha','',''],
['織','tecer','oru',18,'ショク|shoku','お(る)|o(ru)','糸|fio','Os fios 糸 marcados 戠 no tear.','織る|oru|tecer;組織|soshiki|organização'],
['縫','costurar','nuu',16,'ホウ|hō','ぬ(う)|nu(u)','糸|fio','O fio 糸 encontrando 逢 as duas bordas.','縫う|nuu|costurar;裁縫|saihō|costura'],
['裁','cortar (tecido)/julgar','sabaku',12,'サイ|sai','さば(く)|saba(ku)','衣|roupa','A lança cortando o tecido 衣 no molde.','裁判|saiban|julgamento;裁縫|saihō|costura'],
['績','—','',1,'','','一|linha','',''],
['布','pano','nuno',5,'フ|fu','ぬの|nuno','巾|pano','A mão estendendo o tecido 巾.','布|nuno|pano;財布|saifu|carteira'],
['糸','—','',1,'','','一|linha','',''],
['針','—','',1,'','','一|linha','',''],
['鉄','ferro','tetsu',13,'テツ|tetsu','','金|metal','O metal 金 que se perde 失 na ferrugem.','鉄|tetsu|ferro;地下鉄|chikatetsu|metrô'],
['銅','cobre','dō',14,'ドウ|dō','','金|metal','O metal 金 igual 同 ao ouro, mas mais barato.','銅|dō|cobre;銅像|dōzō|estátua de bronze'],
['鉛','chumbo','namari',13,'エン|en','なまり|namari','金|metal','O metal 金 que escorre 㕣 fácil no calor.','鉛|namari|chumbo;鉛筆|enpitsu|lápis'],
['鋼','aço','hagane',16,'コウ|kō','はがね|hagane','金|metal','O metal 金 firme como o cabo 岡.','鋼|hagane|aço;鉄鋼|tekkō|siderurgia'],
['刃','lâmina','ha',3,'ジン|jin','は|ha','刀|faca','A faca 刀 com o ponto marcando o fio.','刃|ha|lâmina;刃物|hamono|objeto cortante'],
['剣','espada','ken',10,'ケン|ken','つるぎ|tsurugi','刂|faca','A lâmina 刂 de dois gumes.','剣|ken|espada;剣道|kendō|kendo'],
['弓','arco','yumi',3,'キュウ|kyū','ゆみ|yumi','弓|arco','O arco curvado com a corda.','弓|yumi|arco;弓道|kyūdō|arco e flecha'],
['矢','flecha','ya',5,'シ|shi','や|ya','矢|flecha','A flecha com a ponta e as penas.','矢|ya|flecha;矢印|yajirushi|seta'],
['盾','escudo','tate',9,'ジュン|jun','たて|tate','目|olho','O olho 目 protegido atrás da placa.','盾|tate|escudo;矛盾|mujun|contradição'],
['砲','canhão','hō',10,'ホウ|hō','','石|pedra','A pedra 石 embrulhada 包 e lançada.','大砲|taihō|canhão;鉄砲|teppō|espingarda'],
['弾','—','',1,'','','一|linha','',''],
['爆','explodir','baku',19,'バク|baku','','火|fogo','O fogo 火 estourando de uma vez.','爆発|bakuhatsu|explosão;爆弾|bakudan|bomba'],
['煙','—','',1,'','','一|linha','',''],
['炎','chama','honō',8,'エン|en','ほのお|honō','火|fogo','Fogo 火 em cima de fogo 火.','炎|honō|chama;炎症|enshō|inflamação'],
['灯','lâmpada/luz','hi',6,'トウ|tō','ひ|hi','火|fogo','O fogo 火 preso no poste 丁.','灯|hi|luz;電灯|dentō|lâmpada'],
['蝋','—','',1,'','','一|linha','',''],
['照','—','',1,'','','一|linha','',''],
['暖','morno/aquecer','atatakai',13,'ダン|dan','あたた(かい)|atata(kai)','日|sol','O sol 日 que puxa 爰 o calor.','暖かい|atatakai|morno;暖房|danbō|aquecimento'],
['涼','fresco','suzushii',11,'リョウ|ryō','すず(しい)|suzu(shii)','氵|água','A água 氵 da capital 京 refrescando.','涼しい|suzushii|fresco;涼む|suzumu|refrescar-se'],
['氷','gelo','kōri',5,'ヒョウ|hyō','こおり|kōri','水|água','A água 水 com a marca do gelo.','氷|kōri|gelo;氷山|hyōzan|iceberg'],
['霧','neblina','kiri',19,'ム|mu','きり|kiri','雨|chuva','A chuva 雨 que não 務 chega a cair.','霧|kiri|neblina;濃霧|nōmu|cerração'],
['雲','nuvem','kumo',12,'ウン|un','くも|kumo','雨|chuva','A chuva 雨 ainda presa lá em cima 云.','雲|kumo|nuvem;雲海|unkai|mar de nuvens'],
['雷','trovão','kaminari',13,'ライ|rai','かみなり|kaminari','雨|chuva','A chuva 雨 sobre o campo 田 estrondando.','雷|kaminari|trovão;雷雨|raiu|tempestade'],
['嵐','tempestade','arashi',12,'ラン|ran','あらし|arashi','山|montanha','O vento 風 descendo da montanha 山.','嵐|arashi|tempestade'],
['虹','arco-íris','niji',9,'コウ|kō','にじ|niji','虫|inseto','Achavam que era um dragão 虫 no céu.','虹|niji|arco-íris'],
['星','estrela','hoshi',9,'セイ|sei','ほし|hoshi','日|sol','O pontinho de sol 日 que nasce 生 à noite.','星|hoshi|estrela;星座|seiza|constelação'],
['宙','espaço/ar','chū',8,'チュウ|chū','','宀|telhado','O grande teto 宀 de onde tudo vem 由.','宇宙|uchū|universo;宙|chū|ar'],
['宇','universo/céu','u',6,'ウ|u','','宀|telhado','O telhado 宀 maior de todos.','宇宙|uchū|universo'],
['軌','trilho/órbita','ki',9,'キ|ki','','車|carro','O sulco que o carro 車 deixa por onde passa.','軌道|kidō|órbita;軌跡|kiseki|trajetória'],
['跡','rastro/vestígio','ato',13,'セキ|seki','あと|ato','足|pé','A marca que o pé 足 deixou.','跡|ato|marca;足跡|ashiato|pegada'],
['痕','—','',1,'','','一|linha','',''],
['刻','—','',1,'','','一|linha','',''],
['彩','colorir','irodoru',11,'サイ|sai','いろど(る)|irodo(ru)','彡|traços','Colher 采 os riscos 彡 de cor.','色彩|shikisai|coloração;彩る|irodoru|colorir'],
['染','tingir','someru',9,'セン|sen','そ(める)|so(meru)','木|árvore','Mergulhar nove 九 vezes na água 氵 da planta 木.','染める|someru|tingir;汚染|osen|poluição'],
['紫','roxo','murasaki',12,'シ|shi','むらさき|murasaki','糸|fio','O fio 糸 tingido com a cor difícil 此.','紫|murasaki|roxo;紫色|murasakiiro|violeta'],
['紅','carmesim','beni',9,'コウ|kō','べに|beni;くれない|kurenai','糸|fio','O fio 糸 do trabalho 工 mais caro: o vermelho.','紅茶|kōcha|chá preto;口紅|kuchibeni|batom'],
['黄','amarelo','ki',11,'オウ|ō','き|ki','黄|amarelo','A cor da terra fértil.','黄色|kiiro|amarelo;黄金|ōgon|ouro'],
['銀','—','',1,'','','一|linha','',''],
['珠','pérola','tama',10,'シュ|shu','','王|jade','O jade 王 vermelho 朱 do fundo do mar.','真珠|shinju|pérola;数珠|juzu|rosário'],
['玉','—','',1,'','','一|linha','',''],
['環','anel/ambiente','kan',17,'カン|kan','','王|jade','O anel de jade 王 que dá a volta completa.','環境|kankyō|ambiente;環|wa|anel'],
['輪','roda/aro','wa',15,'リン|rin','わ|wa','車|carro','A roda do carro 車 dividida em raios 侖.','輪|wa|aro;指輪|yubiwa|anel'],
['庄','—','',1,'','','一|linha','',''],
['占','—','',1,'','','一|linha','',''],
['署','delegacia/assinar','sho',13,'ショ|sho','','罒|rede','A rede 罒 da autoridade sobre quem 者 responde.','警察署|keisatsusho|delegacia;署名|shomei|assinatura'],
['隊','tropa/esquadrão','tai',12,'タイ|tai','','阝|colina','O grupo descendo a colina 阝 em formação.','部隊|butai|tropa;自衛隊|jieitai|forças de autodefesa'],
['艦','navio de guerra','kan',21,'カン|kan','','舟|barco','O barco 舟 que vigia 監 o mar.','軍艦|gunkan|navio de guerra;艦隊|kantai|frota'],
['航','navegar','kō',10,'コウ|kō','','舟|barco','O barco 舟 seguindo em frente 亢.','航空|kōkū|aviação;航海|kōkai|navegação'],
['泳','—','',1,'','','一|linha','',''],
['浴','banhar-se','abiru',10,'ヨク|yoku','あ(びる)|a(biru)','氵|água','A água 氵 caindo no vale 谷 do corpo.','浴びる|abiru|tomar banho;浴衣|yukata|yukata'],
['沈','afundar','shizumu',7,'チン|chin','しず(む)|shizu(mu)','氵|água','O que a água 氵 leva pro fundo.','沈む|shizumu|afundar;沈黙|chinmoku|silêncio'],
['浮','—','',1,'','','一|linha','',''],
['漁','pesca','ryō',14,'ギョ|gyo','','氵|água','Tirar o peixe 魚 da água 氵.','漁師|ryōshi|pescador;漁業|gyogyō|pesca'],
['釣','pescar (anzol)','tsuru',11,'チョウ|chō','つ(る)|tsu(ru)','金|metal','O anzol de metal 金 com a isca 勺.','釣る|tsuru|pescar;釣り|tsuri|pescaria'],
['網','—','',1,'','','一|linha','',''],
['貝','concha/molusco','kai',7,'バイ|bai','かい|kai','貝|concha','A concha aberta com as duas antenas. Foi o primeiro dinheiro.','貝|kai|concha;貝殻|kaigara|casca'],
['殻','casca','kara',11,'カク|kaku','から|kara','殳|arma','O que se quebra 殳 por fora.','殻|kara|casca;貝殻|kaigara|concha'],
['粧','maquiagem','shō',12,'ショウ|shō','','米|arroz','O pó 米 aplicado no rosto.','化粧|keshō|maquiagem;化粧室|keshōshitsu|toalete'],
['鏡','—','',1,'','','一|linha','',''],
['髪','—','',1,'','','一|linha','',''],
['剃','—','',1,'','','一|linha','',''],
['歯','—','',1,'','','一|linha','',''],
['磨','polir/escovar','migaku',16,'マ|ma','みが(く)|miga(ku)','石|pedra','Esfregar na pedra 石 até brilhar.','磨く|migaku|polir;歯磨き|hamigaki|escovar os dentes'],
['浄','purificar','jō',9,'ジョウ|jō','','氵|água','A água 氵 que disputa 争 com a sujeira e ganha.','清浄|seijō|pureza;浄化|jōka|purificação'],
['清','limpo/puro','kiyoi',11,'セイ|sei','きよ(い)|kiyo(i)','氵|água','A água 氵 azul 青 e transparente.','清潔|seiketsu|higiênico;清い|kiyoi|puro'],
['潔','asseado/íntegro','isagiyoi',15,'ケツ|ketsu','いさぎよ(い)|isagiyo(i)','氵|água','A água 氵 que corta 契 toda a sujeira.','清潔|seiketsu|limpo;潔白|keppaku|inocência'],
['粗','grosseiro/tosco','arai',11,'ソ|so','あら(い)|ara(i)','米|arroz','O arroz 米 mal peneirado.','粗い|arai|grosseiro;粗末|somatsu|malfeito'],
['雅','elegante','miyabi',13,'ガ|ga','','隹|pássaro','O pássaro 隹 de porte refinado.','優雅|yūga|elegância;雅楽|gagaku|música da corte'],
['趣','gosto/charme','omomuki',15,'シュ|shu','おもむき|omomuki','走|correr','Correr 走 atrás 取 do que dá prazer.','趣味|shumi|hobby;趣|omomuki|encanto'],
['娯','—','',1,'','','一|linha','',''],
['戯','brincar/farsa','tawamureru',15,'ギ|gi','','戈|lança','A lança 戈 usada de brincadeira.','遊戯|yūgi|recreação;戯曲|gikyoku|peça teatral'],
['遊','—','',1,'','','一|linha','',''],
['técnico','—','',1,'','','一|linha','',''],
['勝','—','',1,'','','一|linha','',''],
['敗','—','',1,'','','一|linha','',''],
['競','competir','kisou',20,'キョウ|kyō','きそ(う)|kiso(u)','立|de pé','Duas pessoas de pé 立 disputando de igual pra igual.','競争|kyōsō|competição;競技|kyōgi|prova esportiva'],
['闘','lutar','tatakau',18,'トウ|tō','たたか(う)|tataka(u)','門|portão','Dois lutando no portão 門.','闘う|tatakau|lutar;格闘|kakutō|luta corpo a corpo'],
['награ','—','',1,'','','一|linha','',''],
['favor','—','',1,'','','一|linha','',''],
['芸','arte/talento','gei',7,'ゲイ|gei','','艹|planta','Plantar 艹 e cultivar até virar habilidade.','芸術|geijutsu|arte;芸能|geinō|entretenimento'],
['技','—','',1,'','','一|linha','',''],
['腕','—','',1,'','','一|linha','',''],
['職','—','',1,'','','一|linha','',''],
['僚','colega','ryō',14,'リョウ|ryō','','亻|pessoa','A pessoa 亻 que trabalha ao seu lado.','同僚|dōryō|colega;官僚|kanryō|burocrata'],
['雇','contratar','yatou',12,'コ|ko','やと(う)|yato(u)','隹|pássaro','Prender o pássaro 隹 na porta 戸. Pôr pra trabalhar.','雇う|yatou|contratar;雇用|koyō|emprego'],
['募','recrutar','tsunoru',12,'ボ|bo','つの(る)|tsuno(ru)','力|força','Reunir força 力 chamando gente.','募集|boshū|recrutamento;応募|ōbo|candidatura'],
['応','responder/atender','ōjiru',7,'オウ|ō','こた(える)|kota(eru)','心|coração','O coração 心 que reage ao chamado.','応援|ōen|torcida;応募|ōbo|inscrição'],
['援','ajudar/apoiar','en',12,'エン|en','','扌|mão','A mão 扌 puxando 爰 quem precisa.','応援|ōen|apoio;支援|shien|assistência'],
['護','proteger','mamoru',20,'ゴ|go','','言|palavra','A palavra 言 que defende quem não pode falar.','保護|hogo|proteção;看護|kango|enfermagem'],
['看','cuidar/observar','miru',9,'カン|kan','み(る)|mi(ru)','目|olho','A mão sobre o olho 目, olhando ao longe.','看護師|kangoshi|enfermeiro;看板|kanban|placa'],
['介','intermediar','kai',4,'カイ|kai','','人|pessoa','A pessoa 人 que fica entre os dois lados.','紹介|shōkai|apresentação;介護|kaigo|cuidado'],
['紹','apresentar','shō',11,'ショウ|shō','','糸|fio','O fio 糸 que liga uma pessoa a outra.','紹介|shōkai|apresentação'],
['招','—','',1,'','','一|linha','',''],
['接','—','',1,'','','一|linha','',''],
['与','—','',1,'','','一|linha','',''],
['贈','—','',1,'','','一|linha','',''],
['奪','arrebatar','ubau',14,'ダツ|datsu','うば(う)|uba(u)','大|grande','Arrancar o pássaro da mão de alguém.','奪う|ubau|tomar à força;強奪|gōdatsu|roubo'],
['盗','—','',1,'','','一|linha','',''],
['詐','—','',1,'','','一|linha','',''],
['偽','falso','nise',11,'ギ|gi','にせ|nise;いつわ(る)|itsuwa(ru)','亻|pessoa','A pessoa 亻 que finge 為 ser outra.','偽物|nisemono|falsificação;偽る|itsuwaru|mentir'],
['誠','sinceridade','makoto',13,'セイ|sei','まこと|makoto','言|palavra','A palavra 言 que se cumpre 成.','誠実|seijitsu|sinceridade;誠|makoto|verdade'],
['忠','lealdade','chū',8,'チュウ|chū','','心|coração','O coração 心 no centro 中, sem desviar.','忠実|chūjitsu|fiel;忠告|chūkoku|conselho'],
['孝','piedade filial','kō',7,'コウ|kō','','子|criança','O filho 子 sustentando o velho 耂.','孝行|kōkō|devoção aos pais;親孝行|oyakōkō|bom filho'],
['恩','gratidão/favor','on',10,'オン|on','','心|coração','O coração 心 que guarda a causa 因 do bem recebido.','恩|on|favor;恩師|onshi|mestre querido'],
['謝','agradecer/desculpar','ayamaru',17,'シャ|sha','あやま(る)|ayama(ru)','言|palavra','A palavra 言 que atira 射 a gratidão.','感謝|kansha|gratidão;謝る|ayamaru|pedir desculpa'],
['詫','—','',1,'','','一|linha','',''],
['慰','consolar','nagusameru',15,'イ|i','なぐさ(める)|nagusa(meru)','心|coração','Aquecer o coração 心 de quem está triste.','慰める|nagusameru|consolar;慰安|ian|conforto'],
['励','encorajar','hagemasu',7,'レイ|rei','はげ(ます)|hage(masu)','力|força','Dar força 力 pra quem está caindo.','励ます|hagemasu|animar;激励|gekirei|encorajamento'],
['激','intenso/violento','hageshii',16,'ゲキ|geki','はげ(しい)|hage(shii)','氵|água','A água 氵 batendo com tudo na pedra.','激しい|hageshii|intenso;感激|kangeki|emoção'],
['怠','preguiça','namakeru',9,'タイ|tai','なま(ける)|nama(keru)','心|coração','O coração 心 que fica na base 台, sem sair.','怠ける|namakeru|vadiar;怠慢|taiman|negligência'],
['惑','confundir/tentar','madou',12,'ワク|waku','まど(う)|mado(u)','心|coração','O coração 心 que não sabe 或 pra onde ir.','迷惑|meiwaku|incômodo;誘惑|yūwaku|tentação'],
['誘','convidar/atrair','sasou',14,'ユウ|yū','さそ(う)|saso(u)','言|palavra','A palavra 言 que puxa 秀 alguém junto.','誘う|sasou|convidar;誘惑|yūwaku|tentação'],
['隠','esconder','kakusu',14,'イン|in','かく(す)|kaku(su)','阝|colina','Guardar atrás da colina 阝.','隠す|kakusu|esconder;隠れる|kakureru|esconder-se'],
['暴','violento/expor','abareru',15,'ボウ|bō','あば(れる)|aba(reru)','日|sol','Deixar tudo exposto ao sol 日. Descontrole.','暴力|bōryoku|violência;暴れる|abareru|se descontrolar'],
['奮','esforçar-se/animar','furuu',16,'フン|fun','ふる(う)|furu(u)','大|grande','O pássaro grande 大 batendo as asas no campo 田.','興奮|kōfun|excitação;奮闘|funtō|luta árdua'],
['興','interesse/erguer','kyō',16,'コウ|kō;キョウ|kyō','おこ(る)|oko(ru)','臼|pilão','Muitas mãos erguendo juntas. Nasce o entusiasmo.','興味|kyōmi|interesse;復興|fukkō|reconstrução'],
['盛','—','',1,'','','一|linha','',''],
['衰','declinar','otoroeru',10,'スイ|sui','おとろ(える)|otoro(eru)','衣|roupa','A roupa 衣 rasgada de tanto uso.','衰える|otoroeru|enfraquecer;衰退|suitai|declínio'],
['滅','extinguir','horobiru',13,'メツ|metsu','ほろ(びる)|horo(biru)','氵|água','A água 氵 apagando o fogo 火 até o fim.','滅びる|horobiru|perecer;絶滅|zetsumetsu|extinção'],
['救','—','',1,'','','一|linha','',''],
['癒','—','',1,'','','一|linha','',''],
['診','diagnosticar','miru',12,'シン|shin','み(る)|mi(ru)','言|palavra','A palavra 言 do médico depois de examinar.','診察|shinsatsu|consulta;診断|shindan|diagnóstico'],
['症','sintoma','shō',10,'ショウ|shō','','疒|doença','O sinal correto 正 da doença 疒.','症状|shōjō|sintoma;炎症|enshō|inflamação'],
['菌','bactéria/fungo','kin',11,'キン|kin','','艹|planta','A plantinha 艹 que cresce escondida no celeiro.','細菌|saikin|bactéria;殺菌|sakkin|esterilização'],
['毒','veneno','doku',8,'ドク|doku','','母|mãe','A erva daninha que se disfarça de planta boa.','毒|doku|veneno;消毒|shōdoku|desinfecção'],
['薬','—','',1,'','','一|linha','',''],
['射','atirar/injetar','iru',10,'シャ|sha','い(る)|i(ru)','寸|medida','O corpo 身 e a mão 寸 soltando a flecha.','注射|chūsha|injeção;射る|iru|atirar'],
['療','—','',1,'','','一|linha','',''],
['免','isentar/licença','manukareru',8,'メン|men','まぬか(れる)|manuka(reru)','儿|pernas','Escapar por baixo e se livrar.','免許|menkyo|licença;免税|menzei|isento de imposto'],
['許','—','',1,'','','一|linha','',''],
['禁','proibir','kinjiru',13,'キン|kin','','示|altar','O bosque 林 sagrado 示 onde ninguém entra.','禁止|kinshi|proibido;禁煙|kin-en|proibido fumar'],
['戒','advertir/preceito','imashimeru',7,'カイ|kai','いまし(める)|imashi(meru)','戈|lança','Duas mãos segurando a lança 戈 em guarda.','警戒|keikai|vigilância;戒める|imashimeru|advertir'],
['罰','punição','batsu',14,'バツ|batsu','','罒|rede','A rede 罒, a palavra 言 e a faca 刂. A sentença.','罰|batsu|castigo;罰金|bakkin|multa'],
['償','indenizar','tsugunau',17,'ショウ|shō','つぐな(う)|tsuguna(u)','亻|pessoa','A pessoa 亻 devolvendo o prêmio 賞 do dano.','補償|hoshō|indenização;償う|tsugunau|reparar'],
['訴','processar/apelar','uttaeru',12,'ソ|so','うった(える)|utta(eru)','言|palavra','Levar a palavra 言 até o juiz.','訴える|uttaeru|processar;訴訟|soshō|litígio'],
['弁','—','',1,'','','一|linha','',''],
['律','lei/ritmo','ritsu',9,'リツ|ritsu','','彳|passo','Andar 彳 conforme o pincel 聿 escreveu.','法律|hōritsu|lei;規律|kiritsu|disciplina'],
['憲','—','',1,'','','一|linha','',''],
['約','—','',1,'','','一|linha','',''],
['契','contrato','chigiri',9,'ケイ|kei','','大|grande','A marca cortada na tábua, selando o acordo.','契約|keiyaku|contrato;契機|keiki|oportunidade'],
['署','—','',1,'','','一|linha','',''],
['審','julgar/examinar','shin',15,'シン|shin','','宀|telhado','Debaixo do telhado 宀, examinar o campo 番 todo.','審査|shinsa|avaliação;主審|shushin|árbitro'],
['判','—','',1,'','','一|linha','',''],
['則','regra','soku',9,'ソク|soku','','刂|faca','A concha 貝 e a faca 刂: a norma gravada.','規則|kisoku|regra;原則|gensoku|princípio'],
['範','modelo/limite','han',15,'ハン|han','','竹|bambu','O molde de bambu 竹 que define o padrão.','範囲|han-i|alcance;模範|mohan|modelo'],
['囲','cercar','kakomu',7,'イ|i','かこ(む)|kako(mu)','囗|cerca','O muro 囗 em volta de tudo.','囲む|kakomu|cercar;周囲|shūi|arredores'],
['模','modelo/imitar','mo',14,'モ|mo;ボ|bo','','木|árvore','A forma de madeira 木 que serve de molde.','模様|moyō|padrão;規模|kibo|escala'],
['倣','—','',1,'','','一|linha','',''],
['似','—','',1,'','','一|linha','',''],
['複','duplo/complexo','fuku',14,'フク|fuku','','衤|roupa','A roupa 衤 com camada dupla.','複雑|fukuzatsu|complicado;複数|fukusū|plural'],
['単','—','',1,'','','一|linha','',''],
['双','par/duplo','sō',4,'ソウ|sō','ふた|futa','又|mão','Duas mãos 又 lado a lado.','双子|futago|gêmeos;双方|sōhō|ambas as partes'],
['対','—','',1,'','','一|linha','',''],
['互','—','',1,'','','一|linha','',''],
['換','trocar','kaeru',12,'カン|kan','か(える)|ka(eru)','扌|mão','A mão 扌 passando uma coisa pela outra.','交換|kōkan|troca;換気|kanki|ventilação'],
['替','substituir','kaeru',12,'タイ|tai','か(える)|ka(eru)','曰|dizer','Dois iguais e o que fica por baixo assume.','両替|ryōgae|câmbio;替える|kaeru|trocar'],
['migração','—','',1,'','','一|linha','',''],
['渡','—','',1,'','','一|linha','',''],
['届','—','',1,'','','一|linha','',''],
['郵','—','',1,'','','一|linha','',''],
['宅','—','',1,'','','一|linha','',''],
['泊','—','',1,'','','一|linha','',''],
['宿','—','',1,'','','一|linha','',''],
['旅','—','',1,'','','一|linha','',''],
['遍','—','',1,'','','一|linha','',''],
['巡','percorrer/rondar','meguru',6,'ジュン|jun','めぐ(る)|megu(ru)','巛|rio','Andar 辶 seguindo o rio 巛 e voltar ao início.','巡る|meguru|percorrer;一巡|ichijun|uma volta'],
['帰','—','',1,'','','一|linha','',''],
['迎','—','',1,'','','一|linha','',''],
['送','—','',1,'','','一|linha','',''],
['贈','—','',1,'','','一|linha','',''],
['添','anexar/acompanhar','soeru',11,'テン|ten','そ(える)|so(eru)','氵|água','Pingar 氵 mais um pouco junto.','添える|soeru|anexar;添付|tenpu|anexo'],
['削','cortar/reduzir','kezuru',9,'サク|saku','けず(る)|kezu(ru)','刂|faca','A faca 刂 raspando 肖 a superfície.','削る|kezuru|raspar;削減|sakugen|corte'],
['除','—','',1,'','','一|linha','',''],
['略','—','',1,'','','一|linha','',''],
['概','geral/aproximado','gai',14,'ガイ|gai','','木|árvore','A régua de madeira 木 que nivela o grão. O geral.','概念|gainen|conceito;大概|taigai|em geral'],
['念','pensamento/desejo','nen',8,'ネン|nen','','心|coração','O que fica agora 今 no coração 心.','記念|kinen|comemoração;残念|zannen|que pena'],
['慮','considerar','ryo',15,'リョ|ryo','','心|coração','O tigre e o coração 心: pensar com cautela.','遠慮|enryo|reserva;考慮|kōryo|consideração'],
['憶','lembrar','oku',16,'オク|oku','','忄|coração','O coração 忄 guardando a intenção 意.','記憶|kioku|memória;追憶|tsuioku|recordação'],
['痴','—','',1,'','','一|linha','',''],
['賢','sábio/esperto','kashikoi',16,'ケン|ken','かしこ(い)|kashiko(i)','貝|concha','A mão firme e a concha 貝: quem sabe administrar.','賢い|kashikoi|inteligente;賢明|kenmei|sensato'],
['愚','tolo','oroka',13,'グ|gu','おろ(か)|oro(ka)','心|coração','O coração 心 do macaco: age sem pensar.','愚か|oroka|tolo;愚痴|guchi|queixa'],
['巧','habilidoso','takumi',5,'コウ|kō','たく(み)|taku(mi)','工|obra','O trabalho 工 feito com jeito.','巧み|takumi|hábil;技巧|gikō|técnica'],
['拙','—','',1,'','','一|linha','',''],
['凡','comum/ordinário','bon',3,'ボン|bon','','几|mesa','A vela simples de todo barco.','平凡|heibon|comum;凡人|bonjin|pessoa comum'],
['俗','vulgar/costume','zoku',9,'ゾク|zoku','','亻|pessoa','A pessoa 亻 do vale 谷, do povo simples.','習俗|shūzoku|costume;世俗|sezoku|mundano'],
['雅','—','',1,'','','一|linha','',''],
['粋','—','',1,'','','一|linha','',''],
['豪','magnífico/austrália','gō',14,'ゴウ|gō','','豕|porco','O javali 豕 grande debaixo do telhado alto.','豪華|gōka|luxuoso;豪州|gōshū|Austrália'],
['華','esplêndido/flor','hana',10,'カ|ka','はな|hana','艹|planta','A planta 艹 no auge da florada.','豪華|gōka|luxuoso;中華|chūka|chinês'],
['麗','belo/esplêndido','urawashii',19,'レイ|rei','うるわ(しい)|uruwa(shii)','鹿|cervo','O cervo 鹿 com os chifres simétricos. Puro equilíbrio.','綺麗|kirei|bonito;華麗|karei|magnífico'],
['鮮','—','',1,'','','一|linha','',''],
['艶','—','',1,'','','一|linha','',''],
['醜','feio','minikui',17,'シュウ|shū','みにく(い)|miniku(i)','酉|jarro','O jarro 酉 e o espírito 鬼 deformado.','醜い|minikui|feio;醜聞|shūbun|escândalo'],
['묘','—','',1,'','','一|linha','',''],
['尽','esgotar','tsukusu',6,'ジン|jin','つ(くす)|tsu(kusu)','尸|corpo','Virar o pote até a última gota.','尽くす|tsukusu|dedicar-se;無尽蔵|mujinzō|inesgotável'],
['充','preencher','jū',6,'ジュウ|jū','み(ちる)|mi(chiru)','儿|pernas','A criança crescendo e completando o corpo.','充実|jūjitsu|plenitude;充電|jūden|recarga'],
['満','—','',1,'','','一|linha','',''],
['溢','—','',1,'','','一|linha','',''],
['欠','—','',1,'','','一|linha','',''],
['乏','escasso','toboshii',4,'ボウ|bō','とぼ(しい)|tobo(shii)','丿|traço','O que falta pra completar.','乏しい|toboshii|escasso;欠乏|ketsubō|carência'],
['需','—','',1,'','','一|linha','',''],
['供','—','',1,'','','一|linha','',''],
['費','—','',1,'','','一|linha','',''],
['節','nó/economizar','fushi',13,'セツ|setsu','ふし|fushi','竹|bambu','O nó do bambu 竹 que divide os gomos.','季節|kisetsu|estação;節約|setsuyaku|economia'],
['季','estação do ano','ki',8,'キ|ki','','子|criança','O arroz 禾 novo 子 de cada ciclo.','季節|kisetsu|estação;四季|shiki|quatro estações'],
['旬','dez dias/época','shun',6,'ジュン|jun','','日|sol','Os dez 日 dias que fecham o período.','上旬|jōjun|primeira dezena;旬|shun|época da safra'],
['暦','calendário','koyomi',14,'レキ|reki','こよみ|koyomi','日|sol','Contar os dias 日 debaixo do abrigo.','暦|koyomi|calendário;西暦|seireki|era cristã'],
['祝','—','',1,'','','一|linha','',''],
['賀','felicitar','ga',12,'ガ|ga','','貝|concha','Somar 加 o dinheiro 貝 do presente. Parabenizar.','年賀状|nengajō|cartão de ano-novo;祝賀|shukuga|celebração'],
['儀','cerimônia/etiqueta','gi',15,'ギ|gi','','亻|pessoa','A pessoa 亻 agindo com justiça 義 e protocolo.','礼儀|reigi|boas maneiras;儀式|gishiki|cerimônia'],
['葬','funeral','sō',12,'ソウ|sō','ほうむ(る)|hōmu(ru)','艹|planta','O corpo 死 entre as ervas 艹, entregue à terra.','葬式|sōshiki|funeral;葬る|hōmuru|sepultar'],
['墓','—','',1,'','','一|linha','',''],
['魂','alma','tamashii',14,'コン|kon','たましい|tamashii','鬼|espírito','O que resta 云 do espírito 鬼.','魂|tamashii|alma;魂胆|kontan|segunda intenção'],
['鬼','demônio/espírito','oni',10,'キ|ki','おに|oni','鬼|espírito','A figura de cabeça grande com o rabo. O ogro.','鬼|oni|ogro;鬼才|kisai|gênio'],
['霊','espírito','rei',15,'レイ|rei','','雨|chuva','A chuva 雨 e as bocas rezando. O sopro divino.','霊|rei|espírito;幽霊|yūrei|fantasma'],
['仙','eremita/imortal','sen',5,'セン|sen','','亻|pessoa','A pessoa 亻 que foi morar na montanha 山.','仙人|sennin|eremita;仙台|sendai|Sendai'],
['聖','sagrado','sei',13,'セイ|sei','ひじり|hijiri','耳|orelha','Quem ouve 耳 e fala 口 como um rei 王.','聖書|seisho|Bíblia;神聖|shinsei|sagrado'],
['祈','rezar','inoru',8,'キ|ki','いの(る)|ino(ru)','礻|altar','No altar 礻, cortar 斤 os pedidos e oferecer.','祈る|inoru|rezar;祈願|kigan|prece'],
['奉','oferecer/servir','hōru',8,'ホウ|hō','たてまつ(る)|tatematsu(ru)','大|grande','As duas mãos erguendo a oferenda.','奉仕|hōshi|serviço;信奉|shinpō|devoção'],
['僧','—','',1,'','','一|linha','',''],
['寺','—','',1,'','','一|linha','',''],
['堂','—','',1,'','','一|linha','',''],
['殿','—','',1,'','','一|linha','',''],
['閣','—','',1,'','','一|linha','',''],
['宮','palácio/santuário','miya',10,'キュウ|kyū','みや|miya','宀|telhado','Vários cômodos 呂 debaixo do mesmo teto 宀.','宮|miya|palácio;神宮|jingū|grande santuário'],
['城','castelo','shiro',9,'ジョウ|jō','しろ|shiro','土|terra','A muralha de terra 土 que se completa 成.','城|shiro|castelo;お城|oshiro|castelo'],
['塁','—','',1,'','','一|linha','',''],
['陣','formação/posição','jin',10,'ジン|jin','','阝|colina','Os carros 車 alinhados na colina 阝.','陣|jin|posição;報道陣|hōdōjin|imprensa'],
['旗','bandeira','hata',14,'キ|ki','はた|hata','方|bandeira','O pano no mastro 方 tremulando.','旗|hata|bandeira;国旗|kokki|bandeira nacional'],
['章','—','',1,'','','一|linha','',''],
['徽','—','',1,'','','一|linha','','']
].filter(a=>a[1]!=='—').map(x3);

/* ── JLPT N1 · começando com 10 ── */
const N1X=[
['慈','compaixão','ji',13,'ジ|ji','いつく(しむ)|itsuku(shimu)','心|coração',
 'Os fios 玆 que ligam mãe e filho, pousados no coração 心. É o amor que cuida sem pedir nada de volta.',
 '慈善|jizen|caridade;慈悲|jihi|misericórdia;慈しむ|itsukushimu|acarinhar'],
['謙','humildade','ken',17,'ケン|ken','','言|palavra',
 'A palavra 言 que se junta 兼 à do outro em vez de se impor. Falar sem se colocar acima.',
 '謙虚|kenkyo|humilde;謙遜|kenson|modéstia;謙譲語|kenjōgo|linguagem humilde'],
['誉','honra/glória','homare',13,'ヨ|yo','ほま(れ)|homa(re)',
 '言|palavra','A palavra 言 erguida por muitas mãos. O reconhecimento que vem dos outros, não de si.',
 '名誉|meiyo|honra;栄誉|eiyo|glória;誉れ|homare|orgulho'],
['魅','fascinar/encantar','mi',15,'ミ|mi','','鬼|espírito',
 'O espírito 鬼 que não se vê 未 mas prende a pessoa. Aquele charme difícil de explicar.',
 '魅力|miryoku|charme;魅了|miryō|fascínio;魅惑|miwaku|sedução'],
['覆','cobrir/derrubar','ōu',18,'フク|fuku','おお(う)|ō(u);くつがえ(す)|kutsugae(su)',
 '襾|cobertura','A tampa 襾 que volta 復 por cima. Cobrir tudo, ou virar de cabeça para baixo.',
 '覆う|ōu|cobrir;覆面|fukumen|máscara;転覆|tenpuku|capotamento'],
['慶','júbilo/celebração','kei',15,'ケイ|kei','','心|coração',
 'O cervo 鹿 levado com o coração 心 alegre como presente de festa. A boa notícia que se comemora.',
 '慶祝|keishuku|congratulação;慶事|keiji|ocasião feliz;同慶|dōkei|alegria mútua'],
['循','circular/seguir','jun',12,'ジュン|jun','','彳|passo',
 'Andar 彳 conforme o escudo 盾 manda, sempre pelo mesmo trajeto. O ciclo que se repete.',
 '循環|junkan|circulação;因循|injun|indecisão'],
['疎','distante/esparso','so',12,'ソ|so','うと(い)|uto(i);まば(ら)|maba(ra)',
 '疋|pé','Os pés 疋 que se afastam pelo caminho. Ralo, espalhado, e também o laço que esfriou.',
 '疎遠|soen|distanciamento;過疎|kaso|despovoamento;疎い|utoi|alheio a'],
['憂','melancolia/inquietação','yū',15,'ユウ|yū','うれ(える)|ure(eru);うい|ui',
 '心|coração','A cabeça 頁 baixa, o coração 心 pesado e o pé 夂 arrastando. A tristeza que anda junto.',
 '憂鬱|yūutsu|depressão;憂慮|yūryo|apreensão;物憂い|monoui|desanimado'],
['錬','refinar/temperar','ren',16,'レン|ren','ね(る)|ne(ru)','金|metal',
 'O metal 金 batido e selecionado 柬 até sair a liga boa. Vale para o aço e para a pessoa.',
 '錬金術|renkinjutsu|alquimia;鍛錬|tanren|têmpera, treino;精錬|seiren|refino'],
['幽','recôndito/espectral','yū',9,'ユウ|yū','','幺|fio','Dois fios 幺 escondidos na montanha 山. O que se esconde na penumbra.','幽霊|yūrei|fantasma;幽玄|yūgen|beleza sutil'],
['寂','solitário/silencioso','sabishii',11,'ジャク|jaku','さび(しい)|sabi(shii)','宀|telhado','A casa 宀 onde já não se ouve nada. O silêncio que dói.','寂しい|sabishii|solitário;静寂|seijaku|quietude'],
['潜','submergir/ocultar','hisomu',15,'セン|sen','ひそ(む)|hiso(mu);もぐ(る)|mogu(ru)','氵|água','Descer por baixo da água 氵 e sumir da vista.','潜在|senzai|latente;潜る|moguru|mergulhar'],
['貫','atravessar/perfurar','tsuranuku',11,'カン|kan','つらぬ(く)|tsuranu(ku)','貝|concha','As conchas 貝 enfiadas no mesmo cordão. Passar de ponta a ponta.','一貫|ikkan|consistência;貫く|tsuranuku|levar até o fim'],
['滞','estagnar/atrasar','todokōru',13,'タイ|tai','とどこお(る)|todokō(ru)','氵|água','A água 氵 presa pela faixa 帯. Parou de correr.','滞在|taizai|estadia;渋滞|jūtai|congestionamento'],
['促','instigar/apressar','unagasu',9,'ソク|soku','うなが(す)|unaga(su)','亻|pessoa','A pessoa 亻 batendo o pé 足. Vamos, anda logo.','促す|unagasu|incitar;促進|sokushin|promoção'],
['遂','consumar/enfim','togeru',12,'スイ|sui','と(げる)|to(geru)','辶|caminhar','Andar 辶 até o porco 豕 mais distante. Levar a cabo.','遂行|suikō|execução;成し遂げる|nashitogeru|realizar'],
['携','portar/cooperar','tazusaeru',13,'ケイ|kei','たずさ(える)|tazusa(eru)','扌|mão','A mão 扌 levando o pássaro junto. Carregar consigo.','携帯|keitai|celular;提携|teikei|parceria'],
['随','seguir/conforme','zui',12,'ズイ|zui','','阝|colina','Descer a colina 阝 atrás de quem vai na frente.','随分|zuibun|bastante;随時|zuiji|a qualquer momento'],
['把','agarrar/punhado','ha',7,'ハ|ha','','扌|mão','A mão 扌 fechando em volta 巴 do objeto.','把握|haaku|compreensão;一把|ichiwa|um punhado'],
['握','apertar/segurar','nigiru',12,'アク|aku','にぎ(る)|nigi(ru)','扌|mão','A mão 扌 fechada dentro do cômodo 屋. Punho cerrado.','握手|akushu|aperto de mão;握る|nigiru|agarrar'],
['催','—','',1,'','','一|linha','',''],
['閲','revisar/inspecionar','etsu',15,'エツ|etsu','','門|portão','Examinar 兌 tudo que passa no portão 門.','閲覧|etsuran|consulta;検閲|ken-etsu|censura'],
['謁','—','',1,'','','一|linha','',''],
['憾','pesar/lamento','kan',16,'カン|kan','','忄|coração','O coração 忄 que ainda sente 感 o que não deu certo.','遺憾|ikan|lamentável'],
['遺','deixar (herança)/perder','i',15,'イ|i;ユイ|yui','','辶|caminhar','O que fica 貴 no caminho 辶 depois que a pessoa passa.','遺産|isan|herança;遺伝|iden|hereditariedade'],
['継','herdar/emendar','tsugu',13,'ケイ|kei','つ(ぐ)|tsu(gu)','糸|fio','Emendar o fio 糸 cortado. Continuar de onde parou.','継続|keizoku|continuação;後継|kōkei|sucessão'],
['尋','indagar/procurar','tazuneru',12,'ジン|jin','たず(ねる)|tazu(neru)','寸|medida','As duas mãos medindo 寸 palmo a palmo até achar.','尋ねる|tazuneru|perguntar;尋常|jinjō|comum'],
['詮','—','',1,'','','一|linha','',''],
['憤','indignar-se','ikidōru',15,'フン|fun','いきどお(る)|ikidō(ru)','忄|coração','O coração 忄 transbordando 賁. A raiva justa.','憤慨|fungai|indignação;義憤|gifun|revolta moral'],
['憎','odiar','nikumu',14,'ゾウ|zō','にく(む)|niku(mu)','忄|coração','O coração 忄 que acumula 曽 rancor camada por camada.','憎む|nikumu|odiar;愛憎|aizō|amor e ódio'],
['嫌','detestar/suspeita','kirau',13,'ケン|ken;ゲン|gen','きら(う)|kira(u);いや|iya','女|mulher','O que se recusa a juntar 兼. Não quero nem perto.','嫌い|kirai|detestar;機嫌|kigen|humor'],
['妬','—','',1,'','','一|linha','',''],
['恨','ressentir','uramu',9,'コン|kon','うら(む)|ura(mu)','忄|coração','O coração 忄 que ficou parado 艮 na mágoa antiga.','恨む|uramu|guardar rancor;遺恨|ikon|ressentimento'],
['悔','arrepender-se','kuyamu',9,'カイ|kai','く(やむ)|ku(yamu)','忄|coração','O coração 忄 revendo cada 毎 escolha feita.','後悔|kōkai|arrependimento;悔しい|kuyashii|frustrante'],
['嘆','lamentar/suspirar','nageku',13,'タン|tan','なげ(く)|nage(ku)','口|boca','A boca 口 soltando o suspiro do que é difícil 難.','嘆く|nageku|lamentar;感嘆|kantan|admiração'],
['癖','mania/vício','kuse',18,'ヘキ|heki','くせ|kuse','疒|doença','A doença 疒 que virou parede 辟, difícil de derrubar.','癖|kuse|mania;口癖|kuchiguse|bordão'],
['惰','indolência','da',12,'ダ|da','','忄|coração','O coração 忄 que se deixa levar 隋 sem reagir.','怠惰|taida|preguiça;惰性|dasei|inércia'],
['慢','arrogância/lento','man',14,'マン|man','','忄|coração','O coração 忄 esticado 曼 demais em si mesmo.','自慢|jiman|gabar-se;我慢|gaman|aguentar'],
['傲','—','',1,'','','一|linha','',''],
['謹','respeitosamente','tsutsushimu',17,'キン|kin','つつし(む)|tsutsushi(mu)','言|palavra','A palavra 言 medida com todo o cuidado 堇.','謹賀新年|kingashinnen|feliz ano-novo;謹んで|tsutsushinde|respeitosamente'],
['慎','prudência','tsutsushimu',13,'シン|shin','つつし(む)|tsutsushi(mu)','忄|coração','O coração 忄 verdadeiro 真 que se contém.','慎重|shinchō|cauteloso;慎む|tsutsushimu|moderar-se'],
['粛','solene/austero','shuku',11,'シュク|shuku','','聿|pincel','O pincel 聿 traçando em silêncio absoluto.','厳粛|genshuku|solenidade;自粛|jishuku|autocontenção'],
['潔','—','',1,'','','一|linha','',''],
['崇','venerar','agameru',11,'スウ|sū','あが(める)|aga(meru)','山|montanha','Olhar a montanha 山 sagrada 宗 de baixo pra cima.','崇拝|sūhai|adoração;崇高|sūkō|sublime'],
['虔','—','',1,'','','一|linha','',''],
['諭','admoestar/instruir','satosu',16,'ユ|yu','さと(す)|sato(su)','言|palavra','A palavra 言 que explica até a pessoa entender sozinha.','説諭|setsuyu|admoestação;教諭|kyōyu|professor'],
['悟','despertar/perceber','satoru',10,'ゴ|go','さと(る)|sato(ru)','忄|coração','O coração 忄 que finalmente entende 吾 a si mesmo.','悟る|satoru|compreender;覚悟|kakugo|resolução'],
['禅','zen','zen',13,'ゼン|zen','','礻|altar','O altar 礻 e o simples 単. Sentar e só ficar.','禅|zen|zen;座禅|zazen|meditação sentada'],
['諦','resignar-se','akirameru',16,'テイ|tei','あきら(める)|akira(meru)','言|palavra','A palavra 言 que aceita o imperador 帝, isto é, o inevitável.','諦める|akirameru|desistir;諦観|teikan|resignação'],
['忍','suportar/furtivo','shinobu',7,'ニン|nin','しの(ぶ)|shino(bu)','心|coração','A lâmina 刃 sobre o coração 心 e mesmo assim aguentar.','忍者|ninja|ninja;忍耐|nintai|perseverança'],
['耐','resistir','taeru',9,'タイ|tai','た(える)|ta(eru)','而|barba','Aguentar firme 寸 mesmo com a barba caindo.','耐える|taeru|suportar;忍耐|nintai|resistência'],
['堪','tolerar/aguentar','tamaru',12,'カン|kan','た(える)|ta(eru)','土|terra','A terra 土 que segura 甚 todo o peso.','堪える|taeru|suportar;堪能|tannō|proficiência'],
['克','superar','katsu',7,'コク|koku','か(つ)|ka(tsu)','儿|pernas','Carregar o peso no ombro e ainda assim ficar de pé 儿.','克服|kokufuku|superação;克明|kokumei|minucioso'],
['遮','obstruir/interceptar','saegiru',14,'シャ|sha','さえぎ(る)|saegi(ru)','辶|caminhar','Fechar 庶 o caminho 辶 de quem vem.','遮る|saegiru|bloquear;遮断|shadan|interrupção'],
['妨','atrapalhar','samatageru',7,'ボウ|bō','さまた(げる)|samata(geru)','女|mulher','Ficar de lado 方 no meio do caminho.','妨げる|samatageru|impedir;妨害|bōgai|obstrução'],
['阻','impedir','habamu',8,'ソ|so','はば(む)|haba(mu)','阝|colina','A colina 阝 empilhada 且 barrando a passagem.','阻止|soshi|bloqueio;阻む|habamu|obstar'],
['擁','abraçar/apoiar','yō',16,'ヨウ|yō','','扌|mão','A mão 扌 acolhendo e defendendo ao mesmo tempo.','擁護|yōgo|defesa;抱擁|hōyō|abraço'],
['庇','—','',1,'','','一|linha','',''],
['赴','dirigir-se a','omomuku',9,'フ|fu','おもむ(く)|omomu(ku)','走|correr','Correr 走 rumo ao ponto marcado 卜.','赴任|funin|assumir posto;赴く|omomuku|seguir para'],
['臨','estar diante de/enfrentar','nozomu',18,'リン|rin','のぞ(む)|nozo(mu)','臣|vassalo','Baixar o olho 臣 sobre as coisas. Comparecer de perto.','臨時|rinji|extraordinário;臨む|nozomu|encarar'],
['駆','galopar/impelir','kakeru',14,'ク|ku','か(ける)|ka(keru)','馬|cavalo','O cavalo 馬 solto na área 区 em disparada.','駆ける|kakeru|correr;駆使|kushi|domínio'],
['翻','virar/traduzir','hirugaeru',18,'ホン|hon','ひるがえ(る)|hirugae(ru)','羽|asas','A asa 羽 virando de lado no ar. Passar de uma língua a outra.','翻訳|hon-yaku|tradução;翻る|hirugaeru|tremular'],
['憩','descansar','ikou',16,'ケイ|kei','いこ(い)|iko(i)','心|coração','A língua 舌 parada e o coração 心 em paz. Pausa.','休憩|kyūkei|intervalo;憩い|ikoi|descanso'],
['癒','curar/aliviar','iyasu',18,'ユ|yu','いや(す)|iya(su)','疒|doença','A doença 疒 que vai embora 愈 aos poucos.','治癒|chiyu|cura;癒す|iyasu|confortar'],
['甦','—','',1,'','','一|linha','',''],
['潤','umedecer/enriquecer','uruou',15,'ジュン|jun','うるお(う)|uruo(u)','氵|água','A água 氵 que sobra 閏 e faz tudo florescer.','利潤|rijun|lucro;潤う|uruou|prosperar'],
['豊','—','',1,'','','一|linha','',''],
['繁','próspero/frequente','han',16,'ハン|han','しげ(る)|shige(ru)','糸|fio','Os fios 糸 se multiplicando cada 毎 vez mais.','繁栄|han-ei|prosperidade;繁華街|hankagai|centro movimentado'],
['栄','prosperar/glória','sakaeru',9,'エイ|ei','さか(える)|saka(eru)','木|árvore','A árvore 木 coroada de flores. Auge.','栄光|eikō|glória;繁栄|han-ei|prosperidade'],
['誇','orgulhar-se','hokoru',13,'コ|ko','ほこ(る)|hoko(ru)','言|palavra','A palavra 言 que se estende 夸 além do necessário.','誇り|hokori|orgulho;誇張|kochō|exagero'],
['威','autoridade/imponência','i',9,'イ|i','','女|mulher','A lança 戈 diante de quem se curva. Impor respeito.','威力|iryoku|poder;権威|ken-i|autoridade'],
['厳','—','',1,'','','一|linha','',''],
['覇','supremacia','ha',19,'ハ|ha','','襾|cobertura','Cobrir 襾 tudo com a própria lua. Reinar sobre os outros.','覇者|hasha|campeão;制覇|seiha|conquista'],
['奨','incentivar','shō',13,'ショウ|shō','','大|grande','Erguer 将 alguém e dizer: vai lá, você consegue.','奨学金|shōgakukin|bolsa de estudo;推奨|suishō|recomendação'],
['薦','recomendar','susumeru',16,'セン|sen','すす(める)|susu(meru)','艹|planta','Oferecer a erva 艹 boa que o cervo escolheu.','推薦|suisen|recomendação;薦める|susumeru|indicar'],
['択','escolher','taku',7,'タク|taku','','扌|mão','A mão 扌 separando 尺 o que vale do que não vale.','選択|sentaku|escolha;採択|saitaku|adoção'],
['棄','descartar','suteru',13,'キ|ki','す(てる)|su(teru)','木|árvore','Jogar fora o cesto de madeira 木 que não serve mais.','放棄|hōki|renúncia;廃棄|haiki|descarte'],
['廃','abolir/em ruínas','sutareru',12,'ハイ|hai','すた(れる)|suta(reru)','广|telheiro','A construção 广 abandonada até cair.','廃止|haishi|abolição;荒廃|kōhai|devastação'],
['滅','—','',1,'','','一|linha','',''],
['朽','apodrecer','kuchiru',6,'キュウ|kyū','く(ちる)|ku(chiru)','木|árvore','A árvore 木 que já não sustenta o próprio peso.','不朽|fukyū|imortal;朽ちる|kuchiru|deteriorar'],
['醸','fermentar/gerar','kamosu',20,'ジョウ|jō','かも(す)|kamo(su)','酉|jarro','O jarro 酉 guardado até o tempo fazer o resto.','醸造|jōzō|fermentação;醸す|kamosu|provocar'],
['薫','aroma/fragrância','kaoru',16,'クン|kun','かお(る)|kao(ru)','艹|planta','A erva 艹 sobre o fogo soltando o perfume.','薫風|kunpū|brisa perfumada;薫る|kaoru|perfumar'],
['漂','flutuar/vaguear','tadayou',14,'ヒョウ|hyō','ただよ(う)|tadayo(u)','氵|água','O que a água 氵 leva sem rumo 票.','漂流|hyōryū|deriva;漂う|tadayou|pairar'],
['彷','—','',1,'','','一|linha','',''],
['徐','devagar','jo',10,'ジョ|jo','おもむ(ろ)|omomu(ro)','彳|passo','Andar 彳 com folga 余, sem pressa nenhuma.','徐々に|jojoni|aos poucos;徐行|jokō|marcha lenta'],
['頻','frequente','hin',17,'ヒン|hin','しき(りに)|shiki(rini)','頁|cabeça','A cabeça 頁 que aparece de novo e de novo.','頻繁|hinpan|frequente;頻度|hindo|frequência'],
['稀','—','',1,'','','一|linha','',''],
['既','já/anteriormente','sude',10,'キ|ki','すで(に)|sude(ni)','无|não','Terminou de comer e virou a cara. Já foi.','既に|sudeni|já;既存|kison|existente'],
['卓','excelente/mesa','taku',8,'タク|taku','','十|dez','O que está acima 卜 de todos os outros.','卓越|takuetsu|excelência;食卓|shokutaku|mesa de jantar'],
['秀','notável/excelente','hiideru',7,'シュウ|shū','ひい(でる)|hii(deru)','禾|arroz','A espiga 禾 que cresceu acima das outras.','優秀|yūshū|excelente;秀でる|hiideru|destacar-se'],
['傑','notável/herói','ketsu',13,'ケツ|ketsu','','亻|pessoa','A pessoa 亻 no topo da árvore, visível de longe.','傑作|kessaku|obra-prima;豪傑|gōketsu|herói'],
['碑','—','',1,'','','一|linha','',''],
['据','instalar/assentar','sueru',11,'キョ|kyo','す(える)|su(eru)','扌|mão','A mão 扌 pondo o objeto no lugar 居 definitivo.','据える|sueru|instalar;据え置き|sueoki|manutenção'],
['滑','escorregar/liso','suberu',13,'カツ|katsu','すべ(る)|sube(ru);なめ(らか)|name(raka)','氵|água','A água 氵 sobre o osso 骨 polido. Nada segura.','滑る|suberu|escorregar;円滑|enkatsu|fluido'],
['滞','—','',1,'','','一|linha','',''],
['粘','pegajoso/persistir','nebaru',11,'ネン|nen','ねば(る)|neba(ru)','米|arroz','O arroz 米 que gruda 占 e não solta.','粘る|nebaru|insistir;粘土|nendo|argila'],
['濁','turvo','nigoru',16,'ダク|daku','にご(る)|nigo(ru)','氵|água','A água 氵 cheia de bichos 蜀. Perdeu a transparência.','濁る|nigoru|turvar;濁点|dakuten|as aspinhas ゛'],
['澄','clarear/límpido','sumu',15,'チョウ|chō','す(む)|su(mu)','氵|água','A água 氵 que subiu 登 e deixou o resto no fundo.','澄む|sumu|clarear;清澄|seichō|límpido'],
['潟','—','',1,'','','一|linha','',''],
['峻','—','',1,'','','一|linha','',''],
['麓','—','',1,'','','一|linha','',''],
['塊','bloco/massa','katamari',13,'カイ|kai','かたまり|katamari','土|terra','A terra 土 com espírito 鬼 próprio, num pedaço só.','塊|katamari|bloco;金塊|kinkai|barra de ouro'],
['粧','—','',1,'','','一|linha','',''],
['繕','—','',1,'','','一|linha','',''],
['錯','confundir/misturar','saku',16,'サク|saku','','金|metal','O metal 金 com camadas 昔 sobrepostas, tudo trocado.','錯覚|sakkaku|ilusão;交錯|kōsaku|entrelaçamento'],
['謎','enigma','nazo',16,'メイ|mei','なぞ|nazo','言|palavra','A palavra 言 que faz a pessoa se perder 迷.','謎|nazo|mistério;謎解き|nazotoki|resolver enigma'],
['曖','—','',1,'','','一|linha','',''],
['朦','—','',1,'','','一|linha','',''],
['披','revelar/abrir','hirō',8,'ヒ|hi','','扌|mão','A mão 扌 abrindo a pele 皮 e mostrando o que há dentro.','披露|hirō|apresentação;披露宴|hirōen|banquete de casamento'],
['露','orvalho/expor','tsuyu',21,'ロ|ro','つゆ|tsuyu','雨|chuva','A chuva 雨 que aparece no caminho 路 pela manhã.','露出|roshutsu|exposição;披露|hirō|revelação'],
['顕','manifesto/evidente','ken',18,'ケン|ken','あらわ(れる)|arawa(reru)','頁|cabeça','A cabeça 頁 sob o sol, à vista de todos.','顕著|kencho|notável;顕微鏡|kenbikyō|microscópio'],
['潜','—','',1,'','','一|linha','',''],
['網','—','',1,'','','一|linha','',''],
['羅','arranjar/gaze','ra',19,'ラ|ra','','罒|rede','A rede 罒 com os fios e o pássaro. Alinhar tudo.','羅列|raretsu|enumeração;網羅|mōra|abrangência'],
['緻','—','',1,'','','一|linha','',''],
['綻','—','',1,'','','一|linha','',''],
['紡','fiar','tsumugu',10,'ボウ|bō','つむ(ぐ)|tsumu(gu)','糸|fio','Torcer o fio 糸 na direção 方 certa até virar linha.','紡ぐ|tsumugu|fiar;紡績|bōseki|fiação'],
['繰','desenrolar/repetir','kuru',19,'','く(る)|ku(ru)','糸|fio','Puxar o fio 糸 do novelo, volta após volta.','繰り返す|kurikaesu|repetir;繰る|kuru|folhear'],
['循','—','',1,'','','一|linha','',''],
['還','retornar','kaeru',16,'カン|kan','','辶|caminhar','Andar 辶 o círculo 睘 inteiro e voltar ao ponto.','返還|henkan|devolução;還元|kangen|redução'],
['廻','—','',1,'','','一|linha','',''],
['彰','—','',1,'','','一|linha','',''],
['褒','elogiar','homeru',15,'ホウ|hō','ほ(める)|ho(meru)','衣|roupa','Envolver 衣 a pessoa em palavras boas.','褒める|homeru|elogiar;褒美|hōbi|recompensa'],
['諾','consentir','daku',15,'ダク|daku','','言|palavra','A palavra 言 que diz "assim 若 seja".','承諾|shōdaku|consentimento;快諾|kaidaku|aceite pronto'],
['嘱','—','',1,'','','一|linha','',''],
['託','confiar/encarregar','taku',10,'タク|taku','','言|palavra','A palavra 言 deixada com quem fica 乇 responsável.','委託|itaku|delegação;信託|shintaku|fideicomisso'],
['融','—','',1,'','','一|linha','',''],
['癖','—','',1,'','','一|linha','',''],
['陥','cair em/afundar','ochīru',10,'カン|kan','おちい(る)|ochii(ru)','阝|colina','Cair no buraco cavado ao pé da colina 阝.','陥る|ochiiru|cair em;欠陥|kekkan|defeito'],
['擦','esfregar','kosuru',17,'サツ|satsu','こす(る)|kosu(ru);す(れる)|su(reru)','扌|mão','A mão 扌 examinando 察 pela fricção.','摩擦|masatsu|atrito;擦れ違う|surechigau|cruzar-se'],
['摩','friccionar/roçar','ma',15,'マ|ma','','手|mão','A mão 手 passando debaixo do teto 麻 e raspando.','摩擦|masatsu|atrito;摩天楼|matenrō|arranha-céu'],
['磨','—','',1,'','','一|linha','',''],
['鍛','forjar/treinar','kitaeru',17,'タン|tan','きた(える)|kita(eru)','金|metal','Bater 段 no metal 金 até ele ficar forte.','鍛える|kitaeru|treinar;鍛錬|tanren|têmpera'],
['釈','interpretar/soltar','shaku',11,'シャク|shaku','','釆|separar','Separar 釆 os sentidos e escolher 尺 o certo.','解釈|kaishaku|interpretação;釈放|shakuhō|libertação'],
['憧','ansiar por','akogareru',15,'ショウ|shō','あこが(れる)|akoga(reru)','忄|coração','O coração 忄 de criança 童 querendo ser outra coisa.','憧れ|akogare|admiração;憧憬|shōkei|anseio'],
['慕','saudade/admirar','shitau',14,'ボ|bo','した(う)|shita(u)','心|coração','O coração 心 escondido 莫 que ainda procura alguém.','思慕|shibo|saudade;慕う|shitau|ter afeição'],
['craving','—','',1,'','','一|linha','',''],
['懸','pendurar/preocupar','kakeru',20,'ケン|ken','か(ける)|ka(keru)','心|coração','O coração 心 pendurado no fio, sem descanso.','懸命|kenmei|com afinco;懸念|kenen|apreensão'],
['awaits','—','',1,'','','一|linha','',''],
['慕','—','',1,'','','一|linha','',''],
['粋','requintado/essência','iki',10,'スイ|sui','いき|iki','米|arroz','O arroz 米 escolhido 卒 grão a grão. O melhor do melhor.','純粋|junsui|puro;粋|iki|elegante'],
['艶','lustroso/sedutor','tsuya',19,'エン|en','つや|tsuya','色|cor','A cor 色 com brilho de fartura 豊.','妖艶|yōen|sedutor;艶|tsuya|lustro'],
['妖','sedutor/sobrenatural','yō',7,'ヨウ|yō','あや(しい)|aya(shii)','女|mulher','A mulher 女 jovem 夭 de beleza inquietante.','妖怪|yōkai|criatura sobrenatural;妖精|yōsei|fada'],
['怪','estranho/suspeito','ayashii',8,'カイ|kai','あや(しい)|aya(shii)','忄|coração','O coração 忄 diante do que não se explica 圣.','怪しい|ayashii|suspeito;怪我|kega|ferimento'],
['奇','—','',1,'','','一|linha','',''],
['癒','—','',1,'','','一|linha','',''],
['陰','sombra/negativo','kage',11,'イン|in','かげ|kage','阝|colina','O lado da colina 阝 onde a nuvem 云 tapa o sol.','陰|kage|sombra;陰気|inki|sombrio'],
['陽','—','',1,'','','一|linha','',''],
['曇','nublado','kumoru',16,'ドン|don','くも(る)|kumo(ru)','日|sol','O sol 日 escondido atrás da nuvem 雲.','曇り|kumori|nublado;曇る|kumoru|embaçar'],
['霞','—','',1,'','','一|linha','',''],
['朧','—','',1,'','','一|linha','',''],
['寛','—','',1,'','','一|linha','',''],
['雅','—','',1,'','','一|linha','',''],
['趣','—','',1,'','','一|linha','',''],
['嗜','—','',1,'','','一|linha','',''],
['癖','—','',1,'','','一|linha','',''],
['慣','—','',1,'','','一|linha','',''],
['循','—','',1,'','','一|linha','',''],
['惑','—','',1,'','','一|linha','',''],
['omit','—','',1,'','','一|linha','',''],
['卑','vil/humilde','iyashii',9,'ヒ|hi','いや(しい)|iya(shii)','十|dez','A mão que segura o balde baixo. O que se rebaixa.','卑怯|hikyō|covarde;卑屈|hikutsu|servil'],
['劣','inferior','otoru',6,'レツ|retsu','おと(る)|oto(ru)','力|força','Pouca 少 força 力. Fica atrás dos outros.','劣る|otoru|ser inferior;劣悪|retsuaku|péssimo'],
['優','—','',1,'','','一|linha','',''],
['凌','—','',1,'','','一|linha','',''],
['勝','—','',1,'','','一|linha','',''],
['冒','arriscar/ousar','okasu',9,'ボウ|bō','おか(す)|oka(su)','日|sol','Avançar com o chapéu sobre os olhos 目, sem enxergar o risco.','冒険|bōken|aventura;冒頭|bōtō|início'],
['険','—','',1,'','','一|linha','',''],
['gamble','—','',1,'','','一|linha','',''],
['賭','apostar','kakeru',15,'ト|to','か(ける)|ka(keru)','貝|concha','Pôr o dinheiro 貝 na mão de quem 者 promete o dobro.','賭ける|kakeru|apostar;賭博|tobaku|jogatina'],
['奔','correr/fugir','hon',8,'ホン|hon','','大|grande','A pessoa 大 disparando com os três pés no chão.','奔走|honsō|correria;自由奔放|jiyūhonpō|desenfreado'],
['躍','saltar','odoru',21,'ヤク|yaku','おど(る)|odo(ru)','足|pé','O pé 足 e as asas 翟. Pular com tudo.','活躍|katsuyaku|atuação;飛躍|hiyaku|salto'],
['跳','pular','haneru',13,'チョウ|chō','は(ねる)|ha(neru);と(ぶ)|to(bu)','足|pé','O pé 足 e o presságio 兆 do salto.','跳ぶ|tobu|pular;跳躍|chōyaku|salto'],
['駄','inútil/vão','da',14,'ダ|da','','馬|cavalo','A carga grande 太 no cavalo 馬 que não vale a pena.','無駄|muda|desperdício;駄目|dame|não pode'],
['惜','lamentar/precioso','oshii',11,'セキ|seki','お(しい)|o(shii)','忄|coração','O coração 忄 preso no que já 昔 passou.','惜しい|oshii|é uma pena;惜別|sekibetsu|despedida'],
['憐','—','',1,'','','一|linha','',''],
['哀','tristeza/piedade','ai',9,'アイ|ai','あわ(れ)|awa(re)','口|boca','A boca 口 envolta na roupa 衣 do luto.','哀愁|aishū|melancolia;悲哀|hiai|pesar'],
['惨','miserável/trágico','san',11,'サン|san;ザン|zan','みじ(め)|miji(me)','忄|coração','O coração 忄 atravessado 参 pela desgraça.','悲惨|hisan|trágico;惨め|mijime|miserável'],
['酷','cruel/severo','koku',14,'コク|koku','ひど(い)|hido(i)','酉|jarro','O saquê 酉 forte demais, que avisa 告 e queima.','残酷|zankoku|cruel;酷似|kokuji|muito parecido'],
['虐','maltratar','shiitageru',9,'ギャク|gyaku','しいた(げる)|shiita(geru)','虍|tigre','O tigre 虍 com a garra sobre a presa.','虐待|gyakutai|maus-tratos;残虐|zangyaku|atrocidade'],
['奴','escravo/sujeito','yatsu',5,'ド|do','やつ|yatsu','女|mulher','A mão 又 sobre a pessoa 女 que não pode sair.','奴隷|dorei|escravo;奴|yatsu|cara (gíria)'],
['隷','—','',1,'','','一|linha','',''],
['縛','amarrar','shibaru',16,'バク|baku','しば(る)|shiba(ru)','糸|fio','O fio 糸 dado 専 em volta, sem folga.','束縛|sokubaku|restrição;縛る|shibaru|amarrar'],
['貼','colar/afixar','haru',12,'チョウ|chō','は(る)|ha(ru)','貝|concha','O selo 貝 grudado 占 no lugar marcado.','貼る|haru|colar;貼付|chōfu|anexação'],
['剥','—','',1,'','','一|linha','',''],
['刺','espetar/cartão','sasu',8,'シ|shi','さ(す)|sa(su)','刂|faca','O espinho 朿 e a faca 刂. Cravar.','刺す|sasu|picar;名刺|meishi|cartão de visita'],
['貫','—','',1,'','','一|linha','',''],
['貞','—','',1,'','','一|linha','',''],
['款','—','',1,'','','一|linha','',''],
['旨','sentido/saboroso','mune',6,'シ|shi','むね|mune;うま(い)|uma(i)','日|sol','A colher 匕 levando à boca 日. O gostoso e o essencial.','趣旨|shushi|propósito;旨い|umai|delicioso'],
['themes','—','',1,'','','一|linha','',''],
['概','—','',1,'','','一|linha','',''],
['要','—','',1,'','','一|linha','',''],
['髄','—','',1,'','','一|linha','',''],
['核','núcleo','kaku',10,'カク|kaku','','木|árvore','O caroço 亥 duro no meio da fruta 木.','核心|kakushin|cerne;核|kaku|núcleo'],
['軸','eixo','jiku',12,'ジク|jiku','','車|carro','A barra 由 que atravessa a roda do carro 車.','軸|jiku|eixo;主軸|shujiku|eixo principal'],
['枠','moldura/limite','waku',8,'','わく|waku','木|árvore','A madeira 木 cortada em volta, delimitando.','枠|waku|moldura;枠組み|wakugumi|estrutura'],
['縁','borda/laço','en',15,'エン|en','ふち|fuchi','糸|fio','O fio 糸 na beirada do tecido. Também o destino que liga pessoas.','縁|en|laço;縁側|engawa|varanda'],
['隅','canto','sumi',12,'グウ|gū','すみ|sumi','阝|colina','O canto onde a colina 阝 e o macaco 禺 se encontram.','隅|sumi|canto;片隅|katasumi|cantinho'],
['傍','ao lado','katawara',12,'ボウ|bō','かたわ(ら)|katawa(ra)','亻|pessoa','A pessoa 亻 ao lado 旁 da outra.','傍観|bōkan|assistir de fora;傍ら|katawara|ao lado'],
['沿','—','',1,'','','一|linha','',''],
['挟','prensar/inserir','hasamu',9,'キョウ|kyō','はさ(む)|hasa(mu)','扌|mão','A mão 扌 prendendo 夹 alguma coisa entre duas partes.','挟む|hasamu|inserir;挟撃|kyōgeki|ataque em pinça'],
['隔','separar/isolar','hedateru',13,'カク|kaku','へだ(てる)|heda(teru)','阝|colina','A colina 阝 de barro 鬲 no meio dos dois.','間隔|kankaku|intervalo;隔てる|hedateru|separar'],
['距','—','',1,'','','一|linha','',''],
['偏','parcial/inclinado','katayoru',11,'ヘン|hen','かたよ(る)|katayo(ru)','亻|pessoa','A pessoa 亻 encostada só num lado 扁.','偏見|henken|preconceito;偏る|katayoru|pender'],
['傾','—','',1,'','','一|linha','',''],
['斜','inclinado/diagonal','naname',11,'シャ|sha','なな(め)|nana(me)','斗|medida','A concha 斗 virada de lado pra escorrer.','斜め|naname|diagonal;傾斜|keisha|declive'],
['歪','—','',1,'','','一|linha','',''],
['凹','côncavo','ō',5,'オウ|ō','くぼ|kubo','凵|abertura','O desenho literal de uma reentrância.','凹凸|ōtotsu|irregularidade;凹む|hekomu|amassar'],
['凸','convexo','totsu',5,'トツ|totsu','','凵|abertura','O desenho literal de uma saliência.','凸凹|dekoboko|acidentado;凸レンズ|totsurenzu|lente convexa'],
['craft','—','',1,'','','一|linha','',''],
['彫','—','',1,'','','一|linha','',''],
['鋳','—','',1,'','','一|linha','',''],
['塗','pintar/untar','nuru',13,'ト|to','ぬ(る)|nu(ru)','土|terra','Passar a terra 土 molhada por cima até cobrir.','塗る|nuru|pintar;塗装|tosō|pintura'],
['敷','estender/forrar','shiku',15,'フ|fu','し(く)|shi(ku)','攵|bater','Bater 攵 o tecido até ele ficar plano no chão.','敷く|shiku|estender;屋敷|yashiki|mansão'],
['掃','varrer','haku',11,'ソウ|sō','は(く)|ha(ku)','扌|mão','A mão 扌 com a vassoura 帚.','掃除|sōji|limpeza;掃く|haku|varrer'],
['拭','—','',1,'','','一|linha','',''],
['濯','—','',1,'','','一|linha','',''],
['漬','—','',1,'','','一|linha','',''],
['炊','cozinhar arroz','taku',8,'スイ|sui','た(く)|ta(ku)','火|fogo','O fogo 火 e a boca 欠 soprando a brasa.','炊く|taku|cozinhar;自炊|jisui|cozinhar pra si'],
['沸','ferver','waku',8,'フツ|futsu','わ(く)|wa(ku)','氵|água','A água 氵 que não 弗 para de borbulhar.','沸く|waku|ferver;沸騰|futtō|ebulição'],
['凝','coagular/obcecar','koru',16,'ギョウ|gyō','こ(る)|ko(ru)','冫|gelo','O gelo 冫 que hesita 疑 e endurece. Também a obsessão.','凝る|koru|ser obcecado;凝視|gyōshi|encarar'],
['溶','—','',1,'','','一|linha','',''],
['融','—','',1,'','','一|linha','',''],
['蒸','—','',1,'','','一|linha','',''],
['薄','—','',1,'','','一|linha','',''],
['濃','—','',1,'','','一|linha','',''],
['甘','doce/indulgente','amai',5,'カン|kan','あま(い)|ama(i)','甘|doce','A boca com algo guardado dentro, saboreando.','甘い|amai|doce;甘やかす|amayakasu|mimar'],
['辛','picante/duro','karai',7,'シン|shin','から(い)|kara(i);つら(い)|tsura(i)','辛|amargo','A tatuagem do castigo. Arde na boca e na alma.','辛い|karai|picante;辛抱|shinbō|paciência'],
['酸','ácido/azedo','san',14,'サン|san','す(い)|su(i)','酉|jarro','O saquê 酉 que passou do ponto.','酸っぱい|suppai|azedo;酸素|sanso|oxigênio'],
['渋','adstringente/relutante','shibui',11,'ジュウ|jū','しぶ(い)|shibu(i)','氵|água','A água 氵 que trava 止 na garganta.','渋滞|jūtai|engarrafamento;渋い|shibui|sóbrio'],
['臭','fedor/cheiro','kusai',9,'シュウ|shū','くさ(い)|kusa(i)','自|nariz','O nariz 自 do cachorro 大 farejando.','臭い|kusai|fedorento;体臭|taishū|odor corporal'],
['香','aroma','kaori',9,'コウ|kō','かお(り)|kao(ri)','香|aroma','O arroz 禾 no sol 日 soltando cheiro bom.','香り|kaori|perfume;香水|kōsui|perfume'],
['芳','—','',1,'','','一|linha','',''],
['嗅','—','',1,'','','一|linha','',''],
['audio','—','',1,'','','一|linha','',''],
['鳴','—','',1,'','','一|linha','',''],
['轟','—','',1,'','','一|linha','',''],
['囁','—','',1,'','','一|linha','',''],
['喚','—','',1,'','','一|linha','',''],
['叫','gritar','sakebu',6,'キョウ|kyō','さけ(ぶ)|sake(bu)','口|boca','A boca 口 torcida 丩 no berro.','叫ぶ|sakebu|gritar;絶叫|zekkyō|grito'],
['呟','—','',1,'','','一|linha','',''],
['黙','calar-se','damaru',15,'モク|moku','だま(る)|dama(ru)','黒|preto','O cachorro 犬 preto 黒 que não late.','黙る|damaru|calar;沈黙|chinmoku|silêncio'],
['喋','—','',1,'','','一|linha','',''],
['諮','consultar','hakaru',16,'シ|shi','はか(る)|haka(ru)','言|palavra','A palavra 言 que pergunta 咨 antes de decidir.','諮問|shimon|consulta;諮る|hakaru|consultar'],
['謀','tramar','hakaru',16,'ボウ|bō','はか(る)|haka(ru)','言|palavra','A palavra 言 dita em segredo 某, planejando algo.','陰謀|inbō|conspiração;無謀|mubō|imprudente'],
['詐','fraudar','sa',12,'サ|sa','','言|palavra','A palavra 言 feita 乍 na hora pra enganar.','詐欺|sagi|fraude;詐称|sashō|falsidade'],
['欺','enganar','azamuku',12,'ギ|gi','あざむ(く)|azamu(ku)','欠|boca aberta','A boca 欠 aberta prometendo 其 o que não vai cumprir.','詐欺|sagi|golpe;欺く|azamuku|iludir'],
['賄','suborno','wairo',13,'ワイ|wai','まかな(う)|makana(u)','貝|concha','O dinheiro 貝 que se tem 有 e se passa por baixo.','賄賂|wairo|suborno;賄う|makanau|prover'],
['貪','—','',1,'','','一|linha','',''],
['溺','—','',1,'','','一|linha','',''],
['耽','—','',1,'','','一|linha','',''],
['酔','embriagar-se','you',11,'スイ|sui','よ(う)|yo(u)','酉|jarro','O saquê 酉 que leva 卒 a pessoa embora de si.','酔う|you|embebedar;麻酔|masui|anestesia'],
['醒','—','',1,'','','一|linha','',''],
['еще','—','',1,'','','一|linha','',''],
['憂','—','',1,'','','一|linha','',''],
['鬱','—','',1,'','','一|linha','',''],
['癒','—','',1,'','','一|linha','',''],
['戚','—','',1,'','','一|linha','',''],
['嫁','casar (noiva)','yome',13,'カ|ka','よめ|yome','女|mulher','A mulher 女 que passa a morar na casa 家 do outro.','嫁|yome|nora;花嫁|hanayome|noiva'],
['婿','—','',1,'','','一|linha','',''],
['甥','—','',1,'','','一|linha','',''],
['姪','—','',1,'','','一|linha','',''],
['孫','neto','mago',10,'ソン|son','まご|mago','子|criança','A criança 子 ligada pelo fio 系 da linhagem.','孫|mago|neto;子孫|shison|descendentes'],
['嬢','—','',1,'','','一|linha','',''],
['坊','—','',1,'','','一|linha','',''],
['翁','—','',1,'','','一|linha','',''],
['寿','longevidade','kotobuki',7,'ジュ|ju','ことぶき|kotobuki','寸|medida','A vida que se estende. Palavra de felicitação.','寿司|sushi|sushi;長寿|chōju|longevidade'],
['齢','—','',1,'','','一|linha','',''],
['稚','infantil','chi',13,'チ|chi','おさな(い)|osana(i)','禾|arroz','O broto 禾 do pássaro 隹 ainda pequeno.','幼稚|yōchi|infantil;稚魚|chigyo|alevino'],
['幼','infância','osanai',5,'ヨウ|yō','おさな(い)|osana(i)','幺|fio','O fio 幺 de força 力 ainda fininho.','幼い|osanai|pequenino;幼児|yōji|criança pequena'],
['児','criança/infante','ji',7,'ジ|ji;ニ|ni','','儿|pernas','A cabecinha ainda aberta sobre as pernas 儿.','児童|jidō|criança;幼児|yōji|infante'],
['娠','—','',1,'','','一|linha','',''],
['妊','—','',1,'','','一|linha','',''],
['胎','—','',1,'','','一|linha','',''],
['誕','nascimento','tan',15,'タン|tan','','言|palavra','A palavra 言 que se estende 延 anunciando a chegada.','誕生日|tanjōbi|aniversário;生誕|seitan|natalício'],
['逝','—','',1,'','','一|linha','',''],
['葬','—','',1,'','','一|linha','',''],
['悼','—','',1,'','','一|linha','',''],
['棺','—','',1,'','','一|linha','',''],
['墳','—','',1,'','','一|linha','',''],
['循','—','',1,'','','一|linha','',''],
['壇','—','',1,'','','一|linha','',''],
['themes2','—','',1,'','','一|linha','',''],
['иска','—','',1,'','','一|linha','',''],
['催','—','',1,'','','一|linha','',''],
['craft2','—','',1,'','','一|linha','',''],
['憶','—','',1,'','','一|linha','',''],
['吟','—','',1,'','','一|linha','',''],
['詠','—','',1,'','','一|linha','',''],
['朗','claro/sonoro','hogaraka',10,'ロウ|rō','ほが(らか)|hoga(raka)','月|lua','A lua 月 boa 良 iluminando tudo. Voz e humor claros.','朗読|rōdoku|leitura em voz alta;明朗|meirō|animado'],
['詳','detalhado','kuwashii',13,'ショウ|shō','くわ(しい)|kuwa(shii)','言|palavra','A palavra 言 bonita 羊, dita item por item.','詳細|shōsai|detalhes;詳しい|kuwashii|minucioso'],
['簡','simples/breve','kan',18,'カン|kan','','竹|bambu','A tira de bambu 竹 curta, entre 間 poucas palavras.','簡単|kantan|simples;簡潔|kanketsu|conciso'],
['묘2','—','',1,'','','一|linha','',''],
['克','—','',1,'','','一|linha','',''],
['網2','—','',1,'','','一|linha','',''],
['緩','afrouxar/lento','yurui',15,'カン|kan','ゆる(い)|yuru(i)','糸|fio','O fio 糸 com folga, sem tensão.','緩い|yurui|frouxo;緩和|kanwa|alívio'],
['厳2','—','',1,'','','一|linha','',''],
['擬','—','',1,'','','一|linha','',''],
['促2','—','',1,'','','一|linha','',''],
['催2','—','',1,'','','一|linha','',''],
['甚','extremo/muito','hanahada',9,'ジン|jin','はなは(だ)|hanaha(da)','甘|doce','O doce 甘 além da conta.','甚大|jindai|imenso;幸甚|kōjin|grande satisfação'],
['殊','especial/particular','koto',10,'シュ|shu','こと|koto','歹|osso','O que se separa 朱 do resto por mérito próprio.','特殊|tokushu|especial;殊に|kotoni|sobretudo'],
['殉','—','',1,'','','一|linha','',''],
['庸','—','',1,'','','一|linha','',''],
['凡2','—','',1,'','','一|linha','',''],
['妥','conciliar','da',7,'ダ|da','','女|mulher','A mão pousada na mulher 女, acalmando. Chegar a um meio-termo.','妥協|dakyō|acordo;妥当|datō|razoável'],
['譲','ceder','yuzuru',20,'ジョウ|jō','ゆず(る)|yuzu(ru)','言|palavra','A palavra 言 que abre espaço 襄 pro outro passar.','譲る|yuzuru|ceder;謙譲|kenjō|humildade'],
['憾2','—','',1,'','','一|linha','',''],
['諒','—','',1,'','','一|linha','',''],
['惧','—','',1,'','','一|linha','',''],
['懐','peito/nostalgia','natsukashii',16,'カイ|kai','なつ(かしい)|natsu(kashii);ふところ|futokoro','忄|coração','O coração 忄 guardado na dobra da roupa. Guardar saudade.','懐かしい|natsukashii|nostálgico;懐|futokoro|bolso interno'],
['郷','terra natal','kyō',11,'キョウ|kyō','','阝|vila','Duas pessoas comendo frente a frente na vila 阝. Onde se é de casa.','故郷|kokyō|terra natal;郷土|kyōdo|região'],
['故','antigo/motivo','yue',9,'コ|ko','ゆえ|yue','攵|bater','Bater 攵 no que é velho 古. O que já foi, e a razão disso.','事故|jiko|acidente;故郷|kokyō|terra natal'],
['縁2','—','',1,'','','一|linha','',''],
['慣2','—','',1,'','','一|linha','',''],
['俗2','—','',1,'','','一|linha','',''],
['旧2','—','',1,'','','一|linha','',''],
['遍','universal/vezes','hen',12,'ヘン|hen','あまね(く)|amane(ku)','辶|caminhar','Andar 辶 por toda parte 扁. Em todo lugar.','普遍|fuhen|universal;一遍|ippen|uma vez'],
['普','geral/comum','fu',12,'フ|fu','','日|sol','O sol 日 que bate igual 並 em todo mundo.','普通|futsū|normal;普及|fukyū|difusão'],
['殆','—','',1,'','','一|linha','',''],
['概2','—','',1,'','','一|linha','',''],
['漠','vago/deserto','baku',13,'バク|baku','','氵|água','A água 氵 que sumiu 莫. Areia até onde a vista alcança.','砂漠|sabaku|deserto;漠然|bakuzen|vago'],
['茫','—','',1,'','','一|linha','',''],
['朧2','—','',1,'','','一|linha','',''],
['閃','—','',1,'','','一|linha','',''],
['瞬','instante/piscar','matataku',18,'シュン|shun','またた(く)|matata(ku)','目|olho','O tempo que o olho 目 leva pra piscar.','一瞬|isshun|um instante;瞬間|shunkan|momento'],
['刹','—','',1,'','','一|linha','',''],
['迅','veloz','jin',6,'ジン|jin','','辶|caminhar','Andar 辶 tão rápido que quase não se vê.','迅速|jinsoku|rapidez;疾風迅雷|shippūjinrai|como um raio'],
['疾','—','',1,'','','一|linha','',''],
['緊','tenso/urgente','kin',15,'キン|kin','','糸|fio','O fio 糸 puxado com firmeza. Sem folga.','緊張|kinchō|tensão;緊急|kinkyū|emergência'],
['張','esticar/afirmar','haru',11,'チョウ|chō','は(る)|ha(ru)','弓|arco','O arco 弓 esticado no comprimento 長.','緊張|kinchō|tensão;主張|shuchō|alegação'],
['迫2','—','',1,'','','一|linha','',''],
['craze','—','',1,'','','一|linha','',''],
['狂','enlouquecer/fanático','kuruu',7,'キョウ|kyō','くる(う)|kuru(u)','犭|animal','O bicho 犭 que se acha rei 王. Perdeu a medida.','狂う|kuruu|enlouquecer;熱狂|nekkyō|frenesi'],
['癲','—','',1,'','','一|linha','',''],
['錯2','—','',1,'','','一|linha','',''],
['乱','desordem/revolta','midareru',7,'ラン|ran','みだ(れる)|mida(reru)','乙|gancho','O fio embaraçado com o gancho 乙 no fim. Bagunça.','混乱|konran|confusão;乱れる|midareru|desarrumar'],
['混','misturar','mazeru',11,'コン|kon','ま(ぜる)|ma(zeru)','氵|água','A água 氵 que junta tudo 昆 num caldo só.','混雑|konzatsu|aglomeração;混ぜる|mazeru|misturar'],
['紛','confundir/extraviar','magireru',10,'フン|fun','まぎ(れる)|magi(reru)','糸|fio','Os fios 糸 divididos 分 e trocados. Sumiu no meio.','紛争|funsō|conflito;紛らわしい|magirawashii|confuso'],
['雑2','—','',1,'','','一|linha','',''],
['秩','ordem','chitsu',10,'チツ|chitsu','','禾|arroz','O arroz 禾 perdido 失 e depois arrumado. A ordem restaurada.','秩序|chitsujo|ordem'],
['序','ordem/prefácio','jo',7,'ジョ|jo','','广|telheiro','A ala lateral 予 da casa 广. O que vem antes.','順序|junjo|sequência;序文|jobun|prefácio'],
['順','ordem/obediente','jun',12,'ジュン|jun','','頁|cabeça','A cabeça 頁 que segue o rio 川 sem discutir.','順番|junban|ordem da fila;順調|junchō|indo bem'],
['逆','inverso/contrário','saka',9,'ギャク|gyaku','さか|saka','辶|caminhar','Andar 辶 na direção oposta de todo mundo.','逆|gyaku|o contrário;逆転|gyakuten|virada'],
['沿2','—','',1,'','','一|linha','',''],
['随2','—','',1,'','','一|linha','',''],
['伴','acompanhar','tomonau',7,'ハン|han','ともな(う)|tomona(u)','亻|pessoa','A pessoa 亻 que vai junto pela metade 半 do caminho.','伴う|tomonau|acompanhar;同伴|dōhan|companhia'],
['添2','—','',1,'','','一|linha','',''],
['副2','—','',1,'','','一|linha','',''],
['兼','acumular/e também','kaneru',10,'ケン|ken','か(ねる)|ka(neru)','八|separar','Uma mão segurando duas espigas ao mesmo tempo.','兼ねる|kaneru|acumular;兼用|ken-yō|uso duplo'],
['併','fundir/juntar','awaseru',8,'ヘイ|hei','あわ(せる)|awa(seru)','亻|pessoa','Duas pessoas 亻 postas lado a lado 并.','併せる|awaseru|combinar;合併|gappei|fusão'],
['融2','—','',1,'','','一|linha','',''],
['蓄','acumular/poupar','takuwaeru',13,'チク|chiku','たくわ(える)|takuwa(eru)','艹|planta','Guardar a colheita 艹 no celeiro 畜.','貯蓄|chochiku|poupança;蓄える|takuwaeru|estocar'],
['貯','poupar','tameru',12,'チョ|cho','た(める)|ta(meru)','貝|concha','Guardar o dinheiro 貝 dentro de casa 宁.','貯金|chokin|poupança;貯める|tameru|juntar'],
['蔵2','—','',1,'','','一|linha','',''],
['潤2','—','',1,'','','一|linha','',''],
['贅','—','',1,'','','一|linha','',''],
['奢','—','',1,'','','一|linha','',''],
['倹','—','',1,'','','一|linha','',''],
['質2','—','',1,'','','一|linha','',''],
['朴','—','',1,'','','一|linha','',''],
['素','simples/elemento','so',10,'ソ|so;ス|su','','糸|fio','O fio 糸 cru, do jeito que saiu. Sem enfeite.','素敵|suteki|maravilhoso;要素|yōso|elemento'],
['純2','—','',1,'','','一|linha','',''],
['潔2','—','',1,'','','一|linha','',''],
['虚','vazio/vão','kyo',11,'キョ|kyo','むな(しい)|muna(shii)','虍|tigre','O tigre 虍 sobre a colina onde já não há nada.','虚偽|kyogi|falsidade;謙虚|kenkyo|humildade'],
['偽2','—','',1,'','','一|linha','',''],
['幻','ilusão/fantasma','maboroshi',4,'ゲン|gen','まぼろし|maboroshi','幺|fio','O fio 幺 virado ao contrário. O que parece mas não é.','幻|maboroshi|ilusão;幻想|gensō|fantasia'],
['夢2','—','',1,'','','一|linha','',''],
['妄','—','',1,'','','一|linha','',''],
['錯3','—','',1,'','','一|linha','',''],
['悠','tranquilo/distante','yū',11,'ユウ|yū','','心|coração','O coração 心 solto no tempo, sem pressa nenhuma.','悠々|yūyū|calmamente;悠久|yūkyū|eternidade'],
['閑','ócio/quietude','kan',12,'カン|kan','','門|portão','O portão 門 com a tranca de madeira 木. Ninguém entra, ninguém sai.','閑静|kansei|tranquilo;繁閑|hankan|movimento e calmaria'],
['寧','tranquilo/de preferência','nei',14,'ネイ|nei','','宀|telhado','Debaixo do telhado 宀, o coração em paz sobre a mesa.','丁寧|teinei|educado;安寧|annei|paz'],
['穏','calmo/moderado','odayaka',16,'オン|on','おだ(やか)|oda(yaka)','禾|arroz','O arroz 禾 guardado com cuidado. Nada de sobressalto.','穏やか|odayaka|sereno;平穏|heion|tranquilidade'],
['癒2','—','',1,'','','一|linha','',''],
['慰2','—','',1,'','','一|linha','',''],
['添3','—','',1,'','','一|linha','',''],
['扶','—','',1,'','','一|linha','',''],
['援2','—','',1,'','','一|linha','',''],
['貢','contribuir/tributo','kō',10,'コウ|kō','みつ(ぐ)|mitsu(gu)','貝|concha','O dinheiro 貝 do trabalho 工 entregue a quem manda.','貢献|kōken|contribuição;貢ぐ|mitsugu|sustentar'],
['献','oferecer/dedicar','ken',13,'ケン|ken','','犬|cão','Oferecer o cão 犬 no ritual. Dedicar o que se tem.','貢献|kōken|contribuição;献立|kondate|cardápio'],
['尽2','—','',1,'','','一|linha','',''],
['犠','—','',1,'','','一|linha','',''],
['牲','—','',1,'','','一|linha','',''],
['奉2','—','',1,'','','一|linha','',''],
['仕2','—','',1,'','','一|linha','',''],
['疎2','—','',1,'','','一|linha','',''],
['孤','solitário/órfão','ko',9,'コ|ko','','子|criança','A criança 子 que ficou sozinha com a fruta 瓜.','孤独|kodoku|solidão;孤立|koritsu|isolamento'],
['独2','—','',1,'','','一|linha','',''],
['寡','—','',1,'','','一|linha','',''],
['隔2','—','',1,'','','一|linha','',''],
['閉2','—','',1,'','','一|linha','',''],
['鎖','corrente/fechar','kusari',18,'サ|sa','くさり|kusari','金|metal','Os elos de metal 金 encadeados.','封鎖|fūsa|bloqueio;鎖|kusari|corrente'],
['鍵2','—','',1,'','','一|linha','',''],
['錠2','—','',1,'','','一|linha','',''],
['牢','—','',1,'','','一|linha','',''],
['獄','prisão','goku',14,'ゴク|goku','','犭|animal','Dois cães 犭犬 guardando a palavra 言 do juiz.','地獄|jigoku|inferno;監獄|kangoku|cadeia'],
['監','supervisionar','kan',15,'カン|kan','','皿|prato','O olho 臣 sobre a bacia 皿 vigiando o reflexo.','監督|kantoku|diretor;監視|kanshi|vigilância'],
['督','—','',1,'','','一|linha','',''],
['臨2','—','',1,'','','一|linha','',''],
['審2','—','',1,'','','一|linha','',''],
['尋2','—','',1,'','','一|linha','',''],
['糾','—','',1,'','','一|linha','',''],
['弾2','—','',1,'','','一|linha','',''],
['劾','—','',1,'','','一|linha','',''],
['懲','—','',1,'','','一|linha','',''],
['赦','—','',1,'','','一|linha','',''],
['釈2','—','',1,'','','一|linha','',''],
['免2','—','',1,'','','一|linha','',''],
['寛2','—','',1,'','','一|linha','',''],
['慈2','—','',1,'','','一|linha','',''],
['恵','graça/bênção','megumi',10,'ケイ|kei;エ|e','めぐ(み)|megu(mi)','心|coração','O coração 心 que dá sem contar. A dádiva.','恵み|megumi|bênção;知恵|chie|sabedoria'],
['施','executar/doar','hodokosu',9,'シ|shi;セ|se','ほどこ(す)|hodoko(su)','方|bandeira','Estender a bandeira 方 e distribuir a todos.','実施|jisshi|execução;施設|shisetsu|instalação'],
['授2','—','',1,'','','一|linha','',''],
['賜','—','',1,'','','一|linha','',''],
['贈2','—','',1,'','','一|linha','',''],
['謝2','—','',1,'','','一|linha','',''],
['償2','—','',1,'','','一|linha','',''],
['報2','—','',1,'','','一|linha','',''],
['酬','—','',1,'','','一|linha','',''],
['稼','ganhar (dinheiro)','kasegu',15,'カ|ka','かせ(ぐ)|kase(gu)','禾|arroz','Plantar o arroz 禾 pra sustentar a casa 家.','稼ぐ|kasegu|ganhar dinheiro;稼働|kadō|operação'],
['儲','—','',1,'','','一|linha','',''],
['奪2','—','',1,'','','一|linha','',''],
['略2','—','',1,'','','一|linha','',''],
['奪3','—','',1,'','','一|linha','',''],
['征','conquistar','sei',8,'セイ|sei','','彳|passo','Andar 彳 reto 正 até tomar a terra.','征服|seifuku|conquista;遠征|ensei|expedição'],
['服2','—','',1,'','','一|linha','',''],
['屈','curvar/ceder','kussuru',8,'クツ|kutsu','かが(む)|kaga(mu)','尸|corpo','O corpo 尸 dobrado até sair 出 do lugar.','退屈|taikutsu|tédio;屈折|kussetsu|refração'],
['伏','prostrar-se','fusu',6,'フク|fuku','ふ(す)|fu(su)','亻|pessoa','A pessoa 亻 deitada como o cão 犬 aos pés.','起伏|kifuku|ondulação;伏せる|fuseru|virar pra baixo'],
['降2','—','',1,'','','一|linha','',''],
['抵','resistir/opor','tei',8,'テイ|tei','','扌|mão','A mão 扌 firmada na base 氐, sem sair.','抵抗|teikō|resistência;大抵|taitei|geralmente'],
['抗','opor-se','kō',7,'コウ|kō','','扌|mão','A mão 扌 erguida 亢 contra o que vem.','抵抗|teikō|resistência;対抗|taikō|rivalidade'],
['衝','choque/impacto','shō',15,'ショウ|shō','','行|ir','O cruzamento 行 pesado 重 onde tudo colide.','衝撃|shōgeki|impacto;衝突|shōtotsu|colisão'],
['撃','golpear','utsu',15,'ゲキ|geki','う(つ)|u(tsu)','手|mão','A mão 手 e o carro de guerra. Atacar com tudo.','攻撃|kōgeki|ataque;撃つ|utsu|atirar'],
['攻','atacar','semeru',7,'コウ|kō','せ(める)|se(meru)','攵|bater','Bater 攵 no trabalho 工 do inimigo.','攻撃|kōgeki|ataque;専攻|senkō|especialização'],
['防2','—','',1,'','','一|linha','',''],
['御2','—','',1,'','','一|linha','',''],
['衛','defender/guarda','ei',16,'エイ|ei','','行|ir','Rondar 行 o perímetro 韋 a noite toda.','衛生|eisei|higiene;自衛|jiei|autodefesa'],
['盾2','—','',1,'','','一|linha','',''],
['矛','lança','hoko',5,'ム|mu','ほこ|hoko','矛|lança','A haste com a ponta e a alça.','矛盾|mujun|contradição;矛先|hokosaki|ponta da lança'],
['遂2','—','',1,'','','一|linha','',''],
['貫2','—','',1,'','','一|linha','',''],
['徹','penetrar/completo','tetsu',15,'テツ|tetsu','','彳|passo','Andar 彳 e atravessar até o outro lado.','徹底|tettei|minuciosidade;徹夜|tetsuya|virar a noite'],
['貞2','—','',1,'','','一|linha','',''],
['堅','firme/sólido','katai',12,'ケン|ken','かた(い)|kata(i)','土|terra','A terra 土 batida e compacta.','堅い|katai|firme;堅実|kenjitsu|sólido'],
['剛','—','',1,'','','一|linha','',''],
['柔','macio/flexível','yawarakai',9,'ジュウ|jū;ニュウ|nyū','やわ(らかい)|yawa(rakai)','木|árvore','A lança 矛 de madeira 木 nova, que ainda verga.','柔らかい|yawarakai|macio;柔道|jūdō|judô'],
['靭','—','',1,'','','一|linha','',''],
['弾3','—','',1,'','','一|linha','',''],
['伸2','—','',1,'','','一|linha','',''],
['縮2','—','',1,'','','一|linha','',''],
['膨','inchar/expandir','fukuramu',16,'ボウ|bō','ふく(らむ)|fuku(ramu)','月|corpo','O corpo 月 que cresce com som 彭. Encheu.','膨張|bōchō|expansão;膨らむ|fukuramu|inflar'],
['脹','—','',1,'','','一|linha','',''],
['萎','—','',1,'','','一|linha','',''],
['枯','murchar/secar','kareru',9,'コ|ko','か(れる)|ka(reru)','木|árvore','A árvore 木 que ficou velha 古 e parou.','枯れる|kareru|murchar;枯渇|kokatsu|esgotamento'],
['朽2','—','',1,'','','一|linha','',''],
['腐2','—','',1,'','','一|linha','',''],
['錆','—','',1,'','','一|linha','',''],
['耗','—','',1,'','','一|linha','',''],
['損2','—','',1,'','','一|linha','',''],
['吏','—','',1,'','','一|linha','',''],
['僕','eu (masc.)/servo','boku',14,'ボク|boku','しもべ|shimobe','亻|pessoa','A pessoa 亻 que serve. Virou o "eu" informal dos homens.','僕|boku|eu;下僕|geboku|criado'],
['俺','eu (bruto)','ore',10,'','おれ|ore','亻|pessoa','A pessoa 亻 que se cobre 奄. O "eu" mais direto e informal.','俺|ore|eu'],
['汝','—','',1,'','','一|linha','',''],
['彼2','—','',1,'','','一|linha','',''],
['某','certo/fulano','bō',9,'ボウ|bō','','木|árvore','A árvore 木 doce 甘 que não se nomeia. Fulano de tal.','某氏|bōshi|certo senhor;某所|bōsho|certo lugar'],
['誰2','—','',1,'','','一|linha','',''],
['如','como/se','nyo',6,'ジョ|jo;ニョ|nyo','ごと(し)|goto(shi)','女|mulher','A mulher 女 que fala 口 conforme mandaram. Tal como.','如実|nyojitsu|fielmente;欠如|ketsujo|ausência'],
['若2','—','',1,'','','一|linha','',''],
['遥','distante/longínquo','haruka',12,'ヨウ|yō','はる(か)|haru(ka)','辶|caminhar','Andar 辶 tanto que o ponto vira um borrão.','遥か|haruka|ao longe;遥拝|yōhai|reverência à distância'],
['彼方','—','',1,'','','一|linha','',''],
['僅','—','',1,'','','一|linha','',''],
['唯','único/somente','yui',11,'ユイ|yui;イ|i','ただ|tada','口|boca','A boca 口 e o pássaro 隹: uma resposta só, nada mais.','唯一|yuiitsu|único;唯物|yuibutsu|materialismo'],
['只','—','',1,'','','一|linha','',''],
['尚','ainda/além','nao',8,'ショウ|shō','なお|nao','⺌|pequeno','A fumaça saindo pela janela alta. O que ainda continua.','尚|nao|além disso;高尚|kōshō|nobre'],
['猶','—','',1,'','','一|linha','',''],
['且','além disso','katsu',5,'ショ|sho','か(つ)|ka(tsu)','一|linha','Pratos empilhados. Uma coisa e mais outra.','且つ|katsu|e também;且|katsu|ademais'],
['又','de novo/e','mata',2,'ユウ|yū','また|mata','又|mão','A mão direita. Fazer outra vez.','又|mata|de novo;又は|matawa|ou'],
['亦','—','',1,'','','一|linha','',''],
['皆2','—','',1,'','','一|linha','',''],
['諸','vários/diversos','sho',15,'ショ|sho','もろ|moro','言|palavra','As palavras 言 de muitas pessoas 者. Diversos.','諸国|shokoku|vários países;諸君|shokun|senhores'],
['各2','—','',1,'','','一|linha','',''],
['毎2','—','',1,'','','一|linha','',''],
['隔3','—','',1,'','','一|linha','',''],
['逐','—','',1,'','','一|linha','',''],
['漸','—','',1,'','','一|linha','',''],
['徐2','—','',1,'','','一|linha','',''],
['即','imediato/isto é','soku',7,'ソク|soku','','卩|ajoelhar','Sentar 卩 diante da comida e comer na hora.','即座|sokuza|no ato;即ち|sunawachi|ou seja'],
['既2','—','',1,'','','一|linha','',''],
['未2','—','',1,'','','一|linha','',''],
['将','general/prestes a','shō',10,'ショウ|shō','','寸|medida','A mão 寸 que comanda a carne do altar. O líder e o que está por vir.','将来|shōrai|futuro;主将|shushō|capitão'],
['来2','—','',1,'','','一|linha','',''],
['往','ida/passado','ō',8,'オウ|ō','','彳|passo','Andar 彳 e ir embora 主. O caminho de ida.','往復|ōfuku|ida e volta;往来|ōrai|tráfego'],
['復2','—','',1,'','','一|linha','',''],
['帰2','—','',1,'','','一|linha','',''],
['途2','—','',1,'','','一|linha','',''],
['沿3','—','',1,'','','一|linha','',''],
['辿','—','',1,'','','一|linha','',''],
['遭','deparar-se com','au',14,'ソウ|sō','あ(う)|a(u)','辶|caminhar','Andar 辶 e esbarrar 曹 no que não se esperava.','遭遇|sōgū|encontro;遭難|sōnan|acidente'],
['遇','—','',1,'','','一|linha','',''],
['偶2','—','',1,'','','一|linha','',''],
['縁3','—','',1,'','','一|linha','',''],
['宿2','—','',1,'','','一|linha','',''],
['宛','—','',1,'','','一|linha','',''],
['宜','—','',1,'','','一|linha','',''],
['妥2','—','',1,'','','一|linha','',''],
['稲2','—','',1,'','','一|linha','',''],
['穂','—','',1,'','','一|linha','',''],
['穫','—','',1,'','','一|linha','',''],
['穀','cereal/grão','koku',14,'コク|koku','','禾|arroz','O grão 禾 batido com a vara. O que alimenta.','穀物|kokumotsu|cereais;雑穀|zakkoku|grãos diversos'],
['粧2','—','',1,'','','一|linha','',''],
['醸2','—','',1,'','','一|linha','',''],
['酪','—','',1,'','','一|linha','',''],
['菓','doce/confeito','ka',11,'カ|ka','','艹|planta','A planta 艹 com o fruto 果 açucarado.','お菓子|okashi|doce;製菓|seika|confeitaria'],
['餅','—','',1,'','','一|linha','',''],
['麺','—','',1,'','','一|linha','',''],
['丼','—','',1,'','','一|linha','',''],
['膳','—','',1,'','','一|linha','',''],
['宴','banquete','en',10,'エン|en','うたげ|utage','宀|telhado','Debaixo do telhado 宀, a mulher 女 servindo ao sol 日. A festa.','宴会|enkai|banquete;披露宴|hirōen|recepção'],
['酌','—','',1,'','','一|linha','',''],
['杯2','—','',1,'','','一|linha','',''],
['碗','—','',1,'','','一|linha','',''],
['箸','—','',1,'','','一|linha','',''],
['鍋','—','',1,'','','一|linha','',''],
['釜','—','',1,'','','一|linha','',''],
['窯','—','',1,'','','一|linha','',''],
['陶','cerâmica','tō',11,'トウ|tō','','阝|colina','O barro da colina 阝 moldado no forno 匋.','陶器|tōki|cerâmica;陶芸|tōgei|olaria'],
['磁','magnético/porcelana','ji',14,'ジ|ji','','石|pedra','A pedra 石 que atrai pelos fios 玆 invisíveis.','磁石|jishaku|ímã;磁気|jiki|magnetismo'],
['鉱','minério','kō',13,'コウ|kō','','金|metal','O metal 金 ainda amplo 広 e bruto na rocha.','鉱山|kōzan|mina;鉱物|kōbutsu|mineral'],
['炭2','—','',1,'','','一|linha','',''],
['硫','—','',1,'','','一|linha','',''],
['酸2','—','',1,'','','一|linha','',''],
['塩2','—','',1,'','','一|linha','',''],
['沃','—','',1,'','','一|linha','',''],
['濃2','—','',1,'','','一|linha','',''],
['粒2','—','',1,'','','一|linha','',''],
['滴','gota/pingar','shizuku',14,'テキ|teki','しずく|shizuku;したた(る)|shitata(ru)','氵|água','A água 氵 que cai gota a gota 啇.','一滴|itteki|uma gota;点滴|tenteki|soro'],
['泡','bolha/espuma','awa',8,'ホウ|hō','あわ|awa','氵|água','A água 氵 que embrulha 包 o ar.','泡|awa|espuma;気泡|kihō|bolha'],
['湧','—','',1,'','','一|linha','',''],
['噴','jorrar','fuku',15,'フン|fun','ふ(く)|fu(ku)','口|boca','A boca 口 soltando tudo de uma vez 賁.','噴火|funka|erupção;噴水|funsui|chafariz'],
['漏','vazar','moru',14,'ロウ|rō','も(れる)|mo(reru)','氵|água','A água 氵 escapando pela chuva 雨 do teto 尸.','漏れる|moreru|vazar;漏電|rōden|fuga elétrica'],
['浸','embeber/inundar','hitasu',10,'シン|shin','ひた(す)|hita(su)','氵|água','A água 氵 que entra devagar e toma conta.','浸水|shinsui|inundação;浸る|hitaru|mergulhar'],
['濁2','—','',1,'','','一|linha','',''],
['澄2','—','',1,'','','一|linha','',''],
['潜2','—','',1,'','','一|linha','',''],
['沈2','—','',1,'','','一|linha','',''],
['漂2','—','',1,'','','一|linha','',''],
['溺2','—','',1,'','','一|linha','',''],
['渦','—','',1,'','','一|linha','',''],
['津','—','',1,'','','一|linha','',''],
['灘','—','',1,'','','一|linha','',''],
['沼2','—','',1,'','','一|linha','',''],
['潟2','—','',1,'','','一|linha','',''],
['磯','—','',1,'','','一|linha','',''],
['礁','—','',1,'','','一|linha','',''],
['艇','—','',1,'','','一|linha','',''],
['帆','—','',1,'','','一|linha','',''],
['錨','—','',1,'','','一|linha','',''],
['潮2','—','',1,'','','一|linha','',''],
['汐','—','',1,'','','一|linha','',''],
['沖','mar aberto/Okinawa','oki',7,'チュウ|chū','おき|oki','氵|água','A água 氵 do meio 中, longe da costa.','沖縄|okinawa|Okinawa;沖|oki|alto-mar'],
['岬','—','',1,'','','一|linha','',''],
['湾2','—','',1,'','','一|linha','',''],
['峡2','—','',1,'','','一|linha','',''],
['嶺2','—','',1,'','','一|linha','',''],
['峻2','—','',1,'','','一|linha','',''],
['岳','pico/monte','take',8,'ガク|gaku','たけ|take','山|montanha','A colina 丘 sobre a montanha 山. O cume alto.','山岳|sangaku|montanhas;岳|take|pico'],
['峰2','—','',1,'','','一|linha','',''],
['麓2','—','',1,'','','一|linha','',''],
['谷2','—','',1,'','','一|linha','',''],
['渓','—','',1,'','','一|linha','',''],
['滝2','—','',1,'','','一|linha','',''],
['瀬','—','',1,'','','一|linha','',''],
['淵','—','',1,'','','一|linha','',''],
['泥2','—','',1,'','','一|linha','',''],
['沢','pântano/abundância','sawa',7,'タク|taku','さわ|sawa','氵|água','A água 氵 espalhada pelo brejo. Também quer dizer fartura.','沢山|takusan|muito;金沢|kanazawa|Kanazawa'],
['潤3','—','',1,'','','一|linha','',''],
['湿2','—','',1,'','','一|linha','',''],
['乾2','—','',1,'','','一|linha','',''],
['燥','—','',1,'','','一|linha','',''],
['焦','queimar/impaciência','koge',12,'ショウ|shō','こ(げる)|ko(geru);あせ(る)|ase(ru)','灬|fogo','O pássaro 隹 no fogo 灬. Queimou, e a pressa também queima.','焦る|aseru|apressar-se;焦点|shōten|foco'],
['煎','—','',1,'','','一|linha','',''],
['熟','maduro/dominar','juku',15,'ジュク|juku','う(れる)|u(reru)','灬|fogo','O tempo e o fogo 灬 fazendo amadurecer.','熟語|jukugo|palavra composta;成熟|seijuku|maturidade'],
['塾','—','',1,'','','一|linha','',''],
['煮2','—','',1,'','','一|linha','',''],
['焼2','—','',1,'','','一|linha','',''],
['炉','—','',1,'','','一|linha','',''],
['煉','—','',1,'','','一|linha','',''],
['鍛2','—','',1,'','','一|linha','',''],
['錬2','—','',1,'','','一|linha','',''],
['鋳','fundir (metal)','iru',15,'チュウ|chū','い(る)|i(ru)','金|metal','O metal 金 derretido e vertido no molde 寿.','鋳造|chūzō|fundição;鋳型|igata|molde'],
['彫2','—','',1,'','','一|linha','',''],
['削2','—','',1,'','','一|linha','',''],
['磨2','—','',1,'','','一|linha','',''],
['研2','—','',1,'','','一|linha','',''],
['砕','esmigalhar','kudaku',9,'サイ|sai','くだ(く)|kuda(ku)','石|pedra','A pedra 石 partida até virar pó 卒.','砕く|kudaku|triturar;粉砕|funsai|pulverização'],
['粉2','—','',1,'','','一|linha','',''],
['塵','—','',1,'','','一|linha','',''],
['埃','—','',1,'','','一|linha','',''],
['汚2','—','',1,'','','一|linha','',''],
['濯2','—','',1,'','','一|linha','',''],
['拭2','—','',1,'','','一|linha','',''],
['掃2','—','',1,'','','一|linha','',''],
['浄2','—','',1,'','','一|linha','',''],
['菌2','—','',1,'','','一|linha','',''],
['疫','—','',1,'','','一|linha','',''],
['疾2','—','',1,'','','一|linha','',''],
['患','adoecer/sofrer','wazurau',11,'カン|kan','わずら(う)|wazura(u)','心|coração','O coração 心 espetado 串. Estar doente ou aflito.','患者|kanja|paciente;患う|wazurau|adoecer'],
['痩','—','',1,'','','一|linha','',''],
['肥','engordar/fértil','koeru',8,'ヒ|hi','こ(える)|ko(eru)','月|corpo','O corpo 月 que se acomoda 巴. Também a terra fértil.','肥料|hiryō|adubo;肥える|koeru|engordar'],
['痴2','—','',1,'','','一|linha','',''],
['盲','—','',1,'','','一|linha','',''],
['聾','—','',1,'','','一|linha','',''],
['麻','linho/dormência','asa',11,'マ|ma','あさ|asa','麻|linho','As fibras penduradas no galpão 广 pra secar.','麻|asa|linho;麻酔|masui|anestesia'],
['痺','—','',1,'','','一|linha','',''],
['癒3','—','',1,'','','一|linha','',''],
['蘇','—','',1,'','','一|linha','',''],
['蘇2','—','',1,'','','一|linha','',''],
['縦','vertical','tate',16,'ジュウ|jū','たて|tate','糸|fio','O fio 糸 que segue 従 de cima a baixo.','縦|tate|vertical;操縦|sōjū|pilotagem'],
['横2','—','',1,'','','一|linha','',''],
['貫3','—','',1,'','','一|linha','',''],
['径','—','',1,'','','一|linha','',''],
['幾2','—','',1,'','','一|linha','',''],
['零','zero/gotejar','rei',13,'レイ|rei','','雨|chuva','A chuva 雨 que cai e ordena 令. Nada sobra.','零点|reiten|zero;零細|reisai|minúsculo'],
['壱','—','',1,'','','一|linha','',''],
['弐','—','',1,'','','一|linha','',''],
['丙','—','',1,'','','一|linha','',''],
['乙','segundo/estranho','otsu',1,'オツ|otsu','','乙|gancho','Um gancho só. Segundo item de uma lista.','乙女|otome|donzela;甲乙|kōotsu|primeiro e segundo'],
['丑','—','',1,'','','一|linha','',''],
['寅','—','',1,'','','一|linha','',''],
['卯','—','',1,'','','一|linha','',''],
['辰','—','',1,'','','一|linha','',''],
['巳','—','',1,'','','一|linha','',''],
['亥','—','',1,'','','一|linha','',''],
['暁','—','',1,'','','一|linha','',''],
['昆','—','',1,'','','一|linha','',''],
['旦','—','',1,'','','一|linha','',''],
['宵','—','',1,'','','一|linha','',''],
['朝2','—','',1,'','','一|linha','',''],
['曙','—','',1,'','','一|linha','',''],
['昇','subir/ascender','noboru',8,'ショウ|shō','のぼ(る)|nobo(ru)','日|sol','O sol 日 que sobe conforme manda 升 a manhã.','上昇|jōshō|subida;昇進|shōshin|promoção'],
['沈3','—','',1,'','','一|linha','',''],
['隆','próspero/elevado','ryū',11,'リュウ|ryū','','阝|colina','A colina 阝 que cresce 生 alta. Estar no auge.','隆盛|ryūsei|prosperidade;隆起|ryūki|elevação'],
['盛2','—','',1,'','','一|linha','',''],
['旺','—','',1,'','','一|linha','',''],
['滋','—','',1,'','','一|linha','',''],
['潤4','—','',1,'','','一|linha','',''],
['沃2','—','',1,'','','一|linha','',''],
['肥2','—','',1,'','','一|linha','',''],
['痩2','—','',1,'','','一|linha','',''],
['飢','fome/faminto','ueru',10,'キ|ki','う(える)|u(eru)','飠|comida','A comida 飠 que virou apenas uma mesa 几 vazia.','飢餓|kiga|fome;飢える|ueru|passar fome'],
['餓','—','',1,'','','一|linha','',''],
['渇','ter sede/secar','kawaku',11,'カツ|katsu','かわ(く)|kawa(ku)','氵|água','A água 氵 que acabou 曷. A garganta seca.','渇く|kawaku|ter sede;枯渇|kokatsu|esgotamento'],
['潤5','—','',1,'','','一|linha','',''],
['飽','fartar-se/enjoar','akiru',13,'ホウ|hō','あ(きる)|a(kiru)','飠|comida','A comida 飠 que envolve 包 até não caber mais.','飽きる|akiru|enjoar;飽和|hōwa|saturação'],
['satisfy','—','',1,'','','一|linha','',''],
['craving2','—','',1,'','','一|linha','',''],
['嗜2','—','',1,'','','一|linha','',''],
['喫','consumir/fumar','kitsu',12,'キツ|kitsu','','口|boca','A boca 口 que recebe 契 o que se serve.','喫茶店|kissaten|cafeteria;喫煙|kitsuen|fumar'],
['吸2','—','',1,'','','一|linha','',''],
['嘔','—','',1,'','','一|linha','',''],
['吐2','—','',1,'','','一|linha','',''],
['噛','—','',1,'','','一|linha','',''],
['咀','—','',1,'','','一|linha','',''],
['嚥','—','',1,'','','一|linha','',''],
['唇','lábio','kuchibiru',10,'シン|shin','くちびる|kuchibiru','口|boca','A borda 辰 macia da boca 口.','唇|kuchibiru|lábio;口唇|kōshin|labial'],
['顎','—','',1,'','','一|linha','',''],
['頬','—','',1,'','','一|linha','',''],
['眉','sobrancelha','mayu',9,'ビ|bi','まゆ|mayu','目|olho','Os pelos por cima do olho 目.','眉|mayu|sobrancelha;眉毛|mayuge|sobrancelha'],
['睫','—','',1,'','','一|linha','',''],
['瞳','pupila','hitomi',17,'ドウ|dō','ひとみ|hitomi','目|olho','O olho 目 da criança 童, sempre brilhando.','瞳|hitomi|pupila;瞳孔|dōkō|pupila'],
['瞼','—','',1,'','','一|linha','',''],
['鼻2','—','',1,'','','一|linha','',''],
['喉2','—','',1,'','','一|linha','',''],
['髭2','—','',1,'','','一|linha','',''],
['爪2','—','',1,'','','一|linha','',''],
['肘','—','',1,'','','一|linha','',''],
['膝','—','',1,'','','一|linha','',''],
['踵','—','',1,'','','一|linha','',''],
['脊','—','',1,'','','一|linha','',''],
['髄2','—','',1,'','','一|linha','',''],
['腎','—','',1,'','','一|linha','',''],
['膀','—','',1,'','','一|linha','',''],
['臓2','—','',1,'','','一|linha','',''],
['腺','—','',1,'','','一|linha','',''],
['膜','membrana','maku',14,'マク|maku','','月|corpo','A camada fina 莫 que cobre o corpo 月.','膜|maku|membrana;粘膜|nenmaku|mucosa'],
['繊','fibra/fino','sen',17,'セン|sen','','糸|fio','O fio 糸 mais fino que existe.','繊維|sen-i|fibra;繊細|sensai|delicado'],
['維','manter/fibra','i',14,'イ|i','','糸|fio','O fio 糸 que amarra o pássaro 隹 e segura tudo.','維持|iji|manutenção;明治維新|meijiishin|Restauração Meiji'],
['絹','seda','kinu',13,'ケン|ken','きぬ|kinu','糸|fio','O fio 糸 tirado do casulo. A seda.','絹|kinu|seda;絹糸|kenshi|fio de seda'],
['綿2','—','',1,'','','一|linha','',''],
['麻2','—','',1,'','','一|linha','',''],
['紐','—','',1,'','','一|linha','',''],
['縄','corda/Okinawa','nawa',15,'ジョウ|jō','なわ|nawa','糸|fio','O fio 糸 torcido grosso.','縄|nawa|corda;沖縄|okinawa|Okinawa'],
['網3','—','',1,'','','一|linha','',''],
['繍','—','',1,'','','一|linha','',''],
['紋','brasão/padrão','mon',10,'モン|mon','','糸|fio','O desenho 文 tecido no fio 糸.','家紋|kamon|brasão familiar;指紋|shimon|impressão digital'],
['柄','cabo/padrão','gara',9,'ヘイ|hei','がら|gara;え|e','木|árvore','A madeira 木 que se segura 丙. O cabo, e o estampado.','人柄|hitogara|caráter;柄|gara|estampa'],
['袖','—','',1,'','','一|linha','',''],
['襟','—','',1,'','','一|linha','',''],
['裾','—','',1,'','','一|linha','',''],
['帽','chapéu','bō',12,'ボウ|bō','','巾|pano','O pano 巾 que cobre 冒 a cabeça.','帽子|bōshi|chapéu;脱帽|datsubō|tirar o chapéu'],
['靴2','—','',1,'','','一|linha','',''],
['傘','guarda-chuva','kasa',12,'サン|san','かさ|kasa','人|pessoa','O desenho literal: a cobertura aberta com as varetas.','傘|kasa|guarda-chuva;日傘|higasa|sombrinha'],
['杖','—','',1,'','','一|linha','',''],
['鞄','—','',1,'','','一|linha','',''],
['鞍','—','',1,'','','一|linha','',''],
['鎧','—','',1,'','','一|linha','',''],
['兜','—','',1,'','','一|linha','',''],
['刀2','—','',1,'','','一|linha','',''],
['鞘','—','',1,'','','一|linha','',''],
['砦','—','',1,'','','一|linha','',''],
['塁2','—','',1,'','','一|linha','',''],
['濠','—','',1,'','','一|linha','',''],
['櫓','—','',1,'','','一|linha','',''],
['殿2','—','',1,'','','一|linha','',''],
['廊','corredor','rō',12,'ロウ|rō','','广|telheiro','O corredor lateral 郎 da casa 广.','廊下|rōka|corredor;回廊|kairō|galeria'],
['縁4','—','',1,'','','一|linha','',''],
['框','—','',1,'','','一|linha','',''],
['畳','tatame/dobrar','tatami',12,'ジョウ|jō','たたみ|tatami','田|campo','Os campos 田 empilhados. O piso dobrável de palha.','畳|tatami|tatame;折り畳み|oritatami|dobrável'],
['襖','—','',1,'','','一|linha','',''],
['障','obstáculo/barreira','sawaru',14,'ショウ|shō','さわ(る)|sawa(ru)','阝|colina','A colina 阝 que se ergue 章 na frente.','障害|shōgai|deficiência;故障|koshō|avaria'],
['壁2','—','',1,'','','一|linha','',''],
['棟','—','',1,'','','一|linha','',''],
['梁','—','',1,'','','一|linha','',''],
['瓦','telha','kawara',5,'ガ|ga','かわら|kawara','瓦|telha','Duas telhas encaixadas uma na outra.','瓦|kawara|telha;瓦礫|gareki|escombros'],
['煉2','—','',1,'','','一|linha','',''],
['漆','—','',1,'','','一|linha','',''],
['塗2','—','',1,'','','一|linha','',''],
['釘','—','',1,'','','一|linha','',''],
['鋲','—','',1,'','','一|linha','',''],
['錘','—','',1,'','','一|linha','',''],
['秤','—','',1,'','','一|linha','',''],
['升','—','',1,'','','一|linha','',''],
['斗','—','',1,'','','一|linha','',''],
['斤2','—','',1,'','','一|linha','',''],
['尺','shaku/medida','shaku',4,'シャク|shaku','','尸|corpo','A mão medindo o palmo. Antiga unidade de comprimento.','尺度|shakudo|escala;尺|shaku|30 cm'],
['寸2','—','',1,'','','一|linha','',''],
['坪','—','',1,'','','一|linha','',''],
['畝','—','',1,'','','一|linha','',''],
['廷','corte/tribunal','tei',7,'テイ|tei','','廴|estender','O pátio 廴 onde o governo se estende.','法廷|hōtei|tribunal;宮廷|kyūtei|corte real'],
['朝廷','—','',1,'','','一|linha','',''],
['卿','—','',1,'','','一|linha','',''],
['爵','—','',1,'','','一|linha','',''],
['侯','—','',1,'','','一|linha','',''],
['伯','conde/tio','haku',7,'ハク|haku','','亻|pessoa','A pessoa 亻 branca 白, a mais velha do grupo.','伯父|oji|tio;画伯|gahaku|mestre pintor'],
['叔','—','',1,'','','一|linha','',''],
['甥2','—','',1,'','','一|linha','',''],
['嫡','—','',1,'','','一|linha','',''],
['嗣','—','',1,'','','一|linha','',''],
['系','linhagem/sistema','kei',7,'ケイ|kei','','糸|fio','O fio 糸 pendurado ligando as gerações.','系統|keitō|sistema;体系|taikei|estrutura'],
['譜','—','',1,'','','一|linha','',''],
['閥','—','',1,'','','一|linha','',''],
['藩','—','',1,'','','一|linha','',''],
['幕','cortina/xogunato','maku',13,'マク|maku','','巾|pano','O pano 巾 que cobre 莫 o palco. Também a era dos xoguns.','幕|maku|cortina;幕府|bakufu|xogunato'],
['将2','—','',1,'','','一|linha','',''],
['侍','samurai/servir','samurai',8,'ジ|ji','さむらい|samurai','亻|pessoa','A pessoa 亻 que serve no templo 寺 do senhor.','侍|samurai|samurai;侍女|jijo|dama de companhia'],
['忍2','—','',1,'','','一|linha','',''],
['謀2','—','',1,'','','一|linha','',''],
['勅','—','',1,'','','一|linha','',''],
['詔','—','',1,'','','一|linha','',''],
['璽','—','',1,'','','一|linha','',''],
['朕','—','',1,'','','一|linha','',''],
['陛','sua majestade','hei',10,'ヘイ|hei','','阝|colina','Os degraus 阝 do trono. Ninguém sobe além deles.','陛下|heika|Vossa Majestade'],
['殿3','—','',1,'','','一|linha','',''],
['貴2','—','',1,'','','一|linha','',''],
['賓','—','',1,'','','一|linha','',''],
['迎2','—','',1,'','','一|linha','',''],
['遣','enviar/despachar','tsukau',13,'ケン|ken','つか(う)|tsuka(u)','辶|caminhar','Mandar 辶 alguém em missão.','派遣|haken|envio;小遣い|kozukai|mesada'],
['赴2','—','',1,'','','一|linha','',''],
['駐','estacionar/estar lotado','chū',15,'チュウ|chū','','馬|cavalo','O cavalo 馬 parado no ponto principal 主.','駐車|chūsha|estacionamento;駐在|chūzai|residência oficial'],
['泊2','—','',1,'','','一|linha','',''],
['滞2','—','',1,'','','一|linha','',''],
['寓','—','',1,'','','一|linha','',''],
['邸','—','',1,'','','一|linha','',''],
['荘','—','',1,'','','一|linha','',''],
['閑2','—','',1,'','','一|linha','',''],
['庵','—','',1,'','','一|linha','',''],
['隠2','—','',1,'','','一|linha','',''],
['遁','—','',1,'','','一|linha','',''],
['潜3','—','',1,'','','一|linha','',''],
['伏2','—','',1,'','','一|linha','',''],
['忌','luto/evitar','imu',7,'キ|ki','い(む)|i(mu)','心|coração','O coração 心 que se contém por respeito.','忌避|kihi|esquiva;忌み|imi|tabu'],
['諱','—','',1,'','','一|linha','',''],
['呪','—','',1,'','','一|linha','',''],
['祟','—','',1,'','','一|linha','',''],
['厄','infortúnio','yaku',4,'ヤク|yaku','','厂|penhasco','A pessoa encolhida sob o penhasco 厂. Má sorte.','厄介|yakkai|incômodo;厄年|yakudoshi|ano de azar'],
['禍','—','',1,'','','一|linha','',''],
['凶','má sorte/violento','kyō',4,'キョウ|kyō','','凵|abertura','O poço 凵 com o X. Cair nele é desgraça.','凶悪|kyōaku|atroz;吉凶|kikkyō|sorte e azar'],
['吉','boa sorte','kichi',6,'キチ|kichi;キツ|kitsu','','口|boca','O samurai 士 e a boca 口: palavra de bom presságio.','吉日|kichijitsu|dia auspicioso;不吉|fukitsu|mau agouro'],
['祥','—','',1,'','','一|linha','',''],
['瑞','—','',1,'','','一|linha','',''],
['慶2','—','',1,'','','一|linha','',''],
['寿2','—','',1,'','','一|linha','',''],
['賀2','—','',1,'','','一|linha','',''],
['迭','—','',1,'','','一|linha','',''],
['憂2','—','',1,'','','一|linha','',''],
['虞','—','',1,'','','一|linha','',''],
['懸2','—','',1,'','','一|linha','',''],
['擁2','—','',1,'','','一|linha','',''],
['宰','—','',1,'','','一|linha','',''],
['帥','—','',1,'','','一|linha','',''],
['閣2','—','',1,'','','一|linha','',''],
['僚2','—','',1,'','','一|linha','',''],
['吏2','—','',1,'','','一|linha','',''],
['庶2','—','',1,'','','一|linha','',''],
['隷2','—','',1,'','','一|linha','',''],
['嘱2','—','',1,'','','一|linha','',''],
['赴3','—','',1,'','','一|linha','',''],
['携2','—','',1,'','','一|linha','',''],
['慶3','—','',1,'','','一|linha','',''],
['弔','—','',1,'','','一|linha','',''],
['悼2','—','',1,'','','一|linha','',''],
['憐2','—','',1,'','','一|linha','',''],
['憫','—','',1,'','','一|linha','',''],
['惻','—','',1,'','','一|linha','',''],
['慨','indignação/lamento','gai',13,'ガイ|gai','','忄|coração','O coração 忄 diante do que já 既 passou e não volta.','憤慨|fungai|indignação;感慨|kangai|emoção profunda'],
['憬','—','',1,'','','一|linha','',''],
['羨','invejar','urayamu',13,'セン|sen','うらや(む)|uraya(mu)','羊|ovelha','A ovelha 羊 gorda do vizinho e a água na boca.','羨望|senbō|inveja;羨ましい|urayamashii|invejável'],
['妬2','—','',1,'','','一|linha','',''],
['嫉','—','',1,'','','一|linha','',''],
['恥2','—','',1,'','','一|linha','',''],
['辱','humilhar','hazukashimeru',10,'ジョク|joku','はずかし(める)|hazukashi(meru)','辰|concha','A mão 寸 que rebaixa o outro na hora 辰 errada.','侮辱|bujoku|insulto;恥辱|chijoku|desonra'],
['侮','desprezar','anadoru',8,'ブ|bu','あなど(る)|anado(ru)','亻|pessoa','A pessoa 亻 que trata cada 毎 um como inferior.','侮辱|bujoku|insulto;侮る|anadoru|subestimar'],
['蔑','—','',1,'','','一|linha','',''],
['嘲','—','',1,'','','一|linha','',''],
['罵','—','',1,'','','一|linha','',''],
['詰2','—','',1,'','','一|linha','',''],
['責2','—','',1,'','','一|linha','',''],
['咎','—','',1,'','','一|linha','',''],
['糾2','—','',1,'','','一|linha','',''],
['弾4','—','',1,'','','一|linha','',''],
['懲2','—','',1,'','','一|linha','',''],
['戒2','—','',1,'','','一|linha','',''],
['諭2','—','',1,'','','一|linha','',''],
['悔2','—','',1,'','','一|linha','',''],
['詫2','—','',1,'','','一|linha','',''],
['償3','—','',1,'','','一|linha','',''],
['贖','—','',1,'','','一|linha','',''],
['赦2','—','',1,'','','一|linha','',''],
['恕','—','',1,'','','一|linha','',''],
['寛3','—','',1,'','','一|linha','',''],
['厚2','—','',1,'','','一|linha','',''],
['遇2','—','',1,'','','一|linha','',''],
['款2','—','',1,'','','一|linha','',''],
['款3','—','',1,'','','一|linha','',''],
['擬2','—','',1,'','','一|linha','',''],
['疑2','—','',1,'','','一|linha','',''],
['惑2','—','',1,'','','一|linha','',''],
['諜','—','',1,'','','一|linha','',''],
['偵','detetive/espiar','tei',11,'テイ|tei','','亻|pessoa','A pessoa 亻 que apura 貞 os fatos em silêncio.','探偵|tantei|detetive;偵察|teisatsu|reconhecimento'],
['諮2','—','',1,'','','一|linha','',''],
['審3','—','',1,'','','一|linha','',''],
['鑑','avaliar/espelho','kagami',23,'カン|kan','かんが(みる)|kanga(miru)','金|metal','O metal 金 polido que reflete e revela o valor.','鑑定|kantei|perícia;図鑑|zukan|enciclopédia ilustrada'],
['識2','—','',1,'','','一|linha','',''],
['洞2','—','',1,'','','一|linha','',''],
['察2','—','',1,'','','一|linha','',''],
['把2','—','',1,'','','一|linha','',''],
['握2','—','',1,'','','一|linha','',''],
['掌','palma/dominar','shō',12,'ショウ|shō','てのひら|tenohira','手|mão','A mão 手 nobre 尚 aberta. O que se tem sob controle.','掌握|shōaku|controle;車掌|shashō|cobrador'],
['宰2','—','',1,'','','一|linha','',''],
['statesman','—','',1,'','','一|linha','',''],
['卓2','—','',1,'','','一|linha','',''],
['抜2','—','',1,'','','一|linha','',''],
['粋2','—','',1,'','','一|linha','',''],
['髄3','—','',1,'','','一|linha','',''],
['髄4','—','',1,'','','一|linha','',''],
['真髄','—','',1,'','','一|linha','',''],
['奥','fundo/interior','oku',12,'オウ|ō','おく|oku','大|grande','O ponto mais recuado da casa, onde poucos entram.','奥|oku|fundo;奥様|okusama|senhora'],
['秘2','—','',1,'','','一|linha','',''],
['奥義','—','',1,'','','一|linha','',''],
['妙2','—','',1,'','','一|linha','',''],
['絶2','—','',1,'','','一|linha','',''],
['妙技','—','',1,'','','一|linha','',''],
['熟2','—','',1,'','','一|linha','',''],
['錬3','—','',1,'','','一|linha','',''],
['磨3','—','',1,'','','一|linha','',''],
['琢','—','',1,'','','一|linha','',''],
['彫3','—','',1,'','','一|linha','',''],
['刻2','—','',1,'','','一|linha','',''],
['銘','inscrição/gravar','mei',14,'メイ|mei','','金|metal','O nome 名 gravado no metal 金 pra sempre.','銘柄|meigara|marca;感銘|kanmei|impressão profunda'],
['碑2','—','',1,'','','一|linha','',''],
['刻3','—','',1,'','','一|linha','',''],
['痕2','—','',1,'','','一|linha','',''],
['跡2','—','',1,'','','一|linha','',''],
['遺2','—','',1,'','','一|linha','',''],
['墟','—','',1,'','','一|linha','',''],
['廃2','—','',1,'','','一|linha','',''],
['墟2','—','',1,'','','一|linha','',''],
['滅2','—','',1,'','','一|linha','',''],
['亡2','—','',1,'','','一|linha','',''],
['喪','luto/perda','mo',12,'ソウ|sō','も|mo','口|boca','As bocas 口 chorando sobre a roupa 衣 do falecido.','喪失|sōshitsu|perda;喪服|mofuku|traje de luto'],
['哀2','—','',1,'','','一|linha','',''],
['悼3','—','',1,'','','一|linha','',''],
['嘆2','—','',1,'','','一|linha','',''],
['泣','chorar','naku',8,'キュウ|kyū','な(く)|na(ku)','氵|água','A água 氵 de quem está de pé 立 sem conseguir falar.','泣く|naku|chorar;号泣|gōkyū|choro alto'],
['涙2','—','',1,'','','一|linha','',''],
['嗚','—','',1,'','','一|linha','',''],
['慟','—','',1,'','','一|linha','',''],
['癒4','—','',1,'','','一|linha','',''],
['蘇3','—','',1,'','','一|linha','',''],
['甦2','—','',1,'','','一|linha','',''],
['覚2','—','',1,'','','一|linha','',''],
['醒2','—','',1,'','','一|linha','',''],
['悟2','—','',1,'','','一|linha','',''],
['諦2','—','',1,'','','一|linha','',''],
['超2','—','',1,'','','一|linha','',''],
['越2','—','',1,'','','一|linha','',''],
['凌2','—','',1,'','','一|linha','',''],
['駕','—','',1,'','','一|linha','',''],
['傑2','—','',1,'','','一|linha','',''],
['豪2','—','',1,'','','一|linha','',''],
['壮','robusto/magnífico','sō',6,'ソウ|sō','','士|samurai','O samurai 士 no auge da força.','壮大|sōdai|grandioso;壮絶|sōzetsu|heroico'],
['勇','coragem','isamu',9,'ユウ|yū','いさ(む)|isa(mu)','力|força','A força 力 que brota 甬 na hora certa.','勇気|yūki|coragem;勇敢|yūkan|valente'],
['敢','ousar','aete',12,'カン|kan','あ(えて)|a(ete)','攵|bater','Bater 攵 de frente no que assusta.','勇敢|yūkan|corajoso;敢えて|aete|deliberadamente'],
['猛','feroz/intenso','mō',11,'モウ|mō','たけ(る)|take(ru)','犭|animal','O bicho 犭 filhote 孟 que já mostra os dentes.','猛烈|mōretsu|violento;猛獣|mōjū|fera'],
['烈','intenso/violento','retsu',10,'レツ|retsu','','灬|fogo','O fogo 灬 em fila 列, queimando tudo.','激烈|gekiretsu|feroz;熱烈|netsuretsu|ardente'],
['酷2','—','',1,'','','一|linha','',''],
['厳3','—','',1,'','','一|linha','',''],
['峻3','—','',1,'','','一|linha','',''],
['苛','—','',1,'','','一|linha','',''],
['虐2','—','',1,'','','一|linha','',''],
['凄','—','',1,'','','一|linha','',''],
['惨2','—','',1,'','','一|linha','',''],
['禍2','—','',1,'','','一|linha','',''],
['殃','—','',1,'','','一|linha','',''],
['災2','—','',1,'','','一|linha','',''],
['厄2','—','',1,'','','一|linha','',''],
['難2','—','',1,'','','一|linha','',''],
['苦2','—','',1,'','','一|linha','',''],
['艱','—','',1,'','','一|linha','',''],
['辛2','—','',1,'','','一|linha','',''],
['堪2','—','',1,'','','一|linha','',''],
['耐2','—','',1,'','','一|linha','',''],
['忍3','—','',1,'','','一|linha','',''],
['忌2','—','',1,'','','一|linha','',''],
['憚','—','',1,'','','一|linha','',''],
['遠慮','—','',1,'','','一|linha','',''],
['謙2','—','',1,'','','一|linha','',''],
['虚2','—','',1,'','','一|linha','',''],
['謹2','—','',1,'','','一|linha','',''],
['慎2','—','',1,'','','一|linha','',''],
['粛2','—','',1,'','','一|linha','',''],
['厳4','—','',1,'','','一|linha','',''],
['荘2','—','',1,'','','一|linha','',''],
['厳粛','—','',1,'','','一|linha','',''],
['聖2','—','',1,'','','一|linha','',''],
['浄3','—','',1,'','','一|linha','',''],
['斎','—','',1,'','','一|linha','',''],
['祓','—','',1,'','','一|linha','',''],
['禊','—','',1,'','','一|linha','',''],
['巫','—','',1,'','','一|linha','',''],
['祀','—','',1,'','','一|linha','',''],
['奉3','—','',1,'','','一|linha','',''],
['供2','—','',1,'','','一|linha','',''],
['献2','—','',1,'','','一|linha','',''],
['犠2','—','',1,'','','一|linha','',''],
['牲2','—','',1,'','','一|linha','',''],
['贄','—','',1,'','','一|linha','',''],
['祈2','—','',1,'','','一|linha','',''],
['願2','—','',1,'','','一|linha','',''],
['請','pedir/solicitar','kou',15,'セイ|sei;シン|shin','こ(う)|ko(u);う(ける)|u(keru)','言|palavra','A palavra 言 azul 青, limpa, feita de pedido formal.','申請|shinsei|requerimento;請求|seikyū|cobrança'],
['乞','—','',1,'','','一|linha','',''],
['懇','sincero/cordial','kon',17,'コン|kon','ねんご(ろ)|nengo(ro)','心|coração','O coração 心 que insiste com jeito até ser ouvido.','懇願|kongan|súplica;懇親|konshin|confraternização'],
['切実','—','',1,'','','一|linha','',''],
['痛切','—','',1,'','','一|linha','',''],
['冀','—','',1,'','','一|linha','',''],
['庶幾','—','',1,'','','一|linha','',''],
/* ── bloco final: 80 kanji N1 com ficha completa ── */
['逸','desviar/excepcional','itsu',11,'イツ|itsu','そ(れる)|so(reru)','辶|caminhar','O coelho 兔 que foge 辶 do cercado. Sai da linha, e às vezes por ser bom demais.','逸材|itsuzai|talento raro;逸脱|itsudatsu|desvio'],
['該','o referido','gai',13,'ガイ|gai','','言|palavra','A palavra 言 que aponta exatamente 亥 aquele caso.','該当|gaitō|corresponder;当該|tōgai|em questão'],
['措','dispor/medida','so',11,'ソ|so','','扌|mão','A mão 扌 que arruma o que já 昔 estava fora do lugar.','措置|sochi|providência;措く|oku|pôr de lado'],
['顧','olhar para trás','kaerimiru',21,'コ|ko','かえり(みる)|kaeri(miru)','頁|cabeça','Virar a cabeça 頁 como o pássaro 隹 que confere o ninho.','顧客|kokyaku|cliente;回顧|kaiko|retrospectiva'],
['賦','dom/tributo','fu',15,'フ|fu','','貝|concha','O dinheiro 貝 distribuído 武 pela autoridade. Também o dom que se recebe.','天賦|tenpu|dom natural;賦課|fuka|tributação'],
['呈','apresentar','tei',7,'テイ|tei','','口|boca','A boca 口 que fala de pé 王 diante do superior. Oferecer formalmente.','贈呈|zōtei|oferta;呈する|teisuru|apresentar'],
['拒','recusar','kobamu',8,'キョ|kyo','こば(む)|koba(mu)','扌|mão','A mão 扌 esticada como régua 巨. Até aqui e não passa.','拒否|kyohi|recusa;拒む|kobamu|rejeitar'],
['却','rejeitar/ao contrário','kyaku',7,'キャク|kyaku','','卩|ajoelhar','Mandar 卩 embora 去 o que foi trazido.','却下|kyakka|indeferimento;返却|henkyaku|devolução'],
['撤','retirar','tetsu',15,'テツ|tetsu','','扌|mão','A mão 扌 que atravessa 徹 e leva tudo de volta.','撤退|tettai|retirada;撤回|tekkai|revogação'],
['遵','obedecer','jun',15,'ジュン|jun','','辶|caminhar','Andar 辶 respeitando 尊 o que foi combinado.','遵守|junshu|cumprimento;遵法|junpō|legalidade'],
['拠','base/fundamento','kyo',8,'キョ|kyo','よ(る)|yo(ru)','扌|mão','A mão 扌 apoiada no que sustenta 処 o argumento.','根拠|konkyo|fundamento;証拠|shōko|prova'],
['逮','prender','tai',11,'タイ|tai','','辶|caminhar','Andar 辶 até alcançar 隶 quem fugiu.','逮捕|taiho|prisão'],
['拘','deter/apegar-se','kō',8,'コウ|kō','','扌|mão','A mão 扌 que agarra 句 e não larga.','拘束|kōsoku|restrição;拘る|kodawaru|ser exigente'],
['誓','jurar','chikau',14,'セイ|sei','ちか(う)|chika(u)','言|palavra','A palavra 言 cortada com a mão 折. Promessa que não se desfaz.','誓約|seiyaku|juramento;誓う|chikau|jurar'],
['盟','aliança','mei',13,'メイ|mei','','皿|prato','Beber do mesmo prato 皿 sob a lua 明. Selar o pacto.','同盟|dōmei|aliança;加盟|kamei|adesão'],
['締','firmar/apertar','shimeru',15,'テイ|tei','し(める)|shi(meru)','糸|fio','O fio 糸 amarrado como o imperador 帝 manda. Fechar o acordo.','締切|shimekiri|prazo;締結|teiketsu|celebração'],
['賠','indenizar','bai',15,'バイ|bai','','貝|concha','Devolver o dinheiro 貝 em dobro 咅 pelo dano.','賠償|baishō|indenização'],
['控','abster-se/reserva','hikaeru',11,'コウ|kō','ひか(える)|hika(eru)','扌|mão','A mão 扌 que segura no vazio 空. Esperar sem agir.','控える|hikaeru|conter-se;控訴|kōso|apelação'],
['承','consentir/receber','uketamawaru',8,'ショウ|shō','うけたまわ(る)|uketamawa(ru)','手|mão','As mãos erguidas recebendo o que vem de cima.','承知|shōchi|ciente;了承|ryōshō|anuência'],
['了','concluir/entender','ryō',2,'リョウ|ryō','','亅|gancho','A criança enrolada, sem os braços. Fechado, terminado.','完了|kanryō|conclusão;了解|ryōkai|entendido'],
['履','calçar/cumprir','haku',15,'リ|ri','は(く)|ha(ku)','尸|corpo','O corpo 尸 que refaz 復 o caminho de sapato. Também cumprir o combinado.','履歴|rireki|histórico;履く|haku|calçar'],
['践','praticar','sen',13,'セン|sen','','足|pé','O pé 足 que pisa e faz de verdade.','実践|jissen|prática'],
['挑','desafiar','idomu',9,'チョウ|chō','いど(む)|ido(mu)','扌|mão','A mão 扌 que provoca o presságio 兆. Vem que tem.','挑戦|chōsen|desafio;挑む|idomu|enfrentar'],
['拓','desbravar','taku',8,'タク|taku','','扌|mão','A mão 扌 tirando as pedras 石 pra abrir o terreno.','開拓|kaitaku|desbravamento;拓く|hiraku|abrir caminho'],
['培','cultivar','tsuchikau',11,'バイ|bai','つちか(う)|tsuchika(u)','土|terra','Amontoar terra 土 em volta 咅 da muda pra ela pegar.','培養|baiyō|cultura;栽培|saibai|cultivo'],
['湧','jorrar','waku',12,'ユウ|yū','わ(く)|wa(ku)','氵|água','A água 氵 que sobe com força 勇 do fundo.','湧く|waku|brotar;湧水|yūsui|nascente'],
['琴','koto (cítara)','koto',12,'キン|kin','こと|koto','王|jade','Duas fileiras de jade 王 sobre a caixa. As cordas do koto.','琴|koto|cítara japonesa;木琴|mokkin|xilofone'],
['猿','macaco','saru',13,'エン|en','さる|saru','犭|animal','O bicho 犭 de braços compridos 袁.','猿|saru|macaco;猿真似|sarumane|imitação boba'],
['狩','caçar','karu',9,'シュ|shu','か(る)|ka(ru)','犭|animal','O cão 犭 que guarda 守 e persegue a presa.','狩り|kari|caça;狩猟|shuryō|caçada'],
['獲','capturar','eru',16,'カク|kaku','え(る)|e(ru)','犭|animal','O cão 犭 trazendo o pássaro 隹 na boca.','獲得|kakutoku|aquisição;獲物|emono|presa'],
['畜','gado','chiku',10,'チク|chiku','','田|campo','Os fios 玄 amarrando o bicho no campo 田.','家畜|kachiku|gado;畜産|chikusan|pecuária'],
['獣','fera','kemono',16,'ジュウ|jū','けもの|kemono','犭|animal','O bicho 犭 selvagem que se caça com armadilha.','獣医|jūi|veterinário;猛獣|mōjū|fera'],
['鶴','grou','tsuru',21,'カク|kaku','つる|tsuru','鳥|pássaro','O pássaro 鳥 branco de pescoço longo. Símbolo de mil anos.','鶴|tsuru|grou;千羽鶴|senbazuru|mil tsurus'],
['亀','tartaruga','kame',11,'キ|ki','かめ|kame','亀|tartaruga','O casco riscado com a cabeça e as patas de fora.','亀|kame|tartaruga;亀裂|kiretsu|rachadura'],
['鯨','baleia','kujira',19,'ゲイ|gei','くじら|kujira','魚|peixe','O peixe 魚 do tamanho de uma capital 京.','鯨|kujira|baleia;捕鯨|hogei|caça à baleia'],
['飼','criar (animal)','kau',13,'シ|shi','か(う)|ka(u)','飠|comida','Dar comida 飠 todo dia 司. Criar bicho é isso.','飼う|kau|criar;飼育|shiiku|criação'],
['巣','ninho','su',11,'ソウ|sō','す|su','⺌|pequeno','Os filhotes no cesto em cima da árvore 木.','巣|su|ninho;巣立つ|sudatsu|deixar o ninho'],
['殖','procriar/multiplicar','fueru',12,'ショク|shoku','ふ(える)|fu(eru)','歹|osso','O que se planta 直 e vai se repetindo sozinho.','増殖|zōshoku|proliferação;繁殖|hanshoku|reprodução'],
['胞','célula','hō',9,'ホウ|hō','','月|corpo','O saquinho 包 de carne 月 que envolve a vida.','細胞|saibō|célula;同胞|dōhō|compatriota'],
['茂','viçoso/denso','shigeru',8,'モ|mo','しげ(る)|shige(ru)','艹|planta','A planta 艹 que cresce 戊 sem parar.','茂る|shigeru|frondejar;繁茂|hanmo|vegetação densa'],
['暫','temporário','zan',15,'ザン|zan','しばら(く)|shibara(ku)','日|sol','Cortar 斬 um pedacinho do dia 日. Só por enquanto.','暫く|shibaraku|por um tempo;暫定|zantei|provisório'],
['暇','folga/tempo livre','hima',13,'カ|ka','ひま|hima','日|sol','O dia 日 emprestado 叚 só pra você.','暇|hima|tempo livre;休暇|kyūka|férias'],
['漫','disperso/mangá','man',14,'マン|man','','氵|água','A água 氵 que se espalha 曼 sem rumo. Solto, à toa.','漫画|manga|mangá;漫然|manzen|distraído'],
['睡','sono','sui',13,'スイ|sui','','目|olho','O olho 目 que pende 垂 e fecha.','睡眠|suimin|sono;熟睡|jukusui|sono profundo'],
['魔','demônio/mágica','ma',21,'マ|ma','','鬼|espírito','O espírito 鬼 escondido no linho 麻. O que enfeitiça.','魔法|mahō|magia;邪魔|jama|estorvo'],
['繕','remendar','tsukurou',18,'ゼン|zen','つくろ(う)|tsukuro(u)','糸|fio','O fio 糸 usado com bondade 善 pra consertar o rasgo.','修繕|shūzen|reparo;繕う|tsukurou|remendar'],
['綻','desfiar/desabrochar','hokorobiru',14,'タン|tan','ほころ(びる)|hokoro(biru)','糸|fio','O fio 糸 que se fixou 定 mal e abre. Rasga, ou floresce.','破綻|hatan|colapso;綻びる|hokorobiru|descosturar'],
['緻','minucioso','chi',16,'チ|chi','','糸|fio','O fio 糸 tecido até 致 o último detalhe.','緻密|chimitsu|meticuloso;精緻|seichi|apurado'],
['拙','desajeitado','tsutanai',8,'セツ|setsu','つたな(い)|tsutana(i)','扌|mão','A mão 扌 que sai 出 do jeito errado.','拙い|tsutanai|canhestro;稚拙|chisetsu|tosco'],
['匠','artesão','shō',6,'ショウ|shō','','匚|caixa','O machado 斤 guardado na caixa 匚 de ferramentas.','巨匠|kyoshō|grande mestre;意匠|ishō|design'],
['傲','arrogante','gō',13,'ゴウ|gō','おご(る)|ogo(ru)','亻|pessoa','A pessoa 亻 que anda de nariz erguido 敖.','傲慢|gōman|arrogância;傲然|gōzen|altivo'],
['鬱','melancolia/denso','utsu',29,'ウツ|utsu','','鬯|erva','A mata fechada onde nada respira. O peito apertado.','憂鬱|yūutsu|depressão;鬱蒼|ussō|frondoso'],
['匿','ocultar','toku',10,'トク|toku','かくま(う)|kakuma(u)','匚|caixa','Guardar na caixa 匚 quem 若 não pode aparecer.','匿名|tokumei|anonimato;隠匿|intoku|ocultação'],
['督','supervisionar','toku',13,'トク|toku','','目|olho','O olho 目 que fica em cima 叔 do trabalho.','監督|kantoku|diretor;督促|tokusoku|cobrança'],
['佐','assistir','sa',7,'サ|sa','','亻|pessoa','A pessoa 亻 que fica à esquerda 左 pra ajudar.','補佐|hosa|assessoria;大佐|taisa|coronel'],
['摂','absorver/reger','setsu',13,'セツ|setsu','','扌|mão','A mão 扌 que recolhe e administra tudo junto.','摂取|sesshu|ingestão;摂氏|sesshi|Celsius'],
['撮','fotografar','toru',15,'サツ|satsu','と(る)|to(ru)','扌|mão','A mão 扌 que pega 最 o instante e guarda.','撮影|satsuei|filmagem;撮る|toru|fotografar'],
['掲','erguer/publicar','kakageru',11,'ケイ|kei','かか(げる)|kaka(geru)','扌|mão','A mão 扌 levantando 曷 a placa pra todos verem.','掲示|keiji|aviso;掲載|keisai|publicação'],
['揚','erguer/fritar','ageru',12,'ヨウ|yō','あ(げる)|a(geru)','扌|mão','A mão 扌 que levanta ao sol 昜. Também tirar do óleo.','揚げる|ageru|fritar;高揚|kōyō|exaltação'],
['揮','brandir/comandar','ki',12,'キ|ki','','扌|mão','A mão 扌 que dirige o exército 軍 com um gesto.','指揮|shiki|regência;発揮|hakki|demonstração'],
['挿','inserir','sasu',10,'ソウ|sō','さ(す)|sa(su)','扌|mão','A mão 扌 enfiando o pilão 臿 no buraco.','挿入|sōnyū|inserção;挿絵|sashie|ilustração'],
['描','desenhar','egaku',11,'ビョウ|byō','えが(く)|ega(ku)','扌|mão','A mão 扌 traçando a muda 苗 no papel.','描写|byōsha|descrição;描く|egaku|desenhar'],
['搬','transportar','han',13,'ハン|han','','扌|mão','A mão 扌 carregando o barco 般 de coisas.','運搬|unpan|transporte;搬入|hannyū|entrada de carga'],
['搭','embarcar','tō',12,'トウ|tō','','扌|mão','A mão 扌 que sobe 荅 na aeronave.','搭乗|tōjō|embarque;搭載|tōsai|equipado com'],
['撲','bater/erradicar','boku',15,'ボク|boku','','扌|mão','A mão 扌 do servo 業 batendo com força.','相撲|sumō|sumô;撲滅|bokumetsu|erradicação'],
['抽','extrair/sortear','chū',8,'チュウ|chū','','扌|mão','A mão 扌 puxando de onde 由 estava guardado.','抽選|chūsen|sorteio;抽象|chūshō|abstrato'],
['括','agrupar','katsu',9,'カツ|katsu','くく(る)|kuku(ru)','扌|mão','A mão 扌 e a língua 舌: juntar tudo numa frase só.','包括|hōkatsu|abrangente;一括|ikkatsu|de uma vez'],
['排','excluir/expelir','hai',11,'ハイ|hai','','扌|mão','A mão 扌 empurrando pra fora o que não 非 serve.','排除|haijo|exclusão;排水|haisui|drenagem'],
['譜','partitura/genealogia','fu',19,'フ|fu','','言|palavra','As palavras 言 alinhadas 普 em ordem. A pauta e a árvore genealógica.','楽譜|gakufu|partitura;系譜|keifu|linhagem'],
['韻','rima','in',19,'イン|in','','音|som','O som 音 que se repete no fim do verso.','韻|in|rima;押韻|ōin|rimar'],
['詠','recitar/compor','yomu',12,'エイ|ei','よ(む)|yo(mu)','言|palavra','A palavra 言 esticada 永 no canto. Declamar poema.','詠む|yomu|compor verso;朗詠|rōei|recitação'],
['吟','recitar/entoar','gin',7,'ギン|gin','','口|boca','A boca 口 que agora 今 solta o verso.','吟味|ginmi|exame cuidadoso;詩吟|shigin|recitação de poema'],
['謡','canção/balada','utai',16,'ヨウ|yō','うたい|utai','言|palavra','A palavra 言 que balança 䍃 no ritmo antigo.','民謡|min-yō|canção folclórica;童謡|dōyō|canção infantil'],
['弦','corda (de instrumento)','gen',8,'ゲン|gen','つる|tsuru','弓|arco','A corda do arco 弓 esticada e escura 玄.','弦楽器|gengakki|instrumento de corda;上弦|jōgen|quarto crescente'],
['鼓','tambor','tsuzumi',13,'コ|ko','つづみ|tsuzumi','鼓|tambor','A vasilha 壴 e a baqueta 支 batendo nela.','太鼓|taiko|tambor;鼓動|kodō|batida do coração'],
['鐘','sino','kane',20,'ショウ|shō','かね|kane','金|metal','O metal 金 grande como uma criança 童 em pé.','鐘|kane|sino;警鐘|keishō|alarme'],
['鈴','sininho','suzu',13,'レイ|rei','すず|suzu','金|metal','O metal 金 que ordena 令 com o tilintar.','鈴|suzu|guizo;呼び鈴|yobirin|campainha'],
['滑','—','',1,'','','一|linha','',''],
['潜','—','',1,'','','一|linha','',''],
['朴','simples/singelo','boku',6,'ボク|boku','','木|árvore','A madeira 木 crua, sem verniz.','素朴|soboku|singelo;純朴|junboku|ingênuo'],
['循','—','',1,'','','一|linha','',''],
['庸','medíocre/comum','yō',11,'ヨウ|yō','','广|telheiro','O que se usa 用 todo dia, sem nada de especial.','凡庸|bon-yō|medíocre;中庸|chūyō|equilíbrio'],
['妃','—','',1,'','','一|linha','',''],
['嫡','—','',1,'','','一|linha','',''],
/* ── mais 66 kanji N1 ── */
['彰','evidenciar/honrar','shō',14,'ショウ|shō','','彡|traços','Os riscos 彡 sobre o capítulo 章. Deixar o mérito à vista.','表彰|hyōshō|premiação;顕彰|kenshō|homenagem'],
['爵','título de nobreza','shaku',17,'シャク|shaku','','爪|garra','A taça ritual entregue ao nobre. Vira o próprio título.','爵位|shakui|título nobiliárquico;公爵|kōshaku|duque'],
['侯','marquês','kō',9,'コウ|kō','','亻|pessoa','A pessoa 亻 com a flecha 矢 atrás do alvo. O senhor feudal.','諸侯|shokō|senhores feudais;侯爵|kōshaku|marquês'],
['叔','tio mais novo','shuku',8,'シュク|shuku','','又|mão','A mão 又 do irmão caçula do seu pai.','叔父|oji|tio;叔母|oba|tia'],
['妃','consorte','hi',6,'ヒ|hi','きさき|kisaki','女|mulher','A mulher 女 ao lado 己 do soberano.','王妃|ōhi|rainha consorte;妃殿下|hidenka|Sua Alteza'],
['嫡','herdeiro legítimo','chaku',14,'チャク|chaku','','女|mulher','A mulher 女 principal 啇 da casa. Dela vem o herdeiro.','嫡子|chakushi|filho legítimo;嫡流|chakuryū|linhagem direta'],
['嗣','suceder','shi',13,'シ|shi','','口|boca','A boca 口 que passa 冊 o nome adiante.','後嗣|kōshi|sucessor;嗣子|shishi|herdeiro'],
['閥','clique/facção','batsu',14,'バツ|batsu','','門|portão','O portão 門 que só abre pros seus. O grupo fechado.','派閥|habatsu|facção;財閥|zaibatsu|conglomerado'],
['藩','domínio feudal','han',18,'ハン|han','','艹|planta','A cerca viva 艹 em volta 潘 do território do daimyō.','藩|han|domínio;藩士|hanshi|samurai do domínio'],
['朕','Nós (imperial)','chin',10,'チン|chin','','月|corpo','O pronome que só o imperador usa.','朕|chin|Nós'],
['璽','selo imperial','ji',19,'ジ|ji','','玉|jade','O selo 爾 de jade 玉 que autentica o decreto.','国璽|kokuji|selo nacional;御璽|gyoji|selo imperial'],
['勅','decreto imperial','choku',9,'チョク|choku','','力|força','A força 力 da ordem 束 que vem do trono.','勅令|chokurei|decreto;勅使|chokushi|emissário imperial'],
['詔','édito imperial','shō',12,'ショウ|shō','みことのり|mikotonori','言|palavra','A palavra 言 que convoca 召 a nação inteira.','詔書|shōsho|édito;詔|mikotonori|proclamação'],
['賓','convidado de honra','hin',15,'ヒン|hin','','宀|telhado','O visitante 宀 que traz presente 貝. Trata-se bem.','来賓|raihin|convidado;国賓|kokuhin|hóspede de estado'],
['宰','governar/chefe','sai',10,'サイ|sai','','宀|telhado','Quem manda 辛 debaixo do teto 宀 da casa toda.','宰相|saishō|primeiro-ministro;主宰|shusai|presidir'],
['帥','comandante','sui',9,'スイ|sui','','巾|pano','O estandarte 巾 que a tropa segue.','元帥|gensui|marechal;統帥|tōsui|comando supremo'],
['坊','monge/menino','bō',7,'ボウ|bō','','土|terra','O bairro 方 de terra 土 do templo. E o menino que mora nele.','坊さん|bōsan|monge;赤ん坊|akanbō|bebê'],
['翁','ancião','ō',10,'オウ|ō','おきな|okina','羽|asas','As penas 羽 brancas do pescoço 公. A barba do velho.','老翁|rōō|ancião;翁|okina|senhor idoso'],
['嬢','senhorita','jō',16,'ジョウ|jō','','女|mulher','A moça 女 da casa abastada 襄.','お嬢さん|ojōsan|senhorita;令嬢|reijō|filha de família'],
['婿','genro','muko',12,'セイ|sei','むこ|muko','女|mulher','O homem que entra na família pela mulher 女.','婿|muko|genro;花婿|hanamuko|noivo'],
['姪','sobrinha','mei',9,'テツ|tetsu','めい|mei','女|mulher','A menina 女 que chega 至 pelo irmão.','姪|mei|sobrinha'],
['甥','sobrinho','ō',12,'セイ|sei','おい|oi','生|vida','O que nasceu 生 do outro homem 男 da família.','甥|oi|sobrinho'],
['戚','parente','seki',11,'セキ|seki','','戈|lança','Os que pegam a lança 戈 pelo mesmo clã.','親戚|shinseki|parentes;縁戚|enseki|parentesco'],
['寡','viúva/escasso','ka',14,'カ|ka','','宀|telhado','Debaixo do teto 宀 sobrou pouca gente.','寡黙|kamoku|taciturno;寡婦|kafu|viúva'],
['娠','gravidez','shin',10,'シン|shin','','女|mulher','A mulher 女 no momento 辰 de gerar.','妊娠|ninshin|gravidez'],
['妊','conceber','nin',7,'ニン|nin','','女|mulher','A mulher 女 que carrega 壬 outra vida.','妊婦|ninpu|gestante;妊娠|ninshin|gravidez'],
['胎','útero/feto','tai',9,'タイ|tai','','月|corpo','O corpo 月 que é a base 台 de outra vida.','胎児|taiji|feto;母胎|botai|ventre materno'],
['逝','falecer','yuku',10,'セイ|sei','ゆ(く)|yu(ku)','辶|caminhar','Andar 辶 e cortar 折 o caminho de vez.','逝去|seikyo|falecimento;急逝|kyūsei|morte súbita'],
['弔','condolências','tomurau',4,'チョウ|chō','とむら(う)|tomura(u)','弓|arco','O arco 弓 com a corda frouxa. Luto.','弔問|chōmon|visita de pêsames;弔う|tomurau|velar'],
['棺','caixão','kan',12,'カン|kan','ひつぎ|hitsugi','木|árvore','A caixa de madeira 木 do funcionário 官 morto.','棺|hitsugi|caixão;石棺|sekkan|sarcófago'],
['墳','túmulo/montículo','fun',15,'フン|fun','','土|terra','A terra 土 amontoada 賁 sobre a sepultura.','古墳|kofun|túmulo antigo;墳墓|funbo|sepulcro'],
['塚','montículo/túmulo','tsuka',12,'チョウ|chō','つか|tsuka','土|terra','A terra 土 empilhada 冢 marcando o lugar.','塚|tsuka|montículo;貝塚|kaizuka|sambaqui'],
['廟','—','',1,'','','一|linha','',''],
['祠','—','',1,'','','一|linha','',''],
['斎','abstinência/purificação','sai',11,'サイ|sai','','斉|igual','O jejum antes do rito. Purificar-se.','書斎|shosai|escritório;斎場|saijō|sala funerária'],
['巫','—','',1,'','','一|linha','',''],
['呪','maldição/encanto','noroi',8,'ジュ|ju','のろ(う)|noro(u)','口|boca','Duas bocas 口 recitando a fórmula.','呪う|norou|amaldiçoar;呪文|jumon|encantamento'],
['祟','—','',1,'','','一|linha','',''],
['禍','desgraça','wazawai',13,'カ|ka','わざわ(い)|wazawa(i)','礻|altar','O que o altar 礻 não conseguiu evitar.','災禍|saika|calamidade;禍根|kakon|raiz do mal'],
['虞','receio/perigo','osore',13,'グ|gu','おそれ|osore','虍|tigre','O tigre 虍 espreitando. O medo do que pode vir.','虞|osore|risco;憂虞|yūgu|apreensão'],
['憚','—','',1,'','','一|linha','',''],
['苛','severo/irritante','ka',8,'カ|ka','','艹|planta','A erva 艹 que arde. Tratamento que machuca.','苛立つ|iradatsu|irritar-se;過酷|kakoku|severo'],
['凄','impressionante/terrível','sugoi',10,'セイ|sei','すご(い)|sugo(i)','冫|gelo','O gelo 冫 que dá arrepio. Assusta e impressiona.','凄い|sugoi|incrível;凄惨|seisan|horrendo'],
['艱','—','',1,'','','一|linha','',''],
['痩','emagrecer','yaseru',12,'ソウ|sō','や(せる)|ya(seru)','疒|doença','A doença 疒 que consome a carne.','痩せる|yaseru|emagrecer;痩身|sōshin|corpo magro'],
['疫','epidemia','eki',9,'エキ|eki','','疒|doença','A doença 疒 que se espalha como tropa 殳.','疫病|ekibyō|peste;免疫|men-eki|imunidade'],
['痺','—','',1,'','','一|linha','',''],
['盲','cego','mō',8,'モウ|mō','','目|olho','O olho 目 que perdeu 亡 a visão.','盲目|mōmoku|cegueira;盲点|mōten|ponto cego'],
['奔','disparar/fugir','hon',8,'ホン|hon','','大|grande','A pessoa 大 correndo com os três pés no chão.','奔走|honsō|correria;出奔|shuppon|fuga'],
['駆','galopar','kakeru',14,'ク|ku','か(ける)|ka(keru)','馬|cavalo','O cavalo 馬 solto na área 区.','駆ける|kakeru|correr;先駆|senku|pioneiro'],
['騒','barulho/tumulto','sawagu',18,'ソウ|sō','さわ(ぐ)|sawa(gu)','馬|cavalo','O cavalo 馬 agitado com a pulga 蚤. Não para quieto.','騒音|sōon|ruído;騒ぐ|sawagu|fazer alarde'],
['嘩','—','',1,'','','一|linha','',''],
['宴','—','',1,'','','一|linha','',''],
['酌','servir bebida','shaku',10,'シャク|shaku','く(む)|ku(mu)','酉|jarro','A concha 勺 tirando do jarro 酉 de saquê.','晩酌|banshaku|drinque da noite;酌む|kumu|servir'],
['醸','fermentar','kamosu',20,'ジョウ|jō','かも(す)|kamo(su)','酉|jarro','O jarro 酉 guardado até o tempo 襄 agir.','醸造|jōzō|fermentação;醸す|kamosu|provocar'],
['麹','—','',1,'','','一|linha','',''],
['糧','provisão/mantimento','ryō',18,'リョウ|ryō','かて|kate','米|arroz','O arroz 米 medido 量 pra viagem.','食糧|shokuryō|mantimento;糧|kate|sustento'],
['飢','fome','ueru',10,'キ|ki','う(える)|u(eru)','飠|comida','A comida 飠 que virou só a mesa 几 vazia.','飢餓|kiga|fome;飢える|ueru|passar fome'],
['餓','inanição','ga',15,'ガ|ga','','飠|comida','A comida 飠 que não chega 我 nunca.','餓死|gashi|morte por fome;飢餓|kiga|inanição'],
['宵','anoitecer','yoi',10,'ショウ|shō','よい|yoi','宀|telhado','A casa 宀 pequena 肖 no escuro. Começo da noite.','宵|yoi|início da noite;徹宵|tesshō|virar a noite'],
['暁','madrugada','akatsuki',12,'ギョウ|gyō','あかつき|akatsuki','日|sol','O sol 日 alto 尭 despontando. A hora que clareia.','暁|akatsuki|alvorada;通暁|tsūgyō|domínio profundo'],
['旦','alvorada','tan',5,'タン|tan','','日|sol','O sol 日 saindo da linha do horizonte 一.','元旦|gantan|primeiro dia do ano;一旦|ittan|uma vez'],
['曙','—','',1,'','','一|linha','',''],
['朽','apodrecer','kuchiru',6,'キュウ|kyū','く(ちる)|ku(chiru)','木|árvore','A árvore 木 que já não se sustenta.','不朽|fukyū|imperecível;朽ちる|kuchiru|deteriorar'],
['腐','apodrecer/tofu','kusaru',14,'フ|fu','くさ(る)|kusa(ru)','肉|carne','A carne 肉 esquecida no depósito 府.','腐る|kusaru|estragar;豆腐|tōfu|tofu'],
['錆','—','',1,'','','一|linha','',''],
['耗','desgastar','mō',10,'モウ|mō','','耒|arado','O arado 耒 que se gasta de tanto uso.','消耗|shōmō|desgaste;摩耗|mamō|atrito'],
['壇','plataforma/altar','dan',16,'ダン|dan','','土|terra','A terra 土 erguida em degrau 亶 pro orador.','演壇|endan|tribuna;文壇|bundan|meio literário'],
['卿','—','',1,'','','一|linha','',''],
['庵','—','',1,'','','一|linha','',''],
['邸','mansão/residência','tei',8,'テイ|tei','やしき|yashiki','阝|vila','A casa nobre 氐 do bairro 阝.','邸宅|teitaku|mansão;官邸|kantei|residência oficial'],
['荘','vila/solene','sō',9,'ソウ|sō','','艹|planta','A propriedade 壮 cercada de verde 艹.','山荘|sansō|chalé;荘厳|sōgon|solene'],
['寓','—','',1,'','','一|linha','',''],
['遁','—','',1,'','','一|linha','',''],
['諱','—','',1,'','','一|linha','',''],
['冀','—','',1,'','','一|linha','',''],
['乞','implorar','kou',3,'コツ|kotsu','こ(う)|ko(u)','乙|gancho','A pessoa curvada pedindo.','物乞い|monogoi|mendigo;命乞い|inochigoi|implorar pela vida'],
['贖','—','',1,'','','一|linha','',''],
['恕','—','',1,'','','一|linha','',''],
['咎','—','',1,'','','一|linha','',''],
['嘲','zombar','azakeru',15,'チョウ|chō','あざけ(る)|azake(ru)','口|boca','A boca 口 rindo de manhã 朝 da desgraça alheia.','嘲笑|chōshō|escárnio;嘲る|azakeru|zombar'],
['罵','xingar','nonoshiru',15,'バ|ba','ののし(る)|nonoshi(ru)','罒|rede','A rede 罒 de palavras jogada como cavalo 馬 desembestado.','罵倒|batō|insulto;罵る|nonoshiru|xingar'],
['蔑','desprezar','sagesumu',14,'ベツ|betsu','さげす(む)|sagesu(mu)','艹|planta','Olhar por cima, como quem pisa na grama 艹.','軽蔑|keibetsu|desprezo;侮蔑|bubetsu|desdém'],
['嫉','ciúme','shitto',13,'シツ|shitsu','','女|mulher','A doença 疾 que corrói por dentro.','嫉妬|shitto|ciúme;嫉む|sonemu|invejar'],
['妬','inveja','netamu',8,'ト|to','ねた(む)|neta(mu)','女|mulher','O coração pesado como pedra 石.','嫉妬|shitto|ciúme;妬む|netamu|ter inveja'],
['憐','compadecer','awaremu',16,'レン|ren','あわ(れむ)|aware(mu)','忄|coração','O coração 忄 que se apieda do vizinho 粦.','憐憫|renbin|compaixão;可憐|karen|encantador'],
['慟','—','',1,'','','一|linha','',''],
['嗚','—','',1,'','','一|linha','',''],
['囁','—','',1,'','','一|linha','',''],
['呟','—','',1,'','','一|linha','',''],
['喋','—','',1,'','','一|linha','',''],
['轟','—','',1,'','','一|linha','',''],
['喚','clamar/convocar','kan',12,'カン|kan','わめ(く)|wame(ku)','口|boca','A boca 口 que troca 奐 gritos com o outro lado.','召喚|shōkan|intimação;喚く|wameku|berrar'],
['吠','—','',1,'','','一|linha','',''],
['咆','—','',1,'','','一|linha','',''],
/* ── Mais 72 kanji N1 com fichas completas ── */
['隙','fresta/brecha','suki',13,'ゲキ|geki','すき|suki','日|sol','O sol 日 espiando por trás da fresta na parede do abrigo. Uma brecha ou folga no tempo.','隙間|sukima|fresta;隙|suki|brecha, folga'],
['怨','rancor/ódio','en',9,'オン|on;エン|en','うら(む)|urama(u)','心|coração','Uma pessoa curvada debaixo do teto com o coração 心 ferido. Ódio ou mágoa guardada.','怨恨|enkon|rancor;怨霊|onryō|espírito vingativo'],
['慄','tremer de medo','ritsu',13,'リツ|ritsu','ふる(える)|furu(eru)','忄|coração','O coração 忄 que gela de pavor como castanhas na árvore. Tremer de medo.','戦慄|senritsu|frio na espinha;慄く|onoroku|tremer de susto'],
['葛','conflito/cipó','katsu',12,'カツ|katsu','つづら|tsuzura','艹|planta','A planta 艹 cujos ramos se enroscam e causam embaraço. Conflito mental ou cipó.','葛藤|kattō|conflito interno;葛|kuzu|araruta'],
['藤','glicínia','fuji',18,'トウ|tō','ふじ|fuji','艹|planta','A planta 艹 de flores roxas que caem em cachos elegantes. Sobrenome comum no Japão.','藤|fuji|glicínia;藤色|fujiiro|cor lilás'],
['畏','reverenciar/temer','osore',9,'イ|i','おそ(れる)|oso(reru)','田|campo','Um olho gigante no campo que causa respeito e temor sagrado. Reverência profunda.','畏敬|ikei|temor respeitoso;畏まりました|kashikomarimashita|entendido (formal)'],
['那','qual/muito','na',7,'ナ|na;ダ|da','','⻏|vila','A bandeira da vila ⻏ tremulando no horizonte. Usado em nomes próprios e termos budistas.','旦那|danna|marido, patrão;那覇|naha|Naha (Okinawa)'],
['頃','tempo/época','koro',11,'ケイ|kei','ころ|koro','頁|cabeça','A cabeça 頁 inclinada colhendo colheres de tempo. Uma época ou momento aproximado.','頃|koro|época, momento;近頃|chikagoro|recentemente'],
['奈','o que/Nara','na',8,'ナ|na;ナイ|nai','','大|grande','Uma pessoa grande 大 sob o altar sagrado. Usado no nome da antiga capital Nara.','奈良|nara|Nara;奈落|naraku|abismo, fosso de teatro'],
['唄','canto (tradicional)','uta',10,'バイ|bai','uta|uta','口|boca','A boca 口 que entoa a canção do templo. Canto folclórico japonês.','唄|uta|canção popular;子守唄|komoriuta|canção de ninar'],
['馨','fragrância/aroma','kaori',20,'ケイ|kei','かお(る)|kao(ru)','香|aroma','O som e o aroma 香 subindo juntos. Um perfume refinado que se espalha.','馨しい|kashigashii|cheiroso;馨る|kaoru|perfumar'],
['嗅','farejar','kagu',13,'キュウ|kyū','か(ぐ)|ka(gu)','口|boca','A boca 口 que se aproxima do objeto para sentir o cheiro. Farejar.','嗅ぐ|kagu|cheirar;嗅覚|kyūkaku|olfato'],
['匂','cheiro/aroma','nioi',4,'','にお(う)|nio(u)','勹|embrulho','O ar que carrega o odor de uma colher de comida. Cheiro bom.','匂い|nioi|cheiro;匂う|niou|cheirar bem'],
['眸','olhar/pupila','hitomi',11,'ボウ|bō','','目|olho','O olho 目 que brilha calmo como a água no vale. Um olhar expressivo.','眸|hitomi|pupila;明眸|meibō|olhos brilhantes'],
['睫','cílios','matsuge',13,'ショウ|shō','まつげ|matsuge','目|olho','A franja de pelos que protege a pélvis do olho 目.','睫毛|matsuge|cílios'],
['瞼','pálpebra','mabuta',18,'ケン|ken','まぶた|mabuta','目|olho','O teto que se fecha sobre o olho 目 para dormir.','瞼|mabuta|pálpebra'],
['肘','cotovelo','hijiri',7,'チュウ|chū','ひじ|hiji','月|corpo','A parte do corpo 月 que se dobra como uma polegada 寸.','肘|hiji|cotovelo;肘掛け|hijikake|apoio de braço'],
['膝','joelho','hiza',15,'シツ|shitsu','ひざ|hiza','月|corpo','A articulação do corpo 月 que dobra quando se senta na palha.','膝|hiza|joelho;膝掛け|hizakake|manta de colo'],
['踵','calcanhar','kakato',9,'ショウ|shō','かかと|kakato','足|pé','A parte de trás do pé 足 que bate pesada no chão.','踵|kakato|calcanhar'],
['脊','coluna/dorso','se',10,'セキ|seki','','月|corpo','As vértebras alinhadas no dorso do corpo 月.','脊椎|sekitsui|espinha dorsal;脊髄|sekizui|medula espinhal'],
['腎','rim','jin',13,'ジン|jin','','月|corpo','O órgão do corpo 月 que filtra as águas como um ministro 臣.','腎臓|jinzō|rim;腎炎|jinen|nefrite'],
['膵','pâncreas','sui',12,'スイ|sui','','月|corpo','O órgão do corpo 月 que se concentra no centro do ventre.','pâncreas|suizō|pâncreas;膵炎|suien|pancreatite'],
['胆','vesícula/coragem','kimo',9,'タン|tan','きも|kimo','月|corpo','O órgão do corpo 月 que guarda o líquido amargo. Símbolo de coragem.','胆石|tanseki|pedra na vesícula;大胆|daitan|audaz'],
['腔','cavidade','kō',12,'コウ|kō','','月|corpo','O espaço vazio como uma caverna dentro do corpo 月.','口腔|kōkō|cavidade bucal;腹腔|fukukō|cavidade abdominal'],
['腫','inchar/tumor','腫れ',13,'ショウ|shō','は(れる)|ha(reru)','月|corpo','A carne do corpo 月 que aumenta e fica pesada 重.','腫れる|hareru|inchar;腫瘍|shuyō|tumor'],
['瘡','ferida/pústula','kasa',15,'ソウ|sō','かさ|kasa','疒|doença','A doença 疒 de pele que quebra o contorno do corpo.','瘡蓋|kasabuta|casca de ferida;天瘡|tenso|varíola'],
['痒','coceira','kayui',9,'ヨウ|yō','かゆ(い)|kayu(i)','疒|doença','A sensação incômoda de doença 疒 que dá vontade de coçar.','痒い|kayui|com coceira;痒み|kayumi|coceira'],
['昏','crepúsculo/escurecer','kure',8,'コン|kon','く(れる)|ku(reru)','日|sol','O sol 日 que se deita sob o horizonte. O escurecer da tarde.','黄昏|tasogare|crepúsculo;昏睡|konsui|coma'],
['冥','escuridão/submundo','mei',10,'メイ|mei;ミョウ|myō','くら(い)|kura(i)','冖|cobertura','O sol 日 totalmente coberto 冖 na escuridão. O mundo dos mortos.','冥福|meifuku|felicidade no além;冥王星|meiōsei|Plutão'],
['魄','espectro/alma','haku',15,'ハク|haku','','鬼|espírito','A alma branca 白 do falecido que vira espírito 鬼.','魂魄|konpaku|alma e espírito;落魄|raku haku|ruína'],
['廟','santuário/mausoléu','byō',15,'ビョウ|byō','','广|telheiro','O telheiro 广 nobre onde se guardam as cinzas do ancestral.','宗廟|sūbyō|mausoléu ancestral;廟堂|byōdō|templo'],
['祠','pequeno santuário','hokora',10,'シ|shi','ほこら|hokora','礻|altar','O pequeno altar 礻 na beira da estrada.','祠|hokora|pequeno santuário de rua'],
['巫','sacerdotisa/miko','miko',7,'フ|fu','みこ|miko','工|trabalho','Duas pessoas 人 que trabalham 工 entre o céu e a terra. A miko.','巫女|miko|sacerdotisa xintoísta;巫術|fujutsu|feitiçaria'],
['祀','cultuar/venerar','matsuru',8,'シ|shi','まつ(る)|matsu(ru)','礻|altar','Fazer oferendas no altar 礻 no momento correto.','祀る|matsuru|cultuar;祭祀|saishi|ritos sagrados'],
['贄','oferenda/sacrifício','nie',18,'シ|shi','にえ|nie','貝|concha','O presente valioso 貝 trazido ao altar imperial.','生贄|nie|sacrifício animal;贄|nie|oferenda'],
['祟','maldição/assombrar','tataru',10,'スイ|sui','tata(ru)|tata(ru)','示|altar','O altar 示 sob o peso da montanha 出. O castigo dos deuses.','祟る|tataru|amaldiçoar;祟り|tatari|maldição divina'],
['憚','hesitar/temer','habakareru',15,'タン|tan','はばか(る)|habaka(ru)','忄|coração','O coração 忄 que se retrai diante da regra 弾.','忌憚|kitan|hesitação;憚る|habakaru|temer a opinião'],
['憫','compaixão/piedade','bin',15,'ビン|bin','あわ(れむ)|awa(remu)','忄|coração','O coração 忄 que chora a perda do vizinho 門.','憐憫|renbin|piedade;憐れむ|awaremu|compadecer-se'],
['惻','compadecer-se','soku',12,'ソク|soku','','忄|coração','O coração 忄 que sente a dor do outro como uma faca 則.','惻隠|sokuin|compaixão genuína'],
['慟','chorar amargamente','dō',13,'ドウ|dō','','忄|coração','O coração 忄 sacudido pelo abalo pesado. Um choro profundo.','慟哭|dōkoku|lamento choroso'],
['嗚','soluçar/gemer','o',13,'オ|o','','口|boca','A boca 口 que solta o ar do pesar.','嗚咽|oetsu|soluço, choro contido'],
['囁','sussurrar','sayayaku',21,'ショウ|shō','ささや(く)|sasaya(ku)','口|boca','Três orelhas 耳 próximas à boca 口. Falar baixinho no ouvido.','囁く|sasayaku|sussurrar'],
['呟','resmungar/tuitar','tsuyayaku',8,'ゲン|gen','つぶや(く)|tsubuya(ku)','口|boca','A boca 口 que solta uma palavra misteriosa 玄 de leve.','呟く|tsubuyaku|resmungar, tuitar;呟き|tsubuyaki|tuíte'],
['喋','tagarelar','shaberu',12,'チョウ|chō','しゃべ(る)|shabe(ru)','口|boca','A boca 口 que não para de se mover sobre a mesa.','喋る|shaberu|conversar, tagarelar'],
['轟','estrondo/trovão','todoroku',21,'ゴウ|gō','todoroki|todoroki','車|carro','Três carros 車 correndo juntos. O barulho ensurdecedor.','轟く|todoroku|ressoar;轟音|gōon|ruído ensurdecedor'],
['吠','latir/uivar','hoe',7,'ハイ|hai','ほ(える)|ho(eru)','口|boca','A boca 口 do cachorro 犬 aberta uivando.','吠える|hoeru|latir, uivar'],
['咆','rugir','hō',8,'ホウ|hō','','口|boca','A boca 口 do bicho correndo no campo. O rugido.','咆哮|hōkō|rugido'],
['庵','cabana/ermida','an',11,'アン|an','いおり|iori','广|telheiro','O telheiro 广 do eremita que vive na cabana de palha.','庵|iori|cabana de palha;庵室|anshitsu|cela de monge'],
['寓','alegoria/morada','gū',12,'グウ|gū','','宀|telhado','A morada 宀 onde se acolhe a visita. Uma história figurada.','寓話|gūwa|fábula;寓居|gūkyo|morada temporária'],
['遁','escapar/evitar','ton',12,'トン|ton','に(げる)|ni(geru)','辶|caminhar','Andar 辶 de costas para a barreira. Fugir do perigo.','遁走|tonsō|fuga;隠遁|inton|retirada do mundo'],
['諱','nome póstumo/evitar','i',16,'イ|i','い(む)|i(mu)','言|palavra','A palavra 言 que se cala por respeito ao falecido.','避諱|hiki|evitar usar certo nome;諱|imina|nome verdadeiro oculto'],
['冀','desejar/ansiar','ki',16,'キ|ki','','北|norte','O coração que se volta pro norte, ansiando por ajuda.','希冀|kiki|desejo ardente'],
['髫','—','',1,'','','一|linha','',''],
['髷','—','',1,'','','一|linha','',''],
['鬘','—','',1,'','','一|linha','',''],
['鬢','—','',1,'','','一|linha','',''],
['鬣','—','',1,'','','一|linha','',''],
['髁','—','',1,'','','一|linha','',''],
['髀','—','',1,'','','一|linha','',''],
['贖','resgatar/expiar','shoku',22,'ショク|shoku','あがな(う)|agana(u)','貝|concha','Pagar a dívida com conchas 貝 de valor elevado.','贖う|aganau|expiar;贖罪|shokuzai|redenção'],
['恕','perdoar/clemência','jo',10,'ジョ|jo','','心|coração','O coração 心 que aceita a mulher 如 como ela é.','寛恕|kanjo|perdão;容恕|yōjo|tolerância'],
['咎','culpa/repreender','togame',8,'キュウ|kyū','とが(める)|toga(meru)','口|boca','A boca 口 que aponta a falta do outro. Culpar.','咎める|togameru|repreender;咎|togame|culpa'],
['悼','lamentar (morte)','itomu',11,'トウ|tō','いた(む)|ita(mu)','忄|coração','O coração 忄 que chora o falecimento no dia 卓 marcado.','追悼|tsuitō|homenagem póstuma;悼む|itamu|lamentar a morte'],
['慟','—','',1,'','','一|linha','',''],
['嗚','—','',1,'','','一|linha','',''],
['囁','—','',1,'','','一|linha','',''],
['呟','—','',1,'','','一|linha','',''],
['喋','—','',1,'','','一|linha','',''],
['轟','—','',1,'','','一|linha','',''],
['喚','—','',1,'','','一|linha','',''],
['吠','—','',1,'','','一|linha','',''],
['咆','—','',1,'','','一|linha','',''],
['岐','bifurcação','ki',7,'キ|ki','','山|montanha','A montanha 山 que se divide em dois caminhos 支.','岐路|kiro|encruzilhada;岐阜|gifu|Gifu'],
['岬','cabo/promontório','misaki',8,'コウ|kō','みさき|misaki','山|montanha','O ponto da montanha 山 que avança como concha 甲 no mar.','岬|misaki|cabo'],
['渓','vale/ribeirão','kei',11,'ケイ|kei','たに|tani','山|montanha','A água que corre mansa no vale da montanha 山.','渓谷|keikoku|desfiladeiro;渓流|keiryū|ribeirão'],
['瀬','correnteza/raso','se',19,'ライ|rai','せ|se','氵|água','A água 氵 que corre rápida e rasa sobre as pedras.','瀬戸内海|setonaikai|Mar Interior de Seto;立つ瀬|tatsuse|posição'],
['淵','abismo/profundeza','fuchi',12,'エン|en','ふち|fuchi','氵|água','O ponto mais fundo do rio 氵 onde a água faz redemoinho.','深淵|shinen|abismo;淵|fuchi|profundeza'],
['汐','maré da tarde','shio',6,'セキ|seki','しお|shio','氵|água','A maré de água 氵 que sobe no entardecer 夕.','汐|shio|maré da tarde;汐風|shiokaze|brisa marítima'],
['礁','recife/rochedo','shō',17,'ショウ|shō','','石|pedra','A pedra 石 queimada e escondida debaixo da onda.','暗礁|anshō|recife oculto;珊瑚礁|sangoshō|recife de coral'],
['艇','pequeno barco','tei',13,'テイ|tei','','舟|barco','O barco 舟 rápido e estreito de patrulha.','ボート|tei|barco;艦艇|kantei|navios militares'],
['帆','vela (barco)','ho',6,'ハン|han','ほ|hata','巾|pano','O pano 巾 esticado no mastro pra pegar o vento.','帆|ho|vela;帆船|hansen|veleiro'],
['錨','âncora','ikari',16,'ビョウ|byō','いかり|ikari','金|metal','O metal 金 pesado que segura o barco como um gato.','錨|ikari|âncora;錨地|byōchi|ancoradouro'],
['橘','tangerina/citrus','kitsu',16,'キツ|kitsu','たちばな|tachibana','木|árvore','A árvore 木 de frutinhas 矞 alaranjadas típica do Japão. Símbolo de longevidade.','橘|tachibana|tangerina;柑橘|kankitsu|frutas cítricas'],
['柿','caqui','kaki',9,'シ|shi','かき|kaki','木|árvore','A árvore 木 de frutas alaranjadas 市 que a gente encontra no mercado.','柿|kaki|caqui;干し柿|hoshigaki|caqui seco'],
['梨','pera japonesa','nashi',11,'リ|ri','なし|nashi','木|árvore','A árvore 木 que dá a pera crocante e suculenta 利.','梨|nashi|pera japonesa;梨園|rien|mundo do teatro kabuki'],
['桃','pêssego','momo',10,'トウ|tō','もも|momo','木|árvore','A árvore 木 de frutas rosadas que anuncia 兆 a primavera.','桃|momo|pêssego;桃色|momoiro|cor-de-rosa'],
['栗','castanha','kuri',10,'リツ|ritsu','くり|kuri','木|árvore','A árvore 木 cujos frutos vêm dentro de casinhas espinhosas 覀.','栗|kuri|castanha;栗色|kuriiro|castanho'],
/* ── Mais 68 kanji N1 com fichas completas ── */
['傲','arrogante/altivo','gō',13,'ゴウ|gō','おご(る)|ogo(ru)','亻|pessoa','A pessoa 亻 que anda com o nariz erguido 敖. Se acha superior aos outros.','傲慢|gōman|arrogância;傲然|gōzen|altivo'],
['蔑','desprezar','sagesumu',14,'ベツ|betsu','さげす(む)|sagesu(mu)','艹|planta','Olhar de cima como quem pisa na grama 艹. Não considerar o outro.','軽蔑|keibetsu|desprezo;侮蔑|bubetsu|desdém'],
['侮','desprezar/subestimar','anadoru',8,'ブ|bu','あなど(る)|anado(ru)','亻|pessoa','A pessoa 亻 que trata cada 毎 um como inferior. Menosprezar.','侮辱|bujoku|insulto;侮る|anadoru|subestimar'],
['謙','humildade','ken',17,'ケン|ken','','言|palavra','A palavra 言 que se junta 兼 à do outro em vez de se impor.','謙虚|kenkyo|humilde;謙遜|kenson|modéstia'],
['壁','parede/barreira','kabe',16,'ヘキ|heki','かべ|kabe','土|terra','A terra 土 erguida como muro. Também barreira do coração.','壁|kabe|parede;障壁|shōheki|barreira'],
['隆','próspero/elevado','ryū',11,'リュウ|ryū','','阝|colina','A colina 阝 que cresce 生 alta. Estar no auge da força.','隆盛|ryūsei|prosperidade;隆起|ryūki|elevação'],
['凡','comum/vulgar','bon',3,'ボン|bon;ハン|han','','几|mesa','A vela simples de todo barco. O que é comum e cotidiano.','平凡|heibon|comum;非凡|hibon|extraordinário'],
['卑','vil/baixo','hi',9,'ヒ|hi','いや(しい)|iya(shii)','十|dez','Alguém curvado que segura o pote baixo. Comportamento indigno.','卑屈|hikutsu|servil;卑怯|hikyō|covarde'],
['劣','inferior/pior','retsu',6,'レツ|retsu','おと(る)|oto(ru)','力|força','Pouca 少 força 力. Fica sempre atrás dos outros.','劣る|otoru|ser inferior;劣悪|retsuaku|péssimo'],
['優','gentil/superior','yasashii',17,'ユウ|yū','やさ(しい)|yasa(shii)','亻|pessoa','A pessoa 亻 que se preocupa 憂 com os outros. Gentil e excelente.','優しい|yasashii|gentil;優勝|yūshō|vitória'],
['粋','elegante/puro','iki',10,'スイ|sui','いき|iki','米|arroz','O arroz 米 escolhido 卒 grão a grão. Refinamento discreto.','純粋|junsui|puro;粋|iki|estiloso'],
['雅','elegante/refinado','miyabi',13,'ガ|ga','','隹|pássaro','O pássaro 隹 de porte nobre e refinado 牙. Beleza clássica.','優雅|yūga|elegância;風雅|fūga|refinamento'],
['艶','lustroso/sedutor','tsuya',19,'エン|en','つや|tsuya','色|cor','A cor 色 com brilho farto 豊. Beleza que atrai e encanta.','妖艶|yōen|sedução;艶やか|adeyaka|reluzente'],
['凄','impressionante/terrível','sugoi',10,'セイ|sei','すご(い)|sugo(i)','冫|gelo','O gelo 冫 que dá arrepio de espanto. Pode ser bom ou aterrador.','凄い|sugoi|incrível;凄惨|seisan|horripilante'],
['艱','dificuldade/aflição','kan',17,'カン|kan','','艮|parar','A parada 艮 que não deixa avançar. Provação dura.','艱難|kannan|adversidade;艱苦|kanku|aflição'],
['癒','curar/aliviar','iyasu',18,'ユ|yu','いや(す)|iya(su)','疒|doença','A doença 疒 que vai embora 愈 aos poucos. Conforto para a alma.','治癒|chiyu|cura;癒す|iyasu|confortar'],
['蘇','ressuscitar/reviver','yomigaeru',19,'ソ|so','よみがえ(る)|yomigae(ru)','艹|planta','A planta 艹 que revive depois do inverno. Voltar à vida.','蘇る|yomigaeru|renascer;復蘇|fukuso|ressurreição'],
['甦','ressurgir','yomigaeru',12,'ソ|so','よみがえ(る)|yomigae(ru)','生|vida','A vida 生 que volta 更 depois de se ter perdido.','甦る|yomigaeru|reviver'],
['潔','asseado/íntegro','isagiyoi',15,'ケツ|ketsu','いさぎよ(い)|isagiyo(i)','氵|água','A água 氵 que corta 契 toda sujeira. Puro por dentro e por fora.','清潔|seiketsu|higiênico;潔白|keppaku|inocência'],
['粛','solene/austero','shuku',11,'シュク|shuku','','聿|pincel','O pincel 聿 traçando em silêncio absoluto. Grave e sério.','厳粛|genshuku|solenidade;自粛|jishuku|autocontenção'],
['慎','prudência/comedimento','tsutsushimu',13,'シン|shin','つつし(む)|tsutsushi(mu)','忄|coração','O coração 忄 sincero 真 que se contém antes de agir.','慎重|shinchō|cauteloso;慎む|tsutsushimu|moderar-se'],
['謹','respeitosamente','tsutsushimu',17,'キン|kin','つつし(む)|tsutsushi(mu)','言|palavra','A palavra 言 dita com todo o cuidado 堇. Trato formal.','謹賀新年|kingashinnen|feliz ano-novo;謹んで|tsutsushinde|respeitosamente'],
['憤','indignar-se','ikidōru',15,'フン|fun','いきどお(る)|ikidō(ru)','忄|coração','O coração 忄 que transborda 賁 de indignação justa.','憤慨|fungai|indignação;義憤|gifun|revolta moral'],
['慨','indignação/lamento','gai',13,'ガイ|gai','','忄|coração','O coração 忄 diante do que já 既 passou e não volta. Emoção profunda.','憤慨|fungai|indignação;感慨|kangai|comoção'],
['憎','odiar','nikumu',14,'ゾウ|zō','にく(む)|niku(mu)','忄|coração','O coração 忄 que acumula 曽 rancor camada por camada.','憎む|nikumu|odiar;愛憎|aizō|amor e ódio'],
['憐','compadecer','awaremu',16,'レン|ren','あわ(れむ)|aware(mu)','忄|coração','O coração 忄 que se apieda do vizinho 粦. Piedade profunda.','憐憫|renbin|compaixão;可憐|karen|encantador'],
['羨','invejar','urayamu',13,'セン|sen','うらや(む)|uraya(mu)','羊|ovelha','A ovelha 羊 gorda do vizinho e a água na boca. Inveja daquilo.','羨望|senbō|inveja;羨ましい|urayamashii|invejável'],
['嫉','ciúme/inveja','shitto',13,'シツ|shitsu','','女|mulher','A doença 疾 que corrói por dentro. Ciúme silencioso.','嫉妬|shitto|ciúme;嫉む|sonemu|invejar'],
['妬','inveja/ciúme','netamu',8,'ト|to','ねた(む)|neta(mu)','女|mulher','O coração pesado como pedra 石 diante da felicidade alheia.','嫉妬|shitto|ciúme;妬む|netamu|ter inveja'],
['嗚','soluçar/gemer','o',13,'オ|o','','口|boca','A boca 口 que solta o ar do pesar. Choro entrecortado.','嗚咽|oetsu|soluço, choro contido'],
['慟','chorar amargamente','dō',14,'ドウ|dō','','忄|coração','O coração 忄 sacudido pelo abalo pesado. Um choro que dói.','慟哭|dōkoku|lamento profundo'],
['泣','chorar','naku',8,'キュウ|kyū','な(く)|na(ku)','氵|água','A água 氵 de quem está de pé 立 sem conseguir falar. Lágrimas.','泣く|naku|chorar;号泣|gōkyū|choro alto'],
['喚','clamar/convocar','kan',12,'カン|kan','わめ(く)|wame(ku)','口|boca','A boca 口 que troca 奐 gritos com o outro lado. Chamar aos berros.','召喚|shōkan|intimação;喚く|wameku|berrar'],
['吠','latir/uivar','hoe',7,'ハイ|hai','ほ(える)|ho(eru)','口|boca','A boca 口 do cachorro 犬 aberta uivando. Grito bruto.','吠える|hoeru|latir, uivar'],
['朴','simples/singelo','boku',6,'ボク|boku','','木|árvore','A madeira 木 crua, sem verniz. Sinceridade sem artifício.','素朴|soboku|singelo;純朴|junboku|ingênuo'],
['庸','medíocre/comum','yō',11,'ヨウ|yō','','广|telheiro','O que se usa 用 todo dia sob o teto. Nada de especial, mas confiável.','凡庸|bon-yō|medíocre;中庸|chūyō|meio-termo'],
['循','circular/seguir','jun',12,'ジュン|jun','','彳|passo','Andar 彳 conforme o escudo 盾 manda. O ciclo que se repete.','循環|junkan|circulação;因循|injun|indecisão'],
['幽','recôndito/espectral','yū',9,'ユウ|yū','','幺|fio','Dois fios 幺 escondidos na montanha 山. O que se esconde na penumbra.','幽霊|yūrei|fantasma;幽玄|yūgen|beleza sutil'],
['寂','solitário/silencioso','sabishii',11,'ジャク|jaku','さび(しい)|sabi(shii)','宀|telhado','A casa 宀 onde já não se ouve nada. O silêncio que dói.','寂しい|sabishii|solitário;静寂|seijaku|quietude'],
['慕','saudade/admirar','shitau',14,'ボ|bo','した(う)|shita(u)','心|coração','O coração 心 escondido 莫 que ainda procura alguém que já foi.','思慕|shibo|saudade;慕う|shitau|ter afeição'],
['憧','ansiar por','akogareru',15,'ショウ|shō','あこが(れる)|akoga(reru)','忄|coração','O coração 忄 de criança 童 querendo ser outra coisa.','憧れ|akogare|admiração;憧憬|shōkei|anseio'],
['懐','peito/nostalgia','natsukashii',16,'カイ|kai','なつ(かしい)|natsu(kashii);ふところ|futokoro','忄|coração','O coração 忄 guardado na dobra da roupa. Guardar saudade.','懐かしい|natsukashii|nostálgico;懐|futokoro|bolso interno'],
['郷','terra natal','kyō',11,'キョウ|kyō','','阝|vila','Duas pessoas comendo frente a frente na vila 阝. De onde a gente é.','故郷|kokyō|terra natal;郷土|kyōdo|região'],
['懸','pendurar/preocupar','kakeru',20,'ケン|ken','か(ける)|ka(keru)','心|coração','O coração 心 pendurado no fio, sem descanso. Estar preocupado.','懸命|kenmei|com afinco;懸念|kenen|apreensão'],
['擁','abraçar/apoiar','yō',16,'ヨウ|yō','','扌|mão','A mão 扌 acolhendo e defendendo ao mesmo tempo.','擁護|yōgo|defesa;抱擁|hōyō|abraço'],
['溺','afogar-se/mimar','oboreru',13,'デキ|deki','おぼ(れる)|obo(reru)','氵|água','A água 氵 que arrasta 弱 quem é fraco. Também amar demais.','溺れる|oboreru|afogar-se;溺愛|dekiai|amor cego'],
['惚','encantar-se','horeru',11,'コツ|kotsu','ほ(れる)|ho(reru)','忄|coração','O coração 忄 que se perde 忽 no encanto do outro.','惚れる|horeru|apaixonar-se;自惚れ|unubore|vaidade'],
['喪','luto/perda','mo',12,'ソウ|sō','も|mo','口|boca','As bocas 口 chorando sobre a roupa 衣 do falecido.','喪失|sōshitsu|perda;喪服|mofuku|traje de luto'],
['骸','esqueleto/carcaça','gai',16,'ガイ|gai','むくろ|mukuro','骨|osso','Os ossos 骨 que sobram 亥 depois que tudo se foi.','遺骸|igai|corpo, restos;骸骨|gaikotsu|esqueleto'],
['棺','caixão','kan',12,'カン|kan','ひつぎ|hitsugi','木|árvore','A caixa de madeira 木 do funcionário 官 que parte.','棺|hitsugi|caixão;石棺|sekkan|sarcófago'],
['墳','túmulo/montículo','fun',15,'フン|fun','','土|terra','A terra 土 amontoada 賁 sobre a sepultura.','古墳|kofun|túmulo antigo;墳墓|funbo|sepulcro'],
['塚','montículo/túmulo','tsuka',12,'チョウ|chō','つか|tsuka','土|terra','A terra 土 empilhada 冢 marcando o lugar de descanso.','塚|tsuka|montículo;貝塚|kaizuka|sambaqui'],
['弔','condolências','tomurau',4,'チョウ|chō','とむら(う)|tomura(u)','弓|arco','O arco 弓 com a corda frouxa. Símbolo de luto.','弔問|chōmon|visita de pêsames;弔う|tomurau|velar'],
['朽','apodrecer','kuchiru',6,'キュウ|kyū','く(ちる)|ku(chiru)','木|árvore','A árvore 木 que já não se sustenta. Tempo destruindo.','不朽|fukyū|imperecível;朽ちる|kuchiru|deteriorar'],
['耗','desgastar','mō',10,'モウ|mō','','耒|arado','O arado 耒 que se gasta de tanto uso. Consumir aos poucos.','消耗|shōmō|desgaste;摩耗|mamō|atrito'],
['蝕','corroer/eclipse','shoku',15,'ショク|shoku','むしば(む)|mushiba(mu)','虫|inseto','O inseto 虫 que come 食 por dentro sem se notar.','日蝕|nisshoku|eclipse solar;蝕む|mushibamu|corroer'],
['滅','extinguir/perecer','horobiru',13,'メツ|metsu','ほろ(びる)|horo(biru)','氵|água','A água 氵 apagando o fogo 火 até o fim.','絶滅|zetsumetsu|extinção;滅びる|horobiru|perecer'],
['廃','abolir/em ruínas','sutareru',12,'ハイ|hai','すた(れる)|suta(reru)','广|telheiro','A construção 广 abandonada até cair. Fim de uma era.','廃止|haishi|abolição;荒廃|kōhai|devastação'],
['棄','descartar','suteru',13,'キ|ki','す(てる)|su(teru)','木|árvore','Jogar fora a cesta de madeira 木 que não serve mais.','放棄|hōki|renúncia;廃棄|haiki|descarte'],
['披','revelar/abrir','hirō',8,'ヒ|hi','','扌|mão','A mão 扌 abrindo a pele 皮 e mostrando o que há dentro.','披露|hirō|apresentação;披露宴|hirōen|banquete de casamento'],
['露','orvalho/expor','tsuyu',21,'ロ|ro','つゆ|tsuyu','雨|chuva','A chuva 雨 que aparece no caminho 路 pela manhã. Descoberto.','露出|roshutsu|exposição;披露|hirō|revelação'],
['顕','manifesto/evidente','ken',18,'ケン|ken','あらわ(れる)|arawa(reru)','頁|cabeça','A cabeça 頁 sob o sol, à vista de todos. Fica claro.','顕著|kencho|notável;顕微鏡|kenbikyō|microscópio'],
['朗','claro/sonoro','hogaraka',10,'ロウ|rō','ほが(らか)|hoga(raka)','月|lua','A lua 月 boa 良 iluminando tudo. Voz e humor claros.','朗読|rōdoku|leitura em voz alta;明朗|meirō|alegre'],
['詳','detalhado','kuwashii',13,'ショウ|shō','くわ(しい)|kuwa(shii)','言|palavra','A palavra 言 bonita 羊, dita item por item. Nada escapa.','詳細|shōsai|detalhes;詳しい|kuwashii|minucioso'],
['簡','simples/breve','kan',18,'カン|kan','','竹|bambu','A tira de bambu 竹 curta, entre 間 poucas palavras. Direto.','簡単|kantan|simples;簡潔|kanketsu|conciso'],
['緩','afrouxar/lento','yurui',15,'カン|kan','ゆる(い)|yuru(i)','糸|fio','O fio 糸 com folga, sem tensão. Ritmo tranquilo.','緩い|yurui|frouxo;緩和|kanwa|alívio'],
['甚','extremo/muito','hanahada',9,'ジン|jin','はなは(だ)|hanaha(da)','甘|doce','O doce 甘 além da conta. Passar de qualquer medida.','甚大|jindai|imenso;幸甚|kōjin|grande satisfação'],
['殊','especial/particular','koto',10,'シュ|shu','こと|koto','歹|osso','O que se separa 朱 do resto pelo mérito próprio.','特殊|tokushu|especial;殊に|kotoni|sobretudo'],
['妥','conciliar','da',7,'ダ|da','','女|mulher','A mão pousada na mulher 女, acalmando. Meio-termo.','妥協|dakyō|acordo;妥当|datō|razoável'],
['譲','ceder','yuzuru',20,'ジョウ|jō','ゆず(る)|yuzu(ru)','言|palavra','A palavra 言 que abre espaço 襄 pro outro passar.','譲る|yuzuru|ceder;謙譲|kenjō|humildade'],
['普','geral/comum','fu',12,'フ|fu','','日|sol','O sol 日 que bate igual 並 em todo mundo. Universal.','普通|futsū|normal;普及|fukyū|difusão'],
['遍','universal/vezes','hen',12,'ヘン|hen','あまね(く)|amane(ku)','辶|caminhar','Andar 辶 por toda parte 扁. Em todo lugar sem exceção.','普遍|fuhen|universal;一遍|ippen|uma vez'],
['漠','vago/deserto','baku',13,'バク|baku','','氵|água','A água 氵 que sumiu 莫. Areia até onde a vista alcança.','砂漠|sabaku|deserto;漠然|bakuzen|vago'],
['瞬','instante/piscar','matataku',18,'シュン|shun','またた(く)|matata(ku)','目|olho','O tempo que o olho 目 leva pra piscar. Momento fugaz.','一瞬|isshun|um instante;瞬間|shunkan|momento'],
['迅','veloz','jin',6,'ジン|jin','','辶|caminhar','Andar 辶 tão rápido que quase não se vê. Velocidade máxima.','迅速|jinsoku|rapidez;疾風迅雷|shippūjinrai|como um raio'],
['緊','tenso/urgente','kin',15,'キン|kin','','糸|fio','O fio 糸 puxado com firmeza. Sem folga, sem tempo a perder.','緊張|kinchō|tensão;緊急|kinkyū|emergência'],
['狂','enlouquecer/fanático','kuruu',7,'キョウ|kyō','くる(う)|kuru(u)','犭|animal','O bicho 犭 que se acha rei 王. Perdeu a medida.','狂う|kuruu|enlouquecer;熱狂|nekkyō|frenesi'],
['乱','desordem/revolta','midareru',7,'ラン|ran','みだ(れる)|mida(reru)','乙|gancho','O fio embaraçado com o gancho 乙 no fim. Bagunça geral.','混乱|konran|confusão;乱れる|midareru|desarrumar'],
['混','misturar','mazeru',11,'コン|kon','ま(ぜる)|ma(zeru)','氵|água','A água 氵 que junta tudo 昆 num caldo só.','混雑|konzatsu|aglomeração;混ぜる|mazeru|misturar'],
['孤','solitário/órfão','ko',9,'コ|ko','','子|criança','A criança 子 que ficou sozinha com a fruta 瓜. Sem ninguém.','孤独|kodoku|solidão;孤立|koritsu|isolamento'],
['奉','oferecer/servir','hōru',8,'ホウ|hō','たてまつ(る)|tatematsu(ru)','大|grande','As duas mãos erguendo a oferenda com reverência.','奉仕|hōshi|serviço;信奉|shinpō|devoção'],
['祈','rezar','inoru',8,'キ|ki','いの(る)|ino(ru)','礻|altar','No altar 礻, cortar 斤 os pedidos e oferecer com fé.','祈る|inoru|rezar;祈願|kigan|prece'],
/* ── mais 40 kanji N1 com fichas completas ── */
['幣','moeda/oferenda','hei',15,'ヘイ|hei','','巾|pano','O pano 巾 dobrado no altar como oferenda 尚. Depois virou papel-moeda.','紙幣|shihei|nota;貨幣|kahei|moeda'],
['舗','loja/pavimentar','ho',15,'ホ|ho','','舌|língua','A pessoa 亻 que abre a boca 舌 na esquina 甫. A lojinha antiga.','店舗|tenpo|loja;舗装|hosō|pavimentação'],
['儒','confucionista','ju',16,'ジュ|ju','','亻|pessoa','A pessoa 亻 que estuda muito e precisa 需 do conhecimento. O sábio.','儒教|jukyō|confucionismo;儒学|jugaku|estudos confucianos'],
['愉','agradável/prazer','yu',12,'ユ|yu','たの(しむ)|tano(shimu)','忄|coração','O coração 忄 que se sente bem 兪. A alegria mansa do dia.','愉快|yukai|prazeroso;愉悦|yuetsu|deleite'],
['悦','deleite/alegria','etsu',10,'エツ|etsu','よろこ(ぶ)|yoroko(bu)','忄|coração','O coração 忄 que se abre 兌 em contentamento.','喜悦|kietsu|júbilo;悦楽|etsuraku|prazer'],
['惜','lamentar/precioso','oshii',11,'セキ|seki','お(しい)|o(shii)','忄|coração','O coração 忄 preso ao que já 昔 passou. É uma pena.','惜しい|oshii|é uma pena;惜別|sekibetsu|despedida'],
['惟','pensar/somente','i',11,'イ|i;ユイ|yui','おも(う)|omo(u)','忄|coração','O coração 忄 focado no pássaro 隹 único. Refletir profundo.','思惟|shii|contemplação;惟う|omou|considerar'],
['憾','pesar/lamento','kan',16,'カン|kan','うら(む)|ura(mu)','忄|coração','O coração 忄 que sente 感 o gosto amargo do inevitável.','遺憾|ikan|lamentável;憾む|uramu|guardar mágoa'],
['慧','sabedoria','kei',15,'ケイ|kei;エ|e','さと(い)|sato(i)','心|coração','O coração 心 varrido 彗 de tudo que estorva. Discernimento claro.','智慧|chie|sabedoria;慧眼|keigan|olhar sagaz'],
['慢','arrogância/lento','man',14,'マン|man','','忄|coração','O coração 忄 esticado 曼 demais em si mesmo. Também soltar o ritmo.','自慢|jiman|gabar-se;我慢|gaman|aguentar'],
['賂','suborno','ro',13,'ロ|ro','','貝|concha','O dinheiro 貝 passado 各 por baixo do pano. Pagamento por favores.','賄賂|wairo|suborno'],
['頒','distribuir','han',13,'ハン|han','','頁|cabeça','A cabeça 頁 que reparte 分 em partes iguais.','頒布|hanpu|distribuição;頒価|hanka|preço de venda'],
['頌','elogio/hino','shō',13,'ショウ|shō','','頁|cabeça','A cabeça 頁 pública 公 dedicando louvor a alguém.','頌歌|shōka|hino de louvor;賛頌|sanshō|elogio'],
['頑','obstinado/teimoso','gan',13,'ガン|gan','かたく(な)|kataku(na)','頁|cabeça','A cabeça 頁 dura como o primeiro 元 traço. Não muda de ideia.','頑固|ganko|teimosia;頑張る|ganbaru|se esforçar'],
['顎','queixo/mandíbula','ago',18,'ガク|gaku','あご|ago','頁|cabeça','A cabeça 頁 com a base pronunciada 咢. Onde as bochechas terminam.','顎|ago|queixo;顎骨|gakkotsu|osso da mandíbula'],
['騎','montar (cavalo)','ki',18,'キ|ki','','馬|cavalo','O cavalo 馬 com o cavaleiro 奇 em cima. Cavalgar em posição elegante.','騎士|kishi|cavaleiro;騎乗|kijō|montaria'],
['馴','domesticar/adaptar-se','nareru',13,'ジュン|jun','な(れる)|na(reru)','馬|cavalo','O cavalo 馬 que agora 川 obedece à mão do dono.','馴染む|najimu|acostumar-se;馴らす|narasu|amansar'],
['髄','medula/essência','zui',19,'ズイ|zui','','骨|osso','O que mora dentro do osso 骨, seguindo 隋 cada canto. O mais profundo.','骨髄|kotsuzui|medula óssea;神髄|shinzui|essência'],
['鯉','carpa','koi',18,'リ|ri','こい|koi','魚|peixe','O peixe 魚 que sobe rio acima, símbolo 里 de perseverança.','鯉|koi|carpa;鯉のぼり|koinobori|bandeira de carpa'],
['鹿','cervo','shika',11,'ロク|roku','しか|shika','鹿|cervo','O desenho literal do cervo, com chifres, corpo e as quatro patas.','鹿|shika|cervo;馬鹿|baka|tolo (lit. cavalo-cervo)'],
['麗','belo/esplêndido','urawashii',19,'レイ|rei','うるわ(しい)|uruwa(shii)','鹿|cervo','O cervo 鹿 com os chifres simétricos. Puro equilíbrio visual.','綺麗|kirei|bonito;華麗|karei|magnífico'],
['淑','gentil/graciosa','shuku',11,'シュク|shuku','しと(やか)|shito(yaka)','氵|água','A água 氵 pura como uma jovem 叔 bem-educada. Modéstia feminina.','淑女|shukujo|dama;貞淑|teishuku|castidade'],
['淡','leve/pálido','tan',11,'タン|tan','あわ(い)|awa(i)','氵|água','A água 氵 com pouco fogo 炎. Sabor discreto, cor suave.','淡い|awai|suave;淡水|tansui|água doce'],
['溜','acumular/reservar','tameru',13,'リュウ|ryū','た(める)|ta(meru)','氵|água','A água 氵 que fica parada 留 e vai enchendo o pote.','溜まる|tamaru|acumular-se;溜息|tameiki|suspiro'],
['滋','nutritivo/fértil','ji',12,'ジ|ji','','氵|água','A água 氵 fértil que faz os fios 玆 da planta crescerem.','滋養|jiyō|nutrição;滋賀|shiga|Shiga'],
['濫','transbordar/excesso','ran',18,'ラン|ran','みだ(りに)|midari(ni)','氵|água','A água 氵 que sai da tigela 監. Exceder qualquer limite.','氾濫|hanran|inundação;濫用|ran-yō|abuso'],
['熊','urso','kuma',14,'ユウ|yū','くま|kuma','灬|fogo','O bicho grande com pêlo, patas 灬 e a habilidade da capacidade 能.','熊|kuma|urso;白熊|shirokuma|urso polar'],
['煩','irritar/preocupar','wazurau',13,'ボン|bon;ハン|han','わずら(う)|wazura(u)','火|fogo','A cabeça 頁 que arde 火 de tanto preocupar-se. Aborrecimento.','煩雑|hanzatsu|complicado;煩う|wazurau|inquietar-se'],
['爽','refrescante/nítido','sawayaka',11,'ソウ|sō','さわ(やか)|sawa(yaka)','大|grande','A pessoa 大 com brisas nos quatro cantos. Frescor delicioso.','爽やか|sawayaka|refrescante;爽快|sōkai|revigorante'],
['狼','lobo','ōkami',10,'ロウ|rō','おおかみ|ōkami','犭|animal','O bicho 犭 bom 良 pra caçar, mas perigoso. O lobo da mata.','狼|ōkami|lobo;狼狽|rōbai|pânico'],
['猟','caça/caçar','ryō',11,'リョウ|ryō','か(る)|ka(ru)','犭|animal','O cão 犭 domesticado 巤 que ajuda o caçador. A caçada.','狩猟|shuryō|caça;猟師|ryōshi|caçador'],
['獄','prisão/inferno','goku',14,'ゴク|goku','','犭|animal','Dois cães 犭犬 guardando 言 quem está preso.','地獄|jigoku|inferno;監獄|kangoku|cadeia'],
['拳','punho','kobushi',10,'ケン|ken','こぶし|kobushi','手|mão','A mão 手 fechada com força 巻. Golpe fechado.','拳|kobushi|punho;拳銃|kenjū|revólver'],
['摩','friccionar/roçar','ma',15,'マ|ma','','手|mão','A mão 手 passando debaixo do teto 麻 e raspando forte.','摩擦|masatsu|atrito;摩天楼|matenrō|arranha-céu'],
['撃','golpear','utsu',15,'ゲキ|geki','う(つ)|u(tsu)','手|mão','A mão 手 e o carro de guerra 軍. Atacar com tudo.','攻撃|kōgeki|ataque;撃つ|utsu|atirar'],
['擦','esfregar','kosuru',17,'サツ|satsu','こす(る)|kosu(ru);す(れる)|su(reru)','扌|mão','A mão 扌 examinando 察 pela fricção. Roçar até marcar.','摩擦|masatsu|atrito;擦れ違う|surechigau|cruzar-se'],
['攻','atacar','semeru',7,'コウ|kō','せ(める)|se(meru)','攵|bater','Bater 攵 no trabalho 工 do inimigo. Ofensiva planejada.','攻撃|kōgeki|ataque;専攻|senkō|especialização'],
['敏','ágil/perspicaz','bin',10,'ビン|bin','','攵|bater','Cada 毎 movimento 攵 preciso e rápido. Reação afiada.','敏感|binkan|sensível;機敏|kibin|ágil'],
['敬','respeitar/reverenciar','uyamau',12,'ケイ|kei','うやま(う)|uyama(u)','攵|bater','Curvar-se 攵 com toda a atenção do heróico 苟. Respeito profundo.','敬語|keigo|linguagem honorífica;尊敬|sonkei|respeito'],
['旋','rodar/girar','sen',11,'セン|sen','','方|bandeira','A bandeira 方 girando 疋 no mastro. Movimento circular.','旋回|senkai|rodopio;凱旋|gaisen|regresso vitorioso'],
['斑','mancha/pintado','han',12,'ハン|han','ぶち|buchi','文|escrita','Duas joias 王 com um risco 文 no meio. Manchas coloridas.','斑点|hanten|mancha;斑|buchi|malhado'],
['晶','cristal','shō',12,'ショウ|shō','','日|sol','Três sóis 日 brilhando juntos. A pedra que reluz.','水晶|suishō|cristal de quartzo;結晶|kesshō|cristalização'],
['智','sabedoria','chi',12,'チ|chi','','日|sol','O que se sabe 知 iluminado pelo sol 日 da experiência.','智慧|chie|sabedoria;英智|eichi|inteligência'],
['曇','nublado/opaco','kumoru',16,'ドン|don','くも(る)|kumo(ru)','日|sol','O sol 日 escondido atrás da nuvem 雲. Céu fechado.','曇り|kumori|nublado;曇る|kumoru|embaçar'],
/* ── mais 30 kanji N1 ── */
['虹','arco-íris','niji',9,'コウ|kō','にじ|niji','虫|inseto','O antigo pensava que era um bicho 虫 no céu que fazia 工 a ponte de cores.','虹|niji|arco-íris;虹色|nijiiro|multicolor'],
['稼','trabalhar (ganhar)','kasegu',15,'カ|ka','かせ(ぐ)|kase(gu)','禾|arroz','O arroz 禾 que a família 家 ganha com o próprio esforço.','稼ぐ|kasegu|ganhar dinheiro;稼働|kadō|operação'],
['据','instalar/assentar','sueru',11,'キョ|kyo','す(える)|su(eru)','扌|mão','A mão 扌 que fixa 居 algo em lugar definitivo.','据える|sueru|instalar;見据える|misueru|encarar'],
['遍','universal/vezes','hen',12,'ヘン|hen','あまね(く)|amane(ku)','辶|caminhar','Andar 辶 por toda parte 扁. Em todo lugar sem exceção.','普遍|fuhen|universal;一遍|ippen|uma vez'],
['冠','coroa/liderar','kanmuri',9,'カン|kan','かんむり|kanmuri','冖|cobertura','O que se põe 冖 na cabeça, medido 寸. Símbolo do topo.','冠|kanmuri|coroa;栄冠|eikan|coroa da glória'],
['傍','ao lado/perto','soba',12,'ボウ|bō','かたわ(ら)|katawa(ra)','亻|pessoa','A pessoa 亻 que fica de lado 旁 acompanhando.','傍観|bōkan|assistir de fora;傍ら|katawara|ao lado'],
['伴','acompanhar','tomonau',7,'ハン|han;バン|ban','ともな(う)|tomona(u)','亻|pessoa','A pessoa 亻 que vai junto pela metade 半 do caminho.','伴う|tomonau|acompanhar;同伴|dōhan|companhia'],
['縁','borda/laço','en',15,'エン|en','ふち|fuchi','糸|fio','O fio 糸 na beirada do tecido. Também o destino que liga pessoas.','縁|en|laço;縁側|engawa|varanda'],
['潜','submergir/ocultar','hisomu',15,'セン|sen','ひそ(む)|hiso(mu);もぐ(る)|mogu(ru)','氵|água','Descer por baixo da água 氵 e sumir da vista.','潜在|senzai|latente;潜る|moguru|mergulhar'],
['腐','apodrecer/tofu','kusaru',14,'フ|fu','くさ(る)|kusa(ru)','肉|carne','A carne 肉 esquecida no depósito 府 do governo.','腐る|kusaru|estragar;豆腐|tōfu|tofu'],
['奏','tocar (instrumento)','sō',9,'ソウ|sō','かな(でる)|kana(deru)','大|grande','As duas mãos erguendo 夫 o instrumento com respeito.','演奏|ensō|execução;伴奏|bansō|acompanhamento'],
['響','ressoar','hibiku',20,'キョウ|kyō','ひび(く)|hibi(ku)','音|som','O som 音 batendo na vila e voltando. Ecoa fundo.','影響|eikyō|influência;響く|hibiku|ecoar'],
['鏡','espelho','kagami',19,'キョウ|kyō','かがみ|kagami','金|metal','O metal 金 polido até refletir. Símbolo de verdade.','鏡|kagami|espelho;眼鏡|megane|óculos'],
['輝','brilhar','kagayaku',15,'キ|ki','かがや(く)|kagaya(ku)','車|carro','A luz 光 do exército 軍 em marcha, reluzindo.','輝く|kagayaku|brilhar;輝き|kagayaki|brilho'],
['彩','colorir','irodoru',11,'サイ|sai','いろど(る)|irodo(ru)','彡|traços','Colher 采 os riscos 彡 de cor. Pintar o mundo.','色彩|shikisai|coloração;彩る|irodoru|colorir'],
['翼','asa','tsubasa',17,'ヨク|yoku','つばさ|tsubasa','羽|asas','As penas 羽 diferentes 異 abertas dos dois lados.','翼|tsubasa|asa;主翼|shuyoku|asa principal'],
['峰','pico','mine',10,'ホウ|hō','みね|mine','山|montanha','O ponto mais alto da montanha 山.','峰|mine|cume;連峰|renpō|cordilheira'],
['潮','maré','shio',15,'チョウ|chō','しお|shio','氵|água','A água 氵 que sobe toda manhã 朝. Movimento diário do mar.','潮|shio|maré;風潮|fūchō|tendência'],
['浜','praia/costa','hama',10,'ヒン|hin','はま|hama','氵|água','Onde a água 氵 encontra a areia. A praia serena.','浜|hama|praia;横浜|yokohama|Yokohama'],
['雷','trovão','kaminari',13,'ライ|rai','かみなり|kaminari','雨|chuva','A chuva 雨 sobre o campo 田 estrondando alto.','雷|kaminari|trovão;雷雨|raiu|tempestade'],
['嵐','tempestade','arashi',12,'ラン|ran','あらし|arashi','山|montanha','O vento 風 descendo da montanha 山 com fúria.','嵐|arashi|tempestade'],
['宙','espaço/ar','chū',8,'チュウ|chū','','宀|telhado','O grande teto 宀 de onde tudo vem 由. O universo.','宇宙|uchū|universo;宙|chū|ar'],
['宇','universo/céu','u',6,'ウ|u','','宀|telhado','O telhado 宀 maior de todos que abriga o mundo.','宇宙|uchū|universo'],
['震','tremer','furueru',15,'シン|shin','ふる(える)|furu(eru)','雨|chuva','A chuva 雨 e o trovão sacudindo tudo. Terra tremendo.','地震|jishin|terremoto;震える|furueru|tremer'],
['災','desastre','wazawai',7,'サイ|sai','わざわ(い)|wazawa(i)','火|fogo','O rio transbordando 巛 e o fogo 火. Catástrofe natural.','災害|saigai|desastre;火災|kasai|incêndio'],
['避','evitar/escapar','sakeru',16,'ヒ|hi','さ(ける)|sa(keru)','辶|caminhar','Andar 辶 por outro lado pra fugir do problema.','避ける|sakeru|evitar;避難|hinan|evacuação'],
['救','salvar/socorrer','sukuu',11,'キュウ|kyū','すく(う)|suku(u)','攵|bater','Estender 求 a mão 攵 pra quem está afundando.','救急車|kyūkyūsha|ambulância;救う|sukuu|salvar'],
['励','encorajar','hagemasu',7,'レイ|rei','はげ(ます)|hage(masu)','力|força','Dar força 力 pra quem está caindo. Levantar o ânimo.','励ます|hagemasu|animar;激励|gekirei|encorajamento'],
['憬','anseio','kei',15,'ケイ|kei','','忄|coração','O coração 忄 que se estende 景 até algo distante.','憧憬|shōkei|anseio; admiração'],
['旦','alvorada','tan',5,'タン|tan','','日|sol','O sol 日 saindo da linha do horizonte 一.','元旦|gantan|primeiro dia do ano;一旦|ittan|uma vez'],
/* ── mais 40 kanji N1 com fichas completas ── */
['薫','aroma/fragrância','kaoru',16,'クン|kun','かお(る)|kao(ru)','艹|planta','A erva 艹 sobre o fogo soltando o perfume.','薫風|kunpū|brisa perfumada;薫る|kaoru|perfumar'],
['漂','flutuar/vaguear','tadayou',14,'ヒョウ|hyō','ただよ(う)|tadayo(u)','氵|água','O que a água 氵 leva sem rumo 票.','漂流|hyōryū|deriva;漂う|tadayou|pairar'],
['醸','fermentar/gerar','kamosu',20,'ジョウ|jō','かも(す)|kamo(su)','酉|jarro','O jarro 酉 guardado até o tempo 襄 agir.','醸造|jōzō|fermentação;醸す|kamosu|provocar'],
['幣','moeda/oferenda','hei',15,'ヘイ|hei','','巾|pano','O pano 巾 dobrado no altar como oferenda 尚. Depois virou papel-moeda.','紙幣|shihei|nota;貨幣|kahei|moeda'],
['舗','loja/pavimentar','ho',15,'ホ|ho','','舌|língua','A pessoa 亻 que abre a boca 舌 na esquina 甫. A lojinha antiga.','店舗|tenpo|loja;舗装|hosō|pavimentação'],
['愉','agradável/prazer','yu',12,'ユ|yu','たの(しむ)|tano(shimu)','忄|coração','O coração 忄 que se sente bem 兪. A alegria mansa do dia.','愉快|yukai|prazeroso;愉悦|yuetsu|deleite'],
['悦','deleite/alegria','etsu',10,'エツ|etsu','よろこ(ぶ)|yoroko(bu)','忄|coração','O coração 忄 que se abre 兌 em contentamento.','喜悦|kietsu|júbilo;悦楽|etsuraku|prazer'],
['憾','pesar/lamento','kan',16,'カン|kan','うら(む)|ura(mu)','忄|coração','O coração 忄 que sente 感 o gosto amargo do inevitável.','遺憾|ikan|lamentável;憾む|uramu|guardar mágoa'],
['慧','sabedoria','kei',15,'ケイ|kei;エ|e','さと(い)|sato(i)','心|coração','O coração 心 varrido 彗 de tudo que estorva. Discernimento claro.','智慧|chie|sabedoria;慧眼|keigan|olhar sagaz'],
['慢','arrogância/lento','man',14,'マン|man','','忄|coração','O coração 忄 esticado 曼 demais em si mesmo.','自慢|jiman|gabar-se;我慢|gaman|aguentar'],
['頌','elogio/hino','shō',13,'ショウ|shō','','頁|cabeça','A cabeça 頁 pública 公 dedicando louvor a alguém.','頌歌|shōka|hino de louvor;賛頌|sanshō|elogio'],
['頑','obstinado/teimoso','gan',13,'ガン|gan','かたく(な)|kataku(na)','頁|cabeça','A cabeça 頁 dura como o primeiro 元 traço. Não muda de ideia.','頑固|ganko|teimosia;頑張る|ganbaru|se esforçar'],
['騎','montar (cavalo)','ki',18,'キ|ki','','馬|cavalo','O cavalo 馬 com o cavaleiro 奇 em cima. Cavalgar em posição elegante.','騎士|kishi|cavaleiro;騎乗|kijō|montaria'],
['馴','domesticar/adaptar-se','nareru',13,'ジュン|jun','な(れる)|na(reru)','馬|cavalo','O cavalo 馬 que agora 川 obedece à mão do dono.','馴染む|najimu|acostumar-se;馴らす|narasu|amansar'],
['鯉','carpa','koi',18,'リ|ri','こい|koi','魚|peixe','O peixe 魚 que sobe rio acima, símbolo 里 de perseverança.','鯉|koi|carpa;鯉のぼり|koinobori|bandeira de carpa'],
['鹿','cervo','shika',11,'ロク|roku','しか|shika','鹿|cervo','O desenho literal do cervo, com chifres, corpo e as quatro patas.','鹿|shika|cervo;馬鹿|baka|tolo (lit. cavalo-cervo)'],
['熊','urso','kuma',14,'ユウ|yū','くま|kuma','灬|fogo','O bicho grande com pêlo, patas 灬 e a habilidade 能.','熊|kuma|urso;白熊|shirokuma|urso polar'],
['狼','lobo','ōkami',10,'ロウ|rō','おおかみ|ōkami','犭|animal','O bicho 犭 bom 良 pra caçar, mas perigoso. O lobo da mata.','狼|ōkami|lobo;狼狽|rōbai|pânico'],
['麗','belo/esplêndido','urawashii',19,'レイ|rei','うるわ(しい)|uruwa(shii)','鹿|cervo','O cervo 鹿 com os chifres simétricos. Puro equilíbrio.','綺麗|kirei|bonito;華麗|karei|magnífico'],
['翻','virar/traduzir','hirugaeru',18,'ホン|hon','ひるがえ(る)|hirugae(ru)','羽|asas','A asa 羽 virando de lado no ar. Passar de uma língua a outra.','翻訳|hon-yaku|tradução;翻る|hirugaeru|tremular'],
['憩','descansar','ikou',16,'ケイ|kei','いこ(い)|iko(i)','心|coração','A língua 舌 parada e o coração 心 em paz. Pausa.','休憩|kyūkei|intervalo;憩い|ikoi|descanso'],
['醒','despertar','sameru',16,'セイ|sei','さ(める)|sa(meru)','酉|jarro','A embriaguez 酉 que passa 星 com o amanhecer. Acordar.','覚醒|kakusei|despertar;醒める|sameru|acordar'],
['誇','orgulhar-se','hokoru',13,'コ|ko','ほこ(る)|hoko(ru)','言|palavra','A palavra 言 que se estende 夸 além do necessário.','誇り|hokori|orgulho;誇張|kochō|exagero'],
['威','autoridade/imponência','i',9,'イ|i','','女|mulher','A lança 戈 diante de quem se curva. Impor respeito.','威力|iryoku|poder;権威|ken-i|autoridade'],
['奨','incentivar','shō',13,'ショウ|shō','','大|grande','Erguer 将 alguém e dizer: vai lá, você consegue.','奨学金|shōgakukin|bolsa de estudo;推奨|suishō|recomendação'],
['薦','recomendar','susumeru',16,'セン|sen','すす(める)|susu(meru)','艹|planta','Oferecer a erva 艹 boa que o cervo escolheu.','推薦|suisen|recomendação;薦める|susumeru|indicar'],
['択','escolher','taku',7,'タク|taku','','扌|mão','A mão 扌 separando 尺 o que vale do que não vale.','選択|sentaku|escolha;採択|saitaku|adoção'],
['詠','recitar/compor','yomu',12,'エイ|ei','よ(む)|yo(mu)','言|palavra','A palavra 言 esticada 永 no canto. Declamar poema.','詠む|yomu|compor verso;朗詠|rōei|recitação'],
['吟','recitar/entoar','gin',7,'ギン|gin','','口|boca','A boca 口 que agora 今 solta o verso.','吟味|ginmi|exame cuidadoso;詩吟|shigin|recitação de poema'],
['弦','corda (instrumento)','gen',8,'ゲン|gen','つる|tsuru','弓|arco','A corda do arco 弓 esticada e escura 玄.','弦楽器|gengakki|instrumento de corda;上弦|jōgen|quarto crescente'],
['鼓','tambor','tsuzumi',13,'コ|ko','つづみ|tsuzumi','鼓|tambor','A vasilha 壴 e a baqueta 支 batendo nela.','太鼓|taiko|tambor;鼓動|kodō|batida do coração'],
['鐘','sino','kane',20,'ショウ|shō','かね|kane','金|metal','O metal 金 grande como uma criança 童 em pé.','鐘|kane|sino;警鐘|keishō|alarme'],
['鈴','sininho','suzu',13,'レイ|rei','すず|suzu','金|metal','O metal 金 que ordena 令 com o tilintar.','鈴|suzu|guizo;呼び鈴|yobirin|campainha'],
['閃','relampejar','hirameku',10,'セン|sen','ひらめ(く)|hirame(ku)','門|portão','A pessoa 人 aparecendo de repente no portão 門.','閃光|senkō|clarão;閃く|hirameku|ter uma ideia'],
['凛','austero/gélido','rin',15,'リン|rin','','冫|gelo','O gelo 冫 firme do inverno. Postura reta e digna.','凛と|rin-to|dignamente;凛々しい|ririshii|gallardo'],
['厳','severo/solene','kibishii',17,'ゲン|gen','きび(しい)|kibi(shii)','⺍|topo','A ordem gritada do alto do penhasco.','厳しい|kibishii|rigoroso;厳格|genkaku|severo'],
['滑','escorregar/liso','suberu',13,'カツ|katsu','すべ(る)|sube(ru);なめ(らか)|name(raka)','氵|água','A água 氵 sobre o osso 骨 polido. Nada segura.','滑る|suberu|escorregar;円滑|enkatsu|fluido'],
['粘','pegajoso/persistir','nebaru',11,'ネン|nen','ねば(る)|neba(ru)','米|arroz','O arroz 米 que gruda 占 e não solta.','粘る|nebaru|insistir;粘土|nendo|argila'],
['濁','turvo','nigoru',16,'ダク|daku','にご(る)|nigo(ru)','氵|água','A água 氵 cheia de bichos 蜀. Perdeu a transparência.','濁る|nigoru|turvar;濁点|dakuten|as aspinhas ゛'],
['澄','clarear/límpido','sumu',15,'チョウ|chō','す(む)|su(mu)','氵|água','A água 氵 que subiu 登 e deixou o resto no fundo.','澄む|sumu|clarear;清澄|seichō|límpido'],
/* ── mais 40 kanji N1 ── */
['塊','bloco/massa','katamari',13,'カイ|kai','かたまり|katamari','土|terra','A terra 土 com espírito 鬼 próprio, num pedaço só. Massa compactada.','塊|katamari|bloco;金塊|kinkai|barra de ouro'],
['隅','canto/recanto','sumi',12,'グウ|gū','すみ|sumi','阝|colina','O canto onde a colina 阝 e o macaco 禺 se encontram. Recanto escondido.','隅|sumi|canto;片隅|katasumi|cantinho'],
['稲','arroz (planta)','ine',14,'トウ|tō','いね|ine','禾|arroz','O pé de arroz 禾 carregado 舀 de grãos maduros.','稲|ine|pé de arroz;稲作|inasaku|cultivo de arroz'],
['穂','espiga','ho',15,'スイ|sui','ほ|ho','禾|arroz','A ponta do arroz 禾 pesada 惠 de grãos. A espiga cheia.','穂|ho|espiga;稲穂|inaho|espiga de arroz'],
['苗','muda/broto','nae',8,'ビョウ|byō','なえ|nae','艹|planta','A planta 艹 pequena no campo 田. Muda pronta pra plantar.','苗|nae|muda;苗字|myōji|sobrenome'],
['芽','broto','me',8,'ガ|ga','め|me','艹|planta','A planta 艹 rompendo como uma presa 牙. Vida nascendo.','芽|me|broto;新芽|shinme|broto novo'],
['茎','caule','kuki',8,'ケイ|kei','くき|kuki','艹|planta','A haste da planta 艹 que sobe reta. Sustenta a flor.','茎|kuki|caule;地下茎|chikakei|rizoma'],
['桜','cerejeira','sakura',10,'オウ|ō','さくら|sakura','木|árvore','A árvore 木 que floresce como uma coroa 嬰. Símbolo do Japão.','桜|sakura|cerejeira;夜桜|yozakura|sakura à noite'],
['梅','ameixeira','ume',10,'バイ|bai','うめ|ume','木|árvore','A árvore 木 que floresce cada 毎 fim de inverno.','梅|ume|ameixa;梅雨|tsuyu|estação chuvosa'],
['菊','crisântemo','kiku',11,'キク|kiku','','艹|planta','A planta 艹 com as pétalas em punhado 匊. Flor imperial.','菊|kiku|crisântemo;菊人形|kikuningyō|boneca de crisântemo'],
['蓮','lótus','hasu',13,'レン|ren','はす|hasu','艹|planta','A planta 艹 aquática que anda 連 sobre a água. Pureza budista.','蓮|hasu|lótus;蓮華|renge|flor de lótus'],
['椿','camélia','tsubaki',13,'チン|chin','つばき|tsubaki','木|árvore','A árvore 木 que floresce na primavera 春. Flor vermelha do inverno.','椿|tsubaki|camélia'],
['杏','damasco/albicoque','anzu',7,'キョウ|kyō','あんず|anzu','木|árvore','A árvore 木 com a boca 口 aberta oferecendo o fruto doce.','杏|anzu|damasco;杏子|anzu|damasco'],
['柚','yuzu','yuzu',9,'ユウ|yū','ゆず|yuzu','木|árvore','A árvore 木 do cítrico amarelo que se usa 由 no chá e no banho.','柚|yuzu|yuzu;柚子胡椒|yuzukoshō|pasta de yuzu com pimenta'],
['芝','grama/relva','shiba',6,'シ|shi','しば|shiba','艹|planta','A grama 艹 baixinha e macia do jardim.','芝生|shibafu|gramado;芝居|shibai|peça teatral'],
['藻','alga','mo',19,'ソウ|sō','も|mo','艹|planta','A planta 艹 aquática que se move 澡 com a correnteza.','藻|mo|alga;海藻|kaisō|alga marinha'],
['薮','moita/bosque','yabu',18,'','やぶ|yabu','艹|planta','A planta 艹 densa e emaranhada. Vegetação difícil de atravessar.','薮|yabu|moita;藪医者|yabuisha|médico charlatão'],
['蔦','hera','tsuta',14,'','つた|tsuta','艹|planta','A planta 艹 que se agarra ao próprio pássaro 鳥 pra subir.','蔦|tsuta|hera'],
['杉','cedro','sugi',7,'','すぎ|sugi','木|árvore','A árvore 木 com galhos 彡 alinhados em camadas.','杉|sugi|cedro japonês;杉並木|suginamiki|aleia de cedros'],
['柳','salgueiro','yanagi',9,'リュウ|ryū','やなぎ|yanagi','木|árvore','A árvore 木 de galhos que caem 卯. Balança com o vento.','柳|yanagi|salgueiro;川柳|senryū|senryū (haicai humorístico)'],
['桑','amoreira','kuwa',10,'ソウ|sō','くわ|kuwa','木|árvore','A árvore 木 com folhas que alimentam o bicho-da-seda.','桑|kuwa|amoreira;桑畑|kuwabatake|plantação de amoreira'],
['楓','bordo (maple)','kaede',13,'フウ|fū','かえで|kaede','木|árvore','A árvore 木 cujas folhas dançam ao vento 風 do outono.','楓|kaede|bordo;紅葉|kōyō|folhas de outono'],
['榛','—','',1,'','','一|linha','',''],
['槙','—','',1,'','','一|linha','',''],
['棚','prateleira','tana',12,'ホウ|hō','たな|tana','木|árvore','Tábuas 木 apoiadas lado a lado 朋. Onde se guarda coisa.','棚|tana|prateleira;本棚|hondana|estante'],
['扉','porta/batente','tobira',12,'ヒ|hi','とびら|tobira','戸|porta','A porta 戸 que não 非 fica parada. Se abre e fecha.','扉|tobira|porta;扉絵|tobirae|ilustração de abertura'],
['錠','tranca/cápsula','jō',16,'ジョウ|jō','','金|metal','O metal 金 que fixa 定 a porta. Também comprimido.','錠|jō|fechadura;錠剤|jōzai|comprimido'],
['鍵','chave','kagi',17,'ケン|ken','かぎ|kagi','金|metal','O metal 金 que constrói 建 a abertura da porta.','鍵|kagi|chave;鍵盤|kenban|teclado'],
['塀','muro','hei',12,'ヘイ|hei','','土|terra','A terra 土 que afasta 屏 os de fora. Muro de proteção.','塀|hei|muro;板塀|itabei|muro de tábuas'],
['井','poço','i',4,'セイ|sei','い|i','二|dois','A boca quadrada do poço vista de cima.','井戸|ido|poço;天井|tenjō|teto'],
['溝','vala/fosso','mizo',13,'コウ|kō','みぞ|mizo','氵|água','O canal 冓 cavado pra água 氵 correr. Distância entre pessoas.','溝|mizo|valeta;下水溝|gesuikō|esgoto'],
['堤','dique','tsutsumi',12,'テイ|tei','つつみ|tsutsumi','土|terra','A terra 土 empilhada certo 是 pra segurar a água.','堤防|teibō|dique;堤|tsutsumi|barragem'],
['峠','passagem de montanha','tōge',9,'','とうげ|tōge','山|montanha','O ponto da montanha 山 onde se sobe 上 e desce 下. Passagem.','峠|tōge|desfiladeiro;峠越え|tōgegoe|travessia'],
['崖','penhasco','gake',11,'ガイ|gai','がけ|gake','山|montanha','A montanha 山 cortada a pique. Queda vertical.','崖|gake|penhasco;断崖|dangai|precipício'],
['洞','caverna','hora',9,'ドウ|dō','ほら|hora','氵|água','A água 氵 que cavou o mesmo 同 lugar por séculos.','洞窟|dōkutsu|caverna;空洞|kūdō|oco'],
['峡','desfiladeiro','kyō',9,'キョウ|kyō','','山|montanha','O aperto 夹 entre montanhas 山. Estreito rochoso.','海峡|kaikyō|estreito;峡谷|kyōkoku|desfiladeiro'],
['丘','colina','oka',5,'キュウ|kyū','おか|oka','一|linha','A elevação suave do terreno. Não chega a ser montanha.','丘|oka|colina;砂丘|sakyū|duna'],
['畑','campo cultivado','hatake',9,'','はたけ|hatake','田|campo','O campo 田 queimado 火 antes do plantio. Terra preparada.','畑|hatake|horta;田畑|tahata|lavouras'],
['沢','pântano/abundância','sawa',7,'タク|taku','さわ|sawa','氵|água','A água 氵 espalhada pelo brejo. Também quer dizer fartura.','沢山|takusan|muito;金沢|kanazawa|Kanazawa'],
['谷','vale','tani',7,'コク|koku','たに|tani','谷|vale','A abertura entre duas montanhas com a boca 口 embaixo.','谷|tani|vale;渋谷|shibuya|Shibuya']
].filter(a=>a[1]!=='—').map(x3);

/* registro global: qualquer curso pode reaproveitar um kanji já escrito */
const REG={};
[CORE,EXTRA,N4,N4X,N3X,N2X,N1X].forEach(L=>L.forEach(k=>{if(!REG[k.c])REG[k.c]=k;}));
/* rede de segurança: nenhum kanji da lista oficial pode ficar de fora.
   Se faltar dado escrito à mão, gera uma ficha mínima com leitura pelo dicionário curto. */
const FBK={};
function ensure(c,lvl){
  if(REG[c])return REG[c];
  const d=FBK[c]||{};
  const k={c,m:[d.m||'—'],m2:d.m||'—',qr:d.r||'',s:d.s||8,g:0,jl:lvl,
    on:d.on?[{k:'',r:d.on}]:[],kun:d.kun?[{k:'',r:d.kun}]:[],
    rad:{c,m:'kanji '+lvl},
    sty:`Kanji do <b>${lvl}</b>. Use a prática de traçado para gravar a forma e o quiz para fixar a leitura.`,
    p:[],w:[{w:c,r:d.r||'',m:d.m||'—'}],sim:[]};
  REG[c]=k;return k;
}
const N3=[...N3ORD].map(c=>ensure(c,'N3'));
/* N4 = SOMENTE a lista oficial. Os kanji da 3ª série que eu havia
   acrescentado pertencem ao N3 ou a nenhum nível — foram removidos. */
const N4ALL=N4.filter((k,i,a)=>a.findIndex(x=>x.c===k.c)===i);
const N4T2=['Escolas','Esportes','Pontes','Ferramentas','Sangue','Depósitos','Lagos','Portos','Raízes',
 'Festivais','Pratos','Dedos','Dentes','Poesia','Ordem','Cerimônias','Guardar','Bebidas','Receber',
 'Estados','Catar','Pousadas','Ajudar','Eras','Apagar','Comércio','Capítulos','Vitória','Plantar',
 'Corpo','Deuses','Profundidade','Gerações','Organizar','Passado','Mútuo','Ideias','Respirar',
 'Velocidade','Outros','Bater','Ordinais','Curto','Conversa','Pilares','Blocos','Cadernos',
 'Perseguir','Definir','Jardins','Flautas','Ferro','Girar','Capitais','Arremessar','Feijões','Ilhas',
 'Banho','Subir','Crianças','Agricultura','Ondas','Distribuir','Dobro','Caixas','Hortas','Ladeiras',
 'Tábuas','Pele','Tristeza','Beleza','Nariz','Pincéis','Gelo','Superfície','Segundos','Perder',
 'Partes','Sorte','Coisas','Paz','Devolver','Soltar','Vida','Rostos','Motivos','Óleo','Possuir',
 'Passeios','Prever','Ovelhas','Oceanos','Folhas','Sol','Cair','Fluir','Cortesia','Filas','Treino',
 'Caminhos','Harmonia','Nadar','Margens','Centro','Mudança','Cargas','Degraus','Sentir'];
const N2ORD='党協総領設改府査委軍団各島革勢減再税営比防補境導副算輸述農州武象域額欧担準賞辺造被技低復移個課脳極含蔵量型況針専谷史階管兵接効丸湾録省旧橋岸周材央券編捜竹超並療採授及憲板弁幹兆融姿均純損裏郵縮拡秘密派展層帯訓群徴賃迫舎貨硬齢鮮幅綿沿詰泊訳弾燃汚肩腕'
 +'庁講庫勧盛腐扱占催歓触絡距離貸豊贈彫販需績略封印刷薄厚浅濃鋭鈍乾湿凍溶吐震災避救傷殿皇臣庶敬尊厳寛貴宝珍奇巨微傾伸延祝祭仰拝僧塔墓骨筋胸腰皮血涙汗袋筒缶瓶棒網綱粉粒塩砂泥灰煮焼蒸冊巻章詞句詩劇踊奏響鏡照輝影泉滝湖沼浜波潮岩峰芝枝根麦豆稲耕植牧羊豚鶏卵乳虫蚊蜂蝶鳥翼'
 +'羽尾角甲牙爪毛舌喉肌臓胃肝腸肺脈床壁柱棚扉錠鍵塀井溝堤坂峠崖穴洞峡丘畑苗芽茎桜梅松杉柳菊蘭林刈掘埋築壊修織縫裁布鉄銅鉛鋼刃剣弓矢盾砲爆炎灯暖涼氷霧雲雷嵐虹星宙宇軌跡彩染紫紅黄珠環輪'
 +'署隊艦航浴沈漁釣貝殻粧磨浄清潔粗雅趣戯競闘芸僚雇募応援護看介紹奪偽誠忠孝恩謝慰励激怠惑誘隠暴奮興衰滅診症菌毒射免禁戒罰償訴律契審則範囲模複双換替巡添削概念慮憶賢愚巧凡俗豪華麗醜尽充乏節季旬暦賀儀葬魂鬼霊仙聖祈奉宮城陣旗';
const N2=[...N2ORD].map(c=>ensure(c,'N2')).filter((k,i,a)=>a.indexOf(k)===i);
const N1=N1X.filter((k,i,a)=>a.findIndex(x=>x.c===k.c)===i);   // dedupe por caractere

/* ── JŌYŌ 2.136 · cobertura completa ───────────────────────────────
   Fonte de dados: lista de 2.136 Jōyō kanji (2020), usada apenas para
   preencher automaticamente o que não possui ficha escrita no app.
   Depois do primeiro carregamento, o CSV inteiro fica no localStorage,
   permitindo continuar a estudar sem rede.
*/
const JOYO_URL='https://raw.githubusercontent.com/sph-mn/nihongo/master/data/jouyou-kanji.csv';
const JOYO_CACHE='kanjido_joyo_2136_v1';
let JOYO_LIST=[];
let JOYO_STATUS='aguardando';

function romaHira(s){
  let x=String(s||'').toLowerCase().replace(/[()]/g,'').replace(/[-']/g,'');
  const M={
    'a':'あ','i':'い','u':'う','e':'え','o':'お',
    'ka':'か','ki':'き','ku':'く','ke':'け','ko':'こ',
    'ga':'が','gi':'ぎ','gu':'ぐ','ge':'げ','go':'ご',
    'sa':'さ','shi':'し','si':'し','su':'す','se':'せ','so':'そ',
    'za':'ざ','ji':'じ','zi':'じ','zu':'ず','ze':'ぜ','zo':'ぞ',
    'ta':'た','chi':'ち','ti':'ち','tsu':'つ','tu':'つ','te':'て','to':'と',
    'da':'だ','di':'ぢ','du':'づ','de':'で','do':'ど',
    'na':'な','ni':'に','nu':'ぬ','ne':'ね','no':'の',
    'ha':'は','hi':'ひ','fu':'ふ','hu':'ふ','he':'へ','ho':'ほ',
    'ba':'ば','bi':'び','bu':'ぶ','be':'べ','bo':'ぼ',
    'pa':'ぱ','pi':'ぴ','pu':'ぷ','pe':'ぺ','po':'ぽ',
    'ma':'ま','mi':'み','mu':'む','me':'め','mo':'も',
    'ya':'や','yu':'ゆ','yo':'よ',
    'ra':'ら','ri':'り','ru':'る','re':'れ','ro':'ろ',
    'wa':'わ','wi':'ゐ','we':'ゑ','wo':'を','n':'ん',
    'kya':'きゃ','kyu':'きゅ','kyo':'きょ','gya':'ぎゃ','gyu':'ぎゅ','gyo':'ぎょ',
    'sha':'しゃ','shu':'しゅ','sho':'しょ','sya':'しゃ','syu':'しゅ','syo':'しょ',
    'ja':'じゃ','ju':'じゅ','jo':'じょ','jya':'じゃ','jyu':'じゅ','jyo':'じょ',
    'cha':'ちゃ','chu':'ちゅ','cho':'ちょ','tya':'ちゃ','tyu':'ちゅ','tyo':'ちょ',
    'nya':'にゃ','nyu':'にゅ','nyo':'にょ','hya':'ひゃ','hyu':'ひゅ','hyo':'ひょ',
    'bya':'びゃ','byu':'びゅ','byo':'びょ','pya':'ぴゃ','pyu':'ぴゅ','pyo':'ぴょ',
    'mya':'みゃ','myu':'みゅ','myo':'みょ','rya':'りゃ','ryu':'りゅ','ryo':'りょ',
    'kwa':'くぁ','kwi':'くぃ','kwe':'くぇ','kwo':'くぉ',
    'fa':'ふぁ','fi':'ふぃ','fe':'ふぇ','fo':'ふぉ',
    'tsa':'つぁ','tsi':'つぃ','tse':'つぇ','tso':'つぉ',
    'she':'しぇ','che':'ちぇ','je':'じぇ',
    'di':'ぢ','du':'づ'
  };
  let out='', i=0;
  const keys=Object.keys(M).sort((a,b)=>b.length-a.length);
  while(i<x.length){
    if(x[i]===' '){i++;continue;}
    if(i+1<x.length && x[i]===x[i+1] && /[bcdfghjklmpqrstvwxyz]/.test(x[i]) && x[i]!=='n'){
      out+='っ';i++;continue;
    }
    let found='';
    for(const k of keys){if(x.startsWith(k,i)){found=k;break;}}
    if(found){out+=M[found];i+=found.length;}
    else { out+=x[i]; i++; }
  }
  return out;
}

function joyoEntry(c,meaning,romaji,idx){
  const base=REG[c];
  if(base){return base;}
  const rs=String(romaji||'').split('/').map(s=>s.trim()).filter(Boolean);
  const hira=rs.map(romaHira);
  const one={c,m:[meaning||'—'],m2:meaning||'—',qr:hira[0]||'',s:8,g:0,jl:'Jōyō',
    on:hira.map((h,i)=>({k:h,r:rs[i]||h})),kun:[],
    rad:{c,m:'componente do kanji'},
    sty:'Este kanji faz parte dos Jōyō, os kanji usados como referência para a escrita da vida social no Japão. Veja a forma, leia a pronúncia em voz alta e pratique os traços.',
    p:[],w:[{w:c,r:rs[0]||'',m:meaning||'—'}],sim:[],jy:true};
  REG[c]=one;
  return one;
}
function parseJoyoCSV(raw){
  const out=[],seen=new Set();
  String(raw||'').split(/\r?\n/).forEach((line,idx)=>{
    const s=line.trim(); if(!s)return;
    const a=s.split(/\s+/);
    if(a.length<2)return;
    const c=[...a[0]][0];
    if(!c || seen.has(c))return;
    const readings=a.length>=3?a[a.length-1]:'';
    const meaning=a.slice(1,a.length>=3?-1:undefined).join(' ').replace(/^"|"$/g,'');
    if(!/[\u3400-\u9fff\u{20000}-\u{2ffff}]/u.test(c))return;
    seen.add(c);
    out.push(joyoEntry(c,meaning,readings,idx));
  });
  return out;
}
async function loadJoyo(){
  JOYO_STATUS='carregando';
  let raw='';
  try{raw=localStorage.getItem(JOYO_CACHE)||'';}catch(e){}
  if(raw){
    try{JOYO_LIST=parseJoyoCSV(raw);if(JOYO_LIST.length>=2000){JOYO_STATUS='cache';return true;}}catch(e){}
  }
  try{
    const ctl=new AbortController();
    const timer=setTimeout(()=>ctl.abort(),7000);
    const res=await fetch(JOYO_URL,{cache:'force-cache',signal:ctl.signal});
    clearTimeout(timer);
    if(!res.ok)throw new Error('HTTP '+res.status);
    raw=await res.text();
    const list=parseJoyoCSV(raw);
    if(list.length<2100)throw new Error('lista incompleta: '+list.length);
    JOYO_LIST=list;
    JOYO_STATUS='online';
    try{localStorage.setItem(JOYO_CACHE,raw);}catch(e){}
    return true;
  }catch(e){
    console.warn('Jōyō',e);
    JOYO_STATUS='indisponível';
    JOYO_LIST=Object.values(REG).filter(k=>k&&k.c&&k.c.length===1);
    return false;
  }
}
const N1T=['Coração e Virtude','Sombra e Silêncio','Levar Adiante','Segurar','Herança','Indignação',
 'Rancor','Manias','Contenção','Veneração','Despertar','Resistir','Barrar','Enfrentar','Curar',
 'Prosperar','Orgulho','Supremacia','Recomendar','Descartar','Fermentar','Vaguear','Frequência',
 'Excelência','Assentar','Turvo','Enigmas','Revelar','Fios','Retornar','Elogiar','Fricção',
 'Anseio','Requinte','Encanto','Penumbra','Baixeza','Ousadia','Saltar','Pesar','Crueldade',
 'Amarras','Essência','Núcleo','Bordas','Cantos','Inclinação','Relevo','Pintar','Limpeza',
 'Cozinhar','Solidificar','Sabores','Aromas','Gritar','Silêncio','Tramar','Engano','Embriaguez',
 'Família','Gerações','Infância','Nascimento','Clareza','Concisão','Extremos','Conciliar',
 'Nostalgia','Universal','Vagueza','Instante','Tensão','Loucura','Desordem','Sequência',
 'Acompanhar','Poupar','Simplicidade','Ilusão','Serenidade','Contribuir','Solidão','Prisão',
 'Vigilância','Clemência','Recompensa','Conquista','Submissão','Resistência','Impacto','Defesa',
 'Firmeza','Flexibilidade','Expansão','Deterioração','Pronomes','Indefinidos','Somente','Adição',
 'Diversos','Imediato','Futuro','Encontros','Cereais','Confeitos','Banquetes','Cerâmica','Minérios',
 'Gotas','Vazamentos','Alto-mar','Montanhas','Brejos','Secar','Maturar','Fundição','Triturar',
 'Doenças','Corpo Doente','Direções','Numerais','Amanhecer','Ascensão','Fome e Sede','Saciedade',
 'Consumir','Rosto','Olhos','Membros','Órgãos','Fibras','Tecidos','Estampas','Vestir','Proteção',
 'Fortalezas','Corredores','Piso','Barreiras','Telhas','Medidas','Tribunais','Nobreza','Linhagem',
 'Xogunato','Guerreiros','Realeza','Enviar','Recolhimento','Tabus','Azar','Boa Sorte',
 'Lamento','Inveja','Humilhação','Repreensão','Perdão','Investigar','Domínio','Profundeza',
 'Gravar','Ruínas','Luto','Choro','Superar','Coragem','Ferocidade','Rigor','Provações',
 'Reverência','Súplica','Desvios','Dispor','Recusar','Retirar','Fundamentos','Prender',
 'Juramentos','Acordos','Indenizar','Consentir','Cumprir','Desafiar','Cultivar','Instrumentos',
 'Macacos','Caça','Rebanhos','Aves','Criação','Ninhos','Células','Folgas','Sonolência',
 'Feitiçaria','Remendar','Minúcia','Artesãos','Arrogância','Ocultar','Supervisão','Absorver',
 'Fotografar','Erguer','Inserir','Transportar','Extrair','Excluir','Partituras','Recitar',
 'Cordas','Sinos','Honrarias','Títulos','Parentesco','Sucessão','Facções','Trono','Decretos',
 'Anfitriões','Comando','Anciãos','Sobrinhos','Gestação','Falecimento','Sepulturas','Ritos',
 'Maldições','Presságios','Severidade','Enfermidades','Cegueira','Galope','Tumulto','Bebidas',
 'Mantimentos','Inanição','Madrugada','Apodrecer','Tribunas','Residências','Súplicas','Zombaria',
 'Ciúme','Compaixão','Clamor','Encruzilhadas','Lagoas','Cachoeiras','Rochedos','Embarcações','Âncoras'];
const N3G=['政','経','法','機','受','記','点','解','勝','認','在','感','直','果','能','放','供','費','違','備',
 '席','想','例','商','形','退','失','守','命','察','申','識','候','値','科','客','速','号','破','責','給','園',
 '馬','未','冷','類','妻','険','船','抜','努','婚','幸','老','庭','雑','更','抱','息','絵','笑','列','夢','折',
 '悲','寝','陽','忘','慣','昔','泳','疲','腹','怖','箱','忙','恥','猫'];
const N3T=['Estado e Nação','Economia','Leis e Regras','Sistemas','Dar e Receber','Registros','Pontos',
 'Resolver','Vencer','Reconhecer','Existir','Sentir','Direto ao Ponto','Resultados','Capacidade','Soltar',
 'Oferecer','Custos','Diferenças','Preparar','Lugares','Pensamento','Exemplos','Comércio','Formas','Recuar',
 'Perder','Guardar','A Vida','Observar','Dizer','Saber','Clima','Valores','Ciência','Visitas','Velocidade',
 'Números','Quebrar','Dever','Jardins','Animais','Tempo Futuro','Frio','Categorias','Família','Perigo',
 'Viagem','Esforço','Casamento','Sorte','Idade','Casa','Variedade','Renovar','Abraçar','Respirar','Arte',
 'Rir','Ordem','Sonhos','Dobrar','Tristeza','Descanso','Sol','Memória','Hábitos','Passado','Corpo','Saúde',
 'Objetos','Pressa','Vergonha','Bichos'];
const COURSES={
  kana:{t:'Hiragana e Katakana',d:'~150 sinais · 15 unidades',n:'Os dois silabários, do zero'},
  core:{t:'N5 essencial',d:'48 kanji · 8 unidades',n:'Pula os 80 do 1º ano japonês'},
  full:{t:'N5 completo',d:'113 kanji · 19 unidades',n:'Inclui os kanji do 1º ano'},
  n4:{t:'JLPT N4',d:N4ALL.length+' kanji · '+Math.ceil(N4ALL.length/6)+' unidades',n:'O nível seguinte, depois do N5'},
  n3:{t:'JLPT N3',d:N3.length+' kanji · '+Math.ceil(N3.length/6)+' unidades',n:'Vocabulário de jornal e trabalho'},
  n2:{t:'JLPT N2',d:N2.length+' kanji · '+Math.ceil(N2.length/6)+' unidades',n:'Nível pré-avançado, textos formais'},
  n1:{t:'JLPT N1',d:N1.length+' kanji · '+Math.ceil(N1.length/6)+' unidades',n:'Topo do JLPT — em construção'},
  joyo:{t:'Jōyō · 2.136 kanji',d:'2.136 kanji · 356 unidades',n:'A lista completa de kanji de uso comum; conteúdo carregado e guardado para uso offline'}
};
const N2T=['Partidos','Governo','Reformas','Territórios','Comitês','Forças','Impostos','Comércio','Defesa',
 'Fronteiras','Cálculos','Transporte','Agricultura','Símbolos','Regiões','Encargos','Prêmios','Produção',
 'Técnicas','Retorno','Individual','Extremos','Guardar','Medidas','Formatos','Agulhas','Especialidade',
 'Vales','História','Degraus','Soldados','Conexões','Registros','Antigo','Pontes','Materiais','Bilhetes',
 'Bambu','Superar','Tratamento','Ensinar','Placas','Troncos','Aparência','Pureza','Perdas','Correio',
 'Expandir','Segredos','Camadas','Treino','Grupos','Aluguel','Mercadorias','Frescor','Margens','Traduzir',
 'Fogo','Corpo','Repartições','Cursos','Recomendar','Fartura','Manusear','Ocupar','Eventos','Contato',
 'Distância','Emprestar','Presentes','Vendas','Demanda','Resultados','Selar','Impressão','Espessura',
 'Cortante','Secar','Derreter','Tremores','Desastres','Socorro','Feridas','Realeza','Vassalos','Respeito',
 'Severidade','Tolerância','Nobreza','Tesouros','Raridades','Tamanhos','Inclinar','Esticar','Celebrar',
 'Festivais','Reverência','Monges','Túmulos','Ossos','Músculos','Peito','Pele','Sangue','Lágrimas',
 'Bolsas','Latas','Bastões','Redes','Pó','Sal','Areia','Cinzas','Cozinhar','Assar','Volumes','Rolos',
 'Capítulos','Palavras','Poesia','Teatro','Dança','Música','Espelhos','Brilho','Sombras','Fontes',
 'Lagos','Praias','Ondas','Marés','Rochas','Picos','Relva','Galhos','Raízes','Trigo','Feijão','Arroz',
 'Cultivo','Plantar','Pastoreio','Ovelhas','Porcos','Aves','Ovos','Leite','Insetos','Mosquitos','Abelhas',
 'Borboletas','Pássaros','Asas','Penas','Chifres','Garras','Boca','Órgãos','Estômago','Vísceras',
 'Circulação','Chão','Paredes','Prateleiras','Trancas','Muros','Poços','Valas','Ladeiras','Penhascos',
 'Cavernas','Colinas','Hortas','Brotos','Cerejeiras','Pinheiros','Flores','Bosques','Cavar','Construir',
 'Consertar','Tecer','Costura','Panos','Metais','Cobre','Aço','Lâminas','Arcos','Escudos','Explosivos',
 'Chamas','Calor','Gelo','Névoa','Trovões','Estrelas','Universo','Rastros','Cores','Tingir','Roxo',
 'Amarelo','Pérolas','Anéis','Delegacias','Navios','Mergulhar','Pesca','Conchas','Higiene','Pureza',
 'Elegância','Diversão','Competir','Ofícios','Colegas','Recrutar','Apoiar','Cuidar','Apresentar',
 'Tomar','Sinceridade','Lealdade','Gratidão','Consolar','Intensidade','Tentação','Esconder','Ânimo',
 'Declínio','Diagnóstico','Remédios','Licenças','Proibir','Punição','Processos','Leis','Contratos',
 'Julgar','Padrões','Cercar','Duplicar','Pares','Trocar','Rondar','Anexar','Reduzir','Conceitos',
 'Memória','Sabedoria','Habilidade','Comum','Luxo','Beleza','Esgotar','Escassez','Estações','Calendário',
 'Celebrar','Cerimônias','Funerais','Almas','Sagrado','Rezar','Templos','Palácios','Castelos','Bandeiras'];
const N3HUE=i=>`hsl(${(i*23)%360} 58% 46%)`;
let KANJI=CORE,UNITS=U8,BY={},UOF={};
function build(){
  let c=(S&&S.course)||'core';
  if(!COURSES[c])c='core';
  try{
    KANJI = c==='kana' ? KANA_LIST : c==='joyo' ? JOYO_LIST
      : c==='n1' ? N1 : c==='n2' ? N2 : c==='n3' ? N3
      : c==='n4' ? N4ALL : c==='full' ? CORE.concat(EXTRA) : CORE;
    BY={};KANJI.forEach((k,i)=>{k.i=i;BY[k.c]=k;});
    UNITS = c==='kana' ? kanaUnits()
      : (c==='n3'||c==='n2'||c==='n1')
      ? Array.from({length:Math.ceil(KANJI.length/6)},(_,i)=>({
          t:(c==='n1'?N1T:c==='n2'?N2T:N3T)[i]||('Bloco '+(i+1)),
          s:KANJI.slice(i*6,i*6+6).map(x=>x.m[0]).slice(0,3).join(', '),
          g:(c==='n3'?(N3G[i]||KANJI[i*6].c):KANJI[i*6].c),
          col:c==='n1'?`hsl(${(310+i*11)%360} 42% 40%)`:N3HUE(c==='n2'?i+7:i),
          k:KANJI.slice(i*6,i*6+6).map(x=>x.i)}))
      : c==='n4'
      ? Array.from({length:Math.ceil(KANJI.length/6)},(_,i)=>{
          const u=N4U[i];
          return {t:u?u.t:(N4T2[i-N4U.length]||('Bloco '+(i+1))),
            s:u?u.s:KANJI.slice(i*6,i*6+6).map(x=>x.m[0]).slice(0,3).join(', '),
            g:u?u.g:KANJI[i*6].c,col:u?u.col:N3HUE(i*2+11),
            k:KANJI.slice(i*6,i*6+6).map(x=>x.i)};})
      : c==='full'
        ? U19.map(([t,s,g,col,cs])=>({t,s,g,col,
            k:[...cs].map(x=>BY[x]?BY[x].i:-1).filter(i=>i>=0)}))
        : c==='joyo'
          ? Array.from({length:Math.ceil(KANJI.length/6)},(_,i)=>({
              t:'Jōyō · '+(i+1),
              s:KANJI.slice(i*6,i*6+6).map(x=>x.m[0]).slice(0,3).join(', '),
              g:KANJI[i*6]?KANJI[i*6].c:'漢',
              col:`hsl(${(120+i*9)%360} 34% 35%)`,
              k:KANJI.slice(i*6,i*6+6).map(x=>x.i)}))
          : U8;
  }catch(e){
    /* se a trilha escolhida falhar por qualquer motivo, cai no N5 base */
    console.error('build',e);
    S.course='core';KANJI=CORE;
    BY={};KANJI.forEach((k,i)=>{k.i=i;BY[k.c]=k;});
    UNITS=U8;
  }
  UOF={};UNITS.forEach((u,ui)=>u.k.forEach(i=>UOF[i]=ui));
  for(const x in _wc)delete _wc[x];      // cache de palavras montáveis
}

/* ────────── utils ────────── */
const $=s=>document.querySelector(s);
const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e;};
let RNG=Math.random;
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=(RNG()*(i+1))|0;[a[i],a[j]]=[a[j],a[i]];}return a;};
const pick=a=>a[(RNG()*a.length)|0];
function mul32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);
  t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function hsh(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
function seeded(sd,fn){const o=RNG;RNG=mul32(hsh(String(sd)));try{return fn();}finally{RNG=o;}}
const TICK=svg('<path d="m5 12.5 4.5 4.5L19 6.5"/>',3.4);
const CROSS=svg('<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',3.4);
const clamp=(v,a,b)=>v<a?a:v>b?b:v;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const LET=['A','B','C','D'];const DAY=864e5;
const mean=k=>k.m.join(' / ');
const reads=k=>[...k.on,...k.kun];
const romajis=k=>reads(k).map(r=>r.r.replace(/[()]/g,''));

/* ────────── idioma / i18n ────────── */
const I18N={
  pt:{'Trilha':'Trilha','Revisar':'Revisar','Traçar':'Traçar','Kanji':'Kanji','Social':'Social','Perfil':'Perfil','Configurações':'Configurações',
    'Trilha de estudo':'Trilha de estudo','Aparência':'Aparência','Som':'Som','Conta':'Conta','Notas':'Notas','Idioma':'Idioma',
    'Automático (sistema)':'Automático (sistema)','Português (Brasil)':'Português (Brasil)','Inglês':'Inglês',
    'Claro':'Claro','Escuro':'Escuro','Fonte dos kanji':'Fonte dos kanji','Gótica (padrão), arredondada ou serifada':'Gótica (padrão), arredondada ou serifada',
    'Tema':'Tema','Papel washi ou tinta sumi':'Papel washi ou tinta sumi','Efeitos':'Efeitos','Bipes de acerto e erro':'Bipes de acerto e erro',
    'Voz japonesa':'Voz japonesa','Usa a voz do seu aparelho':'Usa a voz do seu aparelho','Seu navegador não tem':'Seu navegador não tem',
    'Reconhecimento de fala':'Reconhecimento de fala','Disponível (funciona melhor no Chrome)':'Disponível (funciona melhor no Chrome)',
    'Não suportado aqui':'Não suportado aqui','ativo':'ativo','offline':'offline','Sincronizado':'Sincronizado','online':'online','Desconectar':'Desconectar',
    'Zerar progresso':'Zerar progresso','Tabelas de kana':'Tabelas de kana','Grade completa para consulta':'Grade completa para consulta',
    'Refazer a escolha inicial':'Refazer a escolha inicial','Adicionar à tela inicial':'Adicionar à tela inicial','Começar':'Começar','Voltar':'Voltar',
    'Treino livre':'Treino livre','Tudo em dia':'Tudo em dia','Trilhas':'Trilhas','Recorde':'Recorde','Dias no total':'Dias no total',
    'Aprender':'Aprender','Revisão':'Revisão','Treino de escrita':'Treino de escrita','Treino de escrita (6 sinais)':'Treino de escrita (6 sinais)',
    'Praticar o traçado':'Praticar o traçado','Significado':'Significado','Leitura':'Leitura','Vocabulário':'Vocabulário','Memória':'Memória',
    'Achar o kanji':'Achar o kanji','Traduzir':'Traduzir','Pesquisar':'Pesquisar','Biblioteca':'Biblioteca','Histórico':'Histórico'},
  en:{'Trilha':'Learn','Revisar':'Review','Traçar':'Write','Kanji':'Kanji','Social':'Social','Perfil':'Profile','Configurações':'Settings',
    'Trilha de estudo':'Study path','Aparência':'Appearance','Som':'Sound','Conta':'Account','Notas':'Notes','Idioma':'Language',
    'Automático (sistema)':'Automatic (system)','Português (Brasil)':'Portuguese (Brazil)','Inglês':'English',
    'Claro':'Light','Escuro':'Dark','Fonte dos kanji':'Kanji font','Gótica (padrão), arredondada ou serifada':'Gothic (default), rounded, or serif',
    'Tema':'Theme','Papel washi ou tinta sumi':'Washi paper or sumi ink','Efeitos':'Effects','Bipes de acerto e erro':'Correct/incorrect sounds',
    'Voz japonesa':'Japanese voice','Usa a voz do seu aparelho':'Uses your device voice','Seu navegador não tem':'Not available in your browser',
    'Reconhecimento de fala':'Speech recognition','Disponível (funciona melhor no Chrome)':'Available (works best in Chrome)',
    'Não suportado aqui':'Not supported here','ativo':'active','offline':'offline','Sincronizado':'Synced','online':'online','Desconectar':'Disconnect',
    'Zerar progresso':'Reset progress','Tabelas de kana':'Kana tables','Grade completa para consulta':'Complete reference grid',
    'Refazer a escolha inicial':'Restart initial choice','Adicionar à tela inicial':'Add to home screen','Começar':'Start','Voltar':'Back',
    'Treino livre':'Free practice','Tudo em dia':'All caught up','Trilhas':'Paths','Recorde':'Best','Dias no total':'Total days',
    'Aprender':'Learn','Revisão':'Review','Treino de escrita':'Writing practice','Treino de escrita (6 sinais)':'Writing practice (6 characters)',
    'Praticar o traçado':'Practice strokes','Significado':'Meaning','Leitura':'Reading','Vocabulário':'Vocabulary','Memória':'Memory',
    'Achar o kanji':'Find the kanji','Traduzir':'Translate','Pesquisar':'Search','Biblioteca':'Library','Histórico':'History'}
};
function lang(){
  const pref=S&&S.lang?S.lang:'auto';
  if(pref==='pt')return 'pt'; if(pref==='en')return 'en';
  /* Automático segue a ordem de preferência fornecida pelo dispositivo/navegador.
     Só cai no próximo idioma quando o anterior não é suportado pelo app. */
  const raw=[];
  if(navigator.languages&&navigator.languages.length)raw.push(...navigator.languages);
  if(navigator.language)raw.push(navigator.language);
  try{const intl=Intl.DateTimeFormat().resolvedOptions().locale;if(intl)raw.push(intl);}catch(e){}
  const langs=[...new Set(raw.map(x=>String(x||'').toLowerCase()))];
  for(const x of langs){
    if(x==='pt'||x.startsWith('pt-'))return 'pt';
    if(x==='en'||x.startsWith('en-'))return 'en';
  }
  return 'pt';
}
function t(x){const l=lang();return (I18N[l]&&I18N[l][x])||x;}

/* Tradução incremental da interface: o conteúdo dos kanjis permanece intacto. */
const DOM_EN={
  'Bem-vindo ao':'Welcome to','O caminho dos kanji, do zero até o N4 — com traçado de verdade, quizzes e revisão na hora certa.':'The path of kanji, from zero to N4 — with real stroke practice, quizzes, and review at the right time.',
  'Traçado conferido':'Verified writing','Cada traço é checado: posição, direção e ordem':'Every stroke is checked for position, direction, and order','Quiz que se adapta':'Adaptive quizzes','Errou? A pergunta volta pouco depois':'Missed it? The question comes back shortly after','Revisão espaçada':'Spaced review','O app te lembra pouco antes de você esquecer':'The app reminds you shortly before you forget',
  'COMEÇAR':'START','Começar':'Start','Passo 1':'Step 1','Passo 2 · Nível N5':'Step 2 · N5 level','Passo 3':'Step 3',
  'Por onde você quer começar?':'Where would you like to start?','Escolha o seu nível agora. Dá pra trocar quando quiser, e cada trilha guarda o próprio progresso.':'Choose your level now. You can change it anytime, and each path keeps its own progress.',
  'Nível N5':'N5 level','Nível N4':'N4 level','Nível N3':'N3 level','Nível N2':'N2 level','Nível N1':'N1 level','Hiragana e Katakana':'Hiragana and Katakana',
  'O começo de tudo. Números, família, tempo, direções e os verbos do dia a dia.':'The beginning. Numbers, family, time, directions, and everyday verbs.',
  'O passo seguinte. Verbos compostos, adjetivos e o vocabulário do cotidiano adulto.':'The next step. Compound verbs, adjectives, and adult everyday vocabulary.',
  'A ponte para o japonês adulto: jornal, trabalho, política e sentimentos.':'The bridge to adult Japanese: news, work, politics, and feelings.',
  'Pré-avançado: política, economia, notícias e textos formais de trabalho.':'Upper-intermediate: politics, economics, news, and formal work texts.',
  'O topo do JLPT. Literatura, jornalismo denso e nuances de registro. Começando aos poucos.':'The top of the JLPT. Literature, dense journalism, and register nuances. Take it step by step.',
  'Os dois silabários, do zero. Aspas ゛, os pequenininhos ゃゅょ e formação de palavras.':'The two syllabaries, from zero. Dakuten ゛, small ゃゅょ, and word formation.',
  'COMECE AQUI':'START HERE','iniciante':'beginner','intermediário':'intermediate','avançado':'advanced','pré-avançado':'upper-intermediate','do absoluto zero':'complete beginner',
  'Ver as tabelas de kana':'View kana tables','Os dois silabários':'The two syllabaries','Também entram no curso':'Also included in the course','Hiragana · ひらがな':'Hiragana · ひらがな','Katakana · カタカナ':'Katakana · カタカナ',
  'Palavras japonesas, partículas e terminações de verbo. Traços curvos e soltos.':'Japanese words, particles, and verb endings. Curved, flowing strokes.',
  'Palavras estrangeiras, nomes e onomatopeias. Traços retos e angulares.':'Foreign words, names, and onomatopoeia. Straight, angular strokes.',
  'Dakuten e handakuten':'Dakuten and handakuten','Yōon · os pequenininhos':'Yōon · the small ones','Sokuon · o つ pequeno':'Sokuon · the small つ','Vogal longa':'Long vowel','APRENDER OS KANA':'LEARN KANA',
  'Você já sabe os kanji do 1º ano?':'Do you already know the 1st-grade kanji?','No Japão, as crianças aprendem 80 kanji na primeira série. Muita gente que estuda por conta já viu esses.':'In Japan, children learn 80 kanji in first grade. Many self-learners have already seen these.',
  'Já sei o básico':'I know the basics','Quero aprender tudo':'I want to learn everything','Já viu esses kanji?':'Have you seen these kanji?','CONTINUAR':'CONTINUE',
  'Trilha completa!':'Path complete!','Bora começar?':'Ready to start?','Você está na etapa ':'You are on step ','Trilha relâmpago':'Quick practice','12 perguntas de tudo que você já viu':'12 questions from everything you have seen',
  'DE ':'OF ','Unidade ':'Unit ','completa':'complete','Testar e pular':'Test and skip','COMEÇAR AQUI':'START HERE','Termine as etapas anteriores primeiro':'Finish the previous steps first',
  'Revisar':'Review','Ainda não tem nada aqui':'Nothing here yet','Faça a primeira etapa da trilha. Os kanji aparecem aqui sozinhos, na hora certa de revisar.':'Complete the first step. Kanji will appear here automatically when it is time to review.',
  'kanji na fila':'kanji in the queue','A revisão chega pouco antes de você esquecer. É assim que fixa.':'Review arrives shortly before you forget. That is how it sticks.','Volte depois ou faça um treino livre pra reforçar.':'Come back later or do some free practice to reinforce it.',
  'Mapa de memória':'Memory map','fraco':'weak','forte':'strong','não visto':'not seen','Os que eu já sei':'What I already know',
  'Nada para traçar ainda':'Nothing to write yet','Faça a primeira etapa da trilha e os sinais aparecem aqui.':'Complete the first step and the characters will appear here.','Traçado guiado':'Guided writing',
  'Cada traço é conferido na hora:':'Every stroke is checked right away:','posição, direção e ordem':'position, direction, and order','Errou 3 vezes o mesmo traço, o app desenha ele pra você e segue.':'Miss the same stroke 3 times and the app will draw it for you, then continue.',
  'Treino de escrita (6 sinais)':'Writing practice (6 characters)','Desfazer':'Undo','Limpar':'Clear','SALVAR COMO AVATAR':'SAVE AS AVATAR','Apagar meu desenho':'Delete my drawing',
  'kanji, significado ou romaji':'kanji, meaning, or romaji','Todos · ':'All · ','Nada aqui':'Nothing here','Tenta outro termo.':'Try another term.',
  'Escolher avatar':'Choose avatar','Ofensiva':'Streak','XP total':'Total XP','Kanji':'Kanji','nível':'level','faltam':'remaining','nível máximo':'max level','Nome salvo':'Name saved',
  'Adicionar à tela inicial':'Add to home screen','Leve o KanjiDō com você':'Take KanjiDō with you','KanjiDō na tela inicial':'KanjiDō on your home screen','Acesse como um app, direto e sem procurar pelo navegador.':'Use it like an app, without looking for it in your browser.','Adicionar':'Add','Como instalar':'How to install',
  'Sincronizado':'Synced','Desconectar':'Disconnect','Zerar progresso':'Reset progress','Tabelas de kana':'Kana tables','Grade completa para consulta':'Complete reference grid','Refazer a escolha inicial':'Restart initial choice','Cada trilha guarda o próprio progresso.':'Each path keeps its own progress.',
  'Efeitos':'Effects','Bipes de acerto e erro':'Correct/incorrect sounds','Voz japonesa':'Japanese voice','Usa a voz do seu aparelho':'Uses your device voice','Reconhecimento de fala':'Speech recognition','Disponível (funciona melhor no Chrome)':'Available (works best in Chrome)','Não suportado aqui':'Not supported here',
  'Avatar salvo!':'Avatar saved!','Não deu pra salvar o desenho':'Could not save the drawing','Desenho apagado':'Drawing deleted','Algo travou ao montar a tela':'Something went wrong while building the screen','Nada foi perdido. Toque abaixo para recarregar a trilha.':'Nothing was lost. Tap below to reload the path.','RECARREGAR':'RELOAD','Voltar para o N5 base':'Back to base N5','Trilha N5 restaurada':'N5 path restored',
  'Idioma da interface':'Interface language','Usando o idioma do sistema':'Using system language','English enabled':'English enabled','Português (Brasil) ativado':'Portuguese (Brazil) enabled',
  'Estudar em dupla':'Study with a partner','Primeiro Passo':'First Step','Seis Pétalas':'Six Petals','Meio Caminho':'Halfway There','Curso Fechado':'Course Complete','Unidade Fechada':'Unit Complete','Caminho Inteiro':'Whole Path','Pincel Firme':'Steady Brush','Calígrafo':'Calligrapher','Voz Treinada':'Trained Voice','Chama Acesa':'Lit Flame','Uma Semana':'One Week','Um Mês Inteiro':'One Full Month','Constância':'Consistency','Sem Tropeçar':'No Stumbling','Nota Cheia':'Perfect Score','Mil Pontos':'One Thousand Points',
  'Concluir 1 etapa':'Complete 1 step','6 kanji aprendidos':'6 kanji learned','24 kanji aprendidos':'24 kanji learned','Todos os kanji da trilha':'All kanji in the path','1 unidade 100% completa':'1 unit 100% complete','Todas as unidades':'All units','10 kanji sem ajuda':'10 kanji without help','50 traçados feitos':'50 writing sessions','5 pronúncias certas':'5 correct pronunciations','3 dias seguidos':'3 days in a row','7 dias seguidos':'7 days in a row','30 dias seguidos':'30 days in a row','Praticar em 10 dias':'Practice on 10 days','20 acertos seguidos':'20 correct answers in a row','100% numa sessão':'100% in one session','Juntar 1000 XP':'Earn 1000 XP'
};
const PART3_EN={
  'Algo travou ao montar a tela':'Something went wrong while building this screen',
  'Nada foi perdido. Toque abaixo para recarregar a trilha.':'Nothing was lost. Tap below to reload the path.',
  'RECARREGAR':'RELOAD','Voltar para o N5 base':'Return to the N5 base','Trilha N5 restaurada':'N5 path restored',
  'Desenho apagado':'Drawing deleted','Desconectado':'Disconnected','Zerado':'Reset complete','Nome salvo':'Name saved',
  'Não deu pra salvar o desenho':'Could not save the drawing','Avatar salvo!':'Avatar saved!','Recarregando…':'Reconnecting…',
  'Tudo pronto!':'All set!','SQL copiado!':'SQL copied!','SQL copiado! Cole no editor.':'SQL copied! Paste it into the editor.',
  'Copie o texto abaixo':'Copy the text below','Preencha os dois campos':'Fill in both fields','Preencha URL e chave antes':'Fill in the URL and key first',
  'Código copiado!':'Code copied!','Código salvo no servidor!':'Code saved to the server!','A tabela não existe. Rode o SQL no Supabase.':'The table does not exist. Run the SQL in Supabase.',
  'Erro:':'Error:','Não deu. Confira sua conexão.':'Something went wrong. Check your connection.',
  'Digite o código':'Enter the code','Esse é o seu próprio código':'That is your own code','Código não existe no servidor. Peça pro seu amigo abrir a aba Social.':'Code not found on the server. Ask your friend to open the Social tab.',
  'O código tem 4 letras':'The code has 4 letters','Falha:':'Failure:','Não suportado aqui':'Not supported here',
  'Ative "Anonymous sign-ins" no Supabase':'Enable “Anonymous sign-ins” in Supabase','Biblioteca ainda carregando, tente de novo':'Library is still loading, try again',
  'Conectado!':'Connected!','Conexão':'Connection','Conectar':'Connect','Criar código':'Create code','Meu código':'My code','Adicionar amigo':'Add friend',
  'Social':'Social','Amigos':'Friends','Ranking':'Ranking','Sala':'Room','Criar sala':'Create room','Entrar na sala':'Join room','Código da sala':'Room code',
  'Sala criada':'Room created','Sala':'Room','passe o código pro seu amigo':'share the code with your friend','amigo':'friend','adicionado!':'added!',
  'Ranking global restaurado':'Global ranking restored','Só você aparece no ranking agora':'Only you appear on the ranking now',
  'Modo livre desligado':'Free mode disabled','Vidas infinitas e avanço liberado':'Infinite lives and progression unlocked','Você virou o gato secreto!':'You became the secret cat!',
  'Novo avatar disponível no seu perfil!':'New avatar unlocked in your profile!','Boa jornada! 頑張って':'Have a great journey! 頑張って',
  'etapas liberadas — bons estudos!':'steps unlocked — happy studying!','etapas anteriores':'previous steps','Unidade não encontrada':'Unit not found','Unidade vazia':'Empty unit',
  'Faça a primeira etapa antes':'Complete the first step first','Não foi dessa. Tenta de novo':'Not quite. Try again','Não deu pra abrir o microfone':'Could not open the microphone',
  'Este navegador não reconhece voz':'This browser does not support speech recognition','Sai agora? O que você já respondeu fica salvo.':'Exit now? What you have answered is saved.',
  'Sair agora? O que você já respondeu fica salvo.':'Exit now? What you have answered is saved.',
  'Testar e pular':'Test and skip','Termine as etapas anteriores primeiro':'Finish the previous steps first',
  'Refazer a escolha vai REDEFINIR as etapas da trilha que você escolher.':'Restarting the choice will RESET the steps of the path you choose.',
  'Os kanji aprendidos e o XP continuam salvos. Continuar?':'Learned kanji and XP will remain saved. Continue?',
  'Recomeça a trilha escolhida do ponto novo':'Restarts the selected path from a fresh point','Cada trilha guarda o próprio progresso.':'Each path keeps its own progress.',
  'ativada':'enabled','etapas':'steps','dias':'days','dia':'day','seguidos':'in a row','Atual':'Current','Recorde':'Best','Dias no total':'Total days',
  'Não quebre a corrente.':'Keep the streak going.','Faça uma etapa hoje pra acender a chama.':'Complete a step today to light the flame.',
  'Nenhum treino neste mês ainda.':'No practice this month yet.','conquistados em':'earned in','Janeiro':'January','Fevereiro':'February','Março':'March','Abril':'April','Maio':'May','Junho':'June','Julho':'July','Agosto':'August','Setembro':'September','Outubro':'October','Novembro':'November','Dezembro':'December',
  'Código copiado':'Code copied','Próximo':'Next','Anterior':'Previous','Fechar':'Close','Cancelar':'Cancel','Confirmar':'Confirm','Salvar':'Save','Editar':'Edit','Apagar':'Delete','Continuar':'Continue',
  'Configurações e dados':'Settings and data','Dados':'Data','Preferências':'Preferences','Privacidade':'Privacy','Sobre':'About','Ajuda':'Help','Idioma da interface':'Interface language','Automático':'Automatic',
  'Perfil':'Profile','Estudante':'Student','Seu nome':'Your name','Avatar':'Avatar','Meu desenho':'My drawing','feito por você':'made by you','Apagar meu desenho':'Delete my drawing',
  'Adicionar':'Add','Como instalar':'How to install','Adicionar à tela inicial':'Add to home screen','KanjiDō na tela inicial':'KanjiDō on your home screen','Acesse como um app, direto e sem procurar pelo navegador.':'Use it like an app, without searching through the browser.',
  'No Safari, toque em Compartilhar e depois em “Adicionar à Tela de Início”.':'In Safari, tap Share, then “Add to Home Screen”.',
  'No Chrome, abra o menu ⋮ e escolha “Adicionar à tela inicial” ou “Instalar app”.':'In Chrome, open the ⋮ menu and choose “Add to Home screen” or “Install app”.',
  'Use o menu do navegador para procurar “Instalar” ou “Adicionar à tela inicial”.':'Use your browser menu to find “Install” or “Add to Home screen”.',
  'Trilha completa!':'Path complete!','Bora começar?':'Ready to start?','Treino livre':'Free practice','Tudo em dia':'All caught up',
  '12 perguntas de tudo que você já viu':'12 questions from everything you have seen','Aprendizado':'Learning','Progresso':'Progress','Hoje':'Today','Agora':'Now','Depois':'Later',
  'Acertou':'Correct','Errou':'Incorrect','Resposta':'Answer','Ver resposta':'Show answer','Próximo kanji':'Next kanji','Repetir':'Repeat','Ouvir':'Listen','Falar':'Speak','Escrever':'Write',
  'Traçado':'Stroke order','Traços':'Strokes','Ordem dos traços':'Stroke order','Exemplo':'Example','Exemplos':'Examples','Frase':'Sentence','Frases':'Sentences',
  'Radical':'Radical','Radicais':'Radicals','Palavra':'Word','Palavras':'Words','Partícula':'Particle','Partículas':'Particles','Dica':'Tip','Dicas':'Tips','Explicação':'Explanation',
  'Sem resultados':'No results','Nenhum kanji encontrado':'No kanji found','Digite para pesquisar':'Type to search','Limpar busca':'Clear search','Todas':'All','Favoritos':'Favorites','Recentes':'Recent',
  'Progresso salvo':'Progress saved','Treino salvo':'Practice saved','Revisão salva':'Review saved','Você pode continuar de onde parou.':'You can continue where you left off.',
  'Hoje você não tem revisões pendentes.':'You have no reviews due today.','Nenhuma revisão pendente':'No reviews due','Muito bem!':'Well done!','Continue assim':'Keep it up',
  'Dias no total':'Total days','XP conquistados':'XP earned','Sessões':'Sessions','Acertos':'Correct answers','Precisão':'Accuracy','Traçados':'Writing sessions',
  'Kana':'Kana','Tabelas de kana':'Kana tables','Hiragana':'Hiragana','Katakana':'Katakana','Consulta':'Reference','N5':'N5','N4':'N4','N3':'N3','N2':'N2','N1':'N1','Jōyō':'Jōyō',
  'Jōyō · 2.136 kanji':'Jōyō · 2,136 kanji','2.136 kanji carregados':'2,136 kanji loaded','dados Jōyō disponíveis para completar a lista':'Jōyō data available to complete the list',
  'Seis trilhas, do zero ao N1: os dois silabários e os kanji do':'Six paths, from zero to N1: the two syllabaries and kanji from','com traçado conferido e revisão espaçada.':'with verified stroke practice and spaced review.',
  'Os traços vêm do':'Stroke data comes from','e ficam salvos no aparelho depois da primeira vez.':'and is saved on your device after the first use.',
  'Desconectado':'Disconnected','Sincronizado':'Synced','Código':'Code','online':'online','offline':'offline','ativo':'active','off':'off',
  'Using system language':'Using system language','Português (Brasil) ativado':'Portuguese (Brazil) enabled','English enabled':'English enabled'
};
Object.assign(DOM_EN,PART3_EN);
const PART4_EN={
  'Modo escuro':'Dark mode','Modo claro':'Light mode','Seguir o sistema':'Follow system','Idioma':'Language','Selecionar idioma':'Select language',
  'Português':'Portuguese','Inglês':'English','Automático (sistema)':'Automatic (system)','Idioma detectado pelo aparelho':'Language detected from your device',
  'Configurações salvas':'Settings saved','Preferências salvas':'Preferences saved','Alterações salvas':'Changes saved','Restaurar padrão':'Restore defaults',
  'Não há nada para mostrar':'Nothing to show','Ainda não há dados':'No data yet','Nenhum resultado':'No results','Tente outra busca':'Try another search',
  'Buscar kanji':'Search kanji','Buscar por significado':'Search by meaning','Buscar por leitura':'Search by reading','Buscar por palavra':'Search by word',
  'Filtros':'Filters','Filtro':'Filter','Aplicar filtros':'Apply filters','Remover filtros':'Clear filters','Ordenar':'Sort','Mais recentes':'Most recent','Mais antigos':'Oldest',
  'Mostrar todos':'Show all','Mostrar aprendidos':'Show learned','Mostrar não vistos':'Show unseen','Somente favoritos':'Favorites only',
  'Você ainda não começou':'You have not started yet','Comece pela primeira unidade':'Start with the first unit','Nenhum kanji para revisar':'No kanji to review',
  'Revisões de hoje':'Today’s reviews','Revisões restantes':'Reviews remaining','Revisões concluídas':'Reviews completed','Pronto por hoje':'Done for today',
  'Começar revisão':'Start review','Continuar revisão':'Continue review','Revisar agora':'Review now','Revisar depois':'Review later','Pular':'Skip',
  'Você acertou.':'You got it right.','Não era essa.':'That was not the one.','Sua escolha não era a certa.':'Your choice was not correct.',
  'Veja abaixo.':'See below.','Veja opção por opção abaixo.':'See each option below.','Tente novamente':'Try again','Quase':'Almost','Muito bem':'Very good',
  'Resposta correta':'Correct answer','Resposta errada':'Wrong answer','Sua resposta':'Your answer','Resposta esperada':'Expected answer','Sem resposta':'No answer',
  'Próximo':'Next','Anterior':'Previous','Finalizar':'Finish','Continuar':'Continue','Sair':'Exit','Fechar':'Close','Voltar':'Back','Repetir':'Try again',
  'Traçar agora':'Write now','Começar a traçar':'Start writing','Apagar traçado':'Clear drawing','Novo traçado':'New drawing','Traçado correto':'Correct stroke order',
  'Traçado incorreto':'Incorrect stroke order','Toque para ouvir':'Tap to listen','Ouvir pronúncia':'Listen to pronunciation','Gravar pronúncia':'Record pronunciation',
  'Você falou':'You said','Pronúncia esperada':'Expected pronunciation','Não captei':'I could not hear you','Tente falar mais perto':'Try speaking closer',
  'Ouvi':'Heard','Toque no microfone':'Tap the microphone','Ouvindo…':'Listening…','Fale agora':'Speak now','Silêncio':'Silence','Não ouvi nada':'I did not hear anything',
  'Microfone':'Microphone','Permitir microfone':'Allow microphone','Microfone bloqueado':'Microphone blocked','Verifique as permissões do navegador':'Check your browser permissions',
  'Seu navegador não permite reconhecimento de voz':'Your browser does not allow speech recognition','Tente usar o Chrome':'Try using Chrome',
  'Social':'Social','Meus amigos':'My friends','Adicionar amigo':'Add friend','Amigo adicionado':'Friend added','Remover amigo':'Remove friend','Copiar código':'Copy code',
  'Ranking vazio':'Empty ranking','Ninguém aparece no ranking ainda.':'No one appears on the ranking yet.','Sua posição':'Your rank','Pontuação':'Score','Posição':'Rank',
  'Top 50 por XP':'Top 50 by XP','XP':'XP','Hoje':'Today','Esta semana':'This week','Este mês':'This month','Todos os tempos':'All time',
  'Criar sala':'Create room','Entrar na sala':'Join room','Sala':'Room','Código da sala':'Room code','Sala criada':'Room created','Sala não encontrada':'Room not found',
  'Copiar código da sala':'Copy room code','Esperando jogadores':'Waiting for players','Você está sozinho nesta sala':'You are alone in this room','Sair da sala':'Leave room',
  'Perfil':'Profile','Seu nome':'Your name','Salvar nome':'Save name','Escolher avatar':'Choose avatar','Avatar salvo!':'Avatar saved!','Nome salvo':'Name saved',
  'Conta':'Account','Conexão':'Connection','Conectar':'Connect','Desconectar':'Disconnect','Conectado!':'Connected!','Desconectado':'Disconnected',
  'Sincronizar':'Sync','Sincronizado':'Synced','Sincronização':'Sync','Sincronização automática':'Automatic sync','Última sincronização':'Last sync',
  'Dados locais':'Local data','Dados da conta':'Account data','Exportar dados':'Export data','Importar dados':'Import data','Apagar todos os dados':'Delete all data',
  'Tem certeza?':'Are you sure?','Esta ação não pode ser desfeita.':'This action cannot be undone.','Cancelar':'Cancel','Confirmar':'Confirm','Salvar':'Save',
  'Excluir':'Delete','Apagar':'Delete','Editar':'Edit','Restaurar':'Restore','Zerar progresso':'Reset progress','Progresso zerado':'Progress reset',
  'Sobre o Kanjidō':'About Kanjidō','Ajuda':'Help','Como usar':'How to use','Privacidade':'Privacy','Termos':'Terms','Versão':'Version','Criado por':'Created by',
  'Instalar app':'Install app','Instalar agora':'Install now','App instalado':'App installed','Adicionar à tela inicial':'Add to home screen','Abrir como app':'Open as an app',
  'Acesse como um app, direto e sem procurar pelo navegador.':'Use it like an app, without searching through the browser.',
  'Você pode estudar offline depois da primeira carga.':'You can study offline after the first load.','Atualização disponível':'Update available','Atualizar agora':'Update now','Atualizado':'Updated',
  'Carregando…':'Loading…','carregando…':'loading…','Aguarde…':'Please wait…','Algo deu errado':'Something went wrong','Tente de novo':'Try again',
  'Sem conexão':'No connection','Você está offline':'You are offline','Não foi possível carregar':'Could not load','Recarregar página':'Reload page','Recarregar':'Reload',
  'Unidade':'Unit','Unidades':'Units','Etapa':'Step','Etapas':'Steps','Nível':'Level','Níveis':'Levels','Lição':'Lesson','Lições':'Lessons',
  'Kanji aprendidos':'Kanji learned','Kanji vistos':'Kanji seen','Kanji restantes':'Kanji remaining','Kanji estudados':'Kanji studied','Kanji dominados':'Kanji mastered',
  'Progresso':'Progress','Progresso geral':'Overall progress','Porcentagem concluída':'Completion','Conclusão':'Completion','Meta':'Goal','Metas':'Goals',
  'Sequência':'Streak','Recorde':'Best streak','Dias seguidos':'Days in a row','Sessão':'Session','Sessões':'Sessions','Tempo de estudo':'Study time',
  'Acertos':'Correct answers','Erros':'Mistakes','Precisão':'Accuracy','Tentativas':'Attempts','Traçados':'Writing sessions','Pronúncias':'Pronunciations',
  'Memória':'Memory','Mapa de memória':'Memory map','Fraco':'Weak','Forte':'Strong','Não visto':'Not seen','Aprendido':'Learned','Dominado':'Mastered',
  'Significados':'Meanings','Leituras':'Readings','Vocabulário':'Vocabulary','Exemplos':'Examples','Frases':'Sentences','Notas':'Notes','Dicas':'Tips','Explicações':'Explanations',
  'Nenhuma nota ainda':'No notes yet','Adicionar nota':'Add note','Salvar nota':'Save note','Nota salva':'Note saved','Nota apagada':'Note deleted',
  'Favoritar':'Add to favorites','Desfavoritar':'Remove from favorites','Adicionado aos favoritos':'Added to favorites','Removido dos favoritos':'Removed from favorites',
  'Jōyō · 2.136 kanji':'Jōyō · 2,136 kanji','Todos os 2.136 kanji':'All 2,136 kanji','Progresso da lista Jōyō':'Jōyō list progress',
  'Trilha completa':'Path complete','Unidade completa':'Unit complete','Etapa concluída':'Step complete','Tudo em dia':'All caught up','Bora começar?':'Ready to start?',
  'Nova conquista':'New achievement','Parabéns!':'Congratulations!','Bom trabalho!':'Good work!','Continue assim':'Keep it up','Você está evoluindo':'You are improving',
  'Hoje não':'Not today','Depois':'Later','Agora':'Now','Mais tarde':'Later','Começar agora':'Start now','Começar do zero':'Start from scratch'
};
Object.assign(DOM_EN,PART4_EN);

/* Parte 5: textos de borda que aparecem em modais, erros e ações avançadas. */
const PART5_EN={
  'Código de acesso':'Access code','Digite o código de 4 dígitos.':'Enter the 4-digit code.',
  'Modo livre ativado':'Free mode enabled','Modo livre desativado':'Free mode disabled','Vidas infinitas e avanço liberado':'Unlimited lives and unlocked progression',
  'Modo livre desligado':'Free mode turned off','Só você aparece no ranking':'Only you appear on the leaderboard','Ranking global restaurado':'Global leaderboard restored',
  'Avisos ocultados':'Notices hidden','Gato Secreto DESBLOQUEADO!':'Secret Cat UNLOCKED!','Gato Secreto reativado':'Secret Cat reactivated',
  'Novo avatar disponível no seu perfil!':'New avatar available on your profile!','Você virou o gato secreto!':'You became the secret cat!',
  'Código inválido':'Invalid code','Desativar modo livre':'Turn off free mode',
  'Com o modo livre: vidas infinitas, botão para pular perguntas e para concluir a lição na hora.':'With free mode: unlimited lives, a button to skip questions, and a button to finish the lesson immediately.',
  'Algo travou ao montar a tela':'Something went wrong while building the screen','Nada foi perdido. Toque abaixo para recarregar a trilha.':'Nothing was lost. Tap below to reload the path.',
  'Voltar para o N5 base':'Back to the base N5','Trilha N5 restaurada':'N5 path restored','Trilha N5 restaurada':'N5 path restored',
  'Aprender ${n} kanji':'Learn ${n} kanji','Quiz de significado':'Meaning quiz','Quiz de leitura':'Reading quiz','Escrever os ${n}':'Write the ${n}',
  'Formar palavras':'Build words','Vocabulário':'Vocabulary','Falar em voz alta':'Speak aloud','Prova da unidade':'Unit test',
  'Complete as etapas anteriores primeiro':'Complete the previous steps first','Faça a primeira etapa da trilha':'Complete the first step of the path',
  'Trilha relâmpago':'Quick practice','Os 6 kanji':'The 6 kanji','Nenhuma revisão pendente':'No reviews due',
  'Você não tem nada para revisar agora.':'You have nothing to review right now.','Volte mais tarde.':'Come back later.',
  'Você está na etapa':'You are on step','de':'of','completa':'complete','incompleta':'incomplete',
  'Acerto':'Correct','Erro':'Wrong','Acerto geral':'Overall accuracy','Pergunta':'Question','Perguntas':'Questions',
  'Escolha uma resposta':'Choose an answer','Selecione o kanji correto':'Select the correct kanji','Selecione a leitura correta':'Select the correct reading',
  'Veja a resposta':'See the answer','Mostrar resposta':'Show answer','Esconder resposta':'Hide answer','Continuar estudando':'Keep studying',
  'Você terminou esta sessão.':'You finished this session.','Sessão concluída':'Session complete','Pontuação final':'Final score',
  'Acertos seguidos':'Consecutive correct answers','Você acertou':'You got it right','Você errou':'You got it wrong',
  'Resposta não encontrada':'Answer not found','Tente novamente.':'Try again.','Boa!':'Nice!','Quase!':'Almost!',
  'Salvar progresso':'Save progress','Progresso salvo':'Progress saved','Não foi possível salvar':'Could not save','Tente novamente mais tarde':'Try again later',
  'Sincronização concluída':'Sync complete','Falha na sincronização':'Sync failed','Última atualização':'Last updated',
  'Nenhum dado para exportar':'No data to export','Importação concluída':'Import complete','Falha na importação':'Import failed','Arquivo inválido':'Invalid file',
  'Os dados importados substituirão os dados locais atuais.':'Imported data will replace your current local data.','Deseja continuar?':'Do you want to continue?',
  'Excluir dados locais':'Delete local data','Todos os seus dados serão apagados deste dispositivo.':'All your data will be deleted from this device.',
  'Dados apagados':'Data deleted','Não foi possível apagar':'Could not delete','Restaurar configurações':'Restore settings',
  'Preferências restauradas':'Preferences restored','Configuração padrão':'Default setting','Alterações aplicadas':'Changes applied',
  'Toque para continuar':'Tap to continue','Deslize para continuar':'Swipe to continue','Pressione Enter para continuar':'Press Enter to continue',
  'Sem suporte neste dispositivo':'Not supported on this device','Permissão necessária':'Permission required','Permissão negada':'Permission denied',
  'Ative a permissão nas configurações do navegador.':'Enable the permission in your browser settings.','Recarregar agora':'Reload now',
  'Conexão indisponível':'Connection unavailable','Tentando novamente…':'Trying again…','Não foi possível conectar':'Could not connect',
  'Entrar sem conta':'Continue without an account','Criar conta':'Create account','Conta opcional':'Account optional','Usar localmente':'Use locally',
  'Sua conta não é necessária para estudar.':'You do not need an account to study.','Sincronize entre dispositivos quando quiser.':'Sync across devices whenever you want.',
  'Nome de usuário':'Username','E-mail':'Email','Senha':'Password','Entrar':'Sign in','Sair':'Sign out','Criar':'Create',
  'Não conectado':'Not connected','Conectado':'Connected','Conectar agora':'Connect now','Desconectar agora':'Disconnect now',
  'Código copiado':'Code copied','Copiado para a área de transferência':'Copied to clipboard','Não foi possível copiar':'Could not copy',
  'Buscar':'Search','Filtrar':'Filter','Ordenar':'Sort','Limpar filtros':'Clear filters','Aplicar filtros':'Apply filters',
  'Nenhum resultado':'No results','Resultados':'Results','Resultado':'Result','Correspondências':'Matches',
  'Mais novos':'Newest','Mais antigos':'Oldest','Mais relevantes':'Most relevant','Ordem alfabética':'Alphabetical order',
  'Todos':'All','Somente aprendidos':'Learned only','Somente não vistos':'Unseen only','Somente favoritos':'Favorites only',
  'Selecionar tudo':'Select all','Desmarcar tudo':'Clear selection','Selecionado':'Selected','selecionados':'selected',
  'Nota':'Note','Nota opcional':'Optional note','Escreva uma nota…':'Write a note…','Editar nota':'Edit note','Excluir nota':'Delete note',
  'Favorito':'Favorite','Favoritado':'Added to favorites','Removido dos favoritos':'Removed from favorites',
  'Estatísticas':'Statistics','Resumo':'Overview','Detalhes':'Details','Atividade':'Activity','Calendário':'Calendar',
  'Hoje':'Today','Ontem':'Yesterday','Anteontem':'Day before yesterday','Esta semana':'This week','Este mês':'This month',
  'Últimos 7 dias':'Last 7 days','Últimos 30 dias':'Last 30 days','Total':'Total','Média':'Average','Máximo':'Maximum','Mínimo':'Minimum',
  'dia':'day','dias':'days','hora':'hour','horas':'hours','minuto':'minute','minutos':'minutes','segundo':'second','segundos':'seconds',
  'Nível atual':'Current level','Próximo nível':'Next level','Nível máximo':'Max level','Faltam':'Remaining','Restam':'Remaining',
  'Progresso do curso':'Course progress','Progresso da unidade':'Unit progress','Progresso da etapa':'Step progress',
  'Concluído':'Completed','Em andamento':'In progress','Bloqueado':'Locked','Disponível':'Available','Novo':'New',
  'Começar unidade':'Start unit','Retomar unidade':'Resume unit','Repetir unidade':'Repeat unit','Repetir exercício':'Repeat exercise',
  'Próxima unidade':'Next unit','Unidade anterior':'Previous unit','Escolher outra trilha':'Choose another path',
  'Trilha atual':'Current path','Mudar trilha':'Change path','Jōyō · 2.136 kanji':'Jōyō · 2,136 kanji',
  'Conteúdo completo':'Complete content','Base de estudo':'Study base','Lista oficial':'Official list','Dados carregados':'Data loaded',
  'Ainda faltam':'Still remaining','kanji restantes':'kanji remaining','kanji aprendidos':'kanji learned','kanji vistos':'kanji seen',
  'Revisão espaçada':'Spaced repetition','Frequência de revisão':'Review frequency','Próxima revisão':'Next review',
  'Agora':'Now','Depois':'Later','Em breve':'Coming soon','Indisponível':'Unavailable','Em construção':'Under construction'
};
Object.assign(DOM_EN,PART5_EN);

/* Parte 6: conteúdo de estudo — primeiras lições, avatares e definições/mnemônicos. */
const PART6_EN={
  'Máscara de raposa':'Fox mask','Boneco da persistência':'Persistence doll','Máscara de ogro':'Ogre mask','Carpa da perseverança':'Carp of perseverance','Cão-guaxinim travesso':'Mischievous raccoon dog','Máscara do espírito':'Spirit mask','Dragão das nuvens':'Cloud dragon','Máscara de nō':'Noh mask','Leão-guardião':'Guardian lion','Bebê urso':'Bear cub','Cãozinho feliz':'Happy puppy','Sábio da noite':'Night sage',
  'Desbloqueado — código 1357':'Unlocked — code 1357','feito por você':'made by you',
  'mãe (de outra pessoa)':'someone else\'s mother','pátria':'homeland','irmão mais velho':'older brother','irmãos':'siblings','irmã mais velha':'older sister','irmãs':'sisters','irmão mais novo':'younger brother','discípulo':'disciple','irmã mais nova':'younger sister','ainda não':'not yet','outra mão':'other hand','braço que recolhe':'reaching arm','o quê':'what','possível':'possible','que horas':'what time','reunião':'meeting','santuário':'shrine','país':'country','nação':'nation','agora':'now','esta semana':'this week','uma hora':'one hour','às vezes':'sometimes','portão':'gate','chapéu':'hat','semana que vem':'next week','pássaro':'bird','que dia da semana':'what day of the week','traço':'stroke','manhã':'morning','traços':'strokes','atrás':'behind','depois / atrás':'after / behind','adivinhação':'divination','árvore':'tree','Tóquio':'Tokyo','grãos':'grains','língua':'tongue','dicionário':'dictionary','relâmpago':'lightning','idioma':'language','japonês':'Japanese','inglês':'English','estação':'station','em frente à estação':'in front of the station','ensino médio':'high school','segurança':'safety','de pé':'standing','canção':'song','verão':'summer','desenho/traço':'drawing/stroke','água':'water','lua/mês':'moon/month','céu/vazio':'sky/empty','criança/filho':'child/son','pé/bastar':'foot/to be enough','casa/família':'house/family','instituição':'institution','começar':'to begin','província':'prefecture','indústria/obra':'industry/construction','salão/prédio':'hall/building','salão':'hall','tema/título':'topic/title','carvão':'charcoal','família/tribo':'family/tribe','direção/modo':'direction/manner','esforço/estudo':'effort/study',
  'Dois traços cruzados como os <b>braços abertos do pai</b> te dando um abraço. O X no topo é o bigodão dele.':'Two crossed strokes like <b>father’s open arms</b> giving you a hug. The X at the top is his big mustache.',
  'Os <b>dois pontinhos no meio</b> são os seios que amamentam. É quase igual a 毎 (cada), mas ali os pontos viram um traço.':'The <b>two little dots in the middle</b> are the breasts that nurse. It is almost the same as 毎 (every), but there the dots become a stroke.',
  'Uma <b>boca 口 em cima de duas pernas 儿</b>. É o irmão mais velho andando por aí dando ordem com a boca grande.':'A <b>mouth 口 above two legs 儿</b>. It is the older brother walking around giving orders with his big mouth.',
  'A <b>mulher 女 que já vai sozinha ao mercado 市</b>. Só a irmã mais velha tem essa liberdade.':'The <b>woman 女 who can already go to the market 市 alone</b>. Only the older sister has that freedom.',
  'Uma <b>fita enrolada num poste</b>, de cima a baixo. O caçula fica "amarrado", ainda não sai sozinho.':'A <b>ribbon wrapped around a post</b>, from top to bottom. The youngest stays “tied up” and cannot go out alone yet.',
  '<b>Mulher 女 + 未 (ainda não)</b>. A menina que <b>ainda não</b> cresceu. A irmã mais velha 姉 tem 市 no lugar do 未.':'<b>Woman 女 + 未 (not yet)</b>. The girl who has <b>not grown up yet</b>. Older sister 姉 has 市 instead of 未.',
  '<b>Duas mãos se cruzando</b> num aperto firme. O 又 é literalmente uma mão direita.':'<b>Two hands crossing</b> in a firm handshake. 又 is literally a right hand.',
  '<b>Espiga de arroz 禾 + braço curvado 厶</b> puxando para si. "Esse arroz é meu." Daí veio "eu" e "privado".':'<b>Rice plant 禾 + curved arm 厶</b> pulling it toward itself. “This rice is mine.” That led to “I” and “private.”',
  'Uma <b>pessoa 亻 com um gancho 可 entalado na garganta</b>. Engasgada de dúvida, só sai "o quê?!".':'A <b>person 亻 with a hook 可 stuck in its throat</b>. Choked by doubt, all that comes out is “what?!”',
  'Um <b>telhado 𠆢 cobrindo gente 云</b> reunida. Quase igual a 今 (agora): a diferença é o que fica sob o telhado.':'A <b>roof 𠆢 covering people 云</b> gathered together. Almost like 今 (now): the difference is what sits under the roof.',
  '<b>Altar 礻 + terra 土</b>, o santuário no chão sagrado. Hoje também é "empresa", onde muita gente passa o dia rezando por folga.':'<b>Altar 礻 + earth 土</b>, a shrine on sacred ground. Today it can also mean “company,” where many people spend the day praying for time off.',
  'Uma <b>muralha 囗 protegendo o jade 玉</b>, o tesouro do rei. Fronteira mais tesouro dá país.':'A <b>wall 囗 protecting jade 玉</b>, the king’s treasure. Border plus treasure gives “country.”',
  '<b>Telhado 𠆢 cobrindo o instante</b>. Comparado com 会, o 今 é magrinho embaixo: o agora é curto e passa voando.':'<b>A roof 𠆢 covering the instant.</b> Compared with 会, 今 is thin underneath: the present is brief and flies by.',
  '<b>Sol 日 + templo 寺</b>. Era o sino do templo que dizia a hora, conforme o sol andava no céu.':'<b>Sun 日 + temple 寺</b>. The temple bell used to tell the time as the sun moved across the sky.',
  '<b>八 (separar) + 刀 (faca)</b>: cortar em pedaços. Dividir a hora dá <b>minuto</b>. Dividir uma ideia até clarear dá <b>entender</b>.':'<b>八 (separate) + 刀 (knife)</b>: cut into pieces. Dividing an hour gives a <b>minute</b>. Breaking down an idea until it is clear gives <b>understand</b>.',
  'O <b>sol 日 espiando pela fresta do portão 門</b>. Aquele espacinho entre as duas folhas da porta.':'The <b>sun 日 peeking through the gate 門</b>. That little space between the two door panels.',
  'Igualzinho a <b>母 (mãe)</b>, só que com um chapéu em cima e os pontos virando traço. Lembra: a mãe faz tudo <b>todo</b> dia.':'Just like <b>母 (mother)</b>, but with a hat on top and the dots turned into a stroke. Remember: mother does everything <b>every</b> day.',
  '<b>Caminhar 辶 + volta completa 周</b>. A semana é o ciclo que dá a volta e começa de novo.':'<b>Walk 辶 + complete cycle 周</b>. A week is a cycle that comes back around and starts again.',
  '<b>Sol 日 + asas 羽 + pássaro 隹</b>. Os dias voam. É o kanji mais comprido do N5, 18 traços, vale ir devagar.':'<b>Sun 日 + wings 羽 + bird 隹</b>. The days fly by. This is the longest N5 kanji, with 18 strokes, so take it slowly.',
  'É o <b>牛 (vaca) sem o chifrinho esquerdo</b>. Ao meio-dia a vaca está tão parada no sol que nem chifre parece ter.':'It is <b>牛 (cow) without the left little horn</b>. At noon the cow stands so still in the sun that it hardly seems to have a horn.',
  '<b>Chifrinhos 丷 + carne 月 + faca 刂</b>. Cortar o que está na frente pra abrir caminho.':'<b>Little horns 丷 + flesh 月 + knife 刂</b>. Cut what is in front to clear the way.',
  '<b>Passos 彳 + fio 幺 + pé arrastando 夂</b>. Quem anda arrastando o pé fica pra trás.':'<b>Steps 彳 + thread 幺 + dragging foot 夂</b>. Whoever drags their feet falls behind.',
  '<b>Entardecer 夕 + adivinhação 卜</b>. Ler a sorte tinha que ser do lado de fora, à noite, longe de casa.':'<b>Dusk 夕 + divination 卜</b>. Fortune telling had to be done outside at night, away from home.',
  'O <b>sol 日 nascendo atrás de uma árvore 木</b>. A imagem é literal: o sol nasce no leste.':'The <b>sun 日 rising behind a tree 木</b>. The image is literal: the sun rises in the east.',
  'Um <b>ninho onde o pássaro volta</b> quando o sol se põe. E o sol se põe no oeste. Cuidado pra não confundir com 四.':'A <b>nest where the bird returns</b> when the sun sets. And the sun sets in the west. Be careful not to confuse it with 四.',
  'Uma <b>tenda com uma planta crescendo dentro</b>, virada pro sul. No Japão é o lado quente, que pega sol o dia todo.':'A <b>tent with a plant growing inside</b>, facing south. In Japan it is the warm side, getting sun all day.',
  '<b>Duas pessoas de costas uma pra outra</b>, encolhidas de frio. No norte ninguém se olha, todo mundo tremendo.':'<b>Two people back to back</b>, huddled from the cold. In the north no one looks at each other; everyone is shivering.',
  'Um <b>ancião de cabelo comprido</b> apoiado na bengala. Cabelo longo é muito tempo vivido, e por isso ele virou o chefe.':'An <b>elder with long hair</b> leaning on a cane. Long hair means many years lived, so he became the chief.',
  '<b>夕 (noite) duas vezes</b>. Noite após noite após noite: são muitas. O contrário de 少 (pouco).':'<b>夕 (night) twice</b>. Night after night after night: that is many. The opposite of 少 (few).',
  'Um <b>cruzamento de duas ruas</b> visto de cima. Você escolhe um caminho e vai.':'A <b>crossing of two streets</b> seen from above. You choose a path and go.',
  'Um <b>pé de trigo com duas pessoinhas 人 nos galhos</b>. Na colheita, todo mundo vem pro campo.':'A <b>wheat plant with two little people 人 in the branches</b>. At harvest time, everyone comes to the field.',
  '<b>Palavra 言 + língua 舌</b>. Usar a língua pra soltar palavras é falar. O 言 aparece em quase tudo que envolve fala.':'<b>Word 言 + tongue 舌</b>. Using your tongue to release words is speaking. 言 appears in almost everything involving speech.',
  'Uma <b>orelha 耳 colada no portão 門</b>. Escutando atrás da porta. O 間 tem 日 no lugar da orelha.':'An <b>ear 耳 attached to the gate 門</b>. Listening behind the door. 間 has 日 where the ear is.',
  '<b>Palavra 言 + vender 売</b>. Você lê o anúncio pra saber o que está à venda.':'<b>Word 言 + sell 売</b>. You read the notice to know what is for sale.',
  'Um <b>pincel 聿 descendo sobre o papel 曰</b>. É a mão segurando o pincel de caligrafia.':'A <b>brush 聿 descending onto paper 曰</b>. It is the hand holding a calligraphy brush.',
  'Um <b>telhado 𠆢 sobre uma tigela cheia</b> de arroz fumegante. É a refeição na mesa.':'A <b>roof 𠆢 over a full bowl</b> of steaming rice. It is a meal on the table.',
  '<b>Comida 飠 + boca escancarada 欠</b>. A pessoa abrindo bem a boca pra engolir o líquido de uma vez.':'<b>Food 飠 + wide-open mouth 欠</b>. A person opening their mouth wide to swallow liquid all at once.',
  'Uma <b>rede 罒 pescando conchas 貝</b>. Concha era o dinheiro antigo, então pegar concha com rede é comprar.':'A <b>net 罒 catching shells 貝</b>. Shells were ancient money, so catching shells with a net is buying.',
  '<b>Chuva 雨 + raio 电</b> serpenteando embaixo. O relâmpago foi a primeira eletricidade que a gente viu.':'<b>Rain 雨 + lightning 电</b> snaking underneath. Lightning was the first electricity people ever saw.',
  '<b>Palavra 言 + cinco 五 + boca 口</b>. Cinco bocas soltando palavras já formam um idioma inteiro.':'<b>Word 言 + five 五 + mouth 口</b>. Five mouths speaking words already make a whole language.',
  '<b>Cavalo 馬 + medida 尺</b>. Os postos antigos onde se trocava de cavalo a cada tantos quilômetros.':'<b>Horse 馬 + measure 尺</b>. The old stations where horses were changed every so many kilometers.',
  '<b>立 (de pé) + 木 (árvore) + 斤 (machado)</b>. A árvore recém-cortada. Madeira nova, ainda cheirosa.':'<b>立 (stand) + 木 (tree) + 斤 (axe)</b>. A freshly cut tree. New wood, still fragrant.',
  '<b>Dez 十 + boca 口</b>. Uma história que passou por dez gerações de bocas já é bem antiga.':'<b>Ten 十 + mouth 口</b>. A story passed through ten generations of mouths is already very old.',
  'É o <b>小 (pequeno) com um risquinho a mais</b> cortando por cima, como se tirasse ainda mais. Menos que pequeno é pouco.':'It is <b>小 (small) with one extra little stroke</b> cutting across the top, as if taking away even more. Less than small is few.',
  '<b>Telheiro 广 + ocupar 占</b>. Você ocupa um ponto na rua, põe um toldo em cima, e nasce a loja.':'<b>Shelter 广 + occupy 占</b>. You occupy a spot on the street, put a canopy over it, and a shop is born.'
};
Object.assign(DOM_EN,PART6_EN);


/* Parte 39: expansão didática conservadora */
const CONTENT_EN_PART39={"abelha": "bee", "abismo/profundeza": "abyss / depth", "abolir/em ruínas": "abolish / in ruins", "abraçar/apoiar": "embrace / support", "abraçar/segurar": "embrace / hold", "abreviar/estratégia": "abbreviate / strategy", "abrir": "open", "absorver/reger": "absorb / govern", "abster-se/reserva": "abstain / reserve", "abstinência/purificação": "abstinence / purification", "abundante": "abundant", "acertar/este": "hit / this", "acompanhar": "accompany", "acostumar-se": "get used to", "acumular/e também": "accumulate / also", "acumular/poupar": "accumulate / save", "acumular/reservar": "accumulate / reserve", "adequado": "appropriate", "adiar/prolongar": "postpone / prolong", "admoestar/instruir": "admonish / instruct", "adoecer/sofrer": "fall ill / suffer", "adstringente/relutante": "astringent / reluctant", "advertir/preceito": "warn / precept", "afiado/agudo": "sharp / acute", "afogar-se/mimar": "drown / pamper", "afrouxar/lento": "loosen / slow", "afundar": "sink", "agarrar/punhado": "grab / handful", "agradável/prazer": "pleasant / pleasure", "agricultura": "agriculture", "agrupar": "group", "agulha": "needle", "ainda mais/renovar": "even more / renew", "ainda/além": "still / besides", "ajudar/apoiar": "help / support", "alcançar/e": "reach / and", "alcançar/plural": "reach / plural", "alegoria/morada": "allegory / dwelling", "alegrar-se": "rejoice", "alegria/boas-vindas": "joy / welcome", "alertar/polícia": "alert / police", "alga": "seaweed", "algodão": "cotton", "aliança": "alliance", "alinhar/comum": "align / common", "alma": "soul", "alojamento": "lodging", "aluguel/salário": "rent / salary", "alvo/-al": "target / -al", "alvorada": "dawn", "além disso": "besides", "amarelo": "yellow", "amargo/sofrer": "bitter / suffer", "amarrar": "tie", "ambos": "both", "ame": "rain", "ameixeira": "plum tree", "amor": "love", "amoreira": "mulberry tree", "ancião": "elder", "andar/degrau": "walk / step", "anel/ambiente": "ring / environment", "anexar/acompanhar": "attach / accompany", "anexar/entregar": "attach / deliver", "ano de idade": "years old", "anoitecer": "become dark", "anoitecer/viver": "become dark / live", "anotar/registro": "note / record", "anseio": "longing", "ansiar por": "yearn for", "antecipar/prever": "anticipate / predict", "antepassado": "ancestor", "antes/ponta": "before / tip", "antigamente": "formerly", "antigo/anterior": "old / previous", "antigo/motivo": "old / reason", "ao lado": "beside", "ao lado/perto": "beside / near", "ao longo de": "along", "apagar/sumir": "erase / disappear", "apertar/segurar": "tighten / hold", "apodrecer": "rot", "apodrecer/tofu": "rot / tofu", "apoiar/ramo": "support / branch", "apostar": "bet", "aprender/praticar": "learn / practice", "apresentar": "present", "aprovar/elogiar": "approve / praise", "aproximar/doar": "approach / donate", "arar/cultivar": "plow / cultivate", "arco-íris": "rainbow", "areia": "sand", "armazém/guardar": "warehouse / store", "aroma": "aroma", "aroma/fragrância": "aroma / fragrance", "arrancar/extrair": "pull out / extract", "arranjar/gaze": "arrange / gauze", "arrebatar": "snatch", "arredores/lado": "surroundings / side", "arremessar": "throw", "arrepender-se": "regret", "arriscar/ousar": "risk / dare", "arrogante/altivo": "arrogant / haughty", "arroz (planta)": "rice plant", "arroz/EUA": "rice / USA", "arte/talento": "art / talent", "artesão": "craftsman", "asa": "wing", "assar/queimar": "roast / burn", "asseado/íntegro": "neat / honest", "assento/lugar": "seat / place", "assim/natural": "thus / natural", "assistir": "attend", "atacar": "attack", "atirar/injetar": "shoot / inject", "atrapalhar": "interfere", "atrasar/lento": "delay / slow", "atravessar": "cross", "atravessar/perfurar": "cross / pierce", "atravessar/superar": "cross / overcome", "atual/aparecer": "current / appear", "atuar/apresentar": "act / present", "aumentar": "increase", "austero/gélido": "austere / icy", "autoridade/imponência": "authority / grandeur", "avaliar/espelho": "assess / mirror", "avançar": "advance", "avisar": "warn", "azul/verde": "blue / green", "aço": "steel", "baleia": "whale", "bambu": "bamboo", "banquete": "banquet", "barco": "boat", "barriga": "belly", "barulho/tumulto": "noise / turmoil", "base/fundamento": "base / foundation", "bastão": "staff", "bater/acertar": "hit / strike", "bater/erradicar": "strike / eradicate", "baía": "bay", "bens/riqueza": "goods / wealth", "bifurcação": "fork / bifurcation", "bilhete/cupom": "ticket / coupon", "bloco/exato": "block / exact", "bloco/massa": "block / mass", "boa sorte": "good luck", "boca": "mouth", "bola/esfera": "ball / sphere", "bolha/espuma": "bubble / foam", "bom": "good", "bonito": "pretty", "borboleta": "butterfly", "borda/laço": "edge / loop", "bordo (maple)": "maple", "bosque": "grove", "brandir/comandar": "brandish / command", "brasão/padrão": "crest / pattern", "braço/habilidade": "arm / skill", "brilhar": "shine", "brincar/farsa": "play / farce", "brincar/passear": "play / stroll", "broto": "sprout", "buraco": "hole", "buscar/pedir": "seek / ask", "cabana/ermida": "hut / hermitage", "cabelo": "hair", "cabo/padrão": "handle / pattern", "cabo/promontório": "cape / headland", "cachoeira": "waterfall", "cachorro": "dog", "cada": "each", "caderno/cortina": "notebook / curtain", "cair": "fall", "cair em/afundar": "fall into / sink", "cair/derrubar": "fall / knock down", "caixa": "box", "caixão": "coffin", "calar-se": "be silent", "calcanhar": "heel", "calcular": "calculate", "calendário": "calendar", "calmo/moderado": "calm / moderate", "calçar/cumprir": "put on footwear / fulfill", "camada/estrato": "layer / stratum", "caminho": "path", "caminho/meio": "way / means", "campo aberto": "open field", "campo cultivado": "cultivated field", "campo de arroz": "rice field", "canhão": "cannon", "cansar": "tire", "canto": "corner", "canto/recanto": "corner / nook", "canção/balada": "song / ballad", "capacidade/poder": "ability / power", "capital": "capital", "capital/metrópole": "capital / metropolis", "capturar": "capture", "capítulo/insígnia": "chapter / insignia", "caqui": "persimmon", "carapaça/primeiro": "shell / first", "carga/bagagem": "load / baggage", "carmesim": "crimson", "carne": "meat", "carpa": "carp", "carregar/assumir": "carry / assume", "carro": "car", "casamento": "marriage", "casar (noiva)": "marry (bride)", "casca": "shell", "caso/assunto": "case / matter", "castanha": "chestnut", "castelo": "castle", "cauda": "tail", "caule": "stem", "causa/motivo": "cause / reason", "cavalo": "horse", "caverna": "cave", "cavidade": "cavity", "caça/caçar": "hunt / hunt", "ceder": "yield", "cedro": "cedar", "cego": "blind", "ceifar": "reap", "celebrar": "celebrate", "cem": "hundred", "centro": "center", "cercar": "surround", "cereal/grão": "cereal / grain", "cerejeira": "cherry tree", "cerimônia/etiqueta": "ceremony / etiquette", "certo/confirmar": "certain / confirm", "certo/fulano": "right / so-and-so", "cervo": "deer", "cerâmica": "ceramics", "chama": "flame", "chamar": "call", "chave": "key", "chegar": "arrive", "cheio/satisfeito": "full / satisfied", "cheiro/aroma": "smell / aroma", "chifre/ângulo": "horn / angle", "chorar": "cry", "chorar amargamente": "weep bitterly", "chumbo": "lead", "chuva": "rain", "chão/cama": "floor / bed", "cidade/feira": "city / fair", "cinco": "five", "cintura/lombar": "waist / lower back", "cinza": "gray", "circular/seguir": "circle / follow", "ciúme": "jealousy", "ciúme/inveja": "jealousy / envy", "clamar/convocar": "cry out / summon", "clarear/límpido": "clear / limpid", "claro/sonoro": "clear / resonant", "clima/estação": "climate / season", "coagular/obcecar": "clot / obsess", "cobre": "copper", "cobrir/derrubar": "cover / knock down", "coceira": "itch", "coisa": "thing", "coisa/assunto": "thing / matter", "colar/afixar": "stick / attach", "colega": "colleague", "coletar/adotar": "collect / adopt", "colina": "hill", "colocar/deixar": "put / leave", "colorir": "color", "coluna/dorso": "column / back", "comandante": "commander", "comida/arroz": "food / rice", "como/se": "how / if", "compadecer": "pity", "compadecer-se": "feel compassion", "compaixão": "compassion", "compaixão/piedade": "compassion / pity", "competir": "compete", "complementar": "complement", "completo": "complete", "comum/ordinário": "common / ordinary", "comum/vulgar": "common / vulgar", "comércio": "commerce", "conceber": "conceive", "concentrado/escuro": "concentrated / dark", "concha/molusco": "shell / mollusk", "conciliar": "reconcile", "concluir/entender": "conclude / understand", "conde/tio": "count / uncle", "condição/carta": "condition / letter", "condolências": "condolences", "conectar/atender": "connect / attend", "conferir/ensinar": "check / teach", "confiar/comitê": "trust / committee", "confiar/encarregar": "entrust / charge", "confiar/pedir": "trust / ask", "conflito/cipó": "conflict / vine", "confundir/extraviar": "confuse / misplace", "confundir/misturar": "confuse / mix", "congelar": "freeze", "conhecimento": "knowledge", "conquistar": "conquer", "consentir": "consent", "consentir/receber": "consent / receive", "consertar/estudar": "repair / study", "considerar": "consider", "consolar": "console", "consorte": "consort", "constituição": "constitution", "consultar": "consult", "consumar/enfim": "consummate / finally", "consumir/fumar": "consume / smoke", "conter/aparência": "contain / appearance", "conter/incluir": "contain / include", "contra/inverter": "against / reverse", "contra/par": "against / pair", "contratar": "hire", "contrato": "contract", "contribuir/tributo": "contribute / tribute", "conveniência/correio": "convenience / mail", "conversa": "conversation", "convexo": "convex", "convidado de honra": "guest of honor", "convidar": "invite", "convidar/atrair": "invite / attract", "cooperar": "cooperate", "copiar/fotografar": "copy / photograph", "copo/taça": "cup / goblet", "coragem": "courage", "corda (de instrumento)": "instrument string", "corda (instrumento)": "string (instrument)", "corda grossa": "thick rope", "coroa/liderar": "crown / lead", "corpo/pessoa": "body / person", "corredor": "hallway", "correio": "mail", "corrente/fechar": "chain / close", "correnteza/raso": "current / shallow", "correr/fugir": "run / flee", "cortar": "cut", "costurar": "sew", "cotovelo": "elbow", "cozinhar arroz": "cook rice", "cozinhar/ferver": "cook / boil", "crime": "crime", "crime/violar": "crime / violate", "cristal": "crystal", "crisântemo": "chrysanthemum", "cruel/severo": "cruel / severe", "cruzar/trocar": "cross / exchange", "cuidar/observar": "care for / observe", "culpa/repreender": "blame / rebuke", "cultivar": "cultivate", "cultuar/venerar": "worship / venerate", "curar/aliviar": "heal / relieve", "curioso/primoroso": "curious / exquisite", "curto": "short", "curva/música": "curve / music", "curvar/ceder": "bend / yield", "célula": "cell", "cérebro": "brain", "cílios": "eyelashes", "côncavo": "concave", "damasco/albicoque": "apricot", "dano/prejuízo": "damage / harm", "dar/conceder": "give / grant", "de novo": "again", "de novo/e": "again / also", "debate/assembleia": "debate / assembly", "decidir": "decide", "declarar/relatar": "declare / report", "declinar": "decline", "decreto imperial": "imperial decree", "dedo/apontar": "finger / point", "defender/guarda": "defend / guard", "definir/fixo": "define / fixed", "degrau/etapa": "step / stage", "deixar (herança)/perder": "leave (inheritance) / lose", "delegacia/assinar": "police station / sign", "deleite/alegria": "delight / joy", "demanda/necessidade": "demand / need", "demônio/espírito": "demon / spirit", "demônio/mágica": "demon / magic", "denso/íntimo": "dense / intimate", "dente": "tooth", "dentro": "inside", "deparar-se com": "encounter", "depósito/garagem": "storage / garage", "derrota": "defeat", "desafiar": "challenge", "desajeitado": "awkward", "desastre": "disaster", "desbravar": "explore", "descansar": "rest", "descartar": "discard", "descer/cair (chuva)": "descend / fall (rain)", "desejar/ansiar": "desire / yearn", "desejar/esperança": "desire / hope", "desejar/pedir": "wish / ask", "desenhar": "draw", "desenho/pintura": "drawing / painting", "desenrolar/repetir": "unroll / repeat", "desfiar/desabrochar": "unravel / bloom", "desfiladeiro": "ravine", "desgastar": "wear away", "desgraça": "misfortune", "desordem/revolta": "disorder / revolt", "despejar/nota": "pour out / note", "despertar": "awaken", "despertar/perceber": "awaken / notice", "despesa": "expense", "desprezar": "despise", "desprezar/subestimar": "despise / underestimate", "destruir": "destroy", "desviar/excepcional": "deviate / exceptional", "detalhado": "detailed", "deter/apegar-se": "detain / cling to", "detestar/suspeita": "hate / suspicion", "detetive/espiar": "detective / spy", "deus/divino": "god / divine", "devagar": "slowly", "dever/tarefa": "duty / task", "devolver": "return", "dez": "ten", "dez dias/época": "ten days / period", "dez mil": "ten thousand", "diagnosticar": "diagnose", "diagrama/mapa": "diagram / map", "diferente/errado": "different / wrong", "dificuldade/aflição": "difficulty / distress", "diminuir": "decrease", "dique": "dike", "direita": "right", "direito/poder": "right / power", "direto/consertar": "direct / repair", "dirigir-se a": "head toward", "disciplina/seção": "discipline / section", "discurso/válvula": "speech / valve", "disparar/fugir": "shoot / flee", "disperso/mangá": "scattered / manga", "dispor/medida": "arrange / measure", "disputar": "dispute", "dissolver": "dissolve", "distante/esparso": "distant / sparse", "distante/longínquo": "distant / remote", "distribuir": "distribute", "distribuir/entregar": "distribute / deliver", "distrito": "district"};
const I18N_ALL={pt:I18N.pt,en:I18N.en};

/* Parte 7 — cobertura ampliada da interface e das mensagens dinâmicas. */
const I18N_EXTRA={
'Hoje':'Today','Ontem':'Yesterday','Amanhã':'Tomorrow','dias':'days','dia':'day','mês':'month','meses':'months','semana':'week','semanas':'weeks','ano':'year','anos':'years',
'Anterior':'Previous','Próximo':'Next','Avançar':'Next','Atrás':'Back','Fechar':'Close','Cancelar':'Cancel','Confirmar':'Confirm','Salvar':'Save','Editar':'Edit','Excluir':'Delete','Concluído':'Done','Concluída':'Completed','Sim':'Yes','Não':'No','OK':'OK',
'Erro':'Error','Erro:':'Error:','Atenção':'Attention','Aviso':'Notice','Carregando':'Loading','Carregado':'Loaded','Disponível':'Available','Indisponível':'Unavailable','Tente novamente':'Try again','Algo deu errado':'Something went wrong','Sem conexão':'No connection','Conexão':'Connection','Conectado':'Connected','Desconectado':'Disconnected',
'Código':'Code','Código:':'Code:','Código de acesso':'Access code','Criar código':'Create code','Copiar':'Copy','Colado':'Pasted','Compartilhar':'Share','Enviar':'Send','Receber':'Receive','Atualizar':'Refresh','Atualizado':'Updated','Atualização':'Update',
'Nome':'Name','Seu nome':'Your name','Estudante':'Student','Alterar nome':'Change name','Salvar nome':'Save name','Perfil':'Profile','Avatar':'Avatar','Escolha seu avatar':'Choose your avatar',
'Progresso':'Progress','Progresso total':'Total progress','Progresso hoje':'Today’s progress','Meta':'Goal','Metas':'Goals','Nível':'Level','Níveis':'Levels','Experiência':'Experience','Pontos':'Points','Pontuação':'Score','Acertos':'Correct','Erros':'Mistakes','Tentativas':'Attempts','Precisão':'Accuracy','Média':'Average','Recorde':'Best','Sequência':'Streak','Maior sequência':'Longest streak',
'Começo':'Start','Início':'Start','Final':'End','Fim':'End','Lição':'Lesson','Lições':'Lessons','Unidade':'Unit','Unidades':'Units','Etapa':'Step','Etapas':'Steps','Curso':'Course','Cursos':'Courses','Categoria':'Category','Categorias':'Categories','Tudo':'All','Todos':'All','Todas':'All',
'Pesquisar':'Search','Busca':'Search','Resultado':'Result','Resultados':'Results','Nenhum resultado':'No results','Filtros':'Filters','Filtrar':'Filter','Limpar filtros':'Clear filters','Ordenar':'Sort','Ordenação':'Sort order','Alfabético':'Alphabetical','Recentes':'Recent','Mais fortes':'Strongest','Mais fracos':'Weakest',
'Favorito':'Favorite','Favoritos':'Favorites','Adicionar aos favoritos':'Add to favorites','Remover dos favoritos':'Remove from favorites','Nota':'Note','Notas pessoais':'Personal notes','Adicionar nota':'Add note','Sem notas':'No notes',
'Praticar':'Practice','Prática':'Practice','Treino':'Practice','Treinar':'Practice','Teste':'Test','Testes':'Tests','Quiz':'Quiz','Pergunta':'Question','Perguntas':'Questions','Resposta':'Answer','Respostas':'Answers','Escolha uma resposta':'Choose an answer','Sua resposta':'Your answer','Resposta correta':'Correct answer','Resposta errada':'Wrong answer','Acertou':'Correct','Errou':'Incorrect','Muito bem':'Great job','Continue':'Keep going',
'Escrita':'Writing','Escrever':'Write','Traçado':'Stroke order','Traços':'Strokes','Pincel':'Brush','Caneta':'Pen','Desenho':'Drawing','Desenhar':'Draw','Limpar':'Clear','Refazer':'Redo','Desfazer':'Undo','Direção':'Direction','Ordem':'Order','posição':'position','Posição':'Position','ponto':'point','Ponto':'Point',
'Leitura':'Reading','Pronúncia':'Pronunciation','Som':'Sound','Áudio':'Audio','Ouvir':'Listen','Ouça':'Listen','Falar':'Speak','Gravar':'Record','Voz':'Voice','Microfone':'Microphone','Reconhecimento':'Recognition','Permitir':'Allow',
'Jōyō':'Jōyō','Kanji de uso comum':'Common-use kanji','Lista Jōyō':'Jōyō list','2.136 kanji':'2,136 kanji','kanji na fila':'kanji in queue','kanji aprendidos':'kanji learned','kanji restantes':'kanji remaining','não visto':'not seen','visto':'seen','fraco':'weak','forte':'strong',
'Memória':'Memory','Mapa de memória':'Memory map','Revisão espaçada':'Spaced review','Revisão':'Review','Revisar':'Review','Reforce':'Reinforce','Reforçar':'Reinforce','Aprender':'Learn','Aprendido':'Learned','Aprendidos':'Learned','Aprendizado':'Learning',
'Biblioteca':'Library','Histórico':'History','Histórico de estudo':'Study history','Sessão':'Session','Sessões':'Sessions','Resumo':'Summary','Detalhes':'Details','Informações':'Information','Sobre':'About','Ajuda':'Help','Como funciona':'How it works','Privacidade':'Privacy','Termos':'Terms',
'Configuração':'Setting','Configurações':'Settings','Preferências':'Preferences','Geral':'General','Dados':'Data','Dados locais':'Local data','Sincronização':'Sync','Sincronizar':'Sync','Importar':'Import','Exportar':'Export','Restaurar':'Restore','Backup':'Backup','Redefinir':'Reset','Zerar':'Reset',
'Tema':'Theme','Claro':'Light','Escuro':'Dark','Automático':'Automatic','Automático (sistema)':'Automatic (system)','Idioma':'Language','Português (Brasil)':'Portuguese (Brazil)','Inglês':'English','Fonte':'Font','Fonte dos kanji':'Kanji font','Tamanho':'Size','Efeitos':'Effects',
'Este mês':'This month','Este ano':'This year','No mês passado':'Last month','Últimos 7 dias':'Last 7 days','Últimos 30 dias':'Last 30 days','sem parar':'without stopping','todos os dias':'every day','por dia':'per day',
'Volte depois':'Come back later','Comece agora':'Start now','Comece aqui':'Start here','Continue estudando':'Keep studying','Nada por aqui':'Nothing here','Ainda não':'Not yet','Ainda não tem nada aqui':'Nothing here yet','Tudo em dia':'All caught up','Nenhum kanji':'No kanji',
'Conferido':'Verified','Conferida':'Verified','Real':'Real','Verdadeiro':'True','Falso':'False','Seguro':'Safe','Ativo':'Active','Inativo':'Inactive','Offline':'Offline','Online':'Online',
'Adicionar à tela inicial':'Add to home screen','Instalar app':'Install app','Instalar':'Install','Abrir app':'Open app','Atualizar app':'Update app','Versão':'Version','Nova versão':'New version','Disponível para instalação':'Available to install',
'Volte depois ou faça um treino livre pra reforçar.':'Come back later or do some free practice to reinforce it.','Faça a primeira etapa da trilha. Os kanji aparecem aqui sozinhos, na hora certa de revisar.':'Complete the first step. Kanji will appear here automatically when it is time to review.','A revisão chega pouco antes de você esquecer. É assim que fixa.':'Review arrives shortly before you forget. That is how it sticks.',
'Ficou curto demais':'Too short','Passou bem do ponto':'Went too far','Fora do lugar':'Out of place','Olhe o ponto azul':'Look at the blue point','na direção contrária':'in the opposite direction','traço no lugar certo':'stroke in the right place','agora é a vez do':'now it is time for','Esse é o traço':'This is stroke','Puxe o traço inteiro':'Draw the full stroke',
'completo':'complete','incompleto':'incomplete','concluído':'completed','pendente':'pending','restante':'remaining','máximo':'maximum','mínimo':'minimum','Mínimo':'Minimum','Máximo':'Maximum',
'Fraco':'Weak','Forte':'Strong','Médio':'Medium','Média':'Average','Núcleo':'Core','Raízes':'Roots','Forças':'Forces','Direções':'Directions','Números':'Numbers','Família':'Family','Tempo':'Time','Trabalho':'Work','Notícias':'News','Política':'Politics','Sentimentos':'Feelings','Economia':'Economy',
'Começar':'Start','COMEÇAR':'START','CONTINUAR':'CONTINUE','VOLTAR':'BACK','PRÓXIMO':'NEXT','ANTERIOR':'PREVIOUS','SALVAR':'SAVE','CANCELAR':'CANCEL','FECHAR':'CLOSE','CONFIRMAR':'CONFIRM','PESQUISAR':'SEARCH'
};
/* Parte 8 — expansão de conteúdo de estudo, perfil e microcopy residual. */
const I18N_PART8={
  'Máscara de raposa':'Fox mask','Boneco da persistência':'Persistence doll','Máscara de ogro':'Ogre mask','Carpa da perseverança':'Carp of perseverance','Cão-guaxinim travesso':'Mischievous raccoon dog','Máscara do espírito':'Spirit mask','Dragão das nuvens':'Cloud dragon','Máscara de nō':'Noh mask','Leão-guardião':'Guardian lion','Lanterna de papel':'Paper lantern','Bebê urso':'Bear cub','Cãozinho feliz':'Happy puppy','Sábio da noite':'Night sage','Desbloqueado — código 1357':'Unlocked — code 1357','feito por você':'made by you','Meu desenho':'My drawing',
  'Escolha seu avatar':'Choose your avatar','Avatar selecionado':'Selected avatar','Avatar personalizado':'Custom avatar','Desenhe seu próprio avatar':'Draw your own avatar','Apagar desenho':'Clear drawing','Usar este avatar':'Use this avatar',
  'Boas-vindas':'Welcome','Pronto para começar?':'Ready to begin?','Vamos nessa':'Let’s go','Você pode mudar isso depois':'You can change this later','Escolha uma trilha':'Choose a path','Escolha seu nível':'Choose your level','Escolha seus kana':'Choose your kana','Tudo pronto!':'All set!',
  'Como estudar':'How to study','Aprenda primeiro':'Learn first','Depois revise':'Then review','Pratique os traços':'Practice the strokes','Fale em voz alta':'Speak aloud','Use a memória':'Use memory','Veja exemplos':'See examples','Revise amanhã':'Review tomorrow',
  'Modo de estudo':'Study mode','Modo guiado':'Guided mode','Modo livre':'Free mode','Uma pergunta por vez':'One question at a time','Sem limite de tempo':'No time limit','Com limite de tempo':'Timed','Vidas':'Lives','Sem vidas':'No lives','Pular pergunta':'Skip question','Terminar agora':'Finish now',
  'Sua sequência continua':'Your streak continues','Você manteve a sequência':'You kept the streak','Sequência quebrada':'Streak broken','Melhor sequência':'Best streak','Sessão de hoje':'Today’s session','Meta diária':'Daily goal','Meta atingida':'Goal reached','Meta não atingida':'Goal not reached',
  'Aprendeu hoje':'Learned today','Revisou hoje':'Reviewed today','Traçou hoje':'Wrote today','Ouviu hoje':'Listened today','Respondeu hoje':'Answered today','Minutos estudados':'Minutes studied','Tempo hoje':'Today’s time',
  'Detalhes do kanji':'Kanji details','Informações do kanji':'Kanji information','Radical principal':'Main radical','Número de traços':'Stroke count','Traços por ordem':'Strokes in order','Leitura on':'On reading','Leitura kun':'Kun reading','Leituras on':'On readings','Leituras kun':'Kun readings','Palavras relacionadas':'Related words','Palavra composta':'Compound word',
  'Memorização':'Memorization','Mnemônico':'Mnemonic','Partes do kanji':'Kanji components','Componentes':'Components','Pista visual':'Visual clue','Compare com':'Compare with','Não confunda com':'Do not confuse with','Kanji parecido':'Similar kanji',
  'Exemplo de uso':'Usage example','Exemplos de palavras':'Word examples','Frase de exemplo':'Example sentence','Veja também':'See also','Aprenda este kanji':'Learn this kanji','Marcar como aprendido':'Mark as learned','Marcar como não visto':'Mark as unseen',
  'Traço':'Stroke','Primeiro traço':'First stroke','Último traço':'Last stroke','Próximo traço':'Next stroke','Repita o traço':'Repeat the stroke','Solte para continuar':'Release to continue','Desenho limpo':'Drawing cleared','Traçado salvo':'Drawing saved',
  'A pronúncia está certa':'The pronunciation is correct','A pronúncia precisa de atenção':'The pronunciation needs attention','Tente de novo':'Try again','Fale naturalmente':'Speak naturally','Você pode falar mais devagar':'You can speak more slowly',
  'Nenhum favorito ainda':'No favorites yet','Adicione kanji aos favoritos para encontrá-los aqui.':'Add kanji to favorites to find them here.','Nenhuma anotação ainda':'No notes yet','Suas anotações aparecem aqui.':'Your notes will appear here.',
  'Pesquisa rápida':'Quick search','Pesquisar em todos os kanji':'Search all kanji','Digite um kanji':'Enter a kanji','Digite uma palavra':'Enter a word','Use significado, leitura ou palavra':'Use meaning, reading, or word','Pressione para pesquisar':'Press to search',
  'Idioma do aplicativo':'App language','Usar o idioma do sistema':'Use system language','Idioma aplicado':'Language applied','A próxima abertura usará esta preferência.':'The next launch will use this preference.',
  'Dados do estudo':'Study data','Progresso deste dispositivo':'Progress on this device','Exportação pronta':'Export ready','Importação pronta':'Import ready','Último backup':'Last backup','Backup local':'Local backup','Restaurar backup':'Restore backup',
  'Conexão com a conta':'Account connection','Você está usando o app sem conta':'You are using the app without an account','Sua conta é opcional':'Your account is optional','Conecte para sincronizar':'Connect to sync',
  'Não foi possível carregar esta unidade':'Could not load this unit','Não foi possível carregar este kanji':'Could not load this kanji','Tente recarregar':'Try reloading','A unidade está vazia':'The unit is empty','Este conteúdo ainda está sendo preparado':'This content is still being prepared',
  'Você chegou ao fim':'You reached the end','Você concluiu tudo':'You completed everything','Continue quando quiser':'Continue whenever you like','Até a próxima':'See you next time',
  'pai':'father','mãe':'mother','irmão':'brother','irmã':'sister','amigo':'friend','eu':'I','privado':'private','o quê':'what','reunião':'meeting','empresa':'company','país':'country','agora':'now','hora':'hour','tempo':'time','minuto':'minute','metade':'half','intervalo':'interval','cada':'every','todo':'every','semana':'week','dia da semana':'day of the week','meio-dia':'noon','frente':'front','antes':'before','depois':'after','fora':'outside','estrangeiro':'foreign','leste':'east','oeste':'west','sul':'south','norte':'north','longo':'long','chefe':'boss','muito':'many','ir':'go','vir':'come','falar':'speak','ouvir':'listen','ler':'read',
  'todo dia':'every day','toda semana':'every week','que semana vem':'next week','semana que vem':'next week','lado de fora':'outside','lado de dentro':'inside',
  'pouco':'few','pequeno':'small','grande':'big','novo':'new','velho':'old','alto':'high','baixo':'low','largo':'wide','curto':'short','rápido':'fast','devagar':'slow',
  'casa':'house','família':'family','criança':'child','água':'water','fogo':'fire','terra':'earth','árvore':'tree','montanha':'mountain','rio':'river','sol':'sun','lua':'moon','céu':'sky','chuva':'rain','vento':'wind','mar':'sea','flor':'flower','pessoa':'person','homem':'man','mulher':'woman','boca':'mouth','olho':'eye','orelha':'ear','mão':'hand','pé':'foot','cabeça':'head','coração':'heart',
  'Verde':'Green','Azul':'Blue','Vermelho':'Red','Amarelo':'Yellow','Preto':'Black','Branco':'White','Cinza':'Gray','Rosa':'Pink','Roxo':'Purple','Laranja':'Orange',
  'N5 base':'Base N5','Trilha completa':'Path complete','Lista completa':'Complete list','Todos os kanji':'All kanji','Kanjidō está pronto':'Kanjidō is ready'
};
/* Parte 10 — expansão dos termos didáticos curtos, radicais e descrições de estudo. */
const I18N_PART10={
  'três':'three','quatro':'four','sete':'seven','oito':'eight','nove':'nine','dez':'ten','cem':'hundred','mil':'thousand','dez mil':'ten thousand',
  'lua/mês':'moon/month','céu/vazio':'sky/empty','água':'water','árvore':'tree','criança/filho':'child/son','pé/bastar':'foot/to be enough','casa/família':'house/family',
  'ficar de pé':'stand up','próprio/si mesmo':'self/oneself','médico/medicina':'doctor/medicine','pescoço/chefe':'neck/chief','pai e mãe/íntimo':'parent/intimate','avançar':'advance',
  'maço/amarrar':'bundle/tie','política/governo':'politics/government','razão/lógica':'reason/logic','conter/aparência':'contain/appearance','direção/modo':'direction/manner','tema/título':'topic/title',
  'segurança':'safety','relâmpago':'lightning','portão':'gate','chapéu':'hat','pássaro':'bird','traço':'stroke','traços':'strokes','atrás':'behind','depois / atrás':'after / behind','adivinhação':'divination','grãos':'grains','língua':'tongue','dicionário':'dictionary','japonês':'Japanese','inglês':'English','estação':'station','em frente à estação':'in front of the station','ensino médio':'high school','de pé':'standing','salão':'hall','carvão':'charcoal','família/tribo':'family/tribe','esforço/estudo':'effort/study',
  'pai':'father','mãe':'mother','irmão mais velho':'older brother','irmãos':'siblings','irmã mais velha':'older sister','irmãs':'sisters','irmão mais novo':'younger brother','irmã mais nova':'younger sister','discípulo':'disciple','outra mão':'other hand','braço que recolhe':'reaching arm','possível':'possible','reunião':'meeting','santuário':'shrine','nação':'nation','país':'country','agora':'now','às vezes':'sometimes','manhã':'morning','árvore':'tree','Tóquio':'Tokyo','sol':'sun','fogo':'fire','terra':'earth','montanha':'mountain','rio':'river','mar':'sea','flor':'flower','pessoa':'person','homem':'man','mulher':'woman','boca':'mouth','olho':'eye','orelha':'ear','mão':'hand','pé':'foot','cabeça':'head','coração':'heart',
  'braço':'arm','ombro':'shoulder','perna':'leg','rosto':'face','nariz':'nose','corpo':'body','força':'strength','vontade':'will','mente':'mind','vida':'life','morte':'death','velho':'old','novo':'new','grande':'big','pequeno':'small','alto':'high','baixo':'low','longo':'long','curto':'short','forte':'strong','fraco':'weak','rápido':'fast','lento':'slow','claro':'bright','escuro':'dark','dentro':'inside','fora':'outside','frente':'front','lado':'side','meio':'middle','cima':'up','baixo':'down',
  'começar':'begin','terminar':'finish','ficar':'stay','sair':'leave','entrar':'enter','morar':'live','descansar':'rest','ver':'see','olhar':'look','ler':'read','escrever':'write','falar':'speak','ouvir':'listen','pensar':'think','saber':'know','aprender':'learn','ensinar':'teach','estudar':'study','trabalhar':'work','andar':'walk','correr':'run','voar':'fly','comer':'eat','beber':'drink','usar':'use','dar':'give','receber':'receive','enviar':'send','voltar':'return','escolher':'choose','pesquisar':'search','responder':'answer','explicar':'explain','comparar':'compare','lembrar':'remember','esquecer':'forget',
  'N5':'N5','N4':'N4','N3':'N3','N2':'N2','N1':'N1','uso comum':'common use','lista oficial':'official list','lista completa':'complete list','conteúdo didático':'study content','material de estudo':'study material','vocabulário':'vocabulary','leitura':'reading','significado':'meaning','mnemônico':'mnemonic','radical':'radical','componente':'component','componentes':'components','exemplo':'example','exemplos':'examples','frase':'sentence','palavra':'word','palavras':'words','composto':'compound','ordem':'order','direção':'direction','posição':'position','ponto':'point',
  'ponto azul':'blue point','ponto de partida':'starting point','comece aqui':'start here','continue daqui':'continue from here','veja abaixo':'see below','faça de novo':'try again','tente novamente':'try again','sem pressa':'take your time','com calma':'take it slowly','na hora certa':'at the right time','pouco depois':'shortly after','mais tarde':'later','amanhã':'tomorrow','hoje':'today','ontem':'yesterday',
  'Você já sabe':'Do you already know','Quero aprender tudo':'I want to learn everything','Já sei o básico':'I know the basics','De onde você parte?':'Where are you starting from?','Começar do zero':'Start from scratch','Entrar na trilha':'Enter the path','Faço a trilha inteira':'I’ll do the full path','liberados':'unlocked','aprendidos':'learned','restantes':'remaining','concluídos':'completed','pendentes':'pending',
  'A unidade está completa':'The unit is complete','Esta etapa está completa':'This step is complete','Você já viu este kanji':'You have already seen this kanji','Ainda não viu este kanji':'You have not seen this kanji yet','Aprenda o significado':'Learn the meaning','Aprenda a leitura':'Learn the reading','Pratique o traçado':'Practice the strokes','Revise depois':'Review later','Marcar para revisar':'Mark for review',
  'boa jornada':'have a good journey','bons estudos':'happy studying','até a próxima':'see you next time','sem perda de vida':'no life lost','perfeito':'perfect','muito bem':'great job','quase':'almost','atenção':'attention','cuidado':'careful','confira':'check','confundiu':'mixed up','não confunda':'do not confuse','diferença':'difference','parecido':'similar','diferente':'different',
  'daí veio':'that is where it came from','é o desenho literal':'it is a literal drawing','também quer dizer':'it also means','hoje também é':'today it also means','quase igual a':'almost the same as','comparado com':'compared with','cuidado pra não trocar com':'be careful not to confuse it with',
  'Traçado guiado':'Guided writing','Traçado livre':'Free writing','Prática livre':'Free practice','Treino livre':'Free practice','Treino de escrita':'Writing practice','Treino de leitura':'Reading practice','Treino de pronúncia':'Pronunciation practice','Teste rápido':'Quick test','Desafio':'Challenge','Resultado final':'Final result','Resposta correta':'Correct answer','Resposta errada':'Wrong answer','Acertos':'Correct','Erros':'Mistakes','Tentativas':'Attempts','Precisão':'Accuracy','Pontuação':'Score','Tempo de estudo':'Study time','Tempo total':'Total time',
  'Sincronização':'Sync','Sincronizado':'Synced','Sincronizando':'Syncing','Não sincronizado':'Not synced','Sem internet':'No internet','Sem conexão':'No connection','Tentar novamente':'Try again','Recarregar':'Reload','Atualizar':'Update','Permissão necessária':'Permission required','Permitir':'Allow','Negar':'Deny','Acesso negado':'Access denied',
  'Salvar preferências':'Save preferences','Preferência salva':'Preference saved','Idioma salvo':'Language saved','Configuração salva':'Setting saved','Dados salvos':'Data saved','Alterações salvas':'Changes saved','Nenhuma alteração':'No changes','Descartar alterações':'Discard changes','Restaurar padrão':'Restore defaults','Voltar ao padrão':'Reset to default'
};
for(const [k,v] of Object.entries(I18N_PART10)){if(!I18N.pt[k])I18N.pt[k]=k;if(!I18N.en[k])I18N.en[k]=v;}

/* Parte 11 — microcopy final de prática, resultados e estados dinâmicos. */
const I18N_PART11={
  'MODO LIVRE':'FREE PRACTICE MODE','Kanji novo':'New kanji','Pronúncia':'Pronunciation','Memória':'Memory',
  'Significado':'Meaning','Leitura':'Reading','Vocabulário':'Vocabulary','Achar o kanji':'Find the kanji','Traduzir':'Translate',
  'Escolha uma resposta':'Choose an answer','Sua resposta':'Your answer','Resposta correta':'Correct answer','Resposta errada':'Wrong answer',
  'Você acertou':'You got it right','Você errou':'You missed it','Quase':'Almost','Acertou!':'Correct!','Errou!':'Incorrect!',
  'Muito bem!':'Great job!','Boa!':'Good job!','Continue!':'Keep going!','Tente novamente':'Try again','Tente de novo':'Try again',
  'Comece pelo primeiro traço':'Start with the first stroke','Agora é a sua vez':'Now it is your turn','Sua vez':'Your turn',
  'Desenhado por você':'Drawn by you','desenhado por você':'drawn by you','o app desenhou por você':'the app drew for you',
  'não ouvi nada':'I didn’t hear anything','não captei':'I didn’t catch that','tente falar mais perto':'try speaking closer',
  'fale agora':'speak now','ouvindo…':'listening…','você disse':'you said','silêncio':'silence',
  'começando':'starting','carregando':'loading','salvando':'saving','enviando':'sending','recebendo':'receiving',
  'sem vida':'no life','sem vidas':'no lives','vida':'life','vidas':'lives','pular':'skip','pulado':'skipped',
  'Resultado':'Result','Resultado final':'Final result','Acertos':'Correct','Erros':'Mistakes','Tentativas':'Attempts','Precisão':'Accuracy',
  'Pergunta':'Question','Perguntas':'Questions','de':'of','restantes':'remaining','concluída':'completed','concluídas':'completed',
  'Unidade fechada':'Unit complete','Unidade completa':'Unit complete','Etapa concluída':'Step complete','Etapa completa':'Step complete',
  'Próxima unidade':'Next unit','Próxima etapa':'Next step','Voltar para a trilha':'Back to path','Ir para revisão':'Go to review',
  'Tudo certo':'All set','Tudo pronto':'All set','Nada foi perdido':'Nothing was lost','Recarregar a trilha':'Reload the path',
  'Atenção':'Attention','Cuidado':'Careful','Aviso':'Notice','Erro':'Error','Não disponível':'Not available',
  'Permissão negada':'Permission denied','Permissão necessária':'Permission required','Microfone bloqueado':'Microphone blocked',
  'Ativar microfone':'Enable microphone','Ativar áudio':'Enable audio','Ouvir novamente':'Listen again','Falar novamente':'Speak again',
  'Tocar para ouvir':'Tap to listen','Toque para continuar':'Tap to continue','Clique para continuar':'Click to continue',
  'Nenhum resultado encontrado':'No results found','Não encontramos nada':'We found nothing','Tente outra busca':'Try another search',
  'Sem favoritos':'No favorites','Sem histórico':'No history','Sem anotações':'No notes','Sem progresso':'No progress yet',
  'Hoje':'Today','Ontem':'Yesterday','amanhã':'tomorrow','hoje':'today','ontem':'yesterday','agora':'now',
  'por hoje':'for today','até amanhã':'until tomorrow','mais tarde':'later','depois':'later','agora mesmo':'right now',
  'Fechar':'Close','Abrir':'Open','Salvar':'Save','Cancelar':'Cancel','Confirmar':'Confirm','Voltar':'Back','Próximo':'Next','Anterior':'Previous',
  'Ativar':'Enable','Desativar':'Disable','Editar':'Edit','Excluir':'Delete','Remover':'Remove','Adicionar':'Add','Concluído':'Done'
};
for(const [k,v] of Object.entries(I18N_PART11)){if(!I18N.pt[k])I18N.pt[k]=k;if(!I18N.en[k])I18N.en[k]=v;}

/* Parte 9 — textos residuais de telas, prática e conteúdo dinâmico. */
const I18N_PART9={
  'Gato da sorte':'Lucky cat','Elmo de samurai':'Samurai helmet','Coelho da lua':'Moon rabbit','Tsuru de origami':'Origami crane','Amigo do gelo':'Frost friend',
  'Leve o KanjiDō com você':'Take KanjiDō with you','KanjiDō na tela inicial':'KanjiDō on your home screen','Acesse como um app, direto e sem procurar pelo navegador.':'Use it like an app, without searching for it in your browser.','Adicionar':'Add',
  'Bora começar?':'Ready to begin?','Trilha completa!':'Path complete!','Você está na etapa ':'You are on step ','Testar e pular':'Test and skip','12 perguntas de tudo que você já viu':'12 questions from everything you have seen',
  'Nada por aqui':'Nothing here','Não deu pra carregar':'Could not load','Sem conexão com o servidor.':'No connection to the server.','A tabela ainda não existe. Rode o SQL no Supabase.':'The table does not exist yet. Run the SQL in Supabase.','Habilite Anonymous no Supabase.':'Enable Anonymous in Supabase.',
  'Conectando':'Connecting','conectando…':'connecting…','carregando…':'loading…','salvando…':'saving…','Seu código':'Your code','não sincronizado':'not synced','Compartilhe o seu também.':'Share yours too.','Peça o código de 6 letras de alguém e adicione aqui.':'Ask someone for their 6-letter code and add it here.',
  'Só você aparece no ranking':'Only you appear on the leaderboard','Ranking global restaurado':'Global leaderboard restored','Não deu pra carregar':'Could not load',
  'Pra não esquecer':'To help you remember','Cada traço é conferido na hora:':'Every stroke is checked right away:','posição, direção e ordem':'position, direction, and order','Olhe o ponto azul':'Look at the blue point','Puxe o traço inteiro':'Draw the full stroke',
  'Deixa comigo. Olha como é o':'I’ve got it. Here is how the','Agora tenta o':'Now try the','Refaça o':'Redo the','Sua vez. Comece pelo':'Your turn. Start with','Perfeito. Agora o':'Perfect. Now','Boa.':'Good.','Sem perda de vida — essa palavra volta depois':'No life lost — this word will come back later',
  'Todos os':'All ','traços na ordem certa':'strokes in the correct order','traço(s) o app desenhou por você':'stroke(s) the app drew for you','Você disse':'You said','não captei':'I didn’t catch that','tente falar mais perto':'try speaking closer','silêncio':'silence','não ouvi nada':'I didn’t hear anything',
  'Pronúncia certa!':'Correct pronunciation!','Tudo bem, segue':'That’s okay, continue','Ficou pra próxima':'We’ll leave that for next time','Falou como um nativo':'You spoke like a native','A leitura correta está aqui embaixo':'The correct reading is below','não confunda com':'do not confuse it with',
  'Regra prática: sozinho o kanji costuma usar a leitura':'Practical rule: alone, the kanji usually uses the','grudado em outro kanji, a':'attached to another kanji, the','Este kanji quase sempre aparece com esta leitura.':'This kanji almost always appears with this reading.','Se não reconheceu':'If you did not recognize it','O reconhecimento de voz em japonês é sensível.':'Japanese speech recognition is sensitive.','Fale devagar, num lugar silencioso, e evite prolongar demais.':'Speak slowly in a quiet place, and avoid stretching the sound too much.',
  'Ligue cada kanji ao significado':'Match each kanji to its meaning','Formar palavra':'Build a word','A ordem certa está aqui embaixo':'The correct order is below','Você acertou.':'You got it right.','Não era essa.':'That was not it.','Veja abaixo.':'See below.','No outro silabário ele vira':'In the other syllabary it becomes','som idêntico, desenho diferente.':'same sound, different shape.','você marcou':'you selected','o que a palavra quer dizer':'what the word means','qual kanji corresponde ao áudio':'which kanji matches the audio','a resposta':'the answer',
  'A pergunta queria':'The question asked for','A resposta tinha que ser':'The answer had to be','texto em português ou romaji':'Portuguese text or romaji','Sua escolha não era a certa.':'Your choice was not correct.','Veja opção por opção abaixo.':'See each option below.','Bate com o pedido.':'It matches the prompt.','A diferença de traço é justamente onde a prova pega.':'The stroke difference is exactly what the test checks.',
  'Aprovado!':'Passed!','Você errou':'You missed','de':'of','etapas':'steps','foram liberadas de uma vez.':'were unlocked at once.','Esta unidade já estava completa.':'This unit was already complete.','Ainda não':'Not yet',
  'São 18 perguntas sobre os 6 kanji: significado, kanji, leitura e vocabulário.':'There are 18 questions about the 6 kanji: meaning, kanji, reading, and vocabulary.','Errando menos de 3, você passa.':'Miss fewer than 3 and you pass.',
  'uma vez só':'just once','tem um guia passo a passo.':'it has a step-by-step guide.','você rodou uma versão antiga.':'you ran an older version.','Copie o SQL de novo daqui':'Copy the SQL again from here','Sem conectar, o app funciona 100% offline.':'Without connecting, the app works 100% offline.','Nada é enviado sem você configurar isto.':'Nothing is sent unless you configure this.',
  'Bem-vindo':'Welcome','O caminho dos kanji, do zero até o N4 — com traçado de verdade, quizzes e revisão na hora certa.':'The path of kanji, from zero to N4 — with real stroke practice, quizzes, and review at the right time.','Por onde você quer começar?':'Where would you like to start?','Escolha o seu nível agora. Dá pra trocar quando quiser, e cada trilha guarda o próprio progresso.':'Choose your level now. You can change it anytime, and each path keeps its own progress.',
  'Você já sabe os kanji do 1º ano?':'Do you already know the 1st-grade kanji?','No Japão, as crianças aprendem 80 kanji na primeira série. Muita gente que estuda por conta já viu esses.':'In Japan, children learn 80 kanji in first grade. Many self-learners have already seen these.','De onde você parte?':'Where are you starting from?','Se já domina o começo, escolha a unidade em que quer entrar. Tudo que vem antes fica marcado como concluído.':'If you already know the basics, choose the unit where you want to enter. Everything before it will be marked complete.',
  'Começar do zero':'Start from scratch','Faço a trilha inteira, da unidade 1 até o fim':'I’ll do the full path, from unit 1 to the end','COMENÇAR':'START','CONTINUAR':'CONTINUE','VOLTAR':'BACK','PRÓXIMO':'NEXT','ANTERIOR':'PREVIOUS','SALVAR':'SAVE','CANCELAR':'CANCEL','FECHAR':'CLOSE','CONFIRMAR':'CONFIRM','PESQUISAR':'SEARCH',
  'Exclusivo do katakana:':'Katakana only:','Quando você escreve':'When you write','não se lê.':'is not read.','dobra a consoante':'doubles the following consonant','estica a vogal anterior':'lengthens the previous vowel','Como o katakana escreve palavras estrangeiras, esse traço aparece o tempo todo.':'Because katakana writes foreign words, this mark appears all the time.',
  'Você já lê qualquer coisa em japonês':'You can now read anything in Japanese','mesmo sem entender.':'even without understanding it.','Nesta última unidade é só formar palavras, misturando os dois silabários.':'In this final unit, just build words by mixing the two syllabaries.','Depois, vá para a trilha de':'Next, go to the','agora todas as leituras vão fazer sentido.':'now all the readings will make sense.'
};
for(const [k,v] of Object.entries(I18N_PART9)){if(!I18N.pt[k])I18N.pt[k]=k;if(!I18N.en[k])I18N.en[k]=v;}

for(const [k,v] of Object.entries(I18N_PART8)){if(!I18N.pt[k])I18N.pt[k]=k;if(!I18N.en[k])I18N.en[k]=v;}
for(const [k,v] of Object.entries(I18N_EXTRA)){if(!I18N.pt[k])I18N.pt[k]=k;if(!I18N.en[k])I18N.en[k]=v;}

/* Parte 12 — glossário de conteúdo didático.
   A interface já usa i18n; aqui ampliamos a camada para os campos dos kanjis
   (significados, componentes, mnemônicos e vocabulário) que são renderizados
   dinamicamente e, por isso, não passam por textos fixos de interface. */
const CONTENT_EN={
  'a partir de':'from','acima':'above','abaixo':'below','ação':'action','ações':'actions','acender':'light','agora':'now','água':'water','água corrente':'flowing water','amargo':'bitter','amigo':'friend','andar':'walk','animal':'animal','animais':'animals','ano':'year','antes':'before','aprender':'learn','ar':'air','árvore':'tree','artigo':'article','atenção':'attention','atual':'current','aula':'lesson','azul':'blue','boca':'mouth','bom':'good','branco':'white','calor':'heat','caminho':'path','canção':'song','cantar':'sing','casa':'house','causa':'cause','campo':'field','cavar':'dig','cidade':'city','cidadão':'citizen','cidadãos':'citizens','ciência':'science','clã':'clan','comer':'eat','comida':'food','como':'how','comprar':'buy','conhecer':'know','construir':'build','continuar':'continue','cor':'color','correr':'run','corpo':'body','coisa':'thing','coisas':'things','coração':'heart','criança':'child','crianças':'children','dia':'day','direção':'direction','dinheiro':'money','dizer':'say','doença':'illness','dormir':'sleep','em frente à estação':'in front of the station','ensino médio':'high school','entrar':'enter','escuro':'dark','escrever':'write','estação':'station','estar':'be','estudo':'study','exemplo':'example','existir':'exist','falar':'speak','família':'family','fazer':'do','fogo':'fire','forma':'form','formas':'forms','frase':'sentence','frases':'sentences','força':'strength','forte':'strong','guardar':'keep','gato':'cat','girar':'turn','grande':'big','gente':'people','hoje':'today','hora':'hour','homem':'man','ideia':'idea','imagem':'image','início':'beginning','inglês':'English','japonês':'Japanese','jardim':'garden','jardins':'gardens','lado':'side','ler':'read','leitura':'reading','língua':'tongue','lugar':'place','lugares':'places','luz':'light','mão':'hand','memória':'memory','mês':'month','mesmo':'same','menor':'smaller','morrer':'die','mulher':'woman','mundo':'world','natureza':'nature','nome':'name','novo':'new','números':'numbers','número':'number','observar':'observe','oferecer':'offer','ouvir':'hear','palavra':'word','palavras':'words','papel':'paper','parte':'part','partes':'parts','pensamento':'thought','pensamentos':'thoughts','perder':'lose','pessoa':'person','pessoas':'people','pequeno':'small','pergunta':'question','preparar':'prepare','preto':'black','procurar':'look for','professor':'teacher','quebrar':'break','razão':'reason','real':'real','recuar':'retreat','revisão':'review','rio':'river','sabor':'taste','saber':'know','segurança':'safety','seguir':'follow','semana':'week','senhor':'Mr.','sentir':'feel','ser':'be','simples':'simple','sobre':'about','sol':'sun','som':'sound','tempo':'time','terra':'earth','trabalhar':'work','trabalho':'work','triste':'sad','tudo':'everything','usar':'use','valor':'value','valores':'values','velocidade':'speed','verão':'summer','ver':'see','vida':'life','vidas':'lives','visita':'visit','visitas':'visits','viver':'live','voltar':'return','voz':'voice','zero':'zero',
  'causa/motivo':'cause/reason','assim/natural':'thus/natural','teoria/debate':'theory/debate','limite':'limit','traduzir/motivo':'translate/reason','queimar':'burn','simples/breve':'simple/brief','vários/diversos':'various/diverse','palavra/demitir-se':'word/resign','entregar, comida, campo':'deliver, food, field','voar, doença, roupa':'fly, illness, clothing','texto, separar, sabor':'text, separate, taste','povo, perguntar, remédio':'people, ask, medicine','razão, viagem, ambos':'reason, travel, both',
  'componente do kanji':'kanji component','Este kanji faz parte dos Jōyō, os kanji usados como referência no japonês escrito.':'This kanji is part of the Jōyō set, the standard reference for written Japanese. See its shape, say the pronunciation aloud, and practice the strokes.','componente':'component','componentes':'components','radical':'radical','palavra composta':'compound word','palavras relacionadas':'related words','mnemônico':'mnemonic','memorização':'memorization','pista visual':'visual clue','dica':'tip','explicação':'explanation','explicações':'explanations','não confunda com':'do not confuse with'
};

/* Parte 22 — expansão didática: significados restantes e pares curtos bilíngues. */
const CONTENT_EN_PART22={
  'política/governo':'politics/government',
  'debate/assembleia':'debate/assembly',
  'ligar/levar junto':'connect/take along',
  'parte/setor':'part/section',
  'mútuo/aparência':'mutual/appearance',
  'definir/fixo':'define/fixed',
  'arroz/EUA':'rice/United States',
  'fruto/real':'fruit/real',
  'relação/barreira':'relation/barrier',
  'decidir':'decide',
  'tudo/inteiro':'all/whole',
  'superfície/expressar':'surface/express',
  'guerra/lutar':'war/fight',
  'passar por/gerir':'pass through/manage',
  'o mais':'the most',
  'atual/aparecer':'current/appear',
  'mudar/transformar':'change/transform',
  'acertar/este':'hit/this',
  'lei/método':'law/method',
  'natureza/gênero':'nature/sex',
  'alvo/-al':'target/-al',
  'necessário/resumo':'necessary/summary',
  'sistema/controlar':'system/control',
  'governar/curar':'govern/heal',
  'dever/tarefa':'duty/task',
  'tornar-se/formar':'become/form',
  'período/prazo':'period/deadline',
  'pegar/tomar':'take/grab',
  'capital/metrópole':'capital/metropolis',
  'harmonia/japonês':'harmony/Japanese',
  'máquina/oportunidade':'machine/opportunity',
  'plano/paz':'flat/peace',
  'somar/adicionar':'add',
  'receber':'receive',
  'número/contar':'number/count',
  'anotar/registro':'note/record',
  'primeiro/começo':'first/beginning',
  'dedo/apontar':'finger/point',
  'direito/poder':'right/power',
  'apoiar/ramo':'support/branch',
  'ponto/nota':'point/grade',
  'informar/retribuir':'inform/reward',
  'terminar/pagar':'finish/pay',
  'vida/ativo':'life/active',
  'origem/campo':'origin/field',
  'junto/comum':'together/common',
  'ganhar/obter':'gain/obtain',
  'resolver/soltar':'solve/release',
  'cruzar/trocar':'cross/exchange',
  'recurso/capital':'resource/capital',
  'antecipar/prever':'anticipate/forecast',
  'virar-se para':'turn toward',
  'ocasião/beira':'occasion/edge',
  'vencer':'win',
  'rosto/superfície':'face/surface',
  'avisar':'warn',
  'julgar/carimbo':'judge/stamp',
  'reconhecer':'recognize',
  'participar/ir':'participate/go',
  'vantagem/lucro':'advantage/profit',
  'montar/grupo':'assemble/group',
  'confiar/sinal':'trust/signal',
  'existir/estar':'exist/be',
  'caso/assunto':'case/matter',
  'encarregar':'entrust',
  'buscar/pedir':'seek/ask',
  'próximo/seguinte':'next/following',
  'ontem/passado':'yesterday/past',
  'funcionário/órgão':'official/agency',
  'aumentar':'increase',
  'relação/encarregado':'relation/person in charge',
  'emoção/situação':'emotion/situation',
  'arremessar':'throw',
  'mostrar/indicar':'show/indicate',
  'mudar/estranho':'change/strange',
  'bater/acertar':'hit/strike',
  'direto/consertar':'straight/fix',
  'estilo/cerimônia':'style/ceremony',
  'certo/confirmar':'certain/confirm',
  'fruto/resultado':'fruit/result',
  'sem falta':'without fail',
  'atuar/apresentar':'perform/present',
  'ano de idade':'years old',
  'disputar':'compete',
  'conversa':'conversation',
  'capacidade/poder':'ability/power',
  'posição/lugar':'position/place',
  'colocar/deixar':'put/leave',
  'fluir':'flow',
  'padrão/status':'standard/status',
  'duvidar':'doubt',
  'passar/exceder':'pass/exceed',
  'repartição/situação':'office/situation',
  'soltar/liberar':'release/free',
  'sempre/normal':'always/normal',
  'condição/carta':'condition/letter',
  'bola/esfera':'ball/sphere',
  'profissão':'occupation/profession',
  'dar/conceder':'give/grant',
  'oferecer/acompanhar':'offer/accompany',
  'estrutura/montar':'structure/assemble',
  'dividir/porcentagem':'divide/percentage',
  'corpo/pessoa':'body/person',
  'despesa':'expense',
  'anexar/entregar':'attach/hand over',
  'motivo/origem':'reason/origin',
  'difícil':'difficult',
  'gentil/superior':'kind/superior',
  'marido':'husband',
  'recolher/receita':'collect/revenue',
  'cortar/recusar':'cut/refuse',
  'diferente/errado':'different/wrong',
  'apagar/sumir':'erase/disappear',
  'deus/divino':'god/divine',
  'número/vez':'number/turn',
  'regra/padrão':'rule/standard',
  'técnica/arte':'technique/art',
  'residência':'residence',
  'dano/prejuízo':'damage/loss',
  'distribuir/entregar':'distribute/deliver',
  'alertar/polícia':'alert/police',
  'criar/educar':'raise/educate',
  'assento/lugar':'seat/place',
  'visitar':'visit',
  'restar/sobrar':'remain/be left',
  'pensar/imaginar':'think/imagine',
  'ajudar':'help',
  'trabalho/esforço':'work/effort',
  'perseguir':'pursue',
  'comércio':'commerce',
  'folha':'leaf',
  'transmitir/contar':'transmit/tell',
  'paisagem':'landscape',
  'cair':'fall',
  'recuar/sair':'retreat/leave',
  'cabeça':'head',
  'perder/carregar':'lose/carry',
  'atravessar':'cross',
  'perder/falhar':'lose/fail',
  'diferença':'difference',
  'fim/ponta':'end/tip',
  'proteger':'protect',
  'jovem':'young',
  'semente/tipo':'seed/type',
  'bonito':'beautiful',
  'vida/ordem':'life/order',
  'sorte/fortuna':'luck/fortune',
  'desejar/esperança':'wish/hope',
  'não/erro':'not/error',
  'examinar/perceber':'examine/notice',
  'degrau/etapa':'step/stage',
  'horizontal/lado':'horizontal/side',
  'profundo':'deep',
  'dizer (humilde)':'say (humble)',
  'bens/riqueza':'property/wealth',
  'porto':'port/harbor',
  'conhecimento':'knowledge',
  'chamar':'call',
  'alcançar/plural':'reach/multiple',
  'encosta (Osaka)':'slope (Osaka)',
  'clima/estação':'climate/season',
  'grau/cerca de':'degree/about',
  'cheio/satisfeito':'full/satisfied',
  'derrota':'defeat',
  'valor/preço':'value/price',
  'furar/de repente':'pierce/suddenly',
  'estrada':'road',
  'disciplina/seção':'discipline/section',
  'empilhar/acumular':'pile up/accumulate',
  'outro':'other',
  'lidar/lugar':'deal with/place',
  'visita/cliente':'visit/customer',
  'negar/não':'deny/no',
  'mestre/professor':'master/teacher',
  'fácil/mudar':'easy/change',
  'rápido':'fast',
  'existir/manter':'exist/maintain',
  'matar':'kill',
  'número/título':'number/title',
  'simples/único':'simple/single',
  'sentar/assento':'sit/seat',
  'remover/exceto':'remove/except',
  'completo':'complete',
  'descer/cair (chuva)':'descend/fall (rain)',
  'responsabilidade':'responsibility',
  'capturar':'capture',
  'perigo':'danger',
  'fornecer/salário':'provide/salary',
  'amargo/sofrer':'bitter/suffer',
  'receber/dar as boas-vindas':'receive/welcome',
  'jardim/parque':'garden/park',
  'ferramenta/ingrediente':'tool/ingredient',
  'cavalo':'horse',
  'amor':'love',
  'rico/abundância':'rich/abundance',
  'ele/aquele':'he/that',
  'dançar':'dance',
  'morrer/perder':'die/lose',
  'frio/esfriar':'cold/cool',
  'adequado':'suitable',
  'mulher casada':'married woman',
  'aproximar/doar':'approach/donate',
  'incluir/entrar':'include/enter',
  'tipo/categoria':'type/category',
  'sobra/resto':'surplus/remains',
  'rei':'king',
  'devolver':'return',
  'esposa':'wife',
  'costas/altura':'back/height',
  'quente/febre':'hot/fever',
  'pousada/hospedar':'inn/lodge',
  'perigoso/íngreme':'dangerous/steep',
  'confiar/pedir':'rely/request',
  'lembrar/acordar':'remember/wake',
  'barco':'boat',
  'caminho/meio':'route/means',
  'permitir/perdoar':'allow/forgive',
  'arrancar/extrair':'pull out/extract',
  'conveniência/correio':'convenience/mail',
  'crime':'crime',
  'esforçar-se':'make an effort',
  'espírito/refinado':'spirit/refined',
  'espalhar':'spread',
  'quieto/silencioso':'quiet/silent',
  'casamento':'marriage',
  'alegrar-se':'rejoice',
  'flutuar':'float',
  'cortar/absoluto':'cut/absolute',
  'felicidade/sorte':'happiness/luck',
  'empurrar':'push',
  'cair/derrubar':'fall/knock down',
  'velho/idoso':'old/elderly',
  'curva/música':'curve/music',
  'pagar/espanar':'pay/brush off',
  'quintal/jardim':'yard/garden',
  'a pé/aluno':'on foot/student',
  'trabalhar/servir':'work/serve',
  'atrasar/lento':'delay/slow',
  'morar/estar':'live/be located',
  'misturado/variado':'mixed/varied',
  'convidar':'invite',
  'ficar em apuros':'get into trouble',
  'faltar/bocejar':'lack/yawn',
  'ainda mais/renovar':'further/renew',
  'esculpir/momento':'carve/moment',
  'aprovar/elogiar':'approve/praise',
  'abraçar/segurar':'embrace/hold',
  'crime/violar':'crime/violate',
  'medo/temer':'fear/be afraid',
};
/* PART39 era mesclada antes de CONTENT_EN existir (TDZ → o app inteiro não iniciava). Agora entra logo após a declaração. */
Object.assign(CONTENT_EN,CONTENT_EN_PART39);
Object.assign(CONTENT_EN,CONTENT_EN_PART22);
function makeBidiPairs(){
  const pairs=[];
  for(const k of Object.keys(I18N.pt)){
    const e=I18N.en[k]; if(e&&e!==k)pairs.push([k,e]);
  }
  for(const k of Object.keys(DOM_EN)){
    const e=DOM_EN[k]; if(e&&e!==k)pairs.push([k,e]);
  }
  for(const k of Object.keys(CONTENT_EN)){
    const e=CONTENT_EN[k]; if(e&&e!==k)pairs.push([k,e]);
  }
  const seen=new Set();
  return pairs.filter(([a,b])=>{const id=a+'\u0000'+b;if(seen.has(id)||a.trim().length<4)return false;seen.add(id);return true;}).sort((a,b)=>b[0].length-a[0].length);
}

/* Parte 30 — fechamento de lacunas de conteúdo didático e mensagens compostas. */
const CONTENT_EN_PART30={
  'mãe':'mother','pai':'father','pais':'parents','irmão':'brother','irmã':'sister','filho':'son','filha':'daughter','marido':'husband','esposa':'wife',
  'avô':'grandfather','avó':'grandmother','tio':'uncle','tia':'aunt','família':'family','parente':'relative','parentes':'relatives',
  'cabeça':'head','olho':'eye','olhos':'eyes','nariz':'nose','boca':'mouth','orelha':'ear','orelha/orelha':'ear','mão':'hand','braço':'arm','perna':'leg','pernas':'legs','pé':'foot','pés':'feet','corpo':'body','coração':'heart',
  'comer':'eat','beber':'drink','dormir':'sleep','acordar':'wake up','andar':'walk','caminhar':'walk','correr':'run','parar':'stop','entrar':'enter','sair':'leave','voltar':'return','ir':'go','vir':'come',
  'falar':'speak','dizer':'say','ouvir':'hear','escutar':'listen','ver':'see','olhar':'look','ler':'read','escrever':'write','pensar':'think','saber':'know','entender':'understand','aprender':'learn','ensinar':'teach',
  'comprar':'buy','vender':'sell','pagar':'pay','receber':'receive','enviar':'send','usar':'use','fazer':'do','trabalhar':'work','estudar':'study','começar':'begin','terminar':'finish','continuar':'continue',
  'casa':'house','quarto':'room','cozinha':'kitchen','escola':'school','universidade':'university','empresa':'company','loja':'shop','mercado':'market','banco':'bank','hospital':'hospital','estação':'station','aeroporto':'airport','rua':'street','cidade':'city','país':'country',
  'montanha':'mountain','rio':'river','mar':'sea','lago':'lake','floresta':'forest','árvore':'tree','flor':'flower','grama':'grass','sol':'sun','lua':'moon','céu':'sky','chuva':'rain','neve':'snow','vento':'wind','fogo':'fire','terra':'earth',
  'verão':'summer','inverno':'winter','primavera':'spring','outono':'autumn','manhã':'morning','tarde':'afternoon','noite':'night','hoje':'today','amanhã':'tomorrow','ontem':'yesterday','semana':'week','mês':'month','ano':'year','hora':'hour','minuto':'minute',
  'grande':'big','pequeno':'small','alto':'high','baixo':'low','longo':'long','curto':'short','novo':'new','velho':'old','jovem':'young','forte':'strong','fraco':'weak','bom':'good','ruim':'bad','fácil':'easy','difícil':'difficult','rápido':'fast','lento':'slow',
  'vermelho':'red','azul':'blue','branco':'white','preto':'black','amarelo':'yellow','verde':'green','roxo':'purple','marrom':'brown','cor':'color',
  'um':'one','dois':'two','três':'three','quatro':'four','cinco':'five','seis':'six','sete':'seven','oito':'eight','nove':'nine','dez':'ten','cem':'hundred','mil':'thousand','número':'number','números':'numbers',
  'razão':'reason','causa':'cause','ideia':'idea','pensamento':'thought','sentimento':'feeling','memória':'memory','atenção':'attention','segurança':'safety','perigo':'danger','problema':'problem','resposta':'answer','pergunta':'question','exemplo':'example','explicação':'explanation',
  'palavra':'word','palavras':'words','frase':'sentence','frases':'sentences','vocabulário':'vocabulary','significado':'meaning','significados':'meanings','leitura':'reading','leituras':'readings','pronúncia':'pronunciation','escrita':'writing','traço':'stroke','traços':'strokes','radical':'radical','componente':'component','componentes':'components','mnemônico':'mnemonic','mnemônicos':'mnemonics',
  'O que foi pedido':'What was asked','A pergunta queria':'The question asked for','A resposta tinha que ser':'The answer had to be','texto em português ou romaji':'Portuguese text or romaji','Você acertou.':'You got it right.','Não era essa.':'That was not it.','Veja abaixo.':'See below.','Veja opção por opção abaixo.':'See each option below.','Sua escolha não era a certa.':'Your choice was not correct.',
  'Por que':'Why','é a certa':'is correct','correta':'correct','incorreta':'incorrect','Alternativa por alternativa':'Option by option','Sobre esta leitura':'About this reading','Sobre esta escrita':'About this writing','Todos os traços':'All strokes','na ordem certa':'in the correct order','Bate com o pedido.':'It matches the prompt.','É o significado registrado.':'It is the recorded meaning.','É uma leitura válida.':'It is a valid reading.',
  'Regra prática: sozinho o kanji costuma usar a leitura':'Practical rule: alone, the kanji usually uses the','grudado em outro kanji, a':'attached to another kanji, the','Sozinho costuma usar o kun; colado em outro kanji, o on.':'Alone it usually uses kun; attached to another kanji, on.',
  'Este kanji quase sempre aparece com esta leitura.':'This kanji almost always appears with this reading.','Tem':'Has','traços':'strokes','radical':'radical','Aparece em':'It appears in','Não confunda com':'Do not confuse with','A diferença de traço é justamente onde a prova pega.':'The stroke difference is exactly what the test checks.',
  'você marcou':'you selected','Você marcou':'You selected','não captei':'I didn’t catch that','não ouvi nada':'I didn’t hear anything','tente falar mais perto':'try speaking closer','fale agora':'speak now','silêncio':'silence',
  'Comece pelo primeiro traço':'Start with the first stroke','Agora é a sua vez':'Now it is your turn','Sua vez.':'Your turn.','Puxe o traço inteiro':'Draw the full stroke','Olhe o ponto azul':'Look at the blue dot','na direção contrária':'in the opposite direction','Ficou curto demais':'Too short','Passou bem do ponto':'Went too far','Fora do lugar':'Out of place',
  'Explicar minha resposta':'Explain my answer','Memória':'Memory','O par':'The pair','Palavra':'Word','Leitura correta':'Correct reading','A leitura correta está aqui embaixo':'The correct reading is below','O esperado era':'The expected answer was','A ordem certa está aqui embaixo':'The correct order is below',
  'Falou como um nativo':'You sounded like a native','Pronúncia certa!':'Correct pronunciation!','Tudo bem, segue':'That’s okay, continue','Ficou pra próxima':'We’ll leave that for next time','Sem perda de vida — essa palavra volta depois':'No life lost — this word will come back later',
  'São 18 perguntas sobre os 6 kanji: significado, kanji, leitura e vocabulário.':'There are 18 questions about the 6 kanji: meaning, kanji, reading, and vocabulary.','Errando menos de 3, você passa.':'Miss fewer than 3 and you pass.',
  'Unidade fechada':'Unit complete','Unidade completa':'Unit complete','Etapa concluída':'Step complete','Etapa completa':'Step complete','Próxima unidade':'Next unit','Próxima etapa':'Next step','Voltar para a trilha':'Back to path','Ir para revisão':'Go to review',
  'Você já viu':'You have already seen','ainda não viu':'have not seen yet','kanji aprendidos':'kanji learned','kanji restantes':'kanji remaining','kanji na fila':'kanji in queue','dias seguidos':'days in a row'
};
Object.assign(CONTENT_EN,CONTENT_EN_PART30);


/* Parte 43 — expansão didática dos significados presentes nas trilhas N4–N1. */
const CONTENT_EN_PART43={"ciência":"science","médico/medicina":"doctor/medicine","instituição":"institution","desenho/traço":"drawing/stroke","divertido/música":"fun/music","salão/prédio":"hall/building","província":"prefecture/province","indústria/obra":"industry/construction","começar":"start/begin","pescoço/chefe":"neck/chief","pai e mãe/íntimo":"parents/intimate","avançar":"advance","família/tribo":"family/tribe","tema/título":"topic/title","carvão":"charcoal/coal","chá":"tea","salão":"hall","Buda/França":"Buddha/France","esforço/estudo":"effort/study","direção/modo":"direction/manner","portão":"gate","função/papel":"role/function","remédio":"medicine","conter/aparência":"contain/appearance","razão/lógica":"reason/logic","maço/amarrar":"bundle/tie","ainda não":"not yet","respiração/filho":"breath/son","mútuo":"mutual","você/senhor":"you/Mr.","junto/cordão":"together/cord","saquê/bebida":"sake/drink","honorífico":"honorific","filha/moça":"daughter/young woman","copo/taça":"cup/glass","fumaça":"smoke","grandioso/notável":"great/notable","quanto/vários":"how many/various","território/domínio":"territory/domain","confiar/comitê":"entrust/committee","exército":"army","força/ímpeto":"force/momentum","secundário/vice":"secondary/vice","elefante/símbolo":"elephant/symbol","área/zona":"area/zone","padrão/preparo":"standard/preparation","prêmio":"prize/award","técnica/habilidade":"technique/skill","lição/seção":"lesson/section","armazém/guardar":"warehouse/store","situação":"situation","história":"history","redondo/círculo":"round/circle","ministério/omitir":"ministry/omit","alcançar/e":"reach/and","tábua/placa":"board/plate","discurso/válvula":"speech/valve","figura/aparência":"figure/appearance","equilíbrio/médio":"balance/average","perda/prejuízo":"loss/damage","denso/íntimo":"dense/intimate","facção/enviar":"faction/send","instrução/leitura kun":"instruction/kun reading","aluguel/salário":"rent/wages","duro/rígido":"hard/rigid","fresco/vívido":"fresh/vivid","braço/habilidade":"arm/skill","algodão":"cotton","constituição":"constitution","trilhão/presságio":"trillion/omen","fundir/finanças":"melt/finance","baía":"bay","cérebro":"brain","província/estado":"province/state","repartição pública":"government office","depósito/garagem":"storage/garage","próspero/servir":"prosperous/serve","distância":"distance","separar/distância":"separate/distance","resultado/mérito":"result/merit","abreviar/estratégia":"abbreviate/strategy","úmido":"humid","senhor/palácio":"lord/palace","respeitável/nobre":"respectable/noble","estranho/ímpar":"strange/odd","minúsculo/sutil":"tiny/subtle","túmulo":"grave/tomb","músculo/enredo":"muscle/plot","lágrima":"tear","bastão":"stick/rod","pó/farinha":"powder/flour","grão":"grain","capítulo/insígnia":"chapter/insignia","pântano":"swamp","maré":"tide","feijão/vasilha":"bean/container","pássaro":"bird","chifre/ângulo":"horn/angle","carapaça/primeiro":"shell/first","víscera/órgão":"viscera/organ","estômago":"stomach","fígado/crucial":"liver/crucial","pulmão":"lung","chão/cama":"floor/bed","tranca/cápsula":"lock/capsule","poço":"well","crisântemo":"chrysanthemum","orquídea":"orchid","aço":"steel","lâmina":"blade","canhão":"cannon","lâmpada/luz":"lamp/light","trovão":"thunder","arco-íris":"rainbow","espaço/ar":"space/air","universo/céu":"universe/sky","trilho/órbita":"rail/orbit","rastro/vestígio":"trace/remnant","pérola":"pearl","tropa/esquadrão":"troop/squad","asseado/íntegro":"neat/upright","gratidão/favor":"gratitude/favor","preguiça":"laziness","esforçar-se/animar":"strive/encourage","bactéria/fungo":"bacteria/fungus","isentar/licença":"exempt/license","punição":"punishment","sábio/esperto":"wise/clever","comum/ordinário":"ordinary/common","magnífico/austrália":"magnificent/Australia","esplêndido/flor":"splendid/flower","belo/esplêndido":"beautiful/splendid","nó/economizar":"knot/save","estação do ano":"season","dez dias/época":"ten days/season","calendário":"calendar","cerimônia/etiqueta":"ceremony/etiquette","demônio/espírito":"demon/spirit","palácio/santuário":"palace/shrine","formação/posição":"formation/position","compaixão":"compassion","honra/glória":"honor/glory","júbilo/celebração":"joy/celebration","melancolia/inquietação":"melancholy/restlessness","recôndito/espectral":"secluded/spectral","solitário/silencioso":"lonely/silent","deixar (herança)/perder":"leave (an inheritance)/lose","mania/vício":"habit/addiction","indolência":"indolence","arrogância/lento":"arrogance/slow","prudência":"prudence","abraçar/apoiar":"embrace/support","próspero/frequente":"prosperous/frequent","prosperar/glória":"prosper/glory","autoridade/imponência":"authority/imposing presence","abolir/em ruínas":"abolish/in ruins","aroma/fragrância":"aroma/fragrance","já/anteriormente":"already/previously","notável/excelente":"notable/excellent","notável/herói":"notable/hero","clarear/límpido":"clear/be limpid","friccionar/roçar":"rub/chafe","requintado/essência":"refined/essence","inútil/vão":"useless/vain","miserável/trágico":"miserable/tragic","espetar/cartão":"stab/card","núcleo":"core/nucleus","borda/laço":"edge/bond","côncavo":"concave","ácido/azedo":"acid/sour","infância":"childhood","criança/infante":"child/infant","enlouquecer/fanático":"go mad/fanatic","ordem/prefácio":"order/preface","inverso/contrário":"reverse/opposite","acumular/e também":"accumulate/also","vazio/vão":"empty/vain","ilusão/fantasma":"illusion/phantom","ócio/quietude":"leisure/quietness","tranquilo/de preferência":"calm/rather","solitário/órfão":"lonely/orphan","prisão":"prison","graça/bênção":"grace/blessing","lança":"spear","firme/sólido":"firm/solid","macio/flexível":"soft/flexible","distante/longínquo":"distant/remote","único/somente":"only/solely","ainda/além":"still/besides","além disso":"moreover","imediato/isto é":"immediate/in other words","cereal/grão":"grain/cereal","cerâmica":"ceramics","magnético/porcelana":"magnetic/porcelain","minério":"ore","pântano/abundância":"marsh/abundance","queimar/impaciência":"burn/impatience","engordar/fértil":"fatten/fertile","linho/dormência":"flax/numbness","próspero/elevado":"prosperous/elevated","lábio":"lip","brasão/padrão":"crest/pattern","cabo/padrão":"handle/pattern","chapéu":"hat","obstáculo/barreira":"obstacle/barrier","infortúnio":"misfortune","má sorte/violento":"bad luck/violent","indignação/lamento":"indignation/lament","inscrição/gravar":"inscription/engrave","robusto/magnífico":"robust/magnificent"};
Object.assign(CONTENT_EN,CONTENT_EN_PART43);
let BIDI_PAIRS=makeBidiPairs();
function refreshBidiPairs(){BIDI_PAIRS=makeBidiPairs();}
const CONTENT_EN_PART32 = {"mãe": "mother", "telhado": "roof", "empresa": "company", "metade": "half", "oeste": "west", "faca": "knife", "dez": "ten", "pai": "father", "irmão mais velho": "older brother", "irmã mais velha": "older sister", "irmã mais nova": "younger sister", "o quê": "what", "encontrar": "find", "país": "country", "leste": "east", "sul": "south", "norte": "north", "muito": "very much", "vir": "come", "beber": "drink", "eletricidade": "electricity", "barato": "cheap", "velho": "old", "loja": "shop", "portão": "gate", "entardecer": "dusk", "irmão mais novo": "younger brother", "privado": "private", "santuário": "shrine", "entender": "understand", "dia da semana": "day of the week", "meio-dia": "noon", "frente": "front", "atrás": "behind", "fora": "outside", "estrangeiro": "foreigner", "longo": "long", "idioma": "language", "alto": "tall / high", "pouco": "a little", "cruz": "cross", "pernas": "legs", "irmãos": "brothers / siblings", "irmãs": "sisters", "arco": "bow", "arroz": "rice", "altar": "altar", "esta semana": "this week", "semana que vem": "next week", "manhã": "morning", "tarde": "afternoon", "passo": "step", "de costas": "with one’s back turned", "rua": "street", "telefone": "telephone", "orelha": "ear", "jornal": "newspaper", "chuva": "rain", "machado": "axe", "telheiro": "shed", "base": "base", "amizade": "friendship", "quanto": "how much", "reunião": "meeting", "nação": "nation", "minuto": "minute", "dividir": "divide", "intervalo": "interval / break", "entre": "between", "cada": "each", "todo": "every / all", "depois": "after / later", "chefe": "chief / boss", "linha": "line", "perguntar": "ask", "caro": "expensive", "tranquilo": "calm", "antigo": "ancient / old", "pai (de outra pessoa)": "someone else’s father", "os pais": "parents", "os dois seios": "the two breasts", "mãe (de outra pessoa)": "someone else’s mother", "pátria": "homeland", "mercado": "market", "chifrinhos": "little horns", "discípulo": "disciple", "ainda não": "not yet", "outra mão": "other hand", "amigo(a)": "friend", "amigo (formal)": "friend (formal)", "braço que recolhe": "reaching arm", "possível": "possible", "quantas pessoas": "how many people", "que horas": "what time", "sociedade": "society", "cerca": "fence", "muralha": "wall", "jade": "jade", "China": "China", "exterior": "outside / exterior", "instante": "moment", "templo": "temple", "uma hora": "one hour", "às vezes": "sometimes", "separar": "separate", "cinco minutos": "five minutes", "os dois lados": "both sides", "corte": "cut", "1h30": "1:30", "ser humano": "human being", "chapéu": "hat", "todo dia": "every day", "toda semana": "every week", "caminhar": "walk", "circuito": "circuit", "asas": "wings", "pássaro": "bird", "domingo": "Sunday", "que dia da semana": "what day of the week", "traço": "stroke", "traços": "strokes", "carne": "meat", "fio": "thread", "adivinhação": "divination", "lado de fora": "outside", "Tóquio": "Tokyo", "ninho": "nest", "Kansai": "Kansai", "topo": "top", "tenda": "tent", "planta": "plant", "sudeste": "southeast", "colher": "spoon", "Hokkaido": "Hokkaido", "cabelo + bengala": "hair + cane", "comprido": "long", "presidente": "president", "noite": "night", "outra noite": "another night", "talvez": "maybe", "banco": "bank", "viagem": "trip", "horizonte": "horizon", "grãos": "grains", "vender": "sell", "pincel": "brush", "dicionário": "dictionary", "biblioteca": "library", "tampa": "lid", "tigela": "bowl", "boca aberta": "open mouth", "bebida": "drink / beverage", "concha": "shell", "rede": "net", "compras": "shopping", "relâmpago": "lightning", "trem": "train", "cinco": "five", "medida": "measure", "janela": "window", "alto, caro": "high / expensive", "de pé": "standing", "usado": "used", "tirar": "remove / take off", "um pouco": "a little", "escasso": "scarce", "ocupar": "occupy", "cafeteria": "cafeteria", "kanji": "kanji", "minuto / dividir": "minute / divide", "intervalo / entre": "interval / between", "cada / todo": "each / every", "frente / antes": "front / before", "depois / atrás": "after / behind", "longo / chefe": "long / chief", "alto / caro": "high / expensive"};
Object.assign(CONTENT_EN, CONTENT_EN_PART32);
refreshBidiPairs();

/* Parte 13 — cobertura adicional de textos didáticos e estados dinâmicos.
   Traduções curtas e seguras são mantidas aqui para evitar substituir dentro de
   palavras maiores. Nomes próprios, kana e exemplos japoneses permanecem intactos. */
const I18N_PART13={
  'toque para continuar':'tap to continue','toque para voltar':'tap to go back','toque para tentar novamente':'tap to try again','tente novamente':'try again',
  'salvar':'save','salve':'save','salvo':'saved','salva':'saved','salvos':'saved','salvas':'saved','carregar':'load','carregando':'loading','recarregar':'reload',
  'abrir':'open','fechar':'close','cancelar':'cancel','confirmar':'confirm','voltar':'back','próximo':'next','anterior':'previous','continuar':'continue','concluir':'complete',
  'resultado':'result','resultados':'results','resposta':'answer','respostas':'answers','pergunta':'question','perguntas':'questions','certo':'correct','errado':'wrong',
  'erro':'error','erros':'errors','acerto':'correct answer','acertos':'correct answers','tentativa':'attempt','tentativas':'attempts','dica':'hint','dicas':'hints',
  'nota':'score','notas':'scores','pontuação':'score','pontuações':'scores','progresso':'progress','objetivo':'goal','objetivos':'goals','meta':'goal','metas':'goals',
  'nível':'level','níveis':'levels','unidade':'unit','unidades':'units','etapa':'step','etapas':'steps','lição':'lesson','lições':'lessons','trilha':'path',
  'revisão':'review','revisões':'reviews','prática':'practice','treino':'practice','exercício':'exercise','exercícios':'exercises','estudo':'study','estudar':'study',
  'aprender':'learn','aprendido':'learned','aprendidos':'learned','aprendida':'learned','aprendidas':'learned','visto':'seen','vistos':'seen','não visto':'not seen',
  'significado':'meaning','significados':'meanings','leitura':'reading','leituras':'readings','pronúncia':'pronunciation','pronunciar':'pronounce','escrita':'writing',
  'traçado':'writing','traços':'strokes','traço':'stroke','radical':'radical','radicais':'radicals','componente':'component','componentes':'components',
  'exemplo':'example','exemplos':'examples','palavra':'word','palavras':'words','frase':'sentence','frases':'sentences','vocabulário':'vocabulary',
  'mnemônico':'mnemonic','mnemônicos':'mnemonics','explicação':'explanation','explicações':'explanations','dica visual':'visual hint','pista visual':'visual clue',
  'hoje':'today','amanhã':'tomorrow','ontem':'yesterday','agora':'now','depois':'later','antes':'before','aqui':'here','lá':'there','sempre':'always','nunca':'never',
  'dia':'day','dias':'days','semana':'week','semanas':'weeks','mês':'month','meses':'months','ano':'year','anos':'years','hora':'hour','horas':'hours',
  'manhã':'morning','tarde':'afternoon','noite':'night','início':'start','fim':'end','meio':'middle','primeiro':'first','último':'last',
  'você':'you','seu':'your','sua':'your','seus':'your','suas':'your','nós':'we','nosso':'our','nossa':'our','meu':'my','minha':'my',
  'sim':'yes','não':'no','nenhum':'none','nenhuma':'none','todos':'all','todas':'all','alguns':'some','algumas':'some','mais':'more','menos':'less',
  'fácil':'easy','difícil':'difficult','simples':'simple','forte':'strong','fraco':'weak','fraca':'weak','novo':'new','novos':'new','nova':'new','novas':'new',
  'concluído':'completed','concluída':'completed','concluídos':'completed','concluídas':'completed','bloqueado':'locked','bloqueada':'locked','disponível':'available',
  'indisponível':'unavailable','ativado':'enabled','ativada':'enabled','desativado':'disabled','desativada':'disabled','ligado':'on','desligado':'off',
  'configuração':'setting','configurações':'settings','preferência':'preference','preferências':'preferences','idioma':'language','ajuda':'help',
  'privacidade':'privacy','conta':'account','perfil':'profile','dados':'data','nome':'name','senha':'password','código':'code','códigos':'codes',
  'pesquisar':'search','pesquisa':'search','encontrar':'find','encontre':'find','filtrar':'filter','filtro':'filter','filtros':'filters','selecionar':'select','seleção':'selection',
  'favorito':'favorite','favoritos':'favorites','favorita':'favorite','favoritas':'favorites','nota pessoal':'personal note','notas pessoais':'personal notes',
  'sair':'exit','entrar':'enter','enviar':'send','receber':'receive','copiar':'copy','copiado':'copied','compartilhar':'share','compartilhado':'shared',
  'sincronizar':'sync','sincronização':'sync','sincronizado':'synced','desconectado':'disconnected','conectado':'connected','offline':'offline','online':'online',
  'permissão':'permission','permissões':'permissions','microfone':'microphone','áudio':'audio','som':'sound','voz':'voice','fala':'speech','câmera':'camera',
  'escuro':'dark','claro':'light','automático':'automatic','sistema':'system','tema':'theme','fonte':'font','tamanho':'size','efeitos':'effects',
  'começar':'start','comece':'start','recomeçar':'restart','reiniciar':'restart','continuar':'continue','parar':'stop','pausar':'pause','retomar':'resume',
  'pronto':'ready','quase lá':'almost there','muito bem':'well done','parabéns':'congratulations','continue assim':'keep it up','bom trabalho':'good work',
  'nenhum resultado':'no results','nada encontrado':'nothing found','ainda não':'not yet','sem dados':'no data','sem conexão':'no connection',
  'carregamento':'loading','aguarde':'please wait','tente de novo':'try again','algo deu errado':'something went wrong','não foi possível':'could not',
  'desfazer':'undo','refazer':'redo','limpar':'clear','apagar':'delete','remover':'remove','restaurar':'restore','zerar':'reset',
  'Jōyō':'Jōyō','kanji':'kanji','kana':'kana','hiragana':'hiragana','katakana':'katakana','romaji':'romaji'
};
for(const [k,v] of Object.entries(I18N_PART13)){if(!I18N.pt[k])I18N.pt[k]=k;if(!I18N.en[k])I18N.en[k]=v;}


/* ────────── Parte 14 — cobertura de conteúdo, perfis e estados de estudo ────────── */
const I18N_PART14={
  'Máscara de raposa':'Fox mask',
  'Boneco da persistência':'Doll of perseverance',
  'Máscara de ogro':'Ogre mask',
  'Carpa da perseverança':'Carp of perseverance',
  'Cão-guaxinim travesso':'Mischievous raccoon dog',
  'Máscara do espírito':'Spirit mask',
  'Dragão das nuvens':'Cloud dragon',
  'Máscara de nō':'Noh mask',
  'Leão-guardião':'Guardian lion',
  'Bebê urso':'Bear cub',
  'Cãozinho feliz':'Happy little dog',
  'Corujinha':'Little owl',
  'Sábio da noite':'Wise one of the night',
  'Gato Secreto':'Secret Cat',
  'Desbloqueado — código 1357':'Unlocked — code 1357',
  'Meu desenho':'My drawing',
  'feito por você':'made by you',
  'amigo(a)':'friend',
  'irmão mais velho':'older brother',
  'irmã mais velha':'older sister',
  'irmão mais novo':'younger brother',
  'irmã mais nova':'younger sister',
  'pátria':'homeland',
  'santuário':'shrine',
  'empresa':'company',
  'país':'country',
  'nação':'nation',
  'Japão':'Japan',
  'China':'China',
  'exterior':'abroad / outside',
  'estrangeiro':'foreigner',
  'pernas':'legs',
  'mão':'hand',
  'outra mão':'other hand',
  'mulher':'woman',
  'mercado':'market',
  'ainda não':'not yet',
  'arco':'bow',
  'amigo':'friend',
  'amizade':'friendship',
  'o quê':'what',
  'quanto':'how much',
  'encontrar':'meet / find',
  'reunião':'meeting',
  'altar':'altar',
  'muralha':'wall',
  'jade':'jade',
  'agora':'now',
  'tempo':'time',
  'uma hora':'one hour',
  'às vezes':'sometimes',
  'intervalo':'interval',
  'entre':'between',
  'ser humano':'human being',
  'cada':'each',
  'todo':'every',
  'toda':'every',
  'toda semana':'every week',
  'domingo':'Sunday',
  'que dia da semana':'what day of the week',
  'manhã':'morning',
  'tarde':'afternoon',
  'frente':'front',
  'nome':'name',
  'depois':'after / later',
  'atrás':'behind',
  'lado de fora':'outside',
  'leste':'east',
  'oeste':'west',
  'sul':'south',
  'norte':'north',
  'chefe':'boss',
  'muitas':'many',
  'pouco':'little',
  'caminho':'path',
  'vir':'come',
  'semana que vem':'next week',
  'falar':'speak',
  'telefone':'telephone',
  'ouvir':'hear',
  'jornal':'newspaper',
  'ler':'read',
  'escrever':'write',
  'comprar':'buy',
  'dicionário':'dictionary',
  'biblioteca':'library',
  'refeição':'meal',
  'água':'water',
  'dinheiro':'money',
  'idioma':'language',
  'estação':'station',
  'em frente à estação':'in front of the station',
  'alto, caro':'high, expensive',
  'barato':'cheap',
  'segurança':'safety',
  'novo':'new',
  'antigo':'old',
  'loja':'store',
  'noite':'night',
  'sem':'without',
  'com':'with',
  'para':'for',
  'sobre':'about',
  'dentro':'inside',
  'fora':'outside',
  'acima':'above',
  'abaixo':'below',
  'lado':'side',
  'ponto':'point',
  'cruz':'cross',
  'cruzamento':'intersection',
  'telhado':'roof',
  'porta':'door',
  'portão':'gate',
  'sol':'sun',
  'lua':'moon',
  'árvore':'tree',
  'pássaro':'bird',
  'faca':'knife',
  'palavra':'word',
  'língua':'tongue / language',
  'boca':'mouth',
  'orelha':'ear',
  'cabelo':'hair',
  'velho':'old',
  'jovem':'young',
  'Essas são as primeiras':'These are the first',
  'Escolha uma resposta':'Choose an answer',
  'Resposta correta':'Correct answer',
  'Resposta incorreta':'Incorrect answer',
  'Veja a explicação':'See the explanation',
  'Tente outra vez':'Try again',
  'Muito bem!':'Very good!',
  'Continue estudando':'Keep studying',
  'Próximo kanji':'Next kanji',
  'Kanji anterior':'Previous kanji',
  'Voltar para a trilha':'Back to the path',
  'Voltar para a biblioteca':'Back to the library',
  'Começar a revisar':'Start reviewing',
  'Revisar agora':'Review now',
  'Estudar agora':'Study now',
  'Traçar novamente':'Write again',
  'Ouvir novamente':'Listen again',
  'Mostrar resposta':'Show answer',
  'Ocultar resposta':'Hide answer',
  'Ver exemplo':'View example',
  'Mais detalhes':'More details',
  'Detalhes do kanji':'Kanji details',
  'Informações do kanji':'Kanji information',
  'Palavras relacionadas':'Related words',
  'Leituras on-yomi':'On readings',
  'Leituras kun-yomi':'Kun readings',
  'Exemplos de uso':'Usage examples',
  'Componentes do kanji':'Kanji components',
  'Kanji semelhantes':'Similar kanji',
  'Progresso da trilha':'Path progress',
  'Seu progresso':'Your progress',
  'Hoje você estudou':'Today you studied',
  'Dias estudados':'Study days',
  'Sequência atual':'Current streak',
  'Melhor sequência':'Best streak',
  'Acertos':'Correct answers',
  'Erros':'Mistakes',
  'Tentativas':'Attempts',
  'Tempo de estudo':'Study time',
  'Nenhum kanji disponível':'No kanji available',
  'Nenhuma revisão agora':'No reviews right now',
  'Tudo revisado':'Everything reviewed',
  'Tudo concluído':'Everything completed',
  'Permitir notificações':'Allow notifications',
  'Notificações bloqueadas':'Notifications blocked',
  'Ativar notificações':'Enable notifications',
  'Desativar notificações':'Disable notifications',
  'Abrir configurações do navegador':'Open browser settings',
  'Instalar aplicativo':'Install app',
  'Aplicativo instalado':'App installed',
  'Atualização disponível':'Update available',
  'Atualizando…':'Updating…',
  'Atualizado':'Updated',
  'Versão':'Version',
  'Fechar aviso':'Dismiss notice',
  'Tema claro':'Light theme',
  'Tema escuro':'Dark theme',
  'Seguir sistema':'Follow system',
  'Idioma do sistema':'System language',
  'Usar inglês':'Use English',
  'Usar português':'Use Portuguese',
  'Idioma aplicado':'Language applied',
  'A alteração será aplicada imediatamente':'The change will be applied immediately',
  'Preferência salva':'Preference saved',
  'Dados salvos neste dispositivo':'Data saved on this device',
  'Exportar dados':'Export data',
  'Importar dados':'Import data',
  'Apagar todos os dados':'Delete all data',
  'Restaurar dados':'Restore data',
  'Dados importados':'Data imported',
  'Dados exportados':'Data exported',
  'Nenhum dado para importar':'No data to import',
  'Operação cancelada':'Operation cancelled',
  'Pesquisar um kanji':'Search for a kanji',
  'Pesquisar por significado':'Search by meaning',
  'Filtrar por nível':'Filter by level',
  'Filtrar por traços':'Filter by strokes',
  'Todos os níveis':'All levels',
  'Todos os traços':'All stroke counts',
  'Limpar filtros':'Clear filters',
  'Resultado da pesquisa':'Search result',
  'Resultados da pesquisa':'Search results',
  'Nenhum resultado encontrado':'No results found',
  'Jōyō 2.136':'Jōyō 2,136',
  'kanji de uso comum':'common-use kanji',
  'Lista completa':'Complete list',
  'Trilha completa':'Complete path',
  'Unidade concluída':'Unit completed',
  'Unidade atual':'Current unit',
  'Próxima unidade':'Next unit',
  'Desbloquear unidade':'Unlock unit',
  'Unidade bloqueada':'Locked unit',
};
for(const [k,v] of Object.entries(I18N_PART14)){if(!I18N.pt[k])I18N.pt[k]=k;if(!I18N.en[k])I18N.en[k]=v;}

/* ────────── Parte 15 — cobertura adicional e textos dinâmicos ────────── */
const I18N_PART15={
  'Curso Fechado':'Locked course',
  'Todos os kanji da trilha':'All kanji in the path',
  '1 unidade 100% completa':'1 unit 100% complete',
  'Todas as unidades':'All units',
  '10 kanji sem ajuda':'10 kanji without help',
  '50 traçados feitos':'50 writing sessions',
  '5 pronúncias certas':'5 correct pronunciations',
  'Praticar em 10 dias':'Practice on 10 days',
  '20 acertos seguidos':'20 correct answers in a row',
  '100% numa sessão':'100% in one session',
  'Juntar 1000 XP':'Earn 1000 XP',
  'Ainda faltam':'Still remaining',
  '48 a 113 kanji':'48 to 113 kanji',
  '8 ou 19 unidades':'8 or 19 units',
  'iniciante':'beginner',
  'Acompanhar':'Follow',
  'Acompanhamento':'Tracking',
  'Base de estudo':'Study base',
  'Modo de estudo':'Study mode',
  'Sessão de hoje':'Today’s session',
  'Tempo hoje':'Today’s time',
  'Últimos 7 dias':'Last 7 days',
  'Últimos 30 dias':'Last 30 days',
  'Esta semana':'This week',
  'Começo do N5':'N5 beginning',
  'N5 completo':'N5 complete',
  'Próximo nível':'Next level',
  'Próxima revisão':'Next review',
  'Revisões de hoje':'Today’s reviews',
  'Kanji estudados':'Kanji studied',
  'kanji na fila':'kanji in queue',
  'kanji restantes':'kanji remaining',
  'kanji aprendidos':'kanji learned',
  'kanji vistos':'kanji seen',
  'Todos os kanji':'All kanji',
  'Mostrar todos':'Show all',
  'Pesquisar um kanji':'Search for a kanji',
  'Buscar kanji':'Search kanji',
  'Search all kanji':'Search all kanji',
  'Achar o kanji':'Find the kanji',
  'Find the kanji':'Find the kanji',
  'Digite um kanji':'Enter a kanji',
  'Praticar o traçado':'Practice the stroke order',
  'Traçar agora':'Write now',
  'Começar revisão':'Start review',
  'Estudar agora':'Study now',
  'Revisar agora':'Review now',
  'Ver diagnóstico':'View diagnostics',
  'Atualizar agora':'Update now',
  'Recarregar agora':'Reload now',
  'Instalar agora':'Install now',
  'Conectar agora':'Connect now',
  'Entrar sem conta':'Continue without an account',
  'Seu progresso':'Your progress',
  'Progresso hoje':'Today’s progress',
  'Progresso salvo':'Progress saved',
  'Traçado salvo':'Writing saved',
  'Nome salvo':'Name saved',
  'Idioma salvo':'Language saved',
  'Dados salvos':'Data saved',
  'Dados salvos neste dispositivo':'Data saved on this device',
  'Treino salvo':'Practice saved',
  'Avatar salvo!':'Avatar saved!',
  'Kanji completo!':'Kanji complete!',
  'Etapa completa':'Step complete',
  'Unidade completa':'Unit complete',
  'Path complete!':'Path complete!',
  'Unit complete':'Unit complete',
  'Session complete':'Session complete',
  'Reset complete':'Reset complete',
  'Import complete':'Import complete',
  'Sync complete':'Sync complete',
  'Comece agora':'Start now',
  'Começar agora':'Start now',
  'Bora começar?':'Ready to start?',
  'Pronto por hoje':'Done for today',
  'Até amanhã':'See you tomorrow',
  'Olha como é':'See how it looks',
  'Compare com':'Compare with',
  'Não confunda com':'Do not confuse with',
  'Pra não esquecer':'To help you remember',
  'Sem pressa':'No rush',
  'Com calma':'Take it slowly',
  'Não conectado':'Not connected',
  'Sem conexão':'No connection',
  'Sem conexão com o servidor.':'No connection to the server.',
  'Não disponível':'Not available',
  'Disponível':'Available',
  'Indisponível':'Unavailable',
  'Não foi possível':'Could not',
  'Não era essa.':'That was not it.',
  'Não captei':'I didn’t catch that',
  'Não ouvi nada':'I didn’t hear anything',
  'Fale agora':'Speak now',
  'Você disse':'You said',
  'Você falou':'You spoke',
  'Você acertou':'You got it right',
  'Você errou':'You got it wrong',
  'Ainda não':'Not yet',
  'Não visto':'Not seen',
  'Revisou hoje':'Reviewed today',
  'Aprendeu hoje':'Learned today',
  'Traçou hoje':'Wrote today',
  'Ouviu hoje':'Listened today',
  'Respondeu hoje':'Answered today',
  'Bom trabalho':'Good work',
  'Bons estudos':'Happy studying',
  'Parabéns':'Congratulations',
  'Recompensa':'Reward',
  'Levar Adiante':'Carry on',
  'Recomendar':'Recommend',
  'Compartilhar':'Share',
  'Compartilhe o seu também.':'Share yours too.',
  'Pedir o código':'Request the code',
  'Seu código':'Your code',
  'Seu nome':'Your name',
  'Escolha seu avatar':'Choose your avatar',
  'Alterar nome':'Change name',
  'Salvar nome':'Save name',
  'Apagar meu desenho':'Delete my drawing',
  'Abrir como app':'Open as an app',
  'Adicionar à tela inicial':'Add to home screen',
  'Leve o KanjiDō com você':'Take KanjiDō with you',
  'KanjiDō na tela inicial':'KanjiDō on your home screen',
  'Acesse como um app, direto e sem procurar pelo navegador.':'Use it like an app, without searching for it in your browser.',
  'Tocar para ouvir':'Tap to listen',
  'Toque para ouvir':'Tap to listen',
  'Toque para continuar':'Tap to continue',
  'Toque para voltar':'Tap to go back',
  'Toque para tentar novamente':'Tap to try again',
  'Repetir':'Repeat',
  'Repita o traço':'Repeat the stroke',
  'Primeiro traço':'First stroke',
  'Último traço':'Last stroke',
  'Próximo traço':'Next stroke',
  'Ordem dos traços':'Stroke order',
  'Número de traços':'Stroke count',
  'Partes do kanji':'Kanji components',
  'Kanji parecido':'Similar kanji',
  'Lista completa':'Complete list',
  'Lista Jōyō':'Jōyō list',
  'Kanji de uso comum':'Common-use kanji',
  '2.136 kanji':'2,136 kanji',
  'Common-use kanji':'Common-use kanji',
  'All 2,136 kanji':'All 2,136 kanji',
};
for(const [k,v] of Object.entries(I18N_PART15)){if(!I18N.pt[k])I18N.pt[k]=k;if(!I18N.en[k])I18N.en[k]=v;}

/* Parte 17 — auditoria final da camada bilíngue e textos que ainda estavam
   espalhados diretamente nas telas renderizadas. Mantemos japonês, kana,
   romaji e nomes próprios intactos. */
const I18N_PART17={
  'CONTINUAR':'CONTINUE','pular':'skip','Como instalar':'How to install',
  'KanjiDō na tela inicial':'KanjiDō on your home screen','Acesse como um app, direto e sem procurar pelo navegador.':'Use it like an app, without searching for it in your browser.','Adicionar':'Add',
  'Algo travou ao montar a tela':'Something went wrong while building the screen','Nada foi perdido. Toque abaixo para recarregar a trilha.':'Nothing was lost. Tap below to reload the path.','RECARREGAR':'RELOAD','Voltar para o N5 base':'Back to the N5 base','Trilha N5 restaurada':'N5 path restored',
  'Código de acesso':'Access code','O modo livre está <b style=\"color:var(--kin)\">ativo</b>.':'Free practice mode is <b style=\"color:var(--kin)\">active</b>.','Digite o código de 4 dígitos.':'Enter the 4-digit code.','CONFIRMAR':'CONFIRM',
  'Modo livre ativado ⚡':'Free practice mode enabled ⚡','Modo livre desativado':'Free practice mode disabled','Vidas infinitas e avanço liberado':'Unlimited lives and progression unlocked','Modo livre desligado':'Free practice mode turned off',
  '✓ Só você aparece no ranking':'✓ Only you appear on the leaderboard','✓ Ranking global restaurado':'✓ Global leaderboard restored','👑 Só você aparece no ranking agora':'👑 Only you appear on the leaderboard now','🌐 Ranking global restaurado':'🌐 Global leaderboard restored',
  '✓ Avisos ocultados':'✓ Notices hidden','🐱 Gato Secreto DESBLOQUEADO!':'🐱 Secret Cat UNLOCKED!','🐱 Gato Secreto reativado':'🐱 Secret Cat reactivated','🎉 Novo avatar disponível no seu perfil!':'🎉 New avatar available on your profile!','Você virou o gato secreto!':'You became the Secret Cat!','Código inválido':'Invalid code',
  'Desativar modo livre':'Disable free practice mode','Com o modo livre: vidas infinitas, botão para pular perguntas e para concluir a lição na hora.':'With free practice mode: unlimited lives, a skip button, and instant lesson completion.',
  'Aprender':'Learn','Quiz de significado':'Meaning quiz','Quiz de leitura':'Reading quiz','Escrever':'Write','Escrever os':'Write the','Formar palavras':'Build words','Falar em voz alta':'Speak aloud','Prova da unidade':'Unit test','Testar e pular':'Test and skip',
  'Unidade completa':'Unit complete','COMEÇAR':'START','Termine as etapas anteriores primeiro':'Finish the previous steps first','Treino relâmpago':'Quick practice','12 perguntas de tudo que você já viu':'12 questions from everything you have seen',
  'Os 6 kanji':'The 6 kanji','Ainda não tem nada aqui':'Nothing here yet','Faça a primeira etapa da trilha. Os kanji aparecem aqui sozinhos, na hora certa de revisar.':'Complete the first step of the path. Kanji will appear here automatically when it is time to review.',
  'Mapa de memória':'Memory map','Os que eu já sei':'The ones I already know','fraco':'weak','forte':'strong','Nada para traçar ainda':'Nothing to write yet','Faça a primeira etapa da trilha e os sinais aparecem aqui.':'Complete the first step of the path and the characters will appear here.',
  'Traçado guiado':'Guided writing','Cada traço é conferido na hora: <b style=\"color:var(--txt)\">posição, direção e ordem</b>.':'Every stroke is checked right away: <b style=\"color:var(--txt)\">position, direction, and order</b>.','Errou 3 vezes o mesmo traço, o app desenha ele pra você e segue.':'Miss the same stroke 3 times and the app draws it for you and continues.','Treino de escrita (6 sinais)':'Writing practice (6 characters)',
  'kanji, significado ou romaji':'kanji, meaning, or romaji','Nada aqui':'Nothing here','Tenta outro termo.':'Try another term.','Escolher avatar':'Choose avatar','Números':'Numbers','Respostas':'Answers','Acerto':'Accuracy','Traçados':'Writing sessions','Melhor ofensiva':'Best streak','Maior sequência':'Longest streak',
  'Desenhe seu avatar':'Draw your avatar','Só o que ficar dentro do círculo aparece':'Only what stays inside the circle will appear','Cor de fundo':'Background color','Não deu pra salvar o desenho':'Could not save the drawing','Atual':'Current','Recorde':'Record','Dias no total':'Total days',
  'Refazer a escolha inicial':'Redo the initial choice','Recomeça a trilha escolhida do ponto novo':'Restart the selected path from the new point','Tabelas de kana':'Kana tables','Grade completa para consulta':'Complete reference grid','Com apoio de':'With support from','O que tem aqui dentro':'What is inside','Sinais':'Characters',
  'Detalhes do kanji':'Kanji details','Pra não esquecer':'To help you remember','Regra geral':'General rule','Sua vez. Comece pelo <b>traço 1</b>.':'Your turn. Start with <b>stroke 1</b>.','Do começo. <b>Traço 1</b>.':'From the beginning. <b>Stroke 1</b>.',
  'Fale este kanji em voz alta':'Say this kanji aloud','toque no microfone':'tap the microphone','fale agora':'speak now','não captei':'I didn’t catch that','silêncio':'silence','não ouvi nada':'I didn’t hear anything','Não foi dessa. Tenta de novo':'That was not it. Try again','tente falar mais perto':'try speaking closer',
  'Escrita':'Writing','Pronúncia':'Pronunciation','Kanji novo':'New kanji','O que foi conferido':'What was checked','Dica pra este kanji':'Tip for this kanji','Não confunda com':'Do not confuse with','MODO LIVRE':'FREE PRACTICE MODE','Carregando os traços…':'Loading stroke data…','Praticar o traçado':'Practice stroke order',
  'N5 ao N1':'N5 to N1','com traçado conferido e revisão espaçada.':'with verified stroke order and spaced review.','Termine as etapas anteriores primeiro':'Finish the previous steps first'
};
for(const [k,v] of Object.entries(I18N_PART17)){if(!I18N.pt[k])I18N.pt[k]=k;if(!I18N.en[k])I18N.en[k]=v;}
/* As partes 13–17 entram depois do primeiro cálculo dos pares. Refaça-o para
   que todas as traduções adicionadas nessas partes funcionem no runtime. */
/* Parte 18 — cobertura de textos residuais e atributos HTML/JS. */
const I18N_PART18={
  'CONTINUAR':'CONTINUE','Testar e pular':'Test and skip','Unidade':'Unit','Unidades':'Units','Aprender':'Learn','Quiz 1':'Quiz 1','Quiz 2':'Quiz 2','Escrever':'Write','Palavras':'Words','Vocabulário':'Vocabulary','Falar':'Speak','Prova':'Test',
  'Acesse como um app':'Use it like an app','direto e sem procurar pelo navegador':'directly, without searching in the browser','Adicionar à Tela de Início':'Add to Home Screen','Instalar app':'Install app',
  'Meu desenho':'My drawing','desenhado por você':'drawn by you','feito por você':'made by you','Desenhe seu avatar':'Draw your avatar','Só o que ficar dentro do círculo aparece':'Only what stays inside the circle will appear','Cor de fundo':'Background color','Não deu pra salvar o desenho':'Could not save the drawing',
  'Não deu pra carregar':'Could not load','Não foi possível carregar':'Could not load','Não foi possível salvar':'Could not save','Não foi possível concluir':'Could not complete','Algo travou ao montar a tela':'Something went wrong while building the screen','Nada foi perdido.':'Nothing was lost.','Toque abaixo':'Tap below','RECARREGAR':'RELOAD',
  'Código de acesso':'Access code','código de acesso':'access code','Digite o código de 4 dígitos.':'Enter the 4-digit code.','Código inválido':'Invalid code','Código copiado':'Code copied','código do amigo':'friend code','código da sala':'room code',
  'Modo livre ativado ⚡':'Free practice mode enabled ⚡','Modo livre desativado':'Free practice mode disabled','Modo livre desligado':'Free practice mode turned off','Vidas infinitas e avanço liberado':'Unlimited lives and progression unlocked',
  'Ranking global restaurado':'Global leaderboard restored','Só você aparece no ranking':'Only you appear on the leaderboard','Avisos ocultados':'Notices hidden','Novo avatar disponível no seu perfil!':'New avatar available on your profile!','Você virou o gato secreto!':'You became the Secret Cat!',
  'Nada aqui':'Nothing here','Tenta outro termo.':'Try another term.','Nenhum resultado encontrado':'No results found','Tente outra busca':'Try another search','Limpar busca':'Clear search','Digite para pesquisar':'Type to search',
  'Ligue cada kanji ao significado':'Match each kanji to its meaning','Formar palavra':'Build a word','Formar palavras':'Build words','A ordem certa está aqui embaixo':'The correct order is below','Veja abaixo.':'See below.','Bate com o pedido.':'It matches the prompt.','A diferença de traço é justamente onde a prova pega.':'The stroke difference is exactly what the test checks.',
  'A pergunta queria':'The question asked for','A resposta tinha que ser':'The answer had to be','Sua escolha não era a certa.':'Your choice was not correct.','Veja opção por opção abaixo.':'See each option below.','você marcou':'you selected',
  'Sem perda de vida — essa palavra volta depois':'No life lost — this word will come back later','A leitura correta está aqui embaixo':'The correct reading is below','Pronúncia certa!':'Correct pronunciation!','Tudo bem, segue':'That’s okay, continue','Ficou pra próxima':'We’ll leave that for next time','Falou como um nativo':'You spoke like a native',
  'Fale este kanji em voz alta':'Say this kanji aloud','toque no microfone':'tap the microphone','fale agora':'speak now','não captei':'I didn’t catch that','não ouvi nada':'I didn’t hear anything','tente falar mais perto':'try speaking closer','silêncio':'silence','ouvindo…':'listening…','você disse':'you said',
  'Comece no ponto azul':'Start at the blue dot','Olhe o ponto azul':'Look at the blue point','Puxe o traço inteiro':'Draw the full stroke','Sua vez. Comece pelo':'Your turn. Start with','Perfeito. Agora o':'Perfect. Now','Boa.':'Good.','Refaça o':'Redo the','Deixa comigo. Olha como é o':'I’ve got it. Here is how the','Agora tenta o':'Now try the',
  'Cada traço é conferido na hora':'Every stroke is checked right away','posição, direção e ordem':'position, direction, and order','Traçado conferido':'Verified stroke order','Traçado guiado':'Guided writing','Praticar o traçado':'Practice stroke order','Treino de escrita':'Writing practice','Treino de escrita (6 sinais)':'Writing practice (6 characters)',
  'Mapa de memória':'Memory map','Os que eu já sei':'The ones I already know','Nada para traçar ainda':'Nothing to write yet','Faça a primeira etapa da trilha e os sinais aparecem aqui.':'Complete the first step of the path and the characters will appear here.',
  'O que foi conferido':'What was checked','Dica pra este kanji':'Tip for this kanji','Regra geral':'General rule','Pra não esquecer':'To help you remember','Não confunda com':'Do not confuse with',
  'Detalhes do kanji':'Kanji details','Significado':'Meaning','Leitura':'Reading','Leituras':'Readings','Leituras on':'On readings','Leituras kun':'Kun readings','Radical':'Radical','Radicais':'Radicals','Componentes':'Components','Partes do kanji':'Kanji components','Mnemônico':'Mnemonic','Pista visual':'Visual clue','Explicação':'Explanation','Exemplo':'Example','Exemplos':'Examples','Frase':'Sentence','Frases':'Sentences','Palavra composta':'Compound word','Palavras relacionadas':'Related words',
  'Próximo kanji':'Next kanji','Repetir':'Repeat','Ouvir':'Listen','Falar':'Speak','Escrever':'Write','Ver resposta':'Show answer','Escolha uma resposta':'Choose an answer','Sua resposta':'Your answer','Resposta correta':'Correct answer','Resposta errada':'Wrong answer','Resultado final':'Final result','Tentativas':'Attempts','Precisão':'Accuracy','Perguntas':'Questions','restantes':'remaining',
  'Unidade completa':'Unit complete','Unidade já completa':'Unit already complete','Etapa concluída':'Step complete','Próxima unidade':'Next unit','Próxima etapa':'Next step','Voltar para a trilha':'Back to path','Ir para revisão':'Go to review','Revisões de hoje':'Today’s reviews','Revisões restantes':'Reviews remaining','Revisões concluídas':'Reviews completed','Pronto por hoje':'Done for today','Começar revisão':'Start review','Continuar revisão':'Continue review','Revisar agora':'Review now','Revisar depois':'Review later','Pular':'Skip',
  'Você está na etapa':'You are on step','Você já viu':'You have already seen','sinais':'characters','Traçados':'Writing sessions','Acertos':'Correct answers','Erros':'Mistakes','Maior sequência':'Longest streak','Melhor ofensiva':'Best streak','Meta diária':'Daily goal','Meta atingida':'Goal reached','Meta não atingida':'Goal not reached','Minutos estudados':'Minutes studied','Tempo hoje':'Today’s time',
  'Pesquisar em todos os kanji':'Search all kanji','Buscar kanji':'Search kanji','Buscar por significado':'Search by meaning','Buscar por leitura':'Search by reading','Buscar por palavra':'Search by word','Filtros':'Filters','Aplicar filtros':'Apply filters','Remover filtros':'Clear filters','Ordenar':'Sort','Mais recentes':'Most recent','Mais antigos':'Oldest','Mostrar todos':'Show all','Mostrar aprendidos':'Show learned','Mostrar não vistos':'Show unseen','Somente favoritos':'Favorites only',
  'Seu nome':'Your name','Escolher avatar':'Choose avatar','Perfil':'Profile','Configurações e dados':'Settings and data','Dados do estudo':'Study data','Preferências':'Preferences','Privacidade':'Privacy','Sobre':'About','Ajuda':'Help','Idioma da interface':'Interface language','Selecionar idioma':'Select language','Usar o idioma do sistema':'Use system language','Idioma aplicado':'Language applied','A próxima abertura usará esta preferência.':'The next launch will use this preference.',
  'Progresso deste dispositivo':'Progress on this device','Exportação pronta':'Export ready','Importação pronta':'Import ready','Último backup':'Last backup','Backup local':'Local backup','Restaurar backup':'Restore backup','Conexão com a conta':'Account connection','Você está usando o app sem conta':'You are using the app without an account','Sua conta é opcional':'Your account is optional','Conecte para sincronizar':'Connect to sync',
  'Sem conexão com o servidor.':'No connection to the server.','A tabela ainda não existe. Rode o SQL no Supabase.':'The table does not exist yet. Run the SQL in Supabase.','Habilite Anonymous no Supabase.':'Enable Anonymous in Supabase.','Conectando':'Connecting','conectando…':'connecting…','carregando…':'loading…','salvando…':'saving…','Seu código':'Your code','não sincronizado':'not synced','Compartilhe o seu também.':'Share yours too.','Peça o código de 6 letras de alguém e adicione aqui.':'Ask someone for their 6-letter code and add it here.',
  'Tabelas de kana':'Kana tables','Grade completa para consulta':'Complete reference grid','Consulta':'Reference','Hiragana':'Hiragana','Katakana':'Katakana','APRENDER OS KANA':'LEARN KANA','Ver as tabelas de kana':'View kana tables','Os dois silabários':'The two syllabaries','Dakuten e handakuten':'Dakuten and handakuten','Yōon · os pequenininhos':'Yōon · the small ones','Sokuon · o つ pequeno':'Sokuon · the small つ','Vogal longa':'Long vowel',
  'Passo 1':'Step 1','Passo 2':'Step 2','Passo 3':'Step 3','Por onde você quer começar?':'Where would you like to start?','De onde você parte?':'Where are you starting from?','Começar do zero':'Start from zero','Faço a trilha inteira, da unidade 1 até o fim':'I’ll do the entire path, from unit 1 to the end','OU PULE PARA':'OR SKIP TO','Você já sabe os kanji do 1º ano?':'Do you already know the 1st-grade kanji?','Já sei o básico':'I know the basics','Quero aprender tudo':'I want to learn everything','CONTINUAR':'CONTINUE','COMEÇAR':'START',
  'Nível N5':'N5 level','Nível N4':'N4 level','Nível N3':'N3 level','Nível N2':'N2 level','Nível N1':'N1 level','iniciante':'beginner','intermediário':'intermediate','avançado':'advanced','pré-avançado':'upper-intermediate','do absoluto zero':'complete beginner',
  'N5 ao N1':'N5 to N1','Trilhas':'Paths','Trilha':'Path','Trilha de estudo':'Study path','Trilha completa':'Path complete','Lista completa':'Complete list','Lista Jōyō':'Jōyō list','Kanji de uso comum':'Common-use kanji','Todos os kanji':'All kanji','2.136 kanji':'2,136 kanji',
  'Adicionar à tela inicial':'Add to home screen','Como instalar':'How to install','Acesse como um app, direto e sem procurar pelo navegador.':'Use it like an app, without searching through the browser.','Use o menu do navegador para procurar “Instalar” ou “Adicionar à tela inicial”.':'Use your browser menu to find “Install” or “Add to home screen”.'
};
for(const [k,v] of Object.entries(I18N_PART18)){if(!I18N.pt[k])I18N.pt[k]=k;if(!I18N.en[k])I18N.en[k]=v;}
const CONTENT_EN_PART26={
  "braços":"arms",
  "cruz":"cross",
  "pai":"father",
  "pai (de outra pessoa)":"someone else's father",
  "os pais":"parents",
  "mãe":"mother",
  "corpo":"body",
  "os dois seios":"the two breasts",
  "mãe (de outra pessoa)":"someone else's mother",
  "pátria":"homeland",
  "pernas":"legs",
  "boca":"mouth",
  "irmão mais velho":"older brother",
  "irmãos":"siblings",
  "mulher":"woman",
  "mercado":"market",
  "irmã mais velha":"older sister",
  "irmãs":"sisters",
  "arco":"bow",
  "chifrinhos":"little horns",
  "discípulo":"disciple",
  "ainda não":"not yet",
  "irmã mais nova":"younger sister",
  "mão":"hand",
  "outra mão":"other hand",
  "amigo(a)":"friend",
  "amigo (formal)":"friend (formal)",
  "arroz":"rice",
  "braço que recolhe":"reaching arm",
  "eu":"I",
  "privado":"private",
  "pessoa":"person",
  "possível":"possible",
  "o quê":"what",
  "quantas pessoas":"how many people",
  "que horas":"what time",
  "telhado":"roof",
  "gente":"people",
  "encontrar":"find",
  "empresa":"company",
  "sociedade":"society",
  "altar":"altar",
  "terra":"earth",
  "santuário":"shrine",
  "cerca":"fence",
  "muralha":"wall",
  "jade":"jade",
  "país":"country",
  "China":"China",
  "exterior":"outside",
  "instante":"moment",
  "agora":"now",
  "hoje":"today",
  "esta semana":"this week",
  "sol":"sun",
  "templo":"temple",
  "tempo":"time",
  "uma hora":"one hour",
  "às vezes":"sometimes",
  "faca":"knife",
  "separar":"separate",
  "cinco minutos":"five minutes",
  "entender":"understand",
  "metade":"half",
  "dez":"ten",
  "os dois lados":"both sides",
  "corte":"cut",
  "1h30":"1:30",
  "portão":"gate",
  "ser humano":"human being",
  "chapéu":"hat",
  "todo dia":"every day",
  "toda semana":"every week",
  "caminhar":"walk",
  "estrada":"road",
  "circuito":"circuit",
  "semana que vem":"next week",
  "asas":"wings",
  "pássaro":"bird",
  "domingo":"Sunday",
  "que dia da semana":"what day of the week",
  "traço":"stroke",
  "manhã":"morning",
  "tarde":"afternoon",
  "traços":"strokes",
  "carne":"meat",
  "frente":"front",
  "nome":"name",
  "passo":"step",
  "andar":"walk",
  "fio":"thread",
  "pé":"foot",
  "atrás":"behind",
  "entardecer":"dusk",
  "adivinhação":"divination",
  "lado de fora":"outside",
  "estrangeiro":"foreigner",
  "árvore":"tree",
  "leste":"east",
  "Tóquio":"Tokyo",
  "oeste":"west",
  "ninho":"nest",
  "Kansai":"Kansai",
  "topo":"top",
  "tenda":"tent",
  "planta":"plant",
  "sul":"south",
  "sudeste":"southeast",
  "colher":"spoon",
  "de costas":"with one's back turned",
  "norte":"north",
  "Hokkaido":"Hokkaido",
  "longo":"long",
  "cabelo + bengala":"hair + cane",
  "comprido":"long",
  "presidente":"president",
  "noite":"night",
  "outra noite":"another night",
  "muito":"very much",
  "talvez":"maybe",
  "rua":"street",
  "ir":"go",
  "banco":"bank",
  "viagem":"trip",
  "horizonte":"horizon",
  "grãos":"grains",
  "vir":"come",
  "palavra":"word",
  "língua":"language",
  "falar":"speak",
  "telefone":"telephone",
  "orelha":"ear",
  "ouvir":"hear",
  "jornal":"newspaper",
  "vender":"sell",
  "ler":"read",
  "leitura":"reading",
  "dizer":"say",
  "pincel":"brush",
  "papel":"paper",
  "escrever":"write",
  "dicionário":"dictionary",
  "biblioteca":"library",
  "comida":"food",
  "tampa":"lid",
  "tigela":"bowl",
  "comer":"eat",
  "boca aberta":"open mouth",
  "beber":"drink",
  "bebida":"drink",
  "concha":"shell",
  "rede":"net",
  "dinheiro":"money",
  "comprar":"buy",
  "compras":"shopping",
  "chuva":"rain",
  "relâmpago":"lightning",
  "eletricidade":"electricity",
  "trem":"train",
  "cinco":"five",
  "japonês":"Japanese",
  "inglês":"English",
  "cavalo":"horse",
  "medida":"measure",
  "estação":"station",
  "em frente à estação":"in front of the station",
  "alto":"high",
  "janela":"window",
  "alto, caro":"high, expensive",
  "ensino médio":"high school",
  "barato":"cheap",
  "segurança":"safety",
  "machado":"axe",
  "de pé":"standing",
  "novo":"new",
  "velho":"old",
  "usado":"used",
  "pequeno":"small",
  "tirar":"remove",
  "um pouco":"a little",
  "escasso":"scarce",
  "telheiro":"shed",
  "ocupar":"occupy",
  "loja":"shop",
  "cafeteria":"cafeteria",
};
Object.assign(CONTENT_EN,CONTENT_EN_PART26);
const PART27_EN={
  "Gato Secreto": "Secret Cat",
  "Meu desenho": "My drawing",
  "feito por você": "made by you",
  "CONTINUAR": "CONTINUE",
  "Você já sabe": "Do you already know",
  "Quero aprender tudo": "I want to learn everything",
  "Já sei o básico": "I know the basics",
  "De onde você parte?": "Where are you starting from?",
  "Começar do zero": "Start from scratch",
  "Entrar na trilha": "Enter the path",
  "Faço a trilha inteira": "I’ll do the full path",
  "liberados": "unlocked",
  "aprendidos": "learned",
  "restantes": "remaining",
  "concluídos": "completed",
  "pendentes": "pending",
  "Você fechou os dois silabários": "You completed both syllabaries",
  "Você montou": "You built",
  "que se lê": "read as",
  "resposta revelada": "answer revealed",
  "Ouça e escolha o kana": "Listen and choose the kana",
  "Som para kana": "Sound to kana",
  "Escuta": "Listening",
  "Por onde você quer começar?": "Where do you want to start?",
  "Escolha o seu nível agora. Dá pra trocar quando quiser, e cada trilha guarda o próprio progresso.": "Choose your level now. You can change it anytime, and each path keeps its own progress.",
  "O começo de tudo. Números, família, tempo, direções e os verbos do dia a dia.": "The beginning of everything. Numbers, family, time, directions, and everyday verbs.",
  "A ponte para o japonês adulto: jornal, trabalho, política e sentimentos.": "A bridge to more advanced Japanese: newspapers, work, politics, and feelings.",
  "Para palavras estrangeiras, nomes e onomatopeias. Traços mais retos e angulares.": "For foreign words, names, and onomatopoeia. Straighter, more angular strokes.",
  "Quiz que se adapta": "Adaptive quiz",
  "Errou? A pergunta volta pouco depois": "Missed it? The question comes back shortly.",
  "Revisão espaçada": "Spaced repetition",
  "O app te lembra pouco antes de você esquecer": "The app reminds you shortly before you forget.",
  "Você pode ajustar tudo no Perfil": "You can adjust everything in Profile",
  "Você já viu": "You have already seen",
  "sinais": "symbols",
  "eles aparecem em verde": "they appear in green",
  "Palavras estrangeiras, nomes e onomatopeias. Traços retos e angulares.": "Foreign words, names, and onomatopoeia. Straight, angular strokes.",
  "Katakana": "Katakana",
  "Hiragana e Katakana": "Hiragana and Katakana",
  "COMECE AQUI": "START HERE",
  "Você já sabe os kanji do 1º ano?": "Do you already know the first-year kanji?",
  "Se já domina o começo, escolha a unidade em que quer entrar. Tudo que vem antes fica marcado como concluído.": "If you already know the basics, choose the unit where you want to enter. Everything before it is marked as completed.",
  "Nenhum amigo ainda": "No friends yet",
  "Peça o código de 6 letras de alguém e adicione aqui. Compartilhe o seu também.": "Ask someone for their 6-letter code and add them here. Share yours too.",
  "Ranking vazio": "Empty leaderboard",
  "Ninguém aparece no ranking ainda.": "No one appears on the leaderboard yet.",
  "SUA POSIÇÃO": "YOUR POSITION",
  "Só você aparece no ranking": "Only you appear on the leaderboard",
  "Seu código": "Your code",
  "não sincronizado": "not synced",
  "Salvar meu código no servidor": "Save my code to the server",
  "Código não existe no servidor. Peça pro seu amigo abrir a aba Social.": "That code does not exist on the server. Ask your friend to open the Social tab.",
  "Não deu pra adicionar": "Could not add",
  "Digite o código": "Enter the code",
  "Esse é o seu próprio código": "That is your own code",
  "Esse código só funciona depois de salvar no servidor.": "This code only works after saving it to the server.",
  "Sem conectar, o app funciona 100% offline.": "Without connecting, the app works 100% offline.",
  "Nada é enviado sem você configurar isto.": "Nothing is sent until you configure this.",
  "O servidor já vem configurado. Se demorar, confira sua internet.": "The server is already configured. If it takes too long, check your internet connection.",
  "Tentar de novo": "Try again",
  "Diagnóstico rápido": "Quick diagnostics",
  "Ver diagnóstico": "View diagnostics",
  "testando…": "testing…",
  "conectando…": "connecting…",
  "verificando…": "checking…",
  "Teste se o SQL rodou": "Check whether the SQL ran",
  "Já rodei, verificar": "I ran it, check",
  "Selecione o texto acima e copie": "Select the text above and copy it",
  "Deu erro ao rodar o SQL?": "Did the SQL fail?",
  "Erros comuns": "Common errors",
  "A tabela ainda não existe. Rode o SQL no Supabase.": "The table does not exist yet. Run the SQL in Supabase.",
  "As tabelas ainda não existem no seu projeto Supabase.": "The tables do not exist yet in your Supabase project.",
  "Habilite Anonymous no Supabase.": "Enable Anonymous in Supabase.",
  "Sem conexão com o servidor.": "No connection to the server.",
  "Essas tabelas ainda não existem no seu projeto Supabase.": "These tables do not exist yet in your Supabase project.",
  "Toque no botão azul abaixo. Ele abre o": "Tap the blue button below. It opens the",
  "Janeiro": "January",
  "Fevereiro": "February",
  "Março": "March",
  "Abril": "April",
  "Maio": "May",
  "Junho": "June",
  "Julho": "July",
  "Agosto": "August",
  "Setembro": "September",
  "Outubro": "October",
  "Novembro": "November",
  "Dezembro": "December",
  "de janeiro": "of January",
  "de fevereiro": "of February",
  "de março": "of March",
  "de abril": "of April",
  "de maio": "of May",
  "de junho": "of June",
  "de julho": "of July",
  "de agosto": "of August",
  "de setembro": "of September",
  "de outubro": "of October",
  "de novembro": "of November",
  "de dezembro": "of December",
  "Domingo": "Sunday",
  "Segunda-feira": "Monday",
  "Terça-feira": "Tuesday",
  "Quarta-feira": "Wednesday",
  "Quinta-feira": "Thursday",
  "Sexta-feira": "Friday",
  "Sábado": "Saturday",
  "escola": "school",
  "selo": "stamp",
  "revista": "magazine",
  "tempo": "time",
  "peixinho dourado": "goldfish",
  "terreno": "plot of land",
  "arrozal": "rice field",
  "famoso": "famous",
  "mestre": "master",
  "clima": "weather",
  "paraíso": "paradise",
  "chuvarada": "downpour",
  "estação chuvosa": "rainy season",
  "otorrino": "ENT doctor",
};
Object.assign(CONTENT_EN, PART27_EN);
refreshBidiPairs();

/* ────────── Parte 33: fechamento de lacunas em textos estáticos, diálogos do sistema e créditos ────────── */
const CONTENT_EN_PART33={
  'Criado por':'Created by','Conceito, design, conteúdo e programação.':'Concept, design, content, and programming.','Fiz tudo.':'I did it all.',
  'O que tem aqui dentro':'What is inside','Sinais':'Characters','Avatares':'Avatars','Com apoio de':'With support from',
  'Traçado conferido traço a traço, quizzes que se adaptam ao erro, formação de palavras, reconhecimento de fala, repetição espaçada, ranking e lições em dupla.':'Stroke-by-stroke writing checks, quizzes that adapt to mistakes, word building, speech recognition, spaced repetition, rankings, and paired lessons.',
  'Cada mnemônico foi escrito à mão, um por um.':'Every mnemonic was written by hand, one by one.',
  'dados de traçado':'stroke data','por Ulrich Apel':'by Ulrich Apel','ranking e amigos':'rankings and friends','Todo o resto é feito à mão, sem framework nenhum.':'Everything else is handcrafted, with no framework.',
  'Você já aprendeu':'You have learned','aqui.':'here.','continuar é o que dá força':'continuing is what gives strength',
  'Seis trilhas, do zero ao N1: os dois silabários e os kanji do':'Six paths, from beginner to N1: the two syllabaries and kanji from',
  'com traçado conferido e revisão espaçada.':'with verified writing practice and spaced review.',
  'Os traços vêm do':'The strokes come from','e ficam salvos no aparelho depois da primeira vez.':'and are saved on the device after the first use.',
  'Recomeça a trilha escolhida do ponto novo':'Restarts the selected path from the new starting point',
  'Cada trilha guarda o próprio progresso.':'Each path keeps its own progress.',
  'Refazer a escolha vai REDEFINIR as etapas da trilha que você escolher.':'Restarting the choice will RESET the steps of the path you select.',
  'Os kanji aprendidos e o XP continuam salvos. Continuar?':'Learned kanji and XP will remain saved. Continue?',
  'Isso apaga tudo: kanji, revisões, XP, conquistas. Sem volta. Certeza?':'This deletes everything: kanji, reviews, XP, achievements. There is no undo. Are you sure?',
  'ZERAR PROGRESSO':'RESET PROGRESS','FECHAR':'CLOSE','Ativada':'Enabled','ativada':'enabled','Desconectado':'Disconnected','Zerado':'Reset',
  'Disponível':'Available','Não disponível':'Unavailable','não disponível':'not available','carregando':'loading','Carregando':'Loading',
  'Salvando':'Saving','Salvo':'Saved','Falhou':'Failed','Tente novamente':'Try again','Tentar novamente':'Try again',
  'Sem conexão':'Offline','Sem dados':'No data','Nenhum resultado':'No results','Nenhum kanji encontrado':'No kanji found',
  'Nenhuma palavra encontrada':'No words found','Nenhuma revisão por enquanto':'No reviews for now','Nada para revisar':'Nothing to review',
  'Limpar busca':'Clear search','Limpar filtros':'Clear filters','Fechar':'Close','Abrir':'Open','Salvar':'Save','Cancelar':'Cancel',
  'Confirmar':'Confirm','Continuar':'Continue','Parar':'Stop','Próximo':'Next','Anterior':'Previous','Concluir':'Finish','Concluído':'Completed',
  'Tente de novo':'Try again','Muito bem':'Great job','Quase':'Almost','Perfeito':'Perfect','Continue assim':'Keep it up',
  'Você acertou':'You got it right','Você errou':'You got it wrong','Resposta correta':'Correct answer','Resposta errada':'Wrong answer',
  'Comece aqui':'Start here','Veja aqui':'See here','Toque para começar':'Tap to start','Toque para continuar':'Tap to continue',
  'Arraste para a direita':'Swipe right','Arraste para a esquerda':'Swipe left','Clique para abrir':'Click to open','Toque para abrir':'Tap to open',
  'Modo escuro':'Dark mode','Modo claro':'Light mode','Usar idioma do sistema':'Use system language','Idioma detectado':'Detected language',
  'Configuração salva':'Setting saved','Preferência salva':'Preference saved','Não foi possível salvar':'Could not save',
  'Permissão necessária':'Permission required','Permitir':'Allow','Negar':'Deny','Microfone':'Microphone','Notificações':'Notifications',
  'Adicionar à tela inicial':'Add to home screen','Instalar app':'Install app','Instalar aplicativo':'Install app','Atualização disponível':'Update available',
  'Atualizar':'Update','Atualizando':'Updating','Versão':'Version','Recarregar':'Reload','Recarregando':'Reloading',
  'Biblioteca de kanji':'Kanji library','Detalhes do kanji':'Kanji details','Detalhes':'Details','Informações':'Information',
  'Componentes deste kanji':'Components of this kanji','Palavras relacionadas':'Related words','Exemplos':'Examples','Explicação':'Explanation',
  'Dica':'Tip','Dicas':'Tips','Mnemônico':'Mnemonic','Mnemônicos':'Mnemonics','Radical':'Radical','Radicais':'Radicals',
  'Escrever':'Write','Ouvir':'Listen','Falar':'Speak','Repetir':'Repeat','Mostrar resposta':'Show answer','Esconder resposta':'Hide answer',
  'Resposta':'Answer','Pergunta':'Question','Perguntas':'Questions','Tentativas':'Attempts','Acertos':'Correct','Erros':'Mistakes',
  'Precisão':'Accuracy','Sequência':'Streak','Maior sequência':'Longest streak','Melhor ofensiva':'Best streak',
  'Hoje':'Today','Ontem':'Yesterday','Amanhã':'Tomorrow','Esta semana':'This week','Este mês':'This month','Este ano':'This year',
  'segunda-feira':'Monday','terça-feira':'Tuesday','quarta-feira':'Wednesday','quinta-feira':'Thursday','sexta-feira':'Friday','sábado':'Saturday','domingo':'Sunday',
  'manhã':'morning','tarde':'afternoon','noite':'night','dias':'days','dia':'day','meses':'months','mês':'month','anos':'years','ano':'year',
  'Nenhum':'None','Todos':'All','Todas':'All','Alguns':'Some','Algumas':'Some','Mais':'More','Menos':'Less',
  'Aprendido':'Learned','Aprendida':'Learned','Não aprendido':'Not learned','Não aprendida':'Not learned','Bloqueado':'Locked','Desbloqueado':'Unlocked',
  'Favorito':'Favorite','Favoritos':'Favorites','Remover dos favoritos':'Remove from favorites','Adicionar aos favoritos':'Add to favorites',
  'Nota':'Note','Notas pessoais':'Personal notes','Editar nota':'Edit note','Apagar nota':'Delete note',
  'Perfil atualizado':'Profile updated','Nome salvo':'Name saved','Avatar atualizado':'Avatar updated','Escolher avatar':'Choose avatar',
  'Entrar':'Sign in','Sair':'Sign out','Criar conta':'Create account','Código':'Code','Seu código':'Your code','Código inválido':'Invalid code',
  'Conectando':'Connecting','Conectado':'Connected','Sincronizando':'Syncing','Sincronizado':'Synced','Falha na sincronização':'Sync failed',
  'Dados locais':'Local data','Exportar dados':'Export data','Importar dados':'Import data','Baixar dados':'Download data','Enviar dados':'Upload data',
  'Restaurar dados':'Restore data','Backup':'Backup','Restaurado':'Restored','Importado':'Imported','Exportado':'Exported',
  'Créditos':'Credits','Fechar':'Close'
};
Object.assign(CONTENT_EN,CONTENT_EN_PART33);
refreshBidiPairs();

/* ────────── Parte 34: tradução aprofundada de mnemônicos e descrições pictográficas ────────── */
const CONTENT_EN_PART34 = {
  "feita por você": "made by you",
  "irmão mais velho": "older brother",
  "irmã mais velha": "older sister",
  "irmão mais novo": "younger brother",
  "irmã mais nova": "younger sister",
  "ainda não": "not yet",
  "braço que recolhe": "reaching arm",
  "lado de fora": "outside",
  "semana que vem": "next week",
  "dia da semana": "day of the week",
  "uma hora": "one hour",
  "um pouco": "a little",
  "ficar de pé": "stand up",
  "campo de arroz": "rice field",
  "desenho/traço": "drawing/stroke",
  "todo dia": "every day",
  "uma vez": "once",
  "desta vez": "this time",
  "ser humano": "human being",
  "de costas": "with one’s back turned",
  "frente": "front",
  "atrás": "behind",
  "fora": "outside",
  "entre": "between",
  "depois": "after / later",
  "chefe": "chief / boss",
  "Dois traços. O de baixo é sempre o mais comprido.": "Two strokes. The lower one is always the longer one.",
  "Três traços empilhados. O do meio é o menorzinho.": "Three stacked strokes. The middle one is the shortest.",
  "Um traço deitado, só isso. É de onde tudo começa.": "A single horizontal stroke. That is all. It is where everything begins.",
  "Uma caixinha com duas perninhas dentro, como quatro paredes. Cuidado pra não trocar com 西 (oeste).": "A little box with two legs inside, like four walls. Be careful not to confuse it with 西 (west).",
  "Um Z espremido entre duas linhas, tipo um carretel de linha.": "A Z squeezed between two lines, like a spool of thread.",
  "Um chapeuzinho com duas perninhas embaixo. Parece uma casinha de brinquedo.": "A little hat with two legs underneath. It looks like a toy house.",
  "Um sete de cabeça pra baixo, com o rabinho virando pra direita.": "An upside-down seven, with its little tail turning right.",
  "Duas pernas abrindo. No Japão é número de sorte, porque abre pra cima como um leque.": "Two legs opening outward. In Japan it is a lucky number because it opens upward like a fan.",
  "Uma cruz perfeita. Dois traços que fecham a primeira dezena.": "A perfect cross. Two strokes that complete the first ten.",
  "Um traço em cima do 白 (branco). Um risquinho e o branco vira cem.": "A stroke on top of 白 (white). One little line turns white into one hundred.",
  "É o 十 (dez) com um chapéu inclinado. Dez com chapéu vira mil.": "It is 十 (ten) with a slanted hat. Ten with a hat becomes one thousand.",
  "Poucos traços pra um número tão grande. No Japão se conta de dez mil em dez mil.": "Few strokes for such a large number. In Japan, numbers are counted in units of ten thousand.",
  "Uma moeda vista de frente, dentro da moldura. Além da moeda, quer dizer redondo.": "A coin seen from the front inside a frame. Besides coin, it also means round.",
  "A lua crescente, com duas nuvens atravessando. Como o mês segue a lua, também quer dizer mês.": "A crescent moon with two clouds crossing it. Since the month follows the moon, it also means month.",
  "Uma fogueira: a chama grande no meio e duas faíscas pulando pros lados.": "A bonfire: a large flame in the middle and two sparks jumping to the sides.",
  "Um riacho correndo, com os respingos saindo dos dois lados.": "A stream running, with splashes coming out on both sides.",
  "Um tronco com dois galhos abertos e as raízes descendo. Dá pra ver a árvore inteira.": "A trunk with two open branches and roots going down. You can see the whole tree.",
  "Um broto saindo do chão. A linha de baixo é o solo firme.": "A sprout coming out of the ground. The bottom line is solid earth.",
  "O arroz sendo colhido. Como a colheita é uma por ano, virou o próprio ano.": "Rice being harvested. Since there is one harvest per year, it came to mean the year itself.",
  "Um pé dando o passo à frente do corpo. Quem vai na ponta chega antes.": "A foot stepping ahead of the body. Whoever goes first arrives first.",
  "Duas pernas de perfil, alguém caminhando. Dois traços e pronto.": "Two legs in profile, someone walking. Two strokes and done.",
  "Força 力 no campo 田. O homem que trabalha puxando o arado.": "Strength 力 in the field 田. The man who works pulling the plow.",
  "Uma pessoa sentada de joelhos, com os braços cruzados no colo. Postura tradicional.": "A person sitting on their knees, with arms folded in their lap. A traditional posture.",
  "Um bebê enrolado no cobertor, só a cabeça e os bracinhos de fora.": "A baby wrapped in a blanket, with only the head and little arms showing.",
  "Pessoa 亻 + raiz 本. O corpo é a base de tudo que a gente é.": "Person 亻 + root 本. The body is the basis of everything we are.",
  "Uma mão aberta com os dedos separados e o pulso descendo.": "An open hand with the fingers spread and the wrist going down.",
  "Uma orelha vista de lado, com as dobrinhas de dentro bem desenhadas.": "An ear seen from the side, with the inner folds clearly drawn.",
  "Um olho em pé, com a pupila e a pálpebra. Era deitado, ficou vertical.": "An eye standing upright, with the pupil and eyelid. It used to be horizontal; it became vertical.",
  "Uma boca bem aberta, num quadradinho. Aparece dentro de dezenas de outros kanji.": "A wide-open mouth in a little square. It appears inside dozens of other kanji.",
  "Uma pessoa grande 大 com uma linha por cima da cabeça. Aquilo lá em cima é o céu.": "A large person 大 with a line above the head. That thing up above is the sky.",
  "O vapor subindo da panela de arroz. Virou \"ar\", \"energia\" e até humor.": "Steam rising from a pot of rice. It came to mean “air,” “energy,” and even mood.",
  "Buraco 穴 + trabalho 工. Cavaram tanto que ficou vazio, como o céu aberto.": "Hole 穴 + work 工. They dug so much that it became empty, like an open sky.",
  "Três picos: um alto no meio e dois menores dos lados. É um desenho literal.": "Three peaks: one high in the middle and two smaller ones on the sides. It is a literal drawing.",
  "Três linhas de água descendo entre as margens. Também é desenho puro.": "Three lines of water flowing down between the banks. It is also a purely pictographic form.",
  "Um peixe em pé: cabeça em cima, escamas no meio e as quatro marcas da cauda embaixo.": "A fish standing upright: head on top, scales in the middle, and four tail marks at the bottom.",
  "Um pedaço de carne com as fibras riscadas dentro. Dá pra ver o corte.": "A piece of meat with its fibers marked inside. You can see the cut.",
  "Uma mão levando comida à boca 口. A maioria come com a direita.": "A hand bringing food to the mouth 口. Most people eat with the right hand.",
  "Uma mão segurando a régua 工. A esquerda segura enquanto a direita trabalha.": "A hand holding the ruler 工. The left hand holds it while the right hand works.",
  "Uma pessoa 人 abrigada dentro da moldura 冂. Está do lado de dentro.": "A person 人 sheltered inside the frame 冂. It is on the inside.",
  "Uma pessoa de braços e pernas bem abertos, mostrando o tamanho.": "A person with arms and legs spread wide, showing their size.",
  "Duas montanhas empilhadas: você sobe uma e sai do outro lado.": "Two mountains stacked up: you climb one and come out the other side.",
  "Parece o 人, mas o traço de cima cai pra esquerda, como quem se curva pra passar na porta.": "It looks like 人, but the top stroke falls to the left, like someone bending to pass through a doorway.",
  "Uma árvore 木 + cruzar 交. O prédio de madeira onde os caminhos das crianças se cruzam.": "A tree 木 + cross 交. The wooden building where the children’s paths cross.",
  "Andar 辶 + cabeça 首. Seguir com a cabeça erguida pelo caminho. Também é o \"dō\" de karate-dō.": "Walk 辶 + head 首. Follow the path with your head held high. It is also the “dō” in karate-dō.",
  "Uma carroça vista de cima: o eixo atravessando e as duas rodas nas pontas.": "A cart seen from above: the axle crossing through it and the two wheels at the ends.",
  "Uma pessoa 亻 encostada na árvore 木, tirando uma soneca na sombra.": "A person 亻 leaning against a tree 木, taking a nap in the shade.",
  "Telhado 宀 com um porco 豕 embaixo. Antigamente o animal morava junto, era sinal de casa cheia.": "A roof 宀 with a pig 豕 underneath. In ancient times the animal lived there too, a sign of a full household.",
  "Terra 土 em cima do fogo 火. O barro em brasa fica daquele vermelho vivo.": "Earth 土 above fire 火. Clay glowing in the fire becomes that vivid red.",
  "Sol 日 + som 音. Tão escuro que você só se guia pelo barulho.": "Sun 日 + sound 音. It is so dark that you can only find your way by sound.",
  "Uma flecha 矢 guardada na caixa 匚. O médico tira a flecha e trata a ferida.": "An arrow 矢 stored in a box 匚. The doctor removes the arrow and treats the wound.",
  "Som 音 em cima do coração 心. O que o coração quer dizer é a intenção.": "Sound 音 above the heart 心. What the heart wants to say is intention.",
  "Duas mãos 开 levantando a tranca do portão 門. Está aberto.": "Two hands 开 lifting the gate lock 門. It is open."
};

/* Parte 38 — expansão final de glossário didático e textos compostos de runtime. */
const CONTENT_EN_PART38={'árvore': 'tree', 'mão': 'hand', 'coração': 'heart', 'cabeça': 'head', 'força': 'strength', 'doença': 'illness', 'pássaro': 'bird', 'traços': 'strokes', 'traço': 'stroke', 'segurança': 'safety', 'santuário': 'shrine', 'portão': 'gate', 'irmão mais velho': 'older brother', 'irmã mais velha': 'older sister', 'irmão mais novo': 'younger brother', 'irmã mais nova': 'younger sister', 'irmãos': 'siblings', 'irmãs': 'sisters', 'outra mão': 'other hand', 'braço que recolhe': 'folding arm', 'reunião': 'meeting', 'às vezes': 'sometimes', 'chapéu': 'hat', 'dicionário': 'dictionary', 'pátria': 'homeland', 'discípulo': 'disciple', 'possível': 'possible', 'nação': 'nation', 'adivinhação': 'divination', 'grãos': 'grains', 'relâmpago': 'lightning', 'de pé': 'standing', 'rápido': 'fast', 'espírito': 'spirit', 'precisão': 'precision', 'feito por você': 'made by you', 'amanhã': 'tomorrow', 'depois / atrás': 'after / behind', 'difícil': 'difficult', 'ainda não': 'not yet', 'o quê': 'what', 'próximo': 'next', 'concluído': 'completed', 'disponível': 'available', 'código de acesso': 'access code', 'pronúncia': 'pronunciation', 'mapa de memória': 'memory map', 'versão': 'version', 'já sei o básico': 'I know the basics', 'concluídos': 'completed', 'atenção': 'attention', 'traçado guiado': 'guided stroke practice', 'permissão necessária': 'permission required', 'preferência salva': 'preference saved', 'você acertou': 'you got it right', 'próxima etapa': 'next step', 'ir para revisão': 'go to review', 'não disponível': 'not available', 'etapa concluída': 'step completed', 'próxima unidade': 'next unit', 'sem conexão': 'offline', 'sem conexão com o servidor.': 'no connection to the server.', 'maior sequência': 'longest streak', 'bora começar?': 'ready to begin?', 'começar do zero': 'start from scratch', 'de onde você parte?': 'where are you starting from?', 'máscara de raposa': 'fox mask', 'boneco da persistência': 'persistence doll', 'máscara de ogro': 'ogre mask', 'carpa da perseverança': 'perseverance carp', 'cão-guaxinim travesso': 'mischievous tanuki', 'máscara do espírito': 'spirit mask', 'dragão das nuvens': 'cloud dragon', 'máscara de nō': 'noh mask', 'leão-guardiã': 'guardian lion', 'leão-guardião': 'guardian lion', 'bebê urso': 'bear cub', 'cãozinho feliz': 'happy puppy', 'sábio da noite': 'night sage', 'mãe (de outra pessoa)': 'someone else’s mother', 'lua/mês': 'moon/month', 'criança/filho': 'child/son', 'pé/bastar': 'foot/be enough', 'céu/vazio': 'sky/empty', 'ficar de pé': 'stand up', 'casa/família': 'house/family', 'canção': 'song', 'desenho/traço': 'drawing/stroke', 'família/tribo': 'family/tribe', 'tema/título': 'theme/title', 'carvão': 'charcoal', 'salão': 'hall', 'esforço/estudo': 'effort/study', 'direção/modo': 'direction/manner', 'política/governo': 'politics/government', 'diferença': 'difference', 'dançar': 'dance', 'belo/esplêndido': 'beautiful/splendid', 'arrogância/lento': 'arrogant/slow', 'língua': 'tongue', 'água': 'water', 'corpo': 'body', 'família': 'family', 'tempo': 'time', 'lugar': 'place', 'natureza': 'nature', 'objeto': 'object', 'objetos': 'objects', 'cidade': 'city', 'casa': 'house', 'escola': 'school', 'professor': 'teacher', 'aluno': 'student', 'alunos': 'students', 'criança': 'child', 'crianças': 'children', 'mulher': 'woman', 'homem': 'man', 'pessoa': 'person', 'pessoas': 'people', 'povo': 'people', 'mundo': 'world', 'terra': 'earth', 'céu': 'sky', 'sol': 'sun', 'lua': 'moon', 'verão': 'summer', 'inverno': 'winter', 'manhã': 'morning', 'noite': 'night', 'dia': 'day', 'mês': 'month', 'ano': 'year', 'semana': 'week', 'hora': 'hour', 'minuto': 'minute', 'dinheiro': 'money', 'comida': 'food', 'remédio': 'medicine', 'roupa': 'clothing', 'viajar': 'travel', 'viagem': 'trip', 'visita': 'visit', 'visitas': 'visits', 'trabalho': 'work', 'trabalhar': 'work', 'pensamento': 'thought', 'pensamentos': 'thoughts', 'razão': 'reason', 'causa': 'cause', 'vida': 'life', 'vidas': 'lives', 'morrer': 'die', 'viver': 'live', 'sentir': 'feel', 'ouvir': 'hear', 'falar': 'speak', 'dizer': 'say', 'ver': 'see', 'ler': 'read', 'escrever': 'write', 'aprender': 'learn', 'ensinar': 'teach', 'estudar': 'study', 'usar': 'use', 'fazer': 'do', 'começar': 'start', 'continuar': 'continue', 'voltar': 'go back', 'seguir': 'follow', 'entrar': 'enter', 'sair': 'leave', 'comprar': 'buy', 'comer': 'eat', 'cantar': 'sing', 'correr': 'run', 'andar': 'walk', 'cavar': 'dig', 'queimar': 'burn', 'quebrar': 'break', 'guardar': 'keep', 'oferecer': 'offer', 'observar': 'observe', 'existir': 'exist', 'perder': 'lose', 'procurar': 'look for', 'preparar': 'prepare', 'construir': 'build', 'girar': 'turn', 'acender': 'light', 'beber': 'drink', 'dormir': 'sleep', 'estar': 'be', 'ser': 'be', 'ter': 'have', 'conhecer': 'know', 'saber': 'know', 'nome': 'name', 'cor': 'color', 'azul': 'blue', 'branco': 'white', 'preto': 'black', 'grande': 'big', 'pequeno': 'small', 'menor': 'smaller', 'novo': 'new', 'atual': 'current', 'real': 'real', 'simples': 'simple', 'forte': 'strong', 'amargo': 'bitter', 'triste': 'sad', 'bom': 'good', 'escuro': 'dark', 'luz': 'light', 'som': 'sound', 'voz': 'voice', 'papel': 'paper', 'imagem': 'image', 'palavra': 'word', 'palavras': 'words', 'frase': 'sentence', 'frases': 'sentences', 'exemplo': 'example', 'exemplos': 'examples', 'artigo': 'article', 'artigos': 'articles', 'leitura': 'reading', 'leituras': 'readings', 'memória': 'memory', 'mnemônico': 'mnemonic', 'mnemônicos': 'mnemonics', 'explicação': 'explanation', 'explicações': 'explanations', 'dica': 'tip', 'dicas': 'tips', 'pista visual': 'visual clue', 'vocabulário': 'vocabulary', 'significado': 'meaning', 'significados': 'meanings', 'componente': 'component', 'componentes': 'components', 'radical': 'radical', 'palavra composta': 'compound word', 'palavras relacionadas': 'related words', 'ordem': 'order', 'posição': 'position', 'direção': 'direction', 'revisão': 'review', 'estudo': 'study', 'treino': 'practice', 'prática': 'practice', 'escrita': 'writing', 'traçado': 'strokes', 'pergunta': 'question', 'perguntas': 'questions', 'resposta': 'answer', 'respostas': 'answers', 'resultado': 'result', 'resultados': 'results', 'erro': 'error', 'erros': 'errors', 'acerto': 'correct answer', 'acertos': 'correct answers', 'tentativa': 'attempt', 'tentativas': 'attempts', 'sequência': 'streak', 'recorde': 'best', 'progresso': 'progress', 'unidade': 'unit', 'unidades': 'units', 'etapa': 'step', 'etapas': 'steps', 'nível': 'level', 'níveis': 'levels', 'curso': 'course', 'trilha': 'path', 'trilhas': 'paths', 'código': 'code', 'códigos': 'codes', 'conta': 'account', 'dados': 'data', 'sincronização': 'sync', 'permissão': 'permission', 'permissões': 'permissions', 'configuração': 'setting', 'configurações': 'settings', 'notificação': 'notification', 'notificações': 'notifications', 'instalação': 'installation', 'atualização': 'update', 'carregando…': 'loading…', 'salvando…': 'saving…', 'conectando…': 'connecting…', 'silêncio': 'silence', 'não ouvi nada': 'I heard nothing', 'não captei': 'I didn’t catch that', 'fale devagar': 'speak slowly', 'lugar silencioso': 'quiet place', 'não confunda com': 'do not confuse with', 'a leitura correta está aqui embaixo': 'the correct reading is below', 'a resposta': 'the answer', 'o que a palavra quer dizer': 'what the word means', 'qual kanji corresponde ao áudio': 'which kanji matches the audio', 'bata com o pedido': 'match the prompt', 'bate com o pedido.': 'it matches the prompt.', 'veja abaixo.': 'see below.', 'veja opção por opção abaixo.': 'see each option below.', 'sua escolha não era a certa.': 'your choice was not correct.', 'você disse': 'you said', 'você marcou': 'you selected', 'você errou': 'you missed'};
Object.assign(CONTENT_EN, CONTENT_EN_PART38);
Object.assign(CONTENT_EN, CONTENT_EN_PART34);
const CONTENT_EN_PART40={"braços":"arms","mãe":"mother","mãe (de outra pessoa)":"someone else’s mother","pátria":"homeland","irmão mais velho":"older brother","irmãos":"siblings","irmã mais velha":"older sister","irmãs":"sisters","irmão mais novo":"younger brother","irmã mais nova":"younger sister","discípulo":"disciple","ainda não":"not yet","mão":"hand","outra mão":"other hand","braço que recolhe":"folding arm","o quê":"what","possível":"possible","reunião":"meeting","santuário":"shrine","país":"country","nação":"nation","às vezes":"sometimes","portão":"gate","chapéu":"hat","depois / atrás":"after / behind","atrás":"behind","adivinhação":"divination","árvore":"tree","grãos":"grains","língua":"tongue","dicionário":"dictionary","japonês":"Japanese","inglês":"English","estação":"station","em frente à estação":"in front of the station","ensino médio":"high school","segurança":"safety","de pé":"standing","manhã":"morning","dia":"day","noite":"night","tempo":"time","chuva":"rain","relâmpago":"lightning","céu":"sky","céu/vazio":"sky/empty","água":"water","fogo":"fire","carne":"meat","direita":"right","esquerda":"left","ficar de pé":"stand up","criança":"child","filho":"son","casa/família":"house/family","canção":"song","verão":"summer","desenho/traço":"drawing/stroke","indústria/obra":"industry/construction","salão/prédio":"hall/building","médico/medicina":"doctor/medicine","pescoço/chefe":"neck/chief","próprio/si mesmo":"self / oneself","caminho":"path","força":"strength","doença":"illness","pássaro":"bird","traço":"stroke","traços":"strokes","sol":"sun","lua/mês":"moon/month","criança/filho":"child/son","pé/bastar":"foot/be enough","descer/cair":"descend/fall","difícil":"difficult","rápido":"fast","espírito":"spirit","precisão":"precision","feito por você":"made by you","amanhã":"tomorrow","próximo":"next","concluído":"completed","disponível":"available","código de acesso":"access code","pronúncia":"pronunciation","mapa de memória":"memory map","versão":"version","preto":"black","branco":"white","azul":"blue","grande":"big","pequeno":"small","menor":"smaller","novo":"new","velho":"old","usado":"used","escasso":"scarce","loja":"shop","cafeteria":"cafeteria","ocupar":"occupy","telheiro":"shed","grande/pequeno":"big/small","seguir":"follow","voltar":"go back","sair":"leave","entrar":"enter","comprar":"buy","comer":"eat","beber":"drink","cantar":"sing","correr":"run","andar":"walk","cavar":"dig","queimar":"burn","quebrar":"break","guardar":"keep","oferecer":"offer","observar":"observe","existir":"exist","perder":"lose","procurar":"look for","preparar":"prepare","construir":"build","girar":"turn","acender":"light","dormir":"sleep","estar":"be","ser":"be","ter":"have","conhecer":"know","saber":"know","pensamento":"thought","pensamentos":"thoughts","razão":"reason","causa":"cause","vida":"life","vidas":"lives","morrer":"die","viver":"live","sentir":"feel","ouvir":"hear","falar":"speak","dizer":"say","ver":"see","ler":"read","escrever":"write","aprender":"learn","ensinar":"teach","estudar":"study","usar":"use","fazer":"do","começar":"start","continuar":"continue","cor":"color","nome":"name","palavra":"word","palavras":"words","frase":"sentence","frases":"sentences","exemplo":"example","exemplos":"examples","leitura":"reading","leituras":"readings","memória":"memory","mnemônico":"mnemonic","mnemônicos":"mnemonics","explicação":"explanation","explicações":"explanations","dica":"tip","dicas":"tips","pista visual":"visual clue","vocabulário":"vocabulary","significado":"meaning","significados":"meanings","componente":"component","componentes":"components","radical":"radical","palavra composta":"compound word","palavras relacionadas":"related words","ordem":"order","posição":"position","direção":"direction","revisão":"review","estudo":"study","treino":"practice","prática":"practice","escrita":"writing","pergunta":"question","perguntas":"questions","resposta":"answer","respostas":"answers","resultado":"result","resultados":"results","erro":"error","erros":"errors","acerto":"correct answer","acertos":"correct answers","tentativa":"attempt","tentativas":"attempts","sequência":"streak","recorde":"best","progresso":"progress","unidade":"unit","unidades":"units","etapa":"step","etapas":"steps","nível":"level","níveis":"levels","curso":"course","trilha":"path","trilhas":"paths","código":"code","códigos":"codes","conta":"account","dados":"data","sincronização":"sync","permissão":"permission","permissões":"permissions","configuração":"setting","configurações":"settings","notificação":"notification","notificações":"notifications","instalação":"installation","atualização":"update","carregando":"loading","Salvando":"Saving","Salvo":"Saved","Ativada":"Enabled","ativada":"enabled","Desconectado":"Disconnected","Zerado":"Reset","Não disponível":"Unavailable","não disponível":"not available","Você já aprendeu":"You have learned","continuar é o que dá força":"continuing is what gives strength","Dois traços cruzados como os <b>braços abertos do pai</b> te dando um abraço. O X no topo é o bigodão dele.":"Two strokes cross like the father’s <b>open arms</b> giving you a hug. The X at the top is his big mustache.","Os <b>dois pontinhos no meio</b> são os seios que amamentam. É quase igual a 毎 (cada), mas ali os pontos viram um traço.":"The <b>two dots in the middle</b> are the breasts that nurse a baby. It is almost like 毎 (every), but there the dots become a stroke.","Uma <b>boca 口 em cima de duas pernas 儿</b>. É o irmão mais velho andando por aí dando ordem com a boca grande.":"A <b>mouth 口 above two legs 儿</b>. It is the older brother walking around giving orders with his big mouth.","Uma <b>fita enrolada num poste</b>, de cima a baixo. O caçula fica \"amarrado\", ainda não sai sozinho.":"A <b>ribbon wrapped around a post</b>, from top to bottom. The youngest sibling stays “tied up” and cannot go out alone yet.","<b>Mulher 女 + 未 (ainda não)</b>. A menina que <b>ainda não</b> cresceu. A irmã mais velha 姉 tem 市 no lugar do 未.":"<b>Woman 女 + 未 (not yet)</b>. The girl who has <b>not yet</b> grown up. Older sister 姉 has 市 instead of 未.","<b>Duas mãos se cruzando</b> num aperto firme. O 又 é literalmente uma mão direita.":"<b>Two hands crossing</b> in a firm handshake. 又 literally represents a right hand.","<b>Espiga de arroz 禾 + braço curvado 厶</b> puxando para si. \"Esse arroz é meu.\" Daí veio \"eu\" e \"privado\".":"<b>Rice stalk 禾 + a curved arm 厶</b> pulling toward itself. “This rice is mine.” From there came “I” and “private.”","Uma <b>pessoa 亻 com um gancho 可 entalado na garganta</b>. Engasgada de dúvida, só sai \"o quê?!\".":"A <b>person 亻 with a hook 可 stuck in the throat</b>. Choking on doubt, all that comes out is “what?!”","Um <b>telhado 𠆢 cobrindo gente 云</b> reunida. Quase igual a 今 (agora): a diferença é o que fica sob o telhado.":"A <b>roof 𠆢 covering people 云</b> gathered together. Almost the same as 今 (now): the difference is what sits under the roof.","<b>Altar 礻 + terra 土</b>, o santuário no chão sagrado. Hoje também é \"empresa\", onde muita gente passa o dia rezando por folga.":"<b>Altar 礻 + earth 土</b>, a shrine on sacred ground. Today it also means “company,” where many people spend the day praying for time off.","Uma <b>muralha 囗 protegendo o jade 玉</b>, o tesouro do rei. Fronteira mais tesouro dá país.":"A <b>wall 囗 protecting jade 玉</b>, the king’s treasure. Border plus treasure gives “country.”","<b>Palavra 言 + língua 舌</b>. Usar a língua pra soltar palavras é falar. O 言 aparece em quase tudo que envolve fala.":"<b>Word 言 + tongue 舌</b>. Using the tongue to release words is speaking. 言 appears in almost everything related to speech.","Uma <b>orelha 耳 colada no portão 門</b>. Escutando atrás da porta. O 間 tem 日 no lugar da orelha.":"An <b>ear 耳 attached to the gate 門</b>. Listening behind the door. 間 has 日 instead of the ear.","<b>Palavra 言 + vender 売</b>. Você lê o anúncio pra saber o que está à venda.":"<b>Word 言 + sell 売</b>. You read the ad to know what is for sale.","Um <b>pincel 聿 descendo sobre o papel 曰</b>. É a mão segurando o pincel de caligrafia.":"A <b>brush 聿 moving down over paper 曰</b>. It is the hand holding a calligraphy brush.","Uma <b>rede 罒 pescando conchas 貝</b>. Concha era o dinheiro antigo, então pegar concha com rede é comprar.":"A <b>net 罒 catching shells 貝</b>. Shells were ancient money, so catching shells with a net means buying.","<b>Chuva 雨 + raio 电</b> serpenteando embaixo. O relâmpago foi a primeira eletricidade que a gente viu.":"<b>Rain 雨 + lightning 电</b> snaking underneath. Lightning was the first electricity people ever saw.","<b>Cavalo 馬 + medida 尺</b>. Os postos antigos onde se trocava de cavalo a cada tantos quilômetros.":"<b>Horse 馬 + measure 尺</b>. Ancient stations where horses were changed every so many kilometers.","Uma <b>mulher 女 debaixo do telhado 宀</b>. Casa com a família dentro é paz. E o que é tranquilo pro bolso é barato.":"A <b>woman 女 under a roof 宀</b>. A house with family inside is peaceful. And what is easy on the wallet is cheap.","<b>立 (de pé) + 木 (árvore) + 斤 (machado)</b>. A árvore recém-cortada. Madeira nova, ainda cheirosa.":"<b>立 (standing) + 木 (tree) + 斤 (axe)</b>. A freshly cut tree. New wood, still fragrant.","<b>Dez 十 + boca 口</b>. Uma história que passou por dez gerações de bocas já é bem antiga.":"<b>Ten 十 + mouth 口</b>. A story passed through ten generations of mouths is already very old.","<b>Telheiro 广 + ocupar 占</b>. Você ocupa um ponto na rua, põe um toldo em cima, e nasce a loja.":"<b>Shed 广 + occupy 占</b>. You occupy a spot on the street, put up an awning, and a shop is born.","Água 氵 + cada 毎. Toda gota de todo rio acaba no mar.":"Water 氵 + every 毎. Every drop from every river ends up in the sea.","Um <b>peixe em pé: cabeça em cima, escamas no meio e as quatro marcas da cauda embaixo.":"A <b>fish standing upright: head at the top, scales in the middle, and the four tail marks at the bottom."};
Object.assign(CONTENT_EN, CONTENT_EN_PART40);
refreshBidiPairs();

/* Diálogos nativos também respeitam o idioma atual, sem traduzir japonês/romaji. */
try{
  if(!window.__KANJIDO_NATIVE_DIALOGS){
    const _confirm=window.confirm.bind(window), _alert=window.alert.bind(window), _prompt=window.prompt.bind(window);
    window.confirm=m=>_confirm(lang()==='en'?translateText(String(m),true):translateText(String(m),false));
    window.alert=m=>_alert(lang()==='en'?translateText(String(m),true):translateText(String(m),false));
    window.prompt=(m,d)=>_prompt(lang()==='en'?translateText(String(m),true):translateText(String(m),false),d);
    window.__KANJIDO_NATIVE_DIALOGS=true;
  }
}catch(e){}

function translateText(value,toEnglish){
  if(!value)return value;
  /* O app é escrito em português: no modo PT não há o que traduzir. A rotina reversa (EN→PT por
     substituição de trechos) corrompia palavras comuns: 'do'→'fazer' virava "significa-fazer",
     "navega-fazer-r", "Tofazers" etc. (60 textos só nas abas principais). */
  if(!toEnglish)return value;
  let x=value;
  for(const [pt,en] of BIDI_PAIRS){
    const a=toEnglish?pt:en, b=toEnglish?en:pt;
    if(x.includes(a))x=x.split(a).join(b);
  }
  /* Padrões gerados em tempo de execução (números, quantidades e pequenas variações). */
  if(toEnglish){
    x=x.replace(/(\d+)º ano/g,'$1st year');
    x=x.replace(/Unidade (\d+)/g,'Unit $1');
    x=x.replace(/Etapa (\d+)/g,'Step $1');
    x=x.replace(/(\d+) kanji restantes/g,'$1 kanji remaining');
    x=x.replace(/(\d+) kanji aprendidos/g,'$1 kanji learned');
    x=x.replace(/(\d+) kanji na fila/g,'$1 kanji in queue');
    x=x.replace(/(\d+) dias seguidos/g,'$1 days in a row');
    x=x.replace(/Esse é o traço <b>nº (\d+)<\/b>\. Agora é a vez do <b>nº (\d+)<\/b>\./g,'This is stroke <b># $1</b>. Now it is time for <b># $2</b>.');
    x=x.replace(/<b>(\d+)<\/b> tem ([^<]+) traços\. Comece no <b>ponto azul<\/b>\./g,'<b>$1</b> has $2 strokes. Start at the <b>blue dot</b>.');
    x=x.replace(/Tem <b>(\d+) traços<\/b>, radical/g,'It has <b>$1 strokes</b>, radical');
    x=x.replace(/você marcou/g,'you selected').replace(/não captei/g,"I didn't catch that");
  }else{
    x=x.replace(/This is stroke <b># (\d+)<\/b>\. Now it is time for <b># (\d+)<\/b>\./g,'Esse é o traço <b>nº $1</b>. Agora é a vez do <b>nº $2</b>.');
    x=x.replace(/<b>(\d+)<\/b> has ([^<]+) strokes\. Start at the <b>blue dot<\/b>\./g,'<b>$1</b> tem $2 traços. Comece no <b>ponto azul</b>.');
    x=x.replace(/It has <b>(\d+) strokes<\/b>, radical/g,'Tem <b>$1 traços</b>, radical');
  }
  if(toEnglish){
    x=x.replace(/\\b([0-9]+)\\s+traços\\b/g,'$1 strokes');
    x=x.replace(/\\b([0-9]+)\\s+perguntas\\b/g,'$1 questions');
    x=x.replace(/\\b([0-9]+)\\s+dias\\b/g,'$1 days');
  }else{
    x=x.replace(/\\b([0-9]+)\\s+strokes\\b/g,'$1 traços');
    x=x.replace(/\\b([0-9]+)\\s+questions\\b/g,'$1 perguntas');
    x=x.replace(/\\b([0-9]+)\\s+days\\b/g,'$1 dias');
  }
  return x;
}

function localizeDom(){
  const toEnglish=lang()==='en';
  const root=document.body;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  for(const node of nodes){
    if(!node.nodeValue||!node.nodeValue.trim())continue;
    const next=translateText(node.nodeValue,toEnglish);
    if(next!==node.nodeValue)node.nodeValue=next;
  }
  root.querySelectorAll('[placeholder],[title],[alt],[aria-label]').forEach(el=>{
    for(const attr of ['placeholder','title','alt','aria-label']){
      const v=el.getAttribute(attr); if(!v)continue;
      const next=translateText(v,toEnglish); if(next!==v)el.setAttribute(attr,next);
    }
  });
}
let _locTimer=null;
function scheduleLocalize(){clearTimeout(_locTimer);_locTimer=setTimeout(localizeDom,0);}

function applyLanguage(){
  const l=lang();
  document.documentElement.lang=l==='en'?'en':'pt-BR';
  document.documentElement.dataset.lang=l;
  document.title='Kanjidō';
  /* Tradução bidirecional: permite PT↔EN sem recarregar o app. */
  localizeDom();
  try{window.KANJIDO_I18N_AUDIT=i18nAudit();}catch(e){}
}
function setLang(v){S.lang=v;sv();render();tabs();sTap();toast(v==='auto'?(lang()==='en'?'Using system language':'Usando o idioma do sistema'):(v==='en'?'English enabled':'Português (Brasil) ativado'));}

/* Auditoria de cobertura i18n: interface + glossário didático cadastrado. */
function i18nAudit(){
  const keys=Object.keys(I18N.pt||{}).filter(k=>String(k).trim().length>=3);
  const translated=keys.filter(k=>I18N.en[k]&&I18N.en[k]!==k);
  const contentKeys=Object.keys(CONTENT_EN).filter(k=>String(k).trim().length>=3);
  const contentTranslated=contentKeys.filter(k=>CONTENT_EN[k]&&CONTENT_EN[k]!==k);
  const mapped=keys.length+contentKeys.length, done=translated.length+contentTranslated.length;
  return {mapped,translated:done,percent:mapped?+(done/mapped*100).toFixed(1):0,interface:{mapped:keys.length,translated:translated.length},content:{mapped:contentKeys.length,translated:contentTranslated.length}};
}

/* ────────── estado ────────── */
const DEF={theme:'dark',jpf:'gothic',lang:'auto',course:'core',onboarded:false,dev:false,myCode:'',
  catUnlocked:false,devRankOnly:false,devQuiet:false,
  prog:{},nodes:{},xp:0,streak:0,best:0,last:'',days:{},
  avatar:'kitsune',name:'Estudante',sound:true,tts:true,
  stats:{ans:0,ok:0,draws:0,clean:0,spoke:0,run:0,aces:0,tests:0}};
let S=ld();
/* build() NÃO pode rodar aqui: as listas de kana são declaradas mais abaixo.
   Ele é chamado no DOMContentLoaded, quando tudo já existe. */
function ld(){try{const r=JSON.parse(localStorage.getItem('kanjido2')||'null');
  return r?Object.assign(JSON.parse(JSON.stringify(DEF)),r):JSON.parse(JSON.stringify(DEF));}
  catch(e){return JSON.parse(JSON.stringify(DEF));}}
let _svWarned=false;
function sv(){try{localStorage.setItem('kanjido2',JSON.stringify(S));}
  catch(e){if(!_svWarned){_svWarned=true;try{toast(lang()==='en'?'Could not save progress: device storage is full or blocked.':'Não foi possível salvar o progresso: armazenamento cheio ou bloqueado.');}catch(_){}}}}
/* no celular o `beforeunload` quase nunca dispara: salva também ao ocultar/fechar a aba */
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')sv();});
addEventListener('pagehide',()=>sv());
/* erros inesperados: registra e avisa no máximo 1 vez por minuto, sem travar o estudo */
let _errT=0;
const _onErr=(m)=>{console.error('[KanjiDō]',m);const n=Date.now();if(n-_errT<60e3)return;_errT=n;
  try{toast(lang()==='en'?'Something went wrong. Your progress is saved.':'Algo deu errado. Seu progresso está salvo.');}catch(_){}};
addEventListener('error',e=>_onErr(e.error||e.message));
addEventListener('unhandledrejection',e=>_onErr(e.reason));
const IVL=[0,6e5,DAY,3*DAY,7*DAY,16*DAY,40*DAY];
const learned=()=>KANJI.filter(k=>S.prog[k.c]);
const due=()=>{const n=Date.now();return learned().filter(k=>S.prog[k.c].due<=n);};
function stre(c){const p=S.prog[c];if(!p)return 0;
  return clamp(p.lvl/6-Math.max(0,(Date.now()-p.due)/(14*DAY))*.3,0,1);}
/* ── Revisão espaçada adaptativa ─────────────────────────────────────
   Mantém o campo `lvl` (0–6) usado pela interface, mas o intervalo real agora
   se adapta a cada kanji:
   · degraus de aprendizado fixos: 10 min → 1 dia → 3 dias
   · depois, o intervalo cresce por um fator de facilidade (`ease`) próprio do kanji,
     com bônus quando a revisão acontece atrasada e acerta
   · errar reduz a facilidade e rebaixa o kanji; erros repetidos na mesma sessão
     não punem em dobro
   · praticar ANTES do vencimento não infla o intervalo (antes, 3 acertos seguidos
     numa sessão levavam um kanji novo a 3 dias)
   · pequena variação (±5%) evita que lotes de kanji vençam todos juntos
   · o teto deixou de ser 40 dias: kanji dominados chegam a 1 ano */
const EASE0=2.5,EASE_MIN=1.3,EASE_MAX=3,IVL_MAX=365;
function touch(c,ok){let p=S.prog[c];
  if(!p)p=S.prog[c]={lvl:0,due:0,seen:0,ok:0};
  const now=Date.now();
  const ivl=p.ivl!=null?p.ivl:IVL[p.lvl]/DAY;          // dias (migra fichas antigas)
  let ease=p.ease||EASE0;
  p.seen++;
  if(ok){
    p.ok++;
    const slack=Math.min(DAY/4,ivl*DAY*.1);
    if(p.lvl===0||now>=p.due-slack){                     // novo ou vencido → avança
      const late=clamp((now-p.due)/DAY,0,ivl);
      const nl=Math.min(6,p.lvl+1);
      let nivl=p.lvl<3?IVL[nl]/DAY:Math.min(IVL_MAX,Math.max(ivl+1,(ivl+late/2)*ease));
      if(nivl>=3)nivl*=.95+Math.random()*.1;
      p.lvl=nl;p.ivl=nivl;p.ease=clamp(ease+.03,EASE_MIN,EASE_MAX);
      p.due=now+nivl*DAY;
    }
  }else{
    const fresh=!p.lw||now-p.lw>5*60e3;                  // 1 punição por "rodada" de erros
    if(fresh){
      p.lapses=(p.lapses||0)+(p.lvl>=3?1:0);
      p.ease=clamp(ease-.2,EASE_MIN,EASE_MAX);
      p.lvl=Math.max(0,p.lvl-2);
      p.ivl=Math.max(IVL[p.lvl]/DAY,Math.min(ivl*.25,30)); // kanji antigo não volta ao zero
      p.due=now+p.ivl*DAY;
    }
    p.lw=now;
  }
  p.last=now;S.stats.ans++;if(ok)S.stats.ok++;}
function seed(c){if(!S.prog[c])S.prog[c]={lvl:0,due:Date.now()+IVL[1],seen:0,ok:0};}
const dk=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
function markDay(xp){
  const n=new Date(),t=n.toDateString(),key=dk(n);
  S.days=S.days||{};
  S.days[key]=(S.days[key]||0)+Math.max(0,xp|0);
  if(S.last!==t){
    const y=new Date(Date.now()-DAY).toDateString();
    S.streak=(S.last===y)?S.streak+1:1;
    S.last=t;
  }
  S.best=Math.max(S.best||0,S.streak);
  sv();
}
/* níveis */
const LVL=[0,120,300,560,900,1350,1900,2600,3500,4600,6000,8000];
const RANK=[['入門','Iniciante'],['初心','Novato'],['見習','Aprendiz'],['門下','Discípulo'],
 ['稽古','Praticante'],['熟練','Experiente'],['達人','Perito'],['免許','Licenciado'],
 ['師範','Mestre'],['名人','Virtuoso'],['極意','Sábio'],['仙人','Lendário']];
function lvOf(xp){let l=1;for(let i=1;i<LVL.length;i++)if(xp>=LVL[i])l=i+1;return l;}

/* ────────── tema / áudio / voz ────────── */
function theme(){document.documentElement.dataset.theme=S.theme;
  document.documentElement.dataset.jpf=S.jpf||'gothic';
  $('#themeBtn').innerHTML=svg(S.theme==='dark'?IC.sun:IC.moon);
  document.querySelector('meta[name=theme-color]').content=S.theme==='dark'?'#0C0F14':'#F7F3EC';}
$('#themeBtn').onclick=()=>{S.theme=S.theme==='dark'?'light':'dark';sv();theme();render();};
/* feedback tátil (Android/Chrome; iOS ignora silenciosamente) — segue a opção "Efeitos" */
function buzz(p){try{if(S.sound&&navigator.vibrate)navigator.vibrate(p);}catch(e){}}
/* confete leve em CSS: ~46 peças, remove-se sozinho; desligado com "reduzir movimento" */
function confetti(){try{
  if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  const w=document.createElement('div');w.className='kd-conf';
  const C=['#FF7A66','#E9B949','#5B8DEF','#4CD08A','#F4EFE6'];
  for(let i=0;i<46;i++){const p=document.createElement('i');
    p.style.cssText=`left:${Math.random()*100}%;background:${C[i%C.length]};--dx:${(Math.random()-.5)*160}px;--rot:${(Math.random()*720-360)|0}deg;animation-duration:${1.6+Math.random()*1.4}s;animation-delay:${Math.random()*.35}s;width:${6+Math.random()*6}px;height:${9+Math.random()*8}px`;
    w.appendChild(p);}
  document.body.appendChild(w);setTimeout(()=>w.remove(),3600);}catch(e){}}
let AC=null;
function tone(f,d,ty,v,dt){if(!S.sound)return;try{
  AC=AC||new (window.AudioContext||window.webkitAudioContext)();
  if(AC.state==='suspended')AC.resume();
  const t=AC.currentTime+(dt||0),o=AC.createOscillator(),g=AC.createGain();
  o.type=ty||'sine';o.frequency.setValueAtTime(f,t);
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v||.12,t+.012);
  g.gain.exponentialRampToValueAtTime(.0001,t+d);
  o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+d+.03);}catch(e){}}
const sOk=()=>{buzz([10,40,14]);tone(660,.13,'sine',.1,0);tone(880,.17,'sine',.09,.07);tone(1320,.2,'sine',.05,.15);};
const sNo=()=>{buzz([40,30,60]);tone(200,.2,'sawtooth',.07,0);tone(145,.25,'sawtooth',.055,.09);};
const sTap=()=>tone(520,.05,'sine',.045,0);
const sTick=n=>tone(420+n*55,.07,'triangle',.06,0);
const sWin=()=>{buzz([20,50,20,50,90]);[523,659,784,1047].forEach((f,i)=>tone(f,.3,'triangle',.085,i*.1));};
let jaV=null;
function initTTS(){if(!('speechSynthesis'in window))return;
  const g=()=>{const v=speechSynthesis.getVoices();jaV=v.find(x=>x.lang==='ja-JP')||v.find(x=>x.lang&&x.lang.startsWith('ja'))||null;};
  g();speechSynthesis.onvoiceschanged=g;}
function say(t){if(!S.tts||!('speechSynthesis'in window))return;try{
  speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);
  u.lang='ja-JP';u.rate=.75;if(jaV)u.voice=jaV;speechSynthesis.speak(u);}catch(e){}}
const canSay=()=>S.tts&&'speechSynthesis'in window;
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
const SR_OK=!!SR;
let tT;const toast=m=>{const shown=lang()==='en'?String(m).split(' — ').map(part=>{let x=part;for(const [a,b] of Object.entries(DOM_EN))if(x.includes(a))x=x.split(a).join(b);return x;}).join(' — '):m;const t=$('#toast');t.textContent=shown;t.classList.add('on');
  clearTimeout(tT);tT=setTimeout(()=>t.classList.remove('on'),2200);};

/* ══════════════════════════════════════════════════════════════
   TRAÇOS REAIS (KanjiVG) + verificador traço a traço
   ══════════════════════════════════════════════════════════════ */
const KVG='https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/';
const SCACHE={};
let hsvg=null;
function hostSVG(){if(!hsvg){hsvg=document.createElementNS('http://www.w3.org/2000/svg','svg');
  hsvg.setAttribute('viewBox','0 0 109 109');
  hsvg.style.cssText='position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden';
  document.body.appendChild(hsvg);}return hsvg;}
/* Guarda os pontos (para julgar) E o path original (para desenhar com curva real).
   Desenhar segmento a segmento deixava o traço quebrado; Path2D usa a curva exata. */
async function strokesOf(ch){
  if(SCACHE[ch])return SCACHE[ch];
  try{const r=localStorage.getItem('kvg2_'+ch);
    if(r){const d=JSON.parse(r);if(d&&d.pts){SCACHE[ch]=d;return d;}}}catch(e){}
  const code=ch.codePointAt(0).toString(16).padStart(5,'0');
  const res=await fetch(KVG+code+'.svg');
  if(!res.ok)throw new Error('404');
  const doc=new DOMParser().parseFromString(await res.text(),'image/svg+xml');
  const ps=[...doc.querySelectorAll('path[d]')];
  if(!ps.length)throw new Error('vazio');
  const host=hostSVG();
  const out={pts:[],d:[],len:[]};
  ps.forEach(p=>{
    const ds=p.getAttribute('d');
    const e=document.createElementNS('http://www.w3.org/2000/svg','path');
    e.setAttribute('d',ds);host.appendChild(e);
    const L=e.getTotalLength();
    const n=clamp(Math.round(L/2.2),8,26);
    const pts=[];
    for(let i=0;i<=n;i++){const q=e.getPointAtLength(L*i/n);
      pts.push([+(q.x/109).toFixed(3),+(q.y/109).toFixed(3)]);}
    host.removeChild(e);
    out.pts.push(pts);out.d.push(ds);out.len.push(+L.toFixed(2));
  });
  SCACHE[ch]=out;
  try{localStorage.setItem('kvg2_'+ch,JSON.stringify(out));}catch(e){}
  return out;
}
function resample(p,n){
  if(p.length<2)return Array.from({length:n},()=>p[0].slice());
  const d=[0];let T=0;
  for(let i=1;i<p.length;i++){T+=Math.hypot(p[i][0]-p[i-1][0],p[i][1]-p[i-1][1]);d.push(T);}
  if(T<1e-6)return Array.from({length:n},()=>p[0].slice());
  const o=[];let j=0;
  for(let i=0;i<n;i++){const t=T*i/(n-1);
    while(j<d.length-2&&d[j+1]<t)j++;
    const sg=d[j+1]-d[j]||1,f=(t-d[j])/sg;
    o.push([p[j][0]+(p[j+1][0]-p[j][0])*f,p[j][1]+(p[j+1][1]-p[j][1])*f]);}
  return o;}
const NS=18;
const sdist=(a,b)=>{let s=0;for(let i=0;i<a.length;i++)s+=Math.hypot(a[i][0]-b[i][0],a[i][1]-b[i][1]);return s/a.length;};
const plen=p=>{let s=0;for(let i=1;i<p.length;i++)s+=Math.hypot(p[i][0]-p[i-1][0],p[i][1]-p[i-1][1]);return s;};
/* avalia um traço do usuário contra o esperado e contra os demais */
function judge(user,tg,exp,pend){
  const U=resample(user,NS),R=U.slice().reverse();
  const sc=[];
  for(const i of pend){const T=resample(tg[i],NS);
    sc.push({i,d:sdist(U,T),r:sdist(R,T)});}
  sc.sort((a,b)=>Math.min(a.d,a.r)-Math.min(b.d,b.r));
  const E=sc.find(x=>x.i===exp)||{i:exp,d:9,r:9};
  const best=sc[0];
  const tl=plen(tg[exp]);
  const lr=plen(user)/(tl||1);
  // traços muito curtos (pontos, pingos) precisam de folga proporcional maior
  const TOL=tl<.14?.105:tl<.3?.125:.14;
  if(E.d<=TOL&&lr>.5&&lr<1.9)
    return{ok:true,score:clamp(1-E.d/TOL,0,1),i:exp};
  if(E.r<=TOL&&E.r<E.d)
    return{ok:false,why:'dir',msg:'Traço no lugar certo, mas <b>na direção contrária</b>. No japonês vai da esquerda pra direita e de cima pra baixo.'};
  if(best.i!==exp&&Math.min(best.d,best.r)<TOL*.95)
    return{ok:false,why:'ord',msg:`Esse é o traço <b>nº ${best.i+1}</b>. Agora é a vez do <b>nº ${exp+1}</b>.`};
  if(lr<.5)return{ok:false,why:'curto',msg:'Ficou <b>curto demais</b>. Puxe o traço inteiro.'};
  if(lr>1.9)return{ok:false,why:'longo',msg:'Passou <b>bem do ponto</b>. Esse traço é mais curto.'};
  return{ok:false,why:'pos',msg:'Fora do lugar. Olhe o <b>ponto azul</b>: é onde o traço começa.'};
}
const kata2hira=s=>s.replace(/[\u30a1-\u30f6]/g,c=>String.fromCharCode(c.charCodeAt(0)-96));

/* ══ reconhecimento de fala: normalização ══
   O motor devolve "2" quando você fala 二 (ni). Aqui traduzimos números,
   kanji numéricos, katakana e romaji para um conjunto de formas comparáveis. */
const Z2H=s=>String(s||'').replace(/[０-９]/g,c=>String.fromCharCode(c.charCodeAt(0)-0xFEE0));
const NUMR={'0':['ぜろ','れい','まる'],'1':['いち','ひとつ','ひと'],'2':['に','ふたつ','ふた'],
 '3':['さん','みっつ','み'],'4':['よん','し','よっつ','よ'],'5':['ご','いつつ'],
 '6':['ろく','むっつ','む'],'7':['なな','しち','ななつ'],'8':['はち','やっつ','や'],
 '9':['きゅう','く','ここのつ'],'10':['じゅう','とお'],'100':['ひゃく'],
 '1000':['せん','ち'],'10000':['まん','いちまん']};
const K2NUM={'一':'1','二':'2','三':'3','四':'4','五':'5','六':'6','七':'7','八':'8',
 '九':'9','十':'10','百':'100','千':'1000','万':'10000'};
const NOISE=/[\s。、．，・!！?？「」『』]/g;
function speechForms(txt){
  const out=new Set();
  const t=Z2H(txt).trim().replace(NOISE,'');
  if(!t)return out;
  out.add(t);out.add(kata2hira(t));
  [...t].forEach(ch=>{const d=K2NUM[ch];
    if(d){out.add(d);(NUMR[d]||[]).forEach(r=>out.add(r));}});
  const nums=t.match(/\d+/g);
  if(nums)nums.forEach(d=>{
    (NUMR[d]||[]).forEach(r=>out.add(r));
    [...d].forEach(x=>(NUMR[x]||[]).forEach(r=>out.add(r)));});
  return out;
}
function expectForms(k,want){
  const out=new Set();
  if(want){const kk=want.k.replace(/[()]/g,'');if(kk)out.add(kata2hira(kk));}
  out.add(k.c);
  reads(k).forEach(r=>{const kk=r.k.replace(/[()]/g,'');if(kk)out.add(kata2hira(kk));});
  const d=K2NUM[k.c];
  if(d){out.add(d);(NUMR[d]||[]).forEach(r=>out.add(r));}
  return out;
}
function speechHit(alts,k,want){
  const exp=expectForms(k,want);
  const roms=romajis(k).map(r=>r.toLowerCase()).filter(Boolean);
  for(const a of alts){
    for(const h of speechForms(a)){
      for(const e of exp){
        if(!e)continue;
        if(h===e)return true;
        if(e.length===1){ if(h.length<=2&&h.includes(e))return true; }
        else if(h.includes(e)||(h.length>=2&&e.includes(h)))return true;
      }
    }
    const low=String(a).toLowerCase().replace(/[^a-zà-ÿōūāēī]/g,'');
    if(low)for(const r of roms)
      if(low===r||(r.length>=2&&low.includes(r))||(low.length>=2&&r.includes(low)))return true;
  }
  return false;
}

/* ══════════════════════════════════════════════════════════════
   NAVEGAÇÃO
   ══════════════════════════════════════════════════════════════ */
IC.user='<circle cx="12" cy="8.2" r="4.2"/><path d="M4.4 20.4a7.6 7.6 0 0 1 15.2 0"/>';
IC.left='<path d="m15 5-7 7 7 7"/>';IC.right='<path d="m9 5 7 7-7 7"/>';
IC.exam='<rect x="4" y="3.5" width="16" height="17" rx="3"/><path d="m8.5 12 2.5 2.5L16 9.5"/>';
IC.glob='<circle cx="12" cy="12" r="9"/><path d="M3.2 9h17.6M3.2 15h17.6M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18"/>';
const TABS=[{id:'learn',t:'Trilha',ic:IC.learn},{id:'review',t:'Revisar',ic:IC.review},
 {id:'draw',t:'Traçar',ic:IC.brush},{id:'lib',t:'Kanji',ic:IC.lib},
 {id:'social',t:'Social',ic:IC.glob},{id:'prof',t:'Perfil',ic:IC.user}];
let tab='learn';
function tabs(){$('#tabs').innerHTML=TABS.map(item=>
  `<button class="tab${item.id===tab?' on':''}" data-t="${item.id}">${svg(item.ic)}<span>${t(item.t)}</span></button>`).join('');
  $('#tabs').querySelectorAll('.tab').forEach(b=>b.onclick=()=>{sTap();go(b.dataset.t);});}
function go(t,keep){tab=t;tabs();render();if(!keep)scrollTo({top:0});}
/* rola até a etapa atual da trilha, sem jogar o usuário lá pra cima */
function focusNode(smooth){
  const n=document.querySelector('.dnode.cur')||document.querySelector('.trail .dnode.lock');
  if(!n)return;
  const r=n.getBoundingClientRect();
  const y=r.top+scrollY-innerHeight*0.42;
  scrollTo({top:Math.max(0,y),behavior:smooth?'smooth':'auto'});
}
let freePad=null;
let pwaInstallPrompt=null;
const PWA_HIDDEN_KEY='kanjido_pwa_install_hidden_v1';
function pwaStandalone(){
  return !!(window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone===true;
}
function pwaInstallable(){return !!pwaInstallPrompt && !pwaStandalone();}
function hideInstallCard(){document.querySelectorAll('[data-pwa-install]').forEach(x=>x.classList.add('is-hidden'));}
function showInstallHelp(){
  const isiOS=/iphone|ipad|ipod/i.test(navigator.userAgent);
  const android=/android/i.test(navigator.userAgent);
  const text=isiOS
    ? 'No Safari, toque em Compartilhar e depois em “Adicionar à Tela de Início”.'
    : android
      ? 'No Chrome, abra o menu ⋮ e escolha “Adicionar à tela inicial” ou “Instalar app”.'
      : 'Use o menu do navegador para procurar “Instalar” ou “Adicionar à tela inicial”.';
  open({title:'Adicionar à tela inicial',body:`<div style="text-align:center;padding:10px 4px 4px"><img src="./icon-192.png" alt="Ícone do KanjiDō" style="width:76px;height:76px;border-radius:20px;object-fit:cover;box-shadow:0 8px 24px rgba(0,0,0,.28)"><h2 style="font-size:20px;font-weight:900;margin-top:12px">Leve o KanjiDō com você</h2><p style="color:var(--txt2);font-size:12.5px;line-height:1.55;margin-top:6px">${text}</p></div>`});
}
async function pwaInstall(){
  if(pwaStandalone()){hideInstallCard();return;}
  if(!pwaInstallPrompt){showInstallHelp();return;}
  try{
    pwaInstallPrompt.prompt();
    const r=await pwaInstallPrompt.userChoice;
    if(r&&r.outcome==='accepted'){hideInstallCard();localStorage.setItem(PWA_HIDDEN_KEY,'1');}
  }catch(e){console.warn('PWA install',e);}
  pwaInstallPrompt=null;
}
function mountInstallCard(v){
  if(pwaStandalone()||localStorage.getItem(PWA_HIDDEN_KEY)==='1')return;
  const card=el('div','card install-card');
  card.dataset.pwaInstall='1';
  card.innerHTML=`<img class="install-icon" src="./icon-192.png" alt="Ícone do KanjiDō"><div class="install-copy"><b>KanjiDō na tela inicial</b><small>Acesse como um app, direto e sem procurar pelo navegador.</small></div><button class="btn btn-p install-btn" type="button">Adicionar</button>`;
  card.querySelector('.install-btn').onclick=()=>{sTap();pwaInstall();};
  v.appendChild(card);
  if(!pwaInstallable())card.querySelector('.install-btn').textContent='Como instalar';
}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();pwaInstallPrompt=e;document.querySelectorAll('[data-pwa-install]').forEach(card=>{const b=card.querySelector('.install-btn');if(b)b.textContent='Adicionar';});});
window.addEventListener('appinstalled',()=>{pwaInstallPrompt=null;localStorage.setItem(PWA_HIDDEN_KEY,'1');hideInstallCard();});
window.addEventListener('load',()=>{
  try{if('serviceWorker' in navigator){
    let wantReload=false;
    const banner=reg=>{
      if(document.getElementById('upd'))return;
      const en=lang()==='en',b=document.createElement('div');b.id='upd';b.setAttribute('role','status');
      b.innerHTML=`<span>${en?'New version ready.':'Nova versão disponível.'}</span><button class="go">${en?'Update':'Atualizar'}</button><button class="x" aria-label="${en?'Dismiss':'Dispensar'}">✕</button>`;
      b.querySelector('.go').onclick=()=>{wantReload=true;sv();(reg.waiting||reg.installing||{postMessage(){}}).postMessage('SKIP_WAITING');};
      b.querySelector('.x').onclick=()=>b.remove();
      document.body.appendChild(b);};
    navigator.serviceWorker.register('./sw.js',{scope:'./'}).then(reg=>{
      if(reg.waiting&&navigator.serviceWorker.controller)banner(reg);
      reg.addEventListener('updatefound',()=>{const nw=reg.installing;if(!nw)return;
        nw.addEventListener('statechange',()=>{if(nw.state==='installed'&&navigator.serviceWorker.controller)banner(reg);});});
      setInterval(()=>reg.update().catch(()=>{}),60*60*1000);
    }).catch(e=>console.warn('SW',e));
    navigator.serviceWorker.addEventListener('controllerchange',()=>{if(wantReload)location.reload();});
  }}catch(e){}
  try{window.matchMedia('(display-mode: standalone)').addEventListener('change',()=>{if(pwaStandalone())hideInstallCard();});}catch(e){}
});

function render(){
  const v=$('#view');v.className='wrap view';
  if(freePad){try{freePad.stop();}catch(e){}freePad=null;}
  v.innerHTML='';
  try{
    if(!UNITS||!UNITS.length||!KANJI||!KANJI.length)build();
    (({learn:vLearn,review:vRev,draw:vDraw,lib:vLib,social:vSocial,prof:vProf})[tab]||vLearn)(v);
  }catch(e){
    console.error('render',e);
    v.innerHTML=`<div class="empty" style="padding-top:60px">
      <span class="eg jp">再</span><b>Algo travou ao montar a tela</b>
      <p>Nada foi perdido. Toque abaixo para recarregar a trilha.</p></div>`;
    const fix=el('button','btn btn-p','RECARREGAR');
    fix.style.maxWidth='260px';fix.style.margin='0 auto';
    fix.onclick=()=>{try{build();}catch(_){S.course='core';sv();}tab='learn';tabs();render();};
    v.appendChild(fix);
    const rs=el('button','btn btn-o','Voltar para o N5 base');
    rs.style.cssText='max-width:260px;margin:9px auto 0';
    rs.onclick=()=>{S.course='core';sv();build();tab='learn';tabs();render();toast('Trilha N5 restaurada');};
    v.appendChild(rs);
  }
  try{
    $('#hStreak').innerHTML=G.fire()+'<span>'+(S.streak||0)+'</span>';
    $('#hXp').innerHTML=G.gem()+'<span>'+(S.xp||0)+'</span>';
  }catch(e){}
  try{applyLanguage();tabs();scheduleLocalize();}catch(e){}
}
$('#hStreak').onclick=()=>{sTap();openCal();};

/* ── entrada escondida: 7 toques no selo 道 ── */
(function secret(){
  const seal=document.querySelector('.brand .seal');
  if(!seal)return;
  let n=0,t=null;
  seal.style.cursor='pointer';
  seal.addEventListener('click',()=>{
    n++;clearTimeout(t);t=setTimeout(()=>n=0,1400);
    if(n>=4&&n<7){seal.style.transform='rotate('+(n*7)+'deg) scale(1.06)';
      setTimeout(()=>seal.style.transform='',180);}
    if(n>=7){n=0;seal.style.transform='';codeBox();}
  });
})();
function codeBox(){
  sTap();
  const on=DEV();
  $('#mBody').innerHTML=`<div class="mtop"><button class="icon-btn" id="mC">${svg(IC.x,2.5)}</button></div>
    <div style="text-align:center;margin-bottom:14px">
      <div class="jp" style="font-size:42px;font-weight:600">鍵</div>
      <h2 style="font-size:20px;font-weight:900;letter-spacing:-.03em;margin-top:5px">Código de acesso</h2>
      <p style="font-size:12.5px;color:var(--txt3);margin-top:4px;line-height:1.5">
        ${on?'O modo livre está <b style="color:var(--kin)">ativo</b>.':'Digite o código de 4 dígitos.'}</p></div>`;
  const box=$('#mBody');
  const inp=el('input','codein');
  inp.type='tel';inp.inputMode='numeric';inp.maxLength=4;inp.placeholder='····';
  box.appendChild(inp);
  const msg=el('div','',`<p id="cdMsg" style="text-align:center;font-size:12px;font-weight:700;
    margin-top:10px;min-height:18px;color:var(--txt3)"></p>`);
  box.appendChild(msg);
  const ok=el('button','btn btn-p','CONFIRMAR');ok.style.marginTop='8px';
  const tryIt=()=>{
    /* garante que qualquer estado ausente exista (compatibilidade com saves antigos) */
    if(typeof S.devRankOnly==='undefined')S.devRankOnly=false;
    if(typeof S.catUnlocked==='undefined')S.catUnlocked=false;
    if(typeof S.dev==='undefined')S.dev=false;
    if(typeof S.devQuiet==='undefined')S.devQuiet=false;
    const v=String(inp.value||'').replace(/\D/g,'').trim();
    const m=$('#cdMsg');
    if(v==='0710'){
      S.dev=!S.dev;sv();sWin();
      m.style.color='var(--gr)';m.textContent=S.dev?'Modo livre ativado ⚡':'Modo livre desativado';
      setTimeout(()=>{closeM();render();
        toast(S.dev?'Vidas infinitas e avanço liberado':'Modo livre desligado');},700);
    }else if(v==='1234'){
      /* toggle: quando ATIVO, esconde TODOS os outros — só você aparece no ranking */
      S.devRankOnly=S.devRankOnly?false:true;
      sv();sWin();
      const on=S.devRankOnly;
      m.style.color='var(--gr)';
      m.innerHTML=on?'✓ Só você aparece no ranking':'✓ Ranking global restaurado';
      try{if(typeof lbCache!=='undefined')lbCache=null;}catch(e){}
      try{if(typeof frCache!=='undefined')frCache=null;}catch(e){}
      try{if(typeof sgTab!=='undefined')sgTab='rank';}catch(e){}
      setTimeout(()=>{
        closeM();
        tab='social';
        try{if(typeof tabs==='function')tabs();}catch(e){}
        try{if(typeof render==='function')render();}catch(e){}
        try{window.scrollTo(0,0);}catch(e){}
        if(!S.devQuiet)toast(on?'👑 Só você aparece no ranking agora':'🌐 Ranking global restaurado');
      },500);
    }else if(v==='1968'){
      /* 1968 = silêncio persistente: esconde imediatamente qualquer aviso legado do 1234. */
      S.devQuiet=true;
      sv();sWin();
      const hide1234Notices=()=>{
        try{
          document.querySelectorAll('body *').forEach(node=>{
            const t=(node.textContent||'').trim();
            if(t.includes('👑 CÓDIGO 1234 ATIVO') || t.includes('Os outros usuários foram ocultados')){
              const wrap=node.closest('.card,.panel,.modal,.toast')||node;
              if(wrap && wrap!==document.body)wrap.remove();
            }
          });
        }catch(e){}
      };
      m.style.color='var(--gr)';
      m.textContent='✓ Avisos ocultados';
      try{if(typeof lbCache!=='undefined')lbCache=null;}catch(e){}
      hide1234Notices();
      setTimeout(()=>{
        closeM();
        try{render();}catch(e){}
        /* Não mostrar toast aqui: o objetivo do 1968 é ficar completamente silencioso. */
        setTimeout(hide1234Notices,80);
      },120);
    }else if(v==='1357'){
      const wasLocked=!S.catUnlocked;
      S.catUnlocked=true;S.avatar='secretcat';sv();sWin();
      if(SB&&typeof sbPush==='function')sbPush();
      m.style.color='var(--gr)';
      m.innerHTML=wasLocked?'🐱 Gato Secreto DESBLOQUEADO!':'🐱 Gato Secreto reativado';
      setTimeout(()=>{closeM();
        if(typeof go==='function'){tab='prof';go('prof');}else render();
        toast(wasLocked?'🎉 Novo avatar disponível no seu perfil!':'Você virou o gato secreto!');},800);
    }else{
      sNo();m.style.color='var(--no)';m.textContent='Código inválido';
      inp.value='';inp.classList.remove('sh');void inp.offsetWidth;
      inp.style.animation='shk .4s';setTimeout(()=>inp.style.animation='',420);
    }
  };
  ok.onclick=tryIt;
  inp.onkeydown=e=>{if(e.key==='Enter')tryIt();};
  inp.oninput=()=>{if(inp.value.length===4)setTimeout(tryIt,180);};
  box.appendChild(ok);
  if(on){
    const off=el('button','btn btn-o','Desativar modo livre');
    off.style.cssText='margin-top:9px;color:var(--no)';
    off.onclick=()=>{S.dev=false;sv();closeM();render();toast('Modo livre desligado');};
    box.appendChild(off);
  }
  box.appendChild(el('div','',`<p style="text-align:center;font-size:11px;color:var(--txt3);
    margin-top:14px;line-height:1.6">Com o modo livre: vidas infinitas, botão para pular
    perguntas e para concluir a lição na hora.</p>`));
  $('#modal').classList.add('on');document.body.style.overflow='hidden';
  $('#mC').onclick=closeM;
  setTimeout(()=>inp.focus(),260);
}

/* ══════════════ TRILHA (Duolingo) ══════════════ */
const NODES=[
 {t:'learn',ic:G.book,l:'Aprender',d:n=>`Aprender ${n} kanji`},
 {t:'quizA',ic:G.target,l:'Quiz 1',d:()=>'Quiz de significado'},
 {t:'quizB',ic:G.chars,l:'Quiz 2',d:()=>'Quiz de leitura'},
 {t:'write',ic:G.brush,l:'Escrever',d:n=>`Escrever os ${n}`},
 {t:'build',ic:G.scroll,l:'Palavras',d:(n,ui)=>wordCount(ui)>=4?'Formar palavras':'Vocabulário'},
 {t:'speak',ic:G.mic,l:'Falar',d:()=>'Falar em voz alta'},
 {t:'boss',ic:G.trophy,l:'Prova',d:()=>'Prova da unidade'}
];
/* palavras montáveis: só valem se TODA peça for kana ou kanji já visto */
const isKana=c=>/[\u3040-\u30ff\u30fc]/.test(c);
function knownUpTo(ui){
  const s=new Set();
  for(let u=0;u<=ui&&u<UNITS.length;u++)
    UNITS[u].k.forEach(i=>{if(KANJI[i])s.add(KANJI[i].c);});
  for(const c in (S.prog||{}))s.add(c);   // e tudo que já foi aprendido antes
  return s;
}
function buildWords(ks,ui){
  const known=knownUpTo(ui),out=[],seen=new Set();
  ks.forEach(k=>{
    known.add(k.c);
    (k.w||[]).forEach(w=>{
      if(!w.w||!w.m||!w.r||seen.has(w.w))return;
      const cs=[...w.w];
      if(cs.length<2||cs.length>6)return;
      if(!cs.includes(k.c))return;                       // precisa usar o kanji da unidade
      if(!cs.every(c=>isKana(c)||known.has(c)))return;    // nada de kanji não ensinado
      seen.add(w.w);out.push({w:w.w,r:w.r,m:w.m,n:k.c});
    });
  });
  return out;
}
const _wc={};
function wordCount(ui){
  const key=(S.course||'core')+':'+ui;
  if(_wc[key]==null){
    const u=UNITS[ui];
    _wc[key]=u?buildWords(u.k.map(i=>KANJI[i]).filter(Boolean),ui).length:0;
  }
  return _wc[key];
}
const nodeList=()=>S.course==='kana'?KNODES:NODES.filter(n=>n.t!=='speak'||SR_OK);
const nkey=(u,n)=>({full:'f',n4:'n',n3:'t',n2:'d',n1:'p',kana:'k',joyo:'jo'}[S.course]||'')+'u'+u+'-'+n;
function flat(){const o=[];UNITS.forEach((u,ui)=>nodeList().forEach((n,ni)=>o.push({ui,ni,n})));return o;}
function curIdx(){const f=flat();for(let i=0;i<f.length;i++)if(!S.nodes[nkey(f[i].ui,f[i].ni)])return i;return f.length;}

function vLearn(v){
  const cur=curIdx(),f=flat();
  const lrn=learned().length;
  const acc=S.stats.ans?Math.round(S.stats.ok/S.stats.ans*100):0;

  const TOT=KANJI.length;
  const top=el('div','card');top.style.cssText='padding:14px 16px;margin-top:16px;display:flex;gap:14px;align-items:center';
  const pc=lrn/TOT,C=2*Math.PI*26;
  top.innerHTML=`<div style="width:62px;height:62px;position:relative;flex:none">
    <svg width="62" height="62" style="transform:rotate(-90deg)">
      <circle cx="31" cy="31" r="26" fill="none" stroke="var(--line2)" stroke-width="6"/>
      <circle cx="31" cy="31" r="26" fill="none" stroke="var(--gr)" stroke-width="6" stroke-linecap="round"
        stroke-dasharray="${(C*pc).toFixed(1)} ${C}"/></svg>
    <div style="position:absolute;inset:0;display:grid;place-content:center;text-align:center">
      <b style="font-size:17px;font-weight:900;line-height:1">${lrn}</b>
      <i style="font-size:7.5px;font-style:normal;color:var(--txt3);font-weight:800;letter-spacing:.1em">DE ${TOT}</i></div></div>
    <div style="flex:1;min-width:0">
      <b style="font-size:15px;font-weight:800;display:block;letter-spacing:-.02em">
        ${cur===0?'Bora começar?':cur>=f.length?'Trilha completa!':'Você está na etapa '+(cur+1)}</b>
      <small style="font-size:11.5px;color:var(--txt2);display:block;margin-top:2px;line-height:1.4">
        ${due().length?due().length+' kanji pedindo revisão · ':''}${acc}% de acerto geral</small></div>`;
  v.appendChild(top);
  mountInstallCard(v);

  UNITS.forEach((u,ui)=>{
    const nl=nodeList();
    const uStart=ui*nl.length;
    const uLocked=cur<uStart;
    const box=el('div','unit');
    const hd=el('div','unit-hd'+(uLocked?' locked':''));
    hd.style.background=u.col;hd.dataset.g=u.g;
    const uAll=nl.every((_,i)=>S.nodes[nkey(ui,i)]);
    hd.innerHTML=`<div class="uh-i"><small>Unidade ${ui+1}${uAll?' · completa':''}</small><b>${u.t}</b></div>
      <div class="uh-acts">
        ${uAll?'':`<button class="uh-b" data-a="t" title="Testar e pular">${svg(IC.exam,2.2)}</button>`}
        <button class="uh-b" data-a="g">${svg(IC.book,2.2)}</button></div>`;
    hd.querySelectorAll('.uh-b').forEach(x=>x.onclick=()=>{sTap();
      x.dataset.a==='t'?askTest(ui):openGuide(ui);});
    box.appendChild(hd);

    const tr=el('div','trail');
    const OFF=[0,50,72,50,0,-50,-72,-50];
    nl.forEach((n,ni)=>{
      const gi=uStart+ni,key=nkey(ui,ni),rec=S.nodes[key];
      const st=rec?'done':(gi===cur?'cur':'lock');
      const row=el('div','nrow');
      const w=el('div','nwrap');
      w.style.transform='translateX('+OFF[ni%OFF.length]+'px)';
      const gold=rec&&rec.stars>=3;
      const b=el('button','dnode '+(gold?'gold ':'')+st);
      /* coroa só na primeira etapa da unidade; estrela branca nas demais */
      b.innerHTML=`<div class="nin">${st==='lock'?G.lock()
        :rec?(ni===0?G.crown():G.starW()):n.ic()}</div>`;
      if(rec)b.title=n.l+' · concluída'+(gold?' · 3 estrelas':'');
      if(st==='cur'){
        const r=document.createElementNS('http://www.w3.org/2000/svg','svg');
        r.setAttribute('class','nring');r.setAttribute('viewBox','0 0 80 80');
        r.innerHTML=`<circle cx="40" cy="40" r="37" stroke="var(--ai)" opacity=".3"
          stroke-dasharray="7 9" transform="rotate(-90 40 40)"/>`;
        b.appendChild(r);
      }
      w.appendChild(b);
      w.appendChild(el('div','nlabel',n.d?n.d(u.k.length,ui):n.l));
      if(st==='cur')w.appendChild(el('div','bubble','COMEÇAR'));
      if(st!=='lock')b.onclick=()=>{sTap();startNode(ui,ni,n.t);};
      else b.onclick=()=>toast('Termine as etapas anteriores primeiro');
      row.appendChild(w);tr.appendChild(row);
    });
    box.appendChild(tr);
    v.appendChild(box);
  });

  if(lrn){
    const q=el('div','card');q.style.cssText='padding:15px;margin-top:22px';
    q.innerHTML=`<div style="display:flex;gap:11px;align-items:center;margin-bottom:12px">
      <div style="width:38px;height:38px;border-radius:11px;background:var(--kin-bg);display:grid;place-items:center;flex:none;padding:7px">${G.bolt()}</div>
      <div><b style="font-size:14px;display:block">Treino relâmpago</b>
      <small style="font-size:11.5px;color:var(--txt3)">12 perguntas de tudo que você já viu</small></div></div>`;
    const b=el('button','btn btn-o','Começar');b.onclick=()=>flash();q.appendChild(b);v.appendChild(q);
  }
  v.appendChild(el('div','',`<div style="height:20px"></div>`));
}

function openGuide(ui){
  const u=UNITS[ui],ks=u.k.map(i=>KANJI[i]);
  $('#mBody').innerHTML=`<div class="mtop"><button class="icon-btn" id="mC">${svg(IC.x,2.5)}</button></div>
    <div style="text-align:center;margin-bottom:4px">
      <div class="jp" style="font-size:44px;color:${u.col}">${u.g}</div>
      <h2 style="font-size:21px;font-weight:900;letter-spacing:-.03em;margin-top:2px">${u.t}</h2>
      <p style="font-size:12.5px;color:var(--txt3);margin-top:2px">${u.s}</p></div>
    <div class="sec-t"><span>Os 6 kanji</span></div>`;
  const g=el('div','kgrid');
  ks.forEach(k=>g.appendChild(kcard(k)));
  $('#mBody').appendChild(g);
  $('#modal').classList.add('on');document.body.style.overflow='hidden';
  $('#mC').onclick=closeM;
}
const closeM=()=>{$('#modal').classList.remove('on');
  if(!$('#onb').classList.contains('on'))document.body.style.overflow='';};
$('#mBd').onclick=closeM;

/* ══════════════ REVISAR ══════════════ */
function vRev(v){
  const L=learned(),D=due();
  if(!L.length){v.appendChild(el('div','empty',
    `<span class="eg jp">空</span><b>Ainda não tem nada aqui</b>
     <p>Faça a primeira etapa da trilha. Os kanji aparecem aqui sozinhos, na hora certa de revisar.</p>`));return;}
  const d=el('div','due');
  d.innerHTML=`<h3>${D.length?D.length+' kanji na fila':'Tudo em dia'}</h3>
    <p>${D.length?'A revisão chega pouco antes de você esquecer. É assim que fixa.':'Volte depois ou faça um treino livre pra reforçar.'}</p>`;
  const b=el('button','btn '+(D.length?'btn-p':'btn-o'),D.length?`Revisar (${D.length})`:'Treino livre');
  b.style.position='relative';b.onclick=()=>D.length?review(D):flash();
  d.appendChild(b);v.appendChild(d);

  v.appendChild(el('div','sec-t','<span>Mapa de memória</span>'));
  const hw=el('div','card');hw.style.padding='14px';
  const h=el('div','heat');
  KANJI.forEach(k=>{const c=el('div','hcell');const p=S.prog[k.c];
    if(p){const s=stre(k.c);c.style.background=`hsl(${s*130} ${45+s*30}% ${S.theme==='dark'?18+s*26:84-s*30}%)`;}
    c.title=k.c+(p?' · '+Math.round(stre(k.c)*100)+'%':' · não visto');h.appendChild(c);});
  hw.appendChild(h);
  hw.appendChild(el('div','',`<div style="display:flex;align-items:center;gap:6px;margin-top:10px;font-size:9.5px;color:var(--txt3);font-weight:700">
    <span>fraco</span><div style="width:12px;height:12px;border-radius:4px;background:hsl(0 45% ${S.theme==='dark'?'18%':'84%'})"></div>
    <div style="width:12px;height:12px;border-radius:4px;background:hsl(65 60% ${S.theme==='dark'?'31%':'69%'})"></div>
    <div style="width:12px;height:12px;border-radius:4px;background:hsl(130 75% ${S.theme==='dark'?'44%':'54%'})"></div>
    <span>forte</span><span style="margin-left:auto">${L.length}/${KANJI.length}</span></div>`));
  v.appendChild(hw);

  v.appendChild(el('div','sec-t','<span>Os que eu já sei</span>'));
  const g=el('div','kgrid');
  L.slice().sort((a,b)=>stre(a.c)-stre(b.c)).forEach(k=>g.appendChild(kcard(k)));
  v.appendChild(g);
}
function kcard(k){
  const p=S.prog[k.c],s=stre(k.c);
  const c=el('button','kc'+(p?'':' new'),`<div class="kk jp">${k.c}</div><div class="km">${esc(k.m2)}</div>
    ${p&&p.due<=Date.now()?'<div class="dd"></div>':''}
    <div class="kbar"><i style="width:${s*100}%;background:${s>.66?'var(--gr)':s>.33?'var(--kin)':'var(--shu)'}"></i></div>`);
  c.onclick=()=>{sTap();detail(k);};return c;
}

/* ══════════════ TRAÇAR (livre) ══════════════ */
let dPick=null;
function vDraw(v){
  const ok=k=>k&&k.s>0;                       // yōon (2 sinais) não tem traçado próprio
  const L=learned().filter(ok);
  const pool=L.length?L:KANJI.filter(ok).slice(0,6);
  if(!pool.length){v.appendChild(el('div','empty',
    `<span class="eg jp">筆</span><b>Nada para traçar ainda</b>
     <p>Faça a primeira etapa da trilha e os sinais aparecem aqui.</p>`));return;}
  if(!dPick||!pool.includes(dPick))dPick=pool[0];
  v.appendChild(el('div','sec-t','<span>Traçado guiado</span>'));
  const i=el('div','card');i.style.cssText='padding:14px 15px';
  i.innerHTML=`<div style="display:flex;gap:11px;align-items:flex-start">
    <div style="width:32px;height:32px;border-radius:10px;background:var(--ai-bg);color:var(--ai);display:grid;place-items:center;flex:none">${svg(IC.brush)}</div>
    <div style="font-size:12.5px;line-height:1.55;color:var(--txt2)">
    Cada traço é conferido na hora: <b style="color:var(--txt)">posição, direção e ordem</b>.
    Errou 3 vezes o mesmo traço, o app desenha ele pra você e segue.</div></div>`;
  v.appendChild(i);
  const s=el('div','filters');s.style.marginTop='12px';
  pool.forEach(k=>{const c=el('button','chip'+(k===dPick?' on':''),
    `<span class="jp" style="font-size:15px">${k.c}</span> ${esc(k.m[0])}`);
    c.onclick=()=>{dPick=k;render();};s.appendChild(c);});
  v.appendChild(s);
  const host=el('div');v.appendChild(host);
  freePad=pad(host,dPick,{free:true});
  if(L.length){const b=el('button','btn btn-p','Treino de escrita (6 sinais)');
    b.style.marginTop='14px';b.onclick=()=>writeDrill(shuffle(L).slice(0,6));v.appendChild(b);}
}

/* ══════════════ BIBLIOTECA ══════════════ */
let lf=-1,lq='';
function vLib(v){
  const s=el('div','search',svg(IC.search)+`<input placeholder="kanji, significado ou romaji" value="${esc(lq)}">`);
  s.querySelector('input').oninput=e=>{lq=e.target.value;paint();};
  v.appendChild(s);
  const f=el('div','filters');
  const mk=(id,t)=>{const c=el('button','chip'+(lf===id?' on':''),t);c.onclick=()=>{lf=id;render();};return c;};
  f.appendChild(mk(-1,'Todos · '+KANJI.length));
  UNITS.forEach((u,i)=>f.appendChild(mk(i,(i+1)+'. '+u.t)));
  v.appendChild(f);
  const g=el('div','kgrid');g.id='lg';v.appendChild(g);paint();
  function paint(){const q=lq.trim().toLowerCase();
    const list=KANJI.filter(k=>{
      if(lf>=0&&UOF[k.i]!==lf)return false;
      if(!q)return true;
      return k.c.includes(q)||k.m.some(m=>m.toLowerCase().includes(q))||
        reads(k).some(r=>r.r.toLowerCase().includes(q)||r.k.includes(q))||
        k.w.some(w=>w.r.toLowerCase().includes(q)||w.m.toLowerCase().includes(q));});
    const gr=$('#lg');gr.innerHTML='';
    if(!list.length){gr.innerHTML=`<div class="empty" style="grid-column:1/-1"><span class="eg jp">無</span><b>Nada aqui</b><p>Tenta outro termo.</p></div>`;return;}
    list.forEach(k=>gr.appendChild(kcard(k)));}
}

/* ══════════════ PERFIL ══════════════ */
const unitsDone=()=>{const n=nodeList().length;let c=0;
  UNITS.forEach((u,ui)=>{let all=true;for(let i=0;i<n;i++)if(!S.nodes[nkey(ui,i)])all=false;if(all)c++;});return c;};
const ACH=[
 {ic:G.book,   t:'Primeiro Passo', d:'Concluir 1 etapa',        v:()=>Object.keys(S.nodes).length, g:1},
 {ic:G.sakura, t:'Seis Pétalas',   d:'6 kanji aprendidos',      v:()=>learned().length,            g:6},
 {ic:G.torii,  t:'Meio Caminho',   d:'24 kanji aprendidos',     v:()=>learned().length,            g:24},
 {ic:G.crown,  t:'Curso Fechado',  d:'Todos os kanji da trilha',v:()=>learned().length,            g:()=>KANJI.length},
 {ic:G.trophy, t:'Unidade Fechada',d:'1 unidade 100% completa', v:unitsDone,                       g:1},
 {ic:G.star,   t:'Caminho Inteiro',d:'Todas as unidades',       v:unitsDone,                       g:()=>UNITS.length},
 {ic:G.brush,  t:'Pincel Firme',   d:'10 kanji sem ajuda',      v:()=>S.stats.clean||0,            g:10},
 {ic:G.scroll, t:'Calígrafo',      d:'50 traçados feitos',      v:()=>S.stats.draws||0,            g:50},
 {ic:G.mic,    t:'Voz Treinada',   d:'5 pronúncias certas',     v:()=>S.stats.spoke||0,            g:5},
 {ic:G.fire,   t:'Chama Acesa',    d:'3 dias seguidos',         v:()=>S.best||0,                   g:3},
 {ic:G.fire,   t:'Uma Semana',     d:'7 dias seguidos',         v:()=>S.best||0,                   g:7},
 {ic:G.fire,   t:'Um Mês Inteiro', d:'30 dias seguidos',        v:()=>S.best||0,                   g:30},
 {ic:G.wave,   t:'Constância',     d:'Praticar em 10 dias',     v:()=>Object.keys(S.days||{}).length, g:10},
 {ic:G.target, t:'Sem Tropeçar',   d:'20 acertos seguidos',     v:()=>S.stats.run||0,              g:20},
 {ic:G.check,  t:'Nota Cheia',     d:'100% numa sessão',        v:()=>S.stats.aces||0,             g:1},
 {ic:G.gem,    t:'Mil Pontos',     d:'Juntar 1000 XP',          v:()=>S.xp,                        g:1000}
];
function vProf(v){
  const a=avOf(),xp=S.xp,lv=lvOf(xp);
  const pv=LVL[lv-1]||0,nx=LVL[lv]!=null?LVL[lv]:xp;
  const pct=nx>pv?clamp((xp-pv)/(nx-pv),0,1):1;
  const rk=RANK[Math.min(lv-1,RANK.length-1)];
  const L=learned(),acc=S.stats.ans?Math.round(S.stats.ok/S.stats.ans*100):0;

  const h=el('div','phero');
  h.innerHTML=`<div class="prow">
      <div style="position:relative;flex:none"><div class="avatar">${a.svg()}</div><span class="avlv">${lv}</span></div>
      <div class="pname">
        <input id="nmIn" value="${esc(S.name||'Estudante')}" maxlength="18" spellcheck="false">
        <div class="prank"><span class="jp">${rk[0]}</span> ${rk[1]} · nível ${lv}</div>
      </div></div>
    <div class="lvwrap">
      <div class="lvtop"><span>${xp - pv} / ${nx - pv} XP</span>
      <span>${lv<LVL.length?'faltam '+(nx-xp):'nível máximo'}</span></div>
      <div class="lvbar"><i style="width:${pct*100}%"></i></div></div>
    <div class="pstats">
      <div class="pst tap" id="stFire"><div class="psi">${G.fire()}</div><b>${S.streak}</b><i>Ofensiva</i></div>
      <div class="pst"><div class="psi">${G.gem()}</div><b>${xp}</b><i>XP total</i></div>
      <div class="pst"><div class="psi">${G.sakura()}</div><b>${L.length}</b><i>Kanji</i></div>
    </div>`;
  v.appendChild(h);
  h.querySelector('#nmIn').onchange=e=>{S.name=e.target.value.trim()||'Estudante';sv();toast('Nome salvo');};
  h.querySelector('#stFire').onclick=()=>{sTap();openCal();};

  v.appendChild(el('div','sec-t','<span>Escolher avatar</span>'));
  const pk=el('div','avpick');
  if(S.avImg){
    const b=el('button','avopt'+(S.avatar==='custom'?' on':''),
      `<img src="${S.avImg}" style="width:100%;height:100%;object-fit:cover">`);
    b.title='Meu desenho';b.onclick=()=>{S.avatar='custom';sv();sTap();render();};pk.appendChild(b);
  }
  /* filtra avatares secretos: nunca aparecem sem estar desbloqueados */
  AV.filter(x=>x.id!=='secretcat'||S.catUnlocked).forEach(x=>{
    const b=el('button','avopt'+(x.id===S.avatar?' on':'')+(x.id==='secretcat'?' secret':''),x.svg());
    b.title=x.n;
    b.onclick=()=>{S.avatar=x.id;sv();sTap();sbPush&&sbPush();render();};
    pk.appendChild(b);
  });
  v.appendChild(pk);
  v.appendChild(el('div','avname',a.n+' · '+a.d));
  const dr=el('button','btn btn-o',svg(IC.brush,2.3)+' '+(S.avImg?'Editar meu desenho':'Desenhar meu avatar'));
  dr.style.marginTop='10px';dr.onclick=()=>{sTap();avEditor();};
  v.appendChild(dr);

  if(DEV()){
    const d=el('button','crs');
    d.style.cssText='margin-top:12px;border-color:var(--kin);background:linear-gradient(90deg,var(--kin-bg),var(--surf))';
    d.innerHTML=`<div class="cg jp" style="background:var(--kin);color:#2A1E00">鍵</div>
      <div class="cc"><b style="color:var(--kin)">Modo livre ativo</b>
      <small>Vidas ∞ · pular · concluir lição</small></div>
      <div class="ck" style="border:none;color:var(--kin)">${svg(IC.arrow,2.2)}</div>`;
    d.onclick=()=>{sTap();codeBox();};
    v.appendChild(d);
  }
  const gv=x=>typeof x.g==='function'?x.g():x.g;
  const got=ACH.filter(x=>x.v()>=gv(x)).length;
  v.appendChild(el('div','sec-t',`<span>Conquistas · ${got}/${ACH.length}</span>`));
  const ag=el('div','achg');
  ACH.forEach(x=>{
    const cur=x.v(),g=gv(x),on=cur>=g;
    const c=el('div','ach '+(on?'on':'off'));
    c.innerHTML=`${on?`<span class="chk" style="color:var(--kin)">${G.check('currentColor')}</span>`:''}
      <div class="ai">${x.ic===G.star?G.star(1):(x.ic===G.check?G.check('currentColor'):x.ic())}</div><b>${x.t}</b><small>${x.d}</small>
      ${on?'':`<div class="achbar"><i style="width:${clamp(cur/g,0,1)*100}%"></i></div>`}`;
    ag.appendChild(c);});
  v.appendChild(ag);

  v.appendChild(el('div','sec-t','<span>Números</span>'));
  const st=el('div','card');st.style.padding='14px';
  st.innerHTML=`<div class="pstats" style="margin:0">
    <div class="pst" style="background:var(--surf2)"><b>${S.stats.ans}</b><i>Respostas</i></div>
    <div class="pst" style="background:var(--surf2)"><b>${acc}%</b><i>Acerto</i></div>
    <div class="pst" style="background:var(--surf2)"><b>${S.stats.draws}</b><i>Traçados</i></div>
    <div class="pst" style="background:var(--surf2)"><b>${S.best||0}</b><i>Melhor ofensiva</i></div>
    <div class="pst" style="background:var(--surf2)"><b>${S.stats.run||0}</b><i>Maior sequência</i></div>
    <div class="pst" style="background:var(--surf2)"><b>${unitsDone()}/${UNITS.length}</b><i>Unidades</i></div></div>`;
  v.appendChild(st);

  vSet(v);
}

/* ══════════════ EDITOR DE AVATAR ══════════════ */
const AVPAL=['#1A1815','#E8503A','#F2704F','#E09A0E','#FFD055','#3FB55F','#22A88A','#3B79E0',
 '#7A55E0','#C13F8C','#FFB7C5','#8A5A34','#9AA6B8','#FFFFFF'];
const AVBG=['#FFFDF7','#FFE9D6','#DFF0FF','#E8F7E4','#F6E4FF','#FFE4EC','#2A3342','#141A24'];
function avEditor(){
  let col=AVPAL[0],wid=10,bg=AVBG[0],hist=[];
  $('#mBody').innerHTML=`<div class="mtop"><button class="icon-btn" id="mC">${svg(IC.x,2.5)}</button></div>
    <div style="text-align:center;margin-bottom:12px">
      <h2 style="font-size:20px;font-weight:900;letter-spacing:-.03em">Desenhe seu avatar</h2>
      <p style="font-size:12px;color:var(--txt3);margin-top:3px">Só o que ficar dentro do círculo aparece</p></div>`;
  const box=$('#mBody');
  const wrap=el('div','avtop');
  const cw=el('div','avcv');
  const cv=document.createElement('canvas');
  cw.appendChild(cv);wrap.appendChild(cw);box.appendChild(wrap);

  const SZ=384,dpr=Math.min(devicePixelRatio||1,2);
  cv.width=cv.height=SZ*dpr;
  const g=cv.getContext('2d');g.scale(dpr,dpr);
  const rect=()=>cv.getBoundingClientRect();
  function fill(){g.fillStyle=bg;g.fillRect(0,0,SZ,SZ);}
  function snap(){try{if(hist.length>14)hist.shift();hist.push(g.getImageData(0,0,cv.width,cv.height));}catch(e){}}
  if(S.avImg){
    const im=new Image();im.onload=()=>{g.drawImage(im,0,0,SZ,SZ);snap();};im.src=S.avImg;
  }else{fill();snap();}

  let draw=false,last=null;
  const P=e=>{const r=rect(),t=e.touches?e.touches[0]:e;
    return[(t.clientX-r.left)/r.width*SZ,(t.clientY-r.top)/r.height*SZ];};
  cv.addEventListener('pointerdown',e=>{e.preventDefault();draw=true;last=P(e);
    g.strokeStyle=col;g.fillStyle=col;g.lineCap='round';g.lineJoin='round';g.lineWidth=wid;
    g.beginPath();g.arc(last[0],last[1],wid/2,0,7);g.fill();});
  cv.addEventListener('pointermove',e=>{
    if(!draw)return;e.preventDefault();const p=P(e);
    g.strokeStyle=col;g.lineWidth=wid;g.lineCap='round';g.lineJoin='round';
    g.beginPath();g.moveTo(last[0],last[1]);g.lineTo(p[0],p[1]);g.stroke();last=p;});
  const up=()=>{if(draw){draw=false;snap();}};
  window.addEventListener('pointerup',up);
  cv.addEventListener('pointercancel',up);
  cv.addEventListener('touchstart',e=>e.preventDefault(),{passive:false});

  const pal=el('div','avpal');
  AVPAL.forEach((c,i)=>{const b=el('button','avc'+(i===0?' on':''));
    b.style.background=c;if(c==='#FFFFFF')b.style.boxShadow='inset 0 0 0 1px var(--line2)';
    b.onclick=()=>{col=c;[...pal.children].forEach(x=>x.classList.remove('on'));b.classList.add('on');sTap();};
    pal.appendChild(b);});
  box.appendChild(pal);

  const szr=el('div','avsz');
  [[4,'fino'],[10,'médio'],[22,'grosso'],[42,'pincel']].forEach(([w,n],i)=>{
    const b=el('div','avs'+(i===1?' on':''),`<i style="width:${Math.min(w,20)}px;height:${Math.min(w,20)}px"></i>`);
    b.title=n;b.onclick=()=>{wid=w;[...szr.children].forEach(x=>x.classList.remove('on'));b.classList.add('on');sTap();};
    szr.appendChild(b);});
  box.appendChild(szr);

  box.appendChild(el('div','sec-t','<span>Cor de fundo</span>'));
  const bgr=el('div','avpal');
  AVBG.forEach((c,i)=>{const b=el('button','avc'+(i===0?' on':''));
    b.style.background=c;b.style.boxShadow='inset 0 0 0 1px var(--line2)';
    b.onclick=()=>{
      /* repinta o fundo preservando o traço */
      const tmp=document.createElement('canvas');tmp.width=cv.width;tmp.height=cv.height;
      tmp.getContext('2d').drawImage(cv,0,0);
      bg=c;fill();g.save();g.setTransform(1,0,0,1,0,0);g.globalCompositeOperation='source-over';
      g.drawImage(tmp,0,0);g.restore();
      [...bgr.children].forEach(x=>x.classList.remove('on'));b.classList.add('on');sTap();};
    bgr.appendChild(b);});
  box.appendChild(bgr);

  const tools=el('div','padtools');tools.style.marginTop='12px';
  const bU=el('button','tool',svg(IC.undo,2.2)+' Desfazer');
  bU.onclick=()=>{if(hist.length<2)return;hist.pop();
    const im=hist[hist.length-1];
    g.save();g.setTransform(1,0,0,1,0,0);g.putImageData(im,0,0);g.restore();sTap();};
  const bC=el('button','tool',svg(IC.trash,2.2)+' Limpar');
  bC.onclick=()=>{fill();snap();sTap();};
  tools.append(bU,bC);box.appendChild(tools);

  const ok=el('button','btn btn-p','SALVAR COMO AVATAR');
  ok.onclick=()=>{
    try{
      const out=document.createElement('canvas');out.width=out.height=256;
      const o=out.getContext('2d');
      o.save();o.beginPath();o.arc(128,128,128,0,7);o.clip();
      o.drawImage(cv,0,0,256,256);o.restore();
      S.avImg=out.toDataURL('image/webp',.82);
      if(S.avImg.length>200000)S.avImg=out.toDataURL('image/jpeg',.7);
      S.avatar='custom';sv();sbPush();sWin();closeM();render();toast('Avatar salvo!');
    }catch(e){toast('Não deu pra salvar o desenho');}
  };
  box.appendChild(ok);
  if(S.avImg){
    const del=el('button','btn btn-o','Apagar meu desenho');
    del.style.cssText='margin-top:9px;color:var(--no)';
    del.onclick=()=>{S.avImg='';if(S.avatar==='custom')S.avatar='kitsune';sv();closeM();render();toast('Desenho apagado');};
    box.appendChild(del);
  }
  $('#modal').classList.add('on');document.body.style.overflow='hidden';
  $('#mC').onclick=()=>{window.removeEventListener('pointerup',up);closeM();};
}

/* ══════════════ CALENDÁRIO DA OFENSIVA ══════════════ */
const MES=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
let calD=null;
function openCal(){calD=new Date();$('#modal').classList.add('on');document.body.style.overflow='hidden';drawCal();}
function drawCal(){
  const y=calD.getFullYear(),m=calD.getMonth();
  const first=new Date(y,m,1),lastN=new Date(y,m+1,0).getDate();
  const pad=first.getDay(),today=dk(new Date()),D=S.days||{};
  const now=new Date();const isNow=(y===now.getFullYear()&&m===now.getMonth());
  let cells='';
  for(let i=0;i<pad;i++)cells+='<div class="cald pad"></div>';
  for(let d=1;d<=lastN;d++){
    const key=y+'-'+String(m+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
    const on=D[key];
    cells+=`<div class="cald${on?' act':''}${key===today?' today':''}"${on?` title="${on} XP"`:''}>${d}</div>`;}
  const total=Object.keys(D).length;
  const mesXp=Object.keys(D).filter(k=>k.startsWith(y+'-'+String(m+1).padStart(2,'0'))).reduce((s,k)=>s+D[k],0);
  $('#mBody').innerHTML=`<div class="mtop"><button class="icon-btn" id="mC">${svg(IC.x,2.5)}</button></div>
    <div style="text-align:center;margin-bottom:16px">
      <div style="width:56px;height:56px;margin:0 auto 6px">${G.fire()}</div>
      <h2 style="font-size:26px;font-weight:900;letter-spacing:-.03em">${S.streak} ${S.streak===1?'dia':'dias'} seguidos</h2>
      <p style="font-size:12.5px;color:var(--txt3);margin-top:2px">
        ${S.streak?'Não quebre a corrente.':'Faça uma etapa hoje pra acender a chama.'}</p></div>
    <div class="calhd">
      <button class="calnav" id="cPrev">${svg(IC.left,2.4)}</button>
      <b>${MES[m]} ${y}</b>
      <button class="calnav" id="cNext" ${isNow?'disabled':''}>${svg(IC.right,2.4)}</button></div>
    <div class="calg">${['D','S','T','Q','Q','S','S'].map(w=>`<div class="calw">${w}</div>`).join('')}${cells}</div>
    <div class="calfoot">
      <div class="calf"><b style="color:var(--kin)">${S.streak}</b><i>Atual</i></div>
      <div class="calf"><b style="color:var(--shu)">${S.best||0}</b><i>Recorde</i></div>
      <div class="calf"><b style="color:var(--ai)">${total}</b><i>Dias no total</i></div></div>
    <p style="text-align:center;font-size:11.5px;color:var(--txt3);margin-top:14px">
      ${mesXp?mesXp+' XP conquistados em '+MES[m].toLowerCase()+'.':'Nenhum treino neste mês ainda.'}</p>`;
  $('#mC').onclick=closeM;
  $('#cPrev').onclick=()=>{calD=new Date(y,m-1,1);drawCal();sTap();};
  const nx=$('#cNext');if(!nx.disabled)nx.onclick=()=>{calD=new Date(y,m+1,1);drawCal();sTap();};
}

/* ══════════════ AJUSTES ══════════════ */
function vSet(v){
  const row=(ic,t,s,c)=>{const r=el('div','set-row',
    `<div class="set-ic">${svg(ic)}</div><div class="set-c"><b>${t}</b><small>${s}</small></div>`);r.appendChild(c);return r;};
  const tg=(on,cb)=>{const t=el('div','swt'+(on?' on':''));
    t.onclick=()=>{on=!on;t.classList.toggle('on',on);sTap();cb(on);};return t;};
  v.appendChild(el('div','sec-t',`<span>${t('Trilha de estudo')}</span>`));
  const cur=S.course||'core';
  const PFX={core:'u',full:'fu',n4:'nu',n3:'tu',n2:'du',n1:'pu',kana:'ku',joyo:'jou'};
  const GLYPH={kana:['あ','#E8574A'],core:['五','#4E86EF'],full:['五','#2A6BD8'],
    n4:['四','#A054E0'],n3:['三','#2A9D8F'],n2:['二','#C9683A'],n1:['一','#9C3F6E'],joyo:['常','#3F7A55']};
  Object.keys(COURSES).forEach(id=>{
    const C=COURSES[id],on=cur===id,gl=GLYPH[id]||['道','#888'];
    const done=Object.keys(S.nodes||{}).filter(x=>{
      const p=PFX[id];
      return id==='core'?/^u\d/.test(x):x.startsWith(p);}).length;
    const c=el('button','crs'+(on?' on':''));
    c.innerHTML=`<div class="cg" style="background:${gl[1]}">${gl[0]}</div>
      <div class="cc"><b>${C.t}</b><small>${C.d}</small></div>
      ${done?`<div class="cn">${done}<br>etapas</div>`:''}
      <div class="ck">${TICK}</div>`;
    c.onclick=()=>{if(on)return;S.course=id;sv();build();sTap();
      toast(C.t+' ativada');go('learn');};
    v.appendChild(c);
  });
  v.appendChild(el('div','',`<p style="font-size:11px;color:var(--txt3);line-height:1.55;margin:6px 0 2px;text-align:center">
    Cada trilha guarda o próprio progresso.${cur==='joyo'?(JOYO_LIST.length===2136?' · 2.136 kanji carregados':' · dados Jōyō disponíveis para completar a lista'):''}</p>`));
  const rc=el('button','crs');rc.style.marginTop='10px';
  rc.innerHTML=`<div class="cg" style="background:var(--shu);padding:7px">${G.sakura()}</div>
    <div class="cc"><b>Refazer a escolha inicial</b><small>Recomeça a trilha escolhida do ponto novo</small></div>
    <div class="ck" style="border:none;color:var(--txt3)">${svg(IC.arrow,2.2)}</div>`;
  rc.onclick=()=>{sTap();
    if(confirm('Refazer a escolha vai REDEFINIR as etapas da trilha que você escolher.\n\n'+
      'Os kanji aprendidos e o XP continuam salvos. Continuar?'))obShow();};
  v.appendChild(rc);
  const kc=el('button','crs');
  kc.innerHTML=`<div class="cg jp" style="background:var(--ai);font-size:15px">あア</div>
    <div class="cc"><b>Tabelas de kana</b><small>Grade completa para consulta</small></div>
    <div class="ck" style="border:none;color:var(--txt3)">${svg(IC.arrow,2.2)}</div>`;
  kc.onclick=()=>{sTap();obKana();};
  v.appendChild(kc);

  v.appendChild(el('div','sec-t',`<span>${t('Idioma')}</span>`));
  const il=el('div','card lang-card');
  il.innerHTML=`<div class="lang-head"><div class="lang-icon">${svg(IC.glob)}</div>
    <div class="lang-head-copy"><b>${t('Idioma')}</b><small>${lang()==='en'?'Interface language':'Idioma da interface'}</small></div></div>`;
  const lo=el('div','lang-options');lo.setAttribute('role','radiogroup');
  [['auto','Automático (sistema)'],['pt','Português (Brasil)'],['en','Inglês']].forEach(([val,lb])=>{
    const on=(S.lang||'auto')===val;
    const b=el('button','lang-option'+(on?' on':''));
    b.setAttribute('role','radio');b.setAttribute('aria-checked',on?'true':'false');
    b.innerHTML=`<span class="lang-radio"></span><span class="lang-copy"><b>${t(lb)}</b></span>`;
    b.onclick=()=>setLang(val);lo.appendChild(b);
  });
  il.appendChild(lo);
  v.appendChild(il);

  v.appendChild(el('div','sec-t',`<span>${t('Aparência')}</span>`));
  const a=el('div','card');
  const sg=el('div','seg');
  [['light','Claro'],['dark','Escuro']].forEach(([val,lb])=>{
    const b=el('button',val===S.theme?'on':'',t(lb));b.onclick=()=>{S.theme=val;sv();theme();render();};sg.appendChild(b);});
  a.appendChild(row(IC.moon,t('Tema'),t('Papel washi ou tinta sumi'),sg));
  const fg=el('div','seg');
  [['gothic','ゴ'],['maru','丸'],['mincho','明']].forEach(([val,lb])=>{
    const b2=el('button',(S.jpf||'gothic')===val?'on':'',lb);b2.className+=' jp';
    b2.onclick=()=>{S.jpf=val;sv();theme();render();};fg.appendChild(b2);});
  a.appendChild(row(IC.book,t('Fonte dos kanji'),t('Gótica (padrão), arredondada ou serifada'),fg));
  v.appendChild(a);

  v.appendChild(el('div','sec-t',`<span>${t('Som')}</span>`));
  const b=el('div','card');
  b.appendChild(row(IC.vol,t('Efeitos'),t('Bipes de acerto e erro'),tg(S.sound,x=>{S.sound=x;sv();if(x)sOk();})));
  b.appendChild(row(IC.book,t('Voz japonesa'),('speechSynthesis'in window)?'Usa a voz do seu aparelho':'Seu navegador não tem',
    tg(S.tts,x=>{S.tts=x;sv();if(x)say('こんにちは');})));
  b.appendChild(row(IC.mic,'Reconhecimento de fala',SR_OK?'Disponível (funciona melhor no Chrome)':'Não suportado aqui',
    el('div','chip'+(SR_OK?' on':''),SR_OK?'ativo':'off')));
  v.appendChild(b);

  v.appendChild(el('div','sec-t',`<span>${t('Conta')}</span>`));
  const d=el('div','card');d.style.padding='15px';
  if(SB.on){
    d.insertAdjacentHTML('afterbegin',`<div style="display:flex;gap:10px;align-items:center;margin-bottom:12px">
      <div style="width:32px;height:32px;flex:none">${G.link()}</div>
      <div style="flex:1;min-width:0"><b style="font-size:13px;display:block">Sincronizado</b>
      <small style="font-size:11px;color:var(--txt3)">código ${SB.me?SB.me.code:'—'}</small></div>
      <span class="chip on">online</span></div>`);
    const out=el('button','btn btn-o','Desconectar');out.style.marginBottom='9px';
    out.onclick=async()=>{try{await SB.cli.auth.signOut();}catch(e){}
      SB.on=false;SB.user=null;SB.me=null;toast('Desconectado');render();};
    d.appendChild(out);
  }
  const r=el('button','btn btn-o','Zerar progresso');
  r.style.color='var(--no)';
  r.onclick=()=>{if(confirm('Isso apaga tudo: kanji, revisões, XP, conquistas. Sem volta. Certeza?')){
    const t=S.theme;S=JSON.parse(JSON.stringify(DEF));S.theme=t;sv();toast('Zerado');go('learn');}};
  d.appendChild(r);v.appendChild(d);

  v.appendChild(el('div','sec-t',`<span>${t('Notas')}</span>`));
  const n=el('div','card');n.style.padding='15px';
  n.innerHTML=`<p style="font-size:12.5px;line-height:1.7;color:var(--txt2)">
    Seis trilhas, do zero ao N1: os dois silabários e os kanji do
    <b style="color:var(--txt)">N5 ao N1</b>, com traçado conferido e revisão espaçada.<br><br>
    Os traços vêm do <b style="color:var(--txt)">KanjiVG</b> (Ulrich Apel), licença CC BY-SA 3.0,
    e ficam salvos no aparelho depois da primeira vez.</p>`;
  v.appendChild(n);
  /* rodapé com o selo — toque abre os créditos */
  const f=el('div','');
  f.style.cssText='text-align:center;margin:20px 0 8px;cursor:pointer;user-select:none';
  f.innerHTML=`<div class="jp" style="font-size:22px;color:var(--txt3);opacity:.5;letter-spacing:3px">漢字道</div>
    <div style="font-size:10px;color:var(--txt3);opacity:.75;margin-top:4px;letter-spacing:.14em">
      KANJIDŌ · v3.0 · 頑張って</div>`;
  let tap=0,tt=null;
  f.onclick=()=>{
    tap++;clearTimeout(tt);tt=setTimeout(()=>tap=0,1200);
    const g=f.querySelector('.jp');
    if(tap>=2&&tap<3){g.style.opacity='.85';g.style.color='var(--shu)';
      setTimeout(()=>{g.style.opacity='.5';g.style.color='var(--txt3)';},260);}
    if(tap>=3){tap=0;sTap();credits();}
  };
  v.appendChild(f);
}

/* ══════════════ CRÉDITOS ══════════════ */
function credits(){
  const L=learned().length;
  $('#mBody').innerHTML=`<div class="mtop"><button class="icon-btn" id="mC">${svg(IC.x,2.5)}</button></div>
    <div style="text-align:center;padding:6px 0 2px">
      <div class="seal jp" style="width:74px;height:74px;border-radius:22px;font-size:38px;margin:0 auto 16px;
        box-shadow:0 12px 34px rgba(200,60,35,.32)">道</div>
      <div style="font-size:9.5px;font-weight:900;letter-spacing:.22em;color:var(--txt3);text-transform:uppercase">
        Criado por</div>
      <h2 style="font-size:27px;font-weight:900;letter-spacing:-.035em;margin-top:5px;
        background:linear-gradient(100deg,var(--shu),var(--kin));-webkit-background-clip:text;
        background-clip:text;color:transparent">Rafael Queiroz</h2>
      <p style="font-size:12.5px;color:var(--txt2);margin-top:7px;line-height:1.6;max-width:290px;margin-left:auto;margin-right:auto">
        Conceito, design, conteúdo e programação.<br>
        <b style="color:var(--txt)">Fiz tudo.</b></p>
    </div>
    <div class="sec-t"><span>O que tem aqui dentro</span></div>
    <div class="pstats" style="margin:0">
      <div class="pst"><b>6</b><i>Trilhas</i></div>
      <div class="pst"><b>1500+</b><i>Sinais</i></div>
      <div class="pst"><b>15</b><i>Avatares</i></div>
    </div>
    <div class="card" style="padding:15px;margin-top:12px">
      <p style="font-size:12.5px;line-height:1.75;color:var(--txt2)">
        Hiragana, katakana e os kanji do <b style="color:var(--txt)">N5 ao N1</b>.
        Traçado conferido traço a traço, quizzes que se adaptam ao erro, formação de palavras,
        reconhecimento de fala, repetição espaçada, ranking e lições em dupla.<br><br>
        Cada mnemônico foi escrito à mão, um por um.</p>
    </div>
    <div class="sec-t"><span>Com apoio de</span></div>
    <div class="card" style="padding:15px">
      <p style="font-size:12px;line-height:1.7;color:var(--txt3)">
        <b style="color:var(--txt2)">KanjiVG</b> — dados de traçado, por Ulrich Apel · CC BY-SA 3.0<br>
        <b style="color:var(--txt2)">Supabase</b> — ranking e amigos<br>
        <b style="color:var(--txt2)">Google Fonts</b> — Inter, Zen Kaku Gothic, Klee One<br>
        Todo o resto é feito à mão, sem framework nenhum.</p>
    </div>
    <p style="text-align:center;font-size:11px;color:var(--txt3);margin-top:16px;line-height:1.7">
      Você já aprendeu <b style="color:var(--kin)">${L}</b> ${L===1?'sinal':'sinais'} aqui.<br>
      <span class="jp" style="font-size:14px">継続は力なり</span><br>
      <span style="opacity:.75">"continuar é o que dá força"</span></p>`;
  const b=el('button','btn btn-p','FECHAR');b.style.marginTop='16px';
  b.onclick=closeM;$('#mBody').appendChild(b);
  $('#modal').classList.add('on');document.body.style.overflow='hidden';
  $('#mC').onclick=closeM;
  sWin();
}

/* ══════════════ DETALHE ══════════════ */
function detail(k){
  $('#mBody').innerHTML=`<div class="mtop"><button class="icon-btn" id="mC">${svg(IC.x,2.5)}</button></div>`
    +(k.kana?kteach(k)+`<button class="btn btn-p" id="prB" style="margin-top:16px">${svg(IC.brush,2.3)} Praticar o traçado</button>`:teach(k,1));
  $('#modal').classList.add('on');document.body.style.overflow='hidden';
  $('#mC').onclick=closeM;wire($('#mBody'));
  const p=$('#mBody').querySelector('#prB');
  if(p)p.onclick=()=>{closeM();dPick=k;go('draw');};
}
function teach(k,modal){
  const p=S.prog[k.c];
  return `<div class="kbox"><div class="g jp">${k.c}</div></div>
  <div class="t-mean">${esc(mean(k))}</div>
  <div class="t-sub">${k.s} traços${k.g?' · '+k.g+'º ano':''} · JLPT ${k.jl||'N5'}${p?' · nível '+p.lvl+'/6':''}</div>
  ${k.on.length?`<div class="read"><span class="read-tag ${k.jy?'o':'o'}">${k.jy?'LEIT':'ON'}</span><div class="read-v">
    <b class="jp">${k.on.map(x=>x.k).join('・')}</b><small>${k.on.map(x=>x.r).join(' · ')}</small></div>
    <button class="spk" data-s="${k.on[0].k}">${svg(IC.vol,2.2)}</button></div>`:''}
  ${k.kun.length?`<div class="read"><span class="read-tag k">KUN</span><div class="read-v">
    <b class="jp">${k.kun.map(x=>x.k).join('・')}</b><small>${k.kun.map(x=>x.r).join(' · ')}</small></div>
    <button class="spk" data-s="${k.kun[0].k.replace(/[()]/g,'')}">${svg(IC.vol,2.2)}</button></div>`:''}
  <div class="info-row"><span class="chip">${k.s} traços</span>
    <span class="chip s">radical <span class="jp" style="font-size:14px">${k.rad.c}</span> ${esc(k.rad.m)}</span>
    <span class="chip k">Unidade ${UOF[k.i]+1}</span></div>
  <div class="story"><h4>Pra não esquecer</h4><p>${k.sty}</p></div>
  ${k.p&&k.p.length>1?`<div class="parts">${k.p.map((x,i)=>
    `${i?'<span class="plus">+</span>':''}<div class="part"><span class="pk jp">${x.c}</span><span class="pm">${esc(x.m)}</span></div>`).join('')}
    <span class="plus">=</span><div class="part" style="border-color:var(--ai);background:var(--ai-bg)">
    <span class="pk jp">${k.c}</span><span class="pm" style="color:var(--ai)">${esc(k.m[0])}</span></div></div>`:''}
  <div class="sec-t"><span>Palavras com ${k.c}</span></div>
  ${k.w.map(w=>`<div class="word"><span class="ww jp">${w.w}</span>
    <div class="wi"><b>${esc(w.m)}</b><small>${w.r}</small></div>
    <button class="spk" data-s="${w.w}">${svg(IC.vol,2.2)}</button></div>`).join('')}
  ${modal?`<button class="btn btn-p" id="prB" style="margin-top:16px">${svg(IC.brush,2.3)} Praticar o traçado</button>`:''}`;
}
function wire(r){r.querySelectorAll('.spk').forEach(b=>{
  if(!canSay()){b.style.display='none';return;}
  b.onclick=e=>{e.stopPropagation();say(b.dataset.s);};});}

/* ══════════════════════════════════════════════════════════════
   PRANCHETA COM VERIFICAÇÃO TRAÇO A TRAÇO
   ══════════════════════════════════════════════════════════════ */
function pad(host,k,opt){
  opt=opt||{};
  const SZ=Math.min(opt.size||320,Math.round(Math.min(window.innerWidth*.8,340)));
  const hud=el('div','strokehud');host.appendChild(hud);
  const box=el('div','padwrap');box.style.width=box.style.height=SZ+'px';
  const cv=document.createElement('canvas');box.appendChild(cv);
  host.appendChild(box);
  const msg=el('div','padmsg','Carregando os traços…');host.appendChild(msg);
  const tools=el('div','padtools');host.appendChild(tools);

  const dpr=Math.min(devicePixelRatio||1,2.5);
  cv.width=SZ*dpr;cv.height=SZ*dpr;
  const g=cv.getContext('2d');g.scale(dpr,dpr);

  let TG=null,idx=0,miss=0,helped=0,scores=[],user=[],drawing=false,anim=null,busy=false,done=false;
  let showGhost=!opt.quiz;
  const ink=()=>getComputedStyle(document.documentElement).getPropertyValue('--ink').trim()||'#000';
  const cv2=v=>v*SZ;
  /* Espessura proporcional ao nº de traços: kana e kanji simples precisam de
     pincel bem mais grosso pra ficarem parecidos com a fonte impressa. */
  let LW=SZ*.052;
  function setLW(n){
    const f=n<=2?.078:n<=4?.068:n<=6?.060:n<=9?.052:n<=13?.045:n<=17?.039:.034;
    LW=SZ*f;
  }

  /* ── SILHUETA ──────────────────────────────────────────────────────
     A silhueta é desenhada com EXATAMENTE os mesmos paths que você
     traça, só que em cinza claro e com o mesmo pincel. Assim o encaixe
     é perfeito por construção: mesma geometria, mesma espessura,
     mesma posição. Nada de casar fonte com esqueleto no olho.        */
  function drawGhost(a){
    if(!TG||!TG.d)return;
    g.save();
    g.globalAlpha=a;
    g.scale(SCK,SCK);
    g.strokeStyle=ink();g.lineCap='round';g.lineJoin='round';
    g.lineWidth=LW/SCK;
    for(let i=0;i<TG.d.length;i++){
      try{g.stroke(new Path2D(TG.d[i]));}catch(e){}
    }
    g.restore();
  }
  function grid(){
    const c=getComputedStyle(document.documentElement);
    g.clearRect(0,0,SZ,SZ);
    if(showGhost)drawGhost(.13);
    g.strokeStyle=c.getPropertyValue('--line2').trim();g.lineWidth=1;g.setLineDash([5,6]);g.globalAlpha=.75;
    g.beginPath();g.moveTo(SZ/2,SZ*.05);g.lineTo(SZ/2,SZ*.95);
    g.moveTo(SZ*.05,SZ/2);g.lineTo(SZ*.95,SZ/2);g.stroke();
    g.globalAlpha=.35;g.setLineDash([3,8]);
    g.beginPath();g.moveTo(SZ*.06,SZ*.06);g.lineTo(SZ*.94,SZ*.94);
    g.moveTo(SZ*.94,SZ*.06);g.lineTo(SZ*.06,SZ*.94);g.stroke();
    g.setLineDash([]);g.globalAlpha=1;
  }
  /* desenha o traço i usando a curva original do KanjiVG (Path2D) */
  const SCK=SZ/109;
  function brush(i,col,w,t){
    if(!TG||!TG.d[i])return;
    let p2;
    try{p2=new Path2D(TG.d[i]);}catch(e){return;}
    g.save();
    g.scale(SCK,SCK);
    g.strokeStyle=col;g.lineCap='round';g.lineJoin='round';
    g.lineWidth=(w/SCK);
    if(t!=null&&t<1){
      const L=TG.len[i]||1;
      g.setLineDash([Math.max(.001,L*t),L*2]);
    }
    g.stroke(p2);
    g.setLineDash([]);
    g.restore();
  }
  function rawStroke(pts,col,w){
    if(pts.length<2){if(pts.length){g.fillStyle=col;g.beginPath();g.arc(pts[0][0],pts[0][1],w/2,0,7);g.fill();}return;}
    g.strokeStyle=col;g.lineWidth=w;g.lineCap='round';g.lineJoin='round';
    g.beginPath();g.moveTo(pts[0][0],pts[0][1]);
    for(let i=1;i<pts.length-1;i++){const m=[(pts[i][0]+pts[i+1][0])/2,(pts[i][1]+pts[i+1][1])/2];
      g.quadraticCurveTo(pts[i][0],pts[i][1],m[0],m[1]);}
    g.lineTo(pts[pts.length-1][0],pts[pts.length-1][1]);g.stroke();
  }
  function paint(partial){
    grid();
    if(!TG)return;
    const N=TG.pts.length;
    for(let i=0;i<idx;i++)brush(i,ink(),LW);
    if(partial)brush(partial.i,partial.col||ink(),LW,partial.t);
    if(!done&&!partial&&idx<N){
      const nx=TG.pts[idx];
      if(miss>=1){g.globalAlpha=.2;brush(idx,ink(),LW);g.globalAlpha=1;}
      const s=nx[0];
      const pu=(Date.now()%1400)/1400;
      g.fillStyle=getComputedStyle(document.documentElement).getPropertyValue('--ai').trim();
      g.globalAlpha=.28;g.beginPath();g.arc(cv2(s[0]),cv2(s[1]),LW*(.55+pu*.7),0,7);g.fill();
      g.globalAlpha=1;g.beginPath();g.arc(cv2(s[0]),cv2(s[1]),LW*.42,0,7);g.fill();
      g.fillStyle='#fff';g.font='700 '+(LW*.55)+'px '+getComputedStyle(document.body).fontFamily;
      g.textAlign='center';g.textBaseline='middle';g.fillText(String(idx+1),cv2(s[0]),cv2(s[1])+1);
    }
    /* mesma espessura da silhueta: o traço encaixa exatamente por cima */
    if(user.length>1)rawStroke(user,getComputedStyle(document.documentElement).getPropertyValue('--ai').trim(),LW);
  }
  let pulse=setInterval(()=>{if(!drawing&&!busy&&!done)paint();},60);

  function dots(){
    if(!TG)return;
    const N=TG.pts.length;
    hud.innerHTML='';
    for(let i=0;i<N;i++)
      hud.appendChild(el('div','sdot'+(i<idx?(scores[i]<0?' help':' ok'):i===idx&&!done?' now':'')));
    hud.appendChild(el('div','',`<span style="font-size:11px;font-weight:800;color:var(--txt3);margin-left:6px">${Math.min(idx+1,N)}/${N}</span>`));
  }
  function say2(t,cls){msg.className='padmsg'+(cls?' '+cls:'');msg.innerHTML='<span class="padtxt">'+t+'</span>';}

  function animate(i,cb){
    busy=true;const t0=performance.now(),dur=520;
    cancelAnimationFrame(anim);
    (function fr(){
      const t=clamp((performance.now()-t0)/dur,0,1);
      paint({i,t,col:getComputedStyle(document.documentElement).getPropertyValue('--kin').trim()});
      if(t<1)anim=requestAnimationFrame(fr);else{busy=false;cb&&cb();}
    })();
  }
  function demo(){
    if(!TG||busy)return;
    busy=true;idx=0;user=[];done=false;scores=[];
    const N=TG.pts.length;
    let i=0;
    (function nx(){
      if(i>=N){busy=false;idx=0;dots();paint();say2('Sua vez. Comece pelo <b>traço 1</b>.','hint');return;}
      const t0=performance.now(),dur=380+TG.len[i]*7;
      (function fr(){
        const t=clamp((performance.now()-t0)/dur,0,1);
        idx=i;paint({i,t,col:getComputedStyle(document.documentElement).getPropertyValue('--ai').trim()});
        if(t<1)requestAnimationFrame(fr);else{i++;idx=i;dots();setTimeout(nx,110);}
      })();
    })();
  }

  function accept(sc){
    scores[idx]=sc;idx++;miss=0;user=[];
    sTick(idx);
    box.classList.remove('flashok');void box.offsetWidth;box.classList.add('flashok');
    dots();
    if(idx>=TG.pts.length){
      done=true;paint();
      const good=scores.filter(s=>s>=0);
      const avg=good.length?good.reduce((a,b)=>a+b,0)/good.length:0;
      const final=Math.round(clamp(avg*100-helped*9,0,100));
      say2('Kanji completo!','ok');
      S.stats.draws++;sv();
      setTimeout(()=>opt.onDone&&opt.onDone(final,helped,TG.pts.length),420);
    }else say2(sc>=.75?'Perfeito. Agora o <b>traço '+(idx+1)+'</b>.':'Boa. <b>Traço '+(idx+1)+'</b>.','ok');
  }
  function autoDraw(){
    helped++;
    say2('Deixa comigo. Olha como é o <b>traço '+(idx+1)+'</b>.','hint');
    animate(idx,()=>{scores[idx]=-1;idx++;miss=0;user=[];dots();
      if(idx>=TG.pts.length){done=true;paint();
        const good=scores.filter(s=>s>=0);
        const avg=good.length?good.reduce((a,b)=>a+b,0)/good.length:0;
        S.stats.draws++;sv();
        setTimeout(()=>opt.onDone&&opt.onDone(Math.round(clamp(avg*100-helped*9,0,100)),helped,TG.pts.length),420);
      }else{paint();say2('Agora tenta o <b>traço '+(idx+1)+'</b>.','hint');}});
  }

  const P=e=>{const r=cv.getBoundingClientRect();const t=e.touches?e.touches[0]:e;
    return [clamp(t.clientX-r.left,0,SZ),clamp(t.clientY-r.top,0,SZ)];};
  cv.addEventListener('pointerdown',e=>{
    if(!TG||busy||done)return;e.preventDefault();drawing=true;user=[P(e)];paint();});
  cv.addEventListener('pointermove',e=>{
    if(!drawing)return;e.preventDefault();const p=P(e),l=user[user.length-1];
    if(Math.hypot(p[0]-l[0],p[1]-l[1])>1.6){user.push(p);paint();}});
  const upFn=()=>{
    if(!drawing)return;drawing=false;
    if(user.length<2){user=[];paint();return;}
    const norm=user.map(p=>[p[0]/SZ,p[1]/SZ]);
    const pend=[];for(let i=idx;i<TG.pts.length;i++)pend.push(i);
    const r=judge(norm,TG.pts,idx,pend);
    if(r.ok){accept(r.score);}
    else{
      miss++;sNo();
      box.classList.remove('shake');void box.offsetWidth;box.classList.add('shake');
      user=[];
      if(miss>=3){setTimeout(autoDraw,340);}
      else{say2(r.msg+' <span style="opacity:.7">('+miss+'/3)</span>','no');paint();}
    }
  };
  window.addEventListener('pointerup',upFn);
  cv.addEventListener('pointercancel',upFn);
  cv.addEventListener('touchstart',e=>e.preventDefault(),{passive:false});

  const bU=el('button','tool',svg(IC.undo,2.2)+' Voltar 1');
  const bD=el('button','tool',svg(IC.play,2.2)+' Ver animação');
  const bG=el('button','tool'+(showGhost?' on':''),svg(IC.eye,2.2)+' Silhueta');
  bG.onclick=()=>{showGhost=!showGhost;bG.classList.toggle('on',showGhost);paint();sTap();};
  bU.onclick=()=>{if(busy||idx===0)return;idx--;scores.pop();miss=0;done=false;user=[];dots();paint();sTap();
    say2('Refaça o <b>traço '+(idx+1)+'</b>.','hint');};
  bD.onclick=()=>{sTap();helped++;demo();};
  tools.append(bU,bD,bG);
  if(opt.free){
    const bR=el('button','tool',svg(IC.trash,2.2)+' Recomeçar');
    bR.onclick=()=>{if(busy)return;idx=0;miss=0;helped=0;scores=[];user=[];done=false;dots();paint();
      say2('Do começo. <b>Traço 1</b>.','hint');sTap();};
    tools.appendChild(bR);
  }

  grid();
  strokesOf(k.c).then(t=>{
    TG=t;setLW(t.pts.length);
    dots();paint();
    say2(`<b>${k.c}</b> tem ${t.pts.length} traços. Comece no <b>ponto azul</b>.`,'hint');
  }).catch(()=>{
    clearInterval(pulse);
    say2('Não consegui baixar os traços deste kanji. Confira a conexão.','no');
    tools.innerHTML='';
    const sk=el('button','tool','Pular esta');
    sk.onclick=()=>opt.onDone&&opt.onDone(-1,0,k.s);tools.appendChild(sk);
  });
  return {stop:()=>{clearInterval(pulse);cancelAnimationFrame(anim);window.removeEventListener('pointerup',upFn);}};
}

/* ══════════════════════════════════════════════════════════════
   SESSÃO
   ══════════════════════════════════════════════════════════════ */
let SS=null,padRef=null;
/* modo livre: vidas infinitas + avanço manual */
const DEV=()=>!!S.dev;
function loseHp(){if(!DEV())SS.hp=Math.max(0,SS.hp-1);}
function open(q,meta){
  SS={q,i:0,ok:0,ko:0,hp:5,best:0,run:0,seen:new Set(),t0:Date.now(),meta:meta||{},xp:0};
  $('#session').classList.add('on');$('#tabbar').classList.add('hide');
  document.body.style.overflow='hidden';devBar();step();
}
function devBar(){
  const old=$('#devRow');if(old)old.remove();
  if(!DEV())return;
  const row=el('div','devrow');row.id='devRow';
  row.innerHTML=`<span class="dvtag">MODO LIVRE</span>`;
  const a=el('button','dvb','Avançar');
  a.onclick=()=>{if(!SS)return;sTap();hideFB();
    SS.i++;if(SS.i>=SS.q.length)finish();else step();};
  const f=el('button','dvb dvb-e','Concluir lição');
  f.onclick=()=>{if(!SS)return;sTap();hideFB();
    SS.ok=Math.max(SS.ok,SS.q.length);SS.i=SS.q.length;finish();};
  row.append(a,f);
  const top=$('.s-top');top.parentNode.insertBefore(row,top.nextSibling);
}
function close(){
  if(padRef){try{padRef.stop();}catch(e){}padRef=null;}
  coEnd();
  const dr=$('#devRow');if(dr)dr.remove();
  $('#session').classList.remove('on');$('#tabbar').classList.remove('hide');
  document.body.style.overflow='';hideFB();SS=null;sv();sbPush();
  for(const x in _wc)delete _wc[x];      // aprendeu kanji novo: recalcula
  render();
  if(tab==='learn')requestAnimationFrame(()=>focusNode(false));
}
$('#sClose').onclick=()=>{if(!SS)return close();
  if(SS.i>=SS.q.length-1||confirm('Sair agora? O que você já respondeu fica salvo.'))close();};
function step(){
  hideFB();
  if(padRef){padRef.stop();padRef=null;}
  if(!SS||SS.i>=SS.q.length)return finish();
  const it=SS.q[SS.i],b=$('#sBody');
  $('#sProg').style.width=(SS.i/SS.q.length*100).toFixed(1)+'%';
  $('#sHp').innerHTML=G.heart()+(DEV()?'<span style="font-size:16px">∞</span>':SS.hp);
  b.innerHTML='';b.style.animation='none';void b.offsetWidth;b.style.animation='';
  $('.s-body').scrollTop=0;
  coPaint();
  try{({teach:rTeach,mcq:rMCQ,write:rWrite,match:rMatch,speak:rSpeak,
    kteach:rKTeach,kinfo:rKInfo,kq:rKQ,kword:rKWord})[it.t](b,it);}
  catch(err){console.error(err);SS.i++;setTimeout(step,60);}
}
const next=()=>{SS.i++;step();};

function rTeach(b,it){
  const k=it.k;b.innerHTML=`<div class="q-label">Kanji novo</div>`+teach(k,0);
  wire(b);seed(k.c);SS.seen.add(k.c);
  const c=el('button','btn btn-p','ENTENDI');c.style.marginTop='16px';
  c.onclick=()=>{sTap();next();};b.appendChild(c);
  if(canSay())setTimeout(()=>say(k.c),300);
}
function rMCQ(b,it){
  const k=it.k,m=it.mode;
  const L={k2m:'Significado',m2k:'Achar o kanji',k2r:'Leitura',r2k:'Som para kanji',word:'Vocabulário',aud:'Escuta'}[m];
  b.innerHTML=`<div class="q-label">${L}</div><div class="q-title">${it.prompt}</div>`;
  if(m==='k2m'||m==='k2r'){
    b.appendChild(el('div','kbox',`<div class="g jp">${k.c}</div>`));
    if(canSay()){const s=el('button','tool',svg(IC.vol,2.2)+' Ouvir');
      s.style.cssText='margin:0 auto 13px;display:flex';s.onclick=()=>say(k.c);b.appendChild(s);}}
  if(m==='word')b.appendChild(el('div','kbox w',`<div class="g jp">${it.word.w}</div>`));
  if(m==='aud'){
    const bx=el('div','kbox');bx.innerHTML=`<button class="mic" id="pl">${svg(IC.vol,2.2)}</button>`;
    b.appendChild(bx);bx.querySelector('#pl').onclick=()=>say(it.word?it.word.w:k.c);
    setTimeout(()=>say(it.word?it.word.w:k.c),420);}
  const isK=(m==='m2k'||m==='r2k'||m==='aud');
  const o=el('div','opts'+(isK?' two':''));
  it.opts.forEach((x,i)=>{
    const btn=el('button','opt'+(isK?' kanji':''));
    btn.innerHTML=`<div class="opt-l">${LET[i]}</div>`+(isK?`<div class="kj jp">${x.label}</div>`
      :`<div class="opt-c"><b>${esc(x.label)}</b>${x.sub?`<small>${esc(x.sub)}</small>`:''}</div>`);
    btn.onclick=()=>ans(it,i,o);o.appendChild(btn);});
  b.appendChild(o);
}
function ans(it,i,cont){
  try{
    /* rede de segurança: se o índice da resposta se perdeu, recalcula */
    if(!(it.ans>=0&&it.ans<it.opts.length)){
      const f=it.opts.findIndex(o=>o.k===it.k);
      it.ans=f>=0?f:0;
    }
    const n=[...cont.children];
    n.forEach(x=>x.classList.add('dis'));
    const ok=i===it.ans;
    if(n[i])n[i].classList.add(ok?'good':'bad');
    if(!ok&&n[it.ans])n[it.ans].classList.add('good');
    n.forEach((x,j)=>{if(j!==i&&j!==it.ans)x.classList.add('fade');});
    touch(it.k.c,ok);
    if(ok){SS.ok++;SS.run++;SS.best=Math.max(SS.best,SS.run);SS.xp+=10;sOk();}
    else{
      SS.ko++;SS.run=0;loseHp();sNo();
      if(!SS.meta.noRep&&!SS.meta.co&&SS.q.length<80)
        SS.q.splice(Math.min(SS.q.length,SS.i+3+((Math.random()*3)|0)),
          0,it.k.kana?mkKQ(it.k,it.mode,it.pool):mkq(it.k,it.mode,it.pool));
    }
    sv();coTrack();
    fb(ok,it,i);
  }catch(err){
    console.error(err);
    escapeFB(i===it.ans);          // nunca deixa o usuário travado
  }
}
/* painel mínimo garantido, caso algo falhe ao montar o feedback rico */
function escapeFB(ok){
  const f=$('#fb'),I=$('#fbIn'),B=$('#fbBtn');
  f.className=ok?'ok':'no';
  I.innerHTML=`<div class="fb-h"><div class="fb-ic">${svg(ok?IC.check:IC.x,3.4)}</div>
    <div><div class="fb-t">${ok?'Certo!':'Resposta registrada'}</div>
    <div class="fb-s">Toque em continuar para seguir</div></div></div>`;
  B.className='btn '+(ok?'btn-g':'btn-r');B.textContent='CONTINUAR';
  B.onclick=()=>{sTap();next();};
  f.classList.add('up');
}

/* — escrita — */
function rWrite(b,it){
  const k=it.k;
  b.innerHTML=k.kana
    ? `<div class="q-label">Escrita</div>
       <div class="q-title">Escreva o kana de <em>“${k.r}”</em>
       <span style="display:block;font-size:14px;font-weight:600;color:var(--txt3);margin-top:3px">
       ${k.sc==='h'?'hiragana':'katakana'} · ${k.s} traços</span></div>`
    : `<div class="q-label">Escrita</div>
    <div class="q-title">Escreva <em>“${esc(k.m2)}”</em>
    <span style="display:block;font-size:14px;font-weight:600;color:var(--txt3);margin-top:3px">${k.qr} · ${k.s} traços</span></div>`;
  const h=el('div');b.appendChild(h);
  padRef=pad(h,k,{onDone:(sc,help,tot)=>{
    if(sc<0){next();return;}
    const good=sc>=60&&help===0;
    touch(k.c,good);
    if(good)S.stats.clean=(S.stats.clean||0)+1;
    if(good){SS.ok++;SS.run++;SS.best=Math.max(SS.best,SS.run);SS.xp+=15;sOk();}
    else{SS.ko++;SS.run=0;}   /* ver a animação não custa vida */
    sv();writeFB(k,sc,help,tot);}});
}
function writeFB(k,sc,help,tot){
  const f=$('#fb'),I=$('#fbIn'),B=$('#fbBtn');
  const great=sc>=85&&!help,good=sc>=60&&!help;
  f.className=good?'ok':'nu';
  I.innerHTML=`<div class="fb-h"><div class="fb-ic">${svg(good?IC.check:IC.brush,3.2)}</div>
    <div><div class="fb-t">${great?'Caligrafia limpa!':good?'Escreveu certo':'Vamos treinar mais'}</div>
    <div class="fb-s">${help?help+' traço(s) o app desenhou por você':'Todos os '+tot+' traços na ordem certa'}</div></div></div>
    ${fbCard(k)}
    <button class="exp-btn" id="eB">${svg(IC.bulb,2.3)} Como fui avaliado ${svg(IC.chev,2.6).replace('<svg','<svg class="chev"')}</button>
    <div class="exp-body" id="eBd">
      <div class="exp-sec"><h5>O que foi conferido</h5>
      <p>Cada traço seu foi comparado com o traço real do <b>KanjiVG</b>, ponto a ponto, em três coisas:
      <b>onde começa</b>, <b>o caminho</b> que faz e <b>a direção</b>.</p>
      <p>Além disso a <b>ordem importa</b>: se você pula pro traço 5 antes do 2, o app avisa qual traço você fez.
      Errando 3 vezes o mesmo traço, ele desenha e segue, mas isso desconta pontos.</p>
      <p>Sua nota: <b>${sc}</b>/100${help?` (menos ${help*9} por ${help} ajuda${help>1?'s':''})`:''}.</p></div>
      <div class="exp-sec"><h5>Dica pra este kanji</h5><p>${k.sty}</p>
      <p><b>Regra geral:</b> de cima pra baixo, da esquerda pra direita, horizontal antes de vertical,
      e caixa 囗 só fecha depois que o conteúdo está dentro.</p></div></div>`;
  const e=I.querySelector('#eB');
  e.onclick=()=>{const d=I.querySelector('#eBd');e.classList.toggle('open',d.classList.toggle('show'));};
  wire(I);
  B.className='btn '+(good?'btn-g':'btn-p');B.textContent='CONTINUAR';
  B.onclick=()=>{sTap();next();};
  requestAnimationFrame(()=>f.classList.add('up'));
}

/* — fala — */
function rSpeak(b,it){
  const k=it.k;
  const want=k.kun.length?k.kun[0]:k.on[0];
  const kana=want.k.replace(/[()]/g,'');
  b.innerHTML=`<div class="q-label">Pronúncia</div>
    <div class="q-title">Fale este kanji em voz alta</div>`;
  b.appendChild(el('div','kbox',`<div class="g jp">${k.c}</div>`));
  b.insertAdjacentHTML('beforeend',
    `<div style="text-align:center;margin-bottom:12px">
      <div class="jp" style="font-size:26px;font-weight:600">${kana}</div>
      <div style="font-size:12.5px;color:var(--txt3);font-weight:700;font-style:italic">${want.r} · ${esc(k.m2)}</div></div>`);
  const tr=el('div','tries');b.appendChild(tr);
  const hd=el('div','heard','<small>ouvi</small><b style="color:var(--txt3);font-family:var(--ui);font-size:13px">toque no microfone</b>');
  b.appendChild(hd);
  const mw=el('div','micwrap');
  const mic=el('button','mic',svg(IC.mic,2.1));mw.appendChild(mic);b.appendChild(mw);
  const listen=el('button','tool',svg(IC.vol,2.2)+' Ouvir como é');
  listen.style.cssText='margin:12px auto 0;display:flex';listen.onclick=()=>say(k.c);b.appendChild(listen);
  const skip=el('button','tool','Pular');
  skip.style.cssText='margin:9px auto 0;display:flex;opacity:.7';
  skip.onclick=()=>{stop();speakFB(k,kana,want,null,false,true);};
  b.appendChild(skip);

  let n=0,rec=null,live=false;
  const MAX=3;
  const paintTries=()=>{tr.innerHTML='';for(let i=0;i<MAX;i++)
    tr.appendChild(el('div','try'+(i<n?' used':i===n?' now':'')));};
  paintTries();
  const stop=()=>{try{rec&&rec.stop();}catch(e){}live=false;mic.classList.remove('rec');};

  mic.onclick=()=>{
    if(live){stop();return;}
    if(!SR_OK){toast('Este navegador não reconhece voz');return;}
    try{
      rec=new SR();rec.lang='ja-JP';rec.interimResults=false;rec.maxAlternatives=5;rec.continuous=false;
      live=true;mic.classList.add('rec');
      hd.className='heard';hd.innerHTML='<small>ouvindo…</small><b style="font-family:var(--ui);font-size:13px;color:var(--ai)">fale agora</b>';
      let got=false;
      rec.onresult=ev=>{
        got=true;
        const alts=[...ev.results[0]].map(r=>r.transcript.trim());
        const raw=alts[0]||'';
        const hit=speechHit(alts,k,want);
        stop();n++;paintTries();
        hd.className='heard '+(hit?'ok':'no');
        hd.innerHTML=`<small>você disse</small><b>${esc(raw||'—')}</b>`;
        if(hit){SS.ok++;SS.run++;SS.best=Math.max(SS.best,SS.run);SS.xp+=12;touch(k.c,true);
          S.stats.spoke=(S.stats.spoke||0)+1;sOk();sv();
          setTimeout(()=>speakFB(k,kana,want,raw,true,false),400);}
        else if(n>=MAX){SS.ko++;SS.run=0;touch(k.c,false);sNo();sv();
          setTimeout(()=>speakFB(k,kana,want,raw,false,false),500);}
        else{sNo();toast('Não foi dessa. Tenta de novo ('+n+'/'+MAX+')');}
      };
      rec.onerror=()=>{stop();n++;paintTries();
        hd.className='heard no';hd.innerHTML='<small>não captei</small><b style="font-family:var(--ui);font-size:13px">tente falar mais perto</b>';
        if(n>=MAX){SS.ko++;SS.run=0;touch(k.c,false);sv();setTimeout(()=>speakFB(k,kana,want,null,false,false),400);}};
      rec.onend=()=>{if(!got&&live){stop();n++;paintTries();
        hd.className='heard no';hd.innerHTML='<small>silêncio</small><b style="font-family:var(--ui);font-size:13px">não ouvi nada</b>';
        if(n>=MAX){SS.ko++;SS.run=0;touch(k.c,false);sv();setTimeout(()=>speakFB(k,kana,want,null,false,false),400);}}};
      rec.start();
    }catch(e){toast('Não deu pra abrir o microfone');stop();}
  };
}
function speakFB(k,kana,want,heard,ok,skipped){
  const f=$('#fb'),I=$('#fbIn'),B=$('#fbBtn');
  f.className=ok?'ok':(skipped?'nu':'no');
  I.innerHTML=`<div class="fb-h"><div class="fb-ic">${svg(ok?IC.check:IC.mic,3.2)}</div>
    <div><div class="fb-t">${ok?'Pronúncia certa!':skipped?'Tudo bem, segue':'Ficou pra próxima'}</div>
    <div class="fb-s">${ok?'Falou como um nativo':'A leitura correta está aqui embaixo'}</div></div></div>
    ${heard?`<div class="fb-you" style="background:${ok?'color-mix(in srgb,var(--gr) 12%,transparent)':''};border-color:${ok?'var(--gr)':''}">
      <span style="width:28px;height:28px;flex:none;color:${ok?'var(--gr)':'var(--no)'}">${ok?G.check('currentColor'):G.mic()}</span>
      <div class="ti">O microfone entendeu <b class="jp" style="font-size:17px">${esc(heard)}</b>.
      ${ok?'Bateu com a leitura esperada.':'O esperado era <b class="jp" style="font-size:17px">'+kana+'</b>.'}</div></div>`:''}
    ${fbCard(k)}
    <button class="exp-btn" id="eB">${svg(IC.bulb,2.3)} Detalhar ${svg(IC.chev,2.6).replace('<svg','<svg class="chev"')}</button>
    <div class="exp-body" id="eBd"><div class="exp-sec"><h5>Sobre esta leitura</h5>
      <p>Pedi a leitura <b>${want===k.kun[0]?'kun\'yomi':'on\'yomi'}</b>: <span class="jp">${kana}</span> (<i>${want.r}</i>).</p>
      <p>${k.kun.length&&k.on.length?'Regra prática: sozinho o kanji costuma usar a leitura <b>kun</b>; grudado em outro kanji, a <b>on</b>.':'Este kanji quase sempre aparece com esta leitura.'}</p>
      <p>Todas as leituras: ${reads(k).map(r=>`<span class="jp">${r.k}</span> <i>(${r.r})</i>`).join(' · ')}.</p></div>
      <div class="exp-sec"><h5>Se não reconheceu</h5>
      <p>O reconhecimento de voz em japonês é sensível. Fale <b>devagar</b>, num lugar silencioso, e evite prolongar demais.
      Vogais longas (ō, ū) contam como dois tempos.</p></div></div>`;
  const e=I.querySelector('#eB');
  e.onclick=()=>{const d=I.querySelector('#eBd');e.classList.toggle('open',d.classList.toggle('show'));};
  wire(I);
  B.className='btn '+(ok?'btn-g':'btn-p');B.textContent='CONTINUAR';
  B.onclick=()=>{sTap();next();};
  requestAnimationFrame(()=>f.classList.add('up'));
}

/* — memória — */
function rMatch(b,it){
  const pool=it.pool;
  b.innerHTML=`<div class="q-label">Memória</div><div class="q-title">Ligue cada kanji ao significado</div>`;
  const tiles=shuffle([...pool.map(k=>({k,y:'k'})),...pool.map(k=>({k,y:'m'}))]);
  const g=el('div','mem');let sel=null,lock=false,left=pool.length,er=0;
  tiles.forEach(t=>{
    const d=el('div','mtile',t.y==='k'?`<div class="mk jp">${t.k.c}</div>`:esc(t.k.m[0]));
    d._t=t;
    d.onclick=()=>{
      if(lock||d.classList.contains('gone')||d===sel)return;sTap();
      if(!sel){sel=d;d.classList.add('sel');return;}
      const a=sel._t;
      if(a.k===t.k&&a.y!==t.y){
        const s1=sel,s2=d;s1.classList.remove('sel');s1.classList.add('hit');s2.classList.add('hit');
        sel=null;left--;touch(t.k.c,true);tone(680+(pool.length-left)*70,.13,'sine',.09,0);
        setTimeout(()=>{s1.classList.add('gone');s2.classList.add('gone');},400);
        if(!left){lock=true;sv();sWin();SS.ok++;SS.run++;SS.xp+=20;
          setTimeout(()=>fb(true,{t:'match',k:pool[0],mode:'match',pool,custom:{
            title:'Todos ligados!',sub:er?`${pool.length} pares com ${er} erro${er>1?'s':''}`:`${pool.length} pares sem errar`,
            body:`<div class="fb-main"><div class="fb-det" style="border:none;padding:0;margin:0">
              ${pool.map(k=>`<div class="fb-r"><span class="k jp" style="font-size:19px;min-width:28px;color:var(--txt)">${k.c}</span>
              <span class="v">${esc(mean(k))} <i>— ${romajis(k).join(', ')}</i></span></div>`).join('')}</div></div>`}},-1),600);}
      }else{lock=true;er++;const s1=sel,s2=d;
        s1.classList.remove('sel');s1.classList.add('miss');s2.classList.add('miss');
        sel=null;touch(t.k.c,false);sNo();
        setTimeout(()=>{s1.classList.remove('miss');s2.classList.remove('miss');lock=false;},450);}
    };
    g.appendChild(d);});
  b.appendChild(g);
}

/* ══════════════ FEEDBACK ══════════════ */
const hideFB=()=>{const f=$('#fb');f.className='';};
const YAY=['Isso!','Perfeito.','Mandou bem.','Certíssimo.','É isso aí.','Boa!'];
function fb(ok,it,i){
  const f=$('#fb'),I=$('#fbIn'),B=$('#fbBtn');
  f.className=ok?'ok':'no';
  const k=it.k;
  if(it.custom){
    I.innerHTML=`<div class="fb-h"><div class="fb-ic">${svg(IC.check,3.4)}</div>
      <div><div class="fb-t">${it.custom.title}</div><div class="fb-s">${it.custom.sub}</div></div></div>${it.custom.body}`;
  }else try{
    const ch=it.opts[i],co=it.opts[it.ans];
    I.innerHTML=`<div class="fb-h"><div class="fb-ic">${svg(ok?IC.check:IC.x,3.4)}</div>
      <div><div class="fb-t">${ok?pick(YAY):'Não foi dessa vez'}</div>
      <div class="fb-s">${ok?'+10 XP':'Olha a resposta certa aí embaixo'}</div></div></div>
      ${!ok&&ch&&ch.k&&ch.k!==k?`<div class="fb-you"><span class="bk jp">${ch.k.c}</span>
        <div class="ti">Você marcou <b>${ch.k.c}</b>, que é <b>${esc(mean(ch.k))}</b>
        <em style="color:var(--txt3)">(${romajis(ch.k).join(', ')})</em>.</div></div>`
      :(!ok&&ch?`<div class="fb-you"><span style="width:26px;height:26px;flex:none;color:var(--no)">${G.x()}</span>
        <div class="ti">Você marcou <b>“${esc(ch.label)}”</b>${ch.sub?` <em>(${esc(ch.sub)})</em>`:''}.</div></div>`:'')}
      ${fbCard(k)}
      <button class="exp-btn" id="eB">${svg(IC.bulb,2.3)} Explicar minha resposta ${svg(IC.chev,2.6).replace('<svg','<svg class="chev"')}</button>
      <div class="exp-body" id="eBd">${explain(it,i,ok)}</div>`;
    const e=I.querySelector('#eB');
    if(e)e.onclick=()=>{const d=I.querySelector('#eBd');e.classList.toggle('open',d.classList.toggle('show'));
      if(d.classList.contains('show'))setTimeout(()=>d.scrollIntoView({behavior:'smooth',block:'nearest'}),80);};
  }catch(err){
    console.error(err);
    I.innerHTML=`<div class="fb-h"><div class="fb-ic">${svg(ok?IC.check:IC.x,3.4)}</div>
      <div><div class="fb-t">${ok?'Certo!':'Não foi dessa vez'}</div>
      <div class="fb-s">${esc(mean(k))} · ${k.qr}</div></div></div>${fbCard(k)}`;
  }
  try{wire(I);}catch(e){}
  B.className='btn '+(ok?'btn-g':'btn-r');B.textContent='CONTINUAR';
  B.onclick=()=>{sTap();next();};
  f.classList.add('up');
  requestAnimationFrame(()=>f.classList.add('up'));
  setTimeout(()=>f.classList.add('up'),120);
}
function fbCard(k){
  if(k.kana){
    const o=k.pair?KANA_LIST.find(x=>x.c===k.pair):null;
    const w=KWORDS.find(x=>x.w.includes(k.c));
    return `<div class="fb-main"><div class="fb-lead"><span class="bk jp">${k.c}</span>
      <div class="li"><b>${k.r}</b><small>${k.sc==='h'?'hiragana':'katakana'}${k.s?' · '+k.s+' traços':''}${
        k.type==='dak'?' · com ゛':k.type==='han'?' · com ゜':k.type==='yoon'?' · sílaba dupla':''}</small></div>
      ${canSay()?`<button class="spk" data-s="${k.c}">${svg(IC.vol,2.2)}</button>`:''}</div>
      <div class="fb-det">
      ${o?`<div class="fb-r"><span class="k">O par</span><span class="v">
        <span class="jp">${k.sc==='h'?k.c:o.c}</span> hiragana &nbsp;/&nbsp;
        <span class="jp">${k.sc==='k'?k.c:o.c}</span> katakana</span></div>`:''}
      <div class="fb-r"><span class="k">Memória</span><span class="v" style="font-weight:600">${k.sty}</span></div>
      ${w?`<div class="fb-r"><span class="k">Palavra</span><span class="v">
        <span class="jp">${w.w}</span> <i>(${w.r})</i> = ${esc(w.m)}</span></div>`:''}
      </div></div>`;
  }
  return `<div class="fb-main"><div class="fb-lead"><span class="bk jp">${k.c}</span>
    <div class="li"><b>${esc(mean(k))}</b><small>${k.qr} · ${k.s} traços · ${k.g?k.g+'º ano':'JLPT '+(k.jl||'N5')}</small></div>
    ${canSay()?`<button class="spk" data-s="${k.c}">${svg(IC.vol,2.2)}</button>`:''}</div>
    <div class="fb-det">
    ${k.on.length?`<div class="fb-r"><span class="k">On'yomi</span><span class="v">
      <span class="jp">${k.on.map(x=>x.k).join('・')}</span> <i>(${k.on.map(x=>x.r).join(', ')})</i></span></div>`:''}
    ${k.kun.length?`<div class="fb-r"><span class="k">Kun'yomi</span><span class="v">
      <span class="jp">${k.kun.map(x=>x.k).join('・')}</span> <i>(${k.kun.map(x=>x.r).join(', ')})</i></span></div>`:''}
    <div class="fb-r"><span class="k">Radical</span><span class="v"><span class="jp">${k.rad.c}</span> <i>${esc(k.rad.m)}</i></span></div>
    <div class="fb-r"><span class="k">Exemplo</span><span class="v"><span class="jp">${k.w[0].w}</span>
      <i>(${k.w[0].r})</i> = ${esc(k.w[0].m)}</span></div></div></div>`;
}
function explain(it,i,ok){
  const k=it.k,co=it.opts[it.ans],ch=i>=0?it.opts[i]:null;
  if(k.kana){
    const ask={k2r:'a <b>leitura em romaji</b> do kana',r2k:'qual <b>kana</b> tem aquele som',
      pair:'o <b>par no outro silabário</b>',aud:'qual kana corresponde ao <b>áudio</b>'}[it.mode]||'a resposta';
    let o=`<div class="exp-sec"><h5>O que foi pedido</h5><p>A pergunta queria ${ask}.</p>
      ${ok?'<p style="color:var(--gr)"><b>Você acertou.</b></p>':'<p style="color:var(--no)"><b>Não era essa.</b> Veja abaixo.</p>'}</div>
      <div class="exp-sec"><h5>Sobre ${co.label}</h5>
      <p><span class="jp" style="font-size:22px">${k.c}</span> é <b>${k.r}</b>, do <b>${k.sc==='h'?'hiragana':'katakana'}</b>.</p>
      <p>${k.sty}</p>
      ${k.pair?`<p>No outro silabário ele vira <span class="jp" style="font-size:20px">${k.pair}</span> — som idêntico, desenho diferente.</p>`:''}</div>
      <div class="exp-sec"><h5>Alternativa por alternativa</h5>
      <div class="exp-o y"><div class="eo-i">${TICK}</div><div class="eo-c">
      <b>${LET[it.ans]}) ${it.mode==='k2r'?esc(co.label):'<span class="jp">'+co.label+'</span>'}</b> — correta.</div></div>`;
    it.opts.forEach((x,j)=>{if(j===it.ans)return;
      const kk=x.k;
      o+=`<div class="exp-o n"><div class="eo-i">${CROSS}</div><div class="eo-c">
        <b>${LET[j]}) ${it.mode==='k2r'?esc(x.label):'<span class="jp">'+x.label+'</span>'}</b>${j===i?' <em>(você marcou)</em>':''} — ${
        it.mode==='k2r'?`essa é a leitura de <span class="jp">${kk.c}</span>.`
        :`esse é o <b>${kk.r}</b>, não o ${k.r}.`}</div></div>`;});
    o+='</div>';
    return o;
  }
  const ask={k2m:'o <b>significado em português</b>',m2k:'qual <b>kanji</b> tem aquele significado',
    k2r:'a <b>leitura em romaji</b>',r2k:'qual <b>kanji</b> tem aquele som',
    word:'o que a <b>palavra</b> quer dizer',aud:'qual kanji corresponde ao <b>áudio</b>'}[it.mode]||'a resposta';
  const isK=(it.mode==='m2k'||it.mode==='r2k'||it.mode==='aud');
  let o=`<div class="exp-sec"><h5>O que foi pedido</h5>
    <p>A pergunta queria ${ask}. A resposta tinha que ser ${isK?'<b>um kanji</b>':'<b>texto em português ou romaji</b>'}.</p>
    ${ok?'<p style="color:var(--gr)"><b>Você acertou.</b></p>':'<p style="color:var(--no)"><b>Sua escolha não era a certa.</b> Veja opção por opção abaixo.</p>'}</div>
    <div class="exp-sec"><h5>Por que ${esc(co.label)} é a certa</h5>
    <p><span class="jp" style="font-size:20px">${k.c}</span> quer dizer <b>${esc(mean(k))}</b>.</p>
    <p>Lê-se <b>${k.on.map(x=>x.r).join(', ')||'—'}</b> no <i>on'yomi</i>${k.on.length?' ('+k.on.map(x=>x.k).join('・')+')':''}
    e <b>${k.kun.map(x=>x.r).join(', ')||'—'}</b> no <i>kun'yomi</i>${k.kun.length?' ('+k.kun.map(x=>x.k).join('・')+')':''}.
    ${k.on.length&&k.kun.length?' Sozinho costuma usar o kun; colado em outro kanji, o on.':''}</p>
    <p>Tem <b>${k.s} traços</b>, radical <span class="jp">${k.rad.c}</span> (${esc(k.rad.m)}). ${k.sty}</p>
    <p>Aparece em ${k.w.map(w=>`<span class="jp">${w.w}</span> <i>(${w.r})</i> = ${esc(w.m)}`).join(' · ')}.</p></div>
    <div class="exp-sec"><h5>Alternativa por alternativa</h5>
    <div class="exp-o y"><div class="eo-i">${TICK}</div><div class="eo-c">
    <b>${LET[it.ans]}) ${isK?'<span class="jp">'+co.label+'</span>':esc(co.label)}</b> — correta. ${why(it,co,1)}</div></div>`;
  it.opts.forEach((x,j)=>{if(j===it.ans)return;
    o+=`<div class="exp-o n"><div class="eo-i">${CROSS}</div><div class="eo-c">
      <b>${LET[j]}) ${isK?'<span class="jp">'+x.label+'</span>':esc(x.label)}</b>${j===i?' <em>(você marcou)</em>':''} — ${why(it,x,0)}</div></div>`;});
  o+='</div>';
  const sims=(k.sim||[]).map(c=>BY[c]).filter(Boolean);
  if(sims.length)o+=`<div class="exp-sec"><h5>Não confunda com</h5>
    <p>${sims.map(s=>`<span class="jp" style="font-size:20px">${s.c}</span> <b>${esc(s.m[0])}</b> <i>(${s.qr})</i>`).join(' &nbsp;·&nbsp; ')}</p>
    <p>Contra <span class="jp" style="font-size:20px">${k.c}</span> <b>${esc(k.m[0])}</b> <i>(${k.qr})</i>. A diferença de traço é justamente onde a prova pega.</p></div>`;
  return o;
}
function why(it,o,right){
  const kk=o.k;
  if(it.mode==='m2k'||it.mode==='r2k'||it.mode==='aud')
    return right?`<span class="jp">${kk.c}</span> é <b>${esc(mean(kk))}</b>, leitura <i>${romajis(kk).join(', ')}</i>. Bate com o pedido.`
      :`esse é <b>${esc(mean(kk))}</b> <i>(${romajis(kk).join(', ')})</i>, outro kanji.`;
  if(it.mode==='k2m')return right?'É o significado registrado.'
    :`“${esc(o.label)}” é o sentido de <span class="jp">${kk.c}</span> <i>(${kk.qr})</i>.`;
  if(it.mode==='k2r')return right?'É uma leitura válida.'
    :`<i>${esc(o.label)}</i> é leitura de <span class="jp">${kk.c}</span> (<b>${esc(kk.m[0])}</b>).`;
  if(it.mode==='word')return right?`É a tradução de <span class="jp">${it.word.w}</span>.`
    :'é o sentido de outra palavra da lista.';
  return '';
}

/* ══════════════ RESUMO ══════════════ */
function finish(){
  hideFB();$('#sProg').style.width='100%';
  const tot=SS.ok+SS.ko,acc=tot?Math.round(SS.ok/tot*100):100;
  const list=[...SS.seen].map(c=>BY[c]).filter(Boolean);
  const stars=acc>=95?3:acc>=80?2:1;
  if(SS.meta.key){const p=S.nodes[SS.meta.key];
    S.nodes[SS.meta.key]={stars:Math.max(stars,p?p.stars:0),at:Date.now()};}
  if(acc===100&&tot>=5)S.stats.aces=(S.stats.aces||0)+1;
  S.stats.run=Math.max(S.stats.run||0,SS.best);
  S.xp+=SS.xp;markDay(SS.xp);

  /* ── resultado do teste de unidade ── */
  if(SS.meta.test!=null){
    const ui=SS.meta.test,pass=SS.ko<3;
    let skipped=0;
    if(pass){
      S.stats.tests=(S.stats.tests||0)+1;
      for(let u=0;u<=ui;u++){
        nodeList().forEach((n,ni)=>{const kk=nkey(u,ni);
          if(!S.nodes[kk]){S.nodes[kk]={stars:2,at:Date.now(),skip:true};skipped++;}});
        (UNITS[u]||{k:[]}).k.forEach(i=>{if(KANJI[i])seed(KANJI[i].c);});
      }
    }
    sv();sbPush();pass?(sWin(),confetti()):sNo();
    const bb=$('#sBody');
    bb.innerHTML=`<div class="done">
      <div class="dseal jp"${pass?'':' style="filter:grayscale(.75)"'}>${pass?'免':'再'}</div>
      <h2>${pass?'Aprovado!':'Ainda não'}</h2>
      <p>${pass?`Você errou ${SS.ko} de ${SS.q.length}. ${skipped?`<b>${skipped} etapas</b> foram liberadas de uma vez.`:'Esta unidade já estava completa.'}`
        :`Você errou ${SS.ko}. O limite é 2. Faça as etapas normalmente ou tente o teste de novo.`}</p>
      <div class="dstats">
        <div class="ds"><b style="color:var(--gr)">${SS.ok}</b><i>Acertos</i></div>
        <div class="ds"><b style="color:${pass?'var(--gr)':'var(--no)'}">${SS.ko}</b><i>Erros</i></div>
        <div class="ds"><b style="color:var(--kin)">+${SS.xp}</b><i>XP</i></div></div></div>`;
    const w2=bb.querySelector('.done');
    const h2=el('button','btn '+(pass?'btn-g':'btn-p'),pass?'CONTINUAR':'VOLTAR');
    h2.onclick=()=>{sTap();close();go('learn');};w2.appendChild(h2);
    if(!pass){const rt=el('button','btn btn-o','Tentar de novo');rt.style.marginTop='9px';
      rt.onclick=()=>{close();setTimeout(()=>unitTest(ui),150);};w2.appendChild(rt);}
    return;
  }
  sv();sbPush();sWin();confetti();
  const b=$('#sBody');
  b.innerHTML=`<div class="done"><div class="dseal jp">${acc>=95?'極':acc>=80?'良':'続'}</div>
    <h2>${acc>=95?'Impecável':acc>=80?'Boa!':'Etapa concluída'}</h2>
    <p>${SS.meta.title||'Treino'}</p>
    <div style="display:flex;gap:7px;justify-content:center;margin-bottom:16px">
      ${[1,2,3].map(i=>`<span style="width:34px;height:34px;display:block">${G.star(i<=stars)}</span>`).join('')}</div>
    <div class="dstats">
      <div class="ds"><b style="color:var(--gr)">${SS.ok}</b><i>Acertos</i></div>
      <div class="ds"><b style="color:var(--ai)">${acc}%</b><i>Precisão</i></div>
      <div class="ds"><b style="color:var(--kin)">+${SS.xp}</b><i>XP</i></div></div>
    ${list.length?`<div class="recap">${list.map(k=>`<div class="rc jp">${k.c}</div>`).join('')}</div>`:''}</div>`;
  const w=b.querySelector('.done');
  const h=el('button','btn btn-p','CONTINUAR');
  h.onclick=()=>{sTap();close();go('learn',1);setTimeout(()=>focusNode(true),120);};
  w.appendChild(h);
}

/* ══════════════ GERADOR ══════════════ */
function distr(k,pool,n){
  const o=[],add=c=>{if(c&&c!==k&&!o.includes(c))o.push(c);};
  (k.sim||[]).forEach(c=>add(BY[c]));
  shuffle(pool.filter(x=>x!==k)).forEach(add);
  shuffle(KANJI.filter(x=>x!==k)).forEach(add);
  return o.slice(0,n);}
function mkq(k,mode,pool){
  pool=pool&&pool.length>3?pool:KANJI;
  const d=distr(k,pool,6);let opts=[],prompt='',word=null;
  if(mode==='k2m'){prompt='O que significa este kanji?';
    opts=[{k,label:mean(k),sub:k.qr}];const u=new Set([mean(k)]);
    for(const x of d){if(opts.length>=4)break;const l=mean(x);if(!u.has(l)){u.add(l);opts.push({k:x,label:l,sub:x.qr});}}}
  else if(mode==='m2k'){prompt=`Qual kanji significa <em>“${esc(mean(k))}”</em>?`;
    opts=[{k,label:k.c}];for(const x of d){if(opts.length>=4)break;opts.push({k:x,label:x.c});}}
  else if(mode==='k2r'){prompt='Como se lê?';const r=reads(k)[0];
    opts=[{k,label:r.r.replace(/[()]/g,''),sub:r.k}];const u=new Set([opts[0].label]);
    for(const x of d){if(opts.length>=4)break;const q=reads(x)[0];if(!q)continue;
      const l=q.r.replace(/[()]/g,'');if(!u.has(l)){u.add(l);opts.push({k:x,label:l,sub:q.k});}}}
  else if(mode==='r2k'){const r=reads(k)[0];
    prompt=`Qual kanji se lê <em>“${esc(r.r.replace(/[()]/g,''))}”</em> <span style="color:var(--txt3);font-size:15px;font-weight:600">(${r.k})</span>?`;
    opts=[{k,label:k.c}];for(const x of d){if(opts.length>=4)break;
      const q=reads(x)[0];if(q&&q.r.replace(/[()]/g,'')===r.r.replace(/[()]/g,''))continue;opts.push({k:x,label:x.c});}}
  else if(mode==='word'){word=pick(k.w);prompt='O que significa esta palavra?';
    opts=[{k,label:word.m,sub:word.r}];const u=new Set([word.m]);
    for(const x of d){if(opts.length>=4)break;const w=pick(x.w);if(!u.has(w.m)){u.add(w.m);opts.push({k:x,label:w.m,sub:w.r});}}}
  else if(mode==='aud'){prompt='Toque para ouvir e escolha o kanji';
    opts=[{k,label:k.c}];for(const x of d){if(opts.length>=4)break;opts.push({k:x,label:x.c});}}
  while(opts.length<4){const x=pick(KANJI.filter(y=>y!==k));
    const l=(mode==='m2k'||mode==='r2k'||mode==='aud')?x.c:mean(x);
    if(!opts.some(y=>y.label===l))opts.push({k:x,label:l,sub:x.qr});}
  opts=shuffle(opts.slice(0,4));
  return{t:'mcq',mode,k,opts,ans:opts.findIndex(o=>o.k===k&&(mode!=='word'||o.label===word.m)),prompt,word,pool};
}

function startNode(ui,ni,type){
  if(S.course==='kana')return startKNode(ui,ni,type);
  const u=UNITS[ui];
  if(!u)return toast('Unidade não encontrada');
  const ks=u.k.map(i=>KANJI[i]).filter(Boolean);
  if(!ks.length)return toast('Unidade vazia');
  const key=nkey(ui,ni);
  const old=learned().filter(k=>!ks.includes(k));
  let q=[],title='';
  if(type==='learn'){
    title=`Unidade ${ui+1} · Aprender`;
    [[0,1],[2,3],[4,5]].forEach((pr,gi)=>{
      pr.forEach(i=>q.push({t:'teach',k:ks[i]}));
      pr.forEach(i=>q.push(mkq(ks[i],'k2m',ks)));
      shuffle(pr).forEach(i=>q.push(mkq(ks[i],'m2k',ks)));
      if(gi>0){ // revisa o que já foi visto nesta lição
        const sofar=[];for(let z=0;z<(gi+1)*2;z++)sofar.push(z);
        shuffle(sofar).slice(0,2).forEach(z=>q.push(mkq(ks[z],pick(['k2m','m2k','k2r']),ks)));
      }
    });
    q.push({t:'match',pool:shuffle(ks).slice(0,4)});
    shuffle(ks).forEach(k=>q.push(mkq(k,pick(['k2m','m2k']),ks)));
  }
  else if(type==='quizA'){
    title=`Unidade ${ui+1} · Quiz 1`;
    shuffle(ks).forEach(k=>q.push(mkq(k,'k2m',ks)));
    q.push({t:'match',pool:shuffle(ks).slice(0,4)});
    shuffle(ks).forEach(k=>q.push(mkq(k,'m2k',ks)));
    shuffle(ks).slice(0,3).forEach(k=>q.push(mkq(k,'word',ks)));
  }
  else if(type==='quizB'){
    title=`Unidade ${ui+1} · Quiz 2`;
    shuffle(ks).forEach(k=>q.push(mkq(k,'k2r',ks)));
    shuffle(ks).forEach(k=>q.push(mkq(k,'r2k',ks)));
    if(canSay())shuffle(ks).slice(0,3).forEach(k=>q.push(mkq(k,'aud',ks)));
    else shuffle(ks).slice(0,3).forEach(k=>q.push(mkq(k,'word',ks)));
  }
  else if(type==='write'){
    title=`Unidade ${ui+1} · Escrever`;
    ks.forEach(k=>q.push({t:'write',k}));
  }
  else if(type==='build'){
    const all=buildWords(ks,ui);
    const ws=shuffle(all).slice(0,9);
    title=`Unidade ${ui+1} · ${ws.length>=4?'Palavras':'Vocabulário'}`;
    ws.forEach((w,i)=>{
      q.push({t:'kword',w,kj:true,pool:ks});
      if(i%3===2)q.push(mkq(pick(ks),pick(['m2k','word']),ks));
    });
    /* poucos kanji ainda: vira lição de vocabulário, sem peça impossível */
    if(ws.length<4){
      shuffle(ks).forEach(k=>q.push(mkq(k,'word',ks)));
      shuffle(ks).slice(0,4).forEach(k=>q.push(mkq(k,pick(['k2m','m2k']),ks)));
    }
  }
  else if(type==='speak'){
    title=`Unidade ${ui+1} · Falar`;
    ks.forEach(k=>q.push({t:'speak',k}));
  }
  else if(type==='boss'){
    title=`Unidade ${ui+1} · Prova`;
    const all=[...ks,...shuffle(old).slice(0,4)];
    shuffle(all).forEach(k=>q.push(mkq(k,pick(['k2m','m2k','k2r','r2k','word']),all)));
    q.push({t:'write',k:pick(ks)});
    q.push({t:'match',pool:shuffle(ks).slice(0,4)});
  }
  ks.forEach(k=>seed(k.c));
  open(q,{key,title});
}
/* ── teste de unidade (pular etapas) ── */
function askTest(ui){
  const u=UNITS[ui],ks=u.k.map(i=>KANJI[i]);
  $('#mBody').innerHTML=`<div class="mtop"><button class="icon-btn" id="mC">${svg(IC.x,2.5)}</button></div>
    <div style="text-align:center;margin-bottom:6px">
      <div style="width:58px;height:58px;margin:0 auto 8px">${G.exam?G.exam():G.target()}</div>
      <h2 style="font-size:21px;font-weight:900;letter-spacing:-.03em">Testar a Unidade ${ui+1}</h2>
      <p style="font-size:12.5px;color:var(--txt3);margin-top:3px">${u.t}</p></div>
    <div class="card" style="padding:15px;margin-top:14px">
      <div class="step"><div class="stepn">1</div><div>São <b>18 perguntas</b> sobre os 6 kanji: significado, kanji, leitura e vocabulário.</div></div>
      <div class="step"><div class="stepn">2</div><div>Errando <b>menos de 3</b>, você passa.</div></div>
      <div class="step"><div class="stepn">3</div><div>Passando, esta unidade <b>e todas as anteriores</b> ficam completas na hora.</div></div>
      <div class="step"><div class="stepn">4</div><div>Se errar 3 ou mais, nada muda — pode tentar quantas vezes quiser.</div></div></div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:14px 0">
      ${ks.map(k=>`<div class="rc jp">${k.c}</div>`).join('')}</div>`;
  const go=el('button','btn btn-p','COMEÇAR O TESTE');
  go.onclick=()=>{closeM();setTimeout(()=>unitTest(ui),150);};
  $('#mBody').appendChild(go);
  $('#modal').classList.add('on');document.body.style.overflow='hidden';$('#mC').onclick=closeM;
}
function unitTest(ui){
  if(!UNITS[ui])return toast('Unidade não encontrada');
  const ks=UNITS[ui].k.map(i=>KANJI[i]).filter(Boolean);
  if(!ks.length)return toast('Unidade vazia');
  const q=[];
  if(S.course==='kana'){
    shuffle(ks).forEach(k=>q.push(mkKQ(k,'k2r',ks)));
    shuffle(ks).forEach(k=>q.push(mkKQ(k,'r2k',ks)));
    shuffle(ks).slice(0,4).forEach(k=>q.push(mkKQ(k,k.pair?'pair':'k2r',ks)));
    shuffle(wordsFor(ui)).slice(0,2).forEach(w=>q.push({t:'kword',w}));
  }else{
    shuffle(ks).forEach(k=>q.push(mkq(k,'k2m',ks)));
    shuffle(ks).forEach(k=>q.push(mkq(k,'m2k',ks)));
    shuffle(ks).slice(0,4).forEach(k=>q.push(mkq(k,'k2r',ks)));
    shuffle(ks).slice(0,2).forEach(k=>q.push(mkq(k,'word',ks)));
  }
  ks.forEach(k=>seed(k.c));
  open(q,{title:`Teste · Unidade ${ui+1}`,test:ui,noRep:true});
}
const anyQ=(k,pool)=>k.kana?mkKQ(k,pick(k.pair?['k2r','r2k','pair']:['k2r','r2k']),pool)
  :mkq(k,pick(['k2m','m2k','k2r','r2k','word']),pool);
function review(l){
  const pool=learned(),q=[];
  shuffle(l).forEach((k,i)=>{q.push(anyQ(k,pool));
    if(i%3===2&&(!k.kana||k.s>0))q.push({t:'write',k});});
  if(l.length>=4)q.splice((q.length/2)|0,0,{t:'match',pool:shuffle(l).slice(0,4)});
  open(q,{title:'Revisão'});
}
function flash(){
  const p=learned();if(!p.length)return toast('Faça a primeira etapa antes');
  open(shuffle(p).slice(0,12).map(k=>anyQ(k,p)),{title:'Relâmpago'});
}
function writeDrill(l){open(l.map(k=>({t:'write',k})),{title:'Treino de escrita'});}

/* ══════════════════════════════════════════════════════════════
   SUPABASE · ranking, amigos e lição em dupla
   ══════════════════════════════════════════════════════════════ */
/* projeto padrão já configurado — o usuário não precisa fazer nada */
const SB_DEF={
  url:'https://reoifpemntybtmcciusu.supabase.co',
  key:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlb2lmcGVtbnR5YnRtY2NpdXN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1MzUwODMsImV4cCI6MjEwMDExMTA4M30.zUJCO2iRoxsvq--hkXizKQjX-NhpRiLyMU89trYRB_g'
};
let SB={url:SB_DEF.url,key:SB_DEF.key,cli:null,user:null,me:null,on:false,auto:true};
try{const s=JSON.parse(localStorage.getItem('kanjido_sb')||'{}');
  if(s.url&&s.key)Object.assign(SB,s);}catch(e){}
const sbSave=()=>{try{localStorage.setItem('kanjido_sb',JSON.stringify({url:SB.url,key:SB.key}));}catch(e){}};
const CODE_A='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const mkCode=n=>{let s='';for(let i=0;i<(n||6);i++)s+=CODE_A[(Math.random()*CODE_A.length)|0];return s;};
/* o código existe SEMPRE, mesmo offline; o servidor só é informado depois */
function myCode(){
  if(!S.myCode){S.myCode=mkCode();sv();}
  return S.myCode;
}
const SQL=`-- ============================================
-- KanjiDo · cole TUDO e clique em RUN
-- Pode rodar quantas vezes quiser.
-- ============================================

drop table if exists public.friendships cascade;
drop table if exists public.profiles    cascade;

create table public.profiles (
  id         uuid primary key,
  name       text    default 'Estudante',
  avatar     text    default 'kitsune',
  xp         integer default 0,
  streak     integer default 0,
  best       integer default 0,
  kanji      integer default 0,
  code       text,
  updated_at timestamptz default now()
);

create table public.friendships (
  user_id    uuid not null,
  friend_id  uuid not null,
  created_at timestamptz default now(),
  primary key (user_id, friend_id)
);

alter table public.profiles    enable row level security;
alter table public.friendships enable row level security;

create policy p_read on public.profiles    for select using (true);
create policy p_ins  on public.profiles    for insert with check (auth.uid() = id);
create policy p_upd  on public.profiles    for update using (auth.uid() = id);

create policy f_read on public.friendships for select using (true);
create policy f_ins  on public.friendships for insert with check (auth.uid() = user_id);
create policy f_del  on public.friendships for delete using (auth.uid() = user_id);

-- ============================================
-- Depois disto, va em:
-- Authentication > Sign In / Providers > Anonymous
-- e LIGUE a chavinha.
-- ============================================`;

async function sbBoot(){
  if(!SB.url||!SB.key||S.sbOff)return;
  for(let i=0;i<16&&!window.supabase;i++)await new Promise(r=>setTimeout(r,250));
  if(!window.supabase)return;
  try{
    SB.cli=window.supabase.createClient(SB.url,SB.key,{auth:{persistSession:true,autoRefreshToken:true}});
    let {data}=await SB.cli.auth.getSession();
    if(!data||!data.session){
      /* entra sozinho na primeira vez — sem pedir nada ao usuário */
      const r=await SB.cli.auth.signInAnonymously();
      if(r.error){console.warn('anon',r.error.message);return;}
      data={session:r.data.session||{user:r.data.user}};
    }
    SB.user=(data.session&&data.session.user)||data.user;
    if(!SB.user)return;
    SB.on=true;await sbMe();sbPush();
    if(tab==='social'||tab==='prof')render();
  }catch(e){console.warn('supabase',e);}
}
async function sbConnect(url,key){
  SB.url=url.replace(/\/+$/,'');SB.key=key.trim();sbSave();
  if(!window.supabase)return toast('Biblioteca ainda carregando, tente de novo');
  try{
    SB.cli=window.supabase.createClient(SB.url,SB.key,{auth:{persistSession:true}});
    const {data,error}=await SB.cli.auth.signInAnonymously();
    if(error)throw error;
    SB.user=data.user;SB.on=true;await sbMe();toast('Conectado!');render();
  }catch(e){
    toast(/anonymous/i.test(e.message||'')?'Ative "Anonymous sign-ins" no Supabase':'Falha: '+(e.message||'verifique URL e chave'));
  }
}
/* Algumas instalações antigas não têm todas as colunas. Em vez de falhar,
   o app descobre quais faltam e passa a enviar só o que existe. */
SB.bad=new Set();SB.cols=null;
/* chave nova: descarta o cache antigo, que podia estar envenenado */
try{(JSON.parse(localStorage.getItem('kanjido_sbbad2')||'[]')).forEach(c=>SB.bad.add(c));}catch(e){}
try{const c=JSON.parse(localStorage.getItem('kanjido_sbcols')||'null');
  if(c&&c.length)SB.cols=new Set(c);}catch(e){}
const sbBadSave=()=>{try{localStorage.setItem('kanjido_sbbad2',JSON.stringify([...SB.bad]));}catch(e){}};
/* a resposta do servidor diz EXATAMENTE quais colunas existem */
function learnCols(row){
  if(!row||typeof row!=='object')return;
  const ks=Object.keys(row);
  if(!ks.length)return;
  SB.cols=new Set(ks);
  ks.forEach(k=>SB.bad.delete(k));
  try{localStorage.setItem('kanjido_sbcols',JSON.stringify(ks));}catch(e){}
  sbBadSave();
}
/* Descobre qual coluna o servidor não tem. A mensagem típica é:
   "Could not find the 'best' column of 'profiles' in the schema cache" */
function missCol(msg,payload){
  const m=String(msg||'');
  let x=/'([A-Za-z_]+)'\s+column/i.exec(m)            // 'best' column
     || /column\s+'([A-Za-z_]+)'/i.exec(m)            // column 'best'
     || /column\s+"([A-Za-z_]+)"/i.exec(m)            // column "best"
     || /"([A-Za-z_]+)"\s+column/i.exec(m);
  if(x&&x[1]&&payload&&(x[1] in payload))return x[1];
  /* rede de segurança: qualquer chave do payload citada na mensagem */
  if(payload)for(const k in payload)
    if(new RegExp("['\"`\\s]"+k+"['\"`\\s]").test(m))return k;
  if(x&&x[1])return x[1];
  return null;
}
function sbTrim(o){
  const p={};
  for(const k in o){
    if(k==='id'){p[k]=o[k];continue;}            // id é a PK, nunca sai
    if(SB.cols&&SB.cols.size&&!SB.cols.has(k))continue;
    if(SB.bad.has(k))continue;
    p[k]=o[k];
  }
  return p;
}
/* executa uma operação removendo colunas inexistentes até passar */
async function sbTry(fn,payload,tries){
  let p={...payload};
  for(let i=0;i<(tries||9);i++){
    const send=sbTrim(p);
    const r=await fn(send);
    if(!r.error)return r;
    const msg=r.error.message||'';
    if(/schema cache|could not find|does not exist|column/i.test(msg)){
      const col=missCol(msg,send);
      if(col){SB.bad.add(col);sbBadSave();delete p[col];
        if(Object.keys(sbTrim(p)).length)continue;}
    }
    return r;
  }
  return {error:{message:'não consegui salvar após remover colunas'}};
}
async function sbMe(){
  if(!SB.cli||!SB.user)return null;
  SB.err='';
  try{
    /* 1. já existe? a resposta ensina as colunas reais */
    const q=await SB.cli.from('profiles').select('*').eq('id',SB.user.id).maybeSingle();
    if(q.error){
      const m=q.error.message||'';
      if(/relation|does not exist|schema cache/i.test(m)){SB.sqlMissing=true;SB.err=m;return null;}
    }
    let data=q.data;
    if(data)learnCols(data);
    else{
      /* 2. cria a linha com o MÍNIMO absoluto: só a chave primária.
            Isso nunca falha por coluna inexistente. */
      const r=await SB.cli.from('profiles').insert({id:SB.user.id}).select().maybeSingle();
      if(r.error){
        SB.err=r.error.message||'insert falhou';
        if(/relation|does not exist/i.test(SB.err))SB.sqlMissing=true;
        console.warn('perfil',SB.err);return null;
      }
      data=r.data;learnCols(data);
    }
    /* 3. preenche só o que o servidor realmente aceita */
    const want={name:S.name,avatar:S.avatar,xp:S.xp,streak:S.streak,best:S.best||0,
      kanji:learned().length,code:myCode(),updated_at:new Date().toISOString()};
    let patch=sbTrim(want);delete patch.id;
    if(Object.keys(patch).length){
      let u=await SB.cli.from('profiles').update(patch).eq('id',SB.user.id).select().maybeSingle();
      if(u.error&&/duplicate/i.test(u.error.message||'')&&patch.code){
        S.myCode=mkCode();sv();patch.code=S.myCode;
        u=await SB.cli.from('profiles').update(patch).eq('id',SB.user.id).select().maybeSingle();
      }
      if(u.error){
        const col=missCol(u.error.message,patch);
        if(col){
          SB.bad.add(col);sbBadSave();
          const p2=sbTrim(want);delete p2.id;delete p2[col];
          if(Object.keys(p2).length){
            const u2=await SB.cli.from('profiles').update(p2).eq('id',SB.user.id).select().maybeSingle();
            if(!u2.error&&u2.data){data=u2.data;learnCols(u2.data);}
            else if(u2.error)SB.err=u2.error.message;
          }
        }else SB.err=u.error.message;
      }else if(u.data){data=u.data;learnCols(u.data);}
    }
    if(data&&data.code)S.myCode=data.code;
    else if(data)data.code=myCode();
    sv();SB.me=data;SB.sqlMissing=false;return data;
  }catch(e){SB.err=String((e&&e.message)||e);console.warn('sbMe',e);return null;}
}
let pushT=null;
async function sbPush(){
  if(!SB.on||!SB.cli||!SB.user||SB.sqlMissing)return;
  clearTimeout(pushT);
  pushT=setTimeout(async()=>{
    try{
      const p=sbTrim({name:S.name,avatar:S.avatar,xp:S.xp,streak:S.streak,best:S.best||0,
        kanji:learned().length,code:myCode(),updated_at:new Date().toISOString()});
      delete p.id;
      if(!Object.keys(p).length)return;
      const r=await SB.cli.from('profiles').update(p).eq('id',SB.user.id);
      if(r.error){
        const col=missCol(r.error.message,p);
        if(col){SB.bad.add(col);sbBadSave();}
        console.warn('push',r.error.message);
      }
    }catch(e){}
  },600);
}
/* diagnóstico: diz exatamente o que falta configurar */
async function sbDiag(url,key){
  const out={url:false,tbl1:false,tbl2:false,anon:false,msg:''};
  if(!window.supabase){out.msg='A biblioteca do Supabase ainda não carregou. Recarregue a página.';return out;}
  let cli;
  try{cli=window.supabase.createClient(url.replace(/\/+$/,''),key.trim());out.url=true;}
  catch(e){out.msg='URL ou chave em formato inválido.';return out;}
  try{
    const a=await cli.from('profiles').select('id').limit(1);
    out.tbl1=!a.error;
    if(a.error)out.msg=a.error.message||'';
  }catch(e){out.msg=String(e.message||e);}
  try{
    const b=await cli.from('friendships').select('user_id').limit(1);
    out.tbl2=!b.error;
    if(b.error&&!out.msg)out.msg=b.error.message||'';
  }catch(e){}
  try{
    const s=await cli.auth.signInAnonymously();
    out.anon=!s.error;
    if(s.error&&/anonymous/i.test(s.error.message||''))out.msg='anon';
  }catch(e){}
  return out;
}
function sbDiagBox(r){
  const li=(ok,t,f)=>`<div class="exp-o ${ok?'y':'n'}"><div class="eo-i">${ok?TICK:CROSS}</div>
    <div class="eo-c"><b>${t}</b>${ok?'':`<br><em>${f}</em>`}</div></div>`;
  const allOk=r.url&&r.tbl1&&r.tbl2&&r.anon;
  $('#mBody').innerHTML=`<div class="mtop"><button class="icon-btn" id="mC">${svg(IC.x,2.5)}</button></div>
    <div style="text-align:center;margin-bottom:14px">
      <div style="width:52px;height:52px;margin:0 auto 8px;color:${allOk?'var(--gr)':'var(--kin)'}">
        ${allOk?G.check('currentColor'):G.link()}</div>
      <h2 style="font-size:20px;font-weight:900;letter-spacing:-.03em">
        ${allOk?'Está tudo pronto!':'Falta configurar algo'}</h2></div>
    <div class="exp-sec">
      ${li(r.url,'URL e chave em formato válido','Confira em Settings → API: use o Project URL e a chave anon public.')}
      ${li(r.tbl1,'Tabela profiles existe','O SQL não rodou. Copie de novo e execute inteiro no SQL Editor.')}
      ${li(r.tbl2,'Tabela friendships existe','Rode o SQL completo — ele cria as duas tabelas de uma vez.')}
      ${li(r.anon,'Login anônimo ligado','Vá em Authentication → Sign In / Providers → Anonymous e ative.')}
    </div>
    ${r.msg&&r.msg!=='anon'?`<div class="exp-sec"><h5>Mensagem do servidor</h5>
      <p style="font-family:ui-monospace,monospace;font-size:11px;color:var(--no)">${esc(r.msg)}</p></div>`:''}`;
  const b=el('button','btn '+(allOk?'btn-g':'btn-p'),allOk?'CONECTAR AGORA':'ENTENDI');
  b.onclick=()=>{closeM();if(allOk&&SB.url&&SB.key)sbConnect(SB.url,SB.key);};
  $('#mBody').appendChild(b);
  if(!allOk&&(!r.tbl1||!r.tbl2)){
    const g=el('button','btn btn-o','Ver o passo a passo');g.style.marginTop='9px';
    g.onclick=()=>{closeM();setTimeout(sqlGuide,120);};
    $('#mBody').appendChild(g);
  }
  $('#modal').classList.add('on');document.body.style.overflow='hidden';
  $('#mC').onclick=closeM;
}
const avById=(id,img)=>{
  if(id==='custom'&&img)return `<img src="${img}" style="width:100%;height:100%;object-fit:cover">`;
  return (AV.find(a=>a.id===id)||AV[0]).svg();
};

/* ══════════════ VIEW · SOCIAL ══════════════ */
let sgTab='rank',lbCache=null,frCache=null;
/* guia passo a passo pra rodar o SQL */
function sqlGuide(){
  const url=(SB.url||'').replace(/\/+$/,'');
  const proj=(/https?:\/\/([a-z0-9]+)\./i.exec(url)||[])[1]||'';
  const link=proj?`https://supabase.com/dashboard/project/${proj}/sql/new`:'https://supabase.com/dashboard';
  $('#mBody').innerHTML=`<div class="mtop"><button class="icon-btn" id="mC">${svg(IC.x,2.5)}</button></div>
    <div style="text-align:center;margin-bottom:16px">
      <div style="width:52px;height:52px;margin:0 auto 8px">${G.scroll()}</div>
      <h2 style="font-size:20px;font-weight:900;letter-spacing:-.03em">Preparar o servidor</h2>
      <p style="font-size:12.5px;color:var(--txt3);margin-top:4px;line-height:1.5">
        Só precisa fazer isso <b>uma vez</b>. Leva menos de um minuto.</p></div>

    <div class="step"><div class="stepn">1</div><div>
      Toque no botão azul abaixo. Ele abre o <b>SQL Editor</b> do seu projeto numa aba nova.
      ${proj?`<br><small style="color:var(--txt3)">projeto: ${proj}</small>`:''}</div></div>
    <div class="step"><div class="stepn">2</div><div>
      Se pedir login, entre com a mesma conta que criou o projeto.</div></div>
    <div class="step"><div class="stepn">3</div><div>
      Volte aqui, toque em <b>Copiar SQL</b>, e cole na caixa grande do editor
      <span style="color:var(--txt3)">(Ctrl+V, ou segurar o dedo → Colar)</span>.</div></div>
    <div class="step"><div class="stepn">4</div><div>
      Clique em <b>Run</b> (canto inferior direito, ou Ctrl+Enter).
      Tem que aparecer <b style="color:var(--gr)">Success. No rows returned</b>.</div></div>
    <div class="step"><div class="stepn">5</div><div>
      No menu lateral vá em <b>Authentication → Sign In / Providers</b>,
      procure <b>Anonymous</b> e <b>ligue a chavinha</b>. Salve.</div></div>
    <div class="step"><div class="stepn">6</div><div>
      Volte ao app e toque em <b>Já rodei, verificar</b>.</div></div>`;
  const box=$('#mBody');
  const a=el('button','btn btn-p',svg(IC.link||IC.arrow,2.2)+' ABRIR O SQL EDITOR');
  a.style.marginTop='14px';
  a.onclick=()=>window.open(link,'_blank','noopener');
  box.appendChild(a);
  const cp=el('button','btn btn-o','Copiar SQL');cp.style.marginTop='9px';
  cp.onclick=()=>{
    if(navigator.clipboard&&navigator.clipboard.writeText)
      navigator.clipboard.writeText(SQL).then(()=>toast('SQL copiado! Cole no editor.'),()=>toast('Copie o texto abaixo'));
    else toast('Copie o texto abaixo');
  };
  box.appendChild(cp);
  const pre=el('div','sqlbox');pre.textContent=SQL;pre.style.marginTop='11px';
  box.appendChild(pre);
  const ck=el('button','btn btn-g','Já rodei, verificar');ck.style.marginTop='11px';
  ck.onclick=async()=>{
    ck.textContent='verificando…';ck.disabled=true;
    SB.bad.clear();SB.cols=null;SB.sqlMissing=false;sbBadSave();
    try{localStorage.removeItem('kanjido_sbcols');}catch(e){}
    const r=await sbDiag(SB.url,SB.key);
    ck.disabled=false;ck.textContent='Já rodei, verificar';
    if(r.tbl1&&r.tbl2&&r.anon){await sbBoot();await sbMe();closeM();render();sWin();toast('Tudo pronto!');}
    else sbDiagBox(r);
  };
  box.appendChild(ck);
  $('#modal').classList.add('on');document.body.style.overflow='hidden';
  $('#mC').onclick=closeM;
}
function vSocial(v){
  /* tabela ausente: mostra o caminho, não só o erro */
  if(SB.sqlMissing){
    const c=el('div','card');c.style.cssText='padding:20px;margin-top:16px;text-align:center';
    c.innerHTML=`<div style="width:46px;height:46px;margin:0 auto 12px;color:var(--kin)">${G.scroll()}</div>
      <b style="font-size:16px;font-weight:900;display:block;letter-spacing:-.02em">Falta preparar o servidor</b>
      <p style="font-size:12.5px;color:var(--txt2);margin-top:7px;line-height:1.6">
        As tabelas ainda não existem no seu projeto Supabase.<br>
        É uma configuração de <b>uma vez só</b> — tem um guia passo a passo.</p>`;
    v.appendChild(c);
    const g=el('button','btn btn-p','VER O PASSO A PASSO');g.style.marginTop='11px';
    g.onclick=()=>{sTap();sqlGuide();};v.appendChild(g);
    const d=el('button','btn btn-o','Diagnóstico rápido');d.style.marginTop='8px';
    d.onclick=async()=>{d.textContent='…';const r=await sbDiag(SB.url,SB.key);
      d.textContent='Diagnóstico rápido';sbDiagBox(r);};
    v.appendChild(d);
    v.appendChild(el('div','',`<p style="text-align:center;font-size:11.5px;color:var(--txt3);margin-top:14px;line-height:1.6">
      Enquanto isso, o app funciona normalmente offline.<br>Só o ranking e os amigos ficam indisponíveis.</p>`));
    return;
  }
  if(!SB.on&&!S.sbOff){
    const c=el('div','card');c.style.cssText='padding:22px;margin-top:16px;text-align:center';
    c.innerHTML=`<div style="width:46px;height:46px;margin:0 auto 12px">${G.link()}</div>
      <b style="font-size:15px;font-weight:800;display:block">Conectando…</b>
      <small style="font-size:12px;color:var(--txt3);display:block;margin-top:5px;line-height:1.5">
        O servidor já vem configurado. Se demorar, confira sua internet.</small>`;
    v.appendChild(c);
    const rt=el('button','btn btn-o','Tentar de novo');rt.style.marginTop='11px';
    rt.onclick=()=>{sbBoot().then(()=>render());toast('Reconectando…');};
    v.appendChild(rt);
    const mn=el('button','btn btn-o','Usar outro servidor');
    mn.style.cssText='margin-top:8px;font-size:12.5px';
    mn.onclick=()=>{S.sbOff=true;sv();render();};
    v.appendChild(mn);
    setTimeout(()=>{if(SB.on&&tab==='social')render();},2500);
    return;
  }
  if(!SB.on){
    const c=el('div','card');c.style.cssText='padding:18px;margin-top:16px';
    c.innerHTML=`<div style="display:flex;gap:12px;align-items:center;margin-bottom:14px">
        <div style="width:44px;height:44px;flex:none">${G.link()}</div>
        <div><b style="font-size:16px;font-weight:900;letter-spacing:-.02em;display:block">Conectar ao Supabase</b>
        <small style="font-size:11.5px;color:var(--txt3)">Ranking, amigos e lições em dupla</small></div></div>
      <div class="step"><div class="stepn">1</div><div>Crie um projeto grátis em <b>supabase.com</b>.</div></div>
      <div class="step"><div class="stepn">2</div><div>Abra o <b>SQL Editor</b>, cole o código abaixo e rode.</div></div>
      <div class="step"><div class="stepn">3</div><div>Em <b>Authentication → Providers</b>, ligue <b>Anonymous sign-ins</b>.</div></div>
      <div class="step"><div class="stepn">4</div><div>Copie <b>Project URL</b> e <b>anon public key</b> de Settings → API e cole aqui.</div></div>`;
    const pre=el('div','sqlbox');pre.textContent=SQL;pre.style.marginTop='12px';c.appendChild(pre);
    const cp=el('button','btn btn-o','Copiar SQL');cp.style.marginBottom='8px';
    cp.onclick=()=>{
      if(navigator.clipboard&&navigator.clipboard.writeText)
        navigator.clipboard.writeText(SQL).then(()=>toast('SQL copiado!'),()=>selSQL());
      else selSQL();
      function selSQL(){
        const r=document.createRange();r.selectNodeContents(pre);
        const s=getSelection();s.removeAllRanges();s.addRange(r);
        try{document.execCommand('copy');toast('SQL copiado!');}
        catch(e){toast('Selecione o texto acima e copie');}
      }
    };
    c.appendChild(cp);
    const help=el('button','exp-btn','Deu erro ao rodar o SQL?');
    help.style.marginBottom='12px';
    const hb=el('div','exp-body');
    hb.innerHTML=`<div class="exp-sec"><h5>Erros comuns</h5>
      <p><b>"column a does not exist"</b> — você rodou uma versão antiga. Copie o SQL <b>de novo</b> daqui
      (ele começa com <i>drop table</i>) e rode inteiro.</p>
      <p><b>"permission denied"</b> — você está no projeto errado, ou copiou só um pedaço.
      Cole <b>tudo</b>, do primeiro <i>drop</i> até o último comentário.</p>
      <p><b>"policy already exists"</b> — o novo SQL já resolve isso sozinho. Rode de novo.</p>
      <p><b>"Anonymous sign-ins are disabled"</b> — falta o passo 3:
      <b>Authentication → Sign In / Providers → Anonymous</b>, ligue a chave e salve.</p></div>
      <div class="exp-sec"><h5>Onde fica o SQL Editor</h5>
      <p>No menu lateral do Supabase, ícone <b>&gt;_</b> (SQL Editor) → <b>New query</b> →
      cole → botão <b>Run</b> (ou Ctrl+Enter).</p>
      <p>Se aparecer <b>"Success. No rows returned"</b>, deu certo — é essa a mensagem esperada.</p></div>`;
    help.onclick=()=>{const o=hb.classList.toggle('show');help.classList.toggle('open',o);};
    c.appendChild(help);c.appendChild(hb);
    const u=el('input','inp');u.placeholder='https://xxxx.supabase.co';u.value=SB.url||'';u.style.marginBottom='8px';
    const k=el('input','inp');k.placeholder='chave anon public (eyJ...)';k.value=SB.key||'';k.style.marginBottom='10px';
    c.appendChild(u);c.appendChild(k);
    const go=el('button','btn btn-p','CONECTAR');
    go.onclick=()=>{if(!u.value.trim()||!k.value.trim())return toast('Preencha os dois campos');
      go.textContent='conectando…';sbConnect(u.value.trim(),k.value.trim());};
    c.appendChild(go);
    const tst=el('button','btn btn-o','Testar se o SQL rodou');
    tst.style.marginTop='9px';
    tst.onclick=async()=>{
      if(!u.value.trim()||!k.value.trim())return toast('Preencha URL e chave antes');
      tst.textContent='testando…';
      const r=await sbDiag(u.value.trim(),k.value.trim());
      tst.textContent='Testar se o SQL rodou';
      sbDiagBox(r);
    };
    c.appendChild(tst);
    v.appendChild(c);
    v.appendChild(el('div','',`<p style="text-align:center;font-size:11.5px;color:var(--txt3);margin-top:14px;line-height:1.6">
      Sem conectar, o app funciona 100% offline.<br>Nada é enviado sem você configurar isto.</p>`));
    return;
  }
  const st=el('div','sgtabs');
  [['rank','Ranking'],['friends','Amigos'],['duo','Em dupla']].forEach(([id,t])=>{
    const b=el('button',sgTab===id?'on':'',t);b.onclick=()=>{sgTab=id;render();};st.appendChild(b);});
  v.appendChild(st);
  const body=el('div');body.id='sgBody';v.appendChild(body);
  ({rank:sgRank,friends:sgFriends,duo:sgDuo})[sgTab](body);
}
function lbRow(p,i,me){
  const b=el('button','lbrow'+(me?' me':''));
  const mp=['g','s','b'][i]||'';
  b.innerHTML=`<div class="lbp ${mp}">${i<3?'':''}${i+1}</div>
    <div class="lbav">${avById(p.avatar)}</div>
    <div class="lbi"><b>${esc(p.name||'Estudante')}${me?' · você':''}</b>
      <small><span>${G.fire()}${p.streak||0}</span><span>${G.sakura()}${p.kanji||0}</span>
      <span>nível ${lvOf(p.xp||0)}</span></small></div>
    <div class="lbx">${p.xp||0}</div>`;
  b.querySelectorAll('.lbi small svg').forEach(s=>{s.style.width='11px';s.style.height='11px';});
  b.onclick=()=>{sTap();openPeer(p);};
  return b;
}
function sgRank(b){
  /* 1234 → só VOCÊ aparece no ranking (esconde todos os outros) */
  const soloMe=!!S.devRankOnly;
  /* O estado de silêncio pode mudar enquanto o ranking carrega; leia-o no momento da pintura. */
  const myId=(SB&&SB.user)?SB.user.id:null;

  const draw=(data,err)=>{
    b.innerHTML='';
    const quiet=!!S.devQuiet;
    /* banner do filtro (SOMENTE se o modo silencioso NÃO está ativo) */
    if(soloMe&&!quiet){
      const banner=el('div','');
      banner.style.cssText='padding:12px 14px;margin:0 0 12px;border-radius:14px;background:linear-gradient(135deg,var(--kin-bg),var(--surf));border:2px solid var(--kin);text-align:center';
      banner.innerHTML=`<div style="font-size:11px;font-weight:900;letter-spacing:.14em;color:var(--kin);text-transform:uppercase;margin-bottom:4px">👑 CÓDIGO 1234 ATIVO</div>
        <div style="font-size:13px;font-weight:800;color:var(--txt)">Só você aparece no ranking</div>
        <div style="font-size:11px;color:var(--txt3);margin-top:3px">Digite <b style="color:var(--kin)">1234</b> pra restaurar · <b style="color:var(--kin)">1968</b> esconde este aviso</div>`;
      b.appendChild(banner);
    }
    /* título — modo silencioso deixa completamente neutro */
    b.appendChild(el('div','sec-t','<span>Top 50 por XP</span>'));

    if(err){
      const m=String((err&&err.message)||err||'');
      b.appendChild(el('div','empty',`<span class="eg jp">表</span><b>Não deu pra carregar</b>
        <p>${/relation|does not exist|schema/i.test(m)?'A tabela ainda não existe. Rode o SQL no Supabase.':/anonymous/i.test(m)?'Habilite Anonymous no Supabase.':'Sem conexão com o servidor.'}</p>`));
      const rt=el('button','btn btn-o','Tentar de novo');
      rt.style.cssText='max-width:240px;margin:10px auto 0';
      rt.onclick=()=>sgRank(b);b.appendChild(rt);
      return;
    }
    let list=data||[];
    if(soloMe){
      /* mantém APENAS você */
      const before=list.length;
      list=list.filter(p=>myId&&p.id===myId);
      /* garante que você aparece mesmo se ainda não estiver no banco */
      if(myId&&SB.me&&!list.some(p=>p.id===myId))list.unshift(SB.me);
      console.log('[1234] Só você. Antes:',before,'depois:',list.length);
    }
    /* aviso extra abaixo do título — também só se NÃO está no modo silencioso */
    if(soloMe&&!quiet){
      const info=el('div','');
      info.style.cssText='padding:9px 12px;margin:-4px 0 12px;border-radius:12px;background:var(--surf2);border:1px dashed var(--line2);text-align:center;font-size:11.5px;color:var(--txt2)';
      info.innerHTML='Os outros usuários foram ocultados';
      b.appendChild(info);
    }
    if(!list.length){
      b.appendChild(el('div','empty','<span class="eg jp">空</span><b>Ranking vazio</b><p>Ninguém aparece no ranking ainda.</p>'));
      return;
    }
    list.slice(0,50).forEach((p,i)=>b.appendChild(lbRow(p,i,myId&&p.id===myId)));
    /* posição própria só faz sentido se estamos no modo global */
    if(!soloMe&&myId){
      const mi=list.findIndex(p=>p.id===myId);
      if(mi<0&&SB.me){b.appendChild(el('div','vs','SUA POSIÇÃO'));b.appendChild(lbRow(SB.me,50,true));}
    }
  };

  b.innerHTML='<p style="text-align:center;color:var(--txt3);font-size:12.5px;padding:18px 0">carregando…</p>';
  if(!SB||!SB.cli){draw(null,{message:'sem cliente'});return;}
  SB.cli.from('profiles').select('*').order('xp',{ascending:false}).limit(soloMe?500:50)
    .then(r=>draw(r.data,r.error))
    .catch(e=>draw(null,e));
}
function sgFriends(b){
  b.innerHTML='';
  const code=myCode();                      // nunca fica vazio
  const synced=!!(SB.me&&SB.me.code===code);
  const cb=el('div','codebox');
  cb.innerHTML=`<div class="cbi"><small>Seu código${synced?'':' · não sincronizado'}</small><b>${code}</b></div>`;
  const cpy=el('button','icon-btn',svg(IC.lib,2));
  cpy.onclick=()=>{
    if(navigator.clipboard&&navigator.clipboard.writeText)
      navigator.clipboard.writeText(code).then(()=>toast('Código copiado!'),()=>toast('Código: '+code));
    else toast('Código: '+code);
  };
  cb.appendChild(cpy);
  b.appendChild(cb);
  if(!synced){
    const warn=el('div','',`<p style="font-size:11.5px;color:var(--txt3);text-align:center;margin:-4px 0 8px;line-height:1.5">
      Este código só funciona depois de salvar no servidor.</p>`);
    b.appendChild(warn);
    const gen=el('button','btn btn-o','Salvar meu código no servidor');
    gen.style.marginBottom='12px';
    gen.onclick=async()=>{
      gen.textContent='salvando…';gen.disabled=true;
      SB.bad.clear();SB.cols=null;sbBadSave();      // recomeça a descoberta do zero
      try{localStorage.removeItem('kanjido_sbcols');}catch(e){}
      if(!SB.on)await sbBoot();
      const r=await sbMe();
      if(r&&r.code){toast('Código salvo no servidor!');render();return;}
      gen.disabled=false;gen.textContent='Tentar de novo';
      if(SB.sqlMissing)toast('A tabela não existe. Rode o SQL no Supabase.');
      else if(SB.err)toast('Erro: '+String(SB.err).slice(0,46));
      else toast('Não deu. Confira sua conexão.');
    };
    b.appendChild(gen);
    const diag=el('button','tool','Ver diagnóstico');
    diag.style.cssText='margin:0 auto 12px;display:flex';
    diag.onclick=async()=>{diag.textContent='…';
      const r=await sbDiag(SB.url,SB.key);diag.textContent='Ver diagnóstico';sbDiagBox(r);};
    b.appendChild(diag);
  }
  const row=el('div','inrow');
  const inp=el('input','inp');inp.placeholder='código do amigo';inp.maxLength=6;
  inp.style.textTransform='uppercase';inp.style.letterSpacing='.12em';
  const add=el('button','btn btn-p btn-sm','Adicionar');
  add.onclick=async()=>{
    const c=(inp.value||'').trim().toUpperCase();
    if(c.length<4)return toast('Digite o código');
    if(c===myCode())return toast('Esse é o seu próprio código');
    add.textContent='…';add.disabled=true;
    const rst=()=>{add.textContent='Adicionar';add.disabled=false;};
    const q=await SB.cli.from('profiles').select('id,name,code').eq('code',c).maybeSingle();
    if(q.error){rst();
      return toast(/column|schema/i.test(q.error.message||'')
        ?'A coluna "code" não existe. Rode o SQL atualizado.'
        :'Erro na busca: '+String(q.error.message||'').slice(0,40));}
    const f=q.data;
    if(!f){rst();
      return toast('Código não existe no servidor. Peça pro seu amigo abrir a aba Social.');}
    const r=await SB.cli.from('friendships').insert({user_id:SB.user.id,friend_id:f.id});
    rst();
    if(r.error&&!/duplicate/i.test(r.error.message||''))
      return toast('Não deu pra adicionar: '+String(r.error.message||'').slice(0,40));
    toast((f.name||'Amigo')+' adicionado!');inp.value='';frCache=null;render();
  };
  row.appendChild(inp);row.appendChild(add);b.appendChild(row);
  b.appendChild(el('div','sec-t','<span>Meus amigos</span>'));
  const list=el('div');b.appendChild(list);
  list.innerHTML=`<p style="text-align:center;color:var(--txt3);font-size:12.5px;padding:14px 0">carregando…</p>`;
  SB.cli.from('friendships').select('user_id,friend_id')
   .or(`user_id.eq.${SB.user.id},friend_id.eq.${SB.user.id}`).then(async({data})=>{
    const ids=[...new Set((data||[]).map(r=>r.user_id===SB.user.id?r.friend_id:r.user_id))];
    if(!ids.length){list.innerHTML=`<div class="empty"><span class="eg jp">友</span><b>Nenhum amigo ainda</b>
      <p>Peça o código de 6 letras de alguém e adicione aqui. Compartilhe o seu também.</p></div>`;return;}
    const {data:ps}=await SB.cli.from('profiles').select('id,name,avatar,xp,streak,kanji,code').in('id',ids);
    list.innerHTML='';
    (ps||[]).sort((x,y)=>(y.xp||0)-(x.xp||0)).forEach((p,i)=>list.appendChild(lbRow(p,i,false)));
  });
}
function openPeer(p){
  const lv=lvOf(p.xp||0),rk=RANK[Math.min(lv-1,RANK.length-1)];
  const pv=LVL[lv-1]||0,nx=LVL[lv]!=null?LVL[lv]:(p.xp||0);
  const pct=nx>pv?clamp(((p.xp||0)-pv)/(nx-pv),0,1):1;
  $('#mBody').innerHTML=`<div class="mtop"><button class="icon-btn" id="mC">${svg(IC.x,2.5)}</button></div>
    <div style="text-align:center">
      <div style="width:104px;height:104px;margin:0 auto 12px;border-radius:50%;overflow:hidden;border:3px solid var(--kin)">${avById(p.avatar)}</div>
      <h2 style="font-size:22px;font-weight:900;letter-spacing:-.03em">${esc(p.name||'Estudante')}</h2>
      <div style="font-size:12px;font-weight:800;color:var(--kin);margin-top:3px">
        <span class="jp">${rk[0]}</span> ${rk[1]} · nível ${lv}</div></div>
    <div class="lvwrap" style="margin-top:16px"><div class="lvbar"><i style="width:${pct*100}%"></i></div></div>
    <div class="pstats" style="margin-top:14px">
      <div class="pst"><div class="psi">${G.gem()}</div><b>${p.xp||0}</b><i>XP</i></div>
      <div class="pst"><div class="psi">${G.fire()}</div><b>${p.streak||0}</b><i>Ofensiva</i></div>
      <div class="pst"><div class="psi">${G.sakura()}</div><b>${p.kanji||0}</b><i>Kanji</i></div></div>
    ${p.code?`<p style="text-align:center;font-size:11.5px;color:var(--txt3);margin-top:14px">código <b style="letter-spacing:.14em;color:var(--txt2)">${p.code}</b></p>`:''}`;
  $('#modal').classList.add('on');document.body.style.overflow='hidden';$('#mC').onclick=closeM;
}

/* ── lição em dupla ── */
let CO=null;
function sgDuo(b){
  b.innerHTML=`<div class="sec-t"><span>Estudar em dupla</span></div>
    <p style="font-size:12.5px;color:var(--txt2);line-height:1.6;margin-bottom:14px">
    Crie uma sala, mande o código pro seu amigo e os dois respondem <b style="color:var(--txt)">exatamente as mesmas
    12 perguntas</b>, ao vivo, vendo o progresso um do outro.</p>`;
  const sel=el('div','filters');
  let uSel=0;
  UNITS.forEach((u,i)=>{const c=el('button','chip'+(i===uSel?' on':''),(i+1)+'. '+u.t);
    c.onclick=()=>{uSel=i;[...sel.children].forEach((x,j)=>x.className='chip'+(j===uSel?' on':''));};sel.appendChild(c);});
  b.appendChild(sel);
  const mk=el('button','btn btn-p','Criar sala');mk.style.marginTop='6px';
  mk.onclick=()=>coStart(CODE_A[uSel%CODE_A.length]+mkCode(3),true);
  b.appendChild(mk);
  b.appendChild(el('div','vs','OU'));
  const row=el('div','inrow');
  const inp=el('input','inp');inp.placeholder='código da sala';inp.maxLength=4;
  inp.style.textTransform='uppercase';inp.style.letterSpacing='.14em';
  const jn=el('button','btn btn-g btn-sm','Entrar');
  jn.onclick=()=>{const c=(inp.value||'').trim().toUpperCase();
    if(c.length!==4)return toast('O código tem 4 letras');coStart(c,false);};
  row.appendChild(inp);row.appendChild(jn);b.appendChild(row);
}
function coStart(code,host){
  const ui=clamp(Math.max(0,CODE_A.indexOf(code[0])),0,UNITS.length-1);
  const ks=UNITS[ui].k.map(i=>KANJI[i]);
  const q=seeded(code,()=>{
    const out=[];const modes=['k2m','m2k','k2r','r2k','word','k2m'];
    shuffle(ks).forEach((k,n)=>out.push(mkq(k,modes[n%modes.length],ks)));
    shuffle(ks).forEach((k,n)=>out.push(mkq(k,modes[(n+3)%modes.length],ks)));
    return out;});
  ks.forEach(k=>seed(k.c));
  CO={code,host,ui,peer:null,ch:null};
  try{
    CO.ch=SB.cli.channel('kd:'+code,{config:{presence:{key:SB.user.id}}});
    CO.ch.on('presence',{event:'sync'},()=>{
      const st=CO.ch.presenceState();
      CO.peer=null;
      Object.keys(st).forEach(k=>{if(k!==SB.user.id&&st[k]&&st[k][0])CO.peer=st[k][0];});
      coPaint();
    });
    CO.ch.subscribe(s=>{if(s==='SUBSCRIBED')coTrack();});
  }catch(e){CO.ch=null;}
  open(q,{title:`Dupla · ${UNITS[ui].t}`,co:code});
  toast('Sala '+code+' — passe o código pro seu amigo');
}
function coTrack(done){
  if(!CO||!CO.ch)return;
  try{CO.ch.track({n:S.name,a:S.avatar,i:SS?SS.i:0,ok:SS?SS.ok:0,t:SS?SS.q.length:0,f:!!done});}catch(e){}
}
function coPaint(){
  const w=$('#coop');if(!CO){w.className='';w.innerHTML='';return;}
  w.className='on';
  const p=CO.peer;
  const mine=SS?clamp(SS.i/Math.max(1,SS.q.length),0,1):0;
  w.innerHTML=`<div class="cop">
    <div class="lbav">${p?avById(p.a):avById('kitsune')}</div>
    <div class="ci"><b>${p?esc(p.n||'Amigo'):'Sala '+CO.code+' · esperando…'}</b>
      <div class="cbar"><i style="width:${p?clamp(p.i/Math.max(1,p.t||1),0,1)*100:0}%"></i></div></div>
    <div class="cs">${p?(p.f?'fim':p.ok+'✓'):''}</div></div>`;
}
function coEnd(){
  if(CO&&CO.ch){try{CO.ch.unsubscribe();}catch(e){}}
  CO=null;$('#coop').className='';$('#coop').innerHTML='';
}

/* ══════════════════════════════════════════════════════════════
   MÓDULO KANA · hiragana + katakana
   ══════════════════════════════════════════════════════════════ */
/* [hiragana, katakana, romaji, traços-h, traços-k, mnemônico-h, mnemônico-k] */
const KB=[
['あ','ア','a',3,2,'Um <b>A</b> maiúsculo com um laço a mais. Alguém deu um nó na letra.','Um <b>A</b> sem a barrinha do meio, meio torto.'],
['い','イ','i',2,2,'Dois riscos em pé, como as duas perninhas do <b>ii</b>.','Um <b>i</b> minúsculo esticado, sem o pingo.'],
['う','ウ','u',2,3,'Um pássaro visto de lado dizendo <b>u</b>. Bico pra cima.','Uma casinha com o telhado e a antena. <b>U</b>ma casa.'],
['え','エ','e',2,3,'Alguém com um chapéu fazendo uma reverência. <b>E</b>ducado.','Parece um <b>H</b> deitado, ou um poste de energia (<b>e</b>letricidade).'],
['お','オ','o',3,3,'Igual ao あ, mas com um pingo extra. Um <b>ô</b> de surpresa.','Um <b>O</b>sso quebrado, ou uma cruz com o rabinho.'],
['か','カ','ka',3,2,'Uma faca (<b>ka</b>tana) cortando o ar com um pingo do lado.','A mesma faca, só que mais simples e reta.'],
['き','キ','ki',4,3,'Uma <b>ki</b>ave antiga, com dois dentes e o cabo.','A chave sem o cabo, só os dois dentes cruzados.'],
['く','ク','ku',1,2,'Um bico de pássaro aberto. Um traço só, tipo o <b>&lt;</b>.','O mesmo bico, com um risquinho a mais na ponta.'],
['け','ケ','ke',3,3,'Um barril com a torneira. Serve <b>ke</b>rosene.','Um <b>K</b> apressado, escrito com pressa.'],
['こ','コ','ko',2,2,'Dois traços deitados, como duas cordinhas paradas.','Um <b>C</b> quadrado. Duas linhas em ângulo reto.'],
['さ','サ','sa',3,3,'Um anzol pescando. O peixe está na <b>sa</b>rdinha.','Três traços como uma plantinha brotando (<b>sa</b>lada).'],
['し','シ','shi',1,3,'Um gancho comprido, um sorriso deitado. <b>Shi</b>i…','Três pingos deitados com um gancho. Cuidado: parece o ツ.'],
['す','ス','su',2,3,'Um pião girando com a corda pendurada.','Uma escorregadinha, tipo um <b>Z</b> arredondado.'],
['せ','セ','se',3,2,'Uma boca aberta no dentista dizendo <b>se</b>.','Um <b>C</b> com um risquinho no meio. Meio セte.'],
['そ','ソ','so',1,2,'Um zigue-zague costurado, sem tirar a caneta.','Dois traços, como aspas. Cuidado: parece o ン.'],
['た','タ','ta',4,3,'Um <b>ta</b>co e uma bola. Ou um "t" com um "c" do lado.','Parece o kanji 夕 (entardecer). Um gancho com um corte.'],
['ち','チ','chi',2,3,'Um número 5 espelhado. Ou uma orelha ouvindo <b>chi</b>u.','Parece o kanji 千 (mil). Um "T" com um chapéu.'],
['つ','ツ','tsu',1,3,'Uma onda vindo. Um anzol deitado.','Três pingos em pé com o gancho. Compare com シ (deitados).'],
['て','テ','te',1,1,'Uma mão (<b>te</b>) apontando pra frente. Um traço só.','Parece uma antena de <b>TV</b>, ou o kanji 天.'],
['と','ト','to',2,2,'Uma agulha com a linha passando. Um pé com o dedão.','Um <b>T</b> sem o lado esquerdo. Simples assim.'],
['な','ナ','na',4,2,'Um <b>na</b>rrador com o microfone. Tem uma cruz e um laço.','Uma cruz inclinada. É a primeira parte do な.'],
['に','ニ','ni',3,2,'Um garçom trazendo dois pratos. Dois traços à direita.','Dois traços deitados. É o kanji 二 (dois) mesmo.'],
['ぬ','ヌ','nu',2,2,'Um macarrão (<b>nu</b>dle) enrolado no laço final.','Um <b>X</b> com o braço estendido. Sem o laço do ぬ.'],
['ね','ネ','ne',2,4,'Um gato (<b>ne</b>ko) com o rabo enroladinho.','Um pinheirinho com a base. É o radical 礻.'],
['の','ノ','no',1,1,'Um redemoinho. <b>Nó</b> em espiral, um traço só.','Um traço inclinado. A parte de fora do の.'],
['は','ハ','ha',3,2,'Um <b>ha</b>lter de academia, com a barra e o peso.','Duas pernas abrindo. É o kanji 八 (oito).'],
['ひ','ヒ','hi',1,2,'Um sorriso largo. <b>Hi</b>hihi!','Uma pessoa sentada de perfil. Parece o L espelhado.'],
['ふ','フ','fu',4,1,'O Monte <b>Fu</b>ji com duas nuvens do lado.','Um traço só, como um nariz de perfil.'],
['へ','ヘ','he',1,1,'Uma montanha bem baixinha. Um traço só.','Igualzinho ao hiragana. Os dois são o mesmo desenho!'],
['ほ','ホ','ho',4,4,'É o は com um traço a mais em cima. <b>Ho</b>tel de dois andares.','Parece o kanji 木 (árvore) com as pontas soltas.'],
['ま','マ','ma',3,2,'Uma <b>ma</b>çã pendurada em dois galhos.','Um telhadinho com um gancho. Simples e rápido.'],
['み','ミ','mi',2,3,'O número 21 grudado. Ou um caracol com a concha.','Três traços deitados, como o kanji 三 inclinado.'],
['む','ム','mu',3,2,'Uma vaca (<b>mu</b>!) com o rabinho levantado.','Um V com a base. É o radical 厶.'],
['め','メ','me',2,2,'Um olho (<b>me</b>) com o laço embaixo. Parece o ぬ sem barriga.','Um <b>X</b> puro. Cuidado: o ヌ tem o bracinho.'],
['も','モ','mo',3,3,'Um anzol com dois peixinhos presos.','O kanji 毛 (pelo) simplificado. Um gancho com dois traços.'],
['や','ヤ','ya',3,2,'Um <b>ya</b>que com os chifres tortos.','A metade de cima do や. Um gancho com o corte.'],
['ゆ','ユ','yu',2,2,'Um peixe (<b>yu</b>) com o anzol atravessado.','Um <b>U</b> quadrado deitado. Duas linhas.'],
['よ','ヨ','yo',2,3,'Um <b>yo</b>-yô pendurado no dedo.','Um <b>E</b> sem a haste da esquerda. Três traços.'],
['ら','ラ','ra',2,2,'Uma pessoa sentada de perfil, com o cabelo em cima.','Um telhado com um traço embaixo. Meio <b>7</b>.'],
['り','リ','ri',2,2,'Duas linhas paralelas, uma curva. Um <b>ri</b>o correndo.','As mesmas duas linhas, mas retas e separadas.'],
['る','ル','ru',1,2,'Uma estrada com um laço no fim. Compare com ろ (sem laço).','Duas perninhas, como o radical 儿 de pessoa.'],
['れ','レ','re',2,1,'Uma pessoa correndo, com o braço pra trás.','Um traço só, tipo um <b>L</b> ao contrário.'],
['ろ','ロ','ro',1,3,'Igual ao る, mas <b>sem o laço</b>. Só a estrada.','Um quadrado. É o kanji 口 (boca).'],
['わ','ワ','wa',2,2,'Parece o ね e o れ, mas termina numa curva aberta.','Um telhado largo. Parece o ラ sem o traço de cima.'],
['を','ヲ','wo',3,3,'Uma pessoa chutando. Só usado como partícula (o).','Raríssimo. Um ヨ com o rabinho pra baixo.'],
['ん','ン','n',1,2,'Um <b>n</b> escrito com pressa. O único que fecha sílaba.','Dois pingos em pé. Cuidado: parece o ソ.']
];
/* dakuten / handakuten */
const DAK={か:'が',き:'ぎ',く:'ぐ',け:'げ',こ:'ご',さ:'ざ',し:'じ',す:'ず',せ:'ぜ',そ:'ぞ',
 た:'だ',ち:'ぢ',つ:'づ',て:'で',と:'ど',は:'ば',ひ:'び',ふ:'ぶ',へ:'べ',ほ:'ぼ',
 カ:'ガ',キ:'ギ',ク:'グ',ケ:'ゲ',コ:'ゴ',サ:'ザ',シ:'ジ',ス:'ズ',セ:'ゼ',ソ:'ゾ',
 タ:'ダ',チ:'ヂ',ツ:'ヅ',テ:'デ',ト:'ド',ハ:'バ',ヒ:'ビ',フ:'ブ',ヘ:'ベ',ホ:'ボ'};
const HAN={は:'ぱ',ひ:'ぴ',ふ:'ぷ',へ:'ぺ',ほ:'ぽ',ハ:'パ',ヒ:'ピ',フ:'プ',ヘ:'ペ',ホ:'ポ'};
const DR={ka:'ga',ki:'gi',ku:'gu',ke:'ge',ko:'go',sa:'za',shi:'ji',su:'zu',se:'ze',so:'zo',
 ta:'da',chi:'ji',tsu:'zu',te:'de',to:'do',ha:'ba',hi:'bi',fu:'bu',he:'be',ho:'bo'};
const HR={ha:'pa',hi:'pi',fu:'pu',he:'pe',ho:'po'};
/* yōon */
const YO=[['き','キ','ki','k'],['し','シ','shi','sh'],['ち','チ','chi','ch'],['に','ニ','ni','n'],
 ['ひ','ヒ','hi','h'],['み','ミ','mi','m'],['り','リ','ri','r'],['ぎ','ギ','gi','g'],
 ['じ','ジ','ji','j'],['び','ビ','bi','b'],['ぴ','ピ','pi','p']];
const YSUF=[['ゃ','ャ','a'],['ゅ','ュ','u'],['ょ','ョ','o']];
const yRom=(b,v)=>b==='sh'||b==='ch'?b+(v==='u'?'u':v):b==='j'?'j'+v:b+'y'+v;

/* objetos compatíveis com o motor de kanji */
let KANA_LIST=[],KH={},KK={};
(function buildKana(){
  const mk=(c,r,sc,st,sty,pair,type)=>({c,r,m:[r],m2:r,qr:r,s:st,g:0,jl:sc==='h'?'Hiragana':'Katakana',
    kana:true,sc,type:type||'base',pair,on:[],kun:[{k:c,r}],rad:{c,m:sc==='h'?'hiragana':'katakana'},
    sty,p:[],w:[],sim:[]});
  KB.forEach(([h,k,r,sh,sk,mh,mkk])=>{
    KANA_LIST.push(mk(h,r,'h',sh,mh,k));
    KH[r]=h;KK[r]=k;
  });
  KB.forEach(([h,k,r,sh,sk,mh,mkk])=>KANA_LIST.push(mk(k,r,'k',sk,mkk,h)));
  /* dakuten */
  const dk=(base,map,rmap,tag)=>{
    Object.keys(map).forEach(b=>{
      const row=KB.find(x=>x[0]===b||x[1]===b);if(!row)return;
      const isH=row[0]===b,r=rmap[row[2]];if(!r)return;
      const c=map[b],pairC=isH?(map[row[1]]||''):(map[row[0]]||'');
      KANA_LIST.push({c,r,m:[r],m2:r,qr:r,s:(isH?row[3]:row[4])+2,g:0,
        jl:isH?'Hiragana':'Katakana',kana:true,sc:isH?'h':'k',type:tag,pair:pairC,
        on:[],kun:[{k:c,r}],rad:{c:b,m:'base '+row[2]},
        sty:`É o <b>${b}</b> (${row[2]}) com ${tag==='dak'?'as duas aspinhas ゛':'a bolinha ゜'}. O som ${row[2]} vira <b>${r}</b>.`,
        p:[],w:[],sim:[b]});
      if(isH)KH[r]=KH[r]||c;else KK[r]=KK[r]||c;
    });
  };
  dk(0,DAK,DR,'dak');dk(0,HAN,HR,'han');
  /* yōon */
  YO.forEach(([hb,kb,br,cons])=>{
    YSUF.forEach(([hs,ks,v])=>{
      const r=yRom(cons,v);
      [[hb+hs,'h',hb,hs],[kb+ks,'k',kb,ks]].forEach(([c,sc,b,s])=>{
        KANA_LIST.push({c,r,m:[r],m2:r,qr:r,s:0,g:0,jl:sc==='h'?'Hiragana':'Katakana',
          kana:true,sc,type:'yoon',pair:'',on:[],kun:[{k:c,r}],rad:{c:b,m:'base '+br},
          sty:`<b>${b}</b> (${br}) + o <b>${s} pequenininho</b>. Os dois viram <b>uma sílaba só</b>: ${r}. Não é "${br}${v}" em dois tempos, é ${r} rapidinho.`,
          p:[],w:[],sim:[]});
        if(sc==='h')KH[r]=KH[r]||c;else KK[r]=KK[r]||c;
      });
    });
  });
  KANA_LIST.forEach((k,i)=>k.i=i);
})();
const KIDX=c=>KANA_LIST.findIndex(k=>k.c===c);
const kFind=(sc,type)=>KANA_LIST.filter(k=>k.sc===sc&&k.type===type);

/* ── banco de palavras ── */
/* [kana, romaji, significado, kanji/nota, unidade mínima] */
const KWORDS=[
['あい','ai','amor','愛',0],['いえ','ie','casa','家',0],['あお','ao','azul','青',0],
['か','ka','mosquito','蚊',0],['かお','kao','rosto','顔',0],['いく','iku','ir','行く',0],
['きく','kiku','ouvir','聞く',0],['あき','aki','outono','秋',0],['おかあさん','okāsan','mãe','お母さん',0],
['さけ','sake','saquê','酒',1],['すし','sushi','sushi','寿司',1],['した','shita','embaixo','下',1],
['そと','soto','fora','外',1],['たこ','tako','polvo','蛸',1],['うち','uchi','minha casa','内',1],
['ちかい','chikai','perto','近い',1],['つき','tsuki','lua','月',1],['て','te','mão','手',1],
['とけい','tokei','relógio','時計',1],['あさ','asa','manhã','朝',1],
['なつ','natsu','verão','夏',2],['ねこ','neko','gato','猫',2],['いぬ','inu','cachorro','犬',2],
['はな','hana','flor','花',2],['ひと','hito','pessoa','人',2],['ふね','fune','barco','船',2],
['ほし','hoshi','estrela','星',2],['なに','nani','o quê','何',2],['のむ','nomu','beber','飲む',2],
['はし','hashi','ponte / hashi','橋',2],
['やま','yama','montanha','山',3],['ゆき','yuki','neve','雪',3],['みみ','mimi','orelha','耳',3],
['め','me','olho','目',3],['みる','miru','ver','見る',3],['もの','mono','coisa','物',3],
['むし','mushi','inseto','虫',3],['あめ','ame','chuva','雨',3],
['そら','sora','céu','空',4],['はる','haru','primavera','春',4],['よる','yoru','noite','夜',4],
['わたし','watashi','eu','私',4],['ほん','hon','livro','本',4],['にほん','nihon','Japão','日本',4],
['さかな','sakana','peixe','魚',4],['くるま','kuruma','carro','車',4],['とり','tori','pássaro','鳥',4],
['かわ','kawa','rio','川',4],
['みず','mizu','água','水',5],['かぜ','kaze','vento','風',5],['ひげ','hige','barba','髭',5],
['かぎ','kagi','chave','鍵',5],['げんき','genki','disposto','元気',5],['かぞく','kazoku','família','家族',5],
['だいがく','daigaku','universidade','大学',6],['でんわ','denwa','telefone','電話',6],
['ばん','ban','noite','晩',6],['ぶた','buta','porco','豚',6],['たべる','taberu','comer','食べる',6],
['ぱん','pan','pão','パン',6],['えんぴつ','enpitsu','lápis','鉛筆',6],
['きゅう','kyū','nove','九',7],['ちゃ','cha','chá','茶',7],['しゃしん','shashin','foto','写真',7],
['でんしゃ','densha','trem','電車',7],['きょう','kyō','hoje','今日',7],['じゅう','jū','dez','十',7],
['りょこう','ryokō','viagem','旅行',7],['としょかん','toshokan','biblioteca','図書館',7],
['がっこう','gakkō','escola','学校',7],['きって','kitte','selo','切手',7],['ざっし','zasshi','revista','雑誌',7],
['アイス','aisu','sorvete','ice',8],['エア','ea','ar','air',8],['カカオ','kakao','cacau','cacao',8],
['ケーキ','kēki','bolo','cake',9],['スキー','sukī','esqui','ski',9],['タクシー','takushī','táxi',
'taxi',9],['コスト','kosuto','custo','cost',9],['シーツ','shītsu','lençol','sheets',9],
['ネクタイ','nekutai','gravata','necktie',10],['ノート','nōto','caderno','note',10],
['ホテル','hoteru','hotel','hotel',10],['ナイフ','naifu','faca','knife',10],['ハート','hāto','coração','heart',10],
['カメラ','kamera','câmera','camera',11],['メモ','memo','anotação','memo',11],['ミルク','miruku','leite','milk',11],
['ユーモア','yūmoa','humor','humor',11],
['ラジオ','rajio','rádio','radio',12],['レストラン','resutoran','restaurante','restaurant',12],
['ワイン','wain','vinho','wine',12],['パン','pan','pão','pão',12],['ペン','pen','caneta','pen',12],
['ビール','bīru','cerveja','beer',13],['バス','basu','ônibus','bus',13],['テレビ','terebi','televisão','TV',13],
['コーヒー','kōhī','café','coffee',13],['ボタン','botan','botão','button',13],['ゲーム','gēmu','jogo','game',13]
].map(a=>({w:a[0],r:a[1],m:a[2],n:a[3],u:a[4]})).filter(x=>x.m&&typeof x.u==='number');

/* ── unidades do curso de kana ── */
/* 6 sinais por unidade */
const KSEG=[[0,6],[6,12],[12,18],[18,24],[24,30],[30,36],[36,42],[42,46]];
const KNAM=[['あ・か','vogais e o começo do K','あ'],['か・さ','fim do K, começo do S','き'],
 ['さ・た','fim do S, começo do T','す'],['た・な','fim do T, começo do N','ち'],
 ['な・は','fim do N, começo do H','ぬ'],['は・ま','fim do H, começo do M','ひ'],
 ['ま・や','fim do M e os três Y','む'],['ら・わ・ん','linha R, W e o ん','ら']];
const KNAMK=[['ア・カ','vogais e o começo do K','ア'],['カ・サ','fim do K, começo do S','キ'],
 ['サ・タ','fim do S, começo do T','ス'],['タ・ナ','fim do T, começo do N','チ'],
 ['ナ・ハ','fim do N, começo do H','ヌ'],['ハ・マ','fim do H, começo do M','ヒ'],
 ['マ・ヤ','fim do M e os três Y','ム'],['ラ・ワ・ン','linha R, W e o ン','ラ']];
const HCOL=['#E8574A','#EA6438','#EC7228','#E08A20','#C9A227','#A8B024','#8FA827','#6FA82E'];
const KCOL=['#3B79E0','#4A6FE4','#5B6FE8','#6A62E4','#7A55E0','#8A4FDC','#9B4AD6','#AC46CE'];
const KUNITS=[].concat(
  KSEG.map((r,i)=>({t:KNAM[i][0],s:KNAM[i][1],g:KNAM[i][2],col:HCOL[i],sc:'h',rows:r})),
  [{t:'Dakuten ゛',s:'が ざ — as aspinhas',g:'゛',col:'#3FB55F',sc:'h',cnc:'dak',pick:'dak1'},
   {t:'Dakuten ゛ II',s:'だ ば — continuando',g:'ば',col:'#2FAE72',sc:'h',cnc:'dak',pick:'dak1b'},
   {t:'Handakuten ゜',s:'ぱ ぴ ぷ ぺ ぽ',g:'゜',col:'#22A88A',sc:'h',cnc:'han',pick:'dak2'},
   {t:'Yōon ゃゅょ',s:'きゃ きゅ きょ e o っ',g:'ゅ',col:'#1F9BC4',sc:'h',cnc:'yoon',pick:'yoon'},
   {t:'Yōon II',s:'ちゃ じゃ e companhia',g:'ょ',col:'#1B8FCC',sc:'h',pick:'yoon2'}],
  KSEG.map((r,i)=>({t:KNAMK[i][0],s:KNAMK[i][1],g:KNAMK[i][2],col:KCOL[i],sc:'k',rows:r})),
  [{t:'Katakana ゛',s:'ガ ザ ダ バ',g:'ガ',col:'#C245C0',sc:'k',cnc:'kdak',pick:'kdak'},
   {t:'Katakana ゜ ー',s:'パ e a vogal longa',g:'ー',col:'#D6476F',sc:'k',pick:'kdak2'},
   {t:'Os Traiçoeiros',s:'シ ツ ソ ン e os parecidos',g:'ツ',col:'#CE3F84',sc:'k',pick:'trick'},
   {t:'Palavras',s:'juntando tudo que você viu',g:'語',col:'#B8367E',sc:'m',cnc:'final',pick:'mix'}]
);
function kanaUnits(){
  return KUNITS.map(u=>{
    let ks=[];
    if(u.rows){
      const list=kFind(u.sc,'base');
      ks=list.slice(u.rows[0],u.rows[1]).map(x=>x.i);
    }else{
      const pk={
        dak1 :['h','dak',/^(ga|gi|gu|ge|go|za)$/],
        dak1b:['h','dak',/^(ji|zu|ze|zo|da|do)$/],
        dak2 :['h','han',/^(pa|pi|pu|pe|po)$/],
        yoon :['h','yoon',/^(kya|kyu|kyo|sha|shu|sho)$/],
        yoon2:['h','yoon',/^(cha|chu|cho|ja|ju|jo)$/],
        kdak :['k','dak',/^(ga|gi|gu|ge|go|za)$/],
        kdak2:['k','han',/^(pa|pi|pu|pe|po)$/],
        trick:['k','base',/^(shi|tsu|so|n|nu|me)$/],
        mix  :['h','base',/^(nu|ne|ru|ro|wa|re)$/]   // os parecidos do hiragana
      }[u.pick];
      if(pk)ks=kFind(pk[0],pk[1]).filter(x=>pk[2].test(x.r)).slice(0,6).map(x=>x.i);
    }
    return {t:u.t,s:u.s,g:u.g,col:u.col,k:ks,cnc:u.cnc,sc:u.sc};
  });
}

/* ── páginas de conceito ── */
const CNC={
dak:{t:'As aspinhas ゛(dakuten)',b:()=>`
  <div class="cnc"><h4>A regra</h4>
  <p>Duas aspinhas no canto superior direito <b>engrossam o som</b> da sílaba. É o mesmo desenho de sempre, só com o acréscimo.</p>
  <p>O <b>k</b> vira <b>g</b>, o <b>s</b> vira <b>z</b>, o <b>t</b> vira <b>d</b> e o <b>h</b> vira <b>b</b>.</p></div>
  <div class="demo"><div class="di"><div class="dk jp">か</div><div class="dr">ka</div></div>
    <div class="dop">+ ゛=</div><div class="di hl"><div class="dk jp">が</div><div class="dr">ga</div></div></div>
  <div class="mini-t">${['か|が|ga','き|ぎ|gi','く|ぐ|gu','け|げ|ge','こ|ご|go','さ|ざ|za','し|じ|ji','す|ず|zu','せ|ぜ|ze','そ|ぞ|zo']
    .map(x=>{const[a,b,r]=x.split('|');return `<div class="mc"><b>${b}</b><small>${r}</small></div>`;}).join('')}</div>
  <div class="cnc"><h4>Atenção</h4>
  <p>し (shi) + ゛ vira <b>じ (ji)</b>, não "zi". E ち (chi) + ゛ vira <b>ぢ</b>, que também soa "ji" mas é raríssimo — na prática você só usa じ.</p></div>`},
han:{t:'A bolinha ゜(handakuten)',b:()=>`
  <div class="cnc"><h4>Só na linha H</h4>
  <p>Uma bolinha pequena transforma o <b>h</b> em <b>p</b>. Ela só existe em は ひ ふ へ ほ.</p>
  <p>Então a linha H tem <b>três versões</b>: normal (ha), com aspas (ba) e com bolinha (pa).</p></div>
  <div class="demo"><div class="di"><div class="dk jp">は</div><div class="dr">ha</div></div>
    <div class="dop">→</div><div class="di"><div class="dk jp">ば</div><div class="dr">ba</div></div>
    <div class="dop">→</div><div class="di hl"><div class="dk jp">ぱ</div><div class="dr">pa</div></div></div>
  <div class="mini-t">${['ぱ|pa','ぴ|pi','ぷ|pu','ぺ|pe','ぽ|po'].map(x=>{const[a,r]=x.split('|');
    return `<div class="mc"><b>${a}</b><small>${r}</small></div>`;}).join('')}</div>`},
yoon:{t:'Os pequenininhos ゃ ゅ ょ',b:()=>`
  <div class="cnc"><h4>Por que existem</h4>
  <p>Quando você escreve <b>や</b> em tamanho normal, é uma sílaba inteira: <i>ki-ya</i>, dois tempos.</p>
  <p>Escrito <b>pequeno</b> (ゃ), ele gruda na sílaba anterior e os dois viram <b>um tempo só</b>: <i>kya</i>.</p>
  <p>Isso só acontece depois das sílabas terminadas em <b>-i</b>: き し ち に ひ み り ぎ じ び ぴ.</p></div>
  <div class="demo"><div class="di"><div class="dk jp">きや</div><div class="dr">ki-ya · 2 tempos</div></div>
    <div class="dop">≠</div><div class="di hl"><div class="dk jp">きゃ</div><div class="dr">kya · 1 tempo</div></div></div>
  <div class="mini-t">${['きゃ|kya','きゅ|kyu','きょ|kyo','しゃ|sha','しゅ|shu','しょ|sho','ちゃ|cha','ちゅ|chu','ちょ|cho','じゃ|ja','じゅ|ju','じょ|jo']
    .map(x=>{const[a,r]=x.split('|');return `<div class="mc"><b>${a}</b><small>${r}</small></div>`;}).join('')}</div>
  <div class="cnc"><h4>O っ pequeno (sokuon)</h4>
  <p>Um <b>つ pequenininho</b> não se lê. Ele <b>dobra a consoante</b> seguinte e cria uma pausa curta.</p>
  <p><span class="jp">きて</span> (kite, venha) vira <span class="jp">きって</span> (ki<b>tt</b>e, selo). Segure um tempinho antes do "te".</p></div>
  <div class="demo"><div class="di"><div class="dk jp">きて</div><div class="dr">kite</div></div>
    <div class="dop">vs</div><div class="di hl"><div class="dk jp">きって</div><div class="dr">ki·t·te</div></div></div>`},
kdak:{t:'Katakana: aspas e o traço ー',b:()=>`
  <div class="cnc"><h4>Mesmas regras</h4>
  <p>Aspas ゛ e bolinha ゜ funcionam <b>igualzinho</b> no katakana: カ→ガ, ハ→バ→パ.</p></div>
  <div class="demo"><div class="di"><div class="dk jp">カ</div><div class="dr">ka</div></div>
    <div class="dop">+ ゛=</div><div class="di hl"><div class="dk jp">ガ</div><div class="dr">ga</div></div></div>
  <div class="cnc"><h4>O traço longo ー</h4>
  <p>Exclusivo do katakana: um <b>traço deitado</b> estica a vogal anterior.</p>
  <p><span class="jp">コヒ</span> seria "kohi". Com o traço, <span class="jp">コーヒー</span> vira <b>kōhī</b> — que é "coffee".</p>
  <p>Como o katakana escreve palavras estrangeiras, esse traço aparece o tempo todo.</p></div>
  <div class="demo"><div class="di"><div class="dk jp">ビル</div><div class="dr">biru · prédio</div></div>
    <div class="dop">vs</div><div class="di hl"><div class="dk jp">ビール</div><div class="dr">bīru · cerveja</div></div></div>
  <div class="cnc"><h4>Os quatro traiçoeiros</h4>
  <p><b>シ (shi)</b> e <b>ツ (tsu)</b>: no シ os traços são quase deitados e o gancho sobe de baixo. No ツ eles são verticais e o gancho desce de cima.</p>
  <p><b>ソ (so)</b> e <b>ン (n)</b>: mesma lógica. O ン tem o traço mais deitado.</p></div>
  <div class="demo"><div class="di"><div class="dk jp">シ</div><div class="dr">shi</div></div>
    <div class="dop">/</div><div class="di"><div class="dk jp">ツ</div><div class="dr">tsu</div></div>
    <div class="dop">·</div><div class="di"><div class="dk jp">ソ</div><div class="dr">so</div></div>
    <div class="dop">/</div><div class="di"><div class="dk jp">ン</div><div class="dr">n</div></div></div>`},
final:{t:'Você fechou os dois silabários',b:()=>`
  <div class="cnc"><h4>O que vem agora</h4>
  <p>Com hiragana e katakana você já <b>lê qualquer coisa em japonês</b> — mesmo sem entender.</p>
  <p>Nesta última unidade é só formar palavras, misturando os dois silabários.</p>
  <p>Depois, vá para a trilha de <b>kanji N5</b>: agora todas as leituras vão fazer sentido.</p></div>`}
};

/* ── renderizadores de sessão ── */
function kteach(k){
  const other=k.pair?KANA_LIST.find(x=>x.c===k.pair):null;
  const ws=KWORDS.filter(w=>w.w.includes(k.c)).slice(0,3);
  return `<div class="kbig"><b class="jp">${k.c}</b></div>
    <div class="krom">${k.r}<span>${k.sc==='h'?'hiragana':'katakana'}${k.type==='dak'?' · com ゛':k.type==='han'?' · com ゜':k.type==='yoon'?' · sílaba dupla':''}</span></div>
    <div class="info-row" style="justify-content:center">
      ${k.s?`<span class="chip">${k.s} traços</span>`:''}
      <span class="chip ${k.sc==='h'?'s':'on'}">${k.sc==='h'?'ひらがな':'カタカナ'}</span>
      ${canSay()?'':''}</div>
    <div class="story"><h4>Pra não esquecer</h4><p>${k.sty}</p></div>
    ${other?`<div class="sec-t"><span>O par nos dois silabários</span></div>
      <div class="kpair">
        <div class="kpc ${k.sc==='h'?'now':''}"><b class="jp">${k.sc==='h'?k.c:other.c}</b><small>hiragana</small></div>
        <div class="kpc ${k.sc==='k'?'now':''}"><b class="jp">${k.sc==='k'?k.c:other.c}</b><small>katakana</small></div>
      </div>
      <p style="text-align:center;font-size:11.5px;color:var(--txt3);margin-top:6px">
        Mesmo som <b style="color:var(--txt2)">${k.r}</b>, desenhos diferentes.</p>`:''}
    ${ws.length?`<div class="sec-t"><span>Aparece em</span></div>
      ${ws.map(w=>`<div class="word"><span class="ww jp">${w.w}</span>
        <div class="wi"><b>${esc(w.m)}</b><small>${w.r}${w.n?' · '+w.n:''}</small></div>
        ${canSay()?`<button class="spk" data-s="${w.w}">${svg(IC.vol,2.2)}</button>`:''}</div>`).join('')}`:''}`;
}
function rKTeach(b,it){
  const k=it.k;
  b.innerHTML=`<div class="q-label">Kana novo</div>`+kteach(k);
  wire(b);seed(k.c);SS.seen.add(k.c);
  if(k.s&&k.type!=='yoon'){
    b.appendChild(el('div','sec-t','<span>Experimente traçar</span>'));
    const h=el('div');b.appendChild(h);pad(h,k,{free:true,size:230});
  }
  const c=el('button','btn btn-p','ENTENDI');c.style.marginTop='16px';
  c.onclick=()=>{sTap();next();};b.appendChild(c);
  if(canSay())setTimeout(()=>say(k.c),280);
}
function rKInfo(b,it){
  const C=CNC[it.cnc];
  b.innerHTML=`<div class="q-label">Como funciona</div><div class="q-title">${C.t}</div>`+C.b();
  const c=el('button','btn btn-p','ENTENDI');c.style.marginTop='14px';
  c.onclick=()=>{sTap();next();};b.appendChild(c);
}
/* formar palavra */
function rKWord(b,it){
  const w=it.w,chars=[...w.w];
  b.innerHTML=`<div class="q-label">Formar palavra</div>
    <div class="wq"><div class="wrom">${w.r}</div><div class="wmn">${esc(w.m)}</div>
    ${w.n?`<div class="wkj jp">${w.n}</div>`:''}</div>`;
  const slots=el('div','slots');
  const bank=el('div','bank');
  const hint=el('div','whint','Toque nos kana na ordem certa');
  const sm=c=>/[ゃゅょっャュョッァィゥェォ]/.test(c);
  let put=[],revealed=false;
  const paint=()=>{
    slots.innerHTML='';slots.className='slots'+(put.length===chars.length?' full':'');
    for(let i=0;i<chars.length;i++){
      const c=put[i];
      const s=el('div','slot'+(c?' f':'')+(c&&sm(c)?' sm':''),c?`<span class="jp">${c}</span>`:'');
      if(c)s.onclick=()=>{put.splice(i,1);sTap();paint();};
      slots.appendChild(s);
    }
    [...bank.children].forEach(t=>{
      const n=put.filter(x=>x===t.dataset.c).length;
      t.classList.toggle('used',n>=(+t.dataset.n));
    });
    chk.disabled=put.length!==chars.length;
  };
  const pool=[...new Set(chars)].map(c=>({c,n:chars.filter(x=>x===c).length}));
  let extra;
  if(it.kj){
    /* peças falsas: kanji da unidade + kana comuns em palavras */
    const uk=(it.pool||[]).map(x=>x.c).filter(c=>!chars.includes(c));
    const kn='おさんいうくるたにをのりまし'.split('').filter(c=>!chars.includes(c));
    extra=shuffle(uk).slice(0,3).concat(shuffle(kn).slice(0,3)).map(c=>({c,n:1}));
  }else{
    extra=shuffle(KANA_LIST.filter(k=>k.sc===(/[\u30a0-\u30ff]/.test(w.w)?'k':'h')&&!chars.includes(k.c)&&k.type!=='yoon'))
      .slice(0,clamp(7-pool.length,2,4)).map(k=>({c:k.c,n:1}));
  }
  shuffle([...pool,...extra]).forEach(o=>{
    const t=el('button','tile'+(sm(o.c)?' sm':''),`<span class="jp">${o.c}</span>`);
    t.dataset.c=o.c;t.dataset.n=o.n;
    t.onclick=()=>{if(put.length>=chars.length)return;put.push(o.c);sTick(put.length);paint();};
    bank.appendChild(t);
  });
  b.appendChild(slots);b.appendChild(hint);b.appendChild(bank);
  const chk=el('button','btn btn-p','CONFERIR');chk.style.marginTop='10px';chk.disabled=true;
  chk.onclick=()=>{
    const ok=put.join('')===w.w;
    slots.className='slots '+(revealed?'':ok?'ok':'no');
    chk.disabled=true;[...bank.children].forEach(t=>t.classList.add('used'));
    if(revealed){                       // revelou: só estuda, não pontua nem tira vida
      chars.forEach(c=>{if(BY[c])touch(c,false);});
      sv();coTrack();kwordFB(w,'',false,true);return;
    }
    if(ok){SS.ok++;SS.run++;SS.best=Math.max(SS.best,SS.run);SS.xp+=15;sOk();}
    else{SS.ko++;SS.run=0;loseHp();sNo();}
    chars.forEach(c=>{if(BY[c])touch(c,ok);});
    sv();coTrack();kwordFB(w,put.join(''),ok);
  };
  b.appendChild(chk);
  const sk=el('button','tool','Não sei — revelar');
  sk.style.cssText='margin:11px auto 0;display:flex';
  sk.onclick=()=>{
    if(revealed)return;
    revealed=true;put=chars.slice();paint();
    sk.textContent='resposta revelada';sk.classList.add('on');
    chk.disabled=false;chk.textContent='CONTINUAR';
  };
  b.appendChild(sk);
  paint();
  if(canSay())setTimeout(()=>say(w.w),300);
}
function kwordFB(w,got,ok,rev){
  const f=$('#fb'),I=$('#fbIn'),B=$('#fbBtn');
  f.className=rev?'nu':ok?'ok':'no';
  const chars=[...w.w];
  const romOf=c=>{
    const k=KANA_LIST.find(x=>x.c===c);if(k)return k.r;
    if(c==='っ'||c==='ッ')return '(dobra)';
    if(c==='ー')return '(longo)';
    const kj=(typeof REG!=='undefined'&&REG[c])||BY[c];
    return kj?(kj.m&&kj.m[0]?kj.m[0]:kj.qr||'kanji'):'?';
  };
  I.innerHTML=`<div class="fb-h"><div class="fb-ic">${svg(rev?IC.eye:ok?IC.check:IC.x,3.4)}</div>
    <div><div class="fb-t">${rev?'Olha como é':ok?pick(YAY):'Quase!'}</div>
    <div class="fb-s">${rev?'Sem perda de vida — essa palavra volta depois':ok?'+15 XP':'A ordem certa está aqui embaixo'}</div></div></div>
    ${!ok&&got?`<div class="fb-you"><span class="bk jp">${got}</span>
      <div class="ti">Você montou <b class="jp">${got}</b>, que se lê <b>${[...got].map(romOf).join('')}</b>.</div></div>`:''}
    <div class="fb-main">
      <div class="fb-lead"><span class="bk jp" style="font-size:36px">${w.w}</span>
        <div class="li"><b>${esc(w.m)}</b><small>${w.r}${w.n?' · '+w.n:''}</small></div>
        ${canSay()?`<button class="spk" data-s="${w.w}">${svg(IC.vol,2.2)}</button>`:''}</div>
      <div class="wbrk">${chars.map(c=>{
        const sp=/[ゃゅょャュョ]/.test(c)?'pequeno':/[っッ]/.test(c)?'dobra':c==='ー'?'longo':'';
        return `<div class="wbk${sp?' sp':''}"><b class="jp">${c}</b><small>${sp||romOf(c)}</small></div>`;}).join('')}</div>
    </div>
    <button class="exp-btn" id="eB">${svg(IC.bulb,2.3)} Detalhar ${svg(IC.chev,2.6).replace('<svg','<svg class="chev"')}</button>
    <div class="exp-body" id="eBd">
      <div class="exp-sec"><h5>Letra por letra</h5>
      ${chars.map((c,i)=>{
        const k=KANA_LIST.find(x=>x.c===c);
        const kj=!k&&((typeof REG!=='undefined'&&REG[c])||BY[c]);
        const sp=/[ゃゅょャュョ]/.test(c)?`<b>pequenininho</b> — gruda no kana anterior e forma uma sílaba só`
          :/[っッ]/.test(c)?`<b>っ pequeno</b> — não tem som, dobra a consoante seguinte`
          :c==='ー'?`<b>traço longo</b> — estica a vogal anterior`
          :k?`lê-se <b>${k.r}</b>${k.type==='dak'?' (com as aspinhas ゛)':k.type==='han'?' (com a bolinha ゜)':''}`
          :kj?`kanji de <b>${esc(kj.m[0])}</b> <em>(${kj.qr||''})</em>`:'';
        return `<p><span class="jp" style="font-size:20px">${c}</span> &nbsp;${sp}</p>`;}).join('')}
      <p style="margin-top:9px">Juntando tudo: <b>${w.r}</b>, que quer dizer <b>${esc(w.m)}</b>.</p></div>
      ${w.n?`<div class="exp-sec"><h5>${rev===undefined&&/[\u4e00-\u9faf]/.test(w.w)?'O kanji desta palavra':'Curiosidade'}</h5>
        ${/[\u4e00-\u9faf]/.test(w.w)
          ?`<p>Esta palavra usa <span class="jp" style="font-size:22px">${w.n}</span>, o kanji da unidade.
             As sílabas em volta (お, さん, る…) são <b>okurigana</b> e partículas — escritas em hiragana.</p>
             <p>Repare que <b>o kanji carrega o sentido</b> e o kana ajusta a gramática. É assim que quase todo
             japonês escrito funciona.</p>`
          :`<p>Em japonês de verdade, essa palavra costuma aparecer como <span class="jp" style="font-size:19px">${w.n}</span>.
             ${/[\u4e00-\u9faf]/.test(w.n)?'Os kanji deixam a leitura mais rápida, mas o som é exatamente o que você montou.'
               :'Veio do estrangeiro, por isso se escreve em katakana.'}</p>`}</div>`:''}
    </div>`;
  const e=I.querySelector('#eB');
  if(e)e.onclick=()=>{const d=I.querySelector('#eBd');e.classList.toggle('open',d.classList.toggle('show'));};
  try{wire(I);}catch(err){}
  B.className='btn '+(rev?'btn-k':ok?'btn-g':'btn-r');B.textContent='CONTINUAR';
  B.onclick=()=>{sTap();
    if(rev&&SS&&SS.q.length<90)SS.q.splice(Math.min(SS.q.length,SS.i+4),0,{t:'kword',w});
    next();};
  f.classList.add('up');requestAnimationFrame(()=>f.classList.add('up'));
}
/* geradores */
function mkKQ(k,mode,pool){
  pool=pool&&pool.length>3?pool:KANA_LIST;
  const same=pool.filter(x=>x!==k&&x.sc===k.sc);
  const ds=shuffle(same.length>3?same:pool.filter(x=>x!==k)).slice(0,6);
  let opts=[],prompt='';
  if(mode==='k2r'){
    prompt='Como se lê este kana?';
    opts=[{k,label:k.r}];const u=new Set([k.r]);
    for(const d of ds){if(opts.length>=4)break;if(!u.has(d.r)){u.add(d.r);opts.push({k:d,label:d.r});}}
  }else if(mode==='r2k'){
    prompt=`Qual kana se lê <em>“${k.r}”</em>?`;
    opts=[{k,label:k.c}];
    for(const d of ds){if(opts.length>=4)break;if(d.r!==k.r)opts.push({k:d,label:d.c});}
  }else if(mode==='pair'){
    const isH=k.sc==='h';
    prompt=`Qual é o <em>${isH?'katakana':'hiragana'}</em> de <span class="jp" style="font-size:26px">${k.c}</span>?`;
    const tgt=KANA_LIST.find(x=>x.c===k.pair)||k;
    opts=[{k:tgt,label:tgt.c}];
    for(const d of shuffle(kFind(isH?'k':'h','base')).slice(0,8)){
      if(opts.length>=4)break;if(d.r!==k.r)opts.push({k:d,label:d.c});}
    const o=shuffle(opts.slice(0,4));
    return{t:'kq',mode,k,opts:o,ans:o.findIndex(x=>x.k===tgt),prompt,pool};
  }else if(mode==='aud'){
    prompt='Ouça e escolha o kana';
    opts=[{k,label:k.c}];
    for(const d of ds){if(opts.length>=4)break;if(d.r!==k.r)opts.push({k:d,label:d.c});}
  }
  while(opts.length<4){const d=pick(KANA_LIST);
    const l=mode==='k2r'?d.r:d.c;
    if(!opts.some(o=>o.label===l))opts.push({k:d,label:l});}
  opts=shuffle(opts.slice(0,4));
  return{t:'kq',mode,k,opts,ans:opts.findIndex(o=>o.k===k),prompt,pool};
}
function rKQ(b,it){
  const k=it.k,m=it.mode;
  const L={k2r:'Leitura',r2k:'Som para kana',pair:'Hiragana ↔ Katakana',aud:'Escuta'}[m];
  b.innerHTML=`<div class="q-label">${L}</div><div class="q-title">${it.prompt}</div>`;
  if(m==='k2r'){
    b.appendChild(el('div','kbig',`<b class="jp">${k.c}</b>`));
    if(canSay()){const s=el('button','tool',svg(IC.vol,2.2)+' Ouvir');
      s.style.cssText='margin:0 auto 13px;display:flex';s.onclick=()=>say(k.c);b.appendChild(s);}
  }
  if(m==='aud'){
    const bx=el('div','kbig');bx.innerHTML=`<button class="mic" id="pl">${svg(IC.vol,2.2)}</button>`;
    b.appendChild(bx);bx.querySelector('#pl').onclick=()=>say(k.c);
    setTimeout(()=>say(k.c),400);
  }
  const isK=(m!=='k2r');
  const o=el('div','opts'+(isK?' two':''));
  it.opts.forEach((x,i)=>{
    const btn=el('button','opt'+(isK?' kanji':''));
    btn.innerHTML=`<div class="opt-l">${LET[i]}</div>`+
      (isK?`<div class="kj jp" style="font-size:42px">${x.label}</div>`
        :`<div class="opt-c"><b style="font-size:19px;letter-spacing:.04em">${esc(x.label)}</b></div>`);
    btn.onclick=()=>ans(it,i,o);o.appendChild(btn);
  });
  b.appendChild(o);
}
/* trilha de kana */
const KNODES=[
 {t:'klearn',ic:G.book,l:'Aprender',d:n=>`Aprender ${n} kana`},
 {t:'kdrill',ic:G.target,l:'Treinar',d:n=>`Treinar os ${n}`},
 {t:'kword',ic:G.chars,l:'Palavras',d:()=>'Formar palavras'},
 {t:'kwrite',ic:G.brush,l:'Escrever',d:n=>`Escrever os ${n}`},
 {t:'kboss',ic:G.trophy,l:'Prova',d:()=>'Prova da unidade'}
];
function wordsFor(ui){
  const known=new Set();
  UNITS.slice(0,ui+1).forEach(u=>u.k.forEach(i=>{if(KANJI[i])known.add(KANJI[i].c);}));
  KANA_LIST.forEach(k=>{if(S.prog[k.c])known.add(k.c);});
  const okc=c=>known.has(c)||/[っッー]/.test(c);
  return KWORDS.filter(w=>w.u<=ui&&[...w.w].every(okc));
}
function startKNode(ui,ni,type){
  const u=UNITS[ui];
  if(!u)return toast('Unidade não encontrada');
  const ks=u.k.map(i=>KANJI[i]).filter(Boolean);
  if(!ks.length)return toast('Unidade vazia');
  const key=nkey(ui,ni);let q=[],title=`Unidade ${ui+1} · ${u.t}`;
  const ws=wordsFor(ui);
  if(type==='klearn'){
    if(u.cnc)q.push({t:'kinfo',cnc:u.cnc});
    const gr=[];for(let i=0;i<ks.length;i+=2)gr.push(ks.slice(i,i+2));
    gr.forEach((g,gi)=>{
      g.forEach(k=>q.push({t:'kteach',k}));
      g.forEach(k=>q.push(mkKQ(k,'k2r',ks)));
      shuffle(g).forEach(k=>q.push(mkKQ(k,'r2k',ks)));
      if(gi>0)shuffle(ks.slice(0,(gi+1)*2)).slice(0,2).forEach(k=>q.push(mkKQ(k,pick(['k2r','r2k']),ks)));
    });
    if(ks.length>=4)q.push({t:'match',pool:shuffle(ks).slice(0,4)});
  }
  else if(type==='kdrill'){
    shuffle(ks).forEach(k=>q.push(mkKQ(k,'k2r',ks)));
    shuffle(ks).forEach(k=>q.push(mkKQ(k,'r2k',ks)));
    if(canSay())shuffle(ks).slice(0,3).forEach(k=>q.push(mkKQ(k,'aud',ks)));
    if(ks[0]&&ks[0].pair)shuffle(ks).slice(0,3).forEach(k=>q.push(mkKQ(k,'pair',ks)));
    if(ks.length>=4)q.push({t:'match',pool:shuffle(ks).slice(0,4)});
  }
  else if(type==='kword'){
    const list=shuffle(ws).slice(0,8);
    if(!list.length){shuffle(ks).forEach(k=>q.push(mkKQ(k,'k2r',ks)));}
    else list.forEach((w,i)=>{q.push({t:'kword',w});
      if(i%3===2&&ks.length)q.push(mkKQ(pick(ks),'r2k',ks));});
  }
  else if(type==='kwrite'){
    const tr=ks.filter(k=>k.s>0&&k.type!=='yoon');
    if(!tr.length)shuffle(ks).forEach(k=>q.push(mkKQ(k,'r2k',ks)));
    else tr.slice(0,6).forEach(k=>q.push({t:'write',k}));
  }
  else if(type==='kboss'){
    const prev=[];UNITS.slice(0,ui).forEach(x=>x.k.forEach(i=>{if(KANJI[i])prev.push(KANJI[i]);}));
    const all=[...ks,...shuffle(prev).slice(0,5)];
    shuffle(all).forEach(k=>q.push(mkKQ(k,pick(['k2r','r2k','pair']),all)));
    shuffle(ws).slice(0,3).forEach(w=>q.push({t:'kword',w}));
    if(ks.length>=4)q.push({t:'match',pool:shuffle(ks).slice(0,4)});
  }
  ks.forEach(k=>seed(k.c));
  if(!q.length)q.push({t:'kinfo',cnc:'final'});
  open(q,{key,title});
}
/* tabela de consulta */
function kanaTable(sc){
  const rows=[['','a','i','u','e','o']];
  const L='|k|s|t|n|h|m|y|r|w'.split('|');
  const base=kFind(sc,'base');
  const grid=[];
  for(let r=0;r<10;r++){
    const lab=['あ','か','さ','た','な','は','ま','や','ら','わ'][r];
    const cells=[];
    for(let c=0;c<5;c++){
      const i=r*5+c;
      let k=base[i];
      if(r===7&&(c===1||c===3))k=null;
      if(r===9&&(c===1||c===2||c===3))k=null;
      cells.push(k||null);
    }
    grid.push([lab,cells]);
  }
  let h=`<div class="ktab"><div class="kh"></div>${['a','i','u','e','o'].map(x=>`<div class="kh">${x}</div>`).join('')}`;
  grid.forEach(([lab,cs],ri)=>{
    h+=`<div class="ktc rowl jp">${sc==='h'?lab:KB[ri*5]?KB[ri*5][1]:''}</div>`;
    cs.forEach(k=>{h+=k?`<div class="ktc${S.prog[k.c]?' done':''}"><b class="jp">${k.c}</b><small>${k.r}</small></div>`
      :'<div class="ktc void"></div>';});
  });
  h+='</div>';
  return h;
}

/* ══════════════════════════════════════════════════════════════
   TELA INICIAL · escolha de nível, variante e ponto de partida
   ══════════════════════════════════════════════════════════════ */
const KANA={
 h:{n:'Hiragana',jp:'ひらがな',d:'A base de tudo. Usado em palavras japonesas, partículas e terminações de verbo.',
    col:'#E8574A',ex:'あいうえお',
    rows:[['あ','a'],['い','i'],['う','u'],['え','e'],['お','o'],['か','ka'],['き','ki'],['く','ku'],['け','ke'],['こ','ko'],
      ['さ','sa'],['し','shi'],['す','su'],['せ','se'],['そ','so'],['た','ta'],['ち','chi'],['つ','tsu'],['て','te'],['と','to'],
      ['な','na'],['に','ni'],['ぬ','nu'],['ね','ne'],['の','no'],['は','ha'],['ひ','hi'],['ふ','fu'],['へ','he'],['ほ','ho'],
      ['ま','ma'],['み','mi'],['む','mu'],['め','me'],['も','mo'],['や','ya'],['',''],['ゆ','yu'],['',''],['よ','yo'],
      ['ら','ra'],['り','ri'],['る','ru'],['れ','re'],['ろ','ro'],['わ','wa'],['',''],['ん','n'],['',''],['を','wo']]},
 k:{n:'Katakana',jp:'カタカナ',d:'Para palavras estrangeiras, nomes e onomatopeias. Traços mais retos e angulares.',
    col:'#3B79E0',ex:'アイウエオ',
    rows:[['ア','a'],['イ','i'],['ウ','u'],['エ','e'],['オ','o'],['カ','ka'],['キ','ki'],['ク','ku'],['ケ','ke'],['コ','ko'],
      ['サ','sa'],['シ','shi'],['ス','su'],['セ','se'],['ソ','so'],['タ','ta'],['チ','chi'],['ツ','tsu'],['テ','te'],['ト','to'],
      ['ナ','na'],['ニ','ni'],['ヌ','nu'],['ネ','ne'],['ノ','no'],['ハ','ha'],['ヒ','hi'],['フ','fu'],['ヘ','he'],['ホ','ho'],
      ['マ','ma'],['ミ','mi'],['ム','mu'],['メ','me'],['モ','mo'],['ヤ','ya'],['',''],['ユ','yu'],['',''],['ヨ','yo'],
      ['ラ','ra'],['リ','ri'],['ル','ru'],['レ','re'],['ロ','ro'],['ワ','wa'],['',''],['ン','n'],['',''],['ヲ','wo']]}
};
const OB={step:0,course:null,unit:0,back:false};

function obBgFill(){
  const bg=$('#obBg');if(bg.dataset.f)return;bg.dataset.f='1';
  const chars='一二三日月火水木金土山川人大小上下口目手空花雨風道心力生学音字';
  let h='<div class="ob-glow" style="background:var(--shu);width:320px;height:320px;top:-90px;left:-80px"></div>'+
        '<div class="ob-glow" style="background:var(--ai);width:300px;height:300px;bottom:-70px;right:-70px;animation-delay:-4s"></div>';
  for(let i=0;i<16;i++){
    const c=chars[(Math.random()*chars.length)|0];
    h+=`<i style="left:${(Math.random()*96).toFixed(1)}%;font-size:${(22+Math.random()*54)|0}px;
      animation-duration:${(24+Math.random()*30).toFixed(0)}s;animation-delay:-${(Math.random()*40).toFixed(0)}s">${c}</i>`;
  }
  bg.innerHTML=h;
}
function obShow(){
  OB.step=0;OB.course=null;OB.unit=0;
  obBgFill();
  $('#onb').classList.add('on');
  document.body.style.overflow='hidden';
  obRender();
}
function obDone(){
  $('#onb').classList.remove('on');
  document.body.style.overflow='';
  S.onboarded=true;sv();
  tabs();render();
}
$('#obSkip').onclick=()=>{sTap();if(!S.course)S.course='core';build();obDone();toast('Você pode ajustar tudo no Perfil');};
/* o passo 2 (1º ano) só existe no N5 — todos os outros cursos pulam ele */
const obSkip2=()=>!(OB.course==='core'||OB.course==='full');
$('#obBack').onclick=()=>{sTap();OB.back=true;
  OB.step=(OB.step===3&&obSkip2())?1:Math.max(0,OB.step-1);obRender();};

function obRender(){
  const bk=$('#obBack'),sk=$('#obSkip'),dots=$('#obDots'),foot=$('#obFoot');
  bk.innerHTML=svg(IC.left,2.4);
  bk.classList.toggle('show',OB.step>0);
  sk.classList.toggle('show',OB.step>0);
  const sk2=obSkip2(),total=sk2?3:4,cur=(sk2&&OB.step===3)?2:OB.step;
  dots.innerHTML='';
  for(let i=0;i<total;i++)dots.appendChild(el('div','ob-dot'+(i===cur?' on':i<cur?' past':'')));
  const inn=$('#obIn');
  inn.className='ob-in'+(OB.back?' back':'');OB.back=false;
  inn.innerHTML='';foot.innerHTML='';
  [ob0,ob1,ob2,ob3][Math.min(OB.step,3)](inn,foot);
  $('.ob-body').scrollTop=0;
}

/* passo 0 · boas-vindas */
function ob0(v,foot){
  v.innerHTML=`<div class="ob-hero">
    <div class="ob-seal jp">道</div>
    <div class="ob-t">Bem-vindo ao<br><em>KanjiDō</em></div>
    <div class="ob-jp">かんじどう</div>
    <p class="ob-p">O caminho dos kanji, do zero até o N4 — com traçado de verdade, quizzes e revisão na hora certa.</p>
  </div>`;
  const f=el('div','ob-feat');
  [[G.brush,'Traçado conferido','Cada traço é checado: posição, direção e ordem'],
   [G.target,'Quiz que se adapta','Errou? A pergunta volta pouco depois'],
   [G.fire,'Revisão espaçada','O app te lembra pouco antes de você esquecer']
  ].forEach(([ic,t,s],i)=>{
    const r=el('div','ob-f',`<div class="fi">${ic()}</div><div><b>${t}</b><small>${s}</small></div>`);
    r.style.animationDelay=(120+i*90)+'ms';f.appendChild(r);});
  v.appendChild(f);
  const b=el('button','btn btn-p','COMEÇAR');
  b.onclick=()=>{sTap();OB.step=1;obRender();};
  foot.appendChild(b);
}

/* passo 1 · nível */
function ob1(v,foot){
  v.innerHTML=`<div class="ob-lbl">Passo 1</div>
    <div class="ob-step-t">Por onde você quer começar?</div>
    <div class="ob-step-s">Escolha o seu nível agora. Dá pra trocar quando quiser, e cada trilha guarda o próprio progresso.</div>`;
  const mk=(o,i)=>{
    const b=el('button','lvl'+(o.soon?' soon':''));
    b.style.animationDelay=(i*90)+'ms';
    if(!o.soon)b.style.background=o.bg;
    b.dataset.g=o.g;
    b.innerHTML=`<div class="lvl-top"><span class="lvl-badge">${o.badge}</span>
        <div class="lvl-go">${svg(o.soon?IC.lock:IC.arrow,2.3)}</div></div>
      <h3>${o.t}</h3><p>${o.p}</p>
      <div class="lvl-k">${o.k}</div>
      <div class="lvl-st">${o.st.map(x=>`<span>${x}</span>`).join('')}</div>`;
    b.onclick=o.fn;v.appendChild(b);
  };
  mk({g:'五',badge:'JLPT N5',t:'Nível N5',bg:'linear-gradient(140deg,#4E86EF,#2A4FA8)',
    p:'O começo de tudo. Números, família, tempo, direções e os verbos do dia a dia.',
    k:'日 月 母 父 時 分 東 西',st:['48 a 113 kanji','8 ou 19 unidades','iniciante'],
    fn:()=>{sTap();OB.course='core';OB.step=2;obRender();}},0);
  mk({g:'四',badge:'JLPT N4',t:'Nível N4',bg:'linear-gradient(140deg,#A054E0,#6A2CB0)',
    p:'O passo seguinte. Verbos compostos, adjetivos e o vocabulário do cotidiano adulto.',
    k:'悪 医 意 運 英 映 遠 屋',st:[N4ALL.length+' kanji',Math.ceil(N4ALL.length/6)+' unidades','intermediário'],
    fn:()=>{sTap();OB.course='n4';OB.step=3;obRender();}},1);
  mk({g:'三',badge:'JLPT N3',t:'Nível N3',bg:'linear-gradient(140deg,#2A9D8F,#166B62)',
    p:'A ponte para o japonês adulto: jornal, trabalho, política e sentimentos.',
    k:'政 議 連 部 相 定 実 関',st:[N3.length+' kanji',Math.ceil(N3.length/6)+' unidades','avançado'],
    fn:()=>{sTap();OB.course='n3';OB.step=3;obRender();}},2);
  mk({g:'二',badge:'JLPT N2',t:'Nível N2',bg:'linear-gradient(140deg,#C9683A,#8A3A18)',
    p:'Pré-avançado: política, economia, notícias e textos formais de trabalho.',
    k:'党 協 総 領 設 改 府 査',st:[N2.length+' kanji',Math.ceil(N2.length/6)+' unidades','pré-avançado'],
    fn:()=>{sTap();OB.course='n2';OB.step=3;obRender();}},3);
  mk({g:'一',badge:'JLPT N1',t:'Nível N1',bg:'linear-gradient(140deg,#9C3F6E,#5A1F4A)',
    p:'O topo do JLPT. Literatura, jornalismo denso e nuances de registro. Começando aos poucos.',
    k:'慈 謙 誉 魅 覆 慶 循 疎',st:[N1.length+' kanji',Math.ceil(N1.length/6)+' unidades','avançado'],
    fn:()=>{sTap();OB.course='n1';OB.step=3;obRender();}},4);
  mk({g:'あ',badge:'COMECE AQUI',t:'Hiragana e Katakana',bg:'linear-gradient(140deg,#E8574A,#B32718)',
    p:'Os dois silabários, do zero. Aspas ゛, os pequenininhos ゃゅょ e formação de palavras.',
    k:'あ い う え お ・ ア イ ウ',st:['~150 sinais','24 unidades','do absoluto zero'],
    fn:()=>{sTap();OB.course='kana';OB.step=3;obRender();}},5);
  const pv=el('button','tool','Ver as tabelas de kana');
  pv.style.cssText='margin:6px auto 0;display:flex';
  pv.onclick=()=>{sTap();obKana();};
  v.appendChild(pv);
}

/* painel de kana */
function obKana(){
  const box=$('#mBody');
  const prev=S.course;S.course='kana';build();
  const done=KANA_LIST.filter(k=>S.prog[k.c]).length;
  box.innerHTML=`<div class="mtop"><button class="icon-btn" id="mC">${svg(IC.x,2.5)}</button></div>
    <div style="text-align:center;margin-bottom:8px">
      <div class="jp" style="font-size:44px;font-weight:600;letter-spacing:4px">あ ア</div>
      <h2 style="font-size:21px;font-weight:900;letter-spacing:-.03em;margin-top:6px">Os dois silabários</h2>
      <p style="font-size:12.5px;color:var(--txt3);margin-top:4px;line-height:1.55;max-width:340px;margin:4px auto 0">
        ${done?`Você já viu <b style="color:var(--gr)">${done}</b> sinais — eles aparecem em verde.`
        :'Cada linha é uma consoante, cada coluna uma vogal. É só decorar a grade.'}</p></div>
    <div class="sec-t"><span>Hiragana · ひらがな</span></div>
    <p style="font-size:12px;color:var(--txt2);line-height:1.55;margin-bottom:11px">
      Palavras japonesas, partículas e terminações de verbo. Traços curvos e soltos.</p>
    ${kanaTable('h')}
    <div class="sec-t"><span>Katakana · カタカナ</span></div>
    <p style="font-size:12px;color:var(--txt2);line-height:1.55;margin-bottom:11px">
      Palavras estrangeiras, nomes e onomatopeias. Traços retos e angulares.</p>
    ${kanaTable('k')}
    <div class="sec-t"><span>Também entram no curso</span></div>`;
  const ex=el('div','');
  ex.innerHTML=`<div class="les-card" style="margin-bottom:7px;pointer-events:none">
      <div class="jp" style="font-size:26px;width:36px;text-align:center;flex:none">゛゜</div>
      <div class="les-info"><b>Dakuten e handakuten</b><small>か→が, は→ば→ぱ · 25 + 5 sinais</small></div></div>
    <div class="les-card" style="margin-bottom:7px;pointer-events:none">
      <div class="jp" style="font-size:26px;width:36px;text-align:center;flex:none">ゅ</div>
      <div class="les-info"><b>Yōon · os pequenininhos</b><small>きゃ きゅ きょ — duas letras, uma sílaba só</small></div></div>
    <div class="les-card" style="margin-bottom:7px;pointer-events:none">
      <div class="jp" style="font-size:26px;width:36px;text-align:center;flex:none">っ</div>
      <div class="les-info"><b>Sokuon · o つ pequeno</b><small>きて → きって · dobra a consoante</small></div></div>
    <div class="les-card" style="pointer-events:none">
      <div class="jp" style="font-size:26px;width:36px;text-align:center;flex:none">ー</div>
      <div class="les-info"><b>Vogal longa</b><small>ビル → ビール · só no katakana</small></div></div>`;
  box.appendChild(ex);
  S.course=prev;build();
  const btnK=el('button','btn btn-p','APRENDER OS KANA');
  btnK.style.marginTop='16px';
  btnK.onclick=()=>{closeM();
    if($('#onb').classList.contains('on')){OB.course='kana';OB.step=3;obRender();}
    else{S.course='kana';sv();build();toast('Trilha de kana ativada');go('learn');}};
  box.appendChild(btnK);
  $('#modal').classList.add('on');document.body.style.overflow='hidden';
  $('#mC').onclick=closeM;
}

/* passo 2 · variante do N5 */
function ob2(v,foot){
  v.innerHTML=`<div class="ob-lbl">Passo 2 · Nível N5</div>
    <div class="ob-step-t">Você já sabe os kanji do 1º ano?</div>
    <div class="ob-step-s">No Japão, as crianças aprendem 80 kanji na primeira série. Muita gente que estuda por conta já viu esses.</div>`;
  const opts=[
    {id:'core',t:'Já sei o básico',s:'Pula os kanji do 1º ano e vai direto pro que vem depois deles.',
     k:'父 母 兄 姉 弟 妹 友 私 会 社',tag:'48 kanji'},
    {id:'full',t:'Quero aprender tudo',s:'Inclui os 65 kanji do 1º ano que fazem parte do N5, do começo.',
     k:'一 二 三 日 月 山 川 人 大 小',tag:'113 kanji'}
  ];
  opts.forEach((o,i)=>{
    const b=el('button','opt2'+(OB.course===o.id?' sel':''));
    b.style.animationDelay=(i*90)+'ms';
    b.innerHTML=`<div class="rd"><i></i></div><div class="o2c"><b>${o.t}</b><small>${o.s}</small>
      <div class="o2k">${o.k}</div></div><span class="tag">${o.tag}</span>`;
    b.onclick=()=>{sTap();OB.course=o.id;
      [...v.querySelectorAll('.opt2')].forEach((x,j)=>x.classList.toggle('sel',j===i));};
    v.appendChild(b);
  });
  v.appendChild(el('div','uinfo',
    `<div class="uii">${svg(IC.bulb,2.2)}</div>
     <p>Os <b>80 kanji do 1º ano</b> incluem 一二三四五六七八九十, 日月火水木金土, 山川田, 人大小 e outros.
     Destes, <b>65 aparecem no N5</b> — são esses que a opção completa adiciona.</p>`));
  const b=el('button','btn btn-p','CONTINUAR');
  b.onclick=()=>{sTap();OB.step=3;obRender();};
  foot.appendChild(b);
}

/* passo 3 · unidade inicial */
function ob3(v,foot){
  const prev=S.course;
  S.course=OB.course;build();
  const list=UNITS.slice();
  S.course=prev;

  const C=COURSES[OB.course];
  v.innerHTML=`<div class="ob-lbl">Último passo · ${C.t}</div>
    <div class="ob-step-t">De onde você parte?</div>
    <div class="ob-step-s">Se já domina o começo, escolha a unidade em que quer entrar. Tudo que vem antes fica marcado como concluído.</div>`;

  const z=el('button','ustart');
  z.innerHTML=`<div class="usi">${G.sakura()}</div><div style="flex:1;min-width:0">
    <b>Começar do zero</b><small>Faço a trilha inteira, da unidade 1 até o fim</small></div>
    <div class="ug" style="border-color:var(--gr);background:${OB.unit===0?'var(--gr)':'transparent'};color:#fff">${OB.unit===0?TICK:''}</div>`;
  z.onclick=()=>{sTap();OB.unit=0;ob3paint(v);};
  v.appendChild(z);

  v.appendChild(el('div','usplit','<span>OU PULE PARA</span>'));

  const wrap=el('div','uwrap');
  list.forEach((u,i)=>{
    if(i===0)return;
    const ks=u.k.map(x=>KANJI[x]).filter(Boolean);
    const b=el('button','ucard'+(OB.unit===i?' sel':''));
    b.dataset.u=i;
    b.innerHTML=`<div class="un jp" style="background:${u.col}">${u.g}</div>
      <div class="uc"><b>${i+1}. ${u.t}</b><small>${u.s}</small>
      <div class="uk">${ks.map(k=>k.c).join(' ')}</div></div>
      <div class="ug">${TICK}</div>`;
    b.onclick=()=>{sTap();OB.unit=i;ob3paint(v);};
    wrap.appendChild(b);
  });
  v.appendChild(wrap);
  ob3paint(v);

  const sum=el('div','ob-sum');sum.id='obSum';
  foot.appendChild(sum);
  const b=el('button','btn btn-p','ENTRAR NA TRILHA');
  b.id='obGo';
  b.onclick=()=>{sTap();obFinish();};
  foot.appendChild(b);
  ob3sum(list);
}
function ob3paint(v){
  const z=v.querySelector('.ustart .ug');
  if(z){z.style.background=OB.unit===0?'var(--gr)':'transparent';z.innerHTML=OB.unit===0?TICK:'';}
  v.querySelectorAll('.ucard').forEach(c=>{
    const i=+c.dataset.u;
    c.classList.toggle('sel',i===OB.unit);
    c.classList.toggle('dim',OB.unit>0&&i<OB.unit);
  });
  const prev=S.course;S.course=OB.course;build();const l=UNITS.slice();S.course=prev;
  ob3sum(l);
}
function ob3sum(list){
  const s=$('#obSum');if(!s)return;
  const skipK=list.slice(0,OB.unit).reduce((a,u)=>a+u.k.length,0);
  s.innerHTML=OB.unit===0
    ? `<span style="width:17px;height:17px;flex:none;color:var(--gr)">${G.sakura()}</span>
       Começando pela <b>unidade 1</b>`
    : `<span style="width:17px;height:17px;flex:none;color:var(--kin)">${G.bolt()}</span>
       Entrando na <b>unidade ${OB.unit+1}</b><span class="osk">${skipK} kanji liberados</span>`;
}
/* ordem das trilhas, do começo ao fim */
const ORDER=['kana','core','full','n4','n3','n2','n1','joyo'];
const PRE={kana:'ku',core:'u',full:'fu',n4:'nu',n3:'tu',n2:'du',n1:'pu',joyo:'jou'};
/* apaga as etapas de um curso (usado ao refazer a escolha) */
function wipeCourse(id){
  const p=PRE[id];
  Object.keys(S.nodes||{}).forEach(k=>{
    const mine=(id==='core')?/^u\d/.test(k):k.startsWith(p);
    if(mine)delete S.nodes[k];
  });
}
/* marca um curso inteiro (ou até certa unidade) como concluído */
function fillCourse(id,upTo){
  const prev=S.course;S.course=id;build();
  const lim=(upTo==null)?UNITS.length:upTo;
  let n=0;
  for(let u=0;u<lim&&u<UNITS.length;u++){
    nodeList().forEach((_,ni)=>{
      const k=nkey(u,ni);
      if(!S.nodes[k]){S.nodes[k]={stars:2,at:Date.now(),skip:true};n++;}
    });
    (UNITS[u]||{k:[]}).k.forEach(i=>{if(KANJI[i])seed(KANJI[i].c);});
  }
  S.course=prev;build();
  return n;
}
function obFinish(){
  const tgt=OB.course;
  const pos=Math.max(0,ORDER.indexOf(tgt));
  let n=0;
  /* 1. a trilha escolhida E TODAS AS SEGUINTES são zeradas.
        Escolher "começo do N5" precisa apagar N4, N3, N2 e N1. */
  ORDER.slice(pos).forEach(wipeCourse);
  /* 2. tudo que vem ANTES fica concluído (no N3 você já sabe kana e N5) */
  ORDER.slice(0,pos).forEach(id=>{n+=fillCourse(id);});
  /* 3. na trilha escolhida, libera só até a unidade marcada */
  n+=fillCourse(tgt,OB.unit);
  S.course=tgt;build();
  sv();sbPush();
  for(const x in _wc)delete _wc[x];
  obDone();
  if(n>0){sWin();toast(n+' etapas liberadas — bons estudos!');}
  else toast('Boa jornada! 頑張って');
}

/* ══════════════ BOOT ══════════════ */
addEventListener('error',e=>{
  console.error(e.message);
  if(SS&&!$('#fb').classList.contains('up'))escapeFB(false);
});
addEventListener('DOMContentLoaded',async()=>{
  await loadJoyo();
  build();                    // agora sim: todas as listas já existem
  theme();initTTS();tabs();render();sbBoot();
  if(!S.onboarded)obShow();
  try{if(document.fonts&&document.fonts.load){
    await Promise.race([Promise.all([
      document.fonts.load('500 100px "Zen Kaku Gothic New"','漢字道'),
      document.fonts.load('700 20px "Inter"','Aa')]),new Promise(r=>setTimeout(r,2500))]);
    render();}}catch(e){}
  // pré-carrega os traços da unidade atual em segundo plano
  try{
    const f=flat(),c=curIdx();
    if(c<f.length&&UNITS[f[c].ui]){
      UNITS[f[c].ui].k.forEach((i,n)=>{
        const k=KANJI[i];if(!k||!k.s)return;
        setTimeout(()=>strokesOf(k.c).catch(()=>{}),400+n*260);});
    }
  }catch(e){}
});
addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if($('#modal').classList.contains('on'))closeM();
    else if(SS&&$('#fb').classList.contains('up'))$('#fbBtn').click();
  }
  if(SS&&$('#fb').classList.contains('up')&&(e.key==='Enter'||e.key===' ')){e.preventDefault();$('#fbBtn').click();}
  if(SS&&!$('#fb').classList.contains('up')&&/^[1-4]$/.test(e.key)){
    const o=document.querySelectorAll('#sBody .opt');if(o[+e.key-1])o[+e.key-1].click();}
});


/* ══════════ v48 · conteúdo para as telas que pareciam vazias ══════════
   Envolve as telas existentes (vLearn, vRev, vLib, vDraw, vSocial) e acrescenta cartões com dados reais do usuário. */
(function fillEmpty(){
  const T=(pt,en)=>lang()==='en'?en:pt;
  const GOAL=30;                                   // meta diária de XP
  const todayXp=()=>(S.days&&S.days[dk(new Date())])||0;
  const dayN=()=>Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/DAY);
  const wdNames=()=>lang()==='en'?['S','M','T','W','T','F','S']:['D','S','T','Q','Q','S','S'];

  function kotdCard(){
    const pool=KANJI.filter(k=>k&&k.c);if(!pool.length)return null;
    const k=pool[(dayN()*7919)%pool.length];
    const c=el('button','card kdc');
    c.innerHTML='<div class="kdc-g jp" lang="ja">'+esc(k.c)+'</div><div class="kdc-t"><small>'+T('KANJI DO DIA','KANJI OF THE DAY')+'</small><b>'+esc(k.m2||'')+'</b><span>'+T('Toque para ver leituras, traços e exemplos','Tap for readings, strokes and examples')+'</span></div><i class="kdc-go">›</i>';
    c.onclick=()=>{sTap();detail(k);};return c;}

  function weekCard(){
    const n=new Date(),xp=todayXp(),pct=Math.min(100,Math.round(xp/GOAL*100)),nm=wdNames();
    let days='';
    for(let i=6;i>=0;i--){const d=new Date(n.getFullYear(),n.getMonth(),n.getDate()-i),v=(S.days&&S.days[dk(d)])||0;
      days+='<div class="wd'+(v>0?' on':'')+(i===0?' today':'')+'"><span>'+nm[d.getDay()]+'</span><i>'+(v>0?'✓':'')+'</i></div>';}
    const c=el('div','card wk');
    c.innerHTML='<div class="wk-h"><div><small>'+T('HOJE','TODAY')+'</small><b>'+(pct>=100?T('Meta batida!','Goal reached!'):T('Meta diária','Daily goal'))+'</b></div><div class="wk-s">'+G.fire()+'<b>'+(S.streak||0)+'</b></div></div>'
      +'<div class="goal"><i style="width:'+pct+'%"></i></div><div class="wk-xp">'+xp+' / '+GOAL+' XP</div><div class="wd-row">'+days+'</div>';
    return c;}

  function forecastCard(){
    const n=new Date(),t0=new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime(),cnt=Array(7).fill(0),nm=wdNames();
    learned().forEach(k=>{const i=Math.max(0,Math.floor((S.prog[k.c].due-t0)/DAY));if(i<7)cnt[i]++;});
    const mx=Math.max(1,...cnt);let bars='';
    for(let i=0;i<7;i++){const d=new Date(t0+i*DAY);
      bars+='<div class="fcb"><div class="bar"><i class="'+(cnt[i]?'':'z')+'" style="height:'+Math.max(6,Math.round(cnt[i]/mx*100))+'%"></i></div><b>'+cnt[i]+'</b><span>'+(i===0?T('Hoje','Today'):nm[d.getDay()])+'</span></div>';}
    const c=el('div','card fc');
    c.innerHTML='<b class="fc-t">'+T('Previsão da semana','This week')+'</b><small class="fc-s">'+T('Kanji que vencem em cada dia','Kanji coming due each day')+'</small><div class="fc-b">'+bars+'</div>';
    return c;}

  function revEmpty(){
    const w=el('div','rvx');
    const st=[['学',T('Aprenda','Learn'),T('Veja o kanji, as leituras e uma história para lembrar.','See the kanji, readings and a story to remember it.')],
      ['練',T('Pratique','Practice'),T('Quizzes, traçado e voz fixam o que você viu.','Quizzes, writing and speech lock it in.')],
      ['復',T('Revise','Review'),T('O app chama na hora certa, antes de você esquecer.','The app calls you back right before you forget.')]];
    w.innerHTML='<div class="rvx-hero"><div class="rvx-k"><i class="jp" lang="ja">復</i><i class="jp" lang="ja">習</i></div><b>'+T('Sua revisão começa aqui','Your review starts here')+'</b><p>'+T('Assim que você concluir a primeira etapa da trilha, os kanji passam a voltar sozinhos, no ritmo certo.','Once you finish the first step of the path, kanji come back on their own, at the right pace.')+'</p></div>'
      +st.map(s=>'<div class="card how"><i class="jp" lang="ja">'+s[0]+'</i><div><b>'+s[1]+'</b><span>'+s[2]+'</span></div></div>').join('')
      +'<div class="card rhy"><b class="fc-t">'+T('O ritmo da memória','The memory rhythm')+'</b><small class="fc-s">'+T('Exemplo de como um kanji volta','Example of how a kanji returns')+'</small><div class="rhy-c">'
      +['10 min',T('1 dia','1 day'),T('3 dias','3 days'),T('1 semana','1 week'),T('3 semanas','3 weeks'),T('2 meses','2 months')].map(x=>'<span>'+x+'</span>').join('')+'</div></div>';
    const go=el('button','btn btn-p',T('IR PARA A TRILHA','GO TO THE PATH'));
    go.onclick=()=>{sTap();tab='learn';tabs();render();};w.appendChild(go);
    return w;}

  const _vLearn=vLearn;
  vLearn=function(v){_vLearn(v);try{const f=v.children[0],w=weekCard();
    if(f&&f.nextSibling)v.insertBefore(w,f.nextSibling);else v.appendChild(w);}catch(e){console.error(e);}};

  const _vRev=vRev;
  vRev=function(v){_vRev(v);try{
    if(!learned().length){const e=v.querySelector('.empty');if(e)e.replaceWith(revEmpty());}
    else v.appendChild(forecastCard());
    const k=kotdCard();if(k)v.appendChild(k);
    v.appendChild(el('div','','<div style="height:12px"></div>'));
  }catch(e){console.error(e);}};

  const _vLib=vLib;
  vLib=function(v){_vLib(v);try{
    const tot=KANJI.length,seen=learned().length,pct=tot?Math.round(seen/tot*100):0,strong=KANJI.filter(k=>S.prog[k.c]&&stre(k.c)>.66).length;
    const b=el('div','card lib-h');
    b.innerHTML='<div class="lib-r"><div><b>'+seen+'<em> / '+tot+'</em></b><small>'+T('kanji descobertos','kanji discovered')+'</small></div><div class="lib-r2"><b>'+strong+'</b><small>'+T('dominados','mastered')+'</small></div></div><div class="goal"><i style="width:'+pct+'%"></i></div>';
    v.insertBefore(b,v.firstChild);}catch(e){console.error(e);}};

  const _vDraw=vDraw;
  vDraw=function(v){_vDraw(v);try{const cv=v.querySelector('canvas');
    if(cv&&cv.parentElement&&typeof dPick!=='undefined'&&dPick){const p=cv.parentElement;p.setAttribute('data-ghost',dPick.c);p.classList.add('ghosted');}}catch(e){}};

  const _vSocial=vSocial;
  vSocial=function(v){_vSocial(v);try{
    if(typeof SB!=='undefined'&&!SB.on&&!SB.sqlMissing){
      const rows=[['1',esc(S.name||T('Você','You')),(S.xp||0)+' XP','me'],['2',T('Seu amigo','Your friend'),'— XP','ph'],['3',T('Seu amigo','Your friend'),'— XP','ph']];
      const w=el('div','sbp');
      w.innerHTML='<div class="sbp-h"><small>'+T('MODO SOCIAL','SOCIAL MODE')+'</small><b>'+T('Estude com amigos','Study with friends')+'</b><p>'+T('Ranking semanal, desafios e lição em dupla. Conecte para entrar na disputa.','Weekly ranking, challenges and co-op lessons. Connect to join in.')+'</p></div>'
        +'<div class="sbp-l">'+rows.map(r=>'<div class="sbp-r '+r[3]+'"><span class="rk">'+r[0]+'</span><b>'+r[1]+'</b><em>'+r[2]+'</em></div>').join('')+'</div>'
        +'<div class="sbp-f"><div><i class="jp" lang="ja">競</i>'+T('Ranking','Ranking')+'</div><div><i class="jp" lang="ja">友</i>'+T('Amigos','Friends')+'</div><div><i class="jp" lang="ja">組</i>'+T('Em dupla','Co-op')+'</div></div>';
      v.insertBefore(w,v.firstChild);}
  }catch(e){console.error(e);}};
})();

/* ── Acessibilidade: papéis ARIA, rótulos e teclado ─────────────────────
   Roda no máximo 1x por quadro após mudanças no DOM (a interface é re-renderizada por innerHTML). */
(function a11y(){
  let q=0;
  const run=()=>{q=0;try{
    const en=lang()==='en',D=document;
    D.documentElement.lang=en?'en':'pt-BR';
    const T=D.getElementById('tabs');
    if(T){T.setAttribute('role','tablist');T.setAttribute('aria-label',en?'Main navigation':'Navegação principal');
      [...T.children].forEach(b=>{b.setAttribute('role','tab');b.setAttribute('aria-selected',b.classList.contains('on')?'true':'false');});}
    const lab=(sel,pt,e)=>D.querySelectorAll(sel).forEach(el=>{if(!el.hasAttribute('aria-label')&&!el.textContent.trim())el.setAttribute('aria-label',en?e:pt);});
    lab('#sClose','Sair da lição','Leave lesson');lab('.spk','Ouvir pronúncia','Play pronunciation');lab('#obBack','Voltar','Back');
    D.querySelectorAll('.dnode:not([role])').forEach(n=>{const lk=n.classList.contains('lock');
      n.setAttribute('role','button');n.tabIndex=lk?-1:0;n.setAttribute('aria-disabled',lk?'true':'false');});
    D.querySelectorAll('.jp:not([lang])').forEach(n=>n.setAttribute('lang','ja'));
    const tb=D.getElementById('tabbar');
    if(T&&tb){let ind=tb.querySelector('.tab-ind');
      if(!ind){ind=D.createElement('i');ind.className='tab-ind';ind.setAttribute('aria-hidden','true');tb.appendChild(ind);}
      const on=T.querySelector('.on');
      if(on){const a=on.getBoundingClientRect(),r=tb.getBoundingClientRect();
        if(a.width){ind.style.width=a.width+'px';ind.style.height=a.height+'px';
          ind.style.transform='translate('+(a.left-r.left)+'px,'+(a.top-r.top)+'px)';ind.style.opacity='1';
          if(!ind.hasAttribute('data-ready'))requestAnimationFrame(()=>requestAnimationFrame(()=>ind.setAttribute('data-ready','')));}}}
    const m=D.getElementById('modal');if(m){m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');}
    const t=D.getElementById('toast');if(t){t.setAttribute('role','status');t.setAttribute('aria-live','polite');}
    const f=D.getElementById('fb');if(f)f.setAttribute('aria-live','polite');
  }catch(e){}};
  const sched=()=>{if(!q)q=requestAnimationFrame(run);};
  new MutationObserver(sched).observe(document.body,{childList:true,subtree:true});
  addEventListener('keydown',e=>{const t=e.target;
    if((e.key==='Enter'||e.key===' ')&&t&&t.getAttribute&&t.getAttribute('role')==='button'&&t.tagName!=='BUTTON'){e.preventDefault();t.click();}});
  const T0=document.getElementById('tabs');
  if(T0)new MutationObserver(sched).observe(T0,{attributes:true,attributeFilter:['class'],subtree:true,childList:true});
  addEventListener('resize',sched);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(sched);
  sched();
})();
addEventListener('beforeunload',sv);
applyLanguage();

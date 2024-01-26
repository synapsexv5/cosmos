document.getElementById('browseBtn').addEventListener('click', () => {
  const url = document.getElementById('url').value;
  if (url) {
    openWebsite(url);
  }
});

function openWebsite(url) {
  // Send message to service worker
  navigator.serviceWorker.controller.postMessage({ action: 'openWebsite', url });
}

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => {
      console.log('Service worker registered');
    })
    .catch((error) => {
      console.error('Error registering service worker:', error);
    });
}

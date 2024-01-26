	// Function to create the iframe and handle URL input
function createIframe() {
    // Create the iframe element
    const iframe = document.createElement('iframe');
    iframe.style.width = '80%';  // Set the width of the iframe
    iframe.style.height = '80%';  // Set the height of the iframe
    iframe.style.borderRadius = '10px';  // Set the rounded corners
 
    // Create the input element for URL
    const urlInput = document.createElement('input');
    urlInput.type = 'text';
    urlInput.placeholder = 'Enter URL...';
    urlInput.style.position = 'absolute';
    urlInput.style.top = '10px';
    urlInput.style.left = '10px';
    urlInput.style.borderRadius = '10px';
 
    // Add event listener to handle URL input
    urlInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            const url = event.target.value;
            loadPage(url, iframe);
        }
    });
 
    // Append the iframe and input elements to the document body
    document.body.appendChild(iframe);
    document.body.appendChild(urlInput);
}
 
// Function to load the page in the iframe using a proxy
function loadPage(url, iframe) {
    // Create a proxy URL by appending the original URL to the proxy server URL
    const proxyUrl = 'https://218.4.62.141' + encodeURIComponent(url);
 
    // Set the src attribute of the iframe to the proxy URL
    iframe.src = proxyUrl;
}
 
// Call the createIframe function to create the iframe and handle URL input
createIframe();

document.getElementById('browseBtn').addEventListener('click', () => {
  const url = document.getElementById('url').value;
  if (url) {
    openWebsite(url);
  }
});

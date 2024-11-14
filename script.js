function copyToClipboard(event) {
    const text = event.target.getAttribute('data-message');
    navigator.clipboard.writeText(text).then(() => {
        const copiedSpan = event.target.querySelector('.copied');
        copiedSpan.style.display = 'inline';
        setTimeout(() => { copiedSpan.style.display = 'none'; }, 2000);

        // Call flashColor to change the background color to green
        flashColor(event.target, 'green');
    });
}

function flashColor(element, color) {
  let originalColor = window.getComputedStyle(element).backgroundColor;
  let originalHeight = window.getComputedStyle(element).height;
  let copiedElement = element.querySelector('.copied');
  let textNodes = Array.from(element.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);

  // Preserve original height
  element.style.height = originalHeight;

  // Hide all text nodes while showing "Copied!"
  textNodes.forEach(node => node.textContent = '');
  copiedElement.style.opacity = 1;
  element.style.backgroundColor = color;

  setTimeout(() => {
    // Restore original text and styles
    element.style.backgroundColor = originalColor;
    textNodes.forEach(node => node.textContent = element.getAttribute('data-message'));
    copiedElement.style.opacity = 0;
  }, 2500);
}

document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    if (queryString) {
        const params = new URLSearchParams(queryString);
        const container = document.querySelector('.container');
        container.innerHTML = '<h1>Info Display (Click to Copy):</h1>';

        params.forEach((value, key) => {
            // Decode the key and value properly
            key = decodeURIComponent(key);
            value = decodeURIComponent(value);

            const title = document.createElement('h2');
            title.textContent = key;

            const info = document.createElement('p');
            info.setAttribute('data-message', value);
            info.setAttribute('onclick', 'copyToClipboard(event)');

            const copiedSpan = document.createElement('span');
            copiedSpan.className = 'copied';
            copiedSpan.textContent = 'Copied!';
            copiedSpan.style.display = 'none';

            const textNode = document.createTextNode(value);

            info.appendChild(copiedSpan);
            info.appendChild(textNode);

            container.appendChild(title);
            container.appendChild(info);
        });
    } else {
        const container = document.querySelector('.container');
        container.innerHTML = '<h1>No information was given to display.</h1>\n<h5 class="note">&#128161 To show data, add <i>?title=description&title2=description2</i> etc.</h5><h5 class="note">&#10060 Use standard URL encoding for special characters, e.g., <i>%20</i> for space, <i>%26</i> for &.</h5>';
    }
});

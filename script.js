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
  let copiedElement = element.querySelector('.copied');
  element.style.backgroundColor = color;
  copiedElement.style.opacity = 1;
  setTimeout(() => {
    element.style.backgroundColor = originalColor;
    copiedElement.style.opacity = 0;
  }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.href.split('?')[1];
    if (queryString) {
        const params = new URLSearchParams('?' + queryString);
        const container = document.querySelector('.container');
        container.innerHTML = '<h1>Info Display (Click to Copy):</h1>';
        params.forEach((value, key) => {
            if (key) {
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
            }
        });
    } else {
        const container = document.querySelector('.container');
        container.innerHTML = '<h1>No information was given to display.</h1>\n<h5 id="example">To show data, add <i>?title=description&title2=description2</i> etc.</h5>';
    }
});
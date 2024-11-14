# API Text Display - The Guide

## Overview

This project is a simple webpage that allows you to display information dynamically by passing parameters in the URL. The data is displayed in a user-friendly format, and users can click on any of the data items to copy the text to their clipboard. This can be useful for displaying messages, notes, or other information without needing a backend server.

### Features:
- Display information passed via URL parameters.
- Each displayed value can be clicked to copy it to the clipboard.
- Supports special characters through standard URL encoding.

## Installation & Setup

To use this project, simply download the files and set up a static server, or use any static site hosting platform (such as GitHub Pages or Netlify).

### Files Included:
- `index.html` - The main HTML page.
- `script.js` - JavaScript logic for parsing URL parameters, handling clipboard functionality, and more.
- `style.css` - CSS file to style the webpage.

### Step-by-Step Setup
1. **Download the Files**
   - Clone the repository or download the files `index.html`, `script.js`, and `style.css`.

2. **Host Locally** (Optional)
   - You can host this locally using any local static server tool like VS Code Live Server extension or other simple local hosting tools.

3. **Host Remotely** (Optional)
   - You can also use static file hosts like Netlify, Vercel, or GitHub Pages.

## Using the API

The main feature of this project is to render and display text from the URL parameters. Here's how to use it:

### URL Structure
- The format of the URL is:
  ```
  http://yourdomain.com?key1=value1&key2=value2
  ```
  - `key1`, `key2`, etc. represent the title of the information.
  - `value1`, `value2`, etc. represent the content that will be displayed.

### Example
- Example URL:
  ```
  http://yourdomain.com?Name=John%20Doe&Message=Hello%2C%20World%21
  ```
- Breakdown:
  - `Name=John%20Doe`: The title is "Name" and the value is "John Doe".
  - `Message=Hello%2C%20World%21`: The title is "Message" and the value is "Hello, World!".

- The displayed output will have:
  - A title "Name" with the text "John Doe".
  - A title "Message" with the text "Hello, World!".

### URL Encoding
- Special characters in URLs need to be properly encoded.
  - **Spaces** should be encoded as `%20`.
  - **Ampersands (`&`)** should be encoded as `%26`.
  - **Plus (`+`)** should be encoded as `%2B`.

Use any online URL encoder [like urlencoder.io](https://www.urlencoder.io/) to convert your text if needed.

### Copy to Clipboard
- Each displayed item can be clicked to copy the text to the clipboard.
- When copied, a "Copied!" message will briefly be displayed, and the background color will flash to indicate success.

## Customization

### Styling
- You can edit the `style.css` file to change the colors, fonts, and general appearance.
- The current styling includes:
  - A dark background (`#333`) with contrasting light text (`#fff`).
  - `p` tags for the content have a lighter background (`#f2f2f2`) for better readability.

### JavaScript Logic
- The `script.js` file contains logic for:
  - Decoding URL parameters (`decodeURIComponent()` for proper handling).
  - Copy-to-clipboard functionality with a visual feedback effect.
  - Adding and handling events for when the text is copied.

Feel free to adjust the functionality according to your needs.

## Common Issues & Troubleshooting

1. **Special Characters Not Displaying Properly**
   - Make sure to use URL encoding for special characters. You can use websites like [urlencoder.org](https://www.urlencoder.org) to help encode your parameters.

2. **No Data is Displayed**
   - If the URL does not have any parameters, a message saying "No information was given to display." will be shown. Make sure your URL includes properly formatted parameters.

3. **Clipboard Copy Not Working**
   - Some browsers may restrict clipboard access due to security settings. Ensure your browser allows clipboard operations from the page.

## License
This project is open source and available for any use. Modify, share, and use it as needed.

## Contribution
If you wish to contribute to this project, feel free to open pull requests or report issues. Feedback and contributions are always appreciated!

---
I hope you enjoy your new dynamic text display page!


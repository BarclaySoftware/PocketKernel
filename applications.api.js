/**
 * Adds an app to the desktop.
 * @param {string} name - The app name.
 * @param {string} iconUrl - The URL for the app icon.
 * @param {string} appContent - The URL or text content for the app.
 * @param {boolean} isIframe - Whether the app content is an iframe source.
 */
function addApp(name, iconUrl, appContent, isIframe) {
    const desktop = document.getElementById('desktop');
    const appDiv = document.createElement('div');
    appDiv.className = 'app';
    appDiv.onclick = () => openApp(name, appContent, isIframe);

    const img = document.createElement('img');
    img.className = 'appIcon';
    img.src = iconUrl;
    img.alt = name;

    const p = document.createElement('p');
    p.textContent = name;

    appDiv.appendChild(img);
    appDiv.appendChild(p);
    desktop.appendChild(appDiv);
}

function openApp(name, content, isIframe) {
    const appTitle = document.getElementById('app-title');
    const appContent = document.getElementById('app-content');
    appTitle.textContent = name;

    if (isIframe) {
        appContent.innerHTML = `<iframe src="${content}" frameborder="0"></iframe>`;
    } else {
        appContent.textContent = content;
    }

    document.getElementById('frame').style.display = 'block';
}

function closeframe() {
    document.getElementById('frame').style.display = 'none';
    document.getElementById('app-content').innerHTML = '';
}
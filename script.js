// Copyright (c) 2024 Aurorasoft. PocketKernel is a trademark of Aurorasoft.
// Function to open the app
function openApp(appName, content, isIframe = false) {
    document.getElementById('app-title').innerText = appName;
    const appContent = document.getElementById('app-content');
    appContent.innerHTML = '';
    
    if (isIframe) {
        const iframe = document.createElement('iframe');
        iframe.src = content;
        appContent.appendChild(iframe);
    } else {
        appContent.innerText = content;
    }
    
    document.getElementById('frame').style.display = 'flex';
}

// Closes the app when the user presses the close icon
function closeframe() {
    document.getElementById('frame').style.display = 'none';
}

// Closes the app when clicking outside of the frame
window.onclick = function(event) {
    const frame = document.getElementById('frame');
    if (event.target == frame) {
        frame.style.display = 'none';
    }
}

// Prevents the default context menu from appearing
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

// Opens the Welcome app when the page loads
// document.addEventListener('DOMContentLoaded', function() {
//     openApp('Startup', 'https://caesiumapps.pages.dev/sys/', true);
// });
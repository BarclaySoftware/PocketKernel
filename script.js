// Remember, if 'true' is in the third area of the app frame code, then
// it will be rendered as an iFrame.
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
    
    document.getElementById('modal').style.display = 'flex';
}

// Closes the app when the user presses the close icon.
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
}

async function updateBattery() {
    const batteryElement = document.getElementById('battery');
    const battery = await navigator.getBattery();
    batteryElement.textContent = `${Math.round(battery.level * 100)}%`;

    battery.addEventListener('levelchange', () => {
        batteryElement.textContent = `${Math.round(battery.level * 100)}%`;
    });
}

// Initial load
updateTime();
updateBattery();

// Update time every second
setInterval(updateTime, 1000);

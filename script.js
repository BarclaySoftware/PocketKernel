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

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
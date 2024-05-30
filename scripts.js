function openWindow(windowId) {
    document.getElementById(windowId).style.display = 'block';
}

function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const windowId = `${icon.textContent.trim().toLowerCase()}-window`;
            openWindow(windowId);
        });
    });
});

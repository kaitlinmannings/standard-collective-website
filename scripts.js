document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        const target = e.currentTarget.querySelector('p').textContent.toLowerCase() + '-window';
        document.getElementById(target).style.display = 'block';
    });
});

function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
}

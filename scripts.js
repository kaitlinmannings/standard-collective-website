// Function to open a window
function openWindow(windowId) {
    document.getElementById(windowId).style.display = 'block';
}

// Function to close a window
function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
}

// Add event listeners for the icons to open respective windows
document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const windowId = `${icon.querySelector('p').textContent.toLowerCase()}-window`;
            openWindow(windowId);
        });
    });

    // Add event listener for the request a quote button if needed
    const quoteButton = document.querySelector('.retro-button');
    if (quoteButton) {
        quoteButton.addEventListener('click', () => {
            alert('Request a quote functionality coming soon!');
            // You can replace the alert with actual functionality, e.g., opening a form or redirecting to a contact page
        });
    }
});

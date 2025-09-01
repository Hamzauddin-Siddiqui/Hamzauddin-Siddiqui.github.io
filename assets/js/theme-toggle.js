// Dark mode toggle functionality (without localStorage)
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    
    if (!toggleButton) {
        console.log('Toggle button not found');
        return;
    }
    
    // Check system preference on load
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        body.classList.add('dark-mode');
        updateToggleIcon(true);
    }
    
    // Toggle theme when button is clicked
    toggleButton.addEventListener('click', function() {
        console.log('Toggle clicked');
        body.classList.toggle('dark-mode');
        
        // Update icon based on current state
        const isDark = body.classList.contains('dark-mode');
        updateToggleIcon(isDark);
    });
    
    function updateToggleIcon(isDark) {
        const sunIcon = toggleButton.querySelector('.sun-icon');
        const moonIcon = toggleButton.querySelector('.moon-icon');
        
        if (sunIcon && moonIcon) {
            if (isDark) {
                sunIcon.style.display = 'inline';
                moonIcon.style.display = 'none';
            } else {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'inline';
            }
        }
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (e.matches) {
            body.classList.add('dark-mode');
            updateToggleIcon(true);
        } else {
            body.classList.remove('dark-mode');
            updateToggleIcon(false);
        }
    });
});

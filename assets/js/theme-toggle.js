// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        updateToggleIcon(true);
    }
    
    // Toggle theme when button is clicked
    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Save the preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            updateToggleIcon(true);
        } else {
            localStorage.setItem('theme', 'light');
            updateToggleIcon(false);
        }
    });
    
    function updateToggleIcon(isDark) {
        const sunIcon = toggleButton.querySelector('.sun-icon');
        const moonIcon = toggleButton.querySelector('.moon-icon');
        
        if (isDark) {
            sunIcon.style.display = 'inline';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline';
        }
    }
});

---
layout: default
title: "Hamzauddin Siddiqui - Data Analyst"
description: "Data Analyst specializing in Operations Research, Business Analytics, and Supply Chain optimization"
---

<script>
// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('header-theme-toggle');
    const body = document.body;
    
    console.log('Script loaded');
    console.log('Toggle button found:', toggleButton);
    
    if (!toggleButton) {
        console.log('Header toggle button not found');
        return;
    }
    
    // Check system preference on load
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        body.classList.add('dark-mode');
        updateToggleIcon(true);
    } else {
        updateToggleIcon(false);
    }
    
    // Toggle theme when button is clicked
    toggleButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Header toggle clicked - current classes:', body.className);
        
        body.classList.toggle('dark-mode');
        
        const isDark = body.classList.contains('dark-mode');
        console.log('Dark mode now:', isDark);
        updateToggleIcon(isDark);
    });
    
    function updateToggleIcon(isDark) {
        const sunIcon = toggleButton.querySelector('.sun-icon');
        const moonIcon = toggleButton.querySelector('.moon-icon');
        
        console.log('Updating icons - isDark:', isDark);
        console.log('Sun icon found:', sunIcon);
        console.log('Moon icon found:', moonIcon);
        
        if (sunIcon && moonIcon) {
            // CORRECTED LOGIC:
            // Light mode: show moon icon (to switch TO dark mode)
            // Dark mode: show sun icon (to switch TO light mode)
            if (isDark) {
                // In dark mode, show sun (to go back to light)
                sunIcon.style.display = 'inline';
                moonIcon.style.display = 'none';
                console.log('Dark mode: showing sun icon');
            } else {
                // In light mode, show moon (to go to dark)
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'inline';
                console.log('Light mode: showing moon icon');
            }
        }
    }
});
</script>

<div class="hero-section">
  <div class="profile-header">
    <div class="profile-text">
      <h1>Hamzauddin Siddiqui</h1>
      <h2>Data Analyst | Business Intelligence Specialist | Supply Chain Analytics</h2>
      <p>Transforming data into actionable insights for operational excellence</p>
      
      <div class="profile-links">
        <a href="https://www.linkedin.com/in/hamzauddin-siddiqui-786180175" target="_blank" class="btn">
          💼 LinkedIn
        </a>
        <a href="./assets/documents/Hamzauddin_Siddiqui_CV.pdf" target="_blank" class="btn btn-secondary">
          📄 Download CV
        </a>
      </div>
    </div>
    <img src="./23 Hamza.jpg" alt="Hamzauddin Siddiqui" class="profile-image">
  </div>
</div>

## 👨‍💼 About Me

Welcome to my portfolio! I'm a data analyst with expertise in SQL, Python, Tableau, and business intelligence, currently pursuing my Master's in Operations Research & Business Analytics in Germany. I specialize in turning complex data into clear, actionable business insights.

<div class="skills-grid">
  <div class="skill-card">
    <h3>🎯 What I Do</h3>
    <ul>
      <li><strong>Business Intelligence:</strong> Creating dashboards and KPI tracking systems</li>
      <li><strong>Data Analysis:</strong> Statistical analysis, regression modeling, and performance optimization</li>
      <li><strong>Supply Chain Analytics:</strong> Logistics optimization and operational efficiency</li>
      <li><strong>Process Automation:</strong> Python scripts and automated reporting pipelines</li>
    </ul>
  </div>
  
  <div class="skill-card">
    <h3>🛠️ Technical Skills</h3>
    <ul>
      <li><strong>Programming:</strong> SQL, Python, MATLAB, STATA</li>
      <li><strong>Visualization:</strong> Tableau, Power BI, Looker Studio</li>
      <li><strong>Databases:</strong> Google BigQuery</li>
      <li><strong>Tools:</strong> Excel, SharePoint, Zendesk, Pipefy</li>
    </ul>
  </div>
</div>

## 📊 Featured Projects

<div class="project-card">
  <h3>Option Pricing Model - Financial Engineering</h3>
  <p><strong>Duration:</strong> March 2024 - July 2024 | <strong>Tools:</strong> Python, Yahoo Finance API</p>
  <p>Engineered an option pricing model utilizing 5 years of stock data to evaluate EMH and Black-Scholes Model assumptions, with comparative analysis against real-world option prices.</p>
</div>

<div class="project-card">
  <h3>Logistics Performance Optimization - Bettermile</h3>
  <p><strong>Duration:</strong> December 2024 - Present | <strong>Tools:</strong> Python, SQL, HTML Dashboards</p>
  <p>Leading comprehensive analysis of performance metrics across multiple logistics depots, developing automated reporting pipelines and interactive dashboards.</p>
</div>

[**View All Projects →**](./projects)

## 📍 Currently

- 🎓 **MSc Operations Research & Business Analytics** at Otto-von-Guericke University, Germany
- 🌍 **Erasmus Exchange** at University of Ljubljana, Slovenia  
- 💼 **User Insights & Support** at Bettermile (GLS eCom Lab)

## 📫 Let's Connect

<div class="contact-info">
  <p><strong>📧 Email:</strong> <a href="mailto:hamzauddin54@gmail.com">hamzauddin54@gmail.com</a></p>
  <p><strong>💼 LinkedIn:</strong> <a href="https://www.linkedin.com/in/hamzauddin-siddiqui-786180175" target="_blank">Connect with me</a></p>
  <p><strong>📍 Location:</strong> Magdeburg, Germany</p>
  <p><strong>🕒 Timezone:</strong> Central European Time (CET)</p>
</div>

<p style="text-align: center; margin-top: 2rem;">
  <a href="./contact" class="btn">Get In Touch</a>
  <a href="./about" class="btn btn-secondary" style="margin-left: 1rem;">Learn More About Me</a>
</p>

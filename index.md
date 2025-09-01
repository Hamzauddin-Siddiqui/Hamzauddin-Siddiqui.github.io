---
layout: default
title: "Hamzauddin Siddiqui - Data Analyst"
description: "Data Analyst specializing in Operations Research, Business Analytics, and Supply Chain optimization"
---

<script>
// Robust dark mode toggle with inline style backup
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
        applyDarkMode(true);
    } else {
        applyLightMode(true);
    }
    
    // Toggle theme when button is clicked
    toggleButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Header toggle clicked - current classes:', body.className);
        
        const isDark = body.classList.contains('dark-mode');
        
        if (isDark) {
            applyLightMode();
        } else {
            applyDarkMode();
        }
    });
    
    function applyDarkMode(isInitial = false) {
        body.classList.add('dark-mode');
        console.log('Applying dark mode');
        
        // Force inline styles as backup
        body.style.backgroundColor = '#1a1a1a';
        body.style.color = '#e5e5e5';
        
        // Apply to header
        const header = document.querySelector('.site-header');
        if (header) {
            header.style.backgroundColor = '#1a1a1a';
            header.style.borderBottomColor = '#60a5fa';
        }
        
        // Apply to hero section
        const hero = document.querySelector('.hero-section');
        if (hero) {
            hero.style.background = 'linear-gradient(135deg, #2d2d2d 0%, #404040 100%)';
            hero.style.color = '#e5e5e5';
        }
        
        // Apply to cards
        const cards = document.querySelectorAll('.skill-card, .project-card, .contact-info');
        cards.forEach(card => {
            card.style.backgroundColor = '#2d2d2d';
            card.style.borderColor = '#404040';
            card.style.color = '#e5e5e5';
        });
        
        // Apply to text elements
        const textElements = document.querySelectorAll('h1, h2, h3, h4, p, li');
        textElements.forEach(el => {
            el.style.color = '#e5e5e5';
        });
        
        // Apply to links
        const links = document.querySelectorAll('a:not(.btn)');
        links.forEach(link => {
            link.style.color = '#60a5fa';
        });
        
        // Apply to navigation
        const navLinks = document.querySelectorAll('.page-link, .site-title-static');
        navLinks.forEach(link => {
            link.style.color = '#e5e5e5';
        });
        
        // Update toggle button
        if (toggleButton) {
            toggleButton.style.background = '#2d2d2d';
            toggleButton.style.borderColor = '#60a5fa';
            toggleButton.style.color = '#60a5fa';
        }
        
        updateToggleIcon(true);
        console.log('Dark mode applied with inline styles');
    }
    
    function applyLightMode(isInitial = false) {
        body.classList.remove('dark-mode');
        console.log('Applying light mode');
        
        // Force inline styles as backup
        body.style.backgroundColor = '#ffffff';
        body.style.color = '#374151';
        
        // Apply to header
        const header = document.querySelector('.site-header');
        if (header) {
            header.style.backgroundColor = '#ffffff';
            header.style.borderBottomColor = '#2563eb';
        }
        
        // Apply to hero section
        const hero = document.querySelector('.hero-section');
        if (hero) {
            hero.style.background = 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)';
            hero.style.color = '#374151';
        }
        
        // Apply to cards
        const cards = document.querySelectorAll('.skill-card, .project-card, .contact-info');
        cards.forEach(card => {
            card.style.backgroundColor = '#f9fafb';
            card.style.borderColor = '#e5e7eb';
            card.style.color = '#374151';
        });
        
        // Apply to text elements
        const textElements = document.querySelectorAll('h1, h2, h3, h4, p, li');
        textElements.forEach(el => {
            el.style.color = '#374151';
        });
        
        // Apply to links
        const links = document.querySelectorAll('a:not(.btn)');
        links.forEach(link => {
            link.style.color = '#2563eb';
        });
        
        // Apply to navigation
        const navLinks = document.querySelectorAll('.page-link, .site-title-static');
        navLinks.forEach(link => {
            link.style.color = '#374151';
        });
        
        // Update toggle button
        if (toggleButton) {
            toggleButton.style.background = 'white';
            toggleButton.style.borderColor = '#2563eb';
            toggleButton.style.color = '#2563eb';
        }
        
        updateToggleIcon(false);
        console.log('Light mode applied with inline styles');
    }
    
    function updateToggleIcon(isDark) {
        const sunIcon = toggleButton.querySelector('.sun-icon');
        const moonIcon = toggleButton.querySelector('.moon-icon');
        
        console.log('Updating icons - isDark:', isDark);
        
        if (sunIcon && moonIcon) {
            if (isDark) {
                // Dark mode: show sun (to go back to light)
                sunIcon.style.display = 'inline';
                moonIcon.style.display = 'none';
                console.log('Dark mode: showing sun icon');
            } else {
                // Light mode: show moon (to go to dark)
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

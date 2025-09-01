---
layout: default
title: "Hamzauddin Siddiqui - Data Analyst"
description: "Data Analyst specializing in Operations Research, Business Analytics, and Supply Chain optimization"
---

<script>
// Dark mode toggle with inline style backup (keeping the working solution)
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('header-theme-toggle');
    const body = document.body;
    
    if (!toggleButton) return;
    
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
        
        const isDark = body.classList.contains('dark-mode');
        
        if (isDark) {
            applyLightMode();
        } else {
            applyDarkMode();
        }
    });
    
    function applyDarkMode(isInitial = false) {
        body.classList.add('dark-mode');
        
        // Minimal inline styles for guaranteed dark mode
        body.style.backgroundColor = '#1a1a1a';
        body.style.color = '#e5e5e5';
        
        const header = document.querySelector('.site-header');
        if (header) {
            header.style.backgroundColor = '#1a1a1a';
            header.style.borderBottomColor = '#404040';
        }
        
        const textElements = document.querySelectorAll('h1, h2, h3, h4, p, li, span');
        textElements.forEach(el => {
            el.style.color = '#e5e5e5';
        });
        
        const links = document.querySelectorAll('a:not(.btn)');
        links.forEach(link => {
            link.style.color = '#60a5fa';
        });
        
        const navLinks = document.querySelectorAll('.page-link, .site-title-static');
        navLinks.forEach(link => {
            link.style.color = '#e5e5e5';
        });
        
        updateToggleIcon(true);
    }
    
    function applyLightMode(isInitial = false) {
        body.classList.remove('dark-mode');
        
        // Minimal inline styles for guaranteed light mode
        body.style.backgroundColor = '#ffffff';
        body.style.color = '#374151';
        
        const header = document.querySelector('.site-header');
        if (header) {
            header.style.backgroundColor = '#ffffff';
            header.style.borderBottomColor = '#e5e7eb';
        }
        
        const textElements = document.querySelectorAll('h1, h2, h3, h4, p, li, span');
        textElements.forEach(el => {
            el.style.color = '#374151';
        });
        
        const links = document.querySelectorAll('a:not(.btn)');
        links.forEach(link => {
            link.style.color = '#2563eb';
        });
        
        const navLinks = document.querySelectorAll('.page-link, .site-title-static');
        navLinks.forEach(link => {
            link.style.color = '#374151';
        });
        
        updateToggleIcon(false);
    }
    
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
});
</script>

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

## About Me

Welcome to my portfolio! I'm a data analyst with expertise in SQL, Python, Tableau, and business intelligence, currently pursuing my Master's in Operations Research & Business Analytics in Germany. I specialize in turning complex data into clear, actionable business insights.

**What I Do:**
- Business Intelligence: Creating dashboards and KPI tracking systems
- Data Analysis: Statistical analysis, regression modeling, and performance optimization  
- Supply Chain Analytics: Logistics optimization and operational efficiency
- Process Automation: Python scripts and automated reporting pipelines

**Technical Skills:**
- Programming: SQL, Python, MATLAB, STATA
- Visualization: Tableau, Power BI, Looker Studio
- Databases: Google BigQuery
- Tools: Excel, SharePoint, Zendesk, Pipefy

## Featured Projects

**Option Pricing Model - Financial Engineering**  
*March 2024 - July 2024 | Python, Yahoo Finance API*  
Engineered an option pricing model utilizing 5 years of stock data to evaluate EMH and Black-Scholes Model assumptions, with comparative analysis against real-world option prices.

**Logistics Performance Optimization - Bettermile**  
*December 2024 - Present | Python, SQL, HTML Dashboards*  
Leading comprehensive analysis of performance metrics across multiple logistics depots, developing automated reporting pipelines and interactive dashboards.

[View All Projects →](./projects)

## Currently

- 🎓 MSc Operations Research & Business Analytics at Otto-von-Guericke University, Germany
- 🌍 Erasmus Exchange at University of Ljubljana, Slovenia  
- 💼 User Insights & Support at Bettermile (GLS eCom Lab)

## Contact

**Email:** [hamzauddin54@gmail.com](mailto:hamzauddin54@gmail.com)  
**LinkedIn:** [Connect with me](https://www.linkedin.com/in/hamzauddin-siddiqui-786180175)  
**Location:** Magdeburg, Germany  
**Timezone:** Central European Time (CET)

[Get In Touch](./contact) | [Learn More About Me](./about)

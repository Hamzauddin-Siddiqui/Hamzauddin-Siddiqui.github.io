---
layout: default
title: Projects
---

<style>
.projects-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.projects-intro {
    text-align: center;
    margin: 2rem 0 3rem 0;
}

.intro-statement {
    font-size: 1.2rem;
    font-style: italic;
    opacity: 0.9;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
}

.featured-layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 2rem;
    margin: 2rem 0;
    height: 600px;
}

.projects-sidebar {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 1rem;
    overflow-y: auto;
}

body.dark-mode .projects-sidebar {
    background: rgba(40, 40, 40, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-tabs {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.tab-btn {
    flex: 1;
    padding: 0.75rem 1rem;
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    color: #333;
}

body.dark-mode .tab-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #e0e0e0;
}

.tab-btn:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: translateY(-1px);
}

body.dark-mode .tab-btn:hover {
    background: rgba(255, 255, 255, 0.1);
}

.tab-btn.active {
    background: rgba(102, 126, 234, 0.2);
    border-color: #667eea;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.sidebar-item {
    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    border: 1px solid transparent;
    color: #333;
}

body.dark-mode .sidebar-item {
    color: #e0e0e0;
}

.sidebar-item:hover {
    background: rgba(0, 0, 0, 0.02);
    border-color: rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

body.dark-mode .sidebar-item:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
}

.sidebar-item.active {
    background: rgba(102, 126, 234, 0.2);
    border-color: #667eea;
}

.featured-project {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 2rem;
    overflow-y: auto;
}

body.dark-mode .featured-project {
    background: rgba(40, 40, 40, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.featured-title {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333;
}

body.dark-mode .featured-title {
    color: #e0e0e0;
}

.featured-meta {
    opacity: 0.8;
    margin-bottom: 1.5rem;
}

.featured-project h3 {
    margin: 1.5rem 0 0.75rem 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
}

body.dark-mode .featured-project h3 {
    color: #e0e0e0;
}

.featured-project p {
    margin-bottom: 1rem;
    line-height: 1.6;
}

.featured-project ul {
    margin: 1rem 0 1rem 1.5rem;
}

.featured-project li {
    margin-bottom: 0.5rem;
}

.project-tech {
    display: flex;
    gap: 0.5rem;
    margin: 1.5rem 0;
    flex-wrap: wrap;
}

.tech-tag {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    border: 1px solid rgba(102, 126, 234, 0.2);
}

.project-links {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
}

.project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(102, 126, 234, 0.1);
    border: 1px solid rgba(102, 126, 234, 0.2);
    border-radius: 8px;
    color: #667eea;
    text-decoration: none;
    transition: all 0.3s ease;
}

.project-link:hover {
    background: rgba(102, 126, 234, 0.2);
    transform: translateY(-2px);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .featured-layout {
        grid-template-columns: 1fr;
        height: auto;
    }

    .projects-sidebar {
        order: 2;
        height: 300px;
    }

    .featured-project {
        order: 1;
        min-height: 400px;
    }

    .sidebar-tabs {
        flex-direction: row;
    }

    .tab-btn {
        font-size: 0.8rem;
        padding: 0.5rem;
    }
}
</style>

# Projects

<div class="projects-intro">
    <p class="intro-statement">Deep dive into analytical projects with comprehensive technical details and business insights.</p>
</div>

<div class="featured-layout">
    <div class="projects-sidebar">
        <!-- Tab Navigation -->
        <div class="sidebar-tabs">
            <button class="tab-btn active" onclick="switchTab('academic')">🎓 Academic</button>
            <button class="tab-btn" onclick="switchTab('professional')">💼 Professional</button>
        </div>
        
        <!-- Academic Projects List -->
        <div class="tab-content active" id="academic-tab">
            <div class="sidebar-item active" data-project="tbrd">Last-Mile Delivery Robots</div>
            <div class="sidebar-item" data-project="option">Option Pricing Model</div>
        </div>
        
        <!-- Professional Projects List -->
        <div class="tab-content" id="professional-tab">
            <div class="sidebar-item" data-project="risk">Risk Analysis Framework</div>
            <div class="sidebar-item" data-project="industry">Industry Review</div>
            <div class="sidebar-item" data-project="merger">Merger Analysis</div>
            <div class="sidebar-item" data-project="financial">Financial Modelling</div>
        </div>
    </div>
    
    <div class="featured-project">
        <h2 class="featured-title">Last-Mile Delivery with Autonomous Robots</h2>
        <div class="featured-meta">Otto-von-Guericke University • October 2024 - January 2025</div>
        
        <h3>Project Overview</h3>
        <p>Mathematical optimization research tackling the Truck-Based Robot Delivery (TBRD) problem. Developed both exact and heuristic solution methods for urban logistics scheduling.</p>
        
        <h3>Key Achievements</h3>
        <ul>
            <li>98% optimal solutions on small instances using Gurobi</li>
            <li>290× computational speedup with custom heuristic algorithm</li>
            <li>Comprehensive sensitivity analysis identifying critical performance thresholds</li>
        </ul>
        
        <div class="project-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">Gurobi Optimization</span>
            <span class="tech-tag">Algorithm Design</span>
            <span class="tech-tag">Academic Research</span>
        </div>
        
        <div class="project-links">
            <a href="https://github.com/Hamzauddin-Siddiqui/ovgu-last-mile-delivery-robots" class="project-link" target="_blank">
                🔗 GitHub Repository
            </a>
        </div>
    </div>
</div>

<script>
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    // Update featured project to first item in the active tab
    const firstItem = document.querySelector(`#${tabName}-tab .sidebar-item`);
    if (firstItem) {
        // Clear all active states
        document.querySelectorAll('.sidebar-item').forEach(item => item.classList.remove('active'));
        // Set first item as active
        firstItem.classList.add('active');
        // Update featured project content
        updateFeaturedProject(firstItem.getAttribute('data-project'));
    }
}

function updateFeaturedProject(projectKey) {
    const featuredContent = document.querySelector('.featured-project');
    
    const featuredProjects = {
        'tbrd': {
            title: 'Last-Mile Delivery with Autonomous Robots',
            meta: 'Otto-von-Guericke University • October 2024 - January 2025',
            overview: 'Mathematical optimization research tackling the Truck-Based Robot Delivery (TBRD) problem. Developed both exact and heuristic solution methods for urban logistics scheduling.',
            achievements: [
                '98% optimal solutions on small instances using Gurobi',
                '290× computational speedup with custom heuristic algorithm',
                'Comprehensive sensitivity analysis identifying critical performance thresholds'
            ],
            tags: ['Python', 'Gurobi Optimization', 'Algorithm Design', 'Academic Research'],
            links: [
                { url: 'https://github.com/Hamzauddin-Siddiqui/ovgu-last-mile-delivery-robots', text: '🔗 GitHub Repository' }
            ]
        },
        'option': {
            title: 'Option Pricing Model',
            meta: 'Otto-von-Guericke University • March 2024 - July 2024',
            overview: 'Financial engineering project implementing Black-Scholes pricing model with Monte Carlo simulations for Tesla stock analysis.',
            achievements: [
                'Implemented Black-Scholes pricing model from scratch',
                'Validated theoretical assumptions against real market data',
                'Generated insights on model performance and limitations'
            ],
            tags: ['Python', 'Monte Carlo', 'Financial Engineering', 'Statistical Analysis'],
            links: []
        },
        'risk': {
            title: 'Risk Analysis Framework',
            meta: 'Institute of Business Administration • October 2019 - December 2019',
            overview: 'Conducted market risk analysis for a diversified portfolio comprising investments in 10 companies from the KMI-30 index.',
            achievements: [
                'Performed liquidity risk analysis for randomly generated assets',
                'Executed detailed credit risk analysis for selected individual',
                'Demonstrated proficiency in risk assessment methodologies'
            ],
            tags: ['Excel', 'Risk Assessment', 'Portfolio Analysis', 'Financial Modeling'],
            links: []
        },
        'industry': {
            title: 'Industry Review',
            meta: 'Institute of Business Administration • April 2019 - May 2019',
            overview: 'Conducted a comprehensive review of Oil Marketing Companies for 2019, analyzing market shares, key drivers, regulatory challenges, and the overall health of the sector.',
            achievements: [
                'Comprehensive market share analysis',
                'Regulatory framework assessment',
                'Strategic recommendations for sector improvement'
            ],
            tags: ['Research', 'Market Analysis', 'Regulatory Assessment', 'Strategic Planning'],
            links: []
        },
        'merger': {
            title: 'Merger Analysis',
            meta: 'Institute of Business Administration • April 2019 - May 2019',
            overview: 'Conducted an in-depth pre- and post-merger analysis of ICI Pakistan\'s acquisition by the Lucky Cement-led group, evaluating key financial performance metrics.',
            achievements: [
                'Pre and post-merger financial performance comparison',
                'Liquidity and profitability trend analysis',
                'Strategic impact assessment of the acquisition'
            ],
            tags: ['M&A Analysis', 'Financial Assessment', 'Performance Evaluation', 'Strategic Analysis'],
            links: []
        },
        'financial': {
            title: 'Financial Modelling',
            meta: 'Institute of Business Administration • October 2018 - December 2018',
            overview: 'Developed a comprehensive financial model for Thatta Cement, utilizing moving averages to forecast the company\'s Statement of Financial Position for the next three years.',
            achievements: [
                'Historical data analysis spanning 5 years',
                'Moving average forecasting methodology implementation',
                '3-year financial projection with detailed assumptions'
            ],
            tags: ['Financial Modeling', 'Forecasting', 'Excel', 'Data Analysis'],
            links: []
        }
    };

    const project = featuredProjects[projectKey];
    if (project) {
        let linksHTML = '';
        if (project.links && project.links.length > 0) {
            linksHTML = `
                <div class="project-links">
                    ${project.links.map(link => 
                        `<a href="${link.url}" class="project-link" target="_blank">${link.text}</a>`
                    ).join('')}
                </div>
            `;
        }

        featuredContent.innerHTML = `
            <h2 class="featured-title">${project.title}</h2>
            <div class="featured-meta">${project.meta}</div>
            
            <h3>Project Overview</h3>
            <p>${project.overview}</p>
            
            <h3>Key Achievements</h3>
            <ul>
                ${project.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
            
            <div class="project-tech">
                ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
            </div>
            
            ${linksHTML}
        `;
    }
}

// Sidebar functionality
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            updateFeaturedProject(this.getAttribute('data-project'));
        });
    });
});
</script>

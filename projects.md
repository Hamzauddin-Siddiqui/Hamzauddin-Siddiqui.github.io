---
layout: projects
title: Projects
permalink: /projects/
---

<style>
.projects-container { display: flex; gap: 30px; margin: 20px auto; min-height: 600px; max-width: 1600px; width: 95%; padding: 0 20px; }
.projects-sidebar { flex: 0 0 320px; background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border-radius: 12px; padding: 20px; height: fit-content; border: 1px solid rgba(255,255,255,0.1); }
.tab-buttons { display: flex; margin-bottom: 20px; background: rgba(0,0,0,0.3); border-radius: 8px; padding: 4px; }
.tab-button { flex: 1; padding: 12px 20px; background: transparent; border: none; color: #8e8e93; cursor: pointer; border-radius: 6px; font-weight: 500; transition: all 0.3s ease; font-size: 14px; }
.tab-button.active { background: #0066cc; color: white; transform: translateY(-1px); box-shadow: 0 2px 8px rgba(102,126,234,0.3); }
.tab-button:hover:not(.active) { background: rgba(255,255,255,0.1); color: #ffffff; }
.projects-list { display: none; }
.projects-list.active { display: block; }
.project-item { padding: 15px; margin: 8px 0; background: rgba(255,255,255,0.05); border-radius: 8px; cursor: pointer; transition: all 0.3s ease; border: 1px solid transparent; }
.project-item:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); border-color: rgba(102,126,234,0.3); }
.project-item.active { background: rgba(102,126,234,0.2); border-color: #0066cc; }
.project-title { font-weight: 600; font-size: 16px; margin-bottom: 5px; color: var(--text-color); }
.project-subtitle { font-size: 12px; opacity: 0.7; color: var(--text-color); }
.featured-project { flex: 1; background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border-radius: 12px; padding: 40px; border: 1px solid rgba(255,255,255,0.1); min-width: 0; overflow: hidden; }
.featured-project h2 { margin-top: 0; margin-bottom: 15px; color: var(--text-color); background: #0066cc; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-size: 2.2em; }
.project-meta { font-size: 15px; opacity: 0.8; margin-bottom: 25px; color: var(--text-color); }
.project-overview, .key-achievements { margin-bottom: 30px; }
.project-overview h3, .key-achievements h3 { color: var(--text-color); margin-top: 0; margin-bottom: 20px; font-size: 1.4em; }
.project-overview p, .key-achievements p { line-height: 1.7; margin-bottom: 15px; color: var(--text-color); }
.key-achievements ul { padding-left: 20px; color: var(--text-color); columns: 1; column-gap: 40px; }
.key-achievements li { margin-bottom: 12px; line-height: 1.6; break-inside: avoid; }
.project-tags { margin: 30px 0; display: flex; flex-wrap: wrap; gap: 10px; }
.tag { background: rgba(102,126,234,0.2); color: #0066cc; padding: 6px 16px; border-radius: 20px; font-size: 13px; font-weight: 500; border: 1px solid rgba(102,126,234,0.3); }
.project-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 25px; }
.github-button { display: inline-flex; align-items: center; gap: 8px; background: #0066cc; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(102,126,234,0.3); }
.github-button:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(102,126,234,0.4); color: white; text-decoration: none; }
.project-documents, .example-dashboards { margin-top: 25px; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); }
.project-documents h4, .example-dashboards h4 { margin: 0 0 15px 0; font-size: 1.1em; color: var(--text-color); opacity: 0.9; }
.doc-links, .dashboard-links { display: flex; flex-wrap: wrap; gap: 10px; }
.doc-link, .dashboard-link { display: inline-flex; align-items: center; gap: 6px; background: rgba(102,126,234,0.1); color: #0066cc; padding: 10px 18px; text-decoration: none; border-radius: 8px; font-size: 13px; font-weight: 500; border: 1px solid rgba(102,126,234,0.2); transition: all 0.3s ease; }
.doc-link:hover, .dashboard-link:hover { background: rgba(102,126,234,0.2); border-color: rgba(102,126,234,0.4); transform: translateY(-1px); color: #0066cc; text-decoration: none; }
.doc-link svg, .dashboard-link svg { flex-shrink: 0; }
.no-project { text-align: center; padding: 60px 20px; opacity: 0.6; color: var(--text-color); }

@media (min-width: 1400px) { .key-achievements ul { columns: 2; column-gap: 50px; } .featured-project { padding: 50px; } }
@media (min-width: 768px) and (max-width: 1399px) { .projects-container { max-width: 1200px; width: 90%; } .projects-sidebar { flex: 0 0 300px; } .featured-project { padding: 35px; } }
@media (max-width: 768px) {
    .projects-container { flex-direction: column; gap: 20px; margin: 20px 10px; width: calc(100% - 20px); padding: 0; }
    .projects-sidebar { flex: none; order: -1; }
    .tab-buttons { margin-bottom: 15px; } .tab-button { padding: 10px 16px; font-size: 13px; }
    .featured-project { padding: 25px; } .project-item { padding: 12px; }
    .project-title { font-size: 14px; } .project-subtitle { font-size: 11px; }
    .key-achievements ul { columns: 1 !important; } .featured-project h2 { font-size: 1.8em; }
    .doc-links, .dashboard-links { flex-direction: column; }
    .doc-link, .dashboard-link { justify-content: center; }
    .project-actions { flex-direction: column; } .github-button { justify-content: center; }
}
.page-header { max-width: 1600px; margin: 0 auto; padding: 0 40px; }
@media (max-width: 768px) { .page-header { padding: 0 20px; } }

body.dark-mode .projects-sidebar, body.dark-mode .featured-project { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.1); }
body.dark-mode .project-item { background: rgba(255,255,255,0.03); }
body.dark-mode .project-item:hover { background: rgba(255,255,255,0.08); }
body.dark-mode .project-documents, body.dark-mode .example-dashboards { background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.08); }
body:not(.dark-mode) .project-documents, body:not(.dark-mode) .example-dashboards { background: rgba(0,0,0,0.02); border-color: rgba(0,0,0,0.08); }
body:not(.dark-mode) .doc-link, body:not(.dark-mode) .dashboard-link { background: rgba(102,126,234,0.08); border-color: rgba(102,126,234,0.15); }
body:not(.dark-mode) .doc-link:hover, body:not(.dark-mode) .dashboard-link:hover { background: rgba(102,126,234,0.15); border-color: rgba(102,126,234,0.3); }
</style>

<div class="page-header">
    <h1>Projects</h1>
    <p class="page-description">Deep dive into analytical projects with comprehensive technical details and business insights.</p>
</div>

<div class="projects-container">
    <div class="projects-sidebar">
        <div class="tab-buttons">
            <button class="tab-button active" onclick="switchTab('academic')">🎓 Academic</button>
            <button class="tab-button" onclick="switchTab('professional')">💼 Professional</button>
        </div>

        <div class="projects-list active" id="academic-projects">
            <div class="project-item active" onclick="selectProject('last-mile-delivery')"><div class="project-title">Last-Mile Delivery Robots</div><div class="project-subtitle">Otto-von-Guericke University</div></div>
            <div class="project-item" onclick="selectProject('supply-chain-optimization')"><div class="project-title">Supply Chain Network Optimization</div><div class="project-subtitle">Otto-von-Guericke University</div></div>
            <div class="project-item" onclick="selectProject('cross-cultural-analysis')"><div class="project-title">Cross-Cultural Business Strategy</div><div class="project-subtitle">University of Ljubljana</div></div>
            <div class="project-item" onclick="selectProject('ai-b2b-sales')"><div class="project-title">AI-Human Collaboration Analysis</div><div class="project-subtitle">University of Ljubljana</div></div>
            <div class="project-item" onclick="selectProject('tesla-sustainability')"><div class="project-title">Tesla Sustainability Assessment</div><div class="project-subtitle">University of Ljubljana</div></div>
            <div class="project-item" onclick="selectProject('option-pricing')"><div class="project-title">Option Pricing Model</div><div class="project-subtitle">Otto-von-Guericke University</div></div>
            <div class="project-item" onclick="selectProject('risk-analysis')"><div class="project-title">Risk Analysis Framework</div><div class="project-subtitle">IBA Karachi</div></div>
            <div class="project-item" onclick="selectProject('industry-review')"><div class="project-title">Industry Review</div><div class="project-subtitle">IBA Karachi</div></div>
            <div class="project-item" onclick="selectProject('merger-analysis')"><div class="project-title">Merger Analysis</div><div class="project-subtitle">IBA Karachi</div></div>
            <div class="project-item" onclick="selectProject('financial-modelling')"><div class="project-title">Financial Modelling</div><div class="project-subtitle">IBA Karachi</div></div>
        </div>

        <div class="projects-list" id="professional-projects">
            <div class="project-item" onclick="selectProject('survey-analytics')"><div class="project-title">Multilingual Survey Analytics</div><div class="project-subtitle">Bettermile (GLS eCom Lab)</div></div>
            <div class="project-item" onclick="selectProject('platform-intelligence')"><div class="project-title">Third-Party Platform Intelligence</div><div class="project-subtitle">Bettermile (GLS eCom Lab)</div></div>
            <div class="project-item" onclick="selectProject('operational-performance')"><div class="project-title">Operational Performance Analytics</div><div class="project-subtitle">Bettermile (GLS eCom Lab)</div></div>
            <div class="project-item" onclick="selectProject('mobile-analytics')"><div class="project-title">Mobile Experience Analytics</div><div class="project-subtitle">US Mobile</div></div>
            <div class="project-item" onclick="selectProject('bi-dashboards')"><div class="project-title">Business Intelligence Platform</div><div class="project-subtitle">SWVL Pakistan</div></div>
        </div>
    </div>

    <div class="featured-project">

        <!-- LAST-MILE DELIVERY -->
        <div id="last-mile-delivery" class="project-content">
            <h2>Last-Mile Delivery with Autonomous Robots</h2>
            <div class="project-meta">Otto-von-Guericke University • October 2024 - January 2025</div>
            <div class="project-overview"><h3>Project Overview</h3><p>Developed and implemented two distinct algorithmic approaches to solve the complex optimization problem of scheduling last-mile deliveries using truck-based autonomous robots. This research addresses the growing demand for efficient urban logistics solutions by combining traditional operations research with cutting-edge autonomous technology.</p></div>
            <div class="key-achievements"><h3>Key Achievements</h3><ul>
                <li><strong>Gurobi Optimization Implementation:</strong> Developed exact mathematical model using mixed-integer linear programming, achieving optimal solutions for small to medium-sized problem instances</li>
                <li><strong>Heuristic Algorithm Development:</strong> Created custom nearest-neighbor heuristic with local optimization, enabling scalable solutions for large-scale real-world scenarios</li>
                <li><strong>Comparative Performance Analysis:</strong> Conducted comprehensive benchmarking showing heuristic achieves 85-95% of optimal solution quality while reducing computation time by 99.8%</li>
                <li><strong>Industry-Relevant Problem Modeling:</strong> Addressed real logistics constraints including vehicle capacity, robot battery life, and urban delivery time windows</li>
            </ul></div>
            <div class="project-tags"><span class="tag">Python</span><span class="tag">Gurobi Optimizer</span><span class="tag">Operations Research</span><span class="tag">Algorithm Development</span><span class="tag">Mathematical Modeling</span><span class="tag">Logistics Optimization</span></div>
            <div class="project-actions">
                <a href="https://github.com/Hamzauddin-Siddiqui/ovgu-last-mile-delivery-robots" target="_blank" class="github-button"><svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg> View on GitHub</a>
            </div>
            <div class="project-documents"><h4>📄 Project Documents</h4><div class="doc-links">
                <a href="https://hamzauddin-siddiqui.github.io/assets/projects/last-mile-delivery/Seminar_Paper.pdf" target="_blank" class="doc-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/></svg> Seminar Paper</a>
                <a href="https://hamzauddin-siddiqui.github.io/assets/projects/last-mile-delivery/Seminar_PPT.pdf" target="_blank" class="doc-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/></svg> Presentation</a>
                <a href="https://hamzauddin-siddiqui.github.io/assets/projects/last-mile-delivery/Problem_Description.pdf" target="_blank" class="doc-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/></svg> Problem Description</a>
            </div></div>
        </div>

        <!-- SUPPLY CHAIN OPTIMIZATION -->
        <div id="supply-chain-optimization" class="project-content" style="display: none;">
            <h2>Supply Chain Network Optimization</h2>
            <div class="project-meta">Otto-von-Guericke University • October 2025 - January 2026</div>
            <div class="project-overview"><h3>Project Overview</h3><p>Formulated and solved a facility and carrier assignment problem for a global microchip manufacturer's outbound supply chain, optimizing the routing of 9,200+ orders across 19 plants, 9 carriers, and 11 ports. This research addresses real-world logistics decision-making by combining mathematical optimization with comprehensive data analysis on historical operational data.</p></div>
            <div class="key-achievements"><h3>Key Achievements</h3><ul>
                <li><strong>MIP Model Development:</strong> Formulated a Mixed-Integer Programming model in Python (SciPy) minimizing warehouse and freight costs under capacity, availability, network, and service-level constraints</li>
                <li><strong>Infeasibility Resolution:</strong> Designed a 3-tier progressive soft capacity penalty framework to handle demand concentration that made the hard-constraint model infeasible, achieving optimality in 0.33 seconds</li>
                <li><strong>Benchmarking & Cost Analysis:</strong> Identified $171K in warehouse and freight savings versus the baseline and revealed that capacity management — not freight optimization — is the primary cost driver (71.9% warehouse vs 0.1% freight)</li>
                <li><strong>Data-Driven Insights:</strong> Discovered critical operational risks including 92% order concentration at a single plant and severe capacity violations hidden in the company's historical assignment decisions</li>
            </ul></div>
            <div class="project-tags"><span class="tag">Python</span><span class="tag">SciPy</span><span class="tag">Operations Research</span><span class="tag">Mathematical Modeling</span><span class="tag">Supply Chain Optimization</span><span class="tag">Data Analysis</span></div>
            <div class="project-documents"><h4>📄 Project Documents</h4><div class="doc-links">
                <a href="https://hamzauddin-siddiqui.github.io/assets/projects/supply-chain-optimization/Scientific-Project-Final%20Paper.pdf" target="_blank" class="doc-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/></svg> Final Paper</a>
                <a href="https://hamzauddin-siddiqui.github.io/assets/projects/supply-chain-optimization/Scientific-Project-Presentation.pdf" target="_blank" class="doc-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/></svg> Presentation</a>
            </div></div>
        </div>

        <!-- CROSS-CULTURAL ANALYSIS -->
        <div id="cross-cultural-analysis" class="project-content" style="display: none;">
            <h2>Cross-Cultural Business Strategy Analysis: Slovenia-China Tech Cooperation</h2>
            <div class="project-meta">University of Ljubljana • Spring 2025 • Team Project (5 members)</div>
            <div class="project-overview"><h3>Project Overview</h3><p>Conducted comprehensive cross-cultural analysis examining business relationship dynamics between Slovenian and Chinese technology companies. Applied established cultural frameworks to develop actionable market entry strategies for tech startups seeking international expansion in the rapidly growing China-Slovenia technology corridor.</p></div>
            <div class="key-achievements"><h3>Key Achievements</h3><ul>
                <li><strong>Cultural Dimensions Analysis:</strong> Applied Hofstede's and GLOBE frameworks to identify critical differences in individualism vs. collectivism, power distance, and communication contexts between Slovenia and China</li>
                <li><strong>Market Entry Strategy Development:</strong> Created comprehensive recommendations for Slovenian tech startups expanding into Chinese markets, focusing on relationship-building and negotiation tactics</li>
                <li><strong>Theoretical Framework Application:</strong> Successfully applied MSAC theoretical concepts to real-world business scenarios, creating practical insights for cross-cultural B2B relationships</li>
                <li><strong>International Team Leadership:</strong> Collaborated with diverse international team to deliver comprehensive presentation analyzing cultural touchpoints and strategic market penetration recommendations</li>
            </ul></div>
            <div class="project-tags"><span class="tag">Cross-Cultural Analysis</span><span class="tag">Market Research</span><span class="tag">Strategic Planning</span><span class="tag">Hofstede Framework</span><span class="tag">GLOBE Study</span><span class="tag">International Business</span><span class="tag">Team Leadership</span><span class="tag">Presentation Skills</span></div>
            <div class="project-documents"><h4>📄 Project Documents</h4><div class="doc-links">
                <a href="https://hamzauddin-siddiqui.github.io/assets/projects/cross-cultural-strategy/Team-Goodwill-China.pdf" target="_blank" class="doc-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/></svg> Presentation</a>
            </div></div>
        </div>

        <!-- AI B2B SALES -->
        <div id="ai-b2b-sales" class="project-content" style="display: none;">
            <h2>AI-Human Collaboration in B2B Sales Analysis</h2>
            <div class="project-meta">University of Ljubljana • Spring 2025 • Individual Project</div>
            <div class="project-overview"><h3>Project Overview</h3><p>Critical analysis of collaborative intelligence research examining how artificial intelligence and human intelligence create synergistic value throughout the B2B sales funnel. Based on comprehensive review of Paschen, Wilson & Ferreira's academic research on the future of AI-enabled sales processes.</p></div>
            <div class="key-achievements"><h3>Key Achievements</h3><ul>
                <li><strong>Academic Literature Review:</strong> Conducted comprehensive critical analysis of collaborative intelligence research in B2B sales context, synthesizing complex academic frameworks</li>
                <li><strong>AI Applications Mapping:</strong> Systematically examined AI applications across seven stages of B2B sales process including predictive lead qualification, personalized targeting, and dynamic pricing</li>
                <li><strong>Role Distribution Analysis:</strong> Evaluated optimal distribution between AI systems and human sales professionals across the sales funnel, identifying complementary strengths</li>
                <li><strong>Future Implications Assessment:</strong> Analyzed long-term implications of AI integration in sales profession and digitization trends for industry practitioners</li>
            </ul></div>
            <div class="project-tags"><span class="tag">AI Applications</span><span class="tag">B2B Sales Analysis</span><span class="tag">Literature Review</span><span class="tag">Technology Trends</span><span class="tag">Machine Learning</span><span class="tag">Predictive Analytics</span><span class="tag">Academic Research</span><span class="tag">Critical Analysis</span></div>
            <div class="project-documents"><h4>📄 Project Documents</h4><div class="doc-links">
                <a href="https://hamzauddin-siddiqui.github.io/assets/projects/ai-b2b-sales/Bonus-Assignment-MSAC.pdf" target="_blank" class="doc-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/></svg> Analysis Paper</a>
            </div></div>
        </div>

        <!-- TESLA SUSTAINABILITY -->
        <div id="tesla-sustainability" class="project-content" style="display: none;">
            <h2>Tesla Sustainability Assessment: Life Cycle Analysis & Supply Chain Evaluation</h2>
            <div class="project-meta">University of Ljubljana • Spring 2025 • Team Project (4 members)</div>
            <div class="project-overview"><h3>Project Overview</h3><p>Comprehensive sustainability assessment of Tesla's electric vehicles combining quantitative Life Cycle Assessment (LCA) with qualitative supply chain analysis using established SSCM frameworks. This research evaluated environmental and social impacts across the entire vehicle lifecycle from raw material extraction to end-of-life recycling.</p></div>
            <div class="key-achievements"><h3>Key Achievements</h3><ul>
                <li><strong>Rigorous Life Cycle Assessment:</strong> Conducted LCA of Tesla Model 3 using ISO 14040/14044/14067 standards, revealing 62% lower emissions than ICEVs in Europe but 17% higher in China due to electricity grid differences</li>
                <li><strong>Supply Chain Framework Analysis:</strong> Applied Turker and Altuntas SSCM framework to evaluate Tesla's sustainable supply chain practices, analyzing vertical integration strategy and ethical sourcing initiatives</li>
                <li><strong>Regional Impact Analysis:</strong> Demonstrated significant regional variations in environmental impact across different electricity grids (96 gCO2e/km in Europe vs. 376 gCO2e/km in China)</li>
                <li><strong>Strategic Recommendations Development:</strong> Created comprehensive Triple Bottom Line recommendations for automotive industry executives focusing on battery recycling and renewable energy integration</li>
            </ul></div>
            <div class="project-tags"><span class="tag">Life Cycle Assessment</span><span class="tag">Supply Chain Management</span><span class="tag">Sustainability Assessment</span><span class="tag">ISO Standards</span><span class="tag">Environmental Analysis</span><span class="tag">Triple Bottom Line</span><span class="tag">Research Methodology</span><span class="tag">Team Collaboration</span></div>
            <div class="project-documents"><h4>📄 Project Documents</h4><div class="doc-links">
                <a href="https://hamzauddin-siddiqui.github.io/assets/projects/tesla-sustainability/SQSC_Project.pdf" target="_blank" class="doc-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/></svg> Full Report</a>
            </div></div>
        </div>

        <!-- OPTION PRICING -->
        <div id="option-pricing" class="project-content" style="display: none;">
            <h2>Option Pricing Model</h2>
            <div class="project-meta">Otto-von-Guericke University • March 2024 - July 2024</div>
            <div class="project-overview"><h3>Project Overview</h3><p>Engineered a comprehensive option pricing model in Python utilizing 5 years of historical stock data from Yahoo Finance to evaluate the accuracy and assumptions of the European Market Hypothesis and Black-Scholes Model through comparative analysis with real-world option prices.</p></div>
            <div class="key-achievements"><h3>Key Achievements</h3><ul>
                <li><strong>Financial Data Analysis:</strong> Processed and analyzed 5+ years of historical stock price data to calculate volatility, returns, and risk parameters</li>
                <li><strong>Model Implementation:</strong> Developed Black-Scholes pricing algorithm with Monte Carlo simulation validation techniques</li>
                <li><strong>Market Validation:</strong> Conducted empirical analysis comparing theoretical vs. market option prices to assess model accuracy</li>
                <li><strong>Statistical Testing:</strong> Applied statistical hypothesis testing to evaluate European Market Hypothesis assumptions</li>
            </ul></div>
            <div class="project-tags"><span class="tag">Python</span><span class="tag">Financial Modeling</span><span class="tag">Black-Scholes</span><span class="tag">Monte Carlo</span><span class="tag">Statistical Analysis</span><span class="tag">Yahoo Finance API</span></div>
            <p style="color: #8e8e93; font-style: italic; margin-top: 20px;">GitHub repository coming soon - code documentation in progress</p>
        </div>

        <!-- IBA PROJECTS -->
        <div id="risk-analysis" class="project-content" style="display: none;">
            <h2>Risk Analysis Framework</h2>
            <div class="project-meta">Institute of Business Administration • October 2019 - December 2019</div>
            <div class="project-overview"><h3>Project Overview</h3><p>Conducted comprehensive market risk analysis for a diversified portfolio comprising investments in 10 companies from the KMI-30 index, implementing advanced risk assessment methodologies and portfolio optimization techniques.</p></div>
            <div class="key-achievements"><h3>Key Achievements</h3><ul><li><strong>Liquidity Risk Analysis:</strong> Performed liquidity risk assessment for randomly generated assets using advanced statistical models</li><li><strong>Credit Risk Evaluation:</strong> Executed detailed credit risk analysis for selected individual securities with comprehensive risk profiling</li><li><strong>Risk Assessment Methodologies:</strong> Demonstrated proficiency in multiple risk assessment frameworks including VaR and stress testing</li><li><strong>Portfolio Optimization:</strong> Applied modern portfolio theory to optimize risk-return profiles across diverse asset classes</li></ul></div>
            <div class="project-tags"><span class="tag">Excel</span><span class="tag">Risk Assessment</span><span class="tag">Portfolio Analysis</span><span class="tag">Financial Modeling</span><span class="tag">Statistical Analysis</span><span class="tag">VaR Modeling</span></div>
        </div>

        <div id="industry-review" class="project-content" style="display: none;">
            <h2>Industry Review Analysis</h2>
            <div class="project-meta">Institute of Business Administration • April 2019 - May 2019</div>
            <div class="project-overview"><h3>Project Overview</h3><p>Conducted comprehensive industry analysis examining market structure, competitive dynamics, and growth trends within the Pakistani telecommunications sector, providing strategic insights for investment decision-making.</p></div>
            <div class="key-achievements"><h3>Key Achievements</h3><ul><li><strong>Market Structure Analysis:</strong> Analyzed competitive landscape and market concentration ratios across major telecommunications players</li><li><strong>Financial Performance Evaluation:</strong> Conducted comparative financial analysis of key industry participants over 5-year period</li><li><strong>Growth Trend Forecasting:</strong> Developed market growth projections using historical data and industry indicators</li><li><strong>Strategic Recommendations:</strong> Provided data-driven investment recommendations based on industry outlook analysis</li></ul></div>
            <div class="project-tags"><span class="tag">Industry Analysis</span><span class="tag">Market Research</span><span class="tag">Financial Analysis</span><span class="tag">Strategic Planning</span><span class="tag">Excel</span><span class="tag">Data Visualization</span></div>
        </div>

        <div id="merger-analysis" class="project-content" style="display: none;">
            <h2>Merger & Acquisition Analysis</h2>
            <div class="project-meta">Institute of Business Administration • April 2019 - May 2019</div>
            <div class="project-overview"><h3>Project Overview</h3><p>Analyzed the strategic and financial implications of major M&A transactions within the Pakistani banking sector, evaluating synergy potential, valuation methodologies, and post-merger performance outcomes.</p></div>
            <div class="key-achievements"><h3>Key Achievements</h3><ul><li><strong>Valuation Analysis:</strong> Applied multiple valuation methodologies including DCF, comparable company analysis, and precedent transactions</li><li><strong>Synergy Assessment:</strong> Quantified potential cost and revenue synergies through detailed operational analysis</li><li><strong>Due Diligence Framework:</strong> Developed comprehensive due diligence checklist covering financial, operational, and regulatory aspects</li><li><strong>Post-Merger Integration:</strong> Analyzed integration challenges and success factors from historical M&A case studies</li></ul></div>
            <div class="project-tags"><span class="tag">M&A Analysis</span><span class="tag">Valuation Modeling</span><span class="tag">DCF Analysis</span><span class="tag">Financial Due Diligence</span><span class="tag">Excel</span><span class="tag">Strategic Analysis</span></div>
        </div>

        <div id="financial-modelling" class="project-content" style="display: none;">
            <h2>Financial Modeling & Forecasting</h2>
            <div class="project-meta">Institute of Business Administration • October 2018 - December 2018</div>
            <div class="project-overview"><h3>Project Overview</h3><p>Developed comprehensive financial models for corporate valuation and performance forecasting, implementing advanced Excel techniques and financial analysis methodologies for strategic decision support.</p></div>
            <div class="key-achievements"><h3>Key Achievements</h3><ul><li><strong>Three-Statement Model:</strong> Built integrated financial model linking income statement, balance sheet, and cash flow statement</li><li><strong>Scenario Analysis:</strong> Implemented Monte Carlo simulations and sensitivity analysis for risk assessment</li><li><strong>Forecasting Models:</strong> Developed revenue and expense forecasting models using regression analysis and time series methods</li><li><strong>Performance Metrics:</strong> Created automated dashboard tracking key financial ratios and performance indicators</li></ul></div>
            <div class="project-tags"><span class="tag">Financial Modeling</span><span class="tag">Excel Advanced</span><span class="tag">Forecasting</span><span class="tag">Scenario Analysis</span><span class="tag">Monte Carlo</span><span class="tag">Financial Planning</span></div>
        </div>

        <!-- BETTERMILE: SURVEY ANALYTICS -->
        <div id="survey-analytics" class="project-content" style="display: none;">
            <h2>Multilingual Survey Analytics Platform</h2>
            <div class="project-meta">Bettermile (GLS eCom Lab) • December 2024 - Present</div>
            <div class="project-overview"><h3>Project Overview</h3><p>Designed and built a repeatable survey analytics workflow used across 4 separate product surveys spanning up to 5 countries and multiple languages. For each survey, multilingual responses were collected via internal questionnaires, exported as CSV files, then cleaned, analyzed, and presented to product stakeholders through purpose-built interactive HTML dashboards — replacing what would otherwise be hours of manual spreadsheet work with a structured, visual deliverable ready for decision-making.</p></div>
            <div class="key-achievements"><h3>Key Achievements</h3><ul>
                <li><strong>Multi-Country Data Processing:</strong> Built data pipelines handling survey responses across up to 5 countries with mixed-language free-text fields, automated junk detection (e.g. 12 invalid responses flagged and excluded in landing page survey), and consistent cross-country comparison logic</li>
                <li><strong>Actionable Product Insights:</strong> Surfaced concrete findings that directly informed product decisions — such as 92.7% route editing demand across all markets, 87.4% daily live-monitoring usage, and a 4.12/5 landing page satisfaction score with Poland vs. Canada gaps identified</li>
                <li><strong>Stakeholder-Ready Deliverables:</strong> Each dashboard was presented to the General Manager and product teams as the definitive analysis — not a supplement to a spreadsheet, but the primary vehicle for communicating survey results and recommendations</li>
                <li><strong>Reusable Framework:</strong> Established a consistent survey-to-dashboard pattern that was applied across 4 distinct surveys, reducing turnaround time for each subsequent analysis as the approach and code patterns matured</li>
            </ul></div>
            <div class="project-tags"><span class="tag">JavaScript (ES6+)</span><span class="tag">Chart.js</span><span class="tag">Papa Parse</span><span class="tag">CSV Processing</span><span class="tag">Survey Analysis</span><span class="tag">Data Cleaning</span><span class="tag">Multi-Language Data</span><span class="tag">Stakeholder Reporting</span></div>
            <div class="example-dashboards"><h4>📊 Example Dashboards</h4><div class="dashboard-links">
                <a href="https://hamzauddin-siddiqui.github.io/HTML-Dashboards/mobile-survey-dashboard-fixed.html" target="_blank" class="dashboard-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM7.86 10.44l.04-.52h.04l1.16 3.56h.76l1.2-3.56h.02l.04.52.16 3.04h.82L11.82 8h-.92l-1.12 3.32h-.02L8.66 8h-.94l-.36 5.48h.78l.16-3.04h-.02z"/></svg> Mobile Backoffice Survey</a>
                <a href="https://hamzauddin-siddiqui.github.io/HTML-Dashboards/route_editing_dashboard.html" target="_blank" class="dashboard-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM7.86 10.44l.04-.52h.04l1.16 3.56h.76l1.2-3.56h.02l.04.52.16 3.04h.82L11.82 8h-.92l-1.12 3.32h-.02L8.66 8h-.94l-.36 5.48h.78l.16-3.04h-.02z"/></svg> Route Editing Survey</a>
                <a href="https://hamzauddin-siddiqui.github.io/HTML-Dashboards/live-monitoring-survey.html" target="_blank" class="dashboard-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM7.86 10.44l.04-.52h.04l1.16 3.56h.76l1.2-3.56h.02l.04.52.16 3.04h.82L11.82 8h-.92l-1.12 3.32h-.02L8.66 8h-.94l-.36 5.48h.78l.16-3.04h-.02z"/></svg> Live Monitoring Survey</a>
                <a href="https://hamzauddin-siddiqui.github.io/HTML-Dashboards/landing-page-survey.html" target="_blank" class="dashboard-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM7.86 10.44l.04-.52h.04l1.16 3.56h.76l1.2-3.56h.02l.04.52.16 3.04h.82L11.82 8h-.92l-1.12 3.32h-.02L8.66 8h-.94l-.36 5.48h.78l.16-3.04h-.02z"/></svg> Landing Page Feedback</a>
            </div></div>
        </div>

        <!-- BETTERMILE: PLATFORM INTELLIGENCE -->
        <div id="platform-intelligence" class="project-content" style="display: none;">
            <h2>Third-Party Platform Intelligence System</h2>
            <div class="project-meta">Bettermile (GLS eCom Lab) • December 2024 - Present</div>
            <div class="project-overview"><h3>Project Overview</h3><p>Built a suite of automated analysis tools that transform raw CSV exports from third-party platforms — Intercom (customer support), Instabug (bug reporting), and internal tracking systems — into structured, interactive dashboards. These replaced ad-hoc manual analysis that previously consumed significant time each reporting cycle, providing the team with on-demand insights from data that was otherwise sitting in exported spreadsheets.</p></div>
            <div class="key-achievements"><h3>Key Achievements</h3><ul>
                <li><strong>Intercom Analytics Automation:</strong> Built analyzers for both general support reports and driver-specific cases, automatically categorizing conversations, tracking response times, and surfacing resolution patterns — work that previously required manual ticket-by-ticket review</li>
                <li><strong>Bug Report Intelligence:</strong> Created an Instabug CSV analyzer with statistical validity checks, trend identification across time periods, and impact severity assessment — turning raw crash/bug exports into prioritized engineering insights</li>
                <li><strong>App Version Performance Tracking:</strong> Developed a version comparison tool that ingests release data and maps quality metrics, user adoption rates, and regression patterns across app releases — enabling the team to quantify whether a new version improved or degraded the user experience</li>
                <li><strong>Eliminated Manual Reporting Cycles:</strong> Each tool follows a consistent upload-and-analyze pattern: drop in the latest CSV export, get an immediate interactive dashboard. This saved an estimated 10+ hours per week across the team that was previously spent on manual data wrangling in spreadsheets</li>
            </ul></div>
            <div class="project-tags"><span class="tag">JavaScript (ES6+)</span><span class="tag">Chart.js</span><span class="tag">Papa Parse</span><span class="tag">Intercom Analytics</span><span class="tag">Instabug Integration</span><span class="tag">CSV Automation</span><span class="tag">Statistical Analysis</span><span class="tag">Quality Assurance</span></div>
            <div class="example-dashboards"><h4>📊 Example Dashboards</h4><div class="dashboard-links">
                <a href="https://hamzauddin-siddiqui.github.io/HTML-Dashboards/Intercom-Analyzer/" target="_blank" class="dashboard-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM7.86 10.44l.04-.52h.04l1.16 3.56h.76l1.2-3.56h.02l.04.52.16 3.04h.82L11.82 8h-.92l-1.12 3.32h-.02L8.66 8h-.94l-.36 5.48h.78l.16-3.04h-.02z"/></svg> Intercom Reports Analyzer</a>
                <a href="https://hamzauddin-siddiqui.github.io/HTML-Dashboards/driver_cases.html" target="_blank" class="dashboard-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM7.86 10.44l.04-.52h.04l1.16 3.56h.76l1.2-3.56h.02l.04.52.16 3.04h.82L11.82 8h-.92l-1.12 3.32h-.02L8.66 8h-.94l-.36 5.48h.78l.16-3.04h-.02z"/></svg> Driver Cases Analyzer</a>
                <a href="https://hamzauddin-siddiqui.github.io/HTML-Dashboards/Instabug-Analyzer/" target="_blank" class="dashboard-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM7.86 10.44l.04-.52h.04l1.16 3.56h.76l1.2-3.56h.02l.04.52.16 3.04h.82L11.82 8h-.92l-1.12 3.32h-.02L8.66 8h-.94l-.36 5.48h.78l.16-3.04h-.02z"/></svg> Bug Report Analyzer</a>
                <a href="https://hamzauddin-siddiqui.github.io/HTML-Dashboards/app-version-analyzer/" target="_blank" class="dashboard-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM7.86 10.44l.04-.52h.04l1.16 3.56h.76l1.2-3.56h.02l.04.52.16 3.04h.82L11.82 8h-.92l-1.12 3.32h-.02L8.66 8h-.94l-.36 5.48h.78l.16-3.04h-.02z"/></svg> App Version Analyzer</a>
            </div></div>
        </div>

        <!-- BETTERMILE: OPERATIONAL PERFORMANCE -->
        <div id="operational-performance" class="project-content" style="display: none;">
            <h2>Operational Performance Analytics</h2>
            <div class="project-meta">Bettermile (GLS eCom Lab) • December 2024 - Present</div>
            <div class="project-overview"><h3>Project Overview</h3><p>Developed geolocation-aware analytics tools for analyzing driver behavior and depot-level performance across Germany's logistics network. These dashboards process internal operational data — driver notes with GPS coordinates and depot KPIs across 6 regional zones — to surface performance patterns and operational bottlenecks that were previously invisible in raw spreadsheet exports.</p></div>
            <div class="key-achievements"><h3>Key Achievements</h3><ul>
                <li><strong>Driver Notes Intelligence:</strong> Built an analyzer that processes GPS-tagged driver notes, automatically categorizing free-text feedback by issue type and mapping patterns geographically — transforming unstructured field data into actionable operational insights</li>
                <li><strong>Regional Depot Benchmarking:</strong> Created a depot performance tool with dynamic filtering across Germany's Nord, Süd, West, Ost, Center, and Süd-West zones, enabling management to identify underperforming depots and compare operational metrics regionally</li>
                <li><strong>Correlation Studies:</strong> Applied statistical analysis to uncover relationships between driver feedback patterns and depot-level KPIs, grounding operational improvement recommendations in data rather than anecdotes</li>
                <li><strong>Geospatial Data Processing:</strong> Implemented coordinate-based analysis linking driver notes to specific delivery areas, enabling geographic clustering of recurring issues for targeted operational interventions</li>
            </ul></div>
            <div class="project-tags"><span class="tag">JavaScript (ES6+)</span><span class="tag">Chart.js</span><span class="tag">Papa Parse</span><span class="tag">Geolocation Analysis</span><span class="tag">Regional Analytics</span><span class="tag">Performance Metrics</span><span class="tag">Statistical Correlation</span><span class="tag">Logistics Operations</span></div>
            <div class="example-dashboards"><h4>📊 Example Dashboards</h4><div class="dashboard-links">
                <a href="https://hamzauddin-siddiqui.github.io/HTML-Dashboards/driver-notes-analyzer.html" target="_blank" class="dashboard-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM7.86 10.44l.04-.52h.04l1.16 3.56h.76l1.2-3.56h.02l.04.52.16 3.04h.82L11.82 8h-.92l-1.12 3.32h-.02L8.66 8h-.94l-.36 5.48h.78l.16-3.04h-.02z"/></svg> Driver Notes Analyzer</a>
                <a href="https://hamzauddin-siddiqui.github.io/HTML-Dashboards/german_depot_analyzer.html" target="_blank" class="dashboard-link"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM7.86 10.44l.04-.52h.04l1.16 3.56h.76l1.2-3.56h.02l.04.52.16 3.04h.82L11.82 8h-.92l-1.12 3.32h-.02L8.66 8h-.94l-.36 5.48h.78l.16-3.04h-.02z"/></svg> German Depot Analyzer</a>
            </div></div>
        </div>

        <!-- US MOBILE -->
        <div id="mobile-analytics" class="project-content" style="display: none;">
            <h2>Mobile Customer Experience Analytics</h2>
            <div class="project-meta">US Mobile • July 2023 - February 2024</div>
            <div class="project-overview"><h3>Project Overview</h3><p>Led customer experience optimization initiatives through comprehensive analytics of 90-100+ daily customer interactions, implementing systematic quality control processes and performance monitoring systems across multiple communication channels.</p></div>
            <div class="key-achievements"><h3>Key Achievements</h3><ul><li><strong>Customer Service Analytics:</strong> Successfully managed 40-45 daily network issue resolutions while maintaining 95%+ customer satisfaction scores</li><li><strong>Quality Control Systems:</strong> Implemented Klaus-based performance review process for 15+ junior analysts monthly, ensuring consistent service quality</li><li><strong>Compliance Analytics:</strong> Managed 8-10 daily fraud detection cases using Stripe Radar analytics, ensuring regulatory compliance and risk mitigation</li><li><strong>Performance Optimization:</strong> Developed systematic approach to identify improvement opportunities enhancing team productivity aligned with KPIs</li></ul></div>
            <div class="project-tags"><span class="tag">Customer Analytics</span><span class="tag">Quality Control</span><span class="tag">Performance Metrics</span><span class="tag">Fraud Detection</span><span class="tag">Klaus Platform</span><span class="tag">Stripe Analytics</span></div>
        </div>

        <!-- SWVL -->
        <div id="bi-dashboards" class="project-content" style="display: none;">
            <h2>Business Intelligence Platform</h2>
            <div class="project-meta">SWVL Pakistan • February 2021 - August 2021</div>
            <div class="project-overview"><h3>Project Overview</h3><p>Engineered real-time business intelligence dashboards integrating Google BigQuery database with Google Sheets, providing operations teams with comprehensive data analysis capabilities for strategic decision-making and supply chain optimization.</p></div>
            <div class="key-achievements"><h3>Key Achievements</h3><ul><li><strong>Real-Time Data Integration:</strong> Built seamless integration between Google BigQuery and Sheets enabling live operational dashboards</li><li><strong>Supply Chain Analytics:</strong> Developed comprehensive supply chain management analytics improving operational efficiency by 30%</li><li><strong>Financial Decision Support:</strong> Created data-driven reporting systems enabling management to make informed financial decisions</li><li><strong>Operational Optimization:</strong> Implemented automated reporting processes reducing manual analysis time and improving data accuracy</li></ul></div>
            <div class="project-tags"><span class="tag">Google BigQuery</span><span class="tag">Google Sheets</span><span class="tag">Business Intelligence</span><span class="tag">Supply Chain Analytics</span><span class="tag">Data Integration</span><span class="tag">Real-Time Dashboards</span></div>
        </div>

        <div id="no-project" class="project-content" style="display: none;"><div class="no-project"><h3>Select a project from the sidebar</h3><p>Choose a professional project to view detailed information about my industry experience and technical implementations.</p></div></div>
    </div>
</div>

<script>
let currentTab = 'academic';
let currentProject = 'last-mile-delivery';

function switchTab(tab) {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="switchTab('${tab}')"]`).classList.add('active');
    document.querySelectorAll('.projects-list').forEach(list => list.classList.remove('active'));
    document.getElementById(`${tab}-projects`).classList.add('active');
    currentTab = tab;
    const firstProject = document.querySelector(`#${tab}-projects .project-item`);
    if (firstProject) {
        const projectId = firstProject.getAttribute('onclick').match(/'([^']+)'/)[1];
        selectProject(projectId);
    }
}

function selectProject(projectId) {
    document.querySelectorAll('.project-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`[onclick="selectProject('${projectId}')"]`).classList.add('active');
    document.querySelectorAll('.project-content').forEach(content => { content.style.display = 'none'; });
    const selectedProject = document.getElementById(projectId);
    if (selectedProject) { selectedProject.style.display = 'block'; }
    currentProject = projectId;
}

document.addEventListener('DOMContentLoaded', function() { switchTab('academic'); });
</script>

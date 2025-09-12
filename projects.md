<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects - Full Width</title>
    <style>
        :root {
            --text-color: #e0e0e0;
            --bg-dark: #0a0a0a;
            --accent-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: var(--bg-dark);
            color: var(--text-color);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            min-height: 100vh;
        }

        /* Page header - full width with padding */
        .page-header {
            width: 100%;
            padding: 40px 60px 20px;
        }

        .page-header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            background: var(--accent-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .page-description {
            opacity: 0.8;
            font-size: 1.1em;
        }

        /* Main container - uses full viewport width */
        .projects-container {
            display: flex;
            gap: 40px;
            padding: 20px 60px;
            min-height: calc(100vh - 200px);
            width: 100%;
        }

        /* Sidebar - fixed width, optimized for content */
        .projects-sidebar {
            flex: 0 0 380px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 24px;
            height: fit-content;
            position: sticky;
            top: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tab-buttons {
            display: flex;
            margin-bottom: 24px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            padding: 4px;
        }

        .tab-button {
            flex: 1;
            padding: 14px 24px;
            background: transparent;
            border: none;
            color: #8e8e93;
            cursor: pointer;
            border-radius: 6px;
            font-weight: 500;
            transition: all 0.3s ease;
            font-size: 15px;
        }

        .tab-button.active {
            background: var(--accent-gradient);
            color: white;
            transform: translateY(-1px);
            box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        }

        .tab-button:hover:not(.active) {
            background: rgba(255, 255, 255, 0.1);
            color: #ffffff;
        }

        .projects-list {
            display: none;
        }

        .projects-list.active {
            display: block;
        }

        .project-item {
            padding: 18px;
            margin: 10px 0;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 1px solid transparent;
        }

        .project-item:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateX(4px);
            border-color: rgba(102, 126, 234, 0.3);
        }

        .project-item.active {
            background: rgba(102, 126, 234, 0.2);
            border-color: #667eea;
            transform: translateX(4px);
        }

        .project-title {
            font-weight: 600;
            font-size: 17px;
            margin-bottom: 6px;
            color: var(--text-color);
        }

        .project-subtitle {
            font-size: 13px;
            opacity: 0.7;
            color: var(--text-color);
        }

        /* Featured project - takes remaining space */
        .featured-project {
            flex: 1;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 60px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            min-width: 0;
            overflow-y: auto;
            max-height: calc(100vh - 100px);
        }

        .featured-project h2 {
            margin-top: 0;
            margin-bottom: 20px;
            color: var(--text-color);
            background: var(--accent-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-size: 2.8em;
        }

        .project-meta {
            font-size: 16px;
            opacity: 0.8;
            margin-bottom: 35px;
            color: var(--text-color);
        }

        .project-overview, .key-achievements {
            margin-bottom: 40px;
        }

        .project-overview h3,
        .key-achievements h3 {
            color: var(--text-color);
            margin-top: 0;
            margin-bottom: 25px;
            font-size: 1.6em;
        }

        .project-overview p,
        .key-achievements p {
            line-height: 1.8;
            margin-bottom: 20px;
            font-size: 1.05em;
            color: var(--text-color);
        }

        .key-achievements ul {
            padding-left: 25px;
            color: var(--text-color);
            columns: 2;
            column-gap: 60px;
        }

        .key-achievements li {
            margin-bottom: 18px;
            line-height: 1.7;
            font-size: 1.02em;
            break-inside: avoid;
        }

        .project-tags {
            margin: 40px 0;
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .tag {
            background: rgba(102, 126, 234, 0.2);
            color: #667eea;
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
            border: 1px solid rgba(102, 126, 234, 0.3);
        }

        .github-button {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: var(--accent-gradient);
            color: white;
            padding: 16px 32px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
            margin-top: 30px;
        }

        .github-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
            color: white;
            text-decoration: none;
        }

        .no-project {
            text-align: center;
            padding: 80px 20px;
            opacity: 0.6;
            color: var(--text-color);
        }

        .project-content {
            display: none;
        }

        /* Ultra-wide screens (2560px+) - maximize content width */
        @media (min-width: 2560px) {
            .projects-sidebar {
                flex: 0 0 420px;
            }
            
            .featured-project {
                padding: 80px;
            }
            
            .key-achievements ul {
                columns: 3;
                column-gap: 80px;
            }
            
            .featured-project h2 {
                font-size: 3.2em;
            }
        }

        /* Large screens - optimize for readability */
        @media (min-width: 1920px) and (max-width: 2559px) {
            .key-achievements ul {
                columns: 2;
                column-gap: 70px;
            }
        }

        /* Standard desktop */
        @media (min-width: 1200px) and (max-width: 1919px) {
            .projects-container {
                padding: 20px 40px;
            }
            
            .page-header {
                padding: 40px 40px 20px;
            }
            
            .featured-project {
                padding: 50px;
            }
            
            .projects-sidebar {
                flex: 0 0 350px;
            }
        }

        /* Tablet/Small desktop */
        @media (min-width: 768px) and (max-width: 1199px) {
            .projects-container {
                padding: 20px 30px;
                gap: 30px;
            }
            
            .page-header {
                padding: 30px 30px 20px;
            }
            
            .featured-project {
                padding: 40px;
            }
            
            .projects-sidebar {
                flex: 0 0 320px;
            }
            
            .key-achievements ul {
                columns: 1;
            }
        }

        /* Mobile */
        @media (max-width: 767px) {
            .page-header {
                padding: 20px;
            }
            
            .page-header h1 {
                font-size: 2em;
            }
            
            .projects-container {
                flex-direction: column;
                padding: 10px;
                gap: 20px;
            }
            
            .projects-sidebar {
                flex: none;
                position: static;
                width: 100%;
            }
            
            .featured-project {
                padding: 25px;
                max-height: none;
            }
            
            .featured-project h2 {
                font-size: 1.8em;
            }
            
            .key-achievements ul {
                columns: 1 !important;
            }
            
            .project-item {
                padding: 14px;
            }
            
            .project-title {
                font-size: 15px;
            }
        }

        /* Custom scrollbar for featured project */
        .featured-project::-webkit-scrollbar {
            width: 8px;
        }

        .featured-project::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 4px;
        }

        .featured-project::-webkit-scrollbar-thumb {
            background: rgba(102, 126, 234, 0.3);
            border-radius: 4px;
        }

        .featured-project::-webkit-scrollbar-thumb:hover {
            background: rgba(102, 126, 234, 0.5);
        }
    </style>
</head>
<body>
    <div class="page-header">
        <h1>Projects</h1>
        <p class="page-description">Deep dive into analytical projects with comprehensive technical details and business insights.</p>
    </div>

    <div class="projects-container">
        <div class="projects-sidebar">
            <div class="tab-buttons">
                <button class="tab-button active" onclick="switchTab('academic')">
                    🎓 Academic
                </button>
                <button class="tab-button" onclick="switchTab('professional')">
                    💼 Professional
                </button>
            </div>

            <!-- Academic Projects -->
            <div class="projects-list active" id="academic-projects">
                <div class="project-item active" onclick="selectProject('last-mile-delivery')">
                    <div class="project-title">Last-Mile Delivery Robots</div>
                    <div class="project-subtitle">Otto-von-Guericke University</div>
                </div>
                <div class="project-item" onclick="selectProject('option-pricing')">
                    <div class="project-title">Option Pricing Model</div>
                    <div class="project-subtitle">Otto-von-Guericke University</div>
                </div>
                <div class="project-item" onclick="selectProject('risk-analysis')">
                    <div class="project-title">Risk Analysis Framework</div>
                    <div class="project-subtitle">IBA Karachi</div>
                </div>
                <div class="project-item" onclick="selectProject('industry-review')">
                    <div class="project-title">Industry Review</div>
                    <div class="project-subtitle">IBA Karachi</div>
                </div>
                <div class="project-item" onclick="selectProject('merger-analysis')">
                    <div class="project-title">Merger Analysis</div>
                    <div class="project-subtitle">IBA Karachi</div>
                </div>
                <div class="project-item" onclick="selectProject('financial-modelling')">
                    <div class="project-title">Financial Modelling</div>
                    <div class="project-subtitle">IBA Karachi</div>
                </div>
            </div>

            <!-- Professional Projects -->
            <div class="projects-list" id="professional-projects">
                <div class="project-item" onclick="selectProject('bettermile-dashboards')">
                    <div class="project-title">Analytics Dashboards</div>
                    <div class="project-subtitle">Bettermile (GLS eCom Lab)</div>
                </div>
                <div class="project-item" onclick="selectProject('depot-analysis')">
                    <div class="project-title">Depot Performance Analysis</div>
                    <div class="project-subtitle">Bettermile (GLS eCom Lab)</div>
                </div>
                <div class="project-item" onclick="selectProject('mobile-analytics')">
                    <div class="project-title">Mobile Experience Analytics</div>
                    <div class="project-subtitle">US Mobile</div>
                </div>
                <div class="project-item" onclick="selectProject('bi-dashboards')">
                    <div class="project-title">Business Intelligence Platform</div>
                    <div class="project-subtitle">SWVL Pakistan</div>
                </div>
            </div>
        </div>

        <div class="featured-project">
            <!-- Last-Mile Delivery Project (Default) -->
            <div id="last-mile-delivery" class="project-content" style="display: block;">
                <h2>Last-Mile Delivery with Autonomous Robots</h2>
                <div class="project-meta">Otto-von-Guericke University • October 2024 - January 2025</div>

                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Developed and implemented two distinct algorithmic approaches to solve the complex optimization problem of scheduling last-mile deliveries using truck-based autonomous robots. This research addresses the growing demand for efficient urban logistics solutions by combining traditional operations research with cutting-edge autonomous technology.</p>
                </div>

                <div class="key-achievements">
                    <h3>Key Achievements</h3>
                    <ul>
                        <li><strong>Gurobi Optimization Implementation:</strong> Developed exact mathematical model using mixed-integer linear programming, achieving optimal solutions for small to medium-sized problem instances</li>
                        <li><strong>Heuristic Algorithm Development:</strong> Created custom nearest-neighbor heuristic with local optimization, enabling scalable solutions for large-scale real-world scenarios</li>
                        <li><strong>Comparative Performance Analysis:</strong> Conducted comprehensive benchmarking showing heuristic achieves 85-95% of optimal solution quality while reducing computation time by 99.8%</li>
                        <li><strong>Industry-Relevant Problem Modeling:</strong> Addressed real logistics constraints including vehicle capacity, robot battery life, and urban delivery time windows</li>
                    </ul>
                </div>

                <div class="project-tags">
                    <span class="tag">Python</span>
                    <span class="tag">Gurobi Optimizer</span>
                    <span class="tag">Operations Research</span>
                    <span class="tag">Algorithm Development</span>
                    <span class="tag">Mathematical Modeling</span>
                    <span class="tag">Logistics Optimization</span>
                </div>

                <a href="https://github.com/Hamzauddin-Siddiqui/ovgu-last-mile-delivery-robots" target="_blank" class="github-button">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    View on GitHub
                </a>
            </div>

            <!-- Option Pricing Project -->
            <div id="option-pricing" class="project-content">
                <h2>Option Pricing Model</h2>
                <div class="project-meta">Otto-von-Guericke University • March 2024 - July 2024</div>

                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Engineered a comprehensive option pricing model in Python utilizing 5 years of historical stock data from Yahoo Finance to evaluate the accuracy and assumptions of the European Market Hypothesis and Black-Scholes Model through comparative analysis with real-world option prices.</p>
                </div>

                <div class="key-achievements">
                    <h3>Key Achievements</h3>
                    <ul>
                        <li><strong>Financial Data Analysis:</strong> Processed and analyzed 5+ years of historical stock price data to calculate volatility, returns, and risk parameters</li>
                        <li><strong>Model Implementation:</strong> Developed Black-Scholes pricing algorithm with Monte Carlo simulation validation techniques</li>
                        <li><strong>Market Validation:</strong> Conducted empirical analysis comparing theoretical vs. market option prices to assess model accuracy</li>
                        <li><strong>Statistical Testing:</strong> Applied statistical hypothesis testing to evaluate European Market Hypothesis assumptions</li>
                    </ul>
                </div>

                <div class="project-tags">
                    <span class="tag">Python</span>
                    <span class="tag">Financial Modeling</span>
                    <span class="tag">Black-Scholes</span>
                    <span class="tag">Monte Carlo</span>
                    <span class="tag">Statistical Analysis</span>
                    <span class="tag">Yahoo Finance API</span>
                </div>

                <p style="color: #8e8e93; font-style: italic; margin-top: 20px;">
                    GitHub repository coming soon - code documentation in progress
                </p>
            </div>

            <!-- Risk Analysis Project -->
            <div id="risk-analysis" class="project-content">
                <h2>Risk Analysis Framework</h2>
                <div class="project-meta">Institute of Business Administration • October 2019 - December 2019</div>

                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Conducted comprehensive market risk analysis for a diversified portfolio comprising investments in 10 companies from the KMI-30 index, implementing advanced risk assessment methodologies and portfolio optimization techniques.</p>
                </div>

                <div class="key-achievements">
                    <h3>Key Achievements</h3>
                    <ul>
                        <li><strong>Liquidity Risk Analysis:</strong> Performed liquidity risk assessment for randomly generated assets using advanced statistical models</li>
                        <li><strong>Credit Risk Evaluation:</strong> Executed detailed credit risk analysis for selected individual securities with comprehensive risk profiling</li>
                        <li><strong>Risk Assessment Methodologies:</strong> Demonstrated proficiency in multiple risk assessment frameworks including VaR and stress testing</li>
                        <li><strong>Portfolio Optimization:</strong> Applied modern portfolio theory to optimize risk-return profiles across diverse asset classes</li>
                    </ul>
                </div>

                <div class="project-tags">
                    <span class="tag">Excel</span>
                    <span class="tag">Risk Assessment</span>
                    <span class="tag">Portfolio Analysis</span>
                    <span class="tag">Financial Modeling</span>
                    <span class="tag">Statistical Analysis</span>
                    <span class="tag">VaR Modeling</span>
                </div>
            </div>

            <!-- Industry Review Project -->
            <div id="industry-review" class="project-content">
                <h2>Industry Review Analysis</h2>
                <div class="project-meta">Institute of Business Administration • April 2019 - May 2019</div>

                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Conducted comprehensive industry analysis examining market structure, competitive dynamics, and growth trends within the Pakistani telecommunications sector, providing strategic insights for investment decision-making.</p>
                </div>

                <div class="key-achievements">
                    <h3>Key Achievements</h3>
                    <ul>
                        <li><strong>Market Structure Analysis:</strong> Analyzed competitive landscape and market concentration ratios across major telecommunications players</li>
                        <li><strong>Financial Performance Evaluation:</strong> Conducted comparative financial analysis of key industry participants over 5-year period</li>
                        <li><strong>Growth Trend Forecasting:</strong> Developed market growth projections using historical data and industry indicators</li>
                        <li><strong>Strategic Recommendations:</strong> Provided data-driven investment recommendations based on industry outlook analysis</li>
                    </ul>
                </div>

                <div class="project-tags">
                    <span class="tag">Industry Analysis</span>
                    <span class="tag">Market Research</span>
                    <span class="tag">Financial Analysis</span>
                    <span class="tag">Strategic Planning</span>
                    <span class="tag">Excel</span>
                    <span class="tag">Data Visualization</span>
                </div>
            </div>

            <!-- Merger Analysis Project -->
            <div id="merger-analysis" class="project-content">
                <h2>Merger & Acquisition Analysis</h2>
                <div class="project-meta">Institute of Business Administration • April 2019 - May 2019</div>

                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Analyzed the strategic and financial implications of major M&A transactions within the Pakistani banking sector, evaluating synergy potential, valuation methodologies, and post-merger performance outcomes.</p>
                </div>

                <div class="key-achievements">
                    <h3>Key Achievements</h3>
                    <ul>
                        <li><strong>Valuation Analysis:</strong> Applied multiple valuation methodologies including DCF, comparable company analysis, and precedent transactions</li>
                        <li><strong>Synergy Assessment:</strong> Quantified potential cost and revenue synergies through detailed operational analysis</li>
                        <li><strong>Due Diligence Framework:</strong> Developed comprehensive due diligence checklist covering financial, operational, and regulatory aspects</li>
                        <li><strong>Post-Merger Integration:</strong> Analyzed integration challenges and success factors from historical M&A case studies</li>
                    </ul>
                </div>

                <div class="project-tags">
                    <span class="tag">M&A Analysis</span>
                    <span class="tag">Valuation Modeling</span>
                    <span class="tag">DCF Analysis</span>
                    <span class="tag">Financial Due Diligence</span>
                    <span class="tag">Excel</span>
                    <span class="tag">Strategic Analysis</span>
                </div>
            </div>

            <!-- Financial Modelling Project -->
            <div id="financial-modelling" class="project-content">
                <h2>Financial Modeling & Forecasting</h2>
                <div class="project-meta">Institute of Business Administration • October 2018 - December 2018</div>

                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Developed comprehensive financial models for corporate valuation and performance forecasting, implementing advanced Excel techniques and financial analysis methodologies for strategic decision support.</p>
                </div>

                <div class="key-achievements">
                    <h3>Key Achievements</h3>
                    <ul>
                        <li><strong>Three-Statement Model:</strong> Built integrated financial model linking income statement, balance sheet, and cash flow statement</li>
                        <li><strong>Scenario Analysis:</strong> Implemented Monte Carlo simulations and sensitivity analysis for risk assessment</li>
                        <li><strong>Forecasting Models:</strong> Developed revenue and expense forecasting models using regression analysis and time series methods</li>
                        <li><strong>Performance Metrics:</strong> Created automated dashboard tracking key financial ratios and performance indicators</li>
                    </ul>
                </div>

                <div class="project-tags">
                    <span class="tag">Financial Modeling</span>
                    <span class="tag">Excel Advanced</span>
                    <span class="tag">Forecasting</span>
                    <span class="tag">Scenario Analysis</span>
                    <span class="tag">Monte Carlo</span>
                    <span class="tag">Financial Planning</span>
                </div>
            </div>

            <!-- Bettermile Dashboards Project -->
            <div id="bettermile-dashboards" class="project-content">
                <h2>Interactive Analytics Dashboards</h2>
                <div class="project-meta">Bettermile (GLS eCom Lab) • December 2024 - Present</div>

                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Strategically utilized AI coding agents to rapidly develop 8+ interactive HTML dashboards for comprehensive logistics operations analysis, customer support intelligence, and software quality tracking across multiple European markets.</p>
                </div>

                <div class="key-achievements">
                    <h3>Key Achievements</h3>
                    <ul>
                        <li><strong>Rapid Development Workflow:</strong> Leveraged AI-assisted development to accelerate dashboard creation by 70% while maintaining code quality and functionality</li>
                        <li><strong>Multi-Country Analytics:</strong> Built driver performance analysis systems tracking operational metrics across Germany, Netherlands, and Poland with automated categorization</li>
                        <li><strong>Customer Intelligence Platform:</strong> Developed user experience analytics processing survey data from multiple markets with qualitative feedback categorization</li>
                        <li><strong>Quality Assurance Tools:</strong> Created bug tracking and app version performance analysis systems with statistical validity algorithms</li>
                    </ul>
                </div>

                <div class="project-tags">
                    <span class="tag">JavaScript (ES6+)</span>
                    <span class="tag">Chart.js</span>
                    <span class="tag">CSV Processing</span>
                    <span class="tag">Papa Parse</span>
                    <span class="tag">AI-Assisted Development</span>
                    <span class="tag">Responsive Design</span>
                    <span class="tag">Statistical Analysis</span>
                </div>
            </div>

            <!-- Depot Analysis Project -->
            <div id="depot-analysis" class="project-content">
                <h2>German Depot Performance Analysis</h2>
                <div class="project-meta">Bettermile (GLS eCom Lab) • December 2024 - Present</div>

                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Developed comprehensive depot analysis system for German logistics operations, implementing advanced statistical analysis and regression modeling to identify critical operational inefficiencies across 6 regional zones.</p>
                </div>

                <div class="key-achievements">
                    <h3>Key Achievements</h3>
                    <ul>
                        <li><strong>Regional Performance Analysis:</strong> Created dynamic analysis tool with region-based filtering across Nord, Süd, West, Ost, Center, and Süd-West zones</li>
                        <li><strong>Statistical Process Control:</strong> Implemented correlation studies and regression modeling to uncover underlying performance trends and operational inefficiencies</li>
                        <li><strong>Automated KPI Tracking:</strong> Built Python automation scripts eliminating manual reporting processes and reducing analysis time by 85%</li>
                        <li><strong>Data-Driven Decision Support:</strong> Enabled management teams to make informed operational decisions through interactive visualizations and real-time metrics</li>
                    </ul>
                </div>

                <div class="project-tags">
                    <span class="tag">Python</span>
                    <span class="tag">Statistical Analysis</span>
                    <span class="tag">Regression Modeling</span>
                    <span class="tag">Operations Research</span>
                    <span class="tag">KPI Development</span>
                    <span class="tag">Logistics Analytics</span>
                </div>
            </div>

            <!-- Mobile Analytics Project -->
            <div id="mobile-analytics" class="project-content">
                <h2>Mobile Customer Experience Analytics</h2>
                <div class="project-meta">US Mobile • July 2023 - February 2024</div>

                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Led customer experience optimization initiatives through comprehensive analytics of 90-100+ daily customer interactions, implementing systematic quality control processes and performance monitoring systems across multiple communication channels.</p>
                </div>

                <div class="key-achievements">
                    <h3>Key Achievements</h3>
                    <ul>
                        <li><strong>Customer Service Analytics:</strong> Successfully managed 40-45 daily network issue resolutions while maintaining 95%+ customer satisfaction scores</li>
                        <li><strong>Quality Control Systems:</strong> Implemented Klaus-based performance review process for 15+ junior analysts monthly, ensuring consistent service quality</li>
                        <li><strong>Compliance Analytics:</strong> Managed 8-10 daily fraud detection cases using Stripe Radar analytics, ensuring regulatory compliance and risk mitigation</li>
                        <li><strong>Performance Optimization:</strong> Developed systematic approach to identify improvement opportunities enhancing team productivity aligned with KPIs</li>
                    </ul>
                </div>

                <div class="project-tags">
                    <span class="tag">Customer Analytics</span>
                    <span class="tag">Quality Control</span>
                    <span class="tag">Performance Metrics</span>
                    <span class="tag">Fraud Detection</span>
                    <span class="tag">Klaus Platform</span>
                    <span class="tag">Stripe Analytics</span>
                </div>
            </div>

            <!-- BI Dashboards Project -->
            <div id="bi-dashboards" class="project-content">
                <h2>Business Intelligence Platform</h2>
                <div class="project-meta">SWVL Pakistan • February 2021 - August 2021</div>

                <div class="project-overview">
                    <h3>Project Overview</h3>
                    <p>Engineered real-time business intelligence dashboards integrating Google BigQuery database with Google Sheets, providing operations teams with comprehensive data analysis capabilities for strategic decision-making and supply chain optimization.</p>
                </div>

                <div class="key-achievements">
                    <h3>Key Achievements</h3>
                    <ul>
                        <li><strong>Real-Time Data Integration:</strong> Built seamless integration between Google BigQuery and Sheets enabling live operational dashboards</li>
                        <li><strong>Supply Chain Analytics:</strong> Developed comprehensive supply chain management analytics improving operational efficiency by 30%</li>
                        <li><strong>Financial Decision Support:</strong> Created data-driven reporting systems enabling management to make informed financial decisions</li>
                        <li><strong>Operational Optimization:</strong> Implemented automated reporting processes reducing manual analysis time and improving data accuracy</li>
                    </ul>
                </div>

                <div class="project-tags">
                    <span class="tag">Google BigQuery</span>
                    <span class="tag">Google Sheets</span>
                    <span class="tag">Business Intelligence</span>
                    <span class="tag">Supply Chain Analytics</span>
                    <span class="tag">Data Integration</span>
                    <span class="tag">Real-Time Dashboards</span>
                </div>
            </div>

            <!-- Default message when no specific project is selected in Professional tab -->
            <div id="no-project" class="project-content">
                <div class="no-project">
                    <h3>Select a project from the sidebar</h3>
                    <p>Choose a professional project to view detailed information about my industry experience and technical implementations.</p>
                </div>
            </div>
        </div>
    </div>

    <script>
    let currentTab = 'academic';
    let currentProject = 'last-mile-delivery';

    function switchTab(tab) {
        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[onclick="switchTab('${tab}')"]`).classList.add('active');
        
        // Update projects lists
        document.querySelectorAll('.projects-list').forEach(list => list.classList.remove('active'));
        document.getElementById(`${tab}-projects`).classList.add('active');
        
        currentTab = tab;
        
        // Select first project in the new tab
        const firstProject = document.querySelector(`#${tab}-projects .project-item`);
        if (firstProject) {
            const projectId = firstProject.getAttribute('onclick').match(/'([^']+)'/)[1];
            selectProject(projectId);
        }
    }

    function selectProject(projectId) {
        // Update sidebar selection
        document.querySelectorAll('.project-item').forEach(item => item.classList.remove('active'));
        document.querySelector(`[onclick="selectProject('${projectId}')"]`).classList.add('active');
        
        // Update featured project
        document.querySelectorAll('.project-content').forEach(content => {
            content.style.display = 'none';
        });
        
        const selectedProject = document.getElementById(projectId);
        if (selectedProject) {
            selectedProject.style.display = 'block';
        }
        
        currentProject = projectId;
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
        switchTab('academic');
    });
    </script>
</body>
</html>

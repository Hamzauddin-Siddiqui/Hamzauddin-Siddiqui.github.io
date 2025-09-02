---
layout: default
title: Home
---

<div class="profile-section">
  <div class="profile-content">
    <div class="profile-text">
      <h1>Hamzauddin Siddiqui</h1>
      <p class="profile-intro">Welcome to my portfolio! I'm a data analyst with expertise in SQL, Python, Tableau, and business intelligence, currently pursuing my Master's in Operations Research & Business Analytics in Germany. I specialize in turning complex data into clear, actionable business insights.</p>
      
      <div class="profile-buttons">
        <a href="https://www.linkedin.com/in/hamzauddinsiddiqui-786180175" target="_blank" class="btn-primary">LinkedIn</a>
        <a href="{{ '/Hamzauddin_Siddiqui_CV.pdf' | relative_url }}" target="_blank" class="btn-secondary">Download CV</a>
      </div>
    </div>
    <div class="profile-image">
      <img src="{{ '/23 Hamza.jpg' | relative_url }}" alt="Hamzauddin Siddiqui">
    </div>
  </div>
</div>

[Rest of your existing content - work experience and education sections...]

## Work Experience

<div class="experience-section">
  <div class="experience-card" onclick="openModal('bettermile')">
    <div class="company-logo">
      <img src="assets/Bettermile_logo.jpg" alt="Bettermile" class="logo-img">
    </div>
    <div class="experience-content">
      <h3>User Insight and Support</h3>
      <h4>Bettermile</h4>
      <p class="duration">December 2024 - Present (9 months)</p>
      <p class="location">Berlin, Germany • Full-Time</p>
    </div>
  </div>

  <div class="experience-card" onclick="openModal('usmobile')">
    <div class="company-logo">
      <img src="assets/USMobile_logo.jpg" alt="US Mobile" class="logo-img">
    </div>
    <div class="experience-content">
      <h3>Product Experience Analyst</h3>
      <h4>US Mobile</h4>
      <p class="duration">June 2023 - February 2024 (9 months)</p>
      <p class="location">Karachi, Pakistan • Full-Time</p>
    </div>
  </div>

  <div class="experience-card" onclick="openModal('swvl')">
    <div class="company-logo">
      <img src="assets/Swvl_Logo.png" alt="Swvl" class="logo-img">
    </div>
    <div class="experience-content">
      <h3>Business Intelligence Specialist</h3>
      <h4>Swvl</h4>
      <p class="duration">February 2021 - August 2021 (7 months)</p>
      <p class="location">Karachi, Pakistan • Full-Time</p>
      <div class="additional-role">
        <h3>Treasury and Taxation Specialist</h3>
        <p class="duration">September 2020 - January 2021 (5 months)</p>
        <p class="location">Karachi, Pakistan • Full-Time</p>
      </div>
    </div>
  </div>

  <div class="experience-card" onclick="openModal('meezan')">
    <div class="company-logo">
      <img src="assets/meezan_logo.webp" alt="Meezan Bank" class="logo-img">
    </div>
    <div class="experience-content">
      <h3>Product Development Intern</h3>
      <h4>Meezan Bank Limited</h4>
      <p class="duration">June 2019 - August 2019 (3 months)</p>
      <p class="location">Karachi, Pakistan • Internship</p>
    </div>
  </div>

  <div class="experience-card" onclick="openModal('standard')">
    <div class="company-logo">
      <img src="assets/Standard_logo.png" alt="Standard Chartered" class="logo-img">
    </div>
    <div class="experience-content">
      <h3>Summer Finance Intern</h3>
      <h4>Standard Chartered Bank</h4>
      <p class="duration">June 2013 - July 2013 (2 months)</p>
      <p class="location">Karachi, Pakistan • Internship</p>
    </div>
  </div>
</div>

## Education

<div class="education-section">
  <div class="education-card" onclick="openModal('ovgu')">
    <div class="institution-logo">
      <img src="assets/OVGU_logo.jpeg" alt="Otto-von-Guericke University" class="logo-img">
    </div>
    <div class="education-content">
      <h3>Master of Science - MS, Operations Research and Business Analytics</h3>
      <h4>Otto-von-Guericke University Magdeburg</h4>
      <p class="duration">April 2024 - August 2026</p>
    </div>
  </div>

  <div class="education-card" onclick="openModal('ljubljana')">
    <div class="institution-logo">
      <img src="assets/ULSEB_logo.png" alt="University of Ljubljana" class="logo-img">
    </div>
    <div class="education-content">
      <h3>Erasmus+, Study Abroad Exchange Program</h3>
      <h4>University of Ljubljana, School of Economics and Business</h4>
      <p class="duration">February 2025 - July 2025</p>
    </div>
  </div>

  <div class="education-card" onclick="openModal('acca')">
    <div class="institution-logo">
      <img src="assets/ACCA_logo.png" alt="ACCA" class="logo-img">
    </div>
    <div class="education-content">
      <h3>ACCA, Accounting and Finance</h3>
      <h4>ACCA</h4>
      <p class="duration">September 2020 - June 2025</p>
    </div>
  </div>

  <div class="education-card" onclick="openModal('iba')">
    <div class="institution-logo">
      <img src="assets/IBA_logo.png" alt="IBA Karachi" class="logo-img">
    </div>
    <div class="education-content">
      <h3>Bachelor's degree, Accounting and Finance</h3>
      <h4>Institute of Business Administration</h4>
      <p class="duration">2016 - 2020 • CGPA: 3.42</p>
    </div>
  </div>
</div>

<!-- Modal Structure -->
<div id="modal" class="modal">
  <div class="modal-content">
    <span class="close" onclick="closeModal()">&times;</span>
    <div id="modal-body"></div>
  </div>
</div>

<style>
.experience-section, .education-section {
  margin: 3rem 0;
}

.experience-card, .education-card {
  display: flex;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem 0;
  gap: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

html body:not(.dark-mode) .experience-card,
html body:not(.dark-mode) .education-card {
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.experience-card:hover, .education-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

html body.dark-mode .experience-card:hover,
html body.dark-mode .education-card:hover {
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

.company-logo, .institution-logo {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 4px;
  overflow: hidden;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 4px;
}

.experience-content, .education-content {
  flex: 1;
}

.experience-content h3, .education-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: inherit;
}

.experience-content h4, .education-content h4 {
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
  opacity: 0.9;
}

.additional-role {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

html body:not(.dark-mode) .additional-role {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.additional-role h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
}

.duration {
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0.25rem 0;
}

.location {
  font-size: 0.9rem;
  opacity: 0.7;
  margin: 0;
}

/* Modal Styles */
.modal {
  display: none;
  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto;
  padding: 2rem;
  border-radius: 12px;
  width: 80%;
  max-width: 700px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}

html body.dark-mode .modal-content {
  background-color: #2d2d2d;
  color: #e0e0e0;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
}

html body.dark-mode .close:hover,
html body.dark-mode .close:focus {
  color: #fff;
}

html body.dark-mode .experience-content h3,
html body.dark-mode .education-content h3,
html body.dark-mode .experience-content h4,
html body.dark-mode .education-content h4 {
  color: #e0e0e0;
}

html body:not(.dark-mode) .experience-content h3,
html body:not(.dark-mode) .education-content h3,
html body:not(.dark-mode) .experience-content h4,
html body:not(.dark-mode) .education-content h4 {
  color: #333333;
}
</style>

<script>
function openModal(role) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  
  const roleDescriptions = {
    'bettermile': `
      <h2>User Insight and Support - Bettermile</h2>
      <p><strong>Duration:</strong> December 2024 - Present</p>
      <p><strong>Location:</strong> Berlin, Germany</p>
      <h3>Insights Generation:</h3>
      <ul>
        <li>Analyzed comprehensive performance metrics and KPIs across multiple logistics depots, identifying critical operational inefficiencies and improvement opportunities</li>
        <li>Conducted advanced statistical analyses including correlation studies and regression modeling to uncover underlying performance trends and causal relationships</li>
        <li>Developed interactive HTML dashboards to visualize complex operational data, enabling data-driven decision-making for management and operations teams</li>
        <li>Architected and implemented Python automation scripts that eliminated manual reporting processes, increasing efficiency and reducing human error</li>
      </ul>
      <h3>Operational Support:</h3>
      <ul>
        <li>Provided technical troubleshooting and real-time problem resolution for drivers and depot staff during critical operational hours</li>
        <li>Established systematic feedback collection protocols to capture user insights and operational challenges from frontline staff</li>
        <li>Managed cross-functional communication channels between field operations and product development teams</li>
      </ul>
    `,
    'usmobile': `
      <h2>Product Experience Analyst - US Mobile</h2>
      <p><strong>Duration:</strong> June 2023 - February 2024</p>
      <p><strong>Location:</strong> Karachi, Pakistan</p>
      <h3>Customer Operations:</h3>
      <ul>
        <li>Engaged with 90-100 customers and prospective clients to address and resolve complaints, clarify misunderstandings, and enhance overall customer experience</li>
        <li>Led the emails team, diagnosing and resolving an average of 40-45 client network issues daily via Front</li>
        <li>Streamlined the refunds process via Pipefy ensuring a TaT of 5 business days</li>
      </ul>
      <h3>Performance Management:</h3>
      <ul>
        <li>Reviewed and provided constructive feedback on 15 junior analysts' performance per month via Klaus</li>
        <li>Conducted quality control checks on chat and email interactions between agents and customers</li>
      </ul>
      <h3>Marketing & Compliance:</h3>
      <ul>
        <li>Executed 4 successful marketing campaigns to re-engage churned customers</li>
        <li>Managed 8-10 daily cases of potential payment method misuse flagged by Stripe Radar</li>
      </ul>
    `,
    'swvl': `
      <h2>Business Intelligence Specialist - Swvl</h2>
      <p><strong>Duration:</strong> February 2021 - August 2021</p>
      <p><strong>Location:</strong> Karachi, Pakistan</p>
      <ul>
        <li>Developed and implemented real-time financial dashboards by integrating Google BigQuery with Sheets/Excel</li>
        <li>Improved issue resolution process using Zendesk, resulting in a 4% week-over-week reduction in vendor and captain financial complaints</li>
        <li>Coordinated with the Operations team to successfully launch and sustain the fourth business vertical</li>
        <li>Assisted the B2B team with the TaaS launch, ensuring strict financial and legal compliance</li>
        <li>Put in place effective controls to stabilize Gross Merchandise Value (GMV) movement, limiting fluctuations to 5-7% week-over-week</li>
      </ul>
      
      <h2>Treasury and Taxation Specialist - Swvl</h2>
      <p><strong>Duration:</strong> September 2020 - January 2021</p>
      <ul>
        <li>Strategically managed relationships with key financial partners, including primary bank and tax consultants</li>
        <li>Optimized cash flow management by implementing stringent, streamlined and transparent financial controls, reducing the financial runway from 4 weeks to just 1 week</li>
        <li>Standardized payroll processing by incorporating strict deadlines into SOPs, ensuring timely disbursements and flawless tax compliance</li>
        <li>Led the company's first-ever audit, carefully crafting thorough financial books that laid the groundwork for the company's NASDAQ listing</li>
      </ul>
    `,
    'meezan': `
      <h2>Product Development Intern - Meezan Bank Limited</h2>
      <p><strong>Duration:</strong> June 2019 - August 2019</p>
      <p><strong>Location:</strong> Karachi, Pakistan</p>
      <ul>
        <li>Conducted a feasibility study for MBL's transition to branchless banking, including regulatory compliance and capital asset requirements assessment</li>
        <li>Developed an innovative subscription-based sub-leasing model tailored to the software service industry</li>
      </ul>
    `,
    'standard': `
      <h2>Summer Finance Intern - Standard Chartered Bank</h2>
      <p><strong>Duration:</strong> June 2013 - July 2013</p>
      <p><strong>Location:</strong> Karachi, Pakistan</p>
      <ul>
        <li>Collaborated with agents in the acquisition department to gain expertise in marketing and selling personal loans through cold and warm calling strategies</li>
        <li>Acquired knowledge on the functioning of the Electronic Credit Information Bureau (eCIB) system, including tracking credit defaulters and maintaining the credit rating system</li>
      </ul>
    `,
    'ovgu': `
      <h2>Otto-von-Guericke University Magdeburg</h2>
      <p><strong>Degree:</strong> Master of Science - Operations Research and Business Analytics</p>
      <p><strong>Duration:</strong> April 2024 - August 2026</p>
      <p><strong>Location:</strong> Magdeburg, Germany</p>
      
      <h3>Key Courses:</h3>
      <ul>
        <li>Behavioral Finance</li>
        <li>Econometric Analysis of Experimental Data</li>
        <li>Business Decision Making</li>
        <li>Econometrics</li>
        <li>Databases I</li>
        <li>Introduction to Software Engineering for Engineers</li>
        <li>Introduction to Dynamic Decision Making</li>
        <li>Financial Engineering</li>
        <li>Computational Transportation</li>
        <li>Seminar: Advanced Approaches in Operations Management and Logistics</li>
      </ul>
    `,
    'ljubljana': `
      <h2>University of Ljubljana - School of Economics and Business</h2>
      <p><strong>Program:</strong> Erasmus+ Study Abroad Exchange Program</p>
      <p><strong>Duration:</strong> February 2025 - July 2025</p>
      <p><strong>Location:</strong> Ljubljana, Slovenia</p>
      
      <h3>Courses:</h3>
      <ul>
        <li>Marketing and Sales Across Cultures</li>
        <li>Sustainability and Quality in Supply Chains</li>
        <li>Strategic Management 2</li>
        <li>Globalization and Multinational Firms</li>
      </ul>
    `,
    'acca': `
      <h2>ACCA (Association of Chartered Certified Accountants)</h2>
      <p><strong>Qualification:</strong> ACCA, Accounting and Finance</p>
      <p><strong>Duration:</strong> September 2020 - June 2025</p>
      
      <h3>ACCA Papers Covered:</h3>
      <ul>
        <li>Business and Technology (BT)</li>
        <li>Financial Accounting (FA)</li>
        <li>Management Accounting (MA)</li>
        <li>Corporate and Business Law (LW)</li>
        <li>Taxation (TX)</li>
        <li>Financial Reporting (FR)</li>
        <li>Performance Management (PM)</li>
        <li>Financial Management (FM)</li>
        <li>Audit and Assurance (AA)</li>
        <li>Strategic Business Reporting (SBR)</li>
        <li>Strategic Business Leader (SBL)</li>
        <li>Advanced Performance Management (APM)</li>
      </ul>
    `,
    'iba': `
      <h2>Institute of Business Administration (IBA Karachi)</h2>
      <p><strong>Degree:</strong> Bachelor's degree, Accounting and Finance</p>
      <p><strong>Duration:</strong> 2016 - 2020</p>
      <p><strong>CGPA:</strong> 3.42/4.0</p>
      <p><strong>Location:</strong> Karachi, Pakistan</p>
      
      <h3>Key Courses:</h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 1rem;">
        <div>
          <strong>Finance & Investment:</strong>
          <ul style="margin: 5px 0;">
            <li>Financial Management</li>
            <li>Corporate Finance</li>
            <li>Investment Banking</li>
            <li>Portfolio Management</li>
            <li>Financial Risk Management</li>
            <li>Security Analysis</li>
            <li>Fixed Income Investments</li>
            <li>Derivatives</li>
            <li>Financial Modeling</li>
            <li>Islamic Banking & Finance</li>
          </ul>
        </div>
        <div>
          <strong>Accounting & Management:</strong>
          <ul style="margin: 5px 0;">
            <li>Financial Accounting</li>
            <li>Management Accounting</li>
            <li>Advanced Financial Reporting</li>
            <li>Auditing</li>
            <li>Accounting Information Systems (SAP)</li>
            <li>Advanced Managerial Accounting</li>
            <li>Principles of Management</li>
            <li>Organizational Behavior</li>
            <li>Business Communication</li>
          </ul>
        </div>
      </div>
      
      <p style="margin-top: 1rem;"><strong>Internships:</strong></p>
      <ul>
        <li>Corporate Internship: Meezan Bank (June 2019)</li>
        <li>Responsible Citizen Internship: Saylani Welfare (July-August 2017)</li>
      </ul>
    `
  };
  
  modalBody.innerHTML = roleDescriptions[role] || '<p>Details not available</p>';
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
</script>

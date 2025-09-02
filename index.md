---
layout: default
---

<div class="home-container">
  <div class="profile-section">
    <div class="profile-content">
      <h1>Hamzauddin Siddiqui</h1>
      <p class="intro-text">Welcome to my portfolio! I'm a data analyst with expertise in SQL, Python, Tableau, and business intelligence, currently pursuing my Master's in Operations Research & Business Analytics in Germany. I specialize in turning complex data into clear, actionable business insights.</p>
    </div>
    <img src="23 Hamza.jpg" alt="Hamzauddin Siddiqui" class="profile-image">
  </div>
</div>

## Work Experience

<div class="experience-section">
  <div class="experience-card" onclick="openModal('bettermile')">
    <div class="company-logo bettermile-logo">
      <span class="logo-text">B</span>
    </div>
    <div class="experience-content">
      <h3>User Insight and Support</h3>
      <h4>Bettermile</h4>
      <p class="duration">December 2024 - Present (9 months)</p>
      <p class="location">Berlin, Germany • Full-Time</p>
    </div>
  </div>

  <div class="experience-card" onclick="openModal('usmobile')">
    <div class="company-logo usmobile-logo">
      <span class="logo-text">U</span>
    </div>
    <div class="experience-content">
      <h3>Product Experience Analyst</h3>
      <h4>US Mobile</h4>
      <p class="duration">June 2023 - February 2024 (9 months)</p>
      <p class="location">Karachi, Pakistan • Full-Time</p>
    </div>
  </div>

  <div class="experience-card" onclick="openModal('swvl')">
    <div class="company-logo swvl-logo">
      <span class="logo-text">S</span>
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
    <div class="company-logo meezan-logo">
      <span class="logo-text">M</span>
    </div>
    <div class="experience-content">
      <h3>Product Development Intern</h3>
      <h4>Meezan Bank Limited</h4>
      <p class="duration">June 2019 - August 2019 (3 months)</p>
      <p class="location">Karachi, Pakistan • Internship</p>
    </div>
  </div>

  <div class="experience-card" onclick="openModal('standard')">
    <div class="company-logo standard-logo">
      <span class="logo-text">S</span>
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
    <div class="institution-logo ovgu-logo">
      <span class="logo-text">O</span>
    </div>
    <div class="education-content">
      <h3>Master of Science - MS, Operations Research and Business Analytics</h3>
      <h4>Otto-von-Guericke University Magdeburg</h4>
      <p class="duration">April 2024 - August 2026</p>
    </div>
  </div>

  <div class="education-card" onclick="openModal('ljubljana')">
    <div class="institution-logo ljubljana-logo">
      <span class="logo-text">U</span>
    </div>
    <div class="education-content">
      <h3>Erasmus+, Study Abroad Exchange Program</h3>
      <h4>University of Ljubljana, School of Economics and Business</h4>
      <p class="duration">February 2025 - July 2025</p>
    </div>
  </div>

  <div class="education-card" onclick="openModal('acca')">
    <div class="institution-logo acca-logo">
      <span class="logo-text">A</span>
    </div>
    <div class="education-content">
      <h3>ACCA, Accounting and Finance</h3>
      <h4>ACCA</h4>
      <p class="duration">September 2020 - June 2025</p>
    </div>
  </div>

  <div class="education-card" onclick="openModal('iba')">
    <div class="institution-logo iba-logo">
      <span class="logo-text">I</span>
    </div>
    <div class="education-content">
      <h3>Bachelor's degree, Accounting and Finance</h3>
      <h4>Institute of Business Administration</h4>
      <p class="duration">2016 - 2020</p>
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
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
}

/* Company-specific logo colors */
.bettermile-logo { background: linear-gradient(135deg, #00a8ff 0%, #0097e6 100%); }
.usmobile-logo { background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); }
.swvl-logo { background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%); }
.meezan-logo { background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%); }
.standard-logo { background: linear-gradient(135deg, #3498db 0%, #2980b9 100%); }

/* Institution-specific logo colors */
.ovgu-logo { background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%); }
.ljubljana-logo { background: linear-gradient(135deg, #1abc9c 0%, #16a085 100%); }
.acca-logo { background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%); }
.iba-logo { background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); }

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
  max-width: 600px;
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
      <p><strong>Skills:</strong> Credit Analysis • Loans • Finance • Loan Servicing</p>
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

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
  <div class="experience-card">
    <div class="company-logo">
      <div class="logo-placeholder">B</div>
    </div>
    <div class="experience-content">
      <h3>User Insight and Support</h3>
      <h4>Bettermile</h4>
      <p class="duration">December 2024 - Present (9 months)</p>
      <p class="location">Berlin, Germany • Full-Time</p>
    </div>
  </div>

  <div class="experience-card">
    <div class="company-logo">
      <div class="logo-placeholder">U</div>
    </div>
    <div class="experience-content">
      <h3>Product Experience Analyst</h3>
      <h4>US Mobile</h4>
      <p class="duration">June 2023 - February 2024 (9 months)</p>
      <p class="location">Karachi, Pakistan • Full-Time</p>
    </div>
  </div>

  <div class="experience-card">
    <div class="company-logo">
      <div class="logo-placeholder">S</div>
    </div>
    <div class="experience-content">
      <h3>Business Intelligence Specialist</h3>
      <h4>Swvl</h4>
      <p class="duration">February 2021 - August 2021 (7 months)</p>
      <p class="location">Karachi, Pakistan • Full-Time</p>
    </div>
  </div>

  <div class="experience-card">
    <div class="company-logo">
      <div class="logo-placeholder">S</div>
    </div>
    <div class="experience-content">
      <h3>Treasury and Taxation Specialist</h3>
      <h4>Swvl</h4>
      <p class="duration">September 2020 - January 2021 (5 months)</p>
      <p class="location">Karachi, Pakistan • Full-Time</p>
    </div>
  </div>

  <div class="experience-card">
    <div class="company-logo">
      <div class="logo-placeholder">M</div>
    </div>
    <div class="experience-content">
      <h3>Product Development Intern</h3>
      <h4>Meezan Bank Limited</h4>
      <p class="duration">June 2019 - August 2019 (3 months)</p>
      <p class="location">Karachi, Pakistan • Internship</p>
    </div>
  </div>
</div>

## Education

<div class="education-section">
  <div class="education-card">
    <div class="institution-logo">
      <div class="logo-placeholder">O</div>
    </div>
    <div class="education-content">
      <h3>Master of Science - MS, Operations Research and Business Analytics</h3>
      <h4>Otto-von-Guericke University Magdeburg</h4>
      <p class="duration">April 2024 - August 2026</p>
    </div>
  </div>

  <div class="education-card">
    <div class="institution-logo">
      <div class="logo-placeholder">U</div>
    </div>
    <div class="education-content">
      <h3>Erasmus+, Study Abroad Exchange Program</h3>
      <h4>University of Ljubljana, School of Economics and Business</h4>
      <p class="duration">February 2025 - July 2025</p>
    </div>
  </div>

  <div class="education-card">
    <div class="institution-logo">
      <div class="logo-placeholder">A</div>
    </div>
    <div class="education-content">
      <h3>ACCA, Accounting and Finance</h3>
      <h4>ACCA</h4>
      <p class="duration">September 2020 - June 2025</p>
    </div>
  </div>

  <div class="education-card">
    <div class="institution-logo">
      <div class="logo-placeholder">I</div>
    </div>
    <div class="education-content">
      <h3>Bachelor's degree, Accounting and Finance</h3>
      <h4>Institute of Business Administration</h4>
      <p class="duration">2016 - 2020</p>
    </div>
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
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

---
layout: default
---

<div class="about-page-container">
  <h1>About Me</h1>
  
  <div class="about-intro">
    <p class="intro-statement">I believe data tells stories that can transform businesses. My role is to listen, interpret, and translate those stories into actionable insights that drive real results.</p>
  </div>

  <div class="about-sections">
    <div class="about-card">
      <div class="card-icon">🎯</div>
      <div class="card-content">
        <h2>My Approach</h2>
        <p>I don't just analyze data. I solve business problems. At SWVL, I was responsible for presenting Weekly Business Reviews to the General Manager of Pakistan, which sharpened my ability to identify and present data that would actually be meaningful to leadership from the clutter of available information.</p>
        <p>My background in both finance and operations research gives me a unique perspective: I understand the business impact behind every metric and can translate complex findings into actionable strategies.</p>
      </div>
    </div>

    <div class="about-card">
      <div class="card-icon">🌍</div>
      <div class="card-content">
        <h2>International Perspective</h2>
        <p>My journey from Pakistan's startup ecosystem to Germany's structured business environment has shaped how I approach problems. As a Business Intelligence Specialist at SWVL, I worked with partners across Egypt, Dubai, and Nigeria. This experience developed my stakeholder management and communication skills across diverse cultural contexts.</p>
        <p>Currently pursuing my Master's in Germany while on Erasmus in Slovenia, I'm building expertise that bridges emerging markets and European business practices with precision and cultural adaptability.</p>
      </div>
    </div>

    <div class="about-card">
      <div class="card-icon">🔧</div>
      <div class="card-content">
        <h2>How I Work</h2>
        <p>I thrive in collaborative environments where I can bridge the gap between technical teams and business stakeholders. My experience managing cross-functional communication at Bettermile and leading teams at US Mobile taught me that the best insights come from understanding both the data and the people who use it.</p>
        <p>I prefer iterative approaches. Quick wins that build toward comprehensive solutions rather than perfect analyses that arrive too late to be useful.</p>
      </div>
    </div>

    <div class="about-card">
      <div class="card-icon">📚</div>
      <div class="card-content">
        <h2>Beyond Analytics</h2>
        <p>My curiosity extends far beyond spreadsheets. I'm passionate about philosophy and history, which helps me think critically about problems from multiple perspectives. Whether I'm exploring new domains like bio-engineering or astrophysics, I bring the same analytical rigor to understanding complex systems.</p>
        <p>This interdisciplinary thinking often leads to creative solutions. My broad reading interests and diverse academic background have shaped my critical thinking abilities, allowing me to approach business challenges from unexpected angles.</p>
      </div>
    </div>
  </div>

  <div class="about-footer">
    <p class="footer-statement">Ready to turn your data challenges into competitive advantages. Let's build something meaningful together.</p>
  </div>
</div>

<style>
.about-page-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.about-intro {
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

.about-sections {
  display: grid;
  gap: 2rem;
  margin: 3rem 0;
}

.about-card {
  display: flex;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
}

html body:not(.dark-mode) .about-card {
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.about-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

html body.dark-mode .about-card:hover {
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

.card-icon {
  font-size: 2rem;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

html body:not(.dark-mode) .card-icon {
  background: rgba(0, 0, 0, 0.05);
}

.card-content {
  flex: 1;
}

.card-content h2 {
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
  font-weight: 600;
}

.card-content p {
  margin: 0 0 1rem 0;
  line-height: 1.6;
  opacity: 0.9;
}

.card-content p:last-child {
  margin-bottom: 0;
}

.about-footer {
  text-align: center;
  margin: 3rem 0 1rem 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

html body:not(.dark-mode) .about-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.footer-statement {
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.8;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .about-card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .card-icon {
    align-self: center;
  }
  
  .intro-statement {
    font-size: 1.1rem;
  }
}
</style>

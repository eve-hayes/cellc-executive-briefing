'use client'

import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('all')
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('evehayes@mweb.co.za')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const experiences = [
    {
      company: 'Achievement Awards Group',
      role: 'Program Manager',
      period: 'June 2024 – Present',
      location: 'Cape Town, South Africa',
      type: 'program',
      summary: 'Steering strategic enterprise programs, ensuring alignment across executive sponsors, cross-functional delivery squads, and key organizational outcomes.',
      points: [
        'End-to-end program delivery governance and timeline orchestration',
        'Facilitating cross-departmental coordination between creative, technical, and operational units',
        'Stakeholder engagement and executive steering committee reporting'
      ]
    },
    {
      company: 'Ecentric Payment Systems',
      role: 'Product Owner',
      period: 'May 2023 – July 2024',
      location: 'Cape Town, South Africa',
      type: 'product',
      summary: 'Drove product backlog management and feature milestones for high-volume, mission-critical payment processing solutions.',
      points: [
        'Sprint planning, story grooming, and acceptance criteria definition',
        'Bridging business partner requirements with technical engineering squads',
        'Agile delivery within a highly regulated financial transaction space'
      ]
    },
    {
      company: 'Achievement Awards Group',
      role: 'Operations Manager / Programme Manager & Senior Project Manager',
      period: 'Dec 2012 – Nov 2023 · 11 Years',
      location: 'Cape Town, South Africa',
      type: 'operations',
      summary: 'Held 11 years of progressive operational and program leadership across project management offices, system deployments, and enterprise operations.',
      points: [
        'Executed best-practice project management across both Waterfall and Agile methodologies',
        'Compiled complete PM documentation following standard SDLC approaches',
        'Led comprehensive organizational risk, issue mitigation, and change management',
        'Managed software deployment planning, environment releases, and release schedules',
        'Chaired Steering Committee meetings and served as an active member of Opscom (Operations Committee)',
        'Oversaw program budget planning and strict cost management',
        'Implemented People Change Management principles, team mentoring, and client-service PM training',
        'Administered cloud-based project tooling (Project Insight) and Microsoft Project'
      ]
    },
    {
      company: 'WOW Marketing',
      role: 'Account Manager',
      period: 'Feb 2010 – Nov 2012',
      location: 'South Africa',
      type: 'operations',
      summary: 'Developed and directed custom Rewards & Recognition programmes tailored to diverse client industry environments.',
      points: [
        'Strategized unique reward frameworks designed to motivate staff and boost retention',
        'Facilitated all IT, data, and creative outputs for launch and continuous maintenance',
        'Serviced client internal marketing campaigns and human capital initiatives'
      ]
    }
  ]

  const filteredExperiences = activeTab === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === activeTab || (activeTab === 'governance' && (exp.type === 'program' || exp.type === 'operations')))

  const skillsGrouped = [
    {
      category: 'Program & Project Governance',
      items: [
        { name: 'Project Portfolio Management', detail: 'Cross-initiative alignment & priority tracking' },
        { name: 'Waterfall & Agile Delivery', detail: 'Certified dual-framework execution' },
        { name: 'SDLC Documentation', detail: 'Full lifecycle governance & requirements architecture' },
        { name: 'Steering Committee Leadership', detail: 'Executive reporting & governance chair' },
        { name: 'Deployment & Release Planning', detail: 'Risk-controlled operational rollouts' }
      ]
    },
    {
      category: 'Operations & Financial Stewardship',
      items: [
        { name: 'Operations Committee (Opscom)', detail: 'Institutional operational strategy' },
        { name: 'Risk, Issue & Change Control', detail: 'Proactive mitigation & change impact models' },
        { name: 'Budget & Cost Management', detail: 'Resource allocation & expenditure oversight' },
        { name: 'Client & Vendor Facilitation', detail: 'High-touch stakeholder collaboration' }
      ]
    },
    {
      category: 'People, Culture & Tooling',
      items: [
        { name: 'Team Mentoring & Coaching', detail: 'Career progression & team empowerment' },
        { name: 'People Change Management', detail: 'Adoption frameworks for new systems' },
        { name: 'Methodology Training', detail: 'Client service project management workshops' },
        { name: 'Project Insight (Admin)', detail: 'Cloud PM environment administration' },
        { name: 'Microsoft Project', detail: 'Critical path & resource scheduling' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#222320]">
      {/* Top Quiet Navigation */}
      <nav className="border-b border-[#e8e2d4] bg-[#faf8f5]/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#intro" className="font-serif text-xl tracking-tight text-[#222320] hover:text-[#3f5a2a] transition-colors">
            Eve Hayes
          </a>

          <div className="flex items-center gap-6 text-[15px] text-[#59574e]">
            <a href="#about" className="hover:text-[#222320] transition-colors hidden sm:inline">About</a>
            <a href="#experience" className="hover:text-[#222320] transition-colors hidden sm:inline">Experience</a>
            <a href="#skills" className="hover:text-[#222320] transition-colors hidden sm:inline">Skills</a>
            <a href="#initiative" className="hover:text-[#222320] transition-colors hidden md:inline">Initiatives</a>
            <a href="#contact" className="hover:text-[#222320] transition-colors">Contact</a>
            <a 
              href="/Profile.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-1.5 bg-[#ede7dc] text-[#222320] hover:bg-[#3f5a2a] hover:text-white rounded-none text-sm transition-all"
            >
              Resume PDF
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-16 pb-28">
        {/* 1. Intro Section (Hero) */}
        <section id="intro" className="pt-8 pb-24 max-w-3xl">
          <p className="text-[#59574e] text-base mb-4 tracking-normal">
            Cape Town, Western Cape, South Africa
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#222320] leading-[1.1] mb-6">
            Eve Hayes
          </h1>

          <p className="font-serif text-2xl sm:text-3xl text-[#59574e] italic mb-6">
            Program Manager & Operations Leader
          </p>

          <p className="text-lg text-[#222320] leading-relaxed max-w-2xl mb-8">
            An advocate for strong work ethics, disciplined execution, and an &ldquo;I-can-do&rdquo; attitude. 
            Delivering high-quality products and strategic project governance across Waterfall, Agile, and enterprise systems.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-[#3f5a2a] text-white hover:bg-[#304520] transition-colors inline-block"
            >
              Get in Touch
            </a>
            <a 
              href="https://www.linkedin.com/in/eve-hayes-2a491122/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-[#ede7dc] text-[#222320] hover:bg-[#e0d8c8] transition-colors inline-flex items-center gap-2"
            >
              <span>LinkedIn Profile</span>
              <span className="text-xs">↗</span>
            </a>
            <a 
              href="https://github.com/eve-hayes" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-[#ede7dc] text-[#222320] hover:bg-[#e0d8c8] transition-colors inline-flex items-center gap-2"
            >
              <span>GitHub</span>
              <span className="text-xs">↗</span>
            </a>
            <a 
              href="/Profile.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-[#ede7dc] text-[#222320] hover:bg-[#e0d8c8] transition-colors inline-flex items-center gap-2"
            >
              <span>Download PDF</span>
              <span className="text-xs">↓</span>
            </a>
          </div>
        </section>

        {/* 2. About Me Section (Side facts, wide paragraph) */}
        <section id="about" className="py-20 border-t border-[#e8e2d4]">
          <h2 className="font-serif text-2xl text-[#222320] mb-8">
            About
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left side facts */}
            <div className="md:col-span-4 space-y-6 text-sm">
              <div>
                <p className="text-[#59574e] text-xs uppercase tracking-wider mb-1">Focus</p>
                <p className="text-[#222320] font-medium">Program Management & Operations</p>
              </div>
              <div>
                <p className="text-[#59574e] text-xs uppercase tracking-wider mb-1">Methodologies</p>
                <p className="text-[#222320] font-medium">Certified Waterfall & Agile (SDLC)</p>
              </div>
              <div>
                <p className="text-[#59574e] text-xs uppercase tracking-wider mb-1">Key Tenures</p>
                <p className="text-[#222320] font-medium">11 Years at Achievement Awards Group</p>
              </div>
              <div>
                <p className="text-[#59574e] text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="text-[#222320] font-medium">Cape Town, South Africa</p>
              </div>
            </div>

            {/* Right wide paragraph */}
            <div className="md:col-span-8 space-y-5 text-base sm:text-lg text-[#222320] leading-relaxed">
              <p>
                I am a highly motivated and goal-driven professional. I am an advocate for strong work ethics, 
                and an <strong>I-can-do attitude</strong> for myself and my team.
              </p>
              <p>
                I take great pride in delivering high-quality products and projects, making my clients and colleagues 
                look good—which in turn provides genuine job satisfaction.
              </p>
              <p>
                I have enormously diverse and practical experience. I am highly resourceful, organized, and my tenacity 
                is my defining difference. I value having a positive working relationship with my teams, and genuinely 
                enjoy being an active part of their career development as well as my own.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Work Experience Section (Quiet ledger) */}
        <section id="experience" className="py-20 border-t border-[#e8e2d4]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 gap-4">
            <h2 className="font-serif text-2xl text-[#222320]">
              Work Experience
            </h2>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 text-xs">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1 transition-colors ${activeTab === 'all' ? 'bg-[#3f5a2a] text-white' : 'bg-[#ede7dc] text-[#59574e] hover:text-[#222320]'}`}
              >
                All Roles
              </button>
              <button 
                onClick={() => setActiveTab('program')}
                className={`px-3 py-1 transition-colors ${activeTab === 'program' ? 'bg-[#3f5a2a] text-white' : 'bg-[#ede7dc] text-[#59574e] hover:text-[#222320]'}`}
              >
                Program Management
              </button>
              <button 
                onClick={() => setActiveTab('operations')}
                className={`px-3 py-1 transition-colors ${activeTab === 'operations' ? 'bg-[#3f5a2a] text-white' : 'bg-[#ede7dc] text-[#59574e] hover:text-[#222320]'}`}
              >
                Operations & PMO
              </button>
            </div>
          </div>

          <div className="space-y-12">
            {filteredExperiences.map((exp, idx) => (
              <article key={idx} className="pb-10 border-b border-[#ece7dc] last:border-b-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="text-xl font-medium text-[#222320]">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-[#59574e] font-mono sm:font-sans">
                    {exp.period}
                  </span>
                </div>

                <div className="text-sm font-medium text-[#3f5a2a] mb-3">
                  {exp.company} <span className="text-[#737066] font-normal">· {exp.location}</span>
                </div>

                <p className="text-base text-[#222320] leading-relaxed mb-4 max-w-3xl">
                  {exp.summary}
                </p>

                <ul className="space-y-2 text-sm text-[#59574e] max-w-3xl">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-[#3f5a2a] mt-1 text-xs">■</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Skills & Competencies Section (Two-ended rows, narrow column) */}
        <section id="skills" className="py-20 border-t border-[#e8e2d4]">
          <h2 className="font-serif text-2xl text-[#222320] mb-8">
            Skills & Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skillsGrouped.map((grp, gIdx) => (
              <div key={gIdx} className="space-y-4">
                <h3 className="text-sm uppercase tracking-wider text-[#59574e] font-medium pb-2 border-b border-[#e8e2d4]">
                  {grp.category}
                </h3>
                <div className="space-y-4">
                  {grp.items.map((item, iIdx) => (
                    <div key={iIdx} className="text-sm">
                      <p className="font-medium text-[#222320]">{item.name}</p>
                      <p className="text-xs text-[#59574e] mt-0.5">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Projects & Featured Initiative (Specialized Creative Leadership) */}
        <section id="initiative" className="py-20 border-t border-[#e8e2d4]">
          <h2 className="font-serif text-2xl text-[#222320] mb-8">
            Featured Initiative
          </h2>

          <div className="bg-[#ede7dc]/60 p-8 sm:p-10 border border-[#e0d8c8] max-w-3xl">
            <span className="text-xs uppercase tracking-wider text-[#3f5a2a] font-medium block mb-2">
              Visionary & Producer
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#222320] mb-4">
              Writers&rsquo; Retreat & Hollywood Mentorships
            </h3>
            <p className="text-base sm:text-lg text-[#222320] leading-relaxed mb-6">
              Visionary and producer of an exclusive retreat and curated event for writers—connecting promising 
              storytellers with world-class Hollywood mentorships, masterclasses, and creative direction.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-[#59574e]">
              <span className="px-3 py-1 bg-[#faf8f5] border border-[#ded6c6]">Event Production</span>
              <span className="px-3 py-1 bg-[#faf8f5] border border-[#ded6c6]">Talent Mentorship</span>
              <span className="px-3 py-1 bg-[#faf8f5] border border-[#ded6c6]">Curated Programming</span>
            </div>
          </div>
        </section>

        {/* 6. Certifications & Education Section */}
        <section id="credentials" className="py-20 border-t border-[#e8e2d4]">
          <h2 className="font-serif text-2xl text-[#222320] mb-8">
            Certifications & Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-wider text-[#59574e] font-medium pb-2 border-b border-[#e8e2d4]">
                Professional Certifications
              </h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium text-[#222320]">NQF5 Project Management</p>
                  <p className="text-xs text-[#59574e]">National Qualifications Framework standard</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-[#222320]">Operations Management</p>
                  <p className="text-xs text-[#59574e]">Operational governance, process execution & efficiency</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-[#222320]">Certified Waterfall & Agile</p>
                  <p className="text-xs text-[#59574e]">Dual methodology practitioner for enterprise delivery</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-wider text-[#59574e] font-medium pb-2 border-b border-[#e8e2d4]">
                Education
              </h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium text-[#222320]">AAA School of Advertising</p>
                  <p className="text-xs text-[#59574e]">Brand & Strategy Management, Project Management · 1991</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-[#222320]">Cambridge College, Durban</p>
                  <p className="text-xs text-[#59574e]">Academic Studies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Contact Section (Sentence, details, links) */}
        <section id="contact" className="py-20 border-t border-[#e8e2d4]">
          <h2 className="font-serif text-2xl text-[#222320] mb-4">
            Contact
          </h2>

          <p className="font-serif text-2xl sm:text-3xl text-[#222320] leading-snug mb-8 max-w-2xl">
            Available for program leadership, strategic operational consulting, and executive advisory.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-6 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#59574e] mb-1">Email</p>
                <div className="flex items-center gap-3">
                  <a 
                    href="mailto:evehayes@mweb.co.za" 
                    className="text-lg text-[#222320] hover:text-[#3f5a2a] underline underline-offset-4"
                  >
                    evehayes@mweb.co.za
                  </a>
                  <button 
                    onClick={copyEmail}
                    className="text-xs px-2.5 py-1 bg-[#ede7dc] hover:bg-[#e0d8c8] text-[#222320] transition-colors"
                  >
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#59574e] mb-1">Telephone</p>
                <a 
                  href="tel:0836516559" 
                  className="text-lg text-[#222320] hover:text-[#3f5a2a] underline underline-offset-4"
                >
                  0836516559
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#59574e] mb-1">Location</p>
                <p className="text-base text-[#222320]">Cape Town, Western Cape, South Africa</p>
              </div>
            </div>

            <div className="md:col-span-6 space-y-3">
              <p className="text-xs uppercase tracking-wider text-[#59574e] mb-2">Connect Directly</p>
              <div>
                <a 
                  href="https://www.linkedin.com/in/eve-hayes-2a491122/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-base text-[#222320] hover:text-[#3f5a2a] underline underline-offset-4"
                >
                  <span>LinkedIn · linkedin.com/in/eve-hayes-2a491122/</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
              <div>
                <a 
                  href="https://github.com/eve-hayes" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-base text-[#222320] hover:text-[#3f5a2a] underline underline-offset-4"
                >
                  <span>GitHub · github.com/eve-hayes</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
              <div>
                <a 
                  href="/Profile.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-base text-[#222320] hover:text-[#3f5a2a] underline underline-offset-4"
                >
                  <span>LinkedIn Resume (PDF)</span>
                  <span className="text-xs">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. Footer (A single quiet line) */}
      <footer className="border-t border-[#e8e2d4] py-8 text-sm text-[#59574e]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            Eve Hayes — Program Manager & Operations Leader
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/eve-hayes-2a491122/" target="_blank" rel="noopener noreferrer" className="hover:text-[#222320]">
              LinkedIn
            </a>
            <a href="https://github.com/eve-hayes" target="_blank" rel="noopener noreferrer" className="hover:text-[#222320]">
              GitHub
            </a>
            <a href="/Profile.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#222320]">
              Resume PDF
            </a>
          </div>
          <p className="text-xs">
            Cape Town, South Africa · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}


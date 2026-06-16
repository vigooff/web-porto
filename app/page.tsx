'use client';

import { useState, useEffect } from 'react';

type Project = {
  id: string;
  name: string;
  type: string;
  tagline: string;
  description: string;
  tags: string[];
  url: string | null;
  image: string;
};

const projectsData: Project[] = [
  {
    id: 'devspace', name: 'DevSpace', type: 'Front End',
    tagline: 'A developer-focused community platform.',
    description: 'DevSpace is a front-end web application designed for developers to share resources and connect with the tech community. Built with a clean interface using React.',
    tags: ['React', 'Vercel', 'CSS'],
    url: 'https://devspace-seven.vercel.app/',
    image: '/image/DevSpace.png'
  },
  {
    id: 'webmovie', name: 'Web Movie App', type: 'Front End',
    tagline: 'Slick movie browsing app via API.',
    description: 'A responsive movie discovery web app that lets users search and explore films dynamically fetched from a public movie API.',
    tags: ['React', 'API', 'Vercel'],
    url: 'https://movie-app-eight-mocha-68.vercel.app/',
    image: '/image/Movie App.png'
  },
  {
    id: 'natours', name: 'Natours', type: 'Front End',
    tagline: 'Nature tours with advanced CSS animations.',
    description: 'Visually stunning marketing website built to practice advanced CSS techniques including animations, pseudo-elements, and complex responsive layouts.',
    tags: ['HTML', 'CSS', 'Animation'],
    url: 'https://vigooff.github.io/Natours-project/',
    image: '/image/Natours.png'
  },
  {
    id: 'trillo', name: 'Trillo', type: 'Front End',
    tagline: 'Travel booking app UI built with Flexbox.',
    description: 'Trillo showcases a hotel and travel booking interface, diving deep into Flexbox layouts, SVG icons, and modern CSS features.',
    tags: ['HTML', 'CSS', 'Flexbox'],
    url: 'https://vigooff.github.io/Trillo-project/',
    image: '/image/Trillo.png'
  },
  {
    id: 'nexter', name: 'Nexter', type: 'Front End',
    tagline: 'Luxury real estate showcasing CSS Grid.',
    description: 'A premium real estate landing page built to master CSS Grid. Features sophisticated layout with complex grid configurations.',
    tags: ['HTML', 'CSS', 'Grid'],
    url: 'https://vigooff.github.io/Nexter-project/',
    image: '/image/Nexter.png'
  },
  {
    id: 'homezy', name: 'Homezy', type: 'Full Stack',
    tagline: 'Property listing platform with backend.',
    description: 'Full-stack web application for property listings featuring user authentication, CRUD operations, and a clean interface backed by a robust API.',
    tags: ['Laravel', 'Fullstack', 'Database'],
    url: 'https://homezy-lyart.vercel.app/',
    image: '/image/homezy.jpeg'
  },
  {
    id: 'goforumrah', name: 'Goforumrah', type: 'Back End',
    tagline: 'Backend system for Umrah travel packages.',
    description: 'Backend-focused application for managing Umrah travel packages, pilgrim registrations, and booking flows with robust API design.',
    tags: ['Laravel', 'Backend', 'API'],
    url: null, image: '/image/goforumrah.jpeg'
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Scroll Animation (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, [activeTab]); // Re-run when tab changes

// Router Logic (Tabs)
  const changeTab = (tabName: string) => {
    setActiveTab(tabName);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProject = (id: string) => {
    const project = projectsData.find(p => p.id === id);
    setSelectedProject(project ?? null);
  };

  const closeModal = (e: React.MouseEvent<HTMLDivElement> | null, force: boolean = false) => {
    if (force || !e || (e.target as Element).classList.contains('modal-overlay')) {
      setSelectedProject(null);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo" onClick={() => changeTab('home')}>Vigo<span>.</span></div>
        
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} onClick={() => changeTab('home')}>Home</a></li>
          <li><a className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => changeTab('projects')}>Projects</a></li>
          <li><a className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} onClick={() => changeTab('about')}>About</a></li>
        </ul>

        <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
          <button className="btn-nav-cta" onClick={() => changeTab('about')} title="Contact">
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </button>
          <button 
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <main>
        {/* HOME PAGE */}
        <section id="home" className={`page-section ${activeTab === 'home' ? 'active' : ''}`}>
          <div className="hero">
            <div className="hero-content reveal">
              <span className="badge">👋 Available for freelance</span>
              <h1 className="hero-title">
                Building Digital <br />
                <span className="highlight">Experiences.</span>
              </h1>
              <p className="hero-desc">
                I&apos;m Vigo, a Fullstack Developer based in Malang. I craft accessible, pixel-perfect, and performant web applications.
              </p>
              <div className="btn-group">
                <a onClick={() => changeTab('projects')} className="btn btn-primary">
                  View Work
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a onClick={() => changeTab('about')} className="btn btn-secondary">Contact Me</a>
              </div>
            </div>

            <div className="hero-avatar reveal">
              <div className="avatar-ring">
                <div className="avatar-img-wrap">VSR</div>
                <div className="skill-chip chip-1">⚡ Laravel</div>
                <div className="skill-chip chip-2">⚛️ React</div>
                <div className="skill-chip chip-3">🎨 UI/UX</div>
              </div>
            </div>
          </div>

          {/* SKILLS STRIP */}
          <div className="section-padding skills-strip reveal">
            <span className="section-label">Tech Stack</span>
            <div className="skills-grid">
{['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Laravel', 'Node.js', 'PostgreSQL'].map((skill: string) => (
                 <span key={skill} className="skill-item">{skill}</span>
               ))}
            </div>
          </div>

          {/* STATS */}
          <div className="section-padding">
            <div className="stats-grid">
              <div className="stat-card reveal">
                <div className="stat-num">8+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card reveal">
                <div className="stat-num">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card reveal">
                <div className="stat-num">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS PAGE */}
        <section id="projects" className={`page-section ${activeTab === 'projects' ? 'active' : ''}`}>
          <div className="section-padding">
            <div className="section-header reveal">
              <span className="section-label">Portfolio</span>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">A selection of projects that demonstrate my skills in front-end design and back-end logic.</p>
            </div>
            
            <div className="projects-grid">
              {projectsData.map(p => (
                <div key={p.id} className="project-card reveal" onClick={() => openProject(p.id)}>
                  <div className="project-thumb">
                    <img src={p.image} alt={p.name} />
                  </div>
                  <div className="project-info">
                    <span className="project-cat">{p.type}</span>
                    <h3 className="project-name">{p.name}</h3>
                    <p style={{fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '0.5rem'}}>{p.tagline}</p>
<div className="project-tags">
                       {p.tags.slice(0,3).map((t: string) => <span key={t} className="tag-mini">{t}</span>)}
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT PAGE */}
        <section id="about" className={`page-section ${activeTab === 'about' ? 'active' : ''}`}>
          <div className="section-padding">
            <div className="about-grid">
              <div className="about-content reveal">
                <span className="section-label">About Me</span>
                <h2 className="section-title">From Malang to the Web</h2>
                <p>
                  Hi! I&apos;m <strong>Vigo Satria Ramadhan</strong>. I am currently studying Software Development at SMK Telkom Malang. My journey began with simple HTML/CSS layouts, but my curiosity led me to master full-stack development.
                </p>
                <p>
                  I specialize in the <strong>MERN Stack</strong> and <strong>Laravel</strong>. I believe that a good website is not just about code—it&apos;s about solving problems and providing a seamless user experience.
                </p>
                
                <div style={{marginTop: '2rem'}}>
                  <h3 style={{marginBottom: '1rem', fontFamily: 'var(--font-display)'}}>Connect With Me</h3>
                  <div className="contact-list">
                    <a href="mailto:vgooffical@gmail.com" className="contact-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      vgooffical@gmail.com
                    </a>
                    <a href="https://wa.me/6285733876082" target="_blank" rel="noopener noreferrer" className="contact-item">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      WhatsApp
                    </a>
                    <a href="https://linkedin.com/in/vigooff" target="_blank" rel="noopener noreferrer" className="contact-item">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="about-skills reveal">
                <div className="about-card">
                  <div className="skill-category">
                    <div className="skill-cat-title">Frontend</div>
                    <div className="skills-grid">
{['React', 'Next.js', 'Tailwind', 'Framer Motion'].map((t: string) => <span key={t} className="skill-item">{t}</span>)}
                     </div>
                   </div>
                   <div className="skill-category">
                     <div className="skill-cat-title">Backend</div>
                     <div className="skills-grid">
                       {['Laravel', 'Node.js', 'PostgreSQL'].map((t: string) => <span key={t} className="skill-item">{t}</span>)}
                     </div>
                   </div>
                   <div className="skill-category">
                     <div className="skill-cat-title">Tools</div>
                     <div className="skills-grid">
                       {['Git', 'Figma', 'VS Code'].map((t: string) => <span key={t} className="skill-item">{t}</span>)}
                     </div>
                   </div>
                </div>

                <div className="about-card">
                  <h3 style={{fontFamily: 'var(--font-display)', marginBottom: '1rem'}}>Education</h3>
                  <div style={{marginBottom: '1rem'}}>
                    <strong>SMK Telkom Malang</strong><br/>
                    <span style={{color: 'var(--gray-500)', fontSize: '0.9rem'}}>Software Development · 2023–Present</span>
                  </div>
                  <h3 style={{fontFamily: 'var(--font-display)', marginBottom: '1rem'}}>Achievements</h3>
                  <div style={{fontSize: '0.9rem', color: 'var(--gray-600)'}}>
                    • Finalist Top 27 Telkom Idea Challenge 2025<br/>
                    • Head of Public Relations Dept.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL */}
      {selectedProject && (
        <div className={`modal-overlay open`} onClick={closeModal}>
          <div className="modal-content">
            <button className="btn-close-modal" onClick={() => closeModal(null, true)}>&times;</button>
            <div className="modal-hero">
              <img src={selectedProject.image} alt={selectedProject.name} />
            </div>
            <div className="modal-body">
              <span className="section-label">{selectedProject.type}</span>
              <h2 style={{fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1rem'}}>{selectedProject.name}</h2>
              <p style={{color: 'var(--gray-500)', lineHeight: '1.7', marginBottom: '2rem'}}>{selectedProject.description}</p>
              
              <div className="skills-grid" style={{marginBottom: '2rem'}}>
                {selectedProject.tags.map((t: string) => <span key={t} className="skill-item">{t}</span>)}
              </div>
              
              {selectedProject.url ? (
                <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Visit Live Site
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              ) : (
                <span style={{color: 'var(--gray-500)'}}>Deploy URL coming soon</span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
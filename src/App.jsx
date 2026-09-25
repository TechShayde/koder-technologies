import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Braces,
  BrainCircuit,
  CloudCog,
  Code2,
  Layers3,
  Menu,
  MonitorSmartphone,
  ScanLine,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';

const projects = [
  {
    eyebrow: 'Mobile · Prototype',
    title: 'onTime',
    description:
      'A SwiftUI schedule companion for day, week and month planning, repeating reminders, editable schedules and personalized appearance settings.',
    tags: ['SwiftUI', 'SwiftData', 'Notifications', 'iOS'],
    icon: MonitorSmartphone,
    className: 'project-blue',
  },
  {
    eyebrow: 'Utility · Prototype',
    title: 'Barcode Toolkit',
    description:
      'A compact mobile utility for Code 128 generation, reusable saved barcode stacks and fast workflows for slots, docks and calculations.',
    tags: ['SwiftUI', 'Code 128', 'Local Storage', 'Mobile UX'],
    icon: ScanLine,
    className: 'project-violet',
  },
  {
    eyebrow: 'AI Product · Concept',
    title: 'Context Canvas',
    description:
      'A mobile keyboard concept that reads the context around a comment or reply, uses an LLM to interpret intent and creates a relevant image with an image-generation model.',
    tags: ['LLM', 'Image Generation', 'iOS', 'Android'],
    icon: Sparkles,
    className: 'project-cyan',
  },
  {
    eyebrow: 'AI Infrastructure · R&D',
    title: 'Local AI Lab',
    description:
      'Experiments in running private AI workloads locally and on rented GPUs, including model serving, image generation, ROCm, Apple silicon and portable inference workflows.',
    tags: ['PyTorch', 'ROCm', 'Ollama', 'GPU Compute'],
    icon: BrainCircuit,
    className: 'project-amber',
  },
  {
    eyebrow: 'Systems · R&D',
    title: 'Reader Engine',
    description:
      'Exploration of ebook parsing and rendering with a focus on efficient document processing, custom reader experiences and lower-level systems design.',
    tags: ['C++', 'Rust', 'Parsing', 'Rendering'],
    icon: Layers3,
    className: 'project-green',
  },
  {
    eyebrow: 'Backend · Portfolio',
    title: 'Connected Services',
    description:
      'API-first software patterns for booking, delivery, location-aware tools and business systems, designed around clean services and maintainable integrations.',
    tags: ['Spring Boot', 'ASP.NET Core', 'Node.js', 'Databases'],
    icon: Braces,
    className: 'project-pink',
  },
];

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Mobile Applications',
    text: 'Native and cross-platform product experiences for iOS and Android, from focused utilities to richer productivity tools.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Software',
    text: 'Practical AI features that combine language models, image generation and private or cloud inference with real product workflows.',
  },
  {
    icon: Code2,
    title: 'APIs & Business Systems',
    text: 'Backends, integrations and data-driven services built to connect software reliably and keep application logic maintainable.',
  },
  {
    icon: CloudCog,
    title: 'Cloud & Deployment',
    text: 'Cloud-ready architectures, containers and deployment workflows that make software easier to test, ship and evolve.',
  },
];

const stack = [
  'SwiftUI',
  'React',
  'React Native',
  'Java',
  'Spring Boot',
  'C# / ASP.NET',
  'Node.js',
  'Python',
  'Rust',
  'C / C++',
  'SQL',
  'MongoDB',
  'Docker',
  'Azure',
  'AWS',
  'PyTorch',
];


function GithubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
      <path d="M8 19c-3 .9-3-1.5-4-2" />
    </svg>
  );
}

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Koder Technologies home">
      <span className="brand-mark">K</span>
      <span className="brand-word">oder</span>
      <span className="brand-tech">Technologies</span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav-wrap">
          <Logo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact" className="nav-cta">Start a project</a>
          </nav>
          <button
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a onClick={closeMenu} href="#work">Work</a>
            <a onClick={closeMenu} href="#services">Services</a>
            <a onClick={closeMenu} href="#about">About</a>
            <a onClick={closeMenu} href="#contact">Start a project</a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero section-pad">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow-pill"><Zap size={15} /> Software for what’s next</div>
              <h1>
                We turn ambitious ideas into <span>real software.</span>
              </h1>
              <p className="hero-lead">
                Koder Technologies builds mobile apps, APIs, AI-powered tools and modern software systems with a focus on practical design, strong engineering and room to scale.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore our work <ArrowRight size={18} />
                </a>
                <a className="button button-ghost" href="#contact">Build with Koder</a>
              </div>
              <div className="hero-metrics" aria-label="Technology focus">
                <div><strong>Mobile</strong><span>iOS + Android</span></div>
                <div><strong>AI</strong><span>LLMs + Generative</span></div>
                <div><strong>Backend</strong><span>APIs + Cloud</span></div>
              </div>
            </div>

            <div className="hero-visual" aria-label="Koder Technologies engineering preview">
              <div className="code-window">
                <div className="code-toolbar">
                  <span className="dot" /><span className="dot" /><span className="dot" />
                  <span className="code-file">product.ts</span>
                </div>
                <pre><code><span className="code-purple">const</span> koder = {'{'}
  focus: [
    <span className="code-green">'mobile'</span>,
    <span className="code-green">'ai'</span>,
    <span className="code-green">'systems'</span>
  ],
  approach: <span className="code-green">'build → learn → improve'</span>,
  ready: <span className="code-blue">true</span>
{'}'};</code></pre>
              </div>
              <div className="floating-card float-one">
                <BrainCircuit size={20} />
                <div><strong>AI-native</strong><span>Practical intelligence</span></div>
              </div>
              <div className="floating-card float-two">
                <MonitorSmartphone size={20} />
                <div><strong>Product-first</strong><span>Built for real use</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="marquee-wrap" aria-label="Technology capabilities">
          <div className="marquee-track">
            {[...stack, ...stack].map((item, index) => (
              <span key={`${item}-${index}`}>{item}<i>•</i></span>
            ))}
          </div>
        </section>

        <section className="section-pad" id="work">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">Selected work</span>
                <h2>Products, prototypes & technical explorations.</h2>
              </div>
              <p>
                Koder’s portfolio is built around solving tangible problems—from everyday mobile workflows to local AI infrastructure and systems-level software.
              </p>
            </div>
            <div className="project-grid">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <article className={`project-card ${project.className}`} key={project.title}>
                    <div className="project-topline">
                      <span>{project.eyebrow}</span>
                      <div className="project-icon"><Icon size={24} /></div>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="container">
            <div className="section-heading compact">
              <div>
                <span className="section-kicker">Capabilities</span>
                <h2>From idea to working system.</h2>
              </div>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, text }) => (
                <article className="service-card" key={title}>
                  <div className="service-icon"><Icon size={24} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" id="about">
          <div className="container about-grid">
            <div className="about-copy">
              <span className="section-kicker">About Koder</span>
              <h2>Engineering curiosity into useful products.</h2>
              <p>
                Koder Technologies is a software development company focused on building thoughtful digital products and exploring the technologies that make them possible. The work spans mobile engineering, backend systems, cloud infrastructure, AI and lower-level software experimentation.
              </p>
              <p>
                The approach is simple: understand the problem, prototype quickly, choose the right tools and keep refining until the software feels clear, dependable and useful.
              </p>
            </div>
            <div className="principles-card">
              <div className="principle"><span>01</span><div><strong>Build for real workflows</strong><p>Start with the user problem, not the technology trend.</p></div></div>
              <div className="principle"><span>02</span><div><strong>Keep architecture intentional</strong><p>Use modern tools without creating unnecessary complexity.</p></div></div>
              <div className="principle"><span>03</span><div><strong>Experiment aggressively</strong><p>Prototype, benchmark and learn before locking in a direction.</p></div></div>
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="container cta-card">
            <div>
              <span className="section-kicker">Start something</span>
              <h2>Have a software idea worth building?</h2>
              <p>Let’s turn it into a focused product, prototype or technical proof of concept.</p>
            </div>
            <a className="button button-light" href="mailto:hello@kodertechnologies.com">
              hello@kodertechnologies.com <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <Logo />
            <p>Mobile. AI. APIs. Systems.</p>
          </div>
          <div className="footer-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="https://github.com/" aria-label="GitHub"><GithubIcon size={18} /></a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Koder Technologies.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

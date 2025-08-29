import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Professional Experience & Skills",
  description:
    "Explore my professional journey as a Full Stack Developer. 5+ years of experience building scalable applications with PHP, React, Laravel, and modern web technologies.",
  alternates: {
    canonical: "https://cv.ederbarrios.online",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Eder Barrios",
    jobTitle: "Full Stack Software Developer",
    description:
      "Experienced Full Stack Developer with 5+ years of expertise in PHP, JavaScript, TypeScript, React, Next.js, Laravel",
    url: "https://cv.ederbarrios.online",
    sameAs: [
      "https://linkedin.com/in/eder-barrios",
      "https://github.com/inferiore",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cartagena",
      addressRegion: "Bolívar",
      addressCountry: "Colombia",
    },
    email: "Ederb1.1c@gmail.com",
    telephone: "+573153828958",
    knowsAbout: [
      "PHP",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "Laravel",
      "Node.js",
      "Python",
      "MySQL",
      "AWS",
      "Docker",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Tecnológica de Bolívar",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "Certified ScrumMaster (CSM)",
      credentialCategory: "Professional Certification",
    },
    workLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cartagena",
        addressCountry: "Colombia",
      },
    },
    worksFor: {
      "@type": "Organization",
      name: "EPAM Systems",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="min-h-screen console-text">
        <div className="matrix-bg"></div>

        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot dot-red"></div>
                <div className="terminal-dot dot-yellow"></div>
                <div className="terminal-dot dot-green"></div>
              </div>
              <div className="terminal-title">eder-barrios@portfolio:~$</div>
            </div>

            <div className="p-6 space-y-6">
              {/* Header */}
              <header className="space-y-2">
                <div className="console-prompt">whoami</div>
                <div className="console-output">
                  <h1 className="text-2xl md:text-4xl font-bold highlight">
                    Eder Barrios
                  </h1>
                  <p className="text-lg success">Full Stack Developer</p>
                </div>
              </header>

              {/* Contact Info */}
              <section className="space-y-2" aria-labelledby="contact-heading">
                <h2 id="contact-heading" className="console-prompt">
                  cat contact.json
                </h2>
                <div className="console-output space-y-1">
                  <div>
                    📱{" "}
                    <a
                      href="https://wa.me/573153828958?text=Hi%20Eder,%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20connecting%20with%20you"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info hover:underline cursor-pointer"
                    >
                      +57 315 382 8958
                    </a>
                  </div>
                  <div>
                    📧{" "}
                    <a
                      href="mailto:Ederb1.1c@gmail.com?subject=Contact%20from%20your%20portfolio&body=Hi%20Eder,%0A%0AI%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20connecting%20with%20you."
                      className="info hover:underline"
                    >
                      Ederb1.1c@gmail.com
                    </a>
                  </div>
                  <div>
                    📍{" "}
                    <span className="text-gray-300">
                      Cartagena, Bolívar, Colombia
                    </span>
                  </div>
                  <div>
                    💼{" "}
                    <a
                      href="https://linkedin.com/in/eder-barrios"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info hover:underline"
                    >
                      linkedin.com/in/eder-barrios
                    </a>
                  </div>
                  <div>
                    ⚡{" "}
                    <a
                      href="https://github.com/inferiore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info hover:underline"
                    >
                      github.com/inferiore
                    </a>
                  </div>
                </div>
              </section>

              {/* About Me */}
              <section className="space-y-2" aria-labelledby="about-heading">
                <h2 id="about-heading" className="console-prompt">
                  cat about.md
                </h2>
                <div className="console-output">
                  <p className="text-gray-300 leading-relaxed">
                    Results-driven software developer with a strong commitment
                    to delivering high-quality solutions that create value for
                    clients, organizations, and stakeholders. Focused on
                    building collaborative relationships and achieving
                    measurable outcomes through technical excellence and
                    professional integrity.
                  </p>
                </div>
              </section>

              <section className="space-y-2" aria-labelledby="skills-heading">
                <h2 id="skills-heading" className="console-prompt">
                  ls -la ./skills/
                </h2>
                <div className="console-output">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                    {[
                      "PHP",
                      "JavaScript",
                      "TypeScript",
                      "Python",
                      "React",
                      "Next.js",
                      "Vue.js",
                      "Angular",
                      "Laravel",
                      "Nest.js",
                      "Flask",
                      "Node.js",
                      "MySQL",
                      "SQL Server",
                      "Redis",
                      "ElasticSearch",
                      "AWS",
                      "Docker",
                      "SCRUM",
                      "Git",
                    ].map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* Experience */}
              <section
                className="space-y-2"
                aria-labelledby="experience-heading"
              >
                <h2 id="experience-heading" className="console-prompt">
                  git log --oneline --graph
                </h2>
                <div className="console-output space-y-6">
                  <div className="experience-item">
                    <h3 className="text-lg font-semibold highlight">
                      Full Stack Developer @ EPAM
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">
                      Sep 2024 – Present
                    </p>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>
                        • Software Developer, responsible for adding features
                        for a Laravel API
                      </li>
                      <li>
                        • Implement IA model to gather info from external files
                      </li>
                      <li>
                        • Follow the SCRUM practices, actively contributing with
                        proper initiatives
                      </li>
                      <li>• Implemented unit testing using PHP Unit</li>
                    </ul>
                    <div className="mt-2 space-x-1">
                      <span className="tech-tag">PHP</span>
                      <span className="tech-tag">TypeScript</span>
                      <span className="tech-tag">JavaScript</span>
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">Laravel</span>
                      <span className="tech-tag">React</span>
                    </div>
                  </div>

                  <div className="experience-item">
                    <h3 className="text-lg font-semibold highlight">
                      Full Stack Developer @ SourceToad
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">
                      Sep 2023 – Aug 2024
                    </p>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>
                        • Developed React Native mobile applications and
                        embedded TV/Signage systems
                      </li>
                      <li>
                        • Improved user experience for{" "}
                        <span className="success">
                          40 million cruise passengers
                        </span>{" "}
                        worldwide
                      </li>
                      <li>
                        • Engineered embedded device software using Vue.JS and
                        React
                      </li>
                      <li>
                        • Implemented comprehensive unit testing using Jest
                        framework
                      </li>
                    </ul>
                    <div className="mt-2 space-x-1">
                      <span className="tech-tag">React Native</span>
                      <span className="tech-tag">Vue.js</span>
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">TypeScript</span>
                      <span className="tech-tag">Jest</span>
                    </div>
                  </div>

                  <div className="experience-item">
                    <h3 className="text-lg font-semibold highlight">
                      Full Stack Developer & Master Trainer @ ApplaudoStudios
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">
                      Jun 2021 – Aug 2023
                    </p>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>
                        • Led critical migration from legacy PHP to Laravel
                        framework
                      </li>
                      <li>
                        • Reduced bug rate to{" "}
                        <span className="success">5%</span> through automated
                        testing
                      </li>
                      <li>
                        • Served as Master Trainer for company-wide Trainee
                        Program
                      </li>
                      <li>
                        • Successfully onboarded and specialized{" "}
                        <span className="success">
                          20 junior Laravel developers
                        </span>
                      </li>
                    </ul>
                    <div className="mt-2 space-x-1">
                      <span className="tech-tag">PHP</span>
                      <span className="tech-tag">Laravel</span>
                      <span className="tech-tag">ReactJS</span>
                      <span className="tech-tag">Docker</span>
                      <span className="tech-tag">Solidity</span>
                    </div>
                  </div>

                  <div className="experience-item">
                    <h3 className="text-lg font-semibold highlight">
                      Full Stack Developer @ Elemento43
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">
                      Mar 2018 – Jun 2021
                    </p>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>
                        • Architected and maintained robust API infrastructure
                      </li>
                      <li>• Led technical team as Main Backend Developer</li>
                      <li>
                        • Expanded platform adoption from{" "}
                        <span className="success">15 schools to thousands</span>{" "}
                        across Amsterdam
                      </li>
                      <li>
                        • Significantly increased company profitability through
                        third-party integrations
                      </li>
                    </ul>
                    <div className="mt-2 space-x-1">
                      <span className="tech-tag">PHP</span>
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">Flask</span>
                      <span className="tech-tag">Laravel</span>
                      <span className="tech-tag">AWS</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section
                className="space-y-2"
                aria-labelledby="education-heading"
              >
                <h2 id="education-heading" className="console-prompt">
                  cat education.txt
                </h2>
                <div className="console-output space-y-4">
                  <div>
                    <h3 className="font-semibold highlight">
                      Computer Engineer
                    </h3>
                    <p className="text-sm text-gray-400">
                      Universidad Tecnológica de Bolívar (Jun 2012 – Jun 2018)
                    </p>
                    <p className="text-sm text-gray-300">Cartagena, Colombia</p>
                  </div>
                  <div>
                    <h3 className="font-semibold success">
                      Certified ScrumMaster (CSM)
                    </h3>
                    <p className="text-sm text-gray-400">
                      Scrum Alliance (Feb 2024)
                    </p>
                    <p className="text-sm text-gray-300">
                      Remote Certification
                    </p>
                  </div>
                </div>
              </section>

              {/* Languages */}
              <section
                className="space-y-2"
                aria-labelledby="languages-heading"
              >
                <h2 id="languages-heading" className="console-prompt">
                  locale
                </h2>
                <div className="console-output space-y-1">
                  <div>
                    🇪🇸 <span className="success">Spanish:</span> Native
                  </div>
                  <div>
                    🇺🇸 <span className="success">English:</span> Advanced
                  </div>
                </div>
              </section>

              {/* Footer */}
              <div className="section-divider">
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              </div>

              <div className="space-y-2">
                <div className="console-prompt">
                  echo &quot;Thanks for visiting my portfolio!&quot;
                </div>
                <div className="console-output">
                  <span className="success">
                    Thanks for visiting my portfolio!
                  </span>
                  <span className="console-cursor">█</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { Mail, Github, Linkedin, ChevronDown, ArrowRight, Terminal, Network, Code, Download, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { education, skillCategories, experience, projects, contactInfo } from "@/lib/portfolio-data";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";
import "@/precision-theme.css";

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [downloaderName, setDownloaderName] = useState("");
  const [downloaderEmail, setDownloaderEmail] = useState("");

  const handleDownloadRequest = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowResumeModal(true);
  };

  const handleResumeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // EmailJS Configuration
    // TODO: Replace these with your actual EmailJS credentials from https://dashboard.emailjs.com/
    const serviceId = "YOUR_SERVICE_ID";
    const templateId = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    const templateParams = {
      to_name: "Nagavarun",
      from_name: downloaderName,
      from_email: downloaderEmail,
      message: `Resume downloaded by ${downloaderName} (${downloaderEmail})`
    };

    toast.promise(
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          const link = document.createElement('a');
          link.href = "Nagavarunsamala_Resume_R1.pdf";
          link.download = "Nagavarun_Samala_Resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          setShowResumeModal(false);
          setDownloaderName("");
          setDownloaderEmail("");
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          throw error;
        }),
      {
        loading: 'Processing...',
        success: 'Resume download started!',
        error: 'Failed to process request. Please try again.'
      }
    );
  };

  const projectImages = [
    'MPPI.png',
    'BEV.png',
    'Nerf!.png',
    'SFM.png',
    'Legged.png',
    'Cassie.png',
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Resume Download Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setShowResumeModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">Download Resume</h3>
            <p className="text-slate-600 mb-6 text-sm">
              Please provide your details to download the resume.
            </p>
            
            <form onSubmit={handleResumeSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={downloaderName}
                  onChange={e => setDownloaderName(e.target.value)}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={downloaderEmail}
                  onChange={e => setDownloaderEmail(e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Download PDF
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Navigation - Clean & Professional */}
      <nav className="sticky top-0 z-50 glass-panel">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-md font-mono text-sm">NS</div>
            <span className="tracking-tight section-heading text-xl">Nagavarun Samala</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {['Experience', 'Projects', 'Skills', 'Contact'].map((item, i) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-blue-600 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section - Clean Lab Aesthetic */}
      <section className="relative pt-24 pb-32 overflow-hidden circuit-bg">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-medium text-xs tracking-wide uppercase">
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for Research & Engineering Roles
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold section-heading text-slate-900 leading-[1.1] tracking-tight">
                Robotics Engineer <br />
                <span className="text-slate-400">&</span> Researcher
              </h1>
              
              <div className="text-lg text-slate-600 max-w-2xl leading-relaxed font-light space-y-4">
                <p>
                  I'm a Master's student in Robotics, Electronics, and Computer Engineering at <strong className="text-slate-900 font-semibold">Northeastern University</strong>, conducting research at Silicon Synapse Lab. My passion lies at the intersection of robotics, artificial intelligence, and autonomous systems—building robots that can perceive their environment, make intelligent decisions, and execute complex tasks with precision.
                </p>
                <p>
                  At Silicon Synapse Lab, I work on groundbreaking projects including bipedal robots with thrust-assisted flight capabilities and multi-modal morphing robots. Under the mentorship of Professor Alireza Ramezani, I've developed expertise in state estimation, control systems design, and computer vision—combining theoretical foundations with practical implementation using ROS, Python, and C++.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href={`${import.meta.env.BASE_URL}Nagavarunsamala_Resume_R1.pdf`} onClick={handleDownloadRequest} className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-slate-900/20 group cursor-pointer">
                  Download Resume 
                  <Download className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all">
                  Contact Me
                </a>
              </div>
            </div>
            
            {/* Profile Image - Clean & Modern */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative w-full max-w-md mx-auto aspect-square">
                <div className="absolute inset-0 bg-blue-100 rounded-3xl opacity-20 blur-3xl transform translate-x-10 translate-y-10"></div>
                <div className="absolute inset-4 border border-slate-200 rounded-3xl"></div>
                <div className="absolute inset-0 border border-slate-100 rounded-3xl transform rotate-6"></div>
                
                {/* Profile Image Container */}
                <div className="absolute inset-8 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src={`${import.meta.env.BASE_URL}profile.jpg`}
                    alt="Nagavarun Samala"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience - Professional Timeline */}
      <section id="experience" className="py-24 bg-slate-50 relative border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex items-end gap-4 mb-12 border-b border-slate-200 pb-4">
            <h2 className="text-3xl md:text-4xl font-bold section-heading text-slate-900">Experience</h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="text-lg text-blue-600 font-medium mt-1">{exp.company}</div>
                    </div>
                    <div className="text-sm text-slate-500 font-medium text-right bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                      <span className="block md:inline">{exp.startDate} — {exp.endDate}</span>
                      <span className="hidden md:inline mx-2">•</span>
                      <span className="block md:inline">{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-slate-600 leading-relaxed">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-blue-500 mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects - System Modules */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-end gap-4 mb-12 border-b border-slate-200 pb-4">
            <h2 className="text-3xl md:text-4xl font-bold section-heading text-slate-900">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
                onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
              >
                {/* Project Image - Visual Feed */}
                <div className="relative h-56 overflow-hidden border-b border-slate-100">
                  <div className="absolute inset-0 bg-slate-900/5 z-10 group-hover:bg-transparent transition-colors duration-300" />
                  <img 
                    src={projectImages[idx]} 
                    alt={project.title} 
                    className={`w-full h-full transform group-hover:scale-105 transition-transform duration-500 ${
                      idx === 3 || idx === 4 || idx === 5 ? "object-contain bg-slate-50" : "object-cover"
                    }`}
                  />
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded">Research Project</div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expandedProject === idx ? 'rotate-180' : ''}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-sm text-slate-500 font-medium mb-4">{project.period}</div>

                  <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed">
                    {project.description[0]}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-md border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  <div className={`grid transition-all duration-500 ease-in-out ${expandedProject === idx ? 'grid-rows-[1fr] opacity-100 pt-6 border-t border-slate-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-sm text-slate-900 mb-2">Project Details</h4>
                          <ul className="space-y-2">
                            {project.description.map((desc, i) => (
                              <li key={i} className="text-sm text-slate-600 flex gap-2">
                                <span className="text-blue-500">•</span> {desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {project.highlights && (
                          <div>
                            <h4 className="font-bold text-sm text-slate-900 mb-2">Key Metrics</h4>
                            <ul className="space-y-2">
                              {project.highlights.map((highlight, i) => (
                                <li key={i} className="text-sm text-blue-700 font-medium bg-blue-50 p-2 rounded border border-blue-100">
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills - Clean Grid */}
      <section id="skills" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex items-end gap-4 mb-12 border-b border-slate-200 pb-4">
            <h2 className="text-3xl md:text-4xl font-bold section-heading text-slate-900">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {skillCategories.map((category, idx) => (
              <div key={idx}>
                <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-8">
                  {idx === 0 ? <Code className="text-blue-600" /> : <Network className="text-blue-600" />}
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium text-sm shadow-sm hover:border-blue-400 hover:text-blue-700 transition-all cursor-default">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - Clean Footer */}
      <section id="contact" className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold section-heading text-slate-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-slate-600 mb-12 font-light">
              Open to research collaborations and engineering opportunities in autonomous systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <a href={`mailto:${contactInfo.email}`} className="group p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="font-medium text-sm text-slate-600 group-hover:text-slate-900">{contactInfo.email}</div>
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="group p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all">
                <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="font-medium text-sm text-slate-600 group-hover:text-slate-900">LinkedIn Profile</div>
              </a>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="group p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all">
                <Github className="w-8 h-8 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="font-medium text-sm text-slate-600 group-hover:text-slate-900">GitHub Profile</div>
              </a>
            </div>

            <footer className="text-sm text-slate-400 mt-12 border-t border-slate-100 pt-8">
              © {new Date().getFullYear()} Nagavarun Samala. All rights reserved.
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}

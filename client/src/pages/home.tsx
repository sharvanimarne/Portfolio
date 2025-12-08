import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { 
  ArrowRight, Code, Layers, Sparkles, Github, Twitter, Mail, 
  GraduationCap, Trophy, Award, Cpu, Users, Zap, Globe, Smartphone,BarChart3,
  Layout, Database, Terminal
} from "lucide-react";
import { FaJava, FaPython, FaAws, FaGitAlt, FaGithub, FaRProject } from "react-icons/fa";
import heroImage from "@assets/generated_images/abstract_3d_glass_shapes_with_purple_and_blue_lighting.png";
import profileImage from "@assets/generated_images/profile.jpg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContactModal } from "@/components/contact-modal";
import { useState } from "react";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const technicalSkills = [
    { name: "HTML/CSS/JavaScript", icon: <Code className="w-4 h-4" />, level: 95 },
    { name: "Java", icon: <FaJava className="w-4 h-4" />, level: 90 },
    { name: "Python", icon: <FaPython className="w-4 h-4" />, level: 95 },
    { name: "R", icon: <FaRProject className="w-4 h-4" />, level: 85 },
    { name: "Git/Github", icon: <FaGithub className="w-4 h-4" />, level: 75 },
    { name: "AWS", icon: <FaAws className="w-4 h-4" />, level: 80 },
    { name: "Data Analysis & Visualization", icon: <BarChart3 className="w-4 h-4" />, level: 85 },
    { name: "Machine Learning (Scikit-learn, Modeling)", icon: <Cpu className="w-4 h-4" />, level: 75 },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <Zap className="w-4 h-4" /> },
    { name: "Team Leadership", icon: <Users className="w-4 h-4" /> },
    { name: "Communication", icon: <Sparkles className="w-4 h-4" /> },
    { name: "Critical Thinking", icon: <Cpu className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/40 via-[#0f172a] to-[#0f172a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/40 via-[#0f172a] to-[#0f172a]" />
        
        {/* Animated Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] animate-float-delayed" />
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-indigo-500/10 blur-[100px] animate-pulse" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]" />
      </div>

      {/* Grain Overlay */}
      <div className="bg-grain" />

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/50 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold font-heading tracking-wider">
            SHARVANI<span className="text-primary">.DEV</span>
          </span>
          <div className="md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          </div>
          <Button 
            variant="outline" 
            className="rounded-full border-white/20 hover:bg-white/10 text-white bg-transparent"
            onClick={() => setIsContactOpen(true)}
            data-testid="button-contact-nav"
          >
            Let's Talk
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center" id="about">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Available for work</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Engineering <br />
              <span className="text-gradient-primary">Reality </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Through Data, Logic & Design , I build immersive interfaces and intelligent systems that feel fast, fluid, and human.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-8" 
              onClick={() => {
    const section = document.getElementById("work");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/20 hover:bg-white/10 text-white bg-transparent gap-2"
              onClick={() => window.open("https://github.com/sharvanimarne", "_blank")}
              >
                <Github className="w-4 h-4" /> GitHub
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="relative order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Profile Image Container with Glass Effect */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-full h-full rounded-full p-2 border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Sharvani - Developer Profile" 
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badges */}
              <GlassCard className="absolute -bottom-4 -right-4 animate-float-delayed py-3 px-5 flex items-center gap-3" hoverEffect>
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-sm font-medium">Open to work</span>
              </GlassCard>

              <GlassCard className="absolute top-10 -left-8 animate-float py-3 px-4" hoverEffect>
                 <span className="text-2xl font-bold">1+</span>
                 <span className="text-xs text-muted-foreground block">Years Exp.</span>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="mb-12 text-center max-w-2xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
             <p className="text-muted-foreground">A comprehensive toolkit for building modern, scalable digital products.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <GlassCard className="space-y-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code className="text-primary" /> Hard Skills
              </h3>
              <div className="grid gap-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="flex items-center gap-2">{skill.icon} {skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <div className="space-y-6">
              <GlassCard>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Sparkles className="text-primary" /> Soft Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex flex-col items-center text-center gap-3">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Trophy className="text-primary" /> Achievements
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <div className="mt-1 min-w-[20px]"><Award className="w-5 h-5 text-yellow-500" /></div>
                    <div>
                      <h4 className="font-bold text-sm">Best UI Design 2023</h4>
                      <p className="text-xs text-muted-foreground">Awwwards Honorable Mention</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="mt-1 min-w-[20px]"><Award className="w-5 h-5 text-blue-500" /></div>
                    <div>
                      <h4 className="font-bold text-sm">Hackathon Winner</h4>
                      <p className="text-xs text-muted-foreground">Global Tech Summit 2022</p>
                    </div>
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section id="work" className="py-20 px-6 bg-white/5">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
              <p className="text-muted-foreground">Selected projects from the last year.</p>
            </div>
            <Button variant="link" className="text-primary hidden md:flex">View all work <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <GlassCard key={item} hoverEffect className="group relative overflow-hidden min-h-[350px] flex flex-col justify-end border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
                Placeholder for project image - using a gradient div for now
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  item === 1 ? 'from-pink-500/20 to-purple-500/20' : 
                  item === 2 ? 'from-blue-500/20 to-cyan-500/20' : 
                  'from-emerald-500/20 to-teal-500/20'
                } group-hover:scale-105 transition-transform duration-700`} /> */}
                
                {/* <div className="relative z-20 p-2">
                  <div className="mb-2 flex gap-2">
                    <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border-none">AI/ML & Full-Stack Development</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Brainalyze – AI-Powered Brain Tumor Report Viewer
</h3>
                  <p className="text-sm text-gray-300 mb-6 line-clamp-2 leading-relaxed">
                    An intelligent medical web application that helps patients & radiologists easily access, interpret, and visualize AI-generated MRI analysis reports.
                  </p>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                     <div className="flex gap-2">
                      <span className="text-xs text-white/60">React</span>
                      <span className="text-xs text-white/60">•</span>
                      <span className="text-xs text-white/60">WebGL</span>
                    </div>
                    <Button size="sm" variant="ghost" className="text-white hover:text-primary hover:bg-white/5 p-0 h-auto font-normal">
                      View Case Study <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section> */}
      {/* Projects Section */}
<section id="work" className="py-20 px-6 bg-white/5">
  <div className="container mx-auto">
    <div className="flex items-end justify-between mb-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
        <p className="text-muted-foreground">Selected projects from the last year.</p>
      </div>
      <Button variant="link" className="text-primary hidden md:flex">
        View all work <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </div>

    {/* PROJECTS DATA */}
    {(() => {
      const projects = [
        {
          id: 1,
          domain: "AI/ML & Full-Stack Development",
          title: "Brainalyze – AI-Powered Brain Tumor Report Viewer",
          description:
            "An intelligent medical web application that helps patients & radiologists easily access, interpret, and visualize AI-generated MRI analysis reports.",
          tech: ["React (Vite)", "Tailwind CSS", "Supabase"],
          gradient: "from-pink-500/20 to-purple-500/20",
          caseStudyLink: "https://github.com/PradnyaKulkarni2005/BrainTumor-Detection?tab=readme-ov-file",
        },
        {
          id: 2,
          domain: "Web Development & Full-Stack Engineering",
          title: "Library Management System – A Smart Platform for College Library",
          description:
            "A full-stack system built to streamline library operations with secure authentication, automated workflows, bulk Excel uploads, email reminders, and interactive dashboards for smooth day-to-day management.",
          tech: ["React","Node.js", "Supabase"],
          gradient: "from-blue-500/20 to-cyan-500/20",
          caseStudyLink: "https://library-management-system-umber-six.vercel.app/",
        },
        {
          id: 3,
          domain: "AI/ML / Data Analysis",
          title: "Project Three – Your Third Project Name",
          description:
            "Short description for your third project. Add what it does and why it matters.",
          tech: ["Python", "TensorFlow", "Streamlit"],
          gradient: "from-emerald-500/20 to-teal-500/20",
          caseStudyLink: "/case-study/project-three",
        },
      ];

      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <GlassCard
              key={project.id}
              hoverEffect
              className="group relative overflow-hidden min-h-[350px] flex flex-col justify-end border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />

              {/* Dynamic gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} group-hover:scale-105 transition-transform duration-700`}
              />

              <div className="relative z-20 p-2">
                <div className="mb-2 flex gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border-none"
                  >
                    {project.domain}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs text-white/60">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Unique Case Study Button */}
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:text-primary hover:bg-white/5 p-0 h-auto font-normal"
                    onClick={() => window.location.href = project.caseStudyLink}
                  >
                    View <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      );
    })()}
  </div>
</section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <Layers className="text-primary" /> Experience
            </h2>
            <div className="space-y-6 relative">
              {/* Vertical Line */}
              <div className="absolute left-[28px] top-4 bottom-4 w-[2px] bg-white/5" />
              
              {[
                { role: "Conversational Data Analysis with LLM", company: "AICTE & VOIS", period: "Sept 2025 - Oct 2025", desc: "End-to-end analysis across multiple datasets - including Netflix, Airbnb bookings, crop production, AI job trends, and space missions - using Python, LLM-powered workflows, and data visualization techniques to generate insights and dashboards" },
                { role: "Intern", company: "PCCOE", period: "June 2025 - June 2025", desc: "A full-stack library system built for the PCCOE IT Department, featuring secure login, bulk Excel uploads, automated email reminders, and dashboards." },
                { role: "Data Analyst Intern", company: "InternKaksha IT Solutions", period: "Jan 2024 - Feb 2024", desc: "Developed dashboards to highlight sales trends and customer preferences of Amazon E-commerce." }
              ].map((job, i) => (
                <GlassCard key={i} className="ml-0 md:ml-4 relative group hover:border-primary/30 transition-colors" hoverEffect>
                  <div className="absolute -left-[34px] md:-left-[38px] top-6 w-4 h-4 rounded-full bg-background border-2 border-primary z-10" />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                    <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{job.role}</h4>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-primary whitespace-nowrap">{job.period}</span>
                  </div>
                  <p className="text-sm font-semibold text-white mb-2">{job.company}</p>
                  <p className="text-sm text-muted-foreground">{job.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="text-primary" /> Education
              </h2>
              <GlassCard className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg">B.Tech in Information Technology</h4>
                    <p className="text-primary">Pimpri Chinchwad College of Engineering Pune</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded">2023 - 2027</span>
                </div>
                
                <p className="text-sm text-muted-foreground">Honors in Deep Learning and Natural Language Processing.</p>
              </GlassCard>
              
              <GlassCard>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg">12th HSC</h4>
                    <p className="text-primary">Laxmanrao Apte Jr. College</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded">2021 - 2023</span>
                </div>
                <p className="text-sm text-muted-foreground">MHT-CET 2023 -97.88 Percentile & HSC- 90.50% (PCMB)</p>
              </GlassCard>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <Award className="text-primary" /> Certifications
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex items-center gap-3">
                   <div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
                     <Globe className="w-5 h-5" />
                   </div>
                   <div>
                     <h5 className="font-bold text-sm">Cloud Practitioner Essentials</h5>
                     <p className="text-xs text-muted-foreground">AWS</p>
                   </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex items-center gap-3">
                   <div className="w-10 h-10 rounded bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                     <Code className="w-5 h-5" />
                   </div>
                   <div>
                     <h5 className="font-bold text-sm">Computer Network</h5>
                     <p className="text-xs text-muted-foreground">Simplilearn</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact CTA */}
      <section className="py-20 px-6">
         <div className="container mx-auto">
            <GlassCard className="relative overflow-hidden p-8 md:p-12 text-center max-w-4xl mx-auto">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to start your next project?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto relative z-10">
                I'm currentlyopen to new opportunities. Let's create something amazing together.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-white/90 rounded-full px-8"
                  onClick={() => setIsContactOpen(true)}
                  data-testid="button-contact-footer"
                >
                  <Mail className="w-4 h-4 mr-2" /> Get in Touch
                </Button>
                <a href="/resume.pdf" download>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/20 hover:bg-white/10 text-white bg-transparent rounded-full px-8"
                    data-testid="button-resume"
                    >
                    Download Resume
                  </Button>
                </a>
              </div>
            </GlassCard>
         </div>
      </section>
      
      <footer className="py-8 border-t border-white/5 text-center text-muted-foreground text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6">
          <p>© 2025 Sharvani Dev. Crafted with React & Tailwind.</p>
          <div className="flex gap-6">
            <a href="https://x.com/sharvanimarne" className="hover:text-white transition-colors">Twitter</a>
            <a href="https://www.linkedin.com/in/sharvani-marne-113889292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/_sharvani__28/?hl=en" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

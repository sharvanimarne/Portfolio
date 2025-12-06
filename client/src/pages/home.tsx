import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { ArrowRight, Code, Layers, Sparkles, Github, Twitter, Mail, ExternalLink } from "lucide-react";
import heroImage from "@assets/generated_images/abstract_3d_glass_shapes_with_purple_and_blue_lighting.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="bg-grain" />

      {/* Decorative ambient lights */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -z-10 animate-pulse delay-1000" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/50 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold font-heading tracking-wider">
            ALEX<span className="text-primary">.DEV</span>
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </div>
          <Button variant="outline" className="rounded-full border-white/20 hover:bg-white/10 text-white bg-transparent">
            Let's Talk
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Available for freelance work</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Crafting <br />
              <span className="text-gradient-primary">Digital Reality</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              I build immersive web experiences with a focus on motion, depth, and user-centric design.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-8">
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/20 hover:bg-white/10 text-white bg-transparent gap-2">
                <Github className="w-4 h-4" /> GitHub
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Floating Image */}
            <div className="relative w-full aspect-square animate-float">
              <img 
                src={heroImage} 
                alt="Abstract Glass Art" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              
              {/* Floating UI Cards around the image */}
              <GlassCard className="absolute -top-4 -right-4 w-48 animate-float-delayed" hoverEffect>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Code className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">Clean Code</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[85%]" />
                </div>
              </GlassCard>

              <GlassCard className="absolute bottom-12 -left-8 w-48 animate-float" hoverEffect>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">UI Design</span>
                </div>
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full bg-white/20 border border-white/10 backdrop-blur-sm" />
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 px-6">
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
              <GlassCard key={item} hoverEffect className="group relative overflow-hidden min-h-[300px] flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                {/* Placeholder for project image - using a gradient div for now */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  item === 1 ? 'from-pink-500/20 to-purple-500/20' : 
                  item === 2 ? 'from-blue-500/20 to-cyan-500/20' : 
                  'from-emerald-500/20 to-teal-500/20'
                } group-hover:scale-105 transition-transform duration-700`} />
                
                <div className="relative z-20">
                  <div className="mb-2">
                    <span className="text-xs font-medium tracking-wider uppercase text-primary">Development</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Project Alpha {item}</h3>
                  <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                    A cutting-edge web application built with React and Three.js for immersive data visualization.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded backdrop-blur-sm">React</span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded backdrop-blur-sm">WebGL</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / About Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience</h2>
            <div className="space-y-6">
              {[
                { role: "Senior Frontend Engineer", company: "TechCorp", period: "2023 - Present" },
                { role: "UI/UX Designer", company: "CreativeStudio", period: "2021 - 2023" },
                { role: "Freelance Developer", company: "Self-employed", period: "2019 - 2021" }
              ].map((job, i) => (
                <GlassCard key={i} className="flex justify-between items-center group">
                  <div>
                    <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{job.role}</h4>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                  <span className="text-sm text-white/50 font-mono">{job.period}</span>
                </GlassCard>
              ))}
            </div>
          </div>

          <div>
            <GlassCard className="h-full relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's work together</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                I'm currently available for new projects. If you have a creative idea you want to bring to life, let's get in touch.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>hello@alex.dev</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <span>@alex_dev</span>
                </div>
              </div>

              <div className="mt-10">
                 <Button className="w-full bg-white text-black hover:bg-white/90 font-bold py-6 rounded-xl">
                   Start a Project
                 </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
      
      <footer className="py-8 border-t border-white/5 text-center text-muted-foreground text-sm">
        <div className="container mx-auto">
          <p>© 2024 Alex Dev. Crafted with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
}

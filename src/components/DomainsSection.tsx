import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code2, 
  Brain, 
  Palette, 
  Shield, 
  Smartphone, 
  Database 
} from "lucide-react";

const domains = [
  {
    icon: Code2,
    name: "Web Development",
    description: "Building modern, responsive web applications using cutting-edge frameworks and technologies.",
    color: "192 100% 50%", // electric blue
  },
  {
    icon: Brain,
    name: "AI & Machine Learning",
    description: "Exploring artificial intelligence, deep learning, and data science to solve real-world problems.",
    color: "270 60% 60%", // neon purple
  },
  {
    icon: Palette,
    name: "UI/UX Design",
    description: "Crafting beautiful, intuitive user experiences that delight and engage users.",
    color: "180 100% 45%", // cyan
  },
  {
    icon: Shield,
    name: "Cybersecurity",
    description: "Protecting digital assets and learning ethical hacking to build secure systems.",
    color: "340 80% 60%", // pink
  },
  {
    icon: Smartphone,
    name: "App Development",
    description: "Creating native and cross-platform mobile applications for iOS and Android.",
    color: "150 80% 45%", // green
  },
  {
    icon: Database,
    name: "Cloud & DevOps",
    description: "Mastering cloud infrastructure, containerization, and CI/CD pipelines.",
    color: "30 90% 55%", // orange
  },
];

const DomainsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="domains"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Section Number Decoration */}
      <span className="section-number right-0 left-auto">02</span>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-satoshi text-sm uppercase tracking-[0.3em] text-primary mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Explore Our{" "}
            <span className="gradient-text">Domains</span>
          </h2>
          <p className="font-satoshi text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into diverse technical domains and find your passion. 
            Each domain offers hands-on learning and real project experience.
          </p>
        </motion.div>

        {/* Domains Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card p-8 group cursor-pointer"
              style={{
                ["--domain-color" as string]: domain.color,
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, hsl(${domain.color} / 0.2) 0%, hsl(${domain.color} / 0.1) 100%)`,
                  boxShadow: `0 0 30px hsl(${domain.color} / 0.2)`,
                }}
              >
                <domain.icon
                  className="w-7 h-7 transition-colors duration-300"
                  style={{ color: `hsl(${domain.color})` }}
                />
              </div>

              {/* Content */}
              <h3 className="font-clash font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                {domain.name}
              </h3>
              <p className="font-satoshi text-sm text-muted-foreground leading-relaxed">
                {domain.description}
              </p>

              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 60px hsl(${domain.color} / 0.1), 0 0 30px hsl(${domain.color} / 0.1)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
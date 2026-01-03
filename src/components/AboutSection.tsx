import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Rocket, Trophy, Calendar } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = "", duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const stats = [
  { icon: Users, value: 150, suffix: "+", label: "Active Members" },
  { icon: Rocket, value: 50, suffix: "+", label: "Projects Built" },
  { icon: Trophy, value: 25, suffix: "+", label: "Awards Won" },
  { icon: Calendar, value: 5, suffix: "", label: "Years Strong" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Section Number Decoration */}
      <span className="section-number">01</span>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-satoshi text-sm uppercase tracking-[0.3em] text-primary mb-4 block">
              About Us
            </span>
            <h2 className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Shaping the{" "}
              <span className="gradient-text">Future</span> of Tech
            </h2>
            <p className="font-satoshi text-lg text-muted-foreground leading-relaxed mb-6">
              MIBCS is a premier college technical club dedicated to fostering innovation, 
              collaboration, and technical excellence. We bring together passionate minds 
              to explore cutting-edge technologies and build impactful solutions.
            </p>
            <p className="font-satoshi text-muted-foreground leading-relaxed">
              From web development to artificial intelligence, our diverse domains 
              provide opportunities for every tech enthusiast to learn, grow, and lead.
            </p>
          </motion.div>

          {/* Right Content - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 group hover:scale-105 transition-transform duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <div className="font-clash font-bold text-4xl md:text-5xl mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-satoshi text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
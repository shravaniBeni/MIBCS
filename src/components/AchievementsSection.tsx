import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Trophy, Medal, Star } from "lucide-react";

const achievements = [
  {
    year: "2024",
    title: "National Hackathon Champions",
    description: "Won first place at the National Tech Hackathon with an AI-powered healthcare solution.",
    icon: Trophy,
  },
  {
    year: "2023",
    title: "Best Technical Club Award",
    description: "Recognized as the best technical club in the university for outstanding contributions.",
    icon: Award,
  },
  {
    year: "2023",
    title: "Open Source Excellence",
    description: "Our projects received over 1000 stars on GitHub and featured in major tech publications.",
    icon: Star,
  },
  {
    year: "2022",
    title: "Regional Innovation Award",
    description: "Awarded for developing a smart campus management system adopted by 5 institutions.",
    icon: Medal,
  },
];

const AchievementsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Section Number Decoration */}
      <span className="section-number">03</span>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-satoshi text-sm uppercase tracking-[0.3em] text-primary mb-4 block">
            Our Pride
          </span>
          <h2 className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Featured{" "}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="font-satoshi text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our journey of excellence and the milestones 
            that define our commitment to innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent transform md:-translate-x-1/2" />

          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                } pl-8 md:pl-0`}
              >
                <div className="glass-card p-6 group hover:scale-[1.02] transition-transform duration-300">
                  {/* Year Badge */}
                  <span className="font-clash font-bold text-5xl text-muted/30 absolute -top-4 -right-2">
                    {achievement.year}
                  </span>

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <achievement.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-satoshi text-xs uppercase tracking-wider text-primary">
                        {achievement.year}
                      </span>
                    </div>

                    <h3 className="font-clash font-semibold text-xl mb-2">
                      {achievement.title}
                    </h3>
                    <p className="font-satoshi text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform md:-translate-x-1/2 -translate-x-1/2 shadow-[0_0_20px_hsl(var(--primary)/0.5)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
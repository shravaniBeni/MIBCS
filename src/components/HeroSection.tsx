import { motion } from "framer-motion";
import { ArrowRight, Users, Code, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import { AnimatedText } from "@/components/ui/animated-text";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        {/* Logo + Brand Unit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-6 mb-8"
        >
          <img
            src="/mibcs_logo.png"
            alt="MIBCS Logo"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
          />
          <h1 className="font-clash font-bold text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-none tracking-tight text-foreground">
            <AnimatedText 
              text="MIBCS" 
              startDelay={500}
              wordDelay={200}
            />
          </h1>
        </motion.div>

        {/* Tagline */}
        <div className="font-clash text-lg sm:text-xl md:text-2xl text-muted-foreground tracking-[0.2em] uppercase mb-12">
          <AnimatedText 
            text="MachineLearning.IOT.Blockchain.CyberSecurity"
            startDelay={1500}
            wordDelay={100}
          />
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <MagneticButton strength={0.3}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground font-satoshi font-semibold text-base px-8 py-6 border-2 border-primary hover:bg-primary/90 transition-colors group"
            >
              Join Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </MagneticButton>
          <MagneticButton strength={0.3}>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-border bg-transparent text-foreground font-satoshi font-medium text-base px-8 py-6 hover:bg-muted/20 hover:border-muted-foreground/30 transition-colors"
            >
              Explore Domains
            </Button>
          </MagneticButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-muted-foreground/60"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
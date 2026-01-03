import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Tech Summit 2025",
    description: "Annual flagship event featuring industry leaders, workshops, and networking sessions.",
    date: "March 15, 2025",
    time: "10:00 AM",
    location: "Main Auditorium",
    type: "Conference",
  },
  {
    title: "48-Hour Hackathon",
    description: "Build innovative solutions and compete for prizes worth $10,000.",
    date: "April 5-7, 2025",
    time: "9:00 AM",
    location: "Innovation Hub",
    type: "Competition",
  },
  {
    title: "AI Workshop Series",
    description: "Hands-on workshops covering machine learning, deep learning, and neural networks.",
    date: "Every Saturday",
    time: "2:00 PM",
    location: "Tech Lab 101",
    type: "Workshop",
  },
];

const EventsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Section Number Decoration */}
      <span className="section-number right-0 left-auto">04</span>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-satoshi text-sm uppercase tracking-[0.3em] text-primary mb-4 block">
            What's Next
          </span>
          <h2 className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Upcoming{" "}
            <span className="gradient-text">Events</span>
          </h2>
          <p className="font-satoshi text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us at our upcoming events and be part of the innovation journey. 
            From workshops to hackathons, there's something for everyone.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card p-6 group hover:scale-[1.02] transition-all duration-300"
            >
              {/* Event Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-satoshi text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {event.type}
                </span>
              </div>

              {/* Event Title */}
              <h3 className="font-clash font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                {event.title}
              </h3>

              {/* Event Description */}
              <p className="font-satoshi text-sm text-muted-foreground mb-6 line-clamp-2">
                {event.description}
              </p>

              {/* Event Details */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-satoshi">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-satoshi">{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-satoshi">{event.location}</span>
                </div>
              </div>

              {/* Register Button */}
              <Button
                className="w-full glow-button bg-primary/10 hover:bg-primary/20 text-primary font-satoshi font-medium group/btn"
              >
                Register Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
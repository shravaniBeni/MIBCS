import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{ opacity: isVisible ? 1 : 0 }}
          className="w-8 h-8 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(192 100% 50% / 0.8) 0%, transparent 70%)",
            boxShadow: "0 0 20px 10px hsl(192 100% 50% / 0.3)",
          }}
        />
      </motion.div>

      {/* Trailing glow (larger, slower) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-40 mix-blend-screen"
        style={{
          x: useSpring(cursorX, { damping: 40, stiffness: 100 }),
          y: useSpring(cursorY, { damping: 40, stiffness: 100 }),
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{ opacity: isVisible ? 0.6 : 0 }}
          className="w-24 h-24 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(270 60% 60% / 0.4) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Outer ambient glow (largest, slowest) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-30 mix-blend-screen"
        style={{
          x: useSpring(cursorX, { damping: 50, stiffness: 50 }),
          y: useSpring(cursorY, { damping: 50, stiffness: 50 }),
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{ opacity: isVisible ? 0.3 : 0 }}
          className="w-40 h-40 rounded-full blur-xl"
          style={{
            background: "radial-gradient(circle, hsl(192 100% 50% / 0.3) 0%, transparent 70%)",
          }}
        />
      </motion.div>
    </>
  );
};

export default CursorGlow;

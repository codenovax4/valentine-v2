import { useState } from "react";
import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import FloatingText from "@/components/FloatingText";
import MainQuestion from "@/components/MainQuestion";
import YesButton from "@/components/YesButton";
import NoButton from "@/components/NoButton";
import Celebration from "@/components/Celebration";

const Index = () => {
  const [showCelebration, setShowCelebration] = useState(false);

  return (
    <motion.div
      className="relative min-h-screen bg-gradient-love overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Effects */}
      <FloatingHearts />
      <FloatingText />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <MainQuestion />

        {/* Buttons Container */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <YesButton onYes={() => setShowCelebration(true)} />
          <NoButton />
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {["💌", "🌹", "💝", "🌹", "💌"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-2xl md:text-3xl"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Celebration Screen */}
      <Celebration isVisible={showCelebration} />
    </motion.div>
  );
};

export default Index;

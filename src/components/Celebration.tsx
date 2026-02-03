import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const loveMessages = [
  "I knew you'd say yes 🥰",
  "I love you Nicky 💕",
  "Best Valentine ever ❤️",
  "You make me so happy 💖",
  "Forever yours 💘",
  "My heart is full 💝",
];

interface CelebrationProps {
  isVisible: boolean;
}

const Celebration = ({ isVisible }: CelebrationProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    // Continuous confetti
    const interval = setInterval(() => {
      confetti({
        particleCount: 30,
        spread: 100,
        origin: { y: 0.6, x: Math.random() },
        colors: ["#ff6b8a", "#ff85a2", "#ffa5b9", "#ffccd5"],
      });
    }, 800);

    // Cycle through messages
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % loveMessages.length);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearInterval(messageInterval);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-celebration"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Floating hearts background */}
          {Array.from({ length: 30 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: 20 + Math.random() * 30,
              }}
              initial={{ y: "100vh", opacity: 0 }}
              animate={{
                y: "-100vh",
                opacity: [0, 1, 1, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                delay: Math.random() * 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {["💕", "💖", "💗", "💘", "💝", "❤️"][Math.floor(Math.random() * 6)]}
            </motion.div>
          ))}

          {/* Main content */}
          <motion.div
            className="relative z-10 text-center px-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.3,
            }}
          >
            <motion.h1
              className="font-romantic text-6xl md:text-8xl lg:text-9xl text-gradient-love mb-8"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Happy Valentine's Day
            </motion.h1>

            <motion.p
              className="font-romantic text-4xl md:text-6xl text-foreground mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              my love 💝
            </motion.p>

            {/* Cycling love messages */}
            <motion.div
              key={currentMessageIndex}
              className="font-playful text-2xl md:text-3xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {loveMessages[currentMessageIndex]}
            </motion.div>

            {/* Decorative hearts */}
            <div className="mt-12 flex justify-center gap-4">
              {["💖", "💕", "💗", "💘", "💝"].map((heart, i) => (
                <motion.span
                  key={i}
                  className="text-4xl md:text-5xl"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {heart}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Sparkle effects */}
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 2,
                repeat: Infinity,
              }}
            >
              ✨
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Celebration;

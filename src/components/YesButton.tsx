import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface YesButtonProps {
  onYes: () => void;
}

const YesButton = ({ onYes }: YesButtonProps) => {
  const handleClick = () => {
    // Fire confetti from multiple angles
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ["#ff6b8a", "#ff85a2", "#ffa5b9", "#ffccd5", "#ff4d6d", "#c9184a"],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    // Heart-shaped confetti
    const heartShape = confetti.shapeFromPath({
      path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    });

    confetti({
      shapes: [heartShape],
      scalar: 2,
      particleCount: 50,
      spread: 180,
      origin: { y: 0.5 },
      colors: ["#ff6b8a", "#c9184a", "#ff4d6d"],
    });

    onYes();
  };

  return (
    <motion.button
      onClick={handleClick}
      className="relative px-16 py-6 bg-gradient-heart text-primary-foreground font-playful font-bold text-2xl md:text-3xl rounded-full shadow-heart animate-glow-pulse"
      whileHover={{
        scale: 1.1,
        boxShadow: "0 12px 40px -8px hsl(0 85% 55% / 0.6)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.6,
        type: "spring",
        stiffness: 200,
      }}
    >
      <motion.span
        className="relative z-10 flex items-center gap-2"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        YES 💖
      </motion.span>

      {/* Floating hearts around button */}
      <motion.span
        className="absolute -top-4 -right-4 text-2xl"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 15, 0],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        💕
      </motion.span>
      <motion.span
        className="absolute -bottom-3 -left-3 text-xl"
        animate={{
          y: [0, -5, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      >
        💗
      </motion.span>
    </motion.button>
  );
};

export default YesButton;

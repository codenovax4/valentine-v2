import { motion } from "framer-motion";
import { useMemo } from "react";

const floatingTexts = [
  "I ❤️ You",
  "Nicky 💕",
  "Be Mine 💘",
  "Love 💖",
  "XOXO 💋",
  "Forever 💗",
];

const FloatingText = () => {
  const texts = useMemo(() => {
    return floatingTexts.map((text, i) => ({
      text,
      id: i,
      left: 5 + (i * 15) + Math.random() * 10,
      top: 10 + Math.random() * 80,
      delay: i * 0.5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {texts.map((item) => (
        <motion.div
          key={item.id}
          className="absolute font-romantic text-lg md:text-xl text-primary/40"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.text}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingText;

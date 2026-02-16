import { motion } from "framer-motion";
import { useState, useCallback } from "react";

const messages = [
  "No 😢",
  "Are you sure? 🥺",
  "Think again 😏",
  "Don't break my heart 💔",
  "Last chance 😳",
  "You know you want to 😘",
  "Pretty please? 🙏",
  "I'll be sad 😿",
  "Click YES! 💕",
  "Sweety please 🥹",
];

const NoButton = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isShaking, setIsShaking] = useState(false);

  const dodgeButton = useCallback(() => {
    // Get viewport dimensions
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;

    // Generate random position
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;

    setPosition({ x: newX, y: newY });
    setMessageIndex((prev) => (prev + 1) % messages.length);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  }, []);

  return (
    <motion.button
      className={`relative px-8 py-3 bg-secondary text-secondary-foreground font-playful font-medium text-lg rounded-full border-2 border-primary/30 hover:border-primary/50 transition-colors ${
        isShaking ? "animate-shake" : ""
      }`}
      onMouseEnter={dodgeButton}
      onTouchStart={dodgeButton}
      onClick={dodgeButton}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      {messages[messageIndex]}
    </motion.button>
  );
};

export default NoButton;

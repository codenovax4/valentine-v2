import { motion } from "framer-motion";

const MainQuestion = () => {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <motion.h1
        className="font-romantic text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Nicky, will you be
      </motion.h1>
      <motion.h1
        className="font-romantic text-5xl md:text-7xl lg:text-8xl text-gradient-love mt-2"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        my Valentine? 💘
      </motion.h1>
    </motion.div>
  );
};

export default MainQuestion;

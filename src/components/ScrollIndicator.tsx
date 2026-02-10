import { motion } from "motion/react";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="fixed bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
    >
      <p className="text-xs text-[#707070] font-inter tracking-wide">
        Scroll to explore
      </p>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-[#707070]"
      >
        ↓
      </motion.div>
    </motion.div>
  );
}

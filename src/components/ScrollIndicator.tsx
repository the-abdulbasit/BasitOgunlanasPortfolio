import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
    >
      <p className="text-xs text-[#707070] font-inter tracking-widest uppercase">
        Scroll to explore
      </p>
      <ChevronDown size={20} className="text-[#707070]" />
    </motion.div>
  );
}

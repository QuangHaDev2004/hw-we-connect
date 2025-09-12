import { motion } from "framer-motion";

export const Loading = () => {
  return (
    <div className="flex min-h-full items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        <div className="border-primary h-10 w-10 rounded-full border-4 border-t-transparent"></div>
      </motion.div>
    </div>
  );
};

import React from "react";
import "./loader.css";
import { motion, AnimatePresence } from "framer-motion";

function Loader() {
  return (
    <AnimatePresence>
        <motion.div
          className="loaderBody"
          initial={{ width: "100%", opacity: 1 }}
          animate={{ width: 0, opacity: 0 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 3, delay: 4 }}
        >
          <h1>Spin Stake</h1>
        </motion.div>
    </AnimatePresence>
  );
}

export default Loader;

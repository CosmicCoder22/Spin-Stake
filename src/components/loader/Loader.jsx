import React from "react";
import "./loader.css";
import { motion, AnimatePresence } from "framer-motion";

function Loader() {
  return (
    <AnimatePresence>
        <motion.div
          className="loaderBody"

        >
          <h1>Spin Stake</h1>
        </motion.div>
    </AnimatePresence>
  );
}

export default Loader;

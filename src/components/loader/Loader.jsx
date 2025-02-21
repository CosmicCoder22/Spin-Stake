import React from "react";
import "./loader.css";

import loadingLogo from '../../assets/logo.gif'
import { motion, AnimatePresence } from "framer-motion";

function Loader() {
  return (
    <AnimatePresence>
        <motion.div className="loaderBody" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 2, delay: 2}}>
          <p>Spin Stake</p><img src={loadingLogo} alt="" />
        </motion.div>
    </AnimatePresence>
  );
}

export default Loader;

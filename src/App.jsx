import { useEffect, useState } from "react";
import "./App.css";

import AboutUs from "./components/aboutUs/AboutUs";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";
import SpinContainer from "./components/spin/SpinContainer";
import Tokenomics from "./components/tokenomics/Tokenomics";
import TokenSale from "./components/tokenSale/TokenSale";
import UserInfo from "./components/userInfo/UserInfo";
import { motion, AnimatePresence } from "framer-motion";

function App() {

  const [loader, setLoader] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
      setTimeout(() => setShowContent(true), 100);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="body">
      <AnimatePresence>
        <Loader isVisible={loader} />
          <motion.div 
          initial={{ opacity: 0, width: 0}}
          animate={{ opacity: 1, width: "100%"}}
          transition={{ duration: 3, delay: 3}}
          className="content">
            <Header />
            <TokenSale />
            <SpinContainer />
            <Tokenomics />
            <UserInfo />
            <AboutUs />
            <footer />
          </motion.div>
          </AnimatePresence>
    </div>
  );
}

export default App;

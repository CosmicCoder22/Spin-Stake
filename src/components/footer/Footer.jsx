import React from "react";
import "./footer.css";

import telegramIcon from "../../assets/telegramIcon.png";
import xLogo from "../../assets/xIcon.png";
import discordLogo from "../../assets/discordIcon.png";

function Footer({ isSocialsBlinking }) {

  const handleSupportClick = () => {
    const email = "spinstake24@gmail.com";
    const subject = "Support request";
    const body = "Hello, I have some questions regarding this...";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "blank");
  };
  
  return (
    <div className={`footerBody ${isSocialsBlinking ? 'blinking' : ''}`}>
      <div className="socials">
        <a href="https://t.me/+KkcTzckNLhZlMzky" className="socialLink"><img src={telegramIcon} alt="" /></a>
        <a href="https://x.com/SpinStake" className="socialLink"><img src={xLogo} alt="" /></a>
        <a href="https://discord.gg/sadCCerNxs" className="socialLink"><img src={discordLogo} alt="" /></a>
      </div>
      <div className="supportContainer" onClick={handleSupportClick}>
        supportSpinStake@gmail.com
      </div>
    </div>
  );
}

export default Footer;

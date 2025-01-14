import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  const links = [
    { name: "WhatsApp", url: "https://wa.me/5583988004600", icon: faWhatsapp, className: "whatsapp" },
    { name: "Instagram", url: "https://www.instagram.com/willamyizidro/", icon: faInstagram, className: "instagram" },
    { name: "Facebook", url: "https://www.facebook.com/willamy.izidro", icon: faFacebook, className: "facebook" },
  ];

  return (
    <div className="App">
      <div className="container">
        <h1>Meus Links</h1>
        <ul className="link-list">
          {links.map((link, index) => (
            <li key={index} className="link-item">
              <a href={link.url} target="_blank" rel="noopener noreferrer" className={link.className}>
                <span className="icon">
                  <FontAwesomeIcon icon={link.icon} />
                </span>
                <span className="text">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

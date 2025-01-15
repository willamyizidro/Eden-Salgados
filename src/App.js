import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import IfoodLogo from "./assets/ifood.png";

const App = () => {
  const links = [
    { name: "iFood", url: "https://www.ifood.com.br/delivery/guarulhos-sp/eden-salgados-jardim-sao-domingos/6e0a9a76-7d0c-4c45-8575-996251bc53fd", icon: IfoodLogo, className: "ifood" },
    { name: "Loja 1 - Bairro: São Domingos", url: "https://wa.me/message/3CAZHU4GWLBYI1", icon: faWhatsapp, className: "whatsapp" },
    { name: "Loja 2 - Bairro: São João - Rua Coqueiral", url: "https://wa.me/message/IXJQU4O4AXUWF1", icon: faWhatsapp, className: "whatsapp" },
    { name: "Loja 3 - Bairro: São João - Estr. Guarulhos-Nazaré", url: "https://wa.me/qr/DY4M4ZXTO4J5I1 ", icon: faWhatsapp, className: "whatsapp" },
    { name: "Loja 4 - Bairro: Jd São Domingos ", url: "https://wa.me/message/53OBOPJZ6FR6D1", icon: faWhatsapp, className: "whatsapp" },
    { name: "Instagram", url: "https://www.instagram.com/edensalgadoss/", icon: faInstagram, className: "instagram" },
  ];

  return (
    <div className="App">
      <div className="container">
        <h1>Éden Salgados</h1>
        <ul className="link-list">
          {links.map((link, index) => (
            <li key={index} className="link-item">
              <a href={link.url} target="_blank" rel="noopener noreferrer" className={link.className}>
                <span className="icon">
                  {link.name === "iFood" ? (
                    <img src={link.icon} alt="iFood" className="ifood-icon" />
                  ) : (
                    <FontAwesomeIcon icon={link.icon} />
                  )}
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

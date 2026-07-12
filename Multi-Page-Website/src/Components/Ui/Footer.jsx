import footersData from "../../Api/FooterApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
export const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
    <footer className="footer-section">
      <div className="footer-container-wrapper">
        {footersData.map((footerData, index) => {
          const { title, icon, details } = footerData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="second-footer">
        <div className="second-footer-container">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} <span className="developer-name">Ankita Das</span>. All
            Rights Reserved.
          </p>
          <ul className="link-list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <a
                href="https://github.com/ankitadasz/React-ThapaTechnical/tree/main/Multi-Page-Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-social-icons">
        <a
          href="https://instagram.com/ankitadasz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://linkedin.com/in/ankitadasz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://twitter.com/ankitadasz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>

        <a
          href="https://facebook.com/ankitadasz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
};

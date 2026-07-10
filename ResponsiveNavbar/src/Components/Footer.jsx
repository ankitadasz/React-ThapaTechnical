import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

import FooterContact from "../api/FooterContact.json";

export const Footer = () => {

    const iconMap ={
        MdPlace:<MdPlace/>,
        TbMailPlus:<TbMailPlus/>,
        IoCallSharp:<IoCallSharp/>,
        
    }
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="grid grid-three-cols">
          {FooterContact.map((currData) => {
            const { icon, title, details } = currData;
            return (
              <>
                <div className="footer-contact">
                  <div className="icon">{iconMap[icon]}</div>
                  <div className="title">{title}</div>
                  <div className="details">{details}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

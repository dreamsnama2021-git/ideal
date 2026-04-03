import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div className="   ">
      <a
        href="https://wa.me/+918928983353"
        target="_blank"
        rel="noopener noreferrer"
        className="  "
      >
        <div className=" text-white ">
          <FaWhatsapp className="" size={28} />
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;

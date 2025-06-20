import Image from "next/image";
import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#157285] text-white px-4 md:px-6 py-10"
    >
      {/* Contenedor principal */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        {/* Columna 1 - Texto empresa */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Nuestra empresa</h3>
          <p className="text-sm text-gray-200 max-w-[260px] mx-auto md:mx-0">
            Somos una empresa de tecnología que se dedica a ofrecer soluciones innovadoras para mejorar la vida de las personas.
          </p>
        </div>

        {/* Columna 2 - Logo */}
        <div className="flex justify-center items-center ">
          <Image
            src="/assets/icon.png"
            alt="Logo SIT"
            width={120}
            height={120}
            className="drop-shadow-lg transition-transform duration-300 hover:scale-105 w-auto h-auto"
            priority
          />
        </div>

        {/* Columna 3 - Contacto */}
        <div className="text-center md:text-right md:ml-24">
          <div className="flex items-center justify-center md:justify-end text-sm mb-2">
            <MdLocationOn className="mr-2" />
            <span>
              Los Crisantemos 265,<br /> Pilar, Buenos Aires
            </span>
          </div>
          <div className="flex items-center justify-center md:justify-end text-sm">
            <MdEmail className="mr-2" />
            <a href="mailto:info@solutionit.com.ar" className="hover:underline break-all">
              info@solutionit.com.ar
            </a>
          </div>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="flex justify-center gap-6 mt-8 text-white text-3xl">
        <a href="#" aria-label="WhatsApp" className="drop-shadow-lg transition-transform duration-300 hover:scale-105">
          <FaWhatsapp />
        </a>
        <a href="#" aria-label="LinkedIn" className="drop-shadow-lg transition-transform duration-300 hover:scale-105">
          <FaLinkedinIn />
        </a>
        <a href="#" aria-label="Facebook" className="drop-shadow-lg transition-transform duration-300 hover:scale-105">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Instagram" className="drop-shadow-lg transition-transform duration-300 hover:scale-105">
          <FaInstagram />
        </a>
      </div>

      {/* Derechos */}
      <div className="text-center text-sm mt-6 text-gray-200">
        © 2025 Solution IT. Todos los derechos reservados
      </div>
    </footer>
  );
}

import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import Image from 'next/image';
export default function Footer() {
    return (
        <footer className="bg-[#157285] text-white px-6 py-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
                {/* Columna izquierda */}
                <div className="text-center md:text-left -ml-8">
                    <h3 className="text-lg font-semibold mb-2">Nuestra empresa</h3>
                    <p className="text-sm text-gray-200 max-w-2xs">
                        Somos una empresa de tecnología que <br></br> se dedica a ofrecer soluciones <br></br> innovadoras para mejorar la vida de las personas.
                    </p>
                </div>

                <div className="flex justify-center items-center mr-2">
                    <Image
                        src="/assets/icon.png"
                        alt="Logo SIT"
                        width={180}
                        height={180}
                        className="drop-shadow-lg transition-transform duration-300 hover:scale-105 w-auto h-auto max-w-[180px] md:max-w-[220px]"
                        priority
                    />
                </div>
                {/* Información de contacto */}
                <div className="text-center md:text-right">
                    <div className="flex items-center justify-center md:justify-end text-sm mb-2">
                        <MdLocationOn className="mr-2" />
                        <span>Los Crisantemos 265, Pilar, Buenos Aires</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-end text-sm">
                        <MdEmail className="mr-2" />
                        <a href="mailto:info@solutionit.com.ar" className="hover:underline">
                            info@solutionit.com.ar
                        </a>
                    </div>
                </div>
            </div>

            {/* Redes sociales */}
            <div className="flex justify-center gap-8 mt-6 text-white text-4xl ">
                <a href="#" aria-label="WhatsApp" className='drop-shadow-lg transition-transform duration-300 hover:scale-105'><FaWhatsapp /></a>
                <a href="#" aria-label="LinkedIn"  className='drop-shadow-lg transition-transform duration-300 hover:scale-105'><FaLinkedinIn /></a>
                <a href="#" aria-label="Facebook"  className='drop-shadow-lg transition-transform duration-300 hover:scale-105'><FaFacebookF /></a>
                <a href="#" aria-label="Instagram"  className='drop-shadow-lg transition-transform duration-300 hover:scale-105'><FaInstagram /></a>
            </div>

            {/* Derechos reservados */}
            <div className="text-center text-sm mt-6 text-gray-200">
                © 2025 Solution IT. Todos los derechos reservados
            </div>
        </footer>
    );
}

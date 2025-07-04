'use client';
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function CapacitacionesYConsultoria() {
    return (
        <div className="w-full bg-[#024959] text-white">
            <Navbar />

            <section className="px-4 py-20 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">CONSULTORIA-IT</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* CAPACITACIONES CORPORATIVAS */}
                    <div className="flex flex-col lg:flex-row items-center bg-[#033E4F] p-6 rounded-xl shadow-lg">
                        <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-6">
                            <Image
                                src="/assets/consult1.png"
                                alt="Capacitaciones Corporativas"
                                width={180}
                                height={180}
                                className="rounded-lg"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">CAPACITACIONES CORPORATIVAS</h3>
                            <p className="text-sm text-white text-justify">
                                En SOLUTION IT, nos apasiona la tecnología y creemos en el poder de la capacitación para ayudar a las empresas a crecer y mejorar su desempeño. 
                                Por eso ofrecemos una unidad de capacitaciones sobre tecnología, buenas prácticas, seguridad y respaldo de la información, para que puedas elegir 
                                la que mejor se adapte a las necesidades de tu empresa. Te brindamos opciones presenciales o en línea, y nos aseguramos de que los contenidos 
                                sean prácticos, fáciles de entender y aplicar. Además, nuestros cursos son altamente personalizables.
                            </p>
                        </div>
                    </div>

                    {/* CONSULTORÍA INFORMÁTICA */}
                    <div className="flex flex-col lg:flex-row items-center bg-[#033E4F] p-6 rounded-xl shadow-lg">
                        <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-6">
                            <Image
                                src="/assets/consult3.png"
                                alt="Consultoría Informática"
                                width={180}
                                height={180}
                                className="rounded-lg"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">CONSULTORÍA INFORMÁTICA</h3>
                            <p className="text-sm text-white text-justify">
                                En SOLUTION IT, estamos comprometidos con el éxito de tu empresa. Ofrecemos servicios de asesoramiento y consultoría en tecnología informática 
                                para ayudarte a mejorar el crecimiento y desarrollo de tu sector informático. Contamos con un equipo de expertos en tecnología con amplia experiencia 
                                en implementación de soluciones personalizadas. Nuestros servicios incluyen evaluación y optimización de sistemas, implementación de tecnología 
                                de vanguardia y gestión de proyectos informáticos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

'use client';
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function InfraestructuraPage() {
    return (
        <div className="w-full bg-[#024959] text-white">
            <Navbar />

            <section className="px-4 py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">INFRAESTRUCTURA</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto cursor-pointer">
                    {[
                        {
                            img: "/assets/infra3.png",
                            title: "SOPORTE TECNICO",
                            desc: "Técnicos en TI resolvemos tus problemas ágilmente y sin interrupciones, para que puedas enfocarte en tu negocio. Ofrecemos asistencia remota, configuración de dispositivos y redes, instalación de apps, puestos de trabajo, cableado y soporte.",
                        },
                        {
                            img: "/assets/infra1.png",
                            title: "IMPLEMENTACIÓN",
                            desc: "Nuestra infraestructura de redes ofrece una solución de cableado estructurado para satisfacer todas las necesidades de conectividad de tu empresa. Con diferentes tipos de cables que se adaptan a cualquier ubicación y entorno, podrás tener una plataforma administrada que une tecnología y servicios corporativos para obtener una solución integral y eficiente.",
                        },
                        {
                            img: "/assets/infra2.png",
                            title: "ADMINISTRACIÓN DE SERVIDORES",
                            desc: "Ofrecemos instalación y mantenimiento de servidores para centralizar y proteger tu información. Ofrecemos servicios para:\n• Servidores de Seguridad\n• Servidores de Sistemas y Aplicaciones\n• Servidores de Archivos\n• Servidores de correo electrónico\n• Otros servidores",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#033E4F] p-6 rounded-xl flex flex-col items-center shadow-lg hover:scale-105 transition-transform"
                        >
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={150}
                                height={150}
                                className="mb-4"
                            />
                            <h3 className="text-lg font-semibold text-center mb-2">{item.title}</h3>
                            <p className="text-sm text-white text-justify whitespace-pre-line">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}

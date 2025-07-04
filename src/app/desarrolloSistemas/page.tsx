'use client';
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function VideoVigilanciaPage() {
    return (
        <div className="w-full bg-[#024959] text-white">
            <Navbar />

            <section className="px-4 py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">DESARROLLO DE SISTEMAS</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto cursor-pointer">
                    {[
                        {
                            img: "/assets/sist1.png",
                            title: "DESARROLLO A MEDIDA",
                            desc: "Creamos soluciones tecnológicas a medida, diseñadas específicamente para tu proyecto y utilizando las mejores herramientas del mercado.",
                        },
                        {
                            img: "/assets/sist2.png",
                            title: "SISTEMAS WEB",
                            desc: "Ofrecemos soluciones tecnológicas a medida, desarrolladas por especialistas en programación de plataformas y aplicaciones web que se ajustan perfectamente a las necesidades de tu proyecto.",
                        },
                        {
                            img: "/assets/sist3.png",
                            title: "MOVILES APPS",
                            desc: "Diseñamos y programamos herramientas para dispositivos móviles que están al alcance de cualquier persona, con el objetivo de mejorar tu productividad y facilitar tus actividades cotidianas.",
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

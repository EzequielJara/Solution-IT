'use client';
import Image from "next/image";
import Navbar from "./components/Navbar";
import AOSInit from "./components/AOSInit";
import Footer from "./components/footer";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 1000); // pequeño delay para asegurar que el DOM cargue
      }
    }
  }, []);
  return (
    <>
    <div className="w-full">
      

      <section className="flex flex-col items-center bg-[#05A4C0] text-white p-4 min-h-[80vh]">
        <Navbar />

        <div className="text-center mt-20">
          <Image
            src="/assets/icon.png"
            alt="Logo SIT"
            width={300}
            height={300} 
            loading="lazy"
            className="mx-auto drop-shadow-[0_3px_2px_rgba(0,0,0,0.2)]"
          />
          <h2 className="flex justify-center text-4xl md:text-5xl drop-shadow-[0_3px_2px_rgba(0,0,0,0.2)] font-extrabold mt-6 mb-4">
  {"SOLUTION IT".split("").map((char, index) => (
    <span
      key={index}
      className="riseUp"
      style={{
        animationDelay: `${index * 0.1}s`,
        animationFillMode: "forwards"
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}

  <style jsx>{`
    @keyframes riseUp {
      0% {
        transform: translateY(100%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .riseUp {
      display: inline-block;
      animation: riseUp 0.5s ease-out forwards;
    }
  `}</style>
</h2>



          <p className="mt-6 mb-20 text-lg font-light text-white">
            Transforma tu negocio con <br className="block md:hidden" />
            soluciones de IT innovadoras
          </p>
        </div>
      </section>

      {/* SECCIÓN BLANCA: Servicios */}
      <section id="servicios" className="w-full bg-white text-black py-16 px-4"  data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#018EA7] mb-12">
            Nuestros servicios
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-down">
            {[
              {
                src: "/assets/op (2).png",
                alt: "Infraestructura y Tecnología",
                title: "Infraestructura y Tecnología",
                desc: "Soporte Técnico, implementación e Administración de servidores",
                link: "/infraestructura",
              },
              {
                src: "/assets/op (1).png",
                alt: "Videovigilancia",
                title: "Videovigilancia",
                desc: "Implementación, Modelo BULLET y Modelo DOMO",
              },
              {
                src: "/assets/op (3).png",
                alt: "Desarrollo de Sistemas",
                title: "Desarrollo de Sistemas",
                desc: "Desarrollos a medida, Sistemas Webs y Apps Móviles",
              },
              {
                src: "/assets/op (4).jpg",
                alt: "Consultoría IT",
                title: "Consultoría IT",
                desc: "Capacitaciones Corporativas y Consultoría Informática",
              },
            ].map((service, i) => (
              <a
                key={i}
                
                href={service.link}
                className="group bg-white rounded-3xl shadow-[0_3px_2px_rgba(0,0,0,0.2)] p-4 flex flex-col items-center text-center  transition transform hover:scale-110 hover:shadow-xl cursor-pointer"
              >
                <Image
                  src={service.src}
                  alt={service.alt}
                  width={300}
                  height={160}
                  className="rounded-2xl object-cover w-full h-40"
                />
                <h3 className="mt-4 font-semibold text-[#1B3B59] group-hover:text-[#018EA7]">
                  {service.title}
                </h3>
                <p className="text-sm text-black mt-1">{service.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* SECCIÓN NOSOTROS */}
<section id="nosotros" className="w-full bg-white text-[#1B3B59] py-16 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-[#018EA7] mb-6"  data-aos="fade-right">Nosotros</h2>
    <p className="mb-4"  data-aos="fade-up-right">
      En SOLUTION IT, estamos comprometidos con proporcionar soluciones tecnológicas confiables y de alta calidad.
      Con años de experiencia en el sector, hemos perfeccionado nuestros procesos para ofrecer un servicio eficiente,
      dedicado y personalizado que se adapta a las necesidades específicas de cada cliente.
    </p>
    <p className="mb-10"  data-aos="fade-down-right">
      Contamos con un equipo de profesionales altamente capacitados, comprometidos con la excelencia. Usamos tecnologías de vanguardia
      y diseños personalizados para asegurar que cada solución entregue valor real y tangible.
    </p>
    <p className="mb-10"  data-aos="fade-down-right">
      Sabemos que el tiempo es crucial en cualquier proyecto tecnológico. Por eso, implementamos planes de gestión efectivos que priorizan
      la eficiencia en cada paso, permitiéndonos cumplir los objetivos en el menor tiempo posible sin comprometer la calidad.
    </p>
  </div>

   <div className="max-w-3xl mx-auto flex flex-col gap-6 mt-8">
    {/* MISIÓN */}
    <div className="bg-[#05A4C0] text-white p-6 rounded-xl flex flex-col md:flex-row items-center gap-4 shadow-2xl" data-aos="fade-right">
      <Image
        src="/assets/mision.png"
        alt="Misión"
        width={150}
        height={150}
        className="object-contain drop-shadow-[0_3px_2px_rgba(0,0,0,0.2)]"
      />
      <div>
       
        <p className="text-lg drop-shadow-[0_3px_2px_rgba(0,0,0,0.2)]">
          Brindar soluciones tecnológicas innovadoras, eficientes y personalizadas que ayuden a nuestros clientes a alcanzar sus metas empresariales,
          garantizando confiabilidad, calidad y compromiso en cada proyecto.
        </p>
      </div>
    </div>

    {/* VISIÓN */}
    <div className="bg-[#05A4C0] text-white p-6 rounded-xl flex flex-col md:flex-row items-center gap-4 shadow-2xl" data-aos="fade-up">
     <div>
      
        <p className="text-lg drop-shadow-[0_3px_2px_rgba(0,0,0,0.2)]">
          Brindar soluciones tecnológicas innovadoras, eficientes y personalizadas que ayuden a nuestros clientes a alcanzar sus metas empresariales,
          garantizando confiabilidad, calidad y compromiso en cada proyecto.
        </p>
      </div>
      <Image
        src="/assets/vision.png"
        alt="Visión"
        width={150}
        height={150}
        className="object-contain drop-shadow-[0_3px_2px_rgba(0,0,0,0.2)]"
      />
      
    </div>
  </div>
</section>
 
      <Footer />
    </div>
    <AOSInit />
     
    </>
  );
}

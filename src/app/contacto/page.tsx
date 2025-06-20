'use client';

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function ContactoPage() {
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMensaje("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const url = "https://script.google.com/macros/s/AKfycbz49-afPRm2yYqwMn_P4MfykhsmIse-jM9cT9yvnTe7fK5MtvdKEMscUttkAmeonTvqYg/exec";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: new URLSearchParams(formData as any),
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();
      if (result.success) {
        setMensaje("✅ Mensaje enviado correctamente.");
        form.reset();
      } else {
        setMensaje("❌ Error: " + result.message);
      }
    } catch (error) {
      setMensaje("❌ Error al enviar: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Navbar />

      <section className="bg-[#0F5F6E] text-white px-4 pt-20 pb-12 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center tracking-wide">CONTACTANOS</h1>

        <div className="bg-[#105A66] w-full max-w-4xl rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-10 shadow-xl">

          {/* Columna izquierda con botón externo */}
            <div className="flex-1 flex flex-col justify-center items-center md:items-center text-center  md:text-left py-8 md:py-0">
            <h2 className="text-base md:text-xl font-semibold text-white mb-0 md:mb-2  mt-0 md:mt-34 ">
              Dejanos tu solicitud/consulta
            </h2>
            <p className="text-sm md:text-base text-white mb-4 md:mb-6">
              Nuestro equipo responderá lo antes posible
            </p>
            <button
              type="submit"
              form="form-contacto"
              disabled={loading}
              className="bg-[#05A4C0] hover:bg-[#04839a] text-white font-semibold px-6 py-2 rounded-xl shadow-md mt-2"
            >
              {loading ? "Enviando..." : "ENVIAR CONSULTA"}
            </button>
          </div>

          {/* Formulario sin botón propio */}
          <form
            onSubmit={handleSubmit}
            id="form-contacto"
            className="flex-1 bg-white text-black p-6 rounded-2xl w-full shadow-lg"
          >
            
            <div className="grid grid-cols-2 gap-4">
              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-gray-800 font-medium mb-1">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  name="nombre"
                  id="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#05A4C0]"
                />
              </div>

              {/* Apellido */}
              <div>
                <label htmlFor="apellido" className="block text-gray-800 font-medium mb-1">
                  Apellido
                </label>
                <input
                  name="apellido"
                  id="apellido"
                  type="text"
                  placeholder="Tu apellido"
                  className="w-full border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#05A4C0]"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-800 font-medium mb-1">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  required
                  placeholder="ejemplo@correo.com"
                  className="w-full border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#05A4C0]"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="telefono" className="block text-gray-800 font-medium mb-1">
                  Teléfono
                </label>
                <input
                  name="telefono"
                  id="telefono"
                  type="tel"
                  placeholder="+54 9 11 1234 5678"
                  className="w-full border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#05A4C0]"
                />
              </div>

              {/* Tema */}
              <div className="col-span-2">
                <label htmlFor="tema" className="block text-gray-800 font-medium mb-1">
                  Tema
                </label>
                <input
                  name="tema"
                  id="tema"
                  type="text"
                  placeholder="Asunto de tu consulta"
                  className="w-full border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#05A4C0]"
                />
              </div>

              {/* Mensaje */}
              <div className="col-span-2">
                <label htmlFor="mensaje" className="block text-gray-800 font-medium mb-1">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="mensaje"
                  id="mensaje"
                  rows={4}
                  required
                  placeholder="Escribe tu mensaje aquí"
                  className="w-full border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#05A4C0] resize-none"
                />
              </div>

              {/* Mensaje de estado */}
              {mensaje && (
                <div className="col-span-2 text-sm text-center mt-2 text-black">{mensaje}</div>
              )}
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

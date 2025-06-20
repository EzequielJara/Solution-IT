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

        const url = "https://script.google.com/macros/s/AKfycbz49-afPRm2yYqwMn_P4MfykhsmIse-jM9cT9yvnTe7fK5MtvdKEMscUttkAmeonTvqYg/exec"; // ⬅️ tu URL del Apps Script

        try {
            const response = await fetch(url, {
                method: "POST",
                body: new URLSearchParams(formData as any),
                headers: {
                    "Accept": "application/json",
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

            <section className="min-h-screen bg-[#0F5F6E] text-white px-6 pt-20 pb-20 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-16 text-center tracking-wide">CONTACTANOS</h1>

                <div className="bg-[#105A66] w-full max-w-5xl rounded-3xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-start gap-12 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">

                    {/* Columna izquierda */}
                    <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                        <h2 className="text-3xl font-semibold mb-6">Dejanos tu solicitud/consulta</h2>
                        <p className="mb-12 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                            Nuestro equipo responderá lo antes posible
                        </p>
                    </div>

                    {/* Formulario */}
                    <form onSubmit={handleSubmit} className="flex-1 bg-white text-black p-8 rounded-3xl w-full max-w-3xl shadow-lg">
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="block text-gray-800 font-semibold mb-2" htmlFor="nombre">
                                    Nombre <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="nombre"
                                    id="nombre"
                                    type="text"
                                    required
                                    className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-4 focus:ring-[#05A4C0]"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-800 font-semibold mb-2" htmlFor="apellido">
                                    Apellido
                                </label>
                                <input
                                    name="apellido"
                                    id="apellido"
                                    type="text"
                                    className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-4 focus:ring-[#05A4C0]"
                                    placeholder="Tu apellido"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-800 font-semibold mb-2" htmlFor="email">
                                    E-mail <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="email"
                                    id="email"
                                    type="email"
                                    required
                                    className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-4 focus:ring-[#05A4C0]"
                                    placeholder="ejemplo@correo.com"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-800 font-semibold mb-2" htmlFor="telefono">
                                    Teléfono
                                </label>
                                <input
                                    name="telefono"
                                    id="telefono"
                                    type="tel"
                                    className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-4 focus:ring-[#05A4C0]"
                                    placeholder="+54 9 11 1234 5678"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-800 font-semibold mb-2" htmlFor="tema">
                                    Tema
                                </label>
                                <input
                                    name="tema"
                                    id="tema"
                                    type="text"
                                    className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-4 focus:ring-[#05A4C0]"
                                    placeholder="Asunto de tu consulta"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-800 font-semibold mb-2" htmlFor="mensaje">
                                    Mensaje <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="mensaje"
                                    id="mensaje"
                                    required
                                    rows={5}
                                    className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-4 focus:ring-[#05A4C0] resize-none"
                                    placeholder="Escribe tu mensaje aquí"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-[#05A4C0] hover:bg-[#04839a] transition-colors duration-300 text-white font-semibold px-10 py-4 rounded-full shadow-md"
                            >
                                {loading ? "Enviando..." : "ENVIAR CONSULTA"}
                            </button>

                            {mensaje && (
                                <p className="text-sm text-center mt-2 text-black">{mensaje}</p>
                            )}
                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
}

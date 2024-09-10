import React from "react";

export function Form() {
    return (
        <>
            <section id="form" className="w-screen flex justify-center items-center mx-auto">
                <div className="mt-24 mx-auto w-[85%] md:w-[90%] p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-1 text-4xl mmd:text-5xl color6 font-semibold w-full text-center mb-8">
                        Toda <b>solución</b>, comienza con una charla. <b>Agendemos</b>
                    </h2>

                    <form className="space-y-6 mx-auto ">
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-color1 focus:border-color1"
                                placeholder="Tu nombre"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-lg font-medium text-gray-700">Empresa o Institución</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-color1 focus:border-color1"
                                placeholder="Nombre de la empresa o institución"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-color1 focus:border-color1"
                                placeholder="tuemail@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Contanos el motivo de tu contacto</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-color1 focus:border-color1"
                                placeholder="Escribe aquí el motivo de tu contacto..."
                                required
                            ></textarea>
                        </div>

                        <div className="text-left ">
                            <button
                                type="submit"
                                className="inline-block font-bold w-1/5 md:w-auto px-6 py-3 bg-color1 text-white font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-color1"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

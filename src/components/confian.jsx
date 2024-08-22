import React, { useState, useEffect } from "react";

import forma2 from '../assets/images/forma2.svg';

import confian1 from '../assets/images/confian/mendozaciudad.svg';
import confian2 from '../assets/images/confian/poloinovacion.svg';
import confian3 from '../assets/images/confian/itiers.svg';
import confian4 from '../assets/images/confian/inti.svg';
import confian5 from '../assets/images/confian/endeavor.svg';
import confian6 from '../assets/images/confian/maristas.svg';
import confian7 from '../assets/images/confian/mendozaciudad.svg';
import confian8 from '../assets/images/confian/naves.svg';
import confian9 from '../assets/images/confian/poloinovacion.svg';
import confian10 from '../assets/images/confian/tassaroli.svg';
import confian11 from '../assets/images/confian/uncuyo.svg';
import confian12 from '../assets/images/confian/utn.svg';
import confian13 from '../assets/images/confian/wise.svg';

export function Confian() {
    const images = [
        confian1,
        confian2,
        confian3,
        confian4,
        confian5,
        confian6,
        confian7,
        confian8,
        confian9,
        confian10,
        confian11,
        confian12,
        confian13
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesToShow, setImagesToShow] = useState(5); // Mostrar 5 imágenes por defecto

    useEffect(() => {
        // Función para cambiar la cantidad de imágenes según el tamaño de la pantalla
        const updateImagesToShow = () => {
            if (window.innerWidth <= 768) {
                setImagesToShow(3); // Mostrar 3 imágenes en pantallas medianas o más grandes (md o lg)
            } else {
                setImagesToShow(5); // Mostrar 5 imágenes en pantallas pequeñas
            }
        };

        // Llamar a la función al cargar la página y en cada redimensionamiento
        updateImagesToShow();
        window.addEventListener("resize", updateImagesToShow);

        return () => {
            window.removeEventListener("resize", updateImagesToShow);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Cambia cada 4 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [images.length]);

    const displayedImages = [
        ...images.slice(currentIndex, currentIndex + imagesToShow),
        ...images.slice(0, Math.max(0, imagesToShow - (images.length - currentIndex)))
    ];

    return (
        <>
            <section id="confian" className="w-screen flex">
                <div className="mt-40 w-full min-h-screens md:w-full">
                    <h2 className="text-1 text-4xl color6 font-semibold w-full text-center md:w-[85%] md:text-4xl md:mx-auto md:text-justify">
                        Ya confían en nuestra 
                        <span 
                            className="bg-no-repeat bg-contain inline-block"
                            style={{
                                backgroundImage: `url(${forma2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                padding: '0 1rem'
                            }}
                        >
                            metodología
                        </span>
                    </h2>

                    <div className="w-[80%] mx-auto mt-14 flex justify-center gap-2 duration-500 md:gap-0 md:w-[95%]">
                        {displayedImages.map((image, index) => (
                            <img key={index} src={image} alt={`Confianza ${index}`} className="w-40 mx-auto duration-500 animate-fade animate-duration-1000 animate-ease-linear overflow-hidden md:mx-4" />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

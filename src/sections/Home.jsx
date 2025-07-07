
import React, { useEffect, useRef, useState } from 'react';
import antenaDanPropagasi from '../data/CommunicationAndSignalProcessing.json'
import '../styles/animate.css'



function Home(){
    const imageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // hanya animasi sekali
                }
            },
            {
                threshold: 0.5, // trigger saat 50% elemen terlihat
            }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="home" className="full-width-section">
            <div className="section-content">
                <img
                    ref={imageRef}
                    src={antenaDanPropagasi.judul.image}
                    alt="penelitian"
                    className={`section-image fade-left ${isVisible ? 'visible' : ''}`}
                />
                <div className={`text fade-right ${isVisible ? 'visible' : ''}`}>
                    <h1>{antenaDanPropagasi.judul.title}</h1>
                    <p>{antenaDanPropagasi.judul.description}</p>
                </div>
            </div>
        </section>
    );
}

export default Home;
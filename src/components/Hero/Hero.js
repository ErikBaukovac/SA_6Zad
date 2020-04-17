import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="HeroSection">
            <div className="HeroSection-Container">
                <h1 className="HeroSection-Title">Tjedan karijera</h1>
                <span className="HeroSection-Organizer">FOI</span>
                <p className="HeroSection-Date">20.10.2020. - 26.10.2020.</p>
                <a href="/#" className="Button">Prijavi se</a>
            </div>
        </section>
    );
}

export default Hero;
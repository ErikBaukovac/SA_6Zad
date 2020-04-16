import React from 'react';

import './More.css';
import Cards from '../Cards/Cards'

import About from '../../assets/images/about.jpg';
import Speakers from '../../assets/images/speakers.jpg';
import Calendar from '../../assets/images/calendar.jpg';
import Partner from '../../assets/images/partner.jpg';


const More = () => {
    return (
        <section className="SectionMore">
            <div className="SectionMore-Inner">
                <p className="SectionMore-Text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                </p>
                <a href="/#" className="Button">Saznaj više</a>
            </div>
            <div className="SectionMore-CardsConatiner">
                <Cards image={About} alt="About">O tjednu karijera</Cards>
                <Cards image={Speakers} alt="Speakers">Izlagači</Cards>
                <Cards image={Calendar} alt="Agenda">Raspored događanja</Cards>
                <Cards image={Partner} alt="About">Partneri</Cards>
            </div>
        </section>
    );
}

export default More;

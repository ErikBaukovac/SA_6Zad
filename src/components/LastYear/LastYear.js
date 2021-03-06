import React from 'react';
import Last_Year from '../../assets/images/last-year.jpg';

import './LastYear.css';

const LastYear = () => {
    return (
        <section className="LastYearSection">

            <div className="LastYearSection-Inner">

                <h2 className="LastYearSection-Title">FOI tjedan karijera 2019</h2>
                <p className="LastYearSection-Text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                classical
                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from
                a
                Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                    undoubtable source.</p>

                <figure className="LastYearSection-Figure">
                    <img className="LastYearSection-Image" src={Last_Year} alt="FOI careers 2019" />
                </figure>

            </div>

        </section>
    );
}

export default LastYear;
import React from 'react';

import Location from '../../assets/images/location-icon.png';
import Time from '../../assets/images/time-icon.png';

import './Box.css';

const Box = (props) => {

    if (props.type === "event") {
        return (

            <div className="Box">

                <div className="Box-Header">
                    <div className="Box-Icon-Event">

                    </div>
                    <h2 className="Box-Title">{props.title}</h2>
                </div>

                <div className="Box-Info">

                    <div className="Info-Container">
                        <figure className="InfoContainer-Figure">
                            <img className="InfoContainer-Image" src={Location} alt="Location icon" />
                        </figure>
                        <span className="InfoCointainer-text">{props.location}</span>
                    </div>

                    <div className="Info-Container">
                        <figure className="Info-Container-Figure">
                            <img className="Info-Container-Image" src={Time} alt="Time icon" />
                        </figure>
                        <span className="Info-Container-Text">{props.time}</span>
                    </div>

                </div>

                <p className="Box-Text">{props.children}</p>

                <div className="Box-Footer">
                    <a href="/#" className="Box-Btn">Prijavi se na predavanje</a>
                </div>

            </div>
        );
    }

    else if (props.type === "speaker") {
        return (

            <div className="Box">
                <div className="Box-Header">
                    <div className="Box-Icon-Speakers"></div>
                    <h2 className="Box-Title">{props.title}</h2>
                </div>

                <p className="Box-Text">{props.children}</p>

                <div className="Box-Footer">
                    <a href="/#" className="BoxFooter-Btn">Prati sudionika</a>
                </div>
            </div>
        );
    }
}

export default Box;

import React from 'react';

import './Info.css';

const Info = (props) => {
    return (
        <section className="Info">{props.children}</section>
    );
}

export default Info;
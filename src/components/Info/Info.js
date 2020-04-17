import React from 'react';

import './Info.css';

const Info = (props) => {
    return (
        <section className="InfoSection">{props.children}</section>
    );
}

export default Info;
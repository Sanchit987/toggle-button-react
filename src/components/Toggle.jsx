import React, { Fragment, useState } from 'react';

function Toggle(props) {
    const [state, setState] = useState(false);

    const btnclicked = () => {
        const x = state ? false : true;
        setState(x);
    }

    return ( 
        <Fragment>
            <div className={`btn ${props.round ? "btn-round" : ""} ${state?"btn-on" : ""}`}>
                <div className={`slider ${props.round ? "slider-round": ""}`} onClick={btnclicked}>
                </div>
            </div>
        </Fragment>
        );
}
 
export default Toggle;
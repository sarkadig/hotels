import React, {useState, useEffect} from 'react'
import Subscription from './Subscription';

function Hotel({name, details}) {

    const [show, setShow] = useState(false);
    const [formShow, setFormShow] = useState(false);

    return (
        <div>
            <p>{name}</p>
            {show && <p>{details}</p>}
            {show ? <button onClick={() => setShow(false)}>Show Less</button> : <button onClick={() => setShow(true)}>Show More</button>}
            {show && <button onClick={() => setFormShow(true)}>Request more info</button>}
            {formShow && <Subscription close={() => setFormShow(false)} />}
        </div>
    )
}

export default Hotel;


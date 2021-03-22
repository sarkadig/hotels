import React, {useState, useEffect} from 'react';
import LoadingMask from './LoadingMask';

function Subscription({close}) {

    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState("");
    const [response, setResponse] = useState(null);

    const submitForm = () => {
        setLoading(true);
        fetch("api/hotels/subscribe", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: value})
        })
            .then((res) => setResponse(true))
            .catch((err) => setResponse(false))
            .finally(() => setTimeout(close, 5000))
    };

    return (
        <div>
            {loading && <LoadingMask />}
            <h2>Request more info about</h2>
            <input type="email" value={value} onChange={e => setValue(e.target.value)}/>
            <button disabled={!(value.includes("@") && value.includes("."))} onClick={submitForm}></button>
            {response && <p>Subscribed</p>}
        </div>
    )
}

export default Subscription

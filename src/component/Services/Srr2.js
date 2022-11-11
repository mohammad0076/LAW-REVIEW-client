import React, { useEffect, useState } from 'react';
import Srr3 from './Srr3';

const Srr2 = ({ revie }) => {

    const [orders, setOrder] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/all?comment=${revie.comment}`).then(res => res.json()).then(data => setOrder(data))
    }, [revie.comment])
    return (
        <div>
            {
                orders.map(mail => <Srr3 mail={mail}></Srr3>)
            }

        </div>
    );
};

export default Srr2;
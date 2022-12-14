import React, { useEffect, useState } from 'react';
import Srr2 from './Srr2';

const Srr = () => {

    const [review, setReview] = useState([])
    useEffect(() => {
        fetch(`https://server-law.vercel.app/all`).then(res => res.json()).then(data => setReview(data))
    })

    return (
        <div>
            {
                review.map(revie => <Srr2 revie={revie}></Srr2>)
            }

        </div>
    );
};

export default Srr;
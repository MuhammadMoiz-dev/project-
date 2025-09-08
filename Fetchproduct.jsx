import React from 'react'
import React, { useEffect, useState } from 'react';


function Fetchproduct() {
    const [data, setFetchData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapiserver.reactbd.org/api/products')
            .then(res => res.json())
            .then(getdata => setFetchData(getdata.data))
            .catch(err => console.error('Fetch error:', err));
    }, []); // <-- empty array here!
    console.log(data);
    return (
        <>
            {data.map(product => (
                <div key={product.id}>
                    {console.log(product)}

                    <img src={product.img} alt="" />
                </div>
            ))}
        </>
    )
}

export default Fetchproduct

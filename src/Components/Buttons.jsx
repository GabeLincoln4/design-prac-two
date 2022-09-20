import React from 'react';

function Buttons(){
    return (
        <div>
            <div className="grid grid-rows-3 grid-cols-3 h-screen">
                <div className="bg-red-500 col-start-3 row-start-1 text-white">01</div>
                <div className="bg-green-500 col-start-3 row-start-2 text-white">02</div>
                <div className="bg-blue-500 col-start-3 row-start-3 text-white">03</div>
            </div>
        </div>
    )
};

export default Buttons;
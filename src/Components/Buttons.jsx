import React from 'react';

function EditButtons(numberOfColumns, buttonStartPoint){
    return (
        <div className={"grid grid-rows-3 grid-cols-" + (numberOfColumns) + " h-screen"}>
            <div className={"bg-red-500 col-start-" + (buttonStartPoint) + " row-start-1 text-white"}>01</div>
            <div className={"bg-green-500 col-start-" + (buttonStartPoint) + " row-start-2 text-white"}>02</div>
            <div className={"bg-blue-500 col-start-" + (buttonStartPoint) + " row-start-3 text-white"}>03</div>
        </div>
    )
}

function Buttons(){

    const numOfCols = 4;
    const startPoint = 4;

    return (
        <div>
            {EditButtons(numOfCols, startPoint)}
        </div>
    );
};

export default Buttons;
import React from 'react';

function EditButtons(props){
    return (
        <div className={"grid grid-rows-3" + (props.numOfCols) + " h-screen"}>
            <div className={"bg-red-500 "+ (props.startPoint) + " row-start-1 text-white"}>01</div>
            <div className={"bg-green-500 " + (props.startPoint) + " row-start-2 text-white"}>02</div>
            <div className={"bg-blue-500 " + (props.startPoint) + " row-start-3 text-white"}>03</div>
        </div>
    );
}

function Buttons(){

    const numOfCols = "grid-cols-5";
    const startPoint = "col-start-5";

    return (
        <div>
            <EditButtons numOfCols={numOfCols} startPoint={startPoint} />
        </div>
    );
};

export default Buttons;
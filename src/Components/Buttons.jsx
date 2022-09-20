import React from 'react';
import Heading from './Heading.jsx';
import TextSection from './TextSection.jsx';

function EditButtons(props){
    return (
        <div className={"grid grid-rows-3 grid-cols-4 " + (props.numOfCols) + " h-screen"}>
            <div className={"bg-yellow-300 " + (props.topBarLength) + " row-start-1 row-span-3 col-span-3"}>
                <Heading /> 
                <div className="grid grid-cols-1 place-content-center h-5/6">
                    <TextSection />
                </div>
                
            </div>
            <div className={"bg-red-500 " + (props.startPoint) + " row-start-1 text-white"}>01</div>
            <div className={"bg-green-500 " + (props.startPoint) + " row-start-2 text-white"}>02</div>
            <div className={"bg-blue-500 " + (props.startPoint) + " row-start-3 text-white"}>03</div>
        </div>
    );
}

function Buttons(){

    const numOfCols = "grid-cols-4";
    const startPoint = "col-start-4";
    const topBarLength = "col-start-1" + " col-span-3";

    return (
        <div>
            <EditButtons 
                numOfCols={numOfCols} 
                startPoint={startPoint}
                topBarLength={topBarLength} 
            />
        </div>
    );
};

export default Buttons;
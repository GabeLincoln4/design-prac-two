import React from "react";

function Grid(props){
    return (
        <div className="grid grid-cols-1 place-content-center h-5/6 px-10">
            {props.comp}
        </div>
    )
}

export default Grid;
import React from "react";

function Name(props)
{
    return(
        <div className="box"><h3>{props.sr}   </h3>
        <div><h5>{props.quote}</h5>

        </div>
       <div className="author">{"~" + props.name}</div>
        </div>
    )
}

export default Name;
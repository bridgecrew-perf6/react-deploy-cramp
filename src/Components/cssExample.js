import React from "react";
import './cssExample.css'
function CssExample(){
    const cssStyle ={
        color:'green',
        fontSize:'30px'
    }
    return(
        <div>
            <h1 id='external'>External example</h1>
            <h1 style={cssStyle}>Internal Example</h1>
            <h1 style={{'color':'yellow'}}>Inline Example</h1>
        </div>
    )
}
export default CssExample
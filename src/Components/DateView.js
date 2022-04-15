import React from "react";
function DateView(){
    var currentDate = new Date();
    return(
        <div>
            <h4>{currentDate.toLocaleString('en-us',{weekday:'long'})}</h4>
            <p>{`${currentDate.getDate()}-${currentDate.toLocaleString('en-us',{month:'short'})}-${currentDate.getFullYear()}`}</p>
        </div>
    )
}
export default DateView
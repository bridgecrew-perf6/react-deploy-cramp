import React,{useState} from "react";
import TitleView from "./titleView";
function InputBox(){
    const [inputValue,setInputValue] = useState('Title');
    function handler(e){
        console.log(e.target.value);
        setInputValue(e.target.value)
    }
    return(
        <>  
            <TitleView value={inputValue}/>
            <input value={inputValue} onChange={(e)=>handler(e)}></input>
        </>
    )
}
export default InputBox
import React from 'react'
function QuizOptions({ options,name,handler }) {
    const optionStyle = {
        display:'flex',
        alignItems:'baseline'
    }
    return (
        options.map((el,i) => {
            return (
                <div style={optionStyle} key={el}>
                    <input type='radio'  name={name} onClick={()=>handler(i)}/>
                    <p>{el}</p>
                </div>
            )

        })
    )
}
export default QuizOptions
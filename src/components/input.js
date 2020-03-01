import React from "react";


const InputComponent = ({ list, select }) => {
    const [text, setText] = React.useState('')

    function filteredNames() {
        return list.filter(name => name.toLowerCase().includes(text.toLowerCase()))
    }
    return (
        <div> 
            <input type="text" onChange={(e) => setText(e.target.value)} value={text}/> 
            {text && <ul className="dropdown">
                {filteredNames().map((x, i) => <li key={i} onClick={()=>select(x)}>{x}</li>)}
            </ul>}
        </div>
    )
}

export default InputComponent;
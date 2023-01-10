import React, { useState,useRef } from 'react';

const DomFefSample = () => {
    const [name,setName] = useState("");
    const inputRef = useRef();
    const onReset = ()=>{
        setName("")
        // document.querySelector('#inputname').focus();
        inputRef.current.focus();  //Reset 을 누르면 inputRef.current의위치로 포커스를 옮겨줌
    }
    return (
        <div>
            <input name="name" value={name} id="inputname" ref={inputRef}
            onChange={(e)=>setName(e.target.value)}/>
            <button onClick={onReset}>초기화 클릭</button>
        </div>
    );
};

export default DomFefSample;
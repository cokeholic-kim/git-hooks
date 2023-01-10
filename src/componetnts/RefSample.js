import React, { useState,useRef } from "react";
function RefSample(){
    //state생성
    const [stateNum,setStateNum] = useState(0);
    // ref생성
    const refNum = useRef(0) //{current: 0}
    //변수 생성
    let varNum=0;
    //변수수정함수 구현
    const addLet = ()=>{
        varNum = varNum+1
        console.log(varNum)
    }  
    //ref수정함수구현
    const addRef = () =>{
        refNum.current = refNum.current+1
    }
    //setState호출 함수 구현
    const addState = () =>{
        setStateNum(stateNum+1);
    }
    return(
        <div>
            <p>State :{stateNum}</p>
            <p>Ref :{refNum.current}</p>
            <p>let :{varNum}</p>
            <button onClick={addState}>State+1</button>
            <button onClick={addRef}>Ref+1</button>
            <button onClick={addLet}>let+1</button>
        </div>
    )
        //state가 바뀔때마다 리렌더링됨 렌더링될때 ref값은 유지 변수값은초기화됨
}
export default RefSample;
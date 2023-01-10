import React, { useState,useRef } from "react";
import DomFefSample from "./componetnts/DomFefSample";
import EffectHookSample from "./componetnts/EffectHookSample";
import RefSample from "./componetnts/RefSample";
import Timer from "./componetnts/Timer"
function App2(){
    const [showtimer,setshowTimer] = useState(false);
    return(
        <div>
            {showtimer && <Timer/>}
            <button onClick={()=>setshowTimer(!showtimer)}>타이머보이기/안보이기</button> 
        </div>
    )
        //state가 바뀔때마다 리렌더링됨 렌더링될때 ref값은 유지 변수값은초기화됨
}
export default App2;
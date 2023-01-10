import React,{useState,useEffect} from 'react';

const EffectHookSample = () => {
    const[number,setNumber] = useState(0);
    const[text,setText] = useState("") 
    const onClick = () => {
        setNumber(number+1)
    }
    // 렌더링될때마다 매번 실행
    useEffect(()=>{
        console.log('렌더링 되었습니다🥞')
        //주로 렌더링될때 서버에서 값을 받아오는 용도로 사용
    })
    // 처음 마운트 될때만 실행
    useEffect(()=>{
        console.log('🥐🥐🥐마운트되었습니다')
    },[])
    //값이 바뀔때만 실행
    useEffect(()=>{
        console.log('🍒🍒🍒number가 변경 됨')
    },[number])


    return (
        <div>
            <span>{number}</span>
            <button onClick={onClick}>update</button>
            <input value={text} onChange={(e)=>setText(e.target.value)}/>        
        </div>
    );
};

export default EffectHookSample;

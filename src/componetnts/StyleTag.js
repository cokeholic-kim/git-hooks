import React from 'react';

function StyleTag(){
    const style={
      fontSize :"24px",
      textDecoration:'underline',
      color:'blue'
    }
      
    return(
        <div>
            <h2 style={{color:"turquoise",backgroundColor:"black"}}>화요일</h2>
            <p style={style}>안녕하세요 오늘은 리액트 스타일을 배워보겟습니다.</p>
        </div>
    )
}

export default StyleTag
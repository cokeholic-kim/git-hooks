import logo from './logo.svg';
import './App.css';
import './Style.css'
import Header from './componetnts/Header';
import Main from './componetnts/Main';
import Footer from './componetnts/Footer';
import {useState} from 'react';


function App() {
  const [mode,setMode] = useState("home");
  let content = null;
  if(mode == "home"){
    content = <div>환영합니다.</div>
  }else if(mode == "page"){
    content = <div>페이지입니다.</div>
  }
  const lists = [
    {id:1,title:'menu1'},
    {id:2,title:'menu1'},
    {id:3,title:'menu1'},
    {id:4,title:'menu1'},
  ] //App의 배열을 Nav컴포넌트에 전달하는방법
  return (
    <div className="App">
      {content}
      <button onClick={()=>{
        // mode=="home"? setMode("page"):setMode("home")
        
        }}>모드변경</button>
      <Header lists={lists}/>
      <Main/>
      <Footer />
    </div>
  );
}

export default App;

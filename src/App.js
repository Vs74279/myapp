
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
       setAlert({
        message:message,
        type:type
       })
       setTimeout(() =>{
        setAlert(null);
       },1500);
  }
  return (
    <>
     <Navbar title="Vikashtech"/>
     <Alert Alert={alert}/>
     <div className='container'>
      <TextForm showAlert={showAlert} heading='Enter the text to analyze below'/>
      
     <About/>
      </div>
    </>
      
    
   
  );
}

export default App;

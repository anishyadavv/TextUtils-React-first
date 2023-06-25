
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About'
import React, {useState} from 'react';
import Alert from './components/Alert';

import { 
  BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [theme, setTheme] = useState('dark');
  const [style,setStyle] = useState({
    color:'black',
    backgroundColor:'white'
})
  const [alert,setAlert] = useState(null);

  const showAlert = (type, message)=>{
    setAlert({
      type:type,
      message: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleTheme =()=>{
    if(mode==='light')
    {
      setMode('dark');
      setTheme('light');
      document.body.style.backgroundColor='#36454F';
      document.body.style.color = 'white';
      setStyle({
        color:'white',
        backgroundColor:'#36454F'
      })
      showAlert("success","Theme is changed to Dark")
    }
    else if(mode==='dark'){
      setMode('light');
      setTheme('dark');
      document.body.style.backgroundColor='white';
      document.body.style.color = 'black';
      setStyle({
        color:'black',
        backgroundColor:'white'
      })
      showAlert("success","Theme is changed to Light")
    }
  }

  const themeChange = (color)=>{
    switch (color) {
      case 'blue':setStyle({
        color:'black',
        backgroundColor:'#CAF8FF'
      })
      document.body.style.backgroundColor = '#CAF8FF';
      document.body.style.color = 'black';
      showAlert("success","Theme is changed to blue")
        
        break;
      case 'yellow':
        setStyle({
          color:'black',
          backgroundColor:'#FFF9C4'
        })
        document.body.style.backgroundColor = '#FFF9C4';
        document.body.style.color = 'black';
        showAlert("success","Theme is changed to yellow")
        
      break;
      case 'pink':
        setStyle({
          color:'black',
          backgroundColor:'#FFAEC0'
        })
        document.body.style.backgroundColor = '#FFAEC0';
        document.body.style.color = 'black';
        showAlert("success","Theme is changed to Pink")
        
        break;
      case 'violet':
        setStyle({
          color:'black',
          backgroundColor:'#C5C5FC'
        })
        document.body.style.backgroundColor = '#C5C5FC';
        document.body.style.color = 'black';
        showAlert("success","Theme is changed to violet")
        
      break;
    
      default:
        break;
    }

  }
  return (
    <>
    <Router>
        <Navbar title="TextUtils" mode={mode} toggle={toggleTheme} theme={theme} themeChange={themeChange}/>
        <Alert alert={alert} showAlert={showAlert} />
        <Routes>
          <Route path="/about" element={
            <div className='container '>
              <About/>
            </div>
          }/>
          <Route path="/" element={<Textform heading="Enter the text to analyze below" style={style} toggle = {toggleTheme} showAlert={showAlert}/>}/>
        </Routes>
      
    </Router>
       
        
        
        
    </>
  );
}

export default App;

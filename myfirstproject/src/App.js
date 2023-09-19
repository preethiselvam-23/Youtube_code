import React from 'react';
import './Components/App.css';
import Header from './Components/Screen/Header';
import Sidebar from './Components/Screen/Sidebar';
import RecommendedVideo from './Components/Screen/RecommendedVideo';


function App() {
  return (
    <div className="App">
        <Header/>
        
        <div className='app_page'>
        <Sidebar/>
        <RecommendedVideo/>
        </div>
     </div>
  );
}

export default App;

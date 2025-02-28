import { useEffect, useState } from 'react';
import TsfNavBar from './components/TsfNavBar';
import Notes2 from './components/Notes2';


function App() {
  const [dark, setDark] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  // dark mode function
  const toggleDarkMode = () => {
    setDark(prevDark => !prevDark);
    document.body.style.backgroundColor = dark ? "white" : "black";
    document.body.style.color = dark ? "black" : "green";
  };

  return (
    <div className={dark ? "dark-mode" : "light-mode"}>
      <TsfNavBar dark={dark} toggleDarkMode={toggleDarkMode} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      
      <Notes2 searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
import './App.css';
import Taskbar from './components/Taskbar';
import "./fonts/ms_sans_serif.woff"
import "./fonts/ms_sans_serif.woff2"

import { MainDesktop } from './components/MainDesktop';


function App() {
  return (
    <div className="App">
      <MainDesktop/>
      <Taskbar/>
    </div>
  );
}

export default App;

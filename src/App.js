import './App.css';
import Taskbar from './components/Taskbar';
import "./fonts/ms_sans_serif.woff"
import "./fonts/ms_sans_serif.woff2"

import { MainDesktop } from './components/MainDesktop';
import { TaskManager } from './components/TaskManager';
import { PerformanceChart } from './components/PerformanceChart';


function App() {
  
  return (
    <div className="App">
      <MainDesktop/>
        {/* <TaskManager/> */}
      <Taskbar/>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import { AppFrame } from './components/AppFrame';
import { Desktop } from './components/Desktop';
import { DesktopApps } from './components/DesktopApps';
import PopoverView from "./components/PopoverView";
// import {Dragging} from './components/Dragging';
import { Notepad } from './components/Notepad';
// import { Console } from './components/Console';
import Taskbar from './components/Taskbar';
import "./fonts/ms_sans_serif.woff"
import "./fonts/ms_sans_serif.woff2"
// import ClockApp from './components/ClockApp';
// import TaskbarApps from "./components/TaskbarApps"
// import CalenderApp from './components/CalenderApp';
// import DateAndTime from './components/DateAndTime';
// import StartMenu from './components/StartMenu';
import { MainDesktop } from './components/MainDesktop';
import { ReadmeNote } from './components/ReadmeNote';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello world</h1> */}
      {/* <CalenderApp/> */}
      {/* <DateAndTime/> */}
      {/* <StartMenu/> */}
      {/* <AppFrame/> */}
      {/* <Notepad/> */}
      {/* <Dragging/> */}
      {/* </Dragging> */}
      
      <MainDesktop>
      </MainDesktop>
      <Taskbar/>
    </div>
  );
}

export default App;

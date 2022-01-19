import Room from './components/Room';
import Sidebar from './components/Sidebar';
import './App.scss'

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Room/>
    </div>
  );
}

export default App;
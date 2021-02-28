import './main.css';
import ActionList from "./components/ActionList";
import DragHereList from './components/DragHereList';

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="col col-2">
          <ActionList />
        </div>
        <div className="col col-6">
          <DragHereList />
        </div>
      </div>
    </div>
  );
}

export default App;

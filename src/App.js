import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Router from './components/Router/Router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar/>
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default App;

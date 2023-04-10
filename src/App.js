import './App.css';
import Routing from './Routes/Routing';
import Store  from './Redux/Store/Store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={Store}>
      <Routing/>
      </Provider>
   
  );
}

export default App;

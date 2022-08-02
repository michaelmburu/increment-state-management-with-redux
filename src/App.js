import { Provider } from 'react-redux';
import './App.css';
import { CounterButton } from './CounterButton';
import { store } from './Store/store';

// Increment Counter Button Using Redux
function App() {
  return (
    <>
      <Provider store={store}>
        <h1>State Management With Redux</h1>
        <CounterButton />
      </Provider>
    </>      
  );
}

export default App;

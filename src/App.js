import logo from './logo.svg';
import './App.css';
import { Provider} from 'react-redux';
import store from './store';
import { addIncome, updateIncome } from './store/actions/income';

store.dispatch(addIncome({ title: 'My salary', value: 55000 } ));
console.log(store.getState());
store.dispatch(updateIncome(0, { title: 'new title' } ));
console.log(store.getState());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;

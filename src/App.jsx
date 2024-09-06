import { Provider, useSelector } from 'react-redux';
import './App.css';
import ScrollToTop from './components/scrollTop/ScrollTop';
import store from './redux/store';
import AppRoutes from './router/AppRoutes';

function App() {
  

  return (
      <Provider store={store}>
        <div className="App">
          <ScrollToTop />
          <AppRoutes />
        </div>
      </Provider>
  );
}

export default App;

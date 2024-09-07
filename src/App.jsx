import { Provider } from 'react-redux';

import store from './redux/store';
import AppRoutes from './router/AppRoutes';
import ScrollToTop from './components/scrollTop/ScrollTop';
import './App.css';

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

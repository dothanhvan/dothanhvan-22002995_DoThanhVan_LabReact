import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import store from './store';
import Home from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
// Xóa import Navbar

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
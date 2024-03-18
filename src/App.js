import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CryptoPrice from './Pages/CryptoPrice/CryptoPrice';
import LoginPage from './Pages/LoginPage/LoginPage';
import Profile from './Pages/Profile/Profile';
import { Provider } from "react-redux";
import { persistore, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/CryptoPrice' element={<CryptoPrice />} />
          <Route path='/LoginPage' element={<LoginPage/>}/>
          <Route path='/Profile' element={<Profile/>}/>
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;

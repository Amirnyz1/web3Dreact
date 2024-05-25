import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CryptoPrice from './Pages/CryptoPrice/CryptoPrice';
import LoginPage from './Pages/LoginPage/LoginPage';
import Profile from './Pages/Profile/Profile';
import { Provider } from "react-redux";
import { persistore, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import FavoriteCoins from './Pages/FavoriteCoins/FavoriteCoins';
import Notes from './Pages/Notes/Notes';

import Wallet from './Pages/Wallet/Wallet';
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
          <Route path='/Notes' element={<Notes/>}/>
          <Route path='/FavoriteCoins' element={<FavoriteCoins/>} />
          <Route path='/wallet' element={<Wallet/>}/>
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;

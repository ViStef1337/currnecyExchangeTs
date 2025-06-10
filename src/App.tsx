import './App.css';
import { Navigation } from './components/Navigation/Navigation.tsx';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home.tsx';
import { Rates } from './pages/Rates.tsx';
import { useEffect } from 'react';
import { fetchBaseCurrency } from './redux/operations.ts';
import { useAppDispatch } from './hooks/hooks.ts';
import type { positionType } from './types/types.ts';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    function success(pos: positionType) {
      dispatch(fetchBaseCurrency(pos.coords));
    }

    function error() {
      // dispatch(setBaseCurrency('USD'));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rates" element={<Rates />} />
      </Routes>
    </>
  );
}

export default App;

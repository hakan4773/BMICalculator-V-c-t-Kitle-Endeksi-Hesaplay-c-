import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BMIhesapla from './components/BMIForm/BMIhesapla';
import Header from './components/Header/Header';
import BMInedir from './components/BMIForm/BMInedir';
import DiyetListesi from './components/BMIForm/Diyetlistesi'
function App() {
  return (
    <Router>

    <div className="App">
    <Header />
      <Routes>
      <Route path="/" element={<BMIhesapla />} />
      <Route path="/BMIhesapla" element={<BMIhesapla />} />
      <Route path="/BMInedir" element={<BMInedir />} />
      <Route path="/DiyetListesi" element={<DiyetListesi />} />

      </Routes>

    </div>
    </Router>

  );
}

export default App;

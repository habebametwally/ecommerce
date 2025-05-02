import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage'; // تأكد من المسار الصحيح
import Test from './Pages/Test'; // تأكد من المسار الصحيح
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
       <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Test />} />
       
     </Routes>

     <Footer/>
    </div>
  );
}

export default App;

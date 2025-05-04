import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage"; // تأكد من المسار الصحيح
import ALlProducts from "./Pages/ALlProducts";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<ALlProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

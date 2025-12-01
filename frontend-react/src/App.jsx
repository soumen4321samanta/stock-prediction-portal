import './assets/css/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import AuthProvider from './AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/register" element={<Register />} />
              <Route path='/login' element={<Login/>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;

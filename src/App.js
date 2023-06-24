import { Routes, Route } from "react-router-dom";

// import component
import GlobalStyle from "./components/GlobalStyles";
import Footer from "./components/Footer";
import Header from "./components/Header";

// import pages
import Login from "./pages/login";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

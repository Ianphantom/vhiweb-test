import { Routes, Route } from "react-router-dom";

// toast component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import component
import GlobalStyle from "./components/GlobalStyles";
import Footer from "./components/Footer";
import Header from "./components/Header";

// import pages
import Login from "./pages/login";
import User from "./pages/user";
import UserDetail from "./pages/userDetail";
import ProtectedRoutes from "./utils/protectedRoutes";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/user' element={<ProtectedRoutes component={User} />} />
        <Route
          path='/user/:id'
          element={<ProtectedRoutes component={UserDetail} />}
        />
        <Route path=':any' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

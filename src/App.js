import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import LoggedInCaregiverIfProfile from "./pages/LoggedInCaregiverIfProfile";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import { File2 } from "./features/counter/File2";
import { Counter } from "./features/counter/Counter";
import ProfileCard from "./pages/profileCard";
import { useEffect } from "react";
// import Mypatients from "./pages/Mypatients";
import Mypatients from "./pages/Mypatients";
import Inbox from "./pages/Inbox";
import MyForm from "./pages/Form";
import Cert from "./pages/Cert"
import Loggedin from "./pages/Loggedin";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;


      case "/slice":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoggedInCaregiverIfProfile />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/h" element={<LoggedInCaregiverIfProfile />} />
      <Route path="/my-form" element={<MyForm   />} />
      <Route path="/card" element={<ProfileCard  />} />
      <Route path="/mypatients" element={<Mypatients  />} />
      <Route path="/inbox" element={<Inbox  />} />
      <Route path="/cert" element={<Cert  />} />
      <Route path="/log" element={<Loggedin  />} />
      
      <Route path="/File2" element={<File2 />} />
    </Routes>
  );
}
export default App;

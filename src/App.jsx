import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/_style.scss"; 





import LoggedInCaregiverIfProfile from "./pages/LoggedInCaregiverIfProfile";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import { File2 } from "./features/counter/File2";
import { Counter } from "./features/counter/Counter";
import Mypatients from "./pages/Mypatients";
import Inbox from "./pages/Inbox";
import MyForm from "./pages/Form";
import Cert from "./pages/Cert"
import LoggedinCaregiver from "./pages/LoggedinGiver";
import LoggedinCareTaker from "./pages/loggedinTaker";
import Banner from "./components/banner";
import Chat from "./pages/Chat";
import Profile from "./pages/profile";
import Mychat from "./pages/chatSass";
import { SharedDataContextProvider } from "./context/context";

import Profilepage from "./pages/profilepage";
import Contract from "./pages/Contract";


function App() {


  return (
    <SharedDataContextProvider>
    <Routes>
      <Route path="/land" element={<LandingPage />} />
      <Route path="/log" element={<LoginPage />} />
      <Route path="/sign" element={<SignUpPage />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/h" element={<LoggedInCaregiverIfProfile />} />
      <Route path="/my-form" element={<MyForm   />} />
      <Route path="/card" element={<Profile  />} />
      <Route path="/mypatients" element={<Mypatients  />} />
      <Route path="/inbox" element={<Inbox  />} />
      <Route path="/cert" element={<Cert  />} />
      <Route path="/logGiver" element={<LoggedinCaregiver  />} />
      <Route path="/logTaker" element={<LoggedinCareTaker  />} />
      <Route path="/banner" element={<Banner  />} />
      <Route path="/chat" element={<Chat  />} />
      <Route path="/mychat" element={<Mychat  />} />
      <Route path="/profilepage" element={<Profilepage  />} />
      <Route path="/contract" element={<Contract  />} />
      
      <Route path="/File2" element={<File2 />} />
    </Routes>
    </SharedDataContextProvider>
  );
}
export default App;


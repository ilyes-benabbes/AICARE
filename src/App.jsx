import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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
import Cert from "./pages/Cert";
import Loggedin from "./pages/logged";
import LoggedinCareTaker from "./pages/loggedinTaker";
import Banner from "./components/banner";
import Chat from "./pages/Chat";
import Profile from "./pages/profile";
import Mychat from "./pages/Messages";
import { SharedDataContextProvider } from "./context/context";

import Profilepage from "./pages/profilepage";
import Contract from "./pages/Contract";
import Sidebar from "./components/Sidebar";
import CalendarPage from "./pages/CalendarPage";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Skills from "./pages/Skills";
import ContractCreationPanel from "./pages/ContractCreationPanel";
import Test from "./pages/HourPicker";

function App() {
  return (
    <LocalizationProvider  dateAdapter={AdapterDayjs} >
    <SharedDataContextProvider>
      <Routes>
        <Route path="/land" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/log" element={<LoginPage />} />
        <Route path="/sign" element={<SignUpPage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/my-form" element={<MyForm />} />
        <Route path="/card" element={<Profile />} />
        <Route path="/mypatients" element={<Mypatients />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/Dashboard" element={<Loggedin />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/Messages" element={<Mychat />} />
        <Route path="/profilepage" element={<Profilepage />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/Calendar" element={<CalendarPage />} />
        <Route path="/Contracts" element={<Contract />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/steps" element={<ContractCreationPanel />} />
        <Route path="/test" element={<Test />} />

        <Route path="/File2" element={<File2 />} />
      </Routes>
    </SharedDataContextProvider>
    </LocalizationProvider>
  );
}
export default App;

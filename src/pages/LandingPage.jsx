// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Whysection from "../components/WHYSECTION";
import Head from "../components/Head";
import Background from "../components/Back";
import Footer from "../components/Footer";
import About from "../components/About";
import Join from "../components/Joinus";
import Contact from "./Contact";
const LandingPage = () => {


/**
 * ! what to fix more ? 
 * ! fix the links and make each button , take you to the next page 
 * ! fix the nuances of the style that's leftp 
 * ! that's it i think for now .
 * ! go directly to the sign up page  
 */

  return (
    <div className="landing col">
      <Navbar  isLogged/>
      <Head > </Head>
      <Background></Background>
      <Whysection></Whysection>
      <About></About>
      <Join></Join>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;

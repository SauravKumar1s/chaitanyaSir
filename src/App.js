import "./App.css";
import NavbarTop from "./navbar/NavbarTop";
import Login from "./Accounts/Login";

import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import FindAPharmacy from "./pages/FindAPharmacy";
import InvestorPresentation from "./pages/InvestorPresentation";
import Management from "./pages/Management";
import Offers from "./pages/Offers";
import Press from "./pages/Press";
import PricingPolicy from "./pages/PricingPolicy";
import ReferEarn from "./pages/ReferEarn";
import ReturnPolicy from "./pages/ReturnPolicy";
import Sitemap from "./pages/Sitemap";
import TermsandConditions from "./pages/TermsandConditions";

import Footer from "./pages/Footer";
import {
  NavLink,
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";
import Home from "./home/Home";
import Profile from "./pages/Profile";
import Register from "./Accounts/Register";
import ProfileEdit from "./Profle/ProfileEdit";
import NavbarTopest from "./navbar/NavbarTopest";
import Navbar1 from "./navbar/Navbar1";



// const COMPONENT_MAP = {
//   Home: Home,
//   Report: Report,
//   About: About,
//   Contact: Contact,
//   Post: Post
// };

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavbarTopest />
          <NavbarTop />
          <Navbar1 />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/careers" element={<Careers />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/findapharmacy" element={<FindAPharmacy />} />
            <Route exact path="/investor" element={<InvestorPresentation />} />
            <Route exact path="/management" element={<Management />} />
            <Route exact path="/offers" element={<Offers />} />
            <Route exact path="/press" element={<Press />} />

            <Route exact path="/profileedit" element={<ProfileEdit />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

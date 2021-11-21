import Navbar from "./components/Navbar/Navbar";
import Feed from "./components/Feed/Feed";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import DetailPage from "./components/Detail_Page/DetailPage";
import Login from "./components/Login_Page/Login";
import Profile from "./components/Profile_Page/Profile";
import Signup from "./components/Signup_Page/Signup";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Registration from "./components/RegistrationForm/Registration";
import ContactPop from "./components/Contact/ContactPop";
import Chat from "./components/Chat/Chat";
function App() {
  return (
    <>
    <Navbar/>
    
      <Routes>
        <Route path="/" element={<Feed />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/detail/:id" element={<DetailPage/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/contact/:id" element={<ContactPop/>}></Route>
        <Route path="/chat" element={<Chat/>}></Route>
      </Routes>
     
    </>
  );
}
export default App;
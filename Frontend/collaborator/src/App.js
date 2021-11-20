import Navbar from "./components/Navbar/Navbar";
import Feed from "./components/Feed/Feed";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import DetailPage from "./components/Detail_Page/DetailPage";
import Login from "./components/Login_Page/Login";
import Profile from "./components/Profile_Page/Profile";
import Signup from "./components/Signup_Page/Signup";

function App() {
  return (
    <div className="App">
     {/* <Navbar/>
     <Feed/> */}
     <DetailPage/>
     <Login/>
     <Profile/>
     <Signup/>
     {/* <SearchFilter/> */}
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar/Navbar";
import Feed from "./components/Feed/Feed";
import SearchFilter from "./components/SearchFilter/SearchFilter";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Feed/>
     {/* <SearchFilter/> */}
    </div>
  );
}

export default App;

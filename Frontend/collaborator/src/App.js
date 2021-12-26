

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Chat from "./components/Chat/Chat";
import { Name } from "./components/Chat/name";
function App() {
  return (
    <>
   
    
      <Routes>
        <Route path="/" element={<Name/>}></Route>
        <Route path="/chat" element={<Chat/>}></Route>
      </Routes>
     
    </>
  );
}
export default App;
import {Routes,Route} from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;

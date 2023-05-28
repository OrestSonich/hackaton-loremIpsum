import {Routes,Route} from "react-router-dom";

import Main from "./pages/main";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Layout from "./components/layoutComponents/layout";
import AuthMain from "./pages/authMain";

function App() {

  return (
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Main/>}/>
              <Route path="/main" element={<AuthMain/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
  );
}

export default App;

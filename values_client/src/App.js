import SignIn from "./views/Signin";
import SignUp from "./views/Signup";
import ResponsiveDrawer from "./views/ResponsiveDrawer";
import { Route, Routes } from "react-router-dom";
import DataGridProDemo from "./views/GeneralAffairs";

function App() {
  const person = () =>{
    console.log("テストです")
  }
  person()
  window.alert("hello")
  return (
    <div>
      <Routes>
        <Route path="/" element={<ResponsiveDrawer />} />
        <Route path="/DataGridProDemo" element={<DataGridProDemo />} />
      </Routes>
    </div>
  );
}

export default App;

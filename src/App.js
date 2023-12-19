import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter,
  Link,
} from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Users from "./pages/users/Users";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { userInputs } from "./formSource";
import { productInputs } from "./formSource";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";


function App() {

const {darkMode} = useContext(DarkModeContext)

  return (
    <div className= {darkMode ? "app dark" : "app" }>
        <BrowserRouter>
    <Routes>
       <Route path="/" >
         <Route index element={<Home  />} />
         <Route path="login" element={<Login />}  />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New inputs = {userInputs} title="Add New User" />} />
        </Route>

        <Route path="products">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} />
          <Route path="new" element={<New inputs = {productInputs} title="Add New Product" />} />
        </Route>

       </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

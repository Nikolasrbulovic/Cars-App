import { Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./layout/NavBar";
import AppCars from "./components/AppCars";
import { API } from "./shared/api";

import Add from "./pages/Add";
import AddCar from "./components/AddCar";

function App() {
  //API.get("/cars").then(({ data }) => console.log(data));

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/cars" element={<AppCars></AppCars>}></Route>

        <Route path="/add" element={<AddCar></AddCar>}></Route>
      </Routes>
    </>
  );
}

export default App;

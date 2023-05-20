import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";
import AdminList from "./components/electricityManagement/List";
import AddElectricityType from "./components/electricityManagement/AddForm";

import ElectricityConnectionForm from "./components/electricityManagement/ElectricityConnectionForm";
import EditElectricityType from "./components/electricityManagement/EditForm";
import SingleCard from "./components/electricityManagement/singleCard.js";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<SingleCard />} />
        <Route path="/adminList" element={<AdminList />} />
        <Route path="/addEleTyp" element={<AddElectricityType />} />
        <Route path="/connectionForm" element={<ElectricityConnectionForm />} />
        <Route path="/editEleTyp/:id" element={<EditElectricityType />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";
import AdminList from "./components/electricityManagement/List";
import AddWaterType from "./components/electricityManagement/AddForm";

import WaterConnectionForm from "./components/electricityManagement/WaterConnectionForm";
import EditWaterType from "./components/electricityManagement/EditForm";
import SingleCard from "./components/electricityManagement/singleCard.js";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<SingleCard />} />
        <Route path="/adminList" element={<AdminList />} />
        <Route path="/addWatTyp" element={<AddWaterType />} />
        <Route path="/connectionForm" element={<WaterConnectionForm />} />
        <Route path="/editWatTyp/:id" element={<EditWaterType />} />
      </Routes>
    </Router>
  );
}

export default App;

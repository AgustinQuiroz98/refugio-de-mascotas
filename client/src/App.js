import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditPet from "./components/EditPet";
import NewPet from "./components/NewPet";
import PetList from "./components/PetList";
import ShowPet from "./components/ShowPet";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PetList />} />
          <Route path="/add" element={<NewPet />} />
          <Route path="/detalles/:_id" element={<ShowPet />} />
          <Route path="/editar/:_id" element={<EditPet />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

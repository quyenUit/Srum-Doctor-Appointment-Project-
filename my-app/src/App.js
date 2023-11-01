import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage'
import SetAppointment from "./components/SetAppointment";
import InformationInput from "./components/InformationInput";
function App() {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SetAppointment" element={<SetAppointment />} />
          <Route path="/InformationInput" element={<InformationInput />} />

          
        </Routes>
      </Router>
    </div>
  );

}
const styles = {
  app: {
    padding: 50,
  },
};

export default App;

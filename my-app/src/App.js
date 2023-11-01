import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage'
function App() {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import Requests from "./pages/Requests";
import Returns from "./pages/Returns";
import Inventory from "./pages/Inventory";
import History from "./pages/History";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-60 w-full p-6 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/history" element={<History />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


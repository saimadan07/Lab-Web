import Login from "./pages/Login";
import ProtectedRoute from "./auth/ProtectedRoute";

<Route path="/login" element={<Login />} />
<Route path="/overview" element={<ProtectedRoute><Overview /></ProtectedRoute>} />
<Route path="/requests" element={<ProtectedRoute><Requests /></ProtectedRoute>} />
// Do the same for other pages...

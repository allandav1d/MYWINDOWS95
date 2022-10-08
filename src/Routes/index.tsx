import { Desktop } from "~/components/Desktop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/:id" element={<>teste2</>} />
      </Routes>
    </Router>
  );
};

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/about" Component={LandingPage} />
      <Route path="/projects" Component={LandingPage} />
    </Routes>
  </BrowserRouter>
);

export default App;

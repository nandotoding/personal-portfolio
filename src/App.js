import Layout from "./pages/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import PersonalInfo from "./pages/PersonalInfo";
import SkillsPage from "./pages/SkillsPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path="/bio" element={<PersonalInfo/>}/>
                  <Route path="/skills" element={<SkillsPage/>}/>
                  <Route path="/experiences" element={<ExperiencesPage/>}/>
                  <Route path="/*" element={<NotFoundPage/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

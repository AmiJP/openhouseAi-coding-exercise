import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CommunityListPage } from "./pages";
import { Providers } from "./providers/Providers";

const App: React.FC = () => {
  return (
    <Providers>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<CommunityListPage />} />
          {/* <Route path="/:communityId" element={<HomeListPage />} /> */}
        </Route>
      </Routes>
    </Providers>
  );
};

export default App;

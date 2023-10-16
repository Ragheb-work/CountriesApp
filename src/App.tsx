import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/common/Layout";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  return (
    <div>
      <div className="bg-[var(--Very-Light-Gray)] dark:bg-[var(--Very-Dark-Blue)] text-[var(--Very-Drark-Blue)] dark:text-[var(--White)] min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <HomePage />
                </Layout>
              }
            />
            <Route
              path="/:id"
              element={
                <Layout>
                  <CountryDetails />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
export default App;

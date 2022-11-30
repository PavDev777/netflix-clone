import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Browse } from "./pages/Browse";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello world</h1>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/browse" element={<Layout />}>
        <Route index element={<Browse />} />
      </Route>
      <Route path="/latest" element={<Layout />}>
        <Route index element={<h2>Latest</h2>} />
      </Route>
    </Routes>
  );
};

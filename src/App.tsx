import { Route, Routes } from "react-router";
import Layout from "./main/sidebar/Layout";
import NotFound from "./main/NotFound";

//TODO - lazy load pages

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path="program-builder" element={<div>Program builder</div>} />
        <Route path="client-settings" element={<div>Client settings</div>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

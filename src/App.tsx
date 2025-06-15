import { Route, Routes, useNavigate } from "react-router";
import Layout from "./main/sidebar/Layout";
import NotFound from "./main/fallbacks/NotFound";
import { routes } from "./common/constants/routes";
import { useEffect } from "react";
import useClientContext from "./main/clientContext/useClientContext";
import ClientSelection from "./features/client/view/clientSelection/ClientSelection";

//TODO - lazy load pages

export default function App() {
  const navigate = useNavigate();

  const { clientId } = useClientContext();

  useEffect(() => {
    if (clientId === undefined) {
      navigate(routes.clientSelection);
    }
  }, [clientId, navigate]);

  return (
    <Routes>
      <Route path={routes.root} element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route
          path={routes.programBuilder}
          element={<div>Program builder</div>}
        />
        <Route
          path={routes.clientSettings}
          element={<div>Client settings</div>}
        />
      </Route>
      <Route path={routes.clientSelection} element={<ClientSelection />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

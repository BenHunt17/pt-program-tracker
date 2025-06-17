import { Route, Routes, useNavigate } from "react-router";
import { routes } from "./common/constants/routes";
import { lazy, Suspense, useEffect } from "react";
import useClientContext from "./main/clientContext/useClientContext";

const Layout = lazy(() => import("./main/Layout"));
const SplashScreen = lazy(() => import("./main/fallbacks/SplashScreen"));
const NotFound = lazy(() => import("./main/fallbacks/NotFound"));

const ClientPortal = lazy(() => import("./features/client/view/ClientPortal"));
const RegisterClient = lazy(
  () => import("./features/client/view/RegisterClient")
);

export default function App() {
  const navigate = useNavigate();

  const { clientId } = useClientContext();

  useEffect(() => {
    if (clientId === undefined) {
      navigate(routes.clientPortal);
    }
  }, [clientId, navigate]);

  if (clientId === undefined) {
    return <SplashScreen />;
  }

  return (
    <Suspense fallback={<SplashScreen />}>
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
        <Route path={routes.clientPortal} element={<ClientPortal />} />
        <Route path={routes.registerClient} element={<RegisterClient />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

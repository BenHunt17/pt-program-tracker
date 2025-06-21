import { Route, Routes, useNavigate } from "react-router";
import { routes } from "./common/constants/routes";
import { lazy, Suspense, useEffect } from "react";
import useClientContext from "./main/clientContext/useClientContext";

const Layout = lazy(() => import("./main/Layout"));
const SplashScreen = lazy(() => import("./main/fallbacks/SplashScreen"));
const NotFound = lazy(() => import("./main/fallbacks/NotFound"));

const ClientPortal = lazy(
  () => import("./features/client/presentation/ClientPortal")
);
const ClientSettings = lazy(
  () => import("./features/client/presentation/ClientSettings")
);

export default function App() {
  const navigate = useNavigate();

  const { clientId, loading } = useClientContext();

  useEffect(() => {
    if (clientId === undefined && !loading) {
      navigate(routes.clientPortal);
    }
  }, [clientId, loading, navigate]);

  if (loading) {
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
          <Route path={routes.clientSettings} element={<ClientSettings />} />
        </Route>
        <Route path={routes.clientPortal} element={<ClientPortal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

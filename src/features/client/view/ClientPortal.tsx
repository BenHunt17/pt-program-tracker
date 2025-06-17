import { useQuery } from "@tanstack/react-query";
import useClientContext from "../../../main/clientContext/useClientContext";
import { clientService } from "../data/clientService";
import { localStorageKeys } from "../../../common/constants/localStorageKeys";
import { Link, useNavigate } from "react-router";
import { routes } from "../../../common/constants/routes";
import PrimaryButton from "../../../common/components/PrimaryButton";
import FilterSelect from "../../../common/components/FilterSelect";

export default function ClientSelection() {
  const { clientId, setClientId } = useClientContext();

  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["clients"],
    queryFn: clientService.findAllClients,
  });

  const clients = data ?? [];

  const handleChange = (clientId: number) => {
    localStorage.setItem(
      localStorageKeys.previouslySelectedClientId,
      clientId.toString()
    );

    setClientId(clientId);

    navigate(routes.root);
  };

  const selectedClient = clients.find((x) => x.id === clientId);

  return (
    <div className="h-screen bg-background flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col items-center">
        <h3 className="text-3xl text-on-background font-bold">
          Client Selection
        </h3>
        <p className="text-on-background">
          Use the selector below to select a client or register a new client
        </p>
      </div>
      <FilterSelect
        value={selectedClient}
        onSelect={(client) => handleChange(client.id)}
        options={clients}
        labelFn={(option) => `${option.firstName} ${option.lastName}`}
      />
      <Link to={routes.registerClient}>
        <PrimaryButton>Register new client</PrimaryButton>
      </Link>
    </div>
  );
}

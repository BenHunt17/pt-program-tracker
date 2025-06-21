import useClientContext from "../../../main/clientContext/useClientContext";
import { useNavigate } from "react-router";
import { routes } from "../../../common/constants/routes";
import PrimaryButton from "../../../common/components/PrimaryButton";
import FilterSelect from "../../../common/components/FilterSelect";
import useClientsQuery from "../data/queries/useClientsQuery";
import { useState } from "react";
import RegisterClient from "./RegisterClient";

export default function ClientSelection() {
  const { client, setClientId } = useClientContext();
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const navigate = useNavigate();

  const { clients } = useClientsQuery();

  const handleChange = (clientId: number) => {
    setClientId(clientId);

    navigate(routes.root);
  };

  const selectedClient = clients?.find((x) => x.id === client?.id);

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
        options={clients ?? []}
        labelFn={(option) => option.fullName}
      />
      <PrimaryButton onClick={() => setShowRegistrationForm(true)}>
        Register new client
      </PrimaryButton>
      {showRegistrationForm && <RegisterClient />}
    </div>
  );
}

import useClientContext from "../../../main/clientContext/useClientContext";
import ClientForm from "./form/ClientForm";
import useUpdateClientMutation from "../data/mutations/useUpdateClientMutation";
import SecondaryButton from "../../../common/components/SecondaryButton";
import useDeleteClientMutation from "../data/mutations/useDeleteClientMutation";
import { useNavigate } from "react-router";
import { routes } from "../../../common/constants/routes";

export default function ClientSettings() {
  const { client, setClientId } = useClientContext();

  const navigate = useNavigate();

  const { updateClient, loading: updateClientLoading } =
    useUpdateClientMutation();
  const { deleteClient } = useDeleteClientMutation(() => {
    setClientId(undefined);
    navigate(routes.clientPortal);
  });

  return (
    <div className="w-fit border-primary border-2 p-8 rounded-2xl">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold">{client?.fullName}</h3>
        {/* TODO - modal */}
        <SecondaryButton onClick={deleteClient}>Delete client</SecondaryButton>
      </div>
      <ClientForm
        onSubmit={(data) => updateClient(data)}
        submitButtonText="Update"
        submitLoading={updateClientLoading}
        defaultClientValues={client}
      />
    </div>
  );
}

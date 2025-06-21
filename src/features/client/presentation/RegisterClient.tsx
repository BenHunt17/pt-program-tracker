import ClientForm from "./form/ClientForm";
import { routes } from "../../../common/constants/routes";
import useCreateClientMutation from "../data/mutations/useCreateClientMutation";
import useClientContext from "../../../main/clientContext/useClientContext";
import { useNavigate } from "react-router";

export default function RegisterClient() {
  const navigate = useNavigate();
  const { setClientId } = useClientContext();

  const { createClient, loading } = useCreateClientMutation((createdClient) => {
    setClientId(createdClient?.id);
    navigate(routes.root);
  });

  return (
    <div className="max-w-xl flex flex-col gap-8">
      <ClientForm
        onSubmit={(data) => createClient(data)}
        submitButtonText="Register"
        submitLoading={loading}
      />
    </div>
  );
}

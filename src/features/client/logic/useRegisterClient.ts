import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { clientService } from "../data/clientService";
import { useNavigate } from "react-router";
import { routes } from "../../../common/constants/routes";
import useClientContext from "../../../main/clientContext/useClientContext";
import { clientInputSchema, type ClientInput } from "./clientInputSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useRegisterClient() {
  const navigate = useNavigate();
  const { setClientId } = useClientContext();

  const { mutate, status } = useMutation({
    mutationFn: (input: ClientInput) => clientService.createClient(input),
    onSuccess: (result) => {
      setClientId(result?.id);
      navigate(routes.root);
    },
  });

  const { control, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: zodResolver(clientInputSchema),
  });

  const handleSubmitForm = handleSubmit((data: ClientInput) => mutate(data));

  const canRegister = formState.isDirty && formState.isValid;

  return {
    handleSubmitForm,
    control,
    canRegister,
    loading: status === "pending",
  };
}

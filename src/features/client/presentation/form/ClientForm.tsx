import { Controller } from "react-hook-form";
import TextInput from "../../../../common/components/form/TextInput";
import DateInput from "../../../../common/components/form/DateInput";
import useClientForm from "./useClientForm";
import PrimaryButton from "../../../../common/components/PrimaryButton";
import type { ClientInput } from "../../data/types/clientInputSchema";
import type { Client } from "../../data/types/clientSchema";

interface ClientFormProps {
  onSubmit: (data: ClientInput) => void;
  submitButtonText: string;
  submitLoading: boolean;
  defaultClientValues?: Client;
}

export default function ClientForm({
  onSubmit,
  submitButtonText,
  submitLoading,
  defaultClientValues,
}: ClientFormProps) {
  const { control, handleSubmit, canRegister } =
    useClientForm(defaultClientValues);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        <Controller
          control={control}
          name="firstName"
          render={({ field, fieldState }) => (
            <TextInput
              value={field.value}
              setValue={field.onChange}
              label="First name"
              isRequired
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field, fieldState }) => (
            <TextInput
              value={field.value}
              setValue={field.onChange}
              label="Last name"
              isRequired
              error={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className="w-full">
        <Controller
          control={control}
          name="dateOfBirth"
          render={({ field, fieldState }) => (
            <DateInput
              value={field.value}
              setValue={field.onChange}
              label="Date of birth"
              isRequired
              error={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className="w-full flex gap-4">
        <Controller
          control={control}
          name="height"
          render={({ field, fieldState }) => (
            <TextInput
              value={field.value?.toString()}
              setValue={field.onChange}
              label="Height"
              isRequired
              numberInput
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="weight"
          render={({ field, fieldState }) => (
            <TextInput
              value={field.value?.toString()}
              setValue={field.onChange}
              label="Weight"
              isRequired
              numberInput
              error={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className="w-full flex gap-4">
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextInput
              value={field.value ?? undefined}
              setValue={field.onChange}
              label="Email address"
            />
          )}
        />
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <TextInput
              value={field.value ?? undefined}
              setValue={field.onChange}
              label="Phone number"
            />
          )}
        />
      </div>
      <Controller
        control={control}
        name="fitnessGoal"
        render={({ field }) => (
          <TextInput
            value={field.value ?? undefined}
            setValue={field.onChange}
            label="Fitness goal"
            multiline
          />
        )}
      />
      <Controller
        control={control}
        name="additionalNotes"
        render={({ field }) => (
          <TextInput
            value={field.value ?? undefined}
            setValue={field.onChange}
            label="Additional notes"
            multiline
          />
        )}
      />
      <div>
        <PrimaryButton
          onClick={handleSubmit(onSubmit)}
          disabled={!canRegister || submitLoading}
        >
          {submitButtonText}
        </PrimaryButton>
      </div>
    </div>
  );
}

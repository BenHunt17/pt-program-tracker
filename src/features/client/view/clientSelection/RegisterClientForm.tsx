import { Controller } from "react-hook-form";
import DateInput from "../../../../common/components/form/DateInput";
import TextInput from "../../../../common/components/form/TextInput";
import useRegisterClient from "../../logic/useRegisterClient";
import PrimaryButton from "../../../../common/components/PrimaryButton";

export default function RegisterClientForm() {
  const { control, handleSubmitForm, canRegister } = useRegisterClient();

  return (
    <div className="flex flex-col gap-8">
      <h4 className="text-2xl text-on-background font-bold">
        Client registration
      </h4>
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
      <div className="flex gap-4">
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
      <div className="flex gap-4">
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
        <PrimaryButton onClick={handleSubmitForm} disabled={!canRegister}>
          Register
        </PrimaryButton>
      </div>
    </div>
  );
}

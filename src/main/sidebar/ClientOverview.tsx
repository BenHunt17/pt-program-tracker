import PrimaryButton from "../../common/components/PrimaryButton";
import useClientContext from "../clientContext/useClientContext";
import { Link } from "react-router";
import { routes } from "../../common/constants/routes";

export default function ClientOverview() {
  const { client } = useClientContext();

  return (
    <div className="flex justify-between py-8 px-4 gap-16 border-y-2 border-secondary">
      <div className="flex flex-col gap-2">
        <h4 className="text-3xl text-on-primary font-bold">
          {client
            ? `${client.firstName} ${client.lastName}` //TODO - backend data contract should return full name?
            : "No client name found"}
        </h4>
        <div>
          <p className="text-on-primary/80">
            {client?.email ?? "No email set"}
          </p>
          <p className="text-on-primary/80">
            {client?.phoneNumber ?? "No phone number set"}
          </p>
        </div>
      </div>
      <Link to={routes.clientPortal}>
        <PrimaryButton>Switch client</PrimaryButton>
      </Link>
    </div>
  );
}

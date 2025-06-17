import { useNavigate } from "react-router";
import PrimaryButton from "../../common/components/PrimaryButton"; //TODO - absolute paths?

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-background flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col items-center">
        <h1 className="text-9xl text-on-background font-bold">404</h1>
        <h3 className="text-3xl text-on-background font-bold">
          {"Page not found :("}
        </h3>
      </div>
      <PrimaryButton onClick={() => navigate(-1)}>Go back</PrimaryButton>
    </div>
  );
}

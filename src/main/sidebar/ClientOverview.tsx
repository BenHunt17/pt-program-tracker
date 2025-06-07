import PrimaryButton from "../../common/components/PrimaryButton";

export default function ClientOverview() {
  return (
    <div className="flex justify-between py-8 px-4 gap-16 border-y-2 border-secondary">
      <div className="flex flex-col gap-2">
        <h4 className="text-3xl text-on-primary font-bold">John Smith</h4>
        <div>
          <p className="text-on-primary/80">johnsmith@gmail.com</p>
          <p className="text-on-primary/80">07954324777</p>
        </div>
      </div>
      <PrimaryButton onClick={() => {}}>Switch client</PrimaryButton>
    </div>
  );
}

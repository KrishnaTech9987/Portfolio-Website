import Button from "@/app/component/common/Button";

export default function OverlappingCard() {
  return (
    <div className="container mx-auto">
      <div className="relative z-50">
        <div className="-mb-[200px] w-full bg-[#1E2008] text-white rounded-[35px] p-10 h-[400px] flex-center-between-col">
          <h2 className="text-[64px] text-center font-bold font-outfit leading-[65px]">
            Become part of the <br /> design revolution
          </h2>
          <p className="text-center">
            Jump on a membership and start <br /> requesting designs right away!
          </p>
          {/* <Button label="See Pricing" /> */}
          <button className="rounded-[8px] bg-[#B9FD50] text-[#111204] py-5 px-10 font-outfit font-medium text-base">
            See Pricing
          </button>
        </div>
      </div>
    </div>
  );
}

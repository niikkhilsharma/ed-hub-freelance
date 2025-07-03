type GrayBtnProps = {
  title: string;
};

const GrayBtn = ({ title }: GrayBtnProps) => {
  return (
    <div className="rounded-[42px] text-xl font-semibold border border-[#E5E7EB] text-[#6B7280] p-4 cursor-pointer inline-block">
      {title}
    </div>
  );
};

export default GrayBtn;

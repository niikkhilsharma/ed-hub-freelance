type BlueBtnProps = {
  title: string;
};

const BlueBtn = ({ title }: BlueBtnProps) => {
  return (
    <div className="rounded-[42px] text-xl font-semibold bg-[#3366ff] text-white px-2 py-4 cursor-pointer inline-block">
      {title}
    </div>
  );
};

export default BlueBtn;

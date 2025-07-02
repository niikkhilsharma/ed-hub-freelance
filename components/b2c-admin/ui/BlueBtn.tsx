type BlueBtnProps = {
  title: string;
};

const BlueBtn = ({ title }: BlueBtnProps) => {
  return (
    <div className="rounded-full bg-blue text-white px-2 py-3.5 cursor-pointer inline-block">
      {title}
    </div>
  );
};

export default BlueBtn;

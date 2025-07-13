"use client"
interface ButtonProps {
  ButtonHeading: string;
  onClick: () => void;
}
const ScrollableButton = ({ ButtonHeading ,onClick}:ButtonProps) => {
  return (
    <div>
      <button 
       onClick={onClick}
      className="   rounded-full z-50 hover:cursor-pointer text-white px-3 py-3  bg-[#ffcc00] fixed bottom-8 sm:right-[10rem]  right-6 md:right-[16rem]">{ButtonHeading}</button>
    </div>
  );
};
export default ScrollableButton;

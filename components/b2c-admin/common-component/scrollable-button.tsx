"use client"
interface ButtonProps {
  ButtonHeading: string;
}
const ScrollableButton = ({ ButtonHeading }:ButtonProps) => {
  return (
    <div>
      <button className="   rounded-full z-50 hover:cursor-pointer text-white px-3 py-3  bg-[#ffcc00] fixed bottom-8  right-6 sm:right-44">{ButtonHeading}</button>
    </div>
  );
};
export default ScrollableButton;

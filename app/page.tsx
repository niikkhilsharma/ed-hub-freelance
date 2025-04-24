import Image from "next/image";
import OverImage1 from "@/public/overImage1.png";
import OverImage2 from "@/public/overImage2.png";

export default function Home() {
  return (
    <main>
      {/* page1 */}
      <div
        className="w-screen flex flex-col md:flex-row gap-6 md:gap-3 px-6 md:px-[9%] items-center justify-between bg-cover bg-center bg-no-repeat"
        style={{
          marginTop: "7.5rem", // relative to root font size
          minHeight: "calc(100vh - 7.5rem)",
          backgroundImage: "url('/Background1.png')",
        }}
      >
        {/* LEFT SECTION */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-center gap-6 py-12 px-4 md:px-12">
          <div className="text-3xl md:text-4xl font-bold leading-snug">
            <span
              className="inline-block text-3xl md:text-5xl"
              role="img"
              aria-label="light bulb"
              style={{ transform: "rotateZ(-15deg)" }}
            >
              💡
            </span>
            <br />
            Knowledge Connection <br />
            Open the Door to <br />
            the Future
          </div>
          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            Giving every student the opportunity to access the best education
            and open the door to the world of knowledge.
            <br />
            <br />
            Start your learning journey today with <strong>EduNique</strong> to
            become an outstanding student in our learning community.
          </p>
          <button className="w-fit bg-[#f9326f] text-white font-medium px-6 py-2 rounded-sm hover:bg-[#c20840] transition-colors duration-300 cursor-pointer">
            Get Started !
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="overflow-hidden w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <Image
            src={OverImage1}
            alt="logo"
            className="w-full max-w-[460px] h-auto object-contain"
            priority
          />
        </div>
      </div>
      {/* page2 */}
      <div className="relative w-screen min-h-screen flex flex-col items-center justify-between overflow-hidden">
        {/* Background Layer */}
        <div
          className="absolute inset-0 bg-center bg-repeat z-0"
          style={{
            backgroundImage: "url('/Background2.png')",
            backgroundSize: "400px", // tiling size
            filter: "grayscale(10%) brightness(0.9)", // subtle dimming
            opacity: 0.3,
          }}
        ></div>

        {/* Foreground Content */}
        <div className="relative z-10 pt-12 flex flex-col gap-6 items-center w-full">
          <h1 className="text-2xl md:text-4xl text-center font-semibold text-black">
            Globally Recognized Interactive Education
          </h1>

          <Image
            src={OverImage2}
            alt="Education Graphic"
            className="w-[95%] md:w-[90%] lg:w-[80%] h-auto object-contain"
            priority
          />
        </div>
      </div>
    </main>
  );
}

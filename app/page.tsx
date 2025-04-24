import Image from "next/image";
import OverImage1 from "@/public/overImage1.png";
import OverImage2 from "@/public/overImage2.png";
import OverImage3 from "@/public/overImage3.png";
import OverImage4 from "@/public/overImage4.png";
import Banner1 from "@/public/Banner1.png";
import Banner2 from "@/public/Banner2.png";
import Banner3 from "@/public/Banner3.png";
import Banner4 from "@/public/Banner4.png";
import Banner5 from "@/public/Banner5.png";
import {
  BookOpen,
  Brain,
  Users,
  Activity,
  UserCheck,
  Layers,
} from "lucide-react";

export default function Home() {
  const featureCards = [
    {
      id: 1,
      bgColor: "bg-[#ffb3c0]",
      icon: <Brain className="h-5 w-5 text-[#f9326f]" />,
      title: "Cognitive Enrichment Activities",
      items: [
        "Brain games (e.g., puzzles, memory challenges)",
        "Logic and reasoning exercises",
        "STEAM-based projects",
      ],
    },
    {
      id: 2,
      bgColor: "bg-[#a8e1ff]",
      icon: <BookOpen className="h-5 w-5 text-[#3366ff]" />,
      title: "Skill-Based Learning Modules",
      items: [
        "Critical thinking & problem-solving",
        "Communication & collaboration",
        "Creativity & innovation",
        "Time management and organization",
      ],
    },
    {
      id: 3,
      bgColor: "bg-[#b3f0c7]",
      icon: <Users className="h-5 w-5 text-[#22c55e]" />,
      title: "Social-Emotional Development",
      items: [
        "Mindfulness & self-regulation practices",
        "Conflict resolution activities",
        "Empathy-building games and discussions",
      ],
    },
    {
      id: 4,
      bgColor: "bg-[#ffd4b3]",
      icon: <Activity className="h-5 w-5 text-[#f97316]" />,
      title: "Physical & Sensory Engagement",
      items: [
        "Movement breaks (e.g., yoga, dance)",
        "Activities to strengthen motor coordination",
        "Brain-body connection exercises",
      ],
    },
    {
      id: 5,
      bgColor: "bg-[#a8e1ff]",
      icon: <UserCheck className="h-5 w-5 text-[#3366ff]" />,
      title: "Personalized Learning Paths",
      items: [
        "Assessments to identify strengths and needs",
        "Customized learning activities",
        "Progress tracking & feedback sessions",
      ],
    },
    {
      id: 6,
      bgColor: "bg-[#ffb3c0]",
      icon: <Layers className="h-5 w-5 text-[#f9326f]" />,
      title: "Interactive Learning Environment",
      items: [
        "Hands-on experiments and projects",
        "Peer collaboration activities",
        "Use of technology for gamified learning",
      ],
    },
  ];
  const backgroundImages = [
    "/Card1.png",
    "/Card2.png",
    "/Card3.png",
    "/Card4.png",
    "/Card5.png",
  ];

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
      <div className="relative w-full h-[calc(100vh-7.5rem)] flex flex-col overflow-hidden">
        {/* Background Layer */}
        <div
          className="absolute inset-0 bg-center bg-repeat z-0"
          style={{
            backgroundImage: "url('/Background2.png')",
            backgroundSize: "400px",
            filter: "grayscale(10%) brightness(1.1) blur(0.5px) opacity(0.5)",
            opacity: 0.3,
          }}
        ></div>

        {/* Foreground Content */}
        <div className="relative z-10 pt-12 px-4 flex flex-col gap-6 items-center w-full h-full">
          <h1 className="text-2xl md:text-4xl text-center font-semibold text-black">
            Globally Recognized Interactive Education
          </h1>

          {/* Image takes remaining space */}
          <div className="flex-grow w-full flex justify-center items-center overflow-hidden">
            <Image
              src={OverImage2}
              alt="Education Graphic"
              className="w-auto h-full max-h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
      {/* page3 */}
      <div className="relative w-full px-24 min-h-[calc(100vh-7.5rem)] flex flex-col overflow-hidden">
        {/* Background Layer */}
        <div
          className="absolute inset-0 bg-center bg-repeat z-0"
          style={{
            backgroundImage: "url('/Background2.png')",
            backgroundSize: "400px",
            filter: "grayscale(10%) brightness(1.1) blur(0.5px) opacity(0.5)",
            opacity: 0.3,
          }}
        ></div>

        {/* Foreground Content */}
        <div className="relative z-10 p-12 px-8 flex flex-col gap-6 items-center w-full h-full">
          <h1 className="mb-6 text-2xl md:text-4xl text-center font-semibold text-black">
            About Us
          </h1>

          <div className="flex flex-col md:flex-row rounded-xl space-y-4 md:space-y-0 md:space-x-6">
            <div className="md:w-1/3">
              <Image
                src={Banner1}
                alt="Eduunique Card Image"
                width={1100}
                className="rounded-4xl"
              />
            </div>
            <div className="md:w-2/3 px-12 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2">{`Welcome to Edunique!`}</h2>
              <p className="text-gray-700 mb-4">{`We are an AI mapped personalised, comprehensive after-school program designed for children aged 3 to 16 years, being a one stop solution for parents we offering a diverse range of 31 programs across Building Academic Foundation , Not so extra circular activities , Skill Development, and Brain Development for a child.`}</p>
              <h3 className="text-xl font-semibold mb-2">{`What Makes Edunique Unique?`}</h3>
              <p className="text-gray-600">{`Our strength lies in understanding the unique educational needs of each child and parent. We provide individualized education plans, top-class content, world-class test series, and highly trained teachers. Every child receives a perfect blend of academic support and life-skill development to help them excel both in school and beyond.`}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row rounded-xl space-y-4 md:space-y-0 md:space-x-6">
            <div className="md:w-2/3 px-12 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2">
                Academic Foundation Programs (11 Courses)
              </h2>
              <p className="text-gray-700 mb-4">
                We don’t just help children score well in school exams—we build
                strong foundations for Olympiads, Debates, Quizzes, and other
                competitive platforms.
              </p>
              <ul className="text-gray-600 list-disc pl-5 space-y-2 mb-4">
                <li>
                  Classes are 50 minutes, one-on-one or group classes of 60
                  mins, and fully customized.
                </li>
                <li>
                  We use a unique Pedagogy Chart after a child has given a
                  Diagnostic test to design the right path for each student.
                </li>
                <li>
                  Next step? Visit our website and complete the Admission
                  Process form. We&apos;ll take it from there by understanding
                  your needs and setting expectations.
                </li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <Image
                src={Banner2}
                alt="Eduunique Card Image"
                width={1100}
                className="rounded-4xl"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row rounded-xl space-y-4 md:space-y-0 md:space-x-6">
            <div className="md:w-1/3">
              <Image
                src={Banner3}
                alt="Eduunique Card Image"
                width={1100}
                className="rounded-4xl"
              />
            </div>
            <div className="md:w-2/3 px-12 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2">Non-Academic Programs</h2>
              <p className="text-gray-700 mb-4">
                From Art, Craft, Dance, Music, Pottery, and more, we offer
                creative programs tailored to your child’s interests.
              </p>
              <ul className="text-gray-600 list-disc pl-5 space-y-2 mb-4">
                <li>
                  Choose from one-on-one sessions or small group batches (5–8
                  students).
                </li>
                <li>
                  Pricing ranges from ₹1500 to ₹2500, depending on course and
                  batch size.
                </li>
                <li>
                  A counsellor will guide you through the right program and
                  pricing after your initial form submission.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row rounded-xl space-y-4 md:space-y-0 md:space-x-6">
            <div className="md:w-2/3 px-12 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2">
                Skill Development Programs
              </h2>
              <p className="text-gray-700 mb-4">
                We offer customized, individual-focused courses in:
              </p>
              <ul className="text-gray-600 list-disc pl-5 space-y-2 mb-2">
                <li>Personality Development</li>
                <li>Technology Programs</li>
                <li>Parent Coaching</li>
                <li>Life Skills Enhancement for Children</li>
              </ul>
              <ul className="text-gray-600 list-disc pl-5 space-y-2 mb-4">
                <li>
                  After understanding your goals and expectations, we will share
                  class details, curriculum, and pricing.
                </li>
                <li>
                  Start by booking a counselling session and filling out the
                  interest form.
                </li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <Image
                src={Banner4}
                alt="Eduunique Card Image"
                width={1100}
                className="rounded-4xl"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row rounded-xl space-y-4 md:space-y-0 md:space-x-6">
            <div className="md:w-1/3">
              <Image
                src={Banner5}
                alt="Eduunique Card Image"
                width={1100}
                className="rounded-4xl"
              />
            </div>
            <div className="md:w-2/3 px-12 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2">
                Brain Development Programs
              </h2>
              <p className="text-gray-700 mb-4">
                These programs are designed to boost:
              </p>
              <ul className="text-gray-600 list-disc pl-5 space-y-2 mb-2">
                <li>Memory</li>
                <li>Exam Performance</li>
                <li>Critical Thinking</li>
                <li>Logical Reasoning</li>
              </ul>
              <ul className="text-gray-600 list-disc pl-5 space-y-2 mb-4">
                <li>
                  Courses start at ₹2999, and we offer demo sessions every
                  weekend.
                </li>
                <li>
                  A diagnostic + counselling session is required to customize
                  your child’s learning path.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* page4 */}
      <div
        className="w-screen flex flex-col md:flex-row gap-6 md:gap-3 px-6 md:px-[9%] items-center justify-between bg-cover bg-center bg-no-repeat"
        style={{
          minHeight: "calc(100vh - 7.5rem)",
          backgroundImage: "url('/Background3.png')",
        }}
      >
        <div className="relative z-10 pt-12 px-4 flex flex-col gap-6 items-center w-full h-full">
          <h1 className="text-2xl md:text-4xl text-center font-semibold text-black">
            How We Ensure Quality & Guarantee Results!
          </h1>

          {/* Image takes remaining space */}
          <div className="flex-grow w-full flex justify-center items-center overflow-hidden">
            <Image
              src={OverImage3}
              alt="Banner"
              className="w-full h-auto max-h-[70vh] object-contain"
              priority
            />
          </div>
        </div>
      </div>
      {/* page5 */}
      <div
        className="relative min-h-[calc(100vh-7.5rem)] w-full flex flex-col px-4 md:px-[7%] pt-8 pb-8 justify-start bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Background3.png')",
          backgroundBlendMode: "difference",
          backgroundSize: "calc",
        }}
      >
        {/* Father and child image */}
        <div className="absolute left-0 bottom-0 z-10 hidden md:block">
          <Image
            src="/fatherChild.png"
            alt="Father and child playing"
            width={600}
            height={700}
            className="h-auto w-auto object-contain"
            priority
          />
        </div>

        {/* Header section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between mb-4 md:mb-6 z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-3 md:mb-0">
            Our Features
          </h1>
          <button className="bg-[#f9326f] text-white px-4 py-2 text-sm rounded-lg hover:bg-[#ff1a5f] cursor-pointer flex items-center">
            View More <span className="ml-1">›</span>
          </button>
        </div>

        {/* Features grid - no scroll, slight overflow allowed */}
        <div className="md:ml-auto md:w-3/5 z-20 pr-2 pb-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featureCards.map((card) => (
              <div
                key={card.id}
                className={`${card.bgColor} rounded-xl p-4 shadow-lg`}
              >
                <div className="flex items-center mb-2">
                  <div className="bg-white p-1.5 rounded-lg mr-2">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {card.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* page6 */}
      <div
        className="w-screen flex flex-col md:flex-row gap-6 md:gap-3 px-6 md:px-[9%] items-center justify-between bg-cover bg-center bg-no-repeat"
        style={{
          minHeight: "calc(100vh - 7.5rem)",
          backgroundImage: "url('/Background4.png')",
        }}
      >
        <div className="relative z-10 pt-12 px-4 flex flex-col gap-6 items-center w-full h-full">
          <h1 className="text-2xl md:text-4xl text-center font-semibold text-black">
            How We Ensure Quality & Guarantee Results!{" "}
          </h1>

          {/* Image takes remaining space */}
          <div className="flex-grow w-full flex justify-center items-center overflow-hidden">
            <Image
              src={OverImage4}
              alt="Banner"
              className="w-full h-auto max-h-[70vh] object-contain"
              priority
            />
          </div>
        </div>
      </div>
      {/* page7 */}
      <div className="min-h-screen w-screen flex justify-around bg-gradient-to-r from-[#fcdecf] to-[#fdc1d7] pt-16">
        <div className="w-full max-w-5xl p-4">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-[340px] rounded-3xl overflow-hidden shadow-lg mb-16"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={image}
                  alt={`Card background ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0} // Optional: prioritize the first image
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              {/* Empty space to preserve structure */}
              <div className="relative z-10 p-8 md:p-12 h-full"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

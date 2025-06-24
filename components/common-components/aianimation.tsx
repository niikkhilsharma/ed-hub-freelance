// components/AILoadingPopup.tsx

export default function AILoadingPopup() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl p-10 w-[932px] h-[596px] flex flex-col items-center justify-center shadow-xl">
        {/* Animated Star */}
        {/* Loader Video */}
        <video
          autoPlay
          loop
          muted
          className="w-[912px] h-[521px] "
        >
          <source src="/star-loader.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Text */}
        <p className="mt-8 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-center">
          Please wait a moment while the AI works its magic.
        </p>
      </div>
    </div>
  );
}

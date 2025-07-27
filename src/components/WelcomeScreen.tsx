// components/WelcomeScreen.tsx
export default function WelcomeScreen({ onBegin }: { onBegin: () => void; }) {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#0a192f] text-center text-white">
      <div className="relative z-10 p-4">
        <h1 className="font-cinzel mb-4 text-5xl md:text-7xl">Flunderlina&apos;s Great Ride</h1>
        <p className="mb-8 text-xl italic text-gray-300">Your adventure awaits.</p>
        <button onClick={onBegin} className="rounded-full bg-yellow-500 px-8 py-3 font-bold text-[#0a192f] transition-transform duration-300 hover:scale-105">
          Begin Your Journey
        </button>
      </div>
    </div>
  );
}
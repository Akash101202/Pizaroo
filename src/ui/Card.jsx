export default function Card({ children }) {
  return (
    <div className="relative w-full">
      <div className="mx-auto mb-4 mt-3 flex transform cursor-grabbing rounded-lg bg-stone-300 px-4 py-3 shadow-lg transition duration-500 hover:-translate-y-1 hover:rotate-2 hover:scale-105 hover:bg-cyan-500 hover:shadow-2xl">
        {children}
      </div>
    </div>
  );
}

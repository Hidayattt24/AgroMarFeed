export default function Home() {
  return (
    <div className="min-h-screen px-6 py-12 bg-7 text-foreground font-sans">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">
        Palet Warna Kustom
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-1 p-6 rounded-xl shadow-md border border-black/10 hover:scale-105 transition">
          <p className="text-sm font-medium">bg-1</p>
        </div>

        <div className="bg-2 p-6 rounded-xl shadow-md border border-black/10 hover:scale-105 transition text-white">
          <p className="text-sm font-medium">bg-2</p>
        </div>

        <div className="bg-3 p-6 rounded-xl shadow-md border border-black/10 hover:scale-105 transition text-black">
          <p className="text-sm font-medium">bg-3</p>
        </div>

        <div className="bg-4 p-6 rounded-xl shadow-md border border-black/10 hover:scale-105 transition text-black">
          <p className="text-sm font-medium">bg-4</p>
        </div>

        <div className="bg-5 p-6 rounded-xl shadow-md border border-black/10 hover:scale-105 transition text-black">
          <p className="text-sm font-medium">bg-5</p>
        </div>

        <div className="bg-6 p-6 rounded-xl shadow-md border border-black/10 hover:scale-105 transition text-black">
          <p className="text-sm font-medium">bg-6</p>
        </div>

        <div className="bg-7 p-6 rounded-xl shadow-md border border-black/10 hover:scale-105 transition text-black">
          <p className="text-sm font-medium">bg-7</p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF6] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Nie znaleziono strony</h1>
        <p className="mb-6 text-white/70">Wygląda na to, że ten adres nie istnieje.</p>
        <Link href="/" className="inline-flex px-6 py-3 rounded-xl font-semibold" style={{ background: "linear-gradient(135deg, #00E0C6, #2E90FA)", color: "#0B1220" }}>
          Wróć na stronę główną
        </Link>
      </div>
    </div>
  );
}

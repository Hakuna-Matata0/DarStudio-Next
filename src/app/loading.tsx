import { LogoLoading } from "@/components/brand/logo-loading";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF6] grid place-items-center">
      <div className="flex flex-col items-center gap-4">
        <LogoLoading
          className="darstudio-loading-logo w-[33vmin] max-w-[45vw] max-h-[45vh] h-auto"
          title="Ładowanie"
        />
        <span className="sr-only">Ładowanie…</span>
      </div>
    </div>
  );
}


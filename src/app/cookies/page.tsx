import Script from "next/script";

export default function CookiesPage() {
  return (
    <main style={{ padding: "2rem 1.25rem", maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
        Cookie Declaration
      </h1>

      <Script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/794d7735-9c6c-43a8-9e67-765086a3fc62/cd.js"
        type="text/javascript"
        strategy="afterInteractive"
      />
    </main>
  );
}


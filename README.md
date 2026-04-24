
# Projekt w Next.js (SSG)

To jest przepisana wersja projektu z React/Vite do **Next.js App Router** z **generowaniem statycznym (SSG)**.

## Wymagania

- Node.js **20.9+**
- npm **10+**

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Aplikacja będzie działać pod adresem:

```bash
http://localhost:3000
```

## Build produkcyjny (statyczny eksport)

```bash
npm run build
```

Po buildzie statyczne pliki znajdziesz w katalogu:

```bash
out/
```

## Podgląd wyeksportowanej wersji statycznej

```bash
npm run start
```

To uruchamia prosty serwer dla folderu `out/`.

## Najważniejsze miejsca do edycji

- `src/content/site-config.ts` – podstawowe dane strony, kontakt, liczby, linki social media
- `src/components/home/` – sekcje strony głównej, każda sekcja w osobnym pliku
- `src/features/brief/brief-page-client.tsx` – formularz briefu
- `src/features/realizations/realizations-page-client.tsx` – lista realizacji
- `src/features/realizations/realization-detail-client.tsx` – szczegóły realizacji
- `src/data/projects.ts` – dane realizacji
- `src/app/globals.css` i `src/styles/theme.css` – globalne style i zmienne kolorów

## Jak zmieniać sekcje na stronie głównej

Każda sekcja jest osobnym komponentem:

- `hero-section.tsx`
- `about-section.tsx`
- `services-section.tsx`
- `process-section.tsx`
- `portfolio-section.tsx`
- `testimonials-section.tsx`
- `faq-section.tsx`
- `cta-section.tsx`
- `footer.tsx`

Dzięki temu możesz zmieniać treść i układ jednej sekcji bez ruszania całej strony.

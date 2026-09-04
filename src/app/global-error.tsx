"use client";

export default function GlobalError({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#F7F5F4", color: "#4A1D34", fontFamily: "Arial, sans-serif" }}>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
          <section style={{ maxWidth: 640, padding: "64px 32px", background: "white", border: "1px solid rgba(74,29,52,.15)", textAlign: "center", borderRadius: 6 }}>
            <p style={{ color: "#00718F", fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", fontWeight: 700 }}>The Hotel Life</p>
            <h1 style={{ fontSize: 42, lineHeight: 1.1, margin: "16px 0" }}>We could not prepare this page.</h1>
            <p style={{ color: "#6B4152", lineHeight: 1.7 }}>This is a temporary interruption. Please try again in a moment.</p>
            <button onClick={() => retry()} style={{ marginTop: 24, border: 0, borderRadius: 999, background: "#4A1D34", color: "#F7F5F4", padding: "13px 28px", fontWeight: 700, cursor: "pointer" }}>TRY AGAIN</button>
          </section>
        </main>
      </body>
    </html>
  );
}

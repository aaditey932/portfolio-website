import "./globals.css";

export const metadata = {
  title: "Aaditey Pillai — AI Engineer",
  description:
    "Portfolio of Aaditey Pillai — AI engineer at Duke (MEng) building production LLM systems, agentic pipelines, and RAG.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

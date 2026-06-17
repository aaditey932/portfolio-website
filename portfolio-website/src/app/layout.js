import "./globals.css";

export const metadata = {
  title: "Aaditey Pillai, AI Engineer",
  description:
    "Portfolio of Aaditey Pillai, Duke MEng '26 AI engineer building production LLM systems, agentic pipelines, and RAG.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

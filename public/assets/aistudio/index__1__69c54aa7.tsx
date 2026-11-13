import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Between Representation and Authentication" },
      { name: "description", content: "Review copy of a 13-slide deck on representation and authentication in 1890s Brazil." },
      { property: "og:title", content: "Between Representation and Authentication" },
      { property: "og:description", content: "Review copy of a 13-slide deck on representation and authentication." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
    <iframe
      src="/deck/between.html"
      title="Between Representation and Authentication"
      className="fixed inset-0 h-screen w-screen border-0 bg-background"
    />
      <Link to="/apresentacoes" className="fixed bottom-3 left-3 z-10 rounded-md border border-border bg-background/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur hover:text-foreground">
        ICONOCRACIA
      </Link>
    </>
  );
}

import { Fragment } from "react";
import Link from "next/link";

/** Render **bold**, [links](href) inline. */
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      if (href.startsWith("/")) {
        return (
          <Link key={i} href={href}>
            {label}
          </Link>
        );
      }
      return (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

/**
 * Tiny markdown-lite renderer for Insights articles
 * (blank-line paragraphs, "## " headings, "- " list items).
 */
export default function ArticleBody({ body }: { body: string }) {
  const blocks = body.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);

  return (
    <div className="article-body">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return <h2 key={i}>{renderInline(block.slice(3))}</h2>;
        }
        const lines = block.split("\n").map((l) => l.trim());
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={i}>
              {lines.map((li, j) => (
                <li key={j}>{renderInline(li.slice(2))}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{renderInline(block)}</p>;
      })}
    </div>
  );
}

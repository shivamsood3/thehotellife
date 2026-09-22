import Link from "next/link";
import type { EditorialReferences as References } from "@/content/editorial/references";

export default function EditorialReferences({ sources, relatedReading }: References) {
  if (!sources?.length && !relatedReading?.length) return null;
  return (
    <aside aria-label="Further reading and useful links" className="mt-12 space-y-8 border-t border-line pt-8">
      {relatedReading?.length ? (
        <div>
          <h2 className="font-display text-xl text-ink">Plan the rest of your stay</h2>
          <ul className="mt-3 space-y-3 text-sm">
            {relatedReading.map((link) => (
              <li key={link.url}><Link href={link.url} className="text-brass-deep underline underline-offset-4">{link.label}</Link></li>
            ))}
          </ul>
        </div>
      ) : null}
      {sources?.length ? (
        <div>
          <h2 className="font-display text-xl text-ink">Useful official links</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">For current room details, reservations and visitor information.</p>
          <ul className="mt-3 space-y-3 text-sm">
            {sources.map((link) => (
              <li key={link.url}><a href={link.url} target="_blank" rel="noopener noreferrer" className="text-brass-deep underline underline-offset-4">{link.label}</a></li>
            ))}
          </ul>
        </div>
      ) : null}
    </aside>
  );
}

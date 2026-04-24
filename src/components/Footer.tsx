import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex items-center justify-between pl-16 pr-8 py-4 bg-zinc-900 text-gray-400 border-t border-zinc-800">
      
      <div>
        MovieShop by group A
      </div>

      <div className="flex gap-4">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div>
        Lexicon Linköping 2026
      </div>

    </footer>
  );
}
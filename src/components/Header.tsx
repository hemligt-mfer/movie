import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-zinc-900 text-white border-b border-zinc-800">
      
      
      <Link href="/" className="text-xl font-bold tracking-wide">
        <span className="text-white">Movie</span>
        <span className="text-red-500">Shop</span>
      </Link>

      
      <nav className="flex gap-6 text-sm">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/movies" className="hover:text-gray-300">Movies</Link>
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
      </nav>

      
      <Link href="/login">
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded text-sm font-medium">
          Log in
        </button>
      </Link>

    </header>
  );
}
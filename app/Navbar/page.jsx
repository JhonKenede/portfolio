import Link from "next/link";

export default function Page() {
  return (
    <nav className="container ">
      <ul className="flex gap-6 justify-center">
        <li>
          <Link href="/">Proyectos</Link>
        </li>
        <li>
          <Link href="/slides">Blog</Link>
        </li>
        <li>
          <Link href="https://github.com/JhonKenede">GitHub</Link>
        </li>
      </ul>
    </nav>
  );
}

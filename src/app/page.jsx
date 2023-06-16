import Head from "next/head";
import Link from "next/link";
import { metadata } from "./layout";

export default function Home() {
  metadata.title = "Home";
  metadata.description = "Home page";
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <h1 className="text-6xl font-bold uppercase">Home page</h1>
      <p className="text-6xl font-bold">
        Ir a{" "}
        <Link href="/about" className="text-blue-700">
          About
        </Link>
      </p>
      <p>
        Get started by editing&nbsp;
        <code className="font-mono font-bold">src/app/page.js</code>
      </p>
    </main>
  );
}

import Link from "next/link";
import { metadata } from "../layout";

const Contacts = () => {
  metadata.title = "Contact";
  metadata.description = "Contacts page";
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <h1 className="text-6xl font-bold uppercase">Contact page</h1>
      <p className="text-6xl font-bold">
        Ir a{" "}
        <Link href="/" className="text-blue-700">
          Home
        </Link>
      </p>
      <p>
        Get started by editing&nbsp;
        <code className="font-mono font-bold">src/app/about/page.js</code>
      </p>
    </main>
  );
};

export default Contacts;

import { nanoid } from "nanoid";
import Link from "next/link";
import { Header } from "../components/Header";

export default function CreatePage() {
  const nanoId = nanoid();
  return (
    <main>
      <Header />
      <div className="h-screen text-center flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex-col">
        ok
        <p>
          <Link href={`/create/${nanoId}`}>Book 1</Link>
        </p>
      </div>
    </main>
  );
}

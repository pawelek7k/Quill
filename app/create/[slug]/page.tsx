import { Header } from "../../components/Header";

export default function BookPostPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <Header />
      <div className="h-screen text-center flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex-col">
        uwu
        <p>{params.slug}</p>
      </div>
    </main>
  );
}

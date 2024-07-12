import { BreadcrumbContainer } from "@/app/components/BreadcrumbsContainer";

export default function BookPostPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <div className="h-screen text-center flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex-col">
        <BreadcrumbContainer />
        uwu
        <p>{params.slug}</p>
      </div>
    </main>
  );
}

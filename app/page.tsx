import BodyParts from "@/components/bodyparts";
import TopParts from "@/components/topparts";

export default function Home() {

  return (
    <main className="w-full h-screen bg-slate-50">
      <TopParts />
      <BodyParts />
    </main>
  );
}

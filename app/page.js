import { Suspense } from "react";
import RandomName from "./randomName";
import RevalidateButton from "./revalidateButton";
export default function Home() {
  return (
    <div className="max-w-md">
      <Suspense fallback={<p>Laoding...</p>}>
        <RandomName></RandomName>
      </Suspense>
      <RevalidateButton></RevalidateButton>
    </div>
  );
}

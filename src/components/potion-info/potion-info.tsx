import { PotionType } from "@/types/github";
import PotionSidebar from "./potion-sidebar";
import PotionRepositoryDetails from "./potion-repository-details";
import PotionMagicalProperties from "./potion-magical-properties";

interface PotionInfoType {
  potion: PotionType;
}

export default function PotionInfo({ potion }: PotionInfoType) {
  const title = "Potion Details";
  const subTitle = "Discover the magical properties of this enchanted brew";

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold text-purple-200">{title} </h1>
        <p className="text-purple-300/70">{subTitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="md:col-span-1">
          <PotionSidebar potion={potion} />
        </div>
        {/* Right column */}
        <div className="md:col-span-2">
          <PotionRepositoryDetails potion={potion} />
          <PotionMagicalProperties potion={potion} />
        </div>
      </div>
    </main>
  );
}
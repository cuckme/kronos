import { useState } from "react";
import { KronosHeader } from "@/components/KronosHeader";
import { SuperCard } from "@/components/SuperCard";
import { SuperImageGenerator } from "@/components/SuperImageGenerator";
import { eliminatedSupers, SuperData } from "@/data/superData";

const Index = () => {
  const [supers, setSupers] = useState<SuperData[]>(eliminatedSupers);

  const handleImagesGenerated = (updatedSupers: SuperData[]) => {
    setSupers(updatedSupers);
  };
  return (
    <div className="min-h-screen bg-background">
      <KronosHeader />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-data text-xl font-bold text-foreground tracking-wider">
                ELIMINATED SUPER REGISTRY
              </h2>
              <p className="text-muted-foreground text-sm font-mono mt-1">
                Chronological elimination log - Omnidroid adaptive learning protocol
              </p>
            </div>
              <div className="text-right font-data text-xs text-muted-foreground">
                <div>TOTAL SUBJECTS: {supers.length}</div>
                <div>SUCCESS RATE: 100%</div>
              </div>
            </div>
            
            <SuperImageGenerator 
              supers={supers}
              onImagesGenerated={handleImagesGenerated}
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supers.map((superData, index) => (
            <SuperCard key={superData.codename} data={superData} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-card border border-border rounded-lg p-6">
            <p className="font-data text-sm text-muted-foreground tracking-wider">
              KRONOS ANALYTICAL SUMMARY: All target subjects successfully eliminated.
              <br />
              Omnidroid evolution protocol completed. Ready for Phase 2 deployment.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

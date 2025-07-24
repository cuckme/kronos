import { Badge } from "@/components/ui/badge";

export function KronosHeader() {
  return (
    <div className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="font-data text-primary-foreground font-bold text-sm">K</span>
              </div>
              <div>
                <h1 className="font-data text-2xl font-bold text-foreground tracking-wider">
                  KRONOS CLASSIFICATION SYSTEM
                </h1>
                <p className="text-muted-foreground text-sm font-mono">
                  Omnidroid Project - Super Elimination Database
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge 
              variant="outline" 
              className="bg-classification-top-secret border-classification-top-secret font-data text-xs font-bold animate-data-pulse"
            >
              TOP SECRET
            </Badge>
            <div className="text-right">
              <div className="font-data text-xs text-muted-foreground">
                CLEARANCE LEVEL: OMEGA
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                LOGGED: {new Date().toISOString().split('T')[0]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
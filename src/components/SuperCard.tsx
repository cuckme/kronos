import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ThreatLevelBadge } from "./ThreatLevelBadge";
import { StatusBadge } from "./StatusBadge";
import { Badge } from "@/components/ui/badge";

interface SuperData {
  codename: string;
  powers: string;
  threatLevel: number;
  engagementNumber: string;
  finalStatus: string;
  combatAnalysis: string;
  omnidroidUpgrades: string;
}

interface SuperCardProps {
  data: SuperData;
}

export function SuperCard({ data }: SuperCardProps) {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden relative">
      {/* Scanner effect */}
      <div className="absolute inset-0 bg-gradient-scanner opacity-0 group-hover:opacity-100 animate-scanner-sweep pointer-events-none" />
      
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-data text-lg font-bold text-foreground tracking-wide">
              {data.codename}
            </h3>
            <p className="text-muted-foreground text-sm mt-1 font-mono">
              {data.powers}
            </p>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <ThreatLevelBadge level={data.threatLevel} />
            <StatusBadge status={data.finalStatus} />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-data tracking-wider">
              ENGAGEMENT
            </span>
            <Badge variant="secondary" className="font-data text-xs">
              {data.engagementNumber}
            </Badge>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="text-xs font-data text-primary font-bold tracking-wider mb-2">
              COMBAT ANALYSIS
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed font-mono">
              {data.combatAnalysis}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-data text-primary font-bold tracking-wider mb-2">
              OMNIDROID ADAPTIVE UPGRADES
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed font-mono">
              {data.omnidroidUpgrades}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
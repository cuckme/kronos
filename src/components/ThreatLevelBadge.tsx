import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ThreatLevelBadgeProps {
  level: number;
  className?: string;
}

export function ThreatLevelBadge({ level, className }: ThreatLevelBadgeProps) {
  const getThreatColor = (level: number) => {
    if (level >= 9.0) return "bg-threat-critical border-threat-critical";
    if (level >= 7.0) return "bg-threat-high border-threat-high";
    if (level >= 5.0) return "bg-threat-medium border-threat-medium";
    return "bg-threat-low border-threat-low";
  };

  const getThreatLabel = (level: number) => {
    if (level >= 9.0) return "CRITICAL";
    if (level >= 7.0) return "HIGH";
    if (level >= 5.0) return "MEDIUM";
    return "LOW";
  };

  return (
    <Badge 
      variant="outline" 
      className={cn(
        "font-data text-xs font-bold tracking-wider",
        getThreatColor(level),
        level >= 9.0 && "animate-threat-glow",
        className
      )}
    >
      {getThreatLabel(level)} {level.toFixed(1)}
    </Badge>
  );
}
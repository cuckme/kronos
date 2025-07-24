import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const getStatusColor = (status: string) => {
    if (status.toLowerCase().includes("eliminated")) return "bg-status-eliminated border-status-eliminated";
    if (status.toLowerCase().includes("neutralized")) return "bg-status-neutralized border-status-neutralized";
    return "bg-muted border-muted-foreground";
  };

  return (
    <Badge 
      variant="outline" 
      className={cn(
        "font-data text-xs font-bold tracking-wider",
        getStatusColor(status),
        className
      )}
    >
      {status.toUpperCase()}
    </Badge>
  );
}
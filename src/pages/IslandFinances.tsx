import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FinancialData {
  category: string;
  amount: number;
  description: string;
  status: string;
  department: string;
}

const financialData: FinancialData[] = [
  {
    category: "R&D - Omnidroid Development",
    amount: 847500000,
    description: "Advanced robotics, AI learning algorithms, adaptive systems",
    status: "APPROVED",
    department: "TECHNOLOGY"
  },
  {
    category: "Island Operations",
    amount: 156000000,
    description: "Facility maintenance, security systems, power generation",
    status: "ONGOING",
    department: "OPERATIONS"
  },
  {
    category: "Super Surveillance Network",
    amount: 89200000,
    description: "Global monitoring systems, data collection, analysis",
    status: "ACTIVE",
    department: "INTELLIGENCE"
  },
  {
    category: "Test Site Construction",
    amount: 234000000,
    description: "Combat arenas, containment facilities, safety systems",
    status: "COMPLETED",
    department: "CONSTRUCTION"
  },
  {
    category: "Personnel & Security",
    amount: 67800000,
    description: "Guard salaries, training programs, equipment",
    status: "MONTHLY",
    department: "HUMAN RESOURCES"
  },
  {
    category: "Zero Point Energy Research",
    amount: 445000000,
    description: "Quantum physics lab, energy extraction, power systems",
    status: "CLASSIFIED",
    department: "ADVANCED RESEARCH"
  },
  {
    category: "Vehicle & Equipment",
    amount: 123400000,
    description: "Manta jets, hover platforms, transportation",
    status: "MAINTENANCE",
    department: "LOGISTICS"
  },
  {
    category: "Communication Systems",
    amount: 45600000,
    description: "Secure networks, satellite uplinks, encrypted channels",
    status: "UPGRADED",
    department: "TECHNOLOGY"
  }
];

export function IslandFinances() {
  const totalBudget = financialData.reduce((sum, item) => sum + item.amount, 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved':
      case 'completed':
      case 'active':
        return 'bg-status-neutralized border-status-neutralized';
      case 'ongoing':
      case 'monthly':
      case 'maintenance':
        return 'bg-threat-medium border-threat-medium';
      case 'classified':
        return 'bg-primary border-primary';
      case 'upgraded':
        return 'bg-accent border-accent';
      default:
        return 'bg-muted border-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-terminal text-2xl font-bold text-foreground tracking-wider">
            NOMANISAN ISLAND FINANCES
          </h2>
          <p className="text-muted-foreground text-sm font-mono mt-1">
            Operational budget analysis - Fiscal year 2004
          </p>
        </div>
        <div className="text-right font-terminal text-xs text-muted-foreground">
          <div>TOTAL BUDGET: {formatCurrency(totalBudget)}</div>
          <div>CLASSIFICATION: TOP SECRET</div>
        </div>
      </div>

      {/* Budget Summary */}
      <Card className="bg-gradient-data border-border">
        <CardHeader>
          <h3 className="font-terminal text-lg font-bold text-foreground tracking-wider">
            BUDGET OVERVIEW
          </h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="font-terminal text-2xl font-bold text-primary">
                {formatCurrency(totalBudget)}
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                TOTAL ALLOCATED
              </div>
            </div>
            <div className="text-center">
              <div className="font-terminal text-2xl font-bold text-threat-high">
                {financialData.length}
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                ACTIVE PROJECTS
              </div>
            </div>
            <div className="text-center">
              <div className="font-terminal text-2xl font-bold text-status-neutralized">
                100%
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                FUNDING SECURED
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financial Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {financialData.map((item, index) => (
          <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-terminal text-sm font-bold text-foreground tracking-wide">
                    {item.category}
                  </h3>
                  <p className="text-muted-foreground text-xs font-mono mt-1">
                    DEPT: {item.department}
                  </p>
                </div>
                <Badge 
                  variant="outline"
                  className={`font-terminal text-xs font-bold tracking-wider ${getStatusColor(item.status)}`}
                >
                  {item.status}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-terminal text-muted-foreground tracking-wider">
                  ALLOCATION
                </span>
                <span className="font-terminal text-lg font-bold text-primary">
                  {formatCurrency(item.amount)}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-terminal text-primary font-bold tracking-wider mb-1">
                  PROJECT DESCRIPTION
                </h4>
                <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-border/50">
                <div className="flex justify-between text-xs font-mono text-muted-foreground">
                  <span>BUDGET %:</span>
                  <span>{((item.amount / totalBudget) * 100).toFixed(1)}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <div className="inline-block bg-card border border-border rounded-lg p-6">
          <p className="font-terminal text-sm text-muted-foreground tracking-wider">
            FINANCIAL STATUS: ALL OPERATIONS FULLY FUNDED
            <br />
            NEXT REVIEW: QUARTERLY ASSESSMENT - Q2 2004
            <br />
            AUTHORIZATION: BUDDY PINE - CEO
          </p>
        </div>
      </div>
    </div>
  );
}
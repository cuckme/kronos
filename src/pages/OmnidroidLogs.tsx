import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface OmnidroidModel {
  version: string;
  targetSuper: string;
  upgrades: string[];
  status: string;
  deployment: string;
}

const omnidroidData: OmnidroidModel[] = [
  {
    version: "Mark I",
    targetSuper: "Blazestone",
    upgrades: ["Heat-resistant plating", "Thermal dampening systems"],
    status: "SUCCESS",
    deployment: "Nomanisan Island Test Site A"
  },
  {
    version: "Mark II", 
    targetSuper: "Dynaguy",
    upgrades: ["Entanglement countermeasures", "Grappling appendages", "Cape detection sensors"],
    status: "SUCCESS",
    deployment: "Nomanisan Island Test Site B"
  },
  {
    version: "Mark III",
    targetSuper: "Psycwave", 
    upgrades: ["EMP-dampened plating", "Randomized trajectory protocols", "Psychic interference generators"],
    status: "FAILURE - RETRY",
    deployment: "Nomanisan Island Test Site C"
  },
  {
    version: "Mark IV",
    targetSuper: "Phylange",
    upgrades: ["Sonic disruptors (47.3 kHz)", "Swarm containment protocols", "Ultrasonic frequency array"],
    status: "SUCCESS",
    deployment: "Nomanisan Island Test Site A"
  },
  {
    version: "Mark V",
    targetSuper: "Psycwave (Retry)",
    upgrades: ["Enhanced EMP shielding", "Multi-vector assault protocols", "Neural disruption field"],
    status: "SUCCESS",
    deployment: "Nomanisan Island Test Site D"
  },
  {
    version: "Mark VI",
    targetSuper: "Hypershock",
    upgrades: ["Electromagnetic shielding", "Moisture extraction systems", "Faraday cage integration"],
    status: "SUCCESS", 
    deployment: "Nomanisan Island Test Site B"
  },
  {
    version: "Mark VII",
    targetSuper: "Gazerbeam",
    upgrades: ["Prismatic deflection armor", "Blinding countermeasures", "Reflective surface adaptation"],
    status: "SUCCESS",
    deployment: "Nomanisan Island Test Site E"
  },
  {
    version: "Mark VIII",
    targetSuper: "Stormicide",
    upgrades: ["Lightning rod arrays", "Atmospheric pressure stabilizers", "Weather pattern prediction AI"],
    status: "FAILURE - RETRY",
    deployment: "Nomanisan Island Test Site C"
  },
  {
    version: "Mark IX",
    targetSuper: "Stormicide (Retry)",
    upgrades: ["Enhanced atmospheric control", "Ion storm generators", "Weather manipulation countermeasures"],
    status: "SUCCESS",
    deployment: "Nomanisan Island Test Site F"
  },
  {
    version: "Mark X",
    targetSuper: "Gamma Jack",
    upgrades: ["Lead-composite shielding", "Radiation absorption matrices", "Nuclear energy redirection"],
    status: "SUCCESS",
    deployment: "Nomanisan Island Test Site G"
  },
  {
    version: "Mark XI",
    targetSuper: "Everseer",
    upgrades: ["Quantum uncertainty generators", "Temporal disruption field", "Precognitive interference systems"],
    status: "FAILURE - RETRY",
    deployment: "Nomanisan Island Test Site H"
  },
  {
    version: "Mark XII",
    targetSuper: "Everseer (Final)",
    upgrades: ["Advanced quantum chaos algorithms", "Multi-timeline targeting", "Reality anchor systems"],
    status: "SUCCESS", 
    deployment: "Nomanisan Island Test Site I"
  },
  {
    version: "Mark X (Complete)",
    targetSuper: "Mr. Incredible",
    upgrades: ["Adaptive learning protocol", "Self-repair capabilities", "Psychological warfare subroutines", "All previous upgrades integrated"],
    status: "MISSION COMPLETE",
    deployment: "Metroville - Final Deployment"
  }
];

export function OmnidroidLogs() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-terminal text-2xl font-bold text-foreground tracking-wider">
            OMNIDROID EVOLUTION LOG
          </h2>
          <p className="text-muted-foreground text-sm font-mono mt-1">
            Adaptive learning protocol - Iterative improvement analysis
          </p>
        </div>
        <div className="text-right font-terminal text-xs text-muted-foreground">
          <div>TOTAL ITERATIONS: {omnidroidData.length}</div>
          <div>SUCCESS RATE: {Math.round((omnidroidData.filter(m => m.status === "SUCCESS" || m.status === "MISSION COMPLETE").length / omnidroidData.length) * 100)}%</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {omnidroidData.map((model, index) => (
          <Card key={model.version} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-terminal text-lg font-bold text-foreground tracking-wide">
                    OMNIDROID {model.version}
                  </h3>
                  <p className="text-muted-foreground text-sm font-mono">
                    TARGET: {model.targetSuper}
                  </p>
                </div>
                <Badge 
                  variant="outline"
                  className={`font-terminal text-xs font-bold tracking-wider ${
                    model.status === "SUCCESS" || model.status === "MISSION COMPLETE" 
                      ? "bg-status-neutralized border-status-neutralized" 
                      : "bg-threat-high border-threat-high"
                  }`}
                >
                  {model.status}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <h4 className="text-xs font-terminal text-primary font-bold tracking-wider mb-2">
                  ADAPTIVE UPGRADES
                </h4>
                <div className="space-y-1">
                  {model.upgrades.map((upgrade, idx) => (
                    <div key={idx} className="text-xs text-muted-foreground font-mono leading-relaxed">
                      • {upgrade}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-terminal text-primary font-bold tracking-wider mb-2">
                  DEPLOYMENT LOCATION
                </h4>
                <p className="text-xs text-muted-foreground font-mono">
                  {model.deployment}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <div className="inline-block bg-card border border-border rounded-lg p-6">
          <p className="font-terminal text-sm text-muted-foreground tracking-wider">
            OMNIDROID EVOLUTION PROTOCOL: COMPLETE
            <br />
            ADAPTIVE LEARNING: 100% SUCCESSFUL
            <br />
            READY FOR MASS PRODUCTION
          </p>
        </div>
      </div>
    </div>
  );
}
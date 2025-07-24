import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AccessLog {
  timestamp: string;
  user: string;
  ip: string;
  location: string;
  action: string;
  status: string;
  clearanceLevel: string;
}

const accessLogs: AccessLog[] = [
  {
    timestamp: "2004-03-15 14:23:17",
    user: "BUDDY.PINE",
    ip: "192.168.1.001",
    location: "Nomanisan Island - Main Terminal",
    action: "System Login",
    status: "SUCCESS",
    clearanceLevel: "OMEGA"
  },
  {
    timestamp: "2004-03-15 14:21:43",
    user: "KRONOS.AI",
    ip: "10.0.0.100",
    location: "Central Processing Unit",
    action: "Automated System Check",
    status: "SUCCESS",
    clearanceLevel: "SYSTEM"
  },
  {
    timestamp: "2004-03-15 14:18:29",
    user: "MIRAGE.AGENT",
    ip: "192.168.1.156",
    location: "Communication Center",
    action: "Message Transmission",
    status: "SUCCESS",
    clearanceLevel: "ALPHA"
  },
  {
    timestamp: "2004-03-15 14:15:02",
    user: "UNKNOWN.USER",
    ip: "203.45.67.89",
    location: "External - Metroville Proxy",
    action: "Unauthorized Access Attempt",
    status: "DENIED",
    clearanceLevel: "NONE"
  },
  {
    timestamp: "2004-03-15 14:12:58",
    user: "SECURITY.GUARD.047",
    ip: "192.168.2.047",
    location: "Sector 7 - Security Station",
    action: "Patrol Report Upload",
    status: "SUCCESS",
    clearanceLevel: "BETA"
  },
  {
    timestamp: "2004-03-15 14:09:33",
    user: "DR.RESEARCH.001",
    ip: "192.168.3.201",
    location: "R&D Laboratory - Level 5",
    action: "Data Analysis Query",
    status: "SUCCESS",
    clearanceLevel: "GAMMA"
  },
  {
    timestamp: "2004-03-15 14:07:19",
    user: "MAINTENANCE.TECH.12",
    ip: "192.168.4.012",
    location: "Omnidroid Hangar Bay",
    action: "Diagnostic Report",
    status: "SUCCESS",
    clearanceLevel: "DELTA"
  },
  {
    timestamp: "2004-03-15 14:04:45",
    user: "UNKNOWN.USER",
    ip: "198.51.100.42",
    location: "External - Unknown Proxy",
    action: "Port Scan Detected",
    status: "BLOCKED",
    clearanceLevel: "NONE"
  },
  {
    timestamp: "2004-03-15 14:01:12",
    user: "BUDDY.PINE",
    ip: "192.168.1.001",
    location: "Nomanisan Island - Private Office",
    action: "Financial Records Access",
    status: "SUCCESS",
    clearanceLevel: "OMEGA"
  },
  {
    timestamp: "2004-03-15 13:58:37",
    user: "KRONOS.AI",
    ip: "10.0.0.100",
    location: "Central Processing Unit",
    action: "Super Database Update",
    status: "SUCCESS",
    clearanceLevel: "SYSTEM"
  },
  {
    timestamp: "2004-03-15 13:55:23",
    user: "UNKNOWN.USER",
    ip: "172.16.254.1",
    location: "External - Government Network",
    action: "Database Intrusion Attempt",
    status: "DENIED",
    clearanceLevel: "NONE"
  },
  {
    timestamp: "2004-03-15 13:52:08",
    user: "MIRAGE.AGENT",
    ip: "192.168.1.156",
    location: "Communication Center",
    action: "Encrypted Message Sent",
    status: "SUCCESS",
    clearanceLevel: "ALPHA"
  }
];

export function SystemAccessLogs() {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'success':
        return 'bg-status-neutralized border-status-neutralized';
      case 'denied':
      case 'blocked':
        return 'bg-status-eliminated border-status-eliminated';
      default:
        return 'bg-muted border-muted-foreground';
    }
  };

  const getClearanceColor = (level: string) => {
    switch (level) {
      case 'OMEGA':
        return 'bg-primary border-primary';
      case 'SYSTEM':
        return 'bg-threat-critical border-threat-critical';
      case 'ALPHA':
        return 'bg-threat-high border-threat-high';
      case 'BETA':
        return 'bg-threat-medium border-threat-medium';
      case 'GAMMA':
      case 'DELTA':
        return 'bg-threat-low border-threat-low';
      case 'NONE':
        return 'bg-muted border-muted-foreground';
      default:
        return 'bg-secondary border-secondary';
    }
  };

  const failedAttempts = accessLogs.filter(log => log.status === "DENIED" || log.status === "BLOCKED").length;
  const successfulAccess = accessLogs.filter(log => log.status === "SUCCESS").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-terminal text-2xl font-bold text-foreground tracking-wider">
            SYSTEM ACCESS LOGS
          </h2>
          <p className="text-muted-foreground text-sm font-mono mt-1">
            Real-time security monitoring - All access attempts logged
          </p>
        </div>
        <div className="text-right font-terminal text-xs text-muted-foreground">
          <div>TOTAL ENTRIES: {accessLogs.length}</div>
          <div>SECURITY LEVEL: MAXIMUM</div>
        </div>
      </div>

      {/* Security Summary */}
      <Card className="bg-gradient-data border-border">
        <CardHeader>
          <h3 className="font-terminal text-lg font-bold text-foreground tracking-wider">
            SECURITY OVERVIEW
          </h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="font-terminal text-2xl font-bold text-status-neutralized">
                {successfulAccess}
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                AUTHORIZED ACCESS
              </div>
            </div>
            <div className="text-center">
              <div className="font-terminal text-2xl font-bold text-status-eliminated">
                {failedAttempts}
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                BLOCKED ATTEMPTS
              </div>
            </div>
            <div className="text-center">
              <div className="font-terminal text-2xl font-bold text-primary">
                {Math.round((successfulAccess / accessLogs.length) * 100)}%
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                SUCCESS RATE
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Access Log Entries */}
      <div className="space-y-3">
        {accessLogs.map((log, index) => (
          <Card key={index} className="bg-card border-border hover:border-primary/30 transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <div className="font-terminal text-xs text-muted-foreground tracking-wider">
                      TIMESTAMP
                    </div>
                    <div className="font-mono text-sm text-foreground">
                      {log.timestamp}
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-terminal text-xs text-muted-foreground tracking-wider">
                      USER / IP
                    </div>
                    <div className="font-mono text-sm text-foreground">
                      {log.user}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      {log.ip}
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-terminal text-xs text-muted-foreground tracking-wider">
                      LOCATION
                    </div>
                    <div className="font-mono text-sm text-foreground">
                      {log.location}
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-terminal text-xs text-muted-foreground tracking-wider">
                      ACTION
                    </div>
                    <div className="font-mono text-sm text-foreground">
                      {log.action}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <Badge 
                    variant="outline"
                    className={`font-terminal text-xs font-bold tracking-wider ${getStatusColor(log.status)}`}
                  >
                    {log.status}
                  </Badge>
                  <Badge 
                    variant="outline"
                    className={`font-terminal text-xs font-bold tracking-wider ${getClearanceColor(log.clearanceLevel)}`}
                  >
                    {log.clearanceLevel}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <div className="inline-block bg-card border border-border rounded-lg p-6">
          <p className="font-terminal text-sm text-muted-foreground tracking-wider">
            SECURITY PROTOCOL: ACTIVE MONITORING
            <br />
            ALL UNAUTHORIZED ATTEMPTS LOGGED AND TRACED
            <br />
            INTRUSION DETECTION: MAXIMUM SENSITIVITY
          </p>
        </div>
      </div>
    </div>
  );
}
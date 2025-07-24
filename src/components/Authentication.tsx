import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AuthenticationProps {
  onAuthenticated: () => void;
}

export function Authentication({ onAuthenticated }: AuthenticationProps) {
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [isAttempting, setIsAttempting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAttempting(true);
    
    // Simulate processing delay
    setTimeout(() => {
      if (password === "Incred1ble") {
        onAuthenticated();
      } else {
        setShowError(true);
        setPassword("");
        setTimeout(() => setShowError(false), 3000);
      }
      setIsAttempting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center scanlines">
      <div className="w-full max-w-md px-8">
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="w-16 h-16 bg-primary rounded-sm mx-auto mb-4 flex items-center justify-center">
              <span className="font-system text-primary-foreground font-black text-2xl">K</span>
            </div>
          </div>
          
          <h1 className="font-terminal text-4xl font-bold text-foreground tracking-widest mb-4">
            KRONOS SYSTEM
          </h1>
          <h2 className="font-terminal text-xl text-primary tracking-[0.3em] mb-2">
            ACCESS TERMINAL
          </h2>
          <div className="font-mono text-xs text-muted-foreground tracking-wider">
            CLASSIFICATION LEVEL: TOP SECRET
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-terminal text-sm text-muted-foreground mb-2 tracking-wider">
              AUTHORIZATION CODE
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="terminal-input text-center text-lg tracking-[0.2em] h-12"
              placeholder="••••••••••"
              disabled={isAttempting}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-terminal text-lg tracking-widest h-12 transition-all duration-300"
            disabled={isAttempting}
          >
            {isAttempting ? "VERIFYING..." : "AUTHENTICATE"}
          </Button>
        </form>

        {showError && (
          <div className="mt-6 text-center">
            <div 
              className="access-denied"
              data-text="ACCESS DENIED"
            >
              ACCESS DENIED
            </div>
            <div className="font-mono text-xs text-muted-foreground mt-2 tracking-wider">
              INVALID AUTHORIZATION CODE
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="font-mono text-xs text-muted-foreground space-y-1">
            <div>SYNDROME INDUSTRIES - RESTRICTED ACCESS</div>
            <div>UNAUTHORIZED ENTRY PROHIBITED</div>
            <div className="text-primary">ALL ATTEMPTS LOGGED</div>
          </div>
        </div>
      </div>
    </div>
  );
}
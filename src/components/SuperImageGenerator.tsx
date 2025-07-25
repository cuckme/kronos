import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RunwareService } from "@/services/runwareService";
import { toast } from "sonner";
import { SuperData } from "@/data/superData";

interface SuperImageGeneratorProps {
  onImagesGenerated: (updatedSupers: SuperData[]) => void;
  supers: SuperData[];
}

export function SuperImageGenerator({ onImagesGenerated, supers }: SuperImageGeneratorProps) {
  const [apiKey, setApiKey] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentSuper, setCurrentSuper] = useState<string>("");

  const generatePromptForSuper = (superData: SuperData): string => {
    const prompts: Record<string, string> = {
      "Psycwave": "Professional portrait of a superhero with telekinetic powers, glowing blue energy around hands, intense focused eyes, futuristic costume, digital art style, high quality",
      "Everseer": "Professional portrait of a precognitive superhero, mystical third eye symbol, flowing ethereal robes, time distortion effects, cosmic background, digital art style",
      "Blazestone": "Professional portrait of a fire-based superhero woman, flame effects, red and orange costume, confident expression, volcanic background, digital art style",
      "Dynaguy": "Professional portrait of a super strong male superhero, cape flowing, muscular build, classic superhero costume, determined expression, city background, digital art style",
      "Stormicide": "Professional portrait of a weather-controlling superhero, lightning effects, stormy background, wind-blown hair, dramatic lighting, digital art style",
      "Gazerbeam": "Professional portrait of a laser vision superhero, glowing red eyes, sleek black costume, confident pose, futuristic background, digital art style",
      "Gamma Jack": "Professional portrait of a radiation-powered superhero, green energy glow, hazmat-inspired costume, nuclear symbols, industrial background, digital art style",
      "Phylange": "Professional portrait of an insectoid superhero, compound eyes, chitinous armor, hive-mind technology, biomechanical design, digital art style",
      "Hypershock": "Professional portrait of an electric superhero, lightning bolts, blue and white costume, energy crackling, technological background, digital art style",
      "Mr. Incredible": "Professional portrait of a super strong blonde superhero in red costume with black mask, confident smile, heroic pose, city background, digital art style"
    };

    return prompts[superData.codename] || `Professional portrait of a superhero with ${superData.powers.toLowerCase()}, heroic pose, dramatic lighting, digital art style`;
  };

  const generateAllImages = async () => {
    if (!apiKey) {
      toast.error("Please enter your Runware API key");
      return;
    }

    setIsGenerating(true);
    const runware = new RunwareService(apiKey);
    const updatedSupers = [...supers];

    try {
      for (let i = 0; i < supers.length; i++) {
        const superData = supers[i];
        setCurrentSuper(superData.codename);
        
        const prompt = generatePromptForSuper(superData);
        
        try {
          const result = await runware.generateImage({
            positivePrompt: prompt,
            width: 512,
            height: 512,
            numberResults: 1,
            outputFormat: "WEBP"
          });

          updatedSupers[i] = {
            ...superData,
            profileImage: result.imageURL
          };

          toast.success(`Generated image for ${superData.codename}`);
        } catch (error) {
          console.error(`Failed to generate image for ${superData.codename}:`, error);
          toast.error(`Failed to generate image for ${superData.codename}`);
        }
      }

      onImagesGenerated(updatedSupers);
      toast.success("All Super images generated successfully!");
      
    } catch (error) {
      console.error("Error generating images:", error);
      toast.error("Failed to generate images. Please check your API key.");
    } finally {
      setIsGenerating(false);
      setCurrentSuper("");
    }
  };

  return (
    <Card className="mb-6 bg-card border-border">
      <CardHeader>
        <CardTitle className="font-data text-lg text-foreground tracking-wide">
          GENERATE SUPER PORTRAITS
        </CardTitle>
        <p className="text-muted-foreground text-sm font-mono">
          Generate AI-created portraits for each eliminated Super using Runware API
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-data text-primary tracking-wider">
            RUNWARE API KEY
          </label>
          <Input
            type="password"
            placeholder="Enter your Runware API key..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="font-mono"
          />
          <p className="text-xs text-muted-foreground">
            Get your API key from{" "}
            <a 
              href="https://runware.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              runware.ai
            </a>
          </p>
        </div>
        
        <Button 
          onClick={generateAllImages}
          disabled={!apiKey || isGenerating}
          className="w-full font-data tracking-wider"
        >
          {isGenerating 
            ? `GENERATING: ${currentSuper}...` 
            : "GENERATE ALL SUPER IMAGES"
          }
        </Button>
      </CardContent>
    </Card>
  );
}
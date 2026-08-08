"use client"

import { Button } from "./button";
import { technologies } from "@/data/technologies";
import  TechStack  from "@/components/ui/hero/TechStack";
import { useState } from "react";

export default function Accordion() {
  const result = Object.groupBy(
    technologies,
    ({ category }) => category
  );
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(result)[0]
  ); 

  return (
    
    <div className="flex flex-col">
      <div className="flex justify-start sm:justify-center">
        {Object.entries(result).map(([category]) => (
          <Button 
          key={category} 
          onClick={() => setActiveCategory(category)}
          size="lg"
          variant={ activeCategory === category ? "primary" : "secondary"}>
            {category}
          </Button>
        ))}
      </div>

        <div className="overflow-x-auto">
          <TechStack
            technologies={result[activeCategory]!}
            showLabels={true}
            labelPosition="right"
            variant="accordion"
          />
        </div>
    </div>
  );
}
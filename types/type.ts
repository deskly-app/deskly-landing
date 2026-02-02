import React from "react";

export interface FeatureItem {
  title: string;
  subtitle: string;
}

export interface PainPointSectionProps {
  painPoint: string;
  title: string;
  description: string;
  solutionTitle: string;
  imageSrc: string;
  reversed?: boolean;
}

export interface GridFeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface FeatureGridProps {
  id?: string;
  badge: string;
  title: string;
  description: string;
  features: GridFeatureItem[];
}

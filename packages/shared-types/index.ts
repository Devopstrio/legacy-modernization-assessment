export enum ModernizationStrategy {
  REHOST = "REHOST",
  REPLATFORM = "REPLATFORM",
  REFACTOR = "REFACTOR",
  RETIRE = "RETIRE",
  RETAIN = "RETAIN",
  REPLACE = "REPLACE"
}

export enum ReadinessLevel {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  CLOUD_NATIVE = "CLOUD_NATIVE"
}

export interface ApplicationProfile {
  id: string;
  name: string;
  category: string;
  technicalDebtScore: number;
  businessValueScore: number;
  readiness: ReadinessLevel;
  recommendedStrategy: ModernizationStrategy;
  dependencies: string[];
  lastAssessed: string;
}

export interface AssessmentResult {
  applicationId: string;
  readinessScores: {
    infrastructure: number;
    data: number;
    application: number;
    security: number;
  };
  gaps: string[];
  estimatedMigrationEffort: "LOW" | "MEDIUM" | "HIGH";
  estimatedCostSaving: number;
}

export interface RoadmapWave {
  id: string;
  name: string;
  description: string;
  applicationIds: string[];
  startDate: string;
  endDate: string;
}

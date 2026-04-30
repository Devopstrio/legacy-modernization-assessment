# Architecture & Assessment Diagrams

## 11. Multi-Cloud Modernization Topology (Detailed)
*How the platform orchestrates assessment across AWS, Azure, and GCP.*

```mermaid
graph TD
    subgraph "Assessment Control Plane"
        Portal[Transformation Hub]
        Engine[Assessment Engine]
        DB[Portfolio Metastore]
    end
    subgraph "Legacy Infrastructure"
        VMWare[On-Prem VMWare]
        Mainframe[Mainframe / AS400]
    end
    subgraph "Cloud Targets"
        AWS[AWS: EKS / Lambda]
        Azure[Azure: AKS / Functions]
        GCP[GCP: GKE / Cloud Run]
    end
    Portal --> Engine
    Engine --> VMWare
    Engine --> Mainframe
    Engine --> AWS
    Engine --> Azure
    Engine --> GCP
    DB --> Engine
```

## 13. "Technical Debt" scoring logic
```mermaid
graph LR
    Code[Code Complexity] --> Score[Debt Index]
    EoL[End-of-Life OS/DB] --> Score
    Security[Vulnerability Count] --> Score
    Ops[Manual Intervention %] --> Score
    Score --> Grade[Final Debt Grade: D-]
```

## 20. Migration Wave Execution Pipeline
```mermaid
stateDiagram-v2
    Discovery --> Triage: Portfolio Mapping
    Triage --> Assessment: 6R Classification
    Assessment --> Wave_Planning: Group by Dependencies
    Wave_Planning --> Pilot: Small Sample Migration
    Pilot --> Success: Validate Patterns
    Success --> Industrialise: Scale Waves
```

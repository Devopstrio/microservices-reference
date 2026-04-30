# Architecture & Pattern Diagrams

## 11. Domain-Driven Bounded Contexts (Detailed)
*Defining service boundaries and shared kernels.*

```mermaid
graph TD
    subgraph "Identity Bounded Context"
        User[User Aggregate]
        Auth[Auth Service]
    end
    subgraph "Order Bounded Context"
        Order[Order Aggregate]
        Saga[Saga Orchestrator]
    end
    subgraph "Payment Bounded Context"
        Pay[Payment Aggregate]
        Gateway[Bank Gateway]
    end
    subgraph "Inventory Bounded Context"
        Stock[Stock Aggregate]
        Warehouse[Warehouse Service]
    end

    User -->|Shared Kernel| Auth
    Order -->|Async Event| Pay
    Order -->|Async Event| Stock
```

## 13. "Choreographed" vs "Orchestrated" Sagas
```mermaid
graph TD
    subgraph "Orchestration (Our Model)"
        O[Orchestrator] --> S1[Service A]
        S1 --> O
        O --> S2[Service B]
        S2 --> O
    end
    subgraph "Choreography"
        C1[Service A] -->|Event| C2[Service B]
        C2 -->|Event| C3[Service C]
    end
```

## 20. API Gateway Pattern (Cross-Cutting Concerns)
```mermaid
graph LR
    Client[Mobile/Web] --> Gate[API Gateway]
    subgraph "Gateway Logic"
        Auth[Authentication]
        Rate[Rate Limiting]
        Log[Logging]
        Res[Resilience]
    end
    Gate --> Auth
    Auth --> Rate
    Rate --> Log
    Log --> Res
    Res --> Backend[Microservices]
```

# Event-Driven & Observability Diagrams

## 31. Kafka Topic Topology
```mermaid
graph LR
    subgraph "Producers"
        OS[Order Service]
    end
    subgraph "Topics"
        T1[order.created]
        T2[payment.processed]
        T3[inventory.reserved]
    end
    subgraph "Consumers"
        PS[Payment Service]
        IS[Inventory Service]
        NS[Notification Service]
    end

    OS --> T1
    T1 --> PS
    PS --> T2
    T2 --> OS
    OS --> T3
    T3 --> IS
    T2 --> NS
```

## 34. Distributed Tracing Flow (mTLS / Headers)
```mermaid
graph LR
    Gate[Gateway] -->|x-trace-id: 999| S1[Service A]
    S1 -->|x-trace-id: 999| S2[Service B]
    S2 -->|x-trace-id: 999| S3[Service C]
    Note right of Gate: Header Propagation Logic
```

## 40. "Dead Letter Queue" (DLQ) Pattern
```mermaid
graph LR
    Msg[Event Message] --> Consumer[Service Consumer]
    Consumer -->|Retry 3x Failed| DLQ[Dead Letter Topic]
    DLQ --> Alert[Notify Operations]
    Alert --> Manual[Manual Replay / Correction]
```

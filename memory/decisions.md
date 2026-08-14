# Decisions Log — Demo 1

Track decisions made while building the AI Email Generator.

Use this format:

```text
Decision:
Reason:
Date:
Impact:
```

---

## Decision Log

### D-001 — Product scope

**Decision:**  
Build a frontend email drafting tool with form inputs, tone selection, generation, and copy.

**Reason:**  
Matches the specification and keeps the classroom focus on specification-driven development.

**Date:**  
Session preparation

**Impact:**  
Avoids SMTP, auth, and CRM complexity.

---

### D-002 — Stack choice

**Decision:**  
Use React + Tailwind CSS with a simple frontend architecture.

**Reason:**  
Supports fast development and a clean UI for live demonstration.

**Date:**  
Session preparation

**Impact:**  
Students can focus on context and requirements instead of infrastructure.

---

### D-003 — Scope control

**Decision:**  
Do not add features beyond the written specification.

**Reason:**  
Demonstrates that requirements determine implementation.

**Date:**  
Session preparation

**Impact:**  
Makes acceptance criteria meaningful during basic validation.

---

### D-004 — Persistence policy

**Decision:**  
If any CRUD or persistence is needed, mock it with a local text/JSON file inside `demo_1/`.

**Reason:**  
Avoids remote database setup during classroom demos.

**Date:**  
Session preparation

**Impact:**  
Keeps Demo 1 lightweight and self-contained.

---

## Template for Live Session Updates

```text
### D-00X — [Short title]

Decision:
Reason:
Date:
Impact:
```

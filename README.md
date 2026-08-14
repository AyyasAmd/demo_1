# Gmail Generator — Specification-Driven Development

## Application

**AI Email Generator**

## Purpose

Show students that AI produces better results when we provide:

- clear context
- defined requirements
- constraints
- expected outputs

## Teaching Objective

Demonstrate how **context engineering** and a clear **specification** allow AI coding assistants to generate better software than a vague one-line request.

## Workflow

```text
Idea
  ↓
Specification
  ↓
Context Files
  ↓
Build Prompt
  ↓
Cursor Generates Application
  ↓
Check Requirements
```

## Folder Guide

| Folder | Role |
| --- | --- |
| `context/` | AI role, rules, standards, product context, stack preferences |
| `specs/` | Product requirements and acceptance criteria |
| `prompts/` | Cursor build prompt |
| `evaluations/` | Checklists, quality checks, gold examples |
| `memory/` | Demo purpose and decisions for this demo only |

## How to Run This Demo Live

1. Open the `demo_1/` folder in Cursor (or open this workspace and work only inside `demo_1/`).
2. Walk students through:
   - `context/`
   - `specs/specification.md`
   - `prompts/build_prompt.md`
3. Paste the build prompt into Cursor.
4. Require a summary of understanding and an implementation plan before coding.
5. Generate the application.
6. Validate with:
   - `evaluations/acceptance_criteria.md`
   - `evaluations/quality_check.md`
   - `evaluations/gold_examples/good_email_output.md`

## Optional Contrast

Ask for the same app with a weak prompt:

> “Build me an email generator.”

Then compare that result to the specification-driven build.

## Success Signal

Students can explain why clear context + requirements improved scope control, tone handling, and validation.

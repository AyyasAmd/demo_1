# Specification: AI Email Generator

## Product

**AI Email Generator**

## Problem

Users spend too much time writing professional emails.

## Purpose

Help users create professional emails quickly from structured inputs.

## Inputs

| Input | Description | Required |
| --- | --- | --- |
| Email purpose | Why the email is being written | Yes |
| Recipient | Who the email is for | Yes |
| Tone | Desired communication style | Yes |
| Key points | Important facts or requests to include | Yes |

### Suggested Tone Options

- Professional
- Friendly
- Formal
- Concise

## Output

A professional email draft that:

- matches the selected tone
- includes the key points
- is readable and ready to copy

## Features

1. User input form
2. Tone selection
3. AI generated email
4. Copy functionality

## Acceptance Criteria

1. User can enter email details.
2. User can generate an email.
3. Generated email matches selected tone.
4. Output is readable.
5. User can copy result.

## Non-Goals

- Sending email via SMTP
- Contact management
- Multi-user accounts
- Unnecessary dashboard features

## Success Definition

A user can go from blank form to a copyable, tone-appropriate email draft without confusion.

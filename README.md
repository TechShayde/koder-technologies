# Koder Technologies

Koder Technologies is a software development portfolio and company website showcasing mobile applications, AI-powered product concepts, backend systems, and cloud-focused engineering work.

This repository contains the public-facing Koder Technologies website built with **React** and **Vite**.

## Overview

The site highlights software projects and areas of focus including:

- **onTime** — a SwiftUI scheduling and productivity application with recurring schedules, notifications, editing, and theme support.
- **Barcode Toolkit** — a utility application centered around Code 128 barcode generation, saved stacks, slots, docks, and calculations.
- **Context Canvas** — an AI-assisted concept for generating contextual visual responses using an LLM and image-generation model.
- **Local AI Lab** — experimentation with local inference, Apple Silicon, rented GPU infrastructure, model deployment, and AI workflows.
- **Reader Engine** — ebook parsing, rendering, and lower-level systems experimentation.
- **Connected Services** — API and backend development using modern server-side frameworks and databases.

Projects that are still in development are identified as **Concept**, **Prototype**, **R&D**, or **Portfolio** work rather than being presented as released commercial products.

## Tech Stack

### Frontend

- React
- Vite
- JavaScript / JSX
- CSS
- Lucide React

### Broader Koder Technologies Stack

The portfolio also reflects work and experimentation with:

- Swift / SwiftUI
- React Native
- Java / Spring Boot
- C# / ASP.NET Core
- Node.js
- Python
- Rust
- C / C++
- PostgreSQL / SQL
- Docker
- Azure
- AWS
- PyTorch
- Local and cloud-based AI inference

## Getting Started

### Prerequisites

Install a current version of **Node.js** and **npm**.

### Installation

Clone the repository and install the dependencies:

```bash
git clone <your-repository-url>
cd koder-technologies
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build in the `dist/` directory.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm test
```

Runs the included Node-based regression tests.

## Tests

The project includes lightweight regression tests that check important parts of the site, including:

- the local GitHub SVG icon implementation
- primary navigation targets
- featured project content
- accessibility labels
- the contact call-to-action
- protection against the previous unsupported `Github` icon import

The GitHub footer icon is implemented as a local SVG component rather than relying on a specific `lucide-react` export.

## Project Structure

```text
koder-technologies/
├── index.html
├── package.json
├── README.md
├── tests/
│   └── app-regression.test.mjs
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```

## Deployment

The site is well suited for static deployment platforms such as **Cloudflare Pages**.

Typical production settings:

```text
Framework preset: Vite
Build command: npm run build
Output directory: dist
```

A GitHub-connected deployment can automatically rebuild and publish the site whenever changes are pushed to the `main` branch.

## Before Production

Before publishing the website publicly:

- replace placeholder contact information with the official Koder Technologies email
- replace generic GitHub links with the official organization or developer profile
- add live demos, screenshots, or repository links for public projects
- verify project status labels as products move from concept to release
- configure the production domain and analytics if required

## Development Workflow

A typical update workflow is:

```bash
git add .
git commit -m "Describe the website update"
git push
```

When connected to a deployment provider, the push can automatically trigger a new production deployment.

## About Koder Technologies

Koder Technologies focuses on building practical software across **mobile development, AI-enabled applications, backend services, APIs, and cloud infrastructure**. The portfolio is designed to document both completed engineering work and products that are actively being explored or developed.

---

**Koder Technologies**  
Software engineered around useful ideas.

## Design direction

The site uses a clean, professional light theme with white and soft-gray surfaces, navy/blue accents, restrained shadows, a dark engineering preview panel, and an animated technology marquee for visual movement.


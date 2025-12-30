# MIBCS Club Website

## About
This is the official website of the MIBCS Tech Club.  
It provides information about the club, projects, events, members, and allows users to register for events. The website also includes a dark/light theme toggle for better user experience.

---

## Tech Stack

- **Frontend**
  - React (Vite)
  - Material UI (MUI) for components and styling
  - Tailwind CSS for utility-first styling (optional)
  - JavaScript (JSX)
---

## UI Components

- MUI components are used for most of the UI elements.
- **Shadcn** can be optionally installed by team members if they want to experiment with pre-styled components, but the main project uses MUI to avoid Node/Tailwind CLI issues.

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd frontend
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
    ```bash
   npm run dev
## Branching and Collaboration
The frontend lead will handle merging branches into the development branch to ensure consistency.
Reusable components should be added in the src/components/ directory.

Each member should create their own branch for the component or page they are working on:

```bash
   git checkout -b <feature-name>


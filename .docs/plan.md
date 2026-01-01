# Plan: Portfolio Transformation to "Backend Developer"

## Objective
Transform the portfolio to highlight Python/FastAPI expertise, and product ownership, specifically targeting the Rippling Backend Software Engineer role. with other expertise like Full stack developer, Backend developer..etc.

## Phase 1: Content & Data Update
**File:** `src/data/constants.js`

1.  **Hero Section:**
    *   Update `Bio.roles`: ["Backend Developer", "Python Developer", "Full Stack Engineer", "Travel Tech Innovator"].
2.  **About Section:**
    *   Update `Bio.description` to the new narrative emphasizing "Backend Developer", "High-volume aviation integration", and "Product Ownership" with Good creative problem solving skills.
3.  **Skills Section:**
    *   Update `mainSkills`:
        *   Add `fastapi.png` (mapped to "FastAPI").
        *   Reorder to prioritize: Python, FastAPI, Go, Docker.
        *   Ensure backend skills are prominent.
4.  **Experience Section:**
    *   Reorder `experiences`: Hudson Data (1st), Sureify (2nd), Blackbuck (3rd).
    *   Add "Hudson Data" entry with details on SeatCash, Cache Layer, and Flowx.
5.  **Projects Section:**
    *   Add "PreQua" as the first project.
    *   Consolidate 3 "KEOP" entries into one "KEOP (Polyglot Architecture)" entry.
6.  **Certificates Section:**
    *   Update `certificates` array structure to support image paths instead of just GDrive links (preparation for Phase 2).

## Phase 2: Component & UI Overhaul

### 1. Skills Section
**Files:** `src/components/Skills/index.js`, `src/components/Skills/SkillsStyle.js`
*   **Goal:** Remove `SkillsCarousel` and implement a **Responsive Grid** layout.
*   **Implementation:**
    *   Replace the carousel logic with a flexbox or grid container.
    *   Ensure all skills in a category are visible simultaneously.

### 2. Projects Section (Hover-to-Play)
**Files:** `src/components/Cards/ProjectCards/ProjectCards.jsx`, `src/components/Cards/ProjectCards/ProjectCardsStyle.js`
*   **Goal:** Enable "Hover-to-Play" for the PreQua project.
*   **Implementation:**
    *   Add a conditional check: if `project.video` exists, render a `<video>` tag that is hidden by default and shown/played on hover.
    *   Fallback to `project.image` if no video is provided.

### 3. Certificates Section (Gallery + Lightbox)
**Files:** `src/components/Certificates/index.js`, `src/components/Certificates/CertificateStyle.js`
*   **Goal:** Convert text list to a Card Gallery with a Modal.
*   **Implementation:**
    *   Create a grid of certificate thumbnails.
    *   Implement a click handler to open the selected certificate in a Modal (reusing or adapting the logic from `ProjectDetails` or creating a simple Lightbox).

## Phase 3: Asset Placeholder Setup
Since I cannot generate the specific custom videos or retrieve the certificate images from GDrive, I will:
1.  Use `fastapi.png` placeholder (or user provided).
2.  Use a placeholder path for `Prequa Intro.mp4`.
3.  Use placeholder images for certificates.

## Questions & Clarifications
1.  **Video Asset:** Do you have `Prequa Intro.mp4` ready? I will assume it will be placed in `public/assets/projects/`. --> Yes it was added there
2.  **Certificate Images:** I cannot convert PDFs from GDrive. Please provide the JPG/PNG versions of your certificates in `public/assets/certificates/`. I will set up the code to look for them there.  --> Yes i added them 
3.  **FastAPI Logo:** Do you have `fastapi.png`? I will assume it will be in `public/assets/Skillimages/`. --> Yes i had the image present in that folder

## Execution Steps
1.  Approve this plan.
2.  I will perform the Data Updates (Phase 1).
3.  I will implement the UI changes (Phase 2).
4.  You can verify and drop in the assets.

# Portfolio Upgrade Specifications: Rippling Role Alignment

## Executive Summary
**Goal:** Transform the portfolio from a generalist "Student/Intern" profile into a "Professional Backend & Full Stack Engineer" profile.
**Target Role:** Backend Software Engineer - Travel Integrations (Rippling).
**Key Focus:** Highlight Aviation/Travel tech experience, Python/FastAPI skills, and Product Ownership.

---

## 1. Hero Section (Introduction)
**Status:** Update Required
**Current State:** Rotating text shows "Full Stack Developer", "MERN Stack Developer".
**Requirement:** Update the text rotation array to prioritize backend skills.
**New Text Array:**
1.  "Backend Architect"
2.  "Python Developer"
3.  "Full Stack Engineer"
4.  "Travel Tech Innovator"

---

## 2. Skills Section (Layout & Content Overhaul)
**Status:** Major Update Required
**Current Issue:** The carousel shows only one skill at a time. Recruiters cannot see the full stack at a glance.
**Requirements:**
1.  **Layout Change:** Replace the single-item carousel with a **Responsive Grid** or **Continuous Marquee**. All key skills must be visible simultaneously.
2.  **Add New Asset:** Import `fastapi.png` and add it to the backend skills list.
3.  **Hierarchy:** Ensure **Python**, **FastAPI**, **Go**, and **Docker** are displayed prominently.

---

## 3. Experience Section (Reordering & Data Entry)
**Status:** Content Update
**Current Issue:** Shows "Mentorship Intern" first. "Sureify" is second. Missing "Hudson Data".
**Requirements:**
1.  **Reorder Timeline:**
    * 1. Hudson Data (Top/Current)
    * 2. Sureify Labs
    * 3. Blackbuck Engineers
2.  **Add "Hudson Data" Entry:**
    * **Role:** Software Engineer
    * **Date:** May 2024 – Present
    * **Description:**
        * **SeatCash (Aviation Integrations):** Engineered a scalable multi-VM infrastructure to **ingest and normalize** real-time flight data from external providers into BigQuery.
        * **High-Performance API:** Built a robust **Cache Layer** (Redis) to deduplicate search results, reducing API latency for international markets.
        * **Flowx (SaaS):** Led greenfield R&D using **Firebase Cloud Functions** (Serverless) and **Agentic AI** tools to accelerate integration testing.

---

## 4. Projects Section (Feature Highlight & Consolidation)
**Status:** Major Visual Update
**Current Issue:** Multiple KEOP cards clutter the view. PreQua is missing.
**Requirements:**

### A. New "Star" Project: PreQua
* **Position:** #1 Slot (First item in "All" and "Web App's").
* **Visual Feature:** Implement **"Hover-to-Play"**. Use the `Prequa Intro.mp4` video. When the user hovers over the card, the video should silently auto-play to show the UI in action.
* **Title:** PreQua - Vendor Management System
* **Tech Stack:** React, TypeScript, FastAPI, PostgreSQL, GCP.
* **Description:** "An end-to-end platform digitizing construction pre-qualification. Features a **Dynamic Form Builder**, **AI-Driven Risk Scoring**, and **Google Calendar Integration** for automated deadlines. Replaced manual spreadsheets with a centralized dashboard.".

### B. Consolidate "KEOP"
* **Action:** Merge the 3 separate KEOP cards (Node, .NET, Spring) into **ONE** single card.
* **Title:** KEOP (Polyglot Architecture)
* **Description:** "A unified frontend integrated with three distinct backend implementations (Node.js, .NET, Java) to demonstrate architectural flexibility and API consistency."

---

## 5. Certificates Section (UI Improvement)
**Status:** UI Redesign
**Current Issue:** Certificates are displayed as simple text buttons. Low engagement.
**Requirements:**
1.  **Convert Assets:** Convert PDF certificates to high-res JPG/PNG images.
2.  **New Layout:** Implement a **Card Gallery** (Grid of thumbnails).
3.  **Interaction:** Add a **Lightbox/Modal**. Clicking a thumbnail should open the certificate in a full-screen popup on the same page.

---

## 6. About Me Section (Narrative Refinement)
**Status:** Text Update
**Requirement:** Rewrite bio to align with the Rippling JD.
**New Text:**
"I am a Full Stack Engineer specialized in **Backend Architecture** and **Data Engineering**. With experience building high-volume **aviation integration platforms** and scalable SaaS products, I excel at using **Python (FastAPI)** and **Go** to solve complex data normalization challenges. I am passionate about Product Ownership—building tools like **PreQua** that solve real user pain points through intelligent design and automation."